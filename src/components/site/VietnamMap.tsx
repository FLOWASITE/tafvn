/**
 * Stylized Vietnam map — abstract S-curve outline + dotted province markers.
 * Not geographically precise; intended as editorial illustration.
 */
const DOTS: { x: number; y: number; r?: number; major?: boolean; label?: string }[] = [
  // Bắc
  { x: 200, y: 60, r: 6, major: true, label: "Hà Nội" },
  { x: 190, y: 80 }, { x: 215, y: 75 }, { x: 175, y: 95 }, { x: 220, y: 105 },
  { x: 165, y: 115 }, { x: 200, y: 125 }, { x: 230, y: 140 }, { x: 180, y: 145 },
  // Trung
  { x: 235, y: 175 }, { x: 215, y: 195 }, { x: 240, y: 215 }, { x: 220, y: 240 },
  { x: 245, y: 265 }, { x: 230, y: 290 },
  { x: 240, y: 320, r: 6, major: true, label: "Đà Nẵng" },
  { x: 225, y: 345 }, { x: 245, y: 370 }, { x: 230, y: 395 }, { x: 215, y: 420 },
  // Nam
  { x: 195, y: 450 }, { x: 175, y: 470 },
  { x: 155, y: 495, r: 6, major: true, label: "TP. HCM" },
  { x: 135, y: 510 }, { x: 115, y: 520 }, { x: 95, y: 530 }, { x: 130, y: 540 },
  { x: 110, y: 555 }, { x: 85, y: 555 }, { x: 145, y: 480 },
];

export function VietnamMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 600" className={`w-full h-auto ${className}`} aria-label="Bản đồ Việt Nam — mạng lưới TAF">
      {/* Stylized outline */}
      <path
        d="M 200,40
           C 250,55 275,90 235,140
           C 210,180 245,210 240,260
           C 235,310 260,340 240,380
           C 225,415 245,440 215,460
           C 190,478 170,470 160,495
           C 145,520 110,525 85,545
           C 70,560 80,580 105,575
           C 130,572 155,560 175,540
           C 195,520 215,500 220,475
           C 230,440 215,420 230,395
           C 248,365 235,335 250,305
           C 262,275 245,250 252,220
           C 260,195 245,170 250,145
           C 258,115 235,80 215,55
           C 208,42 200,38 200,40 Z"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      {/* Hoàng Sa / Trường Sa hint */}
      <circle cx="295" cy="280" r="2" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="290" cy="320" r="1.5" fill="var(--color-accent)" opacity="0.5" />
      <circle cx="285" cy="400" r="1.5" fill="var(--color-accent)" opacity="0.5" />

      {DOTS.map((d, i) => (
        <g key={i} className={d.major ? "map-halo" : ""}>
          {d.major && (
            <>
              <circle
                cx={d.x}
                cy={d.y}
                r={(d.r ?? 3) + 10}
                fill="var(--color-brand-red)"
                opacity="0.12"
                className="animate-ping"
                style={{ animationDuration: "2.8s" }}
              />
              <circle
                cx={d.x}
                cy={d.y}
                r={(d.r ?? 3) + 4}
                fill="none"
                stroke="var(--color-brand-red)"
                strokeOpacity="0.35"
                strokeWidth="0.8"
              />
            </>
          )}
          <circle
            cx={d.x}
            cy={d.y}
            r={d.r ?? 2.2}
            fill={d.major ? "var(--color-brand-red)" : "var(--color-accent-foreground)"}
            opacity={d.major ? 1 : 0.55}
          />
          {d.label && (
            <text
              x={d.x + 12}
              y={d.y + 4}
              fill="var(--color-foreground)"
              style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontStyle: "italic" }}
            >
              {d.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
