import { useState } from "react";
import { MessageSquare, X, Sparkles } from "lucide-react";

// UI placeholder only — chưa nối LLM thật (sẽ làm ở phase sau).
export function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Mở trợ lý TAF"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-3 pr-4 py-3 shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all"
      >
        <MessageSquare size={18} />
        <span className="text-sm font-medium hidden sm:inline">Hỏi trợ lý TAF</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-end sm:justify-end p-3 sm:p-5 bg-black/30 backdrop-blur-[2px]">
          <div className="w-full sm:w-[380px] h-[70vh] sm:h-[540px] bg-card border border-border rounded-md shadow-[var(--shadow-elegant)] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                <span className="font-display text-base font-bold">Trợ lý TAF</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5 rounded">
                  Beta
                </span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Đóng" className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              <div className="bg-muted text-foreground rounded-md p-3 font-serif leading-relaxed">
                Xin chào! Tôi là trợ lý của TAF. Bạn có thể hỏi về dịch vụ kiểm toán, quy định
                pháp lý, hoặc yêu cầu báo giá. Tôi sẽ trả lời ngay hoặc kết nối bạn với KTV phụ trách.
              </div>
              <div className="text-xs text-muted-foreground italic">
                (Phiên bản beta — phần trả lời tự động sẽ được kích hoạt sớm. Hiện tại bạn có thể
                gửi câu hỏi qua trang Liên hệ.)
              </div>
            </div>
            <form
              className="p-3 border-t border-border flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Nhập câu hỏi của bạn…"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-[2px] bg-background"
                disabled
              />
              <button
                type="submit"
                disabled
                className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-[2px] opacity-50 cursor-not-allowed"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
