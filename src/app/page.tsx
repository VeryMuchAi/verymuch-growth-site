import type { Metadata } from "next";
import Image from "next/image";
import HomeNav from "@/components/HomeNav";
import AgentsInProductionSection from "@/components/AgentsInProductionSection";
import IconBlock, { type ColorVariant } from "@/components/IconBlock";

export const metadata: Metadata = {
  title: "VeryMuch.ai — Agentes de IA para Ventas y Marketing",
  description:
    "Instalamos agentes de IA en tus equipos de ventas y marketing. Sistemas que crean contenido, captan leads, cualifican oportunidades y aceleran tu ciclo de ventas.",
  openGraph: {
    title: "VeryMuch.ai — Agentes de IA para Ventas y Marketing",
    description:
      "Sistemas que crean contenido, captan leads, cualifican oportunidades y aceleran tu ciclo de ventas.",
    url: "https://verymuch.ai",
  },
};

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

// ── HERO metrics ──────────────────────────────────────────────────────────────
const METRICS = [
  { value: "~8 semanas",      label: "Setup hasta producción" },
  { value: "Tu equipo de IA", label: "Partner estratégico, no proveedor" },
  { value: "8 agentes",       label: "En producción ahora mismo" },
];

// ── SYMPTOMS data ─────────────────────────────────────────────────────────────
const VENTAS_SYMPTOMS: { icon: string; iconColor: ColorVariant; title: string; desc: string }[] = [
  {
    icon: "clock",
    iconColor: "orange",
    title: "Leads que tardan +4 horas en recibir respuesta",
    desc: "El 78% de los compradores elige al primero que contesta.",
  },
  {
    icon: "search",
    iconColor: "teal",
    title: "SDRs que pasan el 70% del tiempo investigando",
    desc: "Investigación manual que debería hacer una máquina.",
  },
  {
    icon: "trending-down",
    iconColor: "dark",
    title: "Follow-ups que se pierden, leads que se enfrían",
    desc: "Pipeline que se evapora sin que nadie se dé cuenta.",
  },
];

const MARKETING_SYMPTOMS: { icon: string; iconColor: ColorVariant; title: string; desc: string }[] = [
  {
    icon: "edit",
    iconColor: "purple",
    title: "Contenido que tarda días en producirse",
    desc: "Posts, emails, lead magnets: todo pasa por un cuello de botella humano que no escala.",
  },
  {
    icon: "share",
    iconColor: "orange",
    title: "Publicación manual en 5 plataformas",
    desc: "Tu equipo copia y pega el mismo contenido adaptándolo a mano para cada canal.",
  },
  {
    icon: "bar-chart",
    iconColor: "dark",
    title: "Zero visibilidad sobre qué contenido genera leads",
    desc: "Publicas mucho pero no sabes qué piezas realmente mueven el pipeline.",
  },
];

// ── HOW WE WORK steps ─────────────────────────────────────────────────────────
const P1_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "Entendemos tus procesos de ventas y marketing, identificamos cuellos de botella y mapeamos dónde los agentes pueden generar mayor impacto. Si tu empresa necesita primero construir las bases, te lo decimos y empezamos por ahí.",
  },
  {
    num: "02",
    title: "Diseño del agente",
    desc: "Arquitectura a medida, integraciones con tu stack actual (CRM, email, LinkedIn, herramientas de contenido), definición de entregables y presupuesto cerrado.",
  },
  {
    num: "03",
    title: "Construcción y deploy",
    desc: "Construimos, probamos en tu entorno real, iteramos y desplegamos los primeros agentes. Precio cerrado, sin sorpresas.",
  },
];

const CALLOUTS: {
  icon: string; iconColor: ColorVariant;
  title: string; intro: string; items: string[]; quote: string;
}[] = [
  {
    icon: "settings",
    iconColor: "dark",
    title: "¿Tu empresa necesita primero las bases?",
    intro: "No todas las empresas están listas para desplegar agentes desde el día uno.",
    items: [
      "RAG con el conocimiento interno de tu empresa",
      "Sistema operativo en Notion",
      "Formación práctica del equipo",
    ],
    quote: "Esto no es un curso teórico. Es implementación real adaptada a tu empresa.",
  },
  {
    icon: "laptop",
    iconColor: "teal",
    title: "¿Necesitas una aplicación a medida?",
    intro: "Desarrollamos aplicaciones funcionales en días usando IA.",
    items: [
      "Dashboards internos y herramientas de gestión",
      "Portales de cliente y apps de seguimiento",
      "MVPs de producto y prototipos funcionales",
    ],
    quote: "De idea a aplicación funcionando en días, no meses.",
  },
];

