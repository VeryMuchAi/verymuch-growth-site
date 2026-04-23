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
      <div className="vm-card p-8 md:p-10 text-center animate-fade-up">
        <h2 className="vm-display-m mb-2" style={{ color: "var(--text-primary)" }}>
          {t("success_title")}
        </h2>
        <p className="vm-body mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          {t("success_desc")}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-ghost">
            {t("success_link_home")}
          </Link>
          <Link href={`/ai-readiness?lang=${locale}`} className="btn-secondary">
            {t("success_link_arri")}
          </Link>
          <Link href="/#resources" className="btn-primary">
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
      className="vm-card p-8 md:p-10 flex flex-col gap-5"
    >
      <div className="flex flex-col">
        <label htmlFor="nl-name" className="vm-label">
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
          className="vm-input"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="nl-email" className="vm-label">
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
          className="vm-input"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="nl-company" className="vm-label">
          {t("form_company")}{" "}
          <span className="font-normal opacity-70 normal-case tracking-normal">
            {t("form_company_optional")}
          </span>
        </label>
        <input
          id="nl-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="vm-input"
        />
      </div>
      {error && (
        <p className="vm-body-s" style={{ color: "var(--error)" }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary btn-lg w-full justify-center disabled:opacity-50"
      >
        {loading ? t("form_submitting") : t("form_cta")}
      </button>
      <p className="text-center vm-caption" style={{ color: "var(--text-muted)" }}>
        {t("form_microcopy")}
      </p>
    </form>
  );
}
