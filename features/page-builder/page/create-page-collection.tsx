import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getAccessibleEntity, requireAccessibleEntity } from "@/lib/page-access";
import { createPageMetadata } from "@/lib/metadata";
import { routing, type AppLocale } from "@/i18n/routing";
import type { PageTemplateData } from "./create-page-template";
import { renderTemplatePage } from "./template-registry";

type CollectionPageConfig<TSlug extends string> = {
  publicSlugs: TSlug[];
  getBySlug: (
    slug: string,
    locale: AppLocale,
    opts?: { includeDrafts?: boolean },
  ) => PageTemplateData | null | undefined;
  paramName?: string;
};

function resolveLocale(value: string | undefined): AppLocale {
  return hasLocale(routing.locales, value) ? value : routing.defaultLocale;
}

export function createPageCollection<TSlug extends string>(
  config: CollectionPageConfig<TSlug>,
) {
  const paramName = config.paramName ?? "slug";

  // Ne renvoie QUE le param de slug : le param `locale` est fourni par
  // generateStaticParams du layout [locale] ; Next combine les deux.
  function generateStaticParams() {
    return config.publicSlugs.map((slug) => ({ [paramName]: slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolveLocale(resolvedParams.locale);
    const page = await getAccessibleEntity(
      config.getBySlug(resolvedParams[paramName], locale, {
        includeDrafts: true,
      }),
    );

    if (!page) return {};

    return createPageMetadata(page.metadata, locale);
  }

  async function Page({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }) {
    const resolvedParams = await params;
    const locale = resolveLocale(resolvedParams.locale);
    setRequestLocale(locale);
    const page = await requireAccessibleEntity(
      config.getBySlug(resolvedParams[paramName], locale, {
        includeDrafts: true,
      }),
    );

    return renderTemplatePage(page);
  }

  return { generateStaticParams, generateMetadata, Page };
}
