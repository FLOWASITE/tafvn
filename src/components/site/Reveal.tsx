import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode, ElementType, CSSProperties } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  small = false,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  small?: boolean;
  style?: CSSProperties;
}) {
  const ref = useReveal<HTMLDivElement>();
  const cls = [small ? "reveal-up-sm" : "", className].filter(Boolean).join(" ");
  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
