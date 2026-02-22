import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/a-propos";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function AProposPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}