// ── RESOURCES data ────────────────────────────────────────────────────────────
const LEAD_MAGNETS_LIVE = [
  {
    id: "signals-linkedin",
    title: "Agente de Ventas IA por Señales de LinkedIn",
    desc: "Detecta señales de intención en LinkedIn y convierte engagement en outreach personalizado.",
    href: "/signals-linkedin",
    stack: ["Trigify", "Claude", "n8n"],
  },
  {
    id: "equipo-ventas-ia-30min",
    title: "Equipo de Ventas IA en 30 Minutos",
    desc: "4 agentes en paralelo con Opus 4.6 — investigar, analizar, escribir y coordinar.",
    href: "/lead/equipo-ventas-ia-30min",
    stack: ["Claude Opus", "n8n"],
  },
  {
    id: "agente-investigacion-comercial",
    title: "Agente IA de Investigación Comercial",
    desc: "Investiga cualquier empresa y genera briefings con DAFO, MEDDPICC y outreach personalizado.",
    href: "/lead/agente-investigacion-comercial",
    stack: ["Claude", "n8n", "Supabase"],
  },
  {
    id: "20-agentes-ia-b2b",
    title: "20 Agentes de IA para tu Estrategia Comercial B2B",
    desc: "Tech stack, paso a paso y resultados esperados para 20 agentes listos para implementar.",
    href: "/lead/20-agentes-ia-b2b",
    stack: ["Claude", "n8n", "Clay", "Instantly"],
  },
  {
    id: "2-agentes-leads-calientes",
    title: "2 Agentes IA que encuentran leads calientes",
    desc: "Monitoriza LinkedIn, X, Reddit, YouTube y Podcasts buscando señales de compra reales y escribe outreach personalizado automáticamente.",
    href: "/lead/2-agentes-leads-calientes",
    stack: ["Trigify", "Claude", "n8n"],
  },
];

