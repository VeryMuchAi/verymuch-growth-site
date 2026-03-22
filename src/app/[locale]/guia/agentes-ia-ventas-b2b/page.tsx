import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import { Link } from "@/i18n/navigation";

const BASE_URL = "https://verymuch.ai";
const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";
const PUBLISHED = "2026-03-22";
const OG_IMAGE = `${BASE_URL}/og_home_verymuch.png`;

type Props = { params: Promise<{ locale: string }> };

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical =
    locale === "en"
      ? `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`
      : `${BASE_URL}/guia/agentes-ia-ventas-b2b`;

  return {
    title: {
      absolute:
        "Agentes de IA para Ventas B2B: Guía Completa 2026 | Verymuch.ai",
    },
    description:
      "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos. Con datos reales y casos de uso.",
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
        en: `${BASE_URL}/en/guia/agentes-ia-ventas-b2b`,
        "x-default": `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
      },
    },
    openGraph: {
      type: "article",
      siteName: "Verymuch.ai",
      locale: "es_ES",
      url: canonical,
      title: "Agentes de IA para Ventas B2B: Guía Completa 2026",
      description:
        "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos.",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Verymuch.ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Agentes de IA para Ventas B2B: Guía Completa 2026",
      description:
        "Guía práctica sobre agentes de IA para equipos de ventas B2B.",
      images: [OG_IMAGE],
    },
  };
}

// ─── Structured data ─────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "¿Cuánto cuesta implementar un agente de IA?",
    a: "Depende del alcance. Un agente de prospección básico puede implementarse en 2–3 semanas por entre €3.000 y €8.000 en modalidad de instalación (el agente es tuyo). El modelo AaaS (servicio gestionado) parte de €1.500/mes e incluye mantenimiento, iteraciones y soporte. Los costes operativos de los LLMs suelen ser €50–€300/mes según volumen.",
  },
  {
    q: "¿Los agentes de IA reemplazan al equipo de ventas?",
    a: "No. Los agentes eliminan el trabajo mecánico: investigación, enriquecimiento de datos, redacción de mensajes, seguimientos automáticos. El equipo de ventas se ocupa de lo que solo ellos pueden hacer: construir relaciones, gestionar objeciones complejas y cerrar. La mayoría de nuestros clientes consiguen que sus SDRs tengan el doble de conversaciones con el mismo headcount.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Un agente bien definido tarda entre 2 y 6 semanas desde el kick-off hasta producción. La variable más importante no es la tecnología — es la calidad de los datos de entrada y la claridad del proceso que se va a automatizar. Si el proceso no está documentado, la implementación se alarga.",
  },
  {
    q: "¿Qué herramientas necesito tener primero?",
    a: "Lo mínimo viable: un CRM con datos medianamente limpios y un dominio de email con reputación sana. A partir de ahí, el stack se construye encima. No necesitas tener n8n, Clay ni ninguna herramienta específica antes de empezar — eso forma parte del diseño.",
  },
  {
    q: "¿Los agentes funcionan en español?",
    a: "Sí, sin pérdida de calidad relevante. Claude y GPT-4o generan mensajes en español de la misma calidad que en inglés. Los flujos de señales, enriquecimiento y CRM son agnósticos al idioma. Todos nuestros agentes para el mercado hispano operan en español nativo.",
  },
  {
    q: "¿Qué pasa si no tengo CRM?",
    a: "Podemos implementar el agente y conectarlo a Google Sheets o Notion como punto de partida. Sin embargo, si tienes más de 3 personas en el equipo comercial, el primer paso debería ser adoptar un CRM básico (HubSpot free es suficiente). Un agente sobre datos desorganizados produce resultados desorganizados.",
  },
  {
    q: "¿Cómo sé si mi empresa está lista para IA en ventas?",
    a: "La señal más clara es que ya tienes un proceso de ventas que funciona manualmente — aunque sea lento. Si no sabes cómo conviertes leads en clientes, la IA no lo resolverá. El ARRI (AI Readiness & Rationality Index) es el diagnóstico que usamos: 5 preguntas, 3 minutos, resultado inmediato.",
  },
  {
    q: "¿Cuál es la diferencia entre instalar un agente y contratar AaaS?",
    a: "En la instalación (compra única), el agente queda en tu infraestructura y lo operas tú. En AaaS (Agent as a Service), nosotros lo operamos, monitorizamos y mejoramos continuamente. La instalación tiene menor coste total a largo plazo. El AaaS tiene menor fricción operativa y tiempo de respuesta garantizado.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Agentes de IA para Ventas B2B: Guía Completa 2026",
  description:
    "Guía práctica sobre agentes de IA para equipos de ventas B2B. Qué son, cómo funcionan, qué resultados generan y cómo implementarlos.",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "Verymuch.ai",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Verymuch.ai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
  },
  image: OG_IMAGE,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guía", item: `${BASE_URL}/guia` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Agentes de IA para Ventas B2B",
      item: `${BASE_URL}/guia/agentes-ia-ventas-b2b`,
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div
      className="rounded-xl p-5 text-center border"
      style={{
        background: "rgba(74,212,174,0.06)",
        borderColor: "rgba(74,212,174,0.18)",
      }}
    >
      <div
        className="text-2xl font-extrabold leading-none mb-2"
        style={{ color: "var(--accent-text)" }}
      >
        {stat}
      </div>
      <div className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
    </div>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="rounded-xl p-5 border-l-4 my-6"
      style={{
        background: "rgba(245,160,64,0.06)",
        borderLeftColor: "var(--accent-warm)",
      }}
    >
      <div className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </blockquote>
  );
}

const TOC_ITEMS = [
  { id: "que-es",           label: "Qué es un agente de IA para ventas" },
  { id: "por-que",          label: "Por qué los equipos B2B los necesitan en 2026" },
  { id: "5-agentes",        label: "5 agentes que todo equipo debería tener" },
  { id: "como-funcionan",   label: "Cómo funcionan (sin jerga técnica)" },
  { id: "automatizacion",   label: "Automatización vs agentes: cuándo usar cada uno" },
  { id: "implementar",      label: "Cómo implementar agentes en tu empresa" },
  { id: "errores",          label: "Errores comunes al implementar IA en ventas" },
  { id: "faq",              label: "Preguntas frecuentes" },
  { id: "cta",              label: "Siguiente paso" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PillarPage() {
  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <HomeNav />

      {/* Hero / header */}
      <header
        className="relative overflow-hidden pt-36 pb-12 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 60% -10%, rgba(74,212,174,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-2xl mx-auto relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline transition-opacity hover:opacity-100 opacity-70">Inicio</Link>
            <span className="opacity-30">/</span>
            <span className="opacity-50">Guía</span>
            <span className="opacity-30">/</span>
            <span style={{ color: "var(--accent-text)" }}>Agentes de IA para Ventas B2B</span>
          </nav>

          <p className="mb-4">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>
              Guía completa · 2026
            </span>
          </p>
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem,4.5vw,2.8rem)", letterSpacing: "-0.025em" }}
          >
            Agentes de IA para Ventas B2B:{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Guía Completa 2026
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Qué son, cómo funcionan, qué resultados generan y cómo implementarlos.
            Con datos reales — sin teoría vacía.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>Por <strong style={{ color: "var(--text-primary)" }}>Verymuch.ai</strong></span>
            <span className="opacity-30">·</span>
            <time dateTime={PUBLISHED}>22 de marzo, 2026</time>
            <span className="opacity-30">·</span>
            <span>12 min de lectura</span>
          </div>
        </div>
      </header>

      <div className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* TOC */}
          <nav
            aria-label="Tabla de contenidos"
            className="rounded-2xl p-6 border mb-12"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p className="caption uppercase tracking-widest font-bold mb-4" style={{ color: "var(--text-secondary)" }}>
              En este artículo
            </p>
            <ol className="flex flex-col gap-2">
              {TOC_ITEMS.map((item, i) => (
                <li key={item.id} className="flex items-baseline gap-3">
                  <span className="text-xs font-bold w-5 shrink-0 text-right" style={{ color: "var(--accent-text)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm transition-opacity hover:opacity-100 opacity-70 hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Sección 1 ─────────────────────────────────────────────────── */}
          <section id="que-es" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              1. Qué es un agente de IA para ventas
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Un agente de IA es un sistema de software que tiene un objetivo, acceso a herramientas
              y capacidad para razonar sobre cómo conseguirlo. No ejecuta un script fijo — toma
              decisiones.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              La diferencia con la automatización tradicional (Zapier, Make) es fundamental:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-5 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  Automatización tradicional
                </h3>
                <ul className="flex flex-col gap-2">
                  {["Si pasa X → haz Y", "Sin contexto ni memoria", "Se rompe ante casos no previstos", "Velocidad: rápida, repetible"].map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0 opacity-50">—</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-5 border"
                style={{ background: "rgba(74,212,174,0.04)", borderColor: "rgba(74,212,174,0.2)" }}
              >
                <h3 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  Agente de IA
                </h3>
                <ul className="flex flex-col gap-2">
                  {["Objetivo → planifica → ejecuta", "Entiende contexto y adapta", "Gestiona excepciones con criterio", "Velocidad + juicio"].map((t) => (
                    <li key={t} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="shrink-0" style={{ color: "var(--accent-text)" }}>✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <HighlightBox>
              Un SDR humano decide a quién contactar, qué decir y cuándo seguir. Un agente de IA
              hace exactamente lo mismo — con criterio definido por ti, escala infinita y coste fijo.
            </HighlightBox>
          </section>

          {/* ── Sección 2 ─────────────────────────────────────────────────── */}
          <section id="por-que" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              2. Por qué los equipos de ventas B2B necesitan agentes de IA en 2026
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Tres problemas que tienen todos los equipos comerciales medianos, sin excepción:
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "El 78% de los compradores B2B elige al proveedor que responde primero. La mayoría de equipos tarda horas.",
                "Los SDRs dedican el 70% de su tiempo a investigación manual: buscar en LinkedIn, enriquecer datos, preparar briefings.",
                "El 80% de los deals muertos se pierden por falta de seguimiento — no porque el prospecto dijera que no.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(245,160,64,0.15)", color: "var(--accent-warm-text)" }}>!</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
              Los datos cuando se implementan agentes:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <StatCard stat="$39" label="Coste por lead con AI SDR" />
              <StatCard stat="$262" label="Coste por lead con SDR humano" />
              <StatCard stat="−85%" label="Reducción de coste por lead" />
              <StatCard stat="86%" label="Empresas con ROI positivo en el primer año" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Fuentes: Gartner Sales Technology Report 2025, HubSpot State of Sales 2025,
              McKinsey B2B AI Adoption 2025.
            </p>
          </section>

          {/* ── Sección 3 ─────────────────────────────────────────────────── */}
          <section id="5-agentes" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              3. 5 agentes de IA que todo equipo de ventas debería tener
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              No es necesario empezar con todos. Pero estos cinco cubren los puntos de mayor
              pérdida de ingresos en equipos B2B de mercado medio.
            </p>
            <div className="flex flex-col gap-5">
              {[
                {
                  num: "01",
                  title: "Agente de Prospección por Señales",
                  problem: "Tus SDRs contactan en frío. La tasa de respuesta ronda el 2%.",
                  result: "Monitoriza señales en LinkedIn (cambios de cargo, nuevas contrataciones, publicaciones) y activa outreach en el momento de mayor receptividad. Tasa de respuesta: 5–8%.",
                },
                {
                  num: "02",
                  title: "Lead Router Inbound",
                  problem: "Los leads inbound esperan horas antes de recibir respuesta. El 50% ya ha contactado a otro proveedor.",
                  result: "Responde en menos de 60 segundos, califica con preguntas de contexto y agenda reunión automáticamente. Resultado: 5× más rápido, 3× más reuniones cerradas.",
                },
                {
                  num: "03",
                  title: "Agente Pre-Llamada",
                  problem: "Antes de cada reunión, el AE pasa 20–30 minutos preparando contexto que podría tener en segundos.",
                  result: "Briefing automático con resumen de la empresa, noticias recientes, perfil del contacto, posibles objeciones y preguntas sugeridas. Cero preparación manual.",
                },
                {
                  num: "04",
                  title: "Agente de Nurturing y Follow-up",
                  problem: "El pipeline tiene deals estancados que nadie sigue porque el equipo está ocupado con los calientes.",
                  result: "Secuencias de follow-up personalizadas por contexto. 40% más pipeline recuperado de deals que estaban \"muertos\".",
                },
                {
                  num: "05",
                  title: "Agente de Investigación Comercial",
                  problem: "Los deals complejos requieren análisis profundo (DAFO, MEDDPICC, stakeholders) que nadie hace porque tarda horas.",
                  result: "Genera automáticamente análisis estructurado del deal: situación competitiva, poder de decisión, señales de urgencia. Antes de cada reunión importante.",
                },
              ].map((agent) => (
                <div
                  key={agent.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold shrink-0 leading-none mt-0.5" style={{ color: "var(--accent-text)" }}>
                      {agent.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                        {agent.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--error)" }}>Problema: </span>
                          {agent.problem}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="font-semibold" style={{ color: "var(--accent-text)" }}>Resultado: </span>
                          {agent.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sección 4 ─────────────────────────────────────────────────── */}
          <section id="como-funcionan" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              4. Cómo funcionan los agentes de IA (sin jerga técnica)
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Piénsalo como contratar a un empleado digital. Haces exactamente lo mismo que cuando
              contratas a alguien:
            </p>
            <ol className="flex flex-col gap-4 mb-8">
              {[
                ["Le defines el trabajo", "Qué tiene que hacer, cuándo, con qué criterio y qué resultado se espera. Esto es el system prompt + las reglas del agente."],
                ["Le das acceso a herramientas", "CRM, LinkedIn, email, base de datos de leads, calendario. El agente puede leer y escribir en estos sistemas, igual que haría un humano."],
                ["Le estableces límites", "Qué puede hacer solo y qué requiere aprobación humana. Ningún agente bien diseñado opera sin supervisión en decisiones de alto impacto."],
                ["Trabaja 24/7", "Sin vacaciones, sin distracciones, sin variabilidad. El volumen que antes requería 5 SDRs, ahora lo gestiona el agente con consistencia."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "rgba(74,212,174,0.15)", color: "var(--accent-text)" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div
              className="rounded-xl p-5 border"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                Stack técnico típico
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  ["LLM", "Claude / GPT-4o", "El cerebro que razona"],
                  ["Orquestador", "n8n / Make", "El sistema nervioso"],
                  ["CRM", "HubSpot / Salesforce", "La memoria"],
                  ["Datos", "LinkedIn / Clay", "Los ojos"],
                ].map(([layer, tool, desc]) => (
                  <div key={layer} className="text-center">
                    <p className="text-xs font-bold mb-0.5" style={{ color: "var(--accent-text)" }}>{layer}</p>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>{tool}</p>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Sección 5 ─────────────────────────────────────────────────── */}
          <section id="automatizacion" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              5. Automatización vs agentes: cuándo usar cada uno
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              No son excluyentes. La mayoría de los sistemas bien diseñados combinan los dos.
              La regla es simple: automatización para tareas predecibles, agentes para tareas
              que requieren juicio.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid var(--border)` }}>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-primary)" }}>Criterio</th>
                    <th className="text-left py-3 pr-4 font-bold" style={{ color: "var(--text-secondary)" }}>Automatización</th>
                    <th className="text-left py-3 font-bold" style={{ color: "var(--accent-text)" }}>Agente de IA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tipo de tarea", "Reglas fijas, IF-THEN", "Requiere contexto y criterio"],
                    ["Variabilidad", "Baja — siempre igual", "Alta — cada caso es distinto"],
                    ["Ejemplo ventas", "Mover lead a etapa si abre email", "Decidir qué decir en el follow-up"],
                    ["Coste", "Muy bajo", "Bajo-medio"],
                    ["Mantenimiento", "Mínimo", "Iteración continua"],
                    ["Cuándo falla", "Cuando el caso no estaba previsto", "Cuando el objetivo no está claro"],
                  ].map(([criterio, auto, agente]) => (
                    <tr key={criterio} style={{ borderBottom: `1px solid var(--border)` }}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>{criterio}</td>
                      <td className="py-3 pr-4" style={{ color: "var(--text-secondary)" }}>{auto}</td>
                      <td className="py-3" style={{ color: "var(--text-secondary)" }}>{agente}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <HighlightBox>
              El 90% de los proyectos de &ldquo;IA para ventas&rdquo; que fracasan habían intentado
              usar un agente donde una automatización simple era suficiente — o viceversa.
              El diagnóstico previo vale más que la herramienta.
            </HighlightBox>
          </section>

          {/* ── Sección 6 ─────────────────────────────────────────────────── */}
          <section id="implementar" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              6. Cómo implementar agentes de IA en tu empresa
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              El proceso en 4 fases. La tecnología es la parte fácil — el diseño del proceso
              es donde está el valor.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                { num: "01", title: "Discovery", desc: "Auditoría del proceso comercial actual. Identificamos los 2-3 puntos de mayor pérdida de ingresos. Definimos el caso de uso con mayor ROI para empezar. Output: brief técnico y estimación de impacto." },
                { num: "02", title: "Diseño", desc: "Arquitectura del agente: objetivo, herramientas, reglas de negocio, criterios de escalado a humano, KPIs de éxito. No escribimos código hasta que el diseño está validado." },
                { num: "03", title: "Build & Deploy", desc: "Construcción en n8n o Make, integración con CRM y fuentes de datos, pruebas con datos reales, iteración rápida. Primeras semanas en producción con supervisión estrecha." },
                { num: "04", title: "Operación continua", desc: "Monitorización de KPIs, ajuste de prompts y lógica, ampliación del alcance según resultados. Un agente bien diseñado mejora con el tiempo." },
              ].map((phase) => (
                <div
                  key={phase.num}
                  className="rounded-2xl p-6 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <span className="text-3xl font-extrabold block mb-3 leading-none" style={{ color: "var(--accent-text)" }}>
                    {phase.num}
                  </span>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{phase.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{phase.desc}</p>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl p-5 border-l-4"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border)", borderLeftColor: "var(--accent-text)" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>Dos modalidades de trabajo</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-text)" }}>Instalación (compra única)</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    El agente queda en tu infraestructura. Lo operas tú. Mayor control,
                    menor coste a largo plazo. Requiere capacidad interna para mantenerlo.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-warm-text)" }}>AaaS — Agent as a Service</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Servicio gestionado mensual. Nosotros operamos, monitorizamos y mejoramos
                    el agente continuamente. Sin fricción interna.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Sección 7 ─────────────────────────────────────────────────── */}
          <section id="errores" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              7. Errores comunes al implementar IA en ventas
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Hemos visto los mismos errores repetirse. No son errores de tecnología —
              son errores de criterio.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Datos sucios en el CRM",
                  desc: "Un agente que trabaja sobre datos incorrectos produce resultados incorrectos con más velocidad. Antes de automatizar, limpia. Si no tienes datos de calidad, el primer sprint debería ser de higiene de datos, no de IA.",
                },
                {
                  title: "Automatizar un proceso que no funciona manualmente",
                  desc: "Si tu proceso de prospección manual no convierte, el agente no lo va a arreglar — lo va a escalar. Primero valida el proceso con humanos. Luego automatiza lo que ya funciona.",
                },
                {
                  title: "Esperar resultados sin involucrar al equipo",
                  desc: "El equipo de ventas tiene que entender qué hace el agente, cuándo interviene y cómo escalar casos. Los agentes que se implementan «de arriba hacia abajo» sin adopción del equipo acaban sin usar.",
                },
                {
                  title: "Comprar herramientas sin estrategia",
                  desc: "Clay, Apollo, Instantly, Salesloft, Outreach — cada semana aparece una nueva herramienta de IA para ventas. El problema no es la herramienta, es tener un proceso claro antes de elegirla. La herramienta es el último paso, no el primero.",
                },
              ].map((error) => (
                <div
                  key={error.title}
                  className="rounded-xl p-5 border-l-4 border"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                    borderLeftColor: "var(--error)",
                  }}
                >
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    ✕ {error.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{error.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sección 8 — FAQ ───────────────────────────────────────────── */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              8. Preguntas frecuentes
            </h2>
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border p-5"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <summary
                    className="font-semibold cursor-pointer list-none flex justify-between gap-4 text-left text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>{item.q}</span>
                    <span
                      className="shrink-0 group-open:rotate-180 transition-transform"
                      style={{ color: "var(--accent-text)" }}
                    >
                      ▼
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── Sección 9 — CTA ───────────────────────────────────────────── */}
          <section id="cta" className="scroll-mt-24">
            <div
              className="rounded-2xl p-8 text-center border"
              style={{
                background:
                  "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(74,212,174,0.08) 0%, transparent 60%), var(--bg-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <p className="mb-3">
                <span className="badge-label" style={{ color: "var(--accent-text)" }}>
                  Siguiente paso
                </span>
              </p>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                ¿Listo para implementar tu primer agente?
              </h2>
              <p className="text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
                En una sesión de 30 minutos identificamos el caso de uso con mayor ROI
                para tu equipo y te damos un plan de implementación concreto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={GHL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-sm"
                >
                  Agenda una consultoría gratuita
                </a>
                <a
                  href="/ai-readiness"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] text-sm font-semibold btn-outline-mint"
                >
                  Haz el Test de Madurez IA →
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer minimal */}
      <footer
        className="border-t px-6 py-8"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="caption" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Verymuch.ai
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              Inicio
            </Link>
            <Link href="/legal/privacidad" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              Privacidad
            </Link>
            <Link href="/legal/terminos" className="caption transition-opacity hover:opacity-100 opacity-50" style={{ color: "var(--text-primary)" }}>
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
