import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import type { BuilderPageData } from "../page/definitions";
import { extractFaqItems } from "../seo/extractStructuredData";
import type { Registry } from "../model/block-types";
import { PageRenderer } from "../ui/PageRenderer";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export function BuilderPageTemplate(props: {
  data: BuilderPageData;
  blockRegistry: Registry;
}) {
  const { data, blockRegistry } = props;
  const faqItems = extractFaqItems(data.blocks, blockRegistry);

  return (
    <>
      {data.breadcrumbs && data.breadcrumbs.length > 0 ? (
        <JsonLd data={breadcrumbJsonLd(data.breadcrumbs)} />
      ) : null}
      {faqItems.length > 0 ? <JsonLd data={faqJsonLd(faqItems)} /> : null}
      {data.extraJsonLd?.map((jsonLd, index) => (
        <JsonLd key={index} data={jsonLd} />
      ))}
      <Header />
      <PageRenderer blocks={data.blocks} blockRegistry={blockRegistry} />
      <Footer />
    </>
  );
}
