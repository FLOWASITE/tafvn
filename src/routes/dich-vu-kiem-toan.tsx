import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Phone, ScrollText } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TafSeal } from "@/components/site/TafSeal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

const TITLE = "Dịch vụ kiểm toán độc lập tại Việt Nam | TAF";
const DESCRIPTION =
  "Dịch vụ kiểm toán độc lập của TAF giúp doanh nghiệp minh bạch báo cáo tài chính, đúng chuẩn mực kiểm toán Việt Nam. Đội ngũ KTV được Bộ Tài chính cấp phép.";
const PATH = "/dich-vu-kiem-toan";
const CANONICAL = `https://tafvn.lovable.app${PATH}`;

const REASONS = [
  {
    t: "Đảm bảo tuân thủ pháp luật",
    d: "Doanh nghiệp vận hành ổn định cần tránh sai sót về hành chính, kế toán, thuế. KTV được Nhà nước cấp chứng chỉ hành nghề giúp giảm rủi ro vi phạm và tổn thất uy tín.",
  },
  {
    t: "Phát hiện sai sót, đảm bảo khách quan",
    d: "Kiểm toán độc lập mang lại cho ban lãnh đạo cái nhìn khách quan, chính xác về những sai sót mà bộ phận kế toán nội bộ có thể mắc phải.",
  },
  {
    t: "Hỗ trợ dự báo và quản trị rủi ro",
    d: "Qua việc phát hiện các lỗ hổng nội bộ, kiểm toán giúp doanh nghiệp nhận diện rủi ro tiềm tàng và đề xuất giải pháp khắc phục, duy trì phát triển ổn định.",
  },
  {
    t: "Gia tăng giá trị báo cáo tài chính",
    d: "BCTC đã kiểm toán phục vụ công bố thông tin, vay vốn, gọi đầu tư, làm việc với cơ quan quản lý và giúp ban lãnh đạo điều hành hiệu quả hơn.",
  },
];

const SUBJECTS = [
  "Doanh nghiệp có vốn đầu tư nước ngoài (FDI)",
  "Tổ chức tín dụng theo Luật Các tổ chức tín dụng",
  "Tổ chức tài chính, doanh nghiệp bảo hiểm, tái bảo hiểm, môi giới bảo hiểm",
  "Công ty đại chúng, tổ chức phát hành và kinh doanh chứng khoán",
  "Doanh nghiệp nhà nước",
  "Doanh nghiệp, tổ chức thực hiện dự án quan trọng quốc gia",
  "Doanh nghiệp, tổ chức có vốn nhà nước nắm giữ từ 20% trở lên",
  "Doanh nghiệp mà tổ chức niêm yết/phát hành/kinh doanh chứng khoán nắm từ 20% quyền biểu quyết",
  "Doanh nghiệp kiểm toán, chi nhánh doanh nghiệp kiểm toán nước ngoài tại Việt Nam",
  "Dự án sử dụng nguồn vốn ODA",
];

const TAF_SERVICES: { label: string; to?: string; slug?: string }[] = [
  { label: "Kiểm toán báo cáo tài chính", slug: "kiem-toan-bao-cao-tai-chinh" },
  { label: "Kiểm toán báo cáo tài chính vì mục đích thuế và quyết toán thuế" },
  { label: "Kiểm toán hoạt động" },
  { label: "Kiểm toán nội bộ" },
  { label: "Kiểm toán tuân thủ", slug: "soat-xet-tuan-thu" },
  { label: "Kiểm toán báo cáo quyết toán vốn đầu tư hoàn thành" },
  { label: "Kiểm toán quyết toán dự án", slug: "kiem-toan-quyet-toan-du-an" },
  { label: "Kiểm toán độc lập" },
  { label: "Kiểm toán chi phí chung cư" },
];

const PROCESS = [
  {
    t: "Lập kế hoạch kiểm toán",
    d: "Họp với Ban Giám đốc, phòng Tài chính – Kế toán và Ban Kiểm soát; xây dựng cơ sở dữ liệu chung cho nhóm kiểm toán; lập kế hoạch và chương trình kiểm toán; gửi danh mục thông tin, tài liệu cần cung cấp.",
  },
  {
    t: "Thống nhất chiến lược",
    d: "Thảo luận phương pháp tiếp cận kiểm toán với khách hàng; tiếp nhận góp ý để đảm bảo mọi vấn đề khách hàng quan tâm đều được đề cập.",
  },
  {
    t: "Thực hiện kiểm toán",
    d: "Soát xét hệ thống kiểm soát nội bộ; thực hiện các thủ tục kiểm toán theo chương trình đã thống nhất; soát xét rủi ro thuế trong phạm vi kiểm toán.",
  },
  {
    t: "Phát hành báo cáo kiểm toán",
    d: "Thảo luận các vấn đề phát sinh và khuyến nghị; gửi Thư quản lý kèm hướng xử lý; gửi báo cáo dự thảo, họp thống nhất kết quả; phát hành báo cáo kiểm toán chính thức.",
  },
];

