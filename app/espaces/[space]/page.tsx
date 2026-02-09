import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import {
  getSpacePageBySlug,
  SPACE_PAGE_SLUGS,
  type SpaceSlug,
} from "@/data/space-pages";

type Params = { space: string };

export function generateStaticParams() {
  return SPACE_PAGE_SLUGS.map((space) => ({ space }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { space } = await params;
  const page = getSpacePageBySlug(space);
  if (!page) return {};
  return page.metadata;
}

export default async function SpacePage({
  params,
}: {
  params: Promise<{ space: SpaceSlug }>;
}) {
  const { space } = await params;
  const page = getSpacePageBySlug(space);
  if (!page) notFound();

  return <SpacePageTemplate data={page.pageData} />;
}
