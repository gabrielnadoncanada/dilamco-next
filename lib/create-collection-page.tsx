import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";
import type { PageFeatures } from "@/types/page-features";

type PageDef = {
  metadata: Metadata;
  pageData: any;
  features?: PageFeatures;
};

type CollectionPageConfig<TSlug extends string> = {
  publicSlugs: TSlug[];
  getBySlug: (
    slug: string,
    opts?: { includeDrafts?: boolean },
  ) => PageDef | null;
  paramName?: string;
  Template?: React.ComponentType<{ data: any }>;
};

export function createCollectionPage<TSlug extends string>(
  config: CollectionPageConfig<TSlug>,
) {
  const paramName = config.paramName ?? "slug";
  const Template = config.Template ?? ArticlePageTemplate;

  function generateStaticParams() {
    return config.publicSlugs.map((slug) => ({ [paramName]: slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }): Promise<Metadata> {
    const resolved = await params;
    const page = await getAccessibleEntity(
      config.getBySlug(resolved[paramName], { includeDrafts: true }),
    );
    if (!page) return {};
    return page.metadata;
  }

  async function Page({
    params,
  }: {
    params: Promise<Record<string, string>>;
  }) {
    const resolved = await params;
    const page = await requireAccessibleEntity(
      config.getBySlug(resolved[paramName], { includeDrafts: true }),
    );
    return <Template data={page.pageData} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
