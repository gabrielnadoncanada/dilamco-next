import { createPageTemplate } from "@/features/page-builder";
import { page } from "@/data/page-builder/static-pages/a-propos";

const { metadata, Page } = createPageTemplate(page);
export { metadata };
export default Page;
