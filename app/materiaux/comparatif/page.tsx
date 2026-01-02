import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Comparatif des matériaux",
  description:
    "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif. Choisir selon l’usage, l’humidité, la stabilité et la durabilité.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/comparatif/",
  },
};

export default function Comparatif() {
  return (
    <main id="contenu">
      <header>
        <h1>Comparatif des matériaux — faire le bon choix selon l’usage</h1>
        <p>
          Il n’existe pas de “meilleur matériau” universel. Le bon choix dépend
          de l’usage (cuisine ou salle de bain), de l’humidité, de la durabilité
          visée et du type de finition recherché. La qualité d’assemblage, la
          protection des chants, la quincaillerie et l’installation comptent
          autant que le matériau.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet</a> {" | "}
          <a href="/materiaux/">Voir tous les matériaux</a>
        </p>
      </header>

      <section aria-labelledby="tableau">
        <h2 id="tableau">Tableau comparatif</h2>
        <p>
          Ce tableau résume les tendances générales. Pour décider correctement,
          il faut ensuite l’appliquer à votre espace, votre usage et vos
          contraintes.
        </p>

        <table>
          <thead>
            <tr>
              <th>Matériau</th>
              <th>Usage recommandé</th>
              <th>Stabilité</th>
              <th>Humidité</th>
              <th>Finition</th>
              <th>Durabilité perçue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contreplaqué</td>
              <td>
                Structures, environnements plus exigeants, projets orientés
                durabilité
              </td>
              <td>Très bonne</td>
              <td>Bonne</td>
              <td>Variable (selon composantes)</td>
              <td>Élevée</td>
            </tr>
            <tr>
              <td>MDF</td>
              <td>Portes et façades, surtout pour finition peinte</td>
              <td>Bonne</td>
              <td>Moyenne (protection essentielle)</td>
              <td>Très uniforme (peinture)</td>
              <td>Moyenne</td>
            </tr>
            <tr>
              <td>Mélamine</td>
              <td>
                Rangements et caissons ciblés, projets où le fini décoratif est
                prioritaire
              </td>
              <td>Moyenne</td>
              <td>Faible à moyenne (chants critiques)</td>
              <td>Très variée (textures, bois, couleurs)</td>
              <td>Variable</td>
            </tr>
            <tr>
              <td>Bois massif</td>
              <td>
                Portes/éléments esthétiques, projets recherchant une texture
                naturelle
              </td>
              <td>Variable (selon essence et conception)</td>
              <td>Moyenne (peut “bouger”)</td>
              <td>Naturelle (grain/variations)</td>
              <td>Élevée (si bien conçu)</td>
            </tr>
          </tbody>
        </table>

        <p>
          <small>
            Note : “Humidité” et “durabilité” dépendent fortement des chants, de
            l’assemblage, de la quincaillerie et de l’installation.
          </small>
        </p>

        <p>
          <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>{" "}
          {" | "}
          <a href="/materiaux/mdf/">MDF</a> {" | "}
          <a href="/materiaux/melamine/">Mélamine</a> {" | "}
          <a href="/materiaux/bois-massif/">Bois massif</a>
        </p>
      </section>

      <section aria-labelledby="par-materiau">
        <h2 id="par-materiau">Résumé par matériau</h2>

        <h3>Contreplaqué</h3>
        <ul>
          <li>
            Très bon choix lorsque la stabilité et la structure sont
            prioritaires.
          </li>
          <li>Souvent pertinent pour viser une durabilité supérieure.</li>
          <li>
            Le rendu final dépend aussi des composantes (portes, quincaillerie,
            finition).
          </li>
        </ul>
        <p>
          <a href="/materiaux/contreplaque/">Voir la page Contreplaqué</a>
        </p>

        <h3>MDF</h3>
        <ul>
          <li>
            Très utilisé pour des portes peintes grâce à sa surface uniforme.
          </li>
          <li>
            Sensible à l’humidité si mal protégé (chants et finition critiques).
          </li>
          <li>
            Pertinent quand l’objectif principal est une finition peinte
            régulière.
          </li>
        </ul>
        <p>
          <a href="/materiaux/mdf/">Voir la page MDF</a>
        </p>

        <h3>Mélamine</h3>
        <ul>
          <li>Large choix de finis décoratifs et entretien simple.</li>
          <li>Point faible : les chants (impacts et infiltration).</li>
          <li>
            Peut être très correcte si utilisée de façon ciblée et bien
            exécutée.
          </li>
        </ul>
        <p>
          <a href="/materiaux/melamine/">Voir la page Mélamine</a>
        </p>

        <h3>Bois massif</h3>
        <ul>
          <li>
            Texture et variations naturelles (très apprécié en haut de gamme).
          </li>
          <li>Peut “bouger” : conception et assemblage comptent énormément.</li>
          <li>
            Souvent utilisé là où l’esthétique et la matière sont prioritaires.
          </li>
        </ul>
        <p>
          <a href="/materiaux/bois-massif/">Voir la page Bois massif</a>
        </p>
      </section>

      <section aria-labelledby="par-espace">
        <h2 id="par-espace">Comparatif par espace</h2>

        <h3>Cuisine</h3>
        <ul>
          <li>
            Cycles d’ouverture élevés et charges importantes (tiroirs,
            vaisselle, casseroles).
          </li>
          <li>Humidité ponctuelle près de l’évier et du lave-vaisselle.</li>
          <li>
            Un bon compromis dépend du niveau de finition et de durabilité
            recherché.
          </li>
        </ul>
        <p>
          <a href="/espaces/cuisine/">Voir Cuisine sur mesure</a>
        </p>

        <h3>Salle de bain</h3>
        <ul>
          <li>
            Humidité plus constante : ventilation et détails d’exécution
            critiques.
          </li>
          <li>
            Les chants et la protection des zones exposées font une grande
            différence.
          </li>
          <li>
            Selon le projet, certains matériaux sont plus pertinents que
            d’autres.
          </li>
        </ul>
        <p>
          <a href="/espaces/salle-de-bain/">Voir Salle de bain & vanités</a>
        </p>
      </section>

      <section aria-labelledby="ce-que-ca-ne-dit-pas">
        <h2 id="ce-que-ca-ne-dit-pas">Ce que le tableau ne montre pas</h2>
        <p>
          Deux projets peuvent utiliser “le même matériau” et vieillir très
          différemment. Les facteurs suivants sont souvent décisifs :
        </p>
        <ul>
          <li>
            <strong>Chants et protections :</strong> point critique pour
            l’humidité et les impacts.
          </li>
          <li>
            <strong>Assemblage :</strong> rigidité, précision, stabilité.
          </li>
          <li>
            <strong>Quincaillerie :</strong> charnières et coulisses = confort +
            longévité.
          </li>
          <li>
            <strong>Installation :</strong> alignements, ajustements et
            inspection finale.
          </li>
        </ul>
        <p>
          <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a> {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="erreurs">
        <h2 id="erreurs">Erreurs fréquentes à éviter</h2>
        <ul>
          <li>
            Choisir un matériau pour le look seulement, sans considérer l’usage.
          </li>
          <li>Ignorer l’humidité (salle de bain, zones d’eau en cuisine).</li>
          <li>Sous-estimer l’impact des chants et des détails de finition.</li>
          <li>
            Copier une inspiration sans adapter aux contraintes réelles
            (lumière, dimensions).
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — comparatif des matériaux</h2>
        <dl>
          <dt>MDF ou mélamine : lequel choisir?</dt>
          <dd>
            Le MDF est souvent choisi pour une finition peinte uniforme
            (portes). La mélamine vise plutôt un fini décoratif et un coût
            souvent plus maîtrisé. Le bon choix dépend de l’usage et de
            l’environnement.
          </dd>

          <dt>Le contreplaqué est-il toujours préférable?</dt>
          <dd>
            Pas “toujours”, mais il est souvent pertinent quand la stabilité et
            la durabilité structurelle sont prioritaires. Le projet reste un
            ensemble (portes, quincaillerie, installation).
          </dd>

          <dt>Le bois massif partout, est-ce une bonne idée?</dt>
          <dd>
            Pas nécessairement. Le bois massif a des variations naturelles et
            peut bouger. Il est souvent utilisé là où la matière et le rendu
            sont prioritaires, avec une conception adaptée.
          </dd>

          <dt>Peut-on combiner plusieurs matériaux?</dt>
          <dd>
            Oui, et c’est souvent la meilleure approche : utiliser chaque
            matériau là où il est le plus pertinent (structure, portes, zones
            exposées, etc.).
          </dd>
        </dl>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace (cuisine/salle de bain), votre secteur
          (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un
          choix cohérent (matériaux + quincaillerie + installation) pour un
          résultat durable.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
  );
}
