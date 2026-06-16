import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  Phone,
  ScrollText,
  List,
  Award,
  Scale,
  Monitor,
  Users,
  Wallet,
  MessageCircle,
  Lock,
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import heroImage from "@/assets/dich-vu-kiem-toan-bao-cao-tai-chinh-taf.jpg";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const TITLE = "Dịch vụ kiểm toán độc lập tại Việt Nam | TAF";
const DESCRIPTION =
  "TAF cung cấp dịch vụ kiểm toán độc lập, minh bạch báo cáo tài chính theo chuẩn mực Việt Nam. KTV được Bộ Tài chính cấp phép hành nghề.";
const PATH = "/dich-vu-kiem-toan";
const CANONICAL = `${SITE_ORIGIN}${PATH}`;

const REASONS = [
  {
    t: "Đảm bảo tuân thủ pháp luật",
    d: "Doanh nghiệp vận hành ổn định cần tránh sai sót về hành chính, kế toán, thuế. KTV được Nhà nước cấp chứng chỉ hành nghề giúp giảm rủi ro vi phạm và tổn thất uy tín.",
  },
  {
    t: "Phát hiện sai sót, đảm bảo khách quan",
    d: "Kiểm toán độc lập mang lại cho ban lãnh đạo cái nhìn khách quan, chính xác về những sai sót mà bộ phận kế toán nội bộ có thể mắc phải.",
  },
  {
    t: "Hỗ trợ dự báo và quản trị rủi ro",
    d: "Qua việc phát hiện các lỗ hổng nội bộ, kiểm toán giúp doanh nghiệp nhận diện rủi ro tiềm tàng và đề xuất giải pháp khắc phục, duy trì phát triển ổn định.",
  },
  {
    t: "Gia tăng giá trị báo cáo tài chính",
    d: "BCTC đã kiểm toán phục vụ công bố thông tin, vay vốn, gọi đầu tư, làm việc với cơ quan quản lý và giúp ban lãnh đạo điều hành hiệu quả hơn.",
  },
];

const SUBJECTS: { title: string; detail?: string }[] = [
  { title: "Doanh nghiệp có vốn đầu tư nước ngoài (FDI)" },
  { title: "Tổ chức tín dụng theo Luật Các tổ chức tín dụng" },
  { title: "Tổ chức tài chính, doanh nghiệp bảo hiểm, tái bảo hiểm, môi giới bảo hiểm" },
  { title: "Công ty đại chúng, tổ chức phát hành và kinh doanh chứng khoán" },
  { title: "Doanh nghiệp nhà nước" },
  { title: "Doanh nghiệp, tổ chức thực hiện dự án quan trọng quốc gia" },
  { title: "Doanh nghiệp, tổ chức có vốn nhà nước nắm giữ từ 20% trở lên" },
  { title: "Doanh nghiệp mà tổ chức niêm yết/phát hành/kinh doanh chứng khoán nắm từ 20% quyền biểu quyết" },
  { title: "Doanh nghiệp kiểm toán, chi nhánh doanh nghiệp kiểm toán nước ngoài tại Việt Nam" },
  { title: "Dự án sử dụng nguồn vốn ODA" },
  {
    title: "Doanh nghiệp quy mô lớn (bổ sung theo Luật 56/2024/QH15)",
    detail:
      "Thỏa mãn ít nhất 2/3 tiêu chí: trên 200 lao động tham gia BHXH bình quân năm; doanh thu năm trên 300 tỷ đồng; tổng tài sản trên 100 tỷ đồng. Xác định theo BCTC năm trước liền kề; nếu 2 năm liên tiếp không đáp ứng thì không còn bắt buộc cho đến khi đáp ứng trở lại.",
  },
];

const TAF_SERVICES: { label: string; to?: string; slug?: string }[] = [
  { label: "Kiểm toán báo cáo tài chính", slug: "kiem-toan-bao-cao-tai-chinh" },
  { label: "Kiểm toán báo cáo tài chính vì mục đích thuế và quyết toán thuế" },
  { label: "Kiểm toán hoạt động" },
  { label: "Kiểm toán nội bộ" },
  { label: "Kiểm toán tuân thủ", slug: "soat-xet-tuan-thu" },
  { label: "Kiểm toán báo cáo quyết toán vốn đầu tư hoàn thành" },
  { label: "Kiểm toán quyết toán dự án", slug: "kiem-toan-quyet-toan-du-an" },
  { label: "Kiểm toán độc lập" },
  { label: "Kiểm toán chi phí chung cư" },
];

