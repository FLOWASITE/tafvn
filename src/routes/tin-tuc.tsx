import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ElementType, type ReactNode } from "react";
import {
  ArrowUpRight,
  Store,
  Receipt,
  Building2,
  Landmark,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { Pagination } from "@/components/site/Pagination";

const PAGE_SIZE = 6;

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức & cập nhật pháp lý thuế – kế toán 2026 | TAF" },
      {
        name: "description",
        content:
          "Cập nhật pháp lý kế toán, thuế và kiểm toán mới nhất năm 2026 dành cho doanh nghiệp và hộ kinh doanh tại Việt Nam, biên soạn bởi đội ngũ TAF.",
      },
      { property: "og:title", content: "Tin tức & cập nhật pháp lý thuế – kế toán 2026 | TAF" },
      { property: "og:description", content: "Cập nhật pháp lý kế toán, thuế và kiểm toán 2026." },
      { property: "og:url", content: "/tin-tuc" },
    ],
    links: [{ rel: "canonical", href: "/tin-tuc" }],
  }),
  component: NewsIndex,
});

type Article = {
  title: string;
  href: string;
  tag: string;
  excerpt: string;
  internal?: boolean;
  image?: string;
};

const TAG_ICONS: Record<string, ElementType> = {
  "Hộ kinh doanh": Store,
  "Thuế TNCN": Receipt,
  "Doanh nghiệp mới": Building2,
  "Doanh nghiệp": Building2,
  "Thuế TNDN": Landmark,
  "Kiểm toán": ShieldCheck,
};

const ARTICLES: Article[] = [
  {
    title:
      "Hộ kinh doanh đã kê khai thuế Quý I/2026 có cần điều chỉnh lại? Những điều phải kiểm tra ngay theo quy định thuế mới năm 2026",
    href: "/ho-kinh-doanh-da-ke-khai-thue-quy-i-2026-co-can-dieu-chinh-lai-nhung-dieu-phai-kiem-tra-ngay-theo-quy-dinh-thue-moi-nam-2026",
    internal: true,
    tag: "Hộ kinh doanh",
    excerpt:
      "Sau khi kê khai thuế Quý I/2026, hộ kinh doanh nên rà soát lại những nội dung nào để tránh sai sót theo quy định thuế mới.",
    image: "/ho-kinh-doanh-ke-khai-thue-quy-i-2026-taf.jpg",
  },
  {
    title:
      "5 sai sót phổ biến khi chi trả cho cá nhân không ký hợp đồng lao động và cách phòng tránh rủi ro thuế",
    href: "https://taf.vn/5-sai-sot-pho-bien-khi-chi-tra-cho-ca-nhan-khong-ky-hop-dong-lao-dong-va-cach-phong-tranh-rui-ro-thue.html",
    tag: "Thuế TNCN",
    excerpt:
      "Năm sai sót thường gặp khi chi trả cho cá nhân không ký hợp đồng lao động và cách phòng tránh rủi ro về thuế.",
  },
  {
    title:
      "Doanh nghiệp mới thành lập: Vì sao phải chuẩn bị kế toán ngay từ tháng đầu tiên năm 2026?",
    href: "https://taf.vn/doanh-nghiep-moi-thanh-lap-vi-sao-phai-chuan-bi-ke-toan-ngay-tu-thang-dau-tien-nam-2026.html",
    tag: "Doanh nghiệp mới",
    excerpt:
      "Vì sao doanh nghiệp mới thành lập nên chuẩn bị công tác kế toán ngay từ tháng đầu tiên trong năm 2026.",
  },
  {
    title:
      "Những khoản thu nhập được miễn thuế TNDN từ năm 2026: Cơ hội tối ưu hóa chi phí cho doanh nghiệp",
    href: "https://taf.vn/nhung-khoan-thu-nhap-duoc-mien-thue-tndn-tu-nam-2026-co-hoi-toi-uu-hoa-chi-phi-cho-doanh-nghiep.html",
    tag: "Thuế TNDN",
    excerpt:
      "Các khoản thu nhập được miễn thuế TNDN từ năm 2026 và cơ hội tối ưu hóa chi phí hợp lý cho doanh nghiệp.",
  },
  {
    title:
      "Quy định mới về hộ kinh doanh trên sàn thương mại điện tử không có chức năng thanh toán ra sao năm 2026?",
    href: "https://taf.vn/quy-dinh-moi-ve-ho-kinh-doanh-tren-san-thuong-mai-dien-tu-khong-co-chuc-nang-thanh-toan-ra-sao-nam-2026.html",
    tag: "Hộ kinh doanh",
    excerpt:
      "Quy định mới năm 2026 đối với hộ kinh doanh bán hàng trên sàn thương mại điện tử không có chức năng thanh toán.",
  },
  {
    title:
      'Chính sách "cấm" hộ kinh doanh doanh thu thấp xuất hóa đơn: Phân tích tác động và giải pháp',
    href: "https://taf.vn/chinh-sach-cam-ho-kinh-doanh-doanh-thu-thap-xuat-hoa-don-phan-tich-tac-dong-va-giai-phap.html",
    tag: "Hộ kinh doanh",
    excerpt:
      "Phân tích tác động của chính sách liên quan đến việc xuất hóa đơn với hộ kinh doanh doanh thu thấp và giải pháp.",
  },
  {
    title: "Phân biệt giữa người đại diện theo pháp luật & người đại diện theo ủy quyền",
    href: "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen",
    internal: true,
    tag: "Doanh nghiệp",
    excerpt:
      "Khái niệm, điểm giống và khác nhau, rủi ro khi nhầm lẫn và lưu ý khi xác lập người đại diện của doanh nghiệp.",
    image: "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen.jpg",
  },
  {
    title: "Professional, reputable, low-cost, full-package tax accounting service",
    href: "/tax-accounting-service",
    internal: true,
    tag: "Kế toán – Thuế",
    excerpt:
      "Bài viết tiếng Anh về dịch vụ kế toán thuế trọn gói của TAF: nội dung dịch vụ, bảng giá, lợi ích và quy trình.",
    image: "/tax-accounting-service.jpg",
  },
  {
    title: "Dịch vụ chuyển đổi hộ kinh doanh thành công ty",
    href: "/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty",
    internal: true,
    tag: "Doanh nghiệp",
    excerpt:
      "Quy định mới (NĐ 70/2025), ba phương án, so sánh HKD/công ty TNHH, quy trình và rủi ro khi chuyển đổi hộ kinh doanh thành công ty.",
    image: "/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty.jpg",
  },
];

