import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading } from "@/components/site/Section";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/dich-vu/")({
  head: () => ({
    meta: [
      { title: "Dịch vụ kiểm toán và tư vấn — TAF" },
      {
        name: "description",
        content:
          "Sáu nhóm dịch vụ chuyên sâu của TAF: kiểm toán BCTC, kiểm toán quyết toán dự án, tư vấn thuế, kế toán trọn gói, soát xét tuân thủ và chuyển đổi báo cáo IFRS/VAS.",
      },
      { property: "og:title", content: "Dịch vụ kiểm toán và tư vấn — TAF" },
      {
        property: "og:description",
        content: "Sáu nhóm dịch vụ chuyên sâu cho doanh nghiệp Việt Nam và FDI.",
      },
      { property: "og:url", content: "/dich-vu" },
    ],
    links: [{ rel: "canonical", href: "/dich-vu" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "Dịch vụ" }]} />
      <Section>
        <SectionHeading
          eyebrow="Tổng quan"
          title="Dịch vụ kiểm toán và tư vấn của TAF"
          lead="Mỗi tuyến dịch vụ được dẫn dắt bởi KTV có chứng chỉ hành nghề và kinh nghiệm ngành cụ thể. Chọn dịch vụ để xem phạm vi, đối tượng phù hợp và quy trình triển khai."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const cardClass =
              "group bg-card border border-border hover:border-accent p-6 rounded-[2px] transition-colors flex flex-col";
            const inner = (
              <>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[0.7rem] font-mono text-muted-foreground">0{i + 1}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent-foreground transition"
                  />
                </div>
                <h2 className="font-display text-xl text-foreground leading-snug">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground font-serif leading-relaxed flex-1">
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.slice(0, 2).map((p) => (
                    <li
                      key={p}
                      className="text-xs text-foreground/70 flex gap-2 before:content-['—'] before:text-accent-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </>
            );
            return s.path ? (
              <a key={s.slug} href={s.path} className={cardClass}>
                {inner}
              </a>
            ) : (
              <Link
                key={s.slug}
                to="/dich-vu/$slug"
                params={{ slug: s.slug }}
                className={cardClass}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
