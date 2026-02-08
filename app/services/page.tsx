import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/services";

export { metadata };

export default function ServicesPage() {
  return <ArticlePageTemplate data={pageData} />;
}
