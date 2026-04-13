export interface BlogPost {
  slug: string;
  tag: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  author: string;
  date: { es: string; en: string };
  dateISO: string;
  readTime: { es: string; en: string };
  draft?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-agente-ia-ventas",
    tag: { es: "Conceptos IA", en: "AI Concepts" },
    title: {
      es: "¿Qué es un agente de IA para ventas? Guía práctica 2026",
      en: "What is an AI sales agent? Practical guide 2026",
    },
    description: {
      es: "Un agente de IA para ventas no es un chatbot. Entiende qué es, cómo funciona, qué puede hacer por tu equipo comercial y cuánto cuesta implementar uno.",
      en: "An AI sales agent is not a chatbot. Understand what it is, how it works, what it can do for your sales team, and how much it costs to implement.",
    },
    author: "Edwin Moreno",
    date: { es: "24 de marzo, 2026", en: "March 24, 2026" },
    dateISO: "2026-03-24",
    readTime: { es: "6 min", en: "6 min" },
  },
  {
    slug: "automatizacion-marketing-ia-2026",
    tag: { es: "Marketing IA", en: "AI Marketing" },
    title: {
      es: "Automatización de marketing con IA en 2026: qué funciona y qué no",
      en: "AI marketing automation in 2026: what works and what doesn't",
    },
    description: {
      es: "Guía práctica de automatización de marketing con inteligencia artificial. Contenido, distribución, lead nurturing y análisis — qué automatizar y qué no.",
      en: "Practical guide to AI marketing automation. Content, distribution, lead nurturing, and analysis — what to automate and what not to.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "24 de marzo, 2026", en: "March 24, 2026" },
    dateISO: "2026-03-24",
    readTime: { es: "7 min", en: "7 min" },
  },
  {
    slug: "5-senales-equipo-ventas-listo-ia",
    tag: { es: "Ventas con IA", en: "AI Sales" },
    title: {
      es: "5 señales de que tu equipo de ventas está listo para IA",
      en: "5 signs your sales team is ready for AI",
    },
    description: {
      es: "¿Tu equipo de ventas está preparado para implementar agentes de IA? Estas 5 señales te dicen si es el momento — y qué hacer si no lo es todavía.",
      en: "Is your sales team prepared to implement AI agents? These 5 signals tell you if it's the right moment — and what to do if it's not yet.",
    },
    author: "Edwin Moreno",
    date: { es: "9 de abril, 2026", en: "April 9, 2026" },
    dateISO: "2026-04-09",
    readTime: { es: "5 min", en: "5 min" },
  },
  {
    slug: "n8n-vs-make-vs-zapier-agentes-ia-2026",
    draft: true,
    tag: { es: "Automatización IA", en: "AI Automation" },
    title: {
      es: "n8n vs Make vs Zapier para agentes de IA en 2026: la comparativa honesta",
      en: "n8n vs Make vs Zapier for AI agents in 2026: the honest comparison",
    },
    description: {
      es: "Comparativa honesta de n8n, Make y Zapier para construir agentes de IA en equipos B2B. Cuál elegir según tu caso de uso, presupuesto y equipo técnico.",
      en: "Honest comparison of n8n, Make, and Zapier for building AI agents in B2B teams. Which to choose based on your use case, budget, and technical team.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "14 de abril, 2026", en: "April 14, 2026" },
    dateISO: "2026-04-14",
    readTime: { es: "8 min", en: "8 min" },
  },
  {
    slug: "gohighlevel-vs-hubspot-ventas-ia",
    draft: true,
    tag: { es: "CRM + IA", en: "CRM + AI" },
    title: {
      es: "GoHighLevel vs HubSpot para equipos de ventas con IA: la comparativa definitiva 2026",
      en: "GoHighLevel vs HubSpot for AI-powered sales teams: the definitive 2026 comparison",
    },
    description: {
      es: "Comparativa completa de GoHighLevel y HubSpot para equipos de ventas B2B que implementan IA. Cuál elegir según tu tamaño, presupuesto y stack de automatización.",
      en: "Full comparison of GoHighLevel and HubSpot for B2B sales teams implementing AI. Which to choose based on your size, budget, and automation stack.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "21 de abril, 2026", en: "April 21, 2026" },
    dateISO: "2026-04-21",
    readTime: { es: "9 min", en: "9 min" },
  },
  {
    slug: "automatizar-seguimiento-leads-ia",
    draft: true,
    tag: { es: "Automatización de Ventas", en: "Sales Automation" },
    title: {
      es: "Cómo automatizar el seguimiento de leads con IA: guía completa 2026",
      en: "How to automate lead follow-up with AI: complete guide 2026",
    },
    description: {
      es: "Guía práctica para automatizar el seguimiento de leads con agentes de IA. Reduce el tiempo de respuesta de horas a minutos y cierra más oportunidades con menos esfuerzo manual.",
      en: "Practical guide to automating lead follow-up with AI agents. Reduce response time from hours to minutes and close more deals with less manual effort.",
    },
    author: "Edwin Moreno",
    date: { es: "28 de abril, 2026", en: "April 28, 2026" },
    dateISO: "2026-04-28",
    readTime: { es: "10 min", en: "10 min" },
  },
  {
    slug: "velocidad-respuesta-ventas-b2b-ia",
    draft: true,
    tag: { es: "Ventas B2B con IA", en: "B2B Sales with AI" },
    title: {
      es: "Velocidad de respuesta en ventas B2B: el impacto real de la IA en 2026",
      en: "B2B sales response speed: the real impact of AI in 2026",
    },
    description: {
      es: "La velocidad de respuesta es el factor #1 en la tasa de conversión B2B. Descubre cómo la IA reduce el tiempo de respuesta de horas a minutos con impacto real en ventas.",
      en: "Response speed is the #1 factor in B2B conversion rates. Discover how AI reduces response time from hours to minutes with real sales impact.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "5 de mayo, 2026", en: "May 5, 2026" },
    dateISO: "2026-05-05",
    readTime: { es: "9 min", en: "9 min" },
  },
  {
    slug: "generacion-leads-b2b-inteligencia-artificial",
    draft: true,
    tag: { es: "Generación de Demanda B2B", en: "B2B Demand Generation" },
    title: {
      es: "Generación de leads B2B con inteligencia artificial: guía completa 2026",
      en: "B2B lead generation with artificial intelligence: complete guide 2026",
    },
    description: {
      es: "Canales, automatización, calificación y casos reales de generación de leads B2B con IA. Cómo empresas en México, España y Colombia generan más leads con menos esfuerzo manual.",
      en: "Channels, automation, qualification, and real cases of B2B lead generation with AI. How companies in Mexico, Spain, and Colombia generate more leads with less manual effort.",
    },
    author: "Edwin Moreno",
    date: { es: "12 de mayo, 2026", en: "May 12, 2026" },
    dateISO: "2026-05-12",
    readTime: { es: "11 min", en: "11 min" },
  },
  {
    slug: "agentes-marketing-email-pyme",
    draft: true,
    tag: { es: "Email Marketing con IA", en: "Email Marketing with AI" },
    title: {
      es: "Agentes de marketing por email para PYME: guía práctica 2026",
      en: "AI email marketing agents for SMBs: practical guide 2026",
    },
    description: {
      es: "Cómo las PYME usan agentes de IA para automatizar el email marketing: bienvenidas, nurturing, reactivación y upsell. Más conversiones, menos tiempo manual.",
      en: "How SMBs use AI agents to automate email marketing: welcome sequences, nurturing, reactivation, and upsell. More conversions, less manual time.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "19 de mayo, 2026", en: "May 19, 2026" },
    dateISO: "2026-05-19",
    readTime: { es: "10 min", en: "10 min" },
  },
  {
    slug: "propuestas-ventas-automatizadas-ia",
    draft: true,
    tag: { es: "Automatización Comercial", en: "Sales Automation" },
    title: {
      es: "Propuestas de ventas automatizadas con IA: más cierres, menos tiempo en 2026",
      en: "Automated sales proposals with AI: more closes, less time in 2026",
    },
    description: {
      es: "Cómo automatizar la creación de propuestas comerciales con IA: de horas a minutos, con personalización real por cliente. 85% menos tiempo de preparación.",
      en: "How to automate sales proposal creation with AI: from hours to minutes, with real per-client personalization. 85% less preparation time.",
    },
    author: "Edwin Moreno",
    date: { es: "26 de mayo, 2026", en: "May 26, 2026" },
    dateISO: "2026-05-26",
    readTime: { es: "9 min", en: "9 min" },
  },
  {
    slug: "integracion-crm-ia-ventas",
    draft: true,
    tag: { es: "CRM + IA", en: "CRM + AI" },
    title: {
      es: "Integración CRM con IA para ventas B2B: guía completa 2026",
      en: "CRM integration with AI for B2B sales: complete guide 2026",
    },
    description: {
      es: "Cómo integrar IA en tu CRM para enriquecer datos, calificar leads, automatizar outreach y alertar al equipo en el momento correcto. GoHighLevel, HubSpot, Salesforce y Pipedrive.",
      en: "How to integrate AI into your CRM to enrich data, qualify leads, automate outreach, and alert the team at the right moment. GoHighLevel, HubSpot, Salesforce, and Pipedrive.",
    },
    author: "Jorge Herrera Cruz",
    date: { es: "2 de junio, 2026", en: "June 2, 2026" },
    dateISO: "2026-06-02",
    readTime: { es: "10 min", en: "10 min" },
  },
  {
    slug: "ia-equipos-ventas-pequenos",
    draft: true,
    tag: { es: "Ventas con IA", en: "AI Sales" },
    title: {
      es: "IA para equipos de ventas pequeños: por dónde empezar en 2026",
      en: "AI for small sales teams: where to start in 2026",
    },
    description: {
      es: "Guía práctica para equipos de ventas de 1 a 5 personas que quieren implementar IA sin complejidad técnica ni grandes presupuestos. Los 3 primeros pasos que generan impacto inmediato.",
      en: "Practical guide for sales teams of 1–5 people who want to implement AI without technical complexity or big budgets. The 3 first steps that generate immediate impact.",
    },
    author: "Edwin Moreno",
    date: { es: "9 de junio, 2026", en: "June 9, 2026" },
    dateISO: "2026-06-09",
    readTime: { es: "8 min", en: "8 min" },
  },
];
