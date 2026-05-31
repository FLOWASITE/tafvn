Gộp Section "Báo giá dịch vụ kiểm toán" (`id="phi-kiem-toan"`) và CTA section độc lập phía sau thành một section duy nhất.

## Thay đổi

1. **Giữ `<Section id="phi-kiem-toan">`** làm vỏ ngoài.
2. **Bên trong section gộp:**
   - **Phần nội dung (trên):** Giữ nguyên layout grid 12 cột với Eyebrow `08`, tiêu đề, và 3 đoạn văn hiện tại.
   - **Phần CTA (dưới):** Chuyển 2 nút "Yêu cầu báo giá" và "Hotline / Zalo" từ CTA section độc lập xuống dưới nội dung, trong cùng section. Style CTA bằng card có border + background nhạt (`bg-cream/60 border border-border`) thay vì full dark banner, để đồng nhất với các section khác trên trang.
3. **Xóa** CTA section độc lập (`bg-foreground text-background`) hiện tại.
4. **TOC:** Không thay đổi — vẫn giữ 1 mục `phi-kiem-toan` duy nhất.

## Kết quả mong đợi
- Chỉ còn 1 section duy nhất cho "Báo giá dịch vụ kiểm toán", bao gồm cả nội dung lẫn nút kêu gọi hành động.
- CTA không còn là section riêng biệt, tránh trùng lặp chủ đề "báo giá" trên trang.