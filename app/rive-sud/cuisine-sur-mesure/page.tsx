import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Cuisine sur mesure à Rive-Sud | Dilamco",
  description: "Conception et réalisation de cuisines sur mesure haut de gamme à Rive-Sud, avec option rénovation de cuisine clé en main selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/rive-sud/cuisine-sur-mesure/",
  },
};

export default function RiveSudCuisine() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Cuisine sur mesure à Rive-Sud",
          description:
            "Conception, fabrication et installation de cuisines sur mesure à Rive-Sud.",
          url: SITE.url + "/rive-sud/cuisine-sur-mesure/",
          serviceType: "Cuisine sur mesure",
          areaServed: ["Rive-Sud"],
        })}
      />
      <main id="contenu">
      <header><h1>Cuisine sur mesure à Rive-Sud</h1></header>
      <p>Conception et réalisation de cuisines sur mesure haut de gamme à Rive-Sud, avec option rénovation de cuisine clé en main selon le projet.</p>
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

