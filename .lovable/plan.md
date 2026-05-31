# Kế hoạch build TAF v1 — Corporate Prestige

Hướng đã chốt: **Corporate Prestige** — navy đậm + gold accent, Playfair Display (heading) + Source Serif 4 / Inter (body), cảm giác Big4 châu Âu, đẳng cấp truyền thống, nghiêm túc. Đỏ TAF được giữ làm accent thứ cấp (logo, dấu) để vẫn nhận diện được thương hiệu, nhưng palette chính là navy + gold + cream.

## 1. Design system (`src/styles.css` + fonts)

Tokens oklch (light + dark):
- `--background` cream `oklch(0.98 0.01 85)`, `--foreground` navy `oklch(0.18 0.04 260)`
- `--primary` navy deep `oklch(0.22 0.06 260)`, `--primary-foreground` cream
- `--accent` gold `oklch(0.72 0.12 80)`, `--accent-foreground` navy
- `--brand-red` (TAF red, dùng cho logo + dấu) `oklch(0.48 0.18 25)`
- `--muted` ivory, `--border` warm gray, `--ring` gold
- Shadow elegant + gradient subtle navy→navy-glow

Fonts qua `@fontsource` (Vietnamese subset bắt buộc):
- `@fontsource/playfair-display` (700, 900) → headings
- `@fontsource/source-serif-4` (400, 600) → body dài, article
- `@fontsource/inter` (400, 500, 600) → UI, nav, form
Import trong `src/router.tsx` hoặc shell, set qua CSS variables `--font-display / --font-serif / --font-sans`.

## 2. Khung shell (`__root.tsx`)

- Header: logo TAF (wordmark serif + dấu đỏ), nav ngang (Dịch vụ, Địa bàn, Giới thiệu, Đội ngũ, Tin tức, Liên hệ), CTA "Yêu cầu báo giá" gold outline
- Breadcrumb component (ẩn ở `/`)
- `<main>` 1 lần, `<Outlet/>`
- Footer: NAP duy nhất (từ `offices`), license info, social, sitemap link, copyright
- `HeadContent` + `Scripts` đúng chuẩn TanStack
- JSON-LD `Organization` + `LocalBusiness` ở root (KHÔNG og:image, KHÔNG canonical ở root)
- Sitewide meta defaults; per-route override

## 3. Component thư viện (`src/components/`)

Button (variants: primary navy, gold outline, ghost), Card (border mỏng + shadow elegant), Section (container + eyebrow), FAQ accordion, Stat (số lớn serif), Testimonial (quote serif italic), AuthorByline (avatar + chức danh + số CCKT), Breadcrumb, CTABlock, ContactForm (Zod + server route).

## 4. Routes (Phase 3 — nội dung placeholder hợp lý, chưa migrate)

```
src/routes/
  __root.tsx
  index.tsx                 trang chủ: hero + USP + dịch vụ chính + stat + testimonial + CTA
  dich-vu.tsx               tổng quan dịch vụ
  dich-vu.$slug.tsx         template dịch vụ (động, Supabase)
  dia-ban.tsx               tổng quan tỉnh
  dia-ban.$slug.tsx         template tỉnh (động)
  tin-tuc.tsx               listing
  tin-tuc.$slug.tsx         bài viết (động)
  gioi-thieu.tsx
  doi-ngu.tsx
  van-phong.tsx
  lien-he.tsx
  chinh-sach-bao-mat.tsx
  sitemap[.]xml.ts          server route
  api/public/contact.ts     server route nhận lead
```

Mỗi route có `head()` riêng: title từ khóa trước, meta description riêng, og:title/og:description, canonical chỉ ở leaf, og:image chỉ ở leaf khi có ảnh thật. Cấu trúc i18n: route phẳng v1, sau wrap `/$lang/...` không refactor.

## 5. Supabase CMS (Phase 4)

Bảng (đầy đủ GRANT + RLS):
- `pages` (slug PK, type enum [service|province|article|static], title, meta_description, h1, body_html, og_image, author_id, published_at, updated_at, noindex bool, faq jsonb, breadcrumb jsonb)
- `authors` (id, name, title, credentials, bio, avatar)
- `offices` (NAP duy nhất: name, address, ward, district, city, phone, email, hours, lat, lng)
- `contact_leads` (insert anon, read service_role)
- `redirects` (from_path PK, to_path, status default 301)

RLS: read public cho `pages/authors/offices/redirects`; `contact_leads` chỉ insert anon. Route động loader dùng `createServerFn` đọc qua `supabaseAdmin` → inject vào `head()` SSR-ready.

## 6. SEO kỹ thuật (Phase 5)

- 1 H1 mỗi trang, text mặc định visible (motion chỉ `whileInView`)
- JSON-LD: Organization+LocalBusiness ở root; Service per `/dich-vu/$slug`; FAQPage khi có FAQ; BreadcrumbList mọi trang sâu; Article cho tin tức. **Không** AggregateRating
- `sitemap.xml` server route gộp routes tĩnh + `pages` published
- `robots.txt` mở, chưa baked Sitemap URL (chờ domain)
- Ảnh có alt, `loading="lazy"`, aspect ratio
- Chatbot AI: chỉ floating button + panel placeholder (chưa LLM)

## 7. Migrate (Phase 6 — sau khi khung ổn)

Crawl Firecrawl → import `pages` giữ nguyên slug `.html` → `redirects` cho path đổi → viết lại trang tỉnh khác biệt thật (nếu chưa kịp set `noindex`) → thay "Boss TAF" bằng KTV thật → go-live + Search Console.

## Chi tiết kỹ thuật

- TanStack Start SSR mặc định, không cần entry-client/server
- Data: `createServerFn` + `queryOptions` + `ensureQueryData` trong loader + `useSuspenseQuery` trong component
- Form `/api/public/contact`: Zod validate + rate-limit + insert `contact_leads`
- Motion `motion/react`, text render mặc định không opacity:0
- Chỉ semantic class (`bg-primary`, `text-foreground`), không hard-code màu

## Phạm vi loop tới (sau khi duyệt plan này)

1. Bật Lovable Cloud + tạo migration đầy đủ bảng/GRANT/RLS
2. Cài fonts + ghi tokens vào `src/styles.css`
3. Build `__root.tsx` shell (header/footer/JSON-LD/NAP placeholder)
4. Build component library
5. Build trang chủ + các trang tĩnh với nội dung placeholder hợp lý theo ngành
6. Build route động đọc Supabase + sitemap.xml + /api/public/contact
7. Chatbot UI placeholder

Migrate nội dung thật (Phase 6) tách thành loop riêng sau.

## Ngoài phạm vi v1

LLM thật cho chatbot, bản EN (route đã chừa), DNS trỏ taf.vn.