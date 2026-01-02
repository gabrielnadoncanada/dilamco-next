import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Bois massif",
  description:
    "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure. Comprendre stabilité, humidité, finition et alternatives (MDF, mélamine, contreplaqué) pour faire le bon choix.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/bois-massif/",
  },
};

export default function BoisMassif() {
  const faqItems = [
    {
      q: "Le bois massif est-il toujours meilleur?",
      a: "Non. Il est excellent pour l'esthétique et certaines applications, mais des panneaux techniques peuvent être plus stables et plus adaptés à certaines contraintes.",
    },
    {
      q: "Est-ce recommandé en cuisine?",
      a: "Oui, souvent pour les portes et éléments visibles. Le choix dépend du fini, de l'entretien et de l'environnement (vapeur, chaleur, usage).",
    },
    {
      q: "Comment réagit-il à l'humidité?",
      a: "Le bois peut bouger avec l'humidité. La conception, la finition et l'usage du matériau aux bons endroits sont essentiels pour limiter les effets.",
    },
    {
      q: "Peut-on combiner bois massif et autres matériaux?",
      a: "Oui. C'est souvent la meilleure approche : bois massif pour les éléments visibles, et matériaux plus stables pour certaines structures, selon le projet.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>Bois massif — authenticité, caractère et limites à connaître</h1>
          <p>
            Le bois massif est un matériau noble, apprécié pour son grain, sa
            profondeur visuelle et son toucher. C’est aussi un matériau “vivant”
            : il réagit à l’humidité et à la température. Pour un résultat
            durable, l’important n’est pas seulement “bois massif ou non”, mais{" "}
            <strong>où</strong> et <strong>comment</strong> il est utilisé dans
            un projet sur mesure.
          </p>
          <p>
            <a href="/contact/">Parler de votre projet</a> {" | "}
            <a href="/projets/">Voir nos réalisations</a>
          </p>
        </header>

        <section aria-labelledby="definition">
          <h2 id="definition">Qu’est-ce que le bois massif?</h2>
          <p>
            Le bois massif correspond à une pièce de bois “pleine” (non composée
            de fibres ou de particules). Il se distingue des panneaux techniques
            (MDF, mélamine, contreplaqué) et des solutions comme le placage
            (fine couche de bois sur un support).
          </p>
          <p>
            Visuellement, il présente des variations naturelles : veinage,
            nœuds, teinte et texture. Ces variations font partie du charme du
            matériau.
          </p>
        </section>

        <section aria-labelledby="avantages">
          <h2 id="avantages">Avantages du bois massif</h2>
          <ul>
            <li>
              <strong>Esthétique naturelle :</strong> grain unique, rendu
              chaleureux, profondeur visuelle.
            </li>
            <li>
              <strong>Caractère haut de gamme :</strong> perception premium et
              présence dans l’espace.
            </li>
            <li>
              <strong>Réparabilité :</strong> certaines marques peuvent être
              retouchées ou poncées selon le fini.
            </li>
            <li>
              <strong>Valeur perçue :</strong> matériau reconnu et recherché
              pour des éléments visibles.
            </li>
          </ul>
        </section>

        <section aria-labelledby="limites">
          <h2 id="limites">Limites et contraintes (à connaître)</h2>
          <p>
            Le bois massif peut être excellent, mais il demande une conception
            et une exécution appropriées. Ignorer ses contraintes mène souvent à
            des attentes irréalistes.
          </p>
          <ul>
            <li>
              <strong>Mouvement :</strong> le bois peut bouger avec l’humidité
              et la température (expansion/contraction).
            </li>
            <li>
              <strong>Stabilité :</strong> selon l’usage et les dimensions,
              certains panneaux techniques peuvent être plus stables.
            </li>
            <li>
              <strong>Entretien :</strong> selon le fini, il peut être plus
              sensible aux chocs, à l’eau ou aux produits.
            </li>
            <li>
              <strong>Coût :</strong> généralement plus élevé, surtout pour de
              grandes surfaces ou des essences spécifiques.
            </li>
          </ul>
          <p>
            En pratique, la durabilité vient d’un ensemble : matériau + chants +
            finition + quincaillerie + installation.
          </p>
        </section>

        <section aria-labelledby="ou-pertinent">
          <h2 id="ou-pertinent">Où le bois massif est le plus pertinent</h2>
          <p>
            Le bois massif est souvent le meilleur choix pour les éléments
            visibles où l’esthétique et le toucher comptent, tout en gardant une
            conception adaptée.
          </p>
          <ul>
            <li>
              <strong>Portes et façades :</strong> éléments les plus visibles et
              les plus “premium”.
            </li>
            <li>
              <strong>Détails décoratifs :</strong> moulures, encadrements,
              accents.
            </li>
            <li>
              <strong>Pièces sélectionnées :</strong> là où le matériau apporte
              un vrai gain esthétique.
            </li>
          </ul>
          <p>
            <a href="/services/design/">Voir le service de design</a> {" | "}
            <a href="/services/fabrication/">Voir la fabrication</a>
          </p>
        </section>

        <section aria-labelledby="ou-deconseille">
          <h2 id="ou-deconseille">Où le bois massif est souvent déconseillé</h2>
          <p>
            Le bois massif n’est pas toujours le meilleur choix pour les
            structures ou grandes surfaces qui exigent une stabilité maximale,
            surtout dans certains environnements.
          </p>
          <ul>
            <li>
              <strong>Caissons et structures complètes :</strong> des panneaux
              techniques peuvent offrir plus de stabilité.
            </li>
            <li>
              <strong>Zones très humides :</strong> selon le contexte, il faut
              prioriser stabilité et protection.
            </li>
            <li>
              <strong>Grandes surfaces :</strong> plus le panneau est grand,
              plus le mouvement peut devenir visible.
            </li>
          </ul>
          <p>
            Alternatives fréquentes selon l’usage :{" "}
            <a href="/materiaux/contreplaque/">contreplaqué</a>,{" "}
            <a href="/materiaux/mdf/">MDF</a>,{" "}
            <a href="/materiaux/melamine/">mélamine</a>.
          </p>
        </section>

        <section aria-labelledby="comparaisons">
          <h2 id="comparaisons">Bois massif vs autres matériaux</h2>
          <p>
            Le bon choix dépend de l’espace (cuisine, salle de bain, walk-in),
            du niveau d’entretien attendu et du rendu souhaité.
          </p>
          <ul>
            <li>
              <strong>Bois massif vs MDF :</strong> souvent choisi pour la
              texture et le grain; le MDF peut être pertinent selon le fini.
            </li>
            <li>
              <strong>Bois massif vs mélamine :</strong> la mélamine vise
              surtout praticité et entretien; le bois vise caractère.
            </li>
            <li>
              <strong>Bois massif vs contreplaqué :</strong> le contreplaqué est
              souvent privilégié pour la stabilité des structures.
            </li>
          </ul>
          <p>
            <a href="/materiaux/comparatif/">
              Voir le comparatif des matériaux
            </a>
          </p>
        </section>

        <section aria-labelledby="finition">
          <h2 id="finition">Finition & entretien</h2>
          <p>
            La finition influence directement la durabilité et l’entretien. Le
            choix dépend du rendu recherché et de votre quotidien (nettoyage,
            humidité, usage).
          </p>
          <ul>
            <li>
              <strong>Protection :</strong> plus la protection est élevée, plus
              le matériau résiste à l’usage.
            </li>
            <li>
              <strong>Entretien :</strong> privilégier des habitudes simples et
              des produits adaptés au fini.
            </li>
            <li>
              <strong>Prévention :</strong> éviter l’eau stagnante et les
              nettoyants agressifs.
            </li>
          </ul>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets utilisant le bois massif</h2>
          <p>
            Le bois massif est souvent utilisé sur des éléments visibles
            (portes, façades, accents) pour un rendu chaleureux. Consultez nos
            réalisations pour voir des exemples de finitions et de styles.
          </p>
          <p>
            <a href="/projets/">Voir les projets</a>
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — bois massif</h2>
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
          <h2 id="cta">Choisir le bon matériau pour votre projet</h2>
          <p>
            Dites-nous votre espace (cuisine, salle de bain, walk-in), votre
            secteur (Montréal/Laval/Rive-Sud) et le rendu recherché. On vous
            aide à choisir une combinaison durable et cohérente.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
