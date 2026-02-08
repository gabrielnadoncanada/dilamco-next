import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/services-renovation";

export { metadata };

export default function ServicesRenovationPage() {
  return <ArticlePageTemplate data={pageData} />;
}
