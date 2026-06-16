import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  Scale,
  Building2,
  Award,
  Landmark,
  BookOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { EditorialImage } from "@/components/site/EditorialImage";
import { TafSeal } from "@/components/site/TafSeal";
import { Emblem } from "@/components/site/Emblem";
import { ClientLogos } from "@/components/site/ClientLogos";
import { VietnamMap } from "@/components/site/VietnamMap";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { Reveal } from "@/components/site/Reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { SERVICES, SITE, FAQ_GENERAL } from "@/lib/site";
import portraitImg from "@/assets/taf-portrait.png";
import reportSealImg from "@/assets/taf-report-seal.png";
import meetingImg from "@/assets/taf-meeting.png";
import handshakeImg from "@/assets/taf-handshake.png";

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
        {/* Ledger grid texture */}
        <div className="absolute inset-0 -z-10 opacity-[0.045]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* Paper grain wash */}
        <div className="absolute inset-0 -z-10 opacity-[0.04] paper-grain" aria-hidden />
        {/* Corner hairline mark */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-40 h-40 border-r border-t border-brand-red/40 -mr-10 -mt-6 hidden md:block"
          aria-hidden
        />
        {/* Faded TAF seal watermark (replaces stray numeral) */}
        <div
          className="pointer-events-none absolute -right-24 -bottom-24 hidden lg:block opacity-[0.05]"
          aria-hidden
        >
          <TafSeal size={420} spin />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Eyebrow>Kiểm toán độc lập · Tư vấn thuế · Kế toán</Eyebrow>
            <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight text-foreground text-balance">
              Báo cáo kiểm toán
              <span className="block">
                <em className="not-italic font-display italic text-accent-foreground">đúng</em>{" "}
                chuẩn mực,
              </span>
              <span className="block">
                <em className="not-italic font-display italic text-accent-foreground italic-mark">đúng</em>{" "}
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

          {/* Right: photo collage */}
          <Reveal className="lg:col-span-5 relative pr-2 md:pr-4 self-start lg:mt-2" delay={120}>
            <div className="relative">
              <div className="relative" style={{ transform: "rotate(-1.2deg)" }}>
                <EditorialImage
                  src={portraitImg}
                  alt="Kiểm toán viên TAF kiểm tra Báo cáo Tài chính khách hàng"
                  aspect="portrait"
                  accent="red"
                />
                {/* Polaroid-style overlap mini image — sits inside lower-left of main image, not over the caption */}
                <div
                  className="hidden sm:block absolute bottom-3 -left-3 sm:-left-5 w-[30%] bg-cream p-1.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)] ring-1 ring-black/5"
                  style={{ transform: "rotate(3deg)" }}
                >
                  <EditorialImage
                    src={reportSealImg}
                    alt="Chồng báo cáo kiểm toán TAF kèm con dấu đỏ"
                    aspect="square"
                    accent="gold"
                  />
                </div>
                {/* TAF seal stamped onto top-right corner of the main image */}
                <div
                  className="absolute top-4 right-4 md:top-6 md:right-6 hidden md:block"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <TafSeal size={92} />
                </div>
              </div>
              {/* Caption — placed under the whole collage, left-aligned, never overlapped */}
              <figcaption className="mt-5 pl-1 text-xs md:text-sm text-muted-foreground font-serif italic leading-snug">
                — Kiểm tra BCTC tại doanh nghiệp khách hàng.
              </figcaption>
            </div>
          </Reveal>
        </div>

        {/* Stats ledger strip */}
        <div className="relative">
          <div className="rule-gold" />
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 grid grid-cols-3 gap-6 md:gap-10">
            <Stat value={15} suffix="+" label="Năm hành nghề" />
            <Stat value={500} suffix="+" label="Khách hàng doanh nghiệp" />
            <Stat value={60} suffix="+" label="Tỉnh / thành phục vụ" />
          </div>
          <div className="rule-gold" />
        </div>
      </section>

      {/* TRUST STRIP — clients + emblems */}
      <section className="bg-cream border-b border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 space-y-10">
          <Reveal small><ClientLogos /></Reveal>
          <Reveal small delay={120}>
            <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
              <Emblem icon={Landmark} label="Đăng ký hành nghề" sublabel="Bộ Tài chính" />
              <Emblem icon={Award} label="Thành viên" sublabel="VACPA" />
              <Emblem icon={BookOpen} label="Chuẩn mực" sublabel="VSA & IFRS" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* USP — staggered with serif numerals */}
      <Section className="bg-background relative">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {USP.map((u, i) => (
            <div key={u.title} className={`relative ${i % 2 === 1 ? "md:mt-12" : ""}`}>
              <div
                aria-hidden
                className="pointer-events-none absolute -left-2 -top-8 font-display italic text-accent/10 leading-none select-none"
                style={{ fontSize: "7rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className={`relative pl-6 border-l ${i % 2 === 1 ? "border-brand-red/50" : "border-accent/40"}`}
              >
                <u.icon
                  size={20}
                  className={i % 2 === 1 ? "text-brand-red" : "text-accent-foreground"}
                />
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

      {/* MAP — network */}
      <Section className="bg-cream border-y border-border">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[360px] mx-auto lg:max-w-[420px]">
              {/* Ledger frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 md:-inset-6 border border-accent/20"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 md:-inset-6 border-t-2 border-l-2 border-brand-red/40 w-10 h-10"
              />
              <VietnamMap />
            </div>
          </Reveal>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rule-gold w-24 mb-6 opacity-70" />
            <Eyebrow>Mạng lưới phục vụ</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.1] text-foreground">
              60 tỉnh thành.
              <span className="block italic text-accent-foreground">Một chuẩn mực.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground font-serif leading-relaxed">
              Đội ngũ KTV của TAF có mặt tại ba trung tâm kinh tế lớn, sẵn sàng đến tận trụ sở
              khách hàng tại mọi tỉnh thành để thực hiện kiểm toán hiện trường.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { city: "Hà Nội", count: 180, note: "Khách hàng phía Bắc" },
                { city: "Đà Nẵng", count: 70, note: "Miền Trung & Tây Nguyên" },
                { city: "TP. HCM", count: 250, note: "Phía Nam & FDI" },
              ].map((c) => (
                <CityStat key={c.city} city={c.city} count={c.count} note={c.note} />
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* SERVICES — dark ledger list */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 500px at 0% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 right-10 w-40 h-40 border-t border-r border-brand-red/40 hidden md:block"
        />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12 relative">
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
              <li key={s.slug} className="group/row relative">
                {/* Red rule that slides in from left on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-brand-red origin-top scale-y-0 group-hover/row:scale-y-100 transition-transform duration-500"
                />
                <Link
                  to="/dich-vu/$slug"
                  params={{ slug: s.slug }}
                  className="grid grid-cols-[2.25rem_1fr_1.5rem] sm:grid-cols-[2.75rem_1fr_1.5rem] md:grid-cols-[3.25rem_1fr_1.75rem] items-start gap-x-4 sm:gap-x-6 md:gap-x-8 py-5 md:py-6 hover:bg-white/[0.03] transition-colors px-3 -mx-3"
                >
                  <span className="font-display italic text-accent text-base md:text-lg tabular-nums leading-[1.75] md:leading-[1.6] tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg md:text-xl leading-[1.75] md:leading-[1.6] tracking-tight transition-colors group-hover/row:text-accent">
                      <span className="draw-underline">{s.title}</span>
                    </h3>
                    <p className="mt-1.5 text-sm text-primary-foreground/55 font-serif leading-relaxed line-clamp-2">
                      {s.summary}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-accent/60 mt-[0.4rem] md:mt-[0.45rem] justify-self-end transition-all group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-brand-red"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <Section className="bg-background">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Quy trình kiểm toán</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] text-foreground">
              Năm bước,
              <span className="block italic text-accent-foreground">một chuẩn mực.</span>
            </h2>
            <p className="mt-5 text-muted-foreground font-serif leading-relaxed">
              Mỗi cuộc kiểm toán của TAF tuân thủ quy trình chuẩn theo VSA — từ khảo sát ban đầu
              đến phát hành báo cáo.
            </p>
            <div className="mt-8 hidden lg:block">
              <EditorialImage
                src={meetingImg}
                alt="Đội ngũ TAF họp lập kế hoạch kiểm toán"
                aspect="landscape"
                accent="gold"
                caption="Buổi họp lập kế hoạch kiểm toán — đánh giá rủi ro và phạm vi."
              />
            </div>
          </div>
          <Reveal className="lg:col-span-7" delay={100}>
            <ProcessTimeline />
          </Reveal>
        </div>
      </Section>

      {/* TESTIMONIAL — image background carousel */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={handshakeImg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ filter: "blur(10px) saturate(0.9)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 94%, transparent), color-mix(in oklab, var(--color-primary) 88%, transparent))",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 relative">
          {/* Seal watermark */}
          <div className="absolute top-8 right-8 hidden md:block">
            <TafSeal size={140} opacity={0.12} spin />
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-2 hidden lg:block" small>
              <span
                aria-hidden
                className="font-display italic text-accent/60 leading-[0.7] block brace-glow"
                style={{ fontSize: "10rem" }}
              >
                “
              </span>
            </Reveal>
            <div className="lg:col-span-10">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent mb-6 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-5 h-px bg-accent" />
                Khách hàng nói về TAF
              </p>
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

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
            <Accordion type="single" collapsible className="border-y border-border">
              {FAQ_GENERAL.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="hover:no-underline py-5 [&[data-state=open]>span>span.plus]:rotate-45 [&>svg]:hidden">
                    <span className="flex items-baseline gap-4 text-left">
                      <span className="font-display italic text-accent-foreground/80 text-sm tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg text-foreground">{f.q}</span>
                      <span className="plus ml-auto text-brand-red text-xl leading-none transition-transform shrink-0">
                        +
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 text-muted-foreground font-serif leading-relaxed text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background border-t border-border relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 hidden md:block opacity-[0.07]" aria-hidden>
          <TafSeal size={260} spin />
        </div>
        <div className="grid md:grid-cols-12 gap-8 items-center relative">
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
              className="group inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-[2px] hover:bg-brand-red-ink transition shadow-[0_8px_24px_-12px_var(--color-brand-red)]"
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

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className="stat-card text-center md:text-left cursor-default">
      <div className="font-display italic text-3xl md:text-4xl lg:text-5xl text-accent-foreground leading-none tabular-nums stat-num">
        <span ref={ref}>{animated}</span>
        {suffix}
      </div>
      <span className="stat-rule mx-auto md:mx-0" aria-hidden />
      <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function CityStat({ city, count, note }: { city: string; count: number; note: string }) {
  const { ref, value } = useCountUp(count);
  return (
    <div className="border-t border-accent/40 pt-3">
      <dt className="font-display italic text-accent-foreground text-xl tabular-nums">
        <span ref={ref}>{value}</span>+
      </dt>
      <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {city}
      </dd>
      <dd className="text-xs text-muted-foreground/80 font-serif italic mt-1">{note}</dd>
    </div>
  );
}
