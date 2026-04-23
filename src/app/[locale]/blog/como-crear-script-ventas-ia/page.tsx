import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface StatCard {
  value: string;
  label: string;
}
interface StepItem {
  number: string;
  title: string;
  body: string;
}
interface ExampleItem {
  label: string;
  text: string;
}
interface FAQItem {
  q: string;
  a: string;
}
interface PageContent {
  meta: { title: string; description: string };
  breadcrumb: { home: string; blog: string; current: string };
  tag: string;
  hero: { title: string; subtitle: string };
  intro: string;
  stats: StatCard[];
  stats_label: string;
  section_why: { heading: string; body: string };
  steps: { heading: string; items: StepItem[] };
  examples: { heading: string; intro: string; items: ExampleItem[] };
  mistakes: { heading: string; items: { title: string; body: string }[] };
  results: { heading: string; body: string; items: string[] };
  faq: { heading: string; items: FAQItem[] };
  cta: {
    heading: string;
    body: string;
    primary: string;
    secondary: string;
    secondaryHref: string;
  };
  author: {
    name: string;
    role: string;
    bio: string;
    href: string;
  };
  published: string;
  dateISO: string;
  readTime: string;
}

/* ─── Content ────────────────────────────────────────────────────────────── */
const CONTENT: Record<string, PageContent> = {
  es: {
    meta: {
      title:
        "Cómo crear un script de ventas con IA: guía práctica 2026 | VeryMuch.ai",
      description:
        "Guía paso a paso para crear scripts de ventas con IA que se adaptan al cliente, superan objeciones y aumentan la tasa de cierre. Con ejemplos reales y plantillas para llamadas, WhatsApp y email.",
    },
    breadcrumb: {
      home: "Inicio",
      blog: "Blog",
      current: "Script de ventas con IA",
    },
    tag: "Ventas con IA",
    hero: {
      title: "Cómo crear un script de ventas con IA: guía práctica 2026",
      subtitle:
        "Scripts que se adaptan al cliente, superan objeciones en tiempo real y aumentan la tasa de cierre. Con ejemplos y plantillas para llamadas, WhatsApp y email.",
    },
    intro:
      "Un script de ventas mal diseñado mata conversaciones antes de que empiecen. Los scripts genéricos suenan a robot, generan fricción y hacen que los prospectos cuelguen a los 30 segundos. La IA no solo ayuda a escribir mejores scripts — permite crear sistemas de scripts dinámicos que se adaptan al perfil del cliente, el canal, la objeción y el momento del ciclo de compra. En 2026, los equipos B2B que combinan IA con metodología de ventas estructurada cierran hasta un 34% más que los que usan scripts estáticos. Esta guía te explica exactamente cómo hacerlo.",
    stats: [
      { value: "34%", label: "Más cierres con scripts dinámicos vs. scripts estáticos en B2B" },
      { value: "2.7×", label: "Más engagement en llamadas con apertura personalizada por IA" },
      { value: "58%", label: "De los prospectos responden mejor a mensajes adaptados a su industria" },
      { value: "< 2 h", label: "Para crear un sistema completo de scripts con IA desde cero" },
    ],
    stats_label: "Impacto de scripts con IA en ventas B2B — datos reales",
    section_why: {
      heading: "Por qué los scripts tradicionales fallan (y qué hace diferente a la IA)",
      body: "El problema con los scripts tradicionales no es el formato — es que son estáticos. Fueron escritos para un cliente promedio que no existe. Cuando un prospecto dice 'no tenemos presupuesto ahora', el vendedor que sigue el script estático responde con el mismo párrafo que usa con todos. La IA permite crear scripts que detectan el patrón de objeción, el tono del prospecto, la industria, el tamaño de empresa y el momento en el ciclo de compra — y generan la respuesta óptima para ese contexto específico. No es magia: es metodología de ventas (SPIN, Sandler, MEDDIC, Challenger) codificada en prompts que la IA ejecuta en tiempo real.",
    },
    steps: {
      heading: "Los 5 pasos para crear tu script de ventas con IA",
      items: [
        {
          number: "01",
          title: "Define el contexto y el ICP (Ideal Customer Profile)",
          body: "Antes de escribir una sola línea, la IA necesita contexto. Documenta: ¿A quién llamas? (industria, tamaño, cargo). ¿Qué problema resuelves? ¿Cuál es la propuesta de valor diferencial? ¿Cuáles son las 5 objeciones más comunes? Este documento de contexto es el 'sistema de instrucciones' que le das a la IA para generar scripts coherentes con tu realidad. Sin este paso, la IA producirá scripts genéricos que no reflejan tu producto ni tu mercado.",
        },
        {
          number: "02",
          title: "Elige la metodología de ventas y codifícala en prompts",
          body: "La IA no inventa metodología — la ejecuta. Decide qué framework usas: SPIN (situación, problema, implicación, necesidad), Challenger (enseñar, customizar, controlar), o MEDDIC (métricas, economic buyer, dolor, impacto, competidor, campeón). Luego traduce los principios de ese framework en instrucciones para la IA: 'En la fase de descubrimiento, usa preguntas de implicación antes de proponer soluciones. Nunca ofrezcas el precio antes de establecer el dolor cuantificado.' Esta capa de metodología es lo que separa un script de IA mediocre de uno que realmente cierra.",
        },
        {
          number: "03",
          title: "Crea el esqueleto del script por canal",
          body: "Los scripts varían según el canal. Para llamadas en frío: apertura de 15 segundos, gancho de relevancia, pregunta de calificación, puente hacia la reunión. Para WhatsApp: mensaje de menos de 60 palabras, tono conversacional, una sola CTA clara. Para email: asunto de menos de 50 caracteres, primera línea que no empiece por 'me llamo', propuesta de valor en las primeras 2 líneas, CTA de bajo compromiso. Crea un prompt para cada canal que incluya el formato, el tono, la longitud y la estructura esperada. La IA generará variantes coherentes dentro de esas restricciones.",
        },
        {
          number: "04",
          title: "Añade manejo de objeciones dinámico",
          body: "Esta es la parte más poderosa. Crea una biblioteca de objeciones con la respuesta óptima para cada una, basada en tu historial de ventas real. Objeciones comunes en B2B: 'No tenemos presupuesto', 'Ya tenemos un proveedor', 'No es el momento', 'Necesito consultarlo con mi equipo', 'Envíame información'. Para cada objeción, escribe la respuesta que históricamente ha funcionado mejor. Luego instruye a la IA: cuando el prospecto diga X, usa esta respuesta como base y adáptala al contexto de la conversación. El resultado es un script que nunca se queda sin respuesta.",
        },
        {
          number: "05",
          title: "Prueba, mide y refina con retroalimentación real",
          body: "Un script de IA no es un documento estático — es un sistema vivo. Después de cada ciclo de llamadas, analiza: ¿En qué punto se perdían las conversaciones? ¿Qué objeciones surgieron que no estaban en la biblioteca? ¿Qué aperturas generaron más engagement? Alimenta esos aprendizajes de vuelta al sistema de prompts. En 4–6 semanas de iteración, tendrás un script significativamente más efectivo que cualquier script estático que hayas usado antes. Esta retroalimentación continua es imposible con scripts manuales — con IA, es el flujo de trabajo estándar.",
        },
      ],
    },
    examples: {
      heading: "Ejemplos reales: scripts generados con IA",
      intro: "Estos son ejemplos de salidas que un sistema de IA bien configurado genera para diferentes canales:",
      items: [
        {
          label: "Llamada en frío — Apertura (SaaS B2B, CEO como ICP)",
          text: "\"Hola [Nombre], soy Edwin de VeryMuch. Trabajo con CEOs de empresas de servicios de 10–50 personas en México que están perdiendo deals porque su equipo no puede responder leads en menos de 5 minutos. ¿Ese es un problema que reconoces en tu operación?\"",
        },
        {
          label: "WhatsApp — Primer contacto post-evento",
          text: "\"Hola [Nombre], fue un placer coincidir en [Evento]. Trabajo con empresas como [Referencia similar] automatizando su proceso de calificación de leads con IA — redujeron el tiempo de respuesta de 4 horas a 3 minutos. ¿Tiene sentido hablar 20 minutos esta semana?\"",
        },
        {
          label: "Email — Objeción 'no tenemos presupuesto'",
          text: "\"[Nombre], entiendo perfectamente. La mayoría de nuestros clientes dijeron lo mismo antes de ver los números. En [Empresa similar], automatizar la calificación de leads les generó 3 cierres adicionales en el primer mes — que cubrieron el coste de la herramienta con un ROI de 4×. ¿Vale la pena dedicar 15 minutos a ver si los números tienen sentido para ustedes también?\"",
        },
      ],
    },
    mistakes: {
      heading: "Los 4 errores más comunes al crear scripts con IA",
      items: [
        {
          title: "Pedir a la IA que 'cree el script' sin contexto",
          body: "Sin el documento de contexto (ICP, propuesta de valor, objeciones, metodología), la IA generará algo genérico que sonará exactamente igual a los scripts de todos tus competidores. El contexto es el input que hace la diferencia.",
        },
        {
          title: "No adaptar el tono por canal",
          body: "Un script de llamada en frío trasplantado a WhatsApp es demasiado largo y formal. Un email con el tono de WhatsApp se ve poco profesional. La IA puede adaptar el tono — pero necesita instrucciones explícitas sobre las restricciones de cada canal.",
        },
        {
          title: "Leer el script literalmente en llamadas",
          body: "El script es un marco de referencia, no un teleprompter. Los mejores vendedores usan el script para estructurar la conversación, pero hablan con sus propias palabras. Si el prospecto nota que estás leyendo, la conversación muere.",
        },
        {
          title: "No actualizar el sistema de objeciones",
          body: "El mercado cambia. Las objeciones del Q1 no son las mismas del Q3. Un script de IA sin actualización periódica pierde efectividad. Revisa y actualiza la biblioteca de objeciones al menos una vez al trimestre.",
        },
      ],
    },
    results: {
      heading: "Resultados esperados en los primeros 60 días",
      body: "Equipos B2B que implementan scripts dinámicos con IA reportan consistentemente:",
      items: [
        "Semana 1–2: Scripts base listos para los 3 canales principales. Primeras llamadas con el nuevo sistema.",
        "Semana 3–4: Biblioteca de objeciones completa con respuestas validadas. Reducción visible en calls perdidas por falta de respuesta a objeciones.",
        "Mes 2: Datos suficientes para la primera iteración mayor. Scripts 30–40% más efectivos que la versión inicial.",
        "KPI principal: Tasa de conversión de primer contacto a reunión agendada (benchmark B2B: 8–15%; con scripts de IA: 18–25%).",
        "KPI secundario: Tasa de respuesta a objeciones que resultan en 'continuar la conversación' vs. cierre del prospecto.",
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué herramienta de IA es mejor para crear scripts de ventas?",
          a: "Claude (Anthropic) y GPT-4 son los más usados por su capacidad de mantener contexto largo y seguir instrucciones complejas. Para uso en tiempo real durante llamadas, herramientas como Loom AI o Gong pueden transcribir y sugerir respuestas en vivo. Para generación de scripts en volumen, Claude API + N8N es la combinación más flexible y coste-eficiente.",
        },
        {
          q: "¿Cómo evito que el script suene robótico?",
          a: "La clave es el documento de contexto: incluye ejemplos del tono que usa tu equipo en conversaciones reales, frases que SÍ deben aparecer y frases que NUNCA deben aparecer. También ayuda instruir a la IA para que use contraccciones, preguntas abiertas y pausas conversacionales. El script debe sonar como una persona real hablando, no como copy de marketing.",
        },
        {
          q: "¿Puedo usar IA para generar scripts en tiempo real durante una llamada?",
          a: "Sí. Herramientas como Gong, Chorus, o integraciones personalizadas con Claude API pueden escuchar la llamada en tiempo real (con consentimiento) y sugerir respuestas a objeciones o preguntas de seguimiento según el contexto de la conversación. Esto es especialmente útil para vendedores nuevos que aún están construyendo su biblioteca de respuestas.",
        },
        {
          q: "¿Cuánto tarda en construirse un sistema completo de scripts?",
          a: "Con el documento de contexto bien preparado, generar los scripts base para 3 canales toma entre 2 y 4 horas. La biblioteca de objeciones requiere 1–2 horas adicionales. El tiempo de refinamiento (semanas 3–8) es continuo pero no intensivo — típicamente 1–2 horas semanales de revisión y actualización.",
        },
        {
          q: "¿Funcionan los scripts de IA para ventas de tickets altos (>$10,000)?",
          a: "Sí, especialmente en las fases de prospección y manejo de objeciones tempranas. En ventas enterprise con ciclos de 3–12 meses, el script de IA es más útil para las primeras interacciones (calificación, primera reunión) que para el cierre, que sigue siendo profundamente humano. La combinación óptima: IA para volumen y consistencia en las primeras etapas; humano para relación y negociación en las finales.",
        },
      ],
    },
    cta: {
      heading: "¿Quieres que creemos tu sistema de scripts con IA?",
      body: "En VeryMuch diseñamos sistemas de scripts dinámicos adaptados a tu ICP, metodología y canales. Incluye entrenamiento del equipo de ventas y seguimiento de resultados en 90 días.",
      primary: "Agendar diagnóstico gratuito",
      secondary: "Ver cómo automatizar tu seguimiento de leads →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-fundador, VeryMuch.ai",
      bio: "Experto en automatización de procesos y agentes de IA para revenue operations. Mencionado en Forbes México. Speaker TEDx en productividad e IA. Lidera la implementación de agentes de IA en equipos comerciales B2B en México, España y Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "16 de junio, 2026",
    dateISO: "2026-06-16",
    readTime: "9 min",
  },

  en: {
    meta: {
      title:
        "How to Create an AI Sales Script: Practical Guide 2026 | VeryMuch.ai",
      description:
        "Step-by-step guide to creating AI sales scripts that adapt to the customer, overcome objections, and increase close rates. With real examples and templates for calls, WhatsApp, and email.",
    },
    breadcrumb: {
      home: "Home",
      blog: "Blog",
      current: "AI sales script",
    },
    tag: "AI Sales",
    hero: {
      title: "How to create an AI sales script: practical guide 2026",
      subtitle:
        "Scripts that adapt to the customer, overcome objections in real time, and increase close rates. With examples and templates for calls, WhatsApp, and email.",
    },
    intro:
      "A poorly designed sales script kills conversations before they start. Generic scripts sound robotic, generate friction, and make prospects hang up within 30 seconds. AI doesn't just help write better scripts — it allows you to create dynamic script systems that adapt to the customer's profile, channel, objection, and stage in the buying cycle. In 2026, B2B teams that combine AI with structured sales methodology close up to 34% more than those using static scripts. This guide explains exactly how to do it.",
    stats: [
      { value: "34%", label: "More closes with dynamic vs. static scripts in B2B" },
      { value: "2.7×", label: "More engagement on calls with AI-personalized opening" },
      { value: "58%", label: "Of prospects respond better to messages adapted to their industry" },
      { value: "< 2 h", label: "To create a complete AI script system from scratch" },
    ],
    stats_label: "Impact of AI scripts in B2B sales — real data",
    section_why: {
      heading: "Why traditional scripts fail (and what makes AI different)",
      body: "The problem with traditional scripts is not the format — it's that they're static. They were written for an average customer that doesn't exist. When a prospect says 'we don't have budget right now', the rep following the static script responds with the same paragraph they use with everyone. AI allows creating scripts that detect the objection pattern, the prospect's tone, industry, company size, and stage in the buying cycle — and generate the optimal response for that specific context. It's not magic: it's sales methodology (SPIN, Sandler, MEDDIC, Challenger) coded into prompts that AI executes in real time.",
    },
    steps: {
      heading: "The 5 steps to create your AI sales script",
      items: [
        {
          number: "01",
          title: "Define the context and ICP (Ideal Customer Profile)",
          body: "Before writing a single line, AI needs context. Document: Who are you calling? (industry, size, role). What problem do you solve? What is the differential value proposition? What are the 5 most common objections? This context document is the 'instruction system' you give AI to generate scripts consistent with your reality. Without this step, AI will produce generic scripts that don't reflect your product or market.",
        },
        {
          number: "02",
          title: "Choose the sales methodology and encode it into prompts",
          body: "AI doesn't invent methodology — it executes it. Decide what framework you use: SPIN (situation, problem, implication, need), Challenger (teach, customize, control), or MEDDIC (metrics, economic buyer, pain, impact, competitor, champion). Then translate the principles of that framework into instructions for AI: 'In the discovery phase, use implication questions before proposing solutions. Never offer the price before establishing quantified pain.' This methodology layer is what separates a mediocre AI script from one that actually closes.",
        },
        {
          number: "03",
          title: "Create the script skeleton by channel",
          body: "Scripts vary by channel. For cold calls: 15-second opening, relevance hook, qualification question, bridge to the meeting. For WhatsApp: message under 60 words, conversational tone, one clear CTA. For email: subject under 50 characters, first line that doesn't start with 'my name is', value proposition in the first 2 lines, low-commitment CTA. Create a prompt for each channel that includes the format, tone, length, and expected structure. AI will generate coherent variants within those constraints.",
        },
        {
          number: "04",
          title: "Add dynamic objection handling",
          body: "This is the most powerful part. Create an objection library with the optimal response for each one, based on your real sales history. Common B2B objections: 'We don't have budget', 'We already have a vendor', 'It's not the right time', 'I need to consult with my team', 'Send me information'. For each objection, write the response that has historically worked best. Then instruct AI: when the prospect says X, use this response as a base and adapt it to the conversation context. The result is a script that never runs out of answers.",
        },
        {
          number: "05",
          title: "Test, measure, and refine with real feedback",
          body: "An AI script is not a static document — it's a living system. After each calling cycle, analyze: At what point were conversations being lost? What objections came up that weren't in the library? What openings generated the most engagement? Feed those learnings back into the prompt system. In 4–6 weeks of iteration, you'll have a script significantly more effective than any static script you've used before. This continuous feedback is impossible with manual scripts — with AI, it's the standard workflow.",
        },
      ],
    },
    examples: {
      heading: "Real examples: scripts generated with AI",
      intro: "These are examples of outputs that a well-configured AI system generates for different channels:",
      items: [
        {
          label: "Cold call — Opening (B2B SaaS, CEO as ICP)",
          text: "\"Hi [Name], I'm Edwin from VeryMuch. I work with CEOs of 10–50 person service companies in Mexico who are losing deals because their team can't respond to leads in under 5 minutes. Is that a problem you recognize in your operation?\"",
        },
        {
          label: "WhatsApp — First contact post-event",
          text: "\"Hi [Name], great meeting at [Event]. I work with companies like [Similar Reference] automating their lead qualification process with AI — they reduced response time from 4 hours to 3 minutes. Would it make sense to talk for 20 minutes this week?\"",
        },
        {
          label: "Email — Objection 'we don't have budget'",
          text: "\"[Name], I completely understand. Most of our clients said the same before seeing the numbers. At [Similar Company], automating lead qualification generated 3 additional closes in the first month — covering the tool cost with a 4× ROI. Is it worth dedicating 15 minutes to see if the numbers make sense for you too?\"",
        },
      ],
    },
    mistakes: {
      heading: "The 4 most common mistakes when creating AI scripts",
      items: [
        {
          title: "Asking AI to 'create the script' without context",
          body: "Without the context document (ICP, value proposition, objections, methodology), AI will generate something generic that will sound exactly like your competitors' scripts. Context is the input that makes the difference.",
        },
        {
          title: "Not adapting tone by channel",
          body: "A cold call script transplanted to WhatsApp is too long and formal. An email with WhatsApp tone looks unprofessional. AI can adapt tone — but needs explicit instructions about each channel's constraints.",
        },
        {
          title: "Reading the script literally on calls",
          body: "The script is a reference framework, not a teleprompter. The best sellers use the script to structure the conversation but speak in their own words. If the prospect notices you're reading, the conversation dies.",
        },
        {
          title: "Not updating the objection system",
          body: "The market changes. Q1 objections are not the same as Q3. An AI script without periodic updates loses effectiveness. Review and update the objection library at least once per quarter.",
        },
      ],
    },
    results: {
      heading: "Expected results in the first 60 days",
      body: "B2B teams implementing dynamic AI scripts consistently report:",
      items: [
        "Week 1–2: Base scripts ready for the 3 main channels. First calls with the new system.",
        "Week 3–4: Complete objection library with validated responses. Visible reduction in calls lost due to lack of objection responses.",
        "Month 2: Enough data for the first major iteration. Scripts 30–40% more effective than the initial version.",
        "Main KPI: Conversion rate from first contact to scheduled meeting (B2B benchmark: 8–15%; with AI scripts: 18–25%).",
        "Secondary KPI: Objection response rate that results in 'continue the conversation' vs. prospect closure.",
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "What AI tool is best for creating sales scripts?",
          a: "Claude (Anthropic) and GPT-4 are most widely used for their ability to maintain long context and follow complex instructions. For real-time use during calls, tools like Loom AI or Gong can transcribe and suggest live responses. For high-volume script generation, Claude API + N8N is the most flexible and cost-efficient combination.",
        },
        {
          q: "How do I prevent the script from sounding robotic?",
          a: "The key is the context document: include examples of the tone your team uses in real conversations, phrases that SHOULD appear, and phrases that should NEVER appear. It also helps to instruct AI to use contractions, open questions, and conversational pauses. The script should sound like a real person talking, not like marketing copy.",
        },
        {
          q: "Can I use AI to generate scripts in real time during a call?",
          a: "Yes. Tools like Gong, Chorus, or custom integrations with Claude API can listen to the call in real time (with consent) and suggest objection responses or follow-up questions based on the conversation context. This is especially useful for new reps still building their response library.",
        },
        {
          q: "How long does it take to build a complete script system?",
          a: "With the context document well prepared, generating the base scripts for 3 channels takes between 2 and 4 hours. The objection library requires an additional 1–2 hours. The refinement time (weeks 3–8) is continuous but not intensive — typically 1–2 hours weekly of review and updating.",
        },
        {
          q: "Do AI scripts work for high-ticket sales (>$10,000)?",
          a: "Yes, especially in the prospecting and early objection handling phases. In enterprise sales with 3–12 month cycles, AI scripts are most useful for the first interactions (qualification, first meeting) rather than closing, which remains deeply human. The optimal combination: AI for volume and consistency in early stages; human for relationship and negotiation in later ones.",
        },
      ],
    },
    cta: {
      heading: "Want us to build your AI script system?",
      body: "At VeryMuch we design dynamic script systems adapted to your ICP, methodology, and channels. Includes sales team training and 90-day results tracking.",
      primary: "Schedule free diagnostic",
      secondary: "See how to automate your lead follow-up →",
      secondaryHref: "/blog/automatizar-seguimiento-leads-ia",
    },
    author: {
      name: "Edwin Moreno",
      role: "COO & Co-founder, VeryMuch.ai",
      bio: "Expert in process automation and AI agents for revenue operations. Featured in Forbes Mexico. TEDx speaker on productivity and AI. Leads AI agent implementation in B2B commercial teams in Mexico, Spain, and Colombia.",
      href: "/autor/edwin-moreno",
    },
    published: "June 16, 2026",
    dateISO: "2026-06-16",
    readTime: "9 min",
  },
};

