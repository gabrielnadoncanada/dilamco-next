import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main. Projets haut de gamme à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/services/",
    title: "Services | Dilamco",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main. Projets haut de gamme à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Services Dilamco — Design, fabrication, installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Dilamco",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main.",
    images: ["/opengraph-image"],
  },
};

export default function Services() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
      <header>
        <h1>
          Services — design, fabrication, installation et rénovation clé en main
        </h1>
        <p>
          Dilamco réalise des cuisines, vanités et espaces sur mesure haut de
          gamme. Selon le projet, nous pouvons prendre en charge l’ensemble :
          design, fabrication, installation et coordination des travaux connexes
          pour livrer un résultat cohérent — principalement à Montréal, Laval et
          sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/projets/">Voir nos réalisations</a>
        </p>
      </header>

      <section aria-labelledby="piliers">
        <h2 id="piliers">Nos services principaux</h2>
        <p>
          Choisissez le service qui correspond à l’étape où vous êtes rendu.
        </p>

        <ul>
          <li>
            <a href="/services/design/">Design</a>
            <p>
              Analyse des besoins, optimisation de l’espace, plan et choix de
              matériaux. Idéal pour cadrer le projet avant de fabriquer.
            </p>
          </li>

          <li>
            <a href="/services/fabrication/">Fabrication</a>
            <p>
              Fabrication sur mesure orientée durabilité : matériaux adaptés à
              l’usage, détails robustes et finition soignée.
            </p>
          </li>

          <li>
            <a href="/services/installation/">Installation</a>
            <p>
              Alignements, ajustements, finition. Une installation précise est
              essentielle pour un rendu haut de gamme.
            </p>
          </li>

          <li>
            <a href="/services/renovation/">Rénovation clé en main</a>
            <p>
              Coordination et exécution lorsque le projet implique plusieurs
              corps de métier. Objectif : réduire les imprévus et livrer un
              résultat cohérent.
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="renovation-types">
        <h2 id="renovation-types">Rénovation par type</h2>
        <p>
          Si votre projet implique une rénovation complète, voici les pages les
          plus pertinentes.
        </p>

        <ul>
          <li>
            <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
          </li>
          <li>
            <a href="/services/renovation/salle-de-bain/">
              Rénovation salle de bain
            </a>
          </li>
          <li>
            <a href="/services/renovation/plancher/">Rénovation de plancher</a>
          </li>
          <li>
            <a href="/services/renovation/agrandissement-de-maison/">
              Agrandissement de maison
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="cle-en-main">
        <h2 id="cle-en-main">Quand choisir une approche clé en main?</h2>
        <ul>
          <li>
            <strong>Rénovation de cuisine complète</strong> : plomberie,
            électricité, plancher, dosseret, installation et finition.
          </li>
          <li>
            <strong>Salle de bain</strong> : humidité, ventilation, étanchéité
            et détails d’exécution.
          </li>
          <li>
            <strong>Projet multi-intervenants</strong> : vous voulez un
            responsable unique et un calendrier mieux maîtrisé.
          </li>
        </ul>

        <p>
          <a href="/services/renovation/">Voir la rénovation clé en main</a>{" "}
          {" | "}
          <a href="/contact/">Parler de votre projet</a>
        </p>
      </section>

      <section aria-labelledby="qualite">
        <h2 id="qualite">Qualité et durabilité</h2>
        <p>
          Le haut de gamme, c’est une somme de décisions : matériaux adaptés à
          l’usage, quincaillerie fiable, assemblage robuste et installation
          précise.
        </p>
        <p>
          <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
          {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a> {" | "}
          <a href="/materiaux/">Voir tous les matériaux</a>
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
    </>
  );
}
