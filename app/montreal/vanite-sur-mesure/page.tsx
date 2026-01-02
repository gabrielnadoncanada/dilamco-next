import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Vanité sur mesure à Montréal | Dilamco",
  description: "Vanités sur mesure à Montréal, conçues pour durer en environnement humide, avec option rénovation salle de bain clé en main.",
  alternates: {
    canonical: "https://dilamco.com/montreal/vanite-sur-mesure/",
  },
};

export default function MontrealVanite() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Vanité sur mesure à Montréal",
          description:
            "Vanités sur mesure à Montréal, conçues pour durer en environnement humide, avec option rénovation salle de bain clé en main.",
          url: SITE.url + "/montreal/vanite-sur-mesure/",
          serviceType: "Vanité sur mesure",
          areaServed: ["Montréal"],
        })}
      />
      <main id="contenu">
      <header><h1>Vanité sur mesure à Montréal</h1></header>
      <p>Vanités sur mesure à Montréal, conçues pour durer en environnement humide, avec option rénovation salle de bain clé en main.</p>
      <ul>
        <li><a href="/espaces/salle-de-bain/">Page espace</a></li>
        <li><a href="/services/renovation/salle-de-bain/">Service rénovation</a></li>
        <li><a href="/projets/salle-de-bain/">Projets</a></li>
      </ul>
      <p><a href="/contact/">Demander une soumission</a></p>
    </main>
    </>
  );
}

