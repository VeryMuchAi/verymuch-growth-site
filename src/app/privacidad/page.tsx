import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Aviso de privacidad — VeryMuch.ai",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" }}>
      {/* Minimal nav */}
      <header
        className="px-6 py-5 border-b flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <Link href="/" className="flex items-center">
          <BrandLogo size="sm" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-20">
        <p
          className="caption uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--accent)" }}
        >
          Legal
        </p>
        <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          Aviso de privacidad
        </h1>
        <div
          className="rounded-2xl border p-10 text-center"
          style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
        >
          <p className="text-4xl mb-4">🔒</p>
          <p className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            Próximamente
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Estamos preparando nuestro aviso de privacidad.{" "}
            {/* TODO: contenido legal real — RGPD obligatorio antes de producción
                si se capturan datos de residentes UE */}
            Si tienes alguna pregunta, escríbenos a{" "}
            <a
              href="mailto:info@verymuch.ai"
              className="underline"
              style={{ color: "var(--accent)" }}
            >
              info@verymuch.ai
            </a>
            .
          </p>
        </div>
      </main>

      {/* Minimal footer */}
      <footer
        className="px-6 py-8 border-t text-center"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="caption" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} VeryMuch.ai
        </p>
      </footer>
    </div>
  );
}
