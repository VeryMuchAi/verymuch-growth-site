import type { Metadata } from "next";
import { claudeCodeConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = claudeCodeConfig;

const BASE_URL = "https://verymuch.ai";
const esPath   = "/claude-code-remote-control";
const enPath   = "/en/claude-code-remote-control";
const ogTitle  = seo.ogTitle       ?? seo.title;
const ogDesc   = seo.ogDescription ?? seo.description;

export const metadata: Metadata = {
  title:       { absolute: seo.title },
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
    type:        "website",
    siteName:    "VeryMuch.ai",
    locale:      "es_ES",
    url:         `${BASE_URL}${esPath}`,
    title:       ogTitle,
    description: ogDesc,
  },
  twitter: {
    card:        "summary_large_image",
    title:       ogTitle,
    description: ogDesc,
  },
};

export default function ClaudeCodeRemoteControlPage() {
  const guideUrl =
    process.env.NOTION_URL_CLAUDE_CODE_REMOTE_CONTROL ??
    process.env.NOTION_URL ??
    "#";
  return <LeadMagnetPage config={claudeCodeConfig} guideUrl={guideUrl} />;
}
