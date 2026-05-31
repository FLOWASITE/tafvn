# Trang "Dịch vụ kiểm toán" — `/dich-vu-kiem-toan`

## 1. Định tuyến

- Tạo route mới `src/routes/dich-vu-kiem-toan.tsx` (TanStack flat file → URL `/dich-vu-kiem-toan`, không đuôi `.html`).
- Thêm link điều hướng nội bộ từ Header / Footer / trang `/dich-vu` (card "Kiểm toán BCTC" hiện có) trỏ về URL mới.
- Không xoá route `/dich-vu/$slug` — vẫn dùng cho các dịch vụ khác. Chỉ trang tổng quan "kiểm toán" này tách riêng vì SEO bắt buộc giữ slug cũ.

## 2. SEO & schema

Trong `head()`:

- `title`: `Dịch vụ kiểm toán độc lập tại Việt Nam | TAF`
- `meta description`: chuỗi 155 ký tự đã chuẩn hoá.
- `og:title`, `og:description`, `og:url`, `og:image` (tạm dùng OG mặc định của site, có thể thay sau).
- `canonical`: `/dich-vu-kiem-toan` (leaf-only theo quy ước dự án).
- 3 JSON-LD trong `scripts`:
  - `Service` (provider = TAF, areaServed = VN, serviceType = "Kiểm toán độc lập").
  - `FAQPage` build từ mảng 5 câu hỏi.
  - `BreadcrumbList`: Trang chủ › Dịch vụ › Dịch vụ kiểm toán.
- KHÔNG gắn `AggregateRating`.
- Không set `noindex`.

## 3. Bố cục trang (theo design system hiện có)

Tái sử dụng `Breadcrumb`, `Section`, `SectionHeading`, `Eyebrow`, `Reveal`, `ProcessTimeline` (4 bước thay vì 5 — sẽ tạo biến thể inline thay vì sửa component cũ), `accordion` (shadcn) cho FAQ.

Thứ tự khối:

1. **Breadcrumb** — Trang chủ › Dịch vụ › Dịch vụ kiểm toán.
2. **Hero** — H1 "Dịch vụ kiểm toán" + lead. Layout 12-col: title 8, aside 4 ghi nhanh "Bộ Tài chính cấp phép · KTV hành nghề · Báo giá sau khảo sát".
3. **Định nghĩa** — H2 "Dịch vụ kiểm toán là gì?" + đoạn văn serif.
4. **Vì sao thuê dịch vụ kiểm toán** — grid 2×2 với 4 luận điểm (số 01–04 typography display).
5. **Quy định kiểm toán bắt buộc** — khối ledger nền `bg-cream`/border, trích dẫn 3 văn bản + mức phạt (callout).
6. **Đối tượng bắt buộc kiểm toán** — list 10 mục, grid 2 cột md+ với gạch chỉ số mảnh.
7. **Dịch vụ TAF cung cấp** — 9 mục dạng card/line item gọn (link tới `/dich-vu/$slug` tương ứng nếu tồn tại trong `SERVICES`).
8. **Quy trình 4 giai đoạn** — timeline ngang/dọc giống `ProcessTimeline` (inline 4 bước).
9. **Vì sao chọn TAF** — 7 bullet, layout 2 cột.
10. **Báo giá + CTA** — khối tối giống section "Trao đổi KTV" trong `dich-vu.$slug.tsx`, nút "Yêu cầu báo giá" → `/lien-he`, hiện hotline `0924 580 580`.
11. **FAQ** — `Accordion` 5 câu (đồng bộ với JSON-LD FAQPage).
12. **Liên kết nội bộ liên quan** — 3 link: Kiểm toán BCTC, Kiểm toán nội bộ, Kiểm toán chi phí chung cư (trỏ tới `/dich-vu/<slug>` hiện có hoặc placeholder nếu chưa có slug).

## 4. Nội dung

Dán nguyên văn từ message (đã sạch). Author/E-E-A-T: để placeholder `{Huỳnh Thế Tho KTV hành nghề }` trong một dòng nhỏ dưới H1 ("Phụ trách chuyên môn: Giám đốc kiểm toán") — .

Hotline & NAP: dùng đúng chuẩn `0924 580 580`, `info@taf.vn`, `62A Phạm Ngọc Thạch, P. Xuân Hoà, TP.HCM`.

## 5. Việc KHÔNG làm trong lần này

- Không tạo redirect `.html` (hệ Lovable không serve `.html` cũ; nếu cần redirect sẽ làm sau qua server route).
- Không sửa `SERVICES` trong `src/lib/site.ts` trừ khi cần slug khớp link nội bộ.
- Không động vào trang chủ, dark ledger Services, polaroid — đã ổn ở turn trước.

## Kỹ thuật

- File mới: `src/routes/dich-vu-kiem-toan.tsx` (route name khớp slug có dấu gạch — TanStack chấp nhận, không cần escape).
- Sau khi tạo, `routeTree.gen.ts` tự sinh; không edit tay.
- FAQ data tách thành const để dùng cho cả UI Accordion lẫn JSON-LD (single source of truth).
- Sử dụng token màu hiện có (`bg-cream`, `text-accent-foreground`, `brand-red`…), không hardcode hex.