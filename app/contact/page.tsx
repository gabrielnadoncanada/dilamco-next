import { createStaticPage } from "@/lib/create-static-page";
import * as data from "@/data/static-pages/contact";

const { metadata, Page } = createStaticPage(data);
export { metadata };
export default Page;
