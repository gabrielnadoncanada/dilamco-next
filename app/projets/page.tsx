import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial. Réalisations à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/projets/",
  },
};

export default function Projets() {
  return (
    <main id="contenu">
      <header>
        <h1>Projets sur mesure — cuisines, salles de bain et rénovations</h1>
        <p>
          Découvrez des projets réels livrés par Dilamco. Chaque réalisation est
          conçue sur mesure selon l’espace, l’usage et les contraintes du
          client. Nous réalisons des projets principalement à Montréal, Laval et
          sur la Rive-Sud.
        </p>
        <p>
          <a href="/espaces/">Voir les espaces</a> {" | "}
          <a href="/contact/">Parler de votre projet</a>
        </p>
      </header>

      <section aria-labelledby="categories">
        <h2 id="categories">Projets par catégorie</h2>
        <p>
          Filtrez les projets par type d’espace pour voir des configurations
          similaires à votre besoin.
        </p>

        <ul>
          <li>
            <a href="/projets/cuisine/">Cuisines sur mesure</a>
            <p>
              Projets de cuisines sur mesure, avec ou sans rénovation complète,
              réalisés dans des contextes variés (condos, maisons, plex).
            </p>
          </li>

          <li>
            <a href="/projets/salle-de-bain/">Salles de bain & vanités</a>
            <p>
              Vanités et rangements adaptés à l’humidité, avec attention
              particulière aux matériaux et à la finition.
            </p>
          </li>

          <li>
            <a href="/projets/walk-in/">Walk-in & rangement</a>
            <p>
              Projets d’organisation et de rangement sur mesure pour optimiser
              l’espace disponible.
            </p>
          </li>

          <li>
            <a href="/projets/salle-de-lavage/">Salles de lavage</a>
            <p>
              Aménagements pratiques et durables pour buanderies et espaces
              techniques.
            </p>
          </li>

          <li>
            <a href="/projets/commercial/">Commercial</a>
            <p>
              Mobilier et rangement sur mesure pour environnements commerciaux
              et professionnels.
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="vedette">
        <h2 id="vedette">Projets récents</h2>
        <p>
          Voici quelques exemples de projets récents. Chaque projet dispose de
          sa propre page avec le contexte, les matériaux utilisés et les
          services inclus.
        </p>

        <ul>
          <li>
            <a href="/projets/cuisine/cuisine-sur-mesure-montreal/">
              Cuisine sur mesure — Montréal
            </a>
          </li>
          <li>
            <a href="/projets/salle-de-bain/vanite-sur-mesure-laval/">
              Vanité sur mesure — Laval
            </a>
          </li>
          <li>
            <a href="/projets/cuisine/cuisine-sur-mesure-rive-sud/">
              Cuisine sur mesure — Rive-Sud
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Notre approche projet</h2>
        <ol>
          <li>
            <strong>Analyse & design :</strong> compréhension des besoins et
            contraintes de l’espace.
          </li>
          <li>
            <strong>Fabrication sur mesure :</strong> production adaptée à la
            configuration réelle.
          </li>
          <li>
            <strong>Coordination (si applicable) :</strong> gestion des travaux
            connexes lors d’une rénovation complète.
          </li>
          <li>
            <strong>Installation & ajustements :</strong> finition, alignements
            et inspection finale.
          </li>
        </ol>
        <p>
          <a href="/processus/">Voir le processus détaillé</a>
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Vous avez un projet similaire?</h2>
        <p>
          Que ce soit une cuisine, une salle de bain ou un espace de rangement,
          parlez-nous de votre projet. Nous vous guiderons vers une solution
          cohérente avec vos besoins et votre espace.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
  );
}
