## Mục tiêu

Hoàn thiện trang **/dich-vu-kiem-toan-noi-bo** bằng cách bổ sung khối CTA cuối trang và liên kết chéo sang các dịch vụ liên quan. Giữ nội dung 100% tiếng Việt (không đưa vào dictionary i18n).

## Phạm vi thay đổi

Chỉ chỉnh sửa 1 file: `src/routes/dich-vu-kiem-toan-noi-bo.tsx`.

## Chi tiết triển khai

### 1. Thêm khối "Dịch vụ liên quan" (cross-links)
Chèn ngay trước section FAQ. Lưới 3 cột (1 cột trên mobile) gồm các thẻ liên kết sang dịch vụ TAF cùng nhóm:

- **Kiểm toán báo cáo tài chính** → `/dich-vu-kiem-toan`
- **Tư vấn thuế & kế toán** → `/dich-vu` (hoặc service slug tương ứng có sẵn)
- **Soát xét & tư vấn quản trị rủi ro** → trang dịch vụ phù hợp đang có

Trước khi viết, mở `src/lib/site.ts` (`SERVICES`) và `src/routes/dich-vu.index.tsx` để chọn đúng 3 slug đang tồn tại, tránh link gãy.

Mỗi thẻ: tiêu đề (font-display), 1 dòng mô tả ngắn (font-serif, muted), icon nhỏ + mũi tên `ArrowRight` hover dịch chuyển, viền `border-border`, hover đổi `border-accent` — đồng bộ phong cách hiện có của trang.

### 2. Thêm khối CTA cuối trang
Chèn sau FAQ (trước thẻ đóng `</>`), kiểu "band" nổi bật phù hợp design system hiện tại:

- Nền `bg-foreground` (hoặc `bg-brand-red-ink`) chữ sáng — đồng bộ với các trang dịch vụ khác nếu đã có pattern; nếu chưa có pattern dùng nền `bg-secondary` viền `rule-gold` để tránh lệch tông.
- Tiêu đề: "Sẵn sàng triển khai kiểm toán nội bộ cho doanh nghiệp?"
- Mô tả ngắn 1–2 câu về việc TAF tư vấn miễn phí phạm vi, lộ trình và báo giá.
- 2 nút: **"Yêu cầu tư vấn"** → `/lien-he` (primary, `bg-brand-red`) và **"Hotline · 0924 580 580"** → `tel:+84924580580` (secondary, viền).
- Sử dụng các hằng số `HOTLINE_DISPLAY` / `HOTLINE_TEL` đã khai báo ở đầu file.

### 3. Không thay đổi
- Không sửa `head()` / metadata.
- Không thêm dictionary key.
- Không đụng các section hiện có (Hero, Khái niệm, Vai trò, Đối tượng, Quy trình, Quyền hạn, Thực trạng, Cam kết, FAQ).
- Không sửa file khác (trừ trường hợp cần xác minh slug trong `site.ts`/`dich-vu.index.tsx` — chỉ đọc, không sửa).

## Kiểm tra sau khi build

- Trang vẫn render đầy đủ các section cũ theo đúng thứ tự.
- 3 liên kết "Dịch vụ liên quan" trỏ tới route đang tồn tại (không 404).
- Khối CTA hiển thị nổi bật, 2 nút hoạt động (link nội bộ + `tel:`).
- Responsive: lưới 3 cột co về 1 cột trên mobile; CTA căn giữa đẹp ở mọi breakpoint.