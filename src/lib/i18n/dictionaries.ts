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
