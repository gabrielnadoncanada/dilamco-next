import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/comparatifs";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function ComparatifsPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}