import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";

export const metadata: Metadata = {
  title: "Salle de lavage sur mesure",
  description:
    "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie. Praticité, durabilité et configuration adaptée à votre espace à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/espaces/salle-de-lavage/",
  },
};

export default function SalleDeLavage() {
  const faqItems = [
    {
      q: "Comment optimiser une petite buanderie?",
      a: "En structurant des zones (lavage, pliage, rangement) et en exploitant la hauteur. Le sur mesure aide à éviter les espaces perdus et à intégrer les contraintes techniques.",
    },
    {
      q: "Tiroirs ou portes pour ranger les produits?",
      a: "Les tiroirs donnent un accès plus simple (surtout en profondeur). Les portes peuvent être utiles pour des items volumineux. Le bon choix dépend de la configuration et de vos habitudes.",
    },
    {
      q: "Quels matériaux tiennent bien avec l'humidité?",
      a: "Le point clé est la stabilité et la protection des chants. La durabilité dépend aussi de l'assemblage, de la quincaillerie et de la qualité d'installation.",
    },
    {
      q: "Est-ce possible dans un placard?",
      a: "Oui. Le sur mesure est particulièrement pertinent dans un placard, car il faut gérer les dégagements, l'ouverture, la circulation et souvent des contraintes techniques.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0–3 mois, 3–6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Salle de lavage", url: SITE.url + "/espaces/salle-de-lavage/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <header>
          <h1>
            Salle de lavage sur mesure — armoires et rangement durable pour
            buanderie
          </h1>
          <p>
            Une buanderie est un espace technique : humidité, plomberie,
            vibration, produits ménagers et usage fréquent. Dilamco conçoit et
            réalise des salles de lavage sur mesure haut de gamme, pensées pour
            être pratiques et durables — principalement à Montréal, Laval et sur
            la Rive-Sud.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a> {" | "}
            <a href="/projets/salle-de-lavage/">
              Voir des projets de salle de lavage
            </a>
          </p>
        </header>

        <section aria-labelledby="pour-qui">
          <h2 id="pour-qui">À qui s’adresse une salle de lavage sur mesure?</h2>
          <ul>
            <li>
              Vous voulez <strong>optimiser un espace restreint</strong> (condo,
              corridor, placard, sous-sol).
            </li>
            <li>
              Vous cherchez un espace{" "}
              <strong>simple à utiliser au quotidien</strong> (pliage, paniers,
              produits, linge).
            </li>
            <li>
              Vous avez des contraintes à intégrer : <strong>plomberie</strong>,
              drains, chauffe-eau, panneaux, ventilation.
            </li>
          </ul>
          <p>
            Si vous cherchez une solution standard sans adaptation, le sur
            mesure est moins pertinent. Le sur mesure est surtout utile quand
            l’espace est technique, atypique ou lorsqu’on veut un rangement
            réellement fonctionnel.
          </p>
        </section>

        <section aria-labelledby="inclus">
          <h2 id="inclus">Ce que comprend une salle de lavage Dilamco</h2>
          <ul>
            <li>
              <strong>Design & planification :</strong> besoins, contraintes,
              circulation et plan d’organisation.
            </li>
            <li>
              <strong>Fabrication sur mesure :</strong> armoires, modules,
              comptoir de pliage et rangement adapté.
            </li>
            <li>
              <strong>Installation précise :</strong> alignements, ajustements,
              finition et inspection finale.
            </li>
          </ul>

          <section aria-labelledby="services">
            <h3 id="services">Services associés</h3>
            <ul>
              <li>
                <a href="/services/design/">Design</a>
              </li>
              <li>
                <a href="/services/fabrication/">Fabrication</a>
              </li>
              <li>
                <a href="/services/installation/">Installation</a>
              </li>
            </ul>
          </section>
        </section>

        <section aria-labelledby="fonctionnalite">
          <h2 id="fonctionnalite">
            Fonctionnalité : organiser les zones (lavage, pliage, rangement)
          </h2>
          <p>
            Une buanderie efficace réduit le désordre. Le sur mesure permet de
            structurer l’espace selon vos habitudes et la réalité des lieux.
          </p>
          <ul>
            <li>
              <strong>Zone lavage :</strong> accès simple à la laveuse/sécheuse,
              circulation et dégagements cohérents.
            </li>
            <li>
              <strong>Zone pliage :</strong> comptoir pratique et hauteur
              confortable.
            </li>
            <li>
              <strong>Produits ménagers :</strong> rangement sécurisé et
              accessible.
            </li>
            <li>
              <strong>Rangement vertical :</strong> armoires hautes et colonnes
              pour maximiser l’espace.
            </li>
            <li>
              <strong>Paniers & linge :</strong> organisation logique pour
              éviter que tout s’accumule.
            </li>
          </ul>
        </section>

        <section aria-labelledby="technique">
          <h2 id="technique">Contraintes techniques & durabilité</h2>
          <p>
            Les problèmes d’une salle de lavage viennent souvent de détails :
            chants exposés à l’eau, surfaces difficiles à nettoyer,
            quincaillerie qui fatigue. Notre approche vise la durabilité dans le
            temps.
          </p>
          <ul>
            <li>
              <strong>Humidité & éclaboussures :</strong> matériaux adaptés et
              protection des chants.
            </li>
            <li>
              <strong>Surfaces faciles à entretenir :</strong> conception pensée
              pour le nettoyage régulier.
            </li>
            <li>
              <strong>Usage répété :</strong> quincaillerie fiable pour
              ouvertures fréquentes (tiroirs/portes).
            </li>
            <li>
              <strong>Conception autour des contraintes :</strong> plomberie,
              drains, ventilation, éléments techniques.
            </li>
          </ul>
          <p>
            <a href="/materiaux/">Voir les matériaux</a> {" | "}
            <a href="/materiaux/comparatif/">Comparatif des matériaux</a>{" "}
            {" | "}
            <a href="/materiaux/quincaillerie/">Quincaillerie</a>
          </p>
        </section>

        <section aria-labelledby="configurations">
          <h2 id="configurations">Configurations possibles</h2>
          <p>
            Le sur mesure s’adapte à la configuration réelle de votre buanderie.
          </p>
          <ul>
            <li>
              <strong>Buanderie en corridor :</strong> rangement vertical et
              comptoir de pliage sans bloquer la circulation.
            </li>
            <li>
              <strong>Buanderie dans un placard :</strong> modules adaptés,
              accès simple, gestion des portes et dégagements.
            </li>
            <li>
              <strong>Évier utilitaire (si applicable) :</strong> rangement
              adapté aux produits et à l’espace humide.
            </li>
            <li>
              <strong>Empilage laveuse/sécheuse :</strong> optimisation de la
              hauteur et du rangement.
            </li>
            <li>
              <strong>Armoires hautes + colonne :</strong> maximiser le
              rangement pour linge, paniers et accessoires.
            </li>
          </ul>
        </section>

        <section aria-labelledby="projets">
          <h2 id="projets">Projets de salles de lavage</h2>
          <p>
            Consultez nos réalisations pour voir des exemples d’organisation, de
            finition et de configurations (corridor, placard, sous-sol, etc.).
          </p>
          <ul>
            <li>
              <a href="/projets/salle-de-lavage/">
                Voir tous les projets de salle de lavage
              </a>
            </li>
            <li>
              <a href="/projets/">Voir tous les projets</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">FAQ — salle de lavage sur mesure</h2>
          <dl>
            {faqItems.map((item: FAQItem) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="liens">
          <h2 id="liens">Liens utiles</h2>
          <ul>
            <li>
              <a href="/projets/salle-de-lavage/">Projets</a>
            </li>
            <li>
              <a href="/materiaux/">Matériaux</a>
            </li>
            <li>
              <a href="/contact/">Demander une soumission</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet de salle de lavage</h2>
          <p>
            Dites-nous votre secteur (Montréal/Laval/Rive-Sud), la configuration
            (corridor/placard/pièce dédiée) et vos besoins (comptoir, rangement,
            paniers, produits). On vous propose la prochaine étape la plus
            simple pour avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
