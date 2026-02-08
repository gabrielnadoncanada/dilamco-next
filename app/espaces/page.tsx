import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/espaces";

export { metadata };

export default function EspacesPage() {
  return <ArticlePageTemplate data={pageData} />;
}
