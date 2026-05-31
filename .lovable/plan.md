# Thêm ảnh Hero — Trang Dịch vụ kiểm toán

## 1. Lưu ảnh

- Copy `user-uploads://dich-vu-kiem-toan-bao-cao-tai-chinh-taf.jpg` → `src/assets/dich-vu-kiem-toan-bao-cao-tai-chinh-taf.jpg`.
- Import ES6 trong `src/routes/dich-vu-kiem-toan.tsx`.

## 2. Đặt ảnh vào trang

Chèn **ngay sau Breadcrumb, trước Hero section** dưới dạng full-bleed banner (vì ảnh có sẵn logo TAF + khoảng trắng bên trái → đẹp khi đứng độc lập, không cần lồng vào cụm chữ).

- Container `max-w-6xl` đồng bộ với `Section`, ratio ~16:9 trên desktop, bo nhẹ `rounded-[2px]`, viền `border border-border`, `shadow-[var(--shadow-card)]`.
- `<img>` với:
  - `alt="Dịch vụ kiểm toán báo cáo tài chính chuyên nghiệp của TAF tại Việt Nam"`
  - `title="Dịch vụ kiểm toán báo cáo tài chính - TAF"`
  - `loading="eager"` + `fetchPriority="high"` (hero LCP).
  - `width`/`height` để tránh CLS.
- `<figcaption>` ngay dưới: *"TAF cung cấp dịch vụ kiểm toán báo cáo tài chính cho doanh nghiệp trên toàn quốc."* — typography nhỏ, italic serif, màu `text-muted-foreground`, có gạch vàng mảnh `rule-gold` đứng đầu, canh trái.

## 3. SEO bổ sung

- Thêm `og:image` + `twitter:image` trỏ tới URL absolute của ảnh trong `head()` meta (leaf-only theo `head-meta` rule).
- Cập nhật JSON-LD `Service` thêm field `image` = URL ảnh hero.
- Ảnh trong `src/assets` được Vite hash → dùng URL import trả về để gán meta (build-time URL ổn định).

## 4. Loại bỏ trùng lặp với hero hiện tại

Hero hiện có TafSeal xoay mờ overlay decorative. Khi ảnh banner đặt trên cùng (có logo TAF), giảm opacity TafSeal trong hero xuống `0.04` để tránh trùng motif đỏ.

## Việc KHÔNG làm

- Không sửa các section khác.
- Không tạo component `EditorialImage` mới — dùng `<figure>` inline vì chỉ 1 chỗ.
- Không thay đổi route/URL.

## Kỹ thuật

```
src/assets/dich-vu-kiem-toan-bao-cao-tai-chinh-taf.jpg   (mới)
src/routes/dich-vu-kiem-toan.tsx                          (sửa)
```

Thứ tự render mới trong `AuditServicePage`:
`Breadcrumb → <figure>hero image + caption</figure> → Section Hero (chữ) → ...`
