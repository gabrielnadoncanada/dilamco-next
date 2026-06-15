import { createStaticPage } from "@/features/page-builder";

const { generateMetadata, Page } = createStaticPage("materiaux");

export { generateMetadata };
export default Page;
