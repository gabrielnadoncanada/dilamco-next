import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Couleurs et finis | Dilamco",
  description:
    "Couleurs et finis pour cuisines, vanités et armoires sur mesure : comment choisir selon la lumière, l’usage et les matériaux (MDF, bois massif, mélamine).",
  alternates: {
    canonical: "https://dilamco.com/materiaux/couleurs/",
  },
};

export default function Couleurs() {
  const faqItems = [
    {
      q: "Mat ou satiné : lequel est le plus durable?",
      a: "En général, le satiné est un excellent compromis pour l'entretien, surtout en cuisine. Le mat peut être très beau, mais il est plus exigeant selon l'usage.",
    },
    {
      q: "Les couleurs foncées sont-elles risquées?",
      a: "Pas si l'éclairage est bon et si le fini est adapté. Elles fonctionnent très bien en accent (îlot, garde-manger) ou dans un espace bien éclairé.",
    },
    {
      q: "Peut-on changer la couleur plus tard?",
      a: "Selon les matériaux et le type de fini, c'est parfois possible, mais pas toujours simple. C'est une décision à cadrer au moment du design.",
    },
    {
      q: "Comment éviter que le rendu \"jaunisse\" ou se démode?",
      a: "Privilégier une base intemporelle (neutres, bois) et utiliser les accents de façon plus flexible (poignées, luminaires, accessoires).",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>
          Couleurs & finis — trouver l’équilibre entre style et durabilité
        </h1>
        <p>
          La couleur influence la lumière, la perception de l’espace et
          l’entretien au quotidien. Le fini dépend aussi du matériau (portes
          peintes, bois, mélamine) et de l’usage (cuisine vs salle de bain).
          Cette page vous aide à cadrer vos choix avant de finaliser une
          sélection de finis lors du design.
        </p>
        <p>
          <a href="/services/design/">Parler design et finis</a> {" | "}
          <a href="/contact/">Demander une soumission</a>
        </p>
      </header>

      <section aria-labelledby="methode">
        <h2 id="methode">Comment choisir une couleur (méthode simple)</h2>
        <ul>
          <li>
            <strong>Lumière :</strong> l’exposition et l’éclairage changent la
            perception d’une même couleur.
          </li>
          <li>
            <strong>Volume :</strong> une petite pièce réagit différemment qu’un
            grand espace.
          </li>
          <li>
            <strong>Usage & entretien :</strong> traces, éclaboussures,
            nettoyage, enfants, animaux.
          </li>
          <li>
            <strong>Matériau & fini :</strong> portes peintes, bois, mélamine :
            rendu et réparabilité ne sont pas identiques.
          </li>
        </ul>
        <p>
          Pour structurer tout ça, le plus efficace est de passer par le{" "}
          <a href="/services/design/">service de design</a>.
        </p>
      </section>

      <section aria-labelledby="familles">
        <h2 id="familles">Grandes familles de couleurs</h2>

        <h3>Neutres (blancs, beiges, gris)</h3>
        <ul>
          <li>Intemporels et lumineux, faciles à intégrer.</li>
          <li>Le choix du fini (mat/satiné) influence beaucoup l’entretien.</li>
        </ul>

        <h3>Tons foncés (noir, anthracite, bleus profonds)</h3>
        <ul>
          <li>Impact visuel fort, rendu très “architectural”.</li>
          <li>Demandent une bonne lumière et une finition soignée.</li>
          <li>Peuvent être utilisés en accent (ex. îlot) pour équilibrer.</li>
        </ul>

        <h3>Bois & textures</h3>
        <ul>
          <li>
            Apporte chaleur et matière, souvent très apprécié en haut de gamme.
          </li>
          <li>
            Le veinage et la teinte varient : on vise une cohérence, pas une
            uniformité parfaite.
          </li>
        </ul>
      </section>

      <section aria-labelledby="selon-espace">
        <h2 id="selon-espace">Choisir selon l’espace</h2>

        <h3>Cuisine</h3>
        <ul>
          <li>
            Les contrastes (îlot vs périmètre) structurent l’espace et cachent
            mieux l’usage.
          </li>
          <li>Prioriser la cohérence avec comptoir, dosseret et plancher.</li>
          <li>
            Penser “entretien” : zones près de l’évier, cuisson, poignées.
          </li>
        </ul>
        <p>
          <a href="/espaces/cuisine/">Voir Cuisine sur mesure</a>
        </p>

        <h3>Salle de bain</h3>
        <ul>
          <li>
            Humidité et nettoyage fréquent : le fini et les détails d’exécution
            comptent.
          </li>
          <li>Éviter les choix “fragiles” si la ventilation est limitée.</li>
        </ul>
        <p>
          <a href="/espaces/salle-de-bain/">Voir Salle de bain & vanités</a>
        </p>
      </section>

      <section aria-labelledby="materiau">
        <h2 id="materiau">Couleur et matériau : ce que ça change</h2>
        <ul>
          <li>
            <strong>MDF :</strong> souvent utilisé pour des portes peintes
            (surface très uniforme).
          </li>
          <li>
            <strong>Bois massif :</strong> variations naturelles (teinte et
            grain), rendu chaleureux.
          </li>
          <li>
            <strong>Mélamine :</strong> grande variété de finis décoratifs,
            réparations plus difficiles en cas d’impact.
          </li>
        </ul>
        <p>
          <a href="/materiaux/mdf/">MDF</a> {" | "}
          <a href="/materiaux/bois-massif/">Bois massif</a> {" | "}
          <a href="/materiaux/melamine/">Mélamine</a>
        </p>
      </section>

      <section aria-labelledby="finitions">
        <h2 id="finitions">Finitions & entretien (mat, satiné, brillant)</h2>
        <ul>
          <li>
            <strong>Mat :</strong> look doux et contemporain, peut marquer selon
            l’usage et la qualité du fini.
          </li>
          <li>
            <strong>Satiné :</strong> bon compromis pour l’entretien (souvent
            très pertinent en cuisine).
          </li>
          <li>
            <strong>Brillant :</strong> effet “miroir”, montre davantage les
            imperfections et traces, mais augmente la luminosité.
          </li>
        </ul>
        <p>
          Le ressenti final dépend aussi de la quincaillerie (poignées,
          mécanismes) et de l’installation.
        </p>
        <p>
          <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a> {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="erreurs">
        <h2 id="erreurs">Erreurs fréquentes à éviter</h2>
        <ul>
          <li>
            Choisir une couleur foncée sans tenir compte de la lumière réelle.
          </li>
          <li>
            Multiplier les textures sans fil conducteur (bois + pierre + motifs
            + métal).
          </li>
          <li>
            Copier une photo “inspiration” sans adapter au contexte (dimensions,
            lumière, usage).
          </li>
          <li>
            Ignorer l’entretien au quotidien (traces, éclaboussures, zones de
            contact).
          </li>
        </ul>
      </section>

      <section aria-labelledby="projets">
        <h2 id="projets">Voir des exemples concrets</h2>
        <p>
          La meilleure façon de valider un choix est de le voir dans un projet
          complet (lumière, comptoir, plancher, quincaillerie).
        </p>
        <p>
          <a href="/projets/">Voir nos projets</a>
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — couleurs & finis</h2>
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
          Dites-nous votre espace (cuisine/salle de bain), votre secteur
          (Montréal/Laval/Rive-Sud) et vos préférences de style. On vous aide à
          cadrer une sélection cohérente (couleurs + finis + matériaux).
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
