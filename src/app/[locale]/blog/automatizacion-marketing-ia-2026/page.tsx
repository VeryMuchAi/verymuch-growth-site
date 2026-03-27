import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";
const PUBLISHED = "2026-03-24";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Types ────────────────────────────────────────────────────────────────────

interface Layer { title: string; body: string }
interface FaqItem { q: string; a: string }
interface BreadcrumbItem { name: string; item: string }

interface PageContent {
  meta: {
    title: string; description: string;
    ogTitle: string; ogDescription: string; twitterDesc: string; ogLocale: string;
  };
  breadcrumb: { home: string; blog: string; page: string };
  jsonld: { articleHeadline: string; articleDescription: string; breadcrumb: BreadcrumbItem[] };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  toc: { label: string; items: { id: string; label: string }[] };
  intro: { p1: string; p2: string };
  s2: { heading: string; layers: Layer[] };
  s3: {
    heading: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  s4: {
    heading: string;
    intro: string;
    tools: { category: string; examples: string; cost: string }[];
    note: string;
  };
  s5: {
    heading: string;
    context: string;
    before: string;
    after: string;
    result: string;
    key: string;
  };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  footer: { home: string; privacy: string; terms: string };
}

// ─── Bilingual content ────────────────────────────────────────────────────────

const es: PageContent = {
  meta: {
    title: "Automatización de Marketing con IA en 2026: Qué funciona y qué no | VeryMuch.ai",
    description:
      "Guía práctica de automatización de marketing con inteligencia artificial. Contenido, distribución, lead nurturing y análisis — qué automatizar y qué no.",
    ogTitle: "Automatización de Marketing con IA en 2026: Qué funciona y qué no",
    ogDescription:
      "Contenido, distribución, lead nurturing y análisis — qué automatizar con IA y qué no deberías tocar todavía.",
    twitterDesc: "Guía práctica: automatización de marketing con IA en 2026. Qué funciona, qué no, y cómo construir un sistema real.",
    ogLocale: "es_ES",
  },
  breadcrumb: { home: "Inicio", blog: "Blog", page: "Automatización de marketing con IA en 2026" },
  jsonld: {
    articleHeadline: "Automatización de Marketing con IA en 2026: Qué funciona y qué no",
    articleDescription:
      "Guía práctica de automatización de marketing con inteligencia artificial. Contenido, distribución, lead nurturing y análisis — qué automatizar y qué no.",
    breadcrumb: [
      { name: "Inicio", item: BASE_URL },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "Automatización de marketing con IA en 2026", item: `${BASE_URL}/blog/automatizacion-marketing-ia-2026` },
    ],
  },
  hero: {
    badge: "✦ MARKETING IA",
    h1: "Automatización de marketing con IA en 2026: qué funciona y qué no",
    sub: "El 84% de las pymes quiere automatizar la creación de contenido. Pero la mayoría solo usa ChatGPT para escribir posts que nadie lee. Esta guía es sobre cómo construir un sistema real.",
    by: "Por",
    date: "24 de marzo, 2026",
    readTime: "7 min de lectura",
  },
  toc: {
    label: "En este artículo",
    items: [
      { id: "capas", label: "Las 4 capas de automatización de marketing con IA" },
      { id: "no-automatizar", label: "Lo que NO deberías automatizar (todavía)" },
      { id: "stack", label: "El stack mínimo para empezar" },
      { id: "caso-real", label: "Caso real: de 2 posts a sistema automatizado" },
      { id: "faq", label: "Preguntas frecuentes" },
    ],
  },
  intro: {
    p1: "El 84% de las pymes quiere automatizar la creación de contenido. El 77% prioriza marketing y engagement como el área donde la IA puede generar más impacto. Y sin embargo, la mayoría de empresas que \"automatiza su marketing con IA\" en realidad solo usa ChatGPT para escribir posts que nadie lee.",
    p2: "El problema no es la herramienta. Es que automatizar marketing sin estrategia es escalar el ruido. En esta guía te contamos qué partes del marketing se pueden automatizar con IA hoy, cuáles no deberías tocar todavía, y cómo construir un sistema de marketing que genera leads reales en lugar de vanity metrics.",
  },
  s2: {
    heading: "Las 4 capas de automatización de marketing con IA",
    layers: [
      {
        title: "Capa 1 — Producción de contenido",
        body: "Un agente de IA que genera artículos, posts para redes sociales, newsletters y lead magnets alineados con tu estrategia y voz de marca. No es pedirle a ChatGPT que escriba algo — es un sistema que conoce tu ICP, tu tono, tus keywords target, y produce contenido que encaja en un calendario editorial. Resultado real: equipos que producen 10x más contenido con el mismo headcount.",
      },
      {
        title: "Capa 2 — Distribución multicanal",
        body: "Un agente que toma el contenido aprobado, lo adapta al formato de cada canal (LinkedIn, Twitter, Instagram, blog, email) y lo publica automáticamente según calendario. Tu equipo se enfoca en crear, no en copiar y pegar entre 5 plataformas.",
      },
      {
        title: "Capa 3 — Captación y cualificación",
        body: "El contenido genera tráfico, pero ¿qué pasa cuando alguien llega? Un sistema con IA responde al visitante en tiempo real por chat, WhatsApp o email, cualifica su interés con preguntas contextuales, y enruta al equipo comercial solo los leads que cumplen criterios del ICP. Los que no califican entran a nurturing automático.",
      },
      {
        title: "Capa 4 — Análisis y optimización",
        body: "¿Qué contenido genera leads reales? ¿Qué canal convierte mejor? ¿Qué keywords atraen prospectos que compran? Un agente de analítica cruza datos de todas las capas y genera reportes con recomendaciones accionables. El equipo toma decisiones con datos, no con intuición.",
      },
    ],
  },
  s3: {
    heading: "Lo que NO deberías automatizar (todavía)",
    intro: "Tres cosas que las empresas intentan automatizar y les sale mal:",
    items: [
      {
        title: "La estrategia de contenido",
        desc: "La IA ejecuta bien pero decide mal qué temas priorizar — eso necesita visión humana del negocio. Definir sobre qué hablar, con qué ángulo y para qué audiencia es trabajo estratégico que ningún agente puede hacer solo.",
      },
      {
        title: "Las relaciones con clientes clave",
        desc: "Automatizar la comunicación con tus top 20 clientes es un error. Ahí el toque humano es irremplazable. La IA puede ayudarte a preparar mejor esas conversaciones, pero no puede tenerlas por ti.",
      },
      {
        title: "El posicionamiento de marca",
        desc: "Tu voz, tus valores y tu narrativa no los puede definir una máquina — los puede amplificar, pero no crear. El posicionamiento requiere decisiones humanas sobre qué batallas pelear y qué representar.",
      },
    ],
  },
  s4: {
    heading: "El stack mínimo para empezar",
    intro: "No necesitas 10 herramientas. El stack mínimo viable para un sistema de marketing con IA:",
    tools: [
      { category: "CRM", examples: "GoHighLevel, HubSpot, Pipedrive", cost: "Desde $97/mes" },
      { category: "Automatización", examples: "N8N o Make para conectar todo", cost: "$0–$29/mes" },
      { category: "Modelos de IA", examples: "Claude o GPT-4o para contenido y análisis", cost: "$20–$60/mes" },
      { category: "Publicación", examples: "Buffer, Hootsuite o APIs directas", cost: "$15–$99/mes" },
    ],
    note: "Total: $200-$500/mes en herramientas. El cuello de botella no es el coste del software — es saber qué automatizar primero y cómo conectar las piezas.",
  },
  s5: {
    heading: "Caso real: de 2 posts por semana a sistema de contenido automatizado",
    context: "Una empresa B2B de servicios profesionales en España producía 2 posts de LinkedIn y 1 newsletter al mes, todo manual. Misma persona de marketing, sin presupuesto adicional.",
    before: "Antes: 2 posts/semana LinkedIn + 1 newsletter/mes. Todo pasaba por revisión de dirección. Tiempo de producción: 8-12 horas semanales.",
    after: "Después: 12 posts/semana en 3 plataformas + 1 newsletter semanal + 2 artículos de blog/mes. Misma persona coordinando, 10x más output.",
    result: "Los leads inbound aumentaron un 340% en 8 semanas.",
    key: "La clave no fue la IA sino el sistema: calendario editorial claro, voz de marca documentada, y proceso de revisión humana antes de publicar.",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿La IA puede escribir contenido que suene como mi marca?",
        a: "Sí, si le das contexto suficiente. Documentar tu voz, tono y estilo es el paso más importante antes de automatizar. Sin esa guía, la IA produce contenido genérico — con ella, produce contenido que parece escrito por ti.",
      },
      {
        q: "¿Cuánto cuesta automatizar el marketing con IA?",
        a: "El stack de herramientas cuesta $200-$500/mes. La implementación profesional va desde €1,000 para un agente de contenido hasta €5,000+ para un sistema multicanal completo con captación y analítica integradas.",
      },
      {
        q: "¿El contenido generado con IA penaliza en Google?",
        a: "No, si es contenido útil y original. Google evalúa calidad, no método de producción. Lo que penaliza es contenido genérico, repetitivo o sin valor — sea humano o de IA. La clave es que el contenido responda preguntas reales con información genuinamente útil.",
      },
    ],
  },
  cta: {
    heading: "¿Quieres saber qué partes de tu marketing se pueden automatizar primero?",
    ctaPrimary: "Agenda una consultoría gratuita →",
    ctaSecondary: "O lee la guía completa: Agentes de IA para Ventas B2B →",
    ctaSecondaryLink: "/guia/agentes-ia-ventas-b2b",
  },
  footer: { home: "Inicio", privacy: "Privacidad", terms: "Términos" },
};

