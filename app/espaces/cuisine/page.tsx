import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Cuisine sur mesure | Dilamco",
  description:
    "Cuisine sur mesure haut de gamme : design, fabrication et installation. Armoires, îlots et rangement optimisé, avec option rénovation de cuisine clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/cuisine/",
  },
};

export default function Cuisine() {
  const faqItems = [
    {
      q: "Cuisine sur mesure vs semi-custom : quelle différence?",
      a: "Le sur mesure est conçu pour votre espace exact (dimensions, contraintes, ergonomie). Le semi-custom part de modules prédéfinis avec des variations. Le choix dépend du niveau d'adaptation et de finition recherché.",
    },
    {
      q: "Qu'est-ce qui influence le plus la durabilité d'une cuisine?",
      a: "La durabilité dépend du matériau, mais aussi de l'assemblage, des chants, de la quincaillerie et de l'installation. L'usage (charges, humidité, entretien) compte autant que le look.",
    },
    {
      q: "Est-ce possible en condo ou dans un espace difficile?",
      a: "Oui. Le sur mesure est particulièrement pertinent lorsque l'espace impose des contraintes (murs irréguliers, accès, plomberie, intégration électroménagers).",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: "Cuisine sur mesure",
          description:
            "Cuisine sur mesure haut de gamme : design, fabrication et installation. Armoires, îlots et rangement optimisé, avec option rénovation de cuisine clé en main.",
          url: SITE.url + "/espaces/cuisine/",
          serviceType: "Cuisine sur mesure",
        })}
      />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>Cuisine sur mesure — design, fabrication et installation</h1>
          <p>
            Une cuisine sur mesure est conçue pour votre espace réel et votre
            usage quotidien : circulation, zones de travail, rangement, accès
            aux coins, et finition. Dilamco réalise des cuisines sur mesure haut
            de gamme avec option de rénovation clé en main selon le projet —
            principalement à Montréal, Laval et sur la Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/projets/cuisine/">Voir des projets de cuisines</a>
          </p>
        </header>

        <section aria-labelledby="pour-qui">
          <h2 id="pour-qui">À qui s’adresse une cuisine sur mesure?</h2>
          <ul>
            <li>
              Vous voulez <strong>optimiser chaque centimètre</strong> (condo,
              murs irréguliers, contraintes d’accès).
            </li>
            <li>
              Vous recherchez un <strong>résultat durable</strong> et un rendu
              cohérent (matériaux, quincaillerie, finition).
            </li>
            <li>
              Vous avez des contraintes à intégrer :{" "}
              <strong>plomberie, électroménagers, îlot</strong>, rangement
              spécifique.
            </li>
          </ul>
          <p>
            Si vous cherchez une solution standardisée ou temporaire, le sur
            mesure n’est probablement pas l’option la plus pertinente.
            L’objectif ici est la durabilité et la cohérence du résultat final.
          </p>
        </section>

        <section aria-labelledby="ce-qui-est-inclus">
          <h2 id="ce-qui-est-inclus">
            Ce que comprend une cuisine sur mesure Dilamco
          </h2>
          <ul>
            <li>
              <strong>Design & planification :</strong> besoins, ergonomie,
              plan, choix de matériaux.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> armoires, modules, îlot
              et rangement adaptés.
            </li>
            <li>
              <strong>Installation précise :</strong> alignements, ajustements,
              finition et inspection finale.
            </li>
            <li>
              <strong>Option clé en main :</strong> coordination des travaux
              connexes lorsque le projet inclut une rénovation.
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
                <a href="/services/renovation/cuisine/">
                  Rénovation de cuisine
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section aria-labelledby="fonctionnalite">
          <h2 id="fonctionnalite">Fonctionnalité & ergonomie</h2>
          <p>
            Une belle cuisine doit aussi être simple à vivre. Nous concevons
            autour de l’usage : zones de préparation, accès au rangement,
            circulation et intégration des électroménagers.
          </p>
          <ul>
            <li>
              <strong>Circulation :</strong> dégagements et zones de travail
              cohérentes.
            </li>
            <li>
              <strong>Rangement intelligent :</strong> tiroirs, coins, hauteurs
              adaptées, organisation.
            </li>
            <li>
              <strong>Durabilité :</strong> choix adaptés aux cycles
              d’ouverture, aux charges et à l’entretien.
            </li>
          </ul>
          <p>
            <a href="/materiaux/">Voir les matériaux</a> {" | "}
            <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a>
          </p>
        </section>

        <section aria-labelledby="materiaux">
          <h2 id="materiaux">Matériaux & fabrication</h2>
          <p>
            Le rendu haut de gamme est une somme de décisions : structure,
            chants, quincaillerie, assemblage et installation. Le bon matériau
            dépend de l’usage et des contraintes du projet.
          </p>
          <ul>
            <li>
              <strong>Structure & stabilité :</strong> choix orientés durabilité
              (ex. contreplaqué selon le contexte).
            </li>
            <li>
              <strong>Portes & finis :</strong> MDF, bois massif, finis adaptés
              au style et à l’entretien.
            </li>
            <li>
              <strong>Tiroirs & quincaillerie :</strong> confort au quotidien,
              fiabilité, cycles d’ouverture répétés.
            </li>
          </ul>
          <p>
            <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
            {" | "}
            <a href="/materiaux/mdf/">MDF</a> {" | "}
            <a href="/materiaux/melamine/">Mélamine</a> {" | "}
            <a href="/materiaux/bois-massif/">Bois massif</a>
          </p>
        </section>

        <section aria-labelledby="renovation">
          <h2 id="renovation">Rénovation de cuisine (option clé en main)</h2>
          <p>
            Si votre projet implique plus que l’installation d’armoires
            (plomberie, électricité, plancher, dosseret, etc.), une approche clé
            en main peut réduire les imprévus et mieux cadrer le calendrier.
          </p>
          <p>
            <a href="/services/renovation/cuisine/">
              Voir la rénovation de cuisine
            </a>
          </p>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets de cuisines</h2>
          <p>
            Consultez nos réalisations pour voir le style, le niveau de finition
            et des configurations possibles (îlots, rangement, intégration
            électroménagers).
          </p>
          <ul>
            <li>
              <a href="/projets/cuisine/">Voir tous les projets de cuisines</a>
            </li>
            <li>
              <a href="/projets/">Voir tous les projets</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — cuisine sur mesure</h2>
          <dl>
            <dt>Cuisine sur mesure vs semi-custom : quelle différence?</dt>
            <dd>
              Le sur mesure est conçu pour votre espace exact (dimensions,
              contraintes, ergonomie). Le semi-custom part de modules prédéfinis
              avec des variations. Le choix dépend du niveau d’adaptation et de
              finition recherché.
            </dd>

            <dt>
              Qu’est-ce qui influence le plus la durabilité d’une cuisine?
            </dt>
            <dd>
              La durabilité dépend du matériau, mais aussi de l’assemblage, des
              chants, de la quincaillerie et de l’installation. L’usage
              (charges, humidité, entretien) compte autant que le look.
            </dd>

            <dt>Est-ce possible en condo ou dans un espace difficile?</dt>
            <dd>
              Oui. Le sur mesure est particulièrement pertinent lorsque l’espace
              impose des contraintes (murs irréguliers, accès, plomberie,
              intégration électroménagers).
            </dd>

            <dt>Quels sont les délais typiques?</dt>
            <dd>
              Les délais varient selon la complexité et la disponibilité.
              L’échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à
              préciser lors de la soumission.
            </dd>
          </dl>
        </section>

        <section aria-labelledby="liens">
          <h2 id="liens">Liens utiles</h2>
          <ul>
            <li>
              <a href="/services/">Services</a>
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
          <h2 id="cta">Parlez-nous de votre projet de cuisine</h2>
          <p>
            Dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre échéance
            et vos besoins (îlot, rangement, style, contraintes). On vous
            propose la prochaine étape la plus simple pour avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
