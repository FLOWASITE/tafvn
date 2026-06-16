import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Receipt,
  FileSearch,
  Scale,
  Users,
  Plane,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow, SectionHeading } from "@/components/site/Section";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-tu-van-thue";
const TITLE = "Dịch vụ tư vấn thuế toàn quốc | TAF";
const DESCRIPTION =
  "Dịch vụ tư vấn thuế của TAF: cập nhật chính sách thuế, tuân thủ, hỗ trợ thanh – kiểm tra, thẩm định thuế, tư vấn TNCN và kế toán thuế trọn gói. Giảm rủi ro, tối ưu chi phí cho doanh nghiệp.";

export const Route = createFileRoute("/dich-vu-tu-van-thue")({
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
  component: TaxAdvisoryService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const ROLES = [
  "Cập nhật chính sách thuế thường xuyên cho doanh nghiệp — chính sách thuế liên tục thay đổi theo môi trường kinh doanh.",
  "Hỗ trợ cập nhật hằng ngày, tránh tình trạng làm thiếu, làm sai.",
  "Hạn chế tối đa rủi ro, giải quyết các tình huống phát sinh về vi phạm thuế.",
  "Giúp đơn vị nắm rõ quy định, tìm giải pháp toàn diện, đúng luật, giảm thiểu rủi ro và thiệt hại.",
  "Thay thế bộ phận kế toán thuế thường trực, tránh quá tải khi kế toán kiêm nhiệm.",
  "Giảm chi phí cho hệ thống kế toán thuế — chuyên nghiệp, chi phí thấp nhưng hiệu quả.",
  "Không tốn chi phí thuê và quản lý nhân sự, đầu tư trang thiết bị liên quan.",
];

const TAF_SERVICES = [
  "Tư vấn, giải đáp, hỗ trợ các vấn đề về chính sách thuế thu nhập doanh nghiệp.",
  "Tư vấn các sắc thuế khác: tài nguyên môi trường, xuất nhập khẩu, môn bài, tiêu thụ đặc biệt…",
  "Tư vấn thủ tục thành lập doanh nghiệp: đăng ký doanh nghiệp, đăng ký thuế ban đầu, đăng ký đầu tư…",
  "Định kỳ soát xét các vấn đề về thuế.",
  "Tư vấn và soát xét quyết toán thuế TNDN khi giải thể doanh nghiệp hoặc thanh tra thuế.",
];

const CONTENT_SERVICES: { icon: typeof Receipt; title: string; desc: string }[] = [
  {
    icon: Receipt,
    title: "Tư vấn & hỗ trợ tuân thủ thuế",
    desc: "Bao quát các sắc thuế: GTGT, nhà thầu nước ngoài, TNDN, TNCN, xuất nhập khẩu và chuyển giá; liên lạc với cơ quan thuế, quản trị rủi ro và giải quyết tranh chấp.",
  },
  {
    icon: FileSearch,
    title: "Hỗ trợ thanh, kiểm tra thuế",
    desc: "Đồng hành cùng doanh nghiệp trong từng giai đoạn — từ hoàn thiện sổ sách đến hỗ trợ giải trình với cơ quan thuế bởi chuyên gia giàu kinh nghiệm.",
  },
  {
    icon: Scale,
    title: "Thẩm định thuế",
    desc: "Tư vấn tài chính, pháp luật và các giao dịch mua bán – sáp nhập; thẩm định thuế, đánh giá rủi ro và xác định phương thức giao dịch hiệu quả về thuế.",
  },
  {
    icon: Users,
    title: "Tư vấn TNCN & thuyên chuyển nhân sự quốc tế",
    desc: "Giải pháp tối ưu cho thuyên chuyển nhân sự quốc tế; chuẩn bị và nộp tờ khai, quyết toán thuế TNCN; cấu trúc hệ thống lương hiệu quả.",
  },
  {
    icon: Plane,
    title: "Dịch vụ xuất nhập cảnh",
    desc: "Hỗ trợ tuân thủ quy định về thị thực và thủ tục cấp phép lao động cho người nước ngoài làm việc tại Việt Nam.",
  },
];

const WHY = [
  {
    title: "Văn bản thuế phức tạp, biến hóa theo từng trường hợp",
    points: [
      "Luật thuế thường xuyên đổi mới để bám sát môi trường kinh doanh.",
      "Dịch vụ giúp cập nhật nhanh, áp dụng chính sách mới kịp thời.",
      "Giải đáp thắc mắc hằng ngày, cung cấp bản tin thuế hàng tháng.",
    ],
  },
  {
    title: "Doanh nghiệp mới thành lập chưa nắm thủ tục thuế ban đầu",
    points: [
      "DN mới (đặc biệt FDI) khó chú trọng kế toán thuế khi đang thiết lập hệ thống.",
      "Dịch vụ giải quyết triệt để các rắc rối về Luật thuế.",
      "Soát xét định kỳ để phát hiện và xử lý kịp thời, tiết kiệm chi phí.",
    ],
  },
];

const TARGETS = [
  "Cá nhân",
  "Doanh nghiệp",
  "Hộ kinh doanh",
  "Ngân hàng",
  "Doanh nghiệp kinh doanh bảo hiểm",
  "Tổ chức kinh tế",
  "Tổ chức tín dụng",
];

const NEW_BIZ = [
  "Tư vấn và soạn hồ sơ thuế ban đầu: kê khai thuế ban đầu, mua token, mở tài khoản ngân hàng, đăng ký nộp thuế điện tử, đăng ký hóa đơn điện tử, thông báo phát hành hóa đơn…",
  "Với doanh nghiệp vừa và nhỏ: hỗ trợ hóa đơn, sổ sách kế toán thông qua việc đứng tên kế toán trưởng.",
  "Trực tiếp giải trình hồ sơ, số liệu trước cơ quan thuế theo yêu cầu.",
];

const MONTHLY = [
  "Tư vấn chính sách thuế: TNDN, GTGT, miễn giảm thuế, hướng dẫn quyết toán, khiếu nại – tố cáo, hóa đơn chứng từ.",
  "Cân đối chứng từ, báo cáo hóa đơn và chứng từ cho cơ quan thuế.",
  "Kê khai và lập báo cáo thuế hàng tháng.",
  "Nộp báo cáo thuế tại Chi cục thuế thay doanh nghiệp.",
  "Tư vấn tính thu nhập chịu thuế từ chi phí một cách hợp lý.",
];

const YEARLY = [
  "Lập và nộp quyết toán thuế TNDN, TNCN năm.",
  "Lập và nộp báo cáo tài chính năm.",
  "Hỗ trợ báo cáo kiểm toán với công ty có vốn đầu tư nước ngoài.",
  "Hoàn thiện hệ thống sổ sách theo quy định.",
];

const WHY_TAF = [
  "Giải pháp dịch vụ rõ ràng, chi tiết, kết hợp chặt chẽ với khách hàng.",
  "Đội ngũ chuyên gia đầu ngành, làm việc chuyên nghiệp và hỗ trợ chuyên sâu.",
  "Tư vấn chiến lược với chi phí dịch vụ ở mức hợp lý.",
  "Cập nhật kịp thời thông tư, nghị định, luật thuế mới — xử lý số liệu chính xác.",
];

const COMMITMENTS = [
  { title: "Tối ưu hóa chi phí", desc: "Gói dịch vụ phù hợp quy mô, ngành nghề và loại hình thuế của từng doanh nghiệp với chi phí cạnh tranh nhất." },
  { title: "Đảm bảo hiệu quả công việc", desc: "Đội ngũ giàu năng lực và kinh nghiệm, mang đến giải pháp toàn diện cho tất cả các sắc thuế tại Việt Nam." },
  { title: "Giảm thiểu rủi ro về thuế", desc: "Hệ thống tư vấn khoa học, lập kế hoạch và tính toán tối ưu, nâng cao hiệu quả kinh doanh và giảm rủi ro tiềm tàng." },
];

function TaxAdvisoryService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Tư vấn thuế" }]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ khác</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Dịch vụ <span className="italic text-accent-foreground">tư vấn thuế</span> toàn quốc.
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            Tư vấn thuế là dịch vụ pháp lý quan trọng giúp doanh nghiệp xác định chính xác các
            loại thuế và mức nộp. TAF hỗ trợ cập nhật chính sách, tuân thủ đúng luật và giảm thiểu
            rủi ro thuế cho cá nhân, hộ kinh doanh và doanh nghiệp.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
            >
              <span className="uppercase tracking-[0.15em]">Yêu cầu tư vấn</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:border-accent transition"
            >
              <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="rule-gold mt-12" />
      </Section>

      {/* Khái niệm */}
      <Section className="!pt-0">
        <div className="max-w-3xl">
          <Eyebrow>Khái niệm</Eyebrow>
          <blockquote className="mt-2 border-l-2 border-brand-red pl-6">
            <p className="t-h2 text-foreground">
              Tư vấn thuế là gì?
            </p>
            <p className="t-lead mt-4 text-muted-foreground">
              Là một trong những dịch vụ pháp lý quan trọng với doanh nghiệp. Ngành tư vấn thuế hỗ
              trợ doanh nghiệp biết chính xác mức thuế, các loại thuế phải nộp và tỷ lệ nộp tương
              ứng.
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Vai trò */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Vai trò" title="Vai trò của dịch vụ tư vấn thuế" />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {ROLES.map((r) => (
            <div key={r} className="bg-background p-5 flex gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Dịch vụ của TAF */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Dịch vụ</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Các dịch vụ tư vấn thuế của TAF
            </h2>
            <p className="t-body-sm mt-4 text-muted-foreground">
              Tư vấn toàn diện các sắc thuế và thủ tục liên quan cho doanh nghiệp.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-px bg-border border border-border">
              {TAF_SERVICES.map((s) => (
                <li key={s} className="bg-background p-5 flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-accent-foreground mt-0.5" strokeWidth={1.7} />
                  <span className="t-body-sm text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Nội dung tư vấn (5 sub-services) */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Nội dung"
          title="Nội dung tư vấn thuế chi tiết"
          lead="Năm nhóm dịch vụ tư vấn thuế chuyên sâu của TAF."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {CONTENT_SERVICES.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-background p-7">
                <Icon className="text-brand-red" size={24} strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg text-foreground leading-snug">{c.title}</h3>
                <p className="t-body-sm mt-2 text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Vì sao nên dùng */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading eyebrow="Lý do" title="Vì sao nên dùng dịch vụ tư vấn thuế?" />
        <div className="mt-10 grid md:grid-cols-2 gap-px bg-border border border-border">
          {WHY.map((w) => (
            <div key={w.title} className="bg-background p-7">
              <h3 className="font-display text-lg text-foreground leading-snug">{w.title}</h3>
              <ul className="mt-4 space-y-2">
                {w.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-foreground/80 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Đối tượng */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Đối tượng" title="Ai nên dùng dịch vụ tư vấn thuế?" />
        <div className="mt-10 flex flex-wrap gap-3">
          {TARGETS.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-[2px] border border-border bg-card px-4 py-2.5 text-sm text-foreground/85"
            >
              <Building2 size={15} className="text-accent-foreground" />
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Dịch vụ TAF gồm gì — DN mới thành lập + công việc tháng/năm */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Phạm vi"
          title="Dịch vụ tư vấn thuế của TAF gồm những gì?"
        />
        <div className="mt-10 space-y-10">
          <div>
            <h3 className="t-h3 text-foreground mb-4">
              Kế toán thuế cho doanh nghiệp mới thành lập
            </h3>
            <ul className="space-y-px bg-border border border-border">
              {NEW_BIZ.map((n) => (
                <li key={n} className="bg-background p-5 flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="t-body-sm text-foreground/85">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            <div className="bg-background p-7">
              <h3 className="font-display text-lg text-foreground">Công việc hàng tháng / quý</h3>
              <ul className="mt-4 space-y-2">
                {MONTHLY.map((m) => (
                  <li
                    key={m}
                    className="text-sm text-foreground/80 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-display text-lg text-foreground">Công việc cuối năm</h3>
              <ul className="mt-4 space-y-2">
                {YEARLY.map((y) => (
                  <li
                    key={y}
                    className="text-sm text-foreground/80 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
                  >
                    {y}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Vì sao TAF */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Vì sao TAF" title="Vì sao chọn dịch vụ tư vấn thuế của TAF?" />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {WHY_TAF.map((w) => (
            <div key={w} className="bg-background p-5 flex gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cam kết */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading eyebrow="Cam kết" title="Cam kết của TAF" />
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {COMMITMENTS.map((c) => (
            <div key={c.title} className="bg-background p-7">
              <ShieldCheck className="text-brand-red" size={24} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg text-foreground">{c.title}</h3>
              <p className="t-body-sm mt-2 text-muted-foreground">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="t-cta text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Nhận tư vấn ngay
              </p>
              <h2 className="t-h2 md:text-[1.85rem] text-foreground">
                Chủ động với thuế,{" "}
                <span className="italic text-accent-foreground">an tâm kinh doanh.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Liên hệ TAF để được tư vấn gói dịch vụ thuế phù hợp với quy mô và ngành nghề của
                doanh nghiệp bạn.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
              >
                <span className="uppercase tracking-[0.15em]">Yêu cầu báo giá</span>
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
