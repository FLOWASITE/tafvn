
# Kế hoạch nâng cấp thẩm mỹ Trang chủ TAF (sử dụng 4 ảnh thật)

Anh đã cung cấp 4 ảnh thương hiệu TAF chất lượng cao — đây là chất liệu chính để giải quyết "lỗ hổng lớn nhất: thiếu ảnh". Bốn ảnh sẽ được copy vào `src/assets/` và dùng trực tiếp (giữ màu gốc — ảnh đã có vibe navy/đỏ TAF, không cần ép duotone gắt làm mất chi tiết logo đỏ và con dấu đỏ thật).

- `taf-portrait.jpg` — KTV nữ đọc báo cáo (cho Hero)
- `taf-meeting.jpg` — phòng họp 4 người với "Audit Plan Overview" (cho section Quy trình hoặc About strip)
- `taf-report-seal.jpg` — chồng Audit Report + con dấu đỏ TAF (cho section Services/CTA — vũ khí lớn nhất)
- `taf-handshake.jpg` — bắt tay tại lễ tân (cho Testimonial hoặc CTA cuối)

Xử lý ảnh: chỉ thêm overlay tinh tế (gradient navy-to-transparent + viền hairline gold + slight grain) thay vì duotone cứng, để giữ nguyên logo đỏ TAF trong ảnh — biến chính ảnh thành "chữ ký thương hiệu" mạnh nhất.

---

## Ưu tiên 1 — Hình ảnh & chất liệu

**1.1 Component `<EditorialImage />`** (`src/components/site/EditorialImage.tsx`)
- Wrapper: `<figure>` với `<img>` + overlay layer:
  - `::after` gradient từ navy 25% → transparent (đáy → đỉnh) tạo cảm giác "in trên giấy"
  - Hairline gold 1px viền (chỉ top + left) như ảnh báo
  - Optional caption italic Playfair nhỏ phía dưới ảnh
- Props: `src`, `alt`, `caption?`, `aspect` (`portrait` / `landscape` / `square`), `accent` (`gold` / `red`).

**1.2 Texture giấy `.paper-grain`** trong `src/styles.css`
- SVG noise base64 nhẹ, `opacity: 0.04`, áp vào `body::before` fixed full-viewport.
- Ledger grid hiện tại tăng từ opacity `0.03` → `0.045` và mở rộng ra USP + FAQ sections.

**1.3 Hero restructure (cột phải có ảnh)**
- Grid Hero: `lg:grid-cols-12` chia `7/5`.
- **Cột trái (7):** giữ Eyebrow + Headline italic + paragraph + CTA (đã đẹp).
- **Cột phải (5):** collage 2 ảnh xếp lệch:
  - Ảnh chính: `taf-portrait.jpg` (lớn, ratio 4/5)
  - Ảnh phụ: `taf-report-seal.jpg` cắt vuông nhỏ, đè lên góc dưới-trái ảnh chính ~35%, có border cream dày 8px
  - Caption italic dưới ảnh chính: "Tại văn phòng TAF — kiểm tra Báo cáo Tài chính khách hàng FDI."
- **Stats ledger** di chuyển xuống thành **strip ngang full-width** dưới hero, có `.rule-gold` trên/dưới — không còn nằm cột phải.

---

## Ưu tiên 2 — Visual hoá phần đang là text

**2.1 Dải logo khách hàng + emblems chứng nhận** (section mới, ngay dưới Hero, nền cream nhạt)
- 2 hàng: hàng trên là 6 wordmark khách hàng greyscale (Đèo Cả, Nguyễn Hoàng, ILA, Vinamilk, Coteccons, Hòa Phát — render bằng `<span>` font-display, hover → màu thật, dễ thay bằng SVG thật sau).
- Hàng dưới là 3 emblems "Đăng ký hành nghề Bộ Tài chính / Thành viên VACPA / Chuẩn mực VSA & IFRS" — viền hairline gold đôi.

**2.2 Bản đồ Việt Nam SVG cách điệu** (section mới, sau USP)
- Component `<VietnamMap />` (`src/components/site/VietnamMap.tsx`): outline VN stylized + ~30 chấm đại diện 60 tỉnh, 3 chấm lớn pulse đỏ ở Hà Nội/Đà Nẵng/TP.HCM, hairline gold nối.
- Layout 2 cột: trái map, phải eyebrow + heading "60 tỉnh thành. Một chuẩn mực." + 3 cụm tỉnh tiêu biểu.

**2.3 Timeline quy trình 5 bước** (section mới, trước Testimonial)
- 5 bước: Khảo sát → Lập kế hoạch → Kiểm toán hiện trường → Soát xét → Phát hành báo cáo.
- Desktop: ngang, 5 cột nối bằng `.rule-gold` có chấm đỏ; mobile: dọc với đường nối bên trái.
- Bên cạnh timeline (trên desktop): ảnh `taf-meeting.jpg` qua `<EditorialImage />` để minh hoạ "kiểm toán hiện trường".

