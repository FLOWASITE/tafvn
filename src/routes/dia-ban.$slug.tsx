import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { PROVINCES, SITE } from "@/lib/site";
import { getPage } from "@/lib/pages.functions";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/dia-ban/$slug")({
  loader: async ({ params }) => {
    const cms = await getPage({ data: { slug: `dia-ban/${params.slug}` } });
    const fallback = PROVINCES.find((p) => p.slug === params.slug);
    if (!cms && !fallback) throw notFound();
    return { cms, fallback };
  },
  head: ({ params, loaderData }) => {
    const cms = loaderData?.cms;
    const f = loaderData?.fallback;
    const title = cms?.title ?? (f ? `Dịch vụ kiểm toán tại ${f.name}` : "Địa bàn");
    const desc =
      cms?.meta_description ??
      (f
        ? `TAF cung cấp dịch vụ kiểm toán BCTC, tư vấn thuế và kế toán cho doanh nghiệp tại ${f.name}. KTV phụ trách sẵn sàng đến tận trụ sở khách hàng.`
        : SITE.description);
    return {
      meta: [
        { title: `${title} — TAF` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — TAF` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/dia-ban/${params.slug}` },
        ...(cms?.noindex ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/dia-ban/${params.slug}` }],
    };
  },
  component: ProvincePage,
  notFoundComponent: () => (
    <div className="py-24 text-center text-muted-foreground">Không tìm thấy địa bàn.</div>
  ),
});

function ProvincePage() {
  const { cms, fallback } = Route.useLoaderData();
  const title = cms?.title ?? (fallback ? `Dịch vụ kiểm toán tại ${fallback.name}` : "Địa bàn");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Địa bàn", to: "/dia-ban" },
          { label: fallback?.name ?? title },
        ]}
      />
      <Section>
        <header className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/80 mb-3">
            {fallback?.region ?? "Địa bàn"}
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">{title}</h1>
          {(cms?.excerpt ?? fallback) && (
            <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
              {cms?.excerpt ??
                `TAF phục vụ doanh nghiệp tại ${fallback?.name} từ doanh nghiệp FDI trong các khu công nghiệp đến công ty nội địa. KTV phụ trách am hiểu đặc thù ngành và quy định địa phương, sẵn sàng tới trụ sở khách hàng làm việc trực tiếp.`}
            </p>
          )}
        </header>
        <div className="rule-gold my-12" />
        {cms?.body_html ? (
          <article
            className="prose-taf max-w-3xl"
            dangerouslySetInnerHTML={{ __html: cms.body_html }}
          />
        ) : (
          <div className="max-w-3xl font-serif text-foreground/85 space-y-4 leading-relaxed">
            <p>
              Nội dung chi tiết cho địa bàn này đang được biên tập riêng — chúng tôi chỉ phát hành
              khi đã có khách hàng tham chiếu và đặc thù pháp lý cụ thể tại địa phương.
            </p>
            <p>
              Trong khi đó, nếu doanh nghiệp bạn tại {fallback?.name} cần kiểm toán BCTC hoặc tư
              vấn thuế, hãy{" "}
              <Link to="/lien-he" className="text-primary underline decoration-accent">
                liên hệ trực tiếp
              </Link>{" "}
              — KTV phụ trách sẽ sắp xếp khảo sát trong tuần.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
