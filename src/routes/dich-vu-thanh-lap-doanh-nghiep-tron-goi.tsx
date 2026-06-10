import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Phone,
  List,
  Building2,
  CheckCircle2,
  Clock,
  Scale,
  MapPin,
  Zap,
  ShieldCheck,
  FileText,
  Users,
  Briefcase,
  Store,
  Sparkles,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TafSeal } from "@/components/site/TafSeal";
import { Emblem } from "@/components/site/Emblem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const TITLE = "Dịch vụ thành lập doanh nghiệp trọn gói tại Việt Nam | TAF";
const DESCRIPTION =
  "TAF cung cấp dịch vụ thành lập doanh nghiệp trọn gói: soạn hồ sơ, đăng ký kinh doanh, khắc dấu, đăng ký mã số thuế và mở tài khoản ngân hàng trong 3–5 ngày làm việc.";
const PATH = "/dich-vu-thanh-lap-doanh-nghiep-tron-goi";
const CANONICAL = `${SITE_ORIGIN}${PATH}`;

const TOC: { id: string; label: string; desc: string }[] = [
  {
    id: "la-gi",
    label: "Thành lập doanh nghiệp trọn gói là gì?",
    desc: "Khái niệm và quy trình đăng ký kinh doanh tại Việt Nam.",
  },
  {
    id: "loai-hinh",
    label: "Các loại hình doanh nghiệp phổ biến",
    desc: "TNHH, cổ phần, DNTN và hộ kinh doanh.",
  },
  {
    id: "dich-vu",
    label: "Dịch vụ thành lập doanh nghiệp TAF cung cấp",
    desc: "8 hạng mục từ hồ sơ đến hóa đơn điện tử.",
  },
  {
    id: "quy-trinh",
    label: "Quy trình thành lập doanh nghiệp",
    desc: "5 bước từ tư vấn đến khai thuế ban đầu.",
  },
  {
    id: "bao-gia",
    label: "Bảng giá tham khảo",
    desc: "Ba gói dịch vụ phù hợp mọi quy mô doanh nghiệp.",
  },
  {
    id: "ho-so",
    label: "Điều kiện và hồ sơ cần chuẩn bị",
    desc: "Danh mục giấy tờ cần thiết để đăng ký thành công.",
  },
  {
    id: "vi-sao",
    label: "Vì sao nên chọn TAF?",
    desc: "Năng lực, kinh nghiệm và cam kết hỗ trợ sau thành lập.",
  },
  {
    id: "faq",
    label: "Câu hỏi thường gặp",
    desc: "Vốn điều lệ, thời gian, giấy tờ và FDI.",
  },
];

const LOAI_HINH: { t: string; d: string; note: string; icon: React.ElementType }[] = [
  {
    t: "Công ty TNHH 1 thành viên",
    d: "Phù hợp chủ doanh nghiệp muốn toàn quyền quản lý. Chịu trách nhiệm hữu hạn trong phạm vi vốn điều lệ. Số lượng thành viên: 1.",
    note: "Phổ biến nhất với doanh nghiệp nhỏ và startup",
    icon: Building2,
  },
  {
    t: "Công ty TNHH 2+ thành viên",
    d: "Có từ 2 đến 50 thành viên góp vốn. Quyền lợi và trách nhiệm phân chia theo tỷ lệ vốn góp. Không phát hành cổ phiếu.",
    note: "Thích hợp cho liên doanh, hợp tác kinh doanh",
    icon: Users,
  },
  {
    t: "Công ty cổ phần",
    d: "Vốn điều lệ chia thành cổ phần. Tối thiểu 3 cổ đông, không giới hạn tối đa. Có thể huy động vốn qua phát hành cổ phiếu.",
    note: "Lý tưởng cho doanh nghiệp định hướng niêm yết hoặc gọi đầu tư",
    icon: Briefcase,
  },
  {
    t: "Doanh nghiệp tư nhân / Hộ kinh doanh",
    d: "Cá nhân kinh doanh chịu trách nhiệm vô hạn bằng toàn bộ tài sản. Thủ tục đơn giản, phù hợp kinh doanh quy mô nhỏ.",
    note: "Thủ tục nhanh, chi phí thấp nhất",
    icon: Store,
  },
];

