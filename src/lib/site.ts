// Cấu hình tĩnh cho website TAF — single source of truth cho nav, dịch vụ, tỉnh.

export const SITE = {
  name: "TAF",
  legalName: "Công ty TNHH Tư vấn Kiểm toán TAF",
  tagline: "Kiểm toán độc lập — minh bạch, đúng chuẩn mực, đúng thời hạn",
  description:
    "TAF là hãng kiểm toán độc lập tại Việt Nam, cung cấp dịch vụ kiểm toán báo cáo tài chính, tư vấn thuế, kế toán và soát xét tuân thủ cho doanh nghiệp trong nước và FDI.",
  established: 2011,
  // Đặt rỗng vì chưa có domain custom; canonical/og:url dùng path tương đối.
  url: "",
};

export const NAV: { label: string; to: string }[] = [
  { label: "Dịch vụ", to: "/dich-vu" },
  { label: "Địa bàn", to: "/dia-ban" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Đội ngũ", to: "/doi-ngu" },
  { label: "Tin tức", to: "/tin-tuc" },
  { label: "Liên hệ", to: "/lien-he" },
];

export const SERVICES: {
  slug: string;
  path?: string;
  title: string;
  summary: string;
  points: string[];
}[] = [
  {
    slug: "thanh-lap-doanh-nghiep",
    path: "/dich-vu-thanh-lap-doanh-nghiep-tron-goi",
    title: "Thành lập doanh nghiệp trọn gói",
    summary:
      "Dịch vụ đăng ký thành lập doanh nghiệp trọn gói tại Việt Nam: soạn hồ sơ, nộp đăng ký, khắc dấu, đăng ký thuế, mở tài khoản ngân hàng trong 3–5 ngày.",
    points: [
      "Trọn gói từ hồ sơ đến giấy phép kinh doanh, khắc dấu và đăng ký mã số thuế",
      "Hỗ trợ tất cả loại hình: TNHH, cổ phần, doanh nghiệp tư nhân",
    ],
  },
  {
    slug: "kiem-toan-bao-cao-tai-chinh",
    title: "Kiểm toán báo cáo tài chính",
    summary:
      "Kiểm toán độc lập BCTC năm theo Chuẩn mực Kiểm toán Việt Nam (VSA), phục vụ công bố thông tin, vay vốn và yêu cầu của cơ quan quản lý.",
    points: [
      "Phù hợp với doanh nghiệp FDI, công ty đại chúng, doanh nghiệp có vốn nhà nước",
      "Báo cáo phát hành đúng hạn nộp BCTC theo Luật Kế toán",
      "Hỗ trợ song ngữ Việt — Anh cho công ty mẹ ở nước ngoài",
    ],
  },
  {
    slug: "kiem-toan-quyet-toan-du-an",
    title: "Kiểm toán quyết toán dự án hoàn thành",
    summary:
      "Kiểm toán quyết toán vốn đầu tư dự án xây dựng cơ bản hoàn thành, dùng cho phê duyệt quyết toán theo Nghị định 99/2021/NĐ-CP.",
    points: [
      "Áp dụng cho dự án ngân sách nhà nước, vốn doanh nghiệp, ODA",
      "Phối hợp với chủ đầu tư, ban QLDA và nhà thầu để đẩy nhanh quyết toán",
      "Hồ sơ chuẩn bị đầy đủ cho cơ quan thẩm tra",
    ],
  },
  {
    slug: "tu-van-thue",
    title: "Tư vấn thuế",
    summary:
      "Soát xét tuân thủ thuế, lập kế hoạch thuế, hỗ trợ trong các đợt thanh tra, kiểm tra thuế của cơ quan thuế.",
    points: [
      "Thuế GTGT, TNDN, TNCN, nhà thầu nước ngoài",
      "Tư vấn ưu đãi thuế cho doanh nghiệp FDI, dự án đầu tư mới",
      "Đại diện làm việc với cơ quan thuế khi có vướng mắc",
    ],
  },
  {
    slug: "dich-vu-ke-toan",
    path: "/dich-vu-ke-toan",
    title: "Dịch vụ kế toán trọn gói",
    summary:
      "Ghi sổ kế toán, lập BCTC, kê khai thuế hàng tháng/quý cho doanh nghiệp vừa và nhỏ, văn phòng đại diện.",
    points: [
      "Phù hợp doanh nghiệp mới thành lập, văn phòng đại diện nước ngoài",
      "Bàn giao báo cáo định kỳ theo lịch cam kết",
      "Tích hợp với phần mềm kế toán phổ biến (Misa, Fast, SAP B1)",
    ],
  },
  {
    slug: "soat-xet-tuan-thu",
    title: "Soát xét tuân thủ & nội bộ",
    summary:
      "Đánh giá kiểm soát nội bộ, soát xét tuân thủ pháp luật trước thanh tra hoặc trước M&A.",
    points: [
      "Due diligence tài chính phục vụ M&A",
      "Soát xét quy trình kiểm soát theo COSO",
      "Báo cáo phát hiện kèm khuyến nghị cải tiến cụ thể",
    ],
  },
  {
    slug: "tu-van-chuyen-doi-bao-cao",
    title: "Chuyển đổi báo cáo IFRS / VAS",
    summary:
      "Hỗ trợ doanh nghiệp chuyển đổi BCTC giữa VAS và IFRS phục vụ công ty mẹ nước ngoài hoặc niêm yết.",
    points: [
      "Lập bộ chính sách kế toán IFRS phù hợp ngành",
      "Đào tạo đội ngũ kế toán nội bộ",
      "Đối chiếu chênh lệch và bút toán điều chỉnh chi tiết",
    ],
  },
];

export const PROVINCES = [
  { slug: "tp-ho-chi-minh", name: "TP. Hồ Chí Minh", region: "Đông Nam Bộ" },
  { slug: "ha-noi", name: "Hà Nội", region: "Đồng bằng sông Hồng" },
  { slug: "binh-duong", name: "Bình Dương", region: "Đông Nam Bộ" },
  { slug: "dong-nai", name: "Đồng Nai", region: "Đông Nam Bộ" },
  { slug: "long-an", name: "Long An", region: "Đồng bằng sông Cửu Long" },
  { slug: "da-nang", name: "Đà Nẵng", region: "Duyên hải Nam Trung Bộ" },
  { slug: "hai-phong", name: "Hải Phòng", region: "Đồng bằng sông Hồng" },
  { slug: "can-tho", name: "Cần Thơ", region: "Đồng bằng sông Cửu Long" },
  { slug: "ba-ria-vung-tau", name: "Bà Rịa - Vũng Tàu", region: "Đông Nam Bộ" },
];

export const FAQ_GENERAL = [
  {
    q: "Doanh nghiệp nào bắt buộc phải kiểm toán BCTC hàng năm?",
    a: "Theo Luật Kiểm toán độc lập 2011 và Nghị định 17/2012/NĐ-CP: doanh nghiệp FDI, tổ chức tín dụng, công ty đại chúng, doanh nghiệp nhà nước, doanh nghiệp niêm yết và một số đối tượng khác bắt buộc kiểm toán BCTC năm bởi tổ chức kiểm toán độc lập.",
  },
  {
    q: "Báo cáo kiểm toán của TAF có được cơ quan thuế và ngân hàng chấp nhận không?",
    a: "Có. TAF đăng ký hành nghề với Bộ Tài chính và được phép phát hành báo cáo kiểm toán độc lập theo VSA. Báo cáo của TAF được chấp nhận tại cơ quan thuế, ngân hàng, sở kế hoạch đầu tư và các tổ chức cần BCTC đã kiểm toán.",
  },
  {
    q: "Chi phí kiểm toán BCTC một doanh nghiệp vừa khoảng bao nhiêu?",
    a: "Phí phụ thuộc quy mô doanh thu, số lượng giao dịch, ngành nghề và mức độ phức tạp. TAF khảo sát sơ bộ miễn phí và gửi đề xuất phí cụ thể trong vòng 3 ngày làm việc kể từ khi nhận đủ thông tin.",
  },
  {
    q: "Thời gian hoàn thành một cuộc kiểm toán BCTC năm là bao lâu?",
    a: "Trung bình 2–4 tuần làm việc tại doanh nghiệp với cuộc kiểm toán quy mô vừa, cộng thêm 1–2 tuần phát hành báo cáo chính thức. TAF cam kết bám sát hạn nộp BCTC để doanh nghiệp không bị phạt chậm nộp.",
  },
];
