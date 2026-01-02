import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Service d’installation | Dilamco",
  description:
    "Service d’installation professionnelle : alignements précis, ajustements sur place et finition soignée pour cuisines, salles de bain, walk-in et projets commerciaux à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/installation/",
  },
};

export default function Installation() {
  const faqItems = [
    {
      q: "Combien de temps dure une installation?",
      a: "La durée dépend du type de projet et de sa complexité. Une cuisine complète nécessite généralement plus de temps qu'un walk-in ou une vanité.",
    },
    {
      q: "Des ajustements sont-ils normaux?",
      a: "Oui. Les ajustements font partie d'une installation professionnelle et sont essentiels pour un rendu final propre et durable.",
    },
    {
      q: "Installez-vous seulement vos propres armoires?",
      a: "Oui. Nous installons les éléments que nous fabriquons afin de garantir la qualité et la cohérence du résultat.",
    },
    {
      q: "Que se passe-t-il s'il y a un imprévu?",
      a: "Les imprévus sont évalués sur place. Nous ajustons l'installation ou recommandons la meilleure solution selon le contexte.",
    },
    {
      q: "Travaillez-vous en condo ou en commercial?",
      a: "Oui. Nous adaptons l'installation aux contraintes d'accès, d'horaire et d'usage propres à chaque environnement.",
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Installation d'armoires et cuisines sur mesure",
          description:
            "Installation précise, ajustements, alignements et finition durable.",
          url: SITE.url + "/services/installation/",
          serviceType: "Installation",
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>
          Installation professionnelle — précision, alignement et finition
        </h1>
        <p>
          Une installation de qualité est déterminante pour le résultat final.
          Même des armoires bien fabriquées peuvent sembler médiocres si elles
          sont mal posées. Chez Dilamco, l’installation fait partie intégrante
          du projet : ajustements sur place, alignements précis et finition
          soignée — principalement à Montréal, Laval et sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/projets/">Voir des projets installés</a>
        </p>
      </header>

      <section aria-labelledby="importance">
        <h2 id="importance">
          Pourquoi l’installation fait toute la différence
        </h2>
        <p>
          Les murs, planchers et plafonds ne sont jamais parfaitement droits.
          Une installation professionnelle tient compte de ces réalités et
          ajuste chaque élément pour obtenir un résultat propre, durable et
          cohérent.
        </p>
        <ul>
          <li>
            <strong>Alignements :</strong> portes, tiroirs et modules droits
            malgré les irrégularités.
          </li>
          <li>
            <strong>Ajustements :</strong> réglages fins sur place pour un rendu
            uniforme.
          </li>
          <li>
            <strong>Finition :</strong> joints, transitions et détails visibles
            au quotidien.
          </li>
          <li>
            <strong>Durabilité :</strong> une bonne installation réduit l’usure
            prématurée.
          </li>
        </ul>
      </section>

      <section aria-labelledby="inclus">
        <h2 id="inclus">Ce qui est inclus dans l’installation Dilamco</h2>
        <ul>
          <li>
            <strong>Préparation du site :</strong> vérification des murs,
            planchers et niveaux.
          </li>
          <li>
            <strong>Mise à niveau et fixation :</strong> ancrage sécuritaire et
            stable des modules.
          </li>
          <li>
            <strong>Ajustement des portes et tiroirs :</strong> alignement
            précis et fonctionnement fluide.
          </li>
          <li>
            <strong>Gestion des joints et transitions :</strong> finition propre
            et cohérente.
          </li>
          <li>
            <strong>Inspection finale :</strong> vérification et ajustements
            avant la livraison.
          </li>
        </ul>
        <p>
          <a href="/processus/">Voir le processus</a> {" | "}
          <a href="/services/fabrication/">Voir la fabrication</a>
        </p>
      </section>

      <section aria-labelledby="types">
        <h2 id="types">Installation par type de projet</h2>
        <ul>
          <li>
            <strong>Cuisine :</strong> armoires, îlots, intégration des
            électroménagers.
            <br />
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          </li>
          <li>
            <strong>Salle de bain :</strong> vanités, protection des chants en
            milieu humide.
            <br />
            <a href="/espaces/salle-de-bain/">Salle de bain & vanités</a>
          </li>
          <li>
            <strong>Walk-in :</strong> alignements verticaux et optimisation de
            l’espace.
            <br />
            <a href="/espaces/walk-in/">Walk-in & rangement</a>
          </li>
          <li>
            <strong>Salle de lavage :</strong> dégagements, vibration et
            contraintes techniques.
            <br />
            <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
          </li>
          <li>
            <strong>Commercial :</strong> usage intensif, durabilité et
            coordination.
            <br />
            <a href="/espaces/commercial/">Commercial sur mesure</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="details">
        <h2 id="details">Détails techniques qui font la différence</h2>
        <p>
          Le niveau de finition dépend de décisions prises sur le terrain. Ces
          détails sont souvent invisibles sur un plan, mais évidents une fois le
          projet terminé.
        </p>
        <ul>
          <li>
            <strong>Tolérances :</strong> ajustements pour absorber les écarts
            des murs et planchers.
          </li>
          <li>
            <strong>Protection des chants :</strong> limiter l’infiltration
            d’humidité et l’usure.
          </li>
          <li>
            <strong>Surfaces adjacentes :</strong> intégration propre avec
            comptoirs, murs et planchers.
          </li>
          <li>
            <strong>Coordination :</strong> travail en lien avec plomberie et
            électricité (sans les réaliser).
          </li>
        </ul>
        <p>
          <a href="/materiaux/">Voir les matériaux</a> {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a>
        </p>
      </section>

      <section aria-labelledby="coordination">
        <h2 id="coordination">Coordination & limites</h2>
        <p>
          Nous installons les éléments que nous fabriquons. Lorsque le projet
          inclut d’autres travaux (plomberie, électricité, planchers), nous
          pouvons coordonner les interventions ou recommander une approche clé
          en main selon le contexte.
        </p>
        <p>
          <a href="/services/renovation/">Voir la rénovation clé en main</a>
        </p>
      </section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Projets installés</h2>
        <p>
          Consultez nos projets pour voir le niveau d’alignement, de finition et
          d’intégration obtenu sur différents types d’espaces.
        </p>
        <p>
          <a href="/projets/">Voir les projets</a>
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — installation</h2>
        <dl>
          <dt>Combien de temps dure une installation?</dt>
          <dd>
            La durée dépend du type de projet et de sa complexité. Une cuisine
            complète nécessite généralement plus de temps qu’un walk-in ou une
            vanité.
          </dd>

          <dt>Des ajustements sont-ils normaux?</dt>
          <dd>
            Oui. Les ajustements font partie d’une installation professionnelle
            et sont essentiels pour un rendu final propre et durable.
          </dd>

          <dt>Installez-vous seulement vos propres armoires?</dt>
          <dd>
            Oui. Nous installons les éléments que nous fabriquons afin de
            garantir la qualité et la cohérence du résultat.
          </dd>

          <dt>Que se passe-t-il s’il y a un imprévu?</dt>
          <dd>
            Les imprévus sont évalués sur place. Nous ajustons l’installation ou
            recommandons la meilleure solution selon le contexte.
          </dd>

          <dt>Travaillez-vous en condo ou en commercial?</dt>
          <dd>
            Oui. Nous adaptons l’installation aux contraintes d’accès, d’horaire
            et d’usage propres à chaque environnement.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace, votre secteur (Montréal/Laval/Rive-Sud) et
          votre échéance. Une installation bien planifiée est la clé d’un
          résultat durable.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
