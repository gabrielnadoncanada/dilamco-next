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
  title: "Walk-in & rangement sur mesure",
  description:
    "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l’espace et finition durable. Conception, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/walk-in/",
  ogAlt: "Walk-in & rangement sur mesure Dilamco — organisation durable",
});

const faqItems = [
  {
    q: "Walk-in sur mesure vs modulaire : quelle différence?",
    a: "Le sur mesure s’adapte à votre espace réel (dimensions, angles, contraintes) et à vos habitudes. Le modulaire est plus standard et laisse souvent des zones perdues ou une organisation moins cohérente. Le sur mesure maximise le rangement sans sacrifier la circulation.",
  },
  {
    q: "Est-ce possible dans un petit espace?",
    a: "Oui. Le sur mesure est particulièrement utile dans les espaces serrés : il optimise la circulation et le rangement, et évite de perdre des centimètres avec des modules mal adaptés.",
  },
  {
    q: "Quels matériaux sont recommandés pour un walk-in?",
    a: "Le choix dépend de l’usage, des charges et du niveau de finition. La durabilité repose aussi sur la qualité des chants, la quincaillerie et la précision de l’installation — c’est l’ensemble qui fait la différence.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité du projet, la disponibilité et la période de l’année. Lors de la soumission, on confirme une échéance réaliste et on cadre les étapes pour limiter les imprévus.",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "organisation",
    heading: "Organisation & fonctionnalité (le vrai avantage du sur mesure)",
    content: (
      <>
        <p>
          Le sur mesure permet de structurer l’espace selon vos habitudes.
          L’objectif : un rangement simple, accessible et cohérent — sans zones
          perdues difficiles à utiliser.
        </p>
        <Checklist
          items={[
            "Zones vêtements : sections pour vêtements longs, courts et pliés.",
            "Chaussures : rangement dédié, visible et facile d’accès.",
            "Accessoires : tiroirs compartimentés pour simplifier le quotidien.",
            "Étagères : dimensions adaptées, ajustables selon vos besoins.",
            "Évolutivité : organisation pensée pour les saisons et les nouveaux besoins.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Organisation & fonctionnalité d’un walk-in sur mesure",
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
          d’installation — pas seulement du look.
        </p>
        <Checklist
          items={[
            "Stabilité : structures adaptées pour limiter les déformations dans le temps.",
            "Chants & finition : résistance aux impacts et à l’usure.",
            "Quincaillerie : coulisses et charnières pensées pour l’usage répété.",
            "Entretien : finis cohérents avec votre quotidien.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Matériaux & durabilité d’un walk-in sur mesure",
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
          Voici quelques configurations courantes. On adapte toujours selon
          l’espace disponible, la circulation et votre façon d’utiliser le
          rangement.
        </p>
        <Checklist
          items={[
            "Walk-in en L, en U ou linéaire : selon les murs disponibles et la circulation.",
            "Garde-robe ouvert ou fermé : rendu épuré ou protection accrue.",
            "Tiroirs intégrés : accessoires, bijoux, ceintures et petits items.",
            "Étagères ajustées : valises, paniers, linge et zones saisonnières.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Configurations possibles d’un walk-in sur mesure",
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
      "Conception, fabrication et installation de walk-in et rangements sur mesure : organisation, modules adaptés, optimisation de l’espace et finition durable.",
    url: SITE.url + "/espaces/walk-in/",
    serviceType: "Walk-in sur mesure",
  },
  hero: {
    variant: "boxed",
    heading: <>Walk-in sur mesure à Montréal<br /> <span>Pensé pour votre quotidien.</span></>,
    description:
      "Organisation précise, matériaux durables, installation professionnelle.",
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Walk-in & rangement sur mesure",
    },
    actionsSlot: (
      <ActionButtons
        className="justify-start"
        buttons={
          [
            {
              text: "Obtenir une soumission",
              href: "/contact/",
            },
            {
              text: "Voir des projets de walk-in",
              href: "/projets/walk-in/",
              variant: "outline",
            },
          ]
        }
      />
    ),
  },
  sections: [
    {
      id: "pour-qui",
      title: "À qui s’adresse un walk-in sur mesure?",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          {
            title: "Espace atypique ou serré",
            description:
              "Angles, niches, plafonds bas, condo : on optimise chaque centimètre sans nuire à la circulation.",
          },
          {
            title: "Organisation précise",
            description:
              "Zones vêtements, rangement chaussures, tiroirs pour accessoires : une logique claire selon vos habitudes.",
          },
          {
            title: "Rendu durable et cohérent",
            description:
              "Matériaux, chants, quincaillerie et finition au même niveau, pour un usage quotidien sans souci.",
          },
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
            title: "Conception & planification",
            href: "/services/design/",
            description:
              "Contraintes, circulation, et plan d’organisation pensé pour votre usage.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description:
              "Modules, étagères, tiroirs et zones dédiées, adaptés à votre espace.",
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
      title: "Réalisations de walk-in",
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
      title: "Ressources",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Projets", href: "/projets/walk-in/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Obtenir une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ — walk-in & rangement sur mesure",
    items: faqItems,
  },
};

export default function WalkIn() {
  return <SpacePageTemplate data={pageData} />;
}
