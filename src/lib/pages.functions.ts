import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type CmsPage = {
  slug: string;
  type: "service" | "province" | "article" | "static";
  title: string;
  meta_description: string | null;
  h1: string | null;
  excerpt: string | null;
  body_html: string | null;
  og_image: string | null;
  faq: { q: string; a: string }[] | null;
  breadcrumb: { label: string; to: string }[] | null;
  noindex: boolean;
  published_at: string | null;
  updated_at: string;
  author?: { name: string; title: string | null; credentials: string | null } | null;
};

export const getPage = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) =>
    z.object({ slug: z.string().min(1).max(300) }).parse(d),
  )
  .handler(async ({ data }): Promise<CmsPage | null> => {
    const { data: row, error } = await supabaseAdmin
      .from("pages")
      .select(
        "slug,type,title,meta_description,h1,excerpt,body_html,og_image,faq,breadcrumb,noindex,published_at,updated_at,authors(name,title,credentials)",
      )
      .eq("slug", data.slug)
      .not("published_at", "is", null)
      .lte("published_at", new Date().toISOString())
      .maybeSingle();

    if (error) {
      console.error("getPage error", error);
      return null;
    }
    if (!row) return null;
    return { ...(row as any), author: (row as any).authors ?? null } as CmsPage;
  });

export const listPagesByType = createServerFn({ method: "GET" })
  .inputValidator((d: { type: "service" | "province" | "article" | "static" }) =>
    z.object({ type: z.enum(["service", "province", "article", "static"]) }).parse(d),
  )
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("pages")
      .select("slug,title,excerpt,published_at,og_image,type")
      .eq("type", data.type)
      .not("published_at", "is", null)
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });
    if (error) {
      console.error("listPagesByType error", error);
      return [];
    }
    return rows ?? [];
  });

export const listAllPublishedSlugs = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("pages")
    .select("slug,type,updated_at,noindex")
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .eq("noindex", false);
  if (error) {
    console.error("listAllPublishedSlugs error", error);
    return [];
  }
  return data ?? [];
});
