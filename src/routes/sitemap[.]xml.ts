import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { listAllPublishedSlugs } from "@/lib/pages.functions";
import { SERVICES, PROVINCES } from "@/lib/site";

// TODO: thay bằng URL chính thức khi đổi domain (vd. https://taf.vn).
const BASE_URL = "";

const STATIC_PATHS: string[] = [
  "/",
  "/dich-vu",
  "/dich-vu-kiem-toan",
  "/dich-vu-ke-toan",
  "/dich-vu-thanh-lap-doanh-nghiep-tron-goi",
  "/dia-ban",
  "/tin-tuc",
  "/gioi-thieu",
  "/doi-ngu",
  "/van-phong",
  "/lien-he",
  "/chinh-sach-bao-mat",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const dbPages = await listAllPublishedSlugs();

        const entries: { path: string; lastmod?: string }[] = [];
        for (const p of STATIC_PATHS) entries.push({ path: p });
        for (const s of SERVICES) entries.push({ path: `/dich-vu/${s.slug}` });
        for (const p of PROVINCES) entries.push({ path: `/dia-ban/${p.slug}` });
        for (const row of dbPages) {
          // skip slugs already covered by static lists
          const path = `/${row.slug}`;
          if (entries.some((e) => e.path === path)) continue;
          entries.push({ path, lastmod: row.updated_at });
        }

        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}</url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
