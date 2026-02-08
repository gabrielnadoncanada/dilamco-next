import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  getMaterialPageBySlug,
  MATERIAL_PAGE_SLUGS,
  type MaterialSlug,
} from "@/data/material-pages";

type Params = { slug: string };

export function generateStaticParams() {
  return MATERIAL_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getMaterialPageBySlug(slug);
  if (!page) return {};
  return page.metadata;
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: MaterialSlug }> }) {
  const { slug } = await params;
  const page = getMaterialPageBySlug(slug);
  if (!page) notFound();

  return <ArticlePageTemplate data={page.pageData} />;
}
