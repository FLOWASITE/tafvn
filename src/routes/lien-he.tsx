import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ TAF — Yêu cầu báo giá kiểm toán" },
      {
        name: "description",
        content:
          "Gửi yêu cầu báo giá kiểm toán BCTC, tư vấn thuế hoặc dịch vụ kế toán. KTV phụ trách của TAF liên hệ lại trong vòng 1 ngày làm việc.",
      },
      { property: "og:title", content: "Liên hệ TAF — Yêu cầu báo giá" },
      { property: "og:description", content: "Khảo sát sơ bộ miễn phí, đề xuất phí trong 3 ngày." },
      { property: "og:url", content: "/lien-he" },
    ],
    links: [{ rel: "canonical", href: "/lien-he" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  return (
    <>
      <Breadcrumb items={[{ label: t("Liên hệ") }]} />
      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <header className="lg:col-span-5">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/80 mb-3">
              {t("Liên hệ")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
              {t("Trao đổi với KTV phụ trách dịch vụ phù hợp với bạn.")}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
              {t("Mô tả ngắn về doanh nghiệp, loại hình, thời điểm cần báo cáo — KTV phụ trách sẽ liên hệ lại trong vòng 1 ngày làm việc với khảo sát sơ bộ và đề xuất phí cụ thể trong 3 ngày.")}
            </p>
            <div className="mt-8 space-y-2 font-serif text-sm text-foreground/80">
              <p>
                <strong className="font-display text-foreground">{t("Khảo sát miễn phí.")}</strong>{" "}
                {t("Không ràng buộc cho đến khi ký hợp đồng dịch vụ.")}
              </p>
              <p>
                <strong className="font-display text-foreground">{t("Bảo mật thông tin.")}</strong>{" "}
                {t("TAF không chia sẻ dữ liệu của bạn với bên thứ ba.")}
              </p>
            </div>
          </header>


          <div className="lg:col-span-7">
            <div className="border border-border bg-card p-7 md:p-10 rounded-[2px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
