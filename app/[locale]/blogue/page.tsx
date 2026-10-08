import { createStaticPage } from "@/features/page-builder";

const { generateMetadata, Page } = createStaticPage("blogue");

export { generateMetadata };
export default Page;
