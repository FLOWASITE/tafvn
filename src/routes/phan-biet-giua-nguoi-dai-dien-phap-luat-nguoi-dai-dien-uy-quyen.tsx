import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";
import { ArticleRating } from "@/components/site/article-rating";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen";
const OG_IMAGE = "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen.jpg";
const TITLE = "Phân biệt người đại diện theo pháp luật và người đại diện theo ủy quyền";
const DESCRIPTION =
  "Phân biệt người đại diện theo pháp luật và người đại diện theo ủy quyền của doanh nghiệp: khái niệm, điểm giống và khác nhau, rủi ro khi nhầm lẫn và lưu ý khi xác lập đại diện. Tổng hợp bởi TAF.";

export const Route = createFileRoute(
  "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen",
)({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "người đại diện theo pháp luật, người đại diện theo ủy quyền, phân biệt người đại diện pháp luật và ủy quyền, đại diện doanh nghiệp, ủy quyền doanh nghiệp",
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
  { id: "dai-dien-phap-luat", label: "Người đại diện theo pháp luật là gì?" },
  { id: "dai-dien-uy-quyen", label: "Người đại diện theo ủy quyền là gì?" },
  { id: "giong-nhau", label: "Điểm giống nhau" },
  { id: "khac-nhau", label: "Điểm khác nhau" },
  { id: "rui-ro", label: "Rủi ro khi nhầm lẫn vai trò đại diện" },
  { id: "luu-y", label: "Lưu ý khi xác lập người đại diện" },
  { id: "taf", label: "TAF đồng hành cùng doanh nghiệp" },
  { id: "ket-luan", label: "Kết luận" },
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

const COMPARE: [string, string, string][] = [
  ["Cơ sở xác lập", "Theo quy định pháp luật và điều lệ công ty", "Theo hợp đồng/văn bản ủy quyền"],
  ["Phạm vi quyền hạn", "Quản lý chung và thực hiện các hành vi pháp lý của doanh nghiệp", "Giới hạn trong phạm vi và thời hạn được ủy quyền"],
  ["Tính chất công việc", "Đại diện toàn diện, thường xuyên", "Thực hiện nhiệm vụ hoặc giao dịch cụ thể"],
  ["Mối liên kết với doanh nghiệp", "Gắn bó chặt chẽ, lâu dài", "Thường không phải thành viên chính thức của doanh nghiệp"],
];

function ArticlePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tin tức", to: "/tin-tuc" },
          { label: "Phân biệt người đại diện pháp luật & ủy quyền" },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Tin chuyên môn</Eyebrow>
          <h1 className="t-h2 md:text-[2.6rem] text-foreground">
            Phân biệt giữa người đại diện theo pháp luật &amp; người đại diện theo ủy quyền
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-foreground" /> Cập nhật 2026
            </span>
            <span className="h-3 w-px bg-border" />
            <span>Biên soạn bởi đội ngũ TAF</span>
          </div>
          <div className="rule-gold mt-8" />
        </div>
      </Section>

      <Section className="!pt-0">
        <article className="max-w-3xl">
          {/* Mô tả */}
          <P>
            Trong quá trình vận hành doanh nghiệp, hai khái niệm{" "}
            <strong className="font-medium text-foreground">người đại diện theo pháp luật</strong>{" "}
            và{" "}
            <strong className="font-medium text-foreground">người đại diện theo ủy quyền</strong>{" "}
            thường bị nhầm lẫn, dẫn đến những rủi ro pháp lý không đáng có khi ký kết hợp đồng hay
            làm việc với cơ quan nhà nước. Việc hiểu đúng vai trò, phạm vi quyền hạn của từng loại
            đại diện giúp chủ doanh nghiệp, kế toán trưởng và người phụ trách pháp lý chủ động hơn,
            tránh ký sai thẩm quyền và bảo vệ quyền lợi của công ty. Bài viết này phân biệt rõ hai
            vai trò trên dưới góc độ thực tiễn quản trị doanh nghiệp, đồng thời nêu một số lưu ý khi
            xác lập đại diện. Là đơn vị tư vấn kế toán – thuế và hỗ trợ thủ tục doanh nghiệp, TAF
            chia sẻ nội dung này để bạn nắm vững bản chất trước khi áp dụng vào thực tế.
          </P>

          {/* Ảnh bìa */}
          <img
            src={OG_IMAGE}
            alt="Phân biệt người đại diện theo pháp luật và người đại diện theo ủy quyền - TAF"
            width={1280}
            height={720}
            className="my-8 w-full rounded-[3px] border border-border"
          />

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
          <H2 id="dai-dien-phap-luat">Người đại diện theo pháp luật là gì?</H2>
          <P>
            Người đại diện theo pháp luật của doanh nghiệp là cá nhân đại diện cho doanh nghiệp thực
            hiện các quyền và nghĩa vụ phát sinh từ giao dịch của doanh nghiệp, đại diện cho doanh
            nghiệp trước cơ quan nhà nước và trong các quan hệ kinh doanh với khách hàng, đối tác.
            Vai trò, chức danh, quyền và nghĩa vụ của người đại diện theo pháp luật phụ thuộc vào
            loại hình doanh nghiệp và được quy định cụ thể trong điều lệ công ty, thể hiện trên các
            tài liệu pháp lý. Theo quy định pháp luật hiện hành, một doanh nghiệp có thể có một hoặc
            nhiều người đại diện theo pháp luật.
          </P>

          {/* 2 */}
          <H2 id="dai-dien-uy-quyen">Người đại diện theo ủy quyền là gì?</H2>
          <P>
            Người đại diện theo ủy quyền là cá nhân hoặc tổ chức được doanh nghiệp ủy quyền để đại
            diện và thực hiện một số hành động thay mặt doanh nghiệp trong các vấn đề pháp lý, giao
            dịch kinh doanh hoặc công việc cụ thể, theo quy định của pháp luật. Việc ủy quyền được
            xác lập thông qua hợp đồng/văn bản ủy quyền, trong đó nêu rõ phạm vi, thời hạn, quyền và
            nghĩa vụ của người được ủy quyền. Quyền hạn của người đại diện theo ủy quyền chỉ giới
            hạn trong nội dung và thời hạn mà văn bản ủy quyền xác định.
          </P>

          {/* 3 */}
          <H2 id="giong-nhau">Điểm giống nhau</H2>
          <Bullets
            items={[
              "Đều là đại diện chính thức cho doanh nghiệp trong các giao dịch pháp lý và kinh doanh.",
              "Đều phải tuân thủ quy định pháp luật và thực hiện nghĩa vụ thay mặt doanh nghiệp mà mình đại diện.",
              "Quyền và nghĩa vụ của cả hai đều được xác định rõ trong văn bản pháp lý hoặc hợp đồng ủy quyền.",
            ]}
          />

          {/* 4 */}
          <H2 id="khac-nhau">Điểm khác nhau</H2>
          <div className="my-6 border border-border rounded-[2px] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tiêu chí</TableHead>
                  <TableHead>Đại diện theo pháp luật</TableHead>
                  <TableHead>Đại diện theo ủy quyền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARE.map(([crit, a, b]) => (
                  <TableRow key={crit}>
                    <TableCell className="font-medium text-foreground">{crit}</TableCell>
                    <TableCell className="text-foreground/85">{a}</TableCell>
                    <TableCell className="text-foreground/85">{b}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 5 */}
          <H2 id="rui-ro">Rủi ro khi nhầm lẫn vai trò đại diện</H2>
          <P>
            Nhầm lẫn giữa hai vai trò có thể khiến doanh nghiệp đối mặt với một số rủi ro:
          </P>
          <Bullets
            items={[
              "Ký kết hợp đồng vượt quá thẩm quyền, dẫn đến tranh chấp về hiệu lực giao dịch.",
              "Người được ủy quyền thực hiện công việc ngoài phạm vi/thời hạn ủy quyền.",
              "Khó xác định trách nhiệm pháp lý khi phát sinh sự cố trong giao dịch.",
              "Vướng mắc khi làm việc với ngân hàng, cơ quan thuế hoặc đối tác do hồ sơ đại diện không rõ ràng.",
            ]}
          />

          {/* 6 */}
          <H2 id="luu-y">Lưu ý khi xác lập người đại diện</H2>
          <Bullets
            items={[
              "Ghi rõ người đại diện theo pháp luật trong điều lệ và hồ sơ đăng ký doanh nghiệp.",
              "Lập văn bản ủy quyền rõ ràng về phạm vi, thời hạn, quyền và nghĩa vụ khi ủy quyền.",
              "Kiểm tra thẩm quyền của người ký trước khi giao kết hợp đồng quan trọng.",
              "Lưu trữ đầy đủ hồ sơ đại diện, ủy quyền để thuận tiện khi đối chiếu, giải trình.",
            ]}
          />

          {/* 7 */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp</H2>
          <P>
            Việc xác lập người đại diện gắn liền với quá trình thành lập và vận hành doanh nghiệp.
            Nếu bạn đang chuẩn bị mở công ty và cần hỗ trợ hồ sơ pháp lý ban đầu, hãy tham khảo{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ thành lập doanh nghiệp
            </Link>{" "}
            của TAF để được tư vấn về điều lệ, chức danh và người đại diện theo pháp luật.
          </P>
          <P>
            Sau khi đi vào hoạt động, doanh nghiệp cần thực hiện đầy đủ nghĩa vụ kế toán – thuế. Bạn
            có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán
            </Link>{" "}
            của TAF để được hỗ trợ ghi sổ, kê khai và tuân thủ thuế đúng quy định, giúp bộ máy vận
            hành minh bạch và an toàn về pháp lý.
          </P>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Phân biệt rõ người đại diện theo pháp luật và người đại diện theo ủy quyền giúp doanh
            nghiệp tránh ký sai thẩm quyền, hạn chế tranh chấp và bảo vệ quyền lợi trong các giao
            dịch. Người đại diện theo pháp luật giữ vai trò quản lý chung, gắn bó lâu dài; còn người
            đại diện theo ủy quyền chỉ thực hiện công việc trong phạm vi và thời hạn được ủy quyền.
            Khi cần hỗ trợ về thủ tục doanh nghiệp hoặc kế toán – thuế, một đơn vị chuyên môn sẽ giúp
            bạn an tâm hơn.
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

      <ArticleRating title={TITLE} slug="phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen" />
      <RelatedArticles currentHref={PATH} />
    </>
  );
}
