import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Lightbulb,
  ShieldCheck,
  Scale,
  KeyRound,
  CheckCircle2,
  Building2,
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
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ kiểm toán</Eyebrow>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground font-normal tracking-tight">
            Dịch vụ{" "}
            <span className="italic text-brand-red-ink">kiểm toán nội bộ.</span>
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
              <span className="uppercase tracking-[0.18em]">Yêu cầu tư vấn</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground px-7 py-4 text-sm font-medium rounded-[2px] hover:border-accent hover:text-foreground transition"
            >
              <Phone size={16} className="text-accent-foreground" /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="rule-gold mt-16" />
      </Section>

      {/* Khái niệm */}
      <Section className="!pt-0">
        <div className="max-w-3xl">
          <Eyebrow>Khái niệm</Eyebrow>
          <blockquote className="mt-2 border-l-2 border-brand-red pl-6">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
              “Kiểm toán nội bộ là gì?”
            </p>
            <p className="mt-4 text-lg text-muted-foreground font-serif leading-relaxed">
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
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {ROLES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group bg-cream/50 border border-accent/20 p-8 transition-all hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-background border border-accent/30 text-accent-foreground">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-xl text-foreground">{r.title}</h3>
                <p className="mt-3 text-sm text-foreground/75 font-serif leading-relaxed">
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
            <ul className="space-y-3">
              {TARGETS.map((t, i) => (
                <li
                  key={t}
                  className="bg-background border-l-2 border-accent p-5 flex gap-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]"
                >
                  <span className="shrink-0 font-display text-base text-brand-red-ink tabular-nums tracking-wider pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85 font-serif leading-relaxed">{t}</span>
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
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {STEPS.map((s, i) => (
            <div key={s.title} className="bg-background p-6">
              <span className="font-mono text-2xl text-brand-red-ink tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-foreground leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-serif leading-relaxed">
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
            <ul className="space-y-px bg-border border border-border">
              {POWERS.map((p) => (
                <li key={p} className="bg-background p-5 flex gap-3">
                  <KeyRound size={18} className="shrink-0 text-accent-foreground mt-0.5" />
                  <span className="text-sm text-foreground/85 font-serif leading-relaxed">{p}</span>
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
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Cam kết</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Lựa chọn TAF, doanh nghiệp được gì?
            </h2>
            <ul className="mt-6 space-y-4 font-serif text-foreground/85">
              {COMMITMENTS.map((c) => (
                <li key={c} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <Eyebrow>Về TAF</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Đôi nét về dịch vụ kiểm toán nội bộ TAF
            </h2>
            <ul className="mt-6 space-y-4 font-serif text-foreground/85">
              {ABOUT.map((a) => (
                <li key={a} className="border-l-2 border-accent pl-4 leading-relaxed">
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
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
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
              className="group bg-background p-7 flex flex-col hover:bg-cream/40 transition-colors"
            >
              <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-serif leading-relaxed flex-1">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-red">
                Xem chi tiết
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Thắc mắc thường gặp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Giải đáp về tính bắt buộc, thời gian thực hiện, chuẩn mực quốc tế và chứng chỉ hành
              nghề kiểm toán nội bộ.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-5 text-left">
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

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Nhận tư vấn ngay
              </p>
              <h2 className="font-display text-2xl md:text-[1.85rem] leading-tight text-foreground">
                Tăng cường quản trị rủi ro{" "}
                <span className="italic text-accent-foreground">cùng TAF.</span>
              </h2>
              <p className="mt-3 text-muted-foreground font-serif text-base leading-relaxed">
                Liên hệ để được khảo sát và trao đổi cụ thể về phạm vi, tiến độ và nguồn lực cho
                cuộc kiểm toán nội bộ của doanh nghiệp bạn.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
              >
                <span className="uppercase tracking-[0.15em]">Yêu cầu tư vấn</span>
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-between gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background hover:border-accent transition"
              >
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} /> Hotline / Zalo
                </span>
                <span className="font-mono text-accent-foreground">{HOTLINE_DISPLAY}</span>
              </a>
              <p className="text-xs text-muted-foreground text-center font-serif">
                Email: info@taf.vn · 62A Phạm Ngọc Thạch, Q.3, TP.HCM
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
