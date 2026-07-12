import { createPageCollection } from "@/features/page-builder";
import {
  PUBLIC_SPACE_PAGE_SLUGS,
  getSpacePageBySlug,
} from "@/data/page-builder/space-pages";

const { generateStaticParams, generateMetadata, Page } = createPageCollection({
  publicSlugs: PUBLIC_SPACE_PAGE_SLUGS,
  getBySlug: getSpacePageBySlug,
  paramName: "space",
});

export const dynamicParams = false;

export { generateStaticParams, generateMetadata };
export default Page;
