import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { routing, type AppLocale } from "@/i18n/routing";
import {
  getStaticPage,
  type StaticPageKey,
} from "@/data/page-builder/static-pages";
import { getPageTemplate } from "./template-registry";
import { validateTemplatePage } from "./validate-template-page";

function resolveLocale(value: string | undefined): AppLocale {
  return hasLocale(routing.locales, value) ? value : routing.defaultLocale;
}

/**
 * Factory locale-aware pour une page statique (chemin fixe sous [locale]).
 * Sert le contenu EN si disponible, sinon fallback FR.
 */
export function createStaticPage(key: StaticPageKey) {
  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = resolveLocale(raw);
    return createPageMetadata(getStaticPage(key, locale).metadata, locale);
  }

  async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale: raw } = await params;
    const locale = resolveLocale(raw);
    setRequestLocale(locale);

    const page = getStaticPage(key, locale);
    const template = getPageTemplate(page.template);
    if (!template) {
      throw new Error(`Unknown page template "${page.template}".`);
    }
    validateTemplatePage(page, template.blockRegistry);
    return template.render(page);
  }

  return { generateMetadata, Page };
}
