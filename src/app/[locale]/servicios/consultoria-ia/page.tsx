import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeNav from "@/components/HomeNav";
import IconBlock, { type ColorVariant } from "@/components/IconBlock";
import NewsletterCTA from "@/components/NewsletterCTA";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ConsultoriaIA" });
  const canonical =
    locale === "es"
      ? `${BASE_URL}/servicios/consultoria-ia`
      : `${BASE_URL}/en/servicios/consultoria-ia`;

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/servicios/consultoria-ia`,
        en: `${BASE_URL}/en/servicios/consultoria-ia`,
        "x-default": `${BASE_URL}/servicios/consultoria-ia`,
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

export default async function ConsultoriaIAPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ConsultoriaIA" });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta_title"),
    provider: {
      "@type": "Organization",
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    description: t("meta_description"),
    serviceType: "AI Strategy Consulting",
    areaServed: ["ES", "MX", "CO", "US"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: t("hero_cta"),
    },
  };

  const includesCards: { icon: string; color: ColorVariant; titleKey: string; descKey: string }[] = [
    { icon: "bar-chart", color: "teal",   titleKey: "inc_0_title", descKey: "inc_0_desc" },
    { icon: "search",    color: "orange", titleKey: "inc_1_title", descKey: "inc_1_desc" },
    { icon: "target",    color: "purple", titleKey: "inc_2_title", descKey: "inc_2_desc" },
    { icon: "map",       color: "green",  titleKey: "inc_3_title", descKey: "inc_3_desc" },
  ];

  const steps: { num: string; titleKey: string; descKey: string }[] = [
    { num: "01", titleKey: "step_0_title", descKey: "step_0_desc" },
    { num: "02", titleKey: "step_1_title", descKey: "step_1_desc" },
    { num: "03", titleKey: "step_2_title", descKey: "step_2_desc" },
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
              "radial-gradient(ellipse 90% 55% at 60% -15%, rgba(74,212,174,0.09) 0%, rgba(245,160,64,0.06) 45%, transparent 70%)",
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

      {/* ── Problem ──────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t border-b"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t("problem_h2")}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("problem_body")}
          </p>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("inc_h2")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {includesCards.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-2xl p-6 border card-elevated transition-all duration-200 card-hover-mint"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <IconBlock icon={card.icon} color={card.color} size="md" />
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t(card.titleKey)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("process_h2")}
          </h2>
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0"
                  style={{
                    backgroundImage: "linear-gradient(135deg,#5AD4AE 0%,#F5A05E 100%)",
                    color: "#fff",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t(step.titleKey)}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For whom ─────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-primary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            {t("for_whom_h2")}
          </h2>
          <ul className="flex flex-col gap-4">
            {([0, 1, 2, 3] as const).map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 text-base font-bold shrink-0"
                  style={{ color: "var(--accent-text)" }}
                >
                  ✓
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t(`for_whom_${i}`)}
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
              href="/ai-readiness"
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
