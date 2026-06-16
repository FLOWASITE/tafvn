import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { SERVICES, SITE } from "@/lib/site";
import { getPage } from "@/lib/pages.functions";

export const Route = createFileRoute("/dich-vu/$slug")({
  loader: async ({ params }) => {
    const cms = await getPage({ data: { slug: `dich-vu/${params.slug}` } });
    const fallback = SERVICES.find((s) => s.slug === params.slug);
    if (!cms && !fallback) throw notFound();
    return { cms, fallback };
  },
  head: ({ params, loaderData }) => {
    const cms = loaderData?.cms;
    const f = loaderData?.fallback;
    const title = cms?.title ?? f?.title ?? "Dịch vụ TAF";
    const desc = cms?.meta_description ?? f?.summary ?? SITE.description;
    return {
      meta: [
        { title: `${title} — TAF` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — TAF` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/dich-vu/${params.slug}` },
        ...(cms?.og_image
          ? [
              { property: "og:image", content: cms.og_image },
              { name: "twitter:image", content: cms.og_image },
            ]
          : []),
        ...(cms?.noindex ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/dich-vu/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            description: desc,
            provider: { "@type": "Organization", name: SITE.legalName },
            areaServed: "VN",
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="py-24 text-center text-muted-foreground">Không tìm thấy dịch vụ.</div>
  ),
});

function ServicePage() {
  const { cms, fallback } = Route.useLoaderData();
  const { slug } = Route.useParams();
  const title = cms?.title ?? fallback?.title ?? "Dịch vụ";
  const summary = cms?.excerpt ?? fallback?.summary;
  const points: string[] = fallback?.points ?? [];

  return (
    <>
      <Breadcrumb items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: title }]} />

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-8">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/80 mb-3">
              Dịch vụ
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
              {title}
            </h1>
            {summary ? (
              <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
                {summary}
              </p>
            ) : null}
          </header>
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Điểm nổi bật
            </div>
            <ul className="space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/85 font-serif">
                  <Check size={16} className="text-accent-foreground shrink-0 mt-1" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {cms?.body_html ? (
        <Section className="pt-0">
          <div className="rule-gold mb-12" />
          <article
            className="prose-taf max-w-3xl"
            dangerouslySetInnerHTML={{ __html: cms.body_html }}
          />
        </Section>
      ) : (
        <Section className="pt-0">
          <div className="rule-gold mb-12" />
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl">
            <div>
              <h2 className="font-display text-2xl text-foreground">Quy trình triển khai</h2>
              <ol className="mt-4 space-y-4 font-serif text-foreground/85">
                {DEFAULT_PROCESS.map((step, i) => (
                  <li key={step.t} className="flex gap-4">
                    <span className="font-mono text-sm text-accent-foreground shrink-0 w-8">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="font-display text-base text-foreground">{step.t}</div>
                      <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {step.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">Đối tượng phù hợp</h2>
              <ul className="mt-4 space-y-3 font-serif text-foreground/85">
                <li className="flex gap-3">
                  <Check size={16} className="text-accent-foreground mt-1 shrink-0" />
                  Doanh nghiệp FDI và công ty đại chúng
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-accent-foreground mt-1 shrink-0" />
                  Doanh nghiệp niêm yết, công ty có vốn nhà nước
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-accent-foreground mt-1 shrink-0" />
                  Tổ chức tín dụng và quỹ đầu tư
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-accent-foreground mt-1 shrink-0" />
                  Doanh nghiệp vay vốn, tham gia đấu thầu
                </li>
              </ul>
            </div>
          </div>
        </Section>
      )}

      <Section className="bg-cream border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-foreground">
              Trao đổi với KTV phụ trách dịch vụ này
            </h2>
            <p className="mt-2 text-muted-foreground font-serif">
              Khảo sát sơ bộ miễn phí, đề xuất phí trong 3 ngày làm việc.
            </p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-primary/90"
          >
            Yêu cầu báo giá <ArrowUpRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}

const DEFAULT_PROCESS = [
  { t: "Khảo sát & lập kế hoạch", d: "Hiểu mô hình kinh doanh, đánh giá rủi ro, lập kế hoạch và phân công KTV." },
  { t: "Thực hiện kiểm toán tại doanh nghiệp", d: "Thử nghiệm kiểm soát, thử nghiệm cơ bản, xác nhận số dư với bên thứ ba." },
  { t: "Trao đổi vấn đề phát hiện", d: "Họp với CFO/Ban lãnh đạo trước khi phát hành để thống nhất bút toán và lưu ý." },
  { t: "Phát hành báo cáo & quản lý", d: "Phát hành báo cáo kiểm toán, thư quản lý kèm khuyến nghị cải tiến." },
];
