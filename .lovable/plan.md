# Thay bản đồ Việt Nam — section "Mạng lưới phục vụ"

## Mục tiêu
Thay outline VN cách điệu hiện tại (S-curve abstract trong `src/components/site/VietnamMap.tsx`) bằng inline SVG geo-chính xác user vừa cung cấp (viewBox 560×648, có Hoàng Sa / Trường Sa, 4 thành phố lớn + 14 marker tỉnh phụ, dot pattern bên trong, halo + animate-ping cho Hà Nội & TP.HCM).

## Phạm vi (chỉ frontend, không đụng data/tokens)

### 1) Viết lại `src/components/site/VietnamMap.tsx`
- Thay toàn bộ nội dung component bằng SVG mới (viewBox `0 0 560 648`).
- Giữ nguyên signature: `export function VietnamMap({ className = "" }: { className?: string })` để `src/routes/index.tsx` không cần đổi import.
- Inline đầy đủ `<defs>` (pattern `d`, radialGradient `g`/`gh`, clipPath `vn`).
- Chuyển màu hard-code sang design tokens để đồng bộ chế độ sáng/tối + brand:
  - `rgba(176,198,224,…)` (xanh nhạt outline + pattern) → `var(--color-accent)` với opacity.
  - `#E6B450` / `#F4CD6B` (vàng halo) → giữ vì khớp `--color-accent` gold trong styles, nhưng map qua `var(--color-accent)` để khi đổi theme vẫn đồng bộ.
  - `#EAE4D6` (text nhãn) → `var(--color-foreground)`.
  - Halo đỏ brand cho Hà Nội & TP.HCM (major dots) đổi từ vàng sang `var(--color-brand-red)` để khớp pattern "major = brand red" hiện tại (Đà Nẵng/Nha Trang/Cần Thơ vẫn gold).
- Font nhãn: thêm `fontFamily: var(--font-display)` + `fontStyle: italic` cho Hoàng Sa/Trường Sa; nhãn thành phố dùng sans hiện tại.
- `animate-ping` ring đỏ (style hiện tại) thay cho `<animate>` element của Hà Nội/TP.HCM — đồng bộ với UX cũ và tránh SMIL trên Safari.

### 2) Cập nhật wrapper trong `src/routes/index.tsx` (section MAP)
- Tỉ lệ mới cao hơn (560×648 vs 320×600) → kiểm tra cột chứa map. Hiện wrapper là `Reveal` + grid; chỉ chỉnh `max-w` / `aspect-ratio` nếu map quá cao ở 707px viewport. Đề xuất: `max-w-[420px] mx-auto` desktop, `max-w-[320px]` mobile, giữ `w-full h-auto`.
- City stats (180+/70+/250+) bên cạnh map giữ nguyên — chỉ map hiển thị bị thay.

### 3) Không cần
- Không sửa `useReveal`, `useCountUp`, `styles.css`.
- Không thêm package.
- Không đụng routes khác.

## Files
- Rewrite: `src/components/site/VietnamMap.tsx`
- Tinh chỉnh nhỏ: `src/routes/index.tsx` (chỉ wrapper container map nếu cần)

## Lưu ý kỹ thuật
- ID trong `<defs>` (`d`, `g`, `gh`, `vn`) là global trong document — nếu component render >1 lần sẽ xung đột. Prefix bằng `vnmap-` (vd `vnmap-dots`, `vnmap-clip`) để an toàn.
- Path data dài (~10KB) — chấp nhận, vẫn nhẹ hơn raster.
- `clipPath` áp dot pattern chỉ trong lãnh thổ — giữ.
- Accessibility: thêm `role="img"` + `<title>` "Bản đồ Việt Nam — mạng lưới TAF".
