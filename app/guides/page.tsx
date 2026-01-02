import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure. Décisions éclairées, de l’inspiration à la soumission, à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/guides/",
  },
};

export default function Guides() {
  return (
    <main id="contenu">
      <header>
        <h1>Guides & conseils — cuisines et rénovations sur mesure</h1>
        <p>
          Concevoir une cuisine ou planifier une rénovation implique des
          décisions importantes : matériaux, délais, organisation des travaux.
          Ces guides pratiques sont basés sur des projets réels et visent à vous
          aider à clarifier votre projet avant de passer à l’étape de la
          soumission. Nos projets sont réalisés principalement à Montréal, Laval
          et sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet</a>
        </p>
      </header>

      <section aria-labelledby="categories">
        <h2 id="categories">Catégories de guides</h2>
        <ul>
          <li>Choisir son espace (cuisine, salle de bain, rangement)</li>
          <li>Rénovation & planification</li>
          <li>Matériaux & durabilité</li>
          <li>Comparatifs & décisions</li>
        </ul>
      </section>

      <section aria-labelledby="liste-guides">
        <h2 id="liste-guides">Guides disponibles</h2>
        <p>
          Chaque guide répond à une question précise et vous dirige vers les
          pages pertinentes si vous souhaitez aller plus loin.
        </p>

        <ul>
          <li>
            <a href="/guides/comment-choisir-cuisine-sur-mesure/">
              Comment choisir une cuisine sur mesure
            </a>
            <p>
              Critères clés, compromis et erreurs à éviter pour concevoir une
              cuisine adaptée à votre espace et à votre usage.
              <br />
              <a href="/espaces/cuisine/">Voir les cuisines sur mesure</a>
            </p>
          </li>

          <li>
            <a href="/guides/etapes-renovation-cuisine/">
              Étapes d’une rénovation de cuisine
            </a>
            <p>
              Ordre logique des travaux, coordination et délais typiques pour
              éviter les mauvaises surprises.
              <br />
              <a href="/services/renovation/cuisine/">
                Voir la rénovation de cuisine
              </a>
            </p>
          </li>

          <li>
            <a href="/guides/erreurs-renovation-cuisine/">
              Erreurs fréquentes en rénovation de cuisine
            </a>
            <p>
              Les pièges courants (budget, matériaux, planification) et comment
              les éviter.
              <br />
              <a href="/materiaux/comparatif/">
                Voir le comparatif des matériaux
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="utilisation">
        <h2 id="utilisation">Comment utiliser ces guides</h2>
        <p>
          Ces contenus sont conçus pour vous aider à structurer votre réflexion.
          Si vous avez déjà une idée claire de votre projet (espace, échéance,
          secteur), vous pouvez passer directement à la demande de soumission.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>

      <section aria-labelledby="positionnement">
        <h2 id="positionnement">Notre positionnement</h2>
        <p>
          Dilamco se spécialise dans le sur mesure haut de gamme. Ces guides
          s’adressent à des projets conçus pour durer, avec une exécution
          soignée et, lorsque requis, une approche clé en main.
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Que vous soyez au début de votre réflexion ou prêt à avancer,
          parlez-nous de votre projet. Nous vous guiderons vers une solution
          cohérente avec votre espace et vos contraintes.
        </p>
        <p>
          <a href="/contact/">Parler à un conseiller</a>
        </p>
      </section>
    </main>
  );
}
