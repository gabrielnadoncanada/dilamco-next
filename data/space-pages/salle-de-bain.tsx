import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { FeatureImageText, type FeatureImageTextItem } from "@/components/sections/FeatureImageText";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Salle de bain & vanités sur mesure",
  description:
    "Vanités et rangement de salle de bain sur mesure conçus pour l'humidité : design, fabrication et installation. Option rénovation de salle de bain clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-bain/",
  ogAlt: "Salle de bain & vanités sur mesure Dilamco",
});

const faqItems = [
  {
    q: "Quels matériaux sont les plus adaptés en salle de bain?",
    a: "Les matériaux doivent être choisis en fonction de l'humidité, des chants et de la stabilité. La solution la plus durable dépend aussi de l'assemblage, de la quincaillerie et de l'installation.",
  },
  {
    q: "MDF ou mélamine en salle de bain : lequel choisir?",
    a: "à€¡a dépend du fini recherché et du niveau d'humidité. Le point critique est la protection des chants et la qualité d'exécution. Un mauvais détail de finition peut ruiner n'importe quel matériau.",
  },
  {
    q: "Tiroirs ou portes : qu'est-ce qui est le plus pratique?",
    a: "Les tiroirs facilitent l'accà¨s (surtout en profondeur). Les portes peuvent être pertinentes selon la plomberie et l'organisation. Le sur mesure permet d'optimiser les deux.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0-3 mois, 3-6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "humidite",
    heading: "Humidité & durabilité : les points qui comptent vraiment",
    content: (
      <>
        <p>
          En salle de bain, les problà¨mes viennent rarement "d'un mauvais
          look". Ils viennent de l'humidité : chants endommagés, gonflement,
          quincaillerie qui fatigue. Notre priorité est de réduire ces risques
          dà¨s la conception.
        </p>
        <Checklist
          items={[
            "Matériaux adaptés : choix orientés stabilité et usage en milieu humide.",
            "Protection des chants : un détail critique pour limiter l'infiltration d'eau.",
            "Quincaillerie fiable : charnià¨res et coulisses pour usage quotidien (soft-close selon le besoin).",
            "Contexte du projet : ventilation et configuration (surtout en rénovation).",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Humidité & durabilité en salle de bain",
    },
    links: [
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
      {
        text: "Pourquoi le contreplaqué",
        href: "/materiaux/contreplaque/",
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
          Le sur mesure permet d'adapter la vanité à  votre espace, vos
          habitudes et vos contraintes.
        </p>
        <Checklist
          items={[
            "Simple ou double lavabo selon la largeur disponible.",
            "Tiroirs vs portes selon vos préférences d'organisation.",
            "Rangement vertical pour maximiser l'espace dans les petites salles de bain.",
            "Intégration plomberie propre et fonctionnelle (sans perdre du rangement inutilement).",
            "Finition cohérente avec le style (moderne, chaleureux, classique).",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Configurations possibles de vanités sur mesure",
    },
    links: [
      {
        text: "Couleurs et finis",
        href: "/materiaux/couleurs/",
        variant: "outline",
      },
    ],
  },
  {
    ariaLabelledby: "renovation",
    heading: "Rénovation de salle de bain (option clé en main)",
    content: (
      <>
        <p>
          Si votre projet inclut des travaux connexes (douche/bain, céramique,
          plomberie, ventilation, électricité), une approche clé en main peut
          réduire les imprévus et mieux cadrer le calendrier.
        </p>
      </>
    ),
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Rénovation de salle de bain clé en main",
    },
    links: [
      {
        text: "Voir la rénovation salle de bain",
        href: "/services/renovation/salle-de-bain/",
        variant: "outline",
      },
    ],
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    {
      name: "Salle de bain & vanités",
      url: SITE.url + "/espaces/salle-de-bain/",
    },
  ],
  service: {
    name: "Salle de bain & vanités sur mesure",
    description:
      "Vanités et rangement de salle de bain sur mesure conà§us pour l'humidité : design, fabrication et installation, avec option de rénovation clé en main.",
    url: SITE.url + "/espaces/salle-de-bain/",
    serviceType: "Salle de bain sur mesure",
  },
  hero: {
    heading: "Salle de bain & vanités sur mesure, durabilité en milieu humide",
    description:
      "Une salle de bain impose des contraintes spécifiques : humidité, ventilation, éclaboussures, nettoyage fréquent et usage quotidien. Dilamco conà§oit et réalise des vanités et rangements sur mesure haut de gamme, pensés pour durer, avec option de rénovation complà¨te clé en main selon le projet - principalement à Montréal, Laval et sur la Rive-Sud.",
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Salle de bain & vanités sur mesure",
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
            text: "Voir des projets de salles de bain",
            href: "/projets/salle-de-bain/",
            variant: "outline",
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: "pour-qui",
      title: "À qui s'adresse une vanité sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Optimisation de l'espace",
            description: "Vous voulez optimiser chaque centimètre (condo, murs irréguliers, contraintes d'accès).",
          },
          {
            title: "Résultat durable",
            description: "Vous recherchez un résultat durable et un rendu cohérent (matériaux, quincaillerie, finition).",
          },
          {
            title: "Contraintes à intégrer",
            description: "Plomberie, électroménagers, îlot, rangement spécifique.",
          },
        ],
        variant: "checkmarks",
      },
    },
    {
      id: "ce-qui-est-inclus",
      title: "Ce que comprend une salle de bain sur mesure Dilamco",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Design & planification",
            href: "/services/design/",
            description: "Besoins, contraintes, plan et choix de matériaux.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description: "Vanité, rangement, modules adaptés (simple ou double).",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description: "Alignements, ajustements, finition et inspection finale.",
          },
          {
            title: "Option clé en main",
            description:
              "Coordination des travaux connexes lors d'une rénovation complète.",
            href: "/services/renovation/salle-de-bain/",
          },
        ],
        columns: 2,
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
      title: "Projets de salles de bain",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Voir tous les projets de salles de bain",
            href: "/projets/salle-de-bain/",
          },
          { title: "Voir tous les projets", href: "/projets/" },
        ],
        columns: 2,
      },
    },
    {
      id: "liens",
      title: "Liens utiles",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Projets", href: "/projets/salle-de-bain/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - salle de bain & vanités sur mesure",
    items: faqItems,
  },
};

export default function SalleDeBain() {
  return <SpacePageTemplate data={pageData} />;
}








