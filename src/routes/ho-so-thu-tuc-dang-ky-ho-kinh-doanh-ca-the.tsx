import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the";
const OG_IMAGE = "/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the.jpg";
const TITLE = "Hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể";
const DESCRIPTION =
  "Hộ kinh doanh cá thể là hình thức kinh doanh phổ biến, đơn giản về thủ tục. Tìm hiểu điều kiện, hồ sơ cần thiết, phương thức đăng ký và thời gian xử lý khi đăng ký hộ kinh doanh cá thể cùng TAF.";

export const Route = createFileRoute("/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hộ kinh doanh cá thể, hồ sơ đăng ký hộ kinh doanh, thủ tục đăng ký hộ kinh doanh cá thể, thành lập hộ kinh doanh, điều kiện thành lập hộ kinh doanh",
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
  { id: "la-gi", label: "Hộ kinh doanh cá thể là gì?" },
  { id: "khi-nao", label: "Khi nào nên chọn hộ kinh doanh thay vì thành lập công ty?" },
  { id: "dieu-kien", label: "Đối tượng có quyền thành lập hộ kinh doanh cá thể" },
  { id: "ho-so", label: "Hồ sơ cần thiết khi đăng ký hộ kinh doanh cá thể" },
  { id: "phuong-thuc", label: "Phương thức đăng ký hộ kinh doanh cá thể" },
  { id: "thoi-gian", label: "Thời gian xử lý hồ sơ và trả kết quả" },
  { id: "taf", label: "TAF hỗ trợ đăng ký hộ kinh doanh" },
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
        items={[
          { label: "Nghiệp vụ", to: "/nghiep-vu" },
          { label: "Hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể" },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-foreground">
            Hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể
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
            Hộ kinh doanh cá thể là một trong những hình thức kinh doanh phổ biến nhất tại Việt
            Nam, phù hợp với cá nhân và hộ gia đình muốn tự kinh doanh mà không cần bỏ nguồn vốn lớn
            để thành lập công ty. Tuy nhiên, không ít người vẫn băn khoăn về điều kiện, hồ sơ cũng
            như thủ tục đăng ký sao cho đúng quy định và nhanh chóng. Bài viết này tổng hợp những
            thông tin cơ bản về{" "}
            <strong className="font-medium text-foreground">
              hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể
            </strong>
            : ai có quyền thành lập, cần chuẩn bị giấy tờ gì, đăng ký ở đâu và thời gian xử lý ra
            sao. Là đơn vị tư vấn kế toán – thuế nhiều kinh nghiệm, TAF chia sẻ nội dung này để bạn
            chuẩn bị hồ sơ thuận lợi, tránh sai sót và tiết kiệm thời gian khi bắt đầu kinh doanh.
          </P>

          {/* Ảnh bìa */}
          <img
            src={OG_IMAGE}
            alt="Hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể - TAF"
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
          <H2 id="la-gi">Hộ kinh doanh cá thể là gì?</H2>
          <P>
            Hộ kinh doanh cá thể thường được hiểu là cơ sở kinh doanh có quy mô nhỏ, do một cá nhân
            hoặc các thành viên trong hộ gia đình làm chủ, đăng ký và chịu trách nhiệm. Đây là hình
            thức phù hợp với những người muốn tự kinh doanh mà không cần thành lập công ty với vốn
            đầu tư lớn. Hộ kinh doanh có thể hoạt động trong nhiều lĩnh vực, từ dịch vụ đến sản xuất
            hoặc buôn bán hàng hóa; chủ hộ chịu trách nhiệm về hoạt động và nghĩa vụ tài chính của
            hộ kinh doanh.
          </P>

          {/* 2 */}
          <H2 id="khi-nao">Khi nào nên chọn hộ kinh doanh thay vì thành lập công ty?</H2>
          <P>
            Khi bắt đầu kinh doanh, nhiều người phải cân nhắc giữa thành lập công ty hoặc đăng ký
            hộ kinh doanh cá thể, tùy theo quy mô và yêu cầu thực tế. Hộ kinh doanh thường phù hợp
            với các trường hợp sau nhờ thủ tục đơn giản, giảm gánh nặng tài chính và pháp lý:
          </P>
          <Bullets
            items={[
              "Chủ sở hữu chưa có nhu cầu sử dụng hóa đơn giá trị gia tăng (VAT), muốn tránh thủ tục thuế phức tạp.",
              "Cá nhân, hộ gia đình có hoạt động kinh doanh nhỏ lẻ, ít vốn.",
              "Hộ gia đình muốn hợp pháp hóa hoạt động kinh doanh và có giấy phép khi cơ quan chức năng kiểm tra.",
            ]}
          />

          {/* 3 */}
          <H2 id="dieu-kien">Đối tượng có quyền thành lập hộ kinh doanh cá thể</H2>
          <P>Theo quy định hiện hành, một đối tượng có quyền thành lập hộ kinh doanh khi đáp ứng đủ các yếu tố sau:</P>
          <Bullets
            items={[
              "Là công dân Việt Nam;",
              "Có đầy đủ năng lực hành vi dân sự;",
              "Từ đủ 18 tuổi trở lên;",
              "Là cá nhân hoặc thành viên thuộc hộ gia đình đăng ký kinh doanh.",
            ]}
          />
          <P>
            Nếu thiếu bất kỳ yếu tố nào, đối tượng đó không đủ điều kiện thành lập hộ kinh doanh cá
            thể.
          </P>

          {/* 4 */}
          <H2 id="ho-so">Hồ sơ cần thiết khi đăng ký hộ kinh doanh cá thể</H2>
          <P>Hồ sơ đăng ký hộ kinh doanh cá thể cơ bản bao gồm:</P>
          <Bullets
            items={[
              "Giấy đề nghị đăng ký hộ kinh doanh cá thể;",
              "Bản sao có chứng thực CMND/CCCD/hộ chiếu của chủ hộ kinh doanh;",
              "Bản sao hợp đồng thuê nhà, hợp đồng mượn nhà hoặc giấy chứng nhận quyền sử dụng đất đối với địa điểm kinh doanh.",
            ]}
          />
          <H3>Trường hợp các thành viên hộ gia đình cùng góp vốn</H3>
          <Bullets
            items={[
              "Bản sao có chứng thực CMND/CCCD/hộ chiếu của các thành viên hộ gia đình;",
              "Bản sao có chứng thực biên bản họp thành viên hộ gia đình về việc thành lập hộ kinh doanh;",
              "Bản sao có chứng thực văn bản ủy quyền của các thành viên cho một người làm chủ hộ kinh doanh.",
            ]}
          />

          {/* 5 */}
          <H2 id="phuong-thuc">Phương thức đăng ký hộ kinh doanh cá thể</H2>
          <P>
            Hiện nay có hai phương thức đăng ký hộ kinh doanh, thuận tiện cho người dân và phù hợp
            với quá trình chuyển đổi số:
          </P>
          <Bullets
            items={[
              "Nộp hồ sơ trực tiếp tại Cơ quan đăng ký kinh doanh cấp huyện nơi đặt địa điểm kinh doanh.",
              "Nộp hồ sơ trực tuyến qua cổng dịch vụ công; sau khi hoàn tất, hồ sơ được chuyển đến Phòng Tài chính – Kế hoạch hoặc Phòng Kinh tế thuộc UBND quận, huyện để xét duyệt.",
            ]}
          />

          {/* 6 */}
          <H2 id="thoi-gian">Thời gian xử lý hồ sơ và trả kết quả</H2>
          <P>
            Khi tiếp nhận hồ sơ, Cơ quan đăng ký kinh doanh cấp huyện trao giấy biên nhận và cấp
            Giấy chứng nhận đăng ký hộ kinh doanh trong thời hạn 3 ngày làm việc kể từ ngày nhận hồ
            sơ hợp lệ.
          </P>
          <P>
            Trường hợp hồ sơ chưa hợp lệ, trong vòng 3 ngày làm việc kể từ ngày tiếp nhận, cơ quan
            sẽ thông báo bằng văn bản, nêu rõ lý do và yêu cầu sửa đổi, bổ sung (nếu cần). Các mốc
            thời gian và yêu cầu cụ thể có thể thay đổi theo quy định và thực tế tại từng địa
            phương, vì vậy doanh nghiệp nên đối chiếu với hướng dẫn hiện hành hoặc tham vấn đơn vị
            chuyên môn.
          </P>

          {/* 7 */}
          <H2 id="taf">TAF hỗ trợ đăng ký hộ kinh doanh</H2>
          <P>
            Nếu bạn muốn tiết kiệm thời gian và hạn chế sai sót khi chuẩn bị hồ sơ, TAF có thể đồng
            hành từ khâu tư vấn điều kiện, soạn hồ sơ đến nộp và theo dõi kết quả. Khi hoạt động mở
            rộng và cần chuyển sang mô hình doanh nghiệp, bạn có thể tham khảo{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ thành lập doanh nghiệp
            </Link>{" "}
            của TAF để chuyển đổi thuận lợi.
          </P>
          <P>
            Sau khi có giấy phép, hộ kinh doanh vẫn phải thực hiện nghĩa vụ kê khai và nộp thuế theo
            quy định. Để yên tâm về phần này, bạn có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-thue-cho-ho-kinh-doanh"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán cho hộ kinh doanh
            </Link>{" "}
            của TAF để được hỗ trợ kê khai, sổ sách và tuân thủ thuế đúng quy định.
          </P>

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Đăng ký hộ kinh doanh cá thể là bước khởi đầu thuận lợi cho nhiều cá nhân và hộ gia đình
            muốn kinh doanh hợp pháp với thủ tục đơn giản. Nắm rõ điều kiện, hồ sơ, phương thức đăng
            ký và thời gian xử lý sẽ giúp bạn chuẩn bị chính xác và tránh mất thời gian bổ sung hồ
            sơ. Khi cần hỗ trợ trọn gói hoặc tư vấn về thuế – kế toán sau khi thành lập, một đơn vị
            chuyên môn sẽ giúp bạn an tâm hơn.
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
