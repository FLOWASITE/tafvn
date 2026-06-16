## Bối cảnh

Trang `/dich-vu-ke-toan-tron-goi-tphcm` đã có một bản editorial pass trước đó (hero ledger card, dark price table, dark CTA plate, scope cards có 01–04, requirements ledger grid). Hero hiện đã đẹp. Lần này tăng tính thẩm mỹ ở **các section ở giữa và cuối** vốn còn nhẹ ký so với hero.

## Phạm vi 7 chỉnh sửa CSS-only

### 1. Trust strip (stats 1.500+ / 10+ / 100% / 24/7)
- Thêm eyebrow mono "§ — Năng lực ngành" phía trên hàng số.
- Mỗi cột: số dùng `font-display tabular-nums` `text-5xl`, kéo dài hairline gold `stat-rule` đầy đủ width khi hover (hiện chỉ 0→28px).
- Underline gold mảnh dưới label khi group:hover.

### 2. TOC (mục lục 13 items)
- Bọc trong panel `bg-cream/30` `border border-accent/20` `paper-grain` overlay.
- Số `01–13` italic Playfair `text-2xl` cột trái cố định, hover số → `text-brand-red`.
- Hairline `border-b border-accent/15` mỗi row, last:border-0.
- Eyebrow "§ 00 — MỤC LỤC" mono ở đầu panel.

### 3. Section "Điều kiện hành nghề" + "Vì sao dùng dịch vụ" (text-heavy)
- Thêm drop-cap Playfair (`first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-accent-foreground`) cho paragraph mở đầu.
- Thêm `rule-gold` phân cách giữa các section liền nhau.

### 4. Quy trình 5 bước
- Đổi từ cards rời sang **timeline dọc** với cột số `01–05` Playfair `text-5xl italic` bên trái, content bên phải, hairline gold dọc nối các bước (`absolute left-X top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent`).
- Hover step → background `bg-cream/40`, số scale `1.05`.

### 5. So sánh "Kế toán vs Báo cáo thuế" (COMPARE)
- Đổi từ table flat sang **2 cột song song** với divider gold ở giữa.
- Cột trái (Kế toán): nền `bg-foreground` text light + accent badge "TAF cung cấp".
- Cột phải (Báo cáo thuế): nền cream + muted text.
- Mỗi row có icon nhỏ + label uppercase mono.

### 6. FAQ accordion
- Hairline `border-t border-accent/25` giữa items thay vì border đầy đủ.
- Question mở: `bg-cream/40` + số `Q.01–Q.06` italic Playfair `text-3xl` bên trái.
- Chevron đổi sang ký hiệu `+`/`−` Playfair light.

### 7. Section "Khách hàng nói gì" (testimonial)
- Thêm Playfair giant quote glyph `text-[10rem] text-accent/15` ở góc trên blockquote.
- Avatar circle viền gold hairline `ring-1 ring-accent/40 ring-offset-2`.
- Eyebrow "§ — Phản hồi khách hàng" + năm.

## Ràng buộc

- 100% CSS + utility tokens đã có (`t-h1 t-h2 t-h3 t-eyebrow t-lead t-italic t-numeral`, `rule-gold`, `paper-grain`, `stat-rule`, `hero-grid-bg`).
- Không đổi nội dung, không thêm thư viện, không JS animation mới ngoài `transition` + `group-hover`.
- Không động hero, price table, scope cards, dark CTA (đã polish trước).

## Output
- Edit duy nhất `src/routes/dich-vu-ke-toan-tron-goi-tphcm.tsx`.