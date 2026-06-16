import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree, Info } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don";
const OG_IMAGE = "/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don.jpg";
const TITLE = "Chia sẻ chi phí dịch vụ cho bên HTKD có phải xuất hóa đơn?";
const DESCRIPTION =
  "Trong hợp đồng hợp tác kinh doanh (HTKD), khi bên đại diện chia sẻ lại chi phí dịch vụ cho các bên hợp tác thì có phải xuất hóa đơn không? Bài viết phân tích căn cứ pháp lý, hướng dẫn của cơ quan thuế và lưu ý hạch toán cùng TAF.";

export const Route = createFileRoute("/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hợp đồng hợp tác kinh doanh, HTKD, chia sẻ chi phí dịch vụ, xuất hóa đơn, thu hộ chi hộ, thuế GTGT, chính sách thuế HTKD",
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
  { id: "htkd-la-gi", label: "Hợp đồng hợp tác kinh doanh (HTKD) là gì?" },
  { id: "van-de", label: "Chia sẻ chi phí dịch vụ giữa các bên HTKD: vấn đề đặt ra" },
  { id: "can-cu", label: "Căn cứ pháp lý liên quan" },
  { id: "huong-dan", label: "Hướng dẫn của cơ quan thuế" },
  { id: "rui-ro", label: "Rủi ro nếu xử lý hóa đơn – chi phí không đúng" },
  { id: "luu-y", label: "Lưu ý khi hạch toán chi phí trong HTKD" },
  { id: "taf", label: "TAF đồng hành cùng doanh nghiệp" },
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
        items={[{ label: "Nghiệp vụ", to: "/nghiep-vu" }, { label: "Chia sẻ chi phí dịch vụ cho bên HTKD" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-foreground">
            Chia sẻ chi phí dịch vụ cho bên HTKD có phải xuất hóa đơn?
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
            alt="Chia sẻ chi phí dịch vụ cho bên HTKD có phải xuất hóa đơn - TAF"
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
            Trong các mô hình hợp tác giữa nhiều bên, việc một bên đứng ra thanh toán chi phí dịch
            vụ chung rồi chia sẻ lại cho các bên còn lại là khá phổ biến. Vấn đề kế toán – thuế đặt
            ra là: khi bên đại diện{" "}
            <strong className="font-medium text-foreground">chia sẻ chi phí dịch vụ cho bên hợp
            tác kinh doanh (HTKD)</strong>{" "}
            thì có phải xuất hóa đơn hay không? Đây là tình huống dễ gây nhầm lẫn, ảnh hưởng trực
            tiếp đến nghĩa vụ thuế giá trị gia tăng (GTGT) và tính hợp lệ của chi phí. Bài viết tổng
            hợp căn cứ pháp lý và hướng dẫn liên quan để doanh nghiệp xử lý đúng, hạn chế rủi ro về
            sau. Là đơn vị tư vấn kế toán – thuế, TAF chia sẻ nội dung này nhằm giúp bạn nắm rõ bản
            chất trước khi áp dụng vào thực tế.
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
          <H2 id="htkd-la-gi">Hợp đồng hợp tác kinh doanh (HTKD) là gì?</H2>
          <P>
            Hợp đồng hợp tác kinh doanh (thường viết tắt là HTKD) là thỏa thuận giữa các bên nhằm
            cùng hợp tác kinh doanh, phân chia lợi nhuận, sản phẩm hoặc kết quả mà không thành lập
            một pháp nhân mới. Trong quá trình hợp tác, các bên có thể cử một bên đại diện đứng ra
            ký hợp đồng, thanh toán và nhận hóa đơn cho các dịch vụ chung (ví dụ dịch vụ quảng bá
            thương hiệu), sau đó chia sẻ lại chi phí cho các bên còn lại theo tỷ lệ thỏa thuận.
          </P>

          {/* 2 */}
          <H2 id="van-de">Chia sẻ chi phí dịch vụ giữa các bên HTKD: vấn đề đặt ra</H2>
          <P>
            Khi bên đại diện chia sẻ lại phần chi phí dịch vụ cho các bên hợp tác, nhiều doanh
            nghiệp băn khoăn nên xử lý như một khoản thu hộ – chi hộ (không xuất hóa đơn) hay phải
            xuất hóa đơn. Cách xác định sai có thể dẫn đến kê khai thiếu thuế GTGT hoặc làm chi phí
            của bên nhận không được chấp nhận khi quyết toán.
          </P>

          {/* 3 */}
          <H2 id="can-cu">Căn cứ pháp lý liên quan</H2>
          <P>Theo công văn hướng dẫn, các căn cứ được viện dẫn gồm:</P>
          <Bullets
            items={[
              "Bộ luật Dân sự số 91/2015/QH13.",
              "Luật Đầu tư (quy định về hình thức hợp đồng hợp tác kinh doanh).",
              "Thông tư số 219/2013/TT-BTC ngày 31/12/2013 của Bộ Tài chính (hướng dẫn về thuế GTGT).",
              "Thông tư số 26/2015/TT-BTC ngày 27/02/2015 của Bộ Tài chính.",
            ]}
          />

          {/* 4 */}
          <H2 id="huong-dan">Hướng dẫn của cơ quan thuế</H2>
          <P>
            Theo Công văn số 79759/CT-TTHT ngày 04/12/2018 của Cục Thuế TP. Hà Nội về chính sách
            thuế đối với hợp đồng hợp tác kinh doanh: trường hợp các bên trong HTKD cử đại diện
            đứng ra thanh toán và nhận hóa đơn dịch vụ (như dịch vụ quảng bá thương hiệu), thì khi
            bên đại diện chia sẻ lại chi phí này cho các bên hợp tác,{" "}
            <strong className="font-medium text-foreground">phải xuất hóa đơn</strong>.
          </P>
          <P>
            Khoản tiền dịch vụ mà bên đại diện chi trả rồi chia sẻ lại cho các bên hợp tác được coi
            là khoản thu hộ, chi hộ có liên quan đến việc bán hàng hóa, dịch vụ — do đó{" "}
            <strong className="font-medium text-foreground">không thuộc trường hợp được miễn kê
            khai, tính nộp thuế GTGT</strong> theo hướng dẫn tại điểm d khoản 7 Điều 5 Thông tư
            219/2013/TT-BTC.
          </P>
          <div className="my-6 rounded-[2px] border-l-2 border-brand-red bg-brand-red-soft/60 p-5">
            <p className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>
                <strong className="font-medium text-foreground">Lưu ý:</strong> Nội dung trên dựa
                trên một công văn hướng dẫn năm 2018, áp dụng cho tình huống cụ thể và mang tính
                tham khảo. Quy định về hóa đơn hiện được điều chỉnh bởi Nghị định 123/2020/NĐ-CP và
                Thông tư 78/2021/TT-BTC; một số văn bản viện dẫn có thể đã được thay thế. Doanh
                nghiệp nên đối chiếu với quy định hiện hành và tham vấn chuyên môn cho từng trường
                hợp.
              </span>
            </p>
          </div>

          {/* 5 */}
          <H2 id="rui-ro">Rủi ro nếu xử lý hóa đơn – chi phí không đúng</H2>
          <Bullets
            items={[
              "Kê khai thiếu thuế GTGT do hiểu nhầm là khoản thu hộ – chi hộ được miễn kê khai.",
              "Bên nhận chi phí không có hóa đơn hợp lệ nên khoản chi không được tính là chi phí được trừ.",
              "Rủi ro bị truy thu, tiền chậm nộp và xử phạt khi cơ quan thuế kiểm tra.",
              "Khó giải trình về dòng tiền và nghĩa vụ thuế giữa các bên trong hợp đồng hợp tác.",
            ]}
          />

          {/* 6 */}
          <H2 id="luu-y">Lưu ý khi hạch toán chi phí trong HTKD</H2>
          <Bullets
            items={[
              "Quy định rõ trong hợp đồng hợp tác kinh doanh về cơ chế thanh toán, chia sẻ chi phí và xuất hóa đơn giữa các bên.",
              "Xác định đúng bản chất khoản tiền (thu hộ – chi hộ hay doanh thu dịch vụ) để áp dụng quy định hóa đơn, thuế phù hợp.",
              "Lưu trữ đầy đủ hợp đồng, hóa đơn, chứng từ thanh toán và bảng phân bổ chi phí giữa các bên.",
              "Đối chiếu với quy định hóa đơn điện tử hiện hành trước khi phát hành.",
            ]}
          />

          {/* 7 */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp</H2>
          <P>
            Những tình huống về hóa đơn, chi phí trong hợp đồng hợp tác kinh doanh đòi hỏi xác định
            đúng bản chất giao dịch. Nếu doanh nghiệp cần hỗ trợ ghi sổ và hạch toán đúng quy định,
            bạn có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán
            </Link>{" "}
            của TAF để được hỗ trợ kê khai, lập hóa đơn và lưu trữ chứng từ.
          </P>
          <P>
            Với các vướng mắc chuyên sâu về chính sách thuế GTGT, thu hộ – chi hộ hay xử lý trong
            các đợt thanh tra, kiểm tra, doanh nghiệp có thể tham khảo{" "}
            <Link
              to="/dich-vu-tu-van-thue"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ tư vấn thuế
            </Link>{" "}
            của TAF để được hỗ trợ phù hợp với từng tình huống cụ thể.
          </P>

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Theo hướng dẫn của cơ quan thuế, khi bên đại diện trong hợp đồng hợp tác kinh doanh chia
            sẻ lại chi phí dịch vụ cho các bên hợp tác thì phải xuất hóa đơn, vì đây được xem là
            khoản thu hộ – chi hộ liên quan đến bán hàng hóa, dịch vụ và không thuộc diện miễn kê
            khai, tính nộp thuế GTGT. Xác định đúng bản chất giao dịch và lưu trữ chứng từ đầy đủ sẽ
            giúp doanh nghiệp hạn chế rủi ro về thuế. Do quy định có thể thay đổi theo thời gian,
            doanh nghiệp nên đối chiếu với văn bản hiện hành.
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
