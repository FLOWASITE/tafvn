import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  Phone,
  List,
  Wallet,
  Zap,
  ShieldCheck,
  FileCheck,
  Lock,
  Users,
  CheckCircle2,
  Handshake,
  ClipboardList,
  PenLine,
  Workflow,
  Archive,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TafSeal } from "@/components/site/TafSeal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const TITLE = "Dịch vụ kế toán trọn gói cho doanh nghiệp | TAF";
const DESCRIPTION =
  "Dịch vụ kế toán trọn gói của TAF: kế toán thuế, lập BCTC, kê khai thuế và BHXH cho doanh nghiệp vừa và nhỏ. Minh bạch, đúng luật, đội ngũ KTV giàu kinh nghiệm.";
const PATH = "/dich-vu-ke-toan";
const CANONICAL = `${SITE_ORIGIN}${PATH}`;

// TODO: thay bằng tên Kế toán trưởng/CPA phụ trách chuyên môn thực tế.
const AUTHOR = { name: "Kế toán trưởng phụ trách", jobTitle: "Kế toán trưởng — TAF" };

const TOC: { id: string; label: string; desc: string }[] = [
  { id: "la-gi", label: "Dịch vụ kế toán trọn gói là gì?", desc: "Khái niệm và vai trò của kế toán thuê ngoài." },
  { id: "dieu-kien", label: "Điều kiện hành nghề dịch vụ kế toán", desc: "Căn cứ Luật Kế toán 2015 & TT 296/2016/TT-BTC." },
  { id: "dich-vu", label: "Các dịch vụ kế toán TAF cung cấp", desc: "Kế toán thuế trọn gói, kế toán tổng hợp và chuyên sâu." },
  { id: "bao-gia", label: "Bảng báo giá dịch vụ kế toán trọn gói", desc: "Tham khảo theo số chứng từ, báo giá chính thức sau khảo sát." },
  { id: "vi-sao", label: "Vì sao nên dùng dịch vụ kế toán trọn gói?", desc: "Tối ưu chi phí, chuyên môn cập nhật, không gián đoạn." },
  { id: "loi-ich", label: "Lợi ích khi dùng dịch vụ kế toán tại TAF", desc: "6 cam kết về chi phí, tốc độ, đại diện và bảo mật." },
  { id: "doi-tuong", label: "Đối tượng nên sử dụng dịch vụ", desc: "Công ty mới, SMEs, doanh nghiệp tái cấu trúc kế toán." },
  { id: "quy-trinh", label: "Quy trình làm việc tại TAF", desc: "5 bước từ tiếp nhận hồ sơ đến lưu trữ chứng từ." },
  { id: "pham-vi", label: "Phạm vi công việc kế toán trọn gói", desc: "Công việc theo tháng, quý, năm và lúc thành lập." },
  { id: "can-cung-cap", label: "Khách hàng cần cung cấp những gì?", desc: "Danh mục chứng từ và thông tin cần bàn giao." },
  { id: "phan-biet", label: "Phân biệt dịch vụ kế toán & báo cáo thuế", desc: "So sánh phạm vi, pháp lý và lợi ích chính." },
  { id: "faq", label: "Câu hỏi thường gặp", desc: "Hợp đồng, hoá đơn, BHXH và phạm vi áp dụng toàn quốc." },
];

const TAF_ACCOUNTING_SERVICES: { label: string; detail: string }[] = [
  {
    label: "Kế toán thuế trọn gói",
    detail:
      "Chuẩn bị hồ sơ thuế doanh nghiệp/cá nhân; tư vấn và thông báo phát hành hoá đơn; lập và nộp báo cáo, tờ khai thuế theo tháng/quý/năm; xây dựng hệ thống kiểm soát và lưu trữ thông tin nội bộ; hỗ trợ giải trình với cơ quan chức năng.",
  },
  {
    label: "Kế toán tổng hợp",
    detail:
      "Lập báo cáo tài chính định kỳ; lưu trữ hồ sơ nội bộ; in, đóng cuốn, lưu trữ sổ sách theo quy định.",
  },
];

const SPECIALIZED = [
  "Kế toán thuế",
  "Kế toán chi phí",
  "Kế toán ngân hàng",
  "Kế toán quản trị",
  "Báo cáo thuế trọn gói",
  "Kế toán thuế cuối năm",
  "Kế toán hộ kinh doanh",
];

