import { createPageCollection } from "@/features/page-builder";
import {
  PUBLIC_ZONE_PAGE_SLUGS,
  getZonePageBySlug,
} from "@/data/page-builder/zone-pages";

const { generateStaticParams, generateMetadata, Page } = createPageCollection({
  publicSlugs: PUBLIC_ZONE_PAGE_SLUGS,
  getBySlug: getZonePageBySlug,
  paramName: "zone",
});

export { generateStaticParams, generateMetadata };
export default Page;
