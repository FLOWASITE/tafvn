
CREATE OR REPLACE FUNCTION public.get_page_rating(_slug text)
RETURNS TABLE(rating_count bigint, rating_sum bigint, rating_avg numeric)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT
    COUNT(*)::bigint            AS rating_count,
    COALESCE(SUM(value), 0)::bigint AS rating_sum,
    COALESCE(ROUND(AVG(value)::numeric, 2), 0) AS rating_avg
  FROM public.page_ratings
  WHERE slug = _slug;
$$;
