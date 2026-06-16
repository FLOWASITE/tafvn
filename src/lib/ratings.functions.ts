import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, getRequestIP } from "@tanstack/react-start/server";
import { createHash, randomUUID } from "crypto";
import { z } from "zod";

export type PageRating = {
  ratingCount: number;
  ratingSum: number;
  ratingAvg: number;
};

const VOTER_COOKIE = "taf_voter";

function getOrSetVoterId(): string {
  let id = getCookie(VOTER_COOKIE);
  if (!id) {
    id = randomUUID();
    setCookie(VOTER_COOKIE, id, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365 * 2,
    });
  }
  return id;
}

function voterHash(id: string, slug: string): string {
  const ip = (() => {
    try {
      return getRequestIP({ xForwardedFor: true }) ?? "";
    } catch {
      return "";
    }
  })();
  return createHash("sha256").update(`${id}|${ip}|${slug}`).digest("hex");
}

export const getPageRating = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) =>
    z.object({ slug: z.string().min(1).max(300) }).parse(d),
  )
  .handler(async ({ data }): Promise<PageRating> => {
    try {
      const { supabaseAdmin } = await import(
        "@/integrations/supabase/client.server"
      );
      const { data: rows, error } = await supabaseAdmin.rpc(
        "get_page_rating",
        { _slug: data.slug },
      );
      if (error || !rows || rows.length === 0) {
        return { ratingCount: 0, ratingSum: 0, ratingAvg: 0 };
      }
      const r = rows[0] as {
        rating_count: number;
        rating_sum: number;
        rating_avg: number;
      };
      return {
        ratingCount: Number(r.rating_count) || 0,
        ratingSum: Number(r.rating_sum) || 0,
        ratingAvg: Number(r.rating_avg) || 0,
      };
    } catch (e) {
      console.error("getPageRating failed", e);
      return { ratingCount: 0, ratingSum: 0, ratingAvg: 0 };
    }
  });

export const submitPageRating = createServerFn({ method: "POST" })
  .inputValidator((d: { slug: string; value: number }) =>
    z
      .object({
        slug: z.string().min(1).max(300),
        value: z.number().int().min(1).max(5),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<PageRating & { alreadyVoted: boolean }> => {
    const voterId = getOrSetVoterId();
    const hash = voterHash(voterId, data.slug);
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { error: insertError } = await supabaseAdmin
      .from("page_ratings")
      .insert({ slug: data.slug, value: data.value, voter_hash: hash });
    const alreadyVoted = Boolean(insertError && insertError.code === "23505");
    if (insertError && !alreadyVoted) {
      console.error("submitPageRating insert error", insertError);
    }
    const { data: rows } = await supabaseAdmin.rpc("get_page_rating", {
      _slug: data.slug,
    });
    const r = (rows && rows[0]) || {
      rating_count: 0,
      rating_sum: 0,
      rating_avg: 0,
    };
    return {
      ratingCount: Number(r.rating_count) || 0,
      ratingSum: Number(r.rating_sum) || 0,
      ratingAvg: Number(r.rating_avg) || 0,
      alreadyVoted,
    };
  });
