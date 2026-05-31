import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, FileCheck2, Scale, Building2 } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { SERVICES, SITE, FAQ_GENERAL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.legalName} — Hãng kiểm toán độc lập tại Việt Nam` },
      {
        name: "description",
        content:
          "TAF là hãng kiểm toán độc lập đăng ký hành nghề tại Bộ Tài chính. Kiểm toán BCTC, quyết toán dự án, tư vấn thuế và kế toán cho doanh nghiệp Việt Nam và FDI.",
      },
      { property: "og:title", content: `${SITE.name} — Kiểm toán độc lập tại Việt Nam` },
      {
        property: "og:description",
        content:
          "Hơn 20 năm kinh nghiệm kiểm toán BCTC, quyết toán dự án và tư vấn thuế cho doanh nghiệp trong nước và FDI.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const years = new Date().getFullYear() - SITE.established;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* Corner hairline mark */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-40 h-40 border-r border-t border-brand-red/40 -mr-10 -mt-6 hidden md:block"
          aria-hidden
        />
        {/* Oversized faded numeral — years of practice */}
        <div
          className="pointer-events-none absolute right-[-2rem] bottom-[-3rem] font-display italic text-brand-red/[0.06] leading-none select-none hidden md:block"
          aria-hidden
          style={{ fontSize: "clamp(14rem, 22vw, 24rem)" }}
        >
          {years}
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid lg:grid-cols-12 gap-10 items-end relative">
          <div className="lg:col-span-8">
            <Eyebrow>Kiểm toán độc lập · Tư vấn thuế · Kế toán</Eyebrow>
            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight text-foreground">
              Báo cáo kiểm toán
              <span className="block">
                <em className="not-italic font-display italic text-accent-foreground">đúng</em>{" "}
                chuẩn mực,
              </span>
              <span className="block">
                <em className="not-italic font-display italic text-accent-foreground">đúng</em>{" "}
                thời hạn.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-serif leading-relaxed">
              {SITE.legalName} là hãng kiểm toán độc lập tại Việt Nam, đăng ký hành nghề với Bộ
              Tài chính. Hơn {years} năm phục vụ doanh nghiệp trong nước, FDI và các dự án đầu tư
              công.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] hover:bg-brand-red-ink transition shadow-[0_8px_24px_-12px_var(--color-brand-red)]"
              >
                Yêu cầu báo giá
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/dich-vu"
                className="inline-flex items-center gap-2 border border-input text-foreground px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] hover:bg-muted transition"
              >
                Khám phá dịch vụ
              </Link>
            </div>
          </div>

          {/* Stats — ledger column */}
          <div className="lg:col-span-4">
            <div className="border-t border-border pt-6 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:border-t-0 lg:border-l lg:border-accent/40 lg:pl-7 lg:pt-0">
              <Stat value="20+" label="Năm hành nghề" />
              <Stat value="500+" label="Khách hàng doanh nghiệp" />
              <Stat value="60+" label="Tỉnh / thành phục vụ" />
            </div>
          </div>
        </div>
      </section>

      {/* USP — staggered with serif numerals */}
      <Section className="bg-cream relative">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {USP.map((u, i) => (
            <div
              key={u.title}
              className={`relative ${i % 2 === 1 ? "md:mt-12" : ""}`}
            >
              {/* Massive faded numeral */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-2 -top-8 font-display italic text-accent/10 leading-none select-none"
                style={{ fontSize: "7rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={`relative pl-6 border-l ${i % 2 === 1 ? "border-brand-red/50" : "border-accent/40"}`}>
                <u.icon size={20} className={i % 2 === 1 ? "text-brand-red" : "text-accent-foreground"} />
                <h3 className="mt-4 font-display text-xl text-foreground leading-snug">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm md:text-[0.95rem] text-muted-foreground font-serif leading-relaxed">
                  {u.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES — dark ledger list */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 right-10 w-40 h-40 border-t border-r border-brand-red/40 hidden md:block"
        />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-4 font-medium flex items-center gap-2.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="inline-block w-5 h-px bg-accent" />
              Dịch vụ chính
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Sáu nhóm dịch vụ
              <span className="block italic opacity-80">chuyên sâu.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/65 font-serif leading-relaxed">
              Mỗi tuyến dịch vụ do KTV phụ trách trực tiếp, có chứng chỉ hành nghề và kinh nghiệm
              ngành tương ứng.
            </p>
          </div>
          <ul className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to="/dich-vu/$slug"
                  params={{ slug: s.slug }}
                  className="group grid grid-cols-[auto,1fr,auto] items-start gap-4 md:gap-8 py-6 md:py-7 hover:bg-white/[0.03] transition-colors -mx-3 px-3"
                >
                  <span className="font-display italic text-accent text-sm md:text-base pt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg md:text-xl leading-snug transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/60 font-serif leading-relaxed line-clamp-2">
                      {s.summary}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-accent/70 mt-1 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-red"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL — giant serif quote */}
      <Section className="bg-background relative">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-2 hidden lg:block">
            <span
              aria-hidden
              className="font-display italic text-accent/40 leading-[0.7] block"
              style={{ fontSize: "10rem" }}
            >
              “
            </span>
          </div>
          <div className="lg:col-span-10">
            <Eyebrow>Khách hàng nói về TAF</Eyebrow>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.3] text-foreground">
              “TAF bám sát kế hoạch kiểm toán, phát hiện vấn đề kế toán quan trọng trước khi nộp
              BCTC và{" "}
              <em className="not-italic font-display italic text-accent-foreground">
                giải thích kiến nghị một cách thực tế
              </em>{" "}
              cho ban lãnh đạo.”
            </blockquote>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground font-serif">
              <span className="h-px w-8 bg-accent" />
              Giám đốc Tài chính — Doanh nghiệp sản xuất FDI, Bình Dương
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Câu hỏi thường gặp"
              title="Trả lời nhanh cho những thắc mắc phổ biến."
            />
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {FAQ_GENERAL.map((f, i) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <dt className="flex items-baseline gap-4">
                      <span className="font-display italic text-accent-foreground/80 text-sm tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg text-foreground">{f.q}</span>
                    </dt>
                    <span className="text-accent-foreground text-xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <dd className="mt-3 pl-10 text-muted-foreground font-serif leading-relaxed">
                    {f.a}
                  </dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Cần một hãng kiểm toán
              <span className="block italic text-accent-foreground">bạn có thể tin cậy?</span>
            </h2>
            <p className="mt-3 text-muted-foreground font-serif max-w-2xl">
              Gửi mô tả ngắn về doanh nghiệp và nhu cầu. KTV phụ trách sẽ liên hệ lại trong vòng 1
              ngày làm việc với đề xuất phí cụ thể.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/lien-he"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] hover:bg-primary/90 transition"
            >
              Yêu cầu báo giá
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

const USP = [
  {
    icon: ShieldCheck,
    title: "Đăng ký hành nghề Bộ Tài chính",
    body: "Báo cáo kiểm toán của TAF được chấp nhận tại cơ quan thuế, ngân hàng và Sở KH&ĐT.",
  },
  {
    icon: FileCheck2,
    title: "Đúng VSA, đúng thời hạn",
    body: "Quy trình kiểm toán theo Chuẩn mực Kiểm toán Việt Nam, cam kết hạn nộp BCTC.",
  },
  {
    icon: Scale,
    title: "Phục vụ doanh nghiệp FDI",
    body: "Báo cáo song ngữ Việt — Anh, phối hợp công ty mẹ và kiểm toán nhóm.",
  },
  {
    icon: Building2,
    title: "Mạng lưới rộng khắp Việt Nam",
    body: "Hiện diện tại các trung tâm kinh tế lớn, sẵn sàng đến tận trụ sở khách hàng.",
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display italic text-3xl md:text-4xl lg:text-5xl text-accent-foreground leading-none">
        {value}
      </div>
      <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
