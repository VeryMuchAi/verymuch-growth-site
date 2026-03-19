import type { Metadata } from "next";
import "./globals.css";

const OG_IMAGE = "https://www.verymuch.ai/og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.verymuch.ai"),
  title: {
    default:  "VeryMuch.ai",
    template: "%s | VeryMuch.ai",
  },
  description: "VeryMuch.ai — AI Agents for Sales & Marketing.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png",    type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple:    "/icon.png",
  },
  openGraph: {
    type:      "website",
    siteName:  "VeryMuch.ai",
    images:    [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VeryMuch.ai" }],
  },
  twitter: {
    card:   "summary_large_image",
    images: [OG_IMAGE],
  },
};

// Each locale/route sub-layout renders its own <html lang> and <body>.
// This root layout exists only to export shared metadata and global CSS.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
