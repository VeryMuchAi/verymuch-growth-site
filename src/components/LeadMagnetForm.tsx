"use client";

import { FormEvent, useState } from "react";
import type { LeadMagnetConfig } from "@/lib/lead-magnet";
import { useTranslations } from "next-intl";

interface Props {
  config: LeadMagnetConfig;
}

type FieldErrors = Record<string, string | "required" | "invalid_email" | "personal_email">;

// Free/consumer email providers — not accepted in lead magnet forms
const BLOCKED_DOMAINS = new Set([
  "gmail.com", "googlemail.com",
  "hotmail.com", "hotmail.es", "hotmail.co.uk", "hotmail.fr", "hotmail.de",
  "outlook.com", "outlook.es",
  "live.com", "live.es",
  "yahoo.com", "yahoo.es", "yahoo.co.uk", "yahoo.fr", "yahoo.de",
  "icloud.com", "me.com", "mac.com",
  "aol.com",
  "msn.com",
  "protonmail.com", "proton.me",
  "tutanota.com", "tuta.io",
  "yandex.com", "yandex.ru",
  "mail.com", "mail.ru",
  "inbox.com",
  "zoho.com",
  "gmx.com", "gmx.de", "gmx.net",
  "web.de",
  "qq.com", "163.com", "126.com",
]);

function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && BLOCKED_DOMAINS.has(domain);
}

type ErrorCode = "required" | "invalid_email" | "personal_email";

function validate(
  fields: LeadMagnetConfig["content"]["form"]["fields"],
  data: Record<string, string>
): Record<string, ErrorCode | string> {
  const errors: Record<string, ErrorCode | string> = {};
  for (const field of fields) {
    const val = (data[field.name] ?? "").trim();

    if (field.required && !val) {
      errors[field.name] = "required";
      continue;
    }

    if (field.type === "email" && val) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errors[field.name] = "invalid_email";
      } else if (isPersonalEmail(val)) {
        errors[field.name] = "personal_email";
      }
    }
  }
  return errors;
}

export default function LeadMagnetForm({ config }: Props) {
  const { form, success } = config.content;
  const [loading, setLoading]         = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [apiError, setApiError]       = useState<string | null>(null);
  const [submitted, setSubmitted]     = useState(false);
  const t = useTranslations("LeadMagnetForm");

  function errorMessage(fieldName: string, fieldLabel: string): string {
    const code = fieldErrors[fieldName];
    if (!code) return "";
    if (code === "required")       return `${fieldLabel} ${t("error_required")}`;
    if (code === "invalid_email")  return t("error_invalid_email");
    if (code === "personal_email") return t("error_personal_email");
    return code;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setApiError(null);

    // Collect values via FormData — guarantees name="name" is always read
    const fd = new FormData(e.currentTarget);
    const rawData: Record<string, string> = {};
    for (const field of form.fields) {
      rawData[field.name] = (fd.get(field.name) as string | null) ?? "";
    }

    // Validate — explicit name check is covered by the required rule in validate()
    const errors = validate(form.fields, rawData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setLoading(true);

    // Build payload — name field is always included, company only when present
    const payload: Record<string, string> = {
      name:        rawData["name"].trim(),
      email:       rawData["email"].trim(),
      lead_magnet: config.slug,
      lead_source: config.slug,   // explicit segmentation field for GHL
      source:      config.source,
      campaign:    config.campaign,
    };
    const company = rawData["company"]?.trim();
    if (company) payload["company"] = company;

    try {
      const res = await fetch("/api/lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message ?? "Error al enviar.");

      setSubmitted(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Error inesperado. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.07] backdrop-blur-sm p-8 text-center animate-fade-up">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "linear-gradient(135deg, #4AD4AE 0%, #F5A040 100%)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0C0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{success.title}</h3>
        {success.description && (
          <p className="text-brand-mint-dim text-sm leading-relaxed mb-6">
            {success.description}
          </p>
        )}
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
        >
          ¿Email incorrecto? Volver a intentar
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-white/10 bg-white/[0.07] backdrop-blur-sm p-8 flex flex-col gap-5"
    >
      <p className="text-white font-semibold text-base -mb-1">
        {t("heading")}
      </p>

      {form.fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label
            htmlFor={field.name}
            className="text-xs font-semibold text-white/60 uppercase tracking-wider"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            autoComplete={
              field.type === "email"
                ? "email"
                : field.name === "name"
                ? "name"
                : "organization"
            }
            className={[
              "w-full rounded-lg px-4 py-3 text-sm bg-white/[0.06] border text-white placeholder:text-white/30",
              "focus:outline-none focus:ring-2 focus:ring-brand-mint/50 transition-all",
              fieldErrors[field.name]
                ? "border-red-500/60"
                : "border-white/10 hover:border-white/20",
            ].join(" ")}
          />
          {fieldErrors[field.name] && (
            <p className="text-red-400 text-xs">{errorMessage(field.name, field.label)}</p>
          )}
        </div>
      ))}

      {apiError && (
        <p className="text-red-400 text-sm bg-red-500/10 rounded-lg px-4 py-2">
          {apiError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-[10px] font-bold text-sm text-white btn-animated-bg disabled:opacity-50 mt-1"
      >
        {loading ? t("submitting") : form.ctaLabel}
      </button>

      {form.microcopy && (
        <p className="text-center text-xs text-white/35">{form.microcopy}</p>
      )}
    </form>
  );
}
