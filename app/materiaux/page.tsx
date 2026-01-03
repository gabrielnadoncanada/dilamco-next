import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Matériaux",
  description:
    "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie, couleurs et finis. Choix orientés durabilité à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/materiaux/",
    title: "Matériaux | Dilamco",
    description:
      "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie, couleurs et finis. Choix orientés durabilité à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Matériaux Dilamco — Choix orientés durabilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matériaux | Dilamco",
    description:
      "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Materiaux() {
  const faqItems = [
    {
      q: "Contreplaqué ou MDF : lequel choisir?",
      a: "Ça dépend de l'usage : stabilité et résistance structurelle vs surface uniforme (souvent pour portes peintes). Le bon choix tient compte de l'humidité et de la durabilité visée.",
    },
    {
      q: "La mélamine est-elle un bon choix?",
      a: "Elle peut être pertinente selon le contexte et le budget, mais elle est plus sensible aux impacts et à l'humidité si les chants sont endommagés.",
    },
    {
      q: 'La quincaillerie "soft-close" vaut-elle la peine?',
      a: "Oui si elle est fiable et bien installée : confort au quotidien, moins de stress sur les composants, meilleure perception de qualité.",
    },
    {
      q: "Quels matériaux éviter en salle de bain?",
      a: "Tout ce qui est mal protégé contre l'humidité (chants exposés, mauvaise ventilation, matériaux inadaptés) augmente les risques à moyen terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>Matériaux — durabilité, finition et performance</h1>
          <p>
            Un matériau « bon » dépend de l’usage : humidité (salle de bain),
            charges et cycles d’ouverture (tiroirs), résistance aux impacts,
            stabilité dans le temps. Notre approche : choisir des matériaux
            cohérents avec vos contraintes et livrer une exécution durable —
            principalement à Montréal, Laval et sur la Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
            <a href="/espaces/salle-de-bain/">Salle de bain & vanités</a>
          </p>
        </header>

        <section aria-labelledby="methodologie">
          <h2 id="methodologie">Comment nous choisissons les matériaux</h2>
          <p>
            La performance finale ne dépend pas seulement du matériau, mais
            aussi de l’assemblage, des chants, de la quincaillerie et de
            l’installation. Voici les critères qui guident nos recommandations.
          </p>
          <ul>
            <li>
              <strong>Humidité :</strong> prioritaire en salle de bain
              (ventilation, protection des chants, stabilité).
            </li>
            <li>
              <strong>Charges et usage :</strong> tiroirs, casseroles, vaisselle
              — cycles d’ouverture répétés.
            </li>
            <li>
              <strong>Résistance :</strong> impacts, rayures, nettoyage et
              maintenance au quotidien.
            </li>
            <li>
              <strong>Stabilité :</strong> limiter les déformations dans le
              temps (structure et conception).
            </li>
          </ul>
          <p>
            <a href="/services/design/">Voir le service de design</a> {" | "}
            <a href="/services/installation/">Voir l’installation</a>
          </p>
        </section>

        <section aria-labelledby="pages-materiaux">
          <h2 id="pages-materiaux">Pages matériaux</h2>
          <p>
            Explorez les matériaux et leurs compromis (durabilité, humidité,
            stabilité). Ces pages vous aident à prendre une décision éclairée
            selon votre espace.
          </p>

          <ul>
            <li>
              <a href="/materiaux/contreplaque/">Pourquoi le contreplaqué</a>
              <p>
                Stabilité et résistance : un choix solide pour les structures et
                certains usages exigeants.
              </p>
            </li>

            <li>
              <a href="/materiaux/mdf/">MDF</a>
              <p>
                Surface uniforme, souvent utilisé pour des portes peintes.
                Sensible à l’humidité si mal protégé.
              </p>
            </li>

            <li>
              <a href="/materiaux/melamine/">Mélamine</a>
              <p>
                Option économique avec finis variés. Attention aux impacts et
                aux chants en milieu humide.
              </p>
            </li>

            <li>
              <a href="/materiaux/bois-massif/">Bois massif</a>
              <p>
                Très belle perception haut de gamme. Peut bouger avec l’humidité
                : conception et assemblage comptent.
              </p>
            </li>

            <li>
              <a href="/materiaux/quincaillerie/">Quincaillerie</a>
              <p>
                Charnières et coulisses = confort + durabilité. L’installation
                est aussi déterminante.
              </p>
            </li>

            <li>
              <a href="/materiaux/couleurs/">Couleurs et finis</a>
              <p>
                Choix de finis pour aligner le projet avec votre style (moderne,
                chaleureux, classique, etc.).
              </p>
            </li>

            <li>
              <a href="/materiaux/comparatif/">Comparatif des matériaux</a>
              <p>
                Vue d’ensemble rapide : contreplaqué vs MDF vs mélamine selon
                usage.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="comparatif">
          <h2 id="comparatif">Comparatif rapide (résumé)</h2>
          <p>
            Pour une comparaison complète, consultez la page dédiée :{" "}
            <a href="/materiaux/comparatif/">comparatif des matériaux</a>.
          </p>

          <table>
            <thead>
              <tr>
                <th>Matériau</th>
                <th>Durabilité</th>
                <th>Humidité</th>
                <th>Stabilité</th>
                <th>Usage typique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contreplaqué</td>
                <td>Élevée</td>
                <td>Bonne</td>
                <td>Très bonne</td>
                <td>Structures, environnements exigeants</td>
              </tr>
              <tr>
                <td>MDF</td>
                <td>Moyenne</td>
                <td>Moyenne</td>
                <td>Bonne</td>
                <td>Portes peintes, surfaces uniformes</td>
              </tr>
              <tr>
                <td>Mélamine</td>
                <td>Variable</td>
                <td>Faible à moyenne</td>
                <td>Moyenne</td>
                <td>Applications économiques, finis variés</td>
              </tr>
            </tbody>
          </table>

          <p>
            <small>
              Note : ces catégories sont indicatives. La performance dépend
              aussi de la qualité d’assemblage, des chants, de la quincaillerie
              et de l’installation.
            </small>
          </p>
        </section>

        <section aria-labelledby="par-espace">
          <h2 id="par-espace">Applications par espace</h2>
          <ul>
            <li>
              <strong>Cuisine :</strong> résistance, cycles d’ouverture, coins,
              rangement et finition.
              <p>
                <a href="/espaces/cuisine/">Cuisine sur mesure</a> {" | "}
                <a href="/services/renovation/cuisine/">
                  Rénovation de cuisine
                </a>
              </p>
            </li>
            <li>
              <strong>Salle de bain :</strong> humidité, ventilation, matériaux
              et protection des chants.
              <p>
                <a href="/espaces/salle-de-bain/">Salle de bain & vanités</a>{" "}
                {" | "}
                <a href="/services/renovation/salle-de-bain/">
                  Rénovation salle de bain
                </a>
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="premium">
          <h2 id="premium">Ce qui fait vraiment “haut de gamme”</h2>
          <p>
            Le haut de gamme, c’est une somme de détails : quincaillerie fiable,
            matériaux adaptés à l’usage, assemblage robuste et installation
            précise. Le choix des matériaux est important, mais l’exécution
            l’est tout autant.
          </p>
          <ul>
            <li>
              <strong>Quincaillerie :</strong> confort d’usage et durabilité
              (charnières, coulisses).
            </li>
            <li>
              <strong>Stabilité :</strong> limiter les déformations (structures
              adaptées).
            </li>
            <li>
              <strong>Finition & installation :</strong> alignements,
              ajustements, inspection finale.
            </li>
          </ul>
          <p>
            <a href="/materiaux/quincaillerie/">Voir la quincaillerie</a>{" "}
            {" | "}
            <a href="/services/installation/">Voir l’installation</a>
          </p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ matériaux</h2>
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
            (Montréal/Laval/Rive-Sud) et l’échéance. On vous recommande une
            solution cohérente avec vos contraintes et votre niveau de finition
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
