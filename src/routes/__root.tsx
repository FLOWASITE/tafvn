import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";
import { listOffices } from "@/lib/offices.functions";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-foreground">404</p>
        <h1 className="mt-3 font-display text-4xl text-foreground">Không tìm thấy trang</h1>
        <p className="mt-3 text-sm text-muted-foreground font-serif">
          Đường dẫn bạn truy cập không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[2px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Trang không tải được</h1>
        <p className="mt-2 text-sm text-muted-foreground font-serif">
          Có sự cố phía hệ thống. Bạn có thể thử lại hoặc về trang chủ.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-[2px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Thử lại
          </button>
          <a
            href="/"
            className="rounded-[2px] border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: async () => {
    const offices = await listOffices();
    return { offices };
  },
  head: ({ loaderData }) => {
    const offices = loaderData?.offices ?? [];
    const primary = offices.find((o) => o.is_primary) ?? offices[0];
    const orgNode: Record<string, unknown> = {
      "@type": "Organization",
      "@id": "#organization",
      name: SITE.legalName,
      alternateName: SITE.name,
      foundingDate: String(SITE.established),
      description: SITE.description,
    };
    if (primary) {
      orgNode.address = {
        "@type": "PostalAddress",
        streetAddress: primary.address_line,
        addressLocality: [primary.ward, primary.district].filter(Boolean).join(", ") || primary.city,
        addressRegion: primary.city,
        addressCountry: "VN",
      };
      if (primary.phone) orgNode.telephone = primary.phone;
      if (primary.email) orgNode.email = primary.email;
      orgNode.contactPoint = offices
        .filter((o) => o.phone)
        .map((o) => ({
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: o.phone,
          ...(o.email ? { email: o.email } : {}),
          areaServed: "VN",
          availableLanguage: ["vi", "en"],
          name: o.name,
        }));
    }

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: `${SITE.legalName} — Kiểm toán độc lập, tư vấn thuế và kế toán` },
        { name: "description", content: SITE.description },
        { name: "author", content: SITE.legalName },
        { property: "og:site_name", content: SITE.name },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${SITE.name} — Kiểm toán độc lập tại Việt Nam` },
        { property: "og:description", content: SITE.description },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "stylesheet", href: appCss }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              orgNode,
              {
                "@type": "AccountingService",
                "@id": "#service",
                name: `${SITE.name} — Tư vấn Kiểm toán`,
                areaServed: "VN",
                serviceType: [
                  "Kiểm toán báo cáo tài chính",
                  "Kiểm toán quyết toán dự án",
                  "Tư vấn thuế",
                  "Dịch vụ kế toán",
                ],
                provider: { "@id": "#organization" },
              },
            ],
          }),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { offices } = Route.useLoaderData();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer offices={offices} />
      </div>
      <Chatbot />
    </QueryClientProvider>
  );
}
