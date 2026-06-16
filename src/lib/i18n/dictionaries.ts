// Từ điển dịch thủ công cho các chuỗi UI cố định.
// Key = chuỗi tiếng Việt gốc (source). Nếu không có bản dịch, fallback về source.

import type { Locale } from "./locales";

type Dict = Record<string, string>;

const en: Dict = {
  // Header utility bar
  "Giờ làm việc: T2 – T7, 8:00 – 17:30": "Office hours: Mon – Sat, 8:00 – 17:30",
  "TAF — Trang chủ": "TAF — Home",
  "Điều hướng chính": "Main navigation",
  "Điều hướng mobile": "Mobile navigation",
  "Mở menu": "Open menu",
  "Chọn ngôn ngữ": "Select language",

  // CTA / buttons
  "Yêu cầu báo giá": "Request a quote",
  "Gọi ngay": "Call now",
  "Hotline / Zalo": "Hotline / Zalo",
  "Dịch vụ TAF": "TAF Services",
  "Kiểm toán, kế toán & tư vấn thuế": "Audit, accounting & tax advisory",
  "Giải pháp toàn diện cho doanh nghiệp Việt Nam và FDI.":
    "Comprehensive solutions for Vietnamese and FDI enterprises.",
  "Về TAF": "About TAF",
  "Hãng kiểm toán độc lập": "Independent audit firm",
  "Đội ngũ, năng lực và mạng lưới phục vụ của TAF.":
    "TAF's team, capabilities and service network.",
  "Tài nguyên": "Resources",
  "Tin tức & nghiệp vụ": "News & expertise",
  "Kiến thức và cập nhật pháp lý về kế toán – thuế – kiểm toán.":
    "Knowledge and legal updates on accounting, tax and auditing.",

  // Menu group headings
  "Kiểm toán": "Auditing",
  "Kế toán": "Accounting",
  "Thành lập doanh nghiệp": "Business setup",
  "Dịch vụ khác": "Other services",

  // Main menu top-level
  "Dịch vụ": "Services",
  "Tuyển dụng": "Careers",
  "Về chúng tôi": "About us",
  "Xem tất cả dịch vụ": "View all services",

  // Resources / About links
  "Tin tức": "News",
  "Nghiệp vụ": "Expertise",
  "Bài viết & cập nhật": "Articles & updates",
  "Kiến thức kế toán – thuế": "Accounting & tax knowledge",
  "Địa bàn": "Locations",
  "Khu vực TAF phục vụ": "Areas TAF serves",
  "Giới thiệu": "About",
  "Về hãng kiểm toán TAF": "About TAF audit firm",
  "Đội ngũ": "Our team",
  "Kiểm toán viên hành nghề": "Practicing auditors",
  "Liên hệ": "Contact",
  "Gửi yêu cầu tư vấn": "Send a consultation request",

  // Service links
  "Kiểm toán báo cáo tài chính": "Financial statement audit",
  "Kiểm toán nội bộ": "Internal audit",
  "Kiểm toán xây dựng cơ bản": "Construction audit",
  "Kế toán trọn gói": "Full-service accounting",
  "Kế toán cho hộ kinh doanh": "Accounting for household businesses",
  "Làm sổ sách kế toán": "Bookkeeping services",
  "Quyết toán thuế cuối năm": "Year-end tax finalization",
  "Thành lập doanh nghiệp trọn gói": "Full-service company formation",
  "Tư vấn thuế": "Tax advisory",
  "Chuyển đổi báo cáo IFRS": "IFRS conversion",
  "Rà soát đặc biệt M&A (Due Diligence)": "M&A special review (Due Diligence)",
  "Dịch vụ kế toán trọn gói": "Full-service accounting",
  "Soát xét tuân thủ & nội bộ": "Compliance & internal review",
  "Chuyển đổi báo cáo IFRS / VAS": "IFRS / VAS report conversion",
  "Kiểm toán quyết toán dự án hoàn thành": "Completed project settlement audit",

  // Footer
  "Điều hướng": "Navigation",
  "Chính sách bảo mật": "Privacy policy",
  "Văn phòng": "Offices",
  "ĐT:": "Tel:",
  "Email:": "Email:",
  "— hãng kiểm toán độc lập đăng ký hành nghề với Bộ Tài chính, phục vụ doanh nghiệp Việt Nam và FDI từ năm":
    "— an independent audit firm registered with the Ministry of Finance, serving Vietnamese and FDI enterprises since",
  "Đã đăng ký hành nghề kiểm toán.": "Registered audit practice.",

  // Contact page
  "Trao đổi với KTV phụ trách dịch vụ phù hợp với bạn.":
    "Talk with the auditor in charge of the service that fits you.",
  "Mô tả ngắn về doanh nghiệp, loại hình, thời điểm cần báo cáo — KTV phụ trách sẽ liên hệ lại trong vòng 1 ngày làm việc với khảo sát sơ bộ và đề xuất phí cụ thể trong 3 ngày.":
    "Briefly describe your business, type, and report timing — the auditor in charge will respond within 1 business day with a preliminary survey and a specific fee proposal within 3 days.",
  "Khảo sát miễn phí.": "Free preliminary survey.",
  "Không ràng buộc cho đến khi ký hợp đồng dịch vụ.":
    "No obligation until a service contract is signed.",
  "Bảo mật thông tin.": "Confidentiality.",
  "TAF không chia sẻ dữ liệu của bạn với bên thứ ba.":
    "TAF does not share your data with third parties.",

  // About page
  "Về TAF": "About TAF",
  "Hơn hai thập kỷ giữ nghề kiểm toán đúng chuẩn mực.":
    "Over two decades upholding audit standards.",
  "thành lập năm": "was established in",
  "đăng ký hành nghề với Bộ Tài chính và phục vụ khách hàng trong cả ba khối: doanh nghiệp nội địa, doanh nghiệp FDI và dự án đầu tư công.":
    "registered with the Ministry of Finance, serving three segments: domestic enterprises, FDI enterprises and public investment projects.",
  "Cam kết nghề nghiệp": "Professional commitments",
  "Độc lập.": "Independence.",
  "Báo cáo kiểm toán của TAF không chịu ảnh hưởng bởi quan hệ kinh doanh hoặc lợi ích tài chính.":
    "TAF audit reports are not influenced by business relationships or financial interests.",
  "Đúng chuẩn mực.": "Standards-compliant.",
  "Quy trình áp dụng Chuẩn mực Kiểm toán Việt Nam (VSA) và tham chiếu IFRS khi cần.":
    "Process follows Vietnamese Auditing Standards (VSA) and references IFRS when needed.",
  "Đúng thời hạn.": "On time.",
  "Kế hoạch kiểm toán bám sát hạn nộp BCTC theo Luật Kế toán, không để khách hàng bị phạt chậm nộp.":
    "Audit plans follow financial-statement filing deadlines under the Accounting Law so clients avoid late-filing penalties.",
  "Khách hàng tin cậy TAF": "Clients who trust TAF",
  "Trong hơn 20 năm hành nghề, TAF đã phục vụ hơn 500 khách hàng doanh nghiệp ở các ngành sản xuất, thương mại, xây dựng, bất động sản, công nghệ và dịch vụ tài chính. Một phần lớn khách hàng FDI có công ty mẹ ở Nhật Bản, Hàn Quốc, Đài Loan và châu Âu, yêu cầu báo cáo kiểm toán song ngữ và phối hợp với kiểm toán nhóm ở nước ngoài.":
    "In over 20 years of practice, TAF has served more than 500 corporate clients across manufacturing, trade, construction, real estate, technology and financial services. A large portion of FDI clients have parent companies in Japan, Korea, Taiwan and Europe, requiring bilingual audit reports and coordination with overseas group auditors.",

  // Privacy
  "TAF cam kết bảo mật mọi thông tin khách hàng cung cấp khi liên hệ qua website và trong quá trình thực hiện dịch vụ. Tài liệu này mô tả các loại dữ liệu chúng tôi thu thập, mục đích sử dụng và quyền của bạn.":
    "TAF is committed to safeguarding all client information provided via the website and during service delivery. This document describes the types of data we collect, how we use them, and your rights.",
  "Dữ liệu thu thập qua website": "Data collected via the website",
  "Khi bạn gửi form liên hệ, chúng tôi lưu các trường: họ tên, email, số điện thoại, công ty, dịch vụ quan tâm và mô tả nhu cầu. Chúng tôi không sử dụng cookies theo dõi hành vi của bên thứ ba ngoài các cookie kỹ thuật cần thiết để website hoạt động.":
    "When you submit the contact form, we store: name, email, phone, company, services of interest and a description of your needs. We do not use third-party behavioral tracking cookies beyond the technical cookies necessary for the website to function.",
  "Mục đích sử dụng": "Purpose of use",
  "Thông tin được sử dụng để KTV phụ trách liên hệ lại, gửi đề xuất phí và trao đổi chi tiết dịch vụ. TAF không chia sẻ dữ liệu của bạn với bên thứ ba ngoài các đối tác kỹ thuật phục vụ vận hành website (lưu trữ, gửi email).":
    "Information is used by the assigned auditor to contact you, send fee proposals and discuss service details. TAF does not share your data with third parties except technical partners running the website (hosting, email).",
  "Bảo mật trong quá trình kiểm toán": "Confidentiality during audit engagements",
  "Toàn bộ nhân sự của TAF tuân thủ Quy tắc đạo đức nghề nghiệp kế toán, kiểm toán theo Thông tư 70/2015/TT-BTC. Hồ sơ kiểm toán được lưu trữ tối thiểu 10 năm theo quy định.":
    "All TAF personnel comply with the Code of Professional Ethics for Accounting and Auditing under Circular 70/2015/TT-BTC. Audit working papers are retained for at least 10 years as required.",
  "Quyền của bạn": "Your rights",
  "Bạn có quyền yêu cầu truy cập, sửa đổi hoặc xóa dữ liệu cá nhân do TAF nắm giữ bằng cách gửi email tới văn phòng. Chúng tôi phản hồi trong vòng 30 ngày làm việc.":
    "You may request access to, correction or deletion of personal data held by TAF by emailing our office. We respond within 30 business days.",

  // Team page
  "Những người trực tiếp ký báo cáo kiểm toán.": "The people who personally sign our audit reports.",
  "Mỗi báo cáo TAF phát hành đều có chữ ký của KTV hành nghề được Bộ Tài chính cấp chứng chỉ. Dưới đây là một số thành viên dẫn dắt các tuyến dịch vụ.":
    "Every TAF report bears the signature of a practicing auditor licensed by the Ministry of Finance. Below are some of the leaders of our service lines.",
  "Thông tin chi tiết của từng KTV (tên, số chứng chỉ hành nghề, ảnh chân dung) sẽ được cập nhật khi hoàn tất xác nhận nội bộ.":
    "Detailed information for each auditor (name, practicing certificate number, portrait) will be published after internal verification.",
  "Đang cập nhật": "To be updated",
  "Phó Tổng Giám đốc phụ trách Kiểm toán": "Deputy CEO, Audit",
  "Giám đốc Tư vấn Thuế": "Director, Tax Advisory",
  "Trưởng phòng Kiểm toán Xây dựng cơ bản": "Manager, Construction Audit",
  "KTV hành nghề — Bộ Tài chính": "Practicing auditor — Ministry of Finance",
  "KTV hành nghề · Đại lý thuế": "Practicing auditor · Tax agent",
  "KTV hành nghề": "Practicing auditor",
  "Hơn 18 năm kinh nghiệm kiểm toán doanh nghiệp FDI và niêm yết, chuyên ngành sản xuất.":
    "Over 18 years auditing FDI and listed companies, manufacturing specialty.",
  "Chuyên thanh tra thuế, ưu đãi thuế cho dự án đầu tư mới, thuế nhà thầu nước ngoài.":
    "Specialist in tax inspections, incentives for new investment projects, foreign-contractor tax.",
  "Phụ trách kiểm toán quyết toán dự án vốn ngân sách và ODA tại miền Nam.":
    "Leads settlement audits of state-budget and ODA projects in southern Vietnam.",

  // Provinces index
  "Phạm vi hoạt động": "Coverage",
  "Địa bàn TAF phục vụ": "Locations TAF serves",
  "TAF có KTV sẵn sàng đến trụ sở khách hàng tại các tỉnh và thành phố sau. Mỗi địa bàn có trang riêng mô tả ngành nghề trọng điểm và đặc thù pháp lý.":
    "TAF has auditors ready to visit client offices in the following provinces and cities. Each location has its own page describing key industries and legal specifics.",
};

