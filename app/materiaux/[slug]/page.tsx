import { createCollectionPage } from "@/lib/create-collection-page";
import {
  PUBLIC_MATERIAL_PAGE_SLUGS,
  getMaterialPageBySlug,
} from "@/data/material-pages";

const { generateStaticParams, generateMetadata, Page } = createCollectionPage({
  publicSlugs: PUBLIC_MATERIAL_PAGE_SLUGS,
  getBySlug: getMaterialPageBySlug,
});

export { generateStaticParams, generateMetadata };
export default Page;
