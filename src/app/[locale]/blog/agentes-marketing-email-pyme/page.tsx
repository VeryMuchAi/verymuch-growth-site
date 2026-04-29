import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-05-19";
const SLUG = "agentes-marketing-email-pyme";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface StatCard { stat: string; label: string; source: string }
interface FaqItem { q: string; a: string }
interface UseCaseItem { title: string; description: string; result: string }
interface StepItem { number: string; title: string; description: string; tool: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  problem: { heading: string; body: string; stats: StatCard[] };
  what_is: { heading: string; body: string };
  usecases: { heading: string; items: UseCaseItem[] };
  steps: { heading: string; items: StepItem[] };
  results: { heading: string; body: string; items: { metric: string; description: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Agentes de marketing por email para PYME en 2026 — VeryMuch.ai",
      description:
        "Cómo las PYME usan agentes de IA para automatizar el email marketing: bienvenidas, nurturing, reactivación y upsell. Más conversiones, menos tiempo manual — sin contratar más equipo.",
      ogTitle: "Agentes de marketing por email para PYME en 2026",
      ogDescription:
        "En VeryMuch.ai implementamos agentes de email marketing con IA que personalizan cada mensaje según el comportamiento del lead. Así funcionan — con casos reales de PYME en el mercado hispanohablante.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Agentes de email marketing para PYME" },
    hero: {
      badge: "✦ Email Marketing con IA",
      h1: "Agentes de marketing por email para PYME: guía práctica 2026",
      sub: "El email marketing sigue siendo el canal con el mayor ROI del marketing digital — €36 por cada €1 invertido. El problema para las PYME es que personalizarlo a escala requería hasta ahora un equipo dedicado. Los agentes de IA cambian esa ecuación.",
      by: "Por",
      date: "19 de mayo, 2026",
      readTime: "10 min de lectura",
    },
    intro: {
      p1: "Las PYME tienen un problema estructural con el email marketing: saben que funciona, pero no tienen el tiempo ni el equipo para hacerlo bien. Envían newsletters genéricas que no convierten, o directamente dejan de enviar. El resultado es una lista de contactos que se enfría mes a mes mientras los leads que podrían convertirse en clientes pierden el contexto de por qué se suscribieron.",
      p2: "Los agentes de IA de email marketing resuelven ese problema de forma práctica: automatizan las secuencias de emails, personalizan cada mensaje según el comportamiento real del lead (qué abrió, qué ignoró, qué compró), y escalan la función de email marketing de una persona haciendo el trabajo de tres — sin contratar a nadie más.",
    },
    problem: {
      heading: "Por qué el email marketing tradicional falla en las PYME",
      body: "No es falta de intención — es falta de sistema. Las PYME tienen bases de datos de leads que crecen pero no se trabajan, secuencias de bienvenida que nunca se configuraron, y leads activos que nunca reciben un seguimiento personalizado porque el equipo no tiene tiempo. La IA no elimina la necesidad de estrategia, pero sí elimina la barrera operativa.",
      stats: [
        { stat: "€36", label: "de retorno por cada €1 invertido en email marketing — el canal con mayor ROI", source: "Litmus Email Marketing ROI Report" },
        { stat: "47%", label: "de las PYME no tienen una secuencia de nurturing automatizada activa", source: "HubSpot SMB Report 2025" },
        { stat: "6x", label: "más conversiones generan los emails personalizados vs los newsletters genéricos", source: "Campaign Monitor" },
      ],
    },
    what_is: {
      heading: "¿Qué es un agente de marketing por email con IA?",
      body: "Un agente de email marketing con IA es un sistema que combina automatización de flujos con inteligencia contextual. No es un autoresponder que envía la misma secuencia a todos — es un sistema que decide qué email enviar, cuándo enviarlo y con qué contenido, basándose en el comportamiento real de cada contacto. Si el lead abrió el email de bienvenida pero no hizo clic, recibe un seguimiento diferente al que lo ignoró. Si visitó la página de precios, recibe un email de propuesta en lugar del siguiente de nurturing. El agente actúa como un email marketer experto que conoce el historial de cada contacto y adapta la comunicación en consecuencia.",
    },
    usecases: {
      heading: "5 casos de uso de agentes de email con IA para PYME",
      items: [
        {
          title: "Secuencia de bienvenida personalizada",
          description: "Cuando un nuevo contacto se une a la lista (por formulario web, lead magnet o evento), el agente lanza una secuencia de bienvenida adaptada al origen del lead: quién es, de dónde vino y qué problema expresó. No es una secuencia genérica de 5 emails — es una conversación que empieza desde donde está el prospecto.",
          result: "Tasa de apertura típica: 60–70% vs 20–30% del newsletter estándar",
        },
        {
          title: "Nurturing adaptativo por comportamiento",
          description: "El agente monitorea las aperturas, clics y visitas web de cada contacto y ajusta la secuencia en tiempo real. Si el lead muestra señales de alta intención (visita de precio, descarga de caso de estudio), el agente acelera la secuencia y alerta al equipo de ventas. Si muestra baja intención, el agente reduce la frecuencia para no quemar el contacto.",
          result: "Reducción de 40% en bajas de lista por exceso de emails irrelevantes",
        },
        {
          title: "Reactivación de leads fríos",
          description: "Contactos que no han abierto un email en 90+ días no están perdidos — solo necesitan el ángulo correcto. El agente identifica los contactos inactivos, diseña una secuencia de reactivación con un incentivo específico (nuevo recurso, cambio relevante en el producto, contenido de valor), y filtra automáticamente a los que no responden para mantener limpia la lista.",
          result: "Reactivación típica del 10–25% de la base de leads fríos",
        },
        {
          title: "Upsell y cross-sell a clientes existentes",
          description: "Los clientes actuales son el segmento más fácil de vender — pero la mayoría de las PYME no tienen un sistema estructurado de upsell por email. El agente identifica oportunidades de expansión basándose en el uso actual del cliente, envía propuestas de valor adicional en el momento correcto, y gestiona el seguimiento hasta que el cliente responde o descalifica la oportunidad.",
          result: "Expansión de cuenta: 15–30% de clientes compran un servicio adicional en 6 meses",
        },
        {
          title: "Emails post-reunión personalizados",
          description: "Después de cada llamada de ventas o demostración, el agente genera un email de seguimiento personalizado con el resumen de lo discutido, los próximos pasos acordados y recursos específicos para el caso del prospecto. No es una plantilla con el nombre — es un email que demuestra que el vendedor escuchó y recuerda la conversación.",
          result: "Tasa de avance a propuesta: mejora del 25–40% vs seguimiento manual genérico",
        },
      ],
    },
    steps: {
      heading: "Cómo implementamos agentes de email marketing con IA en 4 pasos",
      items: [
        {
          number: "01",
          title: "Auditoría de la base de contactos y segmentación",
          description: "El primer paso es entender con qué datos contamos: tamaño de la lista, tasas de apertura actuales, segmentos existentes, historial de envíos. La IA analiza la base y la segmenta automáticamente por nivel de actividad (activos, tibios, fríos), tipo de lead (inbound/outbound, lead magnet, evento), y etapa del funnel (awareness, consideración, decisión). Sin esa segmentación, cualquier automatización enviará el mensaje equivocado al segmento equivocado.",
          tool: "IA + CRM (GHL / HubSpot)",
        },
        {
          number: "02",
          title: "Diseño de flujos por segmento y trigger",
          description: "Para cada segmento principal se diseña un flujo de emails con triggers específicos: nuevo suscriptor (bienvenida), lead magnet descargado (nurturing del tema), visita de página de precios (propuesta de valor), inactividad de 30 días (re-engagement), cliente nuevo (onboarding), cliente con 3+ meses (upsell). Cada flujo tiene entre 3 y 8 emails, con bifurcaciones según el comportamiento.",
          tool: "GHL Workflows / HubSpot Sequences",
        },
        {
          number: "03",
          title: "Generación de contenido con IA y validación humana",
          description: "El agente genera los textos de cada email basándose en la voz de marca, el ICP y el objetivo del flujo. El equipo humano revisa y aprueba el contenido antes del lanzamiento. En producción, la IA también genera variantes A/B automáticas para los asuntos y el primer párrafo — optimizando la tasa de apertura semana a semana sin trabajo manual adicional.",
          tool: "Claude (Anthropic) + revisión humana",
        },
        {
          number: "04",
          title: "Monitoreo continuo y optimización adaptativa",
          description: "Una vez en producción, el agente monitorea las métricas clave (tasa de apertura, clics, conversiones, bajas) y genera un informe semanal con recomendaciones. Cuando detecta una anomalía — como una caída brusca en aperturas o un aumento de bajas — alerta al equipo con el diagnóstico y la acción recomendada. No solo ejecuta: aprende y mejora.",
          tool: "n8n + dashboards de CRM",
        },
      ],
    },
    results: {
      heading: "Resultados reales en clientes de VeryMuch.ai",
      body: "Métricas observadas en implementaciones de email marketing con IA para empresas de servicios B2B en México y España. Los resultados varían según el tamaño de la lista, el ICP y la calidad del contenido.",
      items: [
        { metric: "3–6x", description: "Mejora en tasa de conversión lead → cliente vs email marketing sin segmentación" },
        { metric: "60%", description: "Menos tiempo de equipo dedicado a redacción y gestión de campañas" },
        { metric: "€36:1", description: "ROI promedio del canal email — el más alto del marketing digital" },
        { metric: "Semana 2", description: "Primeros flujos en producción con leads reales entrando" },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito una lista grande para que los agentes de email con IA funcionen?",
          a: "No. El sistema funciona desde listas de 200–300 contactos. Lo importante no es el tamaño sino la calidad de la segmentación y la relevancia del contenido. Con una lista pequeña bien trabajada conseguirás más conversiones que con una lista de 10,000 contactos sin segmentar. A medida que la lista crece, el sistema escala automáticamente.",
        },
        {
          q: "¿Los emails generados por IA suenan artificiales?",
          a: "No, si el sistema está bien implementado. Los modelos de lenguaje que usamos (Claude de Anthropic) pueden capturar la voz de marca de una empresa con 5–10 ejemplos de emails reales. El proceso incluye una fase de calibración de voz donde el equipo revisa y ajusta los primeros emails antes de que el sistema opere en producción. El resultado son emails que suenan como si los escribiera el mejor redactor de tu equipo.",
        },
        {
          q: "¿Qué plataforma de email marketing necesito?",
          a: "Trabajamos con GoHighLevel (primera recomendación para la mayoría de las PYME por su relación funcionalidad/precio), HubSpot, y ActiveCampaign. Si ya tienes una plataforma, la integramos. Si empiezas desde cero, recomendamos GoHighLevel — incluye CRM, email marketing, SMS y automatizaciones en una sola plataforma desde $97/mes.",
        },
        {
          q: "¿Cómo se garantiza que los emails no terminen en spam?",
          a: "La entregabilidad depende de tres factores: la reputación del dominio remitente (requiere configurar SPF, DKIM y DMARC), la higiene de la lista (eliminar contactos inactivos periódicamente), y la relevancia del contenido (baja tasa de spam reports). El sistema de IA que implementamos incluye buenas prácticas de entregabilidad desde el día 1 y monitorea las métricas de reputación de forma continua.",
        },
        {
          q: "¿Cuánto cuesta implementar agentes de email marketing con IA en VeryMuch.ai?",
          a: "Una implementación de Fase 1 (auditoría + segmentación + 3–5 flujos principales + monitoreo) parte de €4,500 de instalación + €1,200/mes de operación (AaaS). Esto incluye diseño de flujos, generación de contenido inicial, integración con el CRM y monitoreo mensual de rendimiento. El ROI positivo típico se alcanza en el mes 2–3 de operación.",
        },
      ],
    },
    cta: {
      heading: "¿Tu lista de contactos está generando el resultado que debería?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) auditamos tu situación actual de email marketing y te decimos exactamente qué flujos implementar primero para convertir más leads en clientes este trimestre.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: Generación de leads B2B con IA",
      ctaSecondaryLink: "/blog/generacion-leads-b2b-inteligencia-artificial",
    },
    author: {
      label: "Escrito por",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Fundador, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
      initials: "JH",
    },
  },
  en: {
    meta: {
      title: "AI Email Marketing Agents for SMBs in 2026 — VeryMuch.ai",
      description:
        "How SMBs use AI agents to automate email marketing: welcome sequences, nurturing, reactivation, and upsell. More conversions, less manual time — without hiring more staff.",
      ogTitle: "AI Email Marketing Agents for SMBs in 2026",
      ogDescription:
        "At VeryMuch.ai we implement AI email marketing agents that personalize every message based on lead behavior. Here's how they work — with real SMB cases from the Spanish-speaking market.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "AI Email Marketing Agents for SMBs" },
    hero: {
      badge: "✦ Email Marketing with AI",
      h1: "AI email marketing agents for SMBs: practical guide 2026",
      sub: "Email marketing remains the channel with the highest ROI in digital marketing — €36 for every €1 invested. The problem for SMBs is that personalizing it at scale previously required a dedicated team. AI agents change that equation.",
      by: "By",
      date: "May 19, 2026",
      readTime: "10 min read",
    },
    intro: {
      p1: "SMBs have a structural problem with email marketing: they know it works, but don't have the time or team to do it well. They send generic newsletters that don't convert, or simply stop sending altogether. The result is a contact list that grows colder month by month while leads that could become clients lose the context of why they subscribed.",
      p2: "AI email marketing agents solve that problem practically: they automate email sequences, personalize each message based on the lead's actual behavior (what they opened, what they ignored, what they bought), and scale the email marketing function of one person doing the work of three — without hiring anyone else.",
    },
    problem: {
      heading: "Why traditional email marketing fails for SMBs",
      body: "It's not lack of intention — it's lack of system. SMBs have growing contact databases that aren't being worked, welcome sequences that were never set up, and active leads who never receive personalized follow-up because the team doesn't have time. AI doesn't eliminate the need for strategy, but it does eliminate the operational barrier.",
      stats: [
        { stat: "€36", label: "return for every €1 invested in email marketing — the highest ROI channel", source: "Litmus Email Marketing ROI Report" },
        { stat: "47%", label: "of SMBs don't have an active automated nurturing sequence", source: "HubSpot SMB Report 2025" },
        { stat: "6x", label: "more conversions from personalized emails vs generic newsletters", source: "Campaign Monitor" },
      ],
    },
    what_is: {
      heading: "What is an AI email marketing agent?",
      body: "An AI email marketing agent is a system that combines flow automation with contextual intelligence. It's not an autoresponder that sends the same sequence to everyone — it's a system that decides what email to send, when to send it, and with what content, based on each contact's actual behavior. If a lead opened the welcome email but didn't click, they receive a different follow-up than the one who ignored it. If they visited the pricing page, they receive a value proposal email instead of the next nurturing message. The agent acts as an expert email marketer who knows each contact's history and adapts communication accordingly.",
    },
    usecases: {
      heading: "5 AI email agent use cases for SMBs",
      items: [
        {
          title: "Personalized welcome sequence",
          description: "When a new contact joins the list (via web form, lead magnet, or event), the agent launches a welcome sequence adapted to the lead's origin: who they are, where they came from, and what problem they expressed. Not a generic 5-email sequence — a conversation that starts from where the prospect actually is.",
          result: "Typical open rate: 60–70% vs 20–30% for standard newsletters",
        },
        {
          title: "Behavior-adaptive nurturing",
          description: "The agent monitors opens, clicks, and web visits for each contact and adjusts the sequence in real time. If the lead shows high-intent signals (pricing visit, case study download), the agent accelerates the sequence and alerts the sales team. If they show low intent, the agent reduces frequency to avoid burning the contact.",
          result: "40% reduction in list unsubscribes due to irrelevant email overload",
        },
        {
          title: "Cold lead reactivation",
          description: "Contacts who haven't opened an email in 90+ days aren't lost — they just need the right angle. The agent identifies inactive contacts, designs a reactivation sequence with a specific incentive (new resource, relevant product change, valuable content), and automatically filters out non-responders to keep the list clean.",
          result: "Typical reactivation of 10–25% of cold lead base",
        },
        {
          title: "Upsell and cross-sell to existing clients",
          description: "Current clients are the easiest segment to sell to — but most SMBs don't have a structured email upsell system. The agent identifies expansion opportunities based on current client usage, sends additional value proposals at the right moment, and manages follow-up until the client responds or disqualifies the opportunity.",
          result: "Account expansion: 15–30% of clients purchase an additional service within 6 months",
        },
        {
          title: "Personalized post-meeting emails",
          description: "After each sales call or demo, the agent generates a personalized follow-up email with a summary of what was discussed, the next agreed steps, and specific resources for the prospect's case. Not a template with a name — an email that demonstrates the salesperson listened and remembers the conversation.",
          result: "Proposal advancement rate: 25–40% improvement vs generic manual follow-up",
        },
      ],
    },
    steps: {
      heading: "How we implement AI email marketing agents in 4 steps",
      items: [
        {
          number: "01",
          title: "Contact base audit and segmentation",
          description: "The first step is understanding what data we have: list size, current open rates, existing segments, sending history. AI analyzes the base and automatically segments by activity level (active, warm, cold), lead type (inbound/outbound, lead magnet, event), and funnel stage (awareness, consideration, decision). Without that segmentation, any automation will send the wrong message to the wrong segment.",
          tool: "AI + CRM (GHL / HubSpot)",
        },
        {
          number: "02",
          title: "Flow design by segment and trigger",
          description: "For each main segment, a flow with specific triggers is designed: new subscriber (welcome), downloaded lead magnet (topic nurturing), pricing page visit (value proposal), 30-day inactivity (re-engagement), new client (onboarding), client with 3+ months (upsell). Each flow has 3–8 emails, with branches based on behavior.",
          tool: "GHL Workflows / HubSpot Sequences",
        },
        {
          number: "03",
          title: "AI content generation and human validation",
          description: "The agent generates email copy based on brand voice, ICP, and flow objective. The human team reviews and approves content before launch. In production, AI also generates automatic A/B variants for subject lines and opening paragraphs — optimizing open rates week by week without additional manual work.",
          tool: "Claude (Anthropic) + human review",
        },
        {
          number: "04",
          title: "Continuous monitoring and adaptive optimization",
          description: "Once in production, the agent monitors key metrics (open rate, clicks, conversions, unsubscribes) and generates a weekly report with recommendations. When it detects an anomaly — like a sudden drop in opens or an increase in unsubscribes — it alerts the team with the diagnosis and recommended action. It doesn't just execute: it learns and improves.",
          tool: "n8n + CRM dashboards",
        },
      ],
    },
    results: {
      heading: "Real results for VeryMuch.ai clients",
      body: "Metrics observed in AI email marketing implementations for B2B service companies in Mexico and Spain. Results vary by list size, ICP, and content quality.",
      items: [
        { metric: "3–6x", description: "Improvement in lead → client conversion rate vs email marketing without segmentation" },
        { metric: "60%", description: "Less team time dedicated to copywriting and campaign management" },
        { metric: "€36:1", description: "Average ROI of the email channel — the highest in digital marketing" },
        { metric: "Week 2", description: "First flows in production with real leads entering" },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need a large list for AI email agents to work?",
          a: "No. The system works from lists of 200–300 contacts. What matters isn't size but segmentation quality and content relevance. A well-worked small list will generate more conversions than an unsegmented list of 10,000 contacts. As the list grows, the system scales automatically.",
        },
        {
          q: "Do AI-generated emails sound artificial?",
          a: "Not if the system is well implemented. The language models we use (Anthropic's Claude) can capture a company's brand voice with 5–10 real email examples. The process includes a voice calibration phase where the team reviews and adjusts the first emails before the system operates in production. The result is emails that sound like they were written by your team's best copywriter.",
        },
        {
          q: "What email marketing platform do I need?",
          a: "We work with GoHighLevel (first recommendation for most SMBs for its functionality-to-price ratio), HubSpot, and ActiveCampaign. If you already have a platform, we integrate with it. If you're starting from scratch, we recommend GoHighLevel — it includes CRM, email marketing, SMS, and automations in one platform from $97/month.",
        },
        {
          q: "How is it guaranteed that emails don't end up in spam?",
          a: "Deliverability depends on three factors: the sending domain's reputation (requires configuring SPF, DKIM, and DMARC), list hygiene (periodically removing inactive contacts), and content relevance (low spam report rate). The AI system we implement includes deliverability best practices from day 1 and continuously monitors reputation metrics.",
        },
        {
          q: "How much does it cost to implement AI email marketing agents with VeryMuch.ai?",
          a: "A Phase 1 implementation (audit + segmentation + 3–5 main flows + monitoring) starts at €4,500 installation + €1,200/month operation (AaaS). This includes flow design, initial content generation, CRM integration, and monthly performance monitoring. Typical positive ROI is reached in month 2–3 of operation.",
        },
      ],
    },
    cta: {
      heading: "Is your contact list generating the results it should?",
      sub: "In the ARRI diagnostic (30 min, free) we audit your current email marketing situation and tell you exactly which flows to implement first to convert more leads into clients this quarter.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: B2B Lead Generation with AI",
      ctaSecondaryLink: "/blog/generacion-leads-b2b-inteligencia-artificial",
    },
    author: {
      label: "Written by",
      name: "Jorge Herrera Cruz",
      role: "CEO & Co-Founder, VeryMuch.ai",
      profileLink: "/autor/jorge-herrera-cruz",
      initials: "JH",
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
      authors: ["https://verymuch.ai/autor/jorge-herrera-cruz"],
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

export default async function AgentesEmailPymePage({ params }: Props) {
  notFound();
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
      "@id": `${BASE_URL}/autor/jorge-herrera-cruz`,
      name: "Jorge Herrera Cruz",
      url: `${BASE_URL}/autor/jorge-herrera-cruz`,
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
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>
            <Link href="/">{c.breadcrumb.home}</Link>
            <span>/</span>
            <Link href="/blog">{c.breadcrumb.blog}</Link>
            <span>/</span>
            <span>{c.breadcrumb.page}</span>
          </nav>

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

          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{c.intro.p1}</p>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.intro.p2}</p>

          {/* Problem + Stats */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(90,212,174,0.06) 0%, rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(90,212,174,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
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
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.what_is.heading}
          </h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>{c.what_is.body}</p>

          {/* Use cases */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.usecases.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.usecases.items.map((uc, i) => (
              <div key={i} className="p-5 rounded-2xl border" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#5AD4AE" }}>0{i + 1} </span>{uc.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{uc.description}</p>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(167,139,250,0.1)", color: "#A78BFA" }}>
                  {uc.result}
                </span>
              </div>
            ))}
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.steps.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.steps.items.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-extrabold flex-shrink-0 w-10 leading-none mt-0.5" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(90,212,174,0.1)", color: "#5AD4AE" }}>
                      {step.tool}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.results.heading}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{c.results.body}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {c.results.items.map((r, i) => (
              <div key={i} className="p-4 rounded-xl text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div className="text-2xl font-extrabold mb-2" style={{ color: "#5AD4AE", fontFamily: "var(--font-display)" }}>{r.metric}</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.faq.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.faq.items.map((item, i) => (
              <details key={i} className="group p-5 rounded-xl border cursor-pointer" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <summary className="font-semibold text-sm list-none" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div className="p-5 rounded-xl flex items-start gap-4 mb-2" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm"
              style={{ background: "linear-gradient(135deg, #5AD4AE 0%, #A78BFA 100%)" }}
            >
              {c.author.initials}
            </div>
            <div>
              <p className="text-xs opacity-60 mb-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.label}</p>
              <Link href={c.author.profileLink} className="font-semibold text-sm hover:underline" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                {c.author.name}
              </Link>
              <p className="text-xs opacity-60 mt-0.5" style={{ color: "var(--text-secondary)" }}>{c.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.cta.heading}
          </h2>
          <p className="text-base mb-8 opacity-70" style={{ color: "var(--text-secondary)" }}>{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vm-primary"
            >
              {c.cta.ctaPrimary}
            </a>
            <Link
              href={c.cta.ctaSecondaryLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all border hover:border-opacity-60"
              style={{ border: "1px solid var(--border-color)", color: "var(--text-primary)", background: "transparent" }}
            >
              {c.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
