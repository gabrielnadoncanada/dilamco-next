import { createPageTemplate } from "@/features/page-builder";
import { renovationPage as page } from "@/data/page-builder/service-pages/renovation";

const { metadata, Page } = createPageTemplate(page);
export { metadata };
export default Page;
