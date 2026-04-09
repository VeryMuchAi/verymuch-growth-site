import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

const META = {
  es: {
    title: "Edwin Moreno — COO & Co-Fundador de VeryMuch.ai",
    description:
      "Edwin Moreno es COO y co-fundador de VeryMuch.ai. Experto en agentes de IA para ventas B2B, automatización comercial y operaciones con inteligencia artificial. Mencionado en Forbes México y speaker TEDx.",
    ogTitle: "Edwin Moreno — Experto en IA para Ventas B2B | VeryMuch.ai",
    ogDescription:
      "COO y co-fundador de VeryMuch.ai. Diseña e implementa agentes de IA para equipos de ventas y marketing en el mercado hispano.",
    badge: "✦ EQUIPO",
    role: "COO & Co-Fundador",
    bio1:
      "Edwin Moreno es COO y co-fundador de VeryMuch.ai, consultora especializada en agentes de inteligencia artificial para equipos de ventas y marketing B2B. Con experiencia en tecnología, automatización y procesos comerciales, lidera la operación diaria de VeryMuch y el diseño de sistemas de IA que generan revenue predecible para empresas del mercado medio.",
    bio2:
      "Antes de VeryMuch.ai, Edwin trabajó en proyectos de transformación digital para empresas en México, España y Estados Unidos. Su enfoque: implementar IA de forma práctica y medible, no como experimento, sino como motor de negocio. Ha sido mencionado en Forbes México por su trabajo en automatización inteligente y es speaker TEDx en temas de productividad e IA.",
    expertise: "Áreas de Expertise",
    expertiseItems: [
      "Agentes de IA para equipos de ventas B2B",
      "Automatización de procesos comerciales con n8n, Make y HubSpot",
      "Implementación de LLMs (Claude, GPT-4) en flujos de trabajo empresariales",
      "Estrategia de IA para empresas medianas del mercado hispano",
      "Operaciones y revenue operations (RevOps)",
      "Metodología ARRI — AI Readiness & Rationality Index",
    ],
    published: "Artículos publicados",
    connect: "Conectar con Edwin",
    linkedinText: "LinkedIn",
    backLink: "← Volver al blog",
  },
  en: {
    title: "Edwin Moreno — COO & Co-Founder of VeryMuch.ai",
    description:
      "Edwin Moreno is COO and co-founder of VeryMuch.ai. Expert in AI agents for B2B sales, commercial automation, and AI-driven operations. Featured in Forbes México and TEDx speaker.",
    ogTitle: "Edwin Moreno — AI for B2B Sales Expert | VeryMuch.ai",
    ogDescription:
      "COO and co-founder of VeryMuch.ai. Designs and implements AI agents for sales and marketing teams in the Hispanic market.",
    badge: "✦ TEAM",
    role: "COO & Co-Founder",
    bio1:
      "Edwin Moreno is the COO and co-founder of VeryMuch.ai, a consultancy specializing in AI agents for B2B sales and marketing teams. With experience in technology, automation, and commercial processes, he leads VeryMuch's day-to-day operations and the design of AI systems that generate predictable revenue for mid-market companies.",
    bio2:
      "Before VeryMuch.ai, Edwin worked on digital transformation projects for companies in Mexico, Spain, and the United States. His approach: implement AI practically and measurably — not as an experiment, but as a business engine. He has been featured in Forbes México for his work in intelligent automation and is a TEDx speaker on productivity and AI.",
    expertise: "Areas of Expertise",
    expertiseItems: [
      "AI agents for B2B sales teams",
      "Commercial process automation with n8n, Make, and HubSpot",
      "LLM implementation (Claude, GPT-4) in enterprise workflows",
      "AI strategy for mid-market Hispanic companies",
      "Operations and revenue operations (RevOps)",
      "ARRI methodology — AI Readiness & Rationality Index",
    ],
    published: "Published articles",
    connect: "Connect with Edwin",
    linkedinText: "LinkedIn",
    backLink: "← Back to blog",
  },
};

