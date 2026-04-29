import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import NewsletterCTA from "@/components/NewsletterCTA";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-03-24";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Types ────────────────────────────────────────────────────────────────────

interface UseCase { title: string; desc: string; result: string }
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
  s2: { heading: string; body: string; example: string };
  s3: {
    heading: string;
    level1Title: string; level1Body: string;
    level2Title: string; level2Body: string;
    level3Title: string; level3Body: string;
    note: string;
  };
  s4: { heading: string; intro: string; cases: UseCase[] };
  s5: {
    heading: string; p1: string;
    tier1: string; tier2: string; tier3: string; tier4: string;
  };
  s6: {
    heading: string; p1: string;
    cond1: string; cond2: string; cond3: string;
    warning: string;
    diagnosisCta: string; diagnosisLink: string;
  };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  footer: { home: string; privacy: string; terms: string };
}

// ─── Bilingual content ────────────────────────────────────────────────────────

const es: PageContent = {
  meta: {
    title: "¿Qué es un agente de IA para ventas? Guía práctica 2026 | VeryMuch.ai",
    description:
      "Un agente de IA para ventas no es un chatbot. Entiende qué es, cómo funciona, qué puede hacer por tu equipo comercial y cuánto cuesta implementar uno.",
    ogTitle: "¿Qué es un agente de IA para ventas? Guía práctica 2026",
    ogDescription:
      "Un agente de IA para ventas no es un chatbot. Cómo funciona, qué puede hacer por tu equipo y cuánto cuesta implementarlo.",
    twitterDesc: "Guía práctica 2026: qué es un agente de IA para ventas, diferencia con chatbots, casos de uso y costes.",
    ogLocale: "es_ES",
  },
  breadcrumb: { home: "Inicio", blog: "Blog", page: "¿Qué es un agente de IA para ventas?" },
  jsonld: {
    articleHeadline: "¿Qué es un agente de IA para ventas? Guía práctica 2026",
    articleDescription:
      "Un agente de IA para ventas no es un chatbot. Entiende qué es, cómo funciona, qué puede hacer por tu equipo comercial y cuánto cuesta implementar uno.",
    breadcrumb: [
      { name: "Inicio", item: BASE_URL },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "¿Qué es un agente de IA para ventas?", item: `${BASE_URL}/blog/que-es-agente-ia-ventas` },
    ],
  },
  hero: {
    badge: "✦ CONCEPTOS IA",
    h1: "¿Qué es un agente de IA para ventas? Guía práctica 2026",
    sub: "Todo lo que necesitas saber para entender qué es realmente un agente de IA comercial, en qué se diferencia de las herramientas anteriores, y si tiene sentido implementarlo en tu empresa.",
    by: "Por",
    date: "24 de marzo, 2026",
    readTime: "6 min de lectura",
  },
  toc: {
    label: "En este artículo",
    items: [
      { id: "diferencia", label: "La diferencia real: chatbot vs automatización vs agente" },
      { id: "niveles", label: "Los 3 niveles de sofisticación" },
      { id: "casos-de-uso", label: "Qué puede hacer un agente en tu equipo de ventas" },
      { id: "costes", label: "¿Cuánto cuesta implementar un agente de IA?" },
      { id: "preparado", label: "¿Cómo saber si tu empresa está lista?" },
      { id: "faq", label: "Preguntas frecuentes" },
    ],
  },
  intro: {
    p1: "Si buscas \"agente de IA\" hoy, encuentras mil definiciones diferentes. Cada proveedor llama \"agente\" a lo que vende, desde un chatbot básico hasta una automatización con GPT encima. Gartner lo llama \"agentwashing\" — y tiene razón: de los miles de proveedores que dicen tener agentes autónomos, solo unos 130 tienen algo genuinamente diferente.",
    p2: "En esta guía te explicamos qué es realmente un agente de IA para ventas, en qué se diferencia de un chatbot o una automatización, qué puede hacer hoy por tu equipo comercial, y cuánto cuesta implementar uno. Sin jerga, con ejemplos concretos. Si quieres profundizar más allá de lo básico, consulta nuestra guía completa de agentes de IA para ventas B2B.",
  },
  s2: {
    heading: "La diferencia real: chatbot vs automatización vs agente",
    body: "Un chatbot responde preguntas frecuentes con respuestas predefinidas. Una automatización ejecuta reglas fijas (si pasa X, haz Y). Un agente de IA razona, planifica y decide cómo alcanzar un objetivo. La diferencia no es de grado — es de naturaleza. El chatbot necesita que alguien programe cada respuesta. La automatización se rompe ante casos no previstos. El agente gestiona excepciones con criterio, mantiene contexto entre interacciones y se adapta a situaciones nuevas dentro de su dominio.",
    example: "Ejemplo concreto: un prospecto responde a tu email con una pregunta inesperada. El chatbot no sabe qué hacer. La automatización sigue la secuencia como si nada. El agente lee la respuesta, entiende la intención, busca contexto relevante y genera una respuesta personalizada.",
  },
  s3: {
    heading: "Los 3 niveles de sofisticación",
    level1Title: "Nivel 1 — Copilot",
    level1Body: "Asiste al vendedor con sugerencias, búsqueda de información y preparación de briefings. El humano decide y ejecuta. Ideal para equipos que quieren empezar con IA sin cambiar su proceso completo.",
    level2Title: "Nivel 2 — Agente con tareas acotadas",
    level2Body: "Ejecuta autónomamente dentro de un alcance definido: calificar leads, hacer seguimiento, enriquecer datos. El humano supervisa el resultado pero no interviene en cada paso.",
    level3Title: "Nivel 3 — Representante digital completo",
    level3Body: "Gestiona el ciclo desde señal hasta reunión agendada sin intervención humana. Solo el 3% de implementaciones llega aquí hoy. Requiere datos limpios, procesos documentados y supervisión robusta.",
    note: "La mayoría de empresas debería empezar por nivel 1 o 2. Escalar prematuramente al nivel 3 sin las bases es uno de los errores más frecuentes — y caros — que vemos en implementaciones fallidas.",
  },
  s4: {
    heading: "¿Qué puede hacer un agente de IA en tu equipo de ventas?",
    intro: "Estos son los 5 casos de uso más probados en entornos B2B reales:",
    cases: [
      {
        title: "Responder leads inbound en menos de 60 segundos",
        desc: "Por WhatsApp, email o chat — el agente recibe la consulta, entiende el contexto y responde de forma personalizada sin esperar a que un SDR esté disponible.",
        result: "El 78% de los compradores elige al primero que contesta. Las empresas que responden en menos de 5 minutos tienen 100x más probabilidades de cualificar el lead.",
      },
      {
        title: "Investigar prospectos y generar briefings automáticos",
        desc: "Antes de cada llamada, el agente genera un brief con información de la empresa, señales de compra recientes, posibles pain points y mensajes de apertura sugeridos.",
        result: "Los SDRs recuperan el 60-70% del tiempo que dedicaban a investigación manual, que puede redirigirse a conversaciones reales.",
      },
      {
        title: "Escribir y enviar secuencias de outreach personalizadas",
        desc: "Basado en señales reales (actividad en LinkedIn, visitas a web, cambios de cargo), el agente genera mensajes personalizados para cada prospecto — no plantillas genéricas.",
        result: "Las tasas de respuesta en outreach personalizado son 3-5x mayores que en campañas de email masivo.",
      },
      {
        title: "Hacer seguimiento automático de leads fríos",
        desc: "El agente monitoriza el pipeline, detecta leads sin actividad reciente y lanza seguimientos relevantes en el momento adecuado, sin que ningún humano tenga que recordarlo.",
        result: "Las empresas con seguimiento automatizado recuperan entre el 15-25% del pipeline que de otra forma se perdería.",
      },
      {
        title: "Limpiar y enriquecer datos del CRM continuamente",
        desc: "Detecta duplicados, completa campos vacíos con datos verificados de fuentes externas, y mantiene el CRM actualizado sin intervención manual.",
        result: "Los CRMs con datos limpios mejoran la precisión de forecasting en un 35% según Validity Research 2025.",
      },
    ],
  },
  s5: {
    heading: "¿Cuánto cuesta implementar un agente de IA?",
    p1: "Depende del alcance. Aquí un desglose honesto para que puedas comparar con lo que ves en el mercado:",
    tier1: "Agente específico y bien definido: desde $1,000 USD en modalidad de instalación (queda en tu infraestructura, es tuyo).",
    tier2: "Sistema completo de prospección o enrutamiento de leads: entre $3,000 y $8,000 según complejidad e integraciones.",
    tier3: "Modelo AaaS (Agent as a Service): desde $1,500/mes — incluye operación, iteraciones y soporte continuo.",
    tier4: "Costes de modelos de IA: $50-$300/mes adicionales según volumen de uso.",
  },
  s6: {
    heading: "¿Cómo saber si tu empresa está lista?",
    p1: "Tres condiciones mínimas que necesitas tener antes de implementar:",
    cond1: "Un CRM con datos medianamente limpios. No perfectos, pero coherentes.",
    cond2: "Un proceso de ventas que funcione manualmente, aunque sea lento.",
    cond3: "Al menos una persona dispuesta a supervisar al agente durante los primeros 90 días.",
    warning: "Si tu proceso manual no convierte, el agente no lo va a arreglar — lo va a escalar más rápido. Si no tienes CRM, el primer paso es adoptar uno, no contratar IA.",
    diagnosisCta: "¿Quieres saber en 5 minutos qué tan lista está tu empresa? Haz el diagnóstico ARRI gratuito →",
    diagnosisLink: "/ai-readiness",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Un agente de IA reemplaza a mi equipo de ventas?",
        a: "No. Elimina el trabajo mecánico: investigación, enriquecimiento de datos, redacción de mensajes, seguimientos. Tu equipo se enfoca en lo que solo ellos pueden hacer: construir relaciones, manejar objeciones complejas, cerrar.",
      },
      {
        q: "¿Funciona en español?",
        a: "Sí. Los modelos actuales (Claude, GPT-4o) generan mensajes en español e inglés con la misma calidad. Puedes configurar el mismo agente para operar en múltiples idiomas simultáneamente.",
      },
      {
        q: "¿Cuánto tarda la implementación?",
        a: "2-6 semanas según complejidad. La variable principal es la calidad de tus datos y la claridad del proceso, no la tecnología. Si el proceso no está documentado, la implementación tarda más.",
      },
    ],
  },
  cta: {
    heading: "¿Listo para implementar tu primer agente?",
    ctaPrimary: "Agenda una consultoría gratuita →",
    ctaSecondary: "O lee la guía completa: Agentes de IA para Ventas B2B →",
    ctaSecondaryLink: "/guia/agentes-ia-ventas-b2b",
  },
  footer: { home: "Inicio", privacy: "Privacidad", terms: "Términos" },
};

