import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-900 no-underline">
          verymuch.<span className="text-brand-mint">Ai</span>
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/lp/ventas"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sales
          </Link>
          <Link
            href="/signals-linkedin"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blueprint
          </Link>
        </nav>
      </div>
    </header>
  );
}
