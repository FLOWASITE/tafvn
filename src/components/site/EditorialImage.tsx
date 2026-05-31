import type { ReactNode } from "react";

export function EditorialImage({
  src,
  alt,
  caption,
  aspect = "portrait",
  accent = "gold",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  aspect?: "portrait" | "landscape" | "square";
  accent?: "gold" | "red";
  className?: string;
}) {
  const ratio =
    aspect === "portrait" ? "aspect-[4/5]" : aspect === "landscape" ? "aspect-[16/10]" : "aspect-square";
  const accentBorder = accent === "red" ? "before:bg-brand-red" : "before:bg-accent";
  return (
    <figure className={`relative ${className}`}>
      <div
        className={`relative ${ratio} overflow-hidden bg-muted before:absolute before:top-0 before:left-0 before:h-px before:w-16 before:z-10 ${accentBorder} after:absolute after:top-0 after:left-0 after:w-px after:h-16 after:bg-accent after:z-10`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tone overlay — subtle navy wash from bottom for editorial feel */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--color-primary) 32%, transparent) 100%)",
          }}
        />
        {/* Subtle grain */}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay paper-grain" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs md:text-sm text-muted-foreground font-serif italic leading-snug">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
