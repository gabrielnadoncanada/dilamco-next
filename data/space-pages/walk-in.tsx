import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { FeatureImageText, type FeatureImageTextItem } from "@/components/sections/FeatureImageText";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Walk-in & rangement sur mesure",
  description:
    "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l'espace et finition haut de gamme. Design, fabrication et installation à  Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/walk-in/",
  ogAlt: "Walk-in & rangement sur mesure Dilamco",
});

const faqItems = [
  {
    q: "Walk-in sur mesure vs modulaire : quelle différence?",
    a: "Le sur mesure s'adapte à  l'espace exact (dimensions, angles, contraintes) et à  vos habitudes. Le modulaire est plus standard et peut laisser des zones perdues ou moins optimisées.",
  },
  {
    q: "Est-ce possible dans un petit espace?",
    a: 'Oui. Le sur mesure est particulià¨rement utile dans les espaces serrés, car il permet d\'optimiser la circulation et de maximiser le rangement sans "perdre" des centimà¨tres.',
  },
  {
    q: "Quels matériaux sont recommandés pour un walk-in?",
    a: "Le choix dépend de l'usage, des charges et du niveau de finition. La durabilité dépend aussi de la qualité des chants, de la quincaillerie et de l'installation.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0-3 mois, 3-6 mois, etc.) est un bon point de départ à  préciser lors de la soumission.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "organisation",
    heading: "Organisation & fonctionnalité (le cÃ…â€œur du sur mesure)",
    content: (
      <>
        <p>
          Le sur mesure permet de structurer l'espace selon vos habitudes.
          L'objectif : rendre le rangement simple, accessible et cohérent,
          sans "zones mortes" difficiles à  utiliser.
        </p>
        <Checklist
          items={[
            "Zones vêtements : sections pour vêtements longs, courts et pliés.",
            "Chaussures : rangement dédié et accessible.",
            "Accessoires : tiroirs compartimentés pour optimiser le quotidien.",
            "à€°tagà¨res : dimensions adaptées, avec possibilité d'ajustement selon le besoin.",
            "à€°volutivité : organisation pensée pour s'adapter (nouveaux besoins, saisons, etc.).",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Organisation & fonctionnalité d'un walk-in sur mesure",
    },
  },
  {
    ariaLabelledby: "materiaux",
    heading: "Matériaux & durabilité",
    content: (
      <>
        <p>
          Un walk-in est utilisé tous les jours. La durabilité dépend des
          matériaux, des chants, de la quincaillerie et de la qualité
          d'installation.
        </p>
        <Checklist
          items={[
            "Stabilité : structures adaptées pour limiter les déformations dans le temps.",
            "Chants & finition : résistance aux impacts et à  l'usure.",
            "Quincaillerie : coulisses et charnià¨res pour usage répété.",
            "Entretien : finis cohérents avec votre quotidien.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Matériaux & durabilité d'un walk-in sur mesure",
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
          Voici quelques configurations fréquentes, adaptées selon l'espace
          disponible.
        </p>
        <Checklist
          items={[
            "Walk-in en L, en U ou linéaire : selon la circulation et les murs disponibles.",
            "Garde-robe ouvert ou fermé : rendu minimaliste ou protection accrue.",
            "Tiroirs intégrés : accessoires, bijoux, ceintures, petits items.",
            "à€°tagà¨res ajustées : valises, paniers, linge, zones saisonnià¨res.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Configurations possibles d'un walk-in sur mesure",
    },
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Walk-in & rangement", url: SITE.url + "/espaces/walk-in/" },
  ],
  service: {
    name: "Walk-in & rangement sur mesure",
    description:
      "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l'espace et finition haut de gamme.",
    url: SITE.url + "/espaces/walk-in/",
    serviceType: "Walk-in sur mesure",
  },
  hero: {
    heading:
      "Walk-in & rangement sur mesure,organisation pensée pour votre espace",
    description:
      "Un walk-in sur mesure se définit par l'usage : vêtements longs et courts, chaussures, accessoires, circulation et accà¨s. Dilamco conà§oit et réalise des solutions de rangement sur mesure haut de gamme, adaptées à  votre espace réel, avec une finition durable - principalement à  Montréal, Laval et sur la Rive-Sud.",
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Walk-in & rangement sur mesure",
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
            text: "Voir des projets de walk-in",
            href: "/projets/walk-in/",
            variant: "outline",
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: "pour-qui",
      title: "Ã€ qui s'adresse un walk-in sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Vous voulez optimiser un espace atypique (angles, plafonds bas, niches, condo).",
          "Vous cherchez une organisation précise (tiroirs accessoires, zones vêtements, rangement chaussures).",
          "Vous souhaitez un rendu durable et cohérent (matériaux, chants, quincaillerie, finition).",
        ],
        variant: "checkmarks",
      },
    },
    {
      id: "ce-qui-est-inclus",
      title: "Ce que comprend un walk-in Dilamco",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Design & planification",
            href: "/services/design/",
            description: "Besoins, contraintes, circulation et plan d'organisation.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description: "Modules, étagÃ¨res, tiroirs et zones adaptées.",
          },
          {
            title: "Installation précise",
            href: "/services/installation/",
            description: "Alignements, ajustements, finition et inspection finale.",
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
      title: "Projets de walk-in",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Voir tous les projets de walk-in",
            href: "/projets/walk-in/",
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
          { title: "Projets", href: "/projets/walk-in/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - walk-in & rangement sur mesure",
    items: faqItems,
  },
};

export default function WalkIn() {
  return <SpacePageTemplate data={pageData} />;
}








