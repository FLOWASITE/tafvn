import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { getPage } from "@/lib/pages.functions";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/tin-tuc/$slug")({
  loader: async ({ params }) => {
    const cms = await getPage({ data: { slug: `tin-tuc/${params.slug}` } });
    if (!cms) throw notFound();
    return { cms };
  },
  head: ({ params, loaderData }) => {
    const cms = loaderData?.cms;
    const title = cms?.title ?? "Bài viết";
    const desc = cms?.meta_description ?? cms?.excerpt ?? SITE.description;
    return {
      meta: [
        { title: `${title} — TAF` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/tin-tuc/${params.slug}` },
        ...(cms?.og_image
          ? [
              { property: "og:image", content: cms.og_image },
              { name: "twitter:image", content: cms.og_image },
            ]
          : []),
        ...(cms?.noindex ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/tin-tuc/${params.slug}` }],
      scripts: cms
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: cms.title,
                description: desc,
                datePublished: cms.published_at,
                dateModified: cms.updated_at,
                author: cms.author
                  ? { "@type": "Person", name: cms.author.name }
                  : { "@type": "Organization", name: SITE.legalName },
                publisher: { "@type": "Organization", name: SITE.legalName },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="py-24 text-center text-muted-foreground">Không tìm thấy bài viết.</div>
  ),
});

function ArticlePage() {
  const t = useT();
  const { cms } = Route.useLoaderData();

  return (
    <>
      <Breadcrumb items={[{ label: t("Tin tức"), to: "/tin-tuc" }, { label: cms.title }]} />

      <Section>
        <article className="max-w-3xl mx-auto">
          <header>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/80 mb-3">
              {cms.published_at
                ? new Date(cms.published_at).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "Bài viết"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
              {cms.h1 ?? cms.title}
            </h1>
            {cms.excerpt && (
              <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
                {cms.excerpt}
              </p>
            )}
            {cms.author && (
              <div className="mt-6 flex items-center gap-3 text-sm">
                <div>
                  <div className="font-display text-foreground">{cms.author.name}</div>
                  <div className="text-muted-foreground">
                    {cms.author.title}
                    {cms.author.credentials ? ` · ${cms.author.credentials}` : ""}
                  </div>
                </div>
              </div>
            )}
          </header>
          <div className="rule-gold my-10" />
          {cms.body_html ? (
            <div className="prose-taf" dangerouslySetInnerHTML={{ __html: cms.body_html }} />
          ) : (
            <p className="prose-taf">Nội dung đang được biên tập.</p>
          )}
        </article>
      </Section>
    </>
  );
}
