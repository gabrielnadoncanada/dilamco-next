import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Rénovation clé en main",
  description:
    "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition. Cuisine, salle de bain, plancher et agrandissement à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/services/renovation/",
  },
};

export default function Renovation() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
      <header>
        <h1>Rénovation clé en main — coordination, exécution et finition</h1>
        <p>
          Une rénovation réussie, ce n’est pas seulement des travaux : c’est une
          question de coordination et de responsabilité. Selon le projet,
          Dilamco peut prendre en charge la planification, la coordination des
          corps de métier et l’installation pour livrer un résultat cohérent —
          du plan à la finition.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/projets/">Voir des projets</a>
        </p>
      </header>

      <section aria-labelledby="definition">
        <h2 id="definition">Qu’est-ce qu’une rénovation clé en main?</h2>
        <p>
          Une rénovation clé en main vise à réduire les zones grises : un
          périmètre clair, une coordination structurée, et un point de contact
          principal. Le but est simple : limiter les retouches, les délais
          inutiles et les incohérences entre le plan, le chantier et
          l’installation.
        </p>
        <ul>
          <li>
            <strong>Planification :</strong> cadrage du projet, séquence des
            travaux, préparation.
          </li>
          <li>
            <strong>Coordination :</strong> organisation des intervenants (ex.
            plomberie, électricité, plancher, finition) lorsque requis.
          </li>
          <li>
            <strong>Exécution :</strong> suivi et ajustements terrain, gestion
            des imprévus.
          </li>
          <li>
            <strong>Installation &amp; finition :</strong> alignements,
            ajustements, inspection finale.
          </li>
        </ul>
      </section>

      <section aria-labelledby="quand">
        <h2 id="quand">Quand une approche clé en main est pertinente</h2>
        <ul>
          <li>Vous modifiez la plomberie et/ou l’électricité.</li>
          <li>
            Vous refaites le plancher, les murs, l’éclairage ou la ventilation.
          </li>
          <li>
            Le projet implique plusieurs intervenants et vous voulez limiter la
            coordination.
          </li>
          <li>
            Vous visez un rendu haut de gamme avec une finition cohérente.
          </li>
        </ul>
      </section>

      <section aria-labelledby="types">
        <h2 id="types">Types de rénovations</h2>
        <p>Choisissez la page la plus proche de votre projet.</p>
        <ul>
          <li>
            <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
            <p>
              Coordination et exécution pour cuisines, avec installation
              d’armoires sur mesure et finition.
            </p>
          </li>
          <li>
            <a href="/services/renovation/salle-de-bain/">
              Rénovation de salle de bain
            </a>
            <p>
              Gestion des enjeux d’humidité, ventilation, étanchéité et
              installation de vanités sur mesure.
            </p>
          </li>
          <li>
            <a href="/services/renovation/plancher/">Rénovation de plancher</a>
            <p>
              Niveaux, transitions et coordination des étapes pour une finition
              cohérente, surtout en cuisine et salle de bain.
            </p>
          </li>
          <li>
            <a href="/services/renovation/agrandissement-de-maison/">
              Agrandissement de maison
            </a>
            <p>
              Planification, coordination et exécution complète pour ajouter de
              l’espace et intégrer l’agrandissement à l’existant.
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="responsabilite">
        <h2 id="responsabilite">Le vrai enjeu : responsabilités claires</h2>
        <p>
          Sur un chantier, les problèmes viennent souvent des zones grises : qui
          ajuste si un mur n’est pas droit? Qui corrige si l’installation ne
          correspond pas au plan? Qui coordonne les retards entre intervenants?
          Une approche clé en main vise à clarifier ces responsabilités et à
          protéger la cohérence du résultat final.
        </p>
        <p>
          <a href="/comparatifs/cuisiniste-vs-entrepreneur-general/">
            Cuisiniste vs entrepreneur général : comprendre la différence
          </a>
        </p>
      </section>

      <section aria-labelledby="surmesure">
        <h2 id="surmesure">Rénovation + sur mesure</h2>
        <p>
          Le sur mesure prend toute sa valeur quand il est aligné avec la
          réalité du chantier : un design pensé pour l’espace, des armoires
          adaptées aux contraintes, et une installation ajustée sur place après
          les travaux.
        </p>
        <p>
          <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
          <a href="/espaces/salle-de-bain/">
            Salle de bain &amp; vanités sur mesure
          </a>
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet de rénovation</h2>
        <p>
          Indiquez votre ville (Montréal/Laval/Rive-Sud), le type de projet
          (cuisine, salle de bain, plancher, agrandissement) et si vous modifiez
          plomberie/électricité/plancher. On revient vers vous avec les
          prochaines étapes.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
