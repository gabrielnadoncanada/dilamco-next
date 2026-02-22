import { createCollectionPage } from "@/lib/create-collection-page";
import {
  PUBLIC_GUIDE_PAGE_SLUGS,
  getGuidePageBySlug,
} from "@/data/guide-pages";

const { generateStaticParams, generateMetadata, Page } = createCollectionPage({
  publicSlugs: PUBLIC_GUIDE_PAGE_SLUGS,
  getBySlug: getGuidePageBySlug,
});

export { generateStaticParams, generateMetadata };
export default Page;
