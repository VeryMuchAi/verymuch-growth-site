"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const GHL = "https://api.leadconnectorhq.com/widget/bookings/very-much-ai-landing-page";

const NAV_LINKS = [
  { label: "Servicios",        href: "#services" },
  { label: "Cómo funciona",   href: "#how" },
  { label: "Agentes",         href: "#agents" },
  { label: "Por qué nosotros",href: "#why" },
  { label: "Recursos",        href: "#resources" },
];

export default function HomeNav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
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
          "fixed left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-[rgba(10,10,11,0.88)] backdrop-blur-2xl border-b border-white/[0.07]"
            : "bg-transparent",
        ].join(" ")}
        style={{ top: 40, height: 72 }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo-white.png"
              alt="VeryMuch.ai"
              width={160}
              height={40}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                role="listitem"
                className="relative text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-brand-gradient group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={GHL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(245,64,94,0.3)]"
            style={{
              background: "linear-gradient(135deg,#F5405E 0%,#F5A05E 100%)",
              boxShadow: "0 2px 12px rgba(245,64,94,0.2)",
            }}
          >
            Agenda una llamada
          </a>

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
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${extra}`}
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
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8",
          "bg-[rgba(10,10,11,0.97)] backdrop-blur-2xl transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ paddingTop: 112 }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white/60 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href={GHL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3.5 rounded-xl text-base font-bold text-white"
          style={{ background: "linear-gradient(135deg,#F5405E 0%,#F5A05E 100%)" }}
        >
          Agenda una llamada
        </a>
      </div>
    </>
  );
}
