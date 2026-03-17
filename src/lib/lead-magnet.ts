// ─── Types ────────────────────────────────────────────────────────────────────

// ── Extra section types (optional, only for lead magnets that need them) ──────

export interface SectionOpportunity {
  type: "opportunity";
  title: string;
  subtitle?: string;
  /** Each row: exactly 3 cells */
  tableRows: [string, string, string][];
}

export interface SectionChangelog {
  type: "changelog";
  title: string;
  items: { icon: string; title: string; description: string }[];
}

export interface SectionAgents {
  type: "agents";
  title: string;
  agents: { icon: string; name: string; role: string; description: string }[];
}

export type LeadMagnetSection =
  | SectionOpportunity
  | SectionChangelog
  | SectionAgents;

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
}

export interface IncludesItem {
  icon: string;       // emoji or short text icon
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  url?: string;
}

export interface LeadMagnetSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface LeadMagnetContent {
  badge?: string;
  headline: string;
  /** Words to highlight with the brand gradient inside the headline */
  highlightWords?: string;
  subheadline: string;
  bullets: string[];
  includes: IncludesItem[];
  techStack: TechStackItem[];
  form: {
    fields: FormFieldConfig[];
    ctaLabel: string;
    microcopy?: string;
  };
  success: {
    title: string;
    description?: string;
    ctaLabel: string;
  };
  /** Optional custom CTA headline (split into plain + highlighted part) */
  ctaHeadline?: string;
  ctaHighlight?: string;
  /** Extra sections rendered between "Qué incluye" and "Stack técnico" */
  extraSections?: LeadMagnetSection[];
}

export interface LeadMagnetConfig {
  /** Used as the `lead_magnet` field in the API payload */
  slug: string;
  source: string;
  campaign: string;
  seo: LeadMagnetSEO;
  content: LeadMagnetContent;
}

// ─── Registry — built at the bottom of this file once all configs are defined ──

// Forward declaration — value is assigned after all configs are defined below.
// Do NOT use this directly during module init; use getLeadMagnetConfig() instead.
export let ALL_LEAD_MAGNETS: Record<string, LeadMagnetConfig> = {};

export function getLeadMagnetConfig(slug: string): LeadMagnetConfig | undefined {
  return ALL_LEAD_MAGNETS[slug];
}

// ─── Signals LinkedIn Config ──────────────────────────────────────────────────

