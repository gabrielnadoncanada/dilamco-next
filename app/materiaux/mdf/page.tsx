import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "MDF | Dilamco",
  description:
    "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure. Comprendre quand le MDF est pertinent (portes peintes) et quand privilégier d’autres matériaux.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/mdf/",
  },
};

export default function MDF() {
  const faqItems = [
    {
      q: "Le MDF est-il un matériau \"bas de gamme\"?",
      a: "Pas nécessairement. Le MDF peut être un excellent choix pour certaines applications (ex. portes peintes) si l'exécution est soignée et si l'usage est bien cadré.",
    },
    {
      q: "Le MDF gonfle-t-il avec l'humidité?",
      a: "Il peut réagir à l'eau si la protection est insuffisante, surtout aux chants. La finition et l'installation jouent un rôle important.",
    },
    {
      q: "MDF ou mélamine : lequel choisir?",
      a: "Le MDF est souvent choisi pour la finition (peinture, surface uniforme). La mélamine vise plutôt un compromis économique avec différents finis. Le \"bon\" choix dépend de votre usage, de l'espace et du niveau de durabilité recherché.",
    },
    {
      q: "Le MDF est-il recommandé en salle de bain?",
      a: "Ça peut être possible selon la ventilation, l'usage et la protection des chants. Pour certains projets, une autre solution sera préférable pour réduire les risques à long terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>MDF — quand et pourquoi l’utiliser en sur mesure</h1>
        <p>
          Le MDF (panneau de fibres à densité moyenne) est souvent utilisé en
          aménagement sur mesure, notamment pour obtenir une surface très
          uniforme (idéal pour des portes peintes). Ce n’est pas un matériau
          universel : le contexte (humidité, usage, finition, protection des
          chants) détermine s’il est pertinent.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/materiaux/comparatif/">Voir le comparatif des matériaux</a>
        </p>
      </header>

      <section aria-labelledby="cest-quoi">
        <h2 id="cest-quoi">C’est quoi le MDF?</h2>
        <p>
          Le MDF est composé de fibres de bois compressées. Sa densité uniforme
          donne une surface lisse, ce qui le rend intéressant pour certaines
          finitions (ex. peinture) et certaines pièces (portes et façades).
        </p>
      </section>

      <section aria-labelledby="avantages">
        <h2 id="avantages">Avantages du MDF (quand il est pertinent)</h2>
        <ul>
          <li>
            <strong>Surface uniforme :</strong> excellent rendu pour des{" "}
            <strong>portes peintes</strong>.
          </li>
          <li>
            <strong>Finition stable :</strong> pas de grain comme le bois
            massif, aspect régulier.
          </li>
          <li>
            <strong>Bon compromis :</strong> souvent pertinent pour certaines
            façades lorsque le style recherché est moderne et épuré.
          </li>
        </ul>
      </section>

      <section aria-labelledby="limites">
        <h2 id="limites">Limites et précautions</h2>
        <p>
          Le MDF peut très bien performer lorsqu’il est utilisé au bon endroit,
          mais il demande une exécution rigoureuse.
        </p>
        <ul>
          <li>
            <strong>Humidité :</strong> le MDF réagit à l’eau si mal protégé
            (surtout aux chants).
          </li>
          <li>
            <strong>Chants et protections :</strong> la durabilité dépend
            beaucoup de la qualité de finition et de l’entretien.
          </li>
          <li>
            <strong>Usage :</strong> ce n’est pas toujours le meilleur choix
            pour des zones fortement exposées à l’eau ou aux impacts répétés.
          </li>
        </ul>
      </section>

      <section aria-labelledby="cuisine-vs-sdb">
        <h2 id="cuisine-vs-sdb">MDF en cuisine vs en salle de bain</h2>
        <h3>MDF en cuisine</h3>
        <ul>
          <li>
            Souvent pertinent pour des <strong>portes peintes</strong> et des
            façades.
          </li>
          <li>
            La protection des chants et une finition durable restent critiques.
          </li>
          <li>
            Pour la structure et les zones très sollicitées, d’autres matériaux
            peuvent être plus adaptés selon le projet.
          </li>
        </ul>
        <p>
          <a href="/espaces/cuisine/">Voir la page Cuisine sur mesure</a>
        </p>

        <h3>MDF en salle de bain</h3>
        <ul>
          <li>
            Possible si le contexte est favorable (ventilation, protection,
            usage).
          </li>
          <li>
            En milieu humide, les détails d’exécution (chants, joints,
            installation) deviennent déterminants.
          </li>
          <li>
            Selon le projet, des alternatives peuvent être préférables pour
            maximiser la durabilité.
          </li>
        </ul>
        <p>
          <a href="/espaces/salle-de-bain/">
            Voir la page Salle de bain & vanités
          </a>
        </p>
      </section>

      <section aria-labelledby="comparaisons">
        <h2 id="comparaisons">MDF vs mélamine vs contreplaqué</h2>
        <p>
          Chaque matériau répond à une logique différente. Le MDF est souvent
          choisi pour la finition; la mélamine pour un compromis économique; le
          contreplaqué pour la stabilité et certaines applications plus
          exigeantes.
        </p>
        <p>
          <a href="/materiaux/comparatif/">Voir le comparatif complet</a>{" "}
          {" | "}
          <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
          {" | "}
          <a href="/materiaux/melamine/">Mélamine</a>
        </p>
      </section>

      <section aria-labelledby="comment-on-lutilise">
        <h2 id="comment-on-lutilise">Comment nous utilisons le MDF</h2>
        <p>
          Notre approche : utiliser le MDF là où il est pertinent (ex. certaines
          portes et façades), et privilégier d’autres matériaux lorsque l’usage
          (humidité, charges, cycles d’ouverture) exige plus de stabilité ou de
          résistance. L’objectif n’est pas de “choisir un matériau populaire”,
          mais d’obtenir un résultat durable une fois installé.
        </p>
        <p>
          <a href="/materiaux/">Voir tous les matériaux</a> {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — MDF</h2>
        <dl>
          <dt>Le MDF est-il un matériau “bas de gamme”?</dt>
          <dd>
            Pas nécessairement. Le MDF peut être un excellent choix pour
            certaines applications (ex. portes peintes) si l’exécution est
            soignée et si l’usage est bien cadré.
          </dd>

          <dt>Le MDF gonfle-t-il avec l’humidité?</dt>
          <dd>
            Il peut réagir à l’eau si la protection est insuffisante, surtout
            aux chants. La finition et l’installation jouent un rôle important.
          </dd>

          <dt>MDF ou mélamine : lequel choisir?</dt>
          <dd>
            Le MDF est souvent choisi pour la finition (peinture, surface
            uniforme). La mélamine vise plutôt un compromis économique avec
            différents finis. Le “bon” choix dépend de votre usage, de l’espace
            et du niveau de durabilité recherché.
          </dd>

          <dt>Le MDF est-il recommandé en salle de bain?</dt>
          <dd>
            Ça peut être possible selon la ventilation, l’usage et la protection
            des chants. Pour certains projets, une autre solution sera
            préférable pour réduire les risques à long terme.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace (cuisine/salle de bain), votre secteur
          (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande des
          matériaux cohérents avec votre usage et votre niveau de finition
          recherché.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
