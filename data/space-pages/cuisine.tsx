import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { FeatureImageText, type FeatureImageTextItem } from "@/components/sections/FeatureImageText";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Cuisine sur mesure",
  description:
    "Cuisine sur mesure haut de gamme : design, fabrication et installation. Armoires, à®lots et rangement optimisé, avec option rénovation de cuisine clé en main à  Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/cuisine/",
  ogAlt: "Cuisine sur mesure Dilamco - Haut de gamme",
});

const faqItems = [
  {
    q: "Cuisine sur mesure vs semi-custom : quelle différence?",
    a: "Le sur mesure est conà§u pour votre espace exact (dimensions, contraintes, ergonomie). Le semi-custom part de modules prédéfinis avec des variations. Le choix dépend du niveau d'adaptation et de finition recherché.",
  },
  {
    q: "Qu'est-ce qui influence le plus la durabilité d'une cuisine?",
    a: "La durabilité dépend du matériau, mais aussi de l'assemblage, des chants, de la quincaillerie et de l'installation. L'usage (charges, humidité, entretien) compte autant que le look.",
  },
  {
    q: "Est-ce possible en condo ou dans un espace difficile?",
    a: "Oui. Le sur mesure est particulià¨rement pertinent lorsque l'espace impose des contraintes (murs irréguliers, accà¨s, plomberie, intégration électroménagers).",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0-3 mois, 3-6 mois, etc.) est un bon point de départ à  préciser lors de la soumission.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "fonctionnalite",
    heading: "Fonctionnalité & ergonomie",
    content: (
      <>
        <p>
          Une belle cuisine doit aussi être simple à  vivre. Nous concevons
          autour de l'usage : zones de préparation, accà¨s au rangement,
          circulation et intégration des électroménagers.
        </p>
        <Checklist
          items={[
            "Circulation : dégagements et zones de travail cohérentes.",
            "Rangement intelligent : tiroirs, coins, hauteurs adaptées, organisation.",
            "Durabilité : choix adaptés aux cycles d'ouverture, aux charges et à  l'entretien.",
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
          Le rendu haut de gamme est une somme de décisions : structure,
          chants, quincaillerie, assemblage et installation. Le bon matériau
          dépend de l'usage et des contraintes du projet.
        </p>
        <Checklist
          items={[
            "Structure & stabilité : choix orientés durabilité (ex. contreplaqué selon le contexte).",
            "Portes & finis : MDF, bois massif, finis adaptés au style et à  l'entretien.",
            "Tiroirs & quincaillerie : confort au quotidien, fiabilité, cycles d'ouverture répétés.",
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
          Si votre projet implique plus que l'installation d'armoires
          (plomberie, électricité, plancher, dosseret, etc.), une approche clé
          en main peut réduire les imprévus et mieux cadrer le calendrier.
        </p>
      </>
    ),
    image: {
      src: "/images/hero-image.webp",
      alt: "Fonctionnalité & ergonomie",
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
      "Cuisine sur mesure haut de gamme : design, fabrication et installation. Armoires, à®lots et rangement optimisé, avec option rénovation de cuisine clé en main.",
    url: SITE.url + "/espaces/cuisine/",
    serviceType: "Cuisine sur mesure",
  },
  hero: {
    heading: "Cuisine sur mesure, design, fabrication et installation",
    description: (
      <>
        <p>
          Une cuisine sur mesure est conà§ue pour votre espace réel et votre
          usage quotidien : circulation, zones de travail, rangement, accà¨s aux
          coins, et finition. Dilamco réalise des cuisines sur mesure haut de
          gamme avec option de rénovation clé en main selon le projet -
          principalement à  Montréal, Laval et sur la Rive-Sud.
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
            text: "Demander une soumission",
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
      title: "À qui s'adresse une cuisine sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Optimisation de l'espace",
            description:
              "Vous voulez optimiser chaque centimètre (condo, murs irréguliers, contraintes d'accès).",
          },
          {
            title: "Résultat durable",
            description:
              "Vous recherchez un résultat durable et un rendu cohérent (matériaux, quincaillerie, finition).",
          },
          {
            title: "Contraintes à intégrer",
            description:
              "Plomberie, électroménagers, îlot, rangement spécifique.",
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
            title: "Design & planification",
            href: "/services/design/",
            description: "Besoins, ergonomie, plan, choix de matériaux.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description: "Armoires, modules, îlot et rangement adaptés.",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description: "Alignements, ajustements, finition et inspection finale.",
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
      title: "Projets de cuisines",
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
      title: "Liens utiles",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Services", href: "/services/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - cuisine sur mesure",
    items: faqItems,
  },
};

export default function Cuisine() {
  return <SpacePageTemplate data={pageData} />;
}