const WHY_TAF = [
  "Được Bộ Tài chính cấp phép đủ điều kiện hành nghề kiểm toán",
  "Môi trường pháp lý rõ ràng, minh bạch",
  "Ứng dụng công nghệ, giúp khách hàng theo dõi tiến độ kiểm toán",
  "Đội ngũ KTV có chuyên môn cao, tận tâm với nghề",
  "Chi phí minh bạch, tương xứng với phạm vi công việc",
  "Hỗ trợ, tư vấn khách hàng kịp thời",
  "Cam kết bảo mật thông tin khách hàng",
];

const FAQS = [
  {
    q: "Dịch vụ kiểm toán gồm những gì?",
    a: "Kiểm toán báo cáo tài chính; kiểm toán xây dựng cơ bản hoàn thành; kiểm toán nội bộ; kiểm toán tuân thủ; kiểm toán chi phí chung cư; kiểm toán độc lập.",
  },
  {
    q: "Chi phí dịch vụ kiểm toán được tính thế nào?",
    a: "Phí phụ thuộc phạm vi công việc, quy mô và đặc thù doanh nghiệp. TAF tối ưu quy trình và ứng dụng công nghệ để duy trì mức phí hợp lý, báo giá cụ thể sau khảo sát.",
  },
  {
    q: "TAF có cung cấp đầy đủ các dịch vụ kiểm toán không?",
    a: "Có. TAF cung cấp trọn vẹn các dịch vụ liên quan đến kiểm toán theo yêu cầu của khách hàng.",
  },
  {
    q: "Yêu cầu bắt buộc của ngành dịch vụ kiểm toán là gì?",
    a: "Công ty kiểm toán phải được Bộ Tài chính cấp phép; tuân thủ yêu cầu đạo đức nghề nghiệp (trung thực, khách quan, thận trọng); đảm bảo công khai, minh bạch, tránh sai sót số liệu.",
  },
  {
    q: "Điều kiện thành lập công ty kiểm toán?",
    a: "Tối thiểu 05 kiểm toán viên hành nghề; đầy đủ giấy phép hoạt động trong lĩnh vực kế toán – kiểm toán; vốn điều lệ tối thiểu theo quy định.",
  },
];

const RELATED = [
  { to: "/dich-vu/kiem-toan-bao-cao-tai-chinh", label: "Kiểm toán báo cáo tài chính" },
  { to: "/dich-vu/soat-xet-tuan-thu", label: "Soát xét tuân thủ & nội bộ" },
  { to: "/dich-vu/kiem-toan-quyet-toan-du-an", label: "Kiểm toán quyết toán dự án" },
];