const LEAD_MAGNETS_SOON = [
  { id: "cold-email", title: "Sistema de Cold Email con IA" },
  { id: "lead-scoring", title: "Lead Scoring Automático en tu CRM" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <HomeNav />

      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden pt-40 pb-24 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 65% -15%, rgba(245,160,64,0.07) 0%, rgba(74,212,174,0.05) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          {/* Tag */}
          <p className="mb-6">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>
              IA aplicada a ventas y marketing
            </span>
          </p>

          {/* H1 */}
          <h1
            className="display font-extrabold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Instalamos{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              agentes de IA
            </span>
            {" "}en tus equipos de ventas y marketing
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Sistemas que crean contenido, captan leads, cualifican oportunidades
            y aceleran tu ciclo de ventas. Todo lo que vendemos lo usamos primero
            en nuestra empresa. IA en producción real, no pilotos experimentales.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-base"
            >
              Agenda una consultoría gratuita →
            </a>
            <a
              href="#how"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-base font-semibold border transition-opacity duration-200 hover:opacity-100 opacity-60"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Metrics */}
          <div
            className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {METRICS.map((m) => (
              <div key={m.value}>
                <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {m.value}
                </p>
                <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SYMPTOMS ══════════════════════════════════════════════════════════ */}
      <section
        id="symptoms"
        className="py-24 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>¿Suena familiar?</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Si tus equipos de ventas y marketing tienen estos síntomas…
            </h2>
          </div>

          {/* Ventas block */}
          <div className="mb-10">
            <p
              className="caption uppercase tracking-widest font-bold mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              Ventas
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VENTAS_SYMPTOMS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border border-l-4 card-elevated flex flex-col gap-4"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                    borderLeftColor: "var(--error)",
                  }}
                >
                  <IconBlock icon={s.icon} color={s.iconColor} size="md" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing block */}
          <div className="mb-14">
            <p
              className="caption uppercase tracking-widest font-bold mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              Marketing
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MARKETING_SYMPTOMS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border border-l-4 card-elevated flex flex-col gap-4"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--border)",
                    borderLeftColor: "var(--error)",
                  }}
                >
                  <IconBlock icon={s.icon} color={s.iconColor} size="md" />
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing line */}
          <p
            className="text-center text-base font-medium max-w-xl mx-auto"
            style={{ color: "var(--text-primary)" }}
          >
            Si reconoces al menos dos de estos, tus equipos están perdiendo dinero cada día.
            Podemos solucionarlo.
          </p>
        </div>
      </section>

      {/* ══ CÓMO TRABAJAMOS ═══════════════════════════════════════════════════ */}
      <section
        id="how"
        className="py-24 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>Proceso</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Tu partner estratégico en IA para ventas y marketing
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Un proceso claro en dos fases: primero construimos tus agentes,
              después los evolucionamos y vamos implantando nuevos. No somos un
              proveedor puntual, somos tu equipo de IA.
            </p>
          </div>

          {/* Fase 1 */}
          <div
            className="rounded-2xl p-8 lg:p-10 mb-6 border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <p
              className="caption uppercase tracking-widest font-bold mb-8 pb-4 border-b"
              style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
            >
              Fase 1 — Setup · ~8 semanas · Precio cerrado desde 3.500 USD
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {P1_STEPS.map((s) => (
                <div key={s.num} className="flex flex-col gap-3">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ color: "var(--accent-text)" }}
                  >
                    {s.num}
                  </span>
                  <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fase 2 */}
          <div
            className="rounded-2xl p-8 lg:p-10 mb-10 border border-l-4"
            style={{
              background: "rgba(170,212,174,0.06)",
              borderColor: "var(--border)",
              borderLeftColor: "var(--accent)",
            }}
          >
            <p
              className="caption uppercase tracking-widest font-bold mb-4"
              style={{ color: "var(--accent-text)" }}
            >
              Fase 2 — Automation as a Service · Relación continua
            </p>
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Tu equipo de IA, en modo continuo
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Operamos los agentes activos, los optimizamos con datos reales, y vamos
              diseñando e implantando nuevos agentes en tu empresa. Monitorización,
              ajustes, nuevas integraciones, reporting y soporte continuo. Tu equipo
              de IA sin que tengas que construirlo internamente.
            </p>
          </div>

          {/* Callouts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {CALLOUTS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-7 border flex flex-col gap-4 card-elevated"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <IconBlock icon={c.icon} color={c.iconColor} size="md" />
                <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                  {c.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.intro}</p>
                <ul className="flex flex-col gap-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-primary)" }}>
                      <span style={{ color: "var(--accent-text)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{c.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div>
            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-base"
            >
              Empieza con una discovery call gratuita →
            </a>
          </div>
        </div>
      </section>

      {/* ══ AGENTES EN PRODUCCIÓN (client component) ══════════════════════════ */}
      <AgentsInProductionSection />

      {/* ══ EQUIPO ════════════════════════════════════════════════════════════ */}
      <section
        id="team"
        className="py-24 px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>El equipo</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Quiénes somos
            </h2>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Jorge */}
            <div className="flex flex-col gap-5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
              >
                JH
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  Jorge Herrera
                </h3>
                <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  Co-fundador · Estrategia, ventas y contenido · Madrid
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  "EMBA por IE Business School",
                  "Máster en IA aplicada a Marketing y Ventas (ESIC)",
                  "+15 años de experiencia emprendedora",
                  "Ex-WikiTribune (con Jimmy Wales)",
                  "Referencia en LinkedIn sobre IA para equipos comerciales",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: "var(--accent-text)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/jorgeherreracruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-sm font-semibold border px-4 py-2 rounded-lg transition-opacity hover:opacity-100 opacity-70"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                LinkedIn →
              </a>
            </div>

            {/* Edwin */}
            <div className="flex flex-col gap-5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
              >
                EM
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  Edwin Moreno
                </h3>
                <p className="caption mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  Co-fundador · Operaciones, IA y talento · Ciudad de México
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Instalamos agentes de IA que ayudan a empresas mid-market a vender más.
                Antes de vender cualquier sistema, lo probamos internamente. Si no funciona
                para nosotros, no te lo vendemos.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Executive Program, Singularity University (NASA campus)",
                  "TEDx Speaker",
                  "Columnista Forbes México (40+ artículos publicados)",
                  "Instructor Coursera & edX — AI Business Innovation",
                  "Director General MVS Exponencial (2022-2025)",
                  "Fundador Surfing Digital (10 años)",
                  "ExO Coach & Ambassador México — OpenExO",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: "var(--accent-text)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/edwinmorenoai/"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-sm font-semibold border px-4 py-2 rounded-lg transition-opacity hover:opacity-100 opacity-70"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Positioning statement */}
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Los agentes de IA multiplican a tu equipo{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">10x–20x.</span>{" "}
              No reemplazan a nadie.
            </h2>
            <p className="text-base mb-4" style={{ color: "var(--text-secondary)" }}>
              Nosotros los diseñamos, construimos y operamos para que tu equipo de ventas
              y marketing rinda como uno de 50.
            </p>
            <p className="caption" style={{ color: "var(--text-secondary)" }}>
              Si tu empresa necesita incorporar talento IA dedicado, te ayudamos a
              encontrar especialistas verificados de nuestra red.
            </p>
          </div>
        </div>
      </section>

      {/* ══ RECURSOS ══════════════════════════════════════════════════════════ */}
      <section
        id="resources"
        className="py-24 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="mb-3">
              <span className="badge-label" style={{ color: "var(--accent-text)" }}>Recursos</span>
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Blueprints para construir tus propios agentes
            </h2>
            <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Workflows completos, stack técnico real y costes detallados. Sin relleno,
              todo accionable.
            </p>
          </div>

          {/* Live cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            {LEAD_MAGNETS_LIVE.map((lm) => (
              <a
                key={lm.id}
                href={lm.href}
                className="group rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-200 hover:opacity-90 card-elevated"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]"
                    style={{ background: "rgba(91,166,107,0.18)", color: "var(--success-text)" }}
                  >
                    Disponible
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {lm.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded border"
                        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                  {lm.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                  {lm.desc}
                </p>
                <span
                  className="text-sm font-semibold mt-auto"
                  style={{ color: "var(--accent-text)" }}
                >
                  Acceder gratis →
                </span>
              </a>
            ))}
          </div>

          {/* Soon cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {LEAD_MAGNETS_SOON.map((lm) => (
              <div
                key={lm.id}
                className="rounded-2xl p-6 border flex flex-col gap-3 opacity-50 card-elevated"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span
                  className="caption px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] self-start"
                  style={{ background: "rgba(245,160,94,0.18)", color: "var(--accent-warm-text)" }}
                >
                  Q2 2026
                </span>
                <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                  {lm.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative overflow-hidden py-28 px-6 text-center"
        style={{ background: "var(--bg-primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,160,64,0.06) 0%, rgba(74,212,174,0.04) 45%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative">
          <h2
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            ¿Listo para instalar tu{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              primer agente de IA?
            </span>
          </h2>
          <p className="text-base max-w-[560px]" style={{ color: "var(--text-secondary)" }}>
            Agenda una consultoría gratuita de 30 minutos. Analizamos tus procesos de
            ventas y marketing, identificamos oportunidades y te proponemos una solución
            con entregables claros y precio cerrado.
          </p>
          <a
            href={GHL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient text-base"
          >
            Agenda tu consultoría gratuita →
          </a>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer
        className="border-t px-6 py-16"
        style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-white.png"
              alt="VeryMuch.ai"
              width={140}
              height={34}
              className="logo-white h-7 w-auto object-contain opacity-80"
            />
            <Image
              src="/Verymuch_Logo_transparent_real.png"
              alt="VeryMuch.ai"
              width={140}
              height={34}
              className="logo-color h-7 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-secondary)" }}>
              Instalamos agentes de IA y sistemas de automatización para que los equipos
              de ventas y marketing vendan más con menos fricción.
            </p>
          </div>

          {/* Col 2 — Links */}
          <div className="flex flex-col gap-3">
            <p className="caption uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
              Navegación
            </p>
            {[
              { label: "Servicios",       href: "#services" },
              { label: "Cómo funciona",  href: "#how" },
              { label: "Agentes",        href: "#agents" },
              { label: "Recursos",       href: "#resources" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm transition-opacity hover:opacity-100 opacity-60"
                style={{ color: "var(--text-primary)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-3">
            <p className="caption uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
              Contacto
            </p>
            <a
              href="https://www.linkedin.com/company/verymuch-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--text-primary)" }}
            >
              LinkedIn empresa
            </a>
            <a
              href="https://www.linkedin.com/in/jorgeherreracruz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--text-primary)" }}
            >
              LinkedIn Jorge Herrera
            </a>
            <a
              href="https://www.linkedin.com/in/edwinmorenoai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--text-primary)" }}
            >
              LinkedIn Edwin Moreno
            </a>
            <a
              href="mailto:info@verymuch.ai"
              className="text-sm transition-opacity hover:opacity-100 opacity-60"
              style={{ color: "var(--text-primary)" }}
            >
              info@verymuch.ai
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="caption" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} VeryMuch.ai — Todos los derechos reservados
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href="/terminos"
              className="caption transition-opacity hover:opacity-100 opacity-50"
              style={{ color: "var(--text-primary)" }}
            >
              Términos y condiciones
            </a>
            <span className="caption opacity-20" style={{ color: "var(--text-primary)" }}>·</span>
            <a
              href="/privacidad"
              className="caption transition-opacity hover:opacity-100 opacity-50"
              style={{ color: "var(--text-primary)" }}
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
