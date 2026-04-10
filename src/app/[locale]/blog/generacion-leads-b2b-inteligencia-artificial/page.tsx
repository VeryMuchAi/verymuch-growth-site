import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-05-12";
const SLUG = "generacion-leads-b2b-inteligencia-artificial";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface StatCard {
  stat: string;
  label: string;
  source: string;
}

interface FaqItem { q: string; a: string }

interface ChannelItem {
  name: string;
  description: string;
  fit: string;
  color: string;
}

interface StepItem {
  number: string;
  title: string;
  description: string;
  tool: string;
}

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  problem: { heading: string; body: string; stats: StatCard[] };
  what_is: { heading: string; body: string };
  channels: { heading: string; intro: string; items: ChannelItem[] };
  steps: { heading: string; items: StepItem[] };
  results: { heading: string; body: string; items: { metric: string; description: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Generación de leads B2B con inteligencia artificial en 2026 — VeryMuch.ai",
      description:
        "Guía completa sobre generación de leads B2B con IA: canales, automatización, calificación y casos reales. Aprende cómo empresas en México, España y Colombia generan más leads con menos esfuerzo manual.",
      ogTitle: "Generación de leads B2B con inteligencia artificial en 2026",
      ogDescription:
        "En VeryMuch.ai implementamos sistemas de generación de leads B2B con IA que combinan outbound, inbound y señales de intención. Así funciona el sistema — con resultados reales.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Generación de leads B2B con IA" },
    hero: {
      badge: "✦ Generación de Demanda B2B",
      h1: "Generación de leads B2B con inteligencia artificial: guía completa 2026",
      sub: "El volumen de leads ya no es el problema — la calidad sí. Los equipos B2B que integran IA en su proceso de generación de demanda no solo consiguen más leads: consiguen mejores leads, más rápido, con menos coste por oportunidad.",
      by: "Por",
      date: "12 de mayo, 2026",
      readTime: "11 min de lectura",
    },
    intro: {
      p1: "La generación de leads B2B cambió más en los últimos 3 años que en la década anterior. El outbound frío masivo tiene tasas de respuesta que caen cada trimestre. El inbound tradicional tarda meses en dar resultados. Y el equipo comercial presiona para tener un pipeline más predecible. En ese contexto, la inteligencia artificial no es una promesa futura — es la respuesta práctica al problema actual.",
      p2: "En VeryMuch.ai hemos implementado sistemas de generación de leads B2B con IA para empresas de servicios, SaaS y consultoría en México, España y Colombia. En esta guía compartimos los canales que funcionan, el stack tecnológico que usamos, y los resultados reales que obtenemos — sin inventar casos de éxito ni inflar métricas.",
    },
    problem: {
      heading: "El problema real de la generación de leads B2B en 2026",
      body: "Los métodos tradicionales de generación de leads están bajo presión: el spam frío en LinkedIn tiene tasas de aceptación por debajo del 10%, el SEO tarda entre 6 y 18 meses en generar tráfico significativo, y los eventos presenciales tienen un coste por lead prohibitivo. La IA no reemplaza estos canales — los hace más eficientes y los conecta en un sistema coherente.",
      stats: [
        { stat: "61%", label: "de marketers B2B dicen que generar leads de calidad es su mayor reto", source: "HubSpot State of Marketing" },
        { stat: "10%", label: "tasa de aceptación promedio en outbound frío de LinkedIn sin personalización", source: "Outreach.io Research" },
        { stat: "3.5x", label: "más pipeline generan los equipos que usan IA en prospección vs los que no", source: "Gartner 2025" },
      ],
    },
    what_is: {
      heading: "¿Qué es la generación de leads B2B con IA?",
      body: "La generación de leads B2B con IA combina tres capacidades que antes requerían equipos grandes: (1) identificación de prospectos que encajan con tu ICP a partir de señales de intención, datos firmográficos y comportamiento digital; (2) personalización masiva de mensajes outbound y contenido inbound sin trabajo manual por lead; y (3) calificación automática de leads entrantes para que el equipo comercial solo trabaje con oportunidades reales. El resultado es un sistema que genera pipeline de forma continua, sin depender del volumen de trabajo manual del equipo.",
    },
    channels: {
      heading: "Los 4 canales de generación de leads B2B con IA que funcionan en 2026",
      intro: "No todos los canales sirven para todos los modelos de negocio. Aquí están los 4 que usamos con clientes B2B de servicios de alto ticket en el mercado hispanohablante:",
      items: [
        {
          name: "Outbound personalizado con IA",
          description: "El agente de IA investiga cada prospecto (LinkedIn, web de la empresa, noticias recientes, tecnologías que usa) y redacta un mensaje de primer contacto con referencias específicas al contexto del destinatario. El volumen es medio (20–50 prospectos/semana) pero la relevancia es alta. Tasas de respuesta típicas: 15–30% vs < 5% del outbound genérico.",
          fit: "Mejor para: tickets > €5K, ciclos de venta > 30 días",
          color: "#5AD4AE",
        },
        {
          name: "SEO + contenido con IA",
          description: "Artículos de blog con keywords de alta intención comercial (como este), guías comparativas, y casos de uso específicos para el ICP objetivo. La IA ayuda con investigación de keywords, estructura de contenido y optimización semántica. El canal tarda 3–6 meses en madurar pero genera tráfico compuesto que crece sin coste adicional.",
          fit: "Mejor para: generación de demanda a largo plazo, empresas con 6+ meses de horizonte",
          color: "#A78BFA",
        },
        {
          name: "LinkedIn con automatización asistida",
          description: "Secuencias de conexión + seguimiento en LinkedIn con mensajes personalizados por segmento de ICP, usando IA para adaptar el ángulo según el perfil del destinatario. La diferencia con el outbound genérico: cada mensaje tiene una referencia específica al trabajo reciente del prospecto o a un trigger de su empresa (nuevo cargo, ronda de inversión, expansión).",
          fit: "Mejor para: B2B servicios, consultoría, SaaS con decisores en LinkedIn",
          color: "#60A5FA",
        },
        {
          name: "Lead magnets con nurturing automatizado",
          description: "Recursos de alto valor (guías, calculadoras, diagnósticos) que capturan datos de contacto a cambio de valor concreto. La IA personaliza la secuencia de nurturing post-descarga según el comportamiento del lead: qué páginas visitó, qué recursos descargó, cuánto tiempo pasó en la página de precios. El resultado es una secuencia que se adapta al nivel de intención real del prospecto.",
          fit: "Mejor para: inbound con volumen medio-alto, productos con ciclo de educación",
          color: "#F5A05E",
        },
      ],
    },
    steps: {
      heading: "El sistema en 5 pasos: cómo implementamos generación de leads B2B con IA",
      items: [
        {
          number: "01",
          title: "Definición del ICP con datos, no con intuición",
          description: "Antes de lanzar cualquier canal, la IA analiza el historial de clientes existentes para identificar patrones: sector, tamaño, cargo del decisor, tecnologías que usa la empresa, señales de crecimiento. El resultado es un ICP definido con datos reales — no con suposiciones del equipo comercial. Esto solo ya mejora la calidad del pipeline en 2–3x.",
          tool: "Claude + análisis de CRM existente",
        },
        {
          number: "02",
          title: "Construcción de listas de prospectos con intención",
          description: "La IA combina fuentes de datos para construir listas de prospectos que no solo encajan con el ICP sino que muestran señales de intención activa: están contratando SDRs (señal de crecimiento comercial), acaban de recibir financiación, han publicado contenido sobre los problemas que resuelves, o usan tecnologías complementarias a las tuyas.",
          tool: "Apollo / Clay + Perplexity API",
        },
        {
          number: "03",
          title: "Personalización masiva del primer contacto",
          description: "Para cada prospecto de la lista, el agente genera un primer mensaje personalizado que referencia algo específico de su empresa o perfil. No es un mail merge con el nombre — es un mensaje que demuestra que lo investigaste. El proceso que tomaría 15 minutos por prospecto se completa en segundos, permitiendo volúmenes de 200–500 contactos/semana sin comprometer la calidad.",
          tool: "n8n + Claude + email/LinkedIn",
        },
        {
          number: "04",
          title: "Calificación automática de leads entrantes",
          description: "Los leads que responden al outbound o llegan por inbound son calificados automáticamente: el agente enriquece el perfil, evalúa el fit con el ICP, genera un score y un resumen de contexto para el SDR. El equipo comercial solo habla con leads que ya pasaron un filtro de calidad mínimo — no pierden tiempo con prospectos que nunca iban a comprar.",
          tool: "n8n + Claude + CRM (GHL/HubSpot)",
        },
        {
          number: "05",
          title: "Nurturing adaptativo hasta la reunión",
          description: "Si el lead no está listo para una reunión inmediata, entra en una secuencia de nurturing que se adapta a su comportamiento: si abre pero no responde, el siguiente mensaje cambia de ángulo; si visita la página de precios, recibe una propuesta de diagnóstico; si descarga el lead magnet, recibe contenido relacionado con el problema que ese recurso resuelve. El SDR interviene solo cuando el lead está en fase activa.",
          tool: "GHL Workflows / HubSpot + IA",
        },
      ],
    },
    results: {
      heading: "Resultados reales en clientes de VeryMuch.ai",
      body: "Estos son resultados observados en implementaciones de generación de leads B2B con IA para empresas de servicios en México y España. Los números varían según el sector, el ICP y el canal.",
      items: [
        { metric: "3–5x", description: "Más reuniones calificadas por mes vs proceso manual previo" },
        { metric: "60%", description: "Reducción en tiempo de prospección manual del equipo comercial" },
        { metric: "< 30 días", description: "Tiempo hasta primeras oportunidades calificadas en pipeline" },
        { metric: "Mes 3", description: "ROI positivo típico en implementaciones Fase 1" },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuántos leads puedo esperar generar con IA en el primer mes?",
          a: "Depende del canal y el ICP. En outbound personalizado con IA, clientes con ICP bien definido ven típicamente 5–15 reuniones calificadas en el primer mes de operación. En inbound/SEO, el primer mes es de construcción — los resultados llegan a partir del mes 3–6. El diagnóstico ARRI que hacemos antes de implementar incluye una proyección realista según tu mercado específico.",
        },
        {
          q: "¿La generación de leads con IA reemplaza a mi equipo de ventas?",
          a: "No — lo potencia. El sistema de IA se encarga de la prospección, el primer contacto, la calificación y el nurturing inicial. El equipo de ventas interviene cuando el lead está en fase activa y ha superado un umbral mínimo de calidad. El resultado no es menos trabajo para el equipo — es trabajo más enfocado en lo que realmente cierra: las conversaciones con prospectos cualificados.",
        },
        {
          q: "¿Funciona la generación de leads con IA para empresas de servicios de alto ticket?",
          a: "Especialmente bien. Los sistemas que implementamos en VeryMuch.ai están optimizados para empresas B2B con tickets de €3,000–€50,000 y ciclos de venta de 30–90 días. En ese rango, la personalización que ofrece la IA tiene el mayor impacto — porque el comprador espera ser tratado como individuo, no como un número en una lista de spam.",
        },
        {
          q: "¿Qué datos necesito para empezar con generación de leads con IA?",
          a: "El mínimo útil es: una lista de 5–10 clientes actuales o pasados que consideres buenos (para definir el ICP con datos), acceso a tu CRM o historial de conversaciones de ventas, y una descripción clara del problema que resuelves y para quién. Con eso podemos diseñar el sistema completo. No necesitas bases de datos compradas ni infraestructura técnica previa.",
        },
        {
          q: "¿Cuánto tarda en implementarse un sistema de generación de leads B2B con IA?",
          a: "Una implementación de Fase 1 con VeryMuch.ai tarda entre 4 y 6 semanas desde el kick-off hasta los primeros leads en pipeline. Las semanas 1–2 son de diagnóstico y diseño del ICP; las semanas 3–4, de construcción e integración del stack; las semanas 5–6, de pruebas con prospectos reales y ajuste fino de los mensajes.",
        },
      ],
    },
    cta: {
      heading: "¿Listo para tener un sistema de generación de leads que trabaja mientras duermes?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) evaluamos tu situación actual de generación de demanda y te decimos exactamente qué implementar primero para tener más reuniones calificadas este trimestre.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: Cómo automatizar el seguimiento de leads con IA",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
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
      title: "B2B Lead Generation with Artificial Intelligence in 2026 — VeryMuch.ai",
      description:
        "Complete guide to B2B lead generation with AI: channels, automation, qualification, and real cases. Learn how companies in Mexico, Spain, and Colombia generate more leads with less manual effort.",
      ogTitle: "B2B Lead Generation with Artificial Intelligence in 2026",
      ogDescription:
        "At VeryMuch.ai we implement B2B lead generation systems with AI that combine outbound, inbound, and intent signals. Here's how the system works — with real results.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "B2B Lead Generation with AI" },
    hero: {
      badge: "✦ B2B Demand Generation",
      h1: "B2B lead generation with artificial intelligence: complete guide 2026",
      sub: "Lead volume isn't the problem anymore — quality is. B2B teams that integrate AI into their demand generation process don't just get more leads: they get better leads, faster, at a lower cost per opportunity.",
      by: "By",
      date: "May 12, 2026",
      readTime: "11 min read",
    },
    intro: {
      p1: "B2B lead generation changed more in the last 3 years than in the previous decade. Mass cold outbound has response rates falling every quarter. Traditional inbound takes months to show results. And the sales team is pressing for a more predictable pipeline. In that context, artificial intelligence isn't a future promise — it's the practical answer to a current problem.",
      p2: "At VeryMuch.ai we've implemented B2B lead generation systems with AI for service, SaaS, and consulting companies in Mexico, Spain, and Colombia. In this guide we share the channels that work, the tech stack we use, and the real results we achieve — without fabricating case studies or inflating metrics.",
    },
    problem: {
      heading: "The real problem of B2B lead generation in 2026",
      body: "Traditional lead generation methods are under pressure: cold spam on LinkedIn has acceptance rates below 10%, SEO takes 6–18 months to generate significant traffic, and in-person events have a prohibitive cost per lead. AI doesn't replace these channels — it makes them more efficient and connects them into a coherent system.",
      stats: [
        { stat: "61%", label: "of B2B marketers say generating quality leads is their biggest challenge", source: "HubSpot State of Marketing" },
        { stat: "10%", label: "average acceptance rate for cold LinkedIn outbound without personalization", source: "Outreach.io Research" },
        { stat: "3.5x", label: "more pipeline generated by teams using AI in prospecting vs those who don't", source: "Gartner 2025" },
      ],
    },
    what_is: {
      heading: "What is B2B lead generation with AI?",
      body: "B2B lead generation with AI combines three capabilities that previously required large teams: (1) identifying prospects that fit your ICP based on intent signals, firmographic data, and digital behavior; (2) mass personalization of outbound messages and inbound content without manual work per lead; and (3) automatic qualification of incoming leads so the sales team only works with real opportunities. The result is a system that continuously generates pipeline, without depending on the team's manual workload.",
    },
    channels: {
      heading: "The 4 B2B lead generation channels with AI that work in 2026",
      intro: "Not all channels work for all business models. Here are the 4 we use with high-ticket B2B service clients in the Spanish-speaking market:",
      items: [
        {
          name: "AI-personalized outbound",
          description: "The AI agent researches each prospect (LinkedIn, company website, recent news, technologies used) and drafts a first-contact message with specific references to the recipient's context. Volume is medium (20–50 prospects/week) but relevance is high. Typical response rates: 15–30% vs < 5% for generic outbound.",
          fit: "Best for: tickets > €5K, sales cycles > 30 days",
          color: "#5AD4AE",
        },
        {
          name: "SEO + AI content",
          description: "Blog articles with high commercial-intent keywords (like this one), comparison guides, and use-case content for the target ICP. AI assists with keyword research, content structure, and semantic optimization. The channel takes 3–6 months to mature but generates compounding traffic that grows without additional cost.",
          fit: "Best for: long-term demand generation, companies with 6+ month horizon",
          color: "#A78BFA",
        },
        {
          name: "LinkedIn with assisted automation",
          description: "Connection + follow-up sequences on LinkedIn with messages personalized by ICP segment, using AI to adapt the angle to the recipient's profile. The difference from generic outbound: each message has a specific reference to the prospect's recent work or a company trigger (new role, funding round, expansion).",
          fit: "Best for: B2B services, consulting, SaaS with decision-makers on LinkedIn",
          color: "#60A5FA",
        },
        {
          name: "Lead magnets with automated nurturing",
          description: "High-value resources (guides, calculators, diagnostics) that capture contact data in exchange for concrete value. AI personalizes the post-download nurturing sequence based on lead behavior: what pages they visited, what resources they downloaded, how long they spent on the pricing page. The result is a sequence that adapts to the prospect's actual intent level.",
          fit: "Best for: inbound with medium-high volume, products with education cycles",
          color: "#F5A05E",
        },
      ],
    },
    steps: {
      heading: "The system in 5 steps: how we implement B2B lead generation with AI",
      items: [
        {
          number: "01",
          title: "ICP definition with data, not intuition",
          description: "Before launching any channel, AI analyzes existing client history to identify patterns: sector, size, decision-maker role, company technologies, growth signals. The result is an ICP defined with real data — not sales team assumptions. This alone improves pipeline quality by 2–3x.",
          tool: "Claude + existing CRM analysis",
        },
        {
          number: "02",
          title: "Building prospect lists with intent signals",
          description: "AI combines data sources to build prospect lists that not only fit the ICP but show active intent signals: they're hiring SDRs (commercial growth signal), just received funding, have published content about the problems you solve, or use technologies complementary to yours.",
          tool: "Apollo / Clay + Perplexity API",
        },
        {
          number: "03",
          title: "Mass personalization of first contact",
          description: "For each prospect on the list, the agent generates a personalized first message that references something specific about their company or profile. Not a mail merge with a name — a message that shows you researched them. The process that would take 15 minutes per prospect is completed in seconds, enabling volumes of 200–500 contacts/week without compromising quality.",
          tool: "n8n + Claude + email/LinkedIn",
        },
        {
          number: "04",
          title: "Automatic qualification of incoming leads",
          description: "Leads who respond to outbound or arrive via inbound are automatically qualified: the agent enriches the profile, evaluates ICP fit, generates a score and context summary for the SDR. The sales team only talks to leads that have passed a minimum quality filter — they don't waste time with prospects who were never going to buy.",
          tool: "n8n + Claude + CRM (GHL/HubSpot)",
        },
        {
          number: "05",
          title: "Adaptive nurturing until the meeting",
          description: "If the lead isn't ready for an immediate meeting, they enter a nurturing sequence that adapts to their behavior: if they open but don't reply, the next message changes angle; if they visit the pricing page, they receive a diagnostic proposal; if they download the lead magnet, they receive content related to the problem that resource solves. The SDR intervenes only when the lead is in active phase.",
          tool: "GHL Workflows / HubSpot + AI",
        },
      ],
    },
    results: {
      heading: "Real results for VeryMuch.ai clients",
      body: "These are results observed in B2B lead generation with AI implementations for service companies in Mexico and Spain. Numbers vary by sector, ICP, and channel.",
      items: [
        { metric: "3–5x", description: "More qualified meetings per month vs previous manual process" },
        { metric: "60%", description: "Reduction in manual prospecting time for the sales team" },
        { metric: "< 30 days", description: "Time to first qualified opportunities in pipeline" },
        { metric: "Month 3", description: "Typical positive ROI in Phase 1 implementations" },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "How many leads can I expect to generate with AI in the first month?",
          a: "It depends on the channel and ICP. In AI-personalized outbound, clients with a well-defined ICP typically see 5–15 qualified meetings in the first month of operation. In inbound/SEO, the first month is a building phase — results come from month 3–6. The ARRI diagnostic we do before implementation includes a realistic projection based on your specific market.",
        },
        {
          q: "Does AI lead generation replace my sales team?",
          a: "No — it amplifies them. The AI system handles prospecting, first contact, qualification, and initial nurturing. The sales team intervenes when the lead is in active phase and has passed a minimum quality threshold. The result isn't less work for the team — it's more focused work on what actually closes: conversations with qualified prospects.",
        },
        {
          q: "Does AI lead generation work for high-ticket service companies?",
          a: "Especially well. The systems we implement at VeryMuch.ai are optimized for B2B companies with tickets of €3,000–€50,000 and sales cycles of 30–90 days. In that range, the personalization AI offers has the greatest impact — because the buyer expects to be treated as an individual, not as a number on a spam list.",
        },
        {
          q: "What data do I need to start with AI lead generation?",
          a: "The useful minimum is: a list of 5–10 current or past clients you consider good (to define the ICP with data), access to your CRM or sales conversation history, and a clear description of the problem you solve and for whom. With that we can design the complete system. You don't need purchased databases or previous technical infrastructure.",
        },
        {
          q: "How long does it take to implement a B2B lead generation system with AI?",
          a: "A Phase 1 implementation with VeryMuch.ai takes 4–6 weeks from kickoff to first leads in pipeline. Weeks 1–2 are diagnosis and ICP design; weeks 3–4, building and stack integration; weeks 5–6, testing with real prospects and fine-tuning messages.",
        },
      ],
    },
    cta: {
      heading: "Ready to have a lead generation system that works while you sleep?",
      sub: "In the ARRI diagnostic (30 min, free) we evaluate your current demand generation situation and tell you exactly what to implement first to get more qualified meetings this quarter.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: How to automate lead follow-up with AI",
      ctaSecondaryLink: "/blog/automatizar-seguimiento-leads-ia",
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

export default async function GeneracionLeadsB2BPage({ params }: Props) {
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

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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

          {/* Channels */}
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.channels.heading}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.channels.intro}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {c.channels.items.map((ch, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border"
                style={{ border: `1px solid ${ch.color}30`, background: `${ch.color}08` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ch.color }} />
                  <h3 className="text-sm font-bold" style={{ color: ch.color, fontFamily: "var(--font-display)" }}>{ch.name}</h3>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{ch.description}</p>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ background: `${ch.color}15`, color: ch.color }}
                >
                  {ch.fit}
                </span>
              </div>
            ))}
          </div>

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
