
# Hoàn thiện Hero Trang chủ

Mục tiêu: xóa cảm giác "gần đẹp nhưng chưa gọn" — xử lý 7 điểm lộ theo thứ tự ưu tiên.

## 1. Lớp chồng ảnh kiểu polaroid (`src/routes/index.tsx` + `EditorialImage.tsx`)

- Ảnh nhỏ (`reportSealImg`) bọc trong khung **viền kem dày** (`p-2 bg-cream`) + **shadow rõ** (`shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)]`), thay `ring-8 ring-background` hiện tại.
- Lùi vào trong: đổi `-bottom-6 -left-6` → `-bottom-8 left-2 sm:left-4`, giảm width `w-2/5` → `w-[44%]`, giữ `rotate(3deg)` để có cảm giác đặt tay.
- Ảnh nhỏ KHÔNG còn cắt mép phải ảnh lớn.

## 2. Sửa caption bị cắt (`EditorialImage.tsx` + index)

- Rút caption ảnh portrait: `"Tại văn phòng TAF — kiểm tra Báo cáo Tài chính khách hàng FDI."` → `"— Kiểm tra BCTC tại doanh nghiệp khách hàng."`
- Trong `EditorialImage`, đảm bảo caption `block w-full` và `pr-2` để không tràn; bỏ `whitespace-nowrap` nếu có.

## 3. Đệm phải + bo góc ảnh lớn

- Wrapper cột phải: thêm `pr-2 md:pr-4` để ảnh không chạm rìa container.
- `EditorialImage` (variant portrait dùng ở hero): thêm `rounded-[3px] overflow-hidden` và shadow mềm `shadow-[0_24px_60px_-24px_rgba(20,20,20,0.45)]`.

## 4. Con dấu "đóng" lên ảnh (`TafSeal.tsx` + index)

- Di chuyển seal từ `-top-6 -left-4` (lửng góc trên-trái) → đặt **đè lên góc trên-phải của ảnh lớn**: `absolute top-4 right-4 md:top-6 md:right-6`.
- Thêm `rotate(-12deg)` cố định (bỏ `spin` ở hero — spin giữ lại cho watermark CTA).
- Trong `TafSeal.tsx`: tăng `font-weight` của text vòng cung từ 500 → 600, tăng `letterSpacing` để chữ rõ hơn; tăng độ đậm viền dấu đỏ (stroke từ 1.5 → 2).

## 5. Cân hai cột

- Grid hero: thêm `items-center` (đã có) nhưng cụm ảnh `<Reveal>` thêm `self-center` + wrapper `my-auto`. Hoặc thêm `pt-6 md:pt-10` cho cột ảnh để đẩy xuống canh giữa với khối chữ + CTA.

## 6. Chốt số năm = 15+

- `src/lib/site.ts`: đổi `established` để `new Date().getFullYear() - established === 15` (đặt `established: 2010` nếu hiện là 2002).
- `Stat` đầu tiên: đổi `value={20}` → `value={15}` để khớp "Hơn 15 năm" trong body.
- Kiểm tra các trang khác (`gioi-thieu.tsx`, footer) có dùng `years` / "20+" / "23" không — đồng bộ về 15.

## 7. Bỏ watermark "?" góc phải dưới

- Trong hero `<section>`: phần `pointer-events-none absolute right-[-3rem] bottom-[-4rem] font-display italic text-brand-red/[0.05] ... > {years}` — số `15` font Cormorant có thể đang render như dấu hỏi mờ ở viewport hẹp.
- Thay bằng **watermark seal/initial "TAF"** mờ: dùng `<TafSeal size={420} opacity={0.05} />` đặt `absolute -right-24 -bottom-24 hidden lg:block pointer-events-none`. Bỏ hẳn số nền.

## 8. Gạch vàng dưới "đúng" — mảnh + chỉ 1 chữ

- `src/styles.css` `.italic-mark`: giảm `height` gạch từ ~6-8px → **2px**, dùng `background: linear-gradient(90deg, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent)` để có cảm giác nét cọ tự nhiên, hơi nghiêng (`transform: skewX(-8deg)`), `bottom: -2px`.
- Trong JSX: bỏ class `italic-mark` ở chữ "đúng" **dòng 1**, chỉ giữ ở "đúng" **dòng 2** để nhấn có chủ đích.

---

## Files sẽ sửa

- `src/routes/index.tsx` — toàn bộ block hero (ảnh, seal, caption, watermark, số 15)
- `src/components/site/EditorialImage.tsx` — rounded + shadow + caption không tràn
- `src/components/site/TafSeal.tsx` — chữ vòng cung rõ hơn, prop `rotate`
- `src/styles.css` — `.italic-mark` mảnh + skew
- `src/lib/site.ts` — `established` để years = 15

## Không thay đổi

- Stats strip, USP, Map, Services, Process, Testimonial, FAQ, CTA — giữ nguyên.
- Hệ design token, fonts, palette — giữ nguyên.
