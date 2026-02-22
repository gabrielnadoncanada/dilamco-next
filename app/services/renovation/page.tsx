import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/services-renovation";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function ServicesRenovationPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}