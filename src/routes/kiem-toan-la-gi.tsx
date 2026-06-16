import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";
import { ArticleRating } from "@/components/site/article-rating";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/kiem-toan-la-gi";
const OG_IMAGE = "/kiem-toan-la-gi.jpg";
const TITLE = "Kiểm toán là gì? Những công việc quan trọng của kiểm toán viên";
const DESCRIPTION =
  "Kiểm toán là gì? Bài viết giải thích khái niệm kiểm toán, các loại kiểm toán, những công việc quan trọng của kiểm toán viên và vai trò của kiểm toán đối với doanh nghiệp — tổng hợp bởi đội ngũ TAF.";

export const Route = createFileRoute("/kiem-toan-la-gi")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "kiểm toán là gì, công việc của kiểm toán viên, các loại kiểm toán, kiểm toán độc lập, kiểm toán báo cáo tài chính, dịch vụ kiểm toán, kiểm toán nội bộ",
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
  { id: "kiem-toan-la-gi", label: "Kiểm toán là gì?" },
  { id: "cac-loai", label: "Các loại kiểm toán phổ biến hiện nay" },
  { id: "cong-viec", label: "Những công việc quan trọng của kiểm toán viên" },
  { id: "vai-tro", label: "Vai trò của kiểm toán đối với doanh nghiệp" },
  { id: "rui-ro", label: "Rủi ro khi báo cáo tài chính không được kiểm toán đúng cách" },
  { id: "khi-nao", label: "Khi nào doanh nghiệp nên dùng dịch vụ kiểm toán độc lập?" },
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
      <Breadcrumb items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Kiểm toán là gì?" }]} />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Tin chuyên môn</Eyebrow>
          <h1 className="t-h2 md:text-[2.75rem] text-foreground">
            Kiểm toán là gì? Những công việc quan trọng của kiểm toán viên
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
            alt="Kiểm toán là gì? Những công việc quan trọng của kiểm toán viên - TAF"
            width={1280}
            height={720}
            className="mb-8 w-full rounded-[3px] border border-border"
          />
          {/* Giới thiệu */}
          <P>
            Kiểm toán là một mắt xích quan trọng giúp bảo đảm tính minh bạch của thông tin tài
            chính doanh nghiệp. Trong bối cảnh các nhà đầu tư, ngân hàng và cơ quan quản lý ngày
            càng coi trọng số liệu đáng tin cậy, nhiều chủ doanh nghiệp, kế toán trưởng đặt câu
            hỏi: <strong className="font-medium text-foreground">kiểm toán là gì</strong>, kiểm
            toán viên làm những công việc gì và vì sao báo cáo tài chính cần được kiểm toán? Bài
            viết dưới đây giải thích khái niệm kiểm toán, phân loại các hình thức kiểm toán phổ
            biến, những công việc quan trọng của kiểm toán viên cũng như vai trò của kiểm toán đối
            với doanh nghiệp. Là hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF
            tổng hợp nội dung này nhằm giúp bạn có cái nhìn đúng và đầy đủ trước khi lựa chọn giải
            pháp phù hợp cho đơn vị mình.
          </P>

          {/* Mục lục */}
          <nav
            aria-label="Mục lục"
            className="my-8 rounded-[3px] border border-border bg-cream/50 p-5"
          >
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
          <H2 id="kiem-toan-la-gi">Kiểm toán là gì?</H2>
          <P>
            Kiểm toán là quá trình thu thập, đánh giá và xác thực các bằng chứng liên quan đến
            thông tin tài chính của một doanh nghiệp hoặc tổ chức, nhằm đưa ra ý kiến về mức độ phù
            hợp của thông tin đó so với các chuẩn mực đã được thiết lập. Nói cách đơn giản, kiểm
            toán là việc kiểm tra và xác minh tính trung thực, hợp lý của báo cáo tài chính, từ đó
            cung cấp thông tin đáng tin cậy về tình hình tài chính của đơn vị.
          </P>
          <P>
            Một bộ báo cáo tài chính thường bao gồm: bảng cân đối kế toán, báo cáo kết quả hoạt
            động kinh doanh, báo cáo thay đổi vốn chủ sở hữu, báo cáo lưu chuyển tiền tệ và bản
            thuyết minh báo cáo tài chính. Kết quả kiểm toán không chỉ phục vụ nội bộ doanh nghiệp
            mà còn là căn cứ để nhà đầu tư, đối tác và cơ quan Nhà nước đánh giá, ra quyết định.
          </P>

          {/* 2 */}
          <H2 id="cac-loai">Các loại kiểm toán phổ biến hiện nay</H2>
          <P>Xét theo chủ thể thực hiện, hiện nay có ba loại kiểm toán chính:</P>
          <H3>Kiểm toán nhà nước</H3>
          <P>
            Do cơ quan Kiểm toán Nhà nước thực hiện theo luật định và không thu phí. Đối tượng phổ
            biến là các đơn vị sử dụng ngân sách, tài sản công và doanh nghiệp nhà nước.
          </P>
          <H3>Kiểm toán độc lập</H3>
          <P>
            Do kiểm toán viên của các công ty kiểm toán độc lập được cấp phép thực hiện. Nhiệm vụ
            trọng tâm là kiểm toán báo cáo tài chính; ngoài ra các công ty kiểm toán còn cung cấp
            nhiều dịch vụ tài chính khác theo nhu cầu khách hàng. Báo cáo của kiểm toán độc lập có
            độ tin cậy cao và được nhiều bên chấp nhận.
          </P>
          <H3>Kiểm toán nội bộ</H3>
          <P>
            Do bộ phận kiểm toán bên trong doanh nghiệp thực hiện theo yêu cầu của ban lãnh đạo,
            tập trung vào đánh giá hệ thống kiểm soát nội bộ và quản trị rủi ro. Vì người thực hiện
            là nhân sự nội bộ, kết quả kiểm toán nội bộ chủ yếu phục vụ mục đích quản trị bên trong.
          </P>

          {/* 3 */}
          <H2 id="cong-viec">Những công việc quan trọng của kiểm toán viên</H2>
          <P>
            Dù ở hình thức nào, công việc của kiểm toán viên nhìn chung gồm các bước cơ bản sau:
          </P>
          <H3>Lập kế hoạch kiểm toán</H3>
          <P>
            Bước đầu tiên và rất quan trọng, định hướng cho toàn bộ cuộc kiểm toán. Một kế hoạch
            chi tiết giúp công việc thuận lợi hơn ngay cả khi phát sinh tình huống ngoài dự kiến.
          </P>
          <H3>Xây dựng chương trình kiểm toán</H3>
          <P>
            Xác định số lượng, thứ tự các bước và toàn bộ công việc từ khi bắt đầu đến khi kết
            thúc. Chương trình kiểm toán chặt chẽ giúp kiểm toán viên thực hiện chính xác hơn.
          </P>
          <H3>Thu thập bằng chứng bằng các phương pháp kiểm toán</H3>
          <P>Đây là công việc trọng tâm, sử dụng nhiều phương pháp để thu thập và đối chiếu:</P>
          <Bullets
            items={[
              "Kiểm toán cân đối — dựa trên phương trình kế toán.",
              "Đối chiếu trực tiếp — đối chiếu một chỉ tiêu từ nhiều nguồn tài liệu khác nhau.",
              "Đối chiếu logic — nghiên cứu mối quan hệ giữa các chỉ tiêu liên quan.",
              "Điều tra — tiếp cận và đánh giá đối tượng được kiểm toán.",
              "Trắc nghiệm — tái diễn lại hoạt động để xác minh kết quả đã xảy ra.",
            ]}
          />
          <H3>Ghi chép</H3>
          <P>
            Mọi thông tin, phát hiện, nhận định và con số đều cần được ghi chép đầy đủ. Đây là bằng
            chứng quan trọng và khách quan để đưa ra kết luận kiểm toán.
          </P>
          <H3>Kết luận và lập báo cáo kiểm toán</H3>
          <P>
            Kết luận của kiểm toán viên được thể hiện trên biên bản hoặc báo cáo kiểm toán. Trước
            khi kết luận, kiểm toán viên thường xem xét các khoản nợ ngoài dự kiến, các sự kiện
            phát sinh sau ngày kết thúc niên độ, đánh giá khả năng hoạt động liên tục của đơn vị và
            thu thập đầy đủ thư giải trình của Ban Giám đốc. Cuối cùng, kiểm toán viên tổng hợp và
            phát hành báo cáo kiểm toán nêu ý kiến về báo cáo tài chính của doanh nghiệp.
          </P>

          {/* 4 */}
          <H2 id="vai-tro">Vai trò của kiểm toán đối với doanh nghiệp</H2>
          <P>
            Kiểm toán ảnh hưởng đến nhiều đối tượng, không chỉ riêng doanh nghiệp. Cụ thể, kiểm
            toán giúp:
          </P>
          <Bullets
            items={[
              "Tăng độ tin cậy của báo cáo tài chính trong mắt nhà đầu tư, cổ đông và đối tác.",
              "Hỗ trợ doanh nghiệp tiếp cận vốn vay ngân hàng và gọi vốn thuận lợi hơn.",
              "Là cơ sở để xác định nghĩa vụ, trách nhiệm của doanh nghiệp với cơ quan Nhà nước.",
              "Phát hiện sai sót, rủi ro và góp phần nâng cao chất lượng quản trị doanh nghiệp.",
            ]}
          />

          {/* 5 */}
          <H2 id="rui-ro">Rủi ro khi báo cáo tài chính không được kiểm toán đúng cách</H2>
          <P>
            Khi báo cáo tài chính chưa được kiểm toán hoặc được soát xét sơ sài, doanh nghiệp có
            thể đối mặt với một số rủi ro:
          </P>
          <Bullets
            items={[
              "Số liệu thiếu minh bạch, khó thuyết phục nhà đầu tư và ngân hàng.",
              "Khó khăn khi vay vốn, gọi vốn, M&A hoặc công bố thông tin.",
              "Tồn tại sai sót trọng yếu chưa được phát hiện và xử lý kịp thời.",
              "Rủi ro về tuân thủ khi cơ quan quản lý yêu cầu báo cáo tài chính đã được kiểm toán.",
            ]}
          />
          <P>
            Vì vậy, việc lựa chọn một đơn vị kiểm toán độc lập, uy tín đóng vai trò quan trọng để
            bảo đảm thông tin tài chính chính xác và khách quan.
          </P>

          {/* 6 */}
          <H2 id="khi-nao">Khi nào doanh nghiệp nên dùng dịch vụ kiểm toán độc lập?</H2>
          <P>
            Theo quy định pháp luật hiện hành về kiểm toán độc lập, một số đối tượng như doanh
            nghiệp có vốn đầu tư nước ngoài (FDI), tổ chức tín dụng, công ty đại chúng, doanh
            nghiệp niêm yết và một số đối tượng khác thuộc diện bắt buộc kiểm toán báo cáo tài
            chính năm. Ngoài ra, ngay cả khi không bắt buộc, nhiều doanh nghiệp vẫn chủ động sử
            dụng{" "}
            <Link
              to="/dich-vu-kiem-toan"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kiểm toán
            </Link>{" "}
            để phục vụ vay vốn, gọi vốn, công bố thông tin hoặc nâng cao chất lượng quản trị.
          </P>
          <P>
            Để xác định chính xác đơn vị mình có thuộc diện bắt buộc kiểm toán hay không, doanh
            nghiệp nên căn cứ vào quy định hiện hành và tham vấn đơn vị chuyên môn, thay vì chỉ dựa
            trên thông tin chung.
          </P>

          {/* 7 */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp</H2>
          <P>
            Là hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF cung cấp dịch vụ kiểm
            toán báo cáo tài chính, kiểm toán quyết toán dự án và các dịch vụ soát xét, tư vấn liên
            quan. Mỗi báo cáo do TAF phát hành đều có chữ ký của kiểm toán viên hành nghề, tuân thủ
            Chuẩn mực Kiểm toán Việt Nam (VSA).
          </P>
          <P>
            Bên cạnh kiểm toán độc lập, TAF còn hỗ trợ doanh nghiệp đánh giá hệ thống kiểm soát qua
            dịch vụ{" "}
            <Link
              to="/dich-vu-kiem-toan-noi-bo"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              kiểm toán nội bộ
            </Link>
            , giúp nhận diện rủi ro và đưa ra khuyến nghị cải tiến quy trình. Đội ngũ chuyên môn
            của TAF luôn ưu tiên tính độc lập, đúng chuẩn mực và đúng thời hạn để bảo vệ lợi ích
            của khách hàng.
          </P>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* 8 Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Kiểm toán là công việc quan trọng đối với mọi doanh nghiệp và tổ chức, giúp bảo đảm
            thông tin tài chính chính xác, khách quan và minh bạch. Hiểu rõ kiểm toán là gì, các
            loại kiểm toán và những công việc của kiểm toán viên sẽ giúp doanh nghiệp chủ động hơn
            trong việc lựa chọn giải pháp phù hợp, hạn chế rủi ro và tạo dựng niềm tin với nhà đầu
            tư, ngân hàng cũng như cơ quan quản lý.
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

      <ArticleRating title={TITLE} slug="kiem-toan-la-gi" />
      <RelatedArticles currentHref={PATH} />
    </>
  );
}
