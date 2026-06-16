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
  "/dich-vu-kiem-toan-noi-bo",
  "/dich-vu-kiem-toan-xay-dung-co-ban",
  "/dich-vu-ke-toan-tron-goi-tphcm",
  "/dich-vu-ke-toan-thue-cho-ho-kinh-doanh",
  "/dich-vu-nhan-lam-so-sach-ke-toan",
  "/dich-vu-quyet-toan-thue-cuoi-nam",
  "/dich-vu-tu-van-thue",
  "/dich-vu-chuyen-doi-bao-cao-ifrs",
  "/dich-vu-ra-soat-dac-biet-m-a-due-diligence",
  "/dich-vu-thanh-lap-doanh-nghiep-tron-goi",
  "/tuyen-dung",
  "/dia-ban",
  "/tin-tuc",
  "/ho-kinh-doanh-da-ke-khai-thue-quy-i-2026-co-can-dieu-chinh-lai-nhung-dieu-phai-kiem-tra-ngay-theo-quy-dinh-thue-moi-nam-2026",
  "/kiem-toan-la-gi",
  "/kiem-toan-nha-nuoc-la-gi-cac-giai-doan-phat-trien-cua-kiem-toan-nha-nuoc",
  "/toi-uu-hoa-tai-chinh-voi-dich-vu-ke-toan-thue-chuyen-nghiep",
  "/ho-so-thu-tuc-dang-ky-ho-kinh-doanh-ca-the",
  "/phan-biet-giua-nguoi-dai-dien-phap-luat-nguoi-dai-dien-uy-quyen",
  "/chung-tu-ke-toan-la-gi",
  "/giam-thieu-sai-sot-tai-chinh-voi-cong-ty-kiem-toan-hang-dau-tai-viet-nam",
  "/thu-tuc-can-thiet-sau-khi-thanh-lap-doanh-nghiep",
  "/tax-accounting-service",
  "/dich-vu-chuyen-doi-ho-kinh-doanh-thanh-cong-ty",
  "/chia-se-chi-phi-dich-vu-cho-ben-htkd-phai-xuat-hoa-don",
  "/7-viec-can-lam-ngay-sau-khi-thanh-lap-cong-ty-tai-viet-nam",
  "/nghiep-vu",
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
