import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Cuisine sur mesure à Laval | Dilamco",
  description: "Conception et réalisation de cuisines sur mesure haut de gamme à Laval, avec option rénovation de cuisine clé en main selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/laval/cuisine-sur-mesure/",
  },
};

export default function LavalCuisine() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Cuisine sur mesure à Laval",
          description:
            "Conception, fabrication et installation de cuisines sur mesure à Laval.",
          url: SITE.url + "/laval/cuisine-sur-mesure/",
          serviceType: "Cuisine sur mesure",
          areaServed: ["Laval"],
        })}
      />
      <main id="contenu">
      <header><h1>Cuisine sur mesure à Laval</h1></header>
      <p>Conception et réalisation de cuisines sur mesure haut de gamme à Laval, avec option rénovation de cuisine clé en main selon le projet.</p>
      <ul>
        <li><a href="/espaces/cuisine/">Page espace</a></li>
        <li><a href="/services/renovation/cuisine/">Service rénovation</a></li>
        <li><a href="/projets/cuisine/">Projets</a></li>
      </ul>
      <p><a href="/contact/">Demander une soumission</a></p>
    </main>
    </>
  );
}

