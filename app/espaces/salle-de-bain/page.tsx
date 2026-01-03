import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Salle de bain & vanités sur mesure",
  description:
    "Vanités et rangement de salle de bain sur mesure conçus pour l’humidité : design, fabrication et installation. Option rénovation de salle de bain clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/salle-de-bain/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/espaces/salle-de-bain/",
    title: "Salle de bain & vanités sur mesure | Dilamco",
    description:
      "Vanités et rangement de salle de bain sur mesure conçus pour l'humidité : design, fabrication et installation. Option rénovation de salle de bain clé en main à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Salle de bain & vanités sur mesure Dilamco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salle de bain & vanités sur mesure | Dilamco",
    description:
      "Vanités et rangement de salle de bain sur mesure conçus pour l'humidité.",
    images: ["/opengraph-image"],
  },
};

export default function SalleDeBain() {
  const faqItems = [
    {
      q: "Quels matériaux sont les plus adaptés en salle de bain?",
      a: "Les matériaux doivent être choisis en fonction de l'humidité, des chants et de la stabilité. La solution la plus durable dépend aussi de l'assemblage, de la quincaillerie et de l'installation.",
    },
    {
      q: "MDF ou mélamine en salle de bain : lequel choisir?",
      a: "Ça dépend du fini recherché et du niveau d'humidité. Le point critique est la protection des chants et la qualité d'exécution. Un mauvais détail de finition peut ruiner n'importe quel matériau.",
    },
    {
      q: "Tiroirs ou portes : qu'est-ce qui est le plus pratique?",
      a: "Les tiroirs facilitent l'accès (surtout en profondeur). Les portes peuvent être pertinentes selon la plomberie et l'organisation. Le sur mesure permet d'optimiser les deux.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    {
      name: "Salle de bain & vanités",
      url: SITE.url + "/espaces/salle-de-bain/",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Salle de bain & vanités sur mesure — durabilité en milieu humide
          </h1>
          <p>
            Une salle de bain impose des contraintes spécifiques : humidité,
            ventilation, éclaboussures, nettoyage fréquent et usage quotidien.
            Dilamco conçoit et réalise des vanités et rangements sur mesure haut
            de gamme, pensés pour durer, avec option de rénovation complète clé
            en main selon le projet — principalement à Montréal, Laval et sur la
            Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/projets/salle-de-bain/">
              Voir des projets de salles de bain
            </a>
          </p>
        </header>

        <section aria-labelledby="pour-qui">
          <h2 id="pour-qui">À qui s’adresse une vanité sur mesure?</h2>
          <ul>
            <li>
              Vous voulez <strong>optimiser l’espace</strong> (petite salle de
              bain, condo, circulation serrée).
            </li>
            <li>
              Vous cherchez une solution <strong>durable</strong> malgré
              l’humidité (matériaux, chants, quincaillerie).
            </li>
            <li>
              Vous avez des contraintes à intégrer :{" "}
              <strong>double lavabo</strong>, rangement vertical, plomberie,
              niches.
            </li>
          </ul>
          <p>
            Si vous cherchez une solution standard sans adaptation, le sur
            mesure est moins pertinent. Le sur mesure vise un résultat cohérent,
            durable et ajusté à votre espace réel.
          </p>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">
            Ce que comprend une salle de bain sur mesure Dilamco
          </h2>
          <ul>
            <li>
              <strong>Design & planification :</strong> besoins, contraintes,
              plan et choix de matériaux.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> vanité, rangement,
              modules adaptés (simple ou double).
            </li>
            <li>
              <strong>Installation précise :</strong> alignements, ajustements,
              finition et inspection finale.
            </li>
            <li>
              <strong>Option clé en main :</strong> coordination des travaux
              connexes lors d’une rénovation complète.
            </li>
          </ul>

          <section aria-labelledby="services">
            <h3 id="services">Services associés</h3>
            <ul>
              <li>
                <a href="/services/design/">Design</a>
              </li>
              <li>
                <a href="/services/fabrication/">Fabrication</a>
              </li>
              <li>
                <a href="/services/installation/">Installation</a>
              </li>
              <li>
                <a href="/services/renovation/salle-de-bain/">
                  Rénovation salle de bain
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section aria-labelledby="humidite">
          <h2 id="humidite">
            Humidité & durabilité : les points qui comptent vraiment
          </h2>
          <p>
            En salle de bain, les problèmes viennent rarement “d’un mauvais
            look”. Ils viennent de l’humidité : chants endommagés, gonflement,
            quincaillerie qui fatigue. Notre priorité est de réduire ces risques
            dès la conception.
          </p>
          <ul>
            <li>
              <strong>Matériaux adaptés :</strong> choix orientés stabilité et
              usage en milieu humide.
            </li>
            <li>
              <strong>Protection des chants :</strong> un détail critique pour
              limiter l’infiltration d’eau.
            </li>
            <li>
              <strong>Quincaillerie fiable :</strong> charnières et coulisses
              pour usage quotidien (soft-close selon le besoin).
            </li>
            <li>
              <strong>Contexte du projet :</strong> ventilation et configuration
              (surtout en rénovation).
            </li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>{" "}
            {" | "}
            <a href="/materiaux/quincaillerie/">Quincaillerie</a> {" | "}
            <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>
          </p>
        </section>

        <section aria-labelledby="configurations">
          <h2 id="configurations">Configurations possibles</h2>
          <p>
            Le sur mesure permet d’adapter la vanité à votre espace, vos
            habitudes et vos contraintes.
          </p>
          <ul>
            <li>
              <strong>Simple ou double lavabo</strong> selon la largeur
              disponible.
            </li>
            <li>
              <strong>Tiroirs vs portes</strong> selon vos préférences
              d’organisation.
            </li>
            <li>
              <strong>Rangement vertical</strong> pour maximiser l’espace dans
              les petites salles de bain.
            </li>
            <li>
              <strong>Intégration plomberie</strong> propre et fonctionnelle
              (sans perdre du rangement inutilement).
            </li>
            <li>
              <strong>Finition cohérente</strong> avec le style (moderne,
              chaleureux, classique).
            </li>
          </ul>
          <p>
            <a href="/materiaux/couleurs/">Couleurs et finis</a>
          </p>
        </section>

        <section aria-labelledby="renovation">
          <h2 id="renovation">
            Rénovation de salle de bain (option clé en main)
          </h2>
          <p>
            Si votre projet inclut des travaux connexes (douche/bain, céramique,
            plomberie, ventilation, électricité), une approche clé en main peut
            réduire les imprévus et mieux cadrer le calendrier.
          </p>
          <p>
            <a href="/services/renovation/salle-de-bain/">
              Voir la rénovation salle de bain
            </a>
          </p>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets de salles de bain</h2>
          <p>
            Consultez nos réalisations pour voir des exemples de vanités
            (simple/double), de rangement, et de niveaux de finition.
          </p>
          <ul>
            <li>
              <a href="/projets/salle-de-bain/">
                Voir tous les projets de salles de bain
              </a>
            </li>
            <li>
              <a href="/projets/">Voir tous les projets</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — salle de bain & vanités sur mesure</h2>
          <dl>
            {faqItems.map((item: FAQItem) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="liens">
          <h2 id="liens">Liens utiles</h2>
          <ul>
            <li>
              <a href="/projets/salle-de-bain/">Projets</a>
            </li>
            <li>
              <a href="/materiaux/">Matériaux</a>
            </li>
            <li>
              <a href="/contact/">Demander une soumission</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet de salle de bain</h2>
          <p>
            Dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre échéance,
            et si vous souhaitez une vanité sur mesure seulement ou une
            rénovation complète. On vous propose la prochaine étape la plus
            simple pour avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
