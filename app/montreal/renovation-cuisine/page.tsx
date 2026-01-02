import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Rénovation de cuisine à Montréal | Dilamco",
  description: "Rénovation de cuisine à Montréal : coordination, exécution et installation d'armoires sur mesure, avec un seul responsable si nécessaire.",
  alternates: {
    canonical: "https://dilamco.com/montreal/renovation-cuisine/",
  },
};

export default function MontrealRenovationCuisine() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Rénovation de cuisine à Montréal",
          description:
            "Rénovation de cuisine à Montréal : coordination, exécution et installation d'armoires sur mesure, avec un seul responsable si nécessaire.",
          url: SITE.url + "/montreal/renovation-cuisine/",
          serviceType: "Rénovation de cuisine",
          areaServed: ["Montréal"],
        })}
      />
      <main id="contenu">
      <header><h1>Rénovation de cuisine à Montréal</h1></header>
      <p>Rénovation de cuisine à Montréal : coordination, exécution et installation d'armoires sur mesure, avec un seul responsable si nécessaire.</p>
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

