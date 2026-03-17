import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Brand typography: Plus Jakarta Sans (headings) + DM Sans (body)
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://verymuch.ai"
  ),
  title: {
    default: "VeryMuch.ai",
    template: "%s | VeryMuch.ai",
  },
  description: "VeryMuch.ai — Growth pages and lead magnets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {/*
          Inline script runs before React hydrates — sets data-theme on <html>
          without flash (FOUC). Uses next/script beforeInteractive strategy.
          Priority: 1) localStorage  2) time-based auto (light 07-19, dark otherwise)
        */}
        <Script id="vm-theme-init" strategy="beforeInteractive">{`
          (function(){try{
            var s=localStorage.getItem('vm-theme-preference');
            if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);return;}
            var h=new Date().getHours();
            document.documentElement.setAttribute('data-theme',(h>=7&&h<19)?'light':'dark');
          }catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
