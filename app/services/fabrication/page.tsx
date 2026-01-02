import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Service de fabrication | Dilamco",
  description:
    "Fabrication sur mesure : durabilité, précision et finition haut de gamme. Matériaux orientés usage, assemblage soigné et préparation pour une installation impeccable à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/fabrication/",
  },
};

export default function Fabrication() {
  const faqItems = [
    {
      q: "Quelle est la différence entre sur mesure et semi-custom?",
      a: "Le sur mesure s'adapte à l'espace exact (dimensions, contraintes, ergonomie). Le semi-custom part de modules prédéfinis avec certaines variations. Le bon choix dépend du niveau d'adaptation et de finition recherché.",
    },
    {
      q: "Quels matériaux vieillissent le mieux?",
      a: "Ça dépend de l'espace (humidité, usage, entretien). La durabilité dépend autant du matériau que des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Est-ce personnalisable à 100 %?",
      a: "L'objectif est d'adapter le projet à votre espace et à votre usage. La faisabilité dépend des contraintes techniques (dimensions, accès, équipements) et du niveau de finition recherché.",
    },
    {
      q: "Quels sont les délais de fabrication?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance est à préciser lors de la soumission, afin d'aligner le design, la production et l'installation.",
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Fabrication sur mesure d'armoires et cuisines",
          description:
            "Fabrication sur mesure : durabilité, précision et finition haut de gamme. Matériaux orientés usage, assemblage soigné et préparation pour une installation impeccable.",
          url: SITE.url + "/services/fabrication/",
          serviceType: "Fabrication",
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>Fabrication sur mesure — précision, constance et durabilité</h1>
        <p>
          La fabrication détermine la solidité, la stabilité et la longévité
          d’un projet. Chez Dilamco, le sur mesure ne se limite pas à “couper à
          la bonne largeur” : nous fabriquons selon les dimensions réelles,
          l’usage prévu et les contraintes de l’espace, afin d’obtenir un
          résultat cohérent et durable — principalement à Montréal, Laval et sur
          la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet</a> {" | "}
          <a href="/projets/">Voir nos réalisations</a>
        </p>
      </header>

      <section aria-labelledby="sur-mesure">
        <h2 id="sur-mesure">Ce que signifie “fabrication sur mesure”</h2>
        <p>
          Le sur mesure vise une adaptation réelle à votre espace et à votre
          usage : circulation, accès, rangement, contraintes techniques et
          niveau de finition. L’objectif est de livrer un projet qui vieillit
          bien, sans compromis sur les détails critiques.
        </p>
        <ul>
          <li>
            <strong>Dimensions réelles :</strong> adaptation à l’espace (murs,
            angles, contraintes).
          </li>
          <li>
            <strong>Cohérence entre modules :</strong> alignements et
            proportions maîtrisés.
          </li>
          <li>
            <strong>Choix orientés usage :</strong> matériaux et quincaillerie
            adaptés aux charges et aux cycles d’ouverture.
          </li>
        </ul>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Processus de fabrication</h2>
        <ol>
          <li>
            <strong>Validation du design et des mesures :</strong> plan clair et
            contraintes identifiées.
          </li>
          <li>
            <strong>Sélection des matériaux :</strong> choix cohérents avec
            l’usage (durabilité, humidité, entretien).
          </li>
          <li>
            <strong>Fabrication & assemblage :</strong> structure, modules,
            portes/tiroirs et préparation des ajustements.
          </li>
          <li>
            <strong>Préparation pour l’installation :</strong> contrôle,
            cohérence et mise en place pour une pose précise.
          </li>
        </ol>
        <p>
          <a href="/processus/">Voir le processus détaillé</a>
        </p>
      </section>

      <section aria-labelledby="details">
        <h2 id="details">
          Matériaux, assemblage et détails qui font la différence
        </h2>
        <p>
          Le haut de gamme se joue dans des éléments parfois invisibles au
          premier regard : stabilité des structures, qualité des chants,
          fiabilité de la quincaillerie et cohérence d’assemblage.
        </p>
        <ul>
          <li>
            <strong>Structures stables :</strong> choix de panneaux orientés
            durabilité selon le contexte.
          </li>
          <li>
            <strong>Portes & finis :</strong> MDF, mélamine, bois massif — selon
            le rendu et l’entretien souhaités.
          </li>
          <li>
            <strong>Tiroirs robustes :</strong> détails orientés durabilité (ex.
            tiroirs en bouleau, fond en contreplaqué de bouleau).
          </li>
          <li>
            <strong>Chants & finition :</strong> résistance à l’usure, aux
            impacts et à l’humidité (selon l’espace).
          </li>
          <li>
            <strong>Quincaillerie :</strong> charnières et coulisses adaptées à
            un usage répété.
          </li>
        </ul>
        <p>
          <a href="/materiaux/">Voir les matériaux</a> {" | "}
          <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
          {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a>
        </p>
      </section>

      <section aria-labelledby="precision">
        <h2 id="precision">Précision & constance</h2>
        <p>
          Un bon résultat vient de la constance : modules cohérents, alignements
          prévisibles et ajustements maîtrisés. Plus la fabrication est précise,
          plus l’installation peut être propre, rapide et durable.
        </p>
        <ul>
          <li>
            <strong>Cohérence :</strong> uniformité des lignes, des hauteurs et
            des alignements.
          </li>
          <li>
            <strong>Réduction des reprises :</strong> moins d’ajustements
            imprévus sur site.
          </li>
          <li>
            <strong>Durabilité :</strong> meilleure tenue dans le temps (portes,
            tiroirs, quincaillerie).
          </li>
        </ul>
        <p>
          <a href="/services/installation/">Voir le service d’installation</a>
        </p>
      </section>

      <section aria-labelledby="types">
        <h2 id="types">Fabrication par type de projet</h2>
        <ul>
          <li>
            <strong>Cuisine :</strong> modules, îlots, rangement optimisé,
            intégration électroménagers.
            <br />
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          </li>
          <li>
            <strong>Salle de bain :</strong> vanités et rangement adaptés à
            l’humidité.
            <br />
            <a href="/espaces/salle-de-bain/">Salle de bain & vanités</a>
          </li>
          <li>
            <strong>Walk-in :</strong> alignements verticaux, organisation et
            accessoires.
            <br />
            <a href="/espaces/walk-in/">Walk-in & rangement</a>
          </li>
          <li>
            <strong>Salle de lavage :</strong> usage fréquent, contraintes
            techniques, surfaces faciles à entretenir.
            <br />
            <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
          </li>
          <li>
            <strong>Commercial :</strong> usage intensif, durabilité et
            cohérence fonctionnelle.
            <br />
            <a href="/espaces/commercial/">Commercial sur mesure</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="transparence">
        <h2 id="transparence">Transparence</h2>
        <p>
          Nous visons un résultat durable et cohérent. Cela implique des choix
          techniques et une exécution soignée. Si votre priorité est une
          solution temporaire ou strictement standard, le sur mesure haut de
          gamme n’est probablement pas l’option la plus pertinente.
        </p>
      </section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Projets fabriqués</h2>
        <p>
          Consultez nos projets pour voir des exemples de configurations, de
          finitions et de types d’espaces réalisés.
        </p>
        <p>
          <a href="/projets/">Voir les projets</a>
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — fabrication</h2>
        <dl>
          <dt>Quelle est la différence entre sur mesure et semi-custom?</dt>
          <dd>
            Le sur mesure s’adapte à l’espace exact (dimensions, contraintes,
            ergonomie). Le semi-custom part de modules prédéfinis avec certaines
            variations. Le bon choix dépend du niveau d’adaptation et de
            finition recherché.
          </dd>

          <dt>Quels matériaux vieillissent le mieux?</dt>
          <dd>
            Ça dépend de l’espace (humidité, usage, entretien). La durabilité
            dépend autant du matériau que des chants, de la quincaillerie et de
            l’installation.
          </dd>

          <dt>Est-ce personnalisable à 100 %?</dt>
          <dd>
            L’objectif est d’adapter le projet à votre espace et à votre usage.
            La faisabilité dépend des contraintes techniques (dimensions, accès,
            équipements) et du niveau de finition recherché.
          </dd>

          <dt>Quels sont les délais de fabrication?</dt>
          <dd>
            Les délais varient selon la complexité et la disponibilité.
            L’échéance est à préciser lors de la soumission, afin d’aligner le
            design, la production et l’installation.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace, votre secteur (Montréal/Laval/Rive-Sud) et
          vos priorités (durabilité, rangement, finition). On vous propose la
          prochaine étape la plus simple pour avancer.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
