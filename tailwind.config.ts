import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Verymuch.ai — Brand Book v1 · Abril 2026
// Two-mode system: Day (paper) + Night (ink). Same tokens, different canvas.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Theme-aware tokens (resolve via CSS variables) ────────────────────
        vm: {
          bg:      "var(--bg-primary)",
          "bg-2":  "var(--bg-secondary)",
          card:    "var(--bg-card)",
          "card-2":"var(--bg-card-2)",
          fg:      "var(--text-primary)",
          "fg-2":  "var(--text-secondary)",
          "fg-3":  "var(--text-muted)",
          line:    "var(--border)",
          eyebrow: "var(--eyebrow)",
          orange:  "var(--accent-orange)",
          teal:    "var(--accent-teal)",
          ok:      "var(--success)",
          error:   "var(--error)",
          info:    "var(--info)",
        },
        // ── Brand Book palette (fixed, non-theme) ─────────────────────────────
        paper: {
          DEFAULT: "#F0EEE8",
          soft:    "#EAE6D9",
          line:    "#D8D2C2",
          card:    "#FDFCF8",
          "card-2":"#FBFAF5",
        },
        ink: {
          DEFAULT: "#151514",
          raised:  "#1D1D1C",
          line:    "#2A2A28",
          muted:   "#3A3A38",
        },
        grad: {
          teal:  "#ACEDEB",
          sage:  "#BCDAC7",
          honey: "#D7CCA0",
          peach: "#DAB882",
        },
        brand: {
          orange:      "#D97757",
          "orange-deep":"#C56344",
          teal:        "#2C6B65",
          "teal-light":"#ACEDEB",
        },
      },
      backgroundImage: {
        // Gradiente firma (from logo badge — never alter)
        "vm-grad":      "linear-gradient(90deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)",
        "vm-grad-135":  "linear-gradient(135deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)",
        "vm-grad-v":    "linear-gradient(180deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)",
        "vm-grad-soft": "linear-gradient(90deg, rgba(172,237,235,.25), rgba(218,184,130,.25))",
        "vm-grad-soft-e":"linear-gradient(90deg, rgba(172,237,235,.18), rgba(218,184,130,.22))",
      },
      fontFamily: {
        // Inter — display + body (Brand Book v1)
        sans:    ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        vm:       "10px",   // buttons
        "vm-lg":  "14px",   // cards
        "vm-xl":  "18px",   // large cards
      },
      boxShadow: {
        "vm-sm":   "0 1px 2px rgba(0,0,0,.06)",
        "vm-md":   "0 6px 18px -10px rgba(0,0,0,.12)",
        "vm-lg":   "0 16px 32px -10px rgba(0,0,0,.18)",
        "vm-md-e": "0 12px 30px -10px rgba(0,0,0,.5)",
      },
      transitionTimingFunction: {
        vm: "cubic-bezier(.2,.8,.2,1)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
