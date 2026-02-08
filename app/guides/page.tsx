import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/guides";

export { metadata };

export default function GuidesPage() {
  return <ArticlePageTemplate data={pageData} />;
}
