import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/projets";

export { metadata };

export default function ProjetsPage() {
  return <ArticlePageTemplate data={pageData} />;
}
