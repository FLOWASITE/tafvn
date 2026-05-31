
TRUNCATE TABLE public.offices;

INSERT INTO public.offices (name, address_line, ward, district, city, phone, email, hours, is_primary, sort_order) VALUES
('VP Hồ Chí Minh', '149 Độc Lập', 'Phường Tân Quý', 'Quận Tân Phú', 'TP. Hồ Chí Minh', '0909 807 850', 'mainx@taf.vn', 'T2–T6: 8:00–17:30', true, 0),
('VP Hà Nội', '21C Xóm Chùa', NULL, 'Quận Hai Bà Trưng', 'TP. Hà Nội', '0981 648 818', 'thonv@taf.vn', 'T2–T6: 8:00–17:30', false, 1),
('VP Nha Trang', '25 Phù Đổng', NULL, NULL, 'TP. Nha Trang, Khánh Hòa', '0908 256 194', 'baonh@taf.vn', 'T2–T6: 8:00–17:30', false, 2),
('VP Đà Nẵng', '814 Trần Cao Vân', NULL, 'Quận Thanh Khê', 'TP. Đà Nẵng', '0903 24 00 15', 'phuongnlm@taf.vn', 'T2–T6: 8:00–17:30', false, 3),
('VP Vĩnh Phúc', '42 Nguyễn Văn Linh', NULL, NULL, 'TP. Vĩnh Yên, Vĩnh Phúc', '0937 575 368', 'thinhdp@taf.vn', 'T2–T6: 8:00–17:30', false, 4);
