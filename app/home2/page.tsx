import { createPageTemplate } from "@/page-builder";
import { page } from "./page.data";

const { metadata, Page } = createPageTemplate(page);

export { metadata };
export default Page;
