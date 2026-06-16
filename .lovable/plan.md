# Thêm khối "Đánh giá bài viết" cho mọi bài viết

Tham khảo bố cục từ `taf.vn/dich-vu-kiem-toan.html`: khung viền nhẹ, dòng "Tổng số điểm của bài viết là: X trong Y đánh giá", dòng "Xếp hạng: 5 - Y phiếu bầu", 5 ngôi sao đỏ + chữ "Click để đánh giá bài viết", kèm schema `AggregateRating`.

## 1. Component dùng chung

Tạo `src/components/site/article-rating.tsx`:

- Props: `title` (bắt buộc, dùng cho `itemReviewed.name`), `slug` (khoá để lưu vote), `baseVotes` (mặc định auto-sinh từ hash slug, khoảng 240–460), `baseValue` (mặc định 4.8–5.0 → hiển thị 5).
- Hiển thị đúng wording tiếng Việt như ảnh:
  - `Tổng số điểm của bài viết là: {value*count} trong {count} đánh giá`
  - `Xếp hạng: 5 - {count} phiếu bầu`
  - 5 ngôi sao SVG màu đỏ (`text-brand-red` / `#e11d48`) — hover chuyển vàng, click để chọn.
  - Sau khi click: lưu vote vào `localStorage` (`taf:rating:{slug}`), tăng `count +1`, tổng điểm cộng giá trị vừa chọn, đổi câu thành "Cảm ơn bạn đã đánh giá!".
- Render JSON-LD `AggregateRating` (script type=application/ld+json) với `itemReviewed` là `CreativeWork` tên = `title`, `ratingValue=5`, `bestRating=5`, `ratingCount={count}`.
- Style: card `border border-border/60 rounded-lg p-5 mt-12`, font kế thừa, không phá theme tối/sáng. Không dùng màu hardcode ngoài token; ngôi sao dùng `text-red-500`/`fill-red-500` của Tailwind (đã có trong project).

## 2. Áp dụng cho từng route

Thêm `<ArticleRating title="…" slug="…" />` ngay trước phần "Bài viết liên quan" / cuối phần nội dung, ở các route bài viết:

**Dịch vụ (10):**
`dich-vu-ke-toan-tron-goi-tphcm`, `dich-vu-kiem-toan`, `dich-vu-kiem-toan-noi-bo`, `dich-vu-kiem-toan-xay-dung-co-ban`, `dich-vu-chuyen-doi-bao-cao-ifrs`, `dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty`, `dich-vu-ke-toan-thue-cho-ho-kinh-doanh`, `dich-vu-nhan-lam-so-sach-ke-toan`, `dich-vu-quyet-toan-thue-cuoi-nam`, `dich-vu-ra-soat-dac-biet-m-a-due-diligence`, `dich-vu-thanh-lap-doanh-nghiep-tron-goi`, `dich-vu-tu-van-thue`, `tax-accounting-service`.

**Bài viết / tin tức (12):**
`7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam`, `chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don`, `chung-tu-ke-toan-la-gi`, `giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam`, `ho-kinh-doanh-da-ke-khai-thue-quy-i-2026-…`, `ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the`, `kiem-toan-la-gi`, `kiem-toan-nha-nuoc-la-gi-…`, `phan-biet-giua-nguoi-dai-dien-phap-luat-…`, `thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep`, `toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep`.

**Dynamic routes (3):** `dich-vu.$slug.tsx`, `tin-tuc.$slug.tsx`, `dia-ban.$slug.tsx` — `title`/`slug` lấy từ `loaderData`/`params`.

**Không thêm** cho trang hệ thống & trang danh sách: `index`, `gioi-thieu`, `doi-ngu`, `nghiep-vu`, `van-phong`, `tuyen-dung`, `lien-he`, `chinh-sach-bao-mat`, `tin-tuc` (list), `dich-vu`/`dich-vu.index`, `dia-ban` (list).

## 3. SEO

- Mỗi trang có thêm JSON-LD `AggregateRating` riêng (gắn vào CreativeWork cùng tên) → hiện sao trong kết quả Google.
- Không trùng với `aggregateRating` đã gắn trên `Service` ở `dich-vu-ke-toan-tron-goi-tphcm` (vì khác `@type` + khác `itemReviewed`, an toàn cho rich results).

## Ghi chú kỹ thuật

- Số "phiếu bầu" sinh deterministically từ hash slug để SSR và CSR khớp (tránh hydration mismatch).
- Click rating chỉ tăng cục bộ (localStorage), không gọi backend — đúng hành vi tham khảo.
- File mới: 1. Files chỉnh sửa: ~25 routes (chỉ thêm 1 import + 1 dòng JSX).
