import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ElementType } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Calculator,
  Building2,
  Layers,
  Newspaper,
  BookOpen,
  MapPin,
  Info,
  Users,
} from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MAIN_MENU, type MenuItem } from "@/lib/site";
import { useT } from "@/lib/i18n/context";

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";
const EMAIL = "info@taf.vn";

// Icon cho từng nhóm dịch vụ trong megamenu (theo heading).
const CAT_ICONS: Record<string, ElementType> = {
  "Kiểm toán": ShieldCheck,
  "Kế toán": Calculator,
  "Thành lập doanh nghiệp": Building2,
  "Dịch vụ khác": Layers,
};

// Icon + mô tả ngắn cho dropdown đơn (Tài nguyên, Về chúng tôi).
const LINK_META: Record<string, { icon: ElementType; desc: string }> = {
  "/tin-tuc": { icon: Newspaper, desc: "Bài viết & cập nhật" },
  "/nghiep-vu": { icon: BookOpen, desc: "Kiến thức kế toán – thuế" },
  "/dia-ban": { icon: MapPin, desc: "Khu vực TAF phục vụ" },
  "/gioi-thieu": { icon: Info, desc: "Về hãng kiểm toán TAF" },
  "/doi-ngu": { icon: Users, desc: "Kiểm toán viên hành nghề" },
  "/lien-he": { icon: Mail, desc: "Gửi yêu cầu tư vấn" },
};

// Nội dung panel quảng bá cho dropdown dạng megamenu (Tài nguyên, Về chúng tôi).
const DROPDOWN_PROMO: Record<
  string,
  { eyebrow: string; title: string; desc: string; icon: ElementType }
