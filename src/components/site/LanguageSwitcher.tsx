import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n/locales";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-background/60 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors ${
          compact ? "px-2 py-1 text-xs" : "px-2.5 py-1.5 text-[0.78rem]"
        }`}
        aria-label={t("Chọn ngôn ngữ")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={13} className="text-brand-red" />
        <span className="font-medium tracking-wide">{LOCALE_NAMES[locale].label}</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1.5 w-44 overflow-hidden rounded-[4px] border border-border bg-background shadow-[var(--shadow-elegant)] z-50"
        >
          {LOCALES.map((l: Locale) => (
            <button
              key={l}
              type="button"
              role="option"
              aria-selected={l === locale}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-sm text-left hover:bg-cream transition-colors ${
                l === locale ? "text-brand-red-ink font-medium" : "text-foreground/80"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{LOCALE_NAMES[l].flag}</span>
                <span>{LOCALE_NAMES[l].native}</span>
              </span>
              {l === locale && <Check size={14} className="text-brand-red" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
