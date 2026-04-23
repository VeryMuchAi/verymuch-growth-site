import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/booking/zU0QrkmOM9x1eRfwmNye";
const PUBLISHED = "2026-05-05";
const SLUG = "integracion-crm-ia-ventas";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

interface IntegrationPattern {
  title: string;
  description: string;
  tools: string;
  impact: string;
}

interface CrmOption {
  name: string;
  tagline: string;
  aiReadiness: string;
  bestIntegrations: string[];
  color: string;
}

interface FaqItem { q: string; a: string }

interface PageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  breadcrumb: { home: string; blog: string; page: string };
  hero: { badge: string; h1: string; sub: string; by: string; date: string; readTime: string };
  intro: { p1: string; p2: string };
  why: { heading: string; body: string; points: string[] };
  patterns: { heading: string; items: IntegrationPattern[] };
  crms: { heading: string; items: CrmOption[] };
  steps: { heading: string; items: { number: string; title: string; description: string }[] };
  mistakes: { heading: string; items: { title: string; description: string }[] };
  faq: { heading: string; items: FaqItem[] };
  cta: { heading: string; sub: string; ctaPrimary: string; ctaSecondary: string; ctaSecondaryLink: string };
  author: { label: string; name: string; role: string; profileLink: string; initials: string };
}

