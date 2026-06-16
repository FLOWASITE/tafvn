import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Lightbulb,
  ShieldCheck,
  Scale,
  KeyRound,
  CheckCircle2,
  
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-kiem-toan-noi-bo";
const TITLE = "Dịch vụ kiểm toán nội bộ — Uy tín, độc lập, chuyên nghiệp | TAF";
const DESCRIPTION =
  "Dịch vụ kiểm toán nội bộ của TAF giúp doanh nghiệp tăng cường quản trị rủi ro, đánh giá hệ thống kiểm soát và nâng cao hiệu quả quản trị — độc lập, khách quan, đúng quy định.";

export const Route = createFileRoute("/dich-vu-kiem-toan-noi-bo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
  }),
  component: InternalAuditService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const ROLES = [
  {
    icon: Lightbulb,
    title: "Tư vấn",
    body: "Kiểm tra các bằng chứng khách quan để đánh giá hiệu quả, hiệu suất và tính tuân thủ, nhằm kiểm soát và hạn chế rủi ro.",
  },
  {
    icon: ShieldCheck,
    title: "Đảm bảo",
    body: "Xác định và kiểm soát thông tin xoay quanh báo cáo tài chính và các báo cáo liên quan, đảm bảo độ tin cậy của các đánh giá kiểm soát.",
  },
  {
    icon: Scale,
    title: "Độc lập",
    body: "Thực hiện kiểm toán, trao đổi kết quả và báo cáo độc lập cho các bên liên quan bằng thái độ công bằng, không định kiến, tránh xung đột lợi ích.",
  },
];

const TARGETS = [
  "Công ty niêm yết",
  "Doanh nghiệp mà Nhà nước sở hữu trên 50% vốn điều lệ, hoạt động theo mô hình công ty mẹ – công ty con",
  "Doanh nghiệp nhà nước là công ty mẹ, hoạt động theo mô hình công ty mẹ – công ty con",
];

const STEPS = [
  { title: "Lập kế hoạch", desc: "Xác định phạm vi, mục tiêu, nguồn lực và phương pháp cho cuộc kiểm toán." },
  { title: "Thực hiện kiểm toán", desc: "Thu thập và đánh giá bằng chứng, kiểm tra hệ thống kiểm soát và quy trình." },
  { title: "Báo cáo kết quả", desc: "Tổng hợp phát hiện, đánh giá rủi ro và đưa ra khuyến nghị cải tiến cụ thể." },
  { title: "Giám sát triển khai", desc: "Theo dõi việc thực hiện các khuyến nghị kiểm toán và mức độ khắc phục." },
];

const POWERS = [
  "Được gặp gỡ, trao đổi với Chủ tịch Hội đồng quản trị, Hội đồng quản trị và nhân sự của các đơn vị thành viên.",
  "Được toàn quyền tiếp cận số liệu, hồ sơ, tài sản của các đơn vị thành viên khi thực hiện kiểm toán nội bộ.",
  "Được tìm kiếm sự hỗ trợ từ các đơn vị bên trong hoặc bên ngoài tổ chức để phục vụ hoạt động kiểm toán.",
  "Được phân bổ đối tượng, tần suất, nguồn lực, phạm vi công việc và kỹ thuật cần thiết để hoàn thành mục tiêu kiểm toán.",
];

const COMMITMENTS = [
  "Đánh giá khách quan, kỹ lưỡng các rủi ro chính yếu của doanh nghiệp và tác động tương ứng của những rủi ro đó.",
  "Đánh giá hiệu quả đạt được so với kỳ vọng của hội đồng quản trị, ban lãnh đạo và cổ đông đối với hệ thống kiểm soát hiện hữu.",
];

const ABOUT = [
  "TAF (Công ty TNHH Tư vấn Kiểm toán TAF) được Bộ Tài chính cấp phép hoạt động.",
  "Đội ngũ nhân sự cao cấp, nhiều năm kinh nghiệm, đã thực hiện kiểm toán nội bộ cho nhiều tập đoàn và doanh nghiệp lớn trên cả nước.",
  "Khách hàng hoàn toàn yên tâm về chất lượng dịch vụ và giá trị gia tăng đạt được khi lựa chọn TAF.",
];

