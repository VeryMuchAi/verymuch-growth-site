import Link from "next/link";

export default function Header() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="vm-heading no-underline"
          style={{ color: "var(--text-primary)" }}
        >
          Verymuch<span style={{ color: "var(--accent-orange)" }}>.</span>Ai
        </Link>
        <nav className="flex gap-7 items-center">
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/newsletter" className="nav-link">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
