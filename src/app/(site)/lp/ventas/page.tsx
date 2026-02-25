"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";

function VentasForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const payload = {
      name,
      email,
      leadMagnetSlug: "ventas-general",
      utm_source: searchParams.get("utm_source") ?? undefined,
      utm_medium: searchParams.get("utm_medium") ?? undefined,
      utm_campaign: searchParams.get("utm_campaign") ?? undefined,
      utm_term: searchParams.get("utm_term") ?? undefined,
      utm_content: searchParams.get("utm_content") ?? undefined,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message ?? "Something went wrong.");

      router.push("/thank-you/base");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex justify-center items-start px-6 py-16">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
          Aumenta tus ventas con IA
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Déjanos tu información y te contactaremos con un plan personalizado.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1" noValidate>
          <label className="text-sm font-semibold text-gray-700 mt-3" htmlFor="name">
            Nombre completo
          </label>
          <input
            id="name" name="name" type="text" required placeholder="Tu nombre"
            className="px-3.5 py-2.5 border border-gray-300 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label className="text-sm font-semibold text-gray-700 mt-3" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email" name="email" type="email" required placeholder="tu@empresa.com"
            className="px-3.5 py-2.5 border border-gray-300 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold rounded-lg transition-colors"
          >
            {loading ? "Enviando…" : "Quiero saber más →"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function VentasPage() {
  return (
    <Suspense fallback={null}>
      <VentasForm />
    </Suspense>
  );
}
