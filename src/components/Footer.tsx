import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <BrandLogo size="md" />
            </div>
            <p
              className="vm-body-s max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Instalamos agentes de IA en equipos de ventas y marketing.
              Madrid · CDMX.
            </p>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2">
            <p
              className="vm-eyebrow mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Producto
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/servicios/agentes-automatizacion" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Agentes & Automatización
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria-ia" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Consultoría de IA
                </Link>
              </li>
              <li>
                <Link href="/ai-readiness" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Test de Madurez IA
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p
              className="vm-eyebrow mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Recursos
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/blog" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p
              className="vm-eyebrow mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/legal/privacidad" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="vm-body-s hover:opacity-70 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  Términos
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@verymuch.ai"
                  className="vm-body-s hover:opacity-70 transition-opacity"
                  style={{ color: "var(--text-primary)" }}
                >
                  info@verymuch.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="vm-caption" style={{ color: "var(--text-muted)" }}>
            © {year} Verymuch.ai. Todos los derechos reservados.
          </p>
          <div className="h-1 w-24 rounded-full bg-vm-grad" />
        </div>
      </div>
    </footer>
  );
}