> = {
  "Tài nguyên": {
    eyebrow: "Tài nguyên",
    title: "Tin tức & nghiệp vụ",
    desc: "Kiến thức và cập nhật pháp lý về kế toán – thuế – kiểm toán.",
    icon: BookOpen,
  },
  "Về chúng tôi": {
    eyebrow: "Về TAF",
    title: "Hãng kiểm toán độc lập",
    desc: "Đội ngũ, năng lực và mạng lưới phục vụ của TAF.",
    icon: Building2,
  },
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block border-b border-border/70 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-9 flex items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-primary-foreground/70">
            <Clock size={13} className="text-accent" />
            {t("Giờ làm việc: T2 – T7, 8:00 – 17:30")}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone size={13} className="text-accent" />
              <span className="font-medium tracking-wide">{HOTLINE_DISPLAY}</span>
            </a>
            <span className="h-3 w-px bg-primary-foreground/20" />
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail size={13} className="text-accent" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur transition-all duration-300 supports-[backdrop-filter]:bg-background/80 ${
          scrolled
            ? "border-border bg-background/95 shadow-[0_6px_24px_-16px_rgba(0,0,0,0.35)]"
            : "border-border/70 bg-background/85"
        }`}
      >
        {/* Chỉ vàng gradient mép trên */}
        <div
          aria-hidden
          className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        />
        <div
          className={`mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <Link to="/" className="flex items-center shrink-0" aria-label={t("TAF — Trang chủ")}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch h-full" aria-label={t("Điều hướng chính")}>
            {MAIN_MENU.map((item, i) => (
              <DesktopMenuItem
                key={item.label}
                item={item}
                alignRight={i >= MAIN_MENU.length - 1}
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Link
              to="/lien-he"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[3px] bg-gradient-to-r from-brand-red to-brand-red-ink px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/15 transition-all duration-300 hover:shadow-[0_10px_28px_-10px_color-mix(in_oklab,var(--color-brand-red)_70%,transparent)]"
            >
              {/* Vệt sáng quét */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative uppercase tracking-[0.12em] text-[0.78rem]">
                {t("Yêu cầu báo giá")}
              </span>
              <ChevronRight
                size={15}
                className="relative transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              className="p-2 -mr-2 text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label={t("Mở menu")}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="mx-auto max-w-6xl px-5 py-3 flex flex-col" aria-label={t("Điều hướng mobile")}>
              {MAIN_MENU.map((item) => (
                <MobileMenuItem
                  key={item.label}
                  item={item}
                  isOpen={expanded === item.label}
                  onToggle={() =>
                    setExpanded((cur) => (cur === item.label ? null : item.label))
                  }
                  onNavigate={() => setOpen(false)}
                />
              ))}
              <div className="mt-4 mb-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${HOTLINE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-4 py-3 text-sm rounded-[2px]"
                >
                  <Phone size={15} className="text-brand-red" /> {t("Gọi ngay")}
                </a>
                <Link
                  to="/lien-he"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-brand-red text-white rounded-[2px]"
                >
                  {t("Yêu cầu báo giá")}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

/* ---------- Desktop ---------- */

const triggerCls =
  "group/trigger relative inline-flex items-center gap-1 px-4 text-[0.92rem] text-foreground/75 hover:text-foreground transition-colors h-full";
const activeProps = {
  className: "active text-foreground font-medium",
};

function Underline() {
  return (
    <span className="pointer-events-none absolute left-4 right-4 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover/trigger:scale-x-100 group-[.active]/trigger:scale-x-100" />
  );
}

function DesktopMenuItem({ item, alignRight }: { item: MenuItem; alignRight?: boolean }) {
  const t = useT();
  const hasDropdown = !!(item.columns || item.links);

  if (!hasDropdown && item.to) {
    return (
      <div className="relative flex items-center">
        <Link to={item.to} className={triggerCls} activeProps={activeProps}>
          {t(item.label)}
          <Underline />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex items-center group">
      {item.to ? (
        <Link to={item.to} className={triggerCls} activeProps={activeProps}>
          {t(item.label)}
          <ChevronDown
            size={11}
            strokeWidth={1.25}
            className="ml-0.5 text-muted-foreground/45 transition-all duration-300 group-hover:translate-y-px group-hover:text-foreground/70"
          />
          <Underline />
        </Link>
      ) : (
        <button type="button" className={triggerCls} aria-haspopup="true">
          {t(item.label)}
          <ChevronDown
            size={11}
            strokeWidth={1.25}
            className="ml-0.5 text-muted-foreground/45 transition-all duration-300 group-hover:translate-y-px group-hover:text-foreground/70"
          />
          <Underline />
        </button>
      )}

      <div
        className={`absolute ${alignRight ? "right-0" : "left-0"} top-full pt-3 invisible translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100`}
      >
        {item.columns ? (
          <div className="flex w-[720px] overflow-hidden rounded-[6px] border border-border bg-background shadow-[var(--shadow-elegant)]">
            {/* Promo panel — có hoa văn lưới + vầng sáng vàng */}
            <div className="relative w-56 shrink-0 overflow-hidden bg-primary text-primary-foreground p-6 flex flex-col">
              {/* Lưới sổ cái */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              {/* Vầng sáng vàng */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 40%, transparent), transparent 70%)",
                }}
              />
              {/* Watermark chữ */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -right-2 font-display text-[5rem] leading-none text-primary-foreground/[0.06] select-none"
              >
                TAF
              </span>

              <div className="relative flex flex-col h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-accent/30 bg-white/5 text-accent">
                  <Layers size={19} strokeWidth={1.7} />
                </span>
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-accent">{t("Dịch vụ TAF")}</p>
                <p className="mt-1.5 font-display text-lg leading-snug">
                  {t("Kiểm toán, kế toán & tư vấn thuế")}
                </p>
                <span aria-hidden className="mt-3 block h-px w-10 bg-accent/60" />
                <p className="mt-3 text-xs text-primary-foreground/65 font-serif leading-relaxed">
                  {t("Giải pháp toàn diện cho doanh nghiệp Việt Nam và FDI.")}
                </p>

                <div className="mt-auto pt-5">
                  <a
                    href={`tel:${HOTLINE_TEL}`}
                    className="group/tel inline-flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-colors"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 text-accent group-hover/tel:bg-accent group-hover/tel:text-primary transition-colors">
                      <Phone size={13} />
                    </span>
                    <span className="text-[0.78rem]">
                      <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/50">
                        {t("Hotline / Zalo")}
                      </span>
                      <span className="font-medium tracking-wide">{HOTLINE_DISPLAY}</span>
                    </span>
                  </a>
                  {item.viewAll && (
                    <Link
                      to={item.viewAll.to}
                      className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-accent hover:gap-2.5 transition-all"
                    >
                      {t(item.viewAll.label)} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="flex-1 p-6 grid grid-cols-2 gap-x-7 gap-y-5">
              {item.columns.map((col) => {
                const Icon = CAT_ICONS[col.heading] ?? Layers;
                return (
                  <div key={col.heading}>
                    <p className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent-foreground mb-2.5">
                      <Icon size={14} className="text-brand-red" />
                      {t(col.heading)}
                    </p>
                    <ul className="space-y-0.5">
                      {col.links.map((l) => (
                        <li key={l.to}>
                          <Link
                            to={l.to}
                            className="group/sl relative flex items-center justify-between gap-2 rounded-[2px] -mx-2 pl-3 pr-2 py-1.5 text-[0.88rem] text-foreground/75 hover:bg-cream hover:text-brand-red-ink transition-colors"
                          >
                            <span
                              aria-hidden
                              className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-brand-red transition-all duration-200 group-hover/sl:h-4"
                            />
                            <span>{t(l.label)}</span>
                            <ChevronRight
                              size={13}
                              className="shrink-0 text-brand-red opacity-0 -translate-x-1 transition-all duration-200 group-hover/sl:opacity-100 group-hover/sl:translate-x-0"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex w-[600px] overflow-hidden rounded-[6px] border border-border bg-background shadow-[var(--shadow-elegant)]">
            {/* Promo panel — có hoa văn lưới + vầng sáng vàng */}
            <div className="relative w-56 shrink-0 overflow-hidden bg-primary text-primary-foreground p-6 flex flex-col">
              {/* Lưới sổ cái */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              {/* Vầng sáng vàng */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 40%, transparent), transparent 70%)",
                }}
              />
              {/* Watermark chữ */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 -right-2 font-display text-[5rem] leading-none text-primary-foreground/[0.06] select-none"
              >
                TAF
              </span>

              <div className="relative flex flex-col h-full">
                {(() => {
                  const PromoIcon = DROPDOWN_PROMO[item.label]?.icon ?? Layers;
                  return (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-accent/30 bg-white/5 text-accent">
                      <PromoIcon size={19} strokeWidth={1.7} />
                    </span>
                  );
                })()}
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                  {t(DROPDOWN_PROMO[item.label]?.eyebrow ?? item.label)}
                </p>
                <p className="mt-1.5 font-display text-lg leading-snug">
                  {t(DROPDOWN_PROMO[item.label]?.title ?? item.label)}
                </p>
                <span aria-hidden className="mt-3 block h-px w-10 bg-accent/60" />
                {DROPDOWN_PROMO[item.label]?.desc && (
                  <p className="mt-3 text-xs text-primary-foreground/65 font-serif leading-relaxed">
                    {t(DROPDOWN_PROMO[item.label]!.desc)}
                  </p>
                )}
                {/* Hotline chip */}
                <a
                  href={`tel:${HOTLINE_TEL}`}
                  className="group/tel mt-auto inline-flex items-center gap-2 pt-5 text-primary-foreground/85 hover:text-accent transition-colors"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 text-accent group-hover/tel:bg-accent group-hover/tel:text-primary transition-colors">
                    <Phone size={13} />
                  </span>
                  <span className="text-[0.78rem]">
                    <span className="block text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/50">
                      {t("Hotline / Zalo")}
                    </span>
                    <span className="font-medium tracking-wide">{HOTLINE_DISPLAY}</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Links dạng thẻ — thanh nhấn đỏ + nhấc nhẹ khi hover */}
            <div className="flex-1 p-4 grid grid-cols-2 gap-2.5">
              {item.links!.map((l) => {
                const meta = LINK_META[l.to];
                const Icon = meta?.icon ?? ChevronRight;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="group/li relative flex flex-col gap-2.5 overflow-hidden rounded-[4px] border border-border/70 bg-card p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[var(--shadow-card)]"
                  >
                    {/* Thanh nhấn đỏ bên trái */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand-red transition-transform duration-300 group-hover/li:scale-y-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-border bg-gradient-to-br from-secondary to-cream text-accent-foreground transition-colors duration-200 group-hover/li:border-brand-red group-hover/li:from-brand-red group-hover/li:to-brand-red group-hover/li:text-white">
                        <Icon size={16} strokeWidth={1.7} />
                      </span>
                      <ChevronRight
                        size={15}
                        className="text-brand-red opacity-0 -translate-x-1 transition-all duration-200 group-hover/li:opacity-100 group-hover/li:translate-x-0"
                      />
                    </div>
                    <span>
                      <span className="block text-[0.9rem] font-medium text-foreground group-hover/li:text-brand-red-ink transition-colors">
                        {t(l.label)}
                      </span>
                      {meta?.desc && (
                        <span className="mt-0.5 block text-xs text-muted-foreground leading-snug">
                          {t(meta.desc)}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Mobile ---------- */

function MobileMenuItem({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const t = useT();
  const children = item.columns
    ? item.columns
    : item.links
      ? [{ heading: "", links: item.links }]
      : null;

  if (!children && item.to) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className="py-3.5 text-[0.95rem] font-medium text-foreground border-b border-border/60"
      >
        {t(item.label)}
      </Link>
    );
  }

  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 text-[0.95rem] font-medium text-foreground"
        aria-expanded={isOpen}
      >
        {t(item.label)}
        <ChevronDown
          size={18}
          className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && children && (
        <div className="pb-3 space-y-4">
          {children.map((col, i) => (
            <div key={col.heading || i}>
              {col.heading && (
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-accent-foreground mb-1.5 mt-1">
                  {t(col.heading)}
                </p>
              )}
              <ul className="space-y-0.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={onNavigate}
                      className="block py-2 pl-3 text-sm text-foreground/80 border-l border-border hover:border-brand-red hover:text-brand-red-ink transition-colors"
                    >
                      {t(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {item.viewAll && (
            <Link
              to={item.viewAll.to}
              onClick={onNavigate}
              className="block py-2 text-sm font-medium text-brand-red-ink"
            >
              {t(item.viewAll.label)} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
