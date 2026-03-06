import { createPageCollection } from "@/page-builder";
import {
  PUBLIC_SERVICE_PAGE_SLUGS,
  getServicePageBySlug,
} from "@/data/page-builder/service-pages";

const { generateStaticParams, generateMetadata, Page } =
  createPageCollection({
    publicSlugs: PUBLIC_SERVICE_PAGE_SLUGS,
    getBySlug: getServicePageBySlug,
  });

export { generateStaticParams, generateMetadata };
export default Page;
