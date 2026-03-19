import type { Metadata } from "next";
import { signalsLinkedinConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = signalsLinkedinConfig;

const BASE_URL = "https://www.verymuch.ai";
const esPath   = "/signals-linkedin";
const enPath   = "/en/signals-linkedin";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${BASE_URL}${esPath}`,
    languages: {
      es:          `${BASE_URL}${esPath}`,
      en:          `${BASE_URL}${enPath}`,
      "x-default": `${BASE_URL}${esPath}`,
    },
  },
  openGraph: {
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
    type: "website",
    siteName: "VeryMuch.ai",
    url: `${BASE_URL}${esPath}`,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
  },
};

export default function SignalsLinkedinPage() {
  const guideUrl = process.env.NOTION_URL_SIGNALS_LINKEDIN ?? process.env.NOTION_URL ?? "#";
  return <LeadMagnetPage config={signalsLinkedinConfig} guideUrl={guideUrl} />;
}
