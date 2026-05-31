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
          <div className="[&_span]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/60">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 font-serif">
            {SITE.legalName} — hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, phục vụ
            doanh nghiệp Việt Nam và FDI từ năm {SITE.established}.
          </p>
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