const FAQS = [
  {
    q: "Kiểm toán nội bộ có bắt buộc không?",
    a: "Theo Nghị định 05/2019/NĐ-CP, các đơn vị bắt buộc thực hiện kiểm toán nội bộ gồm: công ty niêm yết; công ty mẹ của doanh nghiệp mà Nhà nước sở hữu trên 50% vốn điều lệ hoạt động theo mô hình công ty mẹ – công ty con; và công ty mẹ của doanh nghiệp nhà nước hoạt động theo mô hình công ty mẹ – công ty con.",
  },
  {
    q: "Kiểm toán nội bộ kiểm tra bộ phận kế toán có phải là kiểm soát nội bộ không?",
    a: "Kiểm toán nội bộ kiểm tra bộ phận kế toán là quá trình kiểm tra, đánh giá và giám sát tính đầy đủ, thích hợp và hữu hiệu của hệ thống kiểm soát nội bộ.",
  },
  {
    q: "Thời gian thực hiện dịch vụ kiểm toán nội bộ là bao lâu?",
    a: "Thời gian phụ thuộc vào phạm vi công việc, mức độ phản hồi và sự hợp tác của khách hàng. TAF sẽ trao đổi cụ thể về tiến độ và huy động nguồn lực phù hợp để hoàn thành đúng thỏa thuận.",
  },
  {
    q: "Chuẩn mực kiểm toán nội bộ quốc tế là gì?",
    a: "Chuẩn mực kiểm toán nội bộ quốc tế do Hiệp hội Kiểm toán nội bộ Hoa Kỳ ban hành lần đầu năm 1978. Các bản sửa đổi gần đây nhấn mạnh vai trò báo cáo chức năng cho Ban giám đốc và Hội đồng quản trị (Chuẩn mực 1000, 2060) và đảm bảo tính độc lập của giám đốc điều hành kiểm toán.",
  },
  {
    q: "Kiểm toán nội bộ có cần chứng chỉ hành nghề gì?",
    a: "Kiểm toán nội bộ đòi hỏi kỹ năng và năng lực chuyên môn. Chứng chỉ CIA (Certified Internal Auditor) là chứng chỉ hành nghề được công nhận toàn cầu dành cho chuyên viên kiểm toán nội bộ.",
  },
];

