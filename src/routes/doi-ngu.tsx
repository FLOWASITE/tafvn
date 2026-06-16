import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/doi-ngu")({
  head: () => ({
    meta: [
      { title: "Đội ngũ KTV — TAF" },
      {
        name: "description",
        content:
          "Đội ngũ kiểm toán viên hành nghề của TAF, với chứng chỉ KTV do Bộ Tài chính cấp và kinh nghiệm phục vụ doanh nghiệp Việt Nam và FDI.",
      },
      { property: "og:title", content: "Đội ngũ KTV — TAF" },
      { property: "og:description", content: "Các kiểm toán viên hành nghề của TAF." },
      { property: "og:url", content: "/doi-ngu" },
    ],
    links: [{ rel: "canonical", href: "/doi-ngu" }],
  }),
  component: TeamPage,
});

const PEOPLE = [
  {
    name: "Đang cập nhật",
    title: "Phó Tổng Giám đốc phụ trách Kiểm toán",
    credentials: "KTV hành nghề — Bộ Tài chính",
    bio: "Hơn 18 năm kinh nghiệm kiểm toán doanh nghiệp FDI và niêm yết, chuyên ngành sản xuất.",
  },
  {
    name: "Đang cập nhật",
    title: "Giám đốc Tư vấn Thuế",
    credentials: "KTV hành nghề · Đại lý thuế",
    bio: "Chuyên thanh tra thuế, ưu đãi thuế cho dự án đầu tư mới, thuế nhà thầu nước ngoài.",
  },
  {
    name: "Đang cập nhật",
    title: "Trưởng phòng Kiểm toán Xây dựng cơ bản",
    credentials: "KTV hành nghề",
    bio: "Phụ trách kiểm toán quyết toán dự án vốn ngân sách và ODA tại miền Nam.",
  },
];

function TeamPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Đội ngũ" }]} />
      <Section>
        <SectionHeading
          eyebrow="Đội ngũ"
          title="Những người trực tiếp ký báo cáo kiểm toán."
          lead="Mỗi báo cáo TAF phát hành đều có chữ ký của KTV hành nghề được Bộ Tài chính cấp chứng chỉ. Dưới đây là một số thành viên dẫn dắt các tuyến dịch vụ."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {PEOPLE.map((p, i) => (
            <article key={i} className="bg-background p-7">
              <div className="aspect-[4/5] bg-muted mb-5 flex items-center justify-center">
                <span className="font-display text-5xl text-muted-foreground/50">
                  {p.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground">{p.name}</h3>
              <div className="text-sm text-accent-foreground mt-1">{p.title}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {p.credentials}
              </div>
              <p className="mt-4 text-sm text-foreground/80 font-serif leading-relaxed">{p.bio}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground font-serif italic max-w-2xl">
          Thông tin chi tiết của từng KTV (tên, số chứng chỉ hành nghề, ảnh chân dung) sẽ được cập
          nhật khi hoàn tất xác nhận nội bộ.
        </p>
      </Section>
    </>
  );
}
