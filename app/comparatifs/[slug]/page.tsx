import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  COMPARATIF_PAGE_SLUGS,
  getComparatifPageBySlug,
  type ComparatifSlug,
} from "@/data/comparatif-pages";

type Params = { slug: string };

export function generateStaticParams() {
  return COMPARATIF_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparatifPageBySlug(slug);
  if (!page) return {};
  return page.metadata;
}

export default async function ComparatifPage({
  params,
}: {
  params: Promise<{ slug: ComparatifSlug }>;
}) {
  const { slug } = await params;
  const page = getComparatifPageBySlug(slug);
  if (!page) notFound();

  return <ArticlePageTemplate data={page.pageData} />;
}