function InternalAuditService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Kiểm toán nội bộ" }]}
      />

      {/* Hero */}
      <Section className="!pb-10 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg pointer-events-none opacity-60" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground/70 mb-6">
            TAF · Auditing &amp; Advisory · Est. 2010
          </p>
          <Eyebrow>Dịch vụ kiểm toán</Eyebrow>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground font-normal tracking-tight">
            Dịch vụ{" "}
            <span className="italic text-brand-red-ink italic-mark">kiểm toán nội bộ.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Kiểm toán nội bộ là hoạt động tư vấn và đảm bảo khách quan nhằm tăng cường quản trị
            rủi ro, đánh giá hệ thống kiểm soát và nâng cao hiệu quả quản trị doanh nghiệp. TAF
            cung cấp dịch vụ độc lập, chuyên nghiệp, tuân thủ nghiêm ngặt các chuẩn mực.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-between gap-3 bg-brand-red text-white px-7 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all min-w-[260px]"
            >
              <span className="flex items-center gap-2.5 uppercase tracking-[0.18em]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Yêu cầu tư vấn
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground px-7 py-4 text-sm font-medium rounded-[2px] hover:border-accent hover:text-foreground transition"
            >
              <Phone size={16} className="text-accent-foreground" /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>

          {/* Stat strip */}
          <dl className="relative mt-14 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { num: "15+", label: "Năm kinh nghiệm" },
              { num: "300+", label: "Doanh nghiệp đồng hành" },
              { num: "9", label: "Tỉnh thành hiện diện" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`pl-5 ${i > 0 ? "border-l border-accent/30" : ""}`}
              >
                <dt className="font-display text-3xl md:text-4xl text-foreground tabular-nums leading-none">
                  {s.num}
                </dt>
                <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/80 font-medium">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rule-gold mt-16 relative" />
      </Section>

      {/* Khái niệm */}
      <Section className="!pt-0">
        <div className="max-w-3xl relative">
          <span
            aria-hidden
            className="absolute -top-8 -left-2 md:-left-10 font-display text-[8rem] md:text-[10rem] leading-none text-accent/25 select-none brace-glow pointer-events-none"
          >
            “
          </span>
          <Eyebrow>Khái niệm</Eyebrow>
          <blockquote className="mt-2 border-l-2 border-brand-red pl-6 relative">
            <p className="font-display italic text-3xl md:text-4xl text-foreground leading-snug">
              Kiểm toán nội bộ là gì?
            </p>
            <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
              Kiểm toán nội bộ là bộ phận bắt buộc trong nhiều doanh nghiệp, thực hiện các hoạt
              động tư vấn và đảm bảo khách quan nhằm gia tăng giá trị và giải quyết hiệu quả các
              hoạt động cho đơn vị.
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Vai trò */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Vai trò"
          title="Vai trò của kiểm toán nội bộ trong doanh nghiệp"
          lead="Kiểm toán nội bộ hỗ trợ tối đa cho quản lý rủi ro, đảm bảo hiệu quả kiểm soát, đồng thời đánh giá và khuyến nghị để nâng cao hiệu quả quản trị."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {ROLES.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative bg-cream/50 border border-accent/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.12)]"
              >
                <span className="absolute top-5 right-6 font-display italic text-sm text-accent-foreground/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-background border border-accent/40 text-accent-foreground transition-colors group-hover:border-accent">
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <h3 className="mt-7 font-display text-xl text-foreground">{r.title}</h3>
                <span className="block mt-3 h-px w-8 bg-brand-red/70" />
                <p className="mt-4 text-sm text-foreground/75 font-serif leading-relaxed">
                  {r.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Đối tượng bắt buộc */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Đối tượng</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Ai bắt buộc phải kiểm toán nội bộ?
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-serif leading-relaxed">
              Theo Điều 10 Nghị định 05/2019/NĐ-CP, các doanh nghiệp sau đây là đối tượng bắt buộc
              thực hiện kiểm toán nội bộ.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-accent/20 border-t border-b border-accent/20">
              {TARGETS.map((t, i) => (
                <li
                  key={t}
                  className="group py-6 flex items-start gap-6 border-l-[3px] border-transparent hover:border-accent hover:pl-4 transition-all duration-300"
                >
                  <span className="shrink-0 font-display italic text-4xl text-accent-foreground/35 tabular-nums leading-none w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground/85 font-serif leading-relaxed pt-1">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Quy trình 4 bước */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Quy trình"
          title="Quy trình kiểm toán nội bộ tại TAF"
          lead="Bốn bước chuẩn hóa giúp cuộc kiểm toán nội bộ minh bạch, hiệu quả và bám sát mục tiêu của doanh nghiệp."
        />
        <div className="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <span
            aria-hidden
            className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
          {STEPS.map((s, i) => (
            <div key={s.title} className="group relative">
              <div className="relative flex items-center gap-4">
                <span className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-background border border-accent/40 flex items-center justify-center font-display italic text-xl text-brand-red-ink tabular-nums transition-colors group-hover:border-brand-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-foreground leading-snug">
                {s.title}
                <span className="block mt-2 h-[2px] w-8 bg-brand-red transition-all duration-300 group-hover:w-16" />
              </h3>
              <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quyền hạn */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Quyền hạn</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Quyền hạn của kiểm toán nội bộ
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-serif leading-relaxed">
              Để hoàn thành tốt mục tiêu, bộ phận kiểm toán nội bộ được trao những quyền hạn cụ
              thể trong tổ chức.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-accent/30 lg:columns-1 xl:columns-1">
              {POWERS.map((p) => (
                <li key={p} className="py-5 flex gap-4 border-b border-accent/20 break-inside-avoid">
                  <span className="shrink-0 w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent-foreground">
                    <KeyRound size={15} strokeWidth={1.7} />
                  </span>
                  <span className="text-sm text-foreground/85 font-serif leading-relaxed pt-1.5">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tình trạng ở VN */}
      <Section className="!pt-0">
        <div className="max-w-3xl">
          <Eyebrow>Thực trạng</Eyebrow>
          <h2 className="font-display text-3xl text-foreground leading-tight">
            Kiểm toán nội bộ ở Việt Nam
          </h2>
          <div className="mt-5 space-y-4 text-base text-muted-foreground font-serif leading-relaxed">
            <p>
              Dù đã có nhiều quy định pháp lý liên quan, kiểm toán nội bộ vẫn là khái niệm khá mới
              mẻ với nhiều đơn vị quản lý — bên cạnh đó cũng có nhiều đơn vị đã nắm bắt được tầm
              quan trọng và vai trò của nó.
            </p>
            <p>
              Phần lớn kiểm toán nội bộ ở nước ta hiện được hình thành trên nền tảng công tác kiểm
              tra kế toán trước đây, từ đó phát sinh nhiều vướng mắc cần tháo gỡ và hoàn thiện.
            </p>
            <p>
              Hầu hết đơn vị chưa có đội ngũ kiểm toán nội bộ hoặc bộ phận kiêm nhiệm hiệu quả chưa
              cao. Nhiều đơn vị tìm đến dịch vụ kiểm toán nội bộ thuê ngoài để đảm bảo tính độc
              lập, khách quan và chuyên nghiệp.
            </p>
          </div>
        </div>
      </Section>

      {/* Cam kết / Vì sao TAF */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-cream/60 border-l-4 border-brand-red p-8 md:p-10">
            <Eyebrow>Cam kết</Eyebrow>
            <h2 className="font-display italic text-3xl text-foreground leading-tight">
              Lựa chọn TAF, doanh nghiệp được gì?
            </h2>
            <ul className="mt-7 space-y-5 font-serif text-foreground/85 text-base">
              {COMMITMENTS.map((c) => (
                <li key={c} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-4">
            <Eyebrow>Về TAF</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Đôi nét về dịch vụ kiểm toán nội bộ TAF
            </h2>
            <ul className="mt-7 space-y-5 font-serif text-foreground/85 text-base">
              {ABOUT.map((a) => (
                <li key={a} className="border-l-2 border-accent pl-5 leading-relaxed">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Dịch vụ liên quan */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Dịch vụ liên quan"
          title="Khám phá thêm các dịch vụ của TAF"
          lead="Bên cạnh kiểm toán nội bộ, TAF cung cấp đa dạng dịch vụ kiểm toán, tư vấn thuế và soát xét đặc biệt — đồng hành cùng doanh nghiệp ở mọi giai đoạn phát triển."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Kiểm toán báo cáo tài chính",
              desc: "Phát hành báo cáo kiểm toán độc lập, đáp ứng yêu cầu cổ đông, ngân hàng và cơ quan quản lý.",
              to: "/dich-vu-kiem-toan",
            },
            {
              title: "Tư vấn thuế",
              desc: "Tối ưu nghĩa vụ thuế, rà soát rủi ro và đại diện làm việc với cơ quan thuế trong toàn bộ vòng đời doanh nghiệp.",
              to: "/dich-vu-tu-van-thue",
            },
            {
              title: "Rà soát đặc biệt · M&A Due Diligence",
              desc: "Đánh giá toàn diện tài chính, thuế và pháp lý phục vụ giao dịch mua bán, sáp nhập và tái cấu trúc.",
              to: "/dich-vu-ra-soat-dac-biet-m-a-due-diligence",
            },
          ].map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group bg-background border border-accent/20 p-7 flex flex-col hover:border-accent/60 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all"
            >
              <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground font-serif leading-relaxed flex-1">
                {s.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red font-medium">
                Xem chi tiết
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-foreground">
              Thắc mắc <span className="italic">thường gặp.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground font-serif leading-relaxed">
              Giải đáp về tính bắt buộc, thời gian thực hiện, chuẩn mực quốc tế và chứng chỉ hành
              nghề kiểm toán nội bộ.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              className="border-t border-accent/30 [&_button>svg.lucide-chevron-down]:hidden"
            >
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-accent/20 group"
                >
                  <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-6 text-left hover:no-underline [&[data-state=open]_.faq-plus]:rotate-45 [&[data-state=open]_.faq-num]:text-brand-red-ink">
                    <span className="flex items-baseline gap-5 flex-1 pr-4">
                      <span className="faq-num font-display italic text-base text-accent-foreground/60 tabular-nums shrink-0 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{f.q}</span>
                    </span>
                    <span
                      aria-hidden
                      className="faq-plus relative shrink-0 w-5 h-5 text-accent-foreground transition-transform duration-300"
                    >
                      <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-current" />
                      <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-current" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 font-serif leading-relaxed pl-11 pr-2 pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>


      {/* CTA */}
      <Section className="!pt-0">
        <div className="relative bg-foreground text-background p-8 md:p-14 overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent mb-5 flex items-center gap-3 font-medium">
                <span className="inline-block w-8 h-px bg-accent" />
                Nhận tư vấn ngay
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] text-background">
                Tăng cường quản trị rủi ro{" "}
                <span className="italic text-accent">cùng TAF.</span>
              </h2>
              <p className="mt-5 text-background/70 font-serif text-base md:text-lg leading-relaxed max-w-xl">
                Liên hệ để được khảo sát và trao đổi cụ thể về phạm vi, tiến độ và nguồn lực cho
                cuộc kiểm toán nội bộ của doanh nghiệp bạn.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-7 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
              >
                <span className="uppercase tracking-[0.18em]">Yêu cầu tư vấn</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-between gap-2 border border-accent/40 text-background px-7 py-4 text-sm font-medium rounded-[2px] hover:border-accent hover:bg-accent/10 transition"
              >
                <span className="flex items-center gap-2 text-background/70">
                  <Phone size={16} className="text-accent" /> Hotline / Zalo
                </span>
                <span className="font-mono text-accent">{HOTLINE_DISPLAY}</span>
              </a>
              <p className="text-xs text-background/50 text-center font-serif mt-2">
                Email: info@taf.vn · 62A Phạm Ngọc Thạch, Q.3, TP.HCM
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