const en: PageContent = {
  meta: {
    title: "AI Marketing Automation in 2026: What Works and What Doesn't | VeryMuch.ai",
    description:
      "Practical guide to marketing automation with artificial intelligence. Content, distribution, lead nurturing, and analysis — what to automate and what not to.",
    ogTitle: "AI Marketing Automation in 2026: What Works and What Doesn't",
    ogDescription:
      "Content, distribution, lead nurturing, and analysis — what to automate with AI and what you shouldn't touch yet.",
    twitterDesc: "Practical guide: AI marketing automation in 2026. What works, what doesn't, and how to build a real system.",
    ogLocale: "en_US",
  },
  breadcrumb: { home: "Home", blog: "Blog", page: "AI marketing automation in 2026" },
  jsonld: {
    articleHeadline: "AI Marketing Automation in 2026: What Works and What Doesn't",
    articleDescription:
      "Practical guide to marketing automation with artificial intelligence. Content, distribution, lead nurturing, and analysis — what to automate and what not to.",
    breadcrumb: [
      { name: "Home", item: `${BASE_URL}/en` },
      { name: "Blog", item: `${BASE_URL}/en/blog` },
      { name: "AI marketing automation in 2026", item: `${BASE_URL}/en/blog/automatizacion-marketing-ia-2026` },
    ],
  },
  hero: {
    badge: "✦ MARKETING AI",
    h1: "AI marketing automation in 2026: what works and what doesn't",
    sub: "84% of SMBs want to automate content creation. But most only use ChatGPT to write posts nobody reads. This guide is about building a real system.",
    by: "By",
    date: "March 24, 2026",
    readTime: "7 min read",
  },
  toc: {
    label: "In this article",
    items: [
      { id: "capas", label: "The 4 layers of AI marketing automation" },
      { id: "no-automatizar", label: "What you should NOT automate (yet)" },
      { id: "stack", label: "The minimum stack to get started" },
      { id: "caso-real", label: "Real case: from 2 posts to automated content system" },
      { id: "faq", label: "Frequently asked questions" },
    ],
  },
  intro: {
    p1: "84% of SMBs want to automate content creation. 77% prioritize marketing and engagement as the area where AI can generate the most impact. And yet, most companies that \"automate their marketing with AI\" are really just using ChatGPT to write posts nobody reads.",
    p2: "The problem isn't the tool. It's that automating marketing without strategy means scaling the noise. In this guide we explain which parts of marketing can be automated with AI today, which you shouldn't touch yet, and how to build a marketing system that generates real leads instead of vanity metrics.",
  },
  s2: {
    heading: "The 4 layers of AI marketing automation",
    layers: [
      {
        title: "Layer 1 — Content production",
        body: "An AI agent that generates articles, social media posts, newsletters, and lead magnets aligned with your strategy and brand voice. Not asking ChatGPT to write something — it's a system that knows your ICP, your tone, your target keywords, and produces content that fits an editorial calendar. Real result: teams that produce 10x more content with the same headcount.",
      },
      {
        title: "Layer 2 — Multichannel distribution",
        body: "An agent that takes approved content, adapts it to each channel's format (LinkedIn, Twitter, Instagram, blog, email), and publishes it automatically according to the calendar. Your team focuses on creating, not copy-pasting across 5 platforms.",
      },
      {
        title: "Layer 3 — Capture and qualification",
        body: "Content generates traffic, but what happens when someone arrives? An AI system responds to visitors in real time via chat, WhatsApp, or email, qualifies their interest with contextual questions, and routes only ICP-matching leads to the sales team. Those who don't qualify enter automated nurturing.",
      },
      {
        title: "Layer 4 — Analysis and optimization",
        body: "Which content generates real leads? Which channel converts best? Which keywords attract prospects who buy? An analytics agent crosses data from all layers and generates reports with actionable recommendations. The team makes decisions with data, not intuition.",
      },
    ],
  },
  s3: {
    heading: "What you should NOT automate (yet)",
    intro: "Three things companies try to automate and it goes wrong:",
    items: [
      {
        title: "Content strategy",
        desc: "AI executes well but decides poorly which topics to prioritize — that requires human business vision. Deciding what to talk about, with what angle, and for which audience is strategic work no agent can do alone.",
      },
      {
        title: "Relationships with key clients",
        desc: "Automating communication with your top 20 clients is a mistake. The human touch there is irreplaceable. AI can help you prepare better for those conversations, but it can't have them for you.",
      },
      {
        title: "Brand positioning",
        desc: "Your voice, values, and narrative can't be defined by a machine — they can be amplified, but not created. Positioning requires human decisions about which battles to fight and what to stand for.",
      },
    ],
  },
  s4: {
    heading: "The minimum stack to get started",
    intro: "You don't need 10 tools. The minimum viable stack for an AI marketing system:",
    tools: [
      { category: "CRM", examples: "GoHighLevel, HubSpot, Pipedrive", cost: "From $97/month" },
      { category: "Automation", examples: "N8N or Make to connect everything", cost: "$0–$29/month" },
      { category: "AI models", examples: "Claude or GPT-4o for content and analysis", cost: "$20–$60/month" },
      { category: "Publishing", examples: "Buffer, Hootsuite, or direct APIs", cost: "$15–$99/month" },
    ],
    note: "Total: $200-$500/month in tools. The bottleneck isn't software cost — it's knowing what to automate first and how to connect the pieces.",
  },
  s5: {
    heading: "Real case: from 2 posts a week to automated content system",
    context: "A B2B professional services firm in Spain was producing 2 LinkedIn posts and 1 newsletter per month, all manual. Same marketing person, no additional budget.",
    before: "Before: 2 posts/week on LinkedIn + 1 newsletter/month. Everything went through management review. Production time: 8-12 hours per week.",
    after: "After: 12 posts/week across 3 platforms + 1 weekly newsletter + 2 blog posts/month. Same person coordinating, 10x more output.",
    result: "Inbound leads increased 340% in 8 weeks.",
    key: "The key wasn't the AI but the system: clear editorial calendar, documented brand voice, and human review process before publishing.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Can AI write content that sounds like my brand?",
        a: "Yes, if you give it enough context. Documenting your voice, tone, and style is the most important step before automating. Without that guide, AI produces generic content — with it, it produces content that sounds like you.",
      },
      {
        q: "How much does it cost to automate marketing with AI?",
        a: "The tool stack costs $200-$500/month. Professional implementation ranges from €1,000 for a content agent to €5,000+ for a complete multichannel system with integrated capture and analytics.",
      },
      {
        q: "Does AI-generated content penalize in Google?",
        a: "No, if it's useful and original content. Google evaluates quality, not production method. What penalizes is generic, repetitive, or valueless content — whether human or AI. The key is that content answers real questions with genuinely useful information.",
      },
    ],
  },
  cta: {
    heading: "Want to know which parts of your marketing can be automated first?",
    ctaPrimary: "Book a free consultation →",
    ctaSecondary: "Or read the full guide: AI Agents for B2B Sales →",
    ctaSecondaryLink: "/guia/agentes-ia-ventas-b2b",
  },
  footer: { home: "Home", privacy: "Privacy", terms: "Terms" },
};

