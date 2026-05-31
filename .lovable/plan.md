## Sửa trang `/dich-vu-kiem-toan` — Cập nhật đối tượng kiểm toán bắt buộc

### Thay đổi nội dung

1. **Tiêu đề Section 03** (dòng 331-332)
   - Đổi từ: `"Quy định về kiểm toán bắt buộc"`
   - Sang: `"Đối tượng kiểm toán bắt buộc"`

2. **Trích dẫn pháp lý** (đoạn `<p>` dòng 340-353)
   - Thay thế toàn bộ đoạn bằng văn bản mới:
     > "Đối tượng kiểm toán bắt buộc được quy định tại Điều 37 Luật Kiểm toán độc lập 2011 (sửa đổi bởi Luật số 56/2024/QH15, hiệu lực 01/01/2025) và hướng dẫn tại Điều 15 Nghị định 17/2012/NĐ-CP (sửa đổi bởi Nghị định 90/2025/NĐ-CP, hiệu lực 14/04/2025)."
   - Định dạng `<strong>` giữ nguyên pattern hiện tại cho tên văn bản.
   - Xoá phần trích dẫn Nghị định 41/2018 và chế tài xử phạt khỏi đoạn này.

3. **Bổ sung đối tượng bắt buộc mới** — Doanh nghiệp quy mô lớn
   - Thêm vào array `SUBJECTS` (sau item hiện tại số 9 hoặc cuối danh sách):
     > "Doanh nghiệp quy mô lớn: thỏa mãn ít nhất 2/3 tiêu chí — trên 200 lao động BHXH bình quân năm; doanh thu năm trên 300 tỷ đồng; tổng tài sản trên 100 tỷ đồng. Xác định theo BCTC năm trước liền kề; nếu 2 năm liên tiếp không đáp ứng thì không còn bắt buộc cho đến khi đáp ứng trở lại."
   - Số thứ tự tự động cập nhật theo `map((s, i) => ...)` hiện có.

4. **(Tùy chọn) Chuyển SUBJECTS sang object array**
   - Nếu item mới quá dài so với các item còn lại, chuyển `SUBJECTS` thành `Array<{title: string, detail?: string}>`.
   - `title` hiển thị như hiện tại; `detail` (nếu có) hiển thị dưới dạng đoạn text nhỏ hoặc blockquote ngay bên dưới title trong cùng `<li>`.

### Không thay đổi
- Section 04 title hiện tại ("Các đối tượng bắt buộc phải kiểm toán") giữ nguyên.
- Các section khác (05-08), FAQ, CTA, hero image, SEO meta giữ nguyên.
- Không thay đổi route, URL, hoặc component structure.

### Kỹ thuật
- Chỉ sửa file `src/routes/dich-vu-kiem-toan.tsx`.
- Không cần thêm dependency mới.
- Không cần thay đổi database, auth, hay backend.