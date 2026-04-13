import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-04-14";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface ComparisonRow {
  feature: string;
  n8n: string;
  make: string;
  zapier: string;
  winner: "n8n" | "make" | "zapier" | "tie";
}

interface FaqItem { q: string; a: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  verdict: { heading: string; body: string };
  tools: {
    n8n: { name: string; tagline: string; pros: string[]; cons: string[]; best_for: string };
    make: { name: string; tagline: string; pros: string[]; cons: string[]; best_for: string };
    zapier: { name: string; tagline: string; pros: string[]; cons: string[]; best_for: string };
  };
  comparison: { heading: string; rows: ComparisonRow[]; legend: { n8n: string; make: string; zapier: string; tie: string } };
  use_cases: { heading: string; items: { title: string; tool: string; why: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "n8n vs Make vs Zapier para agentes de IA en 2026 — VeryMuch.ai",
      description:
        "Comparativa honesta de n8n, Make y Zapier para construir agentes de IA en equipos de ventas y marketing B2B. Cuál elegir según tu caso de uso, presupuesto y equipo técnico.",
      ogTitle: "n8n vs Make vs Zapier para agentes de IA en 2026",
      ogDescription:
        "¿Cuál es la mejor plataforma de automatización para construir agentes de IA en ventas B2B? Comparativa completa con casos de uso reales.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "n8n vs Make vs Zapier 2026" },
    hero: {
      badge: "✦ AUTOMATIZACIÓN IA",
      h1: "n8n vs Make vs Zapier para agentes de IA en 2026: la comparativa honesta",
      sub: "En VeryMuch.ai usamos n8n como plataforma principal. Aquí explicamos por qué — y cuándo tiene sentido usar Make o Zapier.",
      by: "Por",
      date: "14 de abril, 2026",
      readTime: "8 min de lectura",
    },
    intro: {
      p1: "Cuando una empresa nos pregunta qué plataforma de automatización usar para implementar agentes de IA, la respuesta siempre empieza con una pregunta: ¿qué tan técnico es tu equipo y cuánto volumen de ejecuciones estimas al mes? La elección correcta puede ahorrar miles de euros al año en costes operativos — la incorrecta puede bloquearte en workflows que no escalan.",
      p2: "Hemos implementado automatizaciones con las tres plataformas para clientes reales. Esta comparativa está basada en proyectos que involucraron integraciones con GoHighLevel, HubSpot, LinkedIn, Claude y OpenAI — no en demos de laboratorio.",
    },
    verdict: {
      heading: "Veredicto rápido (si no tienes tiempo de leer todo)",
      body: "Usa n8n si tienes alguien técnico en el equipo, volumen alto de ejecuciones, y quieres control total sobre los datos. Usa Make si buscas el equilibrio entre flexibilidad visual y curva de aprendizaje moderada. Usa Zapier solo si tu equipo no tiene ningún perfil técnico y los flujos son simples — a esta escala, el precio por ejecución se vuelve insostenible.",
    },
    tools: {
      n8n: {
        name: "n8n",
        tagline: "La opción de ingeniería — open-source, auto-hosteable, sin límite de ejecuciones",
        pros: [
          "Self-hosted: sin coste por ejecución, solo infraestructura",
          "Código nativo — puedes escribir JavaScript/Python en cualquier nodo",
          "Perfecto para flujos complejos con lógica condicional avanzada",
          "Integración directa con LLMs (Claude, GPT) vía HTTP o nodos nativos",
          "Comunidad activa, templates gratuitos, actualizaciones frecuentes",
          "Control total sobre datos sensibles (no salen de tu infraestructura)",
        ],
        cons: [
          "Curva de aprendizaje más alta — necesitas alguien que entienda APIs",
          "Requiere servidor para self-hosting (o n8n Cloud desde $20/mes)",
          "UI menos visual que Make para flujos simples",
          "Debugging más técnico que en plataformas no-code",
        ],
        best_for: "Equipos con un perfil técnico (developer, RevOps con background técnico, o agencia externa). Ideal cuando el volumen de ejecuciones es alto (+10,000/mes) o los datos son sensibles.",
      },
      make: {
        name: "Make (antes Integromat)",
        tagline: "El equilibrio — visual, flexible, con precio razonable para volumen medio",
        pros: [
          "UI visual tipo diagrama — fácil de entender el flujo completo",
          "Modelo de precio por operación (no por ejecución) — más económico que Zapier",
          "Manejo nativo de arrays, iteradores y rutas complejas",
          "Buena librería de integraciones (2,000+)",
          "Módulo HTTP para llamar a cualquier API sin integración nativa",
          "Mejor para flujos con transformación de datos compleja",
        ],
        cons: [
          "Precio escala con el volumen — puede volverse caro en escenarios de alta frecuencia",
          "Menos flexible que n8n para lógica de programación avanzada",
          "La versión gratuita es muy limitada para proyectos serios",
          "Dependencia de plataforma externa para datos (vs. self-hosted n8n)",
        ],
        best_for: "Equipos semi-técnicos que quieren control visual pero con lógica más avanzada que Zapier. Buen punto medio para proyectos con 1,000–10,000 operaciones/mes.",
      },
      zapier: {
        name: "Zapier",
        tagline: "El más sencillo — pero el precio lo pone en desventaja para uso con IA",
        pros: [
          "La curva de aprendizaje más baja — cualquier perfil lo puede usar",
          "7,000+ integraciones nativas — la biblioteca más grande",
          "Ideal para automatizaciones simples de 2–3 pasos",
          "Soporte excelente y documentación muy completa",
          "Paths y Filters para lógica básica sin código",
        ],
        cons: [
          "Precio por tarea — con agentes de IA que ejecutan muchas llamadas, el coste explota",
          "Flujos complejos son difíciles de mantener visualmente",
          "Límites en el volumen de datos por paso",
          "Lógica avanzada (loops, arrays, transformaciones) es frustrante",
          "Plan gratuito muy restrictivo — no sirve para producción",
        ],
        best_for: "Equipos no técnicos con flujos simples (2–5 pasos) y bajo volumen. No recomendado para agentes de IA que procesan datos en bucle o llamadas frecuentes a LLMs.",
      },
    },
    comparison: {
      heading: "Tabla comparativa",
      rows: [
        { feature: "Precio base (mensual)", n8n: "Gratis (self-hosted) / $20 cloud", make: "$9–$16", zapier: "$19.99–$49", winner: "n8n" },
        { feature: "Costo a 10,000 ejecuciones/mes", n8n: "~$20 (infraestructura)", make: "~$29", zapier: "~$73+", winner: "n8n" },
        { feature: "Curva de aprendizaje", n8n: "Alta (técnica)", make: "Media", zapier: "Baja", winner: "zapier" },
        { feature: "Integración con LLMs (Claude, GPT)", n8n: "Nativa + HTTP", make: "HTTP + módulos", zapier: "HTTP limitado", winner: "n8n" },
        { feature: "Lógica compleja (loops, arrays)", n8n: "Excelente (código)", make: "Buena (visual)", zapier: "Básica", winner: "n8n" },
        { feature: "Control de datos / privacidad", n8n: "Total (self-hosted)", make: "Parcial", zapier: "Mínimo", winner: "n8n" },
        { feature: "Número de integraciones nativas", n8n: "400+", make: "2,000+", zapier: "7,000+", winner: "zapier" },
        { feature: "UI visual / experiencia", n8n: "Media", make: "Muy buena", zapier: "Excelente", winner: "zapier" },
        { feature: "Escalabilidad para agentes IA", n8n: "Alta", make: "Media", zapier: "Baja", winner: "n8n" },
      ],
      legend: { n8n: "Gana n8n", make: "Gana Make", zapier: "Gana Zapier", tie: "Empate" },
    },
    use_cases: {
      heading: "¿Qué usamos en VeryMuch.ai según el caso?",
      items: [
        {
          title: "Agente SDR — calificación automática de leads entrantes",
          tool: "n8n",
          why: "Procesa webhooks de GHL, llama a Claude para calificar, actualiza el CRM y envía el mensaje de respuesta — todo en segundos. El volumen de ejecuciones y la lógica condicional hacen que n8n sea la única opción con precio sostenible.",
        },
        {
          title: "Motor de contenido — generación de posts de LinkedIn",
          tool: "n8n",
          why: "Recibe señales de intención (comentarios, likes de prospectos), llama a Claude con contexto de la empresa, genera el borrador y lo manda por Slack. La integración código-nativa es clave para el manejo del contexto.",
        },
        {
          title: "Integración simple CRM → Email (sin lógica compleja)",
          tool: "Make",
          why: "Cuando el cliente ya tiene Make configurado y el flujo es relativamente simple (nuevo deal en HubSpot → email personalizado → tag en GHL), Make es suficiente y más visual para el equipo del cliente.",
        },
        {
          title: "Automatización de reportes semanales",
          tool: "Make",
          why: "Consulta Supabase, calcula métricas, genera PDF y envía por email. Make maneja bien la transformación de datos tabulares y el cliente puede modificarlo sin ayuda técnica.",
        },
        {
          title: "Zapier: casi nunca para agentes de IA",
          tool: "Zapier",
          why: "Solo lo recomendamos cuando el cliente ya tiene una cuenta de Zapier con flujos existentes y el caso de uso es extremadamente simple (formulario web → CRM). Para cualquier cosa con LLMs, el precio por tarea hace que Zapier sea inviable en producción.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Puedo migrar de Zapier a n8n sin perder todo?",
          a: "Sí, aunque no es automático. Los conceptos son equivalentes (triggers, actions, filters) pero la sintaxis es diferente. Una migración de 10-15 flujos simples puede tomar 1-2 días de trabajo técnico. Si tienes flujos complejos, es mejor rehacerlos desde cero que intentar migrar directamente.",
        },
        {
          q: "¿n8n cloud o n8n self-hosted?",
          a: "Depende. Si tu empresa maneja datos sensibles de clientes (leads, información de contacto, datos de ventas), self-hosted es la respuesta correcta — los datos nunca salen de tu infraestructura. Si el equipo no tiene capacidad técnica para mantener un servidor, n8n Cloud a $20/mes es una opción válida y mucho más económica que Make o Zapier a volumen.",
        },
        {
          q: "¿Hay algún caso donde Zapier gane claramente?",
          a: "Sí: cuando el equipo es completamente no técnico, los flujos son simples (2-3 pasos), y el volumen es bajo (menos de 2,000 tareas/mes). En ese rango de precio, la simplicidad de Zapier puede justificarse. Pero en cuanto se introduce un LLM en el loop, el número de tareas se multiplica y el precio escala rápidamente.",
        },
        {
          q: "¿Qué pasa con las alternativas como Activepieces o Rivet?",
          a: "Activepieces es interesante como alternativa self-hosted más sencilla que n8n, pero la comunidad y los templates son mucho más limitados. Rivet es excelente para orquestación de agentes de IA complejos, pero no reemplaza a n8n para las integraciones con sistemas de negocio (CRM, email, Slack). Usamos Rivet para prototipado de flujos de LLMs y n8n para la capa de integración.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres ver n8n en acción con agentes de IA?",
      sub: "En el diagnóstico ARRI te mostramos qué automatizaciones tienen más ROI para tu caso específico — y qué plataforma tiene más sentido para tu equipo.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Ver los 6 agentes de IA",
      ctaSecondaryLink: "/6-agentes-ia",
    },
    author: { label: "Escrito por", name: "Jorge Herrera Cruz", role: "CEO & Co-Fundador, VeryMuch.ai", profileLink: "/autor/jorge-herrera-cruz" },
  },
  en: {
    meta: {
      title: "n8n vs Make vs Zapier for AI agents in 2026 — VeryMuch.ai",
      description:
        "Honest comparison of n8n, Make, and Zapier for building AI agents in B2B sales and marketing teams. Which to choose based on your use case, budget, and technical team.",
      ogTitle: "n8n vs Make vs Zapier for AI agents in 2026",
      ogDescription:
        "Which is the best automation platform for building AI agents in B2B sales? Full comparison with real-world use cases.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "n8n vs Make vs Zapier 2026" },
    hero: {
      badge: "✦ AI AUTOMATION",
      h1: "n8n vs Make vs Zapier for AI agents in 2026: the honest comparison",
      sub: "At VeryMuch.ai we use n8n as our primary platform. Here's why — and when Make or Zapier make more sense.",
      by: "By",
      date: "April 14, 2026",
      readTime: "8 min read",
    },
    intro: {
      p1: "When a company asks us which automation platform to use for AI agent implementation, the answer always starts with a question: how technical is your team, and how many executions do you estimate per month? The right choice can save thousands of euros per year in operational costs — the wrong one can lock you into workflows that don't scale.",
      p2: "We've implemented automations with all three platforms for real clients. This comparison is based on projects involving GoHighLevel, HubSpot, LinkedIn, Claude, and OpenAI integrations — not lab demos.",
    },
    verdict: {
      heading: "Quick verdict (if you don't have time to read everything)",
      body: "Use n8n if you have someone technical on the team, high execution volume, and want full control over data. Use Make if you want a balance between visual flexibility and moderate learning curve. Only use Zapier if your team has zero technical profiles and the workflows are simple — at scale, the per-task pricing becomes unsustainable.",
    },
    tools: {
      n8n: {
        name: "n8n",
        tagline: "The engineering option — open-source, self-hostable, unlimited executions",
        pros: [
          "Self-hosted: no per-execution cost, infrastructure only",
          "Native code — write JavaScript/Python in any node",
          "Perfect for complex flows with advanced conditional logic",
          "Direct LLM integration (Claude, GPT) via HTTP or native nodes",
          "Active community, free templates, frequent updates",
          "Full control over sensitive data (never leaves your infrastructure)",
        ],
        cons: [
          "Steeper learning curve — needs someone who understands APIs",
          "Requires a server for self-hosting (or n8n Cloud from $20/month)",
          "Less visual UI than Make for simple flows",
          "More technical debugging than no-code platforms",
        ],
        best_for: "Teams with a technical profile (developer, RevOps with technical background, or external agency). Ideal when execution volume is high (+10,000/month) or data is sensitive.",
      },
      make: {
        name: "Make (formerly Integromat)",
        tagline: "The balance — visual, flexible, with reasonable pricing for medium volume",
        pros: [
          "Visual diagram-style UI — easy to understand the full flow",
          "Per-operation pricing (not per execution) — more economical than Zapier",
          "Native handling of arrays, iterators, and complex routes",
          "Good integration library (2,000+)",
          "HTTP module to call any API without native integration",
          "Better for flows with complex data transformation",
        ],
        cons: [
          "Price scales with volume — can get expensive at high frequency",
          "Less flexible than n8n for advanced programming logic",
          "Free version is very limited for serious projects",
          "External platform dependency for data (vs. self-hosted n8n)",
        ],
        best_for: "Semi-technical teams who want visual control but with more advanced logic than Zapier. Good middle ground for 1,000–10,000 operations/month.",
      },
      zapier: {
        name: "Zapier",
        tagline: "The simplest — but pricing puts it at a disadvantage for AI use",
        pros: [
          "Lowest learning curve — any profile can use it",
          "7,000+ native integrations — largest library",
          "Ideal for simple 2-3 step automations",
          "Excellent support and very complete documentation",
          "Paths and Filters for basic logic without code",
        ],
        cons: [
          "Per-task pricing — AI agents that make many calls make costs explode",
          "Complex flows are hard to maintain visually",
          "Data volume limits per step",
          "Advanced logic (loops, arrays, transformations) is frustrating",
          "Free plan is very restrictive — not suitable for production",
        ],
        best_for: "Non-technical teams with simple flows (2-5 steps) and low volume. Not recommended for AI agents that process data in loops or frequent LLM calls.",
      },
    },
    comparison: {
      heading: "Comparison table",
      rows: [
        { feature: "Base price (monthly)", n8n: "Free (self-hosted) / $20 cloud", make: "$9–$16", zapier: "$19.99–$49", winner: "n8n" },
        { feature: "Cost at 10,000 executions/month", n8n: "~$20 (infrastructure)", make: "~$29", zapier: "~$73+", winner: "n8n" },
        { feature: "Learning curve", n8n: "High (technical)", make: "Medium", zapier: "Low", winner: "zapier" },
        { feature: "LLM integration (Claude, GPT)", n8n: "Native + HTTP", make: "HTTP + modules", zapier: "Limited HTTP", winner: "n8n" },
        { feature: "Complex logic (loops, arrays)", n8n: "Excellent (code)", make: "Good (visual)", zapier: "Basic", winner: "n8n" },
        { feature: "Data control / privacy", n8n: "Full (self-hosted)", make: "Partial", zapier: "Minimal", winner: "n8n" },
        { feature: "Native integrations count", n8n: "400+", make: "2,000+", zapier: "7,000+", winner: "zapier" },
        { feature: "Visual UI / experience", n8n: "Medium", make: "Very good", zapier: "Excellent", winner: "zapier" },
        { feature: "AI agent scalability", n8n: "High", make: "Medium", zapier: "Low", winner: "n8n" },
      ],
      legend: { n8n: "n8n wins", make: "Make wins", zapier: "Zapier wins", tie: "Tie" },
    },
    use_cases: {
      heading: "What we use at VeryMuch.ai by use case",
      items: [
        {
          title: "SDR Agent — automatic incoming lead qualification",
          tool: "n8n",
          why: "Processes GHL webhooks, calls Claude to qualify, updates the CRM, and sends the response message — all in seconds. Execution volume and conditional logic make n8n the only option with sustainable pricing.",
        },
        {
          title: "Content engine — LinkedIn post generation",
          tool: "n8n",
          why: "Receives intent signals (comments, likes from prospects), calls Claude with company context, generates the draft and sends it via Slack. Code-native integration is key for context handling.",
        },
        {
          title: "Simple CRM → Email integration (no complex logic)",
          tool: "Make",
          why: "When the client already has Make configured and the flow is relatively simple (new deal in HubSpot → personalized email → GHL tag), Make is sufficient and more visual for the client's team.",
        },
        {
          title: "Weekly report automation",
          tool: "Make",
          why: "Queries Supabase, calculates metrics, generates PDF and sends by email. Make handles tabular data transformation well and the client can modify it without technical help.",
        },
        {
          title: "Zapier: almost never for AI agents",
          tool: "Zapier",
          why: "We only recommend it when the client already has a Zapier account with existing flows and the use case is extremely simple (web form → CRM). For anything involving LLMs, per-task pricing makes Zapier unviable in production.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Can I migrate from Zapier to n8n without losing everything?",
          a: "Yes, though it's not automatic. The concepts are equivalent (triggers, actions, filters) but the syntax is different. A migration of 10-15 simple flows can take 1-2 days of technical work. For complex flows, it's better to rebuild from scratch than try to migrate directly.",
        },
        {
          q: "n8n cloud or n8n self-hosted?",
          a: "It depends. If your company handles sensitive client data (leads, contact information, sales data), self-hosted is the right answer — data never leaves your infrastructure. If the team lacks technical capacity to maintain a server, n8n Cloud at $20/month is a valid option and much more economical than Make or Zapier at volume.",
        },
        {
          q: "Is there any case where Zapier clearly wins?",
          a: "Yes: when the team is completely non-technical, flows are simple (2-3 steps), and volume is low (less than 2,000 tasks/month). In that price range, Zapier's simplicity can be justified. But as soon as you introduce an LLM into the loop, task count multiplies and pricing scales quickly.",
        },
        {
          q: "What about alternatives like Activepieces or Rivet?",
          a: "Activepieces is interesting as a simpler self-hosted alternative to n8n, but the community and templates are much more limited. Rivet is excellent for orchestrating complex AI agents, but doesn't replace n8n for business system integrations (CRM, email, Slack). We use Rivet for LLM flow prototyping and n8n for the integration layer.",
        },
      ],
    },
    cta: {
      heading: "Want to see n8n in action with AI agents?",
      sub: "The ARRI diagnostic shows you which automations have the most ROI for your specific case — and which platform makes the most sense for your team.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "See the 6 AI agents",
      ctaSecondaryLink: "/6-agentes-ia",
    },
    author: { label: "Written by", name: "Jorge Herrera Cruz", role: "CEO & Co-Founder, VeryMuch.ai", profileLink: "/autor/jorge-herrera-cruz" },
  },
};

const WINNER_COLORS = { n8n: "#5AD4AE", make: "#F5A05E", zapier: "#F5405E", tie: "#888" };
const WINNER_LABELS = { es: { n8n: "n8n", make: "Make", zapier: "Zapier", tie: "—" }, en: { n8n: "n8n", make: "Make", zapier: "Zapier", tie: "—" } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;
  const canonical = locale === "en"
    ? `${BASE_URL}/en/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`
    : `${BASE_URL}/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`,
        en: `${BASE_URL}/en/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`,
        "x-default": `${BASE_URL}/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "VeryMuch.ai",
      locale: c.meta.ogLocale,
      url: canonical,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: c.meta.ogTitle }],
      publishedTime: PUBLISHED,
      authors: ["https://verymuch.ai/autor/jorge-herrera-cruz"],
    },
    twitter: { card: "summary_large_image", title: c.meta.ogTitle, description: c.meta.ogDescription, images: [OG_IMAGE] },
    robots: { index: true, follow: true },
  };
}

export default async function N8nVsMakeVsZapierPage({ params }: Props) {
  notFound();
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;
  const lang = locale === "en" ? "en" : "es";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.meta.ogTitle,
    description: c.meta.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Person", "@id": `${BASE_URL}/autor/jorge-herrera-cruz`, name: "Jorge Herrera Cruz", url: `${BASE_URL}/autor/jorge-herrera-cruz` },
    publisher: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "Verymuch.ai", url: BASE_URL },
    url: `${BASE_URL}/blog/n8n-vs-make-vs-zapier-agentes-ia-2026`,
    image: OG_IMAGE,
    inLanguage: locale === "en" ? "en" : "es",
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
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.breadcrumb.home, item: locale === "en" ? `${BASE_URL}/en` : BASE_URL },
      { "@type": "ListItem", position: 2, name: c.breadcrumb.blog, item: locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: c.breadcrumb.page, item: locale === "en" ? `${BASE_URL}/en/blog/n8n-vs-make-vs-zapier-agentes-ia-2026` : `${BASE_URL}/blog/n8n-vs-make-vs-zapier-agentes-ia-2026` },
    ],
  };

  const sectionBg = "var(--bg-secondary)";
  const cardBg = "var(--bg-card)";
  const border = "1px solid var(--border-color)";
  const textPrimary = "var(--text-primary)";
  const textSecondary = "var(--text-secondary)";

  return (
    <div style={{ background: "var(--bg-primary)", color: textPrimary }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-36 pb-12 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(74,212,174,0.07) 0%, rgba(245,160,64,0.05) 45%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-60" style={{ color: textSecondary }}>
            <Link href="/">{c.breadcrumb.home}</Link><span>/</span>
            <Link href="/blog">{c.breadcrumb.blog}</Link><span>/</span>
            <span>{c.breadcrumb.page}</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #F5A05E 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5AD4AE" }}>{c.hero.badge}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.hero.h1}</h1>
          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: textSecondary }}>{c.hero.sub}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-60 pb-8 border-b" style={{ color: textSecondary, borderColor: "var(--border-color)" }}>
            <span>{c.hero.by}{" "}<Link href={c.author.profileLink} className="font-semibold hover:underline" style={{ color: textPrimary }}>{c.author.name}</Link></span>
            <span>·</span><span>{c.hero.date}</span><span>·</span><span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      <article className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <p className="text-base leading-relaxed mb-4" style={{ color: textSecondary }}>{c.intro.p1}</p>
          <p className="text-base leading-relaxed mb-10" style={{ color: textSecondary }}>{c.intro.p2}</p>

          {/* Quick verdict */}
          <div className="p-5 rounded-xl mb-10" style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.08) 0%, rgba(245,160,94,0.08) 100%)", border: "1px solid rgba(90,212,174,0.2)" }}>
            <h2 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.verdict.heading}</h2>
            <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{c.verdict.body}</p>
          </div>

          {/* Tool cards */}
          {(["n8n", "make", "zapier"] as const).map((key) => {
            const tool = c.tools[key];
            const color = WINNER_COLORS[key];
            return (
              <div key={key} className="mb-8 rounded-2xl overflow-hidden" style={{ border }}>
                <div className="px-6 py-4" style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`, borderBottom: border }}>
                  <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{tool.name}</h2>
                  <p className="text-sm mt-1 opacity-80" style={{ color: textSecondary }}>{tool.tagline}</p>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-6" style={{ background: cardBg }}>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color }}>{locale === "es" ? "Ventajas" : "Pros"}</h3>
                    <ul className="flex flex-col gap-2">
                      {tool.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: textSecondary }}>
                          <span style={{ color }} className="mt-0.5 flex-shrink-0">✓</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#F5405E" }}>{locale === "es" ? "Desventajas" : "Cons"}</h3>
                    <ul className="flex flex-col gap-2">
                      {tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: textSecondary }}>
                          <span className="mt-0.5 flex-shrink-0" style={{ color: "#F5405E" }}>✗</span>{con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-3" style={{ background: sectionBg, borderTop: border }}>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: textSecondary }}>{locale === "es" ? "Ideal para:" : "Best for:"}{" "}</span>
                  <span className="text-xs" style={{ color: textSecondary }}>{tool.best_for}</span>
                </div>
              </div>
            );
          })}

          {/* Comparison table */}
          <h2 className="text-2xl font-bold mb-6 mt-12" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.comparison.heading}</h2>
          <div className="overflow-x-auto mb-10 rounded-xl" style={{ border }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: sectionBg, borderBottom: border }}>
                  <th className="text-left px-4 py-3 font-semibold" style={{ color: textSecondary }}>{locale === "es" ? "Criterio" : "Criteria"}</th>
                  <th className="px-4 py-3 font-bold text-center" style={{ color: WINNER_COLORS.n8n }}>n8n</th>
                  <th className="px-4 py-3 font-bold text-center" style={{ color: WINNER_COLORS.make }}>Make</th>
                  <th className="px-4 py-3 font-bold text-center" style={{ color: WINNER_COLORS.zapier }}>Zapier</th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < c.comparison.rows.length - 1 ? border : "none", background: i % 2 === 0 ? cardBg : sectionBg }}>
                    <td className="px-4 py-3 font-medium" style={{ color: textPrimary }}>{row.feature}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: row.winner === "n8n" ? WINNER_COLORS.n8n : textSecondary, fontWeight: row.winner === "n8n" ? 700 : 400 }}>{row.n8n}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: row.winner === "make" ? WINNER_COLORS.make : textSecondary, fontWeight: row.winner === "make" ? 700 : 400 }}>{row.make}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: row.winner === "zapier" ? WINNER_COLORS.zapier : textSecondary, fontWeight: row.winner === "zapier" ? 700 : 400 }}>{row.zapier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Use cases */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.use_cases.heading}</h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.use_cases.items.map((item, i) => {
              const toolKey = item.tool.toLowerCase() as "n8n" | "make" | "zapier";
              const color = WINNER_COLORS[toolKey] ?? "#888";
              return (
                <div key={i} className="p-5 rounded-xl" style={{ border, background: cardBg }}>
                  <div className="flex items-start gap-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0" style={{ background: `${color}20`, color }}>{item.tool}</span>
                    <div>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: textPrimary, fontFamily: "var(--font-display)" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed opacity-80" style={{ color: textSecondary }}>{item.why}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.faq.heading}</h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.faq.items.map((item, i) => (
              <details key={i} className="group p-5 rounded-xl border cursor-pointer" style={{ border, background: cardBg }}>
                <summary className="font-semibold text-sm list-none" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: textSecondary }}>{item.a}</p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div className="p-5 rounded-xl flex items-start gap-4" style={{ border, background: cardBg }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm" style={{ background: "linear-gradient(135deg, #F5A05E 0%, #5AD4AE 100%)" }}>JH</div>
            <div>
              <p className="text-xs opacity-60 mb-0.5" style={{ color: textSecondary }}>{c.author.label}</p>
              <Link href={c.author.profileLink} className="font-semibold text-sm hover:underline" style={{ color: textPrimary, fontFamily: "var(--font-display)" }}>{c.author.name}</Link>
              <p className="text-xs opacity-60 mt-0.5" style={{ color: textSecondary }}>{c.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: sectionBg }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: textPrimary }}>{c.cta.heading}</h2>
          <p className="text-base mb-8 opacity-70" style={{ color: textSecondary }}>{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={GHL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #F5405E 0%, #F5A05E 100%)" }}>{c.cta.ctaPrimary}</a>
            <Link href={c.cta.ctaSecondaryLink} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all border hover:border-opacity-60" style={{ border, color: textPrimary, background: "transparent" }}>{c.cta.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