const CONTENT: Record<string, PageContent> = { es, en };

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/automatizacion-marketing-ia-2026`
      : `${BASE_URL}/blog/automatizacion-marketing-ia-2026`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/automatizacion-marketing-ia-2026`,
        en: `${BASE_URL}/en/blog/automatizacion-marketing-ia-2026`,
        "x-default": `${BASE_URL}/blog/automatizacion-marketing-ia-2026`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: c.meta.ogLocale,
      url: canonical,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VeryMuch.ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.ogTitle,
      description: c.meta.twitterDesc,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="rounded-xl p-5 border-l-4 my-6"
      style={{ background: "rgba(245,160,64,0.06)", borderLeftColor: "var(--accent-warm)" }}
    >
      <div className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </blockquote>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AutomatizacionMarketingPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonicalUrl =
    locale === "en"
      ? `${BASE_URL}/en/blog/automatizacion-marketing-ia-2026`
      : `${BASE_URL}/blog/automatizacion-marketing-ia-2026`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.articleHeadline,
    description: c.jsonld.articleDescription,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Person", name: "Jorge Herrera Cruz", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Verymuch.ai",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    image: OG_IMAGE,
    inLanguage: locale === "en" ? "en-US" : "es-ES",
    keywords:
      locale === "en"
        ? "AI marketing automation, content automation, AI content marketing, marketing AI tools, B2B marketing automation"
        : "automatización de marketing con IA, automatización de contenido, marketing con inteligencia artificial, herramientas IA marketing, automatización marketing B2B",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: c.jsonld.breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  const layerColors = [
    { bg: "rgba(74,212,174,0.06)", border: "rgba(74,212,174,0.2)", num: "01" },
    { bg: "rgba(245,160,64,0.06)", border: "rgba(245,160,64,0.2)", num: "02" },
    { bg: "rgba(248,64,94,0.05)", border: "rgba(248,64,94,0.18)", num: "03" },
    { bg: "rgba(74,212,174,0.04)", border: "rgba(74,212,174,0.15)", num: "04" },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-12 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 60% -10%, rgba(245,160,64,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-2xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline transition-opacity hover:opacity-100 opacity-70">
              {c.breadcrumb.home}
            </Link>
            <span className="opacity-30">/</span>
            <span className="opacity-50">{c.breadcrumb.blog}</span>
            <span className="opacity-30">/</span>
            <span style={{ color: "var(--accent-warm-text)" }}>{c.breadcrumb.page}</span>
          </nav>

          <p className="mb-4">
            <span
              className="badge-label"
              style={{ color: "var(--accent-warm-text)", background: "rgba(245,160,64,0.1)" }}
            >
              {c.hero.badge}
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,4.5vw,2.8rem)", letterSpacing: "-0.025em", color: "var(--text-primary)" }}
          >
            {c.hero.h1}
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>{c.hero.by} <strong style={{ color: "var(--text-primary)" }}>Jorge Herrera Cruz</strong></span>
            <span className="opacity-30">·</span>
            <time dateTime={PUBLISHED}>{c.hero.date}</time>
            <span className="opacity-30">·</span>
            <span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      <div className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* ── TOC ─────────────────────────────────────────────────────── */}
          <nav
            aria-label={c.toc.label}
            className="rounded-2xl p-6 border mb-12"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p className="caption uppercase tracking-widest font-bold mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.toc.label}
            </p>
            <ol className="flex flex-col gap-2">
              {c.toc.items.map((item, i) => (
                <li key={item.id} className="flex items-baseline gap-3">
                  <span className="text-xs font-bold w-5 shrink-0 text-right" style={{ color: "var(--accent-warm-text)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm transition-opacity hover:opacity-100 opacity-70 hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Intro ───────────────────────────────────────────────────── */}
          <div className="mb-16">
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.intro.p1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.intro.p2}
            </p>
          </div>

          {/* ── Section 1: Las 4 capas ───────────────────────────────────── */}
          <section id="capas" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s2.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.s2.layers.map((layer, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border"
                  style={{ background: layerColors[i].bg, borderColor: layerColors[i].border }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-2xl font-extrabold leading-none shrink-0 mt-0.5"
                      style={{ color: i < 2 ? "var(--accent-text)" : i === 2 ? "#F5405E" : "var(--accent-text)" }}
                    >
                      {layerColors[i].num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                        {layer.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {layer.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 2: Lo que NO automatizar ────────────────────────── */}
          <section id="no-automatizar" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s3.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s3.intro}
            </p>
            <div className="flex flex-col gap-4">
              {c.s3.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-base font-bold shrink-0 mt-0.5" style={{ color: "#F5405E" }}>✗</span>
                    <div>
                      <h3 className="text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Stack mínimo ──────────────────────────────────── */}
          <section id="stack" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s4.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s4.intro}
            </p>
            <div className="rounded-xl border overflow-hidden mb-4" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg-secondary)" }}>
                    <th className="text-left p-4 font-semibold" style={{ color: "var(--text-primary)" }}>
                      {locale === "es" ? "Capa" : "Layer"}
                    </th>
                    <th className="text-left p-4 font-semibold" style={{ color: "var(--text-primary)" }}>
                      {locale === "es" ? "Herramientas" : "Tools"}
                    </th>
                    <th className="text-left p-4 font-semibold" style={{ color: "var(--text-primary)" }}>
                      {locale === "es" ? "Coste aprox." : "Approx. cost"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.s4.tools.map((tool, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)",
                        borderTop: `1px solid var(--border)`,
                      }}
                    >
                      <td className="p-4 font-medium" style={{ color: "var(--text-primary)" }}>{tool.category}</td>
                      <td className="p-4" style={{ color: "var(--text-secondary)" }}>{tool.examples}</td>
                      <td className="p-4 font-medium" style={{ color: "var(--accent-text)" }}>{tool.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <HighlightBox>{c.s4.note}</HighlightBox>
            <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              {locale === "es" ? (
                <>
                  Si quieres ayuda implementando este sistema, revisa{" "}
                  <Link
                    href="/servicios/agentes-automatizacion"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    nuestro servicio de agentes de IA y automatización
                  </Link>{" "}
                  o agenda una{" "}
                  <Link
                    href="/servicios/consultoria-ia"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    consultoría estratégica de IA
                  </Link>
                  .
                </>
              ) : (
                <>
                  If you want help implementing this system, check out{" "}
                  <Link
                    href="/servicios/agentes-automatizacion"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    our AI agents and automation service
                  </Link>{" "}
                  or book an{" "}
                  <Link
                    href="/servicios/consultoria-ia"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    AI strategic consultation
                  </Link>
                  .
                </>
              )}
            </p>
          </section>

          {/* ── Section 4: Caso real ─────────────────────────────────────── */}
          <section id="caso-real" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s5.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s5.context}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div
                className="rounded-xl p-5 border"
                style={{ background: "rgba(248,64,94,0.04)", borderColor: "rgba(248,64,94,0.15)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#F5405E" }}>
                  {locale === "es" ? "Antes" : "Before"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {c.s5.before}
                </p>
              </div>
              <div
                className="rounded-xl p-5 border"
                style={{ background: "rgba(74,212,174,0.06)", borderColor: "rgba(74,212,174,0.2)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent-text)" }}>
                  {locale === "es" ? "Después" : "After"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {c.s5.after}
                </p>
              </div>
            </div>
            <div
              className="rounded-xl p-5 text-center border mb-6"
              style={{ background: "rgba(74,212,174,0.06)", borderColor: "rgba(74,212,174,0.18)" }}
            >
              <div className="text-2xl font-extrabold leading-none mb-2" style={{ color: "var(--accent-text)" }}>
                +340%
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {locale === "es" ? "Leads inbound en 8 semanas" : "Inbound leads in 8 weeks"}
              </div>
            </div>
            <HighlightBox>{c.s5.key}</HighlightBox>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────────────── */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.faq.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {c.faq.items.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Newsletter CTA ───────────────────────────────────────── */}
          <NewsletterCTA locale={locale} />

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <section
            className="rounded-2xl p-8 text-center border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.cta.heading}
            </h2>
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] mb-4"
              style={{ backgroundImage: "linear-gradient(135deg,#F5405E 0%,#F5A05E 100%)" }}
            >
              {c.cta.ctaPrimary}
            </a>
            <p className="mt-4">
              <Link
                href={c.cta.ctaSecondaryLink as "/guia/agentes-ia-ventas-b2b"}
                className="text-sm font-medium underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--accent-warm-text)" }}
              >
                {c.cta.ctaSecondary}
              </Link>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
