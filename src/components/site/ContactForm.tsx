import { useState } from "react";
import { SERVICES } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      service_interest: String(fd.get("service_interest") ?? ""),
      message: String(fd.get("message") ?? ""),
      source_path: typeof window !== "undefined" ? window.location.pathname : "",
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Gửi không thành công");
      }
      setStatus("ok");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-accent bg-accent/10 p-6 rounded-[2px]">
        <h3 className="font-display text-xl text-foreground">Đã nhận yêu cầu của bạn</h3>
        <p className="mt-2 text-sm text-muted-foreground font-serif">
          KTV phụ trách của TAF sẽ liên hệ lại trong vòng 1 ngày làm việc. Cảm ơn bạn đã quan tâm.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Họ và tên *" name="name" required maxLength={200} />
        <Field label="Email *" name="email" type="email" required maxLength={200} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Số điện thoại" name="phone" maxLength={30} />
        <Field label="Công ty" name="company" maxLength={200} />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
          Dịch vụ quan tâm
        </label>
        <select
          name="service_interest"
          className="w-full px-3 py-2.5 border border-input bg-background text-sm rounded-[2px] focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">— Chưa xác định —</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
          Mô tả nhu cầu *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Quy mô doanh nghiệp, loại hình, thời điểm cần báo cáo…"
          className="w-full px-3 py-2.5 border border-input bg-background text-sm rounded-[2px] font-serif leading-relaxed focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive">{errorMsg || "Có lỗi xảy ra, vui lòng thử lại."}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-[2px] hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {status === "loading" ? "Đang gửi…" : "Gửi yêu cầu"}
      </button>
      <p className="text-xs text-muted-foreground">
        Bằng cách gửi, bạn đồng ý với{" "}
        <a href="/chinh-sach-bao-mat" className="underline decoration-accent">
          Chính sách bảo mật
        </a>{" "}
        của TAF.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="w-full px-3 py-2.5 border border-input bg-background text-sm rounded-[2px] focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}
