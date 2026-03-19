"use client";

import { useState } from "react";

type Cat = "ventas" | "marketing";
type Tab = "ventas" | "marketing" | "all";

const AGENTS: {
  id: string; cat: Cat; name: string;
  problem: string; solution: string; result: string;
}[] = [
  {
    id: "prospeccion", cat: "ventas",
    name: "Prospección por Señales",
    problem: "SDRs pierden el 70% del tiempo en investigación manual.",
    solution: "Monitorea señales en LinkedIn, auto-enriquece contactos y personaliza el outreach con IA.",
    result: "De 2% a 5-8% tasa de respuesta en outbound",
  },
  {
    id: "lead-router", cat: "ventas",
    name: "Lead Router Inbound",
    problem: "Los leads esperan +4h. El 78% compra al primero que responde.",
    solution: "Responde en menos de 60 segundos, enriquece datos y puntúa con IA.",
    result: "5x más rápido, 3x más reuniones agendadas",
  },
  {
    id: "pre-llamada", cat: "ventas",
    name: "Agente Pre-Llamada",
    problem: "20-30 min de investigación manual por cada llamada.",
    solution: "Genera briefing de 1 página 30 min antes: LinkedIn, tech stack, funding y competencia.",
    result: "Cero preparación manual, mejores conversaciones desde el minuto uno",
  },
  {
    id: "nurturing", cat: "ventas",
    name: "Nurturing & Follow-up",
    problem: "Follow-ups perdidos. Leads fríos. Pipeline que se evapora.",
    solution: "Rastrea señales de engagement y dispara follow-ups personalizados.",
    result: "40% más pipeline recuperado",
  },
  {
    id: "radar", cat: "marketing",
    name: "Agente Radar",
    problem: "Las señales de interés de tus prospects pasan desapercibidas.",
    solution: "Monitorea LinkedIn, web y email 24/7. Detecta y enruta señales de interés.",
    result: "Detección automática de oportunidades que antes se perdían",
  },
  {
    id: "productor", cat: "marketing",
    name: "Agente Productor",
    problem: "Producir contenido de calidad lleva días. No escala.",
    solution: "Genera contenido alineado con tu voz en 4 formatos: educativo, alcance, lead magnet y autoridad.",
    result: "De 1 pieza/semana a 5+/semana sin perder voz de marca",
  },
  {
    id: "distribuidor", cat: "marketing",
    name: "Agente Distribuidor",
    problem: "Publicar en 5 canales requiere adaptación manual para cada uno.",
    solution: "Adapta y publica automáticamente en todos los canales.",
    result: "Publicación simultánea sin intervención manual",
  },
  {
    id: "propuestas", cat: "marketing",
    name: "Generador de Propuestas",
    problem: "Propuestas personalizadas tardan +3h cada una.",
    solution: "Extrae notas de llamada + CRM + tarifas. La IA genera la propuesta, el humano revisa y envía.",
    result: "90% menos tiempo por propuesta",
  },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "ventas",    label: "Ventas" },
  { id: "marketing", label: "Marketing" },
  { id: "all",       label: "Ver todos" },
];

function AgentCard({ agent }: { agent: typeof AGENTS[number] }) {
  const isVentas = agent.cat === "ventas";
  return (
    <article
      className="rounded-2xl p-6 flex flex-col gap-4 border card-elevated"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
          {agent.name}
        </h3>
        <span
          className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{
            background: isVentas ? "rgba(170,212,174,0.2)" : "rgba(245,160,94,0.2)",
            color: isVentas ? "var(--accent-text)" : "var(--accent-warm-text)",
          }}
        >
          {isVentas ? "Ventas" : "Marketing"}
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>Problema</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{agent.problem}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>Solución</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>{agent.solution}</p>
        </div>
      </div>

      <div className="pt-3 border-t" style={{ borderColor: "var(--border)" }}>
        <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>Resultado</p>
        <p className="text-sm font-semibold" style={{ color: "var(--success-text)" }}>{agent.result}</p>
      </div>
    </article>
  );
}

export default function AgentsInProductionSection() {
  const [tab, setTab]         = useState<Tab>("ventas");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    tab === "ventas"    ? AGENTS.filter((a) => a.cat === "ventas") :
    tab === "marketing" ? AGENTS.filter((a) => a.cat === "marketing") :
    AGENTS;

  const visible   = tab === "all" && !expanded ? filtered.slice(0, 4) : filtered;
  const hasMore   = tab === "all" && !expanded && filtered.length > 4;

  return (
    <section id="agents" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3">
            <span className="badge-label" style={{ color: "var(--accent-text)" }}>Agentes en producción</span>
          </p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight mb-3" style={{ color: "var(--text-primary)" }}>
            Sistemas funcionando ahora mismo
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            No son conceptos. Son agentes vivos generando resultados para ventas y marketing.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => { setTab(t.id); setExpanded(false); }}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border"
                style={{
                  background: active ? "var(--accent-gradient)" : "transparent",
                  color:      active ? "#FFFFFF" : "var(--text-primary)",
                  borderColor: active ? "transparent" : "var(--border)",
                  opacity: active ? 1 : 0.65,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-8">
          {visible.map((a) => <AgentCard key={a.id} agent={a} />)}
        </div>

        {/* Expand / see all */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setExpanded(true)}
              className="px-7 py-3 rounded-full text-sm font-semibold border transition-opacity hover:opacity-100 opacity-65"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
            >
              Ver todos los agentes ↓
            </button>
          </div>
        )}

        {/* Note */}
        <p className="caption mt-10 text-center" style={{ color: "var(--text-secondary)" }}>
          Basado en datos internos y benchmarks de industria.
        </p>
      </div>
    </section>
  );
}
