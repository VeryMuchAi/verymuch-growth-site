import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ai-readiness",
        destination: "https://test-ai.verymuch.ai",
      },
      {
        source: "/ai-readiness/:path*",
        destination: "https://test-ai.verymuch.ai/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
