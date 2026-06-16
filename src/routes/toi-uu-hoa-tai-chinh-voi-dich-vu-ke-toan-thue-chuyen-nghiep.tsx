import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep";
const OG_IMAGE = "/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep.jpg";
const TITLE = "Tối ưu hóa tài chính với dịch vụ kế toán thuế chuyên nghiệp";
const DESCRIPTION =
  "Dịch vụ kế toán thuế chuyên nghiệp giúp doanh nghiệp tối ưu hóa tài chính, giảm rủi ro thuế và đảm bảo tính pháp lý. Tìm hiểu quy trình, lợi ích và đối tượng nên sử dụng dịch vụ tại TAF.";

export const Route = createFileRoute("/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "dịch vụ kế toán thuế, kế toán thuế, tối ưu hóa tài chính, dịch vụ kế toán thuế chuyên nghiệp, kế toán thuế trọn gói, tư vấn thuế doanh nghiệp",
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
  { id: "toi-uu-la-gi", label: "Tối ưu hóa tài chính với dịch vụ kế toán thuế là gì?" },
  { id: "rui-ro", label: "Rủi ro khi kế toán – thuế chưa được quản lý chuyên nghiệp" },
  { id: "giai-phap", label: "Dịch vụ kế toán thuế chuyên nghiệp giúp tối ưu tài chính ra sao?" },
  { id: "quy-trinh", label: "Quy trình dịch vụ kế toán thuế tại TAF" },
  { id: "doi-tuong", label: "Đối tượng nên sử dụng dịch vụ" },
  { id: "uu-diem", label: "Ưu điểm dịch vụ kế toán thuế của TAF" },
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
      <Breadcrumb
        items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Tối ưu hóa tài chính" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="t-h2 md:text-[2.6rem] text-foreground">
            Tối ưu hóa tài chính với dịch vụ kế toán thuế chuyên nghiệp
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
          {/* Ảnh bìa */}
          <img
            src={OG_IMAGE}
            alt="Tối ưu hóa tài chính với dịch vụ kế toán thuế chuyên nghiệp - TAF"
            width={1280}
            height={720}
            className="mb-8 w-full rounded-[3px] border border-border"
          />

          {/* Giới thiệu */}
          <P>
            Trong bối cảnh chi phí vận hành ngày càng tăng và quy định thuế thường xuyên thay đổi,
            việc quản lý tài chính hiệu quả trở thành mối quan tâm hàng đầu của nhiều chủ doanh
            nghiệp. Tuy nhiên, không ít đơn vị vẫn loay hoay với sổ sách, kê khai thuế và kiểm soát
            dòng tiền — dẫn đến sai sót, rủi ro phạt và bỏ lỡ cơ hội tiết kiệm hợp pháp. Đây chính
            là lúc một{" "}
            <strong className="font-medium text-foreground">
              dịch vụ kế toán thuế chuyên nghiệp
            </strong>{" "}
            phát huy giá trị: giúp doanh nghiệp tối ưu hóa tài chính, giảm rủi ro thuế và bảo đảm
            tính pháp lý. Bài viết dưới đây phân tích vì sao kế toán – thuế cần được quản lý bài
            bản, những rủi ro khi làm chưa đúng, cũng như quy trình và lợi ích khi sử dụng dịch vụ.
            Là hãng tư vấn kiểm toán đăng ký hành nghề với Bộ Tài chính, TAF chia sẻ góc nhìn thực
            tế để doanh nghiệp lựa chọn giải pháp phù hợp.
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
          <H2 id="toi-uu-la-gi">Tối ưu hóa tài chính với dịch vụ kế toán thuế là gì?</H2>
          <P>
            Tối ưu hóa tài chính không chỉ đơn thuần là ghi chép sổ sách hay nộp tờ khai đúng hạn.
            Đó là quá trình quản trị dòng tiền, kiểm soát chi phí, tuân thủ nghĩa vụ thuế và sử dụng
            thông tin tài chính để ra quyết định kinh doanh tốt hơn. Một dịch vụ kế toán thuế chuyên
            nghiệp giúp doanh nghiệp làm được điều này một cách bài bản: số liệu minh bạch, nghĩa vụ
            thuế được thực hiện đúng quy định và chi phí được kiểm soát hợp lý.
          </P>

          {/* 2 */}
          <H2 id="rui-ro">Rủi ro khi kế toán – thuế chưa được quản lý chuyên nghiệp</H2>
          <P>
            Với doanh nghiệp nhỏ hoặc mới thành lập, việc thiếu nhân sự kế toán giàu kinh nghiệm có
            thể dẫn đến nhiều rủi ro:
          </P>
          <Bullets
            items={[
              "Kê khai sai hoặc chậm nộp, phát sinh tiền phạt và tiền chậm nộp.",
              "Bỏ lỡ các chi phí được trừ và ưu đãi thuế hợp pháp, làm tăng số thuế phải nộp.",
              "Sổ sách, chứng từ thiếu chuẩn, khó giải trình khi cơ quan thuế kiểm tra.",
              "Thiếu thông tin tài chính kịp thời, khó kiểm soát dòng tiền và ra quyết định.",
            ]}
          />

          {/* 3 */}
          <H2 id="giai-phap">
            Dịch vụ kế toán thuế chuyên nghiệp giúp tối ưu tài chính ra sao?
          </H2>
          <P>
            Sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán thuế
            </Link>{" "}
            giúp doanh nghiệp giải quyết các vấn đề trên một cách đồng bộ:
          </P>
          <Bullets
            items={[
              "Bảo đảm tuân thủ pháp luật về kế toán và thuế, hạn chế rủi ro bị xử phạt.",
              "Tận dụng hợp pháp các khoản chi phí được trừ và ưu đãi để tối ưu nghĩa vụ thuế.",
              "Theo dõi dòng tiền, kiểm soát chi phí và cung cấp báo cáo tài chính kịp thời.",
              "Chuẩn hóa và lưu trữ hồ sơ đầy đủ, sẵn sàng cho quyết toán và thanh tra thuế.",
            ]}
          />

          {/* 4 */}
          <H2 id="quy-trinh">Quy trình dịch vụ kế toán thuế tại TAF</H2>
          <ol className="my-5 space-y-4 list-none">
            {[
              {
                t: "Tiếp nhận hồ sơ khách hàng",
                d: "Khách hàng liên hệ qua điện thoại, email hoặc website; TAF tiếp nhận yêu cầu và trao đổi để hiểu rõ tình hình, mong muốn của doanh nghiệp.",
              },
              {
                t: "Khảo sát và báo giá",
                d: "Sau khi nắm bắt tình hình, TAF báo giá sơ bộ cùng phạm vi dịch vụ kế toán thuế phù hợp với từng trường hợp và các điều khoản liên quan.",
              },
              {
                t: "Ký hợp đồng",
                d: "Hai bên thống nhất các hạng mục và đại diện pháp lý tiến hành ký kết hợp đồng dịch vụ.",
              },
              {
                t: "Triển khai và báo cáo kết quả",
                d: "Chuyên viên kế toán theo dõi biến động tài chính, tư vấn sử dụng ngân sách hiệu quả; lập phiếu thu – chi, quản lý quỹ, kê khai – báo cáo thuế và hoàn tất lưu trữ hồ sơ.",
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

          {/* 5 */}
          <H2 id="doi-tuong">Đối tượng nên sử dụng dịch vụ</H2>
          <Bullets
            items={[
              "Công ty mới thành lập, chưa đủ nhân lực kế toán – thuế, cần giải pháp tiết kiệm và chắc chắn.",
              "Doanh nghiệp vừa và nhỏ muốn tiết kiệm chi phí nhưng vẫn bảo đảm chất lượng và tính pháp lý.",
              "Chủ doanh nghiệp mới chưa nắm rõ thủ tục, giấy tờ liên quan đến nghiệp vụ kế toán.",
              "Doanh nghiệp muốn tái cấu trúc hệ thống kế toán và xử lý các vấn đề còn tồn đọng.",
            ]}
          />

          {/* 6 */}
          <H2 id="uu-diem">Ưu điểm dịch vụ kế toán thuế của TAF</H2>
          <H3>Giá cả cạnh tranh, tiết kiệm chi phí</H3>
          <P>
            TAF cung cấp nhiều gói dịch vụ với phạm vi công việc khác nhau dựa trên nhu cầu thực tế,
            tư vấn để doanh nghiệp chọn được gói phù hợp nhằm tiết kiệm chi phí mà vẫn bảo đảm hiệu
            suất.
          </P>
          <H3>Hiệu suất cao và nhanh chóng</H3>
          <P>
            Đội ngũ TAF tiếp nhận, xử lý và hoàn thiện các hạng mục thuế, kế toán một cách nhanh
            chóng, chính xác, giúp doanh nghiệp tập trung vào hoạt động kinh doanh cốt lõi.
          </P>
          <H3>Đội ngũ chuyên viên về thuế</H3>
          <P>
            Với nhiều chuyên viên am hiểu pháp luật và các sắc thuế, TAF giúp thuận lợi hóa các thủ
            tục pháp lý. Khi cần xử lý chuyên sâu, doanh nghiệp có thể kết hợp thêm{" "}
            <Link
              to="/dich-vu-tu-van-thue"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ tư vấn thuế
            </Link>{" "}
            để được hỗ trợ trong các tình huống phát sinh và các đợt thanh, kiểm tra.
          </P>
          <H3>Đầy đủ hồ sơ khi quyết toán thuế</H3>
          <P>
            Với kinh nghiệm phục vụ nhiều doanh nghiệp ở các ngành nghề, TAF duy trì và lưu trữ hồ
            sơ chuẩn mực, hỗ trợ kịp thời trong quá trình thanh tra hoặc quyết toán thuế.
          </P>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Tối ưu hóa tài chính là hành trình dài, trong đó kế toán – thuế được quản lý chuyên
            nghiệp đóng vai trò nền tảng. Một dịch vụ kế toán thuế bài bản không chỉ giúp doanh
            nghiệp tuân thủ đúng quy định mà còn kiểm soát chi phí, minh bạch dòng tiền và sẵn sàng
            cho mọi đợt quyết toán, thanh tra. Đó là khoản đầu tư hợp lý cho sự phát triển bền vững.
          </P>
          <P>
            Liên hệ TAF ngay hôm nay để được tư vấn giải pháp kế toán – thuế phù hợp với nhu cầu
            thực tế của doanh nghiệp.
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
