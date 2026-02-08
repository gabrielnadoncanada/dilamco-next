import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import {
  GUIDE_PAGE_SLUGS,
  getGuidePageBySlug,
  type GuideSlug,
} from "@/data/guide-pages";

type Params = { slug: string };

export function generateStaticParams() {
  return GUIDE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePageBySlug(slug);
  if (!page) return {};
  return page.metadata;
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: GuideSlug }>;
}) {
  const { slug } = await params;
  const page = getGuidePageBySlug(slug);
  if (!page) notFound();

  return <ArticlePageTemplate data={page.pageData} />;
}
