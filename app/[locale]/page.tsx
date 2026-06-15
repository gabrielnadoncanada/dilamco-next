import { createStaticPage } from "@/features/page-builder";

const { generateMetadata, Page } = createStaticPage("home");

export { generateMetadata };
export default Page;
