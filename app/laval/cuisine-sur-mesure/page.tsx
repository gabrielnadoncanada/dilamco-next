import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Cuisine sur mesure à Laval | Dilamco",
  description:
    "Cuisine sur mesure à Laval : design, fabrication et installation haut de gamme. Option rénovation de cuisine clé en main selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/laval/cuisine-sur-mesure/",
  },
};

export default function LavalCuisine() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Cuisine sur mesure à Laval",
          description:
            "Design, fabrication et installation de cuisines sur mesure à Laval, avec option rénovation clé en main selon le projet.",
          url: SITE.url + "/laval/cuisine-sur-mesure/",
          serviceType: "Cuisine sur mesure",
          areaServed: ["Laval"],
        })}
      />

      <main id="contenu">
        <header>
          <h1>Cuisine sur mesure à Laval</h1>
          <p>
            Dilamco conçoit et réalise des cuisines sur mesure haut de gamme à
            Laval. L’objectif : un espace fonctionnel, durable et bien exécuté.
            Selon le projet, nous pouvons offrir une approche complète incluant
            le design, la fabrication, l’installation et la rénovation de
            cuisine clé en main.
          </p>
        </header>

        <section aria-labelledby="a-qui">
          <h2 id="a-qui">Pour quel type de projet?</h2>
          <ul>
            <li>
              Projets résidentiels (maison, condo) où l’ergonomie et le
              rangement sont prioritaires.
            </li>
            <li>
              Espaces avec contraintes : angles, murs/planchers irréguliers,
              hauteurs variables, électroménagers à intégrer.
            </li>
            <li>
              Remplacement d’armoires ou rénovation complète
              (plomberie/électricité/plancher au besoin).
            </li>
            <li>
              Clients recherchant un rendu haut de gamme avec une finition
              stable dans le temps.
            </li>
          </ul>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce qui est généralement inclus</h2>
          <ul>
            <li>
              <strong>Design et planification :</strong> besoins, contraintes,
              configuration et choix de matériaux.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> dimensions adaptées à
              votre espace et à vos usages (rangement, circulation, zones de
              travail).
            </li>
            <li>
              <strong>Installation :</strong> ajustements sur place, alignements
              et finition.
            </li>
            <li>
              <strong>Option clé en main :</strong> coordination des travaux
              connexes lorsque le projet le requiert.
            </li>
          </ul>

          <p>
            Pour comprendre l’approche complète :{" "}
            <a href="/services/renovation/cuisine/">rénovation de cuisine</a> et{" "}
            <a href="/services/installation/">installation</a>.
          </p>
        </section>

        <section aria-labelledby="pourquoi">
          <h2 id="pourquoi">Pourquoi le sur mesure fait une différence</h2>
          <p>
            À Laval, le sur mesure devient particulièrement pertinent lorsque
            vous voulez optimiser le rangement, intégrer les électroménagers
            proprement et obtenir une finition cohérente. Le résultat dépend
            autant du design que de l’installation et des ajustements sur place.
          </p>
          <p>
            <a href="/materiaux/">Voir nos matériaux</a> {" | "}
            <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>
          </p>
        </section>

        <section aria-labelledby="preuves">
          <h2 id="preuves">Voir des réalisations comparables</h2>
          <p>
            Consultez nos réalisations pour voir des cuisines sur mesure livrées
            sur différents types de projets (configurations, styles, niveaux de
            finition).
          </p>
          <p>
            <a href="/projets/cuisine/">Voir les projets de cuisines</a>
          </p>
        </section>

        <section aria-labelledby="liens-cles">
          <h2 id="liens-cles">Pages utiles</h2>
          <ul>
            <li>
              <a href="/espaces/cuisine/">Cuisine sur mesure (espace)</a>
            </li>
            <li>
              <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
            </li>
            <li>
              <a href="/services/design/">Design</a>,{" "}
              <a href="/services/fabrication/">fabrication</a> et{" "}
              <a href="/services/installation/">installation</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="local">
          <h2 id="local">Zones desservies</h2>
          <p>
            Nous réalisons des projets principalement à Montréal, Laval et sur
            la Rive-Sud.
          </p>
          <ul>
            <li>
              <a href="/montreal/cuisine-sur-mesure/">
                Cuisine sur mesure à Montréal
              </a>
            </li>
            <li>
              <a href="/rive-sud/cuisine-sur-mesure/">
                Cuisine sur mesure sur la Rive-Sud
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Dites-nous votre secteur à Laval, l’état actuel de votre cuisine, et
            si le projet implique des travaux (plomberie/électricité/plancher).
            On revient vers vous avec les prochaines étapes.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
