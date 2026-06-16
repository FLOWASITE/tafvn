import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/chung-tu-ke-toan-la-gi";
const OG_IMAGE = "/chung-tu-ke-toan-la-gi.jpg";
const TITLE = "Chứng từ kế toán là gì? Phân loại, nội dung và điều kiện hợp lệ";
const DESCRIPTION =
  "Chứng từ kế toán là gì? Bài viết giải thích khái niệm, phân loại, nội dung chủ yếu và điều kiện để chứng từ kế toán hợp lệ, cùng những lưu ý giúp doanh nghiệp ghi sổ và quyết toán thuế chính xác.";

export const Route = createFileRoute("/chung-tu-ke-toan-la-gi")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "chứng từ kế toán là gì, chứng từ kế toán, phân loại chứng từ kế toán, nội dung chứng từ kế toán, chứng từ kế toán hợp lệ, dịch vụ kế toán",
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
  { id: "la-gi", label: "Chứng từ kế toán là gì?" },
  { id: "phan-loai", label: "Phân loại chứng từ kế toán" },
  { id: "noi-dung", label: "Nội dung chủ yếu của chứng từ kế toán" },
  { id: "hop-le", label: "Điều kiện để chứng từ kế toán hợp lệ" },
  { id: "rui-ro", label: "Rủi ro khi chứng từ không hợp lệ" },
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
      <Breadcrumb items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Chứng từ kế toán là gì?" }]} />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="t-h2 md:text-[2.75rem] text-foreground">
            Chứng từ kế toán là gì? Phân loại, nội dung và điều kiện hợp lệ
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
            Trong hoạt động kế toán, mỗi con số trên sổ sách và báo cáo tài chính đều phải có cơ sở
            chứng minh. Đó chính là vai trò của{" "}
            <strong className="font-medium text-foreground">chứng từ kế toán</strong> — bằng chứng
            ghi nhận các giao dịch kinh tế phát sinh của doanh nghiệp. Nhiều chủ doanh nghiệp và kế
            toán mới thường băn khoăn: chứng từ kế toán là gì, gồm những loại nào và thế nào là một
            chứng từ hợp lệ? Hiểu đúng vấn đề này giúp doanh nghiệp ghi sổ chính xác, hạn chế rủi ro
            khi quyết toán thuế và thanh tra. Bài viết dưới đây trình bày khái niệm, phân loại, nội
            dung chủ yếu và điều kiện hợp lệ của chứng từ kế toán theo cách dễ hiểu, có giá trị áp
            dụng thực tế. Là đơn vị tư vấn kế toán – thuế nhiều kinh nghiệm, TAF chia sẻ nội dung
            này để bạn quản lý chứng từ bài bản ngay từ đầu.
          </P>

          {/* Ảnh bìa */}
          <img
            src={OG_IMAGE}
            alt="Chứng từ kế toán là gì? Phân loại, nội dung và điều kiện hợp lệ - TAF"
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
          <H2 id="la-gi">Chứng từ kế toán là gì?</H2>
          <P>
            Chứng từ kế toán là các tài liệu và văn bản ghi chép thông tin về những giao dịch kinh
            tế của một tổ chức hoặc cá nhân. Chúng được lập ra để ghi lại các thông tin quan trọng
            về giao dịch tài chính như mua bán hàng hóa, thanh toán, thu nhập, chi phí và các sự
            kiện kinh tế khác.
          </P>
          <P>
            Mục đích chính của chứng từ kế toán là cung cấp bằng chứng về hoạt động tài chính của
            đơn vị và là cơ sở để ghi sổ kế toán cũng như lập báo cáo tài chính. Một số ví dụ phổ
            biến gồm: hóa đơn, biên nhận, phiếu thu, phiếu chi, hợp đồng mua bán và các bản ghi khác
            liên quan đến giao dịch tài chính.
          </P>

          {/* 2 */}
          <H2 id="phan-loai">Phân loại chứng từ kế toán</H2>
          <P>
            Chứng từ kế toán có thể được phân loại theo nhiều cách, tùy vào mục đích sử dụng, tính
            chất giao dịch hoặc loại hình doanh nghiệp.
          </P>
          <H3>Theo mục đích sử dụng</H3>
          <Bullets
            items={[
              "Chứng từ ghi sổ — dùng để ghi chép vào sổ sách kế toán như sổ cái, sổ quỹ, sổ nhật ký.",
              "Chứng từ báo cáo — dùng để lập các báo cáo tài chính như báo cáo kết quả kinh doanh, bảng cân đối kế toán.",
            ]}
          />
          <H3>Theo tính chất của giao dịch</H3>
          <Bullets
            items={[
              "Chứng từ thu — liên quan đến các giao dịch thu tiền (hóa đơn bán hàng, biên nhận thu tiền mặt).",
              "Chứng từ chi — liên quan đến các giao dịch chi tiền (hóa đơn mua hàng, phiếu chi tiền mặt).",
              "Chứng từ chuyển khoản — liên quan đến giao dịch chuyển khoản (sao kê ngân hàng, biên lai chuyển khoản).",
            ]}
          />
          <H3>Theo loại hình doanh nghiệp</H3>
          <Bullets
            items={[
              "Doanh nghiệp thương mại, sản xuất, vận tải, dịch vụ…",
              "Doanh nghiệp dịch vụ như ngân hàng, bảo hiểm, công ty tư vấn…",
              "Tổ chức, cơ quan công như bệnh viện, trường học, cơ quan hành chính công.",
            ]}
          />

          {/* 3 */}
          <H2 id="noi-dung">Nội dung chủ yếu của chứng từ kế toán</H2>
          <H3>Các yếu tố cơ bản</H3>
          <Bullets
            items={[
              "Tên gọi chứng từ.",
              "Số chứng từ và ngày, tháng, năm lập chứng từ.",
              "Thông tin về cá nhân/đơn vị lập và nhận chứng từ (tên và địa chỉ).",
              "Nội dung tóm tắt của giao dịch kinh tế.",
              "Số lượng, đơn giá và số tiền của giao dịch, ghi bằng cả số và chữ.",
              "Chữ ký của người lập và người chịu trách nhiệm về tính chính xác của giao dịch.",
            ]}
          />
          <H3>Các yếu tố bổ sung</H3>
          <P>
            Đây là các yếu tố không bắt buộc, thường được điều chỉnh tùy theo từng loại chứng từ và
            yêu cầu quản lý, ghi sổ — ví dụ: phương thức thanh toán, phương thức bán hàng.
          </P>

          {/* 4 */}
          <H2 id="hop-le">Điều kiện để chứng từ kế toán hợp lệ</H2>
          <P>Để được xem là hợp lệ, chứng từ kế toán cần đáp ứng các yêu cầu sau:</P>
          <Bullets
            items={[
              "Nội dung chính xác và đầy đủ: phản ánh đúng bản chất, quy mô giao dịch; không viết tắt; số lượng, đơn giá, số tiền ghi rõ ràng; phần trống cần gạch chéo để tránh thêm/bớt thông tin.",
              "Phản ánh đúng mẫu biểu quy định: tuân thủ mẫu biểu theo quy định pháp luật và chuẩn mực kế toán; không tẩy xóa hoặc sửa đổi thông tin đã ghi.",
              "Đầy đủ các yếu tố cơ bản: tên gọi chứng từ, số chứng từ, ngày lập, thông tin các bên liên quan và nội dung tóm tắt giao dịch.",
            ]}
          />
          <P>
            Tuân thủ các yếu tố trên giúp chứng từ kế toán trở thành tài liệu đáng tin cậy, là cơ sở
            để ghi sổ và là căn cứ pháp lý cho thông tin kế toán được cung cấp.
          </P>

          {/* 5 */}
          <H2 id="rui-ro">Rủi ro khi chứng từ không hợp lệ</H2>
          <P>
            Chứng từ thiếu, sai hoặc không hợp lệ có thể khiến doanh nghiệp đối mặt với một số rủi
            ro:
          </P>
          <Bullets
            items={[
              "Chi phí không được trừ khi tính thuế thu nhập doanh nghiệp, làm tăng số thuế phải nộp.",
              "Số liệu ghi sổ thiếu căn cứ, ảnh hưởng đến tính trung thực của báo cáo tài chính.",
              "Khó giải trình và có thể bị xuất toán khi cơ quan thuế thanh tra, kiểm tra.",
              "Mất thời gian, chi phí để bổ sung, điều chỉnh hồ sơ về sau.",
            ]}
          />

          {/* 6 */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp</H2>
          <P>
            Quản lý chứng từ bài bản là nền tảng để ghi sổ và quyết toán thuế chính xác. Nếu doanh
            nghiệp chưa có nhân sự kế toán giàu kinh nghiệm, bạn có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán
            </Link>{" "}
            của TAF để được hỗ trợ tiếp nhận, kiểm tra và hạch toán chứng từ đúng quy định.
          </P>
          <P>
            Với các kỳ kế toán còn tồn đọng hoặc chứng từ chưa được sắp xếp, hoàn thiện, doanh
            nghiệp có thể tham khảo{" "}
            <Link
              to="/dich-vu-nhan-lam-so-sach-ke-toan"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ làm sổ sách kế toán
            </Link>{" "}
            của TAF để rà soát, chuẩn hóa chứng từ và hoàn thiện hệ thống sổ sách.
          </P>

          {/* Slogan */}
          <p className="t-h3 my-10 text-center md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Chứng từ kế toán là bằng chứng quan trọng cho mọi giao dịch kinh tế của doanh nghiệp,
            là cơ sở để ghi sổ và lập báo cáo tài chính. Hiểu rõ khái niệm, phân loại, nội dung và
            điều kiện hợp lệ của chứng từ giúp doanh nghiệp quản lý hồ sơ chặt chẽ, hạn chế rủi ro
            về thuế và thuận lợi khi thanh tra, kiểm tra.
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
