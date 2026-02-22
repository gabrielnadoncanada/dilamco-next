import { createStaticPage } from "@/lib/create-static-page";
import * as data from "@/data/static-pages/home";

const { metadata, Page } = createStaticPage(data);
export { metadata };
export default Page;
