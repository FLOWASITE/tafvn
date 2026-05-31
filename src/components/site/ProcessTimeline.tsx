import { ClipboardList, Map, Search, FileSearch, FileCheck2 } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Khảo sát", body: "Tìm hiểu ngành, quy mô, hệ thống kế toán." },
  { icon: Map, title: "Lập kế hoạch", body: "Xác định rủi ro trọng yếu, phạm vi và lịch trình." },
  { icon: Search, title: "Kiểm toán hiện trường", body: "Thử nghiệm kiểm soát và thử nghiệm cơ bản tại doanh nghiệp." },
  { icon: FileSearch, title: "Soát xét", body: "Soát xét chéo hồ sơ bởi chủ phần hùn phụ trách." },
  { icon: FileCheck2, title: "Phát hành báo cáo", body: "Phát hành báo cáo kiểm toán độc lập đúng hạn." },
];

export function ProcessTimeline() {
  return (
    <ol className="relative grid md:grid-cols-5 gap-8 md:gap-4">
      {/* Horizontal hairline (desktop) */}
      <span
        aria-hidden
        className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      {/* Vertical hairline (mobile) */}
      <span
        aria-hidden
        className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-accent/40"
      />
      {STEPS.map((s, i) => (
        <li key={s.title} className="relative pl-10 md:pl-0">
          {/* Node */}
          <span
            aria-hidden
            className="absolute md:relative left-0 md:left-auto top-1 md:top-auto flex items-center justify-center w-6 h-6 rounded-full bg-background border border-brand-red"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-red" />
          </span>
          <div className="md:mt-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display italic text-accent-foreground/80 tabular-nums text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <s.icon size={16} className="text-accent-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground leading-snug">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground font-serif leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
