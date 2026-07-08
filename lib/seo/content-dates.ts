import { SITE } from "@/seo/schema/site";
import contentDates from "./content-dates.json";

const DATES = contentDates as Record<string, string>;

/**
 * Date (YYYY-MM-DD) du dernier commit de contenu pour un `path` de page builder
 * (ex. "/espaces/walk-in"). Générée au build par scripts/build-content-dates.mjs.
 * `undefined` si le path n'est pas daté (aucune date affichée → jamais inventée).
 */
export function getContentDate(path: string): string | undefined {
  return DATES[path];
}

/**
 * Variante à partir d'une URL absolue de page (ex. la dernière breadcrumb).
 * Retire l'origine du site pour retrouver le `path`.
 */
export function getContentDateFromUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  const path = url.startsWith(SITE.url) ? url.slice(SITE.url.length) || "/" : url;
  return getContentDate(path);
}
