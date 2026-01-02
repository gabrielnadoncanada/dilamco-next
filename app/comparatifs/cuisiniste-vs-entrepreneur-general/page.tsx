import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuisiniste vs entrepreneur général | Dilamco",
  description:
    "Cuisiniste ou entrepreneur général pour votre cuisine? Comparatif clair : responsabilités, rénovation, coordination, qualité d’installation et risques. Trouvez la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical:
      "https://dilamco.com/comparatifs/cuisiniste-vs-entrepreneur-general/",
  },
};

export default function CuisinisteVsEntrepreneur() {
  return (
    <main id="contenu">
      <header>
        <h1>
          Cuisiniste ou entrepreneur général : qui choisir pour votre projet de
          cuisine?
        </h1>
        <p>
          Beaucoup de projets de cuisine dérapent non pas à cause des armoires,
          mais à cause d’un problème de responsabilités : qui gère le chantier,
          qui coordonne les intervenants, et qui répond du résultat final? Le
          bon choix dépend surtout de la nature de votre projet : simple
          remplacement d’armoires, ou rénovation complète (plomberie,
          électricité, plancher, etc.).
        </p>
      </header>

      <section aria-labelledby="roles">
        <h2 id="roles">Comprendre les rôles</h2>

        <h3>Le cuisiniste</h3>
        <ul>
          <li>
            <strong>Spécialité :</strong> design de cuisine, ergonomie, choix de
            matériaux et configuration des armoires.
          </li>
          <li>
            <strong>Forces :</strong> plan, optimisation du rangement, cohérence
            esthétique.
          </li>
          <li>
            <strong>Limites fréquentes :</strong> la rénovation
            (plomberie/électricité/plancher) est souvent externalisée et la
            coordination peut retomber sur le client ou des partenaires.
          </li>
        </ul>

        <h3>L’entrepreneur général</h3>
        <ul>
          <li>
            <strong>Spécialité :</strong> gestion de chantier et coordination
            des corps de métier.
          </li>
          <li>
            <strong>Forces :</strong> structure de projet, calendrier, gestion
            des imprévus, conformité du chantier.
          </li>
          <li>
            <strong>Limites fréquentes :</strong> les armoires sont souvent
            sous-traitées, et le niveau de finition/ergonomie peut varier selon
            les partenaires.
          </li>
        </ul>
      </section>

      <section aria-labelledby="tableau">
        <h2 id="tableau">Comparatif rapide</h2>
        <table>
          <thead>
            <tr>
              <th>Critère</th>
              <th>Cuisiniste</th>
              <th>Entrepreneur général</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Design de cuisine</td>
              <td>Très spécialisé</td>
              <td>Variable</td>
            </tr>
            <tr>
              <td>Armoires / sur mesure</td>
              <td>Souvent via fournisseur</td>
              <td>Souvent sous-traitées</td>
            </tr>
            <tr>
              <td>Rénovation complète</td>
              <td>Souvent externalisée</td>
              <td>Oui (cœur de métier)</td>
            </tr>
            <tr>
              <td>Coordination des intervenants</td>
              <td>Variable</td>
              <td>Centralisée</td>
            </tr>
            <tr>
              <td>Responsabilité du résultat</td>
              <td>Parfois partagée</td>
              <td>Plus globale</td>
            </tr>
            <tr>
              <td>Détails de finition</td>
              <td>Souvent forts</td>
              <td>Variables selon partenaires</td>
            </tr>
            <tr>
              <td>Gestion des imprévus chantier</td>
              <td>Limitée</td>
              <td>Forte</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="responsabilite">
        <h2 id="responsabilite">
          Le vrai enjeu : la responsabilité et la coordination
        </h2>
        <p>
          Les “zones grises” arrivent quand plusieurs parties se partagent le
          projet : qui ajuste si les murs ne sont pas d’équerre? Qui corrige si
          le plan doit être adapté sur place? Qui assume un retard si un corps
          de métier décale l’échéancier? Plus votre projet est complexe, plus la
          coordination devient un facteur déterminant.
        </p>
      </section>

      <section aria-labelledby="scenarios">
        <h2 id="scenarios">3 scénarios concrets pour décider</h2>

        <h3>1) Remplacement d’armoires sans rénovation majeure</h3>
        <p>
          Si la plomberie/électricité ne bouge pas et que les surfaces
          (murs/plancher) sont relativement stables, un cuisiniste peut suffire,
          surtout si vous visez principalement le design et l’ergonomie des
          armoires.
        </p>

        <h3>2) Rénovation complète de cuisine</h3>
        <p>
          Si le projet touche la plomberie, l’électricité, le plancher, les
          murs, l’éclairage ou la structure, un entrepreneur général devient
          souvent nécessaire pour cadrer le chantier, la conformité et la
          coordination.
        </p>

        <h3>3) Cuisine sur mesure + rénovation (le cas le plus fréquent)</h3>
        <p>
          Quand vous voulez une cuisine sur mesure avec une rénovation, le
          risque principal est la fragmentation : design d’un côté, chantier de
          l’autre. Une approche intégrée peut réduire les frictions et améliorer
          la cohérence entre le plan, l’exécution et la finition.
        </p>
      </section>

      <section aria-labelledby="approche-dilamco">
        <h2 id="approche-dilamco">
          L’approche Dilamco : sur mesure, avec option clé en main
        </h2>
        <p>
          Selon le projet, Dilamco peut intervenir comme spécialiste du sur
          mesure (design, fabrication et installation) et, lorsque requis,
          offrir une option clé en main pour simplifier la coordination.
          L’objectif est de clarifier la responsabilité et de livrer un résultat
          cohérent, du plan à la finition.
        </p>
        <p>
          <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
          <a href="/services/renovation/cuisine/">Rénovation de cuisine</a>{" "}
          {" | "}
          <a href="/services/renovation/">Rénovation clé en main</a>
        </p>
      </section>

      <section aria-labelledby="cout-risques">
        <h2 id="cout-risques">Coût, risques et tranquillité d’esprit</h2>
        <p>
          Sans entrer dans des chiffres, le point important est de comparer à
          périmètre égal : ce qui est inclus, qui coordonne, qui assume les
          ajustements sur place, et le niveau de finition attendu. Un projet
          bien cadré réduit les retouches, les délais et les incohérences.
        </p>
      </section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Voir des projets de cuisines</h2>
        <p>
          Consultez nos réalisations pour voir le style, le niveau de finition
          et des exemples de configurations.
        </p>
        <p>
          <a href="/projets/cuisine/">Voir les projets de cuisines</a>
        </p>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre ville (Montréal/Laval/Rive-Sud), si vous rénovez
          (oui/non) et ce que vous voulez changer
          (plomberie/électricité/plancher). On revient vers vous avec les
          prochaines étapes.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/services/renovation/">Solution Dilamco</a>
        </p>
      </section>
    </main>
  );
}
