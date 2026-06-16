import type { LucideIcon } from "lucide-react";

export function Emblem({
  icon: Icon,
  label,
  sublabel,
}: {
  icon: LucideIcon;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="relative flex items-center gap-4 px-5 py-4 border border-accent/40 bg-background/60 rounded-[2px]">
      <span aria-hidden className="absolute inset-x-2 top-1 h-px bg-accent/30" />
      <span aria-hidden className="absolute inset-x-2 bottom-1 h-px bg-accent/30" />
      <Icon size={22} className="text-brand-red shrink-0" strokeWidth={1.5} />
      <div className="min-w-0">
        <div className="font-display text-sm md:text-base text-foreground leading-tight">{label}</div>
        <div className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
          {sublabel}
        </div>
      </div>
    </div>
  );
}
