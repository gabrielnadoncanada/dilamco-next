import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { type FeatureImageTextItem } from "@/components/sections/FeatureImageText";

export const metadata = createPageMetadata({
  title: "Salle de lavage sur mesure",
  description:
    "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie. Praticité, durabilité et configuration adaptée à votre espace à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-lavage/",
  ogAlt: "Salle de lavage sur mesure Dilamco",
});

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
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0-3 mois, 3-6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const featureImageTextItems: FeatureImageTextItem[] = [
    {
      ariaLabelledby: "fonctionnalite",
      heading: "Fonctionnalité : organiser les zones (lavage, pliage, rangement)",
      content: (
        <>
          <p>
            Une buanderie efficace réduit le désordre. Le sur mesure permet de
            structurer l'espace selon vos habitudes et la réalité des lieux.
          </p>
          <Checklist
            items={[
              "Zone lavage : accès simple à la laveuse/sécheuse, circulation et dégagements cohérents.",
              "Zone pliage : comptoir pratique et hauteur confortable.",
              "Produits ménagers : rangement sécurisé et accessible.",
              "Rangement vertical : armoires hautes et colonnes pour maximiser l'espace.",
              "Paniers & linge : organisation logique pour éviter que tout s'accumule.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Fonctionnalité d'une salle de lavage sur mesure",
      },
    },
    {
      ariaLabelledby: "technique",
      heading: "Contraintes techniques & durabilité",
      content: (
        <>
          <p>
            Les problèmes d'une salle de lavage viennent souvent de détails :
            chants exposés à l'eau, surfaces difficiles à nettoyer,
            quincaillerie qui fatigue. Notre approche vise la durabilité dans
            le temps.
          </p>
          <Checklist
            items={[
              "Humidité & éclaboussures : matériaux adaptés et protection des chants.",
              "Surfaces faciles à entretenir : conception pensée pour le nettoyage régulier.",
              "Usage répété : quincaillerie fiable pour ouvertures fréquentes (tiroirs/portes).",
              "Conception autour des contraintes : plomberie, drains, ventilation, éléments techniques.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Contraintes techniques & durabilité d'une salle de lavage sur mesure",
      },
      links: [
        {
          text: "Voir les matériaux",
          href: "/materiaux/",
          variant: "outline",
        },
        {
          text: "Comparatif des matériaux",
          href: "/materiaux/comparatif/",
          variant: "outline",
        },
        {
          text: "Quincaillerie",
          href: "/materiaux/quincaillerie/",
          variant: "outline",
        },
      ],
    },
    {
      ariaLabelledby: "configurations",
      heading: "Configurations possibles",
      content: (
        <>
          <p>Le sur mesure s'adapte à la configuration réelle de votre buanderie.</p>
          <Checklist
            items={[
              "Buanderie en corridor : rangement vertical et comptoir de pliage sans bloquer la circulation.",
              "Buanderie dans un placard : modules adaptés, accès simple, gestion des portes et dégagements.",
              "Évier utilitaire (si applicable) : rangement adapté aux produits et à l'espace humide.",
              "Empilage laveuse/sécheuse : optimisation de la hauteur et du rangement.",
              "Armoires hautes + colonne : maximiser le rangement pour linge, paniers et accessoires.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-salles-de-lavage.webp",
        alt: "Configurations possibles d'une salle de lavage sur mesure",
      },
    },
  ];

  return (
    <SpacePageTemplate
      data={{
        breadcrumbs: [
          { name: "Accueil", url: SITE.url + "/" },
          { name: "Espaces", url: SITE.url + "/espaces/" },
          {
            name: "Salle de lavage",
            url: SITE.url + "/espaces/salle-de-lavage/",
          },
        ],
        service: {
          name: "Salle de lavage sur mesure",
          description:
            "Salle de lavage sur mesure : armoires, comptoir et rangement robuste pour buanderie. Praticité et durabilité.",
          url: SITE.url + "/espaces/salle-de-lavage/",
          serviceType: "Salle de lavage sur mesure",
        },
        hero: {
          heading:
            "Salle de lavage sur mesure, armoires et rangement durable pour buanderie",
          description:
            "Une buanderie est un espace technique : humidité, plomberie, vibration, produits ménagers et usage fréquent. Dilamco conçoit et réalise des salles de lavage sur mesure haut de gamme, pensées pour être pratiques et durables - principalement à Montréal, Laval et sur la Rive-Sud.",
          image: {
            src: "/images/spaces/vanite-salles-de-lavage.webp",
            alt: "Salle de lavage sur mesure",
          },
          actionsSlot: (
            <ActionButtons
              className="justify-start"
              buttons={[
                {
                  text: "Demander une soumission",
                  href: "/contact/",
                },
                {
                  text: "Voir des projets de salle de lavage",
                  href: "/projets/salle-de-lavage/",
                  variant: "outline",
                },
              ]}
            />
          ),
        },
        audience: {
          ariaLabelledby: "pour-qui",
          heading: "À qui s'adresse une salle de lavage sur mesure?",
          items: [
            "Vous voulez optimiser un espace restreint (condo, corridor, placard, sous-sol).",
            "Vous cherchez un espace simple à utiliser au quotidien (pliage, paniers, produits, linge).",
            "Vous avez des contraintes à intégrer : plomberie, drains, chauffe-eau, panneaux, ventilation.",
          ],
          variant: "checkmarks",
        },
        includedLinks: {
          ariaLabelledby: "ce-qui-est-inclus",
          heading: "Ce que comprend une salle de lavage Dilamco",
          links: [
            {
              label: "Design & planification",
              href: "/services/design/",
              description:
                "Besoins, contraintes, circulation et plan d'organisation.",
            },
            {
              label: "Fabrication sur mesure",
              href: "/services/fabrication/",
              description:
                "Armoires, modules, comptoir de pliage et rangement adapté.",
            },
            {
              label: "Installation précise",
              href: "/services/installation/",
              description:
                "Alignements, ajustements, finition et inspection finale.",
            },
          ],
          columns: 3,
        },
        featureImageTextItems,
        projectLinks: {
          ariaLabelledby: "projets",
          heading: "Projets de salles de lavage",
          links: [
            {
              label: "Voir tous les projets de salle de lavage",
              href: "/projets/salle-de-lavage/",
            },
            { label: "Voir tous les projets", href: "/projets/" },
          ],
          columns: 2,
        },
        faq: {
          ariaLabelledby: "faq",
          heading: "FAQ - salle de lavage sur mesure",
          items: faqItems,
        },
        usefulLinks: {
          ariaLabelledby: "liens",
          heading: "Liens utiles",
          links: [
            { label: "Projets", href: "/projets/salle-de-lavage/" },
            { label: "Matériaux", href: "/materiaux/" },
            { label: "Demander une soumission", href: "/contact/" },
          ],
          columns: 3,
        },
      }}
    />
  );
}
