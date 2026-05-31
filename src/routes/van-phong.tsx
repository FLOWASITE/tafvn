import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, SectionHeading } from "@/components/site/Section";
import { listOffices } from "@/lib/offices.functions";

const officesQO = queryOptions({
  queryKey: ["offices"],
  queryFn: () => listOffices(),
});

export const Route = createFileRoute("/van-phong")({
  loader: ({ context }) => context.queryClient.ensureQueryData(officesQO),
  head: () => ({
    meta: [
      { title: "Văn phòng TAF — Địa chỉ và liên hệ" },
      {
        name: "description",
        content:
          "Địa chỉ, số điện thoại và giờ làm việc các văn phòng của TAF tại Việt Nam.",
      },
      { property: "og:title", content: "Văn phòng TAF" },
      { property: "og:description", content: "Địa chỉ và liên hệ các văn phòng TAF." },
      { property: "og:url", content: "/van-phong" },
    ],
    links: [{ rel: "canonical", href: "/van-phong" }],
  }),
  component: OfficesPage,
});

function OfficesPage() {
  const { data: offices } = useSuspenseQuery(officesQO);
  return (
    <>
      <Breadcrumb items={[{ label: "Văn phòng" }]} />
      <Section>
        <SectionHeading
          eyebrow="Văn phòng"
          title="Đến gặp TAF trực tiếp"
          lead="Khách hàng có thể tới văn phòng để trao đổi trực tiếp với KTV phụ trách hoặc đề nghị KTV đến trụ sở doanh nghiệp."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border">
          {offices.map((o) => (
            <article key={o.id} className="bg-background p-7">
              <div className="flex items-center gap-2 mb-3">
                {o.is_primary && (
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-accent-foreground border border-accent px-2 py-0.5 rounded-sm">
                    Trụ sở chính
                  </span>
                )}
              </div>
              <h2 className="font-display text-2xl text-foreground">{o.name}</h2>
              <address className="not-italic mt-4 space-y-2.5 text-sm font-serif text-foreground/85">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-accent-foreground mt-1 shrink-0" />
                  <span>
                    {o.address_line}
                    {o.ward ? `, ${o.ward}` : ""}
                    {o.district ? `, ${o.district}` : ""}, {o.city}
                  </span>
                </div>
                {o.phone && (
                  <div className="flex gap-3">
                    <Phone size={16} className="text-accent-foreground mt-1 shrink-0" />
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-accent-foreground">
                      {o.phone}
                    </a>
                  </div>
                )}
                {o.email && (
                  <div className="flex gap-3">
                    <Mail size={16} className="text-accent-foreground mt-1 shrink-0" />
                    <a href={`mailto:${o.email}`} className="hover:text-accent-foreground">
                      {o.email}
                    </a>
                  </div>
                )}
                {o.hours && (
                  <div className="flex gap-3">
                    <Clock size={16} className="text-accent-foreground mt-1 shrink-0" />
                    <span>{o.hours}</span>
                  </div>
                )}
              </address>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