const LINKEDIN_URL = "https://www.linkedin.com/in/edwinmoreno";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/autor/edwin-moreno`
      : `${BASE_URL}/autor/edwin-moreno`;

  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/autor/edwin-moreno`,
        en: `${BASE_URL}/en/autor/edwin-moreno`,
        "x-default": `${BASE_URL}/autor/edwin-moreno`,
      },
    },
    openGraph: {
      type: "profile",
      siteName: "VeryMuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: m.ogTitle,
      description: m.ogDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: m.ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDescription,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function EdwinMorenoPage({ params }: Props) {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const lang = locale === "en" ? "en" : "es";

  // Articles authored by Edwin
  const edwinPosts = blogPosts.filter((p) => p.author === "Edwin Moreno");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/autor/edwin-moreno`,
    name: "Edwin Moreno",
    jobTitle: "COO & Co-Founder",
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    description: m.description,
    url: `${BASE_URL}/autor/edwin-moreno`,
    sameAs: [LINKEDIN_URL],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "B2B Sales Automation",
      "Marketing Automation",
      "Revenue Operations",
      "n8n",
      "GoHighLevel",
      "HubSpot",
      "Claude AI",
      "OpenAI",
    ],
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <HomeNav />

      {/* ── Hero / Profile ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-16 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,212,174,0.07) 0%, rgba(245,160,64,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-block text-sm mb-8 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-secondary)" }}
          >
            {m.backLink}
          </Link>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #F5A05E 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5AD4AE" }}>
              {m.badge}
            </span>
          </div>

          {/* Profile header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            {/* Avatar placeholder */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #5AD4AE 0%, #F5A05E 100%)",
                color: "#fff",
                fontFamily: "var(--font-display)",
              }}
            >
              EM
            </div>
            <div>
              <h1
                className="text-3xl md:text-4xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Edwin Moreno
              </h1>
              <p className="text-base font-medium" style={{ color: "#5AD4AE" }}>
                {m.role}
              </p>
              <p className="text-sm mt-1 opacity-70" style={{ color: "var(--text-secondary)" }}>
                VeryMuch.ai — Madrid · México · US
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-8" style={{ color: "var(--text-secondary)" }}>
            <p className="text-base leading-relaxed mb-4">{m.bio1}</p>
            <p className="text-base leading-relaxed">{m.bio2}</p>
          </div>

          {/* Connect */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{
              background: "#0A66C2",
              color: "#fff",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {m.linkedinText}
          </a>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────────────────────── */}
      <section className="py-12 px-6" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {m.expertise}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {m.expertiseItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 text-base" style={{ color: "#5AD4AE" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Published Articles ────────────────────────────────────────────── */}
      {edwinPosts.length > 0 && (
        <section className="py-12 px-6" style={{ background: "var(--bg-primary)" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {m.published}
            </h2>
            <div className="flex flex-col gap-4">
              {edwinPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-5 rounded-xl border transition-all hover:border-opacity-50"
                  style={{
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-card)",
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "#5AD4AE" }}>
                    {post.tag[lang]}
                  </span>
                  <h3
                    className="text-base font-semibold mb-1 group-hover:text-[#5AD4AE] transition-colors"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                  >
                    {post.title[lang]}
                  </h3>
                  <p className="text-sm opacity-70" style={{ color: "var(--text-secondary)" }}>
                    {post.date[lang]} · {post.readTime[lang]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-sm opacity-60 mb-4" style={{ color: "var(--text-secondary)" }}>
            {locale === "es"
              ? "¿Quieres hablar con Edwin sobre tu proyecto de IA?"
              : "Want to talk to Edwin about your AI project?"}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F5405E 0%, #F5A05E 100%)" }}
          >
            {locale === "es" ? "Agenda una llamada gratuita →" : "Book a free call →"}
          </Link>
        </div>
      </section>
    </div>
  );
}
