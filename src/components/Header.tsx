import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="no-underline" aria-label="Verymuch.ai · Inicio">
          <BrandLogo size="sm" />
        </Link>
        <nav className="flex gap-7 items-center">
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/newsletter" className="nav-link">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
