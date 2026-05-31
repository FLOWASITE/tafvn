const CLIENTS = [
  "Đèo Cả",
  "Nguyễn Hoàng",
  "ILA",
  "Vinamilk",
  "Coteccons",
  "Hòa Phát",
];

export function ClientLogos() {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mb-6 flex items-center gap-2.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
        <span className="inline-block w-5 h-px bg-accent" />
        Được tin tưởng bởi
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-5 items-center">
        {CLIENTS.map((c) => (
          <li
            key={c}
            className="font-display text-xl md:text-2xl text-foreground/50 hover:text-brand-red transition-colors tracking-tight text-center md:text-left select-none"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
