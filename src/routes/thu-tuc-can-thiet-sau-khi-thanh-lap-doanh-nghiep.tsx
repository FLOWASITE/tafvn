import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep";
const OG_IMAGE = "/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep.jpg";
const TITLE = "Thủ tục cần thiết sau khi thành lập doanh nghiệp";
const DESCRIPTION =
  "Sau khi thành lập doanh nghiệp, chủ doanh nghiệp cần thực hiện ngay nhiều thủ tục: khai thuế – lệ phí môn bài, mở tài khoản ngân hàng, chữ ký số, hóa đơn điện tử, bảng hiệu, BHXH và cam kết vốn. Hướng dẫn đầy đủ cùng TAF.";

export const Route = createFileRoute("/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "thủ tục sau khi thành lập doanh nghiệp, thành lập doanh nghiệp, lệ phí môn bài, hóa đơn điện tử, chữ ký số, mở tài khoản ngân hàng doanh nghiệp, dịch vụ kế toán",
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
  { id: "vi-sao", label: "Vì sao cần hoàn thành thủ tục ngay sau khi thành lập?" },
  { id: "thu-tuc", label: "Những thủ tục cần hoàn thành sau khi thành lập doanh nghiệp" },
  { id: "rui-ro", label: "Rủi ro nếu bỏ sót thủ tục" },
  { id: "taf", label: "TAF đồng hành cùng doanh nghiệp" },
  { id: "ket-luan", label: "Kết luận" },
];

