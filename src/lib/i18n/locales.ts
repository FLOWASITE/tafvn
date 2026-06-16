export const LOCALES = ["vi", "en", "ja", "ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "vi";

export const LOCALE_NAMES: Record<Locale, { native: string; flag: string; label: string }> = {
  vi: { native: "Tiếng Việt", flag: "🇻🇳", label: "VI" },
  en: { native: "English", flag: "🇬🇧", label: "EN" },
  ja: { native: "日本語", flag: "🇯🇵", label: "JA" },
  ko: { native: "한국어", flag: "🇰🇷", label: "KO" },
};

export const TARGET_LANG_NAME: Record<Exclude<Locale, "vi">, string> = {
  en: "English",
  ja: "Japanese",
  ko: "Korean",
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}
