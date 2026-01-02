import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Commercial sur mesure",
  description:
    "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/commercial/",
  },
};

export default function Commercial() {
  const faqItems = [
    {
      q: "Faites-vous des projets commerciaux de petite taille?",
      a: "Oui, selon le contexte. Le point clé est la clarté des besoins, des contraintes et du calendrier. Décrivez le type d'espace et l'usage lors de la demande de soumission.",
    },
    {
      q: "Quels matériaux sont recommandés pour usage intensif?",
      a: "Le choix dépend de l'environnement (chocs, nettoyage, humidité). La durabilité dépend aussi des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Travaillez-vous avec des entrepreneurs ou des architectes?",
      a: "Oui, selon le projet. Nous pouvons collaborer avec les intervenants en place pour cadrer la fabrication et l'installation.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance est à préciser lors de la soumission, afin d'aligner le plan et la production.",
    },
    {
      q: "Pouvez-vous intervenir dans un espace en opération?",
      a: "Selon les contraintes, il est parfois possible de planifier l'intervention pour limiter l'impact sur vos opérations (heures, accès, phasage).",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Aménagement commercial sur mesure — mobilier et rangement durables
          </h1>
          <p>
            En commercial, la priorité est la fiabilité : usage intensif,
            entretien, contraintes du lieu, calendrier et coordination. Dilamco
            conçoit et réalise du mobilier et du rangement sur mesure pour
            espaces commerciaux, avec une exécution robuste et un résultat
            prévisible — principalement à Montréal, Laval et sur la Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Parler de votre projet</a> {" | "}
            <a href="/projets/commercial/">Voir des projets commerciaux</a>
          </p>
        </header>

        <section aria-labelledby="types">
          <h2 id="types">Types d’espaces commerciaux</h2>
          <p>
            Le sur mesure est particulièrement pertinent lorsque l’espace impose
            des contraintes (accès, équipements, circulation) ou lorsque l’usage
            est intensif.
          </p>
          <ul>
            <li>
              <strong>Bureaux & espaces professionnels :</strong> rangements,
              mobilier intégré, zones d’accueil.
            </li>
            <li>
              <strong>Commerces de détail :</strong> mobilier de présentation,
              arrière-boutique, rangements.
            </li>
            <li>
              <strong>Espaces de services :</strong> mobilier fonctionnel,
              organisation, durabilité au quotidien.
            </li>
            <li>
              <strong>Espaces communs :</strong> comptoirs, rangements muraux,
              solutions intégrées.
            </li>
          </ul>
          <p>
            Si votre besoin est strictement décoratif ou temporaire, le sur
            mesure commercial est souvent moins pertinent. Ici, l’objectif est
            la durabilité et la fonctionnalité.
          </p>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce que comprend un projet commercial Dilamco</h2>
          <ul>
            <li>
              <strong>Analyse des besoins :</strong> usage, contraintes du lieu,
              circulation, dimensions et accès.
            </li>
            <li>
              <strong>Design fonctionnel :</strong> plan orienté opération et
              ergonomie.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> mobilier et rangement
              adaptés au contexte.
            </li>
            <li>
              <strong>Installation professionnelle :</strong> alignements,
              ajustements, finition et inspection finale.
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
                <a href="/services/renovation/">
                  Rénovation clé en main (si applicable)
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section aria-labelledby="durabilite">
          <h2 id="durabilite">Usage intensif & durabilité</h2>
          <p>
            En commercial, la longévité se joue sur les détails : structures
            stables, chants résistants, quincaillerie conçue pour des cycles
            répétés et finitions faciles à entretenir.
          </p>
          <ul>
            <li>
              <strong>Matériaux adaptés :</strong> sélection orientée usage et
              stabilité.
            </li>
            <li>
              <strong>Chants & finition :</strong> résistance aux impacts et à
              l’usure.
            </li>
            <li>
              <strong>Quincaillerie :</strong> charnières et coulisses pour
              usage fréquent.
            </li>
            <li>
              <strong>Entretien :</strong> surfaces cohérentes avec le nettoyage
              régulier.
            </li>
          </ul>
          <p>
            <a href="/materiaux/">Voir les matériaux</a> {" | "}
            <a href="/materiaux/quincaillerie/">Quincaillerie</a> {" | "}
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
          </p>
        </section>

        <section aria-labelledby="contraintes">
          <h2 id="contraintes">Contraintes du lieu & coordination</h2>
          <p>
            Un projet commercial impose souvent des contraintes particulières :
            accès, heures d’intervention, intégration d’équipements, réseaux
            existants et calendrier. Nous cadrons le projet pour limiter les
            surprises et livrer un résultat cohérent.
          </p>
          <ul>
            <li>
              <strong>Intégration :</strong> adaptation aux équipements et
              contraintes existantes.
            </li>
            <li>
              <strong>Dégagements & accès :</strong> circulation, portes, zones
              de travail et dimensions.
            </li>
            <li>
              <strong>Phasage :</strong> planification pour réduire l’impact sur
              vos opérations (selon le contexte).
            </li>
            <li>
              <strong>Coordination :</strong> collaboration avec d’autres
              intervenants lorsque nécessaire.
            </li>
          </ul>
        </section>

        <section aria-labelledby="configurations">
          <h2 id="configurations">Configurations possibles</h2>
          <p>
            Quelques exemples de solutions fréquentes en commercial (adaptées à
            votre contexte).
          </p>
          <ul>
            <li>
              <strong>Comptoirs de service :</strong> réception, accueil, zones
              transactionnelles.
            </li>
            <li>
              <strong>Rangements muraux :</strong> optimisation verticale, zones
              de stockage.
            </li>
            <li>
              <strong>Mobilier intégré :</strong> solutions sur mesure non
              standardisées.
            </li>
            <li>
              <strong>Arrière-boutique :</strong> organisation des produits,
              accès rapide, durabilité.
            </li>
          </ul>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets commerciaux</h2>
          <p>
            Consultez nos réalisations pour voir des exemples de mobilier et de
            rangement adaptés à des usages intensifs, avec un niveau de finition
            professionnel.
          </p>
          <ul>
            <li>
              <a href="/projets/commercial/">
                Voir tous les projets commerciaux
              </a>
            </li>
            <li>
              <a href="/projets/">Voir tous les projets</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — commercial sur mesure</h2>
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
              <a href="/projets/commercial/">Projets</a>
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
          <h2 id="cta">Parlez-nous de votre projet commercial</h2>
          <p>
            Dites-nous le type d’espace, l’usage attendu, votre secteur
            (Montréal/Laval/Rive-Sud) et votre échéance. On vous propose la
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