const PROCESS = [
  {
    t: "Lập kế hoạch kiểm toán",
    d: "Họp với Ban Giám đốc, phòng Tài chính – Kế toán và Ban Kiểm soát; xây dựng cơ sở dữ liệu chung cho nhóm kiểm toán; lập kế hoạch và chương trình kiểm toán; gửi danh mục thông tin, tài liệu cần cung cấp.",
  },
  {
    t: "Thống nhất chiến lược",
    d: "Thảo luận phương pháp tiếp cận kiểm toán với khách hàng; tiếp nhận góp ý để đảm bảo mọi vấn đề khách hàng quan tâm đều được đề cập.",
  },
  {
    t: "Thực hiện kiểm toán",
    d: "Soát xét hệ thống kiểm soát nội bộ; thực hiện các thủ tục kiểm toán theo chương trình đã thống nhất; soát xét rủi ro thuế trong phạm vi kiểm toán.",
  },
  {
    t: "Phát hành báo cáo kiểm toán",
    d: "Thảo luận các vấn đề phát sinh và khuyến nghị; gửi Thư quản lý kèm hướng xử lý; gửi báo cáo dự thảo, họp thống nhất kết quả; phát hành báo cáo kiểm toán chính thức.",
  },
];

const WHY_TAF: { text: string; icon: React.ElementType }[] = [
  { text: "Được Bộ Tài chính cấp phép đủ điều kiện hành nghề kiểm toán", icon: Award },
  { text: "Môi trường pháp lý rõ ràng, minh bạch", icon: Scale },
  { text: "Ứng dụng công nghệ, giúp khách hàng theo dõi tiến độ kiểm toán", icon: Monitor },
  { text: "Đội ngũ KTV có chuyên môn cao, tận tâm với nghề", icon: Users },
  { text: "Chi phí minh bạch, tương xứng với phạm vi công việc", icon: Wallet },
  { text: "Hỗ trợ, tư vấn khách hàng kịp thời", icon: MessageCircle },
  { text: "Cam kết bảo mật thông tin khách hàng", icon: Lock },
];

const FAQS = [
  {
    q: "Dịch vụ kiểm toán gồm những gì?",
    a: "Kiểm toán báo cáo tài chính; kiểm toán xây dựng cơ bản hoàn thành; kiểm toán nội bộ; kiểm toán tuân thủ; kiểm toán chi phí chung cư; kiểm toán độc lập.",
  },
  {
    q: "Chi phí dịch vụ kiểm toán được tính thế nào?",
    a: "Phí phụ thuộc phạm vi công việc, quy mô và đặc thù doanh nghiệp. TAF tối ưu quy trình và ứng dụng công nghệ để duy trì mức phí hợp lý, báo giá cụ thể sau khảo sát.",
  },
  {
    q: "TAF có cung cấp đầy đủ các dịch vụ kiểm toán không?",
    a: "Có. TAF cung cấp trọn vẹn các dịch vụ liên quan đến kiểm toán theo yêu cầu của khách hàng.",
  },
  {
    q: "Yêu cầu bắt buộc của ngành dịch vụ kiểm toán là gì?",
    a: "Công ty kiểm toán phải được Bộ Tài chính cấp phép; tuân thủ yêu cầu đạo đức nghề nghiệp (trung thực, khách quan, thận trọng); đảm bảo công khai, minh bạch, tránh sai sót số liệu.",
  },
  {
    q: "Điều kiện thành lập công ty kiểm toán?",
    a: "Tối thiểu 05 kiểm toán viên hành nghề; đầy đủ giấy phép hoạt động trong lĩnh vực kế toán – kiểm toán; vốn điều lệ tối thiểu theo quy định.",
  },
];

