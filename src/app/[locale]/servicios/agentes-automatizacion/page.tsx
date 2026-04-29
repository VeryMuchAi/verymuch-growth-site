import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeNav from "@/components/HomeNav";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AgentesAutomatizacion" });
  const canonical =
    locale === "es"
      ? `${BASE_URL}/servicios/agentes-automatizacion`
      : `${BASE_URL}/en/servicios/agentes-automatizacion`;

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/servicios/agentes-automatizacion`,
        en: `${BASE_URL}/en/servicios/agentes-automatizacion`,
        "x-default": `${BASE_URL}/servicios/agentes-automatizacion`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: t("og_title"),
      description: t("og_description"),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Verymuch.ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("og_title"),
      description: t("og_description"),
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AgentesAutomatizacionPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AgentesAutomatizacion" });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta_title"),
    provider: { "@type": "Organization", name: "Verymuch.ai", url: BASE_URL },
    description: t("meta_description"),
    serviceType: "AI Agents & Automation",
    areaServed: ["ES", "MX", "CO", "US"],
  };

  const howSteps: { num: string; titleKey: string; descKey: string }[] = [
    { num: "01", titleKey: "how_0_title", descKey: "how_0_desc" },
    { num: "02", titleKey: "how_1_title", descKey: "how_1_desc" },
    { num: "03", titleKey: "how_2_title", descKey: "how_2_desc" },
    { num: "04", titleKey: "how_3_title", descKey: "how_3_desc" },
  ];

  const salesAgents = [
    { num: "01", titleKey: "ag_s0_title", descKey: "ag_s0_desc", resultKey: "ag_s0_result" },
    { num: "02", titleKey: "ag_s1_title", descKey: "ag_s1_desc", resultKey: "ag_s1_result" },
    { num: "03", titleKey: "ag_s2_title", descKey: "ag_s2_desc", resultKey: "ag_s2_result" },
    { num: "04", titleKey: "ag_s3_title", descKey: "ag_s3_desc", resultKey: "ag_s3_result" },
  ];

  const mktAgents = [
    { num: "05", titleKey: "ag_m0_title", descKey: "ag_m0_desc", resultKey: "ag_m0_result" },
    { num: "06", titleKey: "ag_m1_title", descKey: "ag_m1_desc", resultKey: "ag_m1_result" },
  ];

  const opsAgents = [
    { num: "07", titleKey: "ag_o0_title", descKey: "ag_o0_desc", resultKey: "ag_o0_result" },
    { num: "08", titleKey: "ag_o1_title", descKey: "ag_o1_desc", resultKey: "ag_o1_result" },
  ];

  const criteria = [
    { key: "crit_0", icon: "🔄" },
    { key: "crit_1", icon: "📋" },
    { key: "crit_2", icon: "⏱" },
    { key: "crit_3", icon: "🔗" },
    { key: "crit_4", icon: "⚠️" },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-16 px-6 md:pt-40 md:pb-20"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(74,212,174,0.09) 0%, rgba(245,160,64,0.06) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <p className="mb-5">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>
              {t("hero_badge")}
            </span>
          </p>
          <h1
            className="display font-extrabold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t("hero_h1")}
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("hero_sub")}
          </p>
          <a
            href={GHL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vm-primary"
          >
            {t("hero_cta")}
          </a>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("how_h2")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {howSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-6 border card-elevated"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div
                  className="text-2xl font-extrabold leading-none mb-3"
                  style={{ color: "var(--accent-text)" }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agents grid ──────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            {t("agents_h2")}
          </h2>

          {/* Sales */}
          <div className="mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--accent-text)" }}
            >
              {t("agents_sales_label")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {salesAgents.map((ag) => (
                <AgentCard key={ag.num} num={ag.num} title={t(ag.titleKey)} desc={t(ag.descKey)} result={t(ag.resultKey)} />
              ))}
            </div>
          </div>

          {/* Marketing */}
          <div className="mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--accent-warm)" }}
            >
              {t("agents_mkt_label")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {mktAgents.map((ag) => (
                <AgentCard key={ag.num} num={ag.num} title={t(ag.titleKey)} desc={t(ag.descKey)} result={t(ag.resultKey)} accent="orange" />
              ))}
            </div>
          </div>

          {/* Ops */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("agents_ops_label")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {opsAgents.map((ag) => (
                <AgentCard key={ag.num} num={ag.num} title={t(ag.titleKey)} desc={t(ag.descKey)} result={t(ag.resultKey)} accent="purple" />
              ))}
            </div>
          </div>

          {/* Internal link to guide */}
          <p className="mt-8 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
            {locale === "es" ? (
              <>
                ¿Quieres entender cómo funcionan en profundidad?{" "}
                <Link
                  href="/guia/agentes-ia-ventas-b2b"
                  className="underline hover:opacity-80 transition-opacity font-medium"
                  style={{ color: "var(--accent-text)" }}
                >
                  Lee la guía completa de agentes de IA para ventas B2B →
                </Link>
              </>
            ) : (
              <>
                Want to understand how they work in depth?{" "}
                <Link
                  href="/guia/agentes-ia-ventas-b2b"
                  className="underline hover:opacity-80 transition-opacity font-medium"
                  style={{ color: "var(--accent-text)" }}
                >
                  Read the complete guide to AI agents for B2B sales →
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* ── Pricing models ───────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("models_h2")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Installation model */}
            <div
              className="rounded-2xl p-7 border card-elevated"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{ background: "rgba(74,212,174,0.1)", color: "var(--accent-text)" }}
                >
                  {t("model_0_tag")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {t("model_0_title")}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {t("model_0_desc")}
              </p>
              <div
                className="rounded-xl p-4 text-sm"
                style={{ background: "rgba(74,212,174,0.06)", borderColor: "rgba(74,212,174,0.15)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  {t("model_0_price_title")}
                </p>
                <p style={{ color: "var(--text-secondary)" }}>{t("model_0_price_desc")}</p>
              </div>
            </div>

            {/* AaaS model */}
            <div
              className="rounded-2xl p-7 border card-elevated"
              style={{
                background: "var(--bg-card)",
                borderColor: "rgba(245,160,64,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{ background: "rgba(245,160,64,0.12)", color: "var(--accent-warm-text)" }}
                >
                  {t("model_1_tag")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {t("model_1_title")}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {t("model_1_desc")}
              </p>
              <div
                className="rounded-xl p-4 text-sm"
                style={{ background: "rgba(245,160,64,0.06)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  {t("model_1_price_title")}
                </p>
                <p style={{ color: "var(--text-secondary)" }}>{t("model_1_price_desc")}</p>
              </div>
            </div>
          </div>

          {/* Link to consultoría */}
          <p className="mt-8 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
            {locale === "es" ? (
              <>
                ¿No sabes qué modelo es el adecuado para tu empresa?{" "}
                <Link
                  href="/servicios/consultoria-ia"
                  className="underline hover:opacity-80 transition-opacity font-medium"
                  style={{ color: "var(--accent-text)" }}
                >
                  Empieza con una consultoría estratégica →
                </Link>
              </>
            ) : (
              <>
                Not sure which model is right for your company?{" "}
                <Link
                  href="/servicios/consultoria-ia"
                  className="underline hover:opacity-80 transition-opacity font-medium"
                  style={{ color: "var(--accent-text)" }}
                >
                  Start with a strategic consultation →
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* ── Viability test ───────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {t("viab_h2")}
          </h2>
          <p
            className="text-center text-base mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("viab_sub")}
          </p>
          <ul className="flex flex-col gap-4">
            {criteria.map(({ key, icon }) => (
              <li
                key={key}
                className="flex items-start gap-4 rounded-xl p-4 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xl shrink-0 mt-0.5">{icon}</span>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(key)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────────── */}
      <div className="px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-2xl mx-auto">
          <NewsletterCTA locale={locale} />
        </div>
      </div>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            {t("cta_h2")}
          </h2>
          <a
            href={GHL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vm-primary"
          >
            {t("cta_button")}
          </a>
          <p className="mt-6">
            <a
              href="/#resources"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--accent-warm-text)" }}
            >
              {t("cta_secondary")}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

// ─── Agent card sub-component ─────────────────────────────────────────────────

function AgentCard({
  num, title, desc, result,
  accent = "teal",
}: {
  num: string; title: string; desc: string; result: string;
  accent?: "teal" | "orange" | "purple";
}) {
  const colors = {
    teal:   { bg: "rgba(74,212,174,0.06)",  border: "rgba(74,212,174,0.18)",  text: "var(--accent-text)" },
    orange: { bg: "rgba(245,160,64,0.06)",  border: "rgba(245,160,64,0.18)",  text: "var(--accent-warm-text)" },
    purple: { bg: "rgba(139,92,246,0.06)",  border: "rgba(139,92,246,0.18)",  text: "#7C3AED" },
  };
  const c = colors[accent];

  return (
    <div
      className="rounded-2xl p-5 border card-elevated flex flex-col gap-3"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <span className="text-xl font-extrabold leading-none" style={{ color: c.text }}>
        {num}
      </span>
      <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
        {desc}
      </p>
      <span
        className="text-xs font-semibold px-3 py-1.5 rounded-lg"
        style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
      >
        → {result}
      </span>
    </div>
  );
}
