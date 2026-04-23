import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://verymuch.ai";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

const META = {
  es: {
    title: "Jorge Herrera Cruz — CEO & Co-Fundador de VeryMuch.ai",
    description:
      "Jorge Herrera Cruz es CEO y co-fundador de VeryMuch.ai. Experto en agentes de IA para ventas B2B, estrategia comercial y automatización para el mercado hispano. Speaker en SaaStr y referente en IA aplicada a negocios.",
    ogTitle: "Jorge Herrera Cruz — CEO & Estratega de IA B2B | VeryMuch.ai",
    ogDescription:
      "CEO y co-fundador de VeryMuch.ai. Lidera la estrategia comercial y de producto para llevar agentes de IA a equipos de ventas del mercado hispano.",
    badge: "✦ EQUIPO",
    role: "CEO & Co-Fundador",
    bio1:
      "Jorge Herrera Cruz es CEO y co-fundador de VeryMuch.ai, consultora especializada en agentes de inteligencia artificial para equipos de ventas y marketing B2B. Con más de una década de experiencia en ventas consultivas y tecnología, Jorge lidera la visión estratégica, las relaciones con clientes y el desarrollo de producto de VeryMuch.",
    bio2:
      "Jorge ha construido y liderado equipos de ventas en México, España y Estados Unidos. Su experiencia incluye participación en SaaStr, el evento de referencia de SaaS B2B a nivel mundial, donde ha aprendido y compartido metodologías de growth con fundadores de todo el mundo. Cree firmemente que los agentes de IA son el mayor diferenciador competitivo para las empresas medianas del mercado hispano en los próximos cinco años.",
    expertise: "Áreas de Expertise",
    expertiseItems: [
      "Estrategia comercial y ventas B2B consultivas",
      "Implementación de agentes de IA para equipos de ventas",
      "Growth y pipeline management para empresas SaaS y de servicios",
      "Metodología de calificación de leads e ICP definition",
      "Automatización de outreach y nurturing con IA",
      "Liderazgo de equipos comerciales multiculturales (MX, ES, US)",
    ],
    published: "Artículos publicados",
    connect: "Conectar con Jorge",
    linkedinText: "LinkedIn",
    backLink: "← Volver al blog",
  },
  en: {
    title: "Jorge Herrera Cruz — CEO & Co-Founder of VeryMuch.ai",
    description:
      "Jorge Herrera Cruz is CEO and co-founder of VeryMuch.ai. Expert in AI agents for B2B sales, commercial strategy, and automation for the Hispanic market. SaaStr speaker and AI business thought leader.",
    ogTitle: "Jorge Herrera Cruz — CEO & B2B AI Strategist | VeryMuch.ai",
    ogDescription:
      "CEO and co-founder of VeryMuch.ai. Leads commercial and product strategy to bring AI agents to sales teams in the Hispanic market.",
    badge: "✦ TEAM",
    role: "CEO & Co-Founder",
    bio1:
      "Jorge Herrera Cruz is the CEO and co-founder of VeryMuch.ai, a consultancy specializing in AI agents for B2B sales and marketing teams. With over a decade of experience in consultative sales and technology, Jorge leads VeryMuch's strategic vision, client relationships, and product development.",
    bio2:
      "Jorge has built and led sales teams in Mexico, Spain, and the United States. His experience includes participation in SaaStr, the world's premier B2B SaaS event, where he has learned and shared growth methodologies with founders worldwide. He firmly believes that AI agents are the greatest competitive differentiator for mid-market Hispanic companies over the next five years.",
    expertise: "Areas of Expertise",
    expertiseItems: [
      "Commercial strategy and consultative B2B sales",
      "AI agent implementation for sales teams",
      "Growth and pipeline management for SaaS and service companies",
      "Lead qualification methodology and ICP definition",
      "AI-powered outreach and nurturing automation",
      "Multicultural sales team leadership (MX, ES, US)",
    ],
    published: "Published articles",
    connect: "Connect with Jorge",
    linkedinText: "LinkedIn",
    backLink: "← Back to blog",
  },
};

const LINKEDIN_URL = "https://www.linkedin.com/in/jorgeherreracruz";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/autor/jorge-herrera-cruz`
      : `${BASE_URL}/autor/jorge-herrera-cruz`;

  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/autor/jorge-herrera-cruz`,
        en: `${BASE_URL}/en/autor/jorge-herrera-cruz`,
        "x-default": `${BASE_URL}/autor/jorge-herrera-cruz`,
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

export default async function JorgeHerreraCruzPage({ params }: Props) {
  const { locale } = await params;
  const m = META[locale as "es" | "en"] ?? META.es;
  const lang = locale === "en" ? "en" : "es";

  // Articles authored by Jorge
  const jorgePosts = blogPosts.filter((p) => p.author === "Jorge Herrera Cruz");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/autor/jorge-herrera-cruz`,
    name: "Jorge Herrera Cruz",
    jobTitle: "CEO & Co-Founder",
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    description: m.description,
    url: `${BASE_URL}/autor/jorge-herrera-cruz`,
    sameAs: [LINKEDIN_URL],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "B2B Sales Strategy",
      "Revenue Operations",
      "SaaS Growth",
      "Pipeline Management",
      "Marketing Automation",
      "GoHighLevel",
      "HubSpot",
      "Hispanic Market",
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
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(172,237,235,0.07) 0%, rgba(218,184,130,0.04) 50%, transparent 70%)",
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
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #2C6B65 0%, #D97757 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2C6B65" }}>
              {m.badge}
            </span>
          </div>

          {/* Profile header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            {/* Avatar placeholder */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #D97757 0%, #2C6B65 100%)",
                color: "#fff",
                fontFamily: "var(--font-display)",
              }}
            >
              JH
            </div>
            <div>
              <h1
                className="text-3xl md:text-4xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Jorge Herrera Cruz
              </h1>
              <p className="text-base font-medium" style={{ color: "#D97757" }}>
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
                <span className="mt-0.5 text-base" style={{ color: "#D97757" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Published Articles ────────────────────────────────────────────── */}
      {jorgePosts.length > 0 && (
        <section className="py-12 px-6" style={{ background: "var(--bg-primary)" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {m.published}
            </h2>
            <div className="flex flex-col gap-4">
              {jorgePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-5 rounded-xl border transition-all hover:border-opacity-50"
                  style={{
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-card)",
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "#D97757" }}>
                    {post.tag[lang]}
                  </span>
                  <h3
                    className="text-base font-semibold mb-1 group-hover:text-[#D97757] transition-colors"
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
              ? "¿Quieres hablar con Jorge sobre tu estrategia de IA?"
              : "Want to talk to Jorge about your AI strategy?"}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)" }}
          >
            {locale === "es" ? "Agenda una llamada gratuita →" : "Book a free call →"}
          </Link>
        </div>
      </section>
    </div>
  );
}
