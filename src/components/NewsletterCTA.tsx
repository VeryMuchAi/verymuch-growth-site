"use client";

import { FormEvent, useState } from "react";

interface Props {
  locale: string;
}

const COPY = {
  es: {
    heading: "¿Te fue útil este contenido?",
    sub: "Cada semana enviamos artículos como este sobre agentes de IA, automatización y ventas B2B.",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu email",
    cta: "Suscribirme gratis →",
    microcopy: "Sin spam. Un email por semana.",
    errorName: "El nombre es obligatorio.",
    errorEmail: "Introduce un correo válido.",
    errorGeneric: "No se pudo enviar. Inténtalo de nuevo.",
    sending: "Enviando…",
    successTitle: "¡Ya estás dentro!",
    successSub: "Recibirás el próximo número en tu correo.",
  },
  en: {
    heading: "Was this content useful?",
    sub: "Every week we send articles like this on AI agents, automation, and B2B sales.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    cta: "Subscribe for free →",
    microcopy: "No spam. One email per week.",
    errorName: "Name is required.",
    errorEmail: "Please enter a valid email.",
    errorGeneric: "Could not send. Please try again.",
    sending: "Sending…",
    successTitle: "You're in!",
    successSub: "You'll receive the next issue in your inbox.",
  },
};

export default function NewsletterCTA({ locale }: Props) {
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    const em = email.trim();
    if (!n) { setError(c.errorName); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setError(c.errorEmail); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: n,
          email: em,
          lead_magnet: "newsletter",
          source: "blog-cta",
          campaign: "newsletter-blog",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError(c.errorGeneric);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="vm-card p-6 md:p-8 my-8">
      {success ? (
        <div className="text-center py-2">
          <p className="vm-heading mb-1" style={{ color: "var(--text-primary)" }}>
            {c.successTitle}
          </p>
          <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
            {c.successSub}
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <p className="vm-heading mb-1" style={{ color: "var(--text-primary)" }}>
              {c.heading}
            </p>
            <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
              {c.sub}
            </p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.namePlaceholder}
              required
              className="vm-input flex-1"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              required
              className="vm-input flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {loading ? c.sending : c.cta}
            </button>
          </form>
          {error && (
            <p className="vm-body-s mt-2" style={{ color: "var(--error)" }}>
              {error}
            </p>
          )}
          <p className="vm-caption mt-3" style={{ color: "var(--text-muted)" }}>
            {c.microcopy}
          </p>
        </>
      )}
    </div>
  );
}
