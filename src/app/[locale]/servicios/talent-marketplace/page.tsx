import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeNav from "@/components/HomeNav";
import IconBlock, { type ColorVariant } from "@/components/IconBlock";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const MARKETPLACE = "https://www.verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TalentMarketplace" });
  const canonical =
    locale === "es"
      ? `${BASE_URL}/servicios/talent-marketplace`
      : `${BASE_URL}/en/servicios/talent-marketplace`;

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/servicios/talent-marketplace`,
        en: `${BASE_URL}/en/servicios/talent-marketplace`,
        "x-default": `${BASE_URL}/servicios/talent-marketplace`,
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

export default async function TalentMarketplacePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TalentMarketplace" });

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
    serviceType: "AI Talent Marketplace",
    areaServed: ["ES", "MX", "CO", "US"],
  };

  const howCards: { icon: string; color: ColorVariant; titleKey: string; descKey: string }[] = [
    { icon: "check",     color: "teal",   titleKey: "card_0_title", descKey: "card_0_desc" },
    { icon: "target",    color: "orange", titleKey: "card_1_title", descKey: "card_1_desc" },
    { icon: "bar-chart", color: "purple", titleKey: "card_2_title", descKey: "card_2_desc" },
    { icon: "settings",  color: "green",  titleKey: "card_3_title", descKey: "card_3_desc" },
  ];

  const categories: { icon: string; color: ColorVariant; titleKey: string; descKey: string }[] = [
    { icon: "bot",        color: "teal",   titleKey: "cat_0_title", descKey: "cat_0_desc" },
    { icon: "zap",        color: "orange", titleKey: "cat_1_title", descKey: "cat_1_desc" },
    { icon: "message",    color: "purple", titleKey: "cat_2_title", descKey: "cat_2_desc" },
    { icon: "git-branch", color: "amber",  titleKey: "cat_3_title", descKey: "cat_3_desc" },
    { icon: "edit",       color: "green",  titleKey: "cat_4_title", descKey: "cat_4_desc" },
    { icon: "cpu",        color: "dark",   titleKey: "cat_5_title", descKey: "cat_5_desc" },
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
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(245,160,64,0.08) 0%, rgba(90,212,174,0.06) 45%, transparent 70%)",
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={MARKETPLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vm-primary"
            >
              {t("hero_cta")}
            </a>
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--accent-text)" }}
            >
              {t("hero_cta_secondary")}
            </a>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t border-b"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
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

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("how_h2")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {howCards.map((card) => (
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

      {/* ── Categories ───────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            {t("cat_h2")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.titleKey}
                className="rounded-2xl p-6 border card-elevated transition-all duration-200 card-hover-amber"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <IconBlock icon={cat.icon} color={cat.color} size="md" />
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t(cat.titleKey)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t(cat.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For whom ─────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 border-t"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
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
            href={MARKETPLACE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vm-primary"
          >
            {t("cta_button")}
          </a>
          <p className="mt-6">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--accent-text)" }}
            >
              {t("cta_secondary")}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
