import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // On exclut les API, les internes Next et tout chemin contenant un "."
  // (fichiers statiques). /landing est sous [locale] et reste noindex.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
