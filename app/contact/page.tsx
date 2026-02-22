import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData, features } from "@/data/static-pages/contact";
import { ensurePageAccess } from "@/lib/page-access";

export { metadata };

export default async function ContactPage() {
  await ensurePageAccess(features);

  return <ArticlePageTemplate data={pageData} />;
}