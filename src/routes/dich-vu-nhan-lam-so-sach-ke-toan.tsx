import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-nhan-lam-so-sach-ke-toan";
const TITLE = "Dịch vụ làm sổ sách kế toán A–Z — Giá từ 2.500.000đ | TAF";
const DESCRIPTION =
  "Dịch vụ làm và làm lại sổ sách kế toán tại TAF: kiểm tra, điều chỉnh số liệu, chuẩn hóa chứng từ và lập sổ sách đầy đủ, đúng quy định. Chỉ từ 2.500.000đ, bàn giao file mềm và bản in.";

export const Route = createFileRoute("/dich-vu-nhan-lam-so-sach-ke-toan")({
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
  component: BookkeepingService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";
const ZALO = "https://zalo.me/0924580580";

const TARGETS = [
  "Doanh nghiệp chưa từng lập sổ sách kế toán",
  "Đã có sổ sách nhưng dữ liệu chưa chính xác, còn thiếu sót",
  "Đang chuẩn bị cho kỳ quyết toán thuế với cơ quan thuế",
  "Chưa có nhân sự kế toán phụ trách",
  "Có kế toán viên nhưng chưa đủ kinh nghiệm/chuyên môn làm sổ sách",
  "Muốn rà soát lại sổ sách đã lập để đảm bảo đúng và đủ số liệu",
];

const BOOKS = [
  "Sổ nhật ký chung",
  "Sổ cái tài khoản",
  "Sổ chi tiết tài khoản",
  "Sổ quỹ tiền mặt",
  "Sổ tiền gửi ngân hàng",
  "Bảng khấu hao tài sản cố định",
  "Bảng tổng hợp nhập – xuất – tồn",
  "Sổ theo dõi chi phí trả trước",
  "Phiếu thu, phiếu chi",
  "Phiếu nhập kho, xuất kho",
];

const QUOTE_CELL = "Liên hệ nhận báo giá";

const PRICE_CONSULT: [string, string][] = [
  ["Không có hóa đơn", "2.500.000đ"],
  ["Dưới 20 hóa đơn", "5.000.000đ"],
  ["Dưới 40 hóa đơn", "7.500.000đ"],
  ["Dưới 60 hóa đơn", "9.000.000đ"],
  ["Dưới 80 hóa đơn", "10.000.000đ"],
  ["Dưới 110 hóa đơn", "11.000.000đ"],
  ["Dưới 130 hóa đơn", "13.000.000đ"],
  ["Dưới 150 hóa đơn", "14.000.000đ"],
  ["Từ 150 hóa đơn trở lên", QUOTE_CELL],
];

const PRICE_TRADE: [string, string, string][] = [
  ["Không có hóa đơn", "2.500.000đ", "2.500.000đ"],
  ["Dưới 20 hóa đơn", "4.000.000đ", "6.000.000đ"],
  ["Dưới 40 hóa đơn", "6.000.000đ", "8.000.000đ"],
  ["Dưới 70 hóa đơn", "8.000.000đ", "10.000.000đ"],
  ["Dưới 100 hóa đơn", "10.000.000đ", "12.000.000đ"],
  ["Dưới 130 hóa đơn", "12.000.000đ", "14.000.000đ"],
  ["Dưới 150 hóa đơn", "13.500.000đ", "15.500.000đ"],
  ["Dưới 180 hóa đơn", "15.000.000đ", "17.000.000đ"],
  ["Từ 180 hóa đơn trở lên", QUOTE_CELL, ""],
];

const PRICE_BUILD: [string, string][] = [
  ["Không có hóa đơn", "2.500.000đ"],
  ["Dưới 10 hóa đơn", "5.000.000đ"],
  ["Dưới 20 hóa đơn", "8.000.000đ"],
  ["Dưới 40 hóa đơn", "12.000.000đ"],
  ["Dưới 60 hóa đơn", "15.000.000đ"],
  ["Từ 60 hóa đơn trở lên", QUOTE_CELL],
];

const STEPS = [
  "Tiếp nhận đầy đủ chứng từ kế toán và hóa đơn do doanh nghiệp cung cấp để bắt đầu xử lý.",
  "Rà soát tính hợp lệ, hợp pháp của toàn bộ chứng từ đầu vào – đầu ra theo quy định thuế hiện hành.",
  "Nhập liệu kế toán, đối chiếu với các tờ khai thuế đã nộp — hỗ trợ tư vấn và điều chỉnh tờ khai miễn phí nếu phát hiện sai sót.",
  "Tổng hợp số liệu, lập sổ sách đầy đủ, phản ánh chính xác hoạt động kinh doanh và đề xuất giải pháp tối ưu.",
  "Chốt số liệu cùng doanh nghiệp và hoàn thiện hệ thống sổ sách theo chuẩn mực kế toán Việt Nam.",
  "Xuất bản và in ấn đầy đủ sổ sách theo yêu cầu của cơ quan quản lý và lưu trữ nội bộ.",
  "Bàn giao trọn bộ sổ sách dưới dạng file mềm (PDF/Excel) và bản cứng, giao tận nơi nếu khách hàng yêu cầu.",
];

const DOCS = [
  "Hóa đơn GTGT đầu vào, đầu ra phát sinh trong năm cần làm sổ sách",
  "Sao kê tài khoản ngân hàng của năm làm sổ sách",
  "Bảng lương và thông tin CMND/CCCD của người lao động (nếu có chi trả lương)",
  "Thông tin đăng nhập trang khai thuế điện tử",
  "Công ty sản xuất: thông tin định mức sản phẩm",
  "Công ty xây dựng: bảng dự toán hoặc thông tin vật tư xuất cho công trình",
  "Số liệu sổ sách năm trước (nếu có)",
];

const BENEFITS = [
  "Bảo mật tuyệt đối thông tin doanh nghiệp — không chia sẻ cho bên thứ ba.",
  "Miễn phí giao nhận hồ sơ tận nơi trong suốt quá trình thực hiện.",
  "Hoàn thiện sổ sách đúng chuẩn theo quy định pháp luật và chuẩn mực kế toán hiện hành.",
  "Tư vấn miễn phí, hỗ trợ xử lý các vấn đề phát sinh về kế toán – thuế.",
  "Đề xuất phương án tối ưu chi phí được trừ khi tính thuế thu nhập doanh nghiệp.",
  "Miễn phí tư vấn và điều chỉnh báo cáo thuế đã nộp nếu phát hiện sai sót.",
  "Chịu trách nhiệm với cơ quan thuế đối với sổ sách do TAF thực hiện từ số liệu khách hàng cung cấp.",
  "Bàn giao đầy đủ file mềm và bản in sổ sách, tiện cho lưu trữ và kiểm tra.",
  "Đội ngũ chuyên viên hỗ trợ nhanh, đồng hành cả sau khi hoàn thành dịch vụ.",
];

const FAQS = [
  {
    q: "Chi phí dịch vụ làm sổ sách kế toán tại TAF là bao nhiêu?",
    a: "Phí khởi điểm chỉ từ 2.500.000đ, áp dụng cho nhiều loại hình: thương mại, tư vấn, xây dựng – nội thất, sản xuất, gia công, nhà hàng, lắp đặt… Mức phí cụ thể phụ thuộc số lượng hóa đơn đầu vào – đầu ra và độ chi tiết của hồ sơ. Vui lòng liên hệ TAF để được báo giá chính xác theo tình trạng thực tế.",
  },
  {
    q: "Điểm khác biệt của dịch vụ làm sổ sách kế toán tại TAF là gì?",
    a: "Doanh nghiệp được miễn phí tư vấn và điều chỉnh báo cáo thuế đã nộp nếu phát hiện sai sót khi rà soát. TAF cam kết bảo mật tuyệt đối, miễn phí nhận/trả hồ sơ tận nơi, hoàn thiện sổ sách đúng chuẩn mực, đề xuất giải pháp tối ưu chi phí được trừ khi tính thuế TNDN và chịu trách nhiệm với cơ quan thuế đối với sổ sách do TAF thực hiện.",
  },
  {
    q: "Sổ sách kế toán bao gồm những loại gì?",
    a: "Hệ thống sổ sách thường gồm: sổ nhật ký chung, sổ cái tài khoản, sổ chi tiết từng tài khoản, sổ quỹ tiền mặt, sổ tiền gửi ngân hàng, bảng khấu hao TSCĐ, bảng tổng hợp nhập – xuất – tồn kho, sổ theo dõi chi phí trả trước, phiếu thu – chi và phiếu nhập – xuất kho.",
  },
  {
    q: "Doanh nghiệp không có hóa đơn thì có cần làm sổ sách không?",
    a: "Có. Dù không phát sinh hóa đơn trong kỳ, doanh nghiệp vẫn phải thực hiện và in sổ sách để tránh vi phạm hành chính, mức phạt có thể lên đến 30 triệu đồng. Với trường hợp ít chứng từ, TAF có thể hoàn thiện sổ sách chỉ trong khoảng 2 ngày làm việc.",
  },
  {
    q: "Dịch vụ làm sổ sách tại TAF có chịu trách nhiệm khi cơ quan thuế kiểm tra không?",
    a: "Có. TAF chịu trách nhiệm đối với số liệu, sổ sách do TAF thực hiện dựa trên chứng từ khách hàng cung cấp, đồng thời đồng hành tư vấn và hỗ trợ giải trình khi doanh nghiệp làm việc với cơ quan thuế.",
  },
];

function PriceContact() {
  return (
    <a
      href={ZALO}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
    >
      {QUOTE_CELL} · {HOTLINE_DISPLAY} (Zalo)
    </a>
  );
}

function BookkeepingService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Làm sổ sách kế toán" }]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ kế toán</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Dịch vụ làm sổ sách kế toán{" "}
            <span className="italic text-accent-foreground">hỗ trợ từ A–Z</span>.
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-[2px] border border-brand-red/30 bg-brand-red-soft px-4 py-2">
            <span className="text-sm text-muted-foreground">Chi phí chỉ từ</span>
            <span className="font-display text-xl text-brand-red-ink">2.500.000đ</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground font-serif leading-relaxed">
            TAF giúp doanh nghiệp hoàn thiện toàn bộ sổ sách cuối năm: kiểm tra – điều chỉnh số
            liệu – chuẩn hóa chứng từ và lập sổ sách kế toán đầy đủ, chính xác, tuân thủ quy định
            pháp luật. Bàn giao trọn bộ file mềm và bản in.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
            >
              <span className="uppercase tracking-[0.15em]">Yêu cầu báo giá</span>
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

      {/* Đối tượng */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Đối tượng"
          title="Doanh nghiệp nào nên dùng dịch vụ làm sổ sách?"
          lead="Mỗi doanh nghiệp chỉ có một hệ thống sổ sách kế toán phản ánh toàn bộ hoạt động tài chính. Nếu thuộc một trong các trường hợp dưới đây, doanh nghiệp nên cân nhắc sử dụng dịch vụ tại TAF."
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {TARGETS.map((t) => (
            <div key={t} className="bg-background p-6 flex gap-3">
              <CheckCircle2 size={20} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="text-sm text-foreground/85 font-serif leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sổ sách là gì + gồm gì */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Khái niệm</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Sổ sách kế toán gồm những gì?
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-serif leading-relaxed">
              Sổ sách kế toán là hệ thống biểu mẫu ghi chép toàn bộ nghiệp vụ kinh tế – tài chính
              phát sinh theo trình tự thời gian và nội dung nghiệp vụ. Đây là căn cứ để lập báo
              cáo tài chính, giải trình với cơ quan thuế và phản ánh trung thực tình hình tài
              chính. Sổ sách phải lập theo chuẩn mực kế toán Việt Nam và được in, đóng dấu, lưu
              trữ đúng quy định.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {BOOKS.map((b, i) => (
                <li key={b} className="bg-background p-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-foreground tabular-nums w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85">{b}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Bảng phí */}
      <Section className="!pt-0" id="bang-phi">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Bảng phí"
          title="Chi phí dịch vụ làm sổ sách kế toán"
          lead="Phí áp dụng trên phạm vi toàn quốc, tham khảo theo số lượng hóa đơn đầu vào – đầu ra trong một năm. Tùy chi tiết hồ sơ, chi phí thực tế có thể thay đổi."
        />

        {/* Nhóm tư vấn dịch vụ */}
        <div className="mt-10 space-y-12">
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">
              Nhóm ngành tư vấn – dịch vụ
            </h3>
            <div className="border border-border rounded-[2px] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Số hóa đơn / năm</TableHead>
                    <TableHead className="text-right">Phí dịch vụ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRICE_CONSULT.map(([k, v]) => (
                    <TableRow key={k}>
                      <TableCell className="font-medium text-foreground">{k}</TableCell>
                      <TableCell className="text-right">
                        {v === QUOTE_CELL ? <PriceContact /> : v}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Nhóm thương mại */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">Nhóm ngành thương mại</h3>
            <div className="border border-border rounded-[2px] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Số hóa đơn / năm</TableHead>
                    <TableHead className="text-right">Không xuất nhập khẩu</TableHead>
                    <TableHead className="text-right">Có xuất nhập khẩu</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRICE_TRADE.map(([k, v1, v2]) => (
                    <TableRow key={k}>
                      <TableCell className="font-medium text-foreground">{k}</TableCell>
                      {v1 === QUOTE_CELL ? (
                        <TableCell className="text-right" colSpan={2}>
                          <PriceContact />
                        </TableCell>
                      ) : (
                        <>
                          <TableCell className="text-right">{v1}</TableCell>
                          <TableCell className="text-right">{v2}</TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Nhóm xây dựng – sản xuất */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">
              Nhóm thi công xây dựng – nội thất – sản xuất – gia công – nhà hàng – lắp đặt
            </h3>
            <div className="border border-border rounded-[2px] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Số hóa đơn / năm</TableHead>
                    <TableHead className="text-right">Phí dịch vụ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRICE_BUILD.map(([k, v]) => (
                    <TableRow key={k}>
                      <TableCell className="font-medium text-foreground">{k}</TableCell>
                      <TableCell className="text-right">
                        {v === QUOTE_CELL ? <PriceContact /> : v}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Section>

      {/* Thời gian */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Thời gian" title="Thời gian hoàn thành dịch vụ" />
        <div className="mt-10 grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8">
            <Clock className="text-brand-red" size={26} strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl text-foreground">Ít chứng từ</h3>
            <p className="mt-2 text-sm text-foreground/80 font-serif leading-relaxed">
              Với doanh nghiệp phát sinh ít chứng từ, hóa đơn, TAF có thể hoàn tất toàn bộ sổ sách
              chỉ trong khoảng <strong className="text-foreground">2–7 ngày làm việc</strong>.
            </p>
          </div>
          <div className="bg-background p-8">
            <Clock className="text-brand-red" size={26} strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl text-foreground">Khối lượng lớn</h3>
            <p className="mt-2 text-sm text-foreground/80 font-serif leading-relaxed">
              Trường hợp chứng từ nhiều, phát sinh liên tục, thời gian xử lý kéo dài hơn, ước tính{" "}
              <strong className="text-foreground">1–3 tháng</strong> tùy mức độ phức tạp và tình
              trạng dữ liệu.
            </p>
          </div>
        </div>
      </Section>

      {/* 7 đầu việc */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Quy trình"
          title="7 nội dung công việc TAF thực hiện"
          lead="Toàn bộ quy trình được thực hiện bởi đội ngũ chuyên viên nhiều kinh nghiệm, đúng chuẩn mực kế toán hiện hành."
        />
        <ol className="mt-10 border-t border-border">
          {STEPS.map((s, i) => (
            <li key={i} className="flex gap-5 border-b border-border py-5">
              <span className="font-mono text-sm text-accent-foreground tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-foreground/85 font-serif leading-relaxed">{s}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Hồ sơ cần cung cấp */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Hồ sơ</Eyebrow>
            <h2 className="font-display text-3xl text-foreground leading-tight">
              Thông tin bạn cần cung cấp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              7 loại giấy tờ, tài liệu cần bàn giao cho TAF khi sử dụng dịch vụ làm sổ sách kế
              toán.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {DOCS.map((d) => (
                <li key={d} className="bg-background p-5 flex gap-3">
                  <FileText size={18} className="shrink-0 text-accent-foreground mt-0.5" />
                  <span className="text-sm text-foreground/85 font-serif leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 quyền lợi */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Quyền lợi"
          title="9 quyền lợi khi dùng dịch vụ tại TAF"
          lead="Những cam kết rõ ràng giúp doanh nghiệp tin tưởng lựa chọn TAF làm đối tác đồng hành về kế toán – thuế."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {BENEFITS.map((b, i) => (
            <div key={i} className="bg-background p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-brand-red" />
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 text-sm text-foreground/85 font-serif leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Giải đáp về chi phí, thời gian, thành phần sổ sách và trách nhiệm khi cơ quan thuế
              kiểm tra.
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
                Hoàn thiện sổ sách{" "}
                <span className="italic text-accent-foreground">đúng luật, đúng hạn.</span>
              </h2>
              <p className="mt-3 text-muted-foreground font-serif text-base leading-relaxed">
                Gửi yêu cầu hoặc gọi trực tiếp — TAF khảo sát hồ sơ và báo giá chính xác theo tình
                trạng thực tế.{" "}
                <ShieldCheck className="inline -mt-0.5 text-brand-red" size={16} /> Bảo mật tuyệt
                đối.
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
