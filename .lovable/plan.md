## Mục tiêu

Trang chủ hiện dùng palette navy + gold cream, logo đỏ TAF đứng đơn độc ở header/footer trông "lạc tông". Kế hoạch này đưa sắc đỏ TAF (`--brand-red`) vào hệ thống thị giác như một accent thứ hai — có chủ đích, tiết chế, không phá vỡ tinh thần editorial luxury đã thiết lập.

## Nguyên tắc

- **Vàng (gold) vẫn là accent chính** cho số hiệu, italic nhấn, hairline. Đỏ là accent phụ, chỉ xuất hiện ở các điểm "hành động" và "dấu ấn thương hiệu".
- **Tỷ lệ ~80/15/5**: navy + cream nền 80%, gold accent 15%, đỏ TAF 5%.
- Đỏ không dùng cho khối lớn, không gradient sến — chỉ hairline, underline, dot, icon, hover state, và CTA chính.

## Các thay đổi cụ thể

### 1. Design tokens (`src/styles.css`)
- Thêm `--brand-red-soft` (đỏ pha cream cho hover/bg nhẹ) và `--brand-red-ink` (đỏ đậm cho text trên cream).
- Thêm utility `.rule-red` (hairline đỏ) song song với `.rule-gold` đã có.
- Giữ nguyên `--primary` (navy) — không đổi semantic token.

### 2. Header (`src/components/site/Header.tsx`)
- CTA "Yêu cầu báo giá" đổi từ viền vàng sang **viền đỏ TAF + hover fill đỏ + chữ trắng** → ăn nhập với logo đỏ ngay cạnh.
- Active nav link: thêm underline đỏ 2px dưới chữ thay vì chỉ bold.

### 3. Hero (`src/routes/index.tsx`)
- Eyebrow "Kiểm toán độc lập · Tư vấn thuế · Kế toán": thêm **dot đỏ** ở đầu (giống ấn phẩm tài chính).
- Số `23` faded background: giữ italic nhưng đổi sang **đỏ TAF 5% opacity** thay vì gold 7% → cộng hưởng với logo.
- CTA chính "Yêu cầu báo giá": đổi nền từ navy `--primary` sang **đỏ `--brand-red`** với hover sang đỏ đậm. Mũi tên giữ trắng. Đây là CTA quan trọng nhất — cần là điểm nóng nhất trang.
- Hairline mark góc phải đổi sang đỏ.

### 4. USP section
- Border-left của 4 thẻ: đổi từ `border-accent/40` (vàng) sang **xen kẽ vàng/đỏ** (1,3 vàng — 2,4 đỏ) tạo nhịp.
- Icon lucide: thẻ 1,3 giữ gold; thẻ 2,4 chuyển **đỏ TAF** → cân bằng hai accent.

### 5. Services dark ledger
- Số `01–06` italic: giữ vàng (đỏ trên navy sẽ rung mắt).
- Mũi tên `ArrowUpRight` ở mỗi dòng: chuyển sang **đỏ sáng** khi hover (hiện đang vàng nhạt).
- Thêm **dot đỏ 6px** trước eyebrow "Dịch vụ chính" để thống nhất hệ ngôn ngữ với hero.

### 6. Testimonial
- Dấu `"` khổng lồ: giữ vàng (đặc trưng editorial).
- Hairline trước attribution `h-px w-8`: đổi sang **đỏ TAF** → tín hiệu xác thực, mạnh hơn.

### 7. FAQ
- Icon `+` xoay 45°: chuyển từ `accent-foreground` sang **đỏ TAF** → khi user mở câu hỏi thấy đỏ → cảm giác "kích hoạt".
- Số `01–05` italic: giữ vàng.

### 8. CTA cuối trang
- Khối CTA hiện chỉ có nút navy → đổi sang **nút đỏ TAF** đồng bộ với hero CTA → khép vòng thị giác (mở đầu đỏ, kết đỏ).
- Dòng italic "bạn có thể tin cậy?" giữ vàng.

### 9. Footer (`src/components/site/Footer.tsx`)
- Hover state của social icons: chuyển sang **đỏ TAF** (hiện đang foreground trắng).
- Hairline phân cách giữ nguyên.

## Kết quả mong đợi

- Logo đỏ ở header không còn "lạc loài" — sắc đỏ được nhắc lại nhịp nhàng xuống các CTA, hairline xác thực, hover state.
- Vàng vẫn dẫn dắt typography và số hiệu (editorial DNA), đỏ đóng vai trò "call to action + dấu triện thương hiệu".
- CTA chính nổi bật rõ ràng hơn (đỏ > navy về độ thu hút mắt) → tăng conversion tiềm năng.
- Không thêm component mới, không đụng route/business logic — thuần presentation.

## File sẽ chỉnh sửa

- `src/styles.css` (thêm 2 token đỏ + utility)
- `src/components/site/Header.tsx` (CTA + active link)
- `src/components/site/Footer.tsx` (hover social)
- `src/routes/index.tsx` (hero, USP, services, testimonial, FAQ, CTA cuối)
