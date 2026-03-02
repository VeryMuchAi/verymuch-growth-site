import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-extrabold mb-4">VeryMuch.ai</h1>
      <p className="text-gray-500 text-lg mb-10">
        Growth site — landing pages &amp; lead magnets.
      </p>
      <div className="flex flex-col items-center gap-3">
        <Link
          href="/lp/ventas"
          className="text-indigo-600 hover:underline font-medium"
        >
          → Sales Landing Page
        </Link>
        <Link
          href="/thank-you/base"
          className="text-indigo-600 hover:underline font-medium"
        >
          → Thank You Page
        </Link>
        <Link
          href="/signals-linkedin"
          className="text-indigo-600 hover:underline font-medium"
        >
          → Signals LinkedIn Lead Magnet
        </Link>
      </div>
    </section>
  );
}
