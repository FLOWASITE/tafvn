import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Info } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH = "/dich-vu-ra-soat-dac-biet-m-a-due-diligence";
const TITLE = "Dịch vụ rà soát đặc biệt cho mục đích M&A (Due Diligence) | TAF";
const DESCRIPTION =
  "Dịch vụ rà soát đặc biệt cho mục đích M&A (Due Diligence) của TAF: rà soát tài chính, kế toán, thuế, công nợ, tài sản, hợp đồng và rủi ro tiềm ẩn — hỗ trợ định giá, đàm phán và ra quyết định trước giao dịch mua bán – sáp nhập.";

export const Route = createFileRoute("/dich-vu-ra-soat-dac-biet-m-a-due-diligence")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "rà soát đặc biệt cho mục đích M&A, dịch vụ rà soát đặc biệt cho mục đích M&A, Due Diligence, due diligence tài chính, rà soát doanh nghiệp trước M&A, thẩm định doanh nghiệp, rà soát tài chính doanh nghiệp, rà soát thuế trước M&A, rủi ro M&A, mua bán sáp nhập doanh nghiệp",
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
          headline: "Dịch vụ rà soát đặc biệt cho mục đích M&A (Due Diligence)",
          description: DESCRIPTION,
          author: { "@type": "Organization", name: "Công ty TNHH Tư vấn Kiểm toán TAF" },
          publisher: { "@type": "Organization", name: "TAF" },
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
        }),
      },
    ],
  }),
  component: DueDiligenceService,
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

