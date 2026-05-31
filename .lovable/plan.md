## Mục tiêu

Tăng tính thẩm mỹ cho `src/components/site/Footer.tsx` theo hướng đã chọn (Professional navy minimalist), giữ nguyên cấu trúc nội dung và navy/gold hiện có, chỉ tinh chỉnh hierarchy, spacing, micro-interaction.

## Thay đổi

1. **Layout grid 12 cột**: chuyển sang `md:grid-cols-12` với 4/2/3/3 (logo-mô-tả / điều hướng / dịch vụ / liên hệ) — chính xác như prototype. Tăng padding `py-16` và khoảng cách `gap-12`.

2. **Section headers**: nhãn nhỏ uppercase `text-xs font-bold tracking-widest text-accent` (gold), bỏ background, làm typography là điểm nhấn duy nhất.

3. **Cột Liên hệ**: tách rõ 3 khối — "Trụ sở chính" (in đậm trắng + địa chỉ xám), ĐT/Email (label xám + giá trị hover trắng), giờ làm việc (italic xám nhỏ).

4. **Social icons**: bỏ container, để icon nguyên gốc `w-5 h-5`, hover chuyển sang `text-accent` (gold thay vì brand-red) — đồng bộ với phần còn lại.

5. **Bottom bar**: bỏ nền tách riêng, dùng `pt-8 border-t border-white/5` trong cùng container, text `text-[11px] uppercase tracking-wider`, link có underline mờ `decoration-white/10 underline-offset-4`.

6. **Hover trên link điều hướng/dịch vụ**: chuyển sang `hover:text-white` (sáng lên) thay vì `hover:text-accent`, tạo cảm giác chắc chắn hơn.

## Phạm vi

- Chỉ chỉnh `src/components/site/Footer.tsx`.
- Dùng token có sẵn (`text-primary-foreground`, `text-accent`, `border-primary-foreground/...`), không thêm màu mới vào `styles.css`.
- Giữ nguyên toàn bộ link, dữ liệu, structure dữ liệu, và Logo component.
