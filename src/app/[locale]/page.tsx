import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HomeNav from "@/components/HomeNav";
import AgentsInProductionSection from "@/components/AgentsInProductionSection";
import IconBlock, { type ColorVariant } from "@/components/IconBlock";
import BrandMarquee from "@/components/BrandMarquee";
import { Link } from "@/i18n/navigation";

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

type Props = { params: Promise<{ locale: string }> };

const BASE_URL  = "https://verymuch.ai";
const OG_HOME_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t         = await getTranslations({ locale, namespace: "HomePage" });
  const canonical = locale === "es" ? `${BASE_URL}/` : `${BASE_URL}/en`;
  const ogLocale  = locale === "es" ? "es_ES" : "en_US";
  const ogTitle   = t("og_title");
  const ogDesc    = t("og_description");

  return {
    // absolute bypasses the root template — avoids "Title | VeryMuch.ai | VeryMuch.ai"
    title:       { absolute: t("meta_title") },
    description: t("meta_description"),
    alternates: {
      canonical,
      languages: {
        es:          `${BASE_URL}/`,
        en:          `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/`,
      },
    },
    openGraph: {
      type:        "website",
      siteName:    "VeryMuch.ai",
      locale:      ogLocale,
      url:         canonical,
      title:       ogTitle,
      description: ogDesc,
      images:      [
        { url: OG_HOME_IMAGE, width: 1200, height: 630, alt: ogTitle },
      ],
    },
    twitter: {
      card:        "summary_large_image",
      title:       ogTitle,
      description: ogDesc,
      images:      [OG_HOME_IMAGE],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  // ── Data arrays (icon/color stay in code, text from translations) ────────────
  const METRICS = [
    { value: t("metric_0_value"), label: t("metric_0_label") },
    { value: t("metric_1_value"), label: t("metric_1_label") },
    { value: t("metric_2_value"), label: t("metric_2_label") },
  ];

  const VENTAS_SYMPTOMS: { icon: string; iconColor: ColorVariant; title: string; desc: string }[] = [
    { icon: "clock",         iconColor: "orange", title: t("sales_0_title"), desc: t("sales_0_desc") },
    { icon: "search",        iconColor: "teal",   title: t("sales_1_title"), desc: t("sales_1_desc") },
    { icon: "trending-down", iconColor: "dark",   title: t("sales_2_title"), desc: t("sales_2_desc") },
  ];

  const MARKETING_SYMPTOMS: { icon: string; iconColor: ColorVariant; title: string; desc: string }[] = [
    { icon: "edit",      iconColor: "purple", title: t("mkt_0_title"), desc: t("mkt_0_desc") },
    { icon: "share",     iconColor: "orange", title: t("mkt_1_title"), desc: t("mkt_1_desc") },
    { icon: "bar-chart", iconColor: "dark",   title: t("mkt_2_title"), desc: t("mkt_2_desc") },
  ];

  const P1_STEPS = [
    { num: "01", title: t("step_0_title"), desc: t("step_0_desc") },
    { num: "02", title: t("step_1_title"), desc: t("step_1_desc") },
    { num: "03", title: t("step_2_title"), desc: t("step_2_desc") },
  ];

  const CALLOUTS: { icon: string; iconColor: ColorVariant; title: string; intro: string; items: string[]; quote: string }[] = [
    {
      icon: "settings", iconColor: "dark",
      title: t("callout_0_title"), intro: t("callout_0_intro"),
      items: [t("callout_0_item_0"), t("callout_0_item_1"), t("callout_0_item_2")],
      quote: t("callout_0_quote"),
    },
    {
      icon: "laptop", iconColor: "teal",
      title: t("callout_1_title"), intro: t("callout_1_intro"),
      items: [t("callout_1_item_0"), t("callout_1_item_1"), t("callout_1_item_2")],
      quote: t("callout_1_quote"),
    },
  ];

  const LEAD_MAGNETS_LIVE = [
    { id: "signals-linkedin",          title: t("lm_0_title"), desc: t("lm_0_desc"), href: "/signals-linkedin",                  stack: ["Trigify","Claude","n8n"] },
    { id: "claude-remote-control",     title: t("lm_5_title"), desc: t("lm_5_desc"), href: "/lead/claude-remote-control",        stack: ["Claude Code","Claude App","Node.js"] },
    { id: "claude-skills-linkedin",    title: t("lm_6_title"), desc: t("lm_6_desc"), href: "/lead/claude-skills-linkedin",       stack: ["Claude.ai","LinkedIn"] },
    { id: "equipo-ventas-ia-30min",    title: t("lm_1_title"), desc: t("lm_1_desc"), href: "/lead/equipo-ventas-ia-30min",       stack: ["Claude Opus","n8n"] },
    { id: "agente-investigacion",      title: t("lm_2_title"), desc: t("lm_2_desc"), href: "/lead/agente-investigacion-comercial",stack: ["Claude","n8n","Supabase"] },
    { id: "20-agentes-ia-b2b",         title: t("lm_3_title"), desc: t("lm_3_desc"), href: "/lead/20-agentes-ia-b2b",            stack: ["Claude","n8n","Clay","Instantly"] },
    { id: "2-agentes-leads-calientes", title: t("lm_4_title"), desc: t("lm_4_desc"), href: "/lead/2-agentes-leads-calientes",    stack: ["Trigify","Claude","n8n"] },
  ];

  const LEAD_MAGNETS_SOON = [
    { id: "cold-email",   title: t("lm_soon_0") },
    { id: "lead-scoring", title: t("lm_soon_1") },
  ];


  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <HomeNav />

      {/* ══ HERO ══════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden pt-40 pb-24 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(245,160,64,0.07) 0%, rgba(74,212,174,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <p className="mb-6">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>
              {t("hero_badge")}
            </span>
          </p>
          <h1
            className="display font-extrabold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t("hero_h1_pre")}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {t("hero_h1_gradient")}
            </span>
            {" "}{t("hero_h1_post")}
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("hero_sub")}
          </p>
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex flex-wrap gap-4">
              <a
                href={GHL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-base"
              >
                {t("hero_cta_primary")}
              </a>
              <a
                href="#how"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-base font-semibold border transition-opacity duration-200 hover:opacity-100 opacity-60"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                {t("hero_cta_secondary")}
              </a>
            </div>
            <Link
              href="/newsletter"
              className="text-sm font-medium transition-opacity hover:opacity-100 opacity-70 w-fit"
              style={{ color: "var(--accent-text)" }}
            >
              {t("hero_newsletter_cta")}
            </Link>
          </div>
          <div
            className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {METRICS.map((m) => (
              <div key={m.value}>
                <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{m.value}</p>
                <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandMarquee variant="adaptive" />

      {/* ══ SYMPTOMS ══════════════════════════════════════════════════════════════ */}
      <section id="symptoms" className="py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>{t("symptoms_badge")}</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {t("symptoms_h2")}
            </h2>
          </div>

          {/* Ventas */}
          <div className="mb-10">
            <p className="caption uppercase tracking-widest font-bold mb-5" style={{ color: "var(--text-secondary)" }}>
              {t("symptoms_sales_label")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VENTAS_SYMPTOMS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border border-l-4 card-elevated flex flex-col gap-4 transition-all duration-200 card-hover-mint"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)", borderLeftColor: "var(--error)" }}
                >
                  <IconBlock icon={s.icon} color={s.iconColor} size="md" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing */}
          <div className="mb-14">
            <p className="caption uppercase tracking-widest font-bold mb-5" style={{ color: "var(--text-secondary)" }}>
              {t("symptoms_mkt_label")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MARKETING_SYMPTOMS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border border-l-4 card-elevated flex flex-col gap-4 transition-all duration-200 card-hover-mint"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)", borderLeftColor: "var(--error)" }}
                >
                  <IconBlock icon={s.icon} color={s.iconColor} size="md" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-base font-medium max-w-xl mx-auto" style={{ color: "var(--text-primary)" }}>
            {t("symptoms_closing")}
          </p>
        </div>
      </section>

      {/* ══ CÓMO TRABAJAMOS ═══════════════════════════════════════════════════════ */}
      <section id="how" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>{t("how_badge")}</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {t("how_h2")}
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>{t("how_sub")}</p>
          </div>

          {/* Fase 1 */}
          <div
            className="rounded-2xl p-8 lg:p-10 mb-6 border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p
              className="caption uppercase tracking-widest font-bold mb-8 pb-4 border-b"
              style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
            >
              {t("fase1_label")}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {P1_STEPS.map((s) => (
                <div key={s.num} className="flex flex-col gap-3">
                  <span className="text-3xl font-extrabold" style={{ color: "var(--accent-text)" }}>{s.num}</span>
                  <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fase 2 */}
          <div
            className="rounded-2xl p-8 lg:p-10 mb-10 border border-l-4"
            style={{ background: "rgba(170,212,174,0.06)", borderColor: "var(--border)", borderLeftColor: "var(--accent)" }}
          >
            <p
              className="caption uppercase tracking-widest font-bold mb-4"
              style={{ color: "var(--accent-text)" }}
            >
              {t("fase2_label")}
            </p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{t("fase2_h3")}</h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t("fase2_desc")}</p>
          </div>

          {/* Callouts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {CALLOUTS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-7 border flex flex-col gap-4 card-elevated transition-all duration-200 card-hover-mint"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <IconBlock icon={c.icon} color={c.iconColor} size="md" />
                <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.intro}</p>
                <ul className="flex flex-col gap-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-primary)" }}>
                      <span style={{ color: "var(--accent-text)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{c.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div>
            <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-gradient text-base">
              {t("how_cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ══ AGENTES EN PRODUCCIÓN ═════════════════════════════════════════════════ */}
      <AgentsInProductionSection />

      {/* ══ EQUIPO ════════════════════════════════════════════════════════════════ */}
      <section id="team" className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>{t("team_badge")}</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              {t("team_h2")}
            </h2>
            {/* Company narrative */}
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("team_intro")}
            </p>
          </div>

          {/* Founder cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Jorge */}
            <div
              className="flex flex-col gap-5 rounded-2xl p-8 border card-elevated"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  JH
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>Jorge Herrera</h3>
                  <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>{t("jorge_role")}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t("jorge_bio")}
              </p>
              <a
                href="https://www.linkedin.com/in/jorgeherreracruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-sm font-semibold border px-4 py-2 rounded-lg transition-opacity hover:opacity-100 opacity-70 mt-auto"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                LinkedIn →
              </a>
            </div>

            {/* Edwin */}
            <div
              className="flex flex-col gap-5 rounded-2xl p-8 border card-elevated"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                >
                  EM
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>Edwin Moreno</h3>
                  <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>{t("edwin_role")}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t("edwin_bio")}
              </p>
              <a
                href="https://www.linkedin.com/in/edwinmorenoai/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-sm font-semibold border px-4 py-2 rounded-lg transition-opacity hover:opacity-100 opacity-70 mt-auto"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Positioning */}
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {t("team_positioning_pre")}{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {t("team_positioning_gradient")}
              </span>{" "}
              {t("team_positioning_post")}
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--text-secondary)" }}>
              {t("team_sub")}
            </p>
            <p className="caption" style={{ color: "var(--text-secondary)" }}>
              {t("team_talent")}
            </p>
          </div>
        </div>
      </section>

      {/* ══ RECURSOS ══════════════════════════════════════════════════════════════ */}
      <section id="resources" className="py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>{t("resources_badge")}</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {t("resources_h2")}
            </h2>
            <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
              {t("resources_sub")}
            </p>
          </div>

          {/* Featured tool — AI Readiness Test */}
          <a
            href={`/ai-readiness?lang=${locale}`}
            className="group relative overflow-hidden rounded-2xl p-7 border flex flex-col sm:flex-row sm:items-center gap-6 mb-8 card-elevated transition-all duration-200 card-hover-amber"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(245,160,64,0.07) 0%, rgba(74,212,174,0.05) 60%, transparent 100%)",
              }}
            />
            <div className="flex-shrink-0 relative">
              <IconBlock icon="activity" color="orange" size="lg" />
            </div>
            <div className="flex-1 min-w-0 relative">
              <span
                className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] inline-block mb-3"
                style={{ background: "rgba(245,160,64,0.15)", color: "var(--accent-warm-text)" }}
              >
                {t("test_badge")}
              </span>
              <h3 className="text-lg font-bold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>
                {t("test_title")}
              </h3>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
                {t("test_desc")}
              </p>
            </div>
            <span
              className="flex-shrink-0 text-sm font-bold whitespace-nowrap relative"
              style={{ color: "var(--accent-text)" }}
            >
              {t("test_cta")}
            </span>
          </a>

          {/* Featured Guide — Agentes de IA para Ventas B2B */}
          <Link
            href="/guia/agentes-ia-ventas-b2b"
            className="group relative overflow-hidden rounded-2xl p-7 border flex flex-col sm:flex-row sm:items-center gap-6 mb-5 card-elevated transition-all duration-200 card-hover-mint"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(90,212,174,0.07) 0%, rgba(245,160,64,0.04) 60%, transparent 100%)",
              }}
            />
            <div className="flex-shrink-0 relative">
              <IconBlock icon="file-text" color="teal" size="lg" />
            </div>
            <div className="flex-1 min-w-0 relative">
              <span
                className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] inline-block mb-3"
                style={{ background: "rgba(245,160,64,0.15)", color: "var(--accent-warm-text)" }}
              >
                Guía completa
              </span>
              <h3 className="text-lg font-bold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>
                Agentes de IA para Ventas B2B: Guía Completa 2026
              </h3>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Datos reales de McKinsey, Gartner, Bain y +80 fuentes. Sin teoría vacía. ROI, implementación y los 5 agentes que necesitas.
              </p>
            </div>
            <span
              className="flex-shrink-0 text-sm font-bold whitespace-nowrap relative"
              style={{ color: "var(--accent-text)" }}
            >
              Leer la guía →
            </span>
          </Link>

          {/* Live */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {LEAD_MAGNETS_LIVE.map((lm) => (
              <Link
                key={lm.id}
                href={lm.href}
                className="group rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-200 card-elevated card-hover-mint"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]"
                    style={{ background: "rgba(91,166,107,0.18)", color: "var(--success-text)" }}
                  >
                    {t("resources_available")}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {lm.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded border"
                        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                  {lm.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>{lm.desc}</p>
                <span className="text-sm font-semibold mt-auto" style={{ color: "var(--accent-text)" }}>
                  {t("resources_access")}
                </span>
              </Link>
            ))}
          </div>

          {/* Soon */}
          <div className="grid sm:grid-cols-2 gap-5">
            {LEAD_MAGNETS_SOON.map((lm) => (
              <div
                key={lm.id}
                className="rounded-2xl p-6 border flex flex-col gap-3 opacity-50 card-elevated"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span
                  className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] self-start"
                  style={{ background: "rgba(245,160,94,0.18)", color: "var(--accent-warm-text)" }}
                >
                  Q2 2026
                </span>
                <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>{lm.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative overflow-hidden py-28 px-6 text-center"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,160,64,0.06) 0%, rgba(74,212,174,0.04) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative">
          <h2
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {t("cta_h2_pre")}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {t("cta_h2_gradient")}
            </span>
          </h2>
          <p className="text-base max-w-[560px]" style={{ color: "var(--text-secondary)" }}>
            {t("cta_sub")}
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href={GHL} target="_blank" rel="noopener noreferrer" className="btn-gradient text-base">
              {t("cta_primary")}
            </a>
            <Link
              href="/newsletter"
              className="text-sm font-medium transition-opacity hover:opacity-100 opacity-70"
              style={{ color: "var(--accent-text)" }}
            >
              {t("cta_newsletter_secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════════ */}
      <footer
        className="border-t px-6 py-16"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image src="/logo-white.png" alt="VeryMuch.ai" width={140} height={34} className="logo-white h-7 w-auto object-contain opacity-80" />
            <Image src="/Verymuch_Logo_transparent_real.png" alt="VeryMuch.ai" width={140} height={34} className="logo-color h-7 w-auto object-contain" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-secondary)" }}>
              {t("footer_desc")}
            </p>
            <p className="text-sm leading-relaxed max-w-xs mt-3" style={{ color: "var(--text-secondary)" }}>
              {t("footer_presence")}
            </p>
            <div className="mt-4">
              <p className="caption uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-secondary)" }}>
                {t("footer_address_label")}
              </p>
              <address
                className="text-sm leading-relaxed not-italic whitespace-pre-line max-w-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {t("footer_address")}
              </address>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="caption uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
              {t("footer_nav_label")}
            </p>
            {[
              { label: t("footer_nav_services"), href: "#services" },
              { label: t("footer_nav_how"),      href: "#how" },
              { label: t("footer_nav_agents"),   href: "#agents" },
              { label: t("footer_nav_resources"),href: "#resources" },
              { label: t("footer_nav_newsletter"), href: "/newsletter" },
            ].map((l) => (
              l.href.startsWith("#") ? (
                <a key={l.label} href={l.href} className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
                  {l.label}
                </Link>
              )
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="caption uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
              {t("footer_contact_label")}
            </p>
            <a href="https://www.linkedin.com/company/verymuch-ai" target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
              {t("footer_linkedin_company")}
            </a>
            <a href="https://www.linkedin.com/in/jorgeherreracruz/" target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
              LinkedIn Jorge Herrera
            </a>
            <a href="https://www.linkedin.com/in/edwinmorenoai/" target="_blank" rel="noopener noreferrer" className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
              LinkedIn Edwin Moreno
            </a>
            <a href="mailto:info@verymuch.ai" className="text-sm transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text-primary)" }}>
              info@verymuch.ai
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="caption" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} VeryMuch.ai — {t("footer_rights")}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/legal/terminos" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              {t("footer_terms")}
            </Link>
            <span className="caption opacity-20" style={{ color: "var(--text-primary)" }}>·</span>
            <Link href="/legal/privacidad" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              {t("footer_privacy")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
