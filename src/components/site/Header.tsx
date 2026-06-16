import { Link } from "@tanstack/react-router";
import { useState, type ElementType } from "react";
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
import { MAIN_MENU, type MenuItem } from "@/lib/site";

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

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block border-b border-border/70 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-9 flex items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-primary-foreground/70">
            <Clock size={13} className="text-accent" />
            Giờ làm việc: T2 – T7, 8:00 – 17:30
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
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0" aria-label="TAF — Trang chủ">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch h-full" aria-label="Điều hướng chính">
            {MAIN_MENU.map((item) => (
              <DesktopMenuItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/lien-he"
              className="group inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-colors shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-brand-red)_60%,transparent)]"
            >
              <span className="uppercase tracking-[0.12em] text-[0.78rem]">Yêu cầu báo giá</span>
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="mx-auto max-w-6xl px-5 py-3 flex flex-col" aria-label="Điều hướng mobile">
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
                  <Phone size={15} className="text-brand-red" /> Gọi ngay
                </a>
                <Link
                  to="/lien-he"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-brand-red text-white rounded-[2px]"
                >
                  Yêu cầu báo giá
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

function DesktopMenuItem({ item }: { item: MenuItem }) {
  const hasDropdown = !!(item.columns || item.links);

  if (!hasDropdown && item.to) {
    return (
      <div className="relative flex items-center">
        <Link to={item.to} className={triggerCls} activeProps={activeProps}>
          {item.label}
          <Underline />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex items-center group">
      {item.to ? (
        <Link to={item.to} className={triggerCls} activeProps={activeProps}>
          {item.label}
          <ChevronDown
            size={14}
            className="text-muted-foreground transition-transform duration-300 group-hover:rotate-180"
          />
          <Underline />
        </Link>
      ) : (
        <button type="button" className={triggerCls} aria-haspopup="true">
          {item.label}
          <ChevronDown
            size={14}
            className="text-muted-foreground transition-transform duration-300 group-hover:rotate-180"
          />
          <Underline />
        </button>
      )}

      <div className="absolute left-0 top-full pt-3 invisible translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100">
        {item.columns ? (
          <div className="flex w-[720px] overflow-hidden rounded-[4px] border border-border bg-background shadow-[var(--shadow-elegant)]">
            {/* Promo panel */}
            <div className="w-56 shrink-0 bg-primary text-primary-foreground p-6 flex flex-col">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-accent mb-2">Dịch vụ TAF</p>
              <p className="font-display text-lg leading-snug">
                Kiểm toán, kế toán & tư vấn thuế
              </p>
              <p className="mt-2 text-xs text-primary-foreground/65 font-serif leading-relaxed">
                Giải pháp toàn diện cho doanh nghiệp Việt Nam và FDI.
              </p>
              {item.viewAll && (
                <Link
                  to={item.viewAll.to}
                  className="mt-auto inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-accent hover:gap-2.5 transition-all"
                >
                  {item.viewAll.label} →
                </Link>
              )}
            </div>
            {/* Categories */}
            <div className="flex-1 p-6 grid grid-cols-2 gap-x-7 gap-y-5">
              {item.columns.map((col) => {
                const Icon = CAT_ICONS[col.heading] ?? Layers;
                return (
                  <div key={col.heading}>
                    <p className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent-foreground mb-2.5">
                      <Icon size={14} className="text-brand-red" />
                      {col.heading}
                    </p>
                    <ul className="space-y-0.5">
                      {col.links.map((l) => (
                        <li key={l.to}>
                          <Link
                            to={l.to}
                            className="block rounded-[2px] -mx-2 px-2 py-1.5 text-[0.88rem] text-foreground/75 hover:bg-cream hover:text-brand-red-ink transition-colors"
                          >
                            {l.label}
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
          <div className="w-72 rounded-[4px] border border-border bg-background shadow-[var(--shadow-elegant)] p-2">
            <ul>
              {item.links!.map((l) => {
                const meta = LINK_META[l.to];
                const Icon = meta?.icon ?? ChevronRight;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group/li flex items-start gap-3 rounded-[2px] px-3 py-2.5 hover:bg-cream transition-colors"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-border bg-secondary text-accent-foreground group-hover/li:border-brand-red group-hover/li:text-brand-red transition-colors">
                        <Icon size={15} />
                      </span>
                      <span>
                        <span className="block text-sm text-foreground group-hover/li:text-brand-red-ink transition-colors">
                          {l.label}
                        </span>
                        {meta?.desc && (
                          <span className="block text-xs text-muted-foreground">{meta.desc}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
        {item.label}
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
        {item.label}
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
                  {col.heading}
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
                      {l.label}
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
              {item.viewAll.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
