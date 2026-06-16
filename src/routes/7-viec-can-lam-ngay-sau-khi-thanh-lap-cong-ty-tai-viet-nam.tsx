import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Mail, Globe, MapPin, Calendar, ListTree, Info } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam";
const OG_IMAGE = "/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam.jpg";
const TITLE = "7 Việc Cần Làm Ngay Sau Khi Thành Lập Công Ty Tại Việt Nam";
const DESCRIPTION =
  "Sau khi thành lập công ty, doanh nghiệp cần làm gì để hoạt động đúng pháp luật và quản trị hiệu quả? Bài viết tổng hợp 7 việc cần làm ngay sau khi thành lập công ty tại Việt Nam: từ thiết lập hệ thống kế toán, đăng ký – kê khai thuế, bảo hiểm xã hội, quy chế nội bộ, thương hiệu đến quản lý dòng tiền. Đây là những bước nền tảng giúp doanh nghiệp mới khởi đầu vững chắc, hạn chế rủi ro pháp lý và tối ưu chi phí vận hành. Với kinh nghiệm trong lĩnh vực kế toán – kiểm toán – tư vấn thuế, TAF chia sẻ nội dung này như một bản đồ tham khảo, đồng thời lưu ý doanh nghiệp nên đối chiếu với quy định hiện hành cho từng trường hợp cụ thể.";

