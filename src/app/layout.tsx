import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the locale header injected by the next-intl middleware on every request.
  // Falls back to "es" for non-locale routes (privacidad, terminos, etc.).
  const locale = (await headers()).get("x-next-intl-locale") ?? "es";

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {/* No-FOUC theme init — priority: localStorage → time-based */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('vm-theme-preference');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);return;}var h=new Date().getHours();document.documentElement.setAttribute('data-theme',(h>=7&&h<19)?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
