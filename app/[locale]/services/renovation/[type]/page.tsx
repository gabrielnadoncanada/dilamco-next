import { createPageCollection } from "@/features/page-builder";
import {
  PUBLIC_RENOVATION_PAGE_TYPES,
  getRenovationPageByType,
} from "@/data/page-builder/renovation-pages";

const { generateStaticParams, generateMetadata, Page } = createPageCollection({
  publicSlugs: PUBLIC_RENOVATION_PAGE_TYPES,
  getBySlug: getRenovationPageByType,
  paramName: "type",
});

export const dynamicParams = false;

export { generateStaticParams, generateMetadata };
export default Page;
