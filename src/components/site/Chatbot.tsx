// Nút floating "Chat Zalo" — mở Zalo với số 0838226363.
export function Chatbot() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://zalo.me/0838226363"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat với TAF qua Zalo"
        className="group relative flex items-center gap-0 rounded-full bg-gradient-to-br from-[#006AF5] to-[#00A6FF] py-2 pl-2 pr-2 text-white shadow-lg shadow-[#006AF5]/30 ring-1 ring-white/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006AF5]/45 sm:gap-3 sm:pr-5"
      >
        {/* Vòng pulse thu hút chú ý */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-2 top-1/2 h-11 w-11 -translate-y-1/2 animate-ping rounded-full bg-white/30"
        />

        {/* Huy hiệu logo */}
        <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              fill="#0068FF"
              d="M12 3C6.5 3 2 6.86 2 11.6c0 2.69 1.46 5.09 3.74 6.66.2.14.31.38.28.62l-.26 2.05c-.06.45.4.78.81.58l2.74-1.34c.18-.09.39-.11.58-.06.74.19 1.52.29 2.31.29 5.5 0 10-3.86 10-8.6S17.5 3 12 3Z"
            />
            <circle cx="8" cy="11.6" r="1.15" fill="#fff" />
            <circle cx="12" cy="11.6" r="1.15" fill="#fff" />
            <circle cx="16" cy="11.6" r="1.15" fill="#fff" />
          </svg>
          {/* Chấm "online" */}
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-400"
          />
        </span>

        {/* Nhãn (ẩn trên mobile) */}
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-semibold">Chat Zalo</span>
          <span className="text-[11px] font-medium text-white/85">Tư vấn miễn phí</span>
        </span>
      </a>
    </div>
  );
}
