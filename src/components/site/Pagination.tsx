import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
};

// Trả về danh sách số trang hiển thị, chèn dấu "…" khi có nhiều trang.
function buildPages(page: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "ellipsis")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(total - 1, page + 1);
  if (start > 2) pages.push("ellipsis");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("ellipsis");
  pages.push(total);
  return pages;
}

export function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = buildPages(page, totalPages);

  const btnBase =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-[2px] border px-3 text-sm font-medium transition-colors";

  return (
    <nav
      aria-label="Phân trang"
      className={`mt-10 flex items-center justify-center gap-2 ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Trang trước"
        className={`${btnBase} border-border text-foreground/75 hover:border-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none`}
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`e${i}`}
            className="inline-flex h-10 min-w-10 items-center justify-center text-muted-foreground"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={`${btnBase} ${
              p === page
                ? "border-brand-red bg-brand-red text-white"
                : "border-border text-foreground/75 hover:border-accent hover:text-foreground"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Trang sau"
        className={`${btnBase} border-border text-foreground/75 hover:border-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none`}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
