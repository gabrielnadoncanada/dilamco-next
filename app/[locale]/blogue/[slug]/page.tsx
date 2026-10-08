import { createPageCollection } from "@/features/page-builder";
import {
  PUBLIC_BLOG_POST_SLUGS,
  getBlogPostPageBySlug,
} from "@/data/page-builder/blog-posts";

const { generateStaticParams, generateMetadata, Page } = createPageCollection({
  publicSlugs: PUBLIC_BLOG_POST_SLUGS,
  getBySlug: getBlogPostPageBySlug,
  paramName: "slug",
});

export const dynamicParams = false;

export { generateStaticParams, generateMetadata };
export default Page;
