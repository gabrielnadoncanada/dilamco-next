import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  getMaterialPageBySlug,
  PUBLIC_MATERIAL_PAGE_SLUGS,
  type MaterialSlug,
} from "@/data/material-pages";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";

type Params = { slug: string };

export function generateStaticParams() {
  return PUBLIC_MATERIAL_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getAccessibleEntity(
    getMaterialPageBySlug(slug, { includeDrafts: true }),
  );
  if (!page) return {};
  return page.metadata;
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: MaterialSlug }> }) {
  const { slug } = await params;
  const page = await requireAccessibleEntity(
    getMaterialPageBySlug(slug, { includeDrafts: true }),
  );

  return <ArticlePageTemplate data={page.pageData} />;
}
