import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Quincaillerie",
  description:
    "Quincaillerie d’armoires : charnières, coulisses et mécanismes. Comprendre l’impact sur le confort, les réglages et la durabilité en cuisine et salle de bain.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/quincaillerie/",
  },
};

export default function Quincaillerie() {
  const faqItems = [
    {
      q: "Le soft-close est-il vraiment utile?",
      a: "Oui si le système est fiable et bien installé : fermeture plus douce, moins de chocs, et meilleure expérience au quotidien.",
    },
    {
      q: "Est-ce que la quincaillerie influence la durée de vie?",
      a: "Oui. Ce sont les pièces qui bougent et qui s'usent. Une quincaillerie de qualité garde ses réglages, supporte mieux les charges, et vieillit mieux.",
    },
    {
      q: "Peut-on remplacer la quincaillerie plus tard?",
      a: "Parfois, mais ce n'est pas toujours simple. Il vaut mieux choisir un système cohérent dès le départ, surtout pour les tiroirs et les charges élevées.",
    },
    {
      q: "Pourquoi l'installation est-elle aussi importante?",
      a: "Parce que la précision (alignements, ajustements, fixations) affecte directement le fonctionnement. Une bonne quincaillerie mal installée ne donnera pas un bon résultat.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Quincaillerie", url: SITE.url + "/materiaux/quincaillerie/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>Quincaillerie — confort, précision et durabilité au quotidien</h1>
          <p>
            La quincaillerie (charnières, coulisses, mécanismes) est souvent le
            facteur le plus déterminant de l’expérience au quotidien. Ce sont
            les pièces qui bougent, donc celles qui s’usent. Une quincaillerie
            de qualité, bien installée et bien ajustée, améliore la longévité,
            la stabilité et le “feel” haut de gamme.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/materiaux/">Voir tous les matériaux</a>
          </p>
        </header>

        <section aria-labelledby="pourquoi">
          <h2 id="pourquoi">Pourquoi la quincaillerie est critique</h2>
          <ul>
            <li>
              <strong>Usage réel :</strong> ce sont des milliers de cycles
              d’ouverture/fermeture sur la durée de vie d’une cuisine.
            </li>
            <li>
              <strong>Réglages :</strong> une bonne quincaillerie permet des
              ajustements précis (portes alignées, tiroirs stables).
            </li>
            <li>
              <strong>Perception de qualité :</strong> une cuisine peut
              “sembler” haut de gamme ou standard selon la fluidité des tiroirs
              et des portes.
            </li>
          </ul>
        </section>

        <section aria-labelledby="types">
          <h2 id="types">Types de quincaillerie</h2>

          <h3>Charnières</h3>
          <ul>
            <li>
              <strong>Ajustabilité :</strong> alignements et corrections fines
              (vertical, horizontal, profondeur).
            </li>
            <li>
              <strong>Soft-close :</strong> fermeture amortie pour réduire les
              chocs et améliorer le confort.
            </li>
          </ul>

          <h3>Coulisses de tiroirs</h3>
          <ul>
            <li>
              <strong>Extension :</strong> accès complet au contenu (selon le
              système).
            </li>
            <li>
              <strong>Capacité de charge :</strong> important pour casseroles,
              vaisselle et tiroirs très utilisés.
            </li>
            <li>
              <strong>Stabilité :</strong> tiroirs fluides, sans jeu, même en
              charge.
            </li>
          </ul>

          <h3>Mécanismes et accessoires</h3>
          <ul>
            <li>
              Solutions d’angle et rangement spécialisé (selon configuration).
            </li>
            <li>
              Mécanismes escamotables et accessoires pour optimiser l’usage.
            </li>
          </ul>
        </section>

        <section aria-labelledby="qualite">
          <h2 id="qualite">Quincaillerie de qualité : ce que ça change</h2>
          <ul>
            <li>
              <strong>Confort :</strong> ouverture fluide, fermeture contrôlée,
              moins de bruit.
            </li>
            <li>
              <strong>Durabilité :</strong> moins de jeu, moins d’affaissement,
              réglages qui tiennent.
            </li>
            <li>
              <strong>Entretien réduit :</strong> moins d’ajustements à refaire
              avec le temps.
            </li>
          </ul>
        </section>

        <section aria-labelledby="bas-de-gamme">
          <h2 id="bas-de-gamme">Risques d’une quincaillerie bas de gamme</h2>
          <ul>
            <li>Portes qui se désalignent, réglages qui bougent.</li>
            <li>
              Tiroirs qui frottent, qui “accrochent” ou qui prennent du jeu.
            </li>
            <li>Usure prématurée et remplacements plus rapides.</li>
            <li>
              Expérience quotidienne frustrante, même si le design est beau.
            </li>
          </ul>
        </section>

        <section aria-labelledby="cuisine-sdb">
          <h2 id="cuisine-sdb">
            Cuisine vs salle de bain : contraintes différentes
          </h2>

          <h3>Cuisine</h3>
          <ul>
            <li>Cycles d’ouverture très élevés (usage quotidien intensif).</li>
            <li>
              Charges importantes (vaisselle, casseroles, tiroirs profonds).
            </li>
            <li>La stabilité des coulisses devient un point critique.</li>
          </ul>
          <p>
            <a href="/espaces/cuisine/">Voir la page Cuisine sur mesure</a>
          </p>

          <h3>Salle de bain</h3>
          <ul>
            <li>
              Humidité : importance des détails d’exécution et de la cohérence
              des choix.
            </li>
            <li>
              Réglages fins et protection globale (installation et finition).
            </li>
          </ul>
          <p>
            <a href="/espaces/salle-de-bain/">
              Voir la page Salle de bain & vanités
            </a>
          </p>
        </section>

        <section aria-labelledby="materiaux">
          <h2 id="materiaux">Lien entre matériaux et quincaillerie</h2>
          <p>
            Les matériaux et la quincaillerie forment un système : structure,
            chants, assemblage, quincaillerie et installation. Une bonne
            quincaillerie ne compense pas une mauvaise exécution, et un bon
            matériau peut être “ruiné” par une quincaillerie faible.
          </p>
          <p>
            <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
            {" | "}
            <a href="/materiaux/mdf/">MDF</a> {" | "}
            <a href="/materiaux/melamine/">Mélamine</a>
          </p>
        </section>

        <section aria-labelledby="choix">
          <h2 id="choix">Comment nous choisissons la quincaillerie</h2>
          <ul>
            <li>
              <strong>Usage :</strong> fréquence, charges, tiroirs très
              sollicités.
            </li>
            <li>
              <strong>Contexte :</strong> humidité (salle de bain),
              environnement, contraintes.
            </li>
            <li>
              <strong>Réglages :</strong> précision et stabilité des ajustements
              dans le temps.
            </li>
            <li>
              <strong>Installation :</strong> une pose et des ajustements
              soignés sont essentiels.
            </li>
          </ul>
          <p>
            <a href="/services/installation/">Voir l’installation</a> {" | "}
            <a href="/services/design/">Voir le design</a>
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — quincaillerie</h2>
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
            (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande une
            configuration cohérente (matériaux + quincaillerie + installation)
            pour un résultat durable.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
