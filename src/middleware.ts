import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  // Forward the original pathname so layouts can build hreflang tags
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  // Exclude static files, api, legal pages, and the sales-intelligence proxy route
  matcher: [
    "/((?!api|_next|_vercel|favicon\\.ico|icon\\.png|robots\\.txt|llms\\.txt|sitemap\\.xml|logo.*|Verymuch.*|.*\\..*|privacidad|terminos|sales-intelligence|ai-readiness).*)",
    "/en/:path*",
  ],
};
