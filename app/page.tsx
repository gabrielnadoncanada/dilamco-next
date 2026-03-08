import { createPageTemplate } from "@/page-builder";
import { page } from "@/data/page-builder/static-pages/home";

const { metadata, Page } = createPageTemplate(page);
export { metadata };
export default Page;
