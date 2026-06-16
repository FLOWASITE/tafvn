## Mục tiêu
Nâng cấp thẩm mỹ trang `/dich-vu-kiem-toan-noi-bo` theo hướng **Editorial serif refinement** đã chọn — giữ nguyên 100% nội dung, cấu trúc section và metadata; chỉ thay đổi lớp trình bày (typography, spacing, divider, card, CTA).

## Phạm vi
Chỉ chỉnh sửa duy nhất file `src/routes/dich-vu-kiem-toan-noi-bo.tsx`. Không đụng tokens chung (`styles.css`), không đụng `SectionHeading`/`Breadcrumb` (vẫn dùng nhưng có thể bọc thêm class wrapper).

## Các thay đổi trực quan

1. **Hero**
   - Nền ivory `bg-[hsl(var(--background))]`, viền dưới bằng hairline gold `border-b border-[color:var(--brand-gold)]/20`.
   - Eyebrow dạng "hairline đỏ + chữ uppercase tracking rộng" (kicker "Dịch vụ kiểm toán").
   - H1 Playfair Display, `text-4xl md:text-6xl`, font-normal, có cụm "kiểm toán nội bộ." in *italic* để tạo nhịp editorial.
   - Lead paragraph cỡ `text-lg`, màu muted ấm.
   - CTA chính: nút brand-red full-width với `ArrowRight` đẩy về phải, hover trượt nhẹ. CTA phụ: outline hairline + icon `Phone`, nhãn "Hotline / Zalo · 0924 580 580".

2. **Khái niệm "Kiểm toán nội bộ là gì?"**
   - H2 Playfair *italic* trong ngoặc kép.
   - Body có border-l-2 brand-red, padding-left, để tạo cảm giác pull-quote.

3. **Vai trò (3 thẻ)**
   - Section nền ivory đậm hơn nhẹ.
   - Card: nền `#fdfbf7`, viền hairline gold `border-[color:var(--brand-gold)]/20`, icon size 8, màu gold, padding `p-6`, không shadow nặng — chỉ shadow rất nhẹ khi hover.
   - Grid: 1 cột mobile, 3 cột `md:grid-cols-3`.

4. **Đối tượng bắt buộc**
   - Số thứ tự `01/02/03` Inter semibold brand-red, mỗi item là card nền trắng với `border-l-2` gold.

5. **Quy trình (4 bước)**
   - Layout timeline rail dọc với hairline gold ở giữa số, số tròn outline brand-red, mỗi step có heading Playfair + body Source Serif.

6. **Quyền hạn / Thực trạng / Cam kết / Đôi nét**
   - Giữ cấu trúc, nâng cấp:
     - Quyền hạn: list với icon `KeyRound` gold, hairline divider giữa các item.
     - Thực trạng: 2-column prose editorial, drop-cap chữ cái đầu mỗi đoạn.
     - Cam kết: pull-quote block — nền ivory đậm, `border-l-4 brand-red`, font Playfair italic.
     - Đôi nét về TAF: prose serif chuẩn, không card.

7. **Dịch vụ liên quan** (đã có) — refresh để khớp ngôn ngữ mới: card nền trắng, hairline gold, tiêu đề Playfair, link "Xem chi tiết" có mũi tên trượt.

8. **FAQ**
   - Accordion phẳng kiểu list editorial: `divide-y divide-border`, trigger text Playfair, icon chevron gold thay vì mặc định.
   - Đánh số `01.` `02.` ... trước câu hỏi.

9. **CTA cuối trang**
   - Đổi từ band đỏ → band tối `bg-[hsl(var(--foreground))]` editorial (theo direction được chọn).
   - Eyebrow gold + hairline.
   - Heading Playfair 3xl: "Tăng cường quản trị rủi ro **cùng TAF.**" (cụm cuối italic gold).
   - 2 nút: chính brand-red "Yêu cầu tư vấn" → `/lien-he`, phụ outline gold "Hotline · 0924 580 580".

## Token & font
- Dùng tokens hiện có: `--background` ivory, `--foreground` ink, `--brand-red`, `--brand-gold`. Không hardcode hex; ánh xạ các giá trị prototype (#fcfaf7, #9c1c22, #c5a059, #1a1a1a) sang các token tương ứng đang có trong `styles.css`.
- Font: tiếp tục `font-display` (Playfair), `font-serif` (Source Serif), `font-sans` (Inter) — không thêm `<link>` mới.

## Giữ nguyên
- Toàn bộ copy tiếng Việt.
- `head()` / SEO / canonical / og.
- `Breadcrumb` ở đầu trang và `SectionHeading` component (vẫn dùng cho các section chính, chỉ tinh chỉnh class wrapper).
- Tất cả route/link đã có (`/lien-he`, `tel:`, các dịch vụ liên quan).
- Constant `ROLES`, `TARGETS`, `STEPS`, `POWERS`, `HOTLINE_*` không đổi.

## Không thay đổi
- File khác (site.ts, dictionaries.ts, components dùng chung).
- Không thêm package mới.
- Không thêm animation library (chỉ transition Tailwind tiny: `transition-transform`, `hover:translate-x-1`).
