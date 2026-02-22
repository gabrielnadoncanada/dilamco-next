import type { Metadata } from "next";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import {
  getSpacePageBySlug,
  PUBLIC_SPACE_PAGE_SLUGS,
  type SpaceSlug,
} from "@/data/space-pages";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";

type Params = { space: string };

export function generateStaticParams() {
  return PUBLIC_SPACE_PAGE_SLUGS.map((space) => ({ space }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { space } = await params;
  const page = await getAccessibleEntity(
    getSpacePageBySlug(space, { includeDrafts: true }),
  );
  if (!page) return {};
  return page.metadata;
}

export default async function SpacePage({
  params,
}: {
  params: Promise<{ space: SpaceSlug }>;
}) {
  const { space } = await params;
  const page = await requireAccessibleEntity(
    getSpacePageBySlug(space, { includeDrafts: true }),
  );

  return <SpacePageTemplate data={page.pageData} />;
}
