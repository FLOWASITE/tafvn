import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { getRelatedArticles } from "@/lib/articles";

export function RelatedArticles({ currentHref }: { currentHref: string }) {
  const related = getRelatedArticles(currentHref, 3);
  if (related.length === 0) return null;

  return (
    <Section className="!pt-0">
      <div className="rule-gold mb-12" />
      <SectionHeading eyebrow="Đọc tiếp" title="Bài viết liên quan" />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {related.map((a) => (
          <Link
            key={a.href}
            to={a.href}
            className="group flex flex-col overflow-hidden bg-card border border-border rounded-[3px] hover:border-accent hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-red-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                {a.tag}
              </span>
              <h3 className="mt-2.5 font-display text-base leading-snug text-foreground group-hover:text-brand-red-ink transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground font-serif leading-relaxed flex-1">
                {a.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-brand-red-ink">
                Đọc bài viết
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
