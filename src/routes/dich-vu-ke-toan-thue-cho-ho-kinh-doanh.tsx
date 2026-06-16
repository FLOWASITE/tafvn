import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Receipt,
  Store,
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
const PATH = "/dich-vu-ke-toan-thue-cho-ho-kinh-doanh";
const TITLE =
  "Dịch vụ kế toán thuế trọn gói cho hộ kinh doanh cá thể — Chỉ từ 400.000đ | TAF";
const DESCRIPTION =
  "TAF cung cấp dịch vụ kế toán thuế trọn gói cho hộ kinh doanh cá thể: kê khai thuế, hóa đơn điện tử theo Nghị định 70, sổ sách theo TT88/TT40. Chỉ từ 400.000đ/tháng, đúng luật, minh bạch.";

export const Route = createFileRoute("/dich-vu-ke-toan-thue-cho-ho-kinh-doanh")({
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
  component: HouseholdAccountingService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const ND70_TARGETS = [
  "Hộ kinh doanh cá thể có doanh thu từ 1 tỷ đồng/năm trở lên",
  "Doanh nghiệp bán lẻ, dịch vụ ăn uống, khách sạn có sử dụng máy tính tiền",
  "Đơn vị kinh doanh có nhiều điểm bán hàng, nhiều chi nhánh",
];

const ND70_ROADMAP = [
  { phase: "Giai đoạn 1", time: "01/06/2025 – 31/12/2025", desc: "Bắt buộc với hộ kinh doanh có doanh thu từ 3 tỷ đồng/năm trở lên." },
  { phase: "Giai đoạn 2", time: "01/01/2026 – 30/06/2026", desc: "Mở rộng cho hộ kinh doanh doanh thu từ 1 tỷ đến dưới 3 tỷ đồng/năm." },
  { phase: "Tự nguyện", time: "Dưới 1 tỷ đồng/năm", desc: "Được khuyến khích áp dụng tự nguyện." },
];

const TAX_BY_REVENUE = [
  {
    range: "Dưới 100 triệu đồng/năm",
    points: ["Nộp thuế khoán", "Không bắt buộc kê khai hàng tháng/quý", "Nộp theo thông báo của cơ quan thuế", "Miễn thuế TNCN và lệ phí môn bài"],
  },
  {
    range: "Từ 100 triệu đến dưới 1 tỷ đồng/năm",
    points: ["Áp dụng phương pháp khoán hoặc kê khai", "Khoán: nộp theo thông báo cơ quan thuế", "Kê khai: kê khai định kỳ (tháng/quý)"],
  },
  {
    range: "Từ 1 tỷ đồng/năm trở lên",
    points: ["Bắt buộc áp dụng phương pháp kê khai", "Kê khai GTGT, TNCN định kỳ và quyết toán TNCN năm", "Từ 01/06/2025: bắt buộc hóa đơn điện tử kết nối máy tính tiền"],
  },
];

const WHY = [
  "Tuân thủ pháp luật — đúng quy định thuế và kế toán hiện hành, tránh rủi ro pháp lý và phạt vi phạm.",
  "Tối ưu hóa thuế — tận dụng ưu đãi, khấu trừ hợp pháp để giảm nghĩa vụ thuế.",
  "Tiết kiệm thời gian — tập trung phát triển kinh doanh cốt lõi.",
  "Quản lý tài chính hiệu quả — theo dõi dòng tiền, kiểm soát chi phí qua báo cáo rõ ràng.",
  "Hỗ trợ ra quyết định — số liệu chính xác phục vụ quyết định kinh doanh.",
  "Sẵn sàng khi kiểm tra, kiểm toán — chuẩn bị hồ sơ đầy đủ, chính xác.",
  "Chuyên môn cao — luôn cập nhật quy định mới, áp dụng đúng chuẩn mực.",
  "Phòng tránh rủi ro — phát hiện sớm vấn đề tài chính tiềm ẩn.",
];

const SERVICES = [
  { title: "Kế toán thuế", desc: "Tính toán, kê khai và nộp thuế GTGT, TNCN, lệ phí môn bài; xử lý vướng mắc với cơ quan thuế, tránh bị xử phạt." },
  { title: "Kế hoạch tài chính", desc: "Lập kế hoạch dòng tiền, dự báo tài chính tháng/quý/năm và đề xuất chỉ tiêu theo dõi hiệu suất." },
  { title: "Phân tích báo cáo tài chính", desc: "Đọc và phân tích kết quả kinh doanh, cân đối kế toán, lưu chuyển tiền tệ để cải thiện lợi nhuận và dòng tiền." },
  { title: "Kế toán quản trị", desc: "Theo dõi thu – chi hằng ngày, gợi ý cải tiến quy trình để tiết kiệm chi phí và tăng hiệu quả." },
  { title: "Tư vấn thuế & pháp lý", desc: "Hướng dẫn áp dụng chính sách miễn giảm thuế, xử lý tình huống pháp lý và cập nhật văn bản mới." },
  { title: "Tư vấn kinh doanh", desc: "Tư vấn chiến lược vận hành, mở rộng quy mô và lập kế hoạch kinh doanh khả thi." },
];

const DOCS = [
  "Giấy chứng nhận đăng ký hộ kinh doanh",
  "Hóa đơn đầu vào – đầu ra",
  "Sao kê ngân hàng (nếu có)",
  "Bảng lương nhân viên (nếu có)",
  "Hợp đồng, chứng từ liên quan (thuê mặt bằng, mua bán, hợp tác...)",
];

const QUOTE = "20.000đ / hóa đơn phát sinh";
const QUOTE30 = "30.000đ / hóa đơn phát sinh";

const PRICE_TRADE: [string, string, string][] = [
  ["Không có hóa đơn", "1.500.000đ", "1.500.000đ"],
  ["Dưới 10", "2.100.000đ", "2.700.000đ"],
  ["Dưới 16", "2.400.000đ", "3.000.000đ"],
  ["Dưới 31", "3.000.000đ", "3.900.000đ"],
  ["Dưới 46", "3.600.000đ", "4.800.000đ"],
  ["Dưới 61", "4.200.000đ", "5.700.000đ"],
  ["Dưới 76", "4.800.000đ", "6.600.000đ"],
  ["Dưới 91", "5.400.000đ", "7.200.000đ"],
  ["Dưới 121", "6.300.000đ", "8.400.000đ"],
  ["Dưới 151", "7.200.000đ", "9.600.000đ"],
  ["Dưới 181", "8.100.000đ", "10.500.000đ"],
  ["Từ 181 trở lên", QUOTE, ""],
];

const PRICE_SERVICE: [string, string, string][] = [
  ["Không có hóa đơn", "1.500.000đ", "1.500.000đ"],
  ["Dưới 10", "2.100.000đ", "2.100.000đ"],
  ["Dưới 16", "2.400.000đ", "2.400.000đ"],
  ["Dưới 31", "3.000.000đ", "3.300.000đ"],
  ["Dưới 46", "3.900.000đ", "4.200.000đ"],
  ["Dưới 61", "4.800.000đ", "5.100.000đ"],
  ["Dưới 76", "5.400.000đ", "5.700.000đ"],
  ["Dưới 91", "6.000.000đ", "6.300.000đ"],
  ["Dưới 121", "7.200.000đ", "7.500.000đ"],
  ["Dưới 151", "8.100.000đ", "8.400.000đ"],
  ["Dưới 181", "9.000.000đ", "9.300.000đ"],
  ["Từ 181 trở lên", QUOTE, ""],
];

const PRICE_BUILD: [string, string, string][] = [
  ["Không có hóa đơn", "2.100.000đ", "2.100.000đ"],
  ["Dưới 10", "3.000.000đ", "2.400.000đ"],
  ["Dưới 16", "3.300.000đ", "3.000.000đ"],
  ["Dưới 31", "4.500.000đ", "4.200.000đ"],
  ["Dưới 46", "5.700.000đ", "5.400.000đ"],
  ["Dưới 61", "7.200.000đ", "6.900.000đ"],
  ["Dưới 76", "8.400.000đ", "8.100.000đ"],
  ["Dưới 91", "9.600.000đ", "9.300.000đ"],
  ["Dưới 121", "10.800.000đ", "10.500.000đ"],
  ["Dưới 151", "12.000.000đ", "11.700.000đ"],
  ["Dưới 181", "13.200.000đ", "12.900.000đ"],
  ["Từ 181 trở lên", QUOTE30, ""],
];

const COMMITMENTS = [
  "Miễn phí nhận – trả chứng từ, hóa đơn, sổ sách tận nơi.",
  "Miễn phí tư vấn sử dụng hóa đơn đầu vào – đầu ra hợp lý, tiết kiệm.",
  "Miễn phí hỗ trợ chính sách thuế, chế độ kế toán riêng cho hộ kinh doanh.",
  "Bảo mật tuyệt đối mọi thông tin kế toán và dữ liệu khách hàng.",
  "Đảm bảo nộp báo cáo, kê khai đúng hạn theo quy định cơ quan thuế.",
  "Chịu trách nhiệm toàn diện với chứng từ, báo cáo do TAF thực hiện.",
  "Chuẩn hóa sổ sách – chứng từ theo đúng chuẩn mực kế toán hiện hành.",
  "Rà soát toàn bộ chứng từ, sổ sách đã có và tư vấn chỉnh sửa nếu sai sót.",
];

const BOOKS = [
  "Sổ chi tiết doanh thu bán hàng hóa, dịch vụ",
  "Sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa",
  "Sổ chi phí sản xuất, kinh doanh",
  "Sổ theo dõi tình hình nộp thuế",
  "Sổ theo dõi thanh toán tiền lương và các khoản theo lương",
  "Sổ quỹ tiền mặt",
  "Sổ tiền gửi ngân hàng",
];

const WHO = [
  "Hộ kinh doanh bán lẻ, tạp hóa, quán ăn, cà phê nhỏ — phát sinh doanh thu, chi phí và giao dịch hằng ngày.",
  "Cá nhân kinh doanh online, livestream, sàn thương mại điện tử — dễ vi phạm nghĩa vụ thuế nếu không ghi nhận đúng.",
  "Hộ làm nghề tự do có thu nhập ổn định — dạy học, tư vấn, thiết kế, sửa chữa...",
  "Hộ kinh doanh dùng hóa đơn điện tử hoặc đang mở rộng quy mô, chuẩn bị lên doanh nghiệp.",
];

const RISKS = [
  "Bị xử phạt hành chính — chậm nộp, kê khai sai, không nộp thuế (phạt có thể đến hàng chục triệu đồng).",
  "Nguy cơ bị truy thu thuế — khi doanh thu thực tế cao hơn khai báo.",
  "Bị nghi ngờ gian lận thuế — thiếu hóa đơn, chứng từ, sổ sách không minh bạch.",
  "Khó mở rộng hoặc chuyển đổi mô hình — vay vốn, hợp tác, lên doanh nghiệp đều cần sổ sách rõ ràng.",
  "Không được khấu trừ chi phí — làm tăng số thuế phải nộp không cần thiết.",
];

const COMPARE: [string, string, string][] = [
  ["Chi phí", "Tiết kiệm ban đầu (không trả phí dịch vụ)", "Chi phí cố định (từ 400.000đ/tháng)"],
  ["Chuyên môn", "Cần kiến thức kế toán – thuế", "Đội ngũ chuyên nghiệp, am hiểu luật"],
  ["Thời gian", "Tốn thời gian học và thực hiện", "Tiết kiệm thời gian cho kinh doanh"],
  ["Cập nhật pháp luật", "Khó theo dõi quy định mới", "Luôn cập nhật kịp thời chính sách thuế"],
  ["Rủi ro sai sót", "Cao", "Thấp — đơn vị chịu trách nhiệm số liệu"],
  ["Xử lý phát sinh", "Khó giải trình với cơ quan thuế", "Được hỗ trợ tư vấn, giải trình"],
  ["Bảo mật", "Quản lý nội bộ", "Cam kết bảo mật tuyệt đối"],
  ["Trách nhiệm pháp lý", "Chủ hộ chịu mọi trách nhiệm", "Đơn vị dịch vụ chia sẻ trách nhiệm"],
  ["Quy trình", "Thường không rõ ràng", "Chuyên nghiệp, hệ thống"],
  ["Hỗ trợ lâu dài", "Hạn chế", "Đồng hành lâu dài"],
];

const FAQS = [
  {
    q: "Phí dịch vụ kế toán thuế cho hộ kinh doanh tại TAF là bao nhiêu?",
    a: "Tùy ngành nghề, quy mô và số lượng hóa đơn phát sinh. Chi phí bắt đầu từ 400.000đ/tháng (áp dụng theo chu kỳ quý — 3 tháng/lần), phù hợp với đa số hộ kinh doanh cá thể.",
  },
  {
    q: "Hộ kinh doanh nhỏ có phải nộp thuế không?",
    a: "Hộ kinh doanh có nghĩa vụ nộp tối thiểu 3 loại thuế: lệ phí môn bài, thuế GTGT, thuế TNCN. Mức lệ phí môn bài: dưới 100 triệu/năm được miễn; 100–300 triệu: 300.000đ/năm; 300–500 triệu: 500.000đ/năm; trên 500 triệu: 1.000.000đ/năm.",
  },
  {
    q: "Hộ kinh doanh có được phát hành hóa đơn VAT không?",
    a: "Không. Hộ kinh doanh không được phát hành hóa đơn giá trị gia tăng (VAT). Thay vào đó có thể dùng hóa đơn bán hàng thông thường qua hệ thống hóa đơn điện tử của cơ quan thuế nếu có đăng ký.",
  },
  {
    q: "Khi nào hộ kinh doanh phải nộp hồ sơ khai thuế và nộp tiền thuế?",
    a: "Kê khai theo quý: chậm nhất ngày cuối tháng đầu tiên của quý sau. Kê khai theo tháng: chậm nhất ngày 20 của tháng kế tiếp.",
  },
  {
    q: "Cơ quan thuế kiểm tra hộ kinh doanh khi nào?",
    a: "Khi có dấu hiệu doanh thu kê khai không đúng thực tế; có phản ánh, tố cáo từ người tiêu dùng; khi đăng ký hoặc chấm dứt hoạt động; hoặc theo kế hoạch kiểm tra định kỳ của Chi cục Thuế.",
  },
  {
    q: "Hộ kinh doanh ngừng hoạt động có cần báo với cơ quan thuế không?",
    a: "Có. Khi tạm ngừng hoặc chấm dứt kinh doanh, hộ cần gửi thông báo với Chi cục Thuế và hoàn tất nghĩa vụ thuế liên quan để tránh bị truy thu hoặc phạt.",
  },
  {
    q: "Có thể tự làm kế toán cho hộ kinh doanh được không?",
    a: "Có thể, nếu bạn nắm vững quy định và có thời gian cập nhật chính sách thuế. Tuy nhiên với hộ không có chuyên môn, nên dùng dịch vụ trọn gói chuyên nghiệp để đảm bảo chính xác, đúng hạn, tránh bị xử phạt.",
  },
];

function Price2ColTable({
  rows,
  col1,
  col2,
}: {
  rows: [string, string, string][];
  col1: string;
  col2: string;
}) {
  return (
    <div className="border border-border rounded-[2px] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Số hóa đơn</TableHead>
            <TableHead className="text-right">{col1}</TableHead>
            <TableHead className="text-right">{col2}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(([k, v1, v2]) => (
            <TableRow key={k}>
              <TableCell className="font-medium text-foreground">{k}</TableCell>
              {v2 === "" ? (
                <TableCell className="text-right text-brand-red-ink font-medium" colSpan={2}>
                  {v1}
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
  );
}

function HouseholdAccountingService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Kế toán cho hộ kinh doanh" }]}
      />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ kế toán</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Kế toán thuế trọn gói cho{" "}
            <span className="italic text-accent-foreground">hộ kinh doanh cá thể</span>.
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-[2px] border border-brand-red/30 bg-brand-red-soft px-4 py-2">
            <span className="text-sm text-muted-foreground">Chi phí chỉ từ</span>
            <span className="t-h3 text-brand-red-ink">400.000đ/tháng</span>
          </div>
          <p className="t-lead mt-6 text-muted-foreground">
            TAF hỗ trợ hộ kinh doanh thực hiện đầy đủ nghĩa vụ thuế theo quy định, hạn chế tối đa
            rủi ro với cơ quan thuế. Linh hoạt theo nhóm ngành, đội ngũ chuyên môn cao, quy trình
            minh bạch.
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

      {/* Nghị định 70 */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Nghị định 70/2025/NĐ-CP"
          title="Quy định mới về hóa đơn điện tử cho hộ kinh doanh"
          lead="Nghị định 70 hiện đại hóa quản lý thuế, quy định việc sử dụng hóa đơn điện tử kết nối với máy tính tiền, hiệu lực từ 01/06/2025."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-lg text-foreground mb-3">Đối tượng bắt buộc</h3>
            <ul className="space-y-px bg-border border border-border">
              {ND70_TARGETS.map((t) => (
                <li key={t} className="bg-background p-4 flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
                  <span className="t-body-sm text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-foreground mb-3">Lộ trình thực hiện</h3>
            <div className="space-y-px bg-border border border-border">
              {ND70_ROADMAP.map((r) => (
                <div key={r.phase} className="bg-background p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-sm text-foreground">{r.phase}</span>
                    <span className="font-mono text-xs text-accent-foreground">{r.time}</span>
                  </div>
                  <p className="t-body-sm mt-1 text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Kê khai thuế theo doanh thu */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Nghĩa vụ thuế"
          title="Hộ kinh doanh kê khai thuế thế nào?"
          lead="Nghĩa vụ kê khai phụ thuộc vào quy mô doanh thu và phương pháp tính thuế."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {TAX_BY_REVENUE.map((t) => (
            <div key={t.range} className="bg-background p-6">
              <h3 className="font-display text-lg text-foreground leading-snug">{t.range}</h3>
              <ul className="mt-3 space-y-2">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-foreground/75 font-serif flex gap-2 before:content-['—'] before:text-accent-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Vì sao dùng dịch vụ */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Lý do"
          title="Vì sao hộ kinh doanh nên dùng dịch vụ kế toán trọn gói?"
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {WHY.map((w) => (
            <div key={w} className="bg-background p-5 flex gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Dịch vụ của TAF */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading eyebrow="Dịch vụ" title="Dịch vụ kế toán trọn gói của TAF" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-background p-6">
              <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
              <p className="t-body-sm mt-2 text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Hồ sơ cần cung cấp */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Hồ sơ</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Hộ kinh doanh cần cung cấp gì?
            </h2>
            <p className="t-body-sm mt-4 text-muted-foreground">
              Hồ sơ, chứng từ rất đơn giản — giúp quá trình triển khai nhanh chóng, chính xác.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-px bg-border border border-border">
              {DOCS.map((d) => (
                <li key={d} className="bg-background p-5 flex gap-3">
                  <FileText size={18} className="shrink-0 text-accent-foreground mt-0.5" />
                  <span className="t-body-sm text-foreground/85">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Bảng giá */}
      <Section className="!pt-0" id="bang-gia">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Bảng giá"
          title="Bảng giá dịch vụ kế toán thuế trọn gói"
          lead="Chi phí trọn gói chỉ từ 400.000đ/tháng, linh hoạt theo đặc thù ngành nghề (áp dụng theo chu kỳ quý — 3 tháng/lần)."
        />
        <div className="mt-10 space-y-12">
          <div>
            <h3 className="t-h3 text-foreground mb-4">Nhóm ngành thương mại</h3>
            <Price2ColTable rows={PRICE_TRADE} col1="Không xuất nhập khẩu" col2="Có xuất nhập khẩu" />
          </div>
          <div>
            <h3 className="t-h3 text-foreground mb-4">Nhóm ngành tư vấn – dịch vụ</h3>
            <Price2ColTable rows={PRICE_SERVICE} col1="Spa · Giáo dục · Tư vấn · DV khác" col2="Khách sạn · Logistics" />
          </div>
          <div>
            <h3 className="t-h3 text-foreground mb-4">
              Nhóm thi công xây dựng – trang trí nội thất
            </h3>
            <Price2ColTable rows={PRICE_BUILD} col1="Thi công xây dựng" col2="Nội thất · Lắp đặt · SX · Gia công" />
          </div>
        </div>
      </Section>

      {/* Cam kết của TAF */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Cam kết" title="Nhiệm vụ & cam kết của TAF" />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {COMMITMENTS.map((c) => (
            <div key={c} className="bg-background p-5 flex gap-3">
              <ShieldCheck size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Chế độ kế toán TT88/TT40 */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Chế độ kế toán</Eyebrow>
            <h2 className="t-h2 text-foreground">
              Theo Thông tư 88 & Thông tư 40
            </h2>
            <p className="t-body mt-4 text-muted-foreground">
              TT 88/2021/TT-BTC (hiệu lực 01/01/2022) cho phép hộ kinh doanh áp dụng chế độ kế
              toán đơn giản; TT 40/2021/TT-BTC quy định chính sách thuế (khoán, kê khai, hoặc kết
              hợp). Hộ doanh thu từ 100 triệu/năm trở lên phải kê khai TNCN, GTGT (nếu có) và lệ
              phí môn bài.
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-display text-lg text-foreground mb-3">Các loại sổ kế toán</h3>
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

      {/* Ai nên dùng */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Đối tượng" title="Những ai nên dùng dịch vụ này?" />
        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {WHO.map((w) => (
            <div key={w} className="bg-background p-5 flex gap-3">
              <Store size={18} className="shrink-0 text-accent-foreground mt-0.5" />
              <p className="t-body-sm text-foreground/85">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Rủi ro */}
      <Section className="!pt-0">
        <div className="rule-gold mb-14" />
        <SectionHeading
          eyebrow="Rủi ro"
          title="Rủi ro khi không làm kế toán – thuế đúng quy định"
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {RISKS.map((r) => (
            <div key={r} className="bg-background p-6 flex gap-3">
              <AlertTriangle size={18} className="shrink-0 text-brand-red mt-0.5" strokeWidth={1.7} />
              <p className="t-body-sm text-foreground/85">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* So sánh */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="So sánh"
          title="Tự làm kế toán hay thuê dịch vụ ngoài?"
        />
        <div className="mt-10 border border-border rounded-[2px] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tiêu chí</TableHead>
                <TableHead>Tự làm kế toán</TableHead>
                <TableHead>Thuê dịch vụ ngoài</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARE.map(([crit, a, b]) => (
                <TableRow key={crit}>
                  <TableCell className="font-medium text-foreground">{crit}</TableCell>
                  <TableCell className="text-muted-foreground">{a}</TableCell>
                  <TableCell className="text-foreground/85">{b}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
              Giải đáp về chi phí, nghĩa vụ thuế, hóa đơn, thời hạn kê khai và kiểm tra thuế.
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
                Hộ kinh doanh an tâm{" "}
                <span className="italic text-accent-foreground">tuân thủ thuế.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Gọi hoặc gửi yêu cầu — TAF tư vấn gói phù hợp ngành nghề và quy mô của bạn.{" "}
                <Receipt className="inline -mt-0.5 text-brand-red" size={16} /> Chỉ từ 400.000đ/tháng.
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
