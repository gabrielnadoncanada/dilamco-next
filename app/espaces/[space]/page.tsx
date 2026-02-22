import { createCollectionPage } from "@/lib/create-collection-page";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import {
  PUBLIC_SPACE_PAGE_SLUGS,
  getSpacePageBySlug,
} from "@/data/space-pages";

const { generateStaticParams, generateMetadata, Page } = createCollectionPage({
  publicSlugs: PUBLIC_SPACE_PAGE_SLUGS,
  getBySlug: getSpacePageBySlug,
  paramName: "space",
  Template: SpacePageTemplate,
});

export { generateStaticParams, generateMetadata };
export default Page;
