import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/materiaux";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function MateriauxPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}