// Bảng 1 — Thương mại / Dịch vụ / Phần mềm (không giá thành)
const PRICE_TABLE_1 = [
  { stt: 1, range: "Không phát sinh", tax: "500.000", bhxh: "200.000", total: "700.000" },
  { stt: 2, range: "< 10 chứng từ", tax: "1.000.000", bhxh: "200.000", total: "1.200.000" },
  { stt: 3, range: "11 – 20 chứng từ", tax: "1.300.000", bhxh: "200.000", total: "1.500.000" },
  { stt: 4, range: "21 – 30 chứng từ", tax: "2.000.000", bhxh: "300.000", total: "2.300.000" },
  { stt: 5, range: "31 – 50 chứng từ", tax: "2.500.000", bhxh: "300.000", total: "2.800.000" },
  { stt: 6, range: "51 – 70 chứng từ", tax: "3.500.000", bhxh: "500.000", total: "4.000.000" },
  { stt: 7, range: "71 – 100 chứng từ", tax: "4.500.000", bhxh: "700.000", total: "5.200.000" },
  { stt: 8, range: "101 – 150 chứng từ", tax: "6.000.000", bhxh: "700.000", total: "6.700.000" },
  { stt: 9, range: "151 – 200 chứng từ", tax: "9.000.000", bhxh: "700.000", total: "9.700.000" },
  { stt: 10, range: "> 200 chứng từ", tax: "Thỏa thuận", bhxh: "1.000.000", total: "Thỏa thuận" },
];

// Bảng 2 — Xây dựng / Sản xuất / Vận tải / Dịch vụ có tính giá thành
const PRICE_TABLE_2 = [
  { stt: 1, range: "Không phát sinh", tax: "500.000", bhxh: "200.000", total: "700.000" },
  { stt: 2, range: "< 10 chứng từ", tax: "1.300.000", bhxh: "200.000", total: "1.500.000" },
  { stt: 3, range: "11 – 20 chứng từ", tax: "1.500.000", bhxh: "200.000", total: "1.700.000" },
  { stt: 4, range: "21 – 30 chứng từ", tax: "2.500.000", bhxh: "300.000", total: "2.800.000" },
  { stt: 5, range: "31 – 50 chứng từ", tax: "3.000.000", bhxh: "400.000", total: "3.400.000" },
  { stt: 6, range: "51 – 70 chứng từ", tax: "4.000.000", bhxh: "500.000", total: "4.500.000" },
  { stt: 7, range: "71 – 100 chứng từ", tax: "5.500.000", bhxh: "700.000", total: "6.200.000" },
  { stt: 8, range: "101 – 150 chứng từ", tax: "7.500.000", bhxh: "700.000", total: "8.200.000" },
  { stt: 9, range: "151 – 200 chứng từ", tax: "12.000.000", bhxh: "700.000", total: "12.700.000" },
  { stt: 10, range: "> 200 chứng từ", tax: "Thỏa thuận", bhxh: "1.500.000", total: "Thỏa thuận" },
];

const REASONS = [
  {
    t: "Tối ưu chi phí",
    d: "Thuê một kế toán nội bộ tốn khoảng 8–15 triệu đồng/tháng, chưa kể chi phí phần mềm, thiết bị; dùng dịch vụ trọn gói giúp tiết kiệm đáng kể.",
  },
  {
    t: "Nghiệp vụ chuyên nghiệp",
    d: "Đáp ứng cả hai tiêu chí chi phí và chuyên môn, giúp doanh nghiệp kiểm soát tài chính hiệu quả, đúng luật.",
  },
  {
    t: "Liên tục, không gián đoạn",
    d: "Tránh đứt đoạn khi nhân sự kế toán nghỉ việc; không phải lo tìm người thay thế.",
  },
  {
    t: "Dự báo rủi ro tài chính",
    d: "Dựa trên báo cáo định kỳ, KTV theo sát tình hình và cảnh báo rủi ro tiềm ẩn cho ban lãnh đạo.",
  },
];

const BENEFITS: { text: string; detail: string; icon: React.ElementType }[] = [
  {
    text: "Tối ưu chi phí",
    detail: "Bóc tách gói theo số lượng chứng từ, tư vấn gói phù hợp nhu cầu thực tế.",
    icon: Wallet,
  },
  {
    text: "Hiệu quả, nhanh chóng",
    detail: "Tiếp nhận, xử lý, hoàn thiện hồ sơ thuế – kế toán nhanh, chính xác.",
    icon: Zap,
  },
  {
    text: "Đại diện hiểu luật",
    detail:
      "TAF đại diện làm việc với cơ quan thuế, bảo vệ quyền lợi hợp pháp của doanh nghiệp khi có phát sinh.",
    icon: ShieldCheck,
  },
  {
    text: "Đầy đủ hồ sơ khi quyết toán",
    detail: "Chuẩn bị và lưu trữ hồ sơ phục vụ thanh tra/quyết toán bất kỳ lúc nào.",
    icon: FileCheck,
  },
  {
    text: "Bảo mật thông tin",
    detail:
      "Dùng phần mềm mã hoá riêng, cam kết bảo mật và chịu trách nhiệm bồi thường nếu rủi ro thuộc về TAF.",
    icon: Lock,
  },
  {
    text: "Hỗ trợ BHXH",
    detail: "Tư vấn, kê khai và hoàn tất thủ tục bảo hiểm bắt buộc cho người lao động.",
    icon: Users,
  },
];

