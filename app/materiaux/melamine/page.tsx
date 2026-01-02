import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Mélamine | Dilamco",
  description:
    "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure. Comprendre quand la mélamine est pertinente, ses précautions (chants, humidité) et les alternatives.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/melamine/",
  },
};

export default function Melamine() {
  const faqItems = [
    {
      q: "La mélamine est-elle un matériau bas de gamme?",
      a: "Pas forcément. Elle peut être pertinente selon le projet. La durabilité dépend surtout de l'usage, de la qualité des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "La mélamine gonfle-t-elle?",
      a: "Elle peut se dégrader si l'humidité s'infiltre, surtout lorsque les chants sont endommagés. D'où l'importance des protections et d'une bonne exécution.",
    },
    {
      q: "Mélamine ou MDF : lequel choisir?",
      a: "Le MDF est souvent choisi pour des portes peintes (surface très uniforme). La mélamine est plutôt choisie pour son fini décoratif et un coût souvent plus maîtrisé. Le bon choix dépend du style, de l'usage et de l'environnement.",
    },
    {
      q: "Est-ce recommandé en salle de bain?",
      a: "Ça dépend du contexte (ventilation, usage, protections). Dans certains projets, une autre solution sera préférable pour réduire les risques à long terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
      <header>
        <h1>Mélamine — usages, limites et alternatives en sur mesure</h1>
        <p>
          La mélamine est une solution populaire pour des armoires et rangements
          grâce à sa variété de finis et à un coût souvent plus maîtrisé. Ce
          n’est pas un matériau universel : sa durabilité dépend beaucoup de
          l’usage, de la protection des chants et de la qualité d’installation.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a> {" | "}
          <a href="/materiaux/comparatif/">Voir le comparatif des matériaux</a>
        </p>
      </header>

      <section aria-labelledby="cest-quoi">
        <h2 id="cest-quoi">C’est quoi la mélamine?</h2>
        <p>
          En pratique, la “mélamine” désigne un panneau recouvert d’un
          revêtement décoratif. Le rendu (couleur, texture, imitation bois) est
          très varié. La performance finale dépend autant du panneau que de la
          finition des chants et de l’exécution.
        </p>
      </section>

      <section aria-labelledby="avantages">
        <h2 id="avantages">Avantages (quand c’est pertinent)</h2>
        <ul>
          <li>
            <strong>Variété de finis :</strong> options modernes, textures,
            imitations bois, couleurs.
          </li>
          <li>
            <strong>Entretien simple :</strong> surface facile à nettoyer au
            quotidien.
          </li>
          <li>
            <strong>Coût maîtrisé :</strong> intéressant pour certains projets
            ou certaines zones.
          </li>
          <li>
            <strong>Surface stable :</strong> fini uniforme, sans peinture à
            entretenir.
          </li>
        </ul>
      </section>

      <section aria-labelledby="limites">
        <h2 id="limites">Limites et précautions</h2>
        <p>
          La mélamine peut très bien performer, mais elle est plus sensible à
          certains facteurs. Une exécution moyenne (chants abîmés, infiltration)
          vieillit mal.
        </p>
        <ul>
          <li>
            <strong>Chants :</strong> point faible principal. Si un chant est
            endommagé, l’humidité peut s’infiltrer et dégrader le panneau.
          </li>
          <li>
            <strong>Impacts :</strong> les coups sur les arêtes peuvent marquer
            ou ébrécher la surface.
          </li>
          <li>
            <strong>Humidité :</strong> plus délicat près des zones d’eau
            (évier, lave-vaisselle, salle de bain) si la protection est
            insuffisante.
          </li>
          <li>
            <strong>Réparations :</strong> plus difficiles à rendre invisibles
            qu’une surface peinte.
          </li>
        </ul>
      </section>

      <section aria-labelledby="cuisine-vs-sdb">
        <h2 id="cuisine-vs-sdb">Mélamine en cuisine vs en salle de bain</h2>

        <h3>Mélamine en cuisine</h3>
        <ul>
          <li>
            Peut être pertinente pour certains caissons et rangements, selon
            l’usage et le niveau de finition recherché.
          </li>
          <li>
            Les zones proches de l’eau exigent une attention particulière
            (chants, protections, installation).
          </li>
        </ul>
        <p>
          <a href="/espaces/cuisine/">Voir la page Cuisine sur mesure</a>
        </p>

        <h3>Mélamine en salle de bain</h3>
        <ul>
          <li>
            Le contexte est plus exigeant (humidité). La ventilation et les
            détails d’exécution comptent énormément.
          </li>
          <li>
            Selon le projet, il peut être préférable de limiter la mélamine ou
            de la combiner avec d’autres matériaux pour maximiser la durabilité.
          </li>
        </ul>
        <p>
          <a href="/espaces/salle-de-bain/">
            Voir la page Salle de bain & vanités
          </a>
        </p>
      </section>

      <section aria-labelledby="comparaisons">
        <h2 id="comparaisons">Mélamine vs MDF vs contreplaqué</h2>
        <p>
          La mélamine est souvent choisie pour le fini et le coût; le MDF pour
          une finition peinte uniforme; le contreplaqué pour la stabilité et
          certaines applications plus exigeantes. Le bon choix dépend de
          l’usage, de l’humidité et de la durabilité visée.
        </p>
        <p>
          <a href="/materiaux/comparatif/">Voir le comparatif complet</a>{" "}
          {" | "}
          <a href="/materiaux/mdf/">MDF</a> {" | "}
          <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>
        </p>
      </section>

      <section aria-labelledby="comment-on-lutilise">
        <h2 id="comment-on-lutilise">Comment nous utilisons la mélamine</h2>
        <p>
          Notre approche : utiliser la mélamine de façon ciblée lorsque c’est
          pertinent, et privilégier d’autres matériaux lorsque l’usage
          (humidité, impacts, cycles d’ouverture) exige plus de robustesse.
          L’objectif est un résultat durable une fois installé, pas un choix
          “par défaut”.
        </p>
        <p>
          <a href="/materiaux/">Voir tous les matériaux</a> {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">FAQ — mélamine</h2>
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
          solution cohérente avec votre usage et votre niveau de finition
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
