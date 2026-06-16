// Khu "Được tin tưởng bởi" trên trang chủ — dải logo cuộn vô tận (marquee) 2 hàng ngược chiều.
// Ảnh đặt trong public/clients/. Thêm/bớt bằng cách sửa mảng CLIENTS bên dưới.
type Client = { name: string; file: string };

const CLIENTS: Client[] = [
  { name: "Alchera", file: "/clients/alchera.jpg" },
  { name: "Hưng Vạn Phát", file: "/clients/hvp.jpg" },
  { name: "KOJAVM", file: "/clients/kojavm.png" },
  { name: "LEE Entertainment", file: "/clients/lee-entertainment.jpg" },
  { name: "NBC 1 Vietnam", file: "/clients/nbc1.jpg" },
  { name: "ORLAR", file: "/clients/orlar.jpg" },
  { name: "PICC", file: "/clients/picc.jpg" },
  { name: "S Media", file: "/clients/smedia.jpg" },
  { name: "TN Legal", file: "/clients/tnlegal.jpg" },
  { name: "WellBytes", file: "/clients/wellbytes.jpg" },
  { name: "Nguyễn Hoàng Group", file: "/clients/nhg.png" },
  { name: "Hong Bang International University", file: "/clients/hongbang.png" },
  { name: "UK Academy", file: "/clients/uk-academy.png" },
  { name: "iSchool", file: "/clients/ischool.png" },
  { name: "IEC – International Education City", file: "/clients/iec.png" },
  { name: "SENKO", file: "/clients/senko.jpg" },
];

const half = Math.ceil(CLIENTS.length / 2);
const ROW_TOP = CLIENTS.slice(0, half);
const ROW_BOTTOM = CLIENTS.slice(half);

function LogoTile({ c }: { c: Client }) {
  return (
    <div className="group/tile mx-2.5 flex h-20 w-44 shrink-0 items-center justify-center rounded-[4px] border border-border bg-card px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-accent hover:shadow-[var(--shadow-card)]">
      <img
        src={c.file}
        alt={c.name}
        loading="lazy"
        className="max-h-11 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover/tile:opacity-100 group-hover/tile:grayscale-0"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Client[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 items-center py-1 ${
          reverse ? "animate-[taf-marquee-rev_42s_linear_infinite]" : "animate-[taf-marquee_42s_linear_infinite]"
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {[...items, ...items].map((c, i) => (
          <LogoTile key={`${c.name}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <div>
      <style>{`
        @keyframes taf-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes taf-marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      {/* Tiêu đề */}
      <div className="text-center">
        <p className="inline-flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block w-5 h-px bg-accent" />
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
          Được tin tưởng bởi
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
          <span className="inline-block w-5 h-px bg-accent" />
        </p>
        <p className="mt-3 font-display text-xl md:text-2xl text-foreground leading-snug">
          Đồng hành cùng doanh nghiệp, tập đoàn giáo dục &amp; thương hiệu trên khắp Việt Nam
        </p>
      </div>

      {/* Dải logo cuộn — mép trái/phải mờ dần */}
      <div
        className="mt-9 space-y-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <MarqueeRow items={ROW_TOP} />
        <MarqueeRow items={ROW_BOTTOM} reverse />
      </div>
    </div>
  );
}
