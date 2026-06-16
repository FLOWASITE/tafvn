import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";
import { translate } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (text: string) => string;
};

const LocaleContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (s) => s,
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

  useEffect(() => {
    const l = readInitialLocale();
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const setLocale = useCallback((l: Locale) => {
    persistLocale(l);
    setLocaleState(l);
    document.documentElement.lang = l;
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (l === DEFAULT_LOCALE) url.searchParams.delete("lang");
      else url.searchParams.set("lang", l);
      window.history.replaceState(null, "", url.toString());
    }
  }, []);

  const t = useCallback((text: string) => translate(text, locale), [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  return useContext(LocaleContext).t;
}
