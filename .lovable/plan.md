## Mục tiêu
Tinh chỉnh sâu hơn lớp thẩm mỹ editorial cho `/dich-vu-kiem-toan-noi-bo` — không đổi nội dung tiếng Việt, không sửa SEO/head, không thêm thư viện.

## Phạm vi & file
Chỉ sửa `src/routes/dich-vu-kiem-toan-noi-bo.tsx`. Có thể bổ sung 1–2 utility nhỏ (drop-cap, marquee chậm) vào `src/styles.css` qua `@utility` nếu cần.

## Các nâng cấp

1. **Hero — thêm chiều sâu editorial**
   - Background lưới mảnh (subtle dotted/cross-hatch) bằng `bg-[radial-gradient(...)]` rất nhẹ phía sau H1.
   - Thêm meta-strip phía trên Eyebrow: "TAF · Auditing & Advisory · Est. 2010" font mono nhỏ, tracking rộng.
   - Số liệu nhanh dưới CTA: 3 con số (vd. "15+ năm", "300+ khách hàng", "9 tỉnh thành") dạng inline với hairline divider, font display cho số, label uppercase nhỏ. Lấy từ dữ liệu site nếu có; nếu không dùng "—" placeholder số gọn.

2. **Khái niệm — pull-quote editorial**
   - Phóng to dấu nháy mở `“` thành ký tự lớn Playfair (size 7xl) text-accent/30, lệch trái như serif print.
   - Body text in italic Source Serif.

3. **Vai trò — card có numbering + hover lift**
   - Thêm số `i.` (i = 01/02/03) font display italic nhỏ ở góc trên phải mỗi card.
   - Hover: nâng nhẹ `-translate-y-1`, viền chuyển từ gold/20 sang gold/60.
   - Icon đặt trong vòng tròn hairline gold.

4. **Đối tượng — số to editorial**
   - Số `01/02/03` phóng to (font display 4xl), italic, accent-foreground/40, đặt cạnh body.
   - Bỏ shadow card, dùng hairline divider giữa items, viền trái accent dày hơn (border-l-[3px]).

5. **Quy trình — connector line**
   - Trên desktop, thêm đường hairline ngang `bg-accent/30` nối các step (chỉ visible md+).
   - Số `01-04` italic phóng to hơn (text-5xl), thêm dấu chấm sau số kiểu "01."
   - Heading bước có underline accent ngắn khi hover.

6. **Quyền hạn — hai cột prose**
   - Trên lg, list chia 2 cột (`lg:columns-2 lg:gap-10`), giữ icon key.

7. **Thực trạng — drop-cap**
   - Đoạn đầu có drop-cap (chữ "D" lớn Playfair, float-left, 3 dòng). Thêm utility `.drop-cap` vào styles.css.
   - Container max-w mở rộng và canh giữa.

8. **Cam kết — pull-quote sâu hơn**
   - Thêm dấu `“ ”` Playfair lớn ở 2 góc.
   - Border-l đổi thành thanh đôi (border-l-4 brand-red + ::before hairline gold cách 4px) bằng `shadow-[inset_8px_0_0_var(--accent)/0]` hoặc dùng pseudo. Đơn giản hơn: dùng 2 div lồng.

9. **Dịch vụ liên quan — eyebrow số + nhịp**
   - Mỗi card có eyebrow nhỏ "Dịch vụ 01/02/03" phía trên tiêu đề.
   - Card có chiều cao đồng nhất, ArrowRight đẩy xa hơn khi hover.

10. **FAQ — giữ nguyên** (đã chuẩn ở turn trước).

11. **CTA cuối — thêm grain/noise và trang trí**
    - Nền dark + lớp grain rất mảnh qua `bg-[radial-gradient(...)]` opacity thấp.
    - Thêm số seal đậm chất editorial: "TAF · 0924 580 580" font mono dọc bên phải hoặc watermark Playfair lớn "TAF" mờ ở góc.
    - Button "Yêu cầu tư vấn" có dấu chấm đỏ pulse subtle bên trái.

12. **Vi-animation toàn trang**
   - Thêm class `.fade-in-up` (đã có hoặc thêm mới) cho heading mỗi section: opacity 0 → 1 + translate-y nhẹ khi vào viewport, dùng `@starting-style` thuần CSS hoặc giữ tĩnh nếu phức tạp. **Tuỳ chọn — sẽ skip nếu không có cơ chế observer sẵn** để tránh phụ thuộc JS.

## Token & utility
- Dùng tokens hiện có: `--brand-red`, `--brand-red-ink`, `--accent` (gold), `--foreground`, `--background`, `--cream`, `--muted-foreground`.
- Bổ sung vào `src/styles.css` (chỉ thêm, không sửa cũ):
  - `@utility drop-cap { &::first-letter { float: left; font-family: var(--font-display); font-size: 4.5rem; line-height: 0.85; padding: 0.25rem 0.75rem 0 0; color: var(--color-brand-red); } }`
  - `@utility noise-overlay { ... }` nhẹ (data-uri SVG noise, opacity 4%).

## Giữ nguyên
- Toàn bộ copy tiếng Việt, head/SEO, Breadcrumb, SectionHeading, các route/link.
- Cấu trúc section và thứ tự.
- Không thêm package.

## Không bao gồm
- Không tạo component mới ngoài route file.
- Không refactor SectionHeading/Section.
- Không thêm JS animation library (framer-motion v.v.).
