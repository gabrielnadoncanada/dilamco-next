import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  PUBLIC_GUIDE_PAGE_SLUGS,
  getGuidePageBySlug,
  type GuideSlug,
} from "@/data/guide-pages";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";

type Params = { slug: string };

export function generateStaticParams() {
  return PUBLIC_GUIDE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getAccessibleEntity(
    getGuidePageBySlug(slug, { includeDrafts: true }),
  );
  if (!page) return {};
  return page.metadata;
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: GuideSlug }>;
}) {
  const { slug } = await params;
  const page = await requireAccessibleEntity(
    getGuidePageBySlug(slug, { includeDrafts: true }),
  );

  return <ArticlePageTemplate data={page.pageData} />;
}
