// Nút floating "Chat Zalo" — mở Zalo với số 0838226363.
export function Chatbot() {
  return (
    <a
      href="https://zalo.me/0838226363"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat với TAF qua Zalo"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full pl-3 pr-4 py-3 text-white shadow-[var(--shadow-elegant)] transition-all hover:opacity-90"
      style={{ backgroundColor: "#0068FF" }}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-[13px] font-bold leading-none"
        style={{ color: "#0068FF" }}
      >
        Z
      </span>
      <span className="text-sm font-medium hidden sm:inline">Chat Zalo</span>
    </a>
  );
}
