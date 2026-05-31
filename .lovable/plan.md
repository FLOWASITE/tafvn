## Bổ sung Section Phí kiểm toán vào trang Dịch vụ kiểm toán

### Các thay đổi cần thực hiện

1. **Cập nhật mảng `TOC`**
   - Thêm mục mới `id: "phi-kiem-toan"` vào sau `vi-sao-chon-taf` và trước `faq`.
   - Label: `"Báo giá dịch vụ kiểm toán"`.
   - Viết `desc` ngắn phù hợp SEO (~20–30 từ).

2. **Thêm section JSX mới**
   - Đặt sau `<Section id="vi-sao-chon-taf">` và trước CTA section `"Báo giá dịch vụ"` hiện có.
   - `<Section id="phi-kiem-toan">` với `className="pt-0"` hoặc `bg-cream` tùy flow.
   - Sử dụng pattern `Eyebrow` + `h2` hiện tại: `<Eyebrow>08</Eyebrow>` + `<h2>Báo giá dịch vụ kiểm toán</h2>`.
   - Nội dung 3 đoạn văn theo đúng text người dùng cung cấp, render trong `font-serif text-foreground/85 leading-relaxed` (hoặc grid 12 cột nếu cần cân bằng với sidebar).
   - Giữ nguyên section CTA (dark banner) phía sau để duy trì các nút `"Yêu cầu báo giá"` và `"Hotline / Zalo"`.

3. **JSON-LD / Schema**
   - `ItemList` schema đang ánh xạ từ `TOC.map`, nên chỉ cần mảng `TOC` được cập nhật là schema tự động đúng.
   - Không cần sửa thêm logic JSON-LD.

### Phạm vi
- Chỉ sửa file `src/routes/dich-vu-kiem-toan.tsx`.
- Không thay đổi component, style, hay route khác.