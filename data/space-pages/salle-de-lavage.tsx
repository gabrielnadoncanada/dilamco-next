import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import {
  FeatureImageText,
  type FeatureImageTextItem,
} from "@/components/sections/FeatureImageText";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Salle de lavage sur mesure",
  description:
    "Salle de lavage sur mesure : armoires, comptoir de pliage et rangements robustes pour buanderie. Conception durable, adaptée aux contraintes techniques, à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-lavage/",
  ogAlt: "Salle de lavage sur mesure Dilamco — durable et facile à vivre",
});

const faqItems = [
  {
    q: "Comment optimiser une petite buanderie?",
    a: "En définissant des zones (lavage, pliage, rangement) et en exploitant la hauteur. Le sur mesure aide à éviter les espaces perdus, à préserver la circulation et à intégrer proprement les contraintes techniques.",
  },
  {
    q: "Tiroirs ou portes pour ranger les produits?",
    a: "Les tiroirs améliorent l’accès (surtout en profondeur) et simplifient l’organisation. Les portes restent utiles pour des items volumineux. Le bon choix dépend de la configuration et de vos habitudes.",
  },
  {
    q: "Quels matériaux tiennent bien avec l'humidité?",
    a: "Le point clé, c’est la stabilité et la protection des chants. La durabilité dépend aussi de l’assemblage, de la quincaillerie et de la précision d’installation — c’est l’ensemble qui fait la différence.",
  },
  {
    q: "Est-ce possible dans un placard?",
    a: "Oui. Le sur mesure est particulièrement pertinent dans un placard : il faut gérer les dégagements, l’ouverture, la circulation et, souvent, des contraintes techniques (plomberie, ventilation, panneaux).",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité du projet, la disponibilité et la période de l’année. Lors de la soumission, on confirme une échéance réaliste et on cadre les étapes pour limiter les imprévus.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "fonctionnalite",
    heading:
      "Fonctionnalité : structurer les zones (lavage, pliage, rangement)",
    content: (
      <>
        <p>
          Une buanderie efficace réduit le désordre. Le sur mesure permet de
          structurer l’espace selon vos habitudes et la réalité des lieux.
        </p>
        <Checklist
          items={[
            "Zone lavage : accès simple, circulation claire et dégagements cohérents.",
            "Zone pliage : comptoir pratique, à une hauteur confortable.",
            "Produits ménagers : rangement sécurisé et facilement accessible.",
            "Rangement vertical : armoires hautes et colonnes pour maximiser l’espace.",
            "Paniers & linge : organisation logique pour éviter l’accumulation.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-salles-de-lavage.webp",
      alt: "Fonctionnalité d’une salle de lavage sur mesure",
    },
  },
  {
    ariaLabelledby: "technique",
    heading: "Contraintes techniques & durabilité",
    content: (
      <>
        <p>
          Les problèmes en buanderie viennent souvent des détails : chants
          exposés à l’eau, surfaces difficiles à nettoyer, quincaillerie qui
          fatigue. Notre approche vise la durabilité, sans compliquer l’usage.
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
      alt: "Contraintes techniques & durabilité d’une salle de lavage sur mesure",
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
        <p>
          Le sur mesure s’adapte à la configuration réelle de votre buanderie,
          qu’elle soit ouverte, en corridor ou intégrée dans un placard.
        </p>
        <Checklist
          items={[
            "Buanderie en corridor : rangement vertical et comptoir de pliage sans bloquer la circulation.",
            "Buanderie dans un placard : modules adaptés, accès simple, gestion des portes et dégagements.",
            "Évier utilitaire (si applicable) : rangement adapté aux produits et aux zones humides.",
            "Empilage laveuse/sécheuse : optimisation de la hauteur et du rangement.",
            "Armoires hautes + colonne : maximiser le rangement pour linge, paniers et accessoires.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-salles-de-lavage.webp",
      alt: "Configurations possibles d’une salle de lavage sur mesure",
    },
  },
];

export const pageData: SpacePageData = {
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
      "Conception, fabrication et installation de salles de lavage sur mesure : armoires, comptoir de pliage et rangements robustes. Pratique, durable et adapté aux contraintes techniques.",
    url: SITE.url + "/espaces/salle-de-lavage/",
    serviceType: "Salle de lavage sur mesure",
  },
  hero: {
    heading: "Salle de lavage sur mesure, pensée pour durer",
    description:
      "Une buanderie est un espace technique : humidité, plomberie, vibration, produits ménagers et usage fréquent. Dilamco conçoit et réalise des salles de lavage sur mesure haut de gamme, pratiques au quotidien et durables dans le temps — à Montréal, Laval et sur la Rive-Sud.",
    image: {
      src: "/images/spaces/vanite-salles-de-lavage.webp",
      alt: "Salle de lavage sur mesure",
    },
    actionsSlot: (
      <ActionButtons
        className="justify-start"
        buttons={[
          {
            text: "Obtenir une soumission",
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
  sections: [
    {
      id: "pour-qui",
      title: "À qui s’adresse une salle de lavage sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Espace restreint ou configuration atypique",
            description:
              "Condo, corridor, placard, sous-sol : on optimise sans nuire à la circulation.",
          },
          {
            title: "Organisation simple au quotidien",
            description:
              "Pliage, paniers, produits, linge : un espace clair, fonctionnel et facile à utiliser.",
          },
          {
            title: "Contraintes techniques à intégrer",
            description:
              "Plomberie, drains, chauffe-eau, panneaux, ventilation et dégagements.",
          },
        ],
        variant: "checkmarks",
      },
    },
    {
      id: "ce-qui-est-inclus",
      title: "Ce que comprend une salle de lavage Dilamco",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Conception & planification",
            href: "/services/design/",
            description:
              "Contraintes, circulation et plan d’organisation pensé pour votre usage.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description:
              "Armoires, modules, comptoir de pliage et rangements adaptés.",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description:
              "Alignements nets, ajustements fins, finition et inspection finale.",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "details",
      title: "",
      content: {
        type: SECTION_TYPES.CUSTOM,
        node: <FeatureImageText items={featureImageTextItems} />,
      },
    },
    {
      id: "projets",
      title: "Réalisations de salles de lavage",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Voir tous les projets de salle de lavage",
            href: "/projets/salle-de-lavage/",
          },
          { title: "Voir tous les projets", href: "/projets/" },
        ],
        columns: 2,
      },
    },
    {
      id: "liens",
      title: "Ressources",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Projets", href: "/projets/salle-de-lavage/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Obtenir une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ — salle de lavage sur mesure",
    items: faqItems,
  },
};

export default function SalleDeLavage() {
  return <SpacePageTemplate data={pageData} />;
}
