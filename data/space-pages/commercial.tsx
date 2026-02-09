import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { FeatureImageText, type FeatureImageTextItem } from "@/components/sections/FeatureImageText";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Commercial sur mesure",
  description:
    "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/commercial/",
  ogAlt: "Commercial sur mesure Dilamco",
});

const faqItems = [
  {
    q: "Faites-vous des projets commerciaux de petite taille?",
    a: "Oui, selon le contexte. Le point clé est la clarté des besoins, des contraintes et du calendrier. Décrivez le type d'espace et l'usage lors de la demande de soumission.",
  },
  {
    q: "Quels matériaux sont recommandés pour usage intensif?",
    a: "Le choix dépend de l'environnement (chocs, nettoyage, humidité). La durabilité dépend aussi des chants, de la quincaillerie et de l'installation.",
  },
  {
    q: "Travaillez-vous avec des entrepreneurs ou des architectes?",
    a: "Oui, selon le projet. Nous pouvons collaborer avec les intervenants en place pour cadrer la fabrication et l'installation.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité et la disponibilité. L'échéance est à préciser lors de la soumission, afin d'aligner le plan et la production.",
  },
  {
    q: "Pouvez-vous intervenir dans un espace en opération?",
    a: "Selon les contraintes, il est parfois possible de planifier l'intervention pour limiter l'impact sur vos opérations (heures, accès, phasage).",
  },
];

const featureImageTextItems: FeatureImageTextItem[] = [
  {
    ariaLabelledby: "durabilite",
    heading: "Usage intensif & durabilité",
    content: (
      <>
        <p>
          En commercial, la longévité se joue sur les détails : structures
          stables, chants résistants, quincaillerie conçue pour des cycles
          répétés et finitions faciles à entretenir.
        </p>
        <Checklist
          items={[
            "Matériaux adaptés : sélection orientée usage et stabilité.",
            "Chants & finition : résistance aux impacts et à l'usure.",
            "Quincaillerie : charnières et coulisses pour usage fréquent.",
            "Entretien : surfaces cohérentes avec le nettoyage régulier.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/commercial.webp",
      alt: "Usage intensif & durabilité en commercial",
    },
    links: [
      {
        text: "Voir les matériaux",
        href: "/materiaux/",
        variant: "outline",
      },
      {
        text: "Quincaillerie",
        href: "/materiaux/quincaillerie/",
        variant: "outline",
      },
      {
        text: "Comparatif des matériaux",
        href: "/materiaux/comparatif/",
        variant: "outline",
      },
    ],
  },
  {
    ariaLabelledby: "contraintes",
    heading: "Contraintes du lieu & coordination",
    content: (
      <>
        <p>
          Un projet commercial impose souvent des contraintes particulières :
          accès, heures d'intervention, intégration d'équipements, réseaux
          existants et calendrier. Nous cadrons le projet pour limiter les
          surprises et livrer un résultat cohérent.
        </p>
        <Checklist
          items={[
            "Intégration : adaptation aux équipements et contraintes existantes.",
            "Dégagements & accès : circulation, portes, zones de travail et dimensions.",
            "Phasage : planification pour réduire l'impact sur vos opérations (selon le contexte).",
            "Coordination : collaboration avec d'autres intervenants lorsque nécessaire.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/commercial.webp",
      alt: "Contraintes du lieu & coordination en commercial",
    },
  },
  {
    ariaLabelledby: "configurations",
    heading: "Configurations possibles",
    content: (
      <>
        <p>
          Quelques exemples de solutions fréquentes en commercial (adaptées à
          votre contexte).
        </p>
        <Checklist
          items={[
            "Comptoirs de service : réception, accueil, zones transactionnelles.",
            "Rangements muraux : optimisation verticale, zones de stockage.",
            "Mobilier intégré : solutions sur mesure non standardisées.",
            "Arrière-boutique : organisation des produits, accès rapide, durabilité.",
          ]}
        />
      </>
    ),
    image: {
      src: "/images/spaces/commercial.webp",
      alt: "Configurations possibles en commercial",
    },
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial/" },
  ],
  service: {
    name: "Commercial sur mesure",
    description:
      "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif.",
    url: SITE.url + "/espaces/commercial/",
    serviceType: "Aménagement commercial sur mesure",
  },
  hero: {
    heading: "Aménagement commercial sur mesure, mobilier et rangement durables",
    description:
      "En commercial, la priorité est la fiabilité : usage intensif, entretien, contraintes du lieu, calendrier et coordination. Dilamco conçoit et réalise du mobilier et du rangement sur mesure pour espaces commerciaux, avec une exécution robuste et un résultat prévisible - principalement à Montréal, Laval et sur la Rive-Sud.",
    image: {
      src: "/images/spaces/commercial.webp",
      alt: "Aménagement commercial sur mesure",
    },
    actionsSlot: (
      <ActionButtons
        className="justify-start"
        buttons={[
          {
            text: "Parler de votre projet",
            href: "/contact/",
          },
          {
            text: "Voir des projets commerciaux",
            href: "/projets/commercial/",
            variant: "outline",
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: "pour-qui",
      title: "Types d'espaces commerciaux",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Le sur mesure est particulièrement pertinent lorsque l'espace impose des contraintes (accès, équipements, circulation) ou lorsque l'usage est intensif.",
        items: [
          {
            title: "Bureaux & espaces professionnels",
            description: "Rangements, mobilier intégré, zones d'accueil.",
          },
          {
            title: "Commerces de détail",
            description: "Mobilier de présentation, arrière-boutique, rangements.",
          },
          {
            title: "Espaces de services",
            description: "Mobilier fonctionnel, organisation, durabilité au quotidien.",
          },
          {
            title: "Espaces communs",
            description: "Comptoirs, rangements muraux, solutions intégrées.",
          },
        ],
        variant: "checkmarks",
      },
    },
    {
      id: "ce-qui-est-inclus",
      title: "Ce que comprend un projet commercial Dilamco",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Analyse des besoins",
            href: "/services/design/",
            description:
              "Usage, contraintes du lieu, circulation, dimensions et accès.",
          },
          {
            title: "Design fonctionnel",
            href: "/services/fabrication/",
            description: "Plan orienté opération et ergonomie.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description: "Mobilier et rangement adaptés au contexte.",
          },
          {
            title: "Installation professionnelle",
            href: "/services/installation/",
            description: "Alignements, ajustements, finition et inspection finale.",
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
      title: "Projets commerciaux",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        links: [
          {
            title: "Voir tous les projets commerciaux",
            href: "/projets/commercial/",
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
        links: [
          { title: "Projets", href: "/projets/commercial/" },
          { title: "Matériaux", href: "/materiaux/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 3,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - commercial sur mesure",
    items: faqItems,
  },
};

export default function Commercial() {
  return <SpacePageTemplate data={pageData} />;
}