const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title: "Integración CRM con IA para equipos de ventas B2B 2026 — VeryMuch.ai",
      description:
        "Guía práctica para integrar tu CRM con agentes de IA en ventas B2B. Cómo conectar GoHighLevel, HubSpot o Salesforce con IA para automatizar calificación, seguimiento y reporting sin cambiar tu stack.",
      ogTitle: "Integración CRM con IA para ventas B2B: guía completa 2026",
      ogDescription:
        "En VeryMuch.ai conectamos CRMs con agentes de IA vía webhooks y APIs. Así funciona la integración — sin reemplazar tu stack actual, solo haciéndolo más inteligente.",
      ogLocale: "es_ES",
    },
    breadcrumb: { home: "Inicio", blog: "Blog", page: "Integración CRM con IA para ventas" },
    hero: {
      badge: "✦ CRM + IA",
      h1: "Integración CRM con IA para ventas B2B: guía completa 2026",
      sub: "Tu CRM ya tiene los datos. La IA tiene la capacidad de razonamiento. Conectarlos bien es la diferencia entre un sistema de registro y un sistema de crecimiento activo.",
      by: "Por",
      date: "5 de mayo, 2026",
      readTime: "11 min de lectura",
    },
    intro: {
      p1: "La mayoría de los equipos de ventas B2B ya tienen un CRM. El problema no es la falta de datos — es que esos datos duermen en el sistema en lugar de activar acciones de venta inteligentes. Un lead que llena un formulario debería desencadenar investigación automática, calificación, y primer contacto en menos de 5 minutos. En la mayoría de empresas, desencadena una notificación que alguien verá en 4 horas.",
      p2: "En VeryMuch.ai hemos conectado sistemas CRM con agentes de IA para empresas B2B en España, México y Colombia. En esta guía compartimos los patrones de integración que más impacto tienen, qué CRMs funcionan mejor con IA, y cómo implementarlo paso a paso sin reemplazar tu stack actual.",
    },
    why: {
      heading: "Por qué integrar tu CRM con IA — y por qué ahora",
      body: "Un CRM sin IA es una base de datos glorificada. Un CRM con IA integrada es un equipo de ventas que trabaja 24/7. La diferencia está en quién actúa sobre los datos — y en qué velocidad.",
      points: [
        "Los leads calificados por IA se convierten en reuniones 3x más rápido que los calificados manualmente",
        "El seguimiento automatizado por IA reduce el churn de leads en etapa temprana hasta un 40%",
        "Los vendedores que usan CRM + IA cierran un 27% más que los que usan solo CRM (Salesforce, 2025)",
        "El coste por lead cualificado baja un promedio de 35% con calificación automática",
      ],
    },
    patterns: {
      heading: "Los 5 patrones de integración CRM + IA con mayor impacto",
      items: [
        {
          title: "Lead enrichment automático",
          description: "Cada vez que entra un nuevo contacto al CRM (vía formulario, importación o LinkedIn), un agente de IA enriquece automáticamente el registro: empresa, sector, tamaño, cargo real, señales de financiación, presencia digital. El vendedor recibe un ficha completa — no solo nombre y email.",
          tools: "n8n + Perplexity API + CRM API",
          impact: "Ahorra 15–20 min por lead en investigación manual",
        },
        {
          title: "Calificación automática y scoring",
          description: "El agente evalúa cada lead nuevo contra tu ICP definido (sector, tamaño, cargo, presupuesto estimado) y asigna un score automático. Los leads de alta prioridad se escalán inmediatamente; los de baja prioridad entran en secuencias de nurturing de largo plazo. Sin intervención humana en la fase de clasificación.",
          tools: "Claude / GPT-4o + CRM Webhook",
          impact: "Reduce el tiempo de calificación manual un 60–70%",
        },
        {
          title: "Secuencias de outreach hiperpersonalizadas",
          description: "En lugar de templates fijos, el agente genera el primer email de contacto usando datos reales del lead: menciona el producto de la empresa, el reto típico del sector, y propone valor específico para su contexto. La tasa de respuesta de estos emails supera a los templates genéricos en 2–4x.",
          tools: "Claude + GHL/HubSpot Email",
          impact: "Tasa de respuesta 2–4x vs templates estáticos",
        },
        {
          title: "Resúmenes de llamada y actualización de CRM",
          description: "Tras cada llamada de ventas, el agente transcribe y resume la conversación, extrae los próximos pasos acordados, actualiza el stage del deal en el CRM, y agenda automáticamente el follow-up. El vendedor sale de la llamada con el CRM ya actualizado — sin perder tiempo en administración.",
          tools: "Whisper / Recall.ai + Claude + CRM API",
          impact: "Elimina 30–45 min/día de trabajo administrativo por vendedor",
        },
        {
          title: "Alertas de intención de compra y churn",
          description: "El agente monitorea señales en el CRM — visitas repetidas a páginas de precios, aperturas de emails específicos, cambios de cargo del contacto principal — y alerta proactivamente al vendedor cuando un lead caliente necesita contacto inmediato, o cuando una cuenta en riesgo necesita atención de retención.",
          tools: "n8n + CRM Webhook + Slack",
          impact: "Reduce el churn de cuentas en etapa temprana hasta un 25%",
        },
      ],
    },
    crms: {
      heading: "¿Qué CRM se integra mejor con IA en 2026?",
      items: [
        {
          name: "GoHighLevel",
          tagline: "El mejor para integración IA vía webhooks — flexibilidad máxima",
          aiReadiness: "Alta",
          bestIntegrations: ["Webhooks nativos para n8n", "Workflows visuales + IA externa", "Sub-cuentas para agencias", "API robusta para actualizaciones en tiempo real"],
          color: "#2C6B65",
        },
        {
          name: "HubSpot",
          tagline: "IA nativa (Breeze) + API enterprise — mejor para empresas grandes",
          aiReadiness: "Alta",
          bestIntegrations: ["HubSpot Breeze (IA nativa)", "Workflows con webhooks a n8n", "API para scoring personalizado", "Integraciones nativas con +1,400 apps"],
          color: "#D97757",
        },
        {
          name: "Salesforce",
          tagline: "Einstein AI nativo — máxima potencia, máxima complejidad",
          aiReadiness: "Muy alta",
          bestIntegrations: ["Einstein AI para scoring", "Apex para lógica personalizada", "MuleSoft para orquestación compleja", "API para cualquier integración custom"],
          color: "#A78BFA",
        },
        {
          name: "Pipedrive",
          tagline: "Simple + API limpia — ideal para equipos pequeños con IA externa",
          aiReadiness: "Media",
          bestIntegrations: ["API REST limpia para n8n", "Webhooks para trigger events", "Zapier/Make para flujos básicos", "Menor curva de aprendizaje"],
          color: "#60A5FA",
        },
      ],
    },
    steps: {
      heading: "Cómo implementar la integración CRM + IA: 4 pasos",
      items: [
        {
          number: "01",
          title: "Define tu ICP y los criterios de calificación",
          description: "Antes de escribir una sola línea de código, define exactamente qué es un lead bueno para tu empresa: sector, tamaño de empresa (empleados o facturación), cargo del decisor, presupuesto mínimo estimado, geografía, y señales de intención. Estos criterios son los que el agente usará para calificar. Sin definición clara, la IA calificará cualquier cosa.",
        },
        {
          number: "02",
          title: "Mapea los eventos del CRM que deben disparar acciones de IA",
          description: "Identifica los triggers clave: nuevo lead creado, deal movido de etapa, email abierto N veces sin respuesta, llamada registrada sin seguimiento, contacto sin actividad en X días. Cada trigger es un webhook que dispara un flujo de n8n con un agente de IA como cerebro del proceso.",
        },
        {
          number: "03",
          title: "Construye los flujos de n8n con agentes Claude",
          description: "Cada flujo tiene la misma estructura: (1) recibir el webhook del CRM, (2) enriquecer con datos externos si es necesario, (3) enviar al modelo de IA con contexto + instrucciones específicas, (4) procesar la respuesta, (5) actualizar el CRM y/o disparar la acción (email, Slack, task). n8n actúa como orquestador; Claude como el razonador.",
        },
        {
          number: "04",
          title: "Prueba con un lote real y ajusta el ICP",
          description: "Toma los últimos 50 leads del CRM y pásalos por el sistema. Revisa los scores asignados contra tu intuición de qué eran buenos o malos leads. Ajusta los criterios del ICP hasta que el 80% de los scores te parezcan correctos. Solo entonces activa el sistema en producción para leads nuevos.",
        },
      ],
    },
    mistakes: {
      heading: "Los 3 errores más comunes en integraciones CRM + IA",
      items: [
        {
          title: "Conectar sin limpiar: basura dentro, basura fuera",
          description: "Si tu CRM tiene contactos duplicados, campos vacíos, y stages desactualizados, la IA va a operar sobre datos malos y producir resultados malos. Antes de integrar, dedica tiempo a limpiar el CRM: deduplicar contactos, estandarizar los stages del pipeline, y definir qué campos son obligatorios. La calidad de la integración depende de la calidad de los datos base.",
        },
        {
          title: "Automatizar todo a la vez sin punto de control",
          description: "El error clásico es implementar un sistema que hace todo automáticamente — enriquecer, calificar, escribir emails, enviarlos — sin ningún punto de revisión humana. El resultado suele ser emails incorrectos o inapropiados enviados a prospectos importantes antes de que nadie se diera cuenta. Empieza con flujos donde la IA propone y el humano aprueba. Solo cuando tengas confianza en la calidad, activa el modo totalmente automático.",
        },
        {
          title: "No medir el impacto de la integración",
          description: "Muchos equipos implementan la integración y nunca miden si está funcionando. Establece métricas claras antes de activar el sistema: tiempo medio de primer contacto (meta: < 5 min), tasa de calificación correcta (meta: > 75%), tasa de respuesta a emails de IA vs templates anteriores. Sin métricas, no sabes si la integración está generando ROI o solo moviendo burocracia.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Necesito cambiar mi CRM actual para integrar IA?",
          a: "No. La IA se conecta a tu CRM existente a través de webhooks y APIs, sin necesidad de migrar datos ni cambiar de plataforma. GoHighLevel, HubSpot, Salesforce, y Pipedrive tienen APIs robustas que permiten esta integración. El agente de IA actúa como una capa de inteligencia sobre tu stack actual — no como un reemplazo.",
        },
        {
          q: "¿Cuánto tiempo tarda en implementarse una integración CRM + IA?",
          a: "Una integración básica (lead enrichment + calificación + primer contacto automático) tarda entre 3 y 5 semanas. Las semanas 1–2 son de diseño del ICP y mapeo de triggers; las semanas 3–4, de construcción de los flujos en n8n; la semana 5, de pruebas con datos reales y ajuste fino. Una integración avanzada (resúmenes de llamada, alertas de intención, reporting automático) puede tardar 2–3 meses.",
        },
        {
          q: "¿La integración funciona con Salesforce si ya lo tenemos implementado?",
          a: "Sí, pero requiere más trabajo de configuración. Salesforce tiene una API robusta (REST y SOAP) y soporte para Apex, pero también más reglas de governance y seguridad. Las integraciones vía n8n con Salesforce son completamente viables; el esfuerzo adicional está en la autenticación OAuth, el mapeo de objetos personalizados, y las restricciones de sandbox. Para Salesforce recomendamos un sprint de diagnóstico previo.",
        },
        {
          q: "¿Cuánto cuesta integrar IA con mi CRM con VeryMuch.ai?",
          a: "Una Fase 1 de integración CRM + IA en VeryMuch.ai parte de €4,500 de instalación + €1,200/mes de operación (AaaS). Esto incluye diseño del ICP, construcción de los flujos n8n, configuración del modelo Claude, integración con el CRM, pruebas con leads reales, y monitoreo mensual. Para CRMs complejos como Salesforce, el proyecto puede ser mayor — agendamos una sesión ARRI gratuita para dimensionarlo.",
        },
        {
          q: "¿Es seguro que la IA acceda a los datos de mi CRM?",
          a: "Sí. Los agentes de IA nunca almacenan los datos de tu CRM — solo los procesan en el contexto de cada llamada al modelo y actualizan el CRM con el resultado. El acceso al CRM se configura con tokens de API con permisos mínimos (solo lectura + escritura en campos específicos). Los flujos de n8n pueden ejecutarse en servidores en tu propia infraestructura o en la nube europea si tienes restricciones de residencia de datos.",
        },
      ],
    },
    cta: {
      heading: "¿Tu CRM tiene los datos pero no genera oportunidades solas?",
      sub: "En el diagnóstico ARRI (30 min, gratuito) evaluamos tu setup actual y te decimos exactamente cómo conectar la IA a tu CRM para maximizar el impacto en el pipeline.",
      ctaPrimary: "Hacer el diagnóstico ARRI →",
      ctaSecondary: "Leer: GoHighLevel vs HubSpot para ventas con IA",
      ctaSecondaryLink: "/blog/gohighlevel-vs-hubspot-ventas-ia",
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
      title: "CRM Integration with AI for B2B Sales Teams 2026 — VeryMuch.ai",
      description:
        "Practical guide to integrating your CRM with AI agents for B2B sales. How to connect GoHighLevel, HubSpot, or Salesforce with AI to automate qualification, follow-up, and reporting without changing your stack.",
      ogTitle: "CRM Integration with AI for B2B Sales: Complete Guide 2026",
      ogDescription:
        "At VeryMuch.ai we connect CRMs with AI agents via webhooks and APIs. Here's how the integration works — without replacing your current stack, just making it smarter.",
      ogLocale: "en_US",
    },
    breadcrumb: { home: "Home", blog: "Blog", page: "CRM Integration with AI for Sales" },
    hero: {
      badge: "✦ CRM + AI",
      h1: "CRM integration with AI for B2B sales: complete guide 2026",
      sub: "Your CRM already has the data. AI has the reasoning capability. Connecting them well is the difference between a system of record and an active growth system.",
      by: "By",
      date: "May 5, 2026",
      readTime: "11 min read",
    },
    intro: {
      p1: "Most B2B sales teams already have a CRM. The problem isn't a lack of data — it's that the data sits dormant in the system instead of triggering intelligent sales actions. A lead who fills out a form should trigger automatic research, qualification, and first contact in under 5 minutes. In most companies, it triggers a notification someone will see in 4 hours.",
      p2: "At VeryMuch.ai we've connected CRM systems with AI agents for B2B companies in Spain, Mexico, and Colombia. In this guide we share the integration patterns with the highest impact, which CRMs work best with AI, and how to implement it step by step without replacing your current stack.",
    },
    why: {
      heading: "Why integrate your CRM with AI — and why now",
      body: "A CRM without AI is a glorified database. A CRM with integrated AI is a sales team that works 24/7. The difference lies in who acts on the data — and at what speed.",
      points: [
        "Leads qualified by AI convert to meetings 3x faster than manually qualified ones",
        "AI-automated follow-up reduces early-stage lead churn by up to 40%",
        "Salespeople using CRM + AI close 27% more than those using CRM alone (Salesforce, 2025)",
        "Cost per qualified lead drops an average of 35% with automatic qualification",
      ],
    },
    patterns: {
      heading: "The 5 highest-impact CRM + AI integration patterns",
      items: [
        {
          title: "Automatic lead enrichment",
          description: "Every time a new contact enters the CRM (via form, import, or LinkedIn), an AI agent automatically enriches the record: company, sector, size, actual job title, funding signals, digital presence. The salesperson receives a complete profile — not just name and email.",
          tools: "n8n + Perplexity API + CRM API",
          impact: "Saves 15–20 min per lead in manual research",
        },
        {
          title: "Automatic qualification and scoring",
          description: "The agent evaluates each new lead against your defined ICP (sector, size, job title, estimated budget) and assigns an automatic score. High-priority leads are immediately escalated; low-priority leads enter long-term nurturing sequences. No human intervention in the classification phase.",
          tools: "Claude / GPT-4o + CRM Webhook",
          impact: "Reduces manual qualification time by 60–70%",
        },
        {
          title: "Hyper-personalized outreach sequences",
          description: "Instead of fixed templates, the agent generates the first contact email using real lead data: it mentions the company's product, the sector's typical challenge, and proposes specific value for their context. Response rates from these emails outperform generic templates by 2–4x.",
          tools: "Claude + GHL/HubSpot Email",
          impact: "2–4x response rate vs static templates",
        },
        {
          title: "Call summaries and CRM updates",
          description: "After each sales call, the agent transcribes and summarizes the conversation, extracts agreed next steps, updates the deal stage in the CRM, and automatically schedules the follow-up. The salesperson finishes the call with the CRM already updated — without wasting time on admin.",
          tools: "Whisper / Recall.ai + Claude + CRM API",
          impact: "Eliminates 30–45 min/day of administrative work per salesperson",
        },
        {
          title: "Purchase intent and churn alerts",
          description: "The agent monitors signals in the CRM — repeated visits to pricing pages, specific email opens, changes in the primary contact's job title — and proactively alerts the salesperson when a hot lead needs immediate contact, or when an at-risk account needs retention attention.",
          tools: "n8n + CRM Webhook + Slack",
          impact: "Reduces early-stage account churn by up to 25%",
        },
      ],
    },
    crms: {
      heading: "Which CRM integrates best with AI in 2026?",
      items: [
        {
          name: "GoHighLevel",
          tagline: "Best for AI integration via webhooks — maximum flexibility",
          aiReadiness: "High",
          bestIntegrations: ["Native webhooks for n8n", "Visual workflows + external AI", "Sub-accounts for agencies", "Robust API for real-time updates"],
          color: "#2C6B65",
        },
        {
          name: "HubSpot",
          tagline: "Native AI (Breeze) + enterprise API — best for larger companies",
          aiReadiness: "High",
          bestIntegrations: ["HubSpot Breeze (native AI)", "Workflows with webhooks to n8n", "API for custom scoring", "Native integrations with 1,400+ apps"],
          color: "#D97757",
        },
        {
          name: "Salesforce",
          tagline: "Einstein AI native — maximum power, maximum complexity",
          aiReadiness: "Very high",
          bestIntegrations: ["Einstein AI for scoring", "Apex for custom logic", "MuleSoft for complex orchestration", "API for any custom integration"],
          color: "#A78BFA",
        },
        {
          name: "Pipedrive",
          tagline: "Simple + clean API — ideal for small teams with external AI",
          aiReadiness: "Medium",
          bestIntegrations: ["Clean REST API for n8n", "Webhooks for trigger events", "Zapier/Make for basic flows", "Lower learning curve"],
          color: "#60A5FA",
        },
      ],
    },
    steps: {
      heading: "How to implement CRM + AI integration: 4 steps",
      items: [
        {
          number: "01",
          title: "Define your ICP and qualification criteria",
          description: "Before writing a single line of code, define exactly what a good lead looks like for your company: sector, company size (employees or revenue), decision-maker's job title, estimated minimum budget, geography, and intent signals. These criteria are what the agent will use to qualify. Without a clear definition, AI will qualify everything.",
        },
        {
          number: "02",
          title: "Map CRM events that should trigger AI actions",
          description: "Identify key triggers: new lead created, deal moved to a stage, email opened N times without response, call logged without follow-up, contact with no activity for X days. Each trigger is a webhook that fires an n8n flow with an AI agent as the process brain.",
        },
        {
          number: "03",
          title: "Build n8n flows with Claude agents",
          description: "Each flow has the same structure: (1) receive CRM webhook, (2) enrich with external data if needed, (3) send to AI model with context + specific instructions, (4) process response, (5) update CRM and/or trigger the action (email, Slack, task). n8n acts as orchestrator; Claude as the reasoner.",
        },
        {
          number: "04",
          title: "Test with a real batch and adjust the ICP",
          description: "Take the last 50 leads from the CRM and run them through the system. Review the assigned scores against your intuition of which were good or bad leads. Adjust ICP criteria until 80% of scores feel correct. Only then activate the system in production for new leads.",
        },
      ],
    },
    mistakes: {
      heading: "The 3 most common mistakes in CRM + AI integrations",
      items: [
        {
          title: "Connecting without cleaning: garbage in, garbage out",
          description: "If your CRM has duplicate contacts, empty fields, and outdated stages, AI will operate on bad data and produce bad results. Before integrating, dedicate time to cleaning the CRM: deduplicate contacts, standardize pipeline stages, and define which fields are required. Integration quality depends on base data quality.",
        },
        {
          title: "Automating everything at once without a control point",
          description: "The classic mistake is implementing a system that does everything automatically — enrich, qualify, write emails, send them — without any human review point. The result is often incorrect or inappropriate emails sent to important prospects before anyone noticed. Start with flows where AI proposes and humans approve. Only when you trust the quality, activate fully automatic mode.",
        },
        {
          title: "Not measuring the integration's impact",
          description: "Many teams implement the integration and never measure whether it's working. Establish clear metrics before activating the system: average time to first contact (target: < 5 min), correct qualification rate (target: > 75%), AI email response rate vs previous templates. Without metrics, you don't know if the integration is generating ROI or just moving bureaucracy.",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "Do I need to change my current CRM to integrate AI?",
          a: "No. AI connects to your existing CRM through webhooks and APIs, without needing to migrate data or change platforms. GoHighLevel, HubSpot, Salesforce, and Pipedrive all have robust APIs that enable this integration. The AI agent acts as an intelligence layer on top of your current stack — not as a replacement.",
        },
        {
          q: "How long does a CRM + AI integration take to implement?",
          a: "A basic integration (lead enrichment + qualification + automatic first contact) takes 3–5 weeks. Weeks 1–2 are ICP design and trigger mapping; weeks 3–4, building n8n flows; week 5, testing with real data and fine-tuning. An advanced integration (call summaries, intent alerts, automatic reporting) can take 2–3 months.",
        },
        {
          q: "Does the integration work with Salesforce if we already have it implemented?",
          a: "Yes, but it requires more configuration work. Salesforce has a robust API (REST and SOAP) and Apex support, but also more governance and security rules. Integrations via n8n with Salesforce are completely viable; the additional effort is in OAuth authentication, custom object mapping, and sandbox restrictions. For Salesforce we recommend a prior diagnostic sprint.",
        },
        {
          q: "How much does integrating AI with my CRM cost with VeryMuch.ai?",
          a: "A Phase 1 CRM + AI integration at VeryMuch.ai starts at €4,500 installation + €1,200/month operation (AaaS). This includes ICP design, n8n flow construction, Claude model configuration, CRM integration, testing with real leads, and monthly monitoring. For complex CRMs like Salesforce, the project may be larger — we schedule a free ARRI session to size it.",
        },
        {
          q: "Is it safe to have AI access my CRM data?",
          a: "Yes. AI agents never store your CRM data — they only process it in the context of each model call and update the CRM with the result. CRM access is configured with minimal-permission API tokens (read-only + write access to specific fields only). n8n flows can run on servers in your own infrastructure or on European cloud if you have data residency requirements.",
        },
      ],
    },
    cta: {
      heading: "Does your CRM have the data but isn't generating opportunities on its own?",
      sub: "In the ARRI diagnostic (30 min, free) we evaluate your current setup and tell you exactly how to connect AI to your CRM to maximize pipeline impact.",
      ctaPrimary: "Take the ARRI diagnostic →",
      ctaSecondary: "Read: GoHighLevel vs HubSpot for AI sales teams",
      ctaSecondaryLink: "/blog/gohighlevel-vs-hubspot-ventas-ia",
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

export default async function IntegracionCrmIaVentasPage({ params }: Props) {
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
              "radial-gradient(ellipse 90% 55% at 50% -15%, rgba(172,237,235,0.07) 0%, rgba(167,139,250,0.05) 45%, transparent 70%)",
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
            <div className="w-1 h-4 rounded-full" style={{ background: "linear-gradient(180deg, #2C6B65 0%, #A78BFA 100%)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2C6B65" }}>
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

          {/* Why section */}
          <div
            className="p-6 rounded-2xl mb-12"
            style={{ background: "linear-gradient(135deg, rgba(172,237,235,0.06) 0%, rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(172,237,235,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
              {c.why.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{c.why.body}</p>
            <ul className="flex flex-col gap-2">
              {c.why.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "#2C6B65", flexShrink: 0 }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Integration patterns */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.patterns.heading}
          </h2>

          <div className="flex flex-col gap-4 mb-12">
            {c.patterns.items.map((pattern, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  {pattern.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{pattern.description}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(172,237,235,0.1)", color: "#2C6B65" }}>
                    {pattern.tools}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: "rgba(218,184,130,0.1)", color: "#D97757" }}>
                    {locale === "en" ? "Impact:" : "Impacto:"} {pattern.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CRM comparison */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.crms.heading}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {c.crms.items.map((crm, i) => (
              <div key={i} className="p-5 rounded-2xl border flex flex-col gap-3" style={{ border: `1px solid ${crm.color}33`, background: "var(--bg-card)" }}>
                <div>
                  <h3 className="text-base font-bold mb-0.5" style={{ color: crm.color, fontFamily: "var(--font-display)" }}>
                    {crm.name}
                  </h3>
                  <p className="text-xs italic" style={{ color: "var(--text-secondary)" }}>{crm.tagline}</p>
                </div>
                <div className="text-xs font-semibold px-2 py-0.5 rounded-full self-start" style={{ background: `${crm.color}22`, color: crm.color }}>
                  {locale === "en" ? "AI readiness:" : "AI readiness:"} {crm.aiReadiness}
                </div>
                <ul className="flex flex-col gap-1">
                  {crm.bestIntegrations.map((item, j) => (
                    <li key={j} className="text-xs flex gap-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: crm.color, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <div className="text-2xl font-extrabold flex-shrink-0 w-10 leading-none mt-0.5" style={{ color: "#2C6B65", fontFamily: "var(--font-display)" }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mistakes */}
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {c.mistakes.heading}
          </h2>
          <div className="flex flex-col gap-4 mb-12">
            {c.mistakes.items.map((m, i) => (
              <div key={i} className="p-5 rounded-xl border" style={{ border: "1px solid rgba(218,184,130,0.3)", background: "rgba(218,184,130,0.04)" }}>
                <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#D97757" }}>⚠</span>
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.description}</p>
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
                <p className="mt-3 text-sm leading-relaxed opacity-80" style={{ color: "var(--text-secondary)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* Author box */}
          <div className="p-5 rounded-xl flex items-start gap-4 mb-2" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white text-sm"
              style={{ background: "linear-gradient(135deg, #2C6B65 0%, #A78BFA 100%)" }}
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
          <p className="text-base mb-8 opacity-70" style={{ color: "var(--text-secondary)" }}>
            {c.cta.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)" }}
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
