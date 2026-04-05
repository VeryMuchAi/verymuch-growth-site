"use client";

// ─── Brand type (also used in lead-magnet.ts via BrandEntry) ─────────────────

export interface Brand {
  name: string;
  /** Fallback dot color (hex) — used when no iconSlug or image fails to load */
  dot: string;
  /** Simple Icons slug — renders real logo via cdn.simpleicons.org */
  iconSlug?: string;
}

// ─── Default brand sets (homepage / newsletter) ───────────────────────────────

const ROW1: Brand[] = [
  { name: "Claude",      dot: "#E8832A", iconSlug: "anthropic" },
  { name: "ChatGPT",     dot: "#10A37F", iconSlug: "openai" },
  { name: "Gemini",      dot: "#4285F4", iconSlug: "googlegemini" },
  { name: "Perplexity",  dot: "#1FB8CD", iconSlug: "perplexity" },
  { name: "Google",      dot: "#EA4335", iconSlug: "google" },
  { name: "n8n",         dot: "#EA4B71", iconSlug: "n8n" },
  { name: "Zapier",      dot: "#FF4A00", iconSlug: "zapier" },
  { name: "Supabase",    dot: "#3ECF8E", iconSlug: "supabase" },
  { name: "Vercel",      dot: "#888888", iconSlug: "vercel" },
  { name: "Make",        dot: "#7B2CFF" },
];

const ROW2: Brand[] = [
  { name: "HubSpot",     dot: "#FF7A59", iconSlug: "hubspot" },
  { name: "Salesforce",  dot: "#00A1E0", iconSlug: "salesforce" },
  { name: "Pipedrive",   dot: "#067279", iconSlug: "pipedrive" },
  { name: "LinkedIn",    dot: "#0A66C2", iconSlug: "linkedin" },
  { name: "GoHighLevel", dot: "#F97316" },
  { name: "Clay",        dot: "#C084FC" },
  { name: "Trigify",     dot: "#F5A040" },
  { name: "Instantly",   dot: "#6366F1" },
  { name: "Node.js",     dot: "#339933", iconSlug: "nodedotjs" },
];

// ─── Component props ──────────────────────────────────────────────────────────

interface Props {
  /** "adaptive" uses CSS vars (homepage / newsletter — light + dark aware)
   *  "dark" forces dark treatment (standalone lead magnet pages) */
  variant?: "adaptive" | "dark";
  /** Optional label above the marquee. Pass null to hide completely. */
  label?: string | null;
  /**
   * Custom brand list for lead-magnet pages.
   * When provided, overrides default ROW1/ROW2 and shows two rows
   * with the same set (one left, one right) for a focused stack display.
   */
  brands?: Brand[];
}

// ─── Single brand chip ────────────────────────────────────────────────────────

function BrandChip({ brand, dark }: { brand: Brand; dark: boolean }) {
  // Simple Icons CDN — white on dark, brand color on light
  const logoUrl = brand.iconSlug
    ? `https://cdn.simpleicons.org/${brand.iconSlug}/${dark ? "ffffff" : brand.dot.replace("#", "")}`
    : null;

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
      {logoUrl ? (
        /* Real brand logo */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={brand.name}
          width={14}
          height={14}
          className="w-3.5 h-3.5 object-contain flex-shrink-0"
          loading="lazy"
          onError={(e) => {
            // Fallback to dot if CDN image fails
            const el = e.currentTarget;
            el.style.display = "none";
            const dot = el.nextElementSibling as HTMLElement | null;
            if (dot) dot.style.display = "inline-block";
          }}
        />
      ) : null}
      {/* Dot fallback — hidden when logo loads, visible when no iconSlug */}
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: brand.dot,
          display: logoUrl ? "none" : "inline-block",
        }}
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
  brands,
}: Props) {
  const dark = variant === "dark";

  // When custom brands provided: split into two rows (half each, or duplicate)
  // for a cleaner focused display
  const row1 = brands ?? ROW1;
  const row2 = brands
    ? [...brands].reverse()  // reversed set for visual contrast
    : ROW2;

  // Durations: custom brand list is shorter so needs faster animation
  const dur1 = brands ? Math.max(12, brands.length * 3.5) : 28;
  const dur2 = brands ? Math.max(15, brands.length * 4.2) : 34;

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
              color:   dark ? "rgba(255,255,255,0.20)" : "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            {label}
          </p>
        )}

        {/* Row 1 — scrolls left */}
        <MarqueeRow brands={row1} direction="left"  duration={dur1} dark={dark} />

        {/* Row 2 — scrolls right */}
        <div className="mt-3">
          <MarqueeRow brands={row2} direction="right" duration={dur2} dark={dark} />
        </div>
      </div>
    </section>
  );
}
