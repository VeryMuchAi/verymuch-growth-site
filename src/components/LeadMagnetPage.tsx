import Image from "next/image";
import Link from "next/link";
import type {
  LeadMagnetConfig,
  LeadMagnetSection,
  SectionOpportunity,
  SectionChangelog,
  SectionAgents,
} from "@/lib/lead-magnet";
import LeadMagnetForm from "./LeadMagnetForm";
import IconBlock, { cycleColor } from "./IconBlock";
import BrandMarquee, { type Brand } from "./BrandMarquee";

interface Props {
  config: LeadMagnetConfig;
}

// Wraps a portion of the headline with the brand gradient
function HeadlineWithHighlight({
  headline,
  highlight,
}: {
  headline: string;
  highlight?: string;
}) {
  if (!highlight) return <>{headline}</>;
  const idx = headline.indexOf(highlight);
  if (idx === -1) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, idx)}
      <span className="bg-vm-grad bg-clip-text text-transparent">
        {highlight}
      </span>
      {headline.slice(idx + highlight.length)}
    </>
  );
}

// ─── Extra section renderers ──────────────────────────────────────────────────

function OpportunitySection({ s }: { s: SectionOpportunity }) {
  return (
    <section className="border-t border-white/[0.06] bg-vm-bg-3">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">{s.title}</h2>
        {s.subtitle && (
          <p className="text-white/40 text-sm mb-10 max-w-2xl">{s.subtitle}</p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {s.tableRows.map((row, i) => (
                <tr key={i} className={i === 0 ? "border-b border-white/[0.06]" : ""}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-5 px-6 text-sm font-semibold text-white/80 border border-white/[0.07] ${
                        i === 0
                          ? "bg-vm-grad/10 text-vm-teal"
                          : "bg-white/[0.02] text-white/50"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ChangelogSection({ s }: { s: SectionChangelog }) {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">{s.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.10] bg-white/[0.07] p-5 flex flex-col gap-3 hover:border-vm-line/30 transition-all duration-200"
            >
              <IconBlock icon={item.icon} color={cycleColor(i)} size="sm" />
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentsSection({ s }: { s: SectionAgents }) {
  return (
    <section className="border-t border-white/[0.06] bg-vm-bg-2">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">{s.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.agents.map((agent, i) => (
            <div
              key={agent.name}
              className="rounded-xl border border-white/[0.10] bg-white/[0.07] p-6 flex flex-col gap-3 hover:border-brand-amber/30 transition-all duration-200"
            >
              <IconBlock icon={agent.icon} color={cycleColor(i)} size="sm" />
              <div>
                <h3 className="text-base font-bold text-white">{agent.name}</h3>
                <span className="text-xs text-brand-amber font-semibold uppercase tracking-wider">
                  {agent.role}
                </span>
              </div>
              <p className="text-xs text-white/45 leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraSection({ section }: { section: LeadMagnetSection }) {
  if (section.type === "opportunity") return <OpportunitySection s={section} />;
  if (section.type === "changelog") return <ChangelogSection s={section} />;
  if (section.type === "agents") return <AgentsSection s={section} />;
  return null;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LeadMagnetPage({ config }: Props) {
  const { content } = config;

  return (
    <div className="min-h-screen bg-vm-bg text-white">
      {/* ── Minimal LP Header ─────────────────────────────────────────────── */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/brand/logo-wordmark-light.png"
            alt="VeryMuch.ai"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
          <Link
            href="/#resources"
            className="text-xs font-medium text-white/40 hover:text-vm-teal transition-colors flex items-center gap-1.5"
          >
            ← Todos los recursos
          </Link>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(172,237,235,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

            {/* Left col */}
            <div className="flex flex-col gap-6">
              {content.badge && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vm-line/30 bg-vm-grad/10 px-4 py-1.5 text-xs font-semibold text-vm-teal uppercase tracking-widest">
                  ✦ {content.badge}
                </span>
              )}

              <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight">
                <HeadlineWithHighlight
                  headline={content.headline}
                  highlight={content.highlightWords}
                />
              </h1>

              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                {content.subheadline}
              </p>

              <ul className="flex flex-col gap-3 mt-2">
                {content.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-vm-grad/15 border border-vm-line/30 flex items-center justify-center text-vm-teal text-xs font-bold">
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Trust bar */}
              {!config.hideSocialProof && (
                <div className="flex items-center gap-3 mt-4 pt-6 border-t border-white/[0.08]">
                  <div className="flex -space-x-2">
                    {["#2C6B65", "#D97757", "#8B5CF6"].map((c) => (
                      <div
                        key={c}
                        className="w-7 h-7 rounded-full border-2 border-brand-dark"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/40">
                    Descargado por +300 growth builders
                  </p>
                </div>
              )}
            </div>

            {/* Right col — form */}
            <div className="lg:sticky lg:top-8">
              <LeadMagnetForm config={config} />
            </div>
          </div>
        </div>
      </section>

      {config.brands && config.brands.length <= 6 ? (
        /* Static display for small brand sets */
        <section className="py-10" style={{ background: "rgba(0,0,0,0.2)" }}>
          <p className="text-center caption mb-5 px-6" style={{ color: "rgba(255,255,255,0.20)", opacity: 0.7 }}>
            Stack real usado en esta guía
          </p>
          <div className="flex flex-wrap justify-center gap-3 px-6">
            {config.brands.map((b) => {
              const logoUrl = b.logoUrl
                ?? (b.iconSlug ? `https://cdn.simpleicons.org/${b.iconSlug}/ffffff` : null);
              return (
                <span
                  key={b.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}
                >
                  {logoUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={logoUrl} alt={b.name} width={14} height={14} className="w-3.5 h-3.5 object-contain flex-shrink-0" loading="lazy" />
                  )}
                  {!logoUrl && (
                    <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: b.dot }} />
                  )}
                  {b.name}
                </span>
              );
            })}
          </div>
        </section>
      ) : (
        <BrandMarquee
          variant="dark"
          label="Stack real usado en esta guía"
          brands={config.brands as Brand[] | undefined}
        />
      )}

      {/* ── Qué incluye ───────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-vm-bg-2">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">Qué incluye</h2>
          <p className="text-white/40 text-sm mb-10">
            Todo lo que necesitas para implementarlo este fin de semana.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.includes.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.10] bg-white/[0.07] p-5 flex flex-col gap-3 hover:border-vm-line/30 transition-colors"
              >
                <IconBlock icon={item.icon} color={cycleColor(i)} size="sm" />
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extra sections (opportunity / changelog / agents) ─────────────── */}
      {content.extraSections?.map((section, i) => (
        <ExtraSection key={i} section={section} />
      ))}

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">Stack técnico</h2>
          <p className="text-white/40 text-sm mb-10">
            Herramientas reales, costes reales. Sin magia.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {content.techStack.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-white/[0.10] bg-white/[0.07] p-6 flex flex-col gap-3 transition-all duration-200"
              >
                {/* Logo — shown when logoUrl is provided */}
                {tool.logoUrl && (
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center p-2 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.logoUrl}
                      alt={`${tool.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-bold text-white">{tool.name}</span>
                  {tool.url && (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-vm-teal/60 hover:text-vm-teal transition-colors flex-shrink-0"
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="text-xs text-white/45 leading-relaxed">{tool.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-vm-bg-2">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-semibold text-vm-teal uppercase tracking-widest">
            ✦ {content.badge ?? "Blueprint Gratuito"}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight">
            {content.ctaHeadline ?? "Empieza a capturar señales de intención"}{" "}
            <span className="bg-vm-grad bg-clip-text text-transparent">
              {content.ctaHighlight ?? "esta semana"}
            </span>
          </h2>
          <p className="text-white/50 text-sm max-w-md leading-relaxed">
            {content.subheadline}
          </p>
          <a
            href="#hero"
            className="inline-block px-8 py-4 rounded-[10px] font-bold text-sm text-white btn-primary"
          >
            {content.form.ctaLabel} →
          </a>
          {content.form.microcopy && (
            <p className="text-xs text-white/30">{content.form.microcopy}</p>
          )}
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/brand/logo-wordmark-light.png"
            alt="VeryMuch.ai"
            width={120}
            height={30}
            className="h-6 w-auto object-contain opacity-50"
          />
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a
              href="/legal/terminos"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Términos y condiciones
            </a>
            <span className="text-white/15 text-xs">·</span>
            <a
              href="/legal/privacidad"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Aviso de privacidad
            </a>
            <span className="text-white/15 text-xs">·</span>
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} VeryMuch.ai
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
