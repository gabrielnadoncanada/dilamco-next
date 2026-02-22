import { createCollectionPage } from "@/lib/create-collection-page";
import {
  PUBLIC_COMPARATIF_PAGE_SLUGS,
  getComparatifPageBySlug,
} from "@/data/comparatif-pages";

const { generateStaticParams, generateMetadata, Page } = createCollectionPage({
  publicSlugs: PUBLIC_COMPARATIF_PAGE_SLUGS,
  getBySlug: getComparatifPageBySlug,
});

export { generateStaticParams, generateMetadata };
export default Page;
