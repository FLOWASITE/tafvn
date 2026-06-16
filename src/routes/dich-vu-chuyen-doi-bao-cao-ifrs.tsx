import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Info } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { ArticleRating } from "@/components/site/article-rating";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-chuyen-doi-bao-cao-ifrs";
const TITLE = "Dịch vụ chuyển đổi báo cáo IFRS — Tư vấn & lập BCTC theo IFRS | TAF";
const DESCRIPTION =
  "Dịch vụ chuyển đổi báo cáo IFRS của TAF: rà soát khác biệt VAS – IFRS, điều chỉnh ghi nhận – đo lường, lập báo cáo tài chính theo IFRS và hỗ trợ giải trình. Tư vấn lộ trình IFRS theo Quyết định 345/QĐ-BTC.";

export const Route = createFileRoute("/dich-vu-chuyen-doi-bao-cao-ifrs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "chuyển đổi báo cáo IFRS, dịch vụ chuyển đổi báo cáo IFRS, báo cáo tài chính theo IFRS, chuẩn mực báo cáo tài chính quốc tế, tư vấn IFRS, chuyển đổi VAS sang IFRS, lập báo cáo tài chính theo IFRS, lộ trình áp dụng IFRS tại Việt Nam, Quyết định 345/QĐ-BTC",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Dịch vụ chuyển đổi báo cáo IFRS",
          description: DESCRIPTION,
          author: { "@type": "Organization", name: "Công ty TNHH Tư vấn Kiểm toán TAF" },
          publisher: { "@type": "Organization", name: "TAF" },
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
        }),
      },
    ],
  }),
  component: IfrsConversionService,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((it) => (
        <li
          key={it}
          className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed flex gap-3 before:content-['—'] before:text-accent-foreground before:shrink-0"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function IfrsConversionService() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Chuyển đổi báo cáo IFRS" }]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ khác</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Dịch vụ{" "}
            <span className="italic text-accent-foreground">chuyển đổi báo cáo IFRS</span>.
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            Hỗ trợ doanh nghiệp rà soát khác biệt giữa VAS và IFRS, điều chỉnh ghi nhận – đo lường
            và lập báo cáo tài chính theo chuẩn mực báo cáo tài chính quốc tế — minh bạch hơn khi
            gọi vốn, vay vốn và làm việc với đối tác, nhà đầu tư nước ngoài.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/lien-he"
              className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
            >
              <span className="uppercase tracking-[0.15em]">Yêu cầu tư vấn</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:border-accent transition"
            >
              <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
            </a>
          </div>
          <div className="rule-gold mt-10" />
        </div>
      </Section>

      {/* Article body */}
      <Section className="!pt-0">
        <article className="max-w-3xl">
          {/* 1. Mở bài */}
          <P>
            Bước vào năm 2026, yêu cầu minh bạch tài chính đối với doanh nghiệp Việt Nam ngày càng
            cao. Khi gọi vốn, vay vốn quốc tế, làm việc với nhà đầu tư, ngân hàng, quỹ đầu tư hay
            công ty mẹ ở nước ngoài, một bộ báo cáo tài chính được lập theo chuẩn mực được công
            nhận toàn cầu thường là điều kiện gần như bắt buộc để các bên có thể đọc, so sánh và
            tin cậy. Đó là lý do ngày càng nhiều chủ doanh nghiệp, kế toán trưởng và giám đốc tài
            chính quan tâm đến việc <strong className="font-medium text-foreground">chuyển đổi báo
            cáo IFRS</strong> — chuyển báo cáo tài chính từ chuẩn mực kế toán Việt Nam (VAS) sang
            chuẩn mực báo cáo tài chính quốc tế (IFRS).
          </P>
          <P>
            Bài viết dưới đây trình bày một cách thận trọng về IFRS, căn cứ pháp lý về lộ trình áp
            dụng tại Việt Nam, bản chất của việc chuyển đổi báo cáo, những nhóm doanh nghiệp nên
            chuẩn bị sớm cũng như quy trình và dịch vụ hỗ trợ. Mục tiêu là giúp doanh nghiệp hiểu
            đúng và chủ động, thay vì hiểu sai về tính bắt buộc của IFRS.
          </P>

          {/* 2. IFRS là gì */}
          <H2 id="ifrs-la-gi">IFRS là gì?</H2>
          <P>
            IFRS (International Financial Reporting Standards) là hệ thống{" "}
            <strong className="font-medium text-foreground">chuẩn mực báo cáo tài chính quốc tế</strong>{" "}
            do Hội đồng Chuẩn mực Kế toán Quốc tế (IASB) ban hành và được sử dụng rộng rãi tại
            nhiều quốc gia. IFRS thiên về nguyên tắc (principles-based), chú trọng phản ánh bản
            chất kinh tế của giao dịch hơn là hình thức pháp lý.
          </P>
          <P>
            So với việc chỉ lập báo cáo theo quy định trong nước, báo cáo tài chính theo IFRS giúp
            tăng tính minh bạch, nâng cao khả năng so sánh giữa các doanh nghiệp ở những quốc gia
            khác nhau và củng cố độ tin cậy của thông tin tài chính trong mắt nhà đầu tư, tổ chức
            tín dụng và đối tác quốc tế.
          </P>

          {/* 3. Căn cứ pháp lý */}
          <H2 id="can-cu-phap-ly">Căn cứ pháp lý về lộ trình áp dụng IFRS tại Việt Nam</H2>
          <P>
            Tại Việt Nam, định hướng áp dụng IFRS được nêu trong{" "}
            <strong className="font-medium text-foreground">Quyết định 345/QĐ-BTC ngày
            16/03/2020</strong>{" "}
            của Bộ Tài chính, phê duyệt Đề án áp dụng chuẩn mực báo cáo tài chính tại Việt Nam.
            Quyết định này đưa ra một lộ trình theo từng giai đoạn, gắn với mức độ sẵn sàng của
            từng nhóm doanh nghiệp.
          </P>
          <P>
            Theo định hướng của Đề án, giai đoạn{" "}
            <strong className="font-medium text-foreground">2022 – 2025 là giai đoạn áp dụng IFRS
            tự nguyện</strong>: một số nhóm doanh nghiệp có nhu cầu và đủ nguồn lực được tự nguyện
            áp dụng IFRS để lập báo cáo tài chính, thay vì bắt buộc trên diện rộng. Sau năm 2025,
            Bộ Tài chính sẽ căn cứ vào tình hình thực tế để quy định phương án và thời điểm bắt
            buộc áp dụng IFRS cho từng nhóm doanh nghiệp cụ thể.
          </P>
          <div className="my-6 rounded-[2px] border-l-2 border-brand-red bg-brand-red-soft/60 p-5">
            <p className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>
                <strong className="font-medium text-foreground">Lưu ý quan trọng:</strong> Không có
                quy định rằng tất cả doanh nghiệp tại Việt Nam bắt buộc áp dụng IFRS từ năm 2026.
                Vì vậy, khi nhìn về năm 2026, doanh nghiệp{" "}
                <strong className="font-medium text-foreground">nên chuẩn bị sớm</strong> và{" "}
                <strong className="font-medium text-foreground">tiếp tục theo dõi các hướng dẫn
                tiếp theo của Bộ Tài chính</strong>. Doanh nghiệp của bạn có thể thuộc nhóm cần
                chuẩn bị cho lộ trình IFRS, tùy theo quy mô, loại hình và nhu cầu thực tế.
              </span>
            </p>
          </div>

          {/* 4. Chuyển đổi báo cáo IFRS là gì */}
          <H2 id="chuyen-doi-la-gi">Chuyển đổi báo cáo IFRS là gì?</H2>
          <P>
            Nhiều người lầm tưởng chuyển đổi báo cáo IFRS chỉ là dịch báo cáo sang tiếng Anh hoặc
            đổi mẫu biểu trình bày. Trên thực tế, đây là một quá trình chuyên môn sâu hơn nhiều:{" "}
            <strong className="font-medium text-foreground">rà soát và phân tích khác biệt giữa
            VAS và IFRS</strong>, sau đó điều chỉnh cách ghi nhận, đo lường, trình bày và thuyết
            minh báo cáo tài chính cho phù hợp với IFRS.
          </P>
          <P>
            Quá trình{" "}
            <strong className="font-medium text-foreground">chuyển đổi VAS sang IFRS</strong> có
            thể làm thay đổi giá trị ghi nhận của một số tài sản, nợ phải trả, doanh thu và chi
            phí; bổ sung các thuyết minh mà VAS không yêu cầu; đồng thời đòi hỏi doanh nghiệp thu
            thập thêm dữ liệu để chứng minh cơ sở đo lường. Kết quả là một bộ báo cáo tài chính
            theo IFRS phản ánh đúng bản chất kinh tế và có thể đối chiếu với báo cáo của các doanh
            nghiệp quốc tế.
          </P>
          <div className="my-6 rounded-[2px] border border-border bg-cream/50 p-5">
            <p className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-accent-foreground shrink-0 mt-0.5" />
              <span>
                IFRS phục vụ mục đích trình bày và minh bạch thông tin tài chính,{" "}
                <strong className="font-medium text-foreground">không thay thế nghĩa vụ kê khai và
                nộp thuế</strong> tại Việt Nam. Dù lập báo cáo theo IFRS, doanh nghiệp vẫn phải
                thực hiện đầy đủ nghĩa vụ thuế theo quy định của pháp luật thuế hiện hành.
              </span>
            </p>
          </div>

          {/* 5. Doanh nghiệp nào nên chuẩn bị */}
          <H2 id="ai-nen-chuan-bi">
            Doanh nghiệp nào nên chuẩn bị chuyển đổi báo cáo IFRS trong năm 2026?
          </H2>
          <P>
            Không phải doanh nghiệp nào cũng cần áp dụng IFRS ngay. Tuy nhiên, các nhóm dưới đây{" "}
            <strong className="font-medium text-foreground">nên chuẩn bị sớm</strong> để chủ động
            khi lộ trình tiếp theo được Bộ Tài chính ban hành, hoặc khi đối tác yêu cầu:
          </P>
          <Bullets
            items={[
              "Doanh nghiệp có vốn đầu tư nước ngoài (FDI) là công ty con của tập đoàn ở nước ngoài.",
              "Công ty mẹ – công ty con cần lập báo cáo hợp nhất phục vụ tập đoàn quốc tế.",
              "Công ty niêm yết hoặc có định hướng niêm yết trong và ngoài nước.",
              "Công ty đại chúng quy mô lớn.",
              "Doanh nghiệp đang gọi vốn, vay vốn quốc tế hoặc làm việc với quỹ đầu tư, ngân hàng nước ngoài.",
              "Doanh nghiệp thường xuyên làm việc với nhà đầu tư, đối tác nước ngoài cần báo cáo theo chuẩn quốc tế.",
            ]}
          />

          {/* 6. Khó khăn */}
          <H2 id="kho-khan">Khó khăn thường gặp khi chuyển đổi từ VAS sang IFRS</H2>
          <P>
            Việc chuyển đổi không đơn giản vì VAS và IFRS có những khác biệt về nguyên tắc. Một số
            khó khăn doanh nghiệp thường gặp:
          </P>
          <Bullets
            items={[
              "Khác biệt nguyên tắc ghi nhận và đo lường tài sản, nợ phải trả, doanh thu và chi phí (ví dụ giá trị hợp lý, tổn thất tài sản, ghi nhận doanh thu theo IFRS 15, thuê tài sản theo IFRS 16…).",
              "Thiếu dữ liệu kế toán quá khứ để xác định cơ sở đo lường theo IFRS.",
              "Nhân sự kế toán chưa quen với tư duy và yêu cầu của IFRS.",
              "Hệ thống báo cáo nội bộ và phần mềm kế toán chưa đáp ứng được yêu cầu trình bày, thuyết minh của IFRS.",
              "Khối lượng thuyết minh và hồ sơ giải trình lớn hơn đáng kể so với báo cáo theo VAS.",
            ]}
          />

          {/* 7. Quy trình */}
          <H2 id="quy-trinh">Quy trình chuyển đổi báo cáo IFRS cơ bản</H2>
          <P>
            Mỗi doanh nghiệp có đặc thù riêng, nhưng một quy trình chuyển đổi báo cáo theo IFRS
            thường gồm các bước cơ bản sau:
          </P>
          <ol className="my-5 space-y-3 list-none">
            {[
              "Rà soát báo cáo tài chính hiện hành lập theo VAS và hệ thống chính sách kế toán đang áp dụng.",
              "Xác định các khác biệt trọng yếu giữa VAS và IFRS có ảnh hưởng đến doanh nghiệp.",
              "Đánh giá dữ liệu hiện có, thu thập bổ sung thông tin cần thiết để đo lường theo IFRS.",
              "Thực hiện các bút toán điều chỉnh chuyển đổi từ VAS sang IFRS.",
              "Lập báo cáo tài chính theo IFRS dựa trên số liệu đã điều chỉnh.",
              "Hoàn thiện thuyết minh báo cáo và hồ sơ giải trình cho các bên liên quan.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-brand-red-ink tabular-nums shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          {/* 8. Khi nào nên dùng dịch vụ */}
          <H2 id="khi-nao-dung-dich-vu">Khi nào nên sử dụng dịch vụ chuyển đổi báo cáo IFRS?</H2>
          <P>
            Doanh nghiệp nên cân nhắc sử dụng{" "}
            <Link
              to="/lien-he"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ chuyển đổi báo cáo IFRS
            </Link>{" "}
            khi đối tác, công ty mẹ hoặc nhà đầu tư yêu cầu báo cáo theo IFRS; khi chuẩn bị gọi
            vốn, vay vốn quốc tế hoặc niêm yết; hoặc khi nội bộ chưa có nhân sự đủ kinh nghiệm về
            IFRS và muốn đảm bảo báo cáo được lập đúng nguyên tắc, hạn chế rủi ro sai sót.
          </P>
          <P>
            Thuê đơn vị tư vấn có kinh nghiệm giúp doanh nghiệp tiết kiệm thời gian, tận dụng năng
            lực chuyên môn sẵn có và nhận được bộ hồ sơ chuyển đổi minh bạch, dễ giải trình với
            các bên liên quan.
          </P>

          {/* 9. TAF hỗ trợ thế nào */}
          <H2 id="taf-ho-tro">TAF hỗ trợ doanh nghiệp chuyển đổi báo cáo IFRS như thế nào?</H2>
          <P>
            Với kinh nghiệm trong lĩnh vực kiểm toán, kế toán và tư vấn tài chính, TAF đồng hành
            cùng doanh nghiệp trong toàn bộ quá trình chuyển đổi:
          </P>
          <Bullets
            items={[
              "Rà soát số liệu và chính sách kế toán hiện hành theo VAS.",
              "Phân tích khác biệt trọng yếu giữa VAS và IFRS phù hợp đặc thù ngành nghề.",
              "Tư vấn các bút toán điều chỉnh ghi nhận và đo lường theo IFRS.",
              "Lập báo cáo tài chính theo IFRS và hoàn thiện thuyết minh.",
              "Hỗ trợ giải trình với công ty mẹ, nhà đầu tư, ngân hàng và các bên liên quan.",
              "Tư vấn lộ trình chuẩn bị IFRS phù hợp với quy mô và nguồn lực của doanh nghiệp.",
            ]}
          />

          {/* 10. Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Chuyển đổi báo cáo IFRS không chỉ là một yêu cầu kỹ thuật, mà là bước chuẩn hóa quản
            trị tài chính, giúp doanh nghiệp minh bạch hơn và chủ động hơn trong lộ trình hội nhập.
            Trong bối cảnh Bộ Tài chính sẽ tiếp tục cụ thể hóa lộ trình áp dụng IFRS sau năm 2025,
            việc chuẩn bị sớm sẽ giúp doanh nghiệp không bị động khi các hướng dẫn tiếp theo được
            ban hành hoặc khi đối tác đưa ra yêu cầu.
          </P>
          <P>
            Nếu doanh nghiệp của bạn đang cân nhắc lập báo cáo tài chính theo IFRS, hãy liên hệ TAF
            để được tư vấn giải pháp chuyển đổi phù hợp với tình hình thực tế của doanh nghiệp.
          </P>
        </article>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="t-cta text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Nhận tư vấn ngay
              </p>
              <h2 className="t-h2 md:text-[1.85rem] text-foreground">
                Chủ động với{" "}
                <span className="italic text-accent-foreground">lộ trình IFRS.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Liên hệ TAF để được đánh giá hiện trạng VAS – IFRS và tư vấn giải pháp chuyển đổi
                báo cáo phù hợp với doanh nghiệp.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
              >
                <span className="uppercase tracking-[0.15em]">Yêu cầu tư vấn</span>
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-between gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background hover:border-accent transition"
              >
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} /> Hotline / Zalo
                </span>
                <span className="font-mono text-accent-foreground">{HOTLINE_DISPLAY}</span>
              </a>
              <p className="text-xs text-muted-foreground text-center font-serif">
                Email: info@taf.vn · 62A Phạm Ngọc Thạch, Q.3, TP.HCM
              </p>
            </div>
          </div>
        </div>
      </Section>
      <section className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <ArticleRating title={TITLE} slug="dich-vu-chuyen-doi-bao-cao-ifrs" />
        </div>
      </section>
    </>
  );
}
