// ─── Types ────────────────────────────────────────────────────────────────────

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
}

export interface LeadMagnetConfig {
  /** Used as the `lead_magnet` field in the API payload */
  slug: string;
  source: string;
  campaign: string;
  seo: LeadMagnetSEO;
  content: LeadMagnetContent;
}

// ─── Signals LinkedIn Config ──────────────────────────────────────────────────

export const signalsLinkedinConfig: LeadMagnetConfig = {
  slug: "signals-linkedin",
  source: "linkedin",
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
          name: "firstName",
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
