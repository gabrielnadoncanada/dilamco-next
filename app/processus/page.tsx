import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/processus";

export { metadata };

export default function ProcessusPage() {
  return <ArticlePageTemplate data={pageData} />;
}
