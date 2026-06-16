import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu TAF — Hãng kiểm toán độc lập tại Việt Nam" },
      {
        name: "description",
        content:
          "Hơn 20 năm hành nghề kiểm toán độc lập, TAF phục vụ doanh nghiệp Việt Nam và FDI bằng nguyên tắc minh bạch và tuân thủ chuẩn mực.",
      },
      { property: "og:title", content: "Giới thiệu TAF" },
      {
        property: "og:description",
        content: "Hãng kiểm toán độc lập tại Việt Nam, đăng ký hành nghề với Bộ Tài chính.",
      },
      { property: "og:url", content: "/gioi-thieu" },
    ],
    links: [{ rel: "canonical", href: "/gioi-thieu" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <Breadcrumb items={[{ label: t("Giới thiệu") }]} />
      <Section>
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/80 mb-3">
            {t("Về TAF")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            {t("Hơn hai thập kỷ giữ nghề kiểm toán đúng chuẩn mực.")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-serif leading-relaxed">
            {SITE.legalName} {t("thành lập năm")} {SITE.established},{" "}
            {t("đăng ký hành nghề với Bộ Tài chính và phục vụ khách hàng trong cả ba khối: doanh nghiệp nội địa, doanh nghiệp FDI và dự án đầu tư công.")}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl text-foreground">{t("Cam kết nghề nghiệp")}</h2>
            <ul className="mt-4 space-y-4 font-serif text-foreground/85">
              <li className="border-l-2 border-accent pl-4">
                <strong className="font-display text-foreground">{t("Độc lập.")}</strong>{" "}
                {t("Báo cáo kiểm toán của TAF không chịu ảnh hưởng bởi quan hệ kinh doanh hoặc lợi ích tài chính.")}
              </li>
              <li className="border-l-2 border-accent pl-4">
                <strong className="font-display text-foreground">{t("Đúng chuẩn mực.")}</strong>{" "}
                {t("Quy trình áp dụng Chuẩn mực Kiểm toán Việt Nam (VSA) và tham chiếu IFRS khi cần.")}
              </li>
              <li className="border-l-2 border-accent pl-4">
                <strong className="font-display text-foreground">{t("Đúng thời hạn.")}</strong>{" "}
                {t("Kế hoạch kiểm toán bám sát hạn nộp BCTC theo Luật Kế toán, không để khách hàng bị phạt chậm nộp.")}
              </li>
            </ul>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10">
            <h2 className="font-display text-2xl text-foreground">{t("Khách hàng tin cậy TAF")}</h2>
            <p className="mt-4 font-serif text-foreground/85 leading-relaxed">
              {t("Trong hơn 20 năm hành nghề, TAF đã phục vụ hơn 500 khách hàng doanh nghiệp ở các ngành sản xuất, thương mại, xây dựng, bất động sản, công nghệ và dịch vụ tài chính. Một phần lớn khách hàng FDI có công ty mẹ ở Nhật Bản, Hàn Quốc, Đài Loan và châu Âu, yêu cầu báo cáo kiểm toán song ngữ và phối hợp với kiểm toán nhóm ở nước ngoài.")}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

