import type { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  PUBLIC_COMPARATIF_PAGE_SLUGS,
  getComparatifPageBySlug,
  type ComparatifSlug,
} from "@/data/comparatif-pages";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";

type Params = { slug: string };

export function generateStaticParams() {
  return PUBLIC_COMPARATIF_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getAccessibleEntity(
    getComparatifPageBySlug(slug, { includeDrafts: true }),
  );
  if (!page) return {};
  return page.metadata;
}

export default async function ComparatifPage({
  params,
}: {
  params: Promise<{ slug: ComparatifSlug }>;
}) {
  const { slug } = await params;
  const page = await requireAccessibleEntity(
    getComparatifPageBySlug(slug, { includeDrafts: true }),
  );

  return <ArticlePageTemplate data={page.pageData} />;
}
