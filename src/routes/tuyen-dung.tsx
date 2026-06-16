import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, GraduationCap, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/tuyen-dung")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng — Cơ hội nghề nghiệp tại TAF" },
      {
        name: "description",
        content:
          "TAF tuyển dụng kiểm toán viên, trợ lý kiểm toán, kế toán viên, chuyên viên tư vấn thuế và thực tập sinh. Môi trường hành nghề chuẩn mực, lộ trình lấy chứng chỉ KTV rõ ràng.",
      },
      { property: "og:title", content: "Tuyển dụng — Cơ hội nghề nghiệp tại TAF" },
      {
        property: "og:description",
        content:
          "Gia nhập đội ngũ kiểm toán độc lập của TAF: kiểm toán viên, kế toán, tư vấn thuế và thực tập sinh.",
      },
      { property: "og:url", content: "/tuyen-dung" },
    ],
    links: [{ rel: "canonical", href: "/tuyen-dung" }],
  }),
  component: CareersPage,
});

const RECRUIT_EMAIL = "info@taf.vn";
const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

const WHY = [
  {
    icon: ShieldCheck,
    title: "Hành nghề đúng chuẩn mực",
    body: "Làm việc trực tiếp trên các hợp đồng kiểm toán độc lập theo Chuẩn mực Kiểm toán Việt Nam (VSA), được hướng dẫn bởi KTV hành nghề được Bộ Tài chính cấp chứng chỉ.",
  },
  {
    icon: TrendingUp,
    title: "Lộ trình lấy chứng chỉ KTV",
    body: "Hỗ trợ ôn thi và tích lũy kinh nghiệm để dự thi chứng chỉ Kiểm toán viên (CPA), Đại lý thuế; lộ trình thăng tiến từ trợ lý đến trưởng nhóm rõ ràng.",
  },
  {
    icon: Users,
    title: "Khách hàng đa dạng",
    body: "Tiếp xúc khách hàng FDI (Nhật, Hàn, Đài Loan, châu Âu), doanh nghiệp niêm yết và dự án đầu tư công — mở rộng chuyên môn nhanh chóng.",
  },
];

const POSITIONS: {
  title: string;
  type: string;
  location: string;
  summary: string;
  requirements: string[];
}[] = [
  {
    title: "Kiểm toán viên / Trợ lý kiểm toán",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh · Hà Nội",
    summary:
      "Thực hiện các phần hành kiểm toán báo cáo tài chính, kiểm toán quyết toán dự án; làm việc tại văn phòng khách hàng theo mùa kiểm toán.",
    requirements: [
      "Tốt nghiệp Kế toán, Kiểm toán, Tài chính hoặc tương đương",
      "Trợ lý: 0–3 năm kinh nghiệm; KTV: có chứng chỉ CPA là lợi thế",
      "Thành thạo Excel, hiểu chuẩn mực kế toán VAS; tiếng Anh đọc hiểu hồ sơ là lợi thế",
    ],
  },
  {
    title: "Kế toán viên / Chuyên viên tư vấn thuế",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    summary:
      "Ghi sổ kế toán, lập báo cáo tài chính và kê khai thuế cho khách hàng dịch vụ kế toán trọn gói; tư vấn tuân thủ thuế GTGT, TNDN, TNCN.",
    requirements: [
      "Tốt nghiệp Kế toán / Tài chính; tối thiểu 1 năm kinh nghiệm kế toán dịch vụ",
      "Nắm vững quy định thuế hiện hành và phần mềm kế toán (Misa, Fast)",
      "Cẩn thận, chịu được áp lực kỳ kê khai và quyết toán",
    ],
  },
  {
    title: "Thực tập sinh Kiểm toán / Kế toán",
    type: "Thực tập",
    location: "TP. Hồ Chí Minh · Hà Nội",
    summary:
      "Tham gia hỗ trợ nhóm kiểm toán trong mùa cao điểm, học việc thực tế các phần hành cơ bản; phù hợp sinh viên năm 3–4 hoặc mới tốt nghiệp.",
    requirements: [
      "Sinh viên năm cuối chuyên ngành Kế toán, Kiểm toán, Tài chính",
      "Có thể tham gia tối thiểu 3 tháng, ưu tiên toàn thời gian mùa kiểm toán",
      "Ham học hỏi, trung thực, tỉ mỉ với số liệu",
    ],
  },
];

