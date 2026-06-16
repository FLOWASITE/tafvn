# Kế hoạch — Tinh chỉnh khu vực "Khách hàng nói gì về TAF"

Chỉ thay đổi phần `<Section id="niem-tin">` trong `src/routes/dich-vu-ke-toan-tron-goi-tphcm.tsx` (dòng ~1473–1610). Không động vào nội dung quote, dữ liệu, hay các section khác.

## Hướng thẩm mỹ đã chốt

- **Bố cục:** Editorial magazine — 1 testimonial nổi bật chiếm hàng đầu, 2 testimonial phụ chia đôi hàng dưới.
- **Tông màu:** Premium dark — nền navy đen (`#0F172A` / sử dụng `bg-foreground`), chữ ivory, nhấn vàng đồng (`accent` / `brand-red` cho điểm nhấn nhỏ).
- **Ảnh:** Chân dung lớn editorial (96–112px), bo nhẹ vuông góc, viền vàng mảnh + offset.

## Các thay đổi cụ thể

### 1. Header section (cột trái)
- Đổi eyebrow `13 · Niềm tin` → `§ 13 — Tiếng nói khách hàng` (đồng bộ ký hiệu § với các section khác).
- Tiêu đề giữ nguyên, đổi `em` thành Playfair italic vàng (`text-accent-foreground italic`) thay vì `text-brand-red`.
- Thêm `rule-gold` ngắn (40px) phía dưới tiêu đề.
- Trust badges: chuyển sang nền `bg-foreground/95` chữ ivory để đồng bộ tone tối, viền `border-accent/30`.

### 2. Testimonial chính (featured — hàng 1, full width cột phải)
- Nền `bg-foreground` (navy đen), padding rộng `p-10 md:p-14`.
- **Layout 2 cột bên trong:** trái = chân dung 112×112 vuông bo nhẹ `rounded-[2px]` viền `ring-1 ring-accent/60 ring-offset-4 ring-offset-foreground`; phải = quote.
- Glyph `"` Playfair khổng lồ (`text-[14rem]`) đặt góc trên phải, opacity `text-accent/10`.
- Quote: `font-display text-2xl md:text-[1.75rem] leading-[1.4] text-background` (ivory).
- Dưới quote: hairline vàng `h-px bg-accent/40 w-16`, rồi tên + chức danh + tổ chức xếp dọc, có badge nhỏ ngôi sao 5★ vàng kiểu typographic (`★★★★★` font-display).
- Eyebrow `§ — Câu chuyện nổi bật` trên cùng góc trái.

### 3. Hai testimonial phụ (hàng 2, mỗi cái col-span-1)
- Nền `bg-foreground/[0.03]` (cream sang) hoặc `bg-cream/50` để tương phản với card chính tối.
- Viền `border-accent/25`, padding `p-7 md:p-8`.
- Chân dung 80×80 đặt phía trên quote (không phải dưới), viền vàng mảnh `ring-1 ring-accent/40 ring-offset-2`.
- Quote `font-display text-base md:text-lg text-foreground leading-relaxed`.
- Numbering nhỏ `02 — 03 —` italic Playfair vàng góc trên phải mỗi card (mã số bài).
- Hairline gold ngăn quote và figcaption.

### 4. Chi tiết typographic chung
- Bỏ icon `Quote` lucide trong card phụ — chỉ giữ glyph `"` Playfair lớn nhất quán.
- Tên người: `font-display text-[0.95rem]` (không uppercase).
- Chức danh: `t-cta` uppercase tracking-wider, vàng nhạt (`text-accent/80` trên nền tối, `text-accent-foreground/70` trên cream).
- Tổ chức: `font-serif italic text-xs text-muted-foreground`.

### 5. Footer thanh tin cậy (giữ nguyên vị trí, nâng cấp)
- Dòng `1.500+ doanh nghiệp · 13+ năm · 99% hài lòng` → chuyển sang stat strip với hairline vàng phân cách, số tabular-nums Playfair lớn `text-2xl`.

## Ràng buộc

- Không đổi nội dung quote, tên người, dữ liệu testimonial.
- Không đổi 12 section còn lại.
- Chỉ dùng token có sẵn (`bg-foreground`, `bg-background`, `text-accent`, `bg-cream`, `font-display`, `t-h2`, `t-cta`, `rule-gold`, `paper-grain`) — không thêm màu hex mới.
- Không thêm JS animation; chỉ CSS + Reveal sẵn có.
- File đụng đến: chỉ `src/routes/dich-vu-ke-toan-tron-goi-tphcm.tsx`.
