import { JsonLd } from "@/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  imageObjectJsonLd,
} from "@/seo/schema/builders";
import type { BuilderPageData } from "../page/definitions";
import { extractFaqItems, extractImages } from "../seo/extractStructuredData";
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
  // L'URL de la page = dernier fil d'Ariane (déjà absolu).
  const pageUrl = data.breadcrumbs?.at(-1)?.url;
  // Max 12 ImageObject pour éviter d'alourdir le JSON-LD.
  const images = extractImages(data.blocks).slice(0, 12);

  return (
    <>
      {data.breadcrumbs && data.breadcrumbs.length > 0 ? (
        <JsonLd data={breadcrumbJsonLd(data.breadcrumbs)} />
      ) : null}
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
