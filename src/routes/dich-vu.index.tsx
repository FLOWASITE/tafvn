import { createFileRoute, Link } from "@tanstack/react-router";
import type { ElementType } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Building2,
  Layers,
  Scale,
  BadgeCheck,
  Clock,
  Phone,
} from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_GENERAL } from "@/lib/site";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/dich-vu/")({
  head: () => ({
    meta: [
      { title: "Dịch vụ kiểm toán, kế toán và thành lập doanh nghiệp — TAF" },
      {
        name: "description",
        content:
          "Các nhóm dịch vụ của TAF: kiểm toán (BCTC, nội bộ, xây dựng cơ bản), kế toán (trọn gói, hộ kinh doanh, làm lại sổ sách, rà soát quyết toán thuế), thành lập doanh nghiệp trọn gói, tư vấn thuế, chuyển đổi báo cáo IFRS và rà soát đặc biệt M&A (Due Diligence).",
      },
      {
        property: "og:title",
        content: "Dịch vụ kiểm toán, kế toán và thành lập doanh nghiệp — TAF",
      },
      {
        property: "og:description",
        content: "Kiểm toán, kế toán và thành lập doanh nghiệp cho doanh nghiệp Việt Nam và FDI.",
      },
      { property: "og:url", content: "/dich-vu" },
    ],
    links: [{ rel: "canonical", href: "/dich-vu" }],
  }),
  component: ServicesIndex,
});

type SubService = { title: string; desc: string; href?: string };
type Category = {
  no: string;
  icon: ElementType;
  title: string;
  blurb: string;
  detailPath?: string;
  items: SubService[];
};

const CATEGORIES: Category[] = [
  {
    no: "01",
    icon: ShieldCheck,
    title: "Dịch vụ kiểm toán",
    blurb:
      "Kiểm toán độc lập theo Chuẩn mực Kiểm toán Việt Nam (VSA) — phục vụ công bố thông tin, vay vốn, quyết toán dự án và yêu cầu của cơ quan quản lý.",
    detailPath: "/dich-vu-kiem-toan",
    items: [
      {
        title: "Kiểm toán báo cáo tài chính",
        desc: "Kiểm toán BCTC năm cho doanh nghiệp FDI, công ty đại chúng và doanh nghiệp có vốn nhà nước; báo cáo phát hành đúng hạn nộp.",
        href: "/dich-vu-kiem-toan",
      },
      {
        title: "Kiểm toán nội bộ",
        desc: "Đánh giá hệ thống kiểm soát nội bộ, nhận diện rủi ro và đưa ra khuyến nghị cải tiến quy trình.",
        href: "/dich-vu-kiem-toan-noi-bo",
      },
      {
        title: "Kiểm toán xây dựng cơ bản",
        desc: "Kiểm toán quyết toán vốn đầu tư dự án xây dựng cơ bản hoàn thành (ngân sách nhà nước, vốn doanh nghiệp, ODA).",
        href: "/dich-vu-kiem-toan-xay-dung-co-ban",
      },
    ],
  },
  {
    no: "02",
    icon: Calculator,
    title: "Dịch vụ kế toán",
    blurb:
      "Ghi sổ, lập báo cáo tài chính và kê khai thuế trọn gói; rà soát và làm lại sổ sách cho doanh nghiệp và hộ kinh doanh.",
    detailPath: "/dich-vu-ke-toan-tron-goi-tphcm",
    items: [
      {
        title: "Kế toán trọn gói",
        desc: "Ghi sổ, lập BCTC và kê khai thuế định kỳ cho doanh nghiệp vừa và nhỏ, văn phòng đại diện nước ngoài.",
        href: "/dich-vu-ke-toan-tron-goi-tphcm",
      },
      {
        title: "Kế toán cho hộ kinh doanh",
        desc: "Lập sổ sách, kê khai và quyết toán thuế phù hợp quy định hiện hành cho hộ kinh doanh cá thể.",
        href: "/dich-vu-ke-toan-thue-cho-ho-kinh-doanh",
      },
      {
        title: "Làm lại sổ sách",
        desc: "Xây dựng lại hệ thống sổ sách kế toán cho các kỳ chưa hoàn chỉnh hoặc còn sai lệch.",
        href: "/dich-vu-nhan-lam-so-sach-ke-toan",
      },
      {
        title: "Rà soát quyết toán thuế, rà lại sổ sách",
        desc: "Soát xét sổ sách và hồ sơ thuế trước các đợt thanh tra, kiểm tra và quyết toán thuế.",
        href: "/dich-vu-quyet-toan-thue-cuoi-nam",
      },
    ],
  },
  {
    no: "03",
    icon: Building2,
    title: "Dịch vụ thành lập doanh nghiệp",
    blurb:
      "Đăng ký thành lập doanh nghiệp trọn gói: soạn hồ sơ, xin giấy phép, khắc dấu, đăng ký thuế và mở tài khoản ngân hàng.",
    detailPath: "/dich-vu-thanh-lap-doanh-nghiep-tron-goi",
    items: [
      {
        title: "Thành lập doanh nghiệp / công ty trọn gói",
        desc: "Trọn gói từ hồ sơ đến giấy phép kinh doanh, con dấu và mã số thuế — hoàn tất trong 3–5 ngày làm việc.",
        href: "/dich-vu-thanh-lap-doanh-nghiep-tron-goi",
      },
    ],
  },
  {
    no: "04",
    icon: Layers,
    title: "Dịch vụ khác",
    blurb:
      "Các dịch vụ chuyên sâu theo nhu cầu cụ thể: tối ưu tuân thủ thuế, chuyển đổi báo cáo theo chuẩn quốc tế và rà soát phục vụ giao dịch M&A.",
    items: [
      {
        title: "Tư vấn thuế",
        desc: "Soát xét tuân thủ thuế, lập kế hoạch thuế và hỗ trợ doanh nghiệp trong các đợt thanh tra, kiểm tra của cơ quan thuế.",
        href: "/dich-vu-tu-van-thue",
      },
      {
        title: "Chuyển đổi báo cáo IFRS",
        desc: "Hỗ trợ chuyển đổi báo cáo tài chính từ VAS sang IFRS phục vụ công ty mẹ nước ngoài hoặc mục tiêu niêm yết.",
        href: "/dich-vu-chuyen-doi-bao-cao-ifrs",
      },
      {
        title: "Rà soát đặc biệt cho mục đích M&A (Due Diligence)",
        desc: "Due diligence tài chính và soát xét đặc biệt phục vụ hoạt động mua bán — sáp nhập (M&A).",
        href: "/dich-vu-ra-soat-dac-biet-m-a-due-diligence",
      },
    ],
  },
];

