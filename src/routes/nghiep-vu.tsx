import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ElementType, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Calculator,
  Receipt,
  ShieldCheck,
  FileSearch,
  ArrowLeftRight,
  Scale,
  Newspaper,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Pagination } from "@/components/site/Pagination";
import { useT } from "@/lib/i18n/context";


const PAGE_SIZE = 6;

export const Route = createFileRoute("/nghiep-vu")({
  head: () => ({
    meta: [
      { title: "Nghiệp vụ kế toán – thuế – kiểm toán | TAF" },
      {
        name: "description",
        content:
          "Kiến thức nghiệp vụ kế toán, thuế, kiểm toán và tài chính doanh nghiệp do đội ngũ TAF tổng hợp — giúp kế toán trưởng, CFO và chủ doanh nghiệp áp dụng vào thực tế.",
      },
      { property: "og:title", content: "Nghiệp vụ kế toán – thuế – kiểm toán | TAF" },
      {
        property: "og:description",
        content: "Kiến thức nghiệp vụ kế toán, thuế và kiểm toán cho doanh nghiệp.",
      },
      { property: "og:url", content: "/nghiep-vu" },
    ],
    links: [{ rel: "canonical", href: "/nghiep-vu" }],
  }),
  component: KnowledgeHub,
});

const TOPICS: { icon: ElementType; title: string; desc: string; to: string }[] = [
  {
    icon: Calculator,
    title: "Kế toán doanh nghiệp",
    desc: "Tổ chức sổ sách, lập báo cáo tài chính và chế độ kế toán theo quy định hiện hành.",
    to: "/dich-vu-ke-toan-tron-goi-tphcm",
  },
  {
    icon: Receipt,
    title: "Thuế & tuân thủ",
    desc: "Chính sách thuế GTGT, TNDN, TNCN, môn bài và nghĩa vụ kê khai – quyết toán.",
    to: "/dich-vu-tu-van-thue",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm toán",
    desc: "Kiểm toán báo cáo tài chính, kiểm toán nội bộ và kiểm toán xây dựng cơ bản.",
    to: "/dich-vu-kiem-toan",
  },
  {
    icon: FileSearch,
    title: "Quyết toán & rà soát sổ sách",
    desc: "Rà soát, đối chiếu số liệu và hoàn thiện hồ sơ phục vụ quyết toán thuế cuối năm.",
    to: "/dich-vu-quyet-toan-thue-cuoi-nam",
  },
  {
    icon: ArrowLeftRight,
    title: "Chuyển đổi báo cáo IFRS",
    desc: "Khác biệt giữa VAS và IFRS, lộ trình áp dụng và chuyển đổi báo cáo tài chính.",
    to: "/dich-vu-chuyen-doi-bao-cao-ifrs",
  },
  {
    icon: Scale,
    title: "M&A & rà soát đặc biệt",
    desc: "Due diligence tài chính, thuế và rủi ro trong giao dịch mua bán – sáp nhập.",
    to: "/dich-vu-ra-soat-dac-biet-m-a-due-diligence",
  },
];

type Article = { title: string; href: string; tag: string; excerpt: string; image: string };

const ARTICLES: Article[] = [
  {
    title: "7 việc cần làm ngay sau khi thành lập công ty tại Việt Nam",
    href: "/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam",
    tag: "Doanh nghiệp",
    excerpt:
      "Từ hệ thống kế toán, nghĩa vụ thuế, BHXH đến quy chế nội bộ và dòng tiền: 7 việc nền tảng giúp doanh nghiệp mới khởi đầu vững chắc.",
    image: "/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam.jpg",
  },
  {
    title: "Chia sẻ chi phí dịch vụ cho bên HTKD có phải xuất hóa đơn?",
    href: "/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don",
    tag: "Thuế",
    excerpt:
      "Khi bên đại diện chia sẻ lại chi phí dịch vụ cho các bên hợp tác kinh doanh thì có phải xuất hóa đơn? Căn cứ pháp lý và lưu ý hạch toán.",
    image: "/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don.jpg",
  },
  {
    title: "Thủ tục cần thiết sau khi thành lập doanh nghiệp",
    href: "/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep",
    tag: "Doanh nghiệp",
    excerpt:
      "Các thủ tục cần làm ngay sau khi thành lập: khai thuế – môn bài, tài khoản ngân hàng, chữ ký số, hóa đơn điện tử, BHXH và cam kết vốn.",
    image: "/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep.jpg",
  },
  {
    title: "Giảm thiểu sai sót tài chính với công ty kiểm toán hàng đầu tại Việt Nam",
    href: "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam",
    tag: "Kiểm toán",
    excerpt:
      "Vai trò của kiểm toán, lợi ích, quy trình chuyên nghiệp và cách doanh nghiệp giảm thiểu sai sót, kiểm soát rủi ro tài chính.",
    image: "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam.jpg",
  },
  {
    title: "Chứng từ kế toán là gì? Phân loại, nội dung và điều kiện hợp lệ",
    href: "/chung-tu-ke-toan-la-gi",
    tag: "Kế toán",
    excerpt:
      "Khái niệm, phân loại, nội dung chủ yếu và điều kiện để chứng từ kế toán hợp lệ; lưu ý khi ghi sổ và quyết toán thuế.",
    image: "/chung-tu-ke-toan-la-gi.jpg",
  },
  {
    title: "Hồ sơ, thủ tục đăng ký hộ kinh doanh cá thể",
    href: "/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the",
    tag: "Hộ kinh doanh",
    excerpt:
      "Điều kiện, hồ sơ cần thiết, phương thức đăng ký và thời gian xử lý khi đăng ký hộ kinh doanh cá thể theo quy định hiện hành.",
    image: "/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the.jpg",
  },
  {
    title: "Tối ưu hóa tài chính với dịch vụ kế toán thuế chuyên nghiệp",
    href: "/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep",
    tag: "Kế toán – Thuế",
    excerpt:
      "Dịch vụ kế toán thuế chuyên nghiệp giúp doanh nghiệp tối ưu tài chính, giảm rủi ro thuế và đảm bảo pháp lý; quy trình, lợi ích và đối tượng nên dùng.",
    image: "/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep.jpg",
  },
  {
    title: "Kiểm toán là gì? Những công việc quan trọng của kiểm toán viên",
    href: "/kiem-toan-la-gi",
    tag: "Kiểm toán",
    excerpt:
      "Khái niệm kiểm toán, các loại kiểm toán, công việc của kiểm toán viên và vai trò của kiểm toán với doanh nghiệp.",
    image: "/kiem-toan-la-gi.jpg",
  },
  {
    title: "Kiểm toán nhà nước là gì? Các giai đoạn phát triển của kiểm toán nhà nước",
    href: "/kiem-toan-nha-nuoc-la-gi-cac-giai-doan-phat-trien-cua-kiem-toan-nha-nuoc",
    tag: "Kiểm toán",
    excerpt:
      "Khái niệm, vai trò và các giai đoạn phát triển của kiểm toán nhà nước tại Việt Nam; phân biệt với kiểm toán độc lập.",
    image: "/kiem-toan-nha-nuoc-la-gi.jpg",
  },
];

