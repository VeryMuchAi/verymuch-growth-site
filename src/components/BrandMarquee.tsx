"use client";

// ─── Brand data ───────────────────────────────────────────────────────────────

interface Brand { name: string; dot: string }

const ROW1: Brand[] = [
  { name: "Claude",      dot: "#E8832A" },
  { name: "ChatGPT",     dot: "#10A37F" },
  { name: "Gemini",      dot: "#4285F4" },
  { name: "Perplexity",  dot: "#1FB8CD" },
  { name: "Google",      dot: "#EA4335" },
  { name: "n8n",         dot: "#EA4B71" },
  { name: "Make",        dot: "#7B2CFF" },
  { name: "Zapier",      dot: "#FF4A00" },
  { name: "Supabase",    dot: "#3ECF8E" },
  { name: "Vercel",      dot: "#888888" },
];

const ROW2: Brand[] = [
  { name: "GoHighLevel", dot: "#F97316" },
  { name: "HubSpot",     dot: "#FF7A59" },
  { name: "Salesforce",  dot: "#00A1E0" },
  { name: "Pipedrive",   dot: "#067279" },
  { name: "Clay",        dot: "#C084FC" },
  { name: "Trigify",     dot: "#F5A040" },
  { name: "Instantly",   dot: "#6366F1" },
  { name: "Anthropic",   dot: "#E8832A" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  /** "adaptive" uses CSS vars (homepage / newsletter — light + dark aware)
   *  "dark" forces dark treatment (standalone lead magnet pages) */
  variant?: "adaptive" | "dark";
  /** Optional label above the marquee. Pass null to hide. */
  label?: string | null;
}

// ─── Single brand chip ────────────────────────────────────────────────────────

function BrandChip({ brand, dark }: { brand: Brand; dark: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap flex-shrink-0 select-none"
      style={{
        background:  dark ? "rgba(255,255,255,0.04)" : "var(--bg-card)",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "var(--border)",
        color:       dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)",
        boxShadow:   dark ? "none" : "var(--card-shadow)",
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: brand.dot }}
      />
      {brand.name}
    </span>
  );
}

// ─── One marquee row ──────────────────────────────────────────────────────────

function MarqueeRow({
  brands,
  direction,
  duration,
  dark,
}: {
  brands: Brand[];
  direction: "left" | "right";
  duration: number;
  dark: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 w-max marquee-wrap"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((b, i) => (
          <BrandChip key={`${b.name}-${i}`} brand={b} dark={dark} />
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BrandMarquee({
  variant = "adaptive",
  label = "Stack tecnológico probado en producción",
}: Props) {
  const dark = variant === "dark";

  return (
    <section
      className="py-10 overflow-hidden"
      style={{ background: dark ? "rgba(0,0,0,0.2)" : "var(--bg-secondary)" }}
    >
      {/* Fade masks left + right */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
      >
        {/* Optional label */}
        {label !== null && (
          <p
            className="text-center caption mb-5 px-6"
            style={{
              color: dark ? "rgba(255,255,255,0.20)" : "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            {label}
          </p>
        )}

        {/* Row 1 — scrolls left */}
        <MarqueeRow brands={ROW1} direction="left"  duration={28} dark={dark} />

        {/* Row 2 — scrolls right (offset cadence) */}
        <div className="mt-3">
          <MarqueeRow brands={ROW2} direction="right" duration={34} dark={dark} />
        </div>
      </div>
    </section>
  );
}
