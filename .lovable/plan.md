
## Mục tiêu
Hỗ trợ 4 ngôn ngữ (Việt mặc định, Anh, Nhật, Hàn) cho **giao diện + nội dung tĩnh** (menu, label, các trang dịch vụ/giới thiệu/đội ngũ…). Bài blog trong DB (`pages`) **giữ tiếng Việt** ở giai đoạn này. URL theo prefix `/en/...`, `/ja/...`, `/ko/...`; tiếng Việt không có prefix.

## Cách hoạt động
1. **Locale từ URL**: middleware đọc segment đầu tiên (`en|ja|ko`); nếu có, gắn `locale` vào router context và rewrite path nội bộ về route gốc. Không có prefix → `vi`.
2. **Dịch tự động bằng AI**: gọi Lovable AI Gateway (`google/gemini-3-flash-preview`) qua `createServerFn`. Mỗi đoạn text được hash (sha256) và cache trong bảng `translations` để chỉ dịch một lần.
3. **Hai cấp dịch**:
   - **UI strings** (menu, button, label trong `site.ts`, header/footer, form): đóng gói trong `src/lib/i18n/strings.ts`. Lần build/khởi động đầu tiên, một server fn sẽ pre-translate cả 3 ngôn ngữ và lưu DB; client load qua loader `__root` rồi inject vào React Context `<LocaleProvider>`.
   - **Nội dung trang tĩnh** (JSX/markup trong các route `gioi-thieu`, `dich-vu-*`, v.v.): bọc bằng component `<T>{"..."}</T>`. Khi `locale !== "vi"`, `<T>` đọc bản dịch từ context (đã được loader nạp sẵn theo route). Bản dịch thiếu sẽ được dịch on-demand qua server fn, lưu DB, trả về.
4. **Language switcher**: nút trong Header chuyển prefix URL (`navigate({ to, params })`), giữ nguyên path còn lại; lưu lựa chọn vào cookie `locale` để landing đúng ngôn ngữ.
5. **SEO**: mỗi route emit `<link rel="alternate" hreflang="vi|en|ja|ko|x-default">` trỏ qua các prefix; `<html lang>` trong `__root` đổi theo locale; `head()` dịch `title`/`description` cùng cơ chế cache.

## Thay đổi kỹ thuật

**DB (migration mới)**
```sql
CREATE TABLE public.translations (
  source_hash text NOT NULL,
  lang text NOT NULL CHECK (lang IN ('en','ja','ko')),
  source text NOT NULL,
  translated text NOT NULL,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (source_hash, lang)
);
GRANT SELECT ON public.translations TO anon, authenticated;
GRANT ALL ON public.translations TO service_role;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read" ON public.translations FOR SELECT TO anon, authenticated USING (true);
```

**File mới**
- `src/lib/i18n/locales.ts` — `LOCALES = ['vi','en','ja','ko']`, names, RTL=false.
- `src/lib/i18n/context.tsx` — `<LocaleProvider>` + `useLocale()` + `<T>` component.
- `src/lib/i18n/translate.functions.ts` — `translateBatch({texts, lang})` server fn: tra cache → gọi AI Gateway cho phần thiếu → upsert DB → trả map.
- `src/lib/i18n/strings.ts` — danh sách string UI chung (menu, CTA, form, footer).
- `src/components/site/LanguageSwitcher.tsx`.

**File sửa**
- `src/router.tsx` / `__root.tsx`:
  - Loader đọc cookie + URL để xác định `locale`, nạp bundle UI strings từ DB, đặt `<html lang>` động.
  - Thêm hreflang vào `head()`.
- `src/routes/$lang/...` **KHÔNG** tạo (tránh nhân đôi 40 route). Thay vào đó dùng **splat layout** `_locale.tsx` đặt trước root: chặn URL bắt đầu bằng `/en|/ja|/ko` qua một `beforeLoad` ở root route → set `context.locale` và `redirect` nội bộ (không đổi URL hiển thị) bằng cách dùng `useRouterState().location.pathname.replace(/^\/(en|ja|ko)/,'')` để match route gốc — phương án thực hiện cụ thể: **đăng ký các route prefix `en.tsx`, `ja.tsx`, `ko.tsx` như layout routes có `<Outlet />`** và child là re-export của các trang gốc. Để tránh duplicate code, dùng một route catch-all `$lang.$.tsx` render lại bằng router lookup nội bộ.
- `src/components/site/Header.tsx` — thêm `<LanguageSwitcher />`.
- `src/lib/site.ts` — tách các string sang `strings.ts` để dịch.
- Các route trang tĩnh (gioi-thieu, doi-ngu, tuyen-dung, lien-he, dich-vu.tsx, dich-vu.index.tsx, 7 trang `dich-vu-*`): bọc text bằng `<T>`.

**Ngân sách AI**: lần dịch đầu cho 3 ngôn ngữ × ~vài trăm chuỗi. Sau đó hầu hết hit cache (0 token).

## Phạm vi giai đoạn này
- ✅ Menu, header/footer, form liên hệ, các trang tĩnh đã liệt kê.
- ✅ Language switcher + URL prefix + hreflang.
- ❌ Bài blog/tin tức trong bảng `pages` (giữ tiếng Việt — sẽ làm sau nếu cần).
- ❌ Dịch input người dùng / SEO meta của từng bài blog.

## Rủi ro & lưu ý
- Lần đầu mỗi trang ở ngôn ngữ mới sẽ có delay 1–2s do gọi AI; có spinner.
- Chất lượng dịch AI cho thuật ngữ kiểm toán có thể cần chỉnh tay sau → sẽ bổ sung trang admin chỉnh bản dịch ở giai đoạn 2 nếu bạn yêu cầu.
- Cookie-based locale + URL prefix có thể gây mismatch khi share link; ưu tiên URL.

Sau khi bạn duyệt plan, mình sẽ triển khai theo thứ tự: migration → i18n infra → switcher + header → bọc `<T>` cho các trang tĩnh → hreflang/SEO.
