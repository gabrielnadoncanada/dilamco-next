import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/a-propos";

export { metadata };

export default function AProposPage() {
  return <ArticlePageTemplate data={pageData} />;
}