const MON_BAI: [string, string][] = [
  ["Doanh nghiệp/tổ chức có vốn điều lệ (vốn đăng ký) trên 10 tỷ", "3.000.000 đồng/năm"],
  ["Doanh nghiệp/tổ chức có vốn điều lệ (vốn đăng ký) từ 10 tỷ trở xuống", "2.000.000 đồng/năm"],
  ["Chi nhánh, văn phòng đại diện, địa điểm kinh doanh, tổ chức kinh tế khác", "1.000.000 đồng/năm"],
  ["Hộ kinh doanh có doanh thu trên 500 triệu/năm", "1.000.000 đồng/năm"],
  ["Hộ kinh doanh doanh thu 300 – 500 triệu/năm", "500.000 đồng/năm"],
  ["Hộ kinh doanh doanh thu 100 – 300 triệu/năm", "300.000 đồng/năm"],
];

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="t-h2 md:text-[1.9rem] text-foreground mt-12 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="t-h3 text-foreground mt-7 mb-2.5">{children}</h3>;
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
        items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Thủ tục sau khi thành lập doanh nghiệp" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="t-h2 md:text-[2.75rem] text-foreground">
            Thủ tục cần thiết sau khi thành lập doanh nghiệp
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-foreground" /> Cập nhật 2026
            </span>
            <span className="h-3 w-px bg-border" />
            <span>Biên soạn bởi đội ngũ TAF</span>
          </div>
        </div>
        {/* Ảnh bìa — ngay dưới tiêu đề */}
        <div className="max-w-3xl mt-6">
          <img
            src={OG_IMAGE}
            alt="Thủ tục cần thiết sau khi thành lập doanh nghiệp - TAF"
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
            Hoàn tất đăng ký kinh doanh mới chỉ là bước khởi đầu. Ngay sau khi có giấy chứng nhận
            đăng ký doanh nghiệp, chủ doanh nghiệp cần thực hiện một loạt{" "}
            <strong className="font-medium text-foreground">
              thủ tục cần thiết sau khi thành lập doanh nghiệp
            </strong>{" "}
            để công ty đi vào hoạt động hợp pháp và tránh bị xử phạt. Tuy nhiên, không ít doanh
            nghiệp mới — đặc biệt khi chưa có bộ phận kế toán — thường bỏ sót những việc quan trọng
            như khai lệ phí môn bài, đăng ký hóa đơn điện tử hay tham gia bảo hiểm cho người lao
            động. Bài viết dưới đây tổng hợp đầy đủ các thủ tục cần làm ngay, kèm lưu ý thực tế giúp
            doanh nghiệp chủ động hơn. Là đơn vị tư vấn kế toán – thuế và hỗ trợ thủ tục doanh
            nghiệp, TAF chia sẻ nội dung này để bạn vận hành công ty đúng quy định ngay từ đầu.
          </P>

          {/* Mục lục */}
          <nav aria-label="Mục lục" className="my-8 rounded-[3px] border border-border bg-cream/50 p-5">
            <p className="t-cta flex items-center gap-2 font-bold text-accent-foreground mb-3">
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
          <H2 id="vi-sao">Vì sao cần hoàn thành thủ tục ngay sau khi thành lập?</H2>
          <P>
            Một số thủ tục có thời hạn rõ ràng và bắt buộc theo quy định. Nếu chậm trễ hoặc bỏ sót,
            doanh nghiệp có thể bị xử phạt hành chính, bị truy thu, thậm chí ảnh hưởng đến tình
            trạng mã số thuế. Thực hiện đầy đủ và đúng hạn ngay từ đầu giúp công ty vận hành minh
            bạch, thuận lợi khi giao dịch với ngân hàng, đối tác và cơ quan quản lý.
          </P>

          {/* 2 */}
          <H2 id="thu-tuc">Những thủ tục cần hoàn thành sau khi thành lập doanh nghiệp</H2>

          <H3>1. Khai thuế ban đầu và lệ phí môn bài</H3>
          <P>
            Sau khi thành lập, doanh nghiệp thực hiện khai thuế ban đầu qua Cổng thông tin điện tử
            của cơ quan thuế. Mức lệ phí môn bài tham khảo như sau:
          </P>
          <div className="my-5 border border-border rounded-[2px] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Đối tượng</TableHead>
                  <TableHead className="text-right">Lệ phí môn bài</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MON_BAI.map(([k, v]) => (
                  <TableRow key={k}>
                    <TableCell className="font-medium text-foreground">{k}</TableCell>
                    <TableCell className="text-right">{v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <P>
            Lưu ý: doanh nghiệp mới thành lập thường được miễn lệ phí môn bài trong năm đầu thành
            lập theo quy định hiện hành (Nghị định 22/2020/NĐ-CP sửa đổi Nghị định 139/2016/NĐ-CP).
            Doanh nghiệp nên đối chiếu với hướng dẫn hiện hành để áp dụng đúng.
          </P>

          <H3>2. Mở tài khoản ngân hàng doanh nghiệp</H3>
          <P>
            Doanh nghiệp cần tối thiểu một tài khoản ngân hàng mang tên doanh nghiệp để nộp thuế
            điện tử, nhận thanh toán và thực hiện các giao dịch. Hồ sơ thường gồm:
          </P>
          <Bullets
            items={[
              "Bản sao có chứng thực Giấy chứng nhận đăng ký doanh nghiệp.",
              "Bản sao có chứng thực giấy tờ tùy thân của người đại diện theo pháp luật.",
              "Quyết định bổ nhiệm và giấy tờ tùy thân của kế toán (nếu có).",
            ]}
          />
          <P>
            Một tài khoản chỉ dùng cho một doanh nghiệp, nhưng một doanh nghiệp có thể mở nhiều tài
            khoản. Quy định về việc thông báo số tài khoản với cơ quan đăng ký kinh doanh đã thay
            đổi theo thời gian, doanh nghiệp nên kiểm tra hướng dẫn hiện hành.
          </P>

          <H3>3. Đăng ký chữ ký số</H3>
          <P>
            Chữ ký số là phương tiện điện tử dùng để xác thực doanh nghiệp và đảm bảo tính toàn vẹn
            của thông tin được ký. Hiện nay, chữ ký số được dùng phổ biến để ký hóa đơn điện tử, ký
            tờ khai thuế điện tử và ký hợp đồng điện tử.
          </P>

          <H3>4. Treo bảng hiệu tại trụ sở</H3>
          <P>
            Theo Luật Doanh nghiệp 2020, tên doanh nghiệp phải được gắn tại trụ sở chính, chi nhánh
            hoặc văn phòng đại diện. Không treo bảng hiệu có thể bị xử phạt hành chính theo quy
            định, thậm chí ảnh hưởng đến tình trạng mã số thuế. Bảng hiệu nên thể hiện tên doanh
            nghiệp, mã số thuế và địa chỉ trụ sở, đặt ở vị trí dễ nhìn.
          </P>

          <H3>5. Đăng ký, phát hành hóa đơn điện tử</H3>
          <P>
            Theo Nghị định 123/2020/NĐ-CP và Thông tư 78/2021/TT-BTC, tổ chức, cá nhân kinh doanh,
            doanh nghiệp và hộ kinh doanh thuộc diện áp dụng đều phải sử dụng hóa đơn điện tử. Doanh
            nghiệp cần đăng ký phát hành hóa đơn điện tử trước khi xuất hóa đơn.
          </P>

          <H3>6. Đăng ký bảo hiểm cho người lao động</H3>
          <P>
            Doanh nghiệp có trách nhiệm tham gia bảo hiểm cho người lao động. Trong khoảng 30 ngày
            kể từ ngày ký hợp đồng lao động chính thức, doanh nghiệp nộp hồ sơ tham gia bảo hiểm xã
            hội, bảo hiểm y tế, bảo hiểm thất nghiệp cho người lao động theo quy định.
          </P>

          <H3>7. Hoàn thiện giấy phép, chứng chỉ và cam kết vốn</H3>
          <P>
            Đối với ngành nghề kinh doanh có điều kiện, doanh nghiệp cần bổ sung giấy phép con hoặc
            chứng chỉ hành nghề tương ứng. Đồng thời, với công ty TNHH, công ty cổ phần, công ty
            hợp danh, thành viên/cổ đông phải góp đủ vốn điều lệ đã cam kết trong thời hạn 90 ngày
            kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp; nếu không góp đủ, doanh nghiệp
            cần thực hiện thủ tục điều chỉnh giảm vốn điều lệ theo quy định.
          </P>

          {/* 3 */}
          <H2 id="rui-ro">Rủi ro nếu bỏ sót thủ tục</H2>
          <Bullets
            items={[
              "Bị xử phạt hành chính do chậm khai thuế, chậm nộp lệ phí môn bài hoặc chưa đăng ký hóa đơn.",
              "Phát sinh truy thu, tiền chậm nộp khi cơ quan thuế kiểm tra.",
              "Khó khăn khi giao dịch, xuất hóa đơn nếu chưa hoàn tất chữ ký số và hóa đơn điện tử.",
              "Rủi ro về lao động và bảo hiểm nếu chậm đăng ký BHXH cho nhân viên.",
            ]}
          />

          {/* 4 */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp</H2>
          <P>
            Nếu bạn đang chuẩn bị mở công ty hoặc vừa thành lập và chưa nắm hết các đầu việc, hãy
            tham khảo{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ thành lập doanh nghiệp
            </Link>{" "}
            của TAF — hỗ trợ trọn gói từ hồ sơ đăng ký đến các thủ tục ban đầu sau thành lập.
          </P>
          <P>
            Để vận hành đúng quy định về kế toán – thuế ngay từ những tháng đầu, doanh nghiệp có thể
            sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán
            </Link>{" "}
            của TAF để được hỗ trợ khai thuế, lập sổ sách và tuân thủ nghĩa vụ thuế kịp thời.
          </P>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Hoàn thành đầy đủ và đúng hạn các thủ tục sau khi thành lập doanh nghiệp giúp công ty đi
            vào hoạt động hợp pháp, tránh bị xử phạt và tạo nền tảng vận hành minh bạch. Với doanh
            nghiệp mới chưa có nhân sự chuyên trách, việc đồng hành cùng một đơn vị tư vấn sẽ giúp
            tiết kiệm thời gian và hạn chế sai sót ngay từ đầu.
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
