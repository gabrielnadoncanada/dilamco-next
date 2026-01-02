import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Rénovation de cuisine sur la Rive-Sud | Dilamco",
  description:
    "Rénovation de cuisine sur la Rive-Sud : planification, coordination des travaux, installation et finition. Option clé en main avec un seul responsable selon le projet.",
  alternates: {
    canonical: "https://dilamco.com/rive-sud/renovation-cuisine/",
  },
};

export default function RiveSudRenovationCuisine() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Rénovation de cuisine sur la Rive-Sud",
          description:
            "Planification, coordination des travaux, installation et finition pour rénovations de cuisine sur la Rive-Sud, avec option clé en main selon le projet.",
          url: SITE.url + "/rive-sud/renovation-cuisine/",
          serviceType: "Rénovation de cuisine",
          areaServed: ["Rive-Sud"],
        })}
      />

      <main id="contenu">
        <header>
          <h1>Rénovation de cuisine sur la Rive-Sud</h1>
          <p>
            Rénover une cuisine, ce n’est pas seulement remplacer des armoires.
            C’est coordonner des décisions et des travaux (plomberie,
            électricité, plancher, murs, éclairage) pour obtenir un résultat
            cohérent. Sur la Rive-Sud, Dilamco peut prendre en charge la
            rénovation de cuisine avec une approche structurée — incluant la
            conception, l’installation d’armoires sur mesure et, lorsque requis,
            une option clé en main avec un seul responsable.
          </p>
        </header>

        <section aria-labelledby="quand">
          <h2 id="quand">Quand une rénovation de cuisine est nécessaire</h2>
          <ul>
            <li>
              Vous changez la disposition (évier, lave-vaisselle,
              électroménagers, îlot).
            </li>
            <li>
              Vous modifiez la plomberie et/ou l’électricité (prises, éclairage,
              hotte).
            </li>
            <li>Vous refaites plancher, murs, dosseret ou plafond.</li>
            <li>
              Vous voulez corriger des contraintes (murs/planchers irréguliers,
              manque de rangement).
            </li>
          </ul>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce qui est généralement inclus</h2>
          <ul>
            <li>
              <strong>Planification et design :</strong> besoins, contraintes,
              plan et sélection de matériaux.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> armoires adaptées à
              l’espace et à l’usage.
            </li>
            <li>
              <strong>Coordination des travaux :</strong> séquence des étapes et
              gestion des intervenants lorsque requis.
            </li>
            <li>
              <strong>Installation et finition :</strong> ajustements sur place,
              alignements et inspection finale.
            </li>
          </ul>

          <p>
            Pages utiles :{" "}
            <a href="/services/renovation/cuisine/">
              rénovation de cuisine (service)
            </a>
            , <a href="/services/installation/">installation</a>,{" "}
            <a href="/services/design/">design</a>.
          </p>
        </section>

        <section aria-labelledby="cle-en-main">
          <h2 id="cle-en-main">Option clé en main : responsabilités claires</h2>
          <p>
            Sur un chantier, les retards et les problèmes viennent souvent des
            “zones grises” : qui coordonne, qui ajuste, qui corrige. Une option
            clé en main vise à clarifier le périmètre et à réduire la complexité
            pour vous — particulièrement utile si la rénovation touche plusieurs
            corps de métier.
          </p>
          <p>
            <a href="/services/renovation/">Voir la rénovation clé en main</a>{" "}
            {" | "}
            <a href="/comparatifs/cuisiniste-vs-entrepreneur-general/">
              Cuisiniste vs entrepreneur général
            </a>
          </p>
        </section>

        <section aria-labelledby="surmesure">
          <h2 id="surmesure">
            Armoires sur mesure : intégration et durabilité
          </h2>
          <p>
            Le sur mesure permet d’optimiser le rangement, d’intégrer les
            électroménagers proprement et d’adapter les dimensions à la réalité
            de votre espace. Le résultat dépend autant du design que de
            l’installation et des ajustements sur place.
          </p>
          <p>
            <a href="/espaces/cuisine/">Cuisine sur mesure (espace)</a> {" | "}
            <a href="/materiaux/">Matériaux</a> {" | "}
            <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>
          </p>
        </section>

        <section aria-labelledby="preuves">
          <h2 id="preuves">Voir des réalisations comparables</h2>
          <p>
            Consultez nos réalisations pour voir des cuisines livrées sur
            différents types de projets (configurations, styles, niveaux de
            finition).
          </p>
          <p>
            <a href="/projets/cuisine/">Voir les projets de cuisines</a>
          </p>
        </section>

        <section aria-labelledby="local">
          <h2 id="local">Zones desservies</h2>
          <p>
            Nous réalisons des projets principalement à Montréal, Laval et sur
            la Rive-Sud.
          </p>
          <ul>
            <li>
              <a href="/montreal/renovation-cuisine/">
                Rénovation de cuisine à Montréal
              </a>
            </li>
            <li>
              <a href="/laval/renovation-cuisine/">
                Rénovation de cuisine à Laval
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Dites-nous votre ville sur la Rive-Sud, ce que vous voulez changer
            (disposition, plomberie, électricité, plancher) et votre échéance.
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
