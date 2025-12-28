import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets commerciaux | Dilamco",
  description:
    "Projets commerciaux sur mesure : exemples d’aménagements réalisés (bureaux, commerces, restauration). Conception, fabrication et installation avec un focus sur durabilité et exécution.",
  alternates: {
    canonical: "https://dilamco.com/projets/commercial/",
  },
};

export default function ProjetsCommercial() {
  return (
    <main id="contenu">
      <header>
        <h1>Projets commerciaux — aménagements sur mesure réalisés</h1>
        <p>
          Les projets commerciaux imposent des contraintes spécifiques : usage
          intensif, durabilité, coordination avec d’autres intervenants, et
          parfois des échéanciers serrés. Cette page regroupe des exemples de
          projets commerciaux réalisés (ou à documenter) pour illustrer la
          logique de conception, de fabrication et d’installation en contexte
          commercial.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet commercial</a> {" | "}
          <a href="/espaces/commercial/">Voir l’espace Commercial</a>
        </p>
      </header>

      <section aria-labelledby="types">
        <h2 id="types">Types de projets commerciaux</h2>
        <ul>
          <li>
            Bureaux et espaces corporatifs (rangements, zones communes, mobilier
            intégré)
          </li>
          <li>
            Commerces de détail (comptoirs, présentoirs, rangements,
            arrière-boutique)
          </li>
          <li>
            Restauration (comptoirs, banquettes, rangements, zones de service)
          </li>
          <li>
            Espaces d’accueil (réception, vestiaires, rangements fonctionnels)
          </li>
        </ul>
      </section>

      <section aria-labelledby="format">
        <h2 id="format">Comment présenter un projet (format recommandé)</h2>
        <p>
          Pour maximiser la crédibilité (et le SEO), chaque projet devrait être
          décrit avec la même structure, même si vous n’avez pas encore toutes
          les photos.
        </p>
        <ul>
          <li>
            <strong>Type d’espace :</strong> bureau, commerce, restauration,
            etc.
          </li>
          <li>
            <strong>Mandat :</strong> ce qui devait être réalisé (objectif
            principal).
          </li>
          <li>
            <strong>Contraintes :</strong> délais, accès, usage intensif,
            dimensions, intégrations.
          </li>
          <li>
            <strong>Solution :</strong> approche, modules, choix de matériaux,
            quincaillerie.
          </li>
          <li>
            <strong>Résultat :</strong> bénéfices concrets (fonction,
            durabilité, fluidité, finition).
          </li>
        </ul>
        <p>
          Références utiles :{" "}
          <a href="/materiaux/comparatif/">Comparatif des matériaux</a> {" | "}
          <a href="/materiaux/quincaillerie/">Quincaillerie</a>
        </p>
      </section>

      <section aria-labelledby="contraintes">
        <h2 id="contraintes">Contraintes fréquentes en commercial</h2>
        <ul>
          <li>
            <strong>Usage intensif :</strong> cycles d’ouverture élevés, charges
            importantes, entretien fréquent.
          </li>
          <li>
            <strong>Durabilité :</strong> choix cohérents (matériaux +
            quincaillerie + installation).
          </li>
          <li>
            <strong>Coordination :</strong> intégration avec travaux connexes
            (selon le chantier).
          </li>
          <li>
            <strong>Précision :</strong> alignements, ajustements, finitions
            propres (zone visible au public).
          </li>
        </ul>
        <p>
          <a href="/services/installation/">Voir l’installation</a> {" | "}
          <a href="/services/">Voir les services</a>
        </p>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Processus (du besoin à l’installation)</h2>
        <ol>
          <li>
            <strong>Cadrage :</strong> objectifs, usage, contraintes, échéance
            et contextes d’intégration.
          </li>
          <li>
            <strong>Design & planification :</strong> validation du plan et des
            points techniques.
          </li>
          <li>
            <strong>Fabrication :</strong> production sur mesure selon les
            décisions validées.
          </li>
          <li>
            <strong>Installation :</strong> pose, ajustements, finition et
            inspection.
          </li>
          <li>
            <strong>Validation :</strong> fonctionnement, stabilité, détails
            visibles et corrections au besoin.
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
          Ajoutez ici vos projets réels avec une page par projet. Même un format
          texte simple apporte de la valeur : ville/secteur, mandat,
          contraintes, solutions, matériaux et résultat.
        </p>
        <ul>
          <li>
            <a href="/projets/commercial/modele-projet-1/">
              Modèle de projet (structure à dupliquer)
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — projets commerciaux</h2>
        <dl>
          <dt>Travaillez-vous avec des designers ou des architectes?</dt>
          <dd>
            Oui, selon le projet. Nous pouvons collaborer sur les plans et
            valider les contraintes d’intégration avant fabrication et
            installation.
          </dd>

          <dt>Faites-vous l’installation?</dt>
          <dd>
            Oui. L’installation et les ajustements font partie des éléments clés
            pour un résultat durable et cohérent.
          </dd>

          <dt>Pouvez-vous livrer dans un échéancier serré?</dt>
          <dd>
            Ça dépend de la portée et de la disponibilité. Le meilleur levier
            est une planification claire et des décisions validées tôt.
          </dd>

          <dt>Quels types de projets commerciaux réalisez-vous?</dt>
          <dd>
            Bureaux, commerces, restauration et autres aménagements sur mesure —
            selon le mandat et les contraintes.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet commercial</h2>
        <p>
          Décrivez votre type d’espace, votre secteur, vos contraintes (usage,
          délais, intégrations) et votre échéance. On vous recommande la
          prochaine étape la plus simple pour avancer.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>

      <section aria-labelledby="liens">
        <h2 id="liens">Liens utiles</h2>
        <ul>
          <li>
            <a href="/espaces/commercial/">Espace Commercial</a>
          </li>
          <li>
            <a href="/services/">Services</a>
          </li>
          <li>
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
          </li>
          <li>
            <a href="/materiaux/quincaillerie/">Quincaillerie</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
