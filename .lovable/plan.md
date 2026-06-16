# Tinh chỉnh thẩm mỹ — Trang Kế toán trọn gói TP.HCM

Trang đã có nền tảng editorial tốt (Playfair · Source Serif · token typography, brand red + gold). Plan này không đổi brand, chỉ siết lại nhịp thị giác và thêm "lớp giấy" để trang đọc như một bộ tài liệu chuyên môn hơn là một landing page.

## Phạm vi
Chỉ sửa `src/routes/dich-vu-ke-toan-tron-goi-tphcm.tsx` và (nếu cần) bổ sung 2 `@utility` mới trong `src/styles.css`. Không thêm package, không đổi nội dung tiếng Việt, không đổi cấu trúc route/SEO.

## 9 refinement

### 1. Hero — "Ledger card" thay cho list bên phải
Cột phải hiện là 4 dòng `Pháp lý / Đội ngũ / Báo giá / Phạm vi`. Nâng thành **một thẻ "ledger"** nền `cream/40`, viền hairline gold, có header mono `TAF · Service Brief No. 02`, divider hairline giữa từng dòng, mỗi dòng đánh số `01–04` italic display ở cột trái và label + value bên phải. Đáy thẻ thêm dòng "Cập nhật · 2026" font-mono.

### 2. Hero — Watermark "TAF" + grid mảnh
Thêm `hero-grid-bg` (đã có) opacity 50, mask radial về góc trái — đồng bộ với trang kiểm toán nội bộ. Watermark con dấu hiện tại giữ nguyên nhưng giảm opacity và đặt sau grid để tạo độ sâu.

### 3. Stats strip — Hairline + hover micro-motion
4 ô `1.500+ / 10+ / 100% / 24/7` chuyển sang divider hairline gold giữa các cột (bỏ box), thêm `stat-rule` (utility đã có) rộng 0→28px khi hover, số có `scale(1.04)` 400ms.

### 4. Bảng giá — Header "tier" + tô hàng accent
- Header table: nền `foreground` (xanh đen) + chữ `background`, eyebrow mono "BẢNG 1 / BẢNG 2".
- Hàng `< 10 chứng từ`, `> 200 chứng từ` (đầu/cuối thang) gắn badge nhỏ italic "Phổ biến" / "Doanh nghiệp lớn".
- Hover row: nền `accent/8`, cột `Tổng` chuyển `text-brand-red-ink`, transition 200ms.
- Cột `Tổng` luôn `font-display tabular-nums` cỡ to hơn 1 cấp để đọc như báo giá in ấn.

### 5. "Lưu ý chi phí" — Pull-quote editorial
Khối note hiện là card xám. Đổi thành blockquote `border-l-2 border-brand-red pl-6` + glyph "" Playfair lớn mờ, label mono "LƯU Ý · DISCLAIMER" trên đầu.

### 6. "Phạm vi công việc" (4 thẻ tháng/quý/năm) — Numbering + connector
- Thêm số `01–04` italic Playfair 4xl bên trên tiêu đề thẻ, màu `accent-foreground/35`.
- Đường connector hairline gold ngang phía trên 4 thẻ (giống quy trình ở trang kiểm toán nội bộ).
- Bullet `CheckCircle2` đổi sang dấu `·` gold + text, gọn hơn.
- Hover thẻ: `-translate-y-1`, viền `accent/60`, shadow nhẹ.

### 7. "Khách hàng cần cung cấp" — Grid thành ledger 2 cột
- Bỏ border ngoài từng ô.
- Dùng `divide-y divide-accent/20` + `divide-x divide-accent/20` để tạo lưới như sổ kẻ.
- Số `01–06` italic display 3xl màu mờ, ngồi cùng dòng với nhãn.
- Hover ô: `bg-accent/[0.04]`.

### 8. Section dividers — Gold rule + section tag
Mỗi `<Section>` chính chèn `.rule-gold` (utility đã có) phía trên + một tag mono nhỏ `§ 01 — HERO / § 02 — BẢNG GIÁ / …` ở mép trái. Giúp trang đọc theo nhịp tài liệu.

### 9. CTA cuối — Dark plate + watermark + dot pulse
Đồng bộ với CTA của trang kiểm toán nội bộ:
- Nền `foreground`, overlay `paper-grain` 6%.
- Watermark "TAF." Playfair italic 16rem màu `accent/6%`, góc phải dưới.
- Button đỏ có chấm vàng `animate-pulse` ở đầu, hotline dùng `font-mono text-accent`.
- Đường gradient hairline gold ở mép trên panel.

## Tokens / utilities
- Tận dụng có sẵn: `t-h1 t-h2 t-h3 t-eyebrow t-lead t-body t-body-sm t-cta t-italic t-numeral`, `rule-gold`, `hero-grid-bg`, `paper-grain`, `stat-rule`, `brace-glow`.
- Có thể thêm 1 utility mới `@utility ledger-cell` (padding + hairline grid cell) nếu giúp giảm trùng lặp ở mục 7.

## Không thay đổi
- Toàn bộ nội dung tiếng Việt, số liệu báo giá, link, head/SEO, Breadcrumb, FAQ, Footer.
- Không thêm package, không thêm JS observer/animation library (chỉ CSS transitions + `animate-pulse` đã có).
- Không đụng các route/component khác.

## Kết quả mong đợi
Trang đọc như một bản brief dịch vụ in trên giấy mỹ thuật: nhịp section rõ, bảng giá có ranking thị giác, hero cân bằng hơn giữa hai cột, CTA cuối có sức nặng. Toàn bộ vẫn nằm trong design system editorial đã thống nhất với các trang dịch vụ khác.
