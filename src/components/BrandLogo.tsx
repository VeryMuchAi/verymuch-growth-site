type Size = "sm" | "md" | "lg";

interface Props {
  size?: Size;
  className?: string;
}

// Inline reproduction of the Brand Book v1 wordmark:
// "Verymuch." (ink/paper depending on theme) + ".Ai" badge filled with
// the signature gradient, dark ink text, rounded corners.
// Brand rules: never alter gradient, never alter proportions.

const SIZE_MAP: Record<Size, { text: string; badgeText: string; badgePad: string; gap: string; radius: string }> = {
  sm: { text: "text-[17px]", badgeText: "text-[14px]", badgePad: "px-1.5 py-0.5", gap: "gap-1",   radius: "rounded-[4px]" },
  md: { text: "text-[22px]", badgeText: "text-[18px]", badgePad: "px-2 py-0.5",   gap: "gap-1.5", radius: "rounded-[6px]" },
  lg: { text: "text-[30px]", badgeText: "text-[24px]", badgePad: "px-2.5 py-1",   gap: "gap-1.5", radius: "rounded-[8px]" },
};

export default function BrandLogo({ size = "md", className = "" }: Props) {
  const s = SIZE_MAP[size];
  return (
    <span
      aria-label="Verymuch.ai"
      className={`inline-flex items-center ${s.gap} font-display ${className}`}
      style={{ fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1 }}
    >
      <span className={s.text} style={{ color: "var(--text-primary)" }}>
        Verymuch.
      </span>
      <span
        className={`${s.badgeText} ${s.badgePad} ${s.radius} inline-flex items-center`}
        style={{
          background: "var(--vm-grad)",
          color: "#151514",
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        Ai
      </span>
    </span>
  );
}
