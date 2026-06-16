# Thay Chatbot bằng nút Chat Zalo

## Mục tiêu
Loại bỏ Chatbot UI placeholder (chưa nối LLM) và thay bằng nút floating "Chat Zalo" mở `https://zalo.me/0838226363` trong tab mới.

## Thay đổi

### 1. `src/components/site/Chatbot.tsx` — viết lại thành `ZaloChat`
- Bỏ state `open`, bỏ popup, bỏ form input.
- Giữ vị trí floating (`fixed bottom-5 right-5 z-50`) và style nút tương đồng (rounded-full, shadow, bo viền) nhưng:
  - Đổi sang thẻ `<a>` với `href="https://zalo.me/0838226363"`, `target="_blank"`, `rel="noopener noreferrer"`.
  - Background dùng tone Zalo brand (xanh `#0068FF`) với text trắng — phù hợp nhận diện Zalo nhưng vẫn là nút tùy chỉnh TAF (không phải widget Zalo mặc định).
  - Icon: SVG inline logo Zalo đơn giản (chữ "Z" trong khung bo tròn) hoặc dùng `MessageCircle` từ lucide với label.
  - Label: "Chat Zalo" (ẩn trên mobile, hiện từ `sm:` trở lên — giữ pattern cũ).
  - `aria-label="Chat với TAF qua Zalo"`.
- Export tên có thể giữ `Chatbot` để không phải sửa import ở `__root.tsx`, hoặc đổi tên + cập nhật import. Ưu tiên giữ tên `Chatbot` cho gọn (1 file edit).

### 2. Không thay đổi khác
- `__root.tsx` giữ nguyên `<Chatbot />`.
- Không động đến các trang dịch vụ (link "Hotline / Zalo" trong dich-vu-kiem-toan.tsx / dich-vu-ke-toan.tsx là chỗ khác, ngoài scope).

## Lưu ý
- `zalo.me/0838226363` là link Zalo cá nhân — sẽ mở app Zalo (mobile) hoặc trang web Zalo (desktop) tới profile đó. Khi nào TAF có Zalo OA chính thức, chỉ cần đổi href.
