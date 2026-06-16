import logoRed from "@/assets/taf-logo.png";
import logoWhite from "@/assets/taf-logo-white.png";

export function Logo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const src = variant === "light" ? logoWhite : logoRed;
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <img
        src={src}
        alt="TAF — Tax Audit Finance"
        className="h-7 md:h-8 w-auto select-none"
        draggable={false}
      />
      <span
        className={`hidden sm:inline font-display text-[0.7rem] uppercase tracking-[0.22em] ${
          variant === "light" ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        Auditing
      </span>
    </span>
  );
}
