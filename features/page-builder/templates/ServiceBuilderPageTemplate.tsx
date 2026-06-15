import { JsonLd } from "@/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
  serviceJsonLd,
} from "@/seo/schema/builders";
import type { Registry } from "../model/block-types";
import type { BuilderPageData } from "../page/definitions";
import { extractFaqItems, extractImages } from "../seo/extractStructuredData";
import { PageRenderer } from "../ui/PageRenderer";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export function ServiceBuilderPageTemplate(props: {
  data: BuilderPageData;
  blockRegistry: Registry;
}) {
  const { data, blockRegistry } = props;
  const faqItems = extractFaqItems(data.blocks, blockRegistry);
  const pageUrl = data.breadcrumbs?.at(-1)?.url;
  const images = extractImages(data.blocks).slice(0, 12);

  return (
    <>
      {data.breadcrumbs && data.breadcrumbs.length > 0 ? (
        <JsonLd data={breadcrumbJsonLd(data.breadcrumbs)} />
      ) : null}
      {data.service ? <JsonLd data={serviceJsonLd(data.service)} /> : null}
      {faqItems.length > 0 ? <JsonLd data={faqJsonLd(faqItems)} /> : null}
      {images.map((img, index) => (
        <JsonLd
          key={`img-${index}`}
          data={imageObjectJsonLd({
            src: img.src,
            caption: img.alt || undefined,
            pageUrl,
            representativeOfPage: index === 0,
          })}
        />
      ))}
      {data.extraJsonLd?.map((jsonLd, index) => (
        <JsonLd key={index} data={jsonLd} />
      ))}
      <Header />
      <PageRenderer blocks={data.blocks} blockRegistry={blockRegistry} />
      <Footer />
    </>
  );
}