const TAF_SERVICES = [
  { label: "Tư vấn chọn loại hình doanh nghiệp phù hợp" },
  { label: "Soạn thảo và nộp hồ sơ đăng ký thành lập doanh nghiệp" },
  { label: "Khắc dấu tròn công ty và đăng ký mẫu dấu" },
  { label: "Đăng ký thuế ban đầu và cấp mã số thuế doanh nghiệp" },
  { label: "Làm biển hiệu công ty theo quy định" },
  { label: "Hỗ trợ mở tài khoản ngân hàng doanh nghiệp" },
  { label: "Đăng ký chữ ký số (token USB / HSM)" },
  { label: "Thông báo phát hành hóa đơn điện tử lần đầu" },
];

const PROCESS = [
  {
    t: "Tư vấn loại hình",
    d: "Phân tích nhu cầu kinh doanh, mục tiêu dài hạn và cơ cấu sở hữu để tư vấn loại hình doanh nghiệp phù hợp nhất.",
  },
  {
    t: "Soạn và kiểm tra hồ sơ",
    d: "Soạn thảo điều lệ công ty, danh sách thành viên/cổ đông; kiểm tra tên, ngành nghề và trụ sở trước khi nộp.",
  },
  {
    t: "Nộp đăng ký kinh doanh",
    d: "Nộp hồ sơ tại Sở Kế hoạch và Đầu tư hoặc qua Cổng dịch vụ công quốc gia. Theo dõi và xử lý bổ sung nếu cần.",
  },
  {
    t: "Nhận GCNĐKDN + khắc dấu",
    d: "Nhận Giấy chứng nhận đăng ký doanh nghiệp, tiến hành khắc dấu tròn và đăng ký mẫu dấu theo quy định.",
  },
  {
    t: "Khai thuế + mở tài khoản",
    d: "Đăng ký khai thuế ban đầu, mở tài khoản ngân hàng, đăng ký chữ ký số và thông báo phát hành hóa đơn điện tử.",
  },
];

const PRICING: { tier: string; highlight: boolean; features: string[]; fee: string; note: string }[] = [
  {
    tier: "Gói Cơ bản",
    highlight: false,
    features: [
      "Hồ sơ đăng ký kinh doanh",
      "Nộp và theo dõi hồ sơ",
      "Nhận Giấy chứng nhận ĐKDN",
    ],
    fee: "1.500.000 – 2.500.000 đ",
    note: "Chưa gồm lệ phí nhà nước",
  },
  {
    tier: "Gói Tiêu chuẩn",
    highlight: true,
    features: [
      "Tất cả trong Gói Cơ bản",
      "Khắc dấu tròn + đăng ký mẫu dấu",
      "Đăng ký thuế ban đầu",
      "Biển hiệu công ty",
    ],
    fee: "3.500.000 – 5.000.000 đ",
    note: "Phổ biến nhất",
  },
  {
    tier: "Gói Trọn gói",
    highlight: false,
    features: [
      "Tất cả trong Gói Tiêu chuẩn",
      "Hỗ trợ mở tài khoản ngân hàng",
      "Đăng ký chữ ký số",
      "Thông báo hóa đơn điện tử",
      "Tư vấn kế toán ban đầu",
    ],
    fee: "7.000.000 – 10.000.000 đ",
    note: "Bắt đầu kinh doanh ngay",
  },
];

const HO_SO = [
  "CCCD/Căn cước công dân hoặc hộ chiếu của tất cả thành viên/cổ đông sáng lập",
  "Dự thảo tên công ty (tối thiểu 2–3 tên dự phòng)",
  "Địa chỉ trụ sở chính (hợp đồng thuê văn phòng hoặc giấy tờ chứng minh quyền sử dụng)",
  "Danh sách ngành nghề kinh doanh dự kiến",
  "Vốn điều lệ dự kiến và tỷ lệ góp vốn (đối với công ty nhiều thành viên)",
  "Thông tin người đại diện theo pháp luật (họ tên, chức danh, CCCD)",
];

