export function TafSeal({
  size = 96,
  className = "",
  opacity = 1,
  spin = false,
  rotate,
}: {
  size?: number;
  className?: string;
  opacity?: number;
  spin?: boolean;
  rotate?: number;
}) {
  const id = "seal-curve";
  const transform = rotate !== undefined ? `rotate(${rotate}deg)` : undefined;
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`${spin ? "spin-slow" : ""} ${className}`}
      style={{ opacity, transform }}
      aria-hidden
    >
      <defs>
        <path
          id={id}
          d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
        />
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="var(--color-brand-red)" strokeWidth="2" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="var(--color-brand-red)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="var(--color-brand-red)" strokeWidth="0.8" />
      <text
        fill="var(--color-brand-red)"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10.5px",
          letterSpacing: "0.42em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <textPath href={`#${id}`} startOffset="0">
          TAF · AUDIT · TAX · ADVISORY · EST · 2011 ·
        </textPath>
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="var(--color-brand-red)"
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "76px",
          fontWeight: 700,
        }}
      >
        T
      </text>
      <line x1="60" y1="135" x2="140" y2="135" stroke="var(--color-brand-red)" strokeWidth="0.8" />
    </svg>
  );
}