const SUBJECTS = [
  "Công ty mới thành lập, chưa có nhân viên kế toán.",
  "Công ty vừa và nhỏ, ít chứng từ, muốn tối ưu chi phí mà vẫn tuân thủ pháp luật.",
  "Chủ doanh nghiệp chưa nắm rõ thủ tục kế toán – thuế.",
  "Doanh nghiệp muốn tái cấu trúc hệ thống kế toán và xử lý tồn đọng.",
];

const PROCESS: { t: string; d: string; icon: React.ElementType }[] = [
  {
    t: "Tiếp nhận hồ sơ",
    d: "Tiếp nhận yêu cầu qua điện thoại/email/website, liên hệ trao đổi chi tiết.",
    icon: ClipboardList,
  },
  {
    t: "Khảo sát & báo giá",
    d: "Nắm tình hình doanh nghiệp, tư vấn gói phù hợp, báo giá và thỏa thuận điều khoản.",
    icon: Workflow,
  },
  {
    t: "Ký kết hợp đồng",
    d: "Thống nhất hạng mục, đại diện hai bên ký hợp đồng.",
    icon: PenLine,
  },
  {
    t: "Triển khai & báo cáo",
    d: "Rà soát số liệu, chứng từ; trao đổi thường xuyên; xử lý phát sinh đúng quy định.",
    icon: Handshake,
  },
  {
    t: "Lưu trữ hồ sơ",
    d: "Thiết lập và lưu trữ trên phần mềm kế toán.",
    icon: Archive,
  },
];

const HERO_STATS = [
  { k: "1.500+", v: "Doanh nghiệp tin dùng" },
  { k: "10+", v: "Năm kinh nghiệm" },
  { k: "100%", v: "Tuân thủ pháp luật" },
  { k: "24/7", v: "Hỗ trợ tư vấn" },
];

const SCOPE: { t: string; items: string[] }[] = [
  {
    t: "Với doanh nghiệp mới thành lập",
    items: [
      "Mua chữ ký số",
      "Mở tài khoản ngân hàng",
      "Đăng ký tài khoản trên cổng thuế",
      "Kê khai và nộp lệ phí môn bài (miễn năm đầu)",
      "Thông báo tài khoản với Sở KH&ĐT",
      "Thông báo phát hành hoá đơn",
    ],
  },
  {
    t: "Báo cáo hàng tháng",
    items: [
      "Lập phiếu thu/chi, xuất/nhập hoá đơn",
      "Quản lý quỹ tiền mặt và tài khoản ngân hàng",
      "Báo cáo tài chính tháng",
      "Kê khai thuế GTGT, TNCN",
    ],
  },
  {
    t: "Báo cáo theo quý",
    items: [
      "Quản lý quỹ và tài khoản",
      "Báo cáo tài chính quý",
      "Kê khai thuế GTGT, TNCN theo quý",
      "Lưu trữ hồ sơ",
    ],
  },
  {
    t: "Báo cáo cuối năm",
    items: [
      "Quyết toán thuế TNDN, thuế TNCN",
      "Lập báo cáo tài chính năm",
      "Lưu trữ hồ sơ",
    ],
  },
];

const NEEDED = [
  "Hoá đơn đầu vào, đầu ra",
  "Sao kê tài khoản ngân hàng",
  "Thông tin người lao động",
  "Thông tin đăng nhập kê khai thuế",
  "Thông tin sản phẩm/ngành nghề kinh doanh",
  "Số liệu kế toán các năm trước (nếu có)",
];

// Lưu ý nội bộ: bản cũ dẫn TT 117/2012/TT-BTC đã hết hiệu lực; hoạt động đại lý thuế
// nay theo Luật Quản lý thuế 2019 và Thông tư 10/2021/TT-BTC. Đã cập nhật văn bản dưới đây.
const COMPARE = [
  {
    label: "Phạm vi",
    accounting:
      "Toàn bộ nghiệp vụ kế toán: kê khai & nộp thuế, quản lý tài chính, lưu trữ hồ sơ.",
    tax: "Tập trung khai báo, quyết toán thuế doanh nghiệp/cá nhân.",
  },
  {
    label: "Cơ sở pháp lý",
    accounting:
      "Luật Kế toán 2015; điều kiện hành nghề theo Thông tư 296/2016/TT-BTC.",
    tax: "Luật Quản lý thuế 2019; Thông tư 10/2021/TT-BTC về đại lý thuế.",
  },
  {
    label: "Lợi ích chính",
    accounting:
      "Nắm toàn diện tình hình tài chính, được tư vấn bởi chuyên gia kế toán – thuế.",
    tax: "Thực hiện đầy đủ nghĩa vụ thuế với cơ quan nhà nước.",
  },
];

