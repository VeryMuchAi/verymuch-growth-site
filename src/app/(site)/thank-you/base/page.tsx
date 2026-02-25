import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouBasePage() {
  return (
    <section className="max-w-lg mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-5">🎉</div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        ¡Gracias por tu interés!
      </h1>
      <p className="text-gray-500 leading-relaxed text-lg mb-8">
        Recibimos tus datos correctamente. Un miembro de nuestro equipo se
        pondrá en contacto contigo muy pronto.
      </p>
      <Link href="/" className="text-indigo-600 font-semibold hover:underline">
        ← Volver al inicio
      </Link>
    </section>
  );
}
