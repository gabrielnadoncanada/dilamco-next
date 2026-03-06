import type { Metadata } from "next";
import { getAccessibleEntity, requireAccessibleEntity } from "@/lib/page-access";
import { createPageMetadata } from "@/lib/metadata";
import type { PageTemplateData } from "./create-page-template";
import { renderTemplatePage } from "./template-registry";

type CollectionPageConfig<TSlug extends string> = {
  publicSlugs: TSlug[];
  getBySlug: (
    slug: string,
    opts?: { includeDrafts?: boolean },
  ) => PageTemplateData | null | undefined;
  paramName?: string;
};

export function createPageCollection<TSlug extends string>(
  config: CollectionPageConfig<TSlug>,
) {
  const paramName = config.paramName ?? "slug";

  function generateStaticParams() {
    return config.publicSlugs.map((slug) => ({ [paramName]: slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }): Promise<Metadata> {
    const resolvedParams = await params;
    const page = await getAccessibleEntity(
      config.getBySlug(resolvedParams[paramName], { includeDrafts: true }),
    );

    if (!page) return {};

    return createPageMetadata(page.metadata);
  }

  async function Page({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }) {
    const resolvedParams = await params;
    const page = await requireAccessibleEntity(
      config.getBySlug(resolvedParams[paramName], { includeDrafts: true }),
    );

    return renderTemplatePage(page);
  }

  return { generateStaticParams, generateMetadata, Page };
}
