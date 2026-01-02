import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Vanité sur mesure à Montréal | Dilamco",
  description:
    "Vanité sur mesure à Montréal : design, fabrication et installation haut de gamme. Solutions durables adaptées à l’humidité, avec option rénovation de salle de bain selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/montreal/vanite-sur-mesure/",
  },
};

export default function MontrealVaniteSurMesure() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Vanité sur mesure à Montréal",
          description:
            "Design, fabrication et installation de vanités sur mesure à Montréal, avec option rénovation de salle de bain selon le projet.",
          url: SITE.url + "/montreal/vanite-sur-mesure/",
          serviceType: "Vanité sur mesure",
          areaServed: ["Montréal"],
        })}
      />

      <main id="contenu">
        <header>
          <h1>Vanité sur mesure à Montréal</h1>
          <p>
            Dilamco conçoit et réalise des vanités sur mesure haut de gamme à
            Montréal. L’objectif : une vanité durable, bien pensée pour le
            quotidien, et adaptée à l’humidité d’une salle de bain. Selon le
            projet, nous pouvons offrir une approche complète incluant le
            design, la fabrication, l’installation et la rénovation de salle de
            bain au besoin.
          </p>
        </header>

        <section aria-labelledby="a-qui">
          <h2 id="a-qui">Pour quel type de projet?</h2>
          <ul>
            <li>
              Remplacement d’une vanité existante (améliorer rangement,
              circulation et finition).
            </li>
            <li>
              Salle de bain avec contraintes : murs irréguliers, espaces
              étroits, plomberie à intégrer.
            </li>
            <li>
              Besoin de solutions adaptées : double lavabo, rangement optimisé,
              espace maquillage, lingerie, etc.
            </li>
            <li>
              Projets où la durabilité et la finition sont prioritaires
              (humidité, usage quotidien).
            </li>
          </ul>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce qui est généralement inclus</h2>
          <ul>
            <li>
              <strong>Design et planification :</strong> besoins, contraintes,
              dimensions, et configuration du rangement.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> matériaux choisis pour
              l’usage et l’humidité, avec une structure robuste.
            </li>
            <li>
              <strong>Installation :</strong> ajustements sur place, alignements
              et finition.
            </li>
            <li>
              <strong>Option rénovation :</strong> coordination des travaux
              connexes si vous refaites la salle de bain.
            </li>
          </ul>

          <p>
            Pour aller plus loin :{" "}
            <a href="/services/renovation/salle-de-bain/">
              rénovation de salle de bain
            </a>{" "}
            et <a href="/services/installation/">installation</a>.
          </p>
        </section>

        <section aria-labelledby="humidite">
          <h2 id="humidite">Salle de bain : matériaux et durabilité</h2>
          <p>
            Une vanité subit l’humidité, les variations de température et
            l’usage quotidien. La durabilité dépend de la structure, des
            matériaux, de la quincaillerie et de la qualité d’installation. Le
            sur mesure permet aussi d’optimiser les dégagements et d’intégrer la
            plomberie proprement.
          </p>
          <p>
            <a href="/materiaux/">Voir nos matériaux</a> {" | "}
            <a href="/materiaux/quincaillerie/">Quincaillerie</a>
          </p>
        </section>

        <section aria-labelledby="preuves">
          <h2 id="preuves">Voir des réalisations comparables</h2>
          <p>
            Consultez nos réalisations pour voir des vanités et salles de bain
            livrées sur différents types de projets (configurations, styles,
            niveaux de finition).
          </p>
          <p>
            <a href="/projets/salle-de-bain/">
              Voir les projets de salles de bain
            </a>
          </p>
        </section>

        <section aria-labelledby="liens-cles">
          <h2 id="liens-cles">Pages utiles</h2>
          <ul>
            <li>
              <a href="/espaces/salle-de-bain/">
                Salle de bain & vanités sur mesure (espace)
              </a>
            </li>
            <li>
              <a href="/services/renovation/salle-de-bain/">
                Rénovation de salle de bain
              </a>
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
              <a href="/laval/vanite-sur-mesure/">Vanité sur mesure à Laval</a>
            </li>
            <li>
              <a href="/rive-sud/vanite-sur-mesure/">
                Vanité sur mesure sur la Rive-Sud
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Dites-nous votre secteur à Montréal, la largeur disponible, si vous
            souhaitez un simple remplacement ou une rénovation, et votre
            échéance. On revient vers vous avec les prochaines étapes.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
