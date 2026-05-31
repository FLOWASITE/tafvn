import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getRequestIP, getRequestHeader } from "@tanstack/react-start/server";
import { createHash } from "crypto";

const Schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(200).optional().or(z.literal("")),
  service_interest: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(1).max(5000),
  source_path: z.string().max(500).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = Schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Vui lòng điền đầy đủ họ tên, email hợp lệ và lời nhắn." },
            { status: 400 },
          );
        }
        const d = parsed.data;
        let ipHash: string | null = null;
        try {
          const ip = getRequestIP({ xForwardedFor: true });
          if (ip) ipHash = createHash("sha256").update(ip).digest("hex").slice(0, 32);
        } catch {
          // ignore
        }
        const ua = getRequestHeader("user-agent") ?? null;

        const { error } = await supabaseAdmin.from("contact_leads").insert({
          name: d.name.trim(),
          email: d.email.trim(),
          phone: d.phone?.trim() || null,
          company: d.company?.trim() || null,
          service_interest: d.service_interest?.trim() || null,
          message: d.message.trim(),
          source_path: d.source_path?.trim() || null,
          user_agent: ua,
          ip_hash: ipHash,
        });

        if (error) {
          console.error("contact insert error", error);
          return Response.json({ error: "Không thể lưu yêu cầu, vui lòng thử lại." }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