function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-red-ink">
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

function ArticleCard({ a }: { a: Article }) {
  return (
    <Link
      to={a.href}
      className="group flex flex-col overflow-hidden bg-card border border-border rounded-[3px] hover:border-accent hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={a.image}
          alt={a.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <TagChip>{a.tag}</TagChip>
        <h3 className="mt-2.5 font-display text-lg leading-snug text-foreground group-hover:text-brand-red-ink transition-colors">
          {a.title}
        </h3>
        <p className="t-body-sm mt-2.5 text-muted-foreground flex-1">
          {a.excerpt}
        </p>
        <div className="mt-4">
          <ReadMore />
        </div>
      </div>
    </Link>
  );
}

function KnowledgeHub() {
  const t = useT();
  const [featured, ...rest] = ARTICLES;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(rest.length / PAGE_SIZE);
  const pageItems = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goToPage(p: number) {
    setPage(p);
    document.getElementById("ds-bai-viet")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Breadcrumb items={[{ label: t("Nghiệp vụ") }]} />


      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Nghiệp vụ</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.08] text-foreground">
            Kiến thức nghiệp vụ{" "}
            <span className="italic text-accent-foreground">kế toán, thuế &amp; kiểm toán</span>.
          </h1>
          <p className="t-lead mt-5 text-muted-foreground">
            Tổng hợp kiến thức nghiệp vụ theo từng chủ đề, biên soạn bởi đội ngũ TAF — ưu tiên nội
            dung áp dụng được ngay vào công việc của kế toán trưởng, CFO và chủ doanh nghiệp.
          </p>
        </div>
        <div className="rule-gold mt-9" />
      </Section>

      {/* Bài nổi bật */}
      {featured && (
        <Section className="!pt-0 !pb-8">
          <Link
            to={featured.href}
            className="group grid lg:grid-cols-2 overflow-hidden border border-border rounded-[3px] hover:border-accent hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <TagChip>{featured.tag}</TagChip>
              <h2 className="t-h2 mt-3 text-foreground group-hover:text-brand-red-ink transition-colors">
                {featured.title}
              </h2>
              <p className="t-body mt-4 text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-6">
                <ReadMore />
              </div>
            </div>
          </Link>
        </Section>
      )}

      {/* Lưới bài còn lại */}
      {rest.length > 0 && (
        <Section className="!pt-0">
          <div id="ds-bai-viet" className="scroll-mt-24">
            <SectionHeading eyebrow={t("Bài viết")} title={t("Bài viết nghiệp vụ")} />
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pageItems.map((a) => (
              <ArticleCard key={a.href} a={a} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onChange={goToPage} />
        </Section>
      )}

      {/* Chủ đề chuyên môn */}
      <Section className="!pt-0">
        <div className="rule-gold mb-12" />
        <SectionHeading
          eyebrow={t("Chủ đề")}
          title={t("Chủ đề chuyên môn")}
          lead={t("Tìm hiểu nhanh theo từng lĩnh vực và liên kết tới các dịch vụ tương ứng của TAF.")}
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.title}
                to={t.to}
                className="group relative flex flex-col bg-card border border-border rounded-[2px] p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] border border-border bg-secondary text-accent-foreground transition-colors duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="t-h3 text-foreground">
                  <span className="draw-underline">{t.title}</span>
                </h2>
                <p className="t-body-sm mt-3 text-muted-foreground flex-1">
                  {t.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-brand-red-ink">
                  Tìm hiểu
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA đọc tin tức */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] bg-secondary text-brand-red shrink-0">
              <Newspaper size={20} strokeWidth={1.6} />
            </span>
            <div>
              <h2 className="t-h3 text-foreground">Tin tức & cập nhật pháp lý</h2>
              <p className="mt-1 text-sm text-muted-foreground font-serif">
                Theo dõi các cập nhật mới nhất về kế toán, thuế và kiểm toán.
              </p>
            </div>
          </div>
          <Link
            to="/tin-tuc"
            className="group shrink-0 inline-flex items-center justify-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-5 py-3 text-sm font-medium rounded-[2px] transition-colors"
          >
            <span className="uppercase tracking-[0.15em]">Xem tin tức</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Section>
    </>
  );
}
