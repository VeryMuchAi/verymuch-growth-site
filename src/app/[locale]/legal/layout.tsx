import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LegalLayout({ children, params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });

  return (
    <>
      <header
        className="sticky top-0 z-10 border-b px-6 py-5 flex items-center justify-between bg-[#FAFAF8]"
        style={{ borderColor: "rgba(26, 26, 29, 0.08)" }}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/Verymuch_Logo_transparent_real.png"
            alt="VeryMuch.ai"
            width={140}
            height={34}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium transition-opacity hover:opacity-100 opacity-70"
          style={{ color: "#363536" }}
        >
          {t("back_home")}
        </Link>
      </header>
      <main className="min-h-screen bg-[#FAFAF8] pb-24 px-6 pt-8">
        <article
          className={[
            "mx-auto max-w-3xl prose prose-neutral",
            "prose-headings:font-display prose-headings:text-[#363536] prose-headings:tracking-tight",
            "prose-p:text-[#363536]/85 prose-p:leading-relaxed",
            "prose-li:text-[#363536]/85",
            "prose-a:text-[#F5A05E] prose-a:no-underline hover:prose-a:underline",
            "prose-strong:text-[#363536]",
          ].join(" ")}
        >
          {children}
        </article>
      </main>
    </>
  );
}
