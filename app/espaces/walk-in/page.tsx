import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Walk-in & rangement sur mesure | Dilamco",
  description:
    "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l’espace et finition haut de gamme. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/walk-in/",
  },
};

export default function WalkIn() {
  const faqItems = [
    {
      q: "Walk-in sur mesure vs modulaire : quelle différence?",
      a: "Le sur mesure s'adapte à l'espace exact (dimensions, angles, contraintes) et à vos habitudes. Le modulaire est plus standard et peut laisser des zones perdues ou moins optimisées.",
    },
    {
      q: "Est-ce possible dans un petit espace?",
      a: "Oui. Le sur mesure est particulièrement utile dans les espaces serrés, car il permet d'optimiser la circulation et de maximiser le rangement sans \"perdre\" des centimètres.",
    },
    {
      q: "Quels matériaux sont recommandés pour un walk-in?",
      a: "Le choix dépend de l'usage, des charges et du niveau de finition. La durabilité dépend aussi de la qualité des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Walk-in & rangement", url: SITE.url + "/espaces/walk-in/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>
          Walk-in & rangement sur mesure — organisation pensée pour votre espace
        </h1>
        <p>
          Un walk-in sur mesure se définit par l’usage : vêtements longs et
          courts, chaussures, accessoires, circulation et accès. Dilamco conçoit
          et réalise des solutions de rangement sur mesure haut de gamme,
          adaptées à votre espace réel, avec une finition durable —
          principalement à Montréal, Laval et sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/projets/walk-in/">Voir des projets de walk-in</a>
        </p>
      </header>

      <section aria-labelledby="pour-qui">
        <h2 id="pour-qui">À qui s’adresse un walk-in sur mesure?</h2>
        <ul>
          <li>
            Vous voulez <strong>optimiser un espace atypique</strong> (angles,
            plafonds bas, niches, condo).
          </li>
          <li>
            Vous cherchez une <strong>organisation précise</strong> (tiroirs
            accessoires, zones vêtements, rangement chaussures).
          </li>
          <li>
            Vous souhaitez un rendu <strong>durable et cohérent</strong>{" "}
            (matériaux, chants, quincaillerie, finition).
          </li>
        </ul>
        <p>
          Si vous cherchez une solution temporaire ou strictement modulaire, le
          sur mesure est moins pertinent. Le but ici est de gagner en
          fonctionnalité au quotidien et d’obtenir une solution durable.
        </p>
      </section>

      <section aria-labelledby="inclus">
        <h2 id="inclus">Ce que comprend un walk-in Dilamco</h2>
        <ul>
          <li>
            <strong>Design & planification :</strong> besoins, contraintes,
            circulation et plan d’organisation.
          </li>
          <li>
            <strong>Fabrication sur mesure :</strong> modules, étagères, tiroirs
            et zones adaptées.
          </li>
          <li>
            <strong>Installation précise :</strong> alignements, ajustements,
            finition et inspection finale.
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
          </ul>
        </section>
      </section>

      <section aria-labelledby="organisation">
        <h2 id="organisation">
          Organisation & fonctionnalité (le cœur du sur mesure)
        </h2>
        <p>
          Le sur mesure permet de structurer l’espace selon vos habitudes.
          L’objectif : rendre le rangement simple, accessible et cohérent, sans
          “zones mortes” difficiles à utiliser.
        </p>
        <ul>
          <li>
            <strong>Zones vêtements :</strong> sections pour vêtements longs,
            courts et pliés.
          </li>
          <li>
            <strong>Chaussures :</strong> rangement dédié et accessible.
          </li>
          <li>
            <strong>Accessoires :</strong> tiroirs compartimentés pour optimiser
            le quotidien.
          </li>
          <li>
            <strong>Étagères :</strong> dimensions adaptées, avec possibilité
            d’ajustement selon le besoin.
          </li>
          <li>
            <strong>Évolutivité :</strong> organisation pensée pour s’adapter
            (nouveaux besoins, saisons, etc.).
          </li>
        </ul>
      </section>

      <section aria-labelledby="materiaux">
        <h2 id="materiaux">Matériaux & durabilité</h2>
        <p>
          Un walk-in est utilisé tous les jours. La durabilité dépend des
          matériaux, des chants, de la quincaillerie et de la qualité
          d’installation.
        </p>
        <ul>
          <li>
            <strong>Stabilité :</strong> structures adaptées pour limiter les
            déformations dans le temps.
          </li>
          <li>
            <strong>Chants & finition :</strong> résistance aux impacts et à
            l’usure.
          </li>
          <li>
            <strong>Quincaillerie :</strong> coulisses et charnières pour usage
            répété.
          </li>
          <li>
            <strong>Entretien :</strong> finis cohérents avec votre quotidien.
          </li>
        </ul>
        <p>
          <a href="/materiaux/">Voir les matériaux</a> {" | "}
          <a href="/materiaux/comparatif/">Comparatif des matériaux</a> {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a>
        </p>
      </section>

      <section aria-labelledby="configurations">
        <h2 id="configurations">Configurations possibles</h2>
        <p>
          Voici quelques configurations fréquentes, adaptées selon l’espace
          disponible.
        </p>
        <ul>
          <li>
            <strong>Walk-in en L, en U ou linéaire :</strong> selon la
            circulation et les murs disponibles.
          </li>
          <li>
            <strong>Garde-robe ouvert ou fermé :</strong> rendu minimaliste ou
            protection accrue.
          </li>
          <li>
            <strong>Tiroirs intégrés :</strong> accessoires, bijoux, ceintures,
            petits items.
          </li>
          <li>
            <strong>Étagères ajustées :</strong> valises, paniers, linge, zones
            saisonnières.
          </li>
        </ul>
      </section>

      <section aria-labelledby="projets">
        <h2 id="projets">Projets de walk-in</h2>
        <p>
          Consultez nos réalisations pour voir des exemples d’organisation, de
          finitions et de configurations possibles.
        </p>
        <ul>
          <li>
            <a href="/projets/walk-in/">Voir tous les projets de walk-in</a>
          </li>
          <li>
            <a href="/projets/">Voir tous les projets</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — walk-in & rangement sur mesure</h2>
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
            <a href="/projets/walk-in/">Projets</a>
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
        <h2 id="cta">Parlez-nous de votre projet de walk-in</h2>
        <p>
          Dites-nous votre secteur (Montréal/Laval/Rive-Sud), la configuration
          souhaitée (L/U/linéaire) et vos besoins d’organisation (vêtements,
          chaussures, accessoires). On vous propose la prochaine étape la plus
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