const TOC: { id: string; label: string; desc: string }[] = [
  { id: "dinh-nghia", label: "Dịch vụ kiểm toán là gì?", desc: "Khái niệm & vai trò của kiểm toán độc lập." },
  { id: "vi-sao-thue", label: "Vì sao doanh nghiệp nên thuê dịch vụ kiểm toán?", desc: "5 lợi ích cốt lõi với chủ doanh nghiệp & nhà đầu tư." },
  { id: "quy-dinh-bat-buoc", label: "Quy định pháp luật về kiểm toán bắt buộc", desc: "Luật 56/2024/QH15 & Nghị định 90/2025/NĐ-CP." },
  { id: "doi-tuong-bat-buoc", label: "Các đối tượng bắt buộc phải kiểm toán", desc: "Danh mục doanh nghiệp phải kiểm toán BCTC năm." },
  { id: "dich-vu-taf", label: "Các dịch vụ kiểm toán TAF cung cấp", desc: "BCTC, quyết toán dự án, soát xét, tuân thủ…" },
  { id: "quy-trinh", label: "Quy trình kiểm toán tại TAF", desc: "4 bước chuẩn từ khảo sát đến phát hành báo cáo." },
  { id: "vi-sao-chon-taf", label: "Vì sao chọn dịch vụ kiểm toán của TAF", desc: "Năng lực, kinh nghiệm và cam kết chất lượng." },
  { id: "phi-kiem-toan", label: "Báo giá dịch vụ kiểm toán", desc: "Phí kiểm toán cạnh tranh, minh bạch và cách thức nhận báo giá tại TAF." },
  { id: "faq", label: "Câu hỏi thường gặp về dịch vụ kiểm toán", desc: "Giải đáp về phí, thời gian, hồ sơ và phạm vi." },
];

const RELATED = [
  { to: "/dich-vu/kiem-toan-bao-cao-tai-chinh", label: "Kiểm toán báo cáo tài chính" },
  { to: "/dich-vu/soat-xet-tuan-thu", label: "Soát xét tuân thủ & nội bộ" },
  { to: "/dich-vu/kiem-toan-quyet-toan-du-an", label: "Kiểm toán quyết toán dự án" },
];

export const Route = createFileRoute("/dich-vu-kiem-toan")({
  head: () => {
    const ogImage = new URL(heroImage, SITE_ORIGIN).href;
    return ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Dịch vụ kiểm toán độc lập",
          serviceType: "Kiểm toán độc lập",
          description: DESCRIPTION,
          image: ogImage,
          areaServed: { "@type": "Country", name: "Vietnam" },
          provider: {
            "@type": "Organization",
            name: SITE.legalName,
            url: CANONICAL,
            telephone: "+84924580580",
            email: "info@taf.vn",
            sameAs: [
              "https://www.facebook.com/taf.vn",
              "https://www.youtube.com/channel/UC6SN58so0Iy1nnf46LYJw1A",
              "https://x.com/dichvuketoantaf",
              "https://www.instagram.com/tax_audit_finance/",
              "https://www.linkedin.com/in/dichvuketoantaf1/",
              "https://www.pinterest.com/dichvukiemtoantaf",
              "https://www.tiktok.com/@ketoan.taf",
              "https://www.threads.com/@tax_audit_finance",
            ],
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
            name: "Huỳnh Thế Tho",
            jobTitle: "Giám đốc kiểm toán",
            worksFor: { "@type": "Organization", name: SITE.legalName },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Danh mục dịch vụ kiểm toán của TAF",
            itemListElement: TAF_SERVICES.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.label,
                ...(s.slug ? { url: `${SITE_ORIGIN}/dich-vu/${s.slug}` } : {}),
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
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://tafvn.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Dịch vụ", item: "https://tafvn.lovable.app/dich-vu" },
            { "@type": "ListItem", position: 3, name: "Dịch vụ kiểm toán", item: CANONICAL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Mục lục: Dịch vụ kiểm toán độc lập tại Việt Nam",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: TOC.length,
          itemListElement: TOC.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            url: `${CANONICAL}#${item.id}`,
          })),
        }),
      },
    ],
    });
  },
  component: AuditServicePage,
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
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Timeout fallback: if iframe doesn't signal load within 8s, show retry CTA.
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
      {/* Skeleton — always reserves space, fades out when content ready */}
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
              <Play
                size={28}
                className="text-brand-red ml-1"
                fill="currentColor"
                aria-hidden="true"
              />
            </span>
          </button>
        </>
      )}
    </AspectRatio>
  );
}

function AuditServicePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Dịch vụ", to: "/dich-vu" }, { label: "Dịch vụ kiểm toán" }]} />

      {/* Hero image */}
      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-2 md:pt-4">
        <figure className="group">
          <div className="overflow-hidden rounded-[2px] border border-border shadow-[var(--shadow-card)] bg-cream">
            <img
              src={heroImage}
              alt="Dịch vụ kiểm toán báo cáo tài chính chuyên nghiệp của TAF tại Việt Nam"
              title="Dịch vụ kiểm toán báo cáo tài chính - TAF"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto block aspect-[16/9] object-cover"
            />
          </div>
          <figcaption className="t-body-sm mt-4 flex items-start gap-3 italic text-muted-foreground">
            <span aria-hidden className="rule-gold mt-2 w-8 shrink-0" />
            <span>
              TAF — hãng kiểm toán độc lập được Bộ Tài chính cấp phép, phục vụ doanh nghiệp FDI và trong nước trên toàn quốc từ năm {SITE.established}.
            </span>
          </figcaption>
        </figure>
      </div>

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
            <Eyebrow>Kiểm toán độc lập</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] text-foreground">
              Dịch vụ <span className="italic text-accent-foreground italic-mark">kiểm toán</span>
              <span className="block text-foreground/55 text-2xl md:text-3xl lg:text-4xl font-display italic mt-2">
                độc lập tại Việt Nam
              </span>
            </h1>
            <p className="t-cta mt-5 text-muted-foreground">
              Phụ trách chuyên môn:{" "}
              <span className="text-foreground/90">Huỳnh Thế Tho — Giám đốc kiểm toán</span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="block h-px w-12 bg-brand-red" />
              <span className="t-cta text-brand-red-ink">
                Đăng ký số · Bộ Tài chính
              </span>
            </div>
            <p className="t-lead mt-6 text-muted-foreground">
              Dịch vụ kiểm toán giúp doanh nghiệp chứng minh tính minh bạch, trung thực của
              báo cáo tài chính: đối chiếu số liệu, xác thực và đưa ra ý kiến độc lập về độ
              tin cậy của thông tin tài chính. Chỉ các tổ chức đủ điều kiện và được cấp
              phép mới được cung cấp dịch vụ kiểm toán độc lập.
            </p>
          </header>
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col gap-4 text-sm">
            {[
              { k: "Pháp lý", v: "Bộ Tài chính cấp phép hành nghề" },
              { k: "Đội ngũ", v: "KTV có chứng chỉ hành nghề" },
              { k: "Báo giá", v: "Minh bạch sau khảo sát sơ bộ" },
            ].map((i) => (
              <div key={i.k} className="border-b border-border pb-3 last:border-0 group">
                <div className="t-cta text-muted-foreground flex items-center gap-2">
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
          aria-label="Mục lục: Dịch vụ kiểm toán độc lập tại TAF"
          className="border border-border bg-cream/60 rounded-[2px] p-6 md:p-8"
        >
          <div className="t-cta flex items-center gap-2.5 text-accent-foreground/90 mb-3">
            <List size={14} className="text-brand-red" />
            Mục lục bài viết
          </div>
          <p className="t-body-sm md:text-base text-muted-foreground mb-6 max-w-3xl">
            Trang tổng quan về <strong className="text-foreground font-medium">dịch vụ kiểm toán độc lập</strong> của
            TAF: khái niệm, căn cứ pháp lý mới nhất, đối tượng kiểm toán bắt buộc, danh mục
            dịch vụ kiểm toán TAF cung cấp, quy trình triển khai và câu hỏi thường gặp.
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-serif text-foreground/85 counter-reset-toc">
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
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {item.desc}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>


      {/* Định nghĩa */}
      <Section id="dinh-nghia" className="pt-0">
        <div className="rule-gold mb-12" />
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>01</Eyebrow>
              <h2 className="t-h2 md:text-[2.25rem] text-foreground">
                Dịch vụ kiểm toán là gì?
              </h2>
            </div>
            <p className="t-body lg:col-span-8 text-foreground/85">
              Dịch vụ kiểm toán là quá trình kiểm tra, xem xét, thẩm định, đánh giá và xác
              nhận tính đầy đủ, trung thực, hợp lý của số liệu, tài liệu kế toán và{" "}
              <Link to="/dich-vu/$slug" params={{ slug: "kiem-toan-bao-cao-tai-chinh" }} className="underline decoration-brand-red/40 underline-offset-4 hover:decoration-brand-red text-foreground">
                báo cáo tài chính
              </Link>{" "}
              của một đơn vị, do tổ chức kiểm toán độc lập thực hiện. Xem thêm{" "}
              <Link to="/dich-vu" className="underline decoration-brand-red/40 underline-offset-4 hover:decoration-brand-red text-foreground">
                toàn bộ dịch vụ chuyên môn của TAF
              </Link>.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Vì sao thuê */}
      <Section id="vi-sao-thue" className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>02</Eyebrow>
        <h2 className="t-h2 md:text-[2.25rem] text-foreground max-w-2xl">
          Vì sao doanh nghiệp nên thuê dịch vụ kiểm toán?
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="border-t border-border pt-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display italic text-accent-foreground tabular-nums text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h3 text-foreground">{r.t}</h3>
                </div>
                <p className="t-body-sm md:text-base text-muted-foreground">
                  {r.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quy định bắt buộc */}
      <Section id="quy-dinh-bat-buoc" className="bg-cream border-y border-border relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>03</Eyebrow>
            <h2 className="t-h2 md:text-[2.25rem] text-foreground">
              Quy định pháp luật về <span className="italic text-accent-foreground">kiểm toán bắt buộc</span>
            </h2>
            <div className="t-cta mt-8 hidden lg:flex items-center gap-3 text-muted-foreground">
              <ScrollText size={14} className="text-brand-red" />
              Trích dẫn pháp lý
            </div>
          </div>
          <div className="lg:col-span-7 font-serif text-foreground/85 leading-relaxed space-y-5">
            <p>
              Đối tượng kiểm toán bắt buộc được quy định tại{" "}
              <strong className="font-medium text-foreground">
                Điều 37 Luật Kiểm toán độc lập 2011
              </strong>{" "}
              (sửa đổi bởi{" "}
              <strong className="font-medium text-foreground">
                Luật số 56/2024/QH15
              </strong>
              , hiệu lực 01/01/2025) và hướng dẫn tại{" "}
              <strong className="font-medium text-foreground">
                Điều 15 Nghị định 17/2012/NĐ-CP
              </strong>{" "}
              (sửa đổi bởi{" "}
              <strong className="font-medium text-foreground">
                Nghị định 90/2025/NĐ-CP
              </strong>
              , hiệu lực 14/04/2025).
            </p>
            <div className="relative bg-background border border-brand-red/30 pl-6 pr-6 py-6 rounded-[2px] shadow-[var(--shadow-card)]">
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"
              />
              <div className="t-cta text-brand-red-ink mb-2">
                Mức phạt theo Điều 53 NĐ 41/2018
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-4xl md:text-5xl text-foreground tabular-nums leading-none">
                  40–50
                </span>
                <span className="t-cta text-muted-foreground">
                  triệu đồng
                </span>
              </div>
              <p className="text-foreground/85 text-sm md:text-base">
                Áp dụng với đơn vị không thực hiện kiểm toán bắt buộc đối với báo cáo tài
                chính, báo cáo quyết toán dự án hoàn thành, báo cáo tài chính hợp nhất,
                báo cáo tài chính tổng hợp và các công việc kiểm toán khác theo quy định.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Đối tượng */}
      <Section id="doi-tuong-bat-buoc">
        <Eyebrow>04</Eyebrow>
        <h2 className="t-h2 md:text-[2.25rem] text-foreground max-w-3xl">
          Các đối tượng bắt buộc phải kiểm toán
        </h2>
        <ol className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-0">
          {SUBJECTS.map((s, i) => (
            <li
              key={s.title}
              className="group flex gap-5 py-4 border-t border-border font-serif text-foreground/85 hover:text-foreground transition-colors"
            >
              <span className="font-mono text-sm text-accent-foreground tabular-nums shrink-0 w-8 group-hover:text-brand-red transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed flex-1">
                <span className="block">{s.title}</span>
                {s.detail ? (
                  <span className="mt-2 block text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-3">
                    {s.detail}
                  </span>
                ) : null}
              </span>
              <span
                aria-hidden
                className="hidden md:block self-center w-0 group-hover:w-6 h-px bg-accent transition-all duration-300"
              />
            </li>
          ))}
        </ol>
      </Section>

      {/* Dịch vụ TAF cung cấp */}
      <Section id="dich-vu-taf" className="pt-0">
        <div className="rule-gold mb-12" />
        <Eyebrow>05</Eyebrow>
        <h2 className="t-h2 md:text-[2.25rem] text-foreground max-w-3xl">
          Các dịch vụ kiểm toán TAF cung cấp
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TAF_SERVICES.map((s, i) => {
            const inner = (
              <div className="group relative h-full bg-card border border-border hover:border-accent p-5 rounded-[2px] transition-all duration-300 flex items-start gap-4 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5">
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-mono text-xs text-muted-foreground tabular-nums mt-0.5 shrink-0 group-hover:text-brand-red transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base text-foreground leading-snug flex-1 group-hover:text-accent-foreground transition-colors">
                  {s.label}
                </span>
                {s.slug ? (
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                ) : null}
              </div>
            );
            return s.slug ? (
              <Link key={s.label} to="/dich-vu/$slug" params={{ slug: s.slug }}>
                {inner}
              </Link>
            ) : (
              <div key={s.label}>{inner}</div>
            );
          })}
        </div>
      </Section>

      {/* Quy trình */}
      <Section id="quy-trinh" className="bg-cream border-y border-border">
        <Eyebrow>06</Eyebrow>
        <h2 className="t-h2 md:text-[2.25rem] text-foreground max-w-3xl">
          Quy trình kiểm toán tại TAF
        </h2>
        <ol className="mt-12 relative grid md:grid-cols-4 gap-8 md:gap-6">
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
                <h3 className="font-display text-lg text-foreground">{s.t}</h3>
                <p className="t-body-sm mt-1.5 text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Vì sao chọn TAF */}
      <Section id="vi-sao-chon-taf" className="relative">
        {/* decorative backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[60%] -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_70%)]"
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: sticky editorial intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>07</Eyebrow>
              <h2 className="t-h2 md:text-[2.5rem] text-foreground">
                Vì sao chọn dịch vụ{" "}
                <span className="italic text-accent-foreground">kiểm toán</span> của TAF
              </h2>
              <div className="rule-gold mt-6 mb-6" />
              <p className="t-body text-foreground/80 max-w-md">
                Năng lực hành nghề được Bộ Tài chính cấp phép, quy trình minh bạch và
                công nghệ giám sát trực tuyến — ba cam kết định hình chất lượng dịch vụ
                kiểm toán tại TAF.
              </p>
              <div className="mt-8 hidden lg:flex items-center gap-4">
                <TafSeal className="w-14 h-14 opacity-90" />
                <div className="font-serif text-sm text-muted-foreground leading-snug">
                  <div className="text-foreground font-medium">TAF Audit</div>
                  <div>Giấy phép hành nghề kiểm toán độc lập</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: video + numbered commitments */}
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <figure className="relative">
                {/* corner accents */}
                <span aria-hidden className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-accent-foreground/70" />
                <span aria-hidden className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-accent-foreground/70" />
                <span aria-hidden className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-accent-foreground/70" />
                <span aria-hidden className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-accent-foreground/70" />

                <div className="relative border border-border rounded-[2px] overflow-hidden bg-cream shadow-[var(--shadow-elegant)]">
                  <LazyYouTube
                    videoId="uwiuHO1uN0A"
                    title="Giới thiệu dịch vụ kiểm toán độc lập TAF — Kiểm toán viên được Bộ Tài chính cấp phép hành nghề"
                  />
                </div>
                <figcaption className="t-cta mt-3 text-muted-foreground flex items-center gap-2.5">
                  <span className="inline-block w-6 h-px bg-accent/60" />
                  Video giới thiệu dịch vụ kiểm toán độc lập — Kiểm toán viên được Bộ Tài chính cấp phép hành nghề
                </figcaption>
                <p className="t-body-sm mt-4 text-muted-foreground/80 max-w-2xl">
                  Đoạn phim ngắn giúp quý khách hàng hình dung quy trình kiểm toán minh bạch tại TAF: từ lập kế hoạch, thực hiện thủ tục kiểm toán đến phát hành báo cáo tài chính đã soát xét. Mọi công việc đều do kiểm toán viên độc lập được Nhà nước cấp chứng chỉ đảm nhiệm, đảm bảo tính khách quan và tuân thủ chuẩn mực kiểm toán Việt Nam.
                </p>
              </figure>
            </Reveal>

            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-0" role="list">
              {WHY_TAF.map((w, i) => {
                const Icon = w.icon;
                return (
                  <li
                    key={w.text}
                    tabIndex={0}
                    className="group relative flex items-start gap-4 py-5 border-t border-border/80 transition-all duration-300 hover:border-accent hover:bg-cream/40 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 cursor-default"
                  >
                    <span className="font-display text-accent-foreground/90 text-sm tabular-nums tracking-wider pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      size={18}
                      className="shrink-0 mt-0.5 text-muted-foreground/70 group-hover:text-brand-red transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-foreground/85 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {w.text}
                    </span>
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

      {/* Phí kiểm toán + CTA */}
      <Section id="phi-kiem-toan" className="pt-0">
        <div className="rule-gold mb-12" />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>08</Eyebrow>
            <h2 className="t-h2 md:text-[2.25rem] text-foreground">
              Báo giá dịch vụ <span className="italic text-accent-foreground">kiểm toán</span>
            </h2>
          </div>
          <div className="t-body lg:col-span-8 text-foreground/85 space-y-5">
            <p>
              Để đảm bảo chất lượng công việc kiểm toán, chính xác thì các bạn nên tìm
              đến các công ty dịch vụ kiểm toán uy tín.
            </p>
            <p>
              Bảng giá dịch vụ kiểm toán sẽ được thông báo cụ thể tới bạn khi các bạn chủ
              động liên hệ Hotline của công ty. Giá dịch vụ kiểm toán tại{" "}
              <strong className="font-medium text-foreground">TAF</strong> cam kết cạnh
              tranh nhất thị trường.
            </p>
            <p>
              Chất lượng dịch vụ kiểm toán sẽ do chính khách hàng giám sát thông qua ứng
              dụng công nghệ với tài khoản trực tuyến miễn phí. Qua đó, khách hàng có thể
              trực tiếp giám sát công việc của kiểm toán viên.
            </p>
          </div>
        </div>

        {/* CTA card */}
        <div className="mt-12 bg-cream/60 border border-border rounded-[2px] p-6 md:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="t-cta text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Yêu cầu báo giá
              </p>
              <h3 className="t-h2 md:text-[1.75rem] text-foreground">
                Phí kiểm toán <span className="italic text-accent-foreground">minh bạch</span>,
                tương xứng phạm vi công việc
              </h3>
              <p className="t-body mt-3 text-muted-foreground">
                TAF báo giá sau khảo sát sơ bộ. Chất lượng dịch vụ được khách hàng theo dõi
                trực tiếp qua tài khoản trực tuyến.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
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
                className="inline-flex items-center justify-between gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-background hover:border-accent transition"
              >
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} /> Hotline / Zalo
                </span>
                <span className="font-mono text-accent-foreground">0924 580 580</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="t-h2 md:text-[2.25rem] text-foreground">
              Câu hỏi thường gặp về dịch vụ kiểm toán
            </h2>
            <p className="t-body-sm mt-4 text-muted-foreground">
              Giải đáp về chi phí, thời gian, hồ sơ và phạm vi dịch vụ kiểm toán độc lập
              tại TAF.
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
                  <AccordionContent className="t-body text-foreground/80 pl-10 pr-2">
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
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          Dịch vụ liên quan
        </h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {RELATED.map((r, i) => (
            <Link
              key={r.to}
              to={r.to}
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
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
