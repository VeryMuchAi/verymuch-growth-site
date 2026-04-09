import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-04-28";
const SLUG = "automatizar-seguimiento-leads-ia";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface StepItem {
  number: string;
  title: string;
  description: string;
  tool: string;
}

interface StatCard {
  stat: string;
  label: string;
  source: string;
}

interface FaqItem { q: string; a: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  problem: { heading: string; body: string; stats: StatCard[] };
  what_is: { heading: string; body: string };
  steps: { heading: string; items: StepItem[] };
  results: { heading: string; body: string; items: { metric: string; description: string }[] };
  stack: { heading: string; items: { name: string; role: string; color: string }[] };
  mistakes: { heading: string; items: { title: string; description: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Cómo automatizar el seguimiento de leads con IA en 2026 — VeryMuch.ai",
      description:
        "Guía práctica para automatizar el seguimiento de leads con agentes de IA. Reduce el tiempo de respuesta de horas a minutos, califica más rápido y cierra más oportunidades con menos esfuerzo manual.",
      ogTitle: "Cómo automatizar el seguimiento de leads con IA en 2026",
      ogDescription:
        "En VeryMuch.ai implementamos agentes de IA que hacen seguimiento de leads en menos de 5 minutos, 24/7. Así funciona el sistema — con casos reales de clientes en México y España.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Automatizar seguimiento de leads con IA" },
    hero: {
      badge: "✦ Automatización de Ventas",
      h1: "Cómo automatizar el seguimiento de leads con IA: guía completa 2026",
      sub: "El 78% de los compradores B2B elige al proveedor que responde primero. Si tu equipo responde en horas en lugar de minutos, estás perdiendo oportunidades — aunque tengas el mejor producto.",
      by: "Por",
      date: "28 de abril, 2026",
      readTime: "10 min de lectura",
    },
    intro: {
      p1: "El seguimiento de leads es la actividad que más impacto tiene en el resultado de ventas — y la que más tiempo consume innecesariamente. Cada vez que un prospecto llena un formulario, solicita información o descarga un recurso, hay una ventana de oportunidad de menos de 5 minutos en la que la probabilidad de conversación es 21 veces mayor que si esperas 30 minutos.",
      p2: "En VeryMuch.ai hemos implementado sistemas de seguimiento automatizado con IA para empresas B2B en México, España y Colombia. En esta guía compartimos exactamente cómo funciona ese sistema: desde la captura del lead hasta la calificación, el primer contacto personalizado y la escalada al equipo de ventas.",
    },
    problem: {
      heading: "El problema real: la velocidad de respuesta decide quién gana",
      body: "Los equipos de ventas B2B responden leads en un promedio de 42 horas. Para cuando llaman, el prospecto ya habló con dos o tres competidores — y probablemente ya tiene un favorito. El agente de IA no elimina al vendedor humano: lo libera para hacer lo que mejor hace, que es cerrar.",
      stats: [
        { stat: "21x", label: "más conversiones si respondes en < 5 min vs 30 min", source: "InsideSales.com" },
        { stat: "42h", label: "tiempo promedio de respuesta de equipos B2B sin IA", source: "Harvard Business Review" },
        { stat: "78%", label: "compradores eligen al primer proveedor que responde de forma relevante", source: "Drift / Salesforce" },
      ],
    },
    what_is: {
      heading: "¿Qué es el seguimiento automatizado con IA?",
      body: "Un sistema de seguimiento automatizado con IA combina tres capas: (1) captura de datos del lead en el momento del contacto, (2) investigación y calificación automática del prospecto, y (3) contacto personalizado en tiempo real — sin intervención humana en las primeras fases. El agente actúa como un SDR (Sales Development Representative) digital que trabaja 24/7 sin costo adicional por hora.",
    },
    steps: {
      heading: "El sistema en 5 pasos: cómo lo implementamos en VeryMuch.ai",
      items: [
        {
          number: "01",
          title: "Captura y enriquecimiento del lead",
          description: "Cuando un lead llena un formulario (web, landing page o LinkedIn Lead Gen), el sistema captura nombre, email, empresa y mensaje. Inmediatamente se lanza un enriquecimiento automático: el agente consulta la web de la empresa, LinkedIn, Crunchbase o Perplexity para obtener sector, tamaño, cargo real del prospecto y señales de intención de compra.",
          tool: "n8n + Perplexity API",
        },
        {
          number: "02",
          title: "Calificación automática con IA",
          description: "Con los datos enriquecidos, un modelo de lenguaje (Claude o GPT-4o) evalúa el lead contra tus criterios de ICP (Ideal Customer Profile): sector, tamaño de empresa, cargo, urgencia aparente y fit con tu oferta. El resultado es un score (alto/medio/bajo) y un resumen de 3 líneas que el vendedor puede leer en 10 segundos.",
          tool: "Claude / GPT-4o",
        },
        {
          number: "03",
          title: "Primer contacto personalizado en < 5 minutos",
          description: "Si el score es medio o alto, el agente redacta y envía un email de primer contacto personalizado — usando datos reales de la empresa del prospecto, no una plantilla genérica. El email hace referencia al problema específico del lead, propone un valor concreto y sugiere los próximos pasos. Sin tocar la bandeja de entrada del vendedor.",
          tool: "GHL / HubSpot + AI Email Draft",
        },
        {
          number: "04",
          title: "Secuencia de nurturing multicanal",
          description: "Si el prospecto no responde en 48h, la secuencia continúa automáticamente: email de seguimiento con diferente ángulo, SMS de cortesía (si aplica), y reminder para el vendedor en el CRM. Cada mensaje está personalizado con datos actualizados del prospecto — no es una cadena de spam, es una cadena de valor.",
          tool: "GHL Workflows / HubSpot Sequences",
        },
        {
          number: "05",
          title: "Escalada al vendedor en el momento correcto",
          description: "Cuando el prospecto responde (abre, hace clic, o replica), el agente detecta la señal, actualiza el CRM, asigna la tarea al vendedor correcto con un brief completo del historial, y envía una notificación en tiempo real vía Slack o email. El vendedor llega a la conversación preparado — no a ciegas.",
          tool: "CRM + Slack + n8n",
        },
      ],
    },
    results: {
      heading: "Resultados reales en clientes de VeryMuch.ai",
      body: "Estos son resultados observados en implementaciones de Fase 1 para empresas B2B en México y España. Los números varían según el sector, volumen de leads y calidad del ICP definido.",
      items: [
        { metric: "< 5 min", description: "Tiempo de primer contacto tras captación del lead (vs 42h promedio sin IA)" },
        { metric: "21x", description: "Mejora en tasa de conversión lead → reunión cuando se responde en los primeros 5 minutos" },
        { metric: "60%", description: "Reducción en tiempo dedicado a calificación manual por parte del equipo de ventas" },
        { metric: "2–4 meses", description: "Tiempo promedio de recuperación de inversión (ROI positivo desde el mes 3)" },
      ],
    },
    stack: {
      heading: "El stack tecnológico que usamos",
      items: [
        { name: "n8n", role: "Orquestación de flujos y conexión entre sistemas", color: "#5AD4AE" },
        { name: "Claude (Anthropic)", role: "Calificación inteligente y redacción de emails personalizados", color: "#A78BFA" },
        { name: "GoHighLevel", role: "CRM, workflows de nurturing y envío multicanal", color: "#F5A05E" },
        { name: "Perplexity API", role: "Enriquecimiento de datos del prospecto en tiempo real", color: "#60A5FA" },
        { name: "HubSpot", role: "CRM alternativo para empresas con setup enterprise existente", color: "#FB923C" },
        { name: "Slack", role: "Notificaciones al vendedor cuando el lead entra en fase activa", color: "#4ADE80" },
      ],
    },
    mistakes: {
      heading: "Los 3 errores más comunes al automatizar el seguimiento de leads",
      items: [
        {
          title: "Automatizar sin personalizar: el spam con IA",
          description: "El error más frecuente es enviar mensajes genéricos con IA. Si el primer email de tu agente suena como una plantilla de newsletter, el prospecto lo ignora (o peor, te marca como spam). La personalización real requiere datos de enriquecimiento — empresa, cargo, sector, señales de intención — no solo el nombre del lead.",
        },
        {
          title: "No definir el ICP antes de automatizar",
          description: "Si el sistema no sabe qué es un lead bueno, calificará cualquier cosa. El resultado: tu vendedor recibe 50 notificaciones de leads de baja calidad y empieza a ignorar el sistema. Antes de automatizar, dedica una sesión a definir exactamente quién es tu cliente ideal: sector, tamaño, cargo, presupuesto mínimo.",
        },
        {
          title: "Automatizar el 100% sin punto de control humano",
          description: "Los mejores sistemas de seguimiento con IA no reemplazan al vendedor — lo potencian. El agente hace el trabajo de calificación y primer contacto; el vendedor cierra. Si automatizas todo el proceso sin punto de escala humano, pierdes la confianza del prospecto en el momento clave de la conversación.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito un CRM para automatizar el seguimiento de leads?",
          a: "Sí, es prácticamente indispensable. El CRM es la memoria del sistema — donde se almacenan el historial del prospecto, las acciones tomadas, y el estado actual. Sin CRM, el agente puede hacer un primer contacto, pero no puede mantener contexto longitudinal ni coordinar las acciones del equipo de ventas. Recomendamos empezar con GoHighLevel (desde $97/mes) o HubSpot Starter.",
        },
        {
          q: "¿Cuánto tiempo tarda en implementarse un sistema de seguimiento automatizado?",
          a: "Una implementación de Fase 1 (captura + calificación + primer contacto + nurturing básico) con VeryMuch.ai tarda entre 4 y 6 semanas desde el kick-off hasta el primer lead en producción. Las semanas 1–2 son de diagnóstico y diseño del ICP; las semanas 3–4, de construcción e integración; las semanas 5–6, de pruebas y ajuste fino.",
        },
        {
          q: "¿El sistema funciona en español y para el mercado hispanohablante?",
          a: "Sí. Los modelos de lenguaje que usamos (Claude y GPT-4o) tienen excelente manejo del español formal de negocios. Los emails personalizados suenan naturales en español — no como traducciones automáticas. Tenemos clientes activos en México, España y Colombia con flujos 100% en español.",
        },
        {
          q: "¿Cuál es el coste de implementación de un agente de seguimiento de leads?",
          a: "Una Fase 1 de implementación en VeryMuch.ai parte de €4,500 de instalación + €1,200/mes de operación (AaaS). Esto incluye diseño del flujo, integración con el CRM, configuración de los modelos de IA, pruebas con leads reales, y monitoreo mensual de rendimiento. La plataforma CRM se factura aparte.",
        },
        {
          q: "¿Puedo integrar el sistema con mi CRM actual (HubSpot, Salesforce, Pipedrive)?",
          a: "Sí. Los sistemas que implementamos se conectan vía API o webhooks con la mayoría de CRMs del mercado: GoHighLevel, HubSpot, Salesforce, Pipedrive, y otros. La integración con Salesforce requiere más tiempo de configuración, pero es completamente viable para empresas enterprise.",
        },
      ],
    },
    cta: {
      heading: "¿Cuántos leads estás perdiendo por responder tarde?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) evaluamos tu proceso actual de seguimiento de leads y te decimos exactamente qué automatizar primero para maximizar el impacto.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: GoHighLevel vs HubSpot para ventas con IA",
      ctaSecondaryLink: "/blog/gohighlevel-vs-hubspot-ventas-ia",
    },
    author: {
      label: "Escrito por",
      name: "Edwin Moreno",
      role: "COO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
      initials: "EM",
    },
  },
  en: {
    meta: {
      title: "How to Automate Lead Follow-Up with AI in 2026 — VeryMuch.ai",
      description:
        "Practical guide to automating lead follow-up with AI agents. Reduce response time from hours to minutes, qualify faster, and close more deals with less manual effort.",
      ogTitle: "How to Automate Lead Follow-Up with AI in 2026",
      ogDescription:
        "At VeryMuch.ai we implement AI agents that follow up on leads in under 5 minutes, 24/7. Here's how the system works — with real client cases from Mexico and Spain.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "Automate Lead Follow-Up with AI" },
    hero: {
      badge: "✦ Sales Automation",
      h1: "How to automate lead follow-up with AI: complete guide 2026",
      sub: "78% of B2B buyers choose the vendor that responds first. If your team responds in hours instead of minutes, you're losing opportunities — even if you have the best product.",
      by: "By",
      date: "April 28, 2026",
      readTime: "10 min read",
    },
    intro: {
      p1: "Lead follow-up is the activity with the highest impact on sales outcomes — and the one that unnecessarily consumes the most time. Every time a prospect fills out a form, requests information, or downloads a resource, there's a less-than-5-minute opportunity window in which the probability of conversion is 21 times higher than if you wait 30 minutes.",
      p2: "At VeryMuch.ai we've implemented AI-powered automated follow-up systems for B2B companies in Mexico, Spain, and Colombia. In this guide we share exactly how that system works: from lead capture to qualification, personalized first contact, and escalation to the sales team.",
    },
    problem: {
      heading: "The real problem: response speed decides who wins",
      body: "B2B sales teams respond to leads in an average of 42 hours. By the time they call, the prospect has already talked to two or three competitors — and probably already has a favorite. The AI agent doesn't eliminate the human salesperson: it frees them to do what they do best, which is closing.",
      stats: [
        { stat: "21x", label: "more conversions if you respond in < 5 min vs 30 min", source: "InsideSales.com" },
        { stat: "42h", label: "average response time for B2B teams without AI", source: "Harvard Business Review" },
        { stat: "78%", label: "buyers choose the first vendor to respond in a relevant way", source: "Drift / Salesforce" },
      ],
    },
    what_is: {
      heading: "What is AI-powered automated follow-up?",
      body: "An AI-powered automated follow-up system combines three layers: (1) lead data capture at the moment of contact, (2) automatic prospect research and qualification, and (3) personalized contact in real time — without human intervention in the early stages. The agent acts as a digital SDR (Sales Development Representative) that works 24/7 at no additional hourly cost.",
    },
    steps: {
      heading: "The system in 5 steps: how we implement it at VeryMuch.ai",
      items: [
        {
          number: "01",
          title: "Lead capture and enrichment",
          description: "When a lead fills out a form (web, landing page, or LinkedIn Lead Gen), the system captures name, email, company, and message. Automatic enrichment launches immediately: the agent queries the company website, LinkedIn, Crunchbase, or Perplexity to get sector, size, the prospect's actual job title, and purchase intent signals.",
          tool: "n8n + Perplexity API",
        },
        {
          number: "02",
          title: "AI-powered automatic qualification",
          description: "With enriched data, a language model (Claude or GPT-4o) evaluates the lead against your ICP (Ideal Customer Profile) criteria: sector, company size, job title, apparent urgency, and fit with your offering. The result is a score (high/medium/low) and a 3-line summary the salesperson can read in 10 seconds.",
          tool: "Claude / GPT-4o",
        },
        {
          number: "03",
          title: "Personalized first contact in < 5 minutes",
          description: "If the score is medium or high, the agent drafts and sends a personalized first contact email — using real data from the prospect's company, not a generic template. The email references the lead's specific problem, proposes concrete value, and suggests next steps. All without touching the salesperson's inbox.",
          tool: "GHL / HubSpot + AI Email Draft",
        },
        {
          number: "04",
          title: "Multichannel nurturing sequence",
          description: "If the prospect doesn't respond within 48 hours, the sequence continues automatically: follow-up email with a different angle, courtesy SMS (if applicable), and a CRM reminder for the salesperson. Each message is personalized with updated prospect data — not a spam chain, but a value chain.",
          tool: "GHL Workflows / HubSpot Sequences",
        },
        {
          number: "05",
          title: "Sales escalation at the right moment",
          description: "When the prospect responds (opens, clicks, or replies), the agent detects the signal, updates the CRM, assigns the task to the right salesperson with a full history brief, and sends a real-time notification via Slack or email. The salesperson enters the conversation prepared — not blind.",
          tool: "CRM + Slack + n8n",
        },
      ],
    },
    results: {
      heading: "Real results from VeryMuch.ai clients",
      body: "These are results observed in Phase 1 implementations for B2B companies in Mexico and Spain. Numbers vary by sector, lead volume, and quality of the defined ICP.",
      items: [
        { metric: "< 5 min", description: "First contact time after lead capture (vs 42h average without AI)" },
        { metric: "21x", description: "Improvement in lead → meeting conversion rate when responding in the first 5 minutes" },
        { metric: "60%", description: "Reduction in time spent on manual qualification by the sales team" },
        { metric: "2–4 months", description: "Average payback period (positive ROI from month 3)" },
      ],
    },
    stack: {
      heading: "The technology stack we use",
      items: [
        { name: "n8n", role: "Flow orchestration and system connectivity", color: "#5AD4AE" },
        { name: "Claude (Anthropic)", role: "Intelligent qualification and personalized email drafting", color: "#A78BFA" },
        { name: "GoHighLevel", role: "CRM, nurturing workflows, and multichannel sending", color: "#F5A05E" },
        { name: "Perplexity API", role: "Real-time prospect data enrichment", color: "#60A5FA" },
        { name: "HubSpot", role: "Alternative CRM for companies with existing enterprise setup", color: "#FB923C" },
        { name: "Slack", role: "Sales notifications when lead enters active phase", color: "#4ADE80" },
      ],
    },
    mistakes: {
      heading: "The 3 most common mistakes when automating lead follow-up",
      items: [
        {
          title: "Automating without personalizing: AI spam",
          description: "The most frequent mistake is sending generic messages with AI. If your agent's first email sounds like a newsletter template, the prospect ignores it (or worse, marks you as spam). Real personalization requires enrichment data — company, job title, sector, intent signals — not just the lead's name.",
        },
        {
          title: "Not defining the ICP before automating",
          description: "If the system doesn't know what a good lead looks like, it will qualify everything. Result: your salesperson receives 50 low-quality lead notifications and starts ignoring the system. Before automating, spend one session defining exactly who your ideal customer is: sector, size, job title, minimum budget.",
        },
        {
          title: "Automating 100% without a human control point",
          description: "The best AI follow-up systems don't replace the salesperson — they amplify them. The agent handles qualification and first contact; the salesperson closes. If you automate the entire process without a human escalation point, you lose prospect trust at the critical moment of conversation.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need a CRM to automate lead follow-up?",
          a: "Yes, it's practically indispensable. The CRM is the system's memory — where prospect history, actions taken, and current status are stored. Without a CRM, the agent can make an initial contact but can't maintain longitudinal context or coordinate the sales team's actions. We recommend starting with GoHighLevel (from $97/month) or HubSpot Starter.",
        },
        {
          q: "How long does it take to implement an automated follow-up system?",
          a: "A Phase 1 implementation (capture + qualification + first contact + basic nurturing) with VeryMuch.ai takes 4–6 weeks from kickoff to first live lead. Weeks 1–2 are diagnosis and ICP design; weeks 3–4, building and integration; weeks 5–6, testing and fine-tuning.",
        },
        {
          q: "Does the system work in Spanish and for the Spanish-speaking market?",
          a: "Yes. The language models we use (Claude and GPT-4o) handle formal business Spanish excellently. Personalized emails sound natural in Spanish — not like automatic translations. We have active clients in Mexico, Spain, and Colombia with 100% Spanish-language flows.",
        },
        {
          q: "What is the cost to implement a lead follow-up agent?",
          a: "A Phase 1 implementation at VeryMuch.ai starts at €4,500 installation + €1,200/month operation (AaaS). This includes flow design, CRM integration, AI model configuration, testing with real leads, and monthly performance monitoring. The CRM platform is billed separately.",
        },
        {
          q: "Can I integrate the system with my current CRM (HubSpot, Salesforce, Pipedrive)?",
          a: "Yes. The systems we implement connect via API or webhooks with most CRMs on the market: GoHighLevel, HubSpot, Salesforce, Pipedrive, and others. Salesforce integration requires more configuration time, but is completely viable for enterprise companies.",
        },
      ],
    },
    cta: {
      heading: "How many leads are you losing by responding too late?",
      sub: "In the ARRI diagnostic (30 min, free) we evaluate your current lead follow-up process and tell you exactly what to automate first to maximize impact.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: GoHighLevel vs HubSpot for AI sales teams",
      ctaSecondaryLink: "/blog/gohighlevel-vs-hubspot-ventas-ia",
    },
    author: {
      label: "Written by",
      name: "Edwin Moreno",
      role: "COO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/edwin-moreno",
      initials: "EM",
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/${SLUG}`
      : `${BASE_URL}/blog/${SLUG}`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/${SLUG}`,
        en: `${BASE_URL}/en/blog/${SLUG}`,
        "x-default": `${BASE_URL}/blog/${SLUG}`,
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
      authors: ["https://verymuch.ai/autor/edwin-moreno"],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function AutomatizarSeguimientoLeadsPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale as "es" | "en"] ?? CONTENT.es;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.meta.ogTitle,
    description: c.meta.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/autor/edwin-moreno`,
      name: "Edwin Moreno",
      url: `${BASE_URL}/autor/edwin-moreno`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Verymuch.ai",
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/${SLUG}`,
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
      { "@type": "ListItem", position: 3, name: c.breadcrumb.page, item: locale === "en" ? `${BASE_URL}/en/blog/${SLUG}` : `${BASE_URL}/blog/${SLUG}` },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: locale === "en" ? "How to automate lead follow-up with AI" : "Cómo automatizar el seguimiento de leads con IA",
    description: c.meta.description,
    step: c.steps.items.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <HomeNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-12 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 35% -15%, rgba(74,212,174,0.07) 0%, rgba(167,139,250,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>
            <Link href="/">{c.breadcrumb.home}</Link>
            <span>/</span>
            <Link href="/blog">{c.breadcrumb.blog}</Link>
            <span>/</span>
            <span>{c.breadcrumb.page}</span>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #5AD4AE 0%, #A78BFA 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5AD4AE" }}>
              {c.hero.badge}
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.hero.h1}
          </h1>

          <p className="text-lg leading-relaxed mb-8 opacity-80" style={{ color: "var(--text-secondary)" }}>
            {c.hero.sub}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-60 pb-8 border-b" style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}>
            <span>
              {c.hero.by}{" "}
              <Link href={c.author.profileLink} className="font-semibold hover:underline" style={{ color: "var(--text-primary)" }}>
                {c.author.name}
              </Link>
            </span>
            <span>·</span>
            <span>{c.hero.date}</span>
            <span>·</span>
            <span>{c.hero.readTime}</span>
          </div>
        </div>
      </header>

      {/* ── Article body ─────────────────────────────────────────────────── */}
      <article className="px-6 py-12">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{c.intro.p1}</p>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.intro.p2}</p>

          {/* Problem + Stats */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.06) 0%, rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(90,212,174,0.15)" }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {c.problem.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.problem.body}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {c.problem.stats.map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{s.stat}</div>
                  <div className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
                  <div className="text-xs opacity-50 italic" style={{ color: "var(--text-secondary)" }}>— {s.source}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What is it */}
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.what_is.heading}
          </h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.what_is.body}</p>

          {/* Steps */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.steps.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.steps.items.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-2xl font-extrabold flex-shrink-0 w-10 leading-none mt-0.5"
                    style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(90,212,174,0.1)", color: "#5AD4AE" }}
                    >
                      {step.tool}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.results.heading}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.results.body}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {c.results.items.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-xl text-center"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <div className="text-2xl font-extrabold mb-2" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{r.metric}</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.description}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.stack.heading}
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {c.stack.items.map((tool, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: tool.color }}
                />
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: tool.color }}>{tool.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tool.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mistakes */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.mistakes.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.mistakes.items.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{ border: "1px solid rgba(245,160,94,0.3)", background: "rgba(245,160,94,0.04)" }}
              >
                <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#F5A05E" }}>⚠</span>
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.faq.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.faq.items.map((item, i) => (
              <details
                key={i}
                className="group p-5 rounded-xl border cursor-pointer"
                style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
              >
                <summary
                  className="font-semibold text-sm list-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: "var(--text-secondary)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div
            className="p-5 rounded-xl flex items-start gap-4 mb-2"
            style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm"
              style={{ background: "linear-gradient(135deg, #5AD4AE 0%, #A78BFA 100%)" }}
            >
              {c.author.initials}
            </div>
            <div>
              <p className="text-xs opacity-60 mb-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.label}</p>
              <Link
                href={c.author.profileLink}
                className="font-semibold text-sm hover:underline"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {c.author.name}
              </Link>
              <p className="text-xs opacity-60 mt-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.cta.heading}
          </h2>
          <p className="text-base mb-8 opacity-70" style={{ color: "var(--text-secondary)" }}>
            {c.cta.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #F5405E 0%, #F5A05E 100%)" }}
            >
              {c.cta.ctaPrimary}
            </a>
            <Link
              href={c.cta.ctaSecondaryLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all border hover:border-opacity-60"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                background: "transparent",
              }}
            >
              {c.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
