import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/kiem-toan-nha-nuoc-la-gi-cac-giai-doan-phat-trien-cua-kiem-toan-nha-nuoc";
const OG_IMAGE = "/kiem-toan-nha-nuoc-la-gi.jpg";
const TITLE = "Kiểm toán nhà nước là gì? Các giai đoạn phát triển của kiểm toán nhà nước";
const DESCRIPTION =
  "Kiểm toán nhà nước là gì? Bài viết giải thích khái niệm, vai trò và các giai đoạn phát triển của kiểm toán nhà nước tại Việt Nam, đồng thời phân biệt với kiểm toán độc lập — tổng hợp bởi đội ngũ TAF.";

export const Route = createFileRoute(
  "/kiem-toan-nha-nuoc-la-gi-cac-giai-doan-phat-trien-cua-kiem-toan-nha-nuoc",
)({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "kiểm toán nhà nước là gì, các giai đoạn phát triển của kiểm toán nhà nước, kiểm toán nhà nước, kiểm toán độc lập, dịch vụ kiểm toán, kiểm toán nội bộ",
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
  { id: "kiem-toan-nha-nuoc-la-gi", label: "Kiểm toán nhà nước là gì?" },
  { id: "phan-biet", label: "Phân biệt với kiểm toán độc lập và kiểm toán nội bộ" },
  { id: "giai-doan", label: "Các giai đoạn phát triển của kiểm toán nhà nước" },
  { id: "vai-tro", label: "Vai trò của kiểm toán nhà nước" },
  { id: "doi-tuong", label: "Đối tượng nào liên quan đến kiểm toán nhà nước?" },
  { id: "taf", label: "Doanh nghiệp cần kiểm toán — TAF đồng hành" },
  { id: "ket-luan", label: "Kết luận" },
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
        items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Kiểm toán nhà nước là gì?" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Tin chuyên môn</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-foreground">
            Kiểm toán nhà nước là gì? Các giai đoạn phát triển của kiểm toán nhà nước
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
          <img
            src={OG_IMAGE}
            alt="Kiểm toán nhà nước là gì? Các giai đoạn phát triển của kiểm toán nhà nước - TAF"
            width={1280}
            height={720}
            className="mb-8 w-full rounded-[3px] border border-border"
          />
          {/* Giới thiệu */}
          <P>
            Kiểm toán đang là một trong những lĩnh vực được quan tâm nhiều tại Việt Nam, gắn liền
            với yêu cầu minh bạch và liêm chính của nền tài chính quốc gia. Bên cạnh kiểm toán độc
            lập và kiểm toán nội bộ, nhiều người còn quan tâm đến{" "}
            <strong className="font-medium text-foreground">kiểm toán nhà nước</strong> — cơ quan
            giữ vai trò quan trọng trong việc kiểm tra việc quản lý, sử dụng ngân sách và tài sản
            công. Vậy kiểm toán nhà nước là gì, có vai trò ra sao và đã trải qua những giai đoạn
            phát triển nào? Bài viết dưới đây tổng hợp những thông tin cơ bản, đồng thời phân biệt
            kiểm toán nhà nước với kiểm toán độc lập để doanh nghiệp hiểu đúng bản chất. Là hãng
            kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF chia sẻ nội dung này nhằm
            giúp bạn có cái nhìn rõ ràng hơn về hệ thống kiểm toán tại Việt Nam.
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
          <H2 id="kiem-toan-nha-nuoc-la-gi">Kiểm toán nhà nước là gì?</H2>
          <P>
            Kiểm toán nhà nước là hoạt động do cơ quan Kiểm toán Nhà nước thực hiện, nhằm kiểm tra,
            đánh giá tính trung thực, hợp pháp trong việc quản lý, sử dụng tài chính công và tài sản
            công. Đối tượng kiểm toán thường là các cơ quan nhà nước, đơn vị sự nghiệp công lập, tổ
            chức sử dụng ngân sách, tiền và tài sản của Nhà nước.
          </P>
          <P>
            Khác với kiểm toán độc lập (do các công ty kiểm toán cung cấp dịch vụ và thu phí), kiểm
            toán nhà nước được tiến hành theo luật định và không thu phí đối với đơn vị được kiểm
            toán. Kết quả kiểm toán nhà nước phục vụ công tác quản lý, giám sát của các cơ quan có
            thẩm quyền.
          </P>

          {/* 2 */}
          <H2 id="phan-biet">Phân biệt với kiểm toán độc lập và kiểm toán nội bộ</H2>
          <Bullets
            items={[
              "Kiểm toán nhà nước: do cơ quan Kiểm toán Nhà nước thực hiện theo luật định, tập trung vào tài chính công và tài sản công.",
              "Kiểm toán độc lập: do các công ty kiểm toán được cấp phép thực hiện theo hợp đồng dịch vụ; phổ biến nhất là kiểm toán báo cáo tài chính cho doanh nghiệp.",
              "Kiểm toán nội bộ: do bộ phận bên trong doanh nghiệp thực hiện, phục vụ mục tiêu quản trị và kiểm soát rủi ro nội bộ.",
            ]}
          />

          {/* 3 */}
          <H2 id="giai-doan">Các giai đoạn phát triển của kiểm toán nhà nước</H2>
          <P>
            Quá trình hình thành và phát triển của Kiểm toán Nhà nước Việt Nam có thể chia thành các
            giai đoạn chính sau:
          </P>
          <H3>Giai đoạn hình thành (1994 – 2004)</H3>
          <P>
            Sau khi Hiến pháp năm 1992 ghi nhận đường lối đổi mới nền kinh tế, các hoạt động kinh tế
            – tài chính dần vận hành theo cơ chế thị trường. Ngày 11/07/1994, Chính phủ thành lập cơ
            quan Kiểm toán Nhà nước theo Nghị định số 70-CP; đến ngày 24/01/1995, Điều lệ tổ chức và
            hoạt động của Kiểm toán Nhà nước được ban hành theo Quyết định số 61-TTg. Năm 2003, Nghị
            định số 93/2003/NĐ-CP tiếp tục quy định rõ chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ
            chức. Ở giai đoạn này, Kiểm toán Nhà nước chưa phải là cơ quan hiến định độc lập.
          </P>
          <H3>Giai đoạn chuyển đổi (2005 – 2014)</H3>
          <P>
            Ngày 14/06/2005, Quốc hội khóa XI thông qua Luật Kiểm toán Nhà nước, khẳng định cơ quan
            này hoạt động độc lập trên cơ sở pháp luật và do Quốc hội thành lập. Vị thế của Kiểm toán
            Nhà nước được nâng cao: Quốc hội có quyền bầu, miễn nhiệm, bãi nhiệm Tổng Kiểm toán Nhà
            nước; cơ quan này chủ động quyết định kế hoạch kiểm toán hằng năm và báo cáo trước Quốc
            hội, Chính phủ. Đây là bước chuyển quan trọng giúp giảm sự phụ thuộc và tăng tính độc lập
            trong hoạt động kiểm toán.
          </P>
          <H3>Giai đoạn cơ quan hiến định độc lập (2015 đến nay)</H3>
          <P>
            Hiến pháp năm 2013 lần đầu hiến định địa vị pháp lý của Kiểm toán Nhà nước trong một điều
            khoản riêng, khẳng định đây là cơ quan do Quốc hội thành lập, hoạt động độc lập và chỉ
            tuân theo pháp luật. Tiếp đó, Luật Kiểm toán Nhà nước năm 2015 (sau này được sửa đổi, bổ
            sung) củng cố đầy đủ hơn chức năng, nhiệm vụ và quyền hạn của cơ quan này. Từ đây, Kiểm
            toán Nhà nước trở thành cơ quan hiến định độc lập đúng nghĩa trong bộ máy nhà nước.
          </P>

          {/* 4 */}
          <H2 id="vai-tro">Vai trò của kiểm toán nhà nước</H2>
          <Bullets
            items={[
              "Kiểm tra tính đúng đắn, hợp pháp trong quản lý và sử dụng ngân sách, tiền và tài sản nhà nước.",
              "Góp phần minh bạch hóa và nâng cao tính liêm chính của nền tài chính công.",
              "Cung cấp thông tin phục vụ Quốc hội, Chính phủ trong việc quyết định và giám sát.",
              "Góp phần phòng, chống lãng phí và tiêu cực trong khu vực công.",
            ]}
          />

          {/* 5 */}
          <H2 id="doi-tuong">Đối tượng nào liên quan đến kiểm toán nhà nước?</H2>
          <P>
            Kiểm toán nhà nước chủ yếu hướng đến khu vực công: các cơ quan nhà nước, đơn vị sự nghiệp
            công lập, tổ chức sử dụng ngân sách, tiền và tài sản công, cũng như doanh nghiệp do Nhà
            nước nắm giữ vốn theo quy định. Trong khi đó, phần lớn doanh nghiệp ngoài khu vực công khi
            cần kiểm tra, xác nhận báo cáo tài chính sẽ sử dụng dịch vụ của các công ty kiểm toán độc
            lập, chứ không thuộc phạm vi kiểm toán nhà nước.
          </P>

          {/* 6 */}
          <H2 id="taf">Doanh nghiệp cần kiểm toán — TAF đồng hành</H2>
          <P>
            Nếu doanh nghiệp của bạn cần kiểm toán báo cáo tài chính để phục vụ vay vốn, gọi vốn,
            công bố thông tin hoặc đáp ứng yêu cầu của cơ quan quản lý, giải pháp phù hợp là kiểm toán
            độc lập. Là hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF cung cấp{" "}
            <Link
              to="/dich-vu-kiem-toan"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kiểm toán
            </Link>{" "}
            báo cáo tài chính và kiểm toán quyết toán dự án, với báo cáo do kiểm toán viên hành nghề
            ký, tuân thủ Chuẩn mực Kiểm toán Việt Nam (VSA).
          </P>
          <P>
            Bên cạnh đó, để chủ động đánh giá và kiểm soát rủi ro nội bộ trước khi bước vào các cuộc
            kiểm toán hoặc thanh tra, doanh nghiệp có thể tham khảo dịch vụ{" "}
            <Link
              to="/dich-vu-kiem-toan-noi-bo"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              kiểm toán nội bộ
            </Link>{" "}
            của TAF, giúp nhận diện điểm yếu trong hệ thống kiểm soát và đưa ra khuyến nghị cải tiến.
          </P>

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Kiểm toán nhà nước là một bộ phận quan trọng trong hệ thống kiểm toán Việt Nam, gắn với
            việc giám sát tài chính công và đã trải qua quá trình phát triển từ khi hình thành (1994)
            đến khi trở thành cơ quan hiến định độc lập. Hiểu đúng về kiểm toán nhà nước cũng giúp
            doanh nghiệp phân biệt rõ với kiểm toán độc lập — loại hình mà phần lớn doanh nghiệp cần
            sử dụng khi kiểm toán báo cáo tài chính.
          </P>
          <P>
            Liên hệ TAF ngay hôm nay để được tư vấn giải pháp kiểm toán phù hợp với nhu cầu thực tế
            của doanh nghiệp.
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
                Trụ sở chính: 62A Phạm Ngọc Thạch, Phường 6, Quận 3, TP. Hồ Chí Minh
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
    