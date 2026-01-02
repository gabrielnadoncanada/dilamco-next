import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Service de design | Dilamco",
  description:
    "Service de design : optimisation de l’espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux. Un design orienté usage, prêt pour fabrication et installation, à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/design/",
  },
};

export default function Design() {
  const faqItems = [
    {
      q: "Le design est-il obligatoire?",
      a: "Dans un projet sur mesure, le design sert à cadrer les décisions avant la fabrication. Il est fortement recommandé pour éviter des compromis tardifs et clarifier l'organisation.",
    },
    {
      q: "Peut-on passer directement à la fabrication?",
      a: "Ça dépend du projet. Même lorsque l'idée est claire, il faut valider les contraintes, l'organisation et les dimensions pour assurer un résultat cohérent.",
    },
    {
      q: "Est-ce que ça fonctionne en condo?",
      a: "Oui. Le design est particulièrement utile en condo pour gérer les contraintes d'accès, d'espace et d'intégration des équipements.",
    },
    {
      q: "Quand intervient le design dans le projet?",
      a: "Le design intervient au début, avant la fabrication, afin de valider la logique d'espace, les choix de matériaux et les contraintes techniques.",
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Service de design d'armoires et cuisines sur mesure",
          description:
            "Service de design : optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux. Un design orienté usage, prêt pour fabrication et installation.",
          url: SITE.url + "/services/design/",
          serviceType: "Design",
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>Service de design — structurer le projet avant de fabriquer</h1>
          <p>
            Le design est l’étape qui réduit les erreurs coûteuses. Il sert à
            cadrer l’usage, organiser l’espace, intégrer les contraintes (murs,
            plomberie, électroménagers) et prendre les bonnes décisions avant la
            fabrication et l’installation. Chez Dilamco, le design est orienté
            fonctionnalité et exécution — principalement à Montréal, Laval et
            sur la Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Parler de votre projet</a> {" | "}
            <a href="/projets/">Voir nos réalisations</a>
          </p>
        </header>

        <section aria-labelledby="role">
          <h2 id="role">Le rôle du design dans un projet sur mesure</h2>
          <p>
            Un bon design n’est pas décoratif : il rend le projet clair et
            exécutable. Il permet d’anticiper les contraintes et d’éviter les
            reprises en fabrication ou les compromis visibles à la fin.
          </p>
          <ul>
            <li>
              <strong>Optimiser l’espace :</strong> circulation, zones de
              travail, dégagements, hauteurs.
            </li>
            <li>
              <strong>Structurer le rangement :</strong> accès, organisation,
              priorités d’usage.
            </li>
            <li>
              <strong>Intégrer les contraintes :</strong> murs irréguliers,
              plomberie, équipements.
            </li>
            <li>
              <strong>Aligner les décisions :</strong> matériaux, finition,
              calendrier et niveau de complexité.
            </li>
          </ul>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce que comprend le service de design</h2>
          <ul>
            <li>
              <strong>Analyse des besoins :</strong> vos priorités, votre usage
              et vos contraintes.
            </li>
            <li>
              <strong>Organisation fonctionnelle :</strong> plan d’espace et
              logique de rangement.
            </li>
            <li>
              <strong>Choix matériaux & finis :</strong> décisions cohérentes
              avec l’usage (durabilité, entretien).
            </li>
            <li>
              <strong>Planification :</strong> cadrage des étapes pour préparer
              fabrication et installation.
            </li>
            <li>
              <strong>Préparation à l’exécution :</strong> un design pensé pour
              être fabriqué et posé proprement.
            </li>
          </ul>
          <p>
            <a href="/services/fabrication/">Voir la fabrication</a> {" | "}
            <a href="/services/installation/">Voir l’installation</a> {" | "}
            <a href="/materiaux/">Voir les matériaux</a>
          </p>
        </section>

        <section aria-labelledby="usage">
          <h2 id="usage">Design orienté usage (le cœur de notre approche)</h2>
          <p>
            Notre approche vise à rendre l’espace simple à vivre. Le design est
            construit autour des gestes du quotidien : accès au rangement, zones
            de travail, circulation et cohérence des dimensions.
          </p>
          <ul>
            <li>
              <strong>Ergonomie :</strong> hauteurs, dégagements, logique de
              déplacement.
            </li>
            <li>
              <strong>Rangement intelligent :</strong> coins, tiroirs, modules
              adaptés et organisation.
            </li>
            <li>
              <strong>Priorités claires :</strong> ce qui compte le plus pour
              vous (fonction, style, durabilité).
            </li>
          </ul>
        </section>

        <section aria-labelledby="contraintes">
          <h2 id="contraintes">
            Contraintes techniques (intégration, pas improvisation)
          </h2>
          <p>
            Le design doit tenir compte de la réalité du bâtiment et des
            équipements. Nous intégrons les contraintes techniques dès le départ
            afin d’éviter des compromis tardifs.
          </p>
          <ul>
            <li>
              <strong>Plomberie & électricité :</strong> intégration des
              emplacements et dégagements (sans exécuter les travaux).
            </li>
            <li>
              <strong>Condo et bâtiments existants :</strong> murs irréguliers,
              accès, contraintes de chantier.
            </li>
            <li>
              <strong>Humidité :</strong> choix adaptés en salle de bain et
              salle de lavage.
            </li>
            <li>
              <strong>Équipements :</strong> électroménagers, évier, hottes,
              accessoires et intégrations.
            </li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
          </p>
        </section>

        <section aria-labelledby="risque">
          <h2 id="risque">Le design réduit le risque</h2>
          <p>
            Plus les décisions sont prises tôt, plus le projet est prévisible.
            Un design solide réduit les imprévus, simplifie la fabrication et
            rend l’installation plus propre.
          </p>
          <ul>
            <li>
              <strong>Moins d’imprévus :</strong> contraintes identifiées avant
              la production.
            </li>
            <li>
              <strong>Meilleure cohérence :</strong> proportions, alignements,
              logique de modules.
            </li>
            <li>
              <strong>Installation plus précise :</strong> moins d’ajustements
              inutiles sur site.
            </li>
          </ul>
          <p>
            <a href="/services/installation/">Voir le service d’installation</a>
          </p>
        </section>

        <section aria-labelledby="types">
          <h2 id="types">Design par type de projet</h2>
          <ul>
            <li>
              <strong>Cuisine :</strong> zones de travail, circulation, îlot,
              rangement et intégration.
              <br />
              <a href="/espaces/cuisine/">Cuisine sur mesure</a>
            </li>
            <li>
              <strong>Salle de bain :</strong> contraintes d’humidité,
              rangement, ergonomie.
              <br />
              <a href="/espaces/salle-de-bain/">Salle de bain & vanités</a>
            </li>
            <li>
              <strong>Walk-in :</strong> organisation par zones, accessibilité,
              rangement vertical.
              <br />
              <a href="/espaces/walk-in/">Walk-in & rangement</a>
            </li>
            <li>
              <strong>Salle de lavage :</strong> zones lavage/pliage,
              contraintes techniques, entretien.
              <br />
              <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
            </li>
            <li>
              <strong>Commercial :</strong> fonctionnalité, usage intensif,
              contraintes et calendrier.
              <br />
              <a href="/espaces/commercial/">Commercial sur mesure</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="pas">
          <h2 id="pas">Ce que ce service n’est pas</h2>
          <p>
            Le design Dilamco n’est pas une démarche d’inspiration “Pinterest”
            déconnectée de la réalité. Il vise un plan cohérent, faisable, et
            prêt pour la fabrication et l’installation.
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — design</h2>
          <dl>
            <dt>Le design est-il obligatoire?</dt>
            <dd>
              Dans un projet sur mesure, le design sert à cadrer les décisions
              avant la fabrication. Il est fortement recommandé pour éviter des
              compromis tardifs et clarifier l’organisation.
            </dd>

            <dt>Peut-on passer directement à la fabrication?</dt>
            <dd>
              Ça dépend du projet. Même lorsque l’idée est claire, il faut
              valider les contraintes, l’organisation et les dimensions pour
              assurer un résultat cohérent.
            </dd>

            <dt>Est-ce que ça fonctionne en condo?</dt>
            <dd>
              Oui. Le design est particulièrement utile en condo pour gérer les
              contraintes d’accès, d’espace et d’intégration des équipements.
            </dd>

            <dt>Quand intervient le design dans le projet?</dt>
            <dd>
              Le design intervient au début, avant la fabrication, afin de
              valider la logique d’espace, les choix de matériaux et les
              contraintes techniques.
            </dd>
          </dl>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Dites-nous votre espace, votre secteur (Montréal/Laval/Rive-Sud) et
            vos priorités (rangement, durabilité, finition). On vous propose la
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