function CareersPage() {
  const t = useT();
  const subject = encodeURIComponent("Ứng tuyển tại TAF");
  return (
    <>
      <Breadcrumb items={[{ label: t("Tuyển dụng") }]} />


      {/* Hero */}
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Eyebrow>Tuyển dụng</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            Bắt đầu sự nghiệp kiểm toán tại một hãng giữ nghề đúng chuẩn mực.
          </h1>
          <p className="t-lead mt-6 text-muted-foreground">
            {SITE.legalName} luôn tìm kiếm những người trẻ nghiêm túc với nghề kế toán — kiểm
            toán. Tại TAF, bạn được cầm tay chỉ việc bởi KTV hành nghề, làm thật trên hồ sơ thật
            và có lộ trình rõ ràng để lấy chứng chỉ nghề nghiệp.
          </p>
        </div>
      </Section>

      {/* Why TAF */}
      <Section className="!pt-4">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="bg-background p-7">
                <Icon className="text-brand-red" size={26} strokeWidth={1.5} />
                <h3 className="t-h3 mt-4 text-foreground">{w.title}</h3>
                <p className="t-body-sm mt-3 text-foreground/80">
                  {w.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Open positions */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow={t("Vị trí đang tuyển")}
          title={t("Các vị trí TAF đang tìm người.")}
          lead={t("Nếu bạn thấy mình phù hợp với một trong các vị trí dưới đây, hãy gửi CV cho chúng tôi. TAF phản hồi mọi hồ sơ trong vòng 5 ngày làm việc.")}
        />

        <div className="mt-12 space-y-px bg-border border border-border">
          {POSITIONS.map((p) => (
            <article key={p.title} className="bg-background p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-2xl">
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap size={14} /> {p.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} /> {p.location}
                    </span>
                  </div>
                  <p className="t-body-sm mt-4 text-foreground/80">
                    {p.summary}
                  </p>
                  <ul className="mt-4 space-y-2 font-serif text-sm text-foreground/85">
                    {p.requirements.map((r, i) => (
                      <li key={i} className="border-l-2 border-accent pl-4">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`mailto:${RECRUIT_EMAIL}?subject=${encodeURIComponent(
                    `Ứng tuyển: ${p.title}`,
                  )}`}
                  className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors rounded-[2px]"
                >
                  Ứng tuyển
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground font-serif italic max-w-2xl">
          Không thấy vị trí phù hợp? TAF vẫn luôn chào đón hồ sơ ứng tuyển tự do — chúng tôi sẽ
          liên hệ khi có vị trí phù hợp với kinh nghiệm của bạn.
        </p>
      </Section>

      {/* How to apply CTA */}
      <Section className="!pt-0">
        <div className="border border-border bg-muted/40 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Cách nộp hồ sơ
            </h2>
            <p className="mt-4 font-serif text-foreground/85 leading-relaxed">
              Gửi CV (kèm bảng điểm nếu là thực tập sinh) tới email tuyển dụng của TAF, hoặc liên
              hệ trực tiếp qua Hotline/Zalo. Vui lòng ghi rõ vị trí ứng tuyển ở tiêu đề email.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${RECRUIT_EMAIL}?subject=${subject}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-brand-red text-white hover:bg-brand-red/90 transition-colors rounded-[2px]"
              >
                <Mail size={16} /> {RECRUIT_EMAIL}
              </a>
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium border border-border text-foreground hover:border-brand-red hover:text-brand-red transition-colors rounded-[2px]"
              >
                <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
