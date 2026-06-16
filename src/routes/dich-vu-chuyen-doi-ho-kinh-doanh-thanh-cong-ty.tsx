import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";
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
const PATH = "/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty";
const OG_IMAGE = "/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty.jpg";
const TITLE = "Dịch vụ chuyển đổi hộ kinh doanh thành công ty";
const DESCRIPTION =
  "Hộ kinh doanh doanh thu trên 1 tỷ đồng/năm phải dùng hóa đơn điện tử và kê khai thuế như doanh nghiệp. Tìm hiểu quy định mới, các phương án, quy trình và dịch vụ chuyển đổi hộ kinh doanh thành công ty của TAF.";

export const Route = createFileRoute("/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "chuyển đổi hộ kinh doanh thành công ty, dịch vụ chuyển đổi hộ kinh doanh, hộ kinh doanh lên công ty, Nghị định 70/2025, thành lập công ty TNHH, hóa đơn điện tử hộ kinh doanh",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          image: `${SITE_ORIGIN}${OG_IMAGE}`,
          author: { "@type": "Organization", name: "Công ty TNHH Tư vấn Kiểm toán TAF" },
          publisher: { "@type": "Organization", name: "TAF" },
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
        }),
      },
    ],
  }),
  component: ArticlePage,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const TOC: { id: string; label: string }[] = [
  { id: "boi-canh", label: "Vì sao hộ kinh doanh cần cân nhắc chuyển đổi?" },
  { id: "quy-dinh-moi", label: "Những quy định mới đáng chú ý (Nghị định 70/2025)" },
  { id: "ba-phuong-an", label: "Ba phương án khi doanh thu vượt 1 tỷ đồng" },
  { id: "so-sanh", label: "So sánh hộ kinh doanh và công ty TNHH" },
  { id: "quy-trinh", label: "Quy trình chuyển đổi cơ bản" },
  { id: "rui-ro", label: "Rủi ro cần tránh khi chuyển đổi" },
  { id: "taf", label: "TAF hỗ trợ chuyển đổi như thế nào?" },
  { id: "faq", label: "Câu hỏi thường gặp" },
  { id: "ket-luan", label: "Kết luận" },
];

const NEW_RULES = [
  "Bắt buộc hóa đơn điện tử khởi tạo từ máy tính tiền: hộ/cá nhân kinh doanh có doanh thu từ 1 tỷ đồng/năm trở lên phải dùng hóa đơn điện tử kết nối dữ liệu với cơ quan thuế.",
  "Bỏ thuế khoán với hộ doanh thu lớn: hộ kinh doanh từ 1 tỷ đồng/năm trở lên chuyển sang kê khai theo doanh thu thực tế thay vì thuế khoán.",
  "Quy định mới về thời điểm lập hóa đơn, tăng cường giám sát doanh thu qua ngân hàng, dữ liệu thanh toán không dùng tiền mặt và hóa đơn điện tử.",
  "Nâng ngưỡng doanh thu không chịu thuế GTGT lên 200 triệu đồng/năm từ 01/01/2026.",
  "Tăng chế tài xử phạt với hành vi không phát hành hóa đơn hoặc kê khai doanh thu không đúng quy định.",
];

const THREE_OPTIONS: [string, string, string, string][] = [
  ["Tính liên tục", "Cao", "Thấp", "Cao"],
  ["Chi phí thực hiện", "Trung bình", "Cao", "Thấp"],
  ["Thời gian thực hiện", "15 – 30 ngày", "30 – 45 ngày", "7 – 15 ngày"],
  ["Kế thừa nghĩa vụ cũ", "Có", "Không", "Có"],
  ["Huy động vốn", "Thuận lợi", "Thuận lợi", "Khó khăn"],
  ["Thương hiệu & uy tín", "Duy trì", "Có thể ảnh hưởng", "Duy trì"],
  ["Khả năng mở rộng", "Cao", "Cao", "Thấp"],
];

