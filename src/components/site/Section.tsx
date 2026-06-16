import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="t-cta text-accent-foreground/80 mb-3 flex items-center gap-2.5">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
      <span className="inline-block w-5 h-px bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="t-h2 lg:text-[2.75rem] text-foreground">
        {title}
      </h2>
      {lead ? (
        <p className="t-body mt-4 text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
