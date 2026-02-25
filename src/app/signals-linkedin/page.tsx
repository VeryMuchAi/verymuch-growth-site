import type { Metadata } from "next";
import { signalsLinkedinConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = signalsLinkedinConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
    type: "website",
    siteName: "VeryMuch.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
  },
};

export default function SignalsLinkedinPage() {
  // NOTION_URL is read server-side — never exposed to the client bundle
  const guideUrl = process.env.NOTION_URL ?? "#";

  return <LeadMagnetPage config={signalsLinkedinConfig} guideUrl={guideUrl} />;
}
