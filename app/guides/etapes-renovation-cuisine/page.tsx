import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd } from "@/seo/schema/builders";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Étapes d'une rénovation de cuisine",
  description:
    "Guide : étapes d’une rénovation de cuisine, du cadrage au design, aux travaux techniques, à l’installation et aux finitions. Comprendre le bon ordre des étapes avant de démarrer.",
  alternates: {
    canonical: "https://dilamco.com/guides/etapes-renovation-cuisine/",
  },
};

export default function EtapesRenovationCuisine() {
  const faqItems: FAQItem[] = [
    {
      q: "Peut-on sauter certaines étapes?",
      a: "On peut adapter la portée, mais l'ordre logique reste le même. Ce qui est risqué, c'est de démarrer sans plan validé ou de faire les travaux techniques trop tard.",
    },
    {
      q: "Faut-il tout décider avant de démarrer?",
      a: "Les décisions structurantes oui : plan, électroménagers, contraintes techniques, matériaux et séquence des travaux. Ça réduit fortement les reprises et les délais.",
    },
    {
      q: 'Quand "commander" ou lancer la fabrication?',
      a: "Lorsque le plan est final, les contraintes techniques validées, et les choix essentiels confirmés. Les changements tardifs coûtent cher.",
    },
    {
      q: "Clé en main ou coordination personnelle?",
      a: "Si plusieurs corps de métier sont impliqués, le clé en main simplifie la coordination et réduit les zones grises. Sinon, vous devrez gérer l'ordre des étapes et les responsabilités.",
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Les étapes d’une rénovation de cuisine — du plan à la finition
          </h1>
          <p>
            Une rénovation de cuisine réussie dépend surtout de l’ordre des
            étapes. Quand le séquencement est mauvais, les coûts cachés et les
            délais apparaissent : reprises, changements tardifs, coordination
            difficile. Ce guide présente le déroulement typique d’un projet, de
            la planification à l’inspection finale, pour vous aider à cadrer
            votre décision avant de lancer le chantier.
          </p>
          <p>
            <a href="/contact/">Parler de votre projet</a> {" | "}
            <a href="/services/renovation/cuisine/">
              Voir la rénovation de cuisine
            </a>
          </p>
        </header>

        <nav aria-labelledby="sommaire">
          <h2 id="sommaire">Sommaire</h2>
          <ol>
            <li>
              <a href="#overview">Vue d’ensemble</a>
            </li>
            <li>
              <a href="#cadrage">Cadrer le projet</a>
            </li>
            <li>
              <a href="#design">Design & planification</a>
            </li>
            <li>
              <a href="#materiaux">Choix des matériaux</a>
            </li>
            <li>
              <a href="#preparation">Préparation du chantier</a>
            </li>
            <li>
              <a href="#travaux">Travaux techniques</a>
            </li>
            <li>
              <a href="#fabrication">Fabrication & installation</a>
            </li>
            <li>
              <a href="#finitions">Ajustements & finitions</a>
            </li>
            <li>
              <a href="#inspection">Inspection finale</a>
            </li>
            <li>
              <a href="#delais">Délais : à quoi s’attendre</a>
            </li>
            <li>
              <a href="#erreurs">Erreurs de séquencement à éviter</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ol>
        </nav>

        <section aria-labelledby="overview">
          <h2 id="overview">Vue d’ensemble (le bon ordre des étapes)</h2>
          <p>
            Les projets varient, mais la logique reste la même : on planifie, on
            prépare, on exécute les travaux techniques, puis on installe et on
            finit proprement.
          </p>
          <ol>
            <li>Cadrage du projet (portée, contraintes, priorités).</li>
            <li>Design & planification (plan, ergonomie, intégrations).</li>
            <li>
              Choix des matériaux et finis (usage, entretien, durabilité).
            </li>
            <li>
              Préparation du chantier (logistique, démolition, protection).
            </li>
            <li>
              Travaux techniques (plomberie, électricité, ventilation,
              murs/plancher si applicable).
            </li>
            <li>Fabrication et installation des armoires.</li>
            <li>Ajustements, quincaillerie et finitions.</li>
            <li>Inspection finale et validation du fonctionnement.</li>
          </ol>
        </section>

        <section aria-labelledby="cadrage">
          <h2 id="cadrage">1) Cadrer le projet</h2>
          <p>
            Avant de parler matériaux ou style, clarifiez le cadre : qu’est-ce
            qui doit changer et pourquoi? Une rénovation peut aller d’un
            remplacement d’armoires à un projet complet avec travaux connexes.
          </p>
          <ul>
            <li>
              <strong>Objectifs :</strong> rangement, circulation, îlot, usage
              quotidien, entretien.
            </li>
            <li>
              <strong>Portée :</strong> armoires seulement vs rénovation
              complète (plomberie/électricité/plancher).
            </li>
            <li>
              <strong>Contraintes :</strong> condo, accès, horaires, ascenseur,
              stationnement, bruit.
            </li>
            <li>
              <strong>Échéance :</strong> période souhaitée, flexibilité,
              dépendances.
            </li>
          </ul>
          <p>
            Pour cadrer les priorités dès le départ :{" "}
            <a href="/services/design/">Design</a>.
          </p>
        </section>

        <section aria-labelledby="design">
          <h2 id="design">2) Design & planification</h2>
          <p>
            C’est l’étape qui évite 80% des problèmes : plan fonctionnel,
            circulation, zones de travail, intégration des électroménagers et
            validation des contraintes techniques.
          </p>
          <ul>
            <li>
              Plan et ergonomie (circulation, dégagements, îlot réaliste).
            </li>
            <li>
              Intégration des électroménagers (dimensions, dégagements,
              sorties).
            </li>
            <li>
              Validation des contraintes (murs, fenêtres, plomberie,
              ventilation).
            </li>
            <li>Décisions structurantes prises avant fabrication.</li>
          </ul>
          <p>
            <a href="/services/design/">Voir le service de design</a> {" | "}
            <a href="/espaces/cuisine/">Voir Cuisine sur mesure</a>
          </p>
        </section>

        <section aria-labelledby="materiaux">
          <h2 id="materiaux">3) Choix des matériaux et finis</h2>
          <p>
            Les matériaux doivent être choisis selon l’usage (humidité, impacts,
            entretien) et le rendu recherché. Le “bon” choix dépend aussi des
            chants, de la quincaillerie et de l’installation.
          </p>
          <ul>
            <li>Structure (caissons) vs portes (fini et rendu).</li>
            <li>Humidité (évier, lave-vaisselle) et entretien au quotidien.</li>
            <li>Choix des couleurs et finis selon la lumière et le style.</li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>{" "}
            {" | "}
            <a href="/materiaux/couleurs/">Couleurs & finis</a>
          </p>
        </section>

        <section aria-labelledby="preparation">
          <h2 id="preparation">4) Préparation du chantier</h2>
          <p>
            Une préparation solide réduit le chaos : protection des zones,
            planification des intervenants, séquence claire. En condo, la
            logistique est souvent un facteur majeur.
          </p>
          <ul>
            <li>Protection (planchers, circulation, zones adjacentes).</li>
            <li>Démolition (si applicable) et gestion des débris.</li>
            <li>
              Accès chantier : stationnement, ascenseur, horaires, voisins.
            </li>
            <li>Coordination : qui intervient, quand, et dans quel ordre?</li>
          </ul>
          <p>
            <a href="/services/renovation/cuisine/">
              Voir la rénovation de cuisine
            </a>
          </p>
        </section>

        <section aria-labelledby="travaux">
          <h2 id="travaux">5) Travaux techniques (avant l’installation)</h2>
          <p>
            Les travaux techniques doivent être prêts avant l’installation des
            armoires. Sinon, on se retrouve à refaire des éléments finis (murs,
            peinture, plancher) ou à modifier le plan.
          </p>
          <ul>
            <li>
              <strong>Plomberie :</strong> évier, lave-vaisselle,
              relocalisations si nécessaires.
            </li>
            <li>
              <strong>Électricité :</strong> circuits, prises, éclairage, hotte
              et électroménagers.
            </li>
            <li>
              <strong>Ventilation :</strong> conduits, efficacité, bruit et
              conformité.
            </li>
            <li>
              <strong>Murs/plancher :</strong> selon la portée (gypse, peinture,
              revêtements).
            </li>
          </ul>
        </section>

        <section aria-labelledby="fabrication">
          <h2 id="fabrication">6) Fabrication & installation des armoires</h2>
          <p>
            Une fois le plan validé, la fabrication suit le projet.
            L’installation exige précision et ajustements : niveaux,
            alignements, jeux réguliers et finition propre.
          </p>
          <ul>
            <li>Fabrication sur mesure selon le plan final.</li>
            <li>Installation : niveaux, alignements, ajustements.</li>
            <li>Préparation pour comptoir et éléments connexes.</li>
          </ul>
          <p>
            <a href="/services/fabrication/">Voir la fabrication</a> {" | "}
            <a href="/services/installation/">Voir l’installation</a>
          </p>
        </section>

        <section aria-labelledby="finitions">
          <h2 id="finitions">7) Ajustements & finitions</h2>
          <p>
            C’est l’étape qui fait la différence entre “correct” et “haut de
            gamme” : portes alignées, tiroirs fluides, mécanismes réglés,
            finitions propres.
          </p>
          <ul>
            <li>Réglage des portes, tiroirs et mécanismes.</li>
            <li>
              Quincaillerie : confort, stabilité des réglages, usage quotidien.
            </li>
            <li>Finitions : joints, retouches, détails visibles.</li>
          </ul>
          <p>
            <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a>
          </p>
        </section>

        <section aria-labelledby="inspection">
          <h2 id="inspection">8) Inspection finale</h2>
          <p>
            L’inspection finale valide le fonctionnement et la finition :
            ouverture/fermeture, alignements, tiroirs, accessoires, et points de
            détail. C’est aussi le moment de confirmer les dernières retouches
            si nécessaires.
          </p>
          <ul>
            <li>Vérification globale et fonctionnement.</li>
            <li>Validation du résultat avec le client.</li>
            <li>Liste de retouches (si applicable) et finalisation.</li>
          </ul>
        </section>

        <section aria-labelledby="delais">
          <h2 id="delais">Délais : à quoi s’attendre (sans chiffres)</h2>
          <p>
            Les délais varient selon la complexité, la disponibilité et la
            portée des travaux. Ce qui allonge le plus un projet : changements
            tardifs, décisions non finalisées, et séquencement mal coordonné
            entre intervenants.
          </p>
          <ul>
            <li>Valider le plan et les électroménagers avant fabrication.</li>
            <li>
              Confirmer les choix de matériaux/finis avant de lancer la
              production.
            </li>
            <li>Planifier une marge pour imprévus, surtout en rénovation.</li>
          </ul>
        </section>

        <section aria-labelledby="erreurs">
          <h2 id="erreurs">Erreurs de séquencement à éviter</h2>
          <ul>
            <li>
              Commander ou fabriquer avant que le plan soit vraiment final.
            </li>
            <li>
              Modifier la plomberie/électricité après l’installation des
              armoires.
            </li>
            <li>
              Installer avant que les murs/planchers soient prêts (selon la
              portée).
            </li>
            <li>Sous-estimer l’étape d’ajustements et de finition.</li>
          </ul>
          <p>
            <a href="/guides/erreurs-renovation-cuisine/">
              Voir les erreurs fréquentes
            </a>
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — étapes d’une rénovation de cuisine</h2>
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
            Dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre échéance
            et l’ampleur des travaux (armoires seulement ou rénovation
            complète). On vous propose la prochaine étape la plus simple pour
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
              <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
            </li>
            <li>
              <a href="/espaces/cuisine/">Cuisine sur mesure</a>
            </li>
            <li>
              <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
            </li>
            <li>
              <a href="/guides/erreurs-renovation-cuisine/">
                Erreurs fréquentes
              </a>
            </li>
            <li>
              <a href="/contact/">Demander une soumission</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
