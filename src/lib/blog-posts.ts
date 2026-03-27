export interface BlogPost {
  slug: string;
  tag: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  author: string;
  date: { es: string; en: string };
  dateISO: string;
  readTime: { es: string; en: string };
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
];
