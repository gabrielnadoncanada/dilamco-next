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
  title: "Cuisine sur mesure haut de gamme",
  description:
    "Cuisine sur mesure haut de gamme : conception, fabrication et installation. Armoires, îlot et rangements optimisés, avec option rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/cuisine/",
  ogAlt: "Cuisine sur mesure Dilamco — haut de gamme, durable, bien exécuté",
});

const faqItems = [
  {
    q: "Cuisine sur mesure vs semi-custom : quelle différence?",
    a: "Le sur mesure est conçu pour vos dimensions réelles et vos contraintes (murs, plomberie, ergonomie, intégrations). Le semi-custom part de modules standard avec certaines variations. Le bon choix dépend du niveau d’adaptation souhaité, de la finition attendue et de l’optimisation de l’espace.",
  },
  {
    q: "Qu'est-ce qui influence le plus la durabilité d'une cuisine?",
    a: "La durabilité repose sur l’ensemble : structure, chants, quincaillerie, qualité d’assemblage et précision d’installation. Les habitudes d’usage (charges, humidité, entretien) comptent autant que le choix du matériau.",
  },
  {
    q: "Est-ce possible en condo ou dans un espace difficile?",
    a: "Oui. Le sur mesure prend tout son sens quand l’espace impose des contraintes : murs irréguliers, accès restreints, plomberie à intégrer, électroménagers encastrés ou zones de rangement spécifiques.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité du projet, la disponibilité et la période de l’année. Lors de la soumission, on confirme une échéance réaliste et on cadre les étapes pour éviter les retards inutiles.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "fonctionnalite",
    heading: "Fonctionnalité & ergonomie",
    content: (
      <>
        <p>
          Une cuisine haut de gamme doit être simple à vivre. Nous concevons
          autour de l’usage réel : zones de préparation, accès au rangement,
          circulation et intégration des électroménagers.
        </p>
        <Checklist
          items={[
            "Circulation : dégagements cohérents et zones de travail fluides.",
            "Rangement intelligent : tiroirs, coins, hauteurs adaptées et organisation.",
            "Confort au quotidien : accès facile, gestes simples, entretien simplifié.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/hero-image.webp",
      alt: "Fonctionnalité & ergonomie",
    },
    links: [
      {
        text: "Voir les matériaux",
        href: "/materiaux/",
        variant: "outline",
      },
      {
        text: "Voir la quincaillerie",
        href: "/materiaux/quincaillerie/",
        variant: "outline",
      },
    ],
  },
  {
    ariaLabelledby: "materiaux",
    heading: "Matériaux & fabrication",
    content: (
      <>
        <p>
          Le rendu haut de gamme vient des détails : structure, chants,
          assemblage, quincaillerie et précision d’installation. Nous
          recommandons les bons choix selon votre usage et les contraintes du
          projet.
        </p>
        <Checklist
          items={[
            "Structure & stabilité : choix orientés durabilité (ex. contreplaqué selon le contexte).",
            "Portes & finis : options adaptées au style et à l’entretien.",
            "Tiroirs & quincaillerie : confort, fiabilité et cycles d’ouverture répétés.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/hero-image.webp",
      alt: "Matériaux & fabrication",
    },
    links: [
      {
        text: "Pourquoi le contreplaqué",
        href: "/materiaux/contreplaque/",
        variant: "outline",
      },
      {
        text: "MDF",
        href: "/materiaux/mdf/",
        variant: "outline",
      },
      {
        text: "Mélamine",
        href: "/materiaux/melamine/",
        variant: "outline",
      },
      {
        text: "Bois massif",
        href: "/materiaux/bois-massif/",
        variant: "outline",
      },
    ],
  },
  {
    ariaLabelledby: "renovation",
    heading: "Rénovation de cuisine (option clé en main)",
    content: (
      <>
        <p>
          Si votre projet implique plus que l’installation d’armoires
          (plomberie, électricité, plancher, dosseret, etc.), l’option clé en
          main permet de mieux cadrer le calendrier, les priorités et les
          imprévus.
        </p>
      </>
    ),
    image: {
      src: "/images/hero-image.webp",
      alt: "Rénovation de cuisine (option clé en main)",
    },
    links: [
      {
        text: "Voir la rénovation de cuisine",
        href: "/services/renovation/cuisine/",
        variant: "outline",
      },
    ],
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine/" },
  ],
  service: {
    name: "Cuisine sur mesure",
    description:
      "Conception, fabrication et installation de cuisines sur mesure haut de gamme. Armoires, îlot et rangements optimisés, avec option rénovation clé en main selon le projet.",
    url: SITE.url + "/espaces/cuisine/",
    serviceType: "Cuisine sur mesure",
  },
  hero: {
    heading: "Cuisine sur mesure haut de gamme",
    description: (
      <>
        <p>
          Une cuisine sur mesure est pensée pour votre espace réel et votre
          usage : circulation, zones de travail, rangements, intégrations et
          finition. Dilamco conçoit, fabrique et installe des cuisines haut de
          gamme, avec option rénovation clé en main lorsque le projet l’exige —
          à Montréal, Laval et sur la Rive-Sud.
        </p>
      </>
    ),
    image: {
      src: "/images/spaces/cabinet-cuisines.webp",
      alt: "Cuisine sur mesure",
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
            text: "Voir des projets de cuisines",
            href: "/projets/cuisine/",
            variant: "outline",
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: "pour-qui",
      title: "À qui s’adresse une cuisine sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Espace atypique ou contraint",
            description:
              "Condo, murs irréguliers, accès difficile : chaque centimètre doit être optimisé.",
          },
          {
            title: "Investir pour un résultat durable",
            description:
              "Vous voulez un rendu cohérent et solide : matériaux, quincaillerie et finition au même niveau.",
          },
          {
            title: "Contraintes techniques à intégrer",
            description:
              "Plomberie, électroménagers encastrés, îlot, rangements spécifiques et circulation.",
          },
        ],
        variant: "checkmarks",
      },
    },
    {
      id: "ce-qui-est-inclus",
      title: "Ce que comprend une cuisine sur mesure Dilamco",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Conception & planification",
            href: "/services/design/",
            description:
              "Implantation, ergonomie, plans et choix de matériaux.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description:
              "Armoires, modules, îlot et rangements adaptés à votre espace.",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description:
              "Alignements nets, ajustements fins et inspection finale.",
          },
          {
            title: "Option clé en main",
            description:
              "Coordination des travaux connexes lorsque le projet inclut une rénovation.",
            href: "/services/renovation/cuisine/",
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
      title: "Réalisations de cuisines",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Voir tous les projets de cuisines",
            href: "/projets/cuisine/",
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
          { title: "Services", href: "/services/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Obtenir une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ — cuisine sur mesure",
    items: faqItems,
  },
};

export default function Cuisine() {
  return <SpacePageTemplate data={pageData} />;
}
