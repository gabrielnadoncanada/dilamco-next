import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Pourquoi le contreplaqué",
  description:
    "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d’armoires sur mesure. Comprendre les plis croisés, l’humidité, les usages recommandés et les limites (MDF, mélamine, bois massif).",
  alternates: {
    canonical: "https://dilamco.com/materiaux/contreplaque/",
  },
};

export default function Contreplaque() {
  const faqItems = [
    {
      q: "Le contreplaqué est-il toujours meilleur que le MDF?",
      a: "Pas nécessairement. Le contreplaqué est souvent très pertinent pour la structure et la tenue des vis, tandis que le MDF peut être adapté pour certains finis ou applications. Le choix dépend de l'usage et du contexte.",
    },
    {
      q: "Le contreplaqué est-il adapté à la salle de bain?",
      a: "Ça dépend de l'environnement et des détails de protection (chants, finition, installation). L'objectif est de choisir une solution durable selon l'usage réel.",
    },
    {
      q: "Est-ce plus cher?",
      a: "Souvent, oui. Le coût reflète généralement la qualité structurelle et la durabilité recherchée. L'impact dépend du projet et des composantes concernées.",
    },
    {
      q: "Est-ce visible une fois installé?",
      a: "Généralement non, sauf si certaines tranches sont exposées volontairement au design. Dans tous les cas, le traitement des chants et la finition sont déterminants.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    {
      name: "Pourquoi le contreplaqué",
      url: SITE.url + "/materiaux/contreplaque/",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Contreplaqué — stabilité, durabilité et structure intelligente
          </h1>
          <p>
            Le contreplaqué est un matériau “technique” souvent privilégié en
            sur mesure pour la structure des armoires. Son avantage principal
            vient de sa composition en plis croisés : un comportement plus
            stable et plus prévisible, utile dans des environnements réels
            (variations d’humidité, usage intensif, contraintes de chantier).
          </p>
          <p>
            <a href="/contact/">Parler de votre projet</a> {" | "}
            <a href="/projets/">Voir nos réalisations</a>
          </p>
        </header>

        <section aria-labelledby="definition">
          <h2 id="definition">Qu’est-ce que le contreplaqué?</h2>
          <p>
            Le contreplaqué est constitué de plusieurs couches de bois (plis)
            collées ensemble, avec un sens de fibre alterné d’un pli à l’autre.
            Cette structure “croisée” améliore la stabilité dimensionnelle par
            rapport à certains panneaux, tout en offrant une bonne résistance
            mécanique.
          </p>
          <p>
            Il se distingue du <a href="/materiaux/mdf/">MDF</a> (fibres), de la{" "}
            <a href="/materiaux/melamine/">mélamine</a> (panneau + revêtement)
            et du <a href="/materiaux/bois-massif/">bois massif</a> (pièce
            pleine).
          </p>
        </section>

        <section aria-labelledby="avantages">
          <h2 id="avantages">
            Avantages du contreplaqué (pourquoi on l’utilise)
          </h2>
          <ul>
            <li>
              <strong>Stabilité :</strong> les plis croisés réduisent les
              déformations et rendent le comportement plus prévisible.
            </li>
            <li>
              <strong>Tenue des vis :</strong> bonne résistance au vissage et
              aux fixations, utile pour les caissons et l’installation.
            </li>
            <li>
              <strong>Durabilité :</strong> structure robuste pour des projets à
              long terme et un usage intensif.
            </li>
            <li>
              <strong>Polyvalence :</strong> pertinent pour cuisines, walk-in et
              certains contextes à contraintes.
            </li>
          </ul>
          <p>
            Le contreplaqué se voit rarement une fois le projet terminé… mais il
            influence directement la tenue dans le temps.
          </p>
        </section>

        <section aria-labelledby="comparaison">
          <h2 id="comparaison">Contreplaqué vs autres matériaux</h2>
          <p>
            Le bon matériau dépend de l’espace, du niveau d’entretien attendu et
            du type de composante (structure, portes, tiroirs).
          </p>
          <ul>
            <li>
              <strong>Contreplaqué vs MDF :</strong> souvent plus stable en
              structure et plus rassurant pour la tenue des vis.
            </li>
            <li>
              <strong>Contreplaqué vs mélamine :</strong> la mélamine vise
              surtout praticité/coût; le contreplaqué vise structure/durabilité.
            </li>
            <li>
              <strong>Contreplaqué vs bois massif :</strong> le bois massif est
              apprécié pour l’esthétique, mais le contreplaqué est souvent plus
              cohérent pour la structure.
            </li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">
              Voir le comparatif des matériaux
            </a>
          </p>
        </section>

        <section aria-labelledby="usages">
          <h2 id="usages">Où le contreplaqué est le plus pertinent</h2>
          <p>
            Le contreplaqué est souvent utilisé là où la stabilité et la
            solidité comptent le plus : structures, caissons et composantes
            internes.
          </p>
          <ul>
            <li>
              <strong>Caissons d’armoires :</strong> structure principale,
              stabilité et alignements.
            </li>
            <li>
              <strong>Composantes internes :</strong> tablettes, séparations,
              modules porteurs.
            </li>
            <li>
              <strong>Tiroirs :</strong> selon le design, fonds et éléments
              structurels robustes (ex. contreplaqué de bouleau).
            </li>
            <li>
              <strong>Projets à contraintes :</strong> lorsque la durabilité et
              la tenue dans le temps sont prioritaires.
            </li>
          </ul>
          <p>
            <a href="/services/fabrication/">Voir la fabrication</a> {" | "}
            <a href="/services/installation/">Voir l’installation</a>
          </p>
        </section>

        <section aria-labelledby="humidite">
          <h2 id="humidite">Contreplaqué & humidité</h2>
          <p>
            Le contreplaqué tolère généralement mieux certains contextes que des
            panneaux à fibres, mais il n’est pas “imperméable”. La durabilité
            dépend des détails : protection des chants, qualité d’assemblage,
            finition et installation.
          </p>
          <ul>
            <li>
              <strong>Cuisine :</strong> pertinent pour la structure, surtout si
              la finition et les chants sont soignés.
            </li>
            <li>
              <strong>Salle de bain / buanderie :</strong> faisable selon le
              contexte, avec des choix adaptés et une protection cohérente.
            </li>
          </ul>
          <p>
            <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a>{" "}
            {" | "}
            <a href="/materiaux/">Voir tous les matériaux</a>
          </p>
        </section>

        <section aria-labelledby="limites">
          <h2 id="limites">Limites & points à surveiller</h2>
          <p>
            Tous les contreplaqués ne se valent pas. La qualité dépend du grade,
            de la stabilité, des faces et de la cohérence d’assemblage.
          </p>
          <ul>
            <li>
              <strong>Qualité variable :</strong> le grade influence la
              stabilité, l’apparence et la durabilité.
            </li>
            <li>
              <strong>Coût :</strong> souvent plus élevé que des options
              standard.
            </li>
            <li>
              <strong>Tranches visibles :</strong> si exposées, elles doivent
              être traitées ou intégrées au design.
            </li>
            <li>
              <strong>Exécution :</strong> la performance dépend aussi de la
              fabrication et de l’installation.
            </li>
          </ul>
        </section>

        <section aria-labelledby="pourquoi-dilamco">
          <h2 id="pourquoi-dilamco">
            Pourquoi Dilamco privilégie souvent le contreplaqué
          </h2>
          <p>
            Pour un projet sur mesure haut de gamme, la structure doit rester
            stable et durable. Le contreplaqué contribue à un résultat plus
            cohérent, avec des alignements plus prévisibles et une meilleure
            tenue dans le temps.
          </p>
          <ul>
            <li>
              <strong>Stabilité :</strong> lignes plus constantes et moins de
              variations visibles.
            </li>
            <li>
              <strong>Durabilité :</strong> meilleure résistance à l’usage
              quotidien.
            </li>
            <li>
              <strong>Cohérence :</strong> fabrication et installation plus
              propres lorsqu’on part d’une structure stable.
            </li>
          </ul>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets (structure orientée durabilité)</h2>
          <p>
            Consultez nos réalisations pour voir des projets où la structure et
            la fabrication ont été pensées pour durer, selon l’espace et
            l’usage.
          </p>
          <p>
            <a href="/projets/">Voir les projets</a>
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — contreplaqué</h2>
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
          <h2 id="cta">Choisir la bonne structure pour votre projet</h2>
          <p>
            Dites-nous votre espace (cuisine, salle de bain, walk-in,
            commercial), votre secteur (Montréal/Laval/Rive-Sud) et vos
            priorités (durabilité, entretien, finition). On vous aide à choisir
            une combinaison cohérente.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/materiaux/comparatif/">Comparer les matériaux</a>
          </p>
        </section>
      </main>
    </>
  );
}