const COMMITMENTS: { icon: ElementType; title: string; body: string }[] = [
  {
    icon: Scale,
    title: "Độc lập",
    body: "Báo cáo không chịu ảnh hưởng bởi quan hệ kinh doanh hay lợi ích tài chính.",
  },
  {
    icon: BadgeCheck,
    title: "Đúng chuẩn mực",
    body: "Áp dụng Chuẩn mực Kiểm toán Việt Nam (VSA), tham chiếu IFRS khi cần.",
  },
  {
    icon: Clock,
    title: "Đúng thời hạn",
    body: "Kế hoạch bám sát hạn nộp BCTC — khách hàng không bị phạt chậm nộp.",
  },
];

function SubServiceRow({ item }: { item: SubService }) {
  const content = (
    <>
      <div className="min-w-0">
        <h3 className="font-display text-lg md:text-xl text-foreground leading-snug">
          <span className="draw-underline">{item.title}</span>
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground font-serif leading-relaxed">
          {item.desc}
        </p>
        {!item.href && (
          <span className="mt-2 inline-block text-[0.65rem] uppercase tracking-[0.15em] text-accent-foreground/80">
            Liên hệ tư vấn
          </span>
        )}
      </div>
      <ArrowUpRight
        size={18}
        className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-brand-red-ink"
      />
    </>
  );
  const cls =
    "group/row flex items-start justify-between gap-6 border-b border-border py-5 transition-colors hover:bg-cream/50";
  return item.href ? (
    <a href={item.href} className={cls}>
      {content}
    </a>
  ) : (
    <Link to="/lien-he" className={cls}>
      {content}
    </Link>
  );
}

function ServicesIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "Dịch vụ" }]} />

      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Tổng quan dịch vụ</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] text-foreground">
            Trọn bộ dịch vụ{" "}
            <span className="italic text-accent-foreground">kiểm toán, kế toán</span> và tư vấn
            doanh nghiệp.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-serif leading-relaxed">
            Từ lúc khai sinh doanh nghiệp đến mỗi kỳ quyết toán, TAF đồng hành bằng đội ngũ kiểm
            toán viên có chứng chỉ hành nghề. Chọn một dịch vụ để xem phạm vi công việc và quy
            trình triển khai.
          </p>
        </div>
        <div className="rule-gold mt-10" />
      </Section>

      {/* Các nhóm dịch vụ */}
      {CATEGORIES.map((cat, idx) => {
        const Icon = cat.icon;
        return (
          <Section key={cat.no} className={idx === 0 ? "!pt-0" : "!pt-0"}>
            {idx > 0 && <div className="rule-gold mb-14" />}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Cột giới thiệu nhóm */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] border border-border bg-secondary text-accent-foreground">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground tabular-nums">
                    {cat.no}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl text-foreground leading-tight">
                  {cat.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground font-serif leading-relaxed">
                  {cat.blurb}
                </p>
                {cat.detailPath ? (
                  <a
                    href={cat.detailPath}
                    className="group mt-5 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-brand-red-ink"
                  >
                    Xem trang dịch vụ
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <Link
                    to="/lien-he"
                    className="group mt-5 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-brand-red-ink"
                  >
                    Liên hệ tư vấn
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                )}
              </div>

              {/* Cột danh sách dịch vụ con */}
              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {cat.items.map((item) => (
                    <SubServiceRow key={item.title} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Dải cam kết */}
      <Section className="!py-0">
        <div className="rule-gold" />
      </Section>
      <Section>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {COMMITMENTS.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-background p-8">
                <Icon className="text-brand-red" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 font-serif leading-relaxed">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.25rem] leading-tight text-foreground">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
              Giải đáp nhanh về đối tượng bắt buộc kiểm toán, giá trị pháp lý của báo cáo, chi phí
              và thời gian thực hiện.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQ_GENERAL.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="font-display text-base md:text-lg text-foreground py-5 text-left">
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

      {/* CTA báo giá */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground mb-3 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="inline-block w-6 h-px bg-accent/60" />
                Yêu cầu báo giá
              </p>
              <h2 className="font-display text-2xl md:text-[1.85rem] leading-tight text-foreground">
                Chưa chắc dịch vụ nào phù hợp?{" "}
                <span className="italic text-accent-foreground">TAF tư vấn miễn phí.</span>
              </h2>
              <p className="mt-3 text-muted-foreground font-serif text-base leading-relaxed">
                Gửi yêu cầu hoặc gọi trực tiếp — chúng tôi khảo sát sơ bộ và đề xuất phương án kèm
                báo giá cụ thể trong vòng 3 ngày làm việc.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-between gap-2 bg-brand-red text-white px-6 py-4 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-brand-red)_60%,transparent)]"
              >
                <span className="uppercase tracking-[0.15em]">Yêu cầu báo giá</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform"
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
    </>
  );
}
