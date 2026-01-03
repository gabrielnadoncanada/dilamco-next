import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Espaces sur mesure",
  description:
    "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial. Design, fabrication, installation et option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/",
    title: "Espaces sur mesure | Dilamco",
    description:
      "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial. Design, fabrication, installation et option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Espaces sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaces sur mesure | Dilamco",
    description:
      "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial.",
    images: ["/opengraph-image"],
  },
};

export default function Espaces() {
  return (
    <main id="contenu">
      <header>
        <h1>Espaces sur mesure — cuisines, salles de bain et rangement</h1>
        <p>
          Chaque espace a ses contraintes (humidité, circulation, accès,
          charges). Notre rôle : créer des solutions sur mesure durables,
          fonctionnelles et bien exécutées, avec option clé en main selon le
          projet.
        </p>
      </header>

      <section aria-labelledby="liste-espaces">
        <h2 id="liste-espaces">Choisissez votre espace</h2>
        <p>
          Sélectionnez l’espace qui correspond à votre projet pour voir les
          options, les services associés et des exemples de réalisations.
        </p>

        <ul>
          <li>
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
            <p>
              Rangement optimisé, ergonomie, coins accessibles et matériaux
              durables. Possibilité de{" "}
              <a href="/services/renovation/cuisine/">rénovation de cuisine</a>{" "}
              clé en main.
            </p>
          </li>

          <li>
            <a href="/espaces/salle-de-bain/">
              Salle de bain & vanités sur mesure
            </a>
            <p>
              Conçu pour l’humidité : durabilité, quincaillerie fiable et
              finition soignée. Option{" "}
              <a href="/services/renovation/salle-de-bain/">
                rénovation salle de bain
              </a>
              .
            </p>
          </li>

          <li>
            <a href="/espaces/walk-in/">Walk-in & rangement</a>
            <p>
              Organisation, modules adaptés et optimisation de l’espace pour un
              rangement simple et efficace au quotidien.
            </p>
          </li>

          <li>
            <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
            <p>
              Armoires robustes, rangement pratique et configuration sur mesure
              pour buanderie.
            </p>
          </li>

          <li>
            <a href="/espaces/commercial/">Commercial</a>
            <p>
              Mobilier et rangement sur mesure pour espaces commerciaux :
              solutions robustes, cohérentes et adaptées à l’usage.
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="differenciation">
        <h2 id="differenciation">
          Pourquoi nos espaces sont pensés pour durer
        </h2>
        <ul>
          <li>
            <strong>Sur mesure réel :</strong> adapté à votre espace (pas à un
            catalogue standard).
          </li>
          <li>
            <strong>Matériaux orientés usage :</strong> choix adaptés à la
            cuisine et à l’humidité en salle de bain.
          </li>
          <li>
            <strong>Installation précise :</strong> alignements, ajustements et
            finition — le détail qui change tout.
          </li>
          <li>
            <strong>Approche clé en main :</strong> coordination possible
            lorsque le projet inclut de la rénovation.
          </li>
        </ul>

        <p>
          <a href="/materiaux/">Voir nos matériaux</a> {" | "}
          <a href="/services/">Voir nos services</a>
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous l’espace concerné, votre ville (Montréal/Laval/Rive-Sud) et
          votre échéance. On revient vers vous avec les prochaines étapes.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
  );
}
