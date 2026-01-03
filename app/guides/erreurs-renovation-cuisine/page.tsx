import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Erreurs fréquentes en rénovation de cuisine",
  description:
    "Guide : erreurs fréquentes en rénovation de cuisine (matériaux, ergonomie, coordination, installation, échéancier) et comment les éviter avant de commencer le chantier.",
  alternates: {
    canonical: "https://dilamco.com/guides/erreurs-renovation-cuisine/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/guides/erreurs-renovation-cuisine/",
    title: "Erreurs fréquentes en rénovation de cuisine | Dilamco",
    description:
      "Guide : erreurs fréquentes en rénovation de cuisine (matériaux, ergonomie, coordination, installation, échéancier) et comment les éviter avant de commencer le chantier.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Guide : Erreurs fréquentes en rénovation de cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erreurs fréquentes en rénovation de cuisine | Dilamco",
    description:
      "Guide : erreurs fréquentes en rénovation de cuisine et comment les éviter.",
    images: ["/opengraph-image"],
  },
};

export default function ErreursRenovationCuisine() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
    {
      name: "Erreurs fréquentes en rénovation de cuisine",
      url: SITE.url + "/guides/erreurs-renovation-cuisine/",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      q: "Quelle est l'erreur la plus coûteuse?",
      a: "Les changements tardifs. Une modification en cours de chantier peut forcer des reprises (plomberie, électricité, murs, comptoir) et créer des délais.",
    },
    {
      q: "Faut-il tout décider avant de démarrer?",
      a: "Les décisions structurantes oui : plan, contraintes techniques, électroménagers, matériaux et séquence des travaux. Plus vous décidez en amont, moins vous payez en stress et en reprises.",
    },
    {
      q: "Clé en main ou coordination personnelle?",
      a: "Si plusieurs corps de métier sont impliqués et que vous voulez réduire les imprévus, une approche clé en main peut être plus simple. Sinon, vous devrez gérer la coordination et les zones grises.",
    },
    {
      q: "Pourquoi l'installation est-elle aussi importante?",
      a: 'Parce qu\'elle conditionne les alignements, les ajustements et la finition. C\'est souvent ce qui fait la différence entre "correct" et "haut de gamme".',
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Les erreurs fréquentes en rénovation de cuisine (et comment les
            éviter)
          </h1>
          <p>
            Une rénovation de cuisine combine plusieurs décisions et plusieurs
            intervenants : plan, matériaux, plomberie, électricité,
            installation, finitions. Beaucoup d’erreurs coûtent cher non
            seulement en argent, mais aussi en délais et en stress. Ce guide
            vous aide à repérer les pièges les plus courants et à les éviter
            avant le chantier.
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
              <a href="#planification">Sous-estimer la planification</a>
            </li>
            <li>
              <a href="#materiaux">
                Choisir les matériaux pour le look seulement
              </a>
            </li>
            <li>
              <a href="#ergonomie">Négliger l’ergonomie et la circulation</a>
            </li>
            <li>
              <a href="#technique">
                Sous-estimer plomberie / électricité / ventilation
              </a>
            </li>
            <li>
              <a href="#coordination">
                Manque de coordination et responsabilités floues
              </a>
            </li>
            <li>
              <a href="#installation">
                Sous-estimer l’installation (et les ajustements)
              </a>
            </li>
            <li>
              <a href="#quincaillerie">Choisir une quincaillerie inadéquate</a>
            </li>
            <li>
              <a href="#echeancier">Échéancier irréaliste</a>
            </li>
            <li>
              <a href="#prix">Comparer uniquement sur le prix</a>
            </li>
            <li>
              <a href="#checklist">Checklist avant de démarrer</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ol>
        </nav>

        <section aria-labelledby="planification">
          <h2 id="planification">1) Sous-estimer la planification</h2>
          <p>
            La cause la plus fréquente des dépassements et des délais : des
            décisions prises “pendant” le chantier. Une modification tardive
            peut déclencher des effets en chaîne (plomberie, électricité, gypse,
            comptoir, installation).
          </p>
          <ul>
            <li>Plan incomplet ou non validé avant de démarrer.</li>
            <li>
              Choix de finis tardifs (portes, poignées, robinetterie,
              éclairage).
            </li>
            <li>
              Électroménagers non confirmés (dimensions, sorties, dégagements).
            </li>
          </ul>
          <p>
            Solution : cadrer le plan et les choix en amont via le{" "}
            <a href="/services/design/">service de design</a>.
          </p>
        </section>

        <section aria-labelledby="materiaux">
          <h2 id="materiaux">
            2) Choisir les matériaux pour le look seulement
          </h2>
          <p>
            Un matériau peut être beau et pourtant mal adapté à l’usage
            (humidité, impacts, entretien). Le point critique est souvent la
            protection des chants et la cohérence du système (matériau +
            quincaillerie + installation).
          </p>
          <ul>
            <li>Ignorer l’humidité près de l’évier et du lave-vaisselle.</li>
            <li>Choisir un matériau fragile sur des zones très sollicitées.</li>
            <li>Sous-estimer l’impact des chants et de la finition.</li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">
              Voir le comparatif des matériaux
            </a>{" "}
            {" | "}
            <a href="/materiaux/mdf/">MDF</a> {" | "}
            <a href="/materiaux/melamine/">Mélamine</a> {" | "}
            <a href="/materiaux/contreplaque/">Contreplaqué</a>
          </p>
        </section>

        <section aria-labelledby="ergonomie">
          <h2 id="ergonomie">3) Négliger l’ergonomie et la circulation</h2>
          <p>
            Une cuisine peut être superbe et pourtant inconfortable : îlot trop
            grand, dégagements trop serrés, portes qui se frappent, zones de
            travail mal placées.
          </p>
          <ul>
            <li>Îlot dimensionné “pour la photo”, pas pour la circulation.</li>
            <li>Ouvrir un tiroir bloque un passage ou un électroménager.</li>
            <li>
              Rangement non adapté aux habitudes (vaisselle, casseroles,
              déchets).
            </li>
          </ul>
          <p>
            Référence : <a href="/espaces/cuisine/">Cuisine sur mesure</a>.
          </p>
        </section>

        <section aria-labelledby="technique">
          <h2 id="technique">
            4) Sous-estimer plomberie / électricité / ventilation
          </h2>
          <p>
            Les contraintes techniques sont souvent la source des surprises :
            sorties électriques mal placées, plomberie à déplacer, ventilation
            insuffisante, éclairage à revoir.
          </p>
          <ul>
            <li>Prises et circuits non adaptés aux électroménagers.</li>
            <li>Plomberie non alignée avec le plan (évier, lave-vaisselle).</li>
            <li>
              Hotte et ventilation sous-estimées (bruit, efficacité, conduits).
            </li>
          </ul>
          <p>
            Dans un projet plus large, une approche clé en main peut réduire les
            imprévus :{" "}
            <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>.
          </p>
        </section>

        <section aria-labelledby="coordination">
          <h2 id="coordination">
            5) Manque de coordination et responsabilités floues
          </h2>
          <p>
            Quand plusieurs intervenants sont impliqués, les problèmes viennent
            souvent des zones grises : qui coordonne, qui valide, qui est
            responsable si quelque chose ne fit pas?
          </p>
          <ul>
            <li>
              Calendrier qui glisse parce que les étapes ne sont pas séquencées.
            </li>
            <li>
              Reprises (gypse, peinture, plancher) à cause d’un changement de
              dernière minute.
            </li>
            <li>
              Responsabilités fragmentées : chacun fait sa partie, personne ne
              porte le résultat final.
            </li>
          </ul>
          <p>
            À lire :{" "}
            <a href="/comparatifs/cuisiniste-vs-entrepreneur-general/">
              Cuisiniste vs entrepreneur général
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="installation">
          <h2 id="installation">
            6) Sous-estimer l’installation (et les ajustements)
          </h2>
          <p>
            Même une excellente fabrication peut donner un résultat moyen si
            l’installation est approximative : alignements, niveaux,
            ajustements, finitions et inspection finale.
          </p>
          <ul>
            <li>Portes et tiroirs désalignés, jeux irréguliers.</li>
            <li>Finitions bâclées autour des murs et des caissons.</li>
            <li>Peu ou pas d’ajustements après la pose.</li>
          </ul>
          <p>
            <a href="/services/installation/">Voir l’installation</a>
          </p>
        </section>

        <section aria-labelledby="quincaillerie">
          <h2 id="quincaillerie">7) Choisir une quincaillerie inadéquate</h2>
          <p>
            La quincaillerie influence le confort et la longévité : charnières
            qui gardent leurs réglages, coulisses stables en charge, fermeture
            contrôlée.
          </p>
          <ul>
            <li>Tiroirs qui frottent, prennent du jeu, ou “accrochent”.</li>
            <li>Portes qui se désalignent, réglages instables.</li>
            <li>Usure prématurée sur les zones les plus utilisées.</li>
          </ul>
          <p>
            <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a>
          </p>
        </section>

        <section aria-labelledby="echeancier">
          <h2 id="echeancier">8) Échéancier irréaliste</h2>
          <p>
            Les délais s’allongent quand les dépendances entre étapes ne sont
            pas respectées (démolition, plomberie/électricité, murs, plancher,
            peinture, comptoir, installation, finitions). Prévoir une marge
            réduit le stress et les décisions précipitées.
          </p>
          <ul>
            <li>Planifier l’ordre des étapes (et les temps de séchage).</li>
            <li>
              Confirmer la disponibilité des matériaux et des intervenants.
            </li>
            <li>Éviter les changements tardifs qui cassent le calendrier.</li>
          </ul>
        </section>

        <section aria-labelledby="prix">
          <h2 id="prix">9) Comparer uniquement sur le prix</h2>
          <p>
            Deux soumissions peuvent être incomparables : l’une inclut
            coordination, ajustements et finition; l’autre non. Les “coûts
            cachés” (reprises, délais, gestion) apparaissent souvent après coup.
          </p>
          <ul>
            <li>Comparer la portée : qui fait quoi, et jusqu’où?</li>
            <li>
              Comparer l’installation : ajustements inclus? inspection finale?
            </li>
            <li>Comparer la coordination : responsabilités claires?</li>
          </ul>
          <p>
            Référence :{" "}
            <a href="/comparatifs/cuisiniste-vs-entrepreneur-general/">
              Cuisiniste vs entrepreneur général
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="checklist">
          <h2 id="checklist">10) Checklist avant de démarrer</h2>
          <p>Avant de lancer le chantier, assurez-vous d’avoir :</p>
          <ul>
            <li>Un plan validé (dimensions, électroménagers, dégagements).</li>
            <li>
              Les matériaux choisis selon l’usage (humidité, entretien,
              durabilité).
            </li>
            <li>
              Des responsabilités claires (coordination, décisions, validation).
            </li>
            <li>Un échéancier réaliste et séquencé.</li>
            <li>
              Une installation prévue (ajustements et inspection finale inclus).
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — erreurs en rénovation de cuisine</h2>
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
            Si vous voulez réduire les risques et cadrer votre rénovation de
            cuisine, dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre
            échéance et l’ampleur des travaux. On vous propose la prochaine
            étape la plus simple pour avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>

        <section aria-labelledby="liens">
          <h2 id="liens">Liens utiles</h2>
          <ul>
            <li>
              <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
            </li>
            <li>
              <a href="/services/installation/">Installation</a>
            </li>
            <li>
              <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>
            </li>
            <li>
              <a href="/espaces/cuisine/">Cuisine sur mesure</a>
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
