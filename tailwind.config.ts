import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core brand palette — from VeryMuch.ai style guide
          dark:       "#0C0C0E",   // near-black LP background
          "dark-2":   "#111113",   // surface / card
          "dark-3":   "#1A1A1D",   // elevated card
          mint:       "#4AD4AE",   // primary accent (teal-mint)
          "mint-dim": "#DDEAEE",   // light mint / muted text on dark
          amber:      "#F5A040",   // warm accent (amber/orange)
          gray:       "#363536",   // dark gray
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4AD4AE 0%, #F5A040 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,212,174,0.15) 0%, transparent 60%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
  plugins: [],
};

export default config;
