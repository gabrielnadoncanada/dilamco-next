import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Processus | Dilamco",
  description:
    "Découvrez le processus Dilamco : design, fabrication, installation et, selon le projet, rénovation clé en main. Une méthode structurée du plan à la finition.",
  alternates: {
    canonical: "https://dilamco.com/processus/",
  },
};

export default function Processus() {
  const faqItems = [
    {
      q: "Est-ce que tous les projets suivent exactement les mêmes étapes?",
      a: "La structure est la même, mais la portée varie. Un projet \"aménagement seulement\" est plus simple qu'une rénovation complète avec travaux connexes.",
    },
    {
      q: "À quel moment la fabrication démarre-t-elle?",
      a: "Lorsque le plan et les décisions essentielles sont validés. Les changements tardifs sont la source la plus fréquente de reprises et de délais.",
    },
    {
      q: "Faites-vous l'installation?",
      a: "Oui. L'installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
    },
    {
      q: "Le processus est-il adapté aux condos?",
      a: "Oui. On tient compte des contraintes d'accès, d'horaires et de logistique propres aux immeubles.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Processus Dilamco",
          description:
            "Processus structuré pour projets sur mesure : design, fabrication, installation et, selon la portée, rénovation clé en main du plan à la finition.",
          url: SITE.url + "/processus/",
          serviceType: "Processus de projet sur mesure",
          areaServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />

      <main id="contenu">
        <header>
          <h1>Notre processus — du plan à la finition</h1>
          <p>
            Une cuisine, une salle de bain ou un aménagement sur mesure n’est
            pas seulement un produit : c’est un projet. La différence entre un
            résultat “correct” et un résultat haut de gamme vient surtout de la
            méthode : décisions prises tôt, coordination claire, fabrication
            cohérente et installation précise.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/projets/">Voir des projets</a>
          </p>
        </header>

        <nav aria-labelledby="sommaire">
          <h2 id="sommaire">Sommaire</h2>
          <ol>
            <li>
              <a href="#pourquoi">Pourquoi un processus clair</a>
            </li>
            <li>
              <a href="#etapes">Les étapes du processus</a>
            </li>
            <li>
              <a href="#ce-que-vous-recevez">Ce que vous recevez</a>
            </li>
            <li>
              <a href="#ce-quon-vous-demande">Ce qu’on vous demande</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ol>
        </nav>

        <section aria-labelledby="pourquoi">
          <h2 id="pourquoi">Pourquoi un processus clair?</h2>
          <p>
            Un bon résultat dépend moins des “bonnes intentions” que d’un
            déroulement maîtrisé. Un processus clair sert à réduire les zones
            grises, protéger la qualité et rendre le projet plus prévisible.
          </p>
          <ul>
            <li>
              <strong>Réduire les imprévus :</strong> moins de reprises, moins
              de décisions en urgence.
            </li>
            <li>
              <strong>Clarifier les responsabilités :</strong> qui fait quoi, à
              quel moment.
            </li>
            <li>
              <strong>Protéger la qualité :</strong> alignements, ajustements,
              finitions et durabilité.
            </li>
            <li>
              <strong>Améliorer l’expérience :</strong> un déroulement plus
              simple, plus prévisible.
            </li>
          </ul>
        </section>

        <section aria-labelledby="etapes">
          <h2 id="etapes">Les étapes du processus Dilamco</h2>

          <section aria-labelledby="etape-1">
            <h3 id="etape-1">1) Cadrage du projet</h3>
            <p>
              On clarifie la portée (aménagement seulement vs rénovation), vos
              priorités, les contraintes (espace, circulation, intégrations) et
              votre échéance.
            </p>
            <ul>
              <li>
                Type d’espace : cuisine, salle de bain, walk-in, salle de
                lavage, commercial.
              </li>
              <li>
                Objectifs : rangement, circulation, style, entretien,
                durabilité.
              </li>
              <li>
                Contraintes : accès, condo, dimensions, points techniques.
              </li>
            </ul>
          </section>

          <section aria-labelledby="etape-2">
            <h3 id="etape-2">2) Design & planification</h3>
            <p>
              On valide un plan fonctionnel et réaliste : circulation,
              dégagements, modules, intégrations, et décisions structurantes
              avant fabrication.
            </p>
            <p>
              <a href="/services/design/">Service Design</a> {" | "}
              <a href="/guides/comment-choisir-cuisine-sur-mesure/">
                Guide : choisir une cuisine sur mesure
              </a>
            </p>
          </section>

          <section aria-labelledby="etape-3">
            <h3 id="etape-3">3) Choix des matériaux & finis</h3>
            <p>
              On choisit selon l’usage (humidité, impacts, entretien) et le
              rendu recherché. Une solution durable dépend aussi des chants, de
              la quincaillerie et de l’installation.
            </p>
            <ul>
              <li>
                <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
              </li>
              <li>
                <a href="/materiaux/quincaillerie/">Quincaillerie</a>
              </li>
              <li>
                <a href="/materiaux/couleurs/">Couleurs & finis</a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="etape-4">
            <h3 id="etape-4">
              4) Préparation & coordination (selon la portée)
            </h3>
            <p>
              Si le projet inclut des travaux connexes, on planifie la séquence
              : démolition, plomberie, électricité, ventilation, murs/plancher,
              pour éviter les reprises et les délais.
            </p>
            <p>
              <a href="/services/renovation/">Rénovation clé en main</a> {" | "}
              <a href="/guides/etapes-renovation-cuisine/">
                Guide : étapes d’une rénovation
              </a>{" "}
              {" | "}
              <a href="/guides/erreurs-renovation-cuisine/">
                Guide : erreurs fréquentes
              </a>
            </p>
          </section>

          <section aria-labelledby="etape-5">
            <h3 id="etape-5">5) Fabrication sur mesure</h3>
            <p>
              La fabrication démarre lorsque le plan et les choix essentiels
              sont validés. L’objectif : cohérence, précision et qualité stable.
            </p>
            <p>
              <a href="/services/fabrication/">Service Fabrication</a>
            </p>
          </section>

          <section aria-labelledby="etape-6">
            <h3 id="etape-6">6) Installation, ajustements & finition</h3>
            <p>
              L’installation et les ajustements sont déterminants : niveaux,
              alignements, jeux réguliers, réglages des portes/tiroirs, et
              finitions propres.
            </p>
            <p>
              <a href="/services/installation/">Service Installation</a>
            </p>
          </section>

          <section aria-labelledby="etape-7">
            <h3 id="etape-7">7) Inspection finale</h3>
            <p>
              On valide le fonctionnement (portes/tiroirs), les alignements et
              les points de finition. L’objectif est un résultat propre, durable
              et cohérent avec le plan.
            </p>
          </section>
        </section>

        <section aria-labelledby="ce-que-vous-recevez">
          <h2 id="ce-que-vous-recevez">Ce que vous recevez</h2>
          <ul>
            <li>
              <strong>Un plan clair :</strong> priorités, configuration et
              décisions structurantes.
            </li>
            <li>
              <strong>Des choix cohérents :</strong> matériaux, finis et
              quincaillerie adaptés à l’usage.
            </li>
            <li>
              <strong>Une exécution maîtrisée :</strong> fabrication et
              installation avec ajustements.
            </li>
            <li>
              <strong>Une finition propre :</strong> alignements, détails
              visibles, inspection finale.
            </li>
          </ul>
        </section>

        <section aria-labelledby="ce-quon-vous-demande">
          <h2 id="ce-quon-vous-demande">
            Ce qu’on vous demande (pour avancer vite)
          </h2>
          <p>
            Pour vous orienter efficacement, quelques informations suffisent :
          </p>
          <ul>
            <li>Votre secteur (Montréal / Laval / Rive-Sud).</li>
            <li>
              Le type d’espace (cuisine, salle de bain, walk-in, salle de
              lavage, commercial).
            </li>
            <li>La portée (aménagement seulement ou rénovation complète).</li>
            <li>
              Vos priorités (rangement, îlot, style, entretien, contraintes).
            </li>
            <li>Votre échéance (quand vous souhaitez démarrer).</li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — processus</h2>
          <dl>
            {faqItems.map((item: FAQItem) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Décrivez votre espace, votre secteur, votre échéance et la portée du
            projet. On vous recommande la prochaine étape la plus simple pour
            avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>

        <section aria-labelledby="liens">
          <h2 id="liens">Liens utiles</h2>
          <ul>
            <li>
              <a href="/espaces/">Espaces</a>
            </li>
            <li>
              <a href="/services/">Services</a>
            </li>
            <li>
              <a href="/projets/">Projets</a>
            </li>
            <li>
              <a href="/materiaux/">Matériaux</a>
            </li>
            <li>
              <a href="/contact/">Contact</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
