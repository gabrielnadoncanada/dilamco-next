import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = {
  title: "Comparatifs",
  description:
    "Comparatifs pour aider à choisir : sur mesure vs IKEA, sur mesure vs Home Depot, cuisiniste vs entrepreneur général. Décisions orientées durabilité, exécution et coûts cachés.",
  alternates: {
    canonical: "https://dilamco.com/comparatifs/",
  },
};

export default function Comparatifs() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
      <header>
        <h1>Comparatifs — faire le bon choix avant d’investir</h1>
        <p>
          Ces comparatifs sont conçus pour vous aider à décider, pas pour faire
          du marketing. Un projet réussi dépend autant du choix des matériaux
          que de l’exécution (installation, ajustements) et de la gestion des
          risques (coordination, coûts cachés). Nos projets sont réalisés
          principalement à Montréal, Laval et sur la Rive-Sud.
        </p>
        <p>
          <a href="/contact/">Parler de votre projet</a> {" | "}
          <a href="/projets/">Voir nos réalisations</a>
        </p>
      </header>

      <section aria-labelledby="liste">
        <h2 id="liste">Comparatifs disponibles</h2>
        <p>Choisissez le comparatif le plus proche de votre situation.</p>

        <ul>
          <li>
            <a href="/comparatifs/cuisine-sur-mesure-vs-ikea/">
              Cuisine sur mesure vs IKEA
            </a>
            <p>
              Utile si vous hésitez entre une solution standardisée et une
              cuisine adaptée à votre espace.
            </p>
            <ul>
              <li>Personnalisation réelle vs modules standard</li>
              <li>
                Durabilité et matériaux (structure, chants, quincaillerie)
              </li>
              <li>Coûts cachés : ajustements, installation, retouches</li>
            </ul>
            <p>
              <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
              <a href="/services/installation/">Installation</a> {" | "}
              <a href="/contact/">Soumission</a>
            </p>
          </li>

          <li>
            <a href="/comparatifs/cuisine-sur-mesure-vs-home-depot/">
              Cuisine sur mesure vs Home Depot
            </a>
            <p>
              Utile si vous comparez une cuisine “prête à installer” à un projet
              sur mesure avec un rendu haut de gamme.
            </p>
            <ul>
              <li>Finition et cohérence visuelle</li>
              <li>Adaptation à l’espace (coins, murs, contraintes)</li>
              <li>Qualité d’installation et longévité</li>
            </ul>
            <p>
              <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
              <a href="/services/renovation/cuisine/">
                Rénovation de cuisine
              </a>{" "}
              {" | "}
              <a href="/contact/">Soumission</a>
            </p>
          </li>

          <li>
            <a href="/comparatifs/cuisiniste-vs-entrepreneur-general/">
              Cuisiniste vs entrepreneur général
            </a>
            <p>
              Utile si vous voulez comprendre qui porte la responsabilité du
              résultat final dans un projet avec plusieurs intervenants.
            </p>
            <ul>
              <li>Responsabilité unique vs responsabilités fragmentées</li>
              <li>Coordination du chantier et calendrier</li>
              <li>Gestion des imprévus et qualité finale</li>
            </ul>
            <p>
              <a href="/services/renovation/">Rénovation clé en main</a> {" | "}
              <a href="/services/design/">Design</a> {" | "}
              <a href="/contact/">Soumission</a>
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="framework">
        <h2 id="framework">Comment comparer efficacement</h2>
        <p>
          Avant de décider, comparez avec des critères stables (pas seulement le
          look).
        </p>
        <ul>
          <li>
            <strong>Durabilité :</strong> structure, chants, quincaillerie,
            résistance à l’usage.
          </li>
          <li>
            <strong>Personnalisation :</strong> adaptation réelle à l’espace
            (ergonomie, rangement, accès aux coins).
          </li>
          <li>
            <strong>Installation & finition :</strong> alignements, ajustements,
            retouches.
          </li>
          <li>
            <strong>Risque & coûts cachés :</strong> coordination, imprévus,
            délais, reprises.
          </li>
        </ul>
        <p>
          <a href="/materiaux/">Voir les matériaux</a> {" | "}
          <a href="/services/installation/">Voir l’installation</a>
        </p>
      </section>

      <section aria-labelledby="situations">
        <h2 id="situations">Choisir selon votre situation</h2>
        <ul>
          <li>
            <strong>Vous voulez un résultat durable et cohérent :</strong>{" "}
            privilégiez le sur mesure adapté à l’espace.
            <p>
              <a href="/espaces/cuisine/">Cuisine sur mesure</a>
            </p>
          </li>
          <li>
            <strong>Vous voulez minimiser la gestion de chantier :</strong> une
            approche clé en main peut réduire les imprévus.
            <p>
              <a href="/services/renovation/">Rénovation clé en main</a>
            </p>
          </li>
          <li>
            <strong>Vous avez besoin d’orientation :</strong> commencez par
            cadrer les besoins et le plan.
            <p>
              <a href="/services/design/">Service de design</a>
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          Dites-nous votre espace (cuisine/salle de bain), votre secteur
          (Montréal/Laval/Rive-Sud) et votre échéance. On vous propose la
          prochaine étape la plus simple pour avancer.
        </p>
        <p>
          <a href="/contact/">Demander une soumission</a>
        </p>
      </section>
    </main>
    </>
  );
}