export const Route = createFileRoute("/dich-vu-kiem-toan")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Dịch vụ kiểm toán độc lập",
          serviceType: "Kiểm toán độc lập",
          description: DESCRIPTION,
          areaServed: { "@type": "Country", name: "Vietnam" },
          provider: {
            "@type": "Organization",
            name: SITE.legalName,
            url: CANONICAL,
            telephone: "+84924580580",
            email: "info@taf.vn",
            address: {
              "@type": "PostalAddress",
              streetAddress: "62A Phạm Ngọc Thạch",
              addressLocality: "Phường Xuân Hoà, TP. Hồ Chí Minh",
              addressCountry: "VN",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://tafvn.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Dịch vụ", item: "https://tafvn.lovable.app/dich-vu" },
            { "@type": "ListItem", position: 3, name: "Dịch vụ kiểm toán", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: AuditServicePage,
});

function AuditServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Dịch vụ kiểm toán" }]} />

      {/* Hero */}
      <Section className="pb-10 md:pb-14 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-16 md:right-0 opacity-[0.07] hidden md:block"
        >
          <TafSeal size={420} spin />
        </div>
        <div className="grid lg:grid-cols-12 gap-10 relative">
          <header className="lg:col-span-8">
            <Eyebrow>Kiểm toán độc lập</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] text-foreground">
              Dịch vụ <span className="italic text-accent-foreground italic-mark">kiểm toán</span>
              <span className="block text-foreground/55 text-2xl md:text-3xl lg:text-4xl font-display italic mt-2">
                độc lập tại Việt Nam
              </span>
            </h1>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Phụ trách chuyên môn:{" "}
              <span className="text-foreground/90">Huỳnh Thế Tho — Giám đốc kiểm toán</span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="block h-px w-12 bg-brand-red" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brand-red-ink font-medium">
                Đăng ký số · Bộ Tài chính
              </span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              Dịch vụ kiểm toán giúp doanh nghiệp chứng minh tính minh bạch, trung thực của
              báo cáo tài chính: đối chiếu số liệu, xác thực và đưa ra ý kiến độc lập về độ
              tin cậy của thông tin tài chính. Chỉ các tổ chức đủ điều kiện và được cấp
              phép mới được cung cấp dịch vụ kiểm toán độc lập.
            </p>
          </header>
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col gap-4 text-sm">
            {[
              { k: "Pháp lý", v: "Bộ Tài chính cấp phép hành nghề" },
              { k: "Đội ngũ", v: "KTV có chứng chỉ hành nghề" },
              { k: "Báo giá", v: "Minh bạch sau khảo sát sơ bộ" },
            ].map((i) => (
              <div key={i.k} className="border-b border-border pb-3 last:border-0 group">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-red" />
                  {i.k}
                </div>
                <div className="font-display text-base text-foreground mt-1.5 group-hover:text-accent-foreground transition-colors">
                  {i.v}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      {/* Định nghĩa */}
      <Section className="pt-0">
        <div className="rule-gold mb-12" />
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>01</Eyebrow>
              <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
                Dịch vụ kiểm toán là gì?
              </h2>
            </div>
            <p className="lg:col-span-8 text-base md:text-lg text-foreground/85 font-serif leading-relaxed">
              Dịch vụ kiểm toán là quá trình kiểm tra, xem xét, thẩm định, đánh giá và xác
              nhận tính đầy đủ, trung thực, hợp lý của số liệu, tài liệu kế toán và báo cáo
              tài chính của một đơn vị, do tổ chức kiểm toán độc lập thực hiện.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Vì sao thuê */}
      <Section className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>02</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-2xl">
          Vì sao doanh nghiệp nên thuê dịch vụ kiểm toán?
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display italic text-accent-foreground tabular-nums text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-foreground">{r.t}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-serif leading-relaxed">
                  {r.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quy định bắt buộc */}
      <Section className="bg-cream border-y border-border relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>03</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Quy định về <span className="italic text-accent-foreground">kiểm toán bắt buộc</span>
            </h2>
            <div className="mt-8 hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <ScrollText size={14} className="text-brand-red" />
              Trích dẫn pháp lý
            </div>
          </div>
          <div className="lg:col-span-7 font-serif text-foreground/85 leading-relaxed space-y-5">
            <p>
              Kiểm toán bắt buộc được quy định tại{" "}
              <strong className="font-medium text-foreground">
                Điều 37 Luật Kiểm toán độc lập (29/03/2011)
              </strong>
              ;{" "}
              <strong className="font-medium text-foreground">
                Điều 15 Nghị định 17/2012/NĐ-CP (13/02/2012)
              </strong>{" "}
              về đối tượng kiểm toán; và chế tài xử phạt tại{" "}
              <strong className="font-medium text-foreground">
                Điều 53 Nghị định 41/2018/NĐ-CP (12/03/2018)
              </strong>
              .
            </p>
            <div className="relative bg-background border border-brand-red/30 pl-6 pr-6 py-6 rounded-[2px] shadow-[var(--shadow-card)]">
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"
              />
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-brand-red-ink mb-2 font-medium">
                Mức phạt theo Điều 53 NĐ 41/2018
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-4xl md:text-5xl text-foreground tabular-nums leading-none">
                  40–50
                </span>
                <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  triệu đồng
                </span>
              </div>
              <p className="text-foreground/85 text-sm md:text-base">
                Áp dụng với đơn vị không thực hiện kiểm toán bắt buộc đối với báo cáo tài
                chính, báo cáo quyết toán dự án hoàn thành, báo cáo tài chính hợp nhất,
                báo cáo tài chính tổng hợp và các công việc kiểm toán khác theo quy định.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Đối tượng */}
      <Section>
        <Eyebrow>04</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Các đối tượng bắt buộc phải kiểm toán
        </h2>
        <ol className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-0">
          {SUBJECTS.map((s, i) => (
            <li
              key={s}
              className="group flex gap-5 py-4 border-t border-border font-serif text-foreground/85 hover:text-foreground transition-colors"
            >
              <span className="font-mono text-sm text-accent-foreground tabular-nums shrink-0 w-8 group-hover:text-brand-red transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed flex-1">{s}</span>
              <span
                aria-hidden
                className="hidden md:block self-center w-0 group-hover:w-6 h-px bg-accent transition-all duration-300"
              />
            </li>
          ))}
        </ol>
      </Section>

      {/* Dịch vụ TAF cung cấp */}
      <Section className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>05</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Các dịch vụ kiểm toán TAF cung cấp
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TAF_SERVICES.map((s, i) => {
            const inner = (
              <div className="group relative h-full bg-card border border-border hover:border-accent p-5 rounded-[2px] transition-all duration-300 flex items-start gap-4 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5">
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-mono text-xs text-muted-foreground tabular-nums mt-0.5 shrink-0 group-hover:text-brand-red transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base text-foreground leading-snug flex-1 group-hover:text-accent-foreground transition-colors">
                  {s.label}
                </span>
                {s.slug ? (
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                ) : null}
              </div>
            );
            return s.slug ? (
              <Link key={s.label} to="/dich-vu/$slug" params={{ slug: s.slug }}>
                {inner}
              </Link>
            ) : (
              <div key={s.label}>{inner}</div>
            );
          })}
        </div>
      </Section>

      {/* Quy trình */}
      <Section className="bg-cream border-y border-border">
        <Eyebrow>06</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Quy trình kiểm toán tại TAF
        </h2>
        <ol className="mt-12 relative grid md:grid-cols-4 gap-8 md:gap-6">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <span aria-hidden className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-accent/40" />
          {PROCESS.map((s, i) => (
            <li key={s.t} className="relative pl-10 md:pl-0">
              <span
                aria-hidden
                className="absolute md:relative left-0 md:left-auto top-0 flex items-center justify-center w-6 h-6 rounded-full bg-background border border-accent/70 shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-brand-red)_12%,transparent)]"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-brand-red" />
              </span>
              <div className="md:mt-5">
                <span className="font-display italic text-accent-foreground tabular-nums text-2xl leading-none block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground font-serif leading-relaxed">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Vì sao chọn TAF */}
      <Section>
        <Eyebrow>07</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Vì sao chọn dịch vụ kiểm toán của TAF
        </h2>
        <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-0">
          {WHY_TAF.map((w) => (
            <li
              key={w}
              className="flex gap-3 py-4 border-t border-border font-serif text-foreground/85"
            >
              <Check size={18} className="text-accent-foreground shrink-0 mt-1" />
              <span className="leading-relaxed">{w}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA báo giá */}
      <Section className="bg-foreground text-background">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-background/60 mb-3">
              Báo giá dịch vụ
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Phí kiểm toán minh bạch, tương xứng phạm vi công việc
            </h2>
            <p className="mt-4 text-background/75 font-serif text-lg leading-relaxed max-w-2xl">
              TAF báo giá sau khảo sát sơ bộ. Chất lượng dịch vụ được khách hàng theo dõi
              trực tiếp qua tài khoản trực tuyến.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/lien-he"
              className="inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:opacity-90 transition"
            >
              Yêu cầu báo giá <ArrowUpRight size={18} />
            </Link>
            <a
              href="tel:+84924580580"
              className="inline-flex items-center justify-between gap-2 border border-background/30 text-background px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background/10 transition"
            >
              <span className="flex items-center gap-2">
                <Phone size={16} /> Hotline / Zalo
              </span>
              <span className="font-mono">0924 580 580</span>
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Câu trả lời ngắn cho những thắc mắc phổ biến nhất về dịch vụ kiểm toán độc
              lập.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-5">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-accent-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 font-serif leading-relaxed pl-10 pr-2">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>Đọc tiếp</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          Dịch vụ liên quan
        </h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {RELATED.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group bg-card border border-border hover:border-accent p-5 rounded-[2px] transition-colors flex items-center justify-between gap-4"
            >
              <span className="font-display text-base text-foreground">{r.label}</span>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-accent-foreground shrink-0"
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