const REASONS: { t: string; d: string; icon: React.ElementType }[] = [
  {
    t: "Hoàn thành trong 3–5 ngày làm việc",
    d: "Đội ngũ pháp lý giàu kinh nghiệm xử lý hồ sơ đúng hạn, giảm thiểu thời gian chờ đợi và rủi ro bổ sung hồ sơ.",
    icon: Zap,
  },
  {
    t: "Tư vấn chuyên sâu, tránh sai sót",
    d: "Cố vấn pháp lý TAF tư vấn kỹ về loại hình, ngành nghề và cơ cấu vốn trước khi nộp hồ sơ — tránh phải chỉnh sửa tốn kém.",
    icon: ShieldCheck,
  },
  {
    t: "Hỗ trợ kế toán & kiểm toán sau thành lập",
    d: "TAF cung cấp trọn gói từ thành lập đến kế toán và kiểm toán BCTC — một đối tác duy nhất cho toàn bộ vòng đời doanh nghiệp.",
    icon: FileText,
  },
  {
    t: "Tối ưu cơ cấu sở hữu và thuế",
    d: "Kinh nghiệm phục vụ cả doanh nghiệp trong nước và FDI giúp TAF tư vấn cơ cấu phù hợp với mục tiêu kinh doanh và tối ưu nghĩa vụ thuế.",
    icon: Scale,
  },
];

const FAQS = [
  {
    q: "Thành lập doanh nghiệp mất bao lâu?",
    a: "Thông thường 3–5 ngày làm việc kể từ khi nộp hồ sơ hợp lệ tại Sở Kế hoạch và Đầu tư. Nếu hồ sơ cần bổ sung, thời gian có thể kéo dài thêm. TAF theo dõi và xử lý toàn bộ quy trình, thông báo tiến độ cho khách hàng.",
  },
  {
    q: "Vốn điều lệ tối thiểu khi thành lập công ty là bao nhiêu?",
    a: "Luật Doanh nghiệp 2020 không quy định mức vốn điều lệ tối thiểu đối với hầu hết ngành nghề kinh doanh thông thường. Tuy nhiên, một số ngành nghề có điều kiện (tài chính, bất động sản, kinh doanh rượu...) yêu cầu vốn pháp định riêng. TAF tư vấn mức vốn phù hợp theo từng ngành nghề cụ thể.",
  },
  {
    q: "Cần chuẩn bị những giấy tờ gì để thành lập công ty?",
    a: "Cơ bản cần: CCCD/hộ chiếu của thành viên/cổ đông sáng lập; dự thảo tên công ty; địa chỉ trụ sở; danh sách ngành nghề; mức vốn điều lệ. TAF cung cấp checklist đầy đủ và hỗ trợ soạn thảo tất cả biểu mẫu.",
  },
  {
    q: "Đặt tên công ty cần lưu ý điều gì?",
    a: "Tên công ty phải viết bằng tiếng Việt, có thể kèm tiếng nước ngoài hoặc tên viết tắt; không trùng hoặc gây nhầm lẫn với doanh nghiệp đã đăng ký; không vi phạm lịch sử, văn hóa, đạo đức. TAF kiểm tra tính khả dụng của tên trước khi nộp hồ sơ.",
  },
  {
    q: "Nhà đầu tư nước ngoài (FDI) có thể thành lập công ty tại Việt Nam không?",
    a: "Có. Nhà đầu tư nước ngoài có thể thành lập công ty 100% vốn nước ngoài hoặc liên doanh với đối tác Việt Nam. Thủ tục bao gồm thêm bước xin Giấy chứng nhận đăng ký đầu tư (IRC) trước khi đăng ký doanh nghiệp. TAF hỗ trợ FDI trong nhiều ngành nghề và cung cấp dịch vụ song ngữ Việt–Anh.",
  },
  {
    q: "TAF có hỗ trợ kế toán và kiểm toán sau khi thành lập không?",
    a: "Có. TAF cung cấp dịch vụ kế toán trọn gói (ghi sổ, kê khai thuế, lập BCTC) và kiểm toán báo cáo tài chính độc lập. Khách hàng thành lập qua TAF được ưu tiên tư vấn gói kế toán phù hợp với quy mô và ngành nghề.",
  },
];

const RELATED = [
  { href: "/dich-vu-ke-toan", label: "Dịch vụ kế toán trọn gói" },
  { href: "/dich-vu/tu-van-thue", label: "Tư vấn thuế" },
  { href: "/dich-vu/soat-xet-tuan-thu", label: "Soát xét tuân thủ & nội bộ" },
];

