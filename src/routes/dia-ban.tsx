import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading } from "@/components/site/Section";
import { PROVINCES } from "@/lib/site";

export const Route = createFileRoute("/dia-ban")({
  head: () => ({
    meta: [
      { title: "Địa bàn phục vụ — TAF Auditing" },
      {
        name: "description",
        content:
          "TAF phục vụ khách hàng tại hơn 60 tỉnh, thành phố trên toàn Việt Nam, tập trung tại các trung tâm kinh tế và khu công nghiệp lớn.",
      },
      { property: "og:title", content: "Địa bàn phục vụ — TAF" },
      { property: "og:description", content: "Mạng lưới khách hàng của TAF tại Việt Nam." },
      { property: "og:url", content: "/dia-ban" },
    ],
    links: [{ rel: "canonical", href: "/dia-ban" }],
  }),
  component: ProvincesIndex,
});

function ProvincesIndex() {
  const byRegion = PROVINCES.reduce<Record<string, typeof PROVINCES>>((acc, p) => {
    (acc[p.region] ||= []).push(p);
    return acc;
  }, {});

  return (
    <>
      <Breadcrumb items={[{ label: "Địa bàn" }]} />
      <Section>
        <SectionHeading
          eyebrow="Phạm vi hoạt động"
          title="Địa bàn TAF phục vụ"
          lead="TAF có KTV sẵn sàng đến trụ sở khách hàng tại các tỉnh và thành phố sau. Mỗi địa bàn có trang riêng mô tả ngành nghề trọng điểm và đặc thù pháp lý."
        />
        <div className="mt-12 space-y-12">
          {Object.entries(byRegion).map(([region, items]) => (
            <div key={region}>
              <h2 className="font-display text-xl text-foreground mb-4">{region}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    to="/dia-ban/$slug"
                    params={{ slug: p.slug }}
                    className="border border-border p-4 rounded-[2px] hover:border-accent transition-colors flex items-center justify-between"
                  >
                    <span className="font-display text-base text-foreground">{p.name}</span>
                    <span className="text-xs text-muted-foreground">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
