import { createStaticPage } from "@/lib/create-static-page";
import * as data from "@/data/static-pages/espaces";

const { metadata, Page } = createStaticPage(data);
export { metadata };
export default Page;
