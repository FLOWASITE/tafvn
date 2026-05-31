import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading } from "@/components/site/Section";
import { listPagesByType } from "@/lib/pages.functions";

const articlesQO = queryOptions({
  queryKey: ["pages", "article"],
  queryFn: () => listPagesByType({ data: { type: "article" } }),
});

export const Route = createFileRoute("/tin-tuc")({
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQO),
  head: () => ({
    meta: [
      { title: "Tin tức & cập nhật pháp lý — TAF" },
      {
        name: "description",
        content:
          "Cập nhật pháp lý kế toán, thuế và kiểm toán dành cho doanh nghiệp Việt Nam. Bài viết do KTV của TAF biên soạn.",
      },
      { property: "og:title", content: "Tin tức & cập nhật pháp lý — TAF" },
      { property: "og:description", content: "Cập nhật pháp lý kế toán, thuế và kiểm toán." },
      { property: "og:url", content: "/tin-tuc" },
    ],
    links: [{ rel: "canonical", href: "/tin-tuc" }],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  const { data: posts } = useSuspenseQuery(articlesQO);

  return (
    <>
      <Breadcrumb items={[{ label: "Tin tức" }]} />
      <Section>
        <SectionHeading
          eyebrow="Tin tức"
          title="Cập nhật pháp lý kế toán, thuế và kiểm toán"
          lead="Biên soạn bởi KTV của TAF, ưu tiên thông tin có thể áp dụng được ngay vào công việc của CFO và kế toán trưởng."
        />
        <div className="mt-12">
          {posts.length === 0 ? (
            <div className="border border-dashed border-border p-10 text-center text-muted-foreground font-serif">
              Chưa có bài viết nào được phát hành. Phần biên tập tin tức sẽ mở cùng phase migrate
              nội dung.
            </div>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {posts.map((p) => {
                const slug = p.slug.replace(/^tin-tuc\//, "");
                return (
                  <li key={p.slug} className="py-6">
                    <Link
                      to="/tin-tuc/$slug"
                      params={{ slug }}
                      className="grid md:grid-cols-12 gap-4 group"
                    >
                      <div className="md:col-span-2 text-xs text-muted-foreground font-mono">
                        {p.published_at ? new Date(p.published_at).toLocaleDateString("vi-VN") : ""}
                      </div>
                      <div className="md:col-span-10">
                        <h2 className="font-display text-xl text-foreground group-hover:text-accent-foreground transition">
                          {p.title}
                        </h2>
                        {p.excerpt && (
                          <p className="mt-2 text-sm text-muted-foreground font-serif line-clamp-2">
                            {p.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}
