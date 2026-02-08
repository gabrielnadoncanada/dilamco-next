import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/materiaux";

export { metadata };

export default function MateriauxPage() {
  return <ArticlePageTemplate data={pageData} />;
}