export const Route = createFileRoute("/dich-vu-thanh-lap-doanh-nghiep-tron-goi")({
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
          name: "Dịch vụ thành lập doanh nghiệp trọn gói",
          serviceType: "Thành lập doanh nghiệp",
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
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Gói dịch vụ thành lập doanh nghiệp",
            itemListElement: PRICING.map((p) => ({
              "@type": "Offer",
              name: p.tier,
              itemOffered: {
                "@type": "Service",
                name: p.tier,
                description: p.features.join("; "),
              },
            })),
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Thành lập doanh nghiệp trọn gói",
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),
  component: ThanhLapDNPage,
});

function ThanhLapDNPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Dịch vụ", to: "/dich-vu" },
          { label: "Thành lập doanh nghiệp trọn gói" },
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
            <Eyebrow>Thành lập doanh nghiệp</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] text-foreground">
              Dịch vụ thành lập{" "}
              <span className="italic text-accent-foreground italic-mark">doanh nghiệp</span>
              <span className="block text-foreground/55 text-2xl md:text-3xl lg:text-4xl font-display italic mt-2">
                trọn gói tại Việt Nam
              </span>
            </h1>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Chuyên viên phụ trách:{" "}
              <span className="text-foreground/90">Chuyên viên pháp lý TAF</span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="block h-px w-12 bg-brand-red" />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-brand-red-ink font-medium">
                Luật DN 2020 · NĐ 01/2021/NĐ-CP
              </span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              TAF đồng hành cùng doanh nghiệp từ bước đầu tiên: tư vấn loại hình phù hợp,
              soạn và nộp hồ sơ, khắc dấu, đăng ký thuế đến mở tài khoản ngân hàng và
              hóa đơn điện tử — hoàn thành trong 3–5 ngày làm việc.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-brand-red)_60%,transparent)]"
              >
                <span className="uppercase tracking-[0.15em]">Tư vấn &amp; báo giá</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <a
                href="tel:+84924580580"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background hover:border-accent transition"
              >
                <Phone size={16} className="text-muted-foreground" />
                <span className="font-mono text-accent-foreground">0924 580 580</span>
              </a>
            </div>
          </header>
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col gap-4 text-sm">
            {(
              [
                { k: "Loại hình", v: "TNHH, Cổ phần, DNTN", icon: Building2 },
                { k: "Thời gian", v: "3–5 ngày làm việc", icon: Clock },
                { k: "Pháp lý", v: "Luật DN 2020, NĐ 01/2021", icon: Scale },
                { k: "Phạm vi", v: "Toàn quốc", icon: MapPin },
              ] as { k: string; v: string; icon: React.ElementType }[]
            ).map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.k} className="border-b border-border pb-3 last:border-0 group">
                  <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                    <Icon size={12} className="text-brand-red" aria-hidden="true" />
                    {item.k}
                  </div>
                  <div className="font-display text-base text-foreground mt-1.5 group-hover:text-accent-foreground transition-colors">
                    {item.v}
                  </div>
                </div>
              );
            })}
          </aside>
        </div>
      </Section>

      {/* Trust strip — emblems */}
      <Section className="pt-0 pb-10">
        <div className="rule-gold mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal delay={0}><Emblem icon={Zap} label="3–5 ngày làm việc" sublabel="Hoàn thành thủ tục" /></Reveal>
          <Reveal delay={60}><Emblem icon={BadgeCheck} label="Luật DN 2020" sublabel="NĐ 01/2021/NĐ-CP" /></Reveal>
          <Reveal delay={120}><Emblem icon={ShieldCheck} label="Cam kết hoàn tiền" sublabel="Nếu hồ sơ sai sót" /></Reveal>
          <Reveal delay={180}><Emblem icon={TrendingUp} label="1.200+ doanh nghiệp" sublabel="Đã đồng hành cùng TAF" /></Reveal>
        </div>
      </Section>

      {/* Mục lục */}
      <Section className="pt-0 pb-6">
        <nav
          aria-label="Mục lục: Dịch vụ thành lập doanh nghiệp trọn gói"
          className="border border-border bg-cream/60 rounded-[2px] p-6 md:p-8"
        >
          <div className="flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground/90 mb-3 font-medium">
            <List size={14} className="text-brand-red" />
            Mục lục bài viết
          </div>
          <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Trang tổng quan về{" "}
            <strong className="text-foreground font-medium">
              dịch vụ thành lập doanh nghiệp trọn gói
            </strong>{" "}
            của TAF: khái niệm, các loại hình doanh nghiệp, hồ sơ cần thiết, quy trình thực
            hiện, bảng giá tham khảo và câu hỏi thường gặp.
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-serif text-foreground/85">
            {TOC.map((item, i) => (
              <li key={item.id} className="flex gap-3 leading-snug">
                <span className="font-mono text-xs text-muted-foreground tabular-nums mt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${item.id}`}
                  className="group flex-1 text-foreground/85 underline-offset-4 transition-colors"
                >
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

      {/* Là gì */}
      <Section id="la-gi" className="pt-0">
        <div className="rule-gold mb-12" />
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>01</Eyebrow>
              <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
                Thành lập doanh nghiệp trọn gói là gì?
              </h2>
            </div>
            <div className="lg:col-span-8 font-serif text-base md:text-lg text-foreground/85 leading-relaxed space-y-4">
              <p>
                Thành lập doanh nghiệp trọn gói là dịch vụ hỗ trợ toàn bộ quy trình pháp lý để
                thành lập một pháp nhân mới tại Việt Nam — từ khâu tư vấn chọn loại hình, soạn
                thảo hồ sơ, nộp đăng ký tại Sở Kế hoạch và Đầu tư đến các thủ tục sau đăng ký
                như khắc dấu, đăng ký thuế, mở tài khoản và phát hành hóa đơn điện tử.
              </p>
              <p>
                Căn cứ pháp lý:{" "}
                <strong className="font-medium text-foreground">Luật Doanh nghiệp 2020</strong>{" "}
                (Luật số 59/2020/QH14) và{" "}
                <strong className="font-medium text-foreground">Nghị định 01/2021/NĐ-CP</strong>{" "}
                về đăng ký doanh nghiệp. Khách hàng không cần trực tiếp đến cơ quan nhà nước —
                TAF thay mặt thực hiện toàn bộ thủ tục theo giấy ủy quyền.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Loại hình */}
      <Section id="loai-hinh" className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>02</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-2xl">
          Các loại hình doanh nghiệp phổ biến
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {LOAI_HINH.map((lh, i) => (
            <Reveal key={lh.t} delay={i * 60}>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display italic text-accent-foreground tabular-nums text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-foreground">{lh.t}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-serif leading-relaxed">
                  {lh.d}
                </p>
                <span className="mt-3 inline-block text-xs text-accent-foreground border border-accent/40 rounded-[2px] px-2 py-0.5 font-mono">
                  {lh.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Dịch vụ cung cấp */}
      <Section id="dich-vu" className="bg-cream border-y border-border">
        <Eyebrow>03</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Dịch vụ thành lập doanh nghiệp TAF cung cấp
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TAF_SERVICES.map((s, i) => (
            <div
              key={s.label}
              className="group relative bg-card border border-border hover:border-accent p-5 rounded-[2px] transition-all duration-300 flex items-start gap-4 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-mono text-xs text-muted-foreground tabular-nums mt-0.5 shrink-0 group-hover:text-brand-red transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm text-foreground leading-snug flex-1 group-hover:text-accent-foreground transition-colors">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Quy trình */}
      <Section id="quy-trinh">
        <Eyebrow>04</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-3xl">
          Quy trình thành lập doanh nghiệp
        </h2>
        <ol className="mt-12 relative grid md:grid-cols-5 gap-8 md:gap-4">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <span aria-hidden className="md:hidden absolute left-[11px] top-0 bottom-0 w-px bg-accent/40" />
          {PROCESS.map((s, i) => (
            <li key={s.t} className="relative pl-10 md:pl-0">
              <span
                aria-hidden
                className="absolute md:relative left-0 md:left-auto top-0 flex items-center justify-center w-6 h-6 rounded-full bg-background border border-accent/70 shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-brand-red)_12%,transparent)]"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-brand-red" />
              </span>
              <div className="md:mt-5">
                <span className="font-display italic text-accent-foreground tabular-nums text-2xl leading-none block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground font-serif leading-relaxed">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Bảng giá */}
      <Section id="bao-gia" className="pt-0 border-t border-border">
        <div className="rule-gold mb-12" />
        <Eyebrow>05</Eyebrow>
        <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground max-w-2xl">
          Bảng giá tham khảo
        </h2>
        <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed max-w-2xl">
          Báo giá chính thức được cung cấp sau khi khảo sát sơ bộ (miễn phí) để đánh giá đúng
          phạm vi công việc.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {PRICING.map((p) => (
            <div
              key={p.tier}
              className={`relative flex flex-col border rounded-[2px] p-6 transition-all ${
                p.highlight
                  ? "border-accent-foreground/40 shadow-[var(--shadow-elegant)] bg-card"
                  : "border-border bg-card hover:border-accent hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 text-[0.65rem] uppercase tracking-[0.22em] bg-brand-red text-white px-3 py-1 rounded-[2px] font-medium">
                  {p.note}
                </span>
              )}
              <div className="font-display text-lg text-foreground mb-4">{p.tier}</div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 font-serif text-sm text-foreground/80"
                  >
                    <CheckCircle2 size={14} className="text-brand-red shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4">
                <div className="font-mono text-sm text-accent-foreground tabular-nums">
                  {p.fee}
                </div>
                {!p.highlight && (
                  <div className="text-xs text-muted-foreground mt-1">{p.note}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground font-serif">
          * Giá trên chưa bao gồm VAT và lệ phí nhà nước (khoảng 100.000–200.000 đ tùy loại
          hình). Liên hệ TAF để nhận báo giá chính xác.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/lien-he"
            className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-brand-red)_60%,transparent)]"
          >
            <span className="uppercase tracking-[0.15em]">Yêu cầu báo giá</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
          <a
            href="tel:+84924580580"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background hover:border-accent transition"
          >
            <Phone size={16} className="text-muted-foreground" />
            <span className="font-mono text-accent-foreground">0924 580 580</span>
          </a>
        </div>
      </Section>

      {/* Hồ sơ */}
      <Section id="ho-so">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>06</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Hồ sơ cần chuẩn bị
            </h2>
            <p className="mt-4 font-serif text-base text-muted-foreground leading-relaxed">
              TAF hỗ trợ soạn thảo toàn bộ biểu mẫu — khách hàng chỉ cần cung cấp các
              thông tin và tài liệu cơ bản dưới đây.
            </p>
          </div>
          <ol className="lg:col-span-8 space-y-0">
            {HO_SO.map((item, i) => (
              <li
                key={item}
                className="group flex gap-5 py-4 border-t border-border font-serif text-foreground/85 hover:text-foreground transition-colors"
              >
                <span className="font-mono text-sm text-accent-foreground tabular-nums shrink-0 w-8 group-hover:text-brand-red transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed flex-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Vì sao chọn TAF */}
      <Section id="vi-sao" className="bg-cream border-y border-border relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[60%] -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_70%)]"
        />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>07</Eyebrow>
              <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.1] text-foreground">
                Vì sao nên chọn{" "}
                <span className="italic text-accent-foreground">TAF</span> để thành lập doanh
                nghiệp?
              </h2>
              <div className="rule-gold mt-6 mb-6" />
              <p className="font-serif text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                Hơn một thập kỷ phục vụ doanh nghiệp Việt Nam và FDI, TAF không chỉ hỗ trợ
                thành lập mà đồng hành trong suốt vòng đời doanh nghiệp.
              </p>
              <div className="mt-8 hidden lg:flex items-center gap-4">
                <TafSeal className="w-14 h-14 opacity-90" />
                <div className="font-serif text-sm text-muted-foreground leading-snug">
                  <div className="text-foreground font-medium">TAF Advisory</div>
                  <div>Tư vấn pháp lý &amp; kế toán doanh nghiệp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-0" role="list">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <li
                    key={r.t}
                    className="group relative flex items-start gap-4 py-5 border-t border-border/80 transition-all duration-300 hover:border-accent hover:bg-cream/40 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 rounded-[2px] cursor-default"
                  >
                    <span className="font-display text-accent-foreground/90 text-sm tabular-nums tracking-wider pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      size={18}
                      className="shrink-0 mt-0.5 text-muted-foreground/70 group-hover:text-brand-red transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-display text-base text-foreground mb-1">{r.t}</div>
                      <span className="font-serif text-sm text-foreground/75 leading-relaxed group-hover:text-foreground/85 transition-colors duration-300">
                        {r.d}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-[2px]"
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Câu hỏi thường gặp về thành lập doanh nghiệp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Giải đáp về vốn điều lệ, thời gian, giấy tờ, tên công ty và thủ tục dành
              cho nhà đầu tư nước ngoài.
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
                <span className="font-display text-lg text-foreground leading-snug">{r.label}</span>
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
