"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  locale: string;
};

export default function NewsletterForm({ locale }: Props) {
  const t = useTranslations("Newsletter");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    const em = email.trim();
    if (!n) {
      setError(t("form_error_name"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setError(t("form_error_email"));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: n,
          email: em,
          company: company.trim() || undefined,
          lead_magnet: "newsletter",
          source: "website",
          campaign: "newsletter-signup",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError(t("form_error_generic"));
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        className="rounded-2xl border p-8 md:p-10 text-center card-elevated animate-fade-up"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          {t("success_title")}
        </h2>
        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          {t("success_desc")}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] text-sm font-semibold border transition-opacity hover:opacity-100 opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            {t("success_link_home")}
          </Link>
          <Link
            href={`/ai-readiness?lang=${locale}`}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] text-sm font-semibold border transition-opacity hover:opacity-100 opacity-80"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            {t("success_link_arri")}
          </Link>
          <Link
            href="/#resources"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] text-sm font-semibold btn-gradient-sm"
          >
            {t("success_link_resources")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border p-8 md:p-10 flex flex-col gap-5 card-elevated"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nl-name" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
          {t("form_name")} *
        </label>
        <input
          id="nl-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg px-4 py-3 text-sm border transition-colors"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nl-email" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
          {t("form_email")} *
        </label>
        <input
          id="nl-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg px-4 py-3 text-sm border transition-colors"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nl-company" className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
          {t("form_company")} <span className="font-normal opacity-70">{t("form_company_optional")}</span>
        </label>
        <input
          id="nl-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full rounded-lg px-4 py-3 text-sm border transition-colors"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-gradient w-full justify-center py-3.5 disabled:opacity-50"
      >
        {loading ? t("form_submitting") : t("form_cta")}
      </button>
      <p className="text-center text-xs" style={{ color: "var(--text-secondary)" }}>
        {t("form_microcopy")}
      </p>
    </form>
  );
}
