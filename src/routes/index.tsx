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
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
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
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Kiểm toán độc lập · Tư vấn thuế · Kế toán</Eyebrow>
            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight text-foreground">
              Báo cáo kiểm toán
              <span className="block text-accent-foreground/90 italic font-normal">
                đúng chuẩn mực, đúng thời hạn.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-serif leading-relaxed">
              {SITE.legalName} là hãng kiểm toán độc lập tại Việt Nam, đăng ký hành nghề với Bộ
              Tài chính. Hơn {new Date().getFullYear() - SITE.established} năm phục vụ doanh nghiệp
              trong nước, FDI và các dự án đầu tư công.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-primary/90 transition"
              >
                Yêu cầu báo giá <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/dich-vu"
                className="inline-flex items-center gap-2 border border-input text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-muted transition"
              >
                Khám phá dịch vụ
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="border-l-2 border-accent pl-5 space-y-5">
              <Stat value="20+" label="năm hành nghề kiểm toán" />
              <Stat value="500+" label="khách hàng doanh nghiệp" />
              <Stat value="60+" label="tỉnh / thành phục vụ" />
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <Section className="bg-cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {USP.map((u) => (
            <div key={u.title} className="bg-background p-7">
              <u.icon size={22} className="text-accent-foreground" />
              <h3 className="mt-4 font-display text-lg text-foreground">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-serif leading-relaxed">
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Dịch vụ chính"
              title="Sáu nhóm dịch vụ chuyên sâu cho doanh nghiệp."
              lead="Mỗi tuyến dịch vụ do KTV phụ trách trực tiếp, có chứng chỉ hành nghề và kinh nghiệm ngành tương ứng."
            />
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/dich-vu/$slug"
                params={{ slug: s.slug }}
                className="group bg-card border border-border hover:border-accent p-6 rounded-[2px] transition-colors"
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <span className="text-[0.7rem] font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent-foreground transition"
                  />
                </div>
                <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-serif line-clamp-3 leading-relaxed">
                  {s.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section className="bg-primary text-primary-foreground">
        <div className="max-w-3xl">
          <Eyebrow>Khách hàng nói về TAF</Eyebrow>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.25] italic text-primary-foreground">
            “TAF bám sát kế hoạch kiểm toán, phát hiện vấn đề kế toán quan trọng trước khi nộp
            BCTC và giải thích kiến nghị một cách thực tế cho ban lãnh đạo.”
          </blockquote>
          <div className="mt-6 text-sm text-primary-foreground/70 font-serif">
            Giám đốc Tài chính — Doanh nghiệp sản xuất FDI, Bình Dương
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Câu hỏi thường gặp"
              title="Trả lời nhanh cho những thắc mắc phổ biến."
            />
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {FAQ_GENERAL.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <dt className="font-display text-lg text-foreground">{f.q}</dt>
                    <span className="text-accent-foreground text-xl leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <dd className="mt-3 text-muted-foreground font-serif leading-relaxed">{f.a}</dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-cream border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Cần một hãng kiểm toán bạn có thể tin cậy?
            </h2>
            <p className="mt-3 text-muted-foreground font-serif max-w-2xl">
              Gửi mô tả ngắn về doanh nghiệp và nhu cầu. KTV phụ trách sẽ liên hệ lại trong vòng 1
              ngày làm việc với đề xuất phí cụ thể.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-primary/90 transition"
            >
              Yêu cầu báo giá <ArrowUpRight size={16} />
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
      <div className="font-display text-4xl text-foreground">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
