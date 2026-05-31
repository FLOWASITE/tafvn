-- Enum page types
CREATE TYPE public.page_type AS ENUM ('service', 'province', 'article', 'static');

-- Authors
CREATE TABLE public.authors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  credentials TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.authors TO anon, authenticated;
GRANT ALL ON public.authors TO service_role;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authors readable by everyone" ON public.authors FOR SELECT USING (true);

-- Offices (NAP)
CREATE TABLE public.offices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address_line TEXT NOT NULL,
  ward TEXT,
  district TEXT,
  city TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  hours TEXT,
  lat NUMERIC,
  lng NUMERIC,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.offices TO anon, authenticated;
GRANT ALL ON public.offices TO service_role;
ALTER TABLE public.offices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Offices readable by everyone" ON public.offices FOR SELECT USING (true);

-- Pages
CREATE TABLE public.pages (
  slug TEXT NOT NULL PRIMARY KEY,
  type public.page_type NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT,
  h1 TEXT,
  excerpt TEXT,
  body_html TEXT,
  og_image TEXT,
  author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL,
  faq JSONB,
  breadcrumb JSONB,
  noindex BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX pages_type_published_idx ON public.pages (type, published_at) WHERE published_at IS NOT NULL;

GRANT SELECT ON public.pages TO anon, authenticated;
GRANT ALL ON public.pages TO service_role;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published pages readable by everyone" ON public.pages FOR SELECT USING (published_at IS NOT NULL AND published_at <= now());

-- Contact leads
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  source_path TEXT,
  user_agent TEXT,
  ip_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_leads TO anon, authenticated;
GRANT ALL ON public.contact_leads TO service_role;
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.contact_leads FOR INSERT WITH CHECK (true);

-- Redirects
CREATE TABLE public.redirects (
  from_path TEXT NOT NULL PRIMARY KEY,
  to_path TEXT NOT NULL,
  status INT NOT NULL DEFAULT 301,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.redirects TO anon, authenticated;
GRANT ALL ON public.redirects TO service_role;
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Redirects readable by everyone" ON public.redirects FOR SELECT USING (true);

-- updated_at trigger helper
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

CREATE TRIGGER trg_pages_updated BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_authors_updated BEFORE UPDATE ON public.authors
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER trg_offices_updated BEFORE UPDATE ON public.offices
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Seed primary office (placeholder TAF — sẽ update từ crawl thật)
INSERT INTO public.offices (name, address_line, ward, district, city, phone, email, hours, is_primary, sort_order)
VALUES ('Văn phòng chính TAF', 'Toà nhà TAF, đường Nguyễn Văn Linh', 'Phường Tân Phong', 'Quận 7', 'TP. Hồ Chí Minh', '+84 28 1234 5678', 'info@taf.vn', 'T2–T6: 08:00–17:30', true, 0);
