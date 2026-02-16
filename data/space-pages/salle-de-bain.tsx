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
  title: "Salle de bain & vanités sur mesure",
  description:
    "Vanités et rangements de salle de bain sur mesure pensés pour l’humidité : conception, fabrication et installation. Option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-bain/",
  ogAlt: "Salle de bain & vanités sur mesure Dilamco — durable en milieu humide",
});

const faqItems = [
  {
    q: "Quels matériaux sont les plus adaptés en salle de bain?",
    a: "En salle de bain, le bon matériau dépend du niveau d’humidité, de la stabilité et surtout des détails de finition (chants, joints) et de la qualité d’installation. Une solution durable est toujours un ensemble : matériau + assemblage + quincaillerie + exécution.",
  },
  {
    q: "MDF ou mélamine en salle de bain : lequel choisir?",
    a: "Tout dépend du fini recherché et du contexte d’humidité. Le point critique, c’est la protection des chants et la qualité d’exécution. Un détail mal fini peut compromettre n’importe quel matériau, même sur un projet haut de gamme.",
  },
  {
    q: "Tiroirs ou portes : qu’est-ce qui est le plus pratique?",
    a: "Les tiroirs améliorent l’accès (surtout en profondeur) et l’organisation. Les portes restent pertinentes selon la plomberie et la configuration. Le sur mesure permet d’optimiser les deux en fonction de votre usage.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité du projet, la disponibilité et la période de l’année. Lors de la soumission, on confirme une échéance réaliste et on cadre les étapes pour réduire les imprévus.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "humidite",
    heading: "Humidité & durabilité : ce qui compte vraiment",
    content: (
      <>
        <p>
          En salle de bain, les problèmes viennent rarement du style. Ils
          viennent de l’humidité : chants endommagés, gonflement, quincaillerie
          qui fatigue. Notre priorité est de réduire ces risques dès la
          conception.
        </p>
        <Checklist
          items={[
            "Matériaux adaptés : choix orientés stabilité et usage en milieu humide.",
            "Protection des chants : un point critique pour limiter l’infiltration d’eau.",
            "Quincaillerie fiable : charnières et coulisses pensées pour l’usage quotidien.",
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
          Le sur mesure permet d’adapter la vanité à votre espace, vos habitudes
          et vos contraintes — sans sacrifier le rangement.
        </p>
        <Checklist
          items={[
            "Simple ou double lavabo selon la largeur disponible.",
            "Tiroirs vs portes selon vos préférences d’organisation.",
            "Rangement vertical pour maximiser l’espace dans les petites salles de bain.",
            "Intégration plomberie propre et fonctionnelle, sans perdre du volume inutilement.",
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
          plomberie, ventilation, électricité), l’option clé en main aide à
          cadrer le calendrier, prioriser les décisions et réduire les imprévus.
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
      "Conception, fabrication et installation de vanités et rangements sur mesure pensés pour l’humidité, avec option rénovation clé en main selon le projet.",
    url: SITE.url + "/espaces/salle-de-bain/",
    serviceType: "Salle de bain sur mesure",
  },
  hero: {
    heading: "Salle de bain & vanités sur mesure, pensées pour durer",
    description:
      "Une salle de bain impose des contraintes spécifiques : humidité, ventilation, éclaboussures et usage quotidien. Dilamco conçoit et réalise des vanités et rangements sur mesure haut de gamme, avec option rénovation complète clé en main lorsque le projet l’exige — à Montréal, Laval et sur la Rive-Sud.",
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Salle de bain & vanités sur mesure",
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
      title: "À qui s’adresse une vanité sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Espace limité ou configuration atypique",
            description:
              "Petites salles de bain, contraintes d’accès ou murs irréguliers : on optimise chaque centimètre.",
          },
          {
            title: "Durabilité en milieu humide",
            description:
              "Vous voulez une solution stable et cohérente : matériaux, chants, quincaillerie et finition au même niveau.",
          },
          {
            title: "Contraintes à intégrer",
            description:
              "Plomberie, rangement vertical, double lavabo, organisation précise et circulation.",
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
            title: "Conception & planification",
            href: "/services/design/",
            description:
              "Contraintes, implantation, ergonomie et choix de matériaux.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description:
              "Vanité, rangement et modules adaptés (simple ou double).",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description: "Alignements nets, ajustements fins et inspection finale.",
          },
          {
            title: "Option clé en main",
            description:
              "Coordination des travaux connexes lors d’une rénovation complète.",
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
      title: "Réalisations de salles de bain",
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
      title: "Ressources",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Projets", href: "/projets/salle-de-bain/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Obtenir une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ — salle de bain & vanités sur mesure",
    items: faqItems,
  },
};

export default function SalleDeBain() {
  return <SpacePageTemplate data={pageData} />;
}
