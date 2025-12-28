import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets de cuisines sur mesure | Dilamco",
  description:
    "Projets de cuisines sur mesure : réalisations et exemples de configurations (condo, îlot, rangement optimisé, rénovation). Conception, fabrication et installation à Montréal, Laval et Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/projets/cuisine/",
  },
};

export default function ProjetsCuisine() {
  return (
    <main id="contenu">
      <header>
        <h1>Projets de cuisines sur mesure — réalisations</h1>
        <p>
          Chaque cuisine est conçue selon l’espace réel (dimensions,
          circulation, lumière) et l’usage quotidien (rangement, zones de
          travail, intégrations). Cette page sert de preuve concrète : des
          exemples de projets de cuisines sur mesure réalisés (ou à documenter)
          pour illustrer des solutions cohérentes, durables et bien exécutées.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet de cuisine</a> {" | "}
          <a href="/espaces/cuisine/">Voir la page Cuisine sur mesure</a>
        </p>
      </header>

      <section aria-labelledby="regroupements">
        <h2 id="regroupements">Regroupements (pour vous situer rapidement)</h2>
        <p>
          Les cuisines se ressemblent en photo, mais elles se décident sur des
          contraintes réelles. Voici des catégories utiles pour cadrer votre cas
          :
        </p>
        <ul>
          <li>
            Cuisines de condo (accès chantier, circulation serrée, intégrations)
          </li>
          <li>Cuisines familiales (usage intensif, durabilité, rangement)</li>
          <li>
            Cuisines avec îlot (préparation, repas, circulation, rangement)
          </li>
          <li>
            Rénovations complètes (coordination, travaux techniques, séquence)
          </li>
          <li>
            Styles contemporains et intemporels (couleurs, finis, cohérence)
          </li>
        </ul>
        <p>
          Pour structurer votre décision :{" "}
          <a href="/guides/comment-choisir-cuisine-sur-mesure/">
            Comment choisir une cuisine sur mesure
          </a>
          .
        </p>
      </section>

      <section aria-labelledby="format">
        <h2 id="format">Format recommandé pour documenter un projet</h2>
        <p>
          Pour maximiser la crédibilité (et le SEO), chaque projet devrait
          suivre la même structure. Même un format texte simple apporte de la
          valeur.
        </p>
        <ul>
          <li>
            <strong>Ville / secteur :</strong> Montréal, Laval ou Rive-Sud.
          </li>
          <li>
            <strong>Type de projet :</strong> armoires seulement ou rénovation
            complète.
          </li>
          <li>
            <strong>Mandat :</strong> objectif principal (rangement, îlot,
            intégrations).
          </li>
          <li>
            <strong>Contraintes :</strong> dimensions, circulation, accès condo,
            plomberie/électricité.
          </li>
          <li>
            <strong>Solution :</strong> configuration, modules, logique de
            rangement.
          </li>
          <li>
            <strong>Matériaux :</strong> structure vs portes, finis, points
            d’attention.
          </li>
          <li>
            <strong>Résultat :</strong> bénéfices concrets (fonction, fluidité,
            durabilité, finition).
          </li>
        </ul>
        <p>
          Références utiles :{" "}
          <a href="/materiaux/comparatif/">Comparatif des matériaux</a> {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a> {" | "}
          <a href="/materiaux/couleurs/">Couleurs & finis</a>
        </p>
      </section>

      <section aria-labelledby="contraintes">
        <h2 id="contraintes">Contraintes courantes en cuisine</h2>
        <ul>
          <li>
            <strong>Circulation :</strong> dégagements, ouvertures, îlot
            dimensionné selon l’espace.
          </li>
          <li>
            <strong>Rangement :</strong> tiroirs vs portes, coins, hauteur,
            garde-manger.
          </li>
          <li>
            <strong>Intégrations :</strong> électroménagers, hotte/ventilation,
            prises, éclairage.
          </li>
          <li>
            <strong>Humidité :</strong> évier, lave-vaisselle, protection des
            chants.
          </li>
          <li>
            <strong>Finition :</strong> alignements, ajustements, détails
            visibles.
          </li>
        </ul>
      </section>

      <section aria-labelledby="materiaux">
        <h2 id="materiaux">Matériaux & choix techniques (ce qui fait durer)</h2>
        <p>
          Une cuisine durable est un système : structure, chants, quincaillerie
          et installation. Le matériau seul ne garantit pas la longévité —
          l’exécution et les ajustements sont déterminants.
        </p>
        <p>
          <a href="/materiaux/comparatif/">Comparer les matériaux</a> {" | "}
          <a href="/materiaux/quincaillerie/">Comprendre la quincaillerie</a>
        </p>
      </section>

      <section aria-labelledby="renovation">
        <h2 id="renovation">Armoires seulement vs rénovation complète</h2>
        <p>
          Certains projets se limitent aux armoires et à l’installation.
          D’autres nécessitent une rénovation complète (plomberie, électricité,
          murs, plancher, dosseret). Dans ce cas, la coordination et le
          séquencement deviennent critiques pour éviter reprises et délais.
        </p>
        <p>
          <a href="/services/renovation/cuisine/">
            Voir la rénovation de cuisine
          </a>{" "}
          {" | "}
          <a href="/guides/etapes-renovation-cuisine/">
            Voir les étapes d’une rénovation
          </a>{" "}
          {" | "}
          <a href="/guides/erreurs-renovation-cuisine/">
            Voir les erreurs fréquentes
          </a>
        </p>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Processus (du besoin à l’installation)</h2>
        <ol>
          <li>
            <strong>Design :</strong> cadrer l’usage, valider le plan et les
            contraintes.
          </li>
          <li>
            <strong>Fabrication :</strong> produire selon les décisions
            validées.
          </li>
          <li>
            <strong>Installation :</strong> pose, ajustements, finition et
            inspection.
          </li>
        </ol>
        <p>
          <a href="/services/design/">Design</a> {" | "}
          <a href="/services/fabrication/">Fabrication</a> {" | "}
          <a href="/services/installation/">Installation</a>
        </p>
      </section>

      <section aria-labelledby="projets">
        <h2 id="projets">Projets (à documenter)</h2>
        <p>
          Ajoutez ici vos projets réels avec une page par projet. Inclure la
          ville/secteur, le mandat, les contraintes, la solution, les matériaux,
          et le résultat.
        </p>
        <ul>
          <li>
            <a href="/projets/cuisine/modele-projet-1/">
              Modèle de projet (structure à dupliquer)
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — projets de cuisines</h2>
        <dl>
          <dt>Faites-vous des cuisines de condo?</dt>
          <dd>
            Oui. Le sur mesure est souvent particulièrement pertinent en condo
            (contraintes d’espace, intégrations, accès chantier).
          </dd>

          <dt>Est-ce que chaque projet est unique?</dt>
          <dd>
            Oui. Les dimensions, la circulation, la lumière, les contraintes
            techniques et l’usage déterminent la configuration. Le sur mesure
            vise précisément cette adaptation.
          </dd>

          <dt>Faites-vous l’installation?</dt>
          <dd>
            Oui. L’installation et les ajustements font partie des éléments clés
            pour un résultat durable et cohérent.
          </dd>

          <dt>Peut-on voir des projets similaires au nôtre?</dt>
          <dd>
            Oui, lorsque les projets sont documentés (type d’espace, contraintes
            et solution). Plus vous décrivez votre contexte, plus il est facile
            d’orienter vers des exemples pertinents.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet de cuisine</h2>
        <p>
          Dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre échéance, et
          vos priorités (rangement, îlot, style, contraintes). On vous
          recommande la prochaine étape la plus simple pour avancer.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>

      <section aria-labelledby="liens">
        <h2 id="liens">Liens utiles</h2>
        <ul>
          <li>
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          </li>
          <li>
            <a href="/guides/comment-choisir-cuisine-sur-mesure/">
              Comment choisir une cuisine sur mesure
            </a>
          </li>
          <li>
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
          </li>
          <li>
            <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
