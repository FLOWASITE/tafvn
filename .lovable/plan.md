# Nâng cấp Hero — Editorial broadsheet

Áp dụng prototype anh đã chọn vào hero `src/routes/index.tsx`. Giữ tokens hiện có (navy + cream + gold + đỏ TAF), không đổi font, không đụng business logic, không thay section khác.

## Cấu trúc mới

```text
• KIỂM TOÁN ĐỘC LẬP · TƯ VẤN THUẾ · KẾ TOÁN

│ Báo cáo *kiểm toán*              ── (hairline vàng 48px)
│ đúng chuẩn mực,                  20+        500+
│ đúng *thời hạn.*                 NĂM        KHÁCH HÀNG DN
│                                  ─────────────────────
│ TAF là hãng kiểm toán...         60+  TỈNH / THÀNH
│
[ YÊU CẦU BÁO GIÁ → ] [ KHÁM PHÁ DỊCH VỤ ]
                                              23  ← watermark đỏ
─────────────────────────────────────────────────  (navy hairline)
```

## Điểm chính lấy từ prototype

- **Italic accent**: "kiểm toán" + "thời hạn" in nghiêng Playfair vàng — tăng chất editorial.
- **Hairline vàng dọc** bên trái block headline + paragraph (`border-l border-accent/40 pl-8`).
- **Watermark "23"** đỏ TAF (5% opacity, ~28vw) đặt giữa-phải, không italic, kéo lớn hơn hiện tại.
- **Stats restructure**: từ cột dọc → grid 2 cột (20+ | 500+) + dòng full-width (60+ tỉnh thành) có hairline xám ngăn cách; hairline vàng 48px phía trên.
- **CTA chính**: dùng `justify-between` để mũi tên dạt phải (như prospectus), full-width trên mobile + flex-1 trên desktop. CTA phụ cùng padding `py-4`.
- **Navy hairline 1px** ở đáy section thay viền border-b — visual anchor như mép báo.
- **Bỏ corner mark** đỏ ở góc trên-phải (trùng vai trò với watermark 23).
- **Đổi background hero sang `bg-cream`** để khớp tinh thần "giấy bond" của prototype.

## Responsive

- **Mobile**: 1 cột, headline → paragraph → CTA stack dọc → stats grid 2 cột.
- **Desktop (lg)**: 7/5 split — trái headline+CTA, phải khối stats lệch xuống (`pt-16`) tạo nhịp lệch tầng.

## File chỉnh sửa

- **`src/routes/index.tsx`** — chỉ block `<section>` HERO (dòng ~33–106). Các section USP/Services/Testimonial/FAQ/CTA cuối giữ nguyên.

## Ngoài phạm vi

- Không đổi `styles.css`, Header, Footer.
- Không đổi nội dung text (chỉ thêm italic span trong headline).
- Không thêm animation lib mới (giữ CSS transitions hiện có).
