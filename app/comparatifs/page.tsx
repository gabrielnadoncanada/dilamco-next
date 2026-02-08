import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/comparatifs";

export { metadata };

export default function ComparatifsPage() {
  return <ArticlePageTemplate data={pageData} />;
}