export const Route = createFileRoute("/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam")({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "thành lập công ty, doanh nghiệp mới thành lập, việc cần làm sau khi thành lập công ty, hệ thống kế toán, đăng ký thuế, bảo hiểm xã hội, quản lý dòng tiền",
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
  { id: "vi-sao", label: "Vì sao phải làm ngay sau khi thành lập công ty?" },
  { id: "viec-1", label: "1. Thiết lập hệ thống kế toán chuyên nghiệp" },
  { id: "viec-2", label: "2. Đăng ký, kê khai và tuân thủ nghĩa vụ thuế" },
  { id: "viec-3", label: "3. Đăng ký bảo hiểm xã hội và lao động" },
  { id: "viec-4", label: "4. Xây dựng quy chế nội bộ và quản trị" },
  { id: "viec-5", label: "5. Xây dựng thương hiệu và marketing ban đầu" },
  { id: "viec-6", label: "6. Tuân thủ giấy phép và quy định pháp lý khác" },
  { id: "viec-7", label: "7. Lập kế hoạch tài chính và quản lý dòng tiền" },
  { id: "taf", label: "TAF đồng hành cùng doanh nghiệp mới" },
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
  return (
    <h3 className="font-display text-xl text-foreground mt-7 mb-3">{children}</h3>
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
        items={[
          { label: "Nghiệp vụ", to: "/nghiep-vu" },
          { label: "7 việc cần làm sau khi thành lập công ty" },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-foreground">
            7 Việc Cần Làm Ngay Sau Khi Thành Lập Công Ty Tại Việt Nam
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
            alt="7 việc cần làm ngay sau khi thành lập công ty tại Việt Nam - TAF"
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
            Thành lập công ty là một bước ngoặt quan trọng, nhưng để doanh nghiệp đi vào hoạt động
            hiệu quả và tuân thủ pháp luật, chủ doanh nghiệp cần thực hiện ngay một loạt công việc
            nền tảng. Bài viết tổng hợp{" "}
            <strong className="font-medium text-foreground">7 việc cần làm ngay sau khi thành lập
            công ty</strong>{" "}
            tại Việt Nam — từ thiết lập hệ thống kế toán, đăng ký và kê khai thuế, bảo hiểm xã hội,
            đến xây dựng quy chế nội bộ, thương hiệu và quản lý dòng tiền. Đây là những bước giúp
            doanh nghiệp mới khởi đầu vững chắc, hạn chế rủi ro pháp lý và tối ưu chi phí vận hành.
            Là đơn vị hoạt động trong lĩnh vực kế toán – kiểm toán – tư vấn thuế, TAF chia sẻ nội
            dung này như một bản đồ tham khảo; doanh nghiệp nên đối chiếu với quy định hiện hành và
            tham vấn chuyên môn cho từng tình huống cụ thể.
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

          {/* Tổng quan */}
          <H2 id="vi-sao">Vì sao phải làm ngay sau khi thành lập công ty?</H2>
          <P>
            Nhiều doanh nghiệp mới gặp khó khăn trong những năm đầu hoạt động, một phần đến từ việc
            chưa nắm rõ các nghĩa vụ và công việc cần làm ngay sau khi có giấy chứng nhận đăng ký
            doanh nghiệp. Thực hiện đúng trình tự và đầy đủ ngay từ đầu sẽ giúp doanh nghiệp:
          </P>
          <Bullets
            items={[
              "Hạn chế rủi ro vi phạm hành chính về thuế, hóa đơn, lao động và bị xử phạt.",
              "Xây dựng nền tảng quản trị, sổ sách minh bạch ngay từ những giao dịch đầu tiên.",
              "Kiểm soát và tối ưu chi phí vận hành trong giai đoạn còn nhiều biến động.",
              "Tạo điều kiện thuận lợi cho việc gọi vốn, vay ngân hàng và mở rộng về sau.",
            ]}
          />

          {/* 1 */}
          <H2 id="viec-1">1. Thiết lập hệ thống kế toán chuyên nghiệp</H2>
          <P>
            Một hệ thống kế toán bài bản là nền tảng để quản lý tài chính và tuân thủ nghĩa vụ
            thuế. Đây thường là việc nên ưu tiên thực hiện ngay trong những tuần đầu tiên.
          </P>
          <H3>Lựa chọn phần mềm kế toán phù hợp</H3>
          <P>
            Doanh nghiệp có thể cân nhắc các phần mềm kế toán phổ biến trên thị trường, dựa trên ba
            tiêu chí: tính năng (lập báo cáo tài chính, theo dõi dòng tiền, quản lý hóa đơn – thuế),
            chi phí phù hợp với quy mô, và khả năng tích hợp với ngân hàng cũng như công cụ quản lý
            khác. Doanh nghiệp siêu nhỏ có thể bắt đầu với công cụ đơn giản và nâng cấp khi quy mô
            tăng lên.
          </P>
          <H3>Xây dựng quy trình kế toán nội bộ</H3>
          <P>
            Quy trình kế toán nội bộ giúp ghi nhận chi phí, doanh thu và tuân thủ quy định. Các bước
            cơ bản gồm: thiết lập sổ sách theo chế độ kế toán hiện hành, xây dựng quy trình ghi nhận
            hóa đơn – chứng từ, và định kỳ rà soát báo cáo để phát hiện sai sót sớm.
          </P>
          <H3>Mở tài khoản ngân hàng doanh nghiệp</H3>
          <P>
            Tách bạch tài chính cá nhân và doanh nghiệp là nguyên tắc quan trọng. Doanh nghiệp nên
            mở tài khoản ngân hàng đứng tên công ty, ưu tiên ngân hàng hỗ trợ giao dịch thuận tiện
            và có thể kết nối với phần mềm kế toán để giảm thao tác nhập liệu thủ công.
          </P>

          {/* 2 */}
          <H2 id="viec-2">2. Đăng ký, kê khai và tuân thủ nghĩa vụ thuế</H2>
          <P>
            Sau khi có giấy chứng nhận đăng ký doanh nghiệp (đồng thời là mã số thuế), doanh nghiệp
            cần hoàn tất các thủ tục thuế ban đầu và tuân thủ đúng kỳ kê khai.
          </P>
          <H3>Các thủ tục thuế ban đầu</H3>
          <Bullets
            items={[
              "Đăng ký phương pháp tính thuế giá trị gia tăng (khấu trừ hoặc trực tiếp) phù hợp với quy mô và ngành nghề.",
              "Đăng ký, thông báo phát hành hóa đơn điện tử theo quy định hiện hành (Nghị định 123/2020/NĐ-CP và Thông tư 78/2021/TT-BTC).",
              "Nộp lệ phí môn bài theo quy định; lưu ý các trường hợp được miễn trong năm đầu thành lập.",
              "Đăng ký chữ ký số để kê khai và nộp thuế điện tử.",
            ]}
          />
          <H3>Các sắc thuế cơ bản và lịch kê khai</H3>
          <P>
            Doanh nghiệp cần nắm rõ các sắc thuế phổ biến như thuế giá trị gia tăng (GTGT), thuế thu
            nhập doanh nghiệp (TNDN) — thuế suất phổ thông hiện hành là 20% trên thu nhập tính thuế
            — và thuế thu nhập cá nhân khấu trừ cho người lao động (nếu có). Việc kê khai GTGT theo
            tháng hoặc quý, tạm nộp TNDN và quyết toán năm, cùng nộp báo cáo tài chính, đều tuân
            theo các kỳ hạn do pháp luật quy định. Doanh nghiệp nên lập lịch nhắc để tránh nộp chậm
            và bị phạt.
          </P>
          <div className="my-6 rounded-[2px] border-l-2 border-brand-red bg-brand-red-soft/60 p-5">
            <p className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>
                <strong className="font-medium text-foreground">Lưu ý:</strong> Mức thuế suất,
                thời hạn kê khai và các ngưỡng doanh thu có thể thay đổi theo từng thời kỳ. Doanh
                nghiệp nên đối chiếu với văn bản pháp luật hiện hành hoặc tham vấn chuyên môn trước
                khi áp dụng cho trường hợp cụ thể của mình.
              </span>
            </p>
          </div>

          {/* 3 */}
          <H2 id="viec-3">3. Đăng ký bảo hiểm xã hội và lao động</H2>
          <P>
            Khi sử dụng lao động, doanh nghiệp phát sinh nghĩa vụ về bảo hiểm và hợp đồng lao động
            theo quy định pháp luật.
          </P>
          <H3>Thủ tục đăng ký bảo hiểm xã hội</H3>
          <P>
            Doanh nghiệp đăng ký tham gia bảo hiểm xã hội (BHXH), bảo hiểm y tế (BHYT), bảo hiểm
            thất nghiệp (BHTN) cho người lao động thuộc diện bắt buộc theo thời hạn luật định. Việc
            đăng ký tài khoản giao dịch điện tử với cơ quan BHXH giúp kê khai và quản lý thuận tiện
            hơn.
          </P>
          <H3>Hợp đồng lao động và các khoản đóng bắt buộc</H3>
          <P>
            Hợp đồng lao động cần tuân thủ Bộ luật Lao động, ghi rõ các điều khoản về lương, phúc
            lợi và thời gian làm việc. Tỷ lệ đóng các khoản bảo hiểm bắt buộc của người lao động và
            người sử dụng lao động được thực hiện theo tỷ lệ do pháp luật quy định tại từng thời
            điểm; doanh nghiệp nên cập nhật mức đóng hiện hành để hạch toán đúng.
          </P>

          {/* 4 */}
          <H2 id="viec-4">4. Xây dựng quy chế nội bộ và quản trị</H2>
          <P>
            Hệ thống quy chế nội bộ rõ ràng tạo nền tảng cho quản trị hiệu quả và văn hóa làm việc
            chuyên nghiệp ngay từ giai đoạn đầu.
          </P>
          <Bullets
            items={[
              "Quy chế tài chính: quy trình phê duyệt chi tiêu, mua sắm, theo dõi tài sản cố định và khấu hao.",
              "Quy định lương thưởng, phúc lợi minh bạch để thu hút và giữ chân nhân sự.",
              "Quy trình vận hành chuẩn (SOP) cho bán hàng, chăm sóc khách hàng, quản lý kho.",
              "Phân công trách nhiệm và phân quyền rõ ràng giữa các bộ phận.",
            ]}
          />

          {/* 5 */}
          <H2 id="viec-5">5. Xây dựng thương hiệu và marketing ban đầu</H2>
          <P>
            Song song với việc hoàn thiện pháp lý – kế toán, doanh nghiệp nên đầu tư cho nhận diện
            thương hiệu và những bước marketing đầu tiên.
          </P>
          <Bullets
            items={[
              "Cân nhắc đăng ký bảo hộ nhãn hiệu tại Cục Sở hữu trí tuệ để bảo vệ thương hiệu, hạn chế tranh chấp về sau.",
              "Xây dựng website và bộ nhận diện (logo, màu sắc, thông điệp) thể hiện giá trị cốt lõi.",
              "Triển khai các kênh tiết kiệm chi phí: mạng xã hội, SEO, quảng cáo trực tuyến với ngân sách phù hợp.",
              "Đo lường hiệu quả để phân bổ ngân sách marketing hợp lý theo từng giai đoạn.",
            ]}
          />

          {/* 6 */}
          <H2 id="viec-6">6. Tuân thủ giấy phép và quy định pháp lý khác</H2>
          <P>
            Tùy ngành nghề, doanh nghiệp có thể phải đáp ứng thêm các điều kiện và giấy phép chuyên
            ngành.
          </P>
          <Bullets
            items={[
              "Kiểm tra ngành nghề kinh doanh có điều kiện và xin giấy phép bổ sung nếu thuộc diện (ví dụ thực phẩm, y tế, giáo dục).",
              "Tuân thủ quy định về an toàn, vệ sinh lao động phù hợp với đặc thù hoạt động.",
              "Cân nhắc các chứng chỉ, tiêu chuẩn ngành (như hệ thống quản lý chất lượng) nếu cần thiết cho hoạt động.",
              "Theo dõi và cập nhật các thay đổi pháp lý liên quan đến ngành nghề.",
            ]}
          />

          {/* 7 */}
          <H2 id="viec-7">7. Lập kế hoạch tài chính và quản lý dòng tiền</H2>
          <P>
            Quản lý dòng tiền tốt là yếu tố sống còn với doanh nghiệp mới, khi nguồn lực còn hạn chế
            và doanh thu chưa ổn định.
          </P>
          <Bullets
            items={[
              "Lập dự báo doanh thu – chi phí cho 3–6 tháng đầu để chủ động về vốn.",
              "Phân tách chi phí cố định và chi phí biến đổi để kiểm soát hiệu quả.",
              "Xác định nguồn vốn phù hợp: vốn chủ sở hữu, vay ngân hàng, hoặc nhà đầu tư.",
              "Tận dụng các chính sách ưu đãi thuế hợp pháp dành cho doanh nghiệp nhỏ và vừa.",
            ]}
          />

          {/* TAF */}
          <H2 id="taf">TAF đồng hành cùng doanh nghiệp mới</H2>
          <P>
            Với doanh nghiệp đang trong quá trình hoàn tất thủ tục ban đầu, TAF có thể hỗ trợ trọn
            gói từ khâu pháp lý đến vận hành. Nếu bạn cần hỗ trợ ngay từ bước đầu, có thể tham khảo{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ thành lập doanh nghiệp trọn gói
            </Link>{" "}
            của TAF để tiết kiệm thời gian và hạn chế sai sót hồ sơ.
          </P>
          <P>
            Sau khi đi vào hoạt động, việc thiết lập sổ sách, kê khai thuế và lập báo cáo tài chính
            đúng quy định sẽ giúp doanh nghiệp an tâm phát triển. Bạn có thể sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán trọn gói
            </Link>{" "}
            của TAF để được hỗ trợ ghi sổ, kê khai và tối ưu chi phí thuế một cách hợp pháp.
          </P>

          {/* Slogan */}
          <p className="my-10 text-center font-display text-xl md:text-2xl text-accent-foreground italic">
            TAF – Trao giá trị, nhận niềm tin.
          </p>

          {/* Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Thực hiện đầy đủ 7 việc cần làm ngay sau khi thành lập công ty — từ hệ thống kế toán,
            nghĩa vụ thuế, bảo hiểm xã hội, quy chế nội bộ, thương hiệu, tuân thủ pháp lý đến quản
            lý dòng tiền — là bước đệm quan trọng để doanh nghiệp khởi đầu vững chắc và phát triển
            bền vững. Do các quy định có thể thay đổi theo thời gian, doanh nghiệp nên đối chiếu với
            văn bản hiện hành và tham vấn chuyên môn khi cần.
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