---

## Ưu tiên 3 — Depth thay khối phẳng

- **Navy Services section**: thêm radial gradient ở góc trên-trái (`bg-[radial-gradient(circle_at_top_left,...primary-glow...,transparent_60%)]`), watermark số "01–06" lớn hơn (9rem) và đẩy opacity 0.04.
- **USP cards**: thêm `shadow-card` (đã có trong tokens), nền cream-tint trên nền cream.
- **Testimonial bg ảnh mờ**: dùng `taf-handshake.jpg` blur 8px + overlay navy 88% làm nền section testimonial, tạo chiều sâu thay vì nền background phẳng. Text vẫn đọc tốt do overlay đặc.
- **Hairline gold** thay border xám ở: divider FAQ, top/bottom của stat strip, đầu mỗi section quan trọng.

---

## Ưu tiên 4 — Micro-interactions tiết chế

- **Stat counter**: hook `useCountUp(target, duration)` (`src/hooks/use-count-up.ts`) dùng IntersectionObserver, đếm 0 → target khi vào viewport. Áp cho 20+/500+/60+.
- **Service rows hover**: thêm gạch chân vàng "vẽ" ra dưới tiêu đề (pseudo `::after` scaleX 0→1), mũi tên đã có translate giữ nguyên.
- **Testimonial → carousel**: dùng shadcn `carousel`, 3 quote, dấu `"` vàng khổng lồ cố định.
- **FAQ**: convert `<details>` → shadcn `Accordion` cho animation height mượt.
- **Reveal on scroll**: hook `useReveal()` IntersectionObserver, áp cho decorative (ảnh, map dots, timeline, logo strip) — KHÔNG áp text chính (SSR-safe).

---

## Ưu tiên 5 — Chữ ký thương hiệu

**5.1 Component `<TafSeal />`** (`src/components/site/TafSeal.tsx`)
- SVG vòng tròn đôi đỏ TAF + chữ "TAF · AUDIT · TAX · ADVISORY · FINANCE · EST. 2002" xoay quanh viền (`<textPath>` quanh circle), giữa là "T" italic Playfair đỏ.
- Dùng ở: góc collage Hero (nổi 80px), cuối CTA section như "đóng dấu" (120px, opacity 0.15), watermark mờ trong Testimonial.

**5.2 Emblems** — đã gộp vào 2.1.

---

## Files thay đổi

**Copy vào `src/assets/`:**
- `taf-portrait.jpg`, `taf-meeting.jpg`, `taf-report-seal.jpg`, `taf-handshake.jpg` (từ user-uploads)

**Tạo mới:**
- `src/components/site/EditorialImage.tsx`
- `src/components/site/VietnamMap.tsx`
- `src/components/site/TafSeal.tsx`
- `src/components/site/Emblem.tsx`
- `src/components/site/ClientLogos.tsx`
- `src/components/site/ProcessTimeline.tsx`
- `src/components/site/TestimonialCarousel.tsx`
- `src/hooks/use-count-up.ts`
- `src/hooks/use-reveal.ts`

**Sửa:**
- `src/routes/index.tsx` — restructure Hero (7/5 + collage ảnh + seal), thêm 3 section mới (ClientLogos + Emblems strip, VietnamMap, ProcessTimeline), Testimonial bg ảnh handshake + carousel, FAQ accordion.
- `src/styles.css` — `.paper-grain`, gradient radial cho navy section, tăng opacity grid.

**Không đụng:** tokens màu, font, business logic, server functions, các route khác.

---

## Thứ tự thi công

1. Copy 4 ảnh user-uploads → `src/assets/`.
2. Tạo `EditorialImage`, `TafSeal`, `Emblem`, `ClientLogos` + utility CSS (paper-grain, gradient).
3. Restructure Hero (cột phải collage 2 ảnh + seal floating, stats strip ngang dưới hero).
4. Thêm section ClientLogos + Emblems strip ngay dưới Hero.
5. Tạo `VietnamMap` + section sau USP.
6. Tạo `ProcessTimeline` + ảnh meeting bên cạnh, đặt trước Testimonial.
7. Testimonial: bg ảnh handshake blur + carousel + seal watermark.
8. FAQ → shadcn Accordion.
9. Hooks `useCountUp` + `useReveal`, áp dụng.
10. Polish: radial gradient navy section, hairline gold thay border xám, kiểm tra responsive 707px.

**Kết quả mong đợi:** Trang chủ có ảnh thương hiệu thật của TAF (4 ảnh chất lượng cao mà anh upload) đóng vai trò chính, bản đồ VN trực quan, logo khách hàng + emblems uy tín, timeline quy trình, depth qua gradient + overlay ảnh blur, micro-interaction tiết chế. Đồng nhất logo đỏ + bảng màu navy/cream/gold.
