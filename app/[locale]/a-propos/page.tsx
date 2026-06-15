import { createStaticPage } from "@/features/page-builder";

const { generateMetadata, Page } = createStaticPage("a-propos");

export { generateMetadata };
export default Page;
