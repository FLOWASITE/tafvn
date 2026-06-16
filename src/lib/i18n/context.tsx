import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";
import { translateBatch } from "./translate.functions";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  translating: boolean;
};

const LocaleContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  translating: false,
});

const COOKIE = "taf_lang";
const STORAGE = "taf_lang";

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (isLocale(q)) return q;
  try {
    const ls = window.localStorage.getItem(STORAGE);
    if (isLocale(ls)) return ls;
  } catch {
    /* ignore */
  }
  const m = document.cookie.match(/(?:^|;\s*)taf_lang=([^;]+)/);
  if (m && isLocale(m[1])) return m[1];
  return DEFAULT_LOCALE;
}

function persistLocale(l: Locale) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE, l);
  } catch {
    /* ignore */
  }
  document.cookie = `${COOKIE}=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [translating, setTranslating] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lastKey = useRef<string>("");

  // Khởi tạo từ URL/cookie sau hydration
  useEffect(() => {
    const l = readInitialLocale();
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const setLocale = useCallback((l: Locale) => {
    persistLocale(l);
    setLocaleState(l);
    document.documentElement.lang = l;
    // Cập nhật URL ?lang= để chia sẻ được
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (l === DEFAULT_LOCALE) url.searchParams.delete("lang");
      else url.searchParams.set("lang", l);
      window.history.replaceState(null, "", url.toString());
    }
  }, []);

  // Tự động dịch DOM khi locale != vi hoặc khi đổi route
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (locale === "vi") {
      // Trang vẫn render bằng source tiếng Việt → không cần dịch.
      // Nếu trước đó đã dịch, reload để khôi phục text gốc.
      if (lastKey.current && lastKey.current !== `vi|${pathname}`) {
        lastKey.current = `vi|${pathname}`;
        window.location.reload();
        return;
      }
      lastKey.current = `vi|${pathname}`;
      return;
    }

    const key = `${locale}|${pathname}`;
    if (lastKey.current === key) return;
    lastKey.current = key;

    let cancelled = false;
    const run = async () => {
      // Đợi nội dung route mount
      await new Promise((r) => setTimeout(r, 80));
      if (cancelled) return;

      const main = document.querySelector("main") ?? document.body;
      const skipTags = new Set([
        "SCRIPT",
        "STYLE",
        "CODE",
        "PRE",
        "NOSCRIPT",
        "SVG",
        "IFRAME",
        "INPUT",
        "TEXTAREA",
      ]);

      const nodes: Text[] = [];
      const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
          if (skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.isContentEditable) return NodeFilter.FILTER_REJECT;
          const raw = node.nodeValue ?? "";
          const t = raw.trim();
          if (t.length < 2) return NodeFilter.FILTER_REJECT;
          // bỏ qua thuần số/email/url
          if (/^[\d\s.,/:%+\-()]+$/.test(t)) return NodeFilter.FILTER_REJECT;
          if (/^https?:\/\//i.test(t)) return NodeFilter.FILTER_REJECT;
          if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(t)) return NodeFilter.FILTER_REJECT;
          // bỏ qua nếu đã đánh dấu là đã dịch lần này
          if (parent.getAttribute("data-trans-lang") === locale) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      let cur: Node | null;
      while ((cur = walker.nextNode())) nodes.push(cur as Text);

      // attributes dịch: title, alt, placeholder, aria-label
      const attrTargets: { el: Element; attr: string; value: string }[] = [];
      const attrEls = main.querySelectorAll(
        "[title],[alt],[placeholder],[aria-label]",
      );
      attrEls.forEach((el) => {
        if (el.closest("[data-no-translate]")) return;
        (["title", "alt", "placeholder", "aria-label"] as const).forEach((a) => {
          const v = el.getAttribute(a);
          if (!v) return;
          const t = v.trim();
          if (t.length < 2) return;
          if (/^[\d\s.,/:%+\-()]+$/.test(t)) return;
          if (el.getAttribute(`data-trans-${a}`) === locale) return;
          attrTargets.push({ el, attr: a, value: v });
        });
      });

      const allTexts = [
        ...nodes.map((n) => n.nodeValue ?? ""),
        ...attrTargets.map((a) => a.value),
      ];
      if (allTexts.length === 0) return;

      // Batch theo nhóm 60 để tránh request quá lớn
      setTranslating(true);
      try {
        const BATCH = 60;
        const out: string[] = [];
        for (let i = 0; i < allTexts.length; i += BATCH) {
          const slice = allTexts.slice(i, i + BATCH);
          // eslint-disable-next-line no-await-in-loop
          const res = await translateBatch({ data: { texts: slice, lang } });
          out.push(...res.translations);
          if (cancelled) return;
        }
        // Áp dụng
        nodes.forEach((n, i) => {
          const tr = out[i];
          if (tr && tr !== n.nodeValue) n.nodeValue = n.nodeValue!.replace(n.nodeValue!.trim(), tr);
          const p = n.parentElement;
          if (p) p.setAttribute("data-trans-lang", locale);
        });
        attrTargets.forEach((a, idx) => {
          const tr = out[nodes.length + idx];
          if (tr) a.el.setAttribute(a.attr, tr);
          a.el.setAttribute(`data-trans-${a.attr}`, locale);
        });
      } catch (e) {
        console.error("[i18n] translate failed", e);
      } finally {
        if (!cancelled) setTranslating(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [locale, pathname]);

  const value = useMemo(() => ({ locale, setLocale, translating }), [locale, setLocale, translating]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
