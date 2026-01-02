import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Dilamco",
  description:
    "À propos de Dilamco : cuisines, armoires et vanités sur mesure haut de gamme. Approche clé en main selon le projet, contrôle qualité et exécution soignée à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/a-propos/",
  },
};

export default function APropos() {
  return (
    <main id="contenu">
      <header>
        <h1>À propos de Dilamco</h1>
        <p>
          Dilamco conçoit et réalise des cuisines, armoires et vanités sur
          mesure haut de gamme. Notre objectif est simple : livrer un résultat
          durable, cohérent et bien exécuté — du plan à l’installation — avec
          une approche clé en main lorsque le projet le requiert. Nous réalisons
          des projets principalement à Montréal, Laval et sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/projets/">Voir nos réalisations</a>
        </p>
      </header>

      <section aria-labelledby="mission">
        <h2 id="mission">Notre approche</h2>
        <p>
          Le sur mesure ne se résume pas à des dimensions. C’est une façon de
          concevoir l’espace autour de votre usage : circulation, accès,
          ergonomie, rangement et finition. Nous privilégions des décisions
          cohérentes avec les contraintes réelles (humidité, charges, cycles
          d’ouverture) pour maximiser la durabilité.
        </p>
      </section>

      <section aria-labelledby="differenciation">
        <h2 id="differenciation">Ce qui distingue Dilamco</h2>
        <ul>
          <li>
            <strong>Sur mesure réel :</strong> adapté à votre espace, pas à un
            catalogue standard.
          </li>
          <li>
            <strong>Qualité et durabilité :</strong> choix de matériaux orientés
            usage, quincaillerie fiable et assemblage robuste.
          </li>
          <li>
            <strong>Exécution soignée :</strong> l’installation et les
            ajustements déterminent le rendu final.
          </li>
          <li>
            <strong>Clé en main (si applicable) :</strong> coordination des
            travaux connexes pour réduire les imprévus et livrer un résultat
            cohérent.
          </li>
        </ul>
        <p>
          <a href="/materiaux/">Voir nos matériaux</a> {" | "}
          <a href="/services/">Voir nos services</a>
        </p>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Une démarche cadrée</h2>
        <ol>
          <li>
            <strong>Analyse & design :</strong> comprendre vos besoins et
            contraintes, puis structurer le plan.
          </li>
          <li>
            <strong>Fabrication sur mesure :</strong> production adaptée à la
            configuration réelle.
          </li>
          <li>
            <strong>Coordination (si applicable) :</strong> gestion des étapes
            connexes lors d’une rénovation complète.
          </li>
          <li>
            <strong>Installation & inspection :</strong> ajustements, finition
            et vérification finale.
          </li>
        </ol>
        <p>
          <a href="/processus/">Voir le processus détaillé</a>
        </p>
      </section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Voir des exemples concrets</h2>
        <p>
          La meilleure façon de juger le niveau de finition et les
          configurations possibles est de consulter nos projets.
        </p>
        <p>
          <a href="/projets/">Voir nos projets</a>
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous l’espace concerné, votre secteur (Montréal/Laval/Rive-Sud)
          et votre échéance. On vous propose la prochaine étape la plus simple
          pour avancer.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
  );
}