function ExternalCard({
  article,
  className,
  children,
}: {
  article: Article;
  className?: string;
  children: ReactNode;
}) {
  if (article.internal) {
    return (
      <Link to={article.href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={article.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Cover({ tag, image, className }: { tag: string; image?: string; className?: string }) {
  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-[2px] bg-cream ${className ?? ""}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  const Icon = TAG_ICONS[tag] ?? Store;
  return (
    <div
      className={`relative overflow-hidden rounded-[2px] bg-gradient-to-br from-primary to-ink ${className ?? ""}`}
    >
      {/* họa tiết nền */}
      <span className="absolute -right-6 -bottom-8 font-display text-[7rem] leading-none text-primary-foreground/[0.06] select-none">
        TAF
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <Icon size={44} strokeWidth={1.25} className="text-accent/80" />
      </span>
      <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-brand-red" />
    </div>
  );
}

function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream/70 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}

function ReadMore() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-brand-red-ink">
      Đọc bài viết
      <ArrowUpRight
        size={14}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  );
}

function NewsIndex() {
  const [active, setActive] = useState("Tất cả");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => ["Tất cả", ...Array.from(new Set(ARTICLES.map((a) => a.tag)))], []);
  const filtered = useMemo(
    () => (active === "Tất cả" ? ARTICLES : ARTICLES.filter((a) => a.tag === active)),
    [active],
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const totalPages = Math.ceil(rest.length / PAGE_SIZE);
  const pageItems = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function selectTag(t: string) {
    setActive(t);
    setPage(1);
  }

  function goToPage(p: number) {
    setPage(p);
    document.getElementById("ds-tin-tuc")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Tin tức" }]} />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Tin tức &amp; cập nhật</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Cập nhật pháp lý{" "}
            <span className="italic text-accent-foreground">kế toán, thuế &amp; kiểm toán</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground font-serif leading-relaxed">
            Biên soạn bởi đội ngũ TAF — ưu tiên thông tin áp dụng được ngay vào công việc của chủ
            doanh nghiệp, kế toán trưởng và CFO.
          </p>
        </div>

        {/* Bộ lọc chủ đề */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => {
            const on = active === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => selectTag(t)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  on
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground/75 hover:border-accent hover:text-foreground"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        <div className="rule-gold mt-8" />
      </Section>

      {/* Bài nổi bật */}
      {featured && (
        <Section className="!pt-0">
          <ExternalCard
            article={featured}
            className="group grid lg:grid-cols-12 gap-6 lg:gap-9 border border-border rounded-[3px] p-5 md:p-7 hover:border-accent hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="lg:col-span-5 order-1 lg:order-none">
              <Cover tag={featured.tag} image={featured.image} className="aspect-[16/9]" />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <TagChip>{featured.tag}</TagChip>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={13} className="text-accent-foreground" /> 2026
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-[2rem] leading-snug text-foreground group-hover:text-brand-red-ink transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground font-serif leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6">
                <ReadMore />
              </div>
            </div>
          </ExternalCard>
        </Section>
      )}

      {/* Lưới bài còn lại */}
      <Section className="!pt-0">
        <div id="ds-tin-tuc" className="scroll-mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageItems.map((a) => (
            <ExternalCard
              key={a.href}
              article={a}
              className="group flex flex-col overflow-hidden bg-card border border-border rounded-[3px] hover:border-accent hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <Cover tag={a.tag} image={a.image} className="aspect-[16/9]" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <TagChip>{a.tag}</TagChip>
                  <span className="inline-flex items-center gap-1 text-[0.7rem] text-muted-foreground">
                    <Calendar size={12} className="text-accent-foreground" /> 2026
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-foreground group-hover:text-brand-red-ink transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground font-serif leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-5">
                  <ReadMore />
                </div>
              </div>
            </ExternalCard>
          ))}
        </div>
      </Section>
    </>
  );
}