export const signalsLinkedinConfig: LeadMagnetConfig = {
  slug: "signals-linkedin",
  source: "signals-linkedin",
  campaign: "signals-linkedin",

  seo: {
    title: "Agente de Ventas IA — Señales LinkedIn | VeryMuch.ai",
    description:
      "Blueprint completo para construir un sistema de ventas basado en señales de LinkedIn con Trigify, Claude Code y n8n. Gratis.",
    ogTitle:
      "Construye un Agente de Ventas IA que detecta intención real en LinkedIn",
    ogDescription:
      "Blueprint completo: convierte señales de engagement en outreach personalizado automático. Stack real · costes detallados · workflow n8n nodo por nodo.",
  },

  content: {
    badge: "Blueprint Gratuito",
    headline: "Construye un Agente de Ventas IA que detecta intención real en LinkedIn",
    highlightWords: "intención real en LinkedIn",
    subheadline:
      "Blueprint completo para convertir señales de engagement en outreach personalizado automático usando Trigify, Claude Code y n8n.",
    bullets: [
      "Monitorización 24/7 de señales de LinkedIn",
      "Scoring automático contra tu ICP",
      "Generación de outreach personalizado basado en la señal exacta",
      "Workflow completo en n8n (nodo por nodo)",
      "Stack real + costes detallados",
    ],
    includes: [
      {
        icon: "🗺️",
        title: "Flujo completo en n8n",
        description: "12+ nodos documentados paso a paso, listos para importar.",
      },
      {
        icon: "🎯",
        title: "Sistema de scoring ICP",
        description: "Ficha de puntuación para calificar señales contra tu cliente ideal.",
      },
      {
        icon: "✉️",
        title: "Plantillas de outreach",
        description: "5 mensajes personalizados por tipo de señal, generados con Claude.",
      },
      {
        icon: "⚙️",
        title: "Stack técnico detallado",
        description: "Costos reales, límites de API y configuración de cada herramienta.",
      },
      {
        icon: "🚀",
        title: "Guía de implementación",
        description: "De cero a sistema funcionando en un fin de semana.",
      },
    ],
    techStack: [
      {
        name: "Trigify",
        role: "Detección y tracking de señales de LinkedIn en tiempo real.",
        url: "https://trigify.io",
      },
      {
        name: "Claude Code",
        role: "Generación de outreach hiper-personalizado con IA de Anthropic.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación y automatización de todo el workflow, self-hosteable.",
        url: "https://n8n.io",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir el Blueprint",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu Blueprint está listo 🎉",
      description:
        "Accede ahora a la guía completa. Encontrarás el flujo n8n, el sistema de scoring y todas las plantillas.",
      ctaLabel: "Abrir la guía →",
    },
  },
};

// ─── Equipo de Ventas IA en 30 Minutos Config ─────────────────────────────────

export const equipoVentasIa30minConfig: LeadMagnetConfig = {
  slug: "equipo-ventas-ia-30min",
  source: "equipo-ventas-ia-30min",
  campaign: "equipo-ventas-ia-30min",

  seo: {
    title: "Equipo de Ventas IA en 30 Min — Opus 4.6 | VeryMuch.ai",
    description:
      "Guía completa para montar 4 agentes IA en paralelo con Claude Opus 4.6: investigar, analizar, escribir y coordinar. Gratis.",
    ogTitle:
      "Monta tu Equipo de Ventas IA en 30 Minutos con Claude Opus 4.6",
    ogDescription:
      "Agent Teams con Opus 4.6: 4 agentes IA en paralelo, 1M tokens de contexto, sin código complejo. Descarga la guía gratuita.",
  },

  content: {
    badge: "NUEVO · OPUS 4.6 · LANZADO FEB 2026",
    headline: "Monta tu Equipo de Ventas IA en 30 Minutos",
    highlightWords: "Equipo de Ventas IA en 30 Minutos",
    subheadline:
      "Usando Opus 4.6 Agent Teams para ejecutar 4 agentes IA en paralelo — investigar, analizar, escribir y coordinar.",
    bullets: [
      "4 agentes IA trabajando en paralelo con Claude Opus 4.6",
      "Contexto de 1M de tokens: toda tu empresa en una sesión",
      "Sistema montado en 30 minutos sin código complejo",
      "Roles definidos: Investigador, Analista, Escritor, Coordinador",
      "Configuración completa con costes reales incluida",
    ],
    includes: [
      {
        icon: "📋",
        title: "Configuración de 4 agentes",
        description: "Prompts system listos para copiar, ajustar y lanzar de inmediato.",
      },
      {
        icon: "⚡",
        title: "Workflow de coordinación",
        description: "Cómo los 4 agentes colaboran entre sí sin bloquearse.",
      },
      {
        icon: "💰",
        title: "Estimación de costes reales",
        description: "Tokens, llamadas API y límites de Opus 4.6 documentados.",
      },
      {
        icon: "🎯",
        title: "Casos de uso concretos",
        description: "Prospecting, nurturing y cierre con ejemplos de output real.",
      },
      {
        icon: "🚀",
        title: "Guía paso a paso",
        description: "De cero a equipo funcionando en menos de 30 minutos.",
      },
    ],
    techStack: [
      {
        name: "Claude Opus 4.6",
        role: "Motor de los 4 agentes. Agent Teams nativos con contexto de 1M tokens.",
        url: "https://anthropic.com",
      },
      {
        name: "Claude.ai",
        role: "Interfaz para lanzar y coordinar los agentes sin infraestructura.",
        url: "https://claude.ai",
      },
      {
        name: "n8n (opcional)",
        role: "Orquestación externa si quieres automatizar el flujo completo.",
        url: "https://n8n.io",
      },
    ],
    extraSections: [
      {
        type: "opportunity",
        title: "La oportunidad: Opus 4.6 ha cambiado las reglas del juego",
        subtitle:
          "Por primera vez, puedes tener 4 agentes IA especializados trabajando juntos en tu proceso de ventas — sin código, sin infra, en 30 minutos.",
        tableRows: [
          ["Modelo IA #1 del mundo", "Contexto de 1M de tokens", "4 agentes en paralelo"],
          ["Mejor puntuación global", "+750.000 palabras por sesión", "Trabajando juntos"],
        ],
      },
      {
        type: "changelog",
        title: "Qué ha cambiado con Opus 4.6",
        items: [
          {
            icon: "🤝",
            title: "Agent Teams nativos",
            description:
              "Lanza múltiples agentes Claude en paralelo desde una sola sesión. Cada uno con su rol, contexto y objetivo.",
          },
          {
            icon: "🧠",
            title: "1M de tokens de contexto",
            description:
              "Carga toda tu base de clientes, CRM, emails y transcripciones en una sola sesión sin perder contexto.",
          },
          {
            icon: "💡",
            title: "Pensamiento adaptativo",
            description:
              "Opus 4.6 decide cuándo razonar en profundidad y cuándo responder directo. Resultados más precisos, menos tokens desperdiciados.",
          },
          {
            icon: "🗜️",
            title: "Compactación de contexto",
            description:
              "Cuando el contexto crece, Opus 4.6 lo comprime automáticamente para que el equipo nunca pierda el hilo de la conversación.",
          },
        ],
      },
      {
        type: "agents",
        title: "Tu equipo de ventas IA con 4 agentes",
        agents: [
          {
            icon: "🔍",
            name: "Investigador",
            role: "Recopila intel",
            description:
              "Analiza el perfil del prospecto, su empresa, noticias recientes y señales de compra en LinkedIn y web.",
          },
          {
            icon: "📊",
            name: "Analista",
            role: "Califica y puntúa",
            description:
              "Evalúa el fit con tu ICP, prioriza leads por potencial y genera un scorecard por cada prospecto.",
          },
          {
            icon: "✍️",
            name: "Escritor",
            role: "Genera outreach",
            description:
              "Crea mensajes personalizados basados en la señal exacta del prospecto. Tono, contexto y CTA afinados.",
          },
          {
            icon: "🎯",
            name: "Coordinador",
            role: "Orquesta el equipo",
            description:
              "Gestiona el flujo entre los 3 agentes, consolida resultados y entrega el output final listo para enviar.",
          },
        ],
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar la guía gratis",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu guía está lista 🎉",
      description:
        "Accede ahora a la configuración completa de los 4 agentes, los prompts y la estimación de costes.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Monta tu equipo de ventas IA",
    ctaHighlight: "hoy mismo",
  },
};

// ─── Agente IA de Investigación Comercial Config ──────────────────────────────

export const agenteInvestigacionComercialConfig: LeadMagnetConfig = {
  slug: "agente-investigacion-comercial",
  source: "agente-investigacion-comercial",
  campaign: "agente-investigacion-comercial",

  seo: {
    title: "Agente IA de Investigación Comercial — Guía Completa | VeryMuch.ai",
    description:
      "Guía paso a paso para construir un agente IA que investiga empresas en tiempo real y genera briefings comerciales completos con DAFO, MEDDPICC y outreach personalizado. Gratis.",
    ogTitle:
      "Construye un Agente IA que investiga cualquier empresa y genera briefings comerciales en minutos",
    ogDescription:
      "Guía completa: de un nombre de empresa a un briefing comercial con análisis DAFO, scoring MEDDPICC, puntos de conversación y próximos pasos. Stack real + implementación paso a paso.",
  },

  content: {
    badge: "Guía Gratuita",
    headline:
      "Construye un Agente IA de Investigación Comercial que genera briefings en minutos",
    highlightWords: "briefings en minutos",
    subheadline:
      "Guía completa para montar un sistema que investiga empresas en tiempo real usando IA y genera informes comerciales listos para vender.",
    bullets: [
      "Investigación automática de empresas con búsqueda web en tiempo real",
      "Análisis DAFO y scoring MEDDPICC generados por IA",
      "Puntos de conversación y manejo de objeciones personalizados",
      "Arquitectura completa: frontend + Supabase + n8n + Claude",
      "Listo para copiar, pegar y adaptar a tu negocio",
    ],
    includes: [
      {
        icon: "🔍",
        title: "Agente de investigación IA",
        description:
          "Investiga cualquier empresa usando búsqueda web en tiempo real y genera un perfil completo.",
      },
      {
        icon: "📊",
        title: "Briefing comercial completo",
        description:
          "Análisis DAFO, marco MEDDPICC, señales de compra y puntos de dolor identificados automáticamente.",
      },
      {
        icon: "💬",
        title: "Puntos de conversación",
        description:
          "Talking points personalizados, manejo de objeciones y próximos pasos listos para tu primera llamada.",
      },
      {
        icon: "⚙️",
        title: "Arquitectura paso a paso",
        description:
          "Frontend → Supabase → n8n → Claude. Cada componente explicado con configuración exacta.",
      },
      {
        icon: "🚀",
        title: "Guía de implementación",
        description:
          "De cero a sistema funcionando en ~1 hora. Nivel principiante, usa capa gratuita de todas las herramientas.",
      },
    ],
    techStack: [
      {
        name: "Claude",
        role: "Motor de IA para investigación y generación de briefings comerciales.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación del workflow: recibe webhook, ejecuta agente, actualiza resultados.",
        url: "https://n8n.io",
      },
      {
        name: "Supabase",
        role: "Base de datos intermedia: almacena solicitudes y resultados del agente.",
        url: "https://supabase.com",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Recibir la Guía",
      microcopy: "Gratis. Sin spam. Entrega inmediata.",
    },
    success: {
      title: "Tu guía está lista 🎉",
      description:
        "Accede ahora a la guía completa. Encontrarás la arquitectura, configuración de cada componente y el agente listo para implementar.",
      ctaLabel: "Abrir la guía →",
    },
  },
};

// ─── 20 Agentes IA para Estrategia Comercial B2B Config ──────────────────────

export const agentesIaB2bConfig: LeadMagnetConfig = {
  slug: "20-agentes-ia-b2b",
  source: "20-agentes-ia-b2b",
  campaign: "20-agentes-ia-b2b",

  seo: {
    title: "20 Agentes de IA para tu Estrategia Comercial B2B — Guía Completa | VeryMuch.ai",
    description:
      "Guía práctica con 20 agentes de IA listos para montar en tu equipo comercial B2B. Tech stack, paso a paso y resultados esperados para cada uno. Gratis.",
    ogTitle:
      "20 Agentes de IA que multiplican x10 los resultados de tu equipo comercial B2B",
    ogDescription:
      "Guía completa: 20 agentes de IA con tech stack, implementación paso a paso y resultados esperados. De principiante a intermedio, sin programar.",
  },

  content: {
    badge: "Guía Gratuita",
    headline: "20 Agentes de IA para multiplicar x10 tu Estrategia Comercial B2B",
    highlightWords: "multiplicar x10",
    subheadline:
      "Guía práctica con los 20 agentes de IA que un equipo comercial B2B puede usar hoy. Cada uno con tech stack, paso a paso y resultados esperados.",
    bullets: [
      "20 agentes de IA listos para implementar en tu pipeline comercial",
      "Tech stack detallado para cada agente (herramientas reales, no teoría)",
      "Paso a paso para montarlos sin saber programar",
      "Resultados esperados y métricas por cada agente",
      "De prospección a cierre: agentes para cada etapa del funnel",
    ],
    includes: [
      {
        icon: "🎯",
        title: "Agentes de prospección",
        description:
          "Investigación, scoring, señales de compra y enriquecimiento de datos automatizados.",
      },
      {
        icon: "✉️",
        title: "Agentes de outreach",
        description:
          "Cold email personalizado, secuencias multi-canal y follow-up inteligente.",
      },
      {
        icon: "📊",
        title: "Agentes de inteligencia",
        description:
          "CRM hygiene, briefings pre-llamada, análisis competitivo y reporting automático.",
      },
      {
        icon: "🤝",
        title: "Agentes de conversión",
        description:
          "Nurturing, propuestas automáticas, onboarding y gestión de pipeline.",
      },
      {
        icon: "⚙️",
        title: "Tech stack por agente",
        description:
          "Herramientas exactas, costes estimados y nivel de dificultad para cada implementación.",
      },
    ],
    techStack: [
      {
        name: "Claude",
        role: "Motor de IA para investigación, análisis y generación de contenido comercial.",
        url: "https://anthropic.com",
      },
      {
        name: "n8n",
        role: "Orquestación de workflows para automatizar cada agente de principio a fin.",
        url: "https://n8n.io",
      },
      {
        name: "Clay",
        role: "Enriquecimiento de datos y prospección a escala.",
        url: "https://clay.com",
      },
      {
        name: "Instantly",
        role: "Infraestructura de cold email con calentamiento automático.",
        url: "https://instantly.ai",
      },
    ],
    form: {
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          placeholder: "tu@empresa.com",
          required: true,
        },
        {
          name: "company",
          label: "Empresa (opcional)",
          type: "text",
          placeholder: "Tu empresa",
          required: false,
        },
      ],
      ctaLabel: "Descargar la Guía",
      microcopy: "Gratis. Sin spam. Los 20 agentes en tu bandeja.",
    },
    success: {
      title: "¡Tu guía con 20 agentes está lista! 🤖",
      description:
        "Accede ahora a la guía completa. Encontrarás cada agente con su tech stack, implementación y resultados esperados.",
      ctaLabel: "Abrir la guía →",
    },
    ctaHeadline: "Empieza a desplegar tus",
    ctaHighlight: "20 agentes comerciales",
  },
};

// ─── Build registry — single immutable assignment, all configs present ─────────
// Adding a new lead magnet: just append it to this array. No other changes needed.

const _ALL_CONFIGS: LeadMagnetConfig[] = [
  signalsLinkedinConfig,
  equipoVentasIa30minConfig,
  agenteInvestigacionComercialConfig,
  agentesIaB2bConfig,
];

ALL_LEAD_MAGNETS = Object.fromEntries(_ALL_CONFIGS.map((c) => [c.slug, c]));