const FAQS = [
  {
    q: "Dịch vụ kế toán trọn gói của TAF có làm toàn quốc không?",
    a: "Có. TAF cung cấp dịch vụ kế toán trọn gói trên phạm vi toàn quốc; doanh nghiệp ở bất kỳ tỉnh thành nào đều có thể liên hệ để được tư vấn phương án phù hợp.",
  },
  {
    q: "Có hợp đồng cam kết khi sử dụng dịch vụ không?",
    a: "Có. Hai bên ký hợp đồng cam kết đúng luật, đúng thời hạn, đúng chuẩn mực, có điều khoản chịu phạt nếu xảy ra sai sót thuộc về TAF.",
  },
  {
    q: "Thuê dịch vụ kế toán có lợi hơn thuê nhân viên kế toán nội bộ không?",
    a: "Với doanh nghiệp nhỏ và vừa, dịch vụ kế toán thường tối ưu hơn về chi phí, đảm bảo chuyên môn cập nhật và tránh gián đoạn khi thay đổi nhân sự.",
  },
  {
    q: "Công ty không xuất hoá đơn VAT có phải nộp báo cáo thuế không?",
    a: "Có. Dù có phát sinh hoá đơn hay không, doanh nghiệp vẫn phải nộp báo cáo thuế và báo cáo tài chính theo quy định.",
  },
  {
    q: "Báo giá tính theo hoá đơn đầu vào hay đầu ra?",
    a: "Bảng giá tính trên tổng số hoá đơn đầu vào và đầu ra của doanh nghiệp.",
  },
  {
    q: "Dùng dịch vụ kế toán có cần mua chữ ký số không?",
    a: "Có. Doanh nghiệp bắt buộc có chữ ký số để kê khai, nộp báo cáo tài chính, thuế và lưu trữ hồ sơ.",
  },
  {
    q: "Thuê dịch vụ kế toán rồi có cần thêm kế toán nội bộ không?",
    a: "Không bắt buộc. Dịch vụ trọn gói đảm nhiệm toàn bộ công việc của phòng kế toán nội bộ; doanh nghiệp tập trung phát triển kinh doanh.",
  },
];

const RELATED: { href: string; label: string }[] = [
  { href: "/dich-vu-kiem-toan", label: "Dịch vụ kiểm toán độc lập" },
  { href: "/dich-vu/kiem-toan-bao-cao-tai-chinh", label: "Kiểm toán báo cáo tài chính" },
  { href: "/dich-vu/tu-van-thue", label: "Tư vấn thuế" },
];

export const Route = createFileRoute("/dich-vu-ke-toan")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Dịch vụ kế toán trọn gói",
          serviceType: "Kế toán thuê ngoài",
          description: DESCRIPTION,
          areaServed: { "@type": "Country", name: "Vietnam" },
          provider: {
            "@type": "Organization",
            name: SITE.legalName,
            url: CANONICAL,
            telephone: "+84924580580",
            email: "info@taf.vn",
            address: {
              "@type": "PostalAddress",
              streetAddress: "62A Phạm Ngọc Thạch",
              addressLocality: "TP. Hồ Chí Minh",
              addressRegion: "Phường Xuân Hoà",
              addressCountry: "VN",
            },
          },
          author: {
            "@type": "Person",
            name: AUTHOR.name,
            jobTitle: AUTHOR.jobTitle,
            worksFor: { "@type": "Organization", name: SITE.legalName },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Danh mục dịch vụ kế toán của TAF",
            itemListElement: [
              ...TAF_ACCOUNTING_SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.label, description: s.detail },
              })),
              ...SPECIALIZED.map((label) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: label },
              })),
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Dịch vụ", item: `${SITE_ORIGIN}/dich-vu` },
            { "@type": "ListItem", position: 3, name: "Dịch vụ kế toán trọn gói", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: AccountingServicePage,
});

function LazyYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [thumbReady, setThumbReady] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded || iframeReady) return;
    const t = setTimeout(() => {
      if (!iframeReady) setIframeError(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [loaded, iframeReady]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLoaded(true);
    }
  };

  const handlePlay = () => {
    setIframeError(false);
    setIframeReady(false);
    setLoaded(true);
  };

  const thumbSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <AspectRatio
      ratio={16 / 9}
      ref={containerRef as unknown as React.Ref<HTMLDivElement>}
      className="w-full relative bg-ink/90 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          (loaded ? iframeReady : thumbReady) ? "opacity-0" : "opacity-100",
        )}
      >
        <Skeleton className="w-full h-full rounded-none bg-ink/20" />
      </div>

      {loaded ? (
        <>
          {!iframeError && (
            <iframe
              className="absolute inset-0 w-full h-full block"
              src={iframeSrc}
              title={title}
              loading="lazy"
              onLoad={() => setIframeReady(true)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {iframeError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/90 text-cream p-6 text-center">
              <p className="text-sm">Không thể tải video. Vui lòng thử lại.</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePlay}
                  className="px-4 py-2 text-sm border border-accent/60 hover:bg-accent/10 transition-colors rounded-[2px]"
                >
                  Thử lại
                </button>
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-brand-red hover:bg-brand-red-ink transition-colors rounded-[2px]"
                >
                  Mở trên YouTube
                </a>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {inView && (
            <img
              src={thumbSrc}
              alt={`Thumbnail video: ${title}`}
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              onLoad={() => setThumbReady(true)}
              className={cn(
                "absolute inset-0 w-full h-full object-cover block transition-opacity duration-500",
                thumbReady ? "opacity-100" : "opacity-0",
              )}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src.includes("maxresdefault")) {
                  img.src = thumbSrc.replace("maxresdefault", "sddefault");
                } else {
                  setThumbReady(true);
                }
              }}
            />
          )}
          <button
            type="button"
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label={`Phát video: ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/15 hover:bg-black/25 transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-[2px]"
          >
            <span className="sr-only">Phát video: {title}</span>
            <span className="w-16 h-16 rounded-full bg-white/95 shadow-[var(--shadow-elegant)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              <Play size={28} className="text-brand-red ml-1" fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </AspectRatio>
  );
}

function PriceTable({ rows, caption }: { rows: typeof PRICE_TABLE_1; caption: string }) {
  return (
    <div className="border border-border rounded-[3px] bg-background overflow-hidden shadow-[var(--shadow-card)]">
      <div className="px-5 md:px-6 py-4 border-b border-border bg-gradient-to-r from-cream/80 via-cream/40 to-transparent flex items-center gap-3">
        <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
        <span aria-hidden className="inline-block w-5 h-px bg-accent" />
        <div className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/90 font-medium">
          {caption}
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-cream/40 hover:bg-cream/40">
            <TableHead className="w-12">STT</TableHead>
            <TableHead>Số hoá đơn/tháng (đầu vào + đầu ra)</TableHead>
            <TableHead className="text-right">Kế toán thuế</TableHead>
            <TableHead className="text-right">Lương, BHXH</TableHead>
            <TableHead className="text-right font-medium text-foreground bg-accent/10">
              Tổng
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow
              key={r.stt}
              className={cn(
                "font-serif transition-colors",
                i % 2 === 1 && "bg-cream/30",
                "hover:bg-accent/5",
              )}
            >
              <TableCell className="text-muted-foreground tabular-nums font-mono text-xs">
                {String(r.stt).padStart(2, "0")}
              </TableCell>
              <TableCell className="text-foreground/85">{r.range}</TableCell>
              <TableCell className="text-right tabular-nums text-foreground/85">{r.tax}</TableCell>
              <TableCell className="text-right tabular-nums text-foreground/85">{r.bhxh}</TableCell>
              <TableCell className="text-right tabular-nums font-medium text-foreground bg-accent/[0.06] border-l border-accent/20">
                {r.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function AccountingServicePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Dịch vụ", to: "/dich-vu" },
          { label: "Dịch vụ kế toán trọn gói" },
        ]}
      />

      {/* Hero */}
      <Section className="pb-10 md:pb-14 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-16 md:right-0 opacity-[0.04] hidden md:block"
        >
          <TafSeal size={420} spin />
        </div>
        <div className="grid lg:grid-cols-12 gap-10 relative">
          <header className="lg:col-span-8">
            <Eyebrow>Kế toán trọn gói</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] text-foreground">
              Dịch vụ <span className="italic text-accent-foreground italic-mark">kế toán trọn gói</span>
              <span className="block text-foreground/55 text-2xl md:text-3xl lg:text-4xl font-display italic mt-2">
                cho doanh nghiệp vừa và nhỏ
              </span>
            </h1>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Phụ trách chuyên môn:{" "}
              <span className="text-foreground/90">{AUTHOR.name} — {AUTHOR.jobTitle}</span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="block h-px w-12 bg-brand-red" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brand-red-ink font-medium">
                Tuân thủ Luật Kế toán 2015
              </span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              Giải pháp giúp doanh nghiệp tối ưu chi phí mà vẫn đảm bảo đầy đủ sổ sách, hồ
              sơ, báo cáo đúng quy định pháp luật. Với kinh nghiệm phục vụ hàng nghìn
              doanh nghiệp lớn nhỏ, TAF cung cấp dịch vụ kế toán chuyên nghiệp, minh bạch.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-brand-red)_60%,transparent)] uppercase tracking-[0.15em]"
              >
                Nhận tư vấn & báo giá
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <a
                href="tel:+84924580580"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-cream/60 hover:border-accent transition"
              >
                <Phone size={16} className="text-brand-red" />
                <span className="font-mono text-accent-foreground">0924 580 580</span>
              </a>
            </div>

            {/* Trust strip — editorial stats */}
            <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-border/80">
              {HERO_STATS.map((s, i) => (
                <div
                  key={s.k}
                  className={cn(
                    "py-5 px-4 first:pl-0 group",
                    i !== HERO_STATS.length - 1 && "md:border-r border-border/80",
                    i < 2 && "border-r border-border/80 md:border-r",
                    i === 0 && "border-r",
                    i === 2 && "md:border-l-0",
                  )}
                >
                  <dt className="font-display text-3xl md:text-[2.25rem] text-foreground leading-none tabular-nums">
                    {s.k}
                    <span className="inline-block align-top w-1 h-1 rounded-full bg-brand-red ml-1 mt-1.5 group-hover:scale-150 transition-transform" />
                  </dt>
                  <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </header>
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col gap-4 text-sm">
            {[
              { k: "Pháp lý", v: "Luật Kế toán 2015 & TT 296/2016" },
              { k: "Đội ngũ", v: "Kế toán viên có chứng chỉ hành nghề" },
              { k: "Báo giá", v: "Theo số chứng từ, minh bạch" },
              { k: "Phạm vi", v: "Toàn quốc, hỗ trợ online" },
            ].map((i) => (
              <div key={i.k} className="border-b border-border pb-3 last:border-0 group">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-red" />
                  {i.k}
                </div>
                <div className="font-display text-base text-foreground mt-1.5 group-hover:text-accent-foreground transition-colors">
                  {i.v}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      {/* Mục lục */}
      <Section className="pt-0 pb-6">
        <nav
          aria-label="Mục lục: Dịch vụ kế toán trọn gói tại TAF"
          className="border border-border bg-cream/60 rounded-[2px] p-6 md:p-8"
        >
          <div className="flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/90 mb-3 font-medium">
            <List size={14} className="text-brand-red" />
            Mục lục bài viết
          </div>
          <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Trang tổng quan về <strong className="text-foreground font-medium">dịch vụ kế toán trọn gói</strong> của TAF: khái niệm, điều kiện hành nghề, danh mục dịch vụ, bảng báo giá tham khảo, quy trình triển khai và câu hỏi thường gặp.
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-serif text-foreground/85">
            {TOC.map((item, i) => (
              <li key={item.id} className="flex gap-3 leading-snug">
                <span className="font-mono text-xs text-muted-foreground tabular-nums mt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a href={`#${item.id}`} className="group flex-1 text-foreground/85 underline-offset-4 transition-colors">
                  <span className="block text-foreground/90 group-hover:text-brand-red-ink underline decoration-transparent group-hover:decoration-brand-red/50">
                    {item.label}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      {/* 01 — Là gì */}
      <Section id="la-gi" className="pt-0">
        <div className="rule-gold mb-12" />
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>01</Eyebrow>
              <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
                Dịch vụ kế toán trọn gói là gì?
              </h2>
            </div>
            <p className="lg:col-span-8 text-base md:text-lg text-foreground/85 font-serif leading-relaxed">
              Kế toán là bộ phận quan trọng, quản lý thu – chi, xử lý thuế, lập báo cáo
              tài chính và các thủ tục pháp lý liên quan. Doanh nghiệp lớn thường có
              phòng kế toán riêng, nhưng với công ty mới thành lập hoặc quy mô nhỏ, ít
              hoá đơn chứng từ, việc tuyển một nhân sự kế toán toàn thời gian là tốn kém.
              Dịch vụ kế toán trọn gói đáp ứng đầy đủ nghiệp vụ của kế toán nội bộ với
              chi phí hợp lý hơn.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 02 — Điều kiện hành nghề */}
      <Section id="dieu-kien" className="bg-cream border-y border-border">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>02</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Điều kiện hành nghề{" "}
              <span className="italic text-accent-foreground">dịch vụ kế toán</span>
            </h2>
            <p className="mt-4 font-serif text-base text-muted-foreground leading-relaxed">
              Theo Luật Kế toán 2015 và Thông tư 296/2016/TT-BTC (hiệu lực 01/01/2017),
              người hành nghề dịch vụ kế toán phải đáp ứng đủ các điều kiện sau:
            </p>
          </div>
          <ol className="lg:col-span-7 grid gap-3">
            {[
              "Có chứng chỉ kế toán viên hoặc chứng chỉ kiểm toán viên theo Luật Kiểm toán độc lập.",
              "Có năng lực hành vi dân sự.",
              "Có thời gian công tác thực tế về tài chính, kế toán, kiểm toán từ 36 tháng trở lên kể từ khi tốt nghiệp đại học.",
              "Tham gia đầy đủ chương trình cập nhật kiến thức theo quy định.",
            ].map((t, i) => (
              <li
                key={t}
                className="flex gap-4 bg-background border border-border rounded-[2px] p-4"
              >
                <span className="font-mono text-xs text-accent-foreground tabular-nums shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-foreground/85 leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 03 — Dịch vụ TAF cung cấp */}
      <Section id="dich-vu">
        <Eyebrow>03</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Các dịch vụ kế toán TAF cung cấp
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {TAF_ACCOUNTING_SERVICES.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="group relative h-full bg-card border border-border hover:border-accent p-7 md:p-8 rounded-[3px] transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 overflow-hidden">
                {/* Corner ornaments */}
                <span aria-hidden className="absolute top-0 left-0 w-10 h-px bg-accent/70" />
                <span aria-hidden className="absolute top-0 left-0 w-px h-10 bg-accent/70" />
                <span aria-hidden className="absolute bottom-0 right-0 w-10 h-px bg-brand-red/60 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span aria-hidden className="absolute bottom-0 right-0 w-px h-10 bg-brand-red/60 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-display italic text-accent-foreground tabular-nums text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="block h-px flex-1 ml-4 bg-gradient-to-r from-accent/60 to-transparent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent-foreground transition-colors">
                  {s.label}
                </h3>
                <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <div className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/90 mb-4 font-medium flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="inline-block w-6 h-px bg-accent/60" />
            Các mảng chuyên sâu
          </div>
          <ul className="flex flex-wrap gap-2">
            {SPECIALIZED.map((s) => (
              <li
                key={s}
                className="inline-flex items-center gap-2 border border-border bg-background px-3.5 py-2 text-sm text-foreground/85 rounded-[2px] hover:border-accent hover:text-foreground transition-colors"
              >
                <CheckCircle2 size={14} className="text-brand-red shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 04 — Bảng báo giá */}
      <Section id="bao-gia" className="pt-0">
        <div className="rule-gold mb-12" />
        <div className="grid lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-5">
            <Eyebrow>04</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Bảng báo giá dịch vụ{" "}
              <span className="italic text-accent-foreground">kế toán trọn gói</span>
            </h2>
          </div>
          <p className="lg:col-span-7 font-serif text-base md:text-lg text-foreground/85 leading-relaxed">
            Đơn vị: đồng/tháng. Bảng giá <strong className="text-foreground font-medium">mang tính tham khảo</strong>;
            báo giá chính thức được lập sau khảo sát thực tế tình hình chứng từ và đặc thù
            ngành nghề của doanh nghiệp.
          </p>
        </div>

        <div className="space-y-8">
          <PriceTable
            rows={PRICE_TABLE_1}
            caption="Bảng 1 — Thương mại / Dịch vụ / Phần mềm (không tính giá thành)"
          />
          <PriceTable
            rows={PRICE_TABLE_2}
            caption="Bảng 2 — Xây dựng / Sản xuất / Vận tải / Dịch vụ có tính giá thành"
          />
        </div>

        <div className="mt-8 bg-cream/60 border border-border rounded-[2px] p-5 md:p-6 font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
          <strong className="text-foreground font-medium">Lưu ý chi phí:</strong> phí trên
          chưa gồm thuế, VAT và các lệ phí phải nộp Nhà nước; có thể thay đổi với doanh
          nghiệp xuất nhập khẩu hoặc có vốn nước ngoài. Nội thành TP.HCM miễn phí giao
          nhận chứng từ tận nơi; các khu vực khác theo thỏa thuận.
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/lien-he"
            className="group inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all uppercase tracking-[0.15em]"
          >
            Nhận tư vấn & báo giá
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
          <a
            href="tel:+84924580580"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-cream/60 hover:border-accent transition"
          >
            <Phone size={16} className="text-brand-red" />
            <span className="font-mono text-accent-foreground">Hotline / Zalo · 0924 580 580</span>
          </a>
        </div>
      </Section>

      {/* 05 — Vì sao nên dùng */}
      <Section id="vi-sao" className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[60%] -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_70%)]"
        />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>05</Eyebrow>
              <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.1] text-foreground">
                Vì sao nên dùng dịch vụ{" "}
                <span className="italic text-accent-foreground">kế toán trọn gói?</span>
              </h2>
              <div className="rule-gold mt-6 mb-6" />
              <p className="font-serif text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                Bốn lý do cốt lõi khiến SMEs lựa chọn dịch vụ kế toán thuê ngoài thay vì
                tuyển dụng kế toán nội bộ.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <figure className="relative">
                <span aria-hidden className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-accent-foreground/70" />
                <span aria-hidden className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-accent-foreground/70" />
                <span aria-hidden className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-accent-foreground/70" />
                <span aria-hidden className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-accent-foreground/70" />
                <div className="relative border border-border rounded-[2px] overflow-hidden bg-cream shadow-[var(--shadow-elegant)]">
                  <LazyYouTube
                    videoId="LjECVTBgVRo"
                    title="Giới thiệu dịch vụ kế toán trọn gói TAF — Tối ưu chi phí cho doanh nghiệp vừa và nhỏ"
                  />
                </div>
                <figcaption className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2.5">
                  <span className="inline-block w-6 h-px bg-accent/60" />
                  Video giới thiệu dịch vụ kế toán trọn gói tại TAF
                </figcaption>
              </figure>
            </Reveal>

            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
              {REASONS.map((r, i) => (
                <Reveal key={r.t} delay={i * 60}>
                  <li className="group relative flex flex-col gap-2 py-5 border-t border-border/80 transition-all duration-300 hover:border-accent">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display italic text-accent-foreground tabular-nums text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg text-foreground">{r.t}</h3>
                    </div>
                    <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed pl-9">
                      {r.d}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* 06 — Lợi ích tại TAF */}
      <Section id="loi-ich" className="bg-cream border-y border-border">
        <Eyebrow>06</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Lợi ích khi dùng dịch vụ kế toán tại TAF
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.text}
                className="group bg-background border border-border hover:border-accent p-6 rounded-[2px] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-cream border border-border flex items-center justify-center group-hover:border-brand-red transition-colors">
                    <Icon size={18} className="text-brand-red" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{b.text}</h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                  {b.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 07 — Đối tượng */}
      <Section id="doi-tuong">
        <Eyebrow>07</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Đối tượng nên sử dụng dịch vụ kế toán
        </h2>
        <ol className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-0">
          {SUBJECTS.map((s, i) => (
            <li
              key={s}
              className="group flex gap-5 py-4 border-t border-border font-serif text-foreground/85 hover:text-foreground transition-colors"
            >
              <span className="font-mono text-sm text-accent-foreground tabular-nums shrink-0 w-8 group-hover:text-brand-red transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed flex-1">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 08 — Quy trình */}
      <Section id="quy-trinh" className="bg-cream border-y border-border">
        <Eyebrow>08</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Quy trình làm việc tại TAF
        </h2>
        <ol className="mt-12 relative grid md:grid-cols-5 gap-8 md:gap-6">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <span aria-hidden className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-accent/40" />
          {PROCESS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.t} className="relative pl-10 md:pl-0">
                <span
                  aria-hidden
                  className="absolute md:relative left-0 md:left-auto top-0 flex items-center justify-center w-7 h-7 rounded-full bg-background border border-accent/70 shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-brand-red)_12%,transparent)]"
                >
                  <span className="block w-2 h-2 rounded-full bg-brand-red" />
                </span>
                <div className="md:mt-5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display italic text-accent-foreground tabular-nums text-2xl leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={16} className="text-accent-foreground/60" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg text-foreground">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground font-serif leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* 09 — Phạm vi công việc */}
      <Section id="pham-vi">
        <Eyebrow>09</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Phạm vi công việc kế toán trọn gói
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {SCOPE.map((g, i) => (
            <div
              key={g.t}
              className="bg-card border border-border rounded-[2px] p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg text-foreground">{g.t}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 font-serif text-sm md:text-base text-foreground/85 leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 — Cần cung cấp */}
      <Section id="can-cung-cap" className="bg-cream border-y border-border">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>10</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Khách hàng cần cung cấp những gì?
            </h2>
            <p className="mt-4 font-serif text-base text-muted-foreground leading-relaxed">
              Để TAF triển khai dịch vụ kế toán trọn gói chính xác và đúng tiến độ, doanh
              nghiệp chuẩn bị danh mục thông tin sau:
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {NEEDED.map((n, i) => (
              <li
                key={n}
                className="flex items-start gap-3 bg-background border border-border rounded-[2px] p-4 font-serif text-foreground/85"
              >
                <span className="font-mono text-xs text-accent-foreground tabular-nums mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 11 — Phân biệt */}
      <Section id="phan-biet">
        <Eyebrow>11</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Phân biệt dịch vụ kế toán & dịch vụ báo cáo thuế
        </h2>
        <div className="mt-8 border border-border rounded-[2px] bg-background overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-44">Nội dung</TableHead>
                <TableHead>Dịch vụ kế toán (trọn gói)</TableHead>
                <TableHead>Dịch vụ báo cáo thuế</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARE.map((c) => (
                <TableRow key={c.label} className="font-serif">
                  <TableCell className="font-display text-foreground align-top">
                    {c.label}
                  </TableCell>
                  <TableCell className="text-foreground/85 leading-relaxed align-top">
                    {c.accounting}
                  </TableCell>
                  <TableCell className="text-foreground/85 leading-relaxed align-top">
                    {c.tax}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* 12 — FAQ */}
      <Section id="faq" className="pt-0">
        <div className="rule-gold mb-12" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Giải đáp về hợp đồng, hoá đơn, BHXH và phạm vi áp dụng toàn quốc của dịch
              vụ kế toán trọn gói tại TAF.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-5">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-accent-foreground tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 font-serif leading-relaxed pl-10 pr-2">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>Đọc tiếp</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">Dịch vụ liên quan</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {RELATED.map((r, i) => (
            <a
              key={r.href}
              href={r.href}
              className="group relative bg-card border border-border hover:border-accent p-6 rounded-[2px] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 flex flex-col gap-6 min-h-[160px]"
            >
              <span className="font-mono text-xs text-muted-foreground tabular-nums group-hover:text-brand-red transition-colors">
                {String(i + 1).padStart(2, "0")} / {String(RELATED.length).padStart(2, "0")}
              </span>
              <div className="flex items-end justify-between gap-3 mt-auto">
                <span className="font-display text-lg text-foreground leading-snug">
                  {r.label}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