const ja: Dict = {
  "Giờ làm việc: T2 – T7, 8:00 – 17:30": "営業時間: 月〜土、8:00〜17:30",
  "TAF — Trang chủ": "TAF — ホーム",
  "Điều hướng chính": "メインナビゲーション",
  "Điều hướng mobile": "モバイルナビゲーション",
  "Mở menu": "メニューを開く",
  "Chọn ngôn ngữ": "言語を選択",

  "Yêu cầu báo giá": "見積もり依頼",
  "Gọi ngay": "今すぐ電話",
  "Hotline / Zalo": "ホットライン / Zalo",
  "Dịch vụ TAF": "TAFのサービス",
  "Kiểm toán, kế toán & tư vấn thuế": "監査・会計・税務コンサルティング",
  "Giải pháp toàn diện cho doanh nghiệp Việt Nam và FDI.":
    "ベトナム企業およびFDI企業向けの総合ソリューション。",
  "Về TAF": "TAFについて",
  "Hãng kiểm toán độc lập": "独立監査法人",
  "Đội ngũ, năng lực và mạng lưới phục vụ của TAF.":
    "TAFのチーム、能力、サービスネットワーク。",
  "Tài nguyên": "リソース",
  "Tin tức & nghiệp vụ": "ニュースと専門知識",
  "Kiến thức và cập nhật pháp lý về kế toán – thuế – kiểm toán.":
    "会計・税務・監査に関する知識と法令の最新情報。",

  "Kiểm toán": "監査",
  "Kế toán": "会計",
  "Thành lập doanh nghiệp": "会社設立",
  "Dịch vụ khác": "その他のサービス",

  "Dịch vụ": "サービス",
  "Tuyển dụng": "採用情報",
  "Về chúng tôi": "私たちについて",
  "Xem tất cả dịch vụ": "すべてのサービスを見る",

  "Tin tức": "ニュース",
  "Nghiệp vụ": "専門知識",
  "Bài viết & cập nhật": "記事と最新情報",
  "Kiến thức kế toán – thuế": "会計・税務の知識",
  "Địa bàn": "対応地域",
  "Khu vực TAF phục vụ": "TAFのサービス対応エリア",
  "Giới thiệu": "会社概要",
  "Về hãng kiểm toán TAF": "TAF監査法人について",
  "Đội ngũ": "チーム",
  "Kiểm toán viên hành nghề": "公認会計士",
  "Liên hệ": "お問い合わせ",
  "Gửi yêu cầu tư vấn": "コンサルティング依頼を送信",

  "Kiểm toán báo cáo tài chính": "財務諸表監査",
  "Kiểm toán nội bộ": "内部監査",
  "Kiểm toán xây dựng cơ bản": "建設工事監査",
  "Kế toán trọn gói": "会計フルサービス",
  "Kế toán cho hộ kinh doanh": "個人事業主向け会計",
  "Làm sổ sách kế toán": "記帳代行",
  "Quyết toán thuế cuối năm": "年度末税務確定",
  "Thành lập doanh nghiệp trọn gói": "会社設立フルサービス",
  "Tư vấn thuế": "税務コンサルティング",
  "Chuyển đổi báo cáo IFRS": "IFRS報告書への変換",
  "Rà soát đặc biệt M&A (Due Diligence)": "M&A特別調査（デューデリジェンス）",
};

