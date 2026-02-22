import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/processus";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function ProcessusPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}