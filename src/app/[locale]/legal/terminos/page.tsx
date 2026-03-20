import type { Metadata } from "next";
import TermsContentES from "@/components/legal/TermsContentES";
import TermsContentEN from "@/components/legal/TermsContentEN";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Terms and Conditions | Verymuch.ai",
      description:
        "Terms and conditions for the use of Verymuch.ai website and services — Very Much LLC.",
      robots: { index: false, follow: true },
    };
  }
  return {
    title: "Términos y Condiciones | Verymuch.ai",
    description:
      "Términos y condiciones de uso del sitio web y servicios de Verymuch.ai — Very Much LLC.",
    robots: { index: false, follow: true },
  };
}

export default async function LegalTerminosPage({ params }: Props) {
  const { locale } = await params;
  if (locale === "en") return <TermsContentEN />;
  return <TermsContentES />;
}
