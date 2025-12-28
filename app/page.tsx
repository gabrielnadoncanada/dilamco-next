import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: { canonical: "https://dilamco.com/" },
};

export default function Home() {
  return (
    <main id="contenu">
      <header>
        <h1>Dilamco — Sur mesure haut de gamme, clé en main</h1>
        <p>
          Cuisines, vanités et rangement sur mesure. Design, fabrication,
          installation et rénovation complète au besoin — principalement à
          Montréal, Laval et sur la Rive-Sud.
        </p>
      </header>

      <section aria-labelledby="hero">
        <h2 id="hero">
          Cuisines, salles de bain et espaces sur mesure, sans casse-tête
        </h2>
        <p>
          Vous voulez un résultat cohérent, durable et bien exécuté. On vous
          accompagne du plan à la finition : design, fabrication sur mesure,
          installation précise, et coordination des travaux connexes lorsque le
          projet le requiert.
        </p>

        <ul>
          <li>
            <strong>Sur mesure réel :</strong> adapté à votre espace (coins,
            accès, circulation, rangement).
          </li>
          <li>
            <strong>Qualité et durabilité :</strong> matériaux et détails de
            fabrication pensés pour durer.
          </li>
          <li>
            <strong>Approche clé en main :</strong> un seul responsable pour
            réduire les imprévus.
          </li>
        </ul>

        <p>
          <a href="/contact/">Obtenir une soumission gratuite</a> {" | "}
          <a href="/projets/">Voir nos réalisations</a>
        </p>
      </section>

      <section aria-labelledby="espaces">
        <h2 id="espaces">Choisissez votre espace</h2>
        <p>
          Chaque espace a ses contraintes. Notre travail : optimiser la
          fonctionnalité, la durabilité et la finition — sans compromis sur le
          look.
        </p>
        <ul>
          <li>
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          </li>
          <li>
            <a href="/espaces/salle-de-bain/">
              Salle de bain & vanités sur mesure
            </a>
          </li>
          <li>
            <a href="/espaces/walk-in/">Walk-in & rangement</a>
          </li>
          <li>
            <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
          </li>
          <li>
            <a href="/espaces/commercial/">Commercial</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="differenciation">
        <h2 id="differenciation">Ce qui distingue Dilamco</h2>
        <p>
          Le haut de gamme, ce n’est pas un mot : c’est une somme de décisions
          (matériaux, assemblage, quincaillerie, installation) et une exécution
          contrôlée.
        </p>

        <ul>
          <li>
            <strong>Design orienté usage :</strong> rangement logique,
            ergonomie, accès aux coins, circulation fluide.
          </li>
          <li>
            <strong>Fabrication robuste :</strong> choix de matériaux adaptés à
            la cuisine et à l’humidité en salle de bain.
          </li>
          <li>
            <strong>Installation soignée :</strong> alignements, ajustements,
            finition — le détail qui change tout.
          </li>
        </ul>

        <p>
          <a href="/materiaux/">Voir nos matériaux</a> {" | "}
          <a href="/services/">Découvrir nos services</a>
        </p>
      </section>

      <section aria-labelledby="local">
        <h2 id="local">Zones desservies</h2>
        <p>
          Nous réalisons des projets principalement à <strong>Montréal</strong>,{" "}
          <strong>Laval</strong> et sur la <strong>Rive-Sud</strong>. Pour les
          projets d’envergure, d’autres secteurs au Québec peuvent être
          considérés.
        </p>

        <ul>
          <li>
            <a href="/montreal/cuisine-sur-mesure/">
              Cuisine sur mesure à Montréal
            </a>{" "}
            {" — "}
            <a href="/montreal/renovation-cuisine/">
              Rénovation de cuisine à Montréal
            </a>{" "}
            {" — "}
            <a href="/montreal/vanite-sur-mesure/">
              Vanité sur mesure à Montréal
            </a>
          </li>
          <li>
            <a href="/laval/cuisine-sur-mesure/">Cuisine sur mesure à Laval</a>{" "}
            {" — "}
            <a href="/laval/renovation-cuisine/">
              Rénovation de cuisine à Laval
            </a>{" "}
            {" — "}
            <a href="/laval/vanite-sur-mesure/">Vanité sur mesure à Laval</a>
          </li>
          <li>
            <a href="/rive-sud/cuisine-sur-mesure/">
              Cuisine sur mesure sur la Rive-Sud
            </a>{" "}
            {" — "}
            <a href="/rive-sud/renovation-cuisine/">
              Rénovation de cuisine sur la Rive-Sud
            </a>{" "}
            {" — "}
            <a href="/rive-sud/vanite-sur-mesure/">
              Vanité sur mesure sur la Rive-Sud
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Une approche simple, une exécution cadrée</h2>
        <ol>
          <li>
            <strong>Analyse & design :</strong> besoins, contraintes, plan et
            choix de matériaux.
          </li>
          <li>
            <strong>Fabrication sur mesure :</strong> production selon votre
            configuration.
          </li>
          <li>
            <strong>Coordination (si applicable) :</strong> travaux connexes
            pour une rénovation complète.
          </li>
          <li>
            <strong>Installation & ajustements :</strong> finition, alignements,
            inspection finale.
          </li>
        </ol>
        <p>
          <a href="/services/renovation/cuisine/">
            Voir la rénovation de cuisine
          </a>{" "}
          {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Projets récents</h2>
        <p>
          La meilleure preuve, c’est un projet livré. Consultez nos réalisations
          pour voir le style, le niveau de finition et les configurations
          possibles.
        </p>
        <ul>
          <li>
            <a href="/projets/cuisine/">Voir les projets de cuisines</a>
          </li>
          <li>
            <a href="/projets/salle-de-bain/">
              Voir les projets de salles de bain
            </a>
          </li>
          <li>
            <a href="/projets/">Voir tous les projets</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace (cuisine, salle de bain, etc.), votre ville
          (Montréal/Laval/Rive-Sud) et votre échéance. On revient vers vous
          rapidement avec les prochaines étapes.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
  );
}
