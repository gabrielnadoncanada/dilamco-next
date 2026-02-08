import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/contact";

export { metadata };

export default function ContactPage() {
  return <ArticlePageTemplate data={pageData} />;
}
