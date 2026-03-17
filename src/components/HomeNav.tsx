"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

const NAV_LINKS = [
  { label: "Servicios",        href: "#services" },
  { label: "Cómo funciona",   href: "#how" },
  { label: "Agentes",         href: "#agents" },
  { label: "Recursos",        href: "#resources" },
  { label: "Marketplace",     href: "https://app.verymuch.ai", external: true },
];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme }  = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Sticky nav ───────────────────────────────────────────────────── */}
      <nav
        aria-label="Navegación principal"
        className={[
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl border-b"
            : "bg-transparent",
        ].join(" ")}
        style={{
          top: 0,
          height: 64,
          background: scrolled ? "color-mix(in srgb, var(--bg-primary) 92%, transparent)" : undefined,
          borderColor: scrolled ? "var(--border)" : undefined,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo-white.png"
              alt="VeryMuch.ai"
              width={148}
              height={36}
              className="h-7 w-auto object-contain logo-adaptive"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                role="listitem"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-100 opacity-60"
                style={{ color: "var(--text-primary)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop right: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-200 opacity-50 hover:opacity-100 border"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <a
              href={GHL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{ background: "var(--accent)", color: "#363536" }}
            >
              Agenda una consultoría gratuita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {[
              menuOpen ? "translate-y-[7px] rotate-45" : "",
              menuOpen ? "opacity-0 scale-x-0" : "",
              menuOpen ? "-translate-y-[7px] -rotate-45" : "",
            ].map((extra, i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] rounded transition-all duration-300 ${extra}`}
                style={{ background: "var(--text-primary)" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ───────────────────────────────────────────────── */}
      <div
        aria-modal="true"
        aria-label="Menú móvil"
        role="dialog"
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-7",
          "transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ background: "var(--bg-primary)", paddingTop: 80 }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-2xl font-semibold transition-opacity hover:opacity-100 opacity-60"
            style={{ color: "var(--text-primary)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={GHL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-2 px-8 py-3.5 rounded-xl text-base font-bold"
          style={{ background: "var(--accent)", color: "#363536" }}
        >
          Agenda una consultoría gratuita
        </a>
        <button
          onClick={() => { toggleTheme(); setMenuOpen(false); }}
          aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          className="flex items-center gap-2 text-sm opacity-50 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          <span>{theme === "dark" ? "☀️" : "🌙"}</span>
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
    </>
  );
}