function DueDiligenceService() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Dịch vụ", to: "/dich-vu" },
          { label: "Rà soát đặc biệt M&A (Due Diligence)" },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Dịch vụ khác</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Rà soát đặc biệt cho mục đích{" "}
            <span className="italic text-accent-foreground">M&A (Due Diligence)</span>.
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            Nhìn rõ “sức khỏe” thực sự của doanh nghiệp mục tiêu trước khi xuống tiền. TAF rà soát
            tài chính, kế toán, thuế, công nợ, tài sản và hợp đồng để bạn có thêm cơ sở định giá,
            đàm phán và ra quyết định trong giao dịch mua bán – sáp nhập.
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
            Mua bán – sáp nhập (M&A) ngày càng trở thành lựa chọn quen thuộc của doanh nghiệp Việt
            Nam khi muốn mở rộng quy mô, thâu tóm thị phần, gọi thêm nhà đầu tư hoặc tái cơ cấu.
            Tuy nhiên, đằng sau một thương vụ hấp dẫn có thể là những rủi ro chưa lộ diện: công nợ
            tiềm ẩn, nghĩa vụ thuế chưa ghi nhận, tài sản thiếu hồ sơ pháp lý, hợp đồng bất lợi,
            tranh chấp lao động hay báo cáo tài chính thiếu minh bạch.
          </P>
          <P>
            Chính vì vậy,{" "}
            <strong className="font-medium text-foreground">rà soát đặc biệt cho mục đích M&A</strong>{" "}
            — hay còn gọi là Due Diligence — là bước không thể thiếu để bên mua, nhà đầu tư và ban
            lãnh đạo hiểu rõ doanh nghiệp mục tiêu trước khi đặt bút ký. Bài viết này trình bày Due
            Diligence dưới góc độ rà soát tài chính, kế toán, thuế và rủi ro giao dịch.
          </P>

          {/* 2. Due Diligence là gì */}
          <H2 id="due-diligence-la-gi">Due Diligence là gì?</H2>
          <P>
            <strong className="font-medium text-foreground">Due Diligence</strong> là quá trình rà
            soát, thẩm định và đánh giá doanh nghiệp mục tiêu trước khi thực hiện giao dịch — có
            thể là mua cổ phần, chuyển nhượng vốn góp, góp vốn, mua tài sản, sáp nhập hoặc hợp
            nhất. Mục tiêu là giúp bên mua/nhà đầu tư nắm được bức tranh thực chất về tài chính,
            thuế, công nợ, tài sản và các nghĩa vụ của doanh nghiệp.
          </P>
          <P>
            Trong thực tiễn, Due Diligence thường được phân thành nhiều mảng: rà soát tài chính
            (financial due diligence), rà soát thuế (tax due diligence), rà soát pháp lý (legal due
            diligence) và đôi khi cả thương mại, nhân sự, công nghệ. Bài viết này tập trung vào{" "}
            <strong className="font-medium text-foreground">due diligence tài chính</strong>, kế
            toán và thuế — phần việc thuộc chuyên môn của đơn vị kiểm toán, kế toán và tư vấn tài
            chính.
          </P>

          {/* 3. Căn cứ pháp lý */}
          <H2 id="can-cu-phap-ly">
            Căn cứ pháp lý cần lưu ý trong giao dịch M&A tại Việt Nam
          </H2>
          <P>
            Một giao dịch M&A tại Việt Nam thường chịu sự điều chỉnh của nhiều lĩnh vực pháp luật.
            Khi rà soát, doanh nghiệp nên lưu ý đến các nhóm quy định có liên quan, trong đó tiêu
            biểu là:
          </P>
          <Bullets
            items={[
              "Pháp luật về doanh nghiệp và đầu tư (Luật Doanh nghiệp, Luật Đầu tư) — liên quan đến hình thức giao dịch, điều kiện và thủ tục.",
              "Pháp luật cạnh tranh (Luật Cạnh tranh) — đối với các giao dịch tập trung kinh tế có quy mô đáng kể.",
              "Pháp luật quản lý thuế và các sắc thuế liên quan — nghĩa vụ thuế hiện tại và tiềm ẩn.",
              "Pháp luật kế toán — cơ sở lập và trình bày báo cáo tài chính.",
              "Pháp luật lao động, hợp đồng (dân sự), đất đai, tài sản và sở hữu trí tuệ.",
              "Các quy định chuyên ngành (nếu doanh nghiệp hoạt động trong lĩnh vực có điều kiện).",
            ]}
          />
          <div className="my-6 rounded-[2px] border-l-2 border-brand-red bg-brand-red-soft/60 p-5">
            <p className="flex items-start gap-2.5 text-[0.95rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>
                Nội dung trên chỉ mang tính định hướng tổng quan, không phải tư vấn pháp lý thay
                cho luật sư. Các khía cạnh pháp lý phức tạp của giao dịch M&A nên được phối hợp với
                đơn vị tư vấn luật; TAF tập trung vào phần rà soát tài chính, kế toán, thuế và rủi
                ro giao dịch.
              </span>
            </p>
          </div>

          {/* 4. Vì sao cần */}
          <H2 id="vi-sao-can">Vì sao cần rà soát đặc biệt trước giao dịch M&A?</H2>
          <P>
            <strong className="font-medium text-foreground">Rà soát doanh nghiệp trước M&A</strong>{" "}
            giúp các bên trả lời những câu hỏi cốt lõi trước khi quyết định:
          </P>
          <Bullets
            items={[
              "Giá trị thực của doanh nghiệp mục tiêu là bao nhiêu, có tương xứng với mức giá đề xuất?",
              "Có rủi ro tài chính, thuế hay pháp lý nào đang tiềm ẩn chưa được phản ánh trên sổ sách?",
              "Doanh nghiệp có nghĩa vụ nợ, bảo lãnh, cam kết hoặc tranh chấp nào có thể phát sinh sau giao dịch?",
              "Những phát hiện này ảnh hưởng thế nào đến giá, điều kiện thanh toán, cam kết và bảo đảm trong hợp đồng?",
            ]}
          />
          <P>
            Kết quả Due Diligence là cơ sở quan trọng để bên mua đàm phán giá, thiết kế điều khoản
            bảo vệ (như cam kết, bảo đảm, điều khoản điều chỉnh giá) và quyết định có nên tiếp tục
            giao dịch hay không.
          </P>

          {/* 5. Nội dung rà soát */}
          <H2 id="noi-dung-ra-soat">Những nội dung thường được rà soát trong Due Diligence</H2>
          <P>
            Phạm vi rà soát được điều chỉnh theo từng thương vụ, nhưng dưới góc độ tài chính – kế
            toán – thuế thường bao gồm:
          </P>
          <Bullets
            items={[
              "Báo cáo tài chính và sổ sách kế toán qua các kỳ.",
              "Doanh thu, chi phí, lợi nhuận và chất lượng lợi nhuận (loại trừ yếu tố bất thường, một lần).",
              "Công nợ phải thu, phải trả, các khoản vay, bảo lãnh và cam kết ngoài bảng.",
              "Hàng tồn kho, tài sản cố định, tài sản vô hình và tình trạng hồ sơ pháp lý của tài sản.",
              "Dòng tiền và khả năng thanh toán.",
              "Nghĩa vụ thuế, hồ sơ kê khai, hóa đơn – chứng từ và các rủi ro thuế tiềm ẩn.",
              "Giao dịch với các bên liên kết và chính sách giá giao dịch liên kết.",
              "Các hợp đồng lớn, hợp đồng lao động, tranh chấp và nghĩa vụ tiềm ẩn khác.",
            ]}
          />

          {/* 6. Rủi ro nếu bỏ qua */}
          <H2 id="rui-ro">Rủi ro nếu bỏ qua Due Diligence</H2>
          <P>
            Bỏ qua hoặc thực hiện sơ sài bước rà soát có thể khiến bên mua đối mặt với nhiều hệ
            quả:
          </P>
          <Bullets
            items={[
              "Mua doanh nghiệp với mức giá cao hơn giá trị thực.",
              "Không phát hiện nợ tiềm ẩn hoặc nghĩa vụ thuế chưa ghi nhận, dẫn đến gánh nặng tài chính sau giao dịch.",
              "Tiếp nhận báo cáo tài chính thiếu minh bạch, số liệu không phản ánh đúng thực trạng.",
              "Nhận về tài sản thiếu hồ sơ pháp lý hoặc đang tranh chấp.",
              "Bị ràng buộc bởi các hợp đồng bất lợi, cam kết dài hạn khó thay đổi.",
              "Phát sinh tranh chấp sau giao dịch hoặc gặp khó khăn khi tích hợp hậu M&A.",
            ]}
          />

          {/* 7. Quy trình */}
          <H2 id="quy-trinh">Quy trình rà soát đặc biệt cho mục đích M&A</H2>
          <P>
            Mỗi thương vụ có đặc thù riêng, nhưng một quy trình Due Diligence thường gồm các bước:
          </P>
          <ol className="my-5 space-y-3 list-none">
            {[
              "Xác định phạm vi, mục tiêu rà soát và các vấn đề trọng tâm của giao dịch.",
              "Thu thập hồ sơ, tài liệu và dữ liệu từ doanh nghiệp mục tiêu.",
              "Phân tích tài chính, thuế, công nợ, tài sản và các hợp đồng quan trọng.",
              "Xác định các vấn đề trọng yếu và đánh giá mức độ ảnh hưởng đến giao dịch.",
              "Lập báo cáo Due Diligence trình bày phát hiện và rủi ro.",
              "Đưa ra khuyến nghị phục vụ đàm phán, định giá và quyết định giao dịch.",
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
          <H2 id="khi-nao-dung">Khi nào nên sử dụng dịch vụ Due Diligence chuyên nghiệp?</H2>
          <P>
            Doanh nghiệp và nhà đầu tư nên cân nhắc sử dụng{" "}
            <Link
              to="/lien-he"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ rà soát đặc biệt cho mục đích M&A
            </Link>{" "}
            khi chuẩn bị mua cổ phần, nhận chuyển nhượng vốn, góp vốn hoặc mua tài sản của một
            doanh nghiệp mà mình chưa nắm rõ nội tình; khi quy mô giao dịch lớn, số liệu phức tạp;
            hoặc khi cần một bên độc lập đánh giá khách quan để củng cố cơ sở đàm phán và ra quyết
            định.
          </P>
          <P>
            Một đơn vị giàu kinh nghiệm sẽ giúp rút ngắn thời gian, nhận diện sớm các vấn đề trọng
            yếu và trình bày phát hiện một cách rõ ràng, dễ sử dụng cho việc đàm phán. Lưu ý rằng
            Due Diligence giúp{" "}
            <strong className="font-medium text-foreground">giảm thiểu và kiểm soát</strong> rủi
            ro chứ không thể loại bỏ hoàn toàn mọi rủi ro hay đảm bảo một giao dịch chắc chắn thành
            công.
          </P>

          {/* 9. TAF hỗ trợ */}
          <H2 id="taf-ho-tro">
            TAF hỗ trợ doanh nghiệp rà soát đặc biệt cho mục đích M&A như thế nào?
          </H2>
          <P>
            Với nền tảng chuyên môn về kiểm toán, kế toán và tư vấn tài chính, TAF đồng hành cùng
            bên mua và nhà đầu tư trong phần rà soát tài chính – thuế của giao dịch:
          </P>
          <Bullets
            items={[
              "Rà soát báo cáo tài chính và số liệu kế toán của doanh nghiệp mục tiêu.",
              "Đánh giá nghĩa vụ thuế hiện tại và rủi ro thuế tiềm ẩn.",
              "Phân tích công nợ, khoản vay, bảo lãnh và các cam kết ngoài bảng.",
              "Rà soát tài sản, dòng tiền và chất lượng lợi nhuận.",
              "Xem xét các hợp đồng và vấn đề trọng yếu có ảnh hưởng tài chính.",
              "Tổng hợp phát hiện, đánh giá rủi ro và đưa ra khuyến nghị phục vụ định giá, đàm phán.",
            ]}
          />

          {/* 10. Kết luận */}
          <H2 id="ket-luan">Kết luận</H2>
          <P>
            Due Diligence là bước quan trọng giúp giao dịch M&A trở nên minh bạch, an toàn hơn và
            có cơ sở ra quyết định tốt hơn. Việc rà soát kỹ lưỡng trước giao dịch không thể bảo
            đảm tuyệt đối, nhưng giúp các bên chủ động nhận diện rủi ro, định giá hợp lý và thiết
            kế điều khoản bảo vệ phù hợp.
          </P>
          <P>
            Nếu doanh nghiệp của bạn đang chuẩn bị cho một thương vụ mua bán – sáp nhập, hãy liên
            hệ TAF để được tư vấn dịch vụ rà soát đặc biệt cho mục đích M&A phù hợp với từng giao
            dịch cụ thể.
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
                Ra quyết định M&A{" "}
                <span className="italic text-accent-foreground">trên cơ sở rõ ràng.</span>
              </h2>
              <p className="t-body mt-3 text-muted-foreground">
                Liên hệ TAF để được tư vấn phạm vi rà soát và giải pháp Due Diligence phù hợp với
                thương vụ của bạn.
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
    </>
  );
}
