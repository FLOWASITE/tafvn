import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { NAV, SITE, SERVICES } from "@/lib/site";
import type { Office } from "@/lib/offices.functions";

export function Footer({ offices }: { offices: Office[] }) {
  const primary = offices.find((o) => o.is_primary) ?? offices[0];
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 font-serif">
            {SITE.legalName} — hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, phục vụ
            doanh nghiệp Việt Nam và FDI từ năm {SITE.established}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/taf.vn" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UC6SN58so0Iy1nnf46LYJw1A" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com/dichvuketoantaf" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/tax_audit_finance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/dichvuketoantaf1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.pinterest.com/dichvukiemtoantaf" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.173 0 7.418 2.967 7.418 6.942 0 4.143-2.615 7.486-6.154 7.486-1.199 0-2.334-.63-2.722-1.38l-.748 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@ketoan.taf" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.8-.1 3.61.233 5.34.99.67.318 1.3.74 1.84 1.25.22.2.42.42.6.64v3.42c-.56-.76-1.26-1.4-2.06-1.9-.8-.5-1.68-.86-2.61-1.06-.93-.2-1.9-.25-2.85-.14-.95.1-1.87.36-2.71.77-.84.4-1.59.95-2.21 1.61-.62.66-1.1 1.43-1.42 2.26-.32.83-.48 1.72-.48 2.61 0 .89.16 1.78.48 2.61.32.83.8 1.6 1.42 2.26.62.66 1.37 1.21 2.21 1.61.84.4 1.76.67 2.71.77.95.1 1.92.05 2.85-.15.93-.2 1.81-.56 2.61-1.06.8-.5 1.5-1.14 2.06-1.9v3.42c-.56.76-1.26 1.4-2.06 1.9-.8.5-1.68.86-2.61 1.06-.93.2-1.9.25-2.85.14-.95-.1-1.87-.36-2.71-.77-.84-.4-1.59-.95-2.21-1.61-.62-.66-1.1-1.43-1.42-2.26-.32-.83-.48-1.72-.48-2.61 0-.89.16-1.78.48-2.61.32-.83.8-1.6 1.42-2.26.62-.66 1.37-1.21 2.21-1.61.84-.4 1.76-.67 2.71-.77.95-.1 1.92-.05 2.85.15.93.2 1.81.56 2.61 1.06.8.5 1.5 1.14 2.06 1.9V0h3.42v12.02c0 2.3-.46 4.56-1.35 6.68-.89 2.12-2.2 4.04-3.85 5.64-1.65 1.6-3.61 2.86-5.76 3.71-2.15.85-4.47 1.28-6.82 1.28-2.35 0-4.67-.43-6.82-1.28-2.15-.85-4.11-2.11-5.76-3.71-1.65-1.6-2.96-3.52-3.85-5.64C.46 16.58 0 14.32 0 12.02c0-2.3.46-4.56 1.35-6.68.89-2.12 2.2-4.04 3.85-5.64C6.85-1.9 8.81-3.16 10.96-4.01c2.15-.85 4.47-1.28 6.82-1.28V.02z"/></svg>
            </a>
            <a href="https://www.threads.com/@tax_audit_finance" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-primary-foreground/60 hover:text-brand-red transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.196-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.577.879-6.43 2.51-8.483C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.618-4.356v-.45c0-1.533-1.322-2.782-2.948-2.782-.775 0-1.516.305-2.088.86-.573.557-.894 1.305-.894 2.105v.57h-2.04v-.57c0-2.024 1.658-3.67 3.695-3.67 2.036 0 3.695 1.646 3.695 3.67v.45c0 3.168-.563 5.79-2.647 7.836-1.855 1.82-4.305 2.635-7.237 2.655z"/></svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent mb-4">Điều hướng</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent mb-4">Dịch vụ</p>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/dich-vu/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/80 hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent mb-4">Liên hệ</p>
          {primary ? (
            <address className="not-italic text-sm leading-relaxed text-primary-foreground/80 font-serif">
              <div className="text-primary-foreground font-medium mb-1">{primary.name}</div>
              <div>
                {primary.address_line}
                {primary.ward ? `, ${primary.ward}` : ""}
                {primary.district ? `, ${primary.district}` : ""}, {primary.city}
              </div>
              {primary.phone && (
                <div className="mt-2">
                  ĐT:{" "}
                  <a href={`tel:${primary.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                    {primary.phone}
                  </a>
                </div>
              )}
              {primary.email && (
                <div>
                  Email:{" "}
                  <a href={`mailto:${primary.email}`} className="hover:text-accent">
                    {primary.email}
                  </a>
                </div>
              )}
              {primary.hours && (
                <div className="mt-2 text-primary-foreground/60">{primary.hours}</div>
              )}
            </address>
          ) : null}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-primary-foreground/60">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}. Đã đăng ký hành nghề kiểm toán.
          </div>
          <div className="flex gap-5">
            <Link to="/chinh-sach-bao-mat" className="hover:text-accent">
              Chính sách bảo mật
            </Link>
            <Link to="/van-phong" className="hover:text-accent">
              Văn phòng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
