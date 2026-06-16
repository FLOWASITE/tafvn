import { useEffect, useState } from "react";

interface ArticleRatingProps {
  title: string;
  slug: string;
}

// Deterministic pseudo-random from slug
function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

const STAR_LABELS = [
  "Bài viết rất kém",
  "Bài viết kém",
  "Bài viết đạt",
  "Bài viết tốt",
  "Bài viết rất tốt",
];

export function ArticleRating({ title, slug }: ArticleRatingProps) {
  const h = hashSlug(slug);
  const baseCount = 240 + (h % 220); // 240..459
  const baseValueTenths = 48 + ((h >> 8) % 3); // 48..50 => 4.8..5.0

  const [voted, setVoted] = useState(false);
  const [userValue, setUserValue] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`taf:rating:${slug}`);
      if (saved) {
        setVoted(true);
        setUserValue(Number(saved));
      }
    } catch {}
  }, [slug]);

  const count = baseCount + (voted ? 1 : 0);
  const totalPoints =
    Math.round((baseCount * baseValueTenths) / 10) + (userValue ?? 0);
  const displayedValue = Math.min(5, Math.round(totalPoints / count));

  const handleVote = (v: number) => {
    if (voted) return;
    try {
      localStorage.setItem(`taf:rating:${slug}`, String(v));
    } catch {}
    setUserValue(v);
    setVoted(true);
  };

  const activeStars = hover ?? userValue ?? 5;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "CreativeWork",
      name: title,
    },
    ratingValue: (baseValueTenths / 10).toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: String(baseCount),
  };

  return (
    <div className="mt-12 rounded-lg border border-border/60 bg-card/40 p-5">
      <p className="text-base text-foreground">
        Tổng số điểm của bài viết là:{" "}
        <strong>{totalPoints.toLocaleString("vi-VN")}</strong> trong{" "}
        <strong>{count.toLocaleString("vi-VN")}</strong> đánh giá
      </p>
      <p className="mt-1 text-base text-foreground">
        Xếp hạng: <strong>{displayedValue}</strong> -{" "}
        <strong>{count.toLocaleString("vi-VN")}</strong> phiếu bầu
      </p>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="flex items-center gap-1"
          onMouseLeave={() => setHover(null)}
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <button
              key={v}
              type="button"
              title={STAR_LABELS[v - 1]}
              aria-label={STAR_LABELS[v - 1]}
              onMouseEnter={() => !voted && setHover(v)}
              onClick={() => handleVote(v)}
              disabled={voted}
              className={`transition-transform ${voted ? "cursor-default" : "cursor-pointer hover:scale-110"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`h-6 w-6 ${v <= activeStars ? "fill-red-500 text-red-500" : "fill-muted text-muted-foreground/40"}`}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {voted ? "Cảm ơn bạn đã đánh giá!" : "Click để đánh giá bài viết"}
        </span>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
