import { createPageTemplate } from "@/page-builder";
import { page } from "@/data/page-builder/static-pages/espaces";

const { metadata, Page } = createPageTemplate(page);
export { metadata };
export default Page;