const en: PageContent = {
  meta: {
    title: "What is an AI Sales Agent? Practical Guide 2026 | VeryMuch.ai",
    description:
      "An AI sales agent is not a chatbot. Understand what it is, how it works, what it can do for your sales team, and how much it costs to implement one.",
    ogTitle: "What is an AI Sales Agent? Practical Guide 2026",
    ogDescription:
      "An AI sales agent is not a chatbot. How it works, what it can do for your team, and how much it costs to implement.",
    twitterDesc: "Practical guide 2026: what is an AI sales agent, difference from chatbots, use cases and costs.",
    ogLocale: "en_US",
  },
  breadcrumb: { home: "Home", blog: "Blog", page: "What is an AI Sales Agent?" },
  jsonld: {
    articleHeadline: "What is an AI Sales Agent? Practical Guide 2026",
    articleDescription:
      "An AI sales agent is not a chatbot. Understand what it is, how it works, what it can do for your sales team, and how much it costs to implement one.",
    breadcrumb: [
      { name: "Home", item: `${BASE_URL}/en` },
      { name: "Blog", item: `${BASE_URL}/en/blog` },
      { name: "What is an AI Sales Agent?", item: `${BASE_URL}/en/blog/que-es-agente-ia-ventas` },
    ],
  },
  hero: {
    badge: "✦ AI CONCEPTS",
    h1: "What is an AI sales agent? Practical guide 2026",
    sub: "Everything you need to know to understand what an AI sales agent really is, how it differs from previous tools, and whether it makes sense to implement one in your company.",
    by: "By",
    date: "March 24, 2026",
    readTime: "6 min read",
  },
  toc: {
    label: "In this article",
    items: [
      { id: "diferencia", label: "The real difference: chatbot vs automation vs agent" },
      { id: "niveles", label: "The 3 levels of sophistication" },
      { id: "casos-de-uso", label: "What an agent can do for your sales team" },
      { id: "costes", label: "How much does it cost to implement an AI agent?" },
      { id: "preparado", label: "How to know if your company is ready" },
      { id: "faq", label: "Frequently asked questions" },
    ],
  },
  intro: {
    p1: "If you search for \"AI agent\" today, you'll find a thousand different definitions. Every vendor calls \"agent\" whatever they're selling — from a basic chatbot to an automation with GPT on top. Gartner calls it \"agentwashing\" — and they're right: of the thousands of vendors claiming to have autonomous agents, only about 130 have something genuinely different.",
    p2: "In this guide we explain what an AI sales agent really is, how it differs from a chatbot or automation, what it can do for your sales team today, and how much it costs to implement one. No jargon, concrete examples. To go deeper, read our complete guide to AI agents for B2B sales.",
  },
  s2: {
    heading: "The real difference: chatbot vs automation vs agent",
    body: "A chatbot answers FAQs with predefined responses. An automation executes fixed rules (if X happens, do Y). An AI agent reasons, plans, and decides how to achieve an objective. The difference is not one of degree — it's one of nature. The chatbot needs someone to program every response. The automation breaks in unforeseen cases. The agent handles exceptions with judgment, maintains context between interactions, and adapts to new situations within its domain.",
    example: "Concrete example: a prospect responds to your email with an unexpected question. The chatbot doesn't know what to do. The automation follows the sequence as if nothing happened. The agent reads the response, understands the intent, searches for relevant context, and generates a personalized reply.",
  },
  s3: {
    heading: "The 3 levels of sophistication",
    level1Title: "Level 1 — Copilot",
    level1Body: "Assists the salesperson with suggestions, information lookup, and briefing preparation. The human decides and executes. Ideal for teams that want to start with AI without overhauling their entire process.",
    level2Title: "Level 2 — Agent with bounded tasks",
    level2Body: "Executes autonomously within a defined scope: qualifying leads, following up, enriching data. The human reviews results but doesn't intervene in every step.",
    level3Title: "Level 3 — Complete digital representative",
    level3Body: "Manages the full cycle from signal to booked meeting without human intervention. Only 3% of implementations reach this today. Requires clean data, documented processes, and robust oversight.",
    note: "Most companies should start at level 1 or 2. Prematurely scaling to level 3 without the foundations is one of the most common — and costly — mistakes we see in failed implementations.",
  },
  s4: {
    heading: "What can an AI agent do for your sales team?",
    intro: "These are the 5 most proven use cases in real B2B environments:",
    cases: [
      {
        title: "Respond to inbound leads in under 60 seconds",
        desc: "Via WhatsApp, email, or chat — the agent receives the inquiry, understands context, and responds personally without waiting for an SDR to be available.",
        result: "78% of buyers choose whoever responds first. Companies that respond in under 5 minutes are 100x more likely to qualify the lead.",
      },
      {
        title: "Research prospects and generate automatic briefings",
        desc: "Before each call, the agent generates a brief with company information, recent buying signals, potential pain points, and suggested opening messages.",
        result: "SDRs recover 60-70% of the time they spent on manual research, which can be redirected to real conversations.",
      },
      {
        title: "Write and send personalized outreach sequences",
        desc: "Based on real signals (LinkedIn activity, website visits, role changes), the agent generates personalized messages for each prospect — not generic templates.",
        result: "Response rates in personalized outreach are 3-5x higher than mass email campaigns.",
      },
      {
        title: "Automatically follow up on cold leads",
        desc: "The agent monitors the pipeline, detects leads with no recent activity, and triggers relevant follow-ups at the right moment, without any human having to remember.",
        result: "Companies with automated follow-up recover 15-25% of pipeline that would otherwise be lost.",
      },
      {
        title: "Continuously clean and enrich CRM data",
        desc: "Detects duplicates, fills empty fields with verified data from external sources, and keeps the CRM updated without manual intervention.",
        result: "CRMs with clean data improve forecasting accuracy by 35% according to Validity Research 2025.",
      },
    ],
  },
  s5: {
    heading: "How much does it cost to implement an AI agent?",
    p1: "It depends on scope. Here's an honest breakdown so you can compare with what you see in the market:",
    tier1: "Specific, well-defined agent: from $1,000 USD in installation mode (stays in your infrastructure, it's yours).",
    tier2: "Complete prospecting or lead routing system: between $3,000 and $8,000 depending on complexity and integrations.",
    tier3: "AaaS model (Agent as a Service): from $1,500/month — includes operation, iterations, and ongoing support.",
    tier4: "AI model costs: $50-$300/month additional depending on usage volume.",
  },
  s6: {
    heading: "How to know if your company is ready",
    p1: "Three minimum conditions you need before implementing:",
    cond1: "A CRM with reasonably clean data. Not perfect, but consistent.",
    cond2: "A sales process that works manually, even if slow.",
    cond3: "At least one person willing to supervise the agent during the first 90 days.",
    warning: "If your manual process doesn't convert, the agent won't fix it — it will scale the problem faster. If you don't have a CRM, the first step is adopting one, not buying AI.",
    diagnosisCta: "Want to know in 5 minutes how ready your company is? Take the free ARRI assessment →",
    diagnosisLink: "/ai-readiness",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Does an AI agent replace my sales team?",
        a: "No. It eliminates mechanical work: research, data enrichment, message drafting, follow-ups. Your team focuses on what only they can do: build relationships, handle complex objections, close.",
      },
      {
        q: "Does it work in Spanish?",
        a: "Yes. Current models (Claude, GPT-4o) generate messages in Spanish and English with the same quality. You can configure the same agent to operate in multiple languages simultaneously.",
      },
      {
        q: "How long does implementation take?",
        a: "2-6 weeks depending on complexity. The main variable is the quality of your data and process clarity, not the technology. If the process isn't documented, implementation takes longer.",
      },
    ],
  },
  cta: {
    heading: "Ready to implement your first agent?",
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
      ? `${BASE_URL}/en/blog/que-es-agente-ia-ventas`
      : `${BASE_URL}/blog/que-es-agente-ia-ventas`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/que-es-agente-ia-ventas`,
        en: `${BASE_URL}/en/blog/que-es-agente-ia-ventas`,
        "x-default": `${BASE_URL}/blog/que-es-agente-ia-ventas`,
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

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 border-l-4 my-6"
      style={{ background: "rgba(248,64,94,0.05)", borderLeftColor: "#F5405E" }}
    >
      <div className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function QueEsAgentePage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.es;
  const canonicalUrl =
    locale === "en"
      ? `${BASE_URL}/en/blog/que-es-agente-ia-ventas`
      : `${BASE_URL}/blog/que-es-agente-ia-ventas`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.jsonld.articleHeadline,
    description: c.jsonld.articleDescription,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Person", name: "Edwin Moreno", url: BASE_URL },
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
        ? "AI sales agent, sales automation, AI chatbot, artificial intelligence sales, B2B AI"
        : "agente de IA para ventas, automatización de ventas, chatbot IA, inteligencia artificial ventas, IA B2B",
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
              "radial-gradient(ellipse 80% 50% at 60% -10%, rgba(74,212,174,0.07) 0%, transparent 65%)",
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
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.page}</span>
          </nav>

          <p className="mb-4">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>{c.hero.badge}</span>
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
            <span>{c.hero.by} <strong style={{ color: "var(--text-primary)" }}>Edwin Moreno</strong></span>
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
                  <span className="text-xs font-bold w-5 shrink-0 text-right" style={{ color: "var(--accent-text)" }}>
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
              {locale === "es" ? (
                <>
                  En esta guía te explicamos qué es realmente un agente de IA para ventas, en qué se diferencia de un chatbot o una automatización, qué puede hacer hoy por tu equipo comercial, y cuánto cuesta implementar uno. Sin jerga, con ejemplos concretos. Si quieres profundizar más allá de lo básico, consulta nuestra{" "}
                  <Link
                    href="/guia/agentes-ia-ventas-b2b"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    guía completa de agentes de IA para ventas B2B
                  </Link>
                  .
                </>
              ) : (
                <>
                  In this guide we explain what an AI sales agent really is, how it differs from a chatbot or automation, what it can do for your sales team today, and how much it costs to implement one. No jargon, concrete examples. To go deeper, read our{" "}
                  <Link
                    href="/guia/agentes-ia-ventas-b2b"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    complete guide to AI agents for B2B sales
                  </Link>
                  .
                </>
              )}
            </p>
          </div>

          {/* ── Section 1: Diferencia ────────────────────────────────────── */}
          <section id="diferencia" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s2.heading}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {c.s2.body}
            </p>
            <HighlightBox>{c.s2.example}</HighlightBox>
          </section>

          {/* ── Section 2: Niveles ──────────────────────────────────────── */}
          <section id="niveles" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {c.s3.heading}
            </h2>
            <div className="flex flex-col gap-4 mb-6">
              {[
                { title: c.s3.level1Title, body: c.s3.level1Body, color: "rgba(74,212,174,0.06)", border: "rgba(74,212,174,0.2)" },
                { title: c.s3.level2Title, body: c.s3.level2Body, color: "rgba(245,160,64,0.06)", border: "rgba(245,160,64,0.2)" },
                { title: c.s3.level3Title, body: c.s3.level3Body, color: "rgba(248,64,94,0.05)", border: "rgba(248,64,94,0.18)" },
              ].map((level) => (
                <div
                  key={level.title}
                  className="rounded-xl p-5 border"
                  style={{ background: level.color, borderColor: level.border }}
                >
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {level.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {level.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              {c.s3.note}
            </p>
          </section>

          {/* ── Section 3: Casos de uso ──────────────────────────────────── */}
          <section id="casos-de-uso" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s4.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s4.intro}
            </p>
            <div className="flex flex-col gap-5">
              {c.s4.cases.map((uc, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                    {uc.desc}
                  </p>
                  <p
                    className="text-xs font-medium rounded-lg px-3 py-2 inline-block"
                    style={{ background: "rgba(74,212,174,0.08)", color: "var(--accent-text)" }}
                  >
                    → {uc.result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Costes ───────────────────────────────────────── */}
          <section id="costes" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s5.heading}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.s5.p1}
            </p>
            <div className="flex flex-col gap-3">
              {[c.s5.tier1, c.s5.tier2, c.s5.tier3, c.s5.tier4].map((tier, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-4 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <span
                    className="mt-0.5 text-base font-bold shrink-0"
                    style={{ color: "var(--accent-warm)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {tier}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
              {locale === "es" ? (
                <>
                  Si quieres ver opciones concretas,{" "}
                  <Link
                    href="/servicios/agentes-automatizacion"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    nuestro servicio de agentes de IA
                  </Link>{" "}
                  incluye precios y alcances detallados.
                </>
              ) : (
                <>
                  To see concrete options,{" "}
                  <Link
                    href="/servicios/agentes-automatizacion"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--accent-text)" }}
                  >
                    our AI agents service
                  </Link>{" "}
                  includes detailed pricing and scopes.
                </>
              )}
            </p>
          </section>

          {/* ── Section 5: ¿Estás listo? ────────────────────────────────── */}
          <section id="preparado" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {c.s6.heading}
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.s6.p1}
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[c.s6.cond1, c.s6.cond2, c.s6.cond3].map((cond) => (
                <li key={cond} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold shrink-0" style={{ color: "var(--accent-text)" }}>✓</span>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{cond}</p>
                </li>
              ))}
            </ul>
            <WarningBox>{c.s6.warning}</WarningBox>
            <p className="mt-4">
              <a
                href={c.s6.diagnosisLink}
                className="text-sm font-medium underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--accent-text)" }}
              >
                {c.s6.diagnosisCta}
              </a>
            </p>
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
              className="btn-vm-primary mb-4"
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
