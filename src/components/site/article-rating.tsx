import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getPageRating, submitPageRating } from "@/lib/ratings.functions";

interface ArticleRatingProps {
  title: string;
  slug: string;
}

const STAR_LABELS = [
  "Bài viết rất kém",
  "Bài viết kém",
  "Bài viết đạt",
  "Bài viết tốt",
  "Bài viết rất tốt",
];

export function ArticleRating({ title, slug }: ArticleRatingProps) {
  const fetchRating = useServerFn(getPageRating);
  const submit = useServerFn(submitPageRating);
  const qc = useQueryClient();
  const queryKey = ["page-rating", slug];

  const { data } = useQuery({
    queryKey,
    queryFn: () => fetchRating({ data: { slug } }),
    staleTime: 60_000,
    initialData: { ratingCount: 0, ratingSum: 0, ratingAvg: 0 },
  });

  const [hover, setHover] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);
  const [voting, setVoting] = useState(false);

  const count = data.ratingCount;
  const sum = data.ratingSum;
  const avg = data.ratingAvg;
  const avgDisplay = count > 0 ? avg.toFixed(1) : "0.0";
  const avgStars = count > 0 ? Math.round(avg) : 5;
  const activeStars = hover ?? avgStars;

  const handleVote = async (value: number) => {
    if (voting || voted) return;
    setVoting(true);
    try {
      const res = await submit({ data: { slug, value } });
      qc.setQueryData(queryKey, {
        ratingCount: res.ratingCount,
        ratingSum: res.ratingSum,
        ratingAvg: res.ratingAvg,
      });
      setVoted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setVoting(false);
    }
  };

  const jsonLd =
    count > 0
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWorkSeries",
          name: title,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avg.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: String(count),
            reviewCount: String(count),
          },
        }
      : null;

  return (
    <div className="mt-12 rounded-lg border border-border/60 bg-card/40 p-5">
      <p className="text-base text-foreground">
        Tổng số điểm của bài viết là:{" "}
        <strong>{sum.toLocaleString("vi-VN")}</strong> trong{" "}
        <strong>{count.toLocaleString("vi-VN")}</strong> đánh giá
      </p>
      <p className="mt-1 text-base text-foreground">
        Xếp hạng: <strong>{avgDisplay}</strong> -{" "}
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
              disabled={voted || voting}
              className={`transition-transform ${voted || voting ? "cursor-default" : "cursor-pointer hover:scale-110"}`}
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
          {voted
            ? "Cảm ơn bạn đã đánh giá!"
            : count === 0
              ? "Hãy là người đầu tiên đánh giá bài viết"
              : "Click để đánh giá bài viết"}
        </span>
      </div>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </div>
  );
}