const HKD_TNHH: [string, string, string][] = [
  ["Tư cách pháp nhân", "Không có", "Có"],
  ["Trách nhiệm pháp lý", "Vô hạn (toàn bộ tài sản cá nhân)", "Hữu hạn (trong phạm vi vốn góp)"],
  ["Hóa đơn – thuế", "Khoán hoặc kê khai; hóa đơn điện tử khi vượt ngưỡng", "Kế toán đầy đủ, hóa đơn điện tử, GTGT & TNDN"],
  ["Mở rộng quy mô", "Hạn chế, không mở chi nhánh", "Mở chi nhánh, huy động vốn, gọi đầu tư"],
  ["Uy tín với đối tác", "Thấp hơn", "Cao hơn, thuận lợi giao dịch B2B"],
  ["Chi phí vận hành", "Thấp, đơn giản", "Cao hơn (kế toán, phần mềm, báo cáo)"],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Thời gian chuyển đổi từ hộ kinh doanh sang công ty TNHH mất bao lâu?",
    a: "Thông thường khoảng 7 – 15 ngày làm việc: cấp Giấy chứng nhận đăng ký doanh nghiệp 3 – 5 ngày, cộng thời gian làm các thủ tục sau đăng ký (con dấu, tài khoản ngân hàng, mã số thuế, hóa đơn điện tử…).",
  },
  {
    q: "Có phải giải thể hộ kinh doanh trước khi thành lập công ty TNHH không?",
    a: "Thông thường không cần giải thể trước. Quy trình phổ biến là: thành lập công ty TNHH mới → chuyển hoạt động kinh doanh sang công ty → sau đó làm thủ tục chấm dứt hoạt động của hộ kinh doanh cũ.",
  },
  {
    q: "Vốn điều lệ tối thiểu để thành lập công ty TNHH là bao nhiêu?",
    a: "Theo Luật Doanh nghiệp hiện hành, không có quy định mức vốn điều lệ tối thiểu chung cho công ty TNHH. Tuy nhiên vốn điều lệ nên phù hợp quy mô và ngành nghề; một số ngành nghề có yêu cầu vốn pháp định riêng.",
  },
  {
    q: "Chuyển tài sản từ hộ kinh doanh sang công ty có phải nộp thuế không?",
    a: "Về nguyên tắc, chuyển tài sản sang công ty có thể được xem là góp vốn và thường không phát sinh thuế thu nhập. Tuy nhiên cần định giá tài sản góp vốn đúng quy định và kê khai trong hồ sơ thành lập.",
  },
  {
    q: "Các hợp đồng đã ký của hộ kinh doanh có còn hiệu lực khi chuyển sang công ty không?",
    a: "Hợp đồng của hộ kinh doanh không tự động chuyển sang công ty. Có thể ký phụ lục để chuyển bên thực hiện hợp đồng sang công ty, hoặc ký hợp đồng mới giữa đối tác và công ty.",
  },
];

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display text-2xl md:text-[1.9rem] leading-tight text-foreground mt-12 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-xl leading-snug text-foreground mt-7 mb-2.5">{children}</h3>;
}
function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.0625rem] text-foreground/85 font-serif leading-[1.75] mb-4">{children}</p>
  );
}
function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((it, i) => (
        <li
          key={i}
          className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed flex gap-3 before:content-['—'] before:text-accent-foreground before:shrink-0"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function ArticlePage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Tin tức", to: "/tin-tuc" }, { label: "Chuyển đổi hộ kinh doanh thành công ty" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.75rem] leading-[1.12] text-foreground">
            Dịch vụ chuyển đổi hộ kinh doanh thành công ty
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-foreground" /> Cập nhật 2026
            </span>
            <span className="h-3 w-px bg-border" />
            <span>Biên soạn bởi đội ngũ TAF</span>
          </div>
        </div>
        <div className="max-w-3xl mt-6">
          <img
            src={OG_IMAGE}
            alt="Dịch vụ chuyển đổi hộ kinh doanh thành công ty - TAF"
            width={1280}
            height={720}
            className="w-full rounded-[3px] border border-border"
          />
        </div>
        <div className="max-w-3xl">
          <div className="rule-gold mt-8" />
        </div>
      </Section>

      <Section className="!pt-0">
        <article className="max-w-3xl">
          {/* Mô tả */}
          <P>
            Theo các quy định mới, hộ kinh doanh có doanh thu trên 1 tỷ đồng/năm bắt buộc phải sử
            dụng hóa đơn điện tử và kê khai thuế gần như một doanh nghiệp. Điều này đặt chủ hộ trước
            ba lựa chọn: chuyển đổi hộ kinh doanh lên công ty, đóng hộ cũ và thành lập công ty mới,
            hoặc giữ hộ kinh doanh và kê khai theo quy định mới. Vậy đâu là phương án phù hợp, quy
            trình ra sao và cần lưu ý gì để tránh rủi ro? Bài viết tổng hợp những điểm cốt lõi về{" "}
            <strong className="font-medium text-foreground">
              chuyển đổi hộ kinh doanh thành công ty
            </strong>{" "}
            dưới góc độ thực tiễn. Là đơn vị tư vấn kế toán – thuế và hỗ trợ thủ tục doanh nghiệp,
            TAF chia sẻ nội dung này để bạn ra quyết định đúng và thực hiện thuận lợi.
          </P>

          {/* Mục lục */}
          <nav aria-label="Mục lục" className="my-8 rounded-[3px] border border-border bg-cream/50 p-5">
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-foreground mb-3">
              <ListTree size={15} className="text-brand-red" /> Mục lục bài viết
            </p>
            <ol className="space-y-1.5">
              {TOC.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="inline-flex gap-2 text-sm text-foreground/80 hover:text-brand-red-ink transition-colors"
                  >
                    <span className="font-mono text-xs text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* 1 */}
          <H2 id="boi-canh">Vì sao hộ kinh doanh cần cân nhắc chuyển đổi?</H2>
          <P>
            Khi doanh thu đạt mức 1 tỷ đồng/năm, mô hình hộ kinh doanh bắt đầu bộc lộ nhiều hạn chế:
            không có tư cách pháp nhân nên khó ký hợp đồng lớn, khó tham gia đấu thầu, khó tiếp cận
            vốn tín dụng. Trong khi đó, hộ vẫn phải dùng hóa đơn điện tử và kê khai định kỳ — gần như
            gánh đầy đủ nghĩa vụ của một doanh nghiệp nhưng không được hưởng đầy đủ quyền lợi của một
            pháp nhân. Vì vậy, chuyển đổi thành công ty trở thành lựa chọn hợp lý để chính danh hóa
            hoạt động và mở rộng quy mô.
          </P>

          {/* 2 */}
          <H2 id="quy-dinh-moi">Những quy định mới đáng chú ý (Nghị định 70/2025)</H2>
          <P>
            Nghị định 70/2025/NĐ-CP (sửa đổi, bổ sung Nghị định 123/2020/NĐ-CP) đưa ra nhiều thay
            đổi quan trọng, áp dụng từ ngày 01/6/2025:
          </P>
          <Bullets items={NEW_RULES} />
          <P>
            Các nhóm ngành thường thuộc diện bắt buộc hóa đơn điện tử từ máy tính tiền gồm: dịch vụ
            ăn uống, bán lẻ hàng tiêu dùng, chăm sóc cá nhân (spa, nail, cắt tóc), sửa chữa, vui chơi
            – giải trí và các ngành phát sinh giao dịch thường xuyên với khách lẻ.
          </P>

          {/* 3 */}
          <H2 id="ba-phuong-an">Ba phương án khi doanh thu vượt 1 tỷ đồng</H2>
          <P>Chủ hộ kinh doanh có thể cân nhắc một trong ba hướng đi:</P>
          <Bullets
            items={[
              "Phương án 1 — Chuyển đổi hộ kinh doanh lên công ty: công ty mới kế thừa quyền và nghĩa vụ từ hộ (theo Điều 27 Nghị định 01/2021/NĐ-CP), hoạt động không gián đoạn.",
              "Phương án 2 — Đóng hộ cũ và thành lập công ty mới: chấm dứt hộ kinh doanh và đăng ký doanh nghiệp mới, phù hợp khi muốn tái cấu trúc.",
              "Phương án 3 — Giữ hộ kinh doanh và kê khai theo quy định mới: vẫn là hộ nhưng chuyển sang kê khai như doanh nghiệp, phù hợp quy mô nhỏ, ít kế hoạch mở rộng.",
            ]}
          />
          <div className="my-6 border border-border rounded-[2px] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tiêu chí</TableHead>
                  <TableHead>Chuyển đổi</TableHead>
                  <TableHead>Đóng cũ – mở mới</TableHead>
                  <TableHead>Giữ HKD &amp; kê khai</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {THREE_OPTIONS.map(([c, a, b, d]) => (
                  <TableRow key={c}>
                    <TableCell className="font-medium text-foreground">{c}</TableCell>
                    <TableCell>{a}</TableCell>
                    <TableCell>{b}</TableCell>
                    <TableCell>{d}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 4 */}
          <H2 id="so-sanh">So sánh hộ kinh doanh và công ty TNHH</H2>
          <div className="my-6 border border-border rounded-[2px] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tiêu chí</TableHead>
                  <TableHead>Hộ kinh doanh</TableHead>
                  <TableHead>Công ty TNHH</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {HKD_TNHH.map(([c, a, b]) => (
                  <TableRow key={c}>
                    <TableCell className="font-medium text-foreground">{c}</TableCell>
                    <TableCell>{a}</TableCell>
                    <TableCell>{b}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 5 */}
          <H2 id="quy-trinh">Quy trình chuyển đổi cơ bản</H2>
          <ol className="my-5 space-y-4 list-none">
            {[
              {
                t: "Rà soát hiện trạng hộ kinh doanh",
                d: "Kiểm tra tình trạng thuế, công nợ, hợp đồng còn hiệu lực; kiểm kê tài sản, hàng hóa; rà soát hồ sơ nhân sự, lao động.",
              },
              {
                t: "Chuẩn bị hồ sơ & đăng ký doanh nghiệp",
                d: "Nộp hồ sơ tại Phòng Đăng ký kinh doanh – Sở Kế hoạch và Đầu tư (lệ phí đăng ký 100.000đ + công bố 300.000đ); thời gian xử lý 3 – 5 ngày làm việc.",
              },
              {
                t: "Thực hiện thủ tục sau đăng ký",
                d: "Khắc dấu, mở tài khoản ngân hàng doanh nghiệp, đăng ký mã số thuế, chữ ký số và hóa đơn điện tử.",
              },
              {
                t: "Chuyển giao tài sản, lao động và hợp đồng",
                d: "Lập biên bản chuyển giao tài sản (định giá góp vốn nếu cần); ký lại hợp đồng lao động và đăng ký BHXH; làm phụ lục chuyển giao hợp đồng với đối tác.",
              },
              {
                t: "Chốt sổ và chấm dứt hộ kinh doanh",
                d: "Quyết toán thuế, đóng mã số thuế hộ kinh doanh; nộp hồ sơ chấm dứt hoạt động hộ kinh doanh (nên thực hiện trong vòng 10 ngày sau khi có giấy phép công ty).",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="font-mono text-sm text-brand-red-ink tabular-nums shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-lg text-foreground">{s.t}</span>
                  <span className="block mt-1 text-[1.0625rem] text-foreground/85 font-serif leading-relaxed">
                    {s.d}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          {/* 6 */}
          <H2 id="rui-ro">Rủi ro cần tránh khi chuyển đổi</H2>
          <Bullets
            items={[
              "Không xử lý nợ thuế, BHXH trước khi chuyển đổi → nên rà soát và xin xác nhận không nợ tại chi cục thuế và BHXH trước khi làm hồ sơ.",
              "Quên chấm dứt hộ kinh doanh sau chuyển đổi → nộp hồ sơ chấm dứt đúng hạn, tránh tồn tại song song hai hình thức.",
              "Không cập nhật hợp đồng, hóa đơn, tài sản sang tên công ty → làm thủ tục chuyển giao và điều chỉnh ngay sau khi thành lập.",
              "Chưa nắm rõ nghĩa vụ kế toán – thuế của công ty → sử dụng dịch vụ kế toán hoặc thuê kế toán, kê khai và nộp báo cáo đúng hạn.",
              "Không công bố thông tin doanh nghiệp trong 30 ngày kể từ ngày được cấp giấy chứng nhận → công bố đúng hạn để tránh bị xử phạt.",
            ]}
          />

          {/* 7 */}
          <H2 id="taf">TAF hỗ trợ chuyển đổi như thế nào?</H2>
          <P>
            TAF đồng hành cùng chủ hộ từ khâu rà soát hiện trạng, tư vấn lựa chọn phương án, chuẩn bị
            hồ sơ đến hoàn tất thủ tục. Nếu bạn chọn lập pháp nhân mới, có thể tham khảo{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ thành lập doanh nghiệp
            </Link>{" "}
            của TAF để có giấy phép và con dấu nhanh chóng.
          </P>
          <P>
            Sau khi lên công ty, doanh nghiệp phải áp dụng chế độ kế toán đầy đủ. Trong giai đoạn
            chuyển tiếp, bạn có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-thue-cho-ho-kinh-doanh"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán cho hộ kinh doanh
            </Link>{" "}
            của TAF để được hỗ trợ kê khai và sổ sách trong thời gian sắp xếp bộ máy.
          </P>
          <div className="my-6 rounded-[2px] border border-border bg-cream/50 p-5">
            <p className="text-sm font-medium text-foreground mb-2">Phí dịch vụ tham khảo tại TAF</p>
            <ul className="space-y-1.5 text-sm text-foreground/80 font-serif">
              <li className="flex gap-2 before:content-['—'] before:text-accent-foreground">
                Chuyển đổi hộ kinh doanh sang công ty TNHH (ra giấy phép & con dấu): 1.500.000 đồng.
              </li>
              <li className="flex gap-2 before:content-['—'] before:text-accent-foreground">
                Trọn gói chuyển đổi (gồm gói thành lập doanh nghiệp cao cấp): 4.800.000 đồng.
              </li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground font-serif italic">
              Phí có thể thay đổi tùy hồ sơ và nhu cầu thực tế; vui lòng liên hệ để được báo giá
              chính xác.
            </p>
          </div>

          {/* 8 FAQ */}
          <H2 id="faq">Câu hỏi thường gặp</H2>
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

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Trước các quy định mới về hóa đơn điện tử và kê khai thuế, chuyển đổi hộ kinh doanh thành
            công ty là hướng đi hợp lý với nhiều hộ có doanh thu lớn — giúp chính danh hóa hoạt động,
            mở rộng quy mô và bảo vệ quyền lợi pháp lý. Lựa chọn phương án phù hợp, thực hiện đúng quy
            trình và tránh các rủi ro thường gặp sẽ giúp quá trình diễn ra suôn sẻ.
          </P>
          <P>
            Liên hệ TAF ngay hôm nay để được tư vấn giải pháp phù hợp với nhu cầu thực tế của doanh
            nghiệp.
          </P>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
            >
              <span className="uppercase tracking-[0.14em]">Liên hệ tư vấn ngay</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:border-accent transition"
            >
              <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>

          {/* Footer liên hệ */}
          <div className="mt-10 rounded-[3px] border border-border bg-primary text-primary-foreground p-6 md:p-7">
            <p className="font-display text-lg text-primary-foreground">
              CÔNG TY TNHH TƯ VẤN KIỂM TOÁN TAF
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85 font-serif">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                Trụ sở chính: 62A Phạm Ngọc Thạch, Phường Xuân Hòa, TP. Hồ Chí Minh
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent shrink-0" />
                Hotline / Zalo:{" "}
                <a href={`tel:${HOTLINE_TEL}`} className="hover:text-accent transition-colors">
                  {HOTLINE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent shrink-0" />
                Email:{" "}
                <a href="mailto:info@taf.vn" className="hover:text-accent transition-colors">
                  info@taf.vn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={16} className="text-accent shrink-0" />
                Website: taf.vn
              </li>
            </ul>
          </div>
        </article>
      </Section>

      <RelatedArticles currentHref={PATH} />
    </>
  );
}
