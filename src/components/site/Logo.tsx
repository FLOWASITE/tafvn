export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span
        aria-hidden
        className="inline-block w-2.5 h-2.5 rounded-[1px] -translate-y-[1px]"
        style={{ background: "var(--color-brand-red)" }}
      />
      <span className="font-display text-[1.5rem] leading-none font-bold tracking-tight text-foreground">
        TAF
      </span>
      <span className="font-display text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground ml-1">
        Auditing
      </span>
    </span>
  );
}