const ko: Dict = {
  "Giờ làm việc: T2 – T7, 8:00 – 17:30": "근무 시간: 월~토, 8:00~17:30",
  "TAF — Trang chủ": "TAF — 홈",
  "Điều hướng chính": "주요 내비게이션",
  "Điều hướng mobile": "모바일 내비게이션",
  "Mở menu": "메뉴 열기",
  "Chọn ngôn ngữ": "언어 선택",

  "Yêu cầu báo giá": "견적 요청",
  "Gọi ngay": "지금 전화하기",
  "Hotline / Zalo": "핫라인 / Zalo",
  "Dịch vụ TAF": "TAF 서비스",
  "Kiểm toán, kế toán & tư vấn thuế": "감사, 회계 및 세무 자문",
  "Giải pháp toàn diện cho doanh nghiệp Việt Nam và FDI.":
    "베트남 기업 및 FDI 기업을 위한 종합 솔루션.",
  "Về TAF": "TAF 소개",
  "Hãng kiểm toán độc lập": "독립 감사법인",
  "Đội ngũ, năng lực và mạng lưới phục vụ của TAF.":
    "TAF의 팀, 역량 및 서비스 네트워크.",
  "Tài nguyên": "자료실",
  "Tin tức & nghiệp vụ": "뉴스 & 전문 지식",
  "Kiến thức và cập nhật pháp lý về kế toán – thuế – kiểm toán.":
    "회계, 세무, 감사에 대한 지식과 법률 업데이트.",

  "Kiểm toán": "감사",
  "Kế toán": "회계",
  "Thành lập doanh nghiệp": "법인 설립",
  "Dịch vụ khác": "기타 서비스",

  "Dịch vụ": "서비스",
  "Tuyển dụng": "채용",
  "Về chúng tôi": "회사 소개",
  "Xem tất cả dịch vụ": "모든 서비스 보기",

  "Tin tức": "뉴스",
  "Nghiệp vụ": "전문 지식",
  "Bài viết & cập nhật": "기사 & 업데이트",
  "Kiến thức kế toán – thuế": "회계 및 세무 지식",
  "Địa bàn": "서비스 지역",
  "Khu vực TAF phục vụ": "TAF 서비스 지역",
  "Giới thiệu": "소개",
  "Về hãng kiểm toán TAF": "TAF 감사법인 소개",
  "Đội ngũ": "팀 구성",
  "Kiểm toán viên hành nghề": "공인 감사인",
  "Liên hệ": "문의하기",
  "Gửi yêu cầu tư vấn": "상담 요청 보내기",

  "Kiểm toán báo cáo tài chính": "재무제표 감사",
  "Kiểm toán nội bộ": "내부 감사",
  "Kiểm toán xây dựng cơ bản": "건설 감사",
  "Kế toán trọn gói": "회계 종합 서비스",
  "Kế toán cho hộ kinh doanh": "개인사업자 회계",
  "Làm sổ sách kế toán": "장부 기장",
  "Quyết toán thuế cuối năm": "연말 세무 정산",
  "Thành lập doanh nghiệp trọn gói": "법인 설립 종합 서비스",
  "Tư vấn thuế": "세무 자문",
  "Chuyển đổi báo cáo IFRS": "IFRS 보고서 전환",
  "Rà soát đặc biệt M&A (Due Diligence)": "M&A 특별 검토 (실사)",
};

export const DICTIONARIES: Record<Exclude<Locale, "vi">, Dict> = { en, ja, ko };

export function translate(text: string, locale: Locale): string {
  if (locale === "vi") return text;
  return DICTIONARIES[locale]?.[text] ?? text;
}
