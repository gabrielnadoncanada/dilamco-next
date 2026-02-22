import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/services";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function ServicesPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}