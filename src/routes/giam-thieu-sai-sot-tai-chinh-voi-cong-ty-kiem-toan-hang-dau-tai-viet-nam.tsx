import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam";
const OG_IMAGE = "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam.jpg";
const TITLE = "Giảm thiểu sai sót tài chính với công ty kiểm toán hàng đầu tại Việt Nam";
const DESCRIPTION =
  "Kiểm toán giúp đảm bảo tính chính xác, minh bạch của báo cáo tài chính và giảm thiểu sai sót tài chính cho doanh nghiệp. Tìm hiểu lợi ích, quy trình kiểm toán chuyên nghiệp và giải pháp cùng TAF.";

export const Route = createFileRoute(
  "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam",
)({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "kiểm toán, dịch vụ kiểm toán, công ty kiểm toán, kiểm toán báo cáo tài chính, giảm thiểu sai sót tài chính, kiểm toán nội bộ",
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
  { id: "kiem-toan-la-gi", label: "Kiểm toán là gì và vì sao doanh nghiệp cần kiểm toán?" },
  { id: "vi-sao-sai-sot", label: "Vì sao sai sót tài chính dễ phát sinh?" },
  { id: "loi-ich", label: "Lợi ích của việc kiểm toán" },
  { id: "quy-trinh", label: "Quy trình kiểm toán chuyên nghiệp" },
  { id: "chat-luong", label: "Đảm bảo chất lượng và tính chuyên nghiệp" },
  { id: "loi-ich-kinh-te", label: "Lợi ích kinh tế từ dịch vụ kiểm toán" },
  { id: "taf", label: "TAF — công ty kiểm toán uy tín tại Việt Nam" },
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
function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.0625rem] text-foreground/85 font-serif leading-[1.75] mb-4">{children}</p>
  );
}
function Numbered({ items }: { items: { t: string; d: string }[] }) {
  return (
    <ol className="my-5 space-y-4 list-none">
      {items.map((s, i) => (
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
        items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Giảm thiểu sai sót tài chính" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-foreground">
            Giảm thiểu sai sót tài chính với công ty kiểm toán hàng đầu tại Việt Nam
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
            Báo cáo tài chính chính xác và minh bạch là nền tảng cho mọi quyết định kinh doanh, vay
            vốn hay gọi đầu tư. Tuy nhiên, trong quá trình ghi sổ và lập báo cáo, doanh nghiệp khó
            tránh khỏi những sai sót — từ hạch toán nhầm, thiếu chứng từ đến áp dụng chưa đúng quy
            định. Đây là lý do nhiều doanh nghiệp tìm đến{" "}
            <strong className="font-medium text-foreground">công ty kiểm toán</strong> uy tín để rà
            soát, xác nhận và{" "}
            <strong className="font-medium text-foreground">giảm thiểu sai sót tài chính</strong>.
            Bài viết dưới đây trình bày vai trò của kiểm toán, vì sao sai sót dễ phát sinh, lợi ích
            và quy trình kiểm toán chuyên nghiệp, cũng như cách doanh nghiệp được hỗ trợ trên thực
            tế. Là hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF chia sẻ nội dung
            này để doanh nghiệp chủ động kiểm soát rủi ro tài chính.
          </P>

          {/* Ảnh bìa */}
          <img
            src={OG_IMAGE}
            alt="Giảm thiểu sai sót tài chính với công ty kiểm toán hàng đầu tại Việt Nam - TAF"
            width={1280}
            height={720}
            className="my-8 w-full rounded-[3px] border border-border"
          />

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
          <H2 id="kiem-toan-la-gi">Kiểm toán là gì và vì sao doanh nghiệp cần kiểm toán?</H2>
          <P>
            Kiểm toán là quá trình kiểm tra, xác minh tính chính xác của các báo cáo tài chính do
            doanh nghiệp lập ra. Một cuộc kiểm toán đúng chuẩn mực giúp xác nhận độ tin cậy của báo
            cáo, làm doanh nghiệp trở nên minh bạch hơn trong mắt nhà đầu tư, đáp ứng yêu cầu của cơ
            quan quản lý và hỗ trợ ban lãnh đạo ra quyết định.
          </P>

          {/* 2 */}
          <H2 id="vi-sao-sai-sot">Vì sao sai sót tài chính dễ phát sinh?</H2>
          <P>
            Sai sót tài chính có thể đến từ nhiều nguyên nhân trong quá trình vận hành:
          </P>
          <Bullets
            items={[
              "Hạch toán nhầm, ghi sổ thiếu hoặc trùng nghiệp vụ.",
              "Chứng từ chưa đầy đủ, chưa hợp lệ làm thiếu căn cứ ghi nhận.",
              "Áp dụng chưa đúng chính sách kế toán, thuế hoặc cập nhật quy định chưa kịp thời.",
              "Thiếu cơ chế kiểm soát và đối chiếu nội bộ giữa các bộ phận.",
            ]}
          />
          <P>
            Những sai sót này nếu không được phát hiện sớm có thể ảnh hưởng đến tính trung thực của
            báo cáo tài chính và làm phát sinh rủi ro khi quyết toán, thanh tra thuế.
          </P>

          {/* 3 */}
          <H2 id="loi-ich">Lợi ích của việc kiểm toán</H2>
          <Bullets
            items={[
              "Tăng tính minh bạch và độ tin cậy của báo cáo tài chính, hỗ trợ thu hút vốn đầu tư.",
              "Giúp doanh nghiệp tuân thủ các quy định của pháp luật và cơ quan quản lý.",
              "Phát hiện và khắc phục kịp thời các sai sót trong kế toán và thuế.",
              "Cung cấp thông tin chính xác để ban lãnh đạo ra quyết định đúng đắn.",
            ]}
          />

          {/* 4 */}
          <H2 id="quy-trinh">Quy trình kiểm toán chuyên nghiệp</H2>
          <P>
            Một cuộc kiểm toán chuyên nghiệp thường gồm các bước cơ bản:
          </P>
          <Numbered
            items={[
              {
                t: "Thu thập bằng chứng",
                d: "Kiểm toán viên thu thập bằng chứng đầy đủ và phù hợp để đánh giá tính tuân thủ của doanh nghiệp với các quy định kế toán hiện hành.",
              },
              {
                t: "Đánh giá độ tin cậy",
                d: "Xác định mức độ tin cậy của báo cáo tài chính dựa trên thông tin thực tế về hoạt động của doanh nghiệp.",
              },
              {
                t: "Phát hành báo cáo kiểm toán",
                d: "Doanh nghiệp nhận báo cáo kiểm toán nêu ý kiến của kiểm toán viên về báo cáo tài chính, kèm các trao đổi về tình trạng kế toán và khuyến nghị (nếu có).",
              },
            ]}
          />

          {/* 5 */}
          <H2 id="chat-luong">Đảm bảo chất lượng và tính chuyên nghiệp</H2>
          <P>
            Kiểm toán viên cam kết tuân thủ các quy định hiện hành và chuẩn mực đạo đức nghề nghiệp
            trong suốt quá trình kiểm toán. Sau khi hoàn thành, doanh nghiệp nhận được báo cáo phản
            ánh trung thực và khách quan tình hình tài chính, làm cơ sở tin cậy cho các bên liên
            quan.
          </P>

          {/* 6 */}
          <H2 id="loi-ich-kinh-te">Lợi ích kinh tế từ dịch vụ kiểm toán</H2>
          <P>
            Thông qua việc phát hiện và xử lý các sai sót, kiểm toán giúp doanh nghiệp hạn chế rủi
            ro bị truy thu, xuất toán chi phí và tối ưu hóa hoạt động tài chính. Các dịch vụ kiểm
            toán tại Việt Nam thường bao gồm kiểm tra báo cáo tài chính và soát xét thông tin kế
            toán, mang lại giá trị thiết thực cho doanh nghiệp.
          </P>

          {/* 7 */}
          <H2 id="taf">TAF — công ty kiểm toán uy tín tại Việt Nam</H2>
          <P>
            Là hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, TAF cung cấp{" "}
            <Link
              to="/dich-vu-kiem-toan"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kiểm toán
            </Link>{" "}
            báo cáo tài chính theo Chuẩn mực Kiểm toán Việt Nam (VSA), với báo cáo do kiểm toán viên
            hành nghề ký, giúp doanh nghiệp xác nhận độ tin cậy của số liệu và giảm thiểu sai sót.
          </P>
          <P>
            Bên cạnh đó, để chủ động kiểm soát rủi ro từ bên trong, doanh nghiệp có thể tham khảo
            dịch vụ{" "}
            <Link
              to="/dich-vu-kiem-toan-noi-bo"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              kiểm toán nội bộ
            </Link>{" "}
            của TAF nhằm đánh giá hệ thống kiểm soát, nhận diện điểm yếu và đưa ra khuyến nghị cải
            tiến quy trình.
          </P>

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Kiểm toán là công cụ quan trọng giúp doanh nghiệp giảm thiểu sai sót tài chính, nâng cao
            tính minh bạch và tạo dựng niềm tin với nhà đầu tư, ngân hàng và cơ quan quản lý. Lựa
            chọn một công ty kiểm toán uy tín, làm việc đúng chuẩn mực sẽ giúp doanh nghiệp chủ động
            kiểm soát rủi ro và tối ưu hoạt động tài chính.
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
