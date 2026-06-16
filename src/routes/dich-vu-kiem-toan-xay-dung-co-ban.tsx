import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  ClipboardCheck,
  ScrollText,
  Gauge,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow, SectionHeading } from "@/components/site/Section";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-kiem-toan-xay-dung-co-ban";
const TITLE = "Dịch vụ kiểm toán xây dựng cơ bản (quyết toán dự án) | TAF";
const DESCRIPTION =
  "TAF cung cấp dịch vụ kiểm toán xây dựng cơ bản — kiểm toán quyết toán vốn đầu tư dự án hoàn thành: kiểm tra, xác nhận báo cáo quyết toán, tư vấn quản lý dự án, hoàn thiện hồ sơ đúng quy định.";

export const Route = createFileRoute("/dich-vu-kiem-toan-xay-dung-co-ban")({
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
  component: ConstructionAuditService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const PURPOSE = [
  "Kiểm toán viên đưa ra ý kiến độc lập về công tác quyết toán vốn đầu tư của dự án.",
  "Tăng độ tin cậy của người sử dụng, chủ đầu tư, cổ đông, đối tác và cơ quan quản lý đối với báo cáo quyết toán hoàn thành dự án.",
];

const SCOPE = [
  "Kiểm tra và xác nhận báo cáo quyết toán dự án hoàn thành.",
  "Kiểm tra công tác kế toán về tính đầy đủ, phù hợp; đánh giá tính đúng đắn của các chỉ tiêu vốn, công nợ, tài sản; tính hợp pháp của hợp đồng kinh tế, biên bản nghiệm thu và chứng từ gốc.",
  "Tư vấn về điều hành, quản lý dự án đầu tư, hệ thống kiểm soát nội bộ; hoàn thiện, sắp xếp và lưu trữ hồ sơ quyết toán đúng quy định của dự án và của Nhà nước.",
];

const SERVICES = [
  "Kiểm toán báo cáo quyết toán dự án đầu tư hoàn thành.",
  "Kiểm toán báo cáo quyết toán chi phí đầu tư.",
  "Kiểm toán báo cáo quyết toán chi phí chuẩn bị đầu tư bị hủy bỏ.",
  "Kiểm toán lựa chọn phương án tối ưu (vật liệu, kết cấu, khối lượng, đơn giá) nhằm tiết kiệm chi phí.",
  "Kiểm toán kiện toàn hồ sơ phù hợp với quy định pháp luật.",
  "Kiểm toán báo cáo quyết toán dự án đầu tư bị dừng thực hiện vĩnh viễn.",
  "Kiểm toán báo cáo quyết toán gói thầu, công trình, hạng mục hoàn thành.",
  "Kiểm toán báo cáo quyết toán dự án quy hoạch sử dụng vốn đầu tư phát triển.",
  "Kiểm toán riêng cho từng khoản mục.",
  "Xác định nguyên giá tài sản cố định để đưa vào hệ thống, tính trích khấu hao và hoàn thiện hồ sơ xây dựng.",
  "Thẩm tra chi phí xây dựng cho công trình của cá nhân, tổ chức trong và ngoài nước.",
  "Kiểm toán khi không xác định được khối lượng công việc hoàn thành nhằm giải quyết tranh chấp.",
];

const TARGETS = [
  "Phòng tài chính huyện — cơ quan tham mưu, phê duyệt quyết toán.",
  "Các cơ sở tài chính (huyện làm chủ đầu tư, các sở, ban quản lý) — cấp tham mưu phê duyệt thuộc sở, ban ngành; các ban quản lý dự án.",
  "Chủ đầu tư các cấp — chủ doanh nghiệp, chủ đầu tư có nhu cầu sử dụng dịch vụ.",
  "Các ban quản lý dự án đầu tư xây dựng.",
];

const BENEFITS = [
  "Tiết kiệm chi phí và thời gian tiến hành kiểm toán.",
  "Hoàn thiện hồ sơ đúng và đủ, phù hợp với quy định của pháp luật.",
  "Xử lý các vấn đề cần kiểm soát và khắc phục các sai phạm trọng yếu.",
  "Hỗ trợ hoàn thiện hồ sơ quyết toán và làm việc với các bên phê duyệt, thẩm tra.",
];

const BENEFIT_ISSUES = [
  "Thủ tục hồ sơ pháp lý đúng quy định.",
  "Quá trình giải ngân, cấp phát vốn và quản lý trong lĩnh vực xây dựng cơ bản.",
  "Giá trị chi phí đầu tư đảm bảo đúng, đủ và tối ưu.",
  "Tài sản hình thành qua đầu tư, vật tư thiết bị và công nợ dự án còn tồn đọng.",
  "Thực hiện ý kiến chỉ đạo của các đơn vị Kiểm toán, Thanh tra Nhà nước.",
];

const STEPS = [
  {
    title: "Tìm hiểu thông tin",
    desc: "Nắm nhu cầu, thời gian và mục tiêu của khách hàng; tìm hiểu toàn bộ dữ liệu về công trình, dự án xây dựng cơ bản.",
  },
  {
    title: "Thương thảo & ký hợp đồng",
    desc: "Thống nhất quá trình làm việc, thương thảo và ký hợp đồng kiểm toán quyết toán dự án.",
  },
  {
    title: "Thông báo kế hoạch",
    desc: "Thông báo kế hoạch kiểm toán cụ thể, đề nghị phối hợp thực hiện và tạm ứng phí dịch vụ.",
  },
  {
    title: "Thực hiện kiểm toán",
    desc: "Nhận – bàn giao hồ sơ đầy đủ; kiểm tra tài liệu, số liệu theo quy trình nghiệp vụ; thảo luận để xử lý các vấn đề tồn đọng.",
  },
  {
    title: "Hoàn thiện báo cáo",
    desc: "Tổ chức họp, công bố và thống nhất số liệu cuối cùng; hoàn thiện báo cáo kiểm toán.",
  },
  {
    title: "Bàn giao",
    desc: "Bàn giao báo cáo kiểm toán, hồ sơ liên quan và hóa đơn tài chính; hoàn thiện thanh toán chi phí dịch vụ.",
  },
];

const WHY_TAF = [
  "Doanh nghiệp kiểm toán được Nhà nước cấp phép hoạt động (cùng khoảng 200 doanh nghiệp khác từ năm 2018).",
  "Đã cung cấp dịch vụ kiểm toán nói chung và kiểm toán quyết toán dự án cho hàng nghìn doanh nghiệp.",
  "Được hỗ trợ từ các chuyên gia đầu ngành, đội ngũ chuyên viên trình độ chuyên môn cao.",
  "Nhân viên thường xuyên cập nhật nghiệp vụ, nhiều kinh nghiệm thực tế và am hiểu môi trường kinh doanh.",
  "Hiệu quả làm việc thể hiện qua số lượng và chất lượng hợp đồng với đối tác khắp cả nước.",
  "Quy trình nhanh gọn, chính xác, đúng tiến độ và hỗ trợ khách hàng tối đa.",
  "Phối hợp hoặc trực tiếp giải trình trước các cơ quan có thẩm quyền khi cần thiết.",
];

const COMMITMENTS = [
  "Đội ngũ chuyên môn chuyên nghiệp, tư vấn chuyên sâu và linh hoạt theo từng lĩnh vực.",
  "Đáp ứng nhu cầu khách hàng, trung hòa lợi ích khách hàng với quy định pháp luật và chính sách Nhà nước.",
  "Triển khai công việc nhanh chóng, đảm bảo tiến độ đúng hợp đồng thỏa thuận.",
  "Giảm thiểu rủi ro, khắc phục nhược điểm trong sổ sách, nâng cao chất lượng kiểm soát nội bộ.",
  "Cam kết bảo mật thông tin khách hàng tuyệt đối.",
  "Chi phí dịch vụ hợp lý.",
];

const LEGAL = [
  { code: "Nghị định 44/2015/NĐ-CP", desc: "Quy định chi tiết một số nội dung về quy hoạch xây dựng.", date: "30/6/2015" },
  { code: "Thông tư 03/2015/TT-BKHĐT", desc: "Quy định chi tiết lập hồ sơ mời thầu xây lắp.", date: "01/7/2015" },
  { code: "Chỉ thị 07/CT-TTg", desc: "Tăng cường biện pháp xử lý nợ đọng xây dựng cơ bản nguồn vốn đầu tư công.", date: "30/4/2015" },
  { code: "Nghị định 37/2015/NĐ-CP", desc: "Quy định chi tiết về hợp đồng xây dựng.", date: "15/6/2015" },
  { code: "Nghị định 32/2015/NĐ-CP", desc: "Quản lý chi phí đầu tư xây dựng.", date: "10/5/2015" },
  { code: "Thông tư 01/2015/TT-BXD", desc: "Hướng dẫn xác định đơn giá nhân công trong quản lý chi phí đầu tư xây dựng.", date: "15/5/2015" },
  { code: "Nghị định 30/2015/NĐ-CP", desc: "Quy định chi tiết thi hành Luật Đấu thầu về lựa chọn nhà đầu tư.", date: "05/5/2015" },
  { code: "Quyết định 682/QĐ-TCHQ", desc: "Quy chế chức năng, nhiệm vụ Ban Quản lý dự án đầu tư xây dựng (Tổng cục Hải quan).", date: "12/3/2015" },
];

function ConstructionAuditService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Kiểm toán xây dựng cơ bản" }]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ kiểm toán</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Kiểm toán <span className="italic text-accent-foreground">xây dựng cơ bản</span>{" "}
            (quyết toán dự án).
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            Dịch vụ kiểm toán quyết toán vốn đầu tư dự án hoàn thành của TAF giúp doanh nghiệp hạn
            chế rủi ro, cập nhật quy định pháp lý – tài chính và đưa ra ý kiến độc lập về báo cáo
            quyết toán dự án.
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
              Kiểm toán quyết toán dự án là gì?
            </p>
            <p className="t-lead mt-4 text-muted-foreground">
              Là dịch vụ giúp doanh nghiệp hạn chế rủi ro, cập nhật thông tin về luật định, tài
              chính, kinh tế liên quan đến tình hình hoạt động của đơn vị — thông qua việc kiểm
              toán công tác quyết toán vốn đầu tư của dự án xây dựng cơ bản.
            </p>
          </blockquote>
        </div>
      </Section>

      {/* Mục đích + Nội dung */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Mục đích</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Mục đích của kiểm toán quyết toán dự án
            </h2>
            <ul className="mt-5 space-y-4 font-serif text-foreground/85">
              {PURPOSE.map((p) => (
                <li key={p} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <Eyebrow>Nội dung</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Nội dung thực hiện trong cuộc kiểm toán
            </h2>
            <ul className="mt-5 space-y-4 font-serif text-foreground/85">
              {SCOPE.map((s) => (
                <li key={s} className="border-l-2 border-accent pl-4 leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Danh mục dịch vụ */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Danh mục"
          title="Các dịch vụ kiểm toán xây dựng cơ bản"
          lead="TAF cung cấp đầy đủ các loại hình kiểm toán quyết toán trong lĩnh vực xây dựng cơ bản."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s, i) => (
            <div key={s} className="bg-background p-5 flex gap-3">
              <span className="font-mono text-xs text-accent-foreground tabular-nums shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="t-body-sm text-foreground/85">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Đối tượng */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Đối tượng</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Ai sử dụng dịch vụ này?
            </h2>
            <p className="t-body mt-4 text-muted-foreground">
              Dịch vụ phục vụ các cơ quan phê duyệt quyết toán, chủ đầu tư và ban quản lý dự án.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-px bg-border border border-border">
              {TARGETS.map((t) => (
                <li key={t} className="bg-background p-5 flex gap-3">
                  <Building2 size={20} className="shrink-0 text-accent-foreground mt-0.5" strokeWidth={1.7} />
                  <span className="t-body-sm text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Lợi ích */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Lợi ích"
          title="Lợi ích khi thực hiện kiểm toán xây dựng cơ bản"
        />
        <div className="mt-10 grid md:grid-cols-2 gap-px bg-border border border-border">
          {BENEFITS.map((b) => (
            <div key={b} className="bg-background p-6 flex gap-3">
              <Gauge size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[2px] border border-border bg-cream/50 p-6">
          <p className="text-sm font-medium text-foreground mb-3">
            Các sai phạm trọng yếu thường được kiểm soát và khắc phục:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {BENEFIT_ISSUES.map((x) => (
              <li
                key={x}
                className="text-sm text-foreground/75 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Quy trình 6 bước */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Quy trình"
          title="Quy trình dịch vụ 6 bước"
          lead="Quy trình rõ ràng từ tìm hiểu thông tin đến bàn giao báo cáo kiểm toán."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {STEPS.map((s, i) => (
            <div key={s.title} className="bg-background p-6">
              <span className="font-mono text-2xl text-brand-red-ink tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-foreground leading-snug">{s.title}</h3>
              <p className="t-body-sm mt-2 text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vì sao chọn TAF */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Vì sao TAF</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Vì sao chọn TAF?
            </h2>
            <p className="t-body-sm mt-4 text-muted-foreground">
              Kinh nghiệm thực tế, đội ngũ chuyên môn cao và quy trình làm việc chuyên nghiệp khắp
              cả nước.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-px bg-border border border-border">
              {WHY_TAF.map((w) => (
                <li key={w} className="bg-background p-5 flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="t-body-sm text-foreground/85">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Cam kết */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Cam kết" title="Cam kết của TAF" />
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {COMMITMENTS.map((c, i) => (
            <div key={c} className="bg-background p-6">
              <div className="flex items-center gap-2">
                <ClipboardCheck size={18} className="text-brand-red" />
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="t-body-sm mt-3 text-foreground/85">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Văn bản pháp luật */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Pháp lý"
          title="Hệ thống văn bản pháp luật liên quan"
          lead="TAF luôn cập nhật đầy đủ các văn bản pháp luật về kiểm toán xây dựng cơ bản."
        />
        <div className="mt-10 border-t border-border">
          {LEGAL.map((l) => (
            <div key={l.code} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 border-b border-border py-4">
              <div className="sm:w-64 shrink-0 flex items-center gap-2">
                <ScrollText size={16} className="text-accent-foreground shrink-0" />
                <span className="font-display text-sm text-foreground">{l.code}</span>
              </div>
              <p className="t-body-sm text-muted-foreground flex-1">
                {l.desc}{" "}
                <span className="text-foreground/70">(hiệu lực {l.date})</span>
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
                Quyết toán dự án{" "}
                <span className="italic text-accent-foreground">minh bạch, đúng quy định.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Liên hệ TAF để được khảo sát và báo giá dịch vụ kiểm toán quyết toán dự án phù hợp
                với quy mô công trình của bạn.
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
