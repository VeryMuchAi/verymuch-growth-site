import type { Metadata } from "next";
import PrivacyContentES from "@/components/legal/PrivacyContentES";
import PrivacyContentEN from "@/components/legal/PrivacyContentEN";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Privacy Policy | Verymuch.ai",
      description:
        "Personal data protection policy for Verymuch.ai — Very Much LLC.",
      robots: { index: false, follow: true },
    };
  }
  return {
    title: "Aviso de Privacidad | Verymuch.ai",
    description:
      "Política de protección de datos personales de Verymuch.ai — Very Much LLC.",
    robots: { index: false, follow: true },
  };
}

export default async function LegalPrivacidadPage({ params }: Props) {
  const { locale } = await params;
  if (locale === "en") return <PrivacyContentEN />;
  return <PrivacyContentES />;
}
