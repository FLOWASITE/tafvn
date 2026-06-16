
CREATE TABLE public.page_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL,
  value smallint NOT NULL CHECK (value BETWEEN 1 AND 5),
  voter_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (slug, voter_hash)
);
CREATE INDEX page_ratings_slug_idx ON public.page_ratings(slug);

GRANT SELECT ON public.page_ratings TO anon, authenticated;
GRANT ALL ON public.page_ratings TO service_role;

ALTER TABLE public.page_ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ratings readable by everyone"
  ON public.page_ratings FOR SELECT
  USING (true);

CREATE OR REPLACE FUNCTION public.get_page_rating(_slug text)
RETURNS TABLE(rating_count bigint, rating_sum bigint, rating_avg numeric)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COUNT(*)::bigint            AS rating_count,
    COALESCE(SUM(value), 0)::bigint AS rating_sum,
    COALESCE(ROUND(AVG(value)::numeric, 2), 0) AS rating_avg
  FROM public.page_ratings
  WHERE slug = _slug;
$$;

GRANT EXECUTE ON FUNCTION public.get_page_rating(text) TO anon, authenticated, service_role;
