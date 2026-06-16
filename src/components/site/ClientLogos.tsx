// Khu "Được tin tưởng bởi" trên trang chủ — dải logo cuộn vô tận (marquee).
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
  { name: "Hồng Bàng", file: "/clients/hongbang.png" },
  { name: "iSchool", file: "/clients/ischool.png" },
  { name: "IEC", file: "/clients/iec.png" },
  { name: "UK Academy", file: "/clients/uk-academy.png" },
  { name: "Senko", file: "/clients/senko.jpg" },
];

function Row({ items, reverse = false }: { items: Client[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-12 py-4 will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 45s linear infinite`,
        }}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-14 shrink-0 items-center justify-center px-2"
            title={c.name}
          >
            <img
              src={c.file}
              alt={c.name}
              loading="lazy"
              className="h-full w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export function ClientLogos() {
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);
  return (
    <div className="space-y-2">
      <Row items={row1} />
      <Row items={row2} reverse />
    </div>
  );
}
