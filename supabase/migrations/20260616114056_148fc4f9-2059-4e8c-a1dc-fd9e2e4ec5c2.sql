
CREATE TABLE public.translations (
  source_hash text NOT NULL,
  lang text NOT NULL CHECK (lang IN ('en','ja','ko')),
  source text NOT NULL,
  translated text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (source_hash, lang)
);
GRANT SELECT ON public.translations TO anon, authenticated;
GRANT ALL ON public.translations TO service_role;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Translations readable by everyone"
  ON public.translations FOR SELECT
  TO anon, authenticated
  USING (true);
