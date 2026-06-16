import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  texts: z.array(z.string().min(1).max(4000)).min(1).max(80),
  lang: z.enum(["en", "ja", "ko"]),
});

const LANG_NAMES = { en: "English", ja: "Japanese", ko: "Korean" } as const;


export const translateBatch = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => InputSchema.parse(d))
  .handler(async ({ data }) => {
    const { createHash } = await import("crypto");
    const hashText = (s: string) => createHash("sha256").update(s).digest("hex");
    const { texts, lang } = data;
    // Dedupe đầu vào
    const uniq = Array.from(new Set(texts));
    const hashes = uniq.map(hashText);

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Tra cache
    const { data: cached } = await supabaseAdmin
      .from("translations")
      .select("source_hash, translated")
      .eq("lang", lang)
      .in("source_hash", hashes);

    const cacheMap = new Map<string, string>();
    for (const r of cached ?? []) cacheMap.set(r.source_hash, r.translated);

    // Phần cần dịch
    const missing: { text: string; hash: string }[] = [];
    uniq.forEach((t, i) => {
      if (!cacheMap.has(hashes[i])) missing.push({ text: t, hash: hashes[i] });
    });

    if (missing.length > 0) {
      const key = process.env.LOVABLE_API_KEY;
      if (!key) throw new Error("Missing LOVABLE_API_KEY");

      const sys = `You are a professional translator for a Vietnamese accounting/auditing firm website. Translate each numbered Vietnamese item into ${LANG_NAMES[lang]} accurately, preserving accounting/tax/audit terminology. Keep punctuation, casing style, brand names (TAF, VSA, IFRS, VAS, FDI, CPA), URLs and numbers unchanged. Return ONLY a JSON array of strings in the same order, no commentary.`;
      const user = missing.map((m, i) => `${i + 1}. ${m.text}`).join("\n");

      const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
          response_format: { type: "json_object" },
        }),
      });

      if (!resp.ok) {
        const t = await resp.text();
        throw new Error(`AI gateway ${resp.status}: ${t}`);
      }
      const json = await resp.json();
      const content: string = json.choices?.[0]?.message?.content ?? "[]";
      let arr: string[] = [];
      try {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) arr = parsed;
        else if (Array.isArray(parsed.translations)) arr = parsed.translations;
        else if (Array.isArray(parsed.items)) arr = parsed.items;
        else {
          // fallback: first array value
          const vals = Object.values(parsed);
          const firstArr = vals.find((v) => Array.isArray(v));
          if (firstArr) arr = firstArr as string[];
        }
      } catch {
        arr = [];
      }

      const rows = missing.map((m, i) => ({
        source_hash: m.hash,
        lang,
        source: m.text,
        translated: typeof arr[i] === "string" && arr[i].length > 0 ? arr[i] : m.text,
      }));

      // Upsert cache
      await supabaseAdmin.from("translations").upsert(rows, {
        onConflict: "source_hash,lang",
      });

      for (const r of rows) cacheMap.set(r.source_hash, r.translated);
    }

    // Trả về theo thứ tự gốc (texts), kể cả phần lặp
    const result = texts.map((t) => cacheMap.get(hashText(t)) ?? t);
    return { translations: result };
  });
