import { Hero36 } from "@/components/hero36";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { metadata, pageData } from "@/data/static-pages/home";

export { metadata };

export default function HomePage() {
  return <><ArticlePageTemplate data={pageData} /><Hero36 /></>;
}
