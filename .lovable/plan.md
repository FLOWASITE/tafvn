# Polish Trang chủ — micro-interactions, reveal & tinh chỉnh

Mục tiêu: tăng độ "đắt" của Trang chủ mà không thay đổi cấu trúc đã được duyệt. Chỉ chỉnh frontend (`src/routes/index.tsx`, `src/styles.css`, components site đã có) — không đụng tokens, dữ liệu, business logic.

## 1) Scroll reveal (SSR-safe)
Hook `useReveal` đã tồn tại nhưng chưa được dùng. Áp lên các **khối trang trí** (không áp cho heading/paragraph để tránh nhấp nháy SSR):
- Hero collage bên phải (portrait + report-seal + seal) — reveal-up, delay 120ms.
- ClientLogos strip & 3 Emblems — reveal-up so le 80ms.
- VietnamMap SVG — reveal-up; các city stats giữ nguyên.
- ProcessTimeline — reveal-up cả khối, các step con stagger 90ms qua CSS `--i` variable.
- Testimonial dấu ngoặc kép `"` khổng lồ — reveal-up + nhẹ scale 0.92 → 1.
- CTA TafSeal nền — reveal kèm fade từ 0 → 0.07.

Thêm vào `src/styles.css`:
- `.reveal-up-sm` (translateY 10px, 500ms) cho elements nhỏ.
- `.reveal-delay-1/2/3` (100/200/300ms).
- `.stagger > *` dùng `transition-delay: calc(var(--i, 0) * 80ms)`.

## 2) Hero polish
- Heading: thêm class `text-balance` cho h1 + lead paragraph để rớt dòng đẹp ở 707px.
- Italic "đúng": thêm gạch chân vàng vẽ tay (SVG inline mảnh, opacity 0.6) ngay dưới chữ — chỉ desktop.
- Hero CTA "Yêu cầu báo giá": thêm hairline gold bao quanh (ring-1 ring-accent/30) khi hover, shadow brand-red đậm hơn nhẹ.
- Faded numeral `{years}`: tăng từ opacity 0.05 → 0.06, italic giữ; thêm letter-spacing hơi âm cho chắc.
- Collage: thêm rotate `-1.5deg` cho ảnh portrait + `+2deg` cho mini report-seal để cảm giác "đặt lên bàn".

## 3) Stats ledger strip
- Thêm dấu `·` Playfair italic vàng giữa 3 cột (chỉ desktop) để có nhịp editorial.
- Trên hover từng cột: số bật scale 1.02 + underline gold xuất hiện 24px.

## 4) Services dark list
- Số thứ tự `01..06`: hover → đổi từ vàng → đỏ brand + bold weight thay đổi (italic giữ).
- Hairline divider giữa các dòng: từ `divide-white/10` → gradient `via-accent/20` mảnh hơn.
- Thêm cột phụ phía phải số trang nhỏ "Xem chi tiết" hiện ra khi hover (opacity 0 → 0.6, dịch 4px).

## 5) MAP section
- Pulse dots 3 thành phố: thêm halo glow ring nhỏ (box-shadow 0 0 0 6px rgba(red, 0.15)).
- City stats `180+/70+/250+`: dùng `useCountUp` luôn (hiện đang static).
- Thêm `rule-gold` mảnh phía trên heading.

## 6) Process timeline
- Đường nối ngang giữa các step: hairline gold gradient (transparent → gold → transparent) thay vì solid.
- Mỗi chấm step: ring đôi (gold ngoài, đỏ trong) — visual seal mini.
- Số step `01..05` italic Playfair lớn hơn (1.5rem → 2rem).

## 7) Testimonial
- Dấu `"` khổng lồ: thêm `text-shadow: 0 0 60px rgba(gold, 0.3)` tạo glow editorial.
- Carousel dots/arrows: chuyển sang style hairline gold, hover đỏ brand.
- Watermark TafSeal: chậm rãi rotate 360° trong 90s (CSS `animation: spin`).

## 8) FAQ
- Dấu `+`: bọc trong vòng tròn 28px hairline gold; mở → fill đỏ brand, dấu xoay 45° trắng.
- Câu hỏi hover: chữ dịch phải 4px nhẹ.

## 9) CTA cuối
- TafSeal nền: rotate chậm như testimonial (90s) để page có "nhịp thở".
- Thêm dải `rule-gold` phía trên CTA.

## 10) Technical notes
- `useReveal` import từ `@/hooks/use-reveal`. Mỗi block reveal cần `const ref = useReveal()` riêng — wrap bằng helper component `<Reveal>` mới (`src/components/site/Reveal.tsx`) nhận `delay?`, `className?`, `children`.
- TafSeal spin: thêm prop `spin?: boolean` (mặc định false) → áp `animate-[spin_90s_linear_infinite]`.
- `useCountUp` đã có — chỉ cần áp thêm cho 3 city stats.
- Không tạo file mới ngoài `Reveal.tsx`. Không cài thêm package.

## Files
- Tạo: `src/components/site/Reveal.tsx`
- Sửa: `src/routes/index.tsx`, `src/styles.css`, `src/components/site/TafSeal.tsx`, `src/components/site/ProcessTimeline.tsx`, `src/components/site/TestimonialCarousel.tsx`, `src/components/site/VietnamMap.tsx`
