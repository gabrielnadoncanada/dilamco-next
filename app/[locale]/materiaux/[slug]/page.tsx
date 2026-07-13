import { createPageCollection } from "@/features/page-builder";
import {
  PUBLIC_MATERIAL_PAGE_SLUGS,
  getMaterialPageBySlug,
} from "@/data/page-builder/material-pages";

const { generateStaticParams, generateMetadata, Page } = createPageCollection({
  publicSlugs: PUBLIC_MATERIAL_PAGE_SLUGS,
  getBySlug: getMaterialPageBySlug,
});

export const dynamicParams = false;

export { generateStaticParams, generateMetadata };
export default Page;
