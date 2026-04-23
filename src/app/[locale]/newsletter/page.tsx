import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeNav from "@/components/HomeNav";
import NewsletterForm from "@/components/NewsletterForm";
import IconBlock, { type ColorVariant } from "@/components/IconBlock";
import BrandMarquee from "@/components/BrandMarquee";

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Newsletter" });
  const canonical =
    locale === "es" ? `${BASE_URL}/newsletter` : `${BASE_URL}/en/newsletter`;

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/newsletter`,
        en: `${BASE_URL}/en/newsletter`,
        "x-default": `${BASE_URL}/newsletter`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: t("og_title"),
      description: t("og_description"),
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: "Verymuch.ai" },
      ],
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

export default async function NewsletterPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Newsletter" });

  const pageUrl =
    locale === "es" ? `${BASE_URL}/newsletter` : `${BASE_URL}/en/newsletter`;
  const inLang = locale === "es" ? "es" : "en";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("schema_webpage_name"),
    description: t("meta_description"),
    url: pageUrl,
    inLanguage: inLang,
    isPartOf: {
      "@type": "WebSite",
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SubscribeAction",
      target: pageUrl,
    },
  };

  const faqItems = [0, 1, 2, 3, 4].map((i) => ({
    "@type": "Question" as const,
    name: t(`faq_q${i}`),
    acceptedAnswer: {
      "@type": "Answer",
      text: t(`faq_a${i}`),
    },
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  const features: { icon: string; color: ColorVariant; title: string; desc: string }[] = [
    { icon: "bar-chart",   color: "orange", title: t("feature_0_title"), desc: t("feature_0_desc") },
    { icon: "wrench",      color: "teal",   title: t("feature_1_title"), desc: t("feature_1_desc") },
    { icon: "trending-up", color: "green",  title: t("feature_2_title"), desc: t("feature_2_desc") },
    { icon: "target",      color: "purple", title: t("feature_3_title"), desc: t("feature_3_desc") },
    { icon: "users",       color: "amber",  title: t("feature_4_title"), desc: t("feature_4_desc") },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeNav />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-36 pb-16 px-6 md:pt-40 md:pb-20 vm-grain"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-10%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(172,237,235,0.18) 0%, rgba(218,184,130,0.12) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
            <span className="vm-eyebrow">{t("badge")}</span>
          </div>
          <h1 className="vm-display-l mb-6" style={{ color: "var(--text-primary)" }}>
            {t("h1_pre")}{" "}
            <span className="vm-grad-highlight">{t("h1_highlight")}</span>
            {t("h1_post")}
          </h1>
          <p className="vm-body-l max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {t("sub")}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-12" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="vm-card p-6">
              <IconBlock icon={f.icon} color={f.color} size="md" />
              <h3 className="vm-heading mb-2 mt-3" style={{ color: "var(--text-primary)" }}>
                {f.title}
              </h3>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BrandMarquee variant="adaptive" label="Herramientas que analizamos cada semana" />

      {/* Featured Guide */}
      <section className="px-6 pb-8" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-3xl mx-auto">
          <a
            href="/guia/agentes-ia-ventas-b2b"
            className="vm-card-featured p-7 flex flex-col sm:flex-row sm:items-center gap-6 no-underline"
          >
            <div className="flex-shrink-0">
              <IconBlock icon="file-text" color="teal" size="lg" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="vm-eyebrow mb-2 block" style={{ color: "var(--text-muted)" }}>
                GUÍA · GRATIS
              </span>
              <h3 className="vm-heading mb-2" style={{ color: "var(--text-primary)" }}>
                Agentes de IA para Ventas B2B: Guía Completa 2026
              </h3>
              <p className="vm-body-s" style={{ color: "var(--text-secondary)" }}>
                Datos reales de McKinsey, Gartner, Bain y +80 fuentes. ROI, implementación y los 5 agentes que necesitas.
              </p>
            </div>
            <span
              className="flex-shrink-0 vm-body-s whitespace-nowrap"
              style={{ color: "var(--text-primary)", fontWeight: 600 }}
            >
              Leer la guía →
            </span>
          </a>
        </div>
      </section>

      {/* Form + proof */}
      <section className="px-6 pb-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-lg mx-auto">
          <NewsletterForm locale={locale} />
          <div className="mt-12 text-center max-w-md mx-auto">
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              {t("proof_title")}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("proof_sub")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-6 py-24 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--eyebrow)" }} />
            <span className="vm-eyebrow">PREGUNTAS · FRECUENTES</span>
          </div>
          <h2 className="vm-display-m text-center mb-12" style={{ color: "var(--text-primary)" }}>
            {t("faq_title")}
          </h2>
          <div className="flex flex-col gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <details
                key={i}
                className="group vm-card p-5"
              >
                <summary
                  className="cursor-pointer list-none flex justify-between gap-4 text-left vm-subheading"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{t(`faq_q${i}`)}</span>
                  <span
                    className="shrink-0 group-open:rotate-180 transition-transform font-mono text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    ▼
                  </span>
                </summary>
                <p className="mt-4 vm-body-s" style={{ color: "var(--text-secondary)" }}>
                  {t(`faq_a${i}`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
