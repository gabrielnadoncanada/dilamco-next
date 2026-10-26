import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // skipTrailingSlashRedirect est actif pour le proxy PostHog (next.config.ts) :
  // on refait ici la redirection 308 /page/ -> /page de Next.
  // `new URL` et non `nextUrl.clone()` : NextURL rajoute la barre finale.
  const url = new URL(request.url);
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }
  return intlMiddleware(request);
}

export const config = {
  // On exclut les API, les internes Next, le proxy PostHog (/ingest) et tout
  // chemin contenant un "." (fichiers statiques). /landing est sous [locale]
  // et reste noindex.
  matcher: ["/((?!api|_next|_vercel|ingest|.*\\..*).*)"],
};
