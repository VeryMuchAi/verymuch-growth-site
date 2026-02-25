import Image from "next/image";
import type { LeadMagnetConfig } from "@/lib/lead-magnet";
import LeadMagnetForm from "./LeadMagnetForm";

interface Props {
  config: LeadMagnetConfig;
  guideUrl: string;
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
      <span className="bg-brand-gradient bg-clip-text text-transparent">
        {highlight}
      </span>
      {headline.slice(idx + highlight.length)}
    </>
  );
}

export default function LeadMagnetPage({ config, guideUrl }: Props) {
  const { content } = config;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* ── Minimal LP Header ─────────────────────────────────────────────── */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Image
            src="/logo-white.png"
            alt="VeryMuch.ai"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,212,174,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

            {/* Left col */}
            <div className="flex flex-col gap-6">
              {content.badge && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-4 py-1.5 text-xs font-semibold text-brand-mint uppercase tracking-widest">
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
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-mint/15 border border-brand-mint/30 flex items-center justify-center text-brand-mint text-xs font-bold">
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Trust bar */}
              <div className="flex items-center gap-3 mt-4 pt-6 border-t border-white/[0.08]">
                <div className="flex -space-x-2">
                  {["#4AD4AE", "#F5A040", "#8B5CF6"].map((c) => (
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
            </div>

            {/* Right col — form */}
            <div className="lg:sticky lg:top-8">
              <LeadMagnetForm config={config} guideUrl={guideUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Qué incluye ───────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-brand-dark-2">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">Qué incluye</h2>
          <p className="text-white/40 text-sm mb-10">
            Todo lo que necesitas para implementarlo este fin de semana.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.includes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 flex flex-col gap-2 hover:border-brand-mint/30 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white">{tool.name}</span>
                  {tool.url && (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-mint/60 hover:text-brand-mint transition-colors"
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
      <section className="border-t border-white/[0.06] bg-brand-dark-2">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-semibold text-brand-mint uppercase tracking-widest">
            ✦ {content.badge ?? "Blueprint Gratuito"}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight">
            Empieza a capturar señales de intención{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              esta semana
            </span>
          </h2>
          <p className="text-white/50 text-sm max-w-md leading-relaxed">
            {content.subheadline}
          </p>
          <a
            href="#hero"
            className="inline-block px-8 py-4 rounded-xl font-bold text-sm text-brand-dark bg-brand-gradient hover:opacity-90 transition-opacity"
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
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Image
            src="/logo-white.png"
            alt="VeryMuch.ai"
            width={120}
            height={30}
            className="h-6 w-auto object-contain opacity-50"
          />
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} VeryMuch.ai — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
