
# Kế hoạch xây dựng lại taf.vn

Stack: TanStack Start + SSR (đã có sẵn trong project này), Tailwind v4, Lovable Cloud (Supabase) làm CMS nhẹ + form lead, Motion cho animation. Tiếng Việt v1, route chừa sẵn i18n.

## Phase 1 — Hướng thiết kế (chốt trước khi code)

Sau khi bạn duyệt plan này, tôi sẽ generate **3 hướng thiết kế render thật** (HTML+Tailwind) để bạn chọn. Cả 3 đều theo brief: đỏ chủ đạo, hiện đại + đẳng cấp + nghiêm túc, có hơi hướng AI tinh tế, font hỗ trợ Vietnamese subset đầy đủ (loại Inter/Roboto/Arial). Khác nhau ở metaphor, mật độ, hierarchy và register của motion.

Bạn pick 1 → tôi build theo đúng composition + tokens của hướng đó.

## Phase 2 — Design system + khung site

- Tokens (oklch) đỏ TAF trong `src/styles.css`: primary, surfaces, ink, accent, shadow. Light + dark.
- Font qua `@fontsource` (không CDN), bắt buộc có Vietnamese subset.
- Layout shell trong `__root.tsx`: header với nav rõ ràng + breadcrumb component, footer chuẩn NAP duy nhất, `<main>` đúng 1 lần, `<HeadContent />` / `<Scripts />` chuẩn TanStack.
- Component thư viện: Button, Card, Section, FAQ accordion, Stat, Testimonial, Author byline (chức danh + chứng chỉ KTV), Breadcrumb, CTA block, ContactForm.

## Phase 3 — Routes & nội dung mẫu (chưa migrate dữ liệu thật)

Cấu trúc route (mỗi route file có `head()` riêng — title đặt từ khóa trước, meta description riêng, OG/Twitter, canonical leaf-only):

```
/                       trang chủ
/dich-vu                tổng quan dịch vụ
/dich-vu/$slug          template dịch vụ (động, đọc Supabase)
/dia-ban                tổng quan phạm vi hoạt động
/dia-ban/$slug          template trang tỉnh (động)
/tin-tuc                listing
/tin-tuc/$slug          bài viết (động)
/gioi-thieu, /doi-ngu, /van-phong, /lien-he, /chinh-sach-*
/sitemap.xml            server route (sinh từ DB + routes)
/api/public/contact     server route nhận lead → Supabase
```

Chuẩn bị i18n: tất cả route phẳng ở root v1; sau này wrap thành `/$lang/...` layout, helpers `t()` đã sẵn sàng — không phải refactor.

Trang chủ + dịch vụ + tỉnh + bài viết được điền nội dung **placeholder hợp lý** (không phải lorem; viết đúng tinh thần ngành kiểm toán) để bạn xem giao diện thật. Chatbot AI: chỉ UI floating button + panel placeholder, chưa nối LLM.

## Phase 4 — Supabase làm CMS nhẹ

Bật Lovable Cloud, tạo bảng:

- `pages` (slug PK, type enum [`service`,`province`,`article`,`static`], title, meta_description, h1, body_html, og_image, author_id, published_at, updated_at, noindex bool, faq jsonb, breadcrumb jsonb)
- `authors` (id, name, title, credentials, bio, avatar)
- `offices` (name, address, ward, district, city, phone, email, hours, lat, lng) — nguồn NAP duy nhất
- `contact_leads` (form submit)
- `redirects` (from_path PK, to_path, status default 301) — chuẩn bị cho phase migrate
- RLS: read public cho `pages/authors/offices`; `contact_leads` chỉ insert anon + service_role read; `redirects` read public.

Route động (`/dich-vu/$slug`, `/dia-ban/$slug`, `/tin-tuc/$slug`) loader gọi `createServerFn` đọc Supabase qua `supabaseAdmin` (public reads), inject vào `head()` → SSR có sẵn title/meta/JSON-LD đúng dữ liệu.

## Phase 5 — SEO kỹ thuật

- Mỗi trang: 1 H1 duy nhất, heading sạch (không nhiễm tên class), text trong HTML — không phụ thuộc JS để hiện (motion chỉ dùng `whileInView` đảm bảo nội dung mặc định visible).
- JSON-LD: `Organization` + `LocalBusiness` ở `__root.tsx` (NAP từ `offices`); `Service` per trang dịch vụ; `FAQPage` khi có FAQ; `BreadcrumbList` mọi trang sâu; `Article` cho tin tức. **Không** tự gắn `AggregateRating`.
- `og:image` chỉ ở leaf (không ở root); dynamic route đọc `og_image` từ DB.
- `src/routes/sitemap[.]xml.ts` server route: gộp routes tĩnh + query toàn bộ `pages` published từ Supabase.
- `public/robots.txt` mở; thêm `Sitemap:` khi domain trỏ về.
- Ảnh `<img>` đều có `alt`, `loading="lazy"`, `aspect-*` để CLS=0.
- Sau go-live: chạy SEO review tool và sửa.

## Phase 6 — Migrate URL & nội dung (sau khi khung ổn)

Quy trình tách riêng để bạn chạy khi sẵn sàng:

1. **Crawl**: kết nối Firecrawl, lấy sitemap `taf.vn/sitemap.xml`, crawl từng URL → trích slug/title/meta/H1/body/ảnh/ngày/loại. Làm sạch heading rác `"icon but chi"`, chuẩn hóa NAP về `offices` table.
2. **Import**: script Node đẩy vào `pages` (giữ nguyên slug gốc, kể cả đuôi `.html`).
3. **URL strategy**:
   - Ưu tiên giữ nguyên path cũ → route `$slug` match được, không cần redirect.
   - Path bắt buộc đổi → bảng `redirects` 301 1-1; server route `__root` middleware check và `Response.redirect(301)`.
   - Trang trùng → chọn 1 canonical, 301 phần còn lại.
4. **Trang tỉnh**: viết lại nội dung **khác biệt thật** (khách hàng/đặc thù từng tỉnh). Tôi sẽ tạo template structure + checklist nội dung; bạn (hoặc tôi với AI) soạn từng tỉnh. Trang nào chưa kịp viết khác biệt → set `noindex=true` thay vì xóa.
5. **Tác giả**: thay "Boss TAF" bằng KTV thật trong `authors`.
6. **Post-launch**: submit sitemap GSC, theo dõi Coverage 4–8 tuần.

## Chi tiết kỹ thuật

- SSR mặc định TanStack Start (đã có), không cần `entry-client/server`.
- Data: `createServerFn` + `queryOptions` + `ensureQueryData` trong loader, `useSuspenseQuery` trong component (canonical pattern của template).
- Form liên hệ: server route `/api/public/contact` validate Zod + rate-limit + insert `contact_leads`.
- Motion: dùng `motion/react`, nội dung text render mặc định (không `opacity:0` chờ JS).
- Tokens đỏ TAF chỉ qua semantic class (`bg-primary`, `text-foreground`...), không hard-code màu trong component.

## Ngoài phạm vi v1

- LLM thật cho chatbot (chỉ UI).
- Bản tiếng Anh (route đã chừa cấu trúc).
- Trỏ DNS Cloudflare về taf.vn — bạn tự làm khi go-live.

---

**Bước tiếp theo nếu duyệt plan**: tôi gọi tool generate 3 hướng thiết kế và gửi bạn pick.
