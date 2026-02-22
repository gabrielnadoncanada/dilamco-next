import { createStaticPage } from "@/lib/create-static-page";
import * as data from "@/data/static-pages/services";

const { metadata, Page } = createStaticPage(data);
export { metadata };
export default Page;