/* ─── Metadata ────────────────────────────────────────────────────────────── */
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "es";
  const c = CONTENT[lang];
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/blog/como-crear-script-ventas-ia`
      : `${BASE_URL}/blog/como-crear-script-ventas-ia`;

  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/blog/como-crear-script-ventas-ia`,
        en: `${BASE_URL}/en/blog/como-crear-script-ventas-ia`,
        "x-default": `${BASE_URL}/blog/como-crear-script-ventas-ia`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: canonical,
      title: c.meta.title,
      description: c.meta.description,
      publishedTime: "2026-06-16",
      authors: ["Edwin Moreno"],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function Page({ params }: Props) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "es";
  const c = CONTENT[lang];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.hero.title,
    description: c.meta.description,
    datePublished: c.dateISO,
    dateModified: c.dateISO,
    author: {
      "@type": "Person",
      name: c.author.name,
      url: `${BASE_URL}${c.author.href}`,
    },
    publisher: {
      "@type": "Organization",
      name: "VeryMuch.ai",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        locale === "en"
          ? `${BASE_URL}/en/blog/como-crear-script-ventas-ia`
          : `${BASE_URL}/blog/como-crear-script-ventas-ia`,
    },
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
      {
        "@type": "ListItem",
        position: 1,
        name: c.breadcrumb.home,
        item: locale === "en" ? `${BASE_URL}/en` : BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.breadcrumb.blog,
        item: locale === "en" ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: c.breadcrumb.current,
        item:
          locale === "en"
            ? `${BASE_URL}/en/blog/como-crear-script-ventas-ia`
            : `${BASE_URL}/blog/como-crear-script-ventas-ia`,
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: lang === "es" ? "Cómo crear un script de ventas con IA" : "How to create an AI sales script",
    description: c.meta.description,
    step: c.steps.items.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.body,
    })),
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <HomeNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden pt-36 pb-16 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(172,237,235,0.07) 0%, rgba(218,184,130,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.home}</Link>
            <span className="opacity-40">›</span>
            <Link href="/blog" style={{ color: "var(--text-secondary)" }}>{c.breadcrumb.blog}</Link>
            <span className="opacity-40">›</span>
            <span style={{ color: "var(--accent-text)" }}>{c.breadcrumb.current}</span>
          </nav>

          <p className="mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--accent-text)" }}
            >
              {c.tag}
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-6"
            style={{
              fontSize: "clamp(1.75rem,4.5vw,2.75rem)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
          >
            {c.hero.title}
          </h1>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {c.hero.subtitle}
          </p>

          {/* Author / meta */}
          <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            <Link href={c.author.href} className="font-semibold hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {c.author.name}
            </Link>
            <span className="opacity-30">·</span>
            <time dateTime={c.dateISO}>{c.published}</time>
            <span className="opacity-30">·</span>
            <span>{c.readTime} {lang === "es" ? "de lectura" : "read"}</span>
          </div>
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Intro */}
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
            {c.intro}
          </p>

          {/* Stats */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.stats_label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {c.stats.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl p-5 border text-center"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p
                    className="font-extrabold mb-1"
                    style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--accent-text)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why traditional scripts fail */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.section_why.heading}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.section_why.body}
            </p>
          </section>

          {/* 5 Steps */}
          <section>
            <h2
              className="font-bold mb-8"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.steps.heading}
            </h2>
            <div className="space-y-6">
              {c.steps.items.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-extrabold text-2xl shrink-0 mt-0.5"
                      style={{ color: "var(--accent-text)", opacity: 0.5 }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Examples */}
          <section>
            <h2
              className="font-bold mb-3"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.examples.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {c.examples.intro}
            </p>
            <div className="space-y-5">
              {c.examples.items.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent-text)" }}>
                    {ex.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed italic"
                    style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
                  >
                    {ex.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.mistakes.heading}
            </h2>
            <div className="space-y-4">
              {c.mistakes.items.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.results.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {c.results.body}
            </p>
            <ul className="space-y-3">
              {c.results.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm rounded-xl px-4 py-3 border"
                  style={{
                    color: "var(--text-secondary)",
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span style={{ color: "var(--accent-text)" }} className="shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.6rem)", color: "var(--text-primary)" }}
            >
              {c.faq.heading}
            </h2>
            <div className="space-y-4">
              {c.faq.items.map((item, i) => (
                <details
                  key={i}
                  className="rounded-2xl border overflow-hidden"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <summary
                    className="px-6 py-4 cursor-pointer font-semibold text-sm select-none"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.q}
                  </summary>
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Author */}
          <section
            className="rounded-2xl p-6 border"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
              {lang === "es" ? "Sobre el autor" : "About the author"}
            </p>
            <Link href={c.author.href} className="font-bold text-base hover:opacity-80" style={{ color: "var(--text-primary)" }}>
              {c.author.name}
            </Link>
            <p className="text-xs mb-2" style={{ color: "var(--accent-text)" }}>{c.author.role}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.author.bio}
            </p>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl p-8 border text-center"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="font-bold mb-3"
              style={{ fontSize: "clamp(1.2rem,2.5vw,1.5rem)", color: "var(--text-primary)" }}
            >
              {c.cta.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              {c.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-block rounded-xl px-6 py-3 font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--accent-text)", color: "#0a0f14" }}
              >
                {c.cta.primary}
              </Link>
              <Link
                href={c.cta.secondaryHref as `/blog/${string}`}
                className="inline-block rounded-xl px-6 py-3 font-semibold text-sm border transition-opacity hover:opacity-80"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                {c.cta.secondary}
              </Link>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}
