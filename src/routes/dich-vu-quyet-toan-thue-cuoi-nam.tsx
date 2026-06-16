import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileSearch,
  ScrollText,
  Users,
  ShieldCheck,
  Calendar,
  ClipboardCheck,
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
const PATH = "/dich-vu-quyet-toan-thue-cuoi-nam";
const TITLE = "Dịch vụ quyết toán thuế cuối năm — Rà soát sổ sách, hồ sơ thuế | TAF";
const DESCRIPTION =
  "Dịch vụ quyết toán thuế cuối năm của TAF: rà soát sổ sách, chứng từ, tờ khai; hoàn thiện hồ sơ và lập báo cáo quyết toán TNDN, GTGT, TNCN đúng quy định, giảm rủi ro thuế cho doanh nghiệp.";

export const Route = createFileRoute("/dich-vu-quyet-toan-thue-cuoi-nam")({
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
  component: TaxSettlementService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const WHAT = [
  "Tổng hợp lại toàn bộ số liệu trong các khoản thuế của doanh nghiệp.",
  "Truy thu thuế TNDN, GTGT, TNCN mà doanh nghiệp phải cung cấp chính xác.",
  "Báo cáo tình trạng hoạt động của doanh nghiệp, từ đó thực hiện nghĩa vụ nộp thuế với cơ quan thuế.",
  "Nên tìm đến công ty dịch vụ kế toán uy tín để bảo vệ quyền lợi tối đa của doanh nghiệp.",
];

const IMPORTANCE = [
  "Bắt buộc khi cơ quan thuế yêu cầu thanh tra, quyết toán.",
  "Giúp cơ quan nhà nước quản lý tình trạng doanh nghiệp qua truy thu TNDN, GTGT, TNCN.",
  "Báo cáo tài chính quyết toán thuế có vai trò quan trọng.",
  "Cung cấp thông tin tài chính để doanh nghiệp đánh giá hiệu quả kinh doanh trong năm.",
  "Giúp quản lý nắm bắt dòng tài chính qua doanh thu và lợi nhuận.",
];

const NOTES = [
  "Kiểm tra, đối chiếu lại số liệu kế toán từ đầu năm để đảm bảo chính xác tuyệt đối.",
  "Đối chiếu số GTGT đã kê khai tháng/quý với bảng cân đối phát sinh, tìm và xử lý chênh lệch.",
  "Kiểm tra hóa đơn đầu ra, rà soát giá vốn đã phù hợp với phương pháp tính giá xuất kho chưa.",
  "Rà soát tài sản cố định, chi phí phân bổ; tính khấu hao và loại bỏ chi phí không được khấu trừ.",
  "Thống kê, kiểm tra lương, hợp đồng lao động và thuế TNCN của nhân viên.",
  "Phân loại chi phí được trừ và không được trừ để tính chính xác số thuế phải nộp.",
];

const LEGAL = [
  { code: "Điều 21 Thông tư 92/2015/TT-BTC", desc: "Hướng dẫn thực hiện thuế GTGT và TNCN đối với cá nhân cư trú có hoạt động kinh doanh." },
  { code: "Luật thuế số 71/2014/QH13 & Nghị định 12/2015/NĐ-CP", desc: "Quy định chi tiết thi hành Luật sửa đổi, bổ sung một số nội dung về thuế TNCN (ngày 12/02/2015)." },
  { code: "Công văn 5749/CT-TNCN", desc: "Cục thuế TP Hà Nội hướng dẫn quyết toán thuế TNCN và cấp mã số thuế người phụ thuộc." },
];

const WHO = [
  { icon: ClipboardCheck, title: "Doanh nghiệp", desc: "Quyết toán thuế là quyền và nghĩa vụ bắt buộc mà doanh nghiệp cần thực hiện." },
  { icon: Users, title: "Cá nhân có thu nhập", desc: "Người lao động có thu nhập cao, đủ điều kiện thực hiện nghĩa vụ quyết toán thuế trong năm." },
];

const CONSULT = [
  "Giải quyết khó khăn, vướng mắc về tài chính và số liệu thuế doanh nghiệp gặp phải.",
  "Tư vấn quy trình quyết toán phù hợp loại hình doanh nghiệp; hướng dẫn chuẩn bị và đánh giá hồ sơ trước khi quyết toán.",
  "Giúp quá trình quyết toán được chuẩn bị kỹ lưỡng, đầy đủ; chủ doanh nghiệp nắm rõ tình trạng thực tế.",
  "Bảo vệ lợi ích doanh nghiệp mà vẫn đảm bảo đúng quy định pháp luật.",
];

const PREPARE = [
  "Danh sách cá nhân lao động được trả lương trong năm.",
  "Hướng dẫn người lao động ủy quyền quyết toán thuế (UQ QTT).",
  "Thông tin những cá nhân lao động được giảm trừ gia cảnh.",
  "Kiểm tra thông tin và mã số thuế TNCN; đăng ký MST cho ai chưa có.",
];

const BENEFITS = [
  "Không mất thời gian tra cứu, cập nhật luật mới; đơn giản hóa thủ tục quyết toán thuế.",
  "Tối ưu chi phí — rà soát, kiểm tra để đưa ra quyết toán chính xác, đúng pháp luật.",
  "Đội ngũ chuyên gia chuẩn bị đầy đủ hồ sơ, lập báo cáo khai thuế và quyết toán đúng luật hiện hành.",
];

const CONTENT = [
  {
    no: "01",
    title: "Kiểm tra & rà soát chứng từ, hóa đơn, tờ khai thuế định kỳ",
    items: [
      "Thu thập số liệu: chứng từ, hóa đơn, tờ khai thuế định kỳ.",
      "Khảo sát hệ thống kế toán nội bộ doanh nghiệp.",
      "Kiểm tra, sắp xếp và phân loại chứng từ kế toán.",
      "Rà soát lại số liệu trên tờ khai thuế.",
      "Tư vấn rủi ro có thể gặp về sai sót trong chứng từ, hóa đơn, tờ khai.",
    ],
  },
  {
    no: "02",
    title: "Xử lý & hoàn thiện chứng từ, tờ khai, hóa đơn, BCTC, sổ sách",
    items: [
      "Kiểm tra, xử lý và hoàn thiện chứng từ, hóa đơn, tờ khai chưa hợp lệ.",
      "Xử lý và hoàn thiện sổ sách kế toán.",
      "Bổ sung và điều chỉnh tờ khai thuế.",
      "Lập báo cáo tài chính khớp với chứng từ, tờ khai thuế.",
      "Hoàn chỉnh tờ khai quyết toán thuế cuối năm.",
    ],
  },
];

const WHY_TAF = [
  { title: "Đội ngũ uy tín hàng đầu", desc: "Chuyên viên nhiều năm kinh nghiệm, giải quyết triệt để mọi vấn đề phát sinh trong quá trình quyết toán." },
  { title: "Chi phí cạnh tranh nhất", desc: "Báo giá dựa trên cơ sở dữ liệu và ngành nghề của doanh nghiệp — mức chi phí hợp lý nhất." },
];

const COMMITMENTS = [
  "Báo cáo quyết toán thuế chính xác, bảo vệ quyền và lợi ích doanh nghiệp đúng luật hiện hành.",
  "Cung cấp dịch vụ quyết toán thuế TNCN uy tín.",
  "Giảm nhẹ rủi ro tiềm ẩn — rà soát, đánh giá khách quan, nhận diện rủi ro thuế và đưa ra giải pháp khắc phục.",
];

const FAQS = [
  {
    q: "Thủ tục quyết toán thuế doanh nghiệp và TNCN cần giấy tờ gì?",
    a: "Tùy đối tượng quyết toán mà giấy tờ thay đổi. Thông thường doanh nghiệp cần chuẩn bị hồ sơ chứng từ, sổ sách thu chi hàng năm, các hợp đồng kinh tế và công nợ…",
  },
  {
    q: "Thời hạn nộp hồ sơ quyết toán thuế là bao lâu?",
    a: "Thời hạn nộp hồ sơ quyết toán thuế năm chậm nhất là ngày thứ 90, kể từ ngày kết thúc năm dương lịch hoặc năm tài chính.",
  },
  {
    q: "TAF có cung cấp tất cả dịch vụ liên quan đến quyết toán thuế không?",
    a: "Có. Riêng quyết toán thuế TNCN, hồ sơ gồm: tờ khai quyết toán mẫu 02/QTT-TNCN (theo TT 92/2015/TT-BTC); bản chụp chứng từ thuế đã tạm nộp, đã khấu trừ, các khoản đóng góp quỹ (nếu có); tài liệu chứng minh thu nhập từ đại sứ quán, lãnh sự quán, nước ngoài hoặc tổ chức quốc tế (nếu có).",
  },
  {
    q: "Giá dịch vụ quyết toán thuế TNCN như thế nào?",
    a: "Mức phí phụ thuộc dữ liệu và ngành nghề doanh nghiệp. Vui lòng liên hệ Hotline 0924 580 580 (Zalo) để được tư vấn và báo giá cụ thể.",
  },
  {
    q: "Hợp đồng dịch vụ quyết toán thuế ra sao?",
    a: "Hợp đồng được TAF trình bày rõ ràng, chi tiết quy trình thực hiện cùng các tài liệu, số liệu cần cung cấp để đảm bảo quyết toán thuế cuối năm chính xác.",
  },
];

function TaxSettlementService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Quyết toán thuế cuối năm" }]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ kế toán</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Quyết toán thuế cuối năm —{" "}
            <span className="italic text-accent-foreground">rà soát sổ sách, hồ sơ thuế</span>.
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            Quyết toán thuế đúng thời hạn là quyền và nghĩa vụ của mỗi doanh nghiệp. Nếu doanh
            nghiệp đang tồn đọng hồ sơ thuế hoặc chưa thể đưa ra báo cáo, TAF hỗ trợ rà soát, hoàn
            thiện và lập báo cáo quyết toán đúng quy định, giảm thiểu rủi ro.
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

      {/* Quyết toán thuế là gì + Tầm quan trọng */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Khái niệm</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Quyết toán thuế là làm gì?
            </h2>
            <ul className="mt-5 space-y-4 font-serif text-foreground/85">
              {WHAT.map((w) => (
                <li key={w} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <Eyebrow>Tầm quan trọng</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Vì sao quyết toán thuế cuối năm quan trọng?
            </h2>
            <ul className="mt-5 space-y-4 font-serif text-foreground/85">
              {IMPORTANCE.map((i) => (
                <li key={i} className="border-l-2 border-accent pl-4 leading-relaxed">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Lưu ý / rà soát */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Rà soát"
          title="Những việc cần rà soát khi quyết toán thuế"
          lead="Để quyết toán hiệu quả, cần kiểm tra và đối chiếu kỹ toàn bộ số liệu — đây cũng là phần việc TAF thực hiện thay doanh nghiệp."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {NOTES.map((n) => (
            <div key={n} className="bg-background p-6 flex gap-3">
              <FileSearch size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{n}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Căn cứ pháp lý + Đối tượng */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>Căn cứ pháp lý</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Căn cứ quyết toán thuế TNCN
            </h2>
            <ul className="mt-6 space-y-px bg-border border border-border">
              {LEGAL.map((l) => (
                <li key={l.code} className="bg-background p-5 flex gap-3">
                  <ScrollText size={18} className="shrink-0 text-accent-foreground mt-0.5" />
                  <div>
                    <p className="font-display text-sm text-foreground">{l.code}</p>
                    <p className="t-body-sm mt-1 text-muted-foreground">
                      {l.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>Đối tượng</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Ai phải quyết toán thuế TNCN?
            </h2>
            <div className="mt-6 space-y-px bg-border border border-border">
              {WHO.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="bg-background p-5">
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-brand-red" />
                      <h3 className="font-display text-base text-foreground">{w.title}</h3>
                    </div>
                    <p className="t-body-sm mt-2 text-muted-foreground">
                      {w.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Tư vấn + Chuẩn bị */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Tư vấn</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Tư vấn quyết toán thuế
            </h2>
            <ul className="mt-5 space-y-4 font-serif text-foreground/85">
              {CONSULT.map((c) => (
                <li key={c} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <Eyebrow>Chuẩn bị</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Cần chuẩn bị gì cho quyết toán thuế?
            </h2>
            <ul className="mt-5 space-y-3 font-serif text-foreground/85">
              {PREPARE.map((p, i) => (
                <li key={p} className="flex gap-3">
                  <span className="font-mono text-xs text-accent-foreground tabular-nums mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <p className="t-body-sm mt-5 text-muted-foreground italic">
              Trong một số trường hợp, cá nhân có thể ủy quyền cho doanh nghiệp thực hiện nghĩa vụ
              quyết toán thuế TNCN — áp dụng khi đủ điều kiện ủy quyền theo quy định hiện hành.
            </p>
          </div>
        </div>
      </Section>

      {/* Lợi ích */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Lợi ích" title="Lợi ích khi dùng dịch vụ tại TAF" />
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {BENEFITS.map((b, i) => (
            <div key={b} className="bg-background p-6">
              <span className="font-mono text-2xl text-brand-red-ink tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="t-body-sm mt-3 text-foreground/85">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Nội dung dịch vụ */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Nội dung dịch vụ"
          title="TAF thực hiện những gì?"
          lead="Hai nhóm công việc chính trong dịch vụ quyết toán thuế cuối năm của TAF."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-px bg-border border border-border">
          {CONTENT.map((c) => (
            <div key={c.no} className="bg-background p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl text-brand-red-ink tabular-nums">{c.no}</span>
                <h3 className="font-display text-lg text-foreground leading-snug">{c.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-foreground/80 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Vì sao TAF + Cam kết */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>Vì sao TAF</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Vì sao chọn dịch vụ quyết toán thuế của TAF?
            </h2>
            <div className="mt-6 space-y-px bg-border border border-border">
              {WHY_TAF.map((w) => (
                <div key={w.title} className="bg-background p-5">
                  <h3 className="font-display text-base text-foreground">{w.title}</h3>
                  <p className="t-body-sm mt-2 text-muted-foreground">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <Eyebrow>Cam kết</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Cam kết của TAF
            </h2>
            <ul className="mt-6 space-y-4 font-serif text-foreground/85">
              {COMMITMENTS.map((c) => (
                <li key={c} className="flex gap-3">
                  <ShieldCheck size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="t-h2 md:text-[2.25rem] text-foreground">
              Câu hỏi thường gặp
            </h2>
            <p className="t-body-sm mt-4 text-muted-foreground">
              Giải đáp về hồ sơ, thời hạn nộp, phạm vi dịch vụ, giá và hợp đồng quyết toán thuế.
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
                  <AccordionContent className="t-body text-foreground/80 pl-10 pr-2">
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
              <p className="t-cta text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Nhận tư vấn ngay
              </p>
              <h2 className="t-h2 md:text-[1.85rem] text-foreground">
                Quyết toán đúng hạn,{" "}
                <span className="italic text-accent-foreground">giảm rủi ro thuế.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Liên hệ TAF để được rà soát hồ sơ và báo giá dịch vụ quyết toán thuế cuối năm phù
                hợp với doanh nghiệp.{" "}
                <Calendar className="inline -mt-0.5 text-brand-red" size={16} /> Hạn nộp: ngày thứ
                90 sau khi kết thúc năm.
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
