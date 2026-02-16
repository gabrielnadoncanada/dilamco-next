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
  title: "Commercial sur mesure",
  description:
    "Aménagement commercial sur mesure : mobilier et rangement robustes pour usage intensif. Conception, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/commercial/",
  ogAlt: "Commercial sur mesure Dilamco — robuste, durable, bien exécuté",
});

const faqItems = [
  {
    q: "Faites-vous des projets commerciaux de petite taille?",
    a: "Oui, selon le contexte. Le point clé est la clarté des besoins, des contraintes et du calendrier. Décrivez votre espace, l’usage et vos priorités lors de la demande de soumission.",
  },
  {
    q: "Quels matériaux sont recommandés pour usage intensif?",
    a: "Le choix dépend de l’environnement (chocs, nettoyage, humidité). La durabilité repose aussi sur les chants, la quincaillerie et la précision d’installation — c’est l’ensemble qui fait la différence.",
  },
  {
    q: "Travaillez-vous avec des entrepreneurs ou des architectes?",
    a: "Oui, selon le projet. Nous pouvons collaborer avec les intervenants en place pour cadrer la fabrication et l’installation, et assurer une exécution cohérente.",
  },
  {
    q: "Quels sont les délais typiques?",
    a: "Les délais varient selon la complexité, la disponibilité et le phasage requis. Lors de la soumission, on confirme une échéance réaliste et on aligne le plan avec la production.",
  },
  {
    q: "Pouvez-vous intervenir dans un espace en opération?",
    a: "Selon les contraintes, il est parfois possible de planifier l’intervention pour limiter l’impact sur vos opérations (heures, accès, phasage).",
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
            "Chants & finition : résistance aux impacts, à l’usure et au nettoyage.",
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
          accès, heures d’intervention, intégration d’équipements, réseaux
          existants et calendrier. On cadre le projet pour réduire les surprises
          et livrer un résultat cohérent.
        </p>
        <Checklist
          items={[
            "Intégration : adaptation aux équipements et contraintes existantes.",
            "Dégagements & accès : circulation, portes, zones de travail et dimensions.",
            "Phasage : planification pour réduire l’impact sur vos opérations (selon le contexte).",
            "Coordination : collaboration avec les autres intervenants lorsque nécessaire.",
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
          votre contexte et à votre usage).
        </p>
        <Checklist
          items={[
            "Comptoirs de service : réception, accueil, zones transactionnelles.",
            "Rangements muraux : optimisation verticale et zones de stockage.",
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
      "Conception, fabrication et installation de mobilier et rangement commerciaux sur mesure : robuste, durable et pensé pour usage intensif.",
    url: SITE.url + "/espaces/commercial/",
    serviceType: "Aménagement commercial sur mesure",
  },
  hero: {
    heading: "Aménagement commercial sur mesure, conçu pour l’usage intensif",
    description:
      "En commercial, la priorité est la fiabilité : usage intensif, entretien, contraintes du lieu, calendrier et coordination. Dilamco conçoit et réalise du mobilier et du rangement sur mesure, avec une exécution robuste et un résultat prévisible — à Montréal, Laval et sur la Rive-Sud.",
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
      title: "Types d’espaces commerciaux",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Le sur mesure est particulièrement pertinent lorsque l’espace impose des contraintes (accès, équipements, circulation) ou lorsque l’usage est intensif.",
        items: [
          {
            title: "Bureaux & espaces professionnels",
            description: "Rangements, mobilier intégré et zones d’accueil.",
          },
          {
            title: "Commerces de détail",
            description: "Mobilier de présentation, arrière-boutique et stockage.",
          },
          {
            title: "Espaces de services",
            description:
              "Mobilier fonctionnel, organisation et durabilité au quotidien.",
          },
          {
            title: "Espaces communs",
            description: "Comptoirs, rangements muraux et solutions intégrées.",
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
            title: "Conception fonctionnelle",
            href: "/services/design/",
            description: "Implantation claire, pensée pour l’opération et l’ergonomie.",
          },
          {
            title: "Fabrication sur mesure",
            href: "/services/fabrication/",
            description: "Mobilier et rangement adaptés au contexte et à l’usage.",
          },
          {
            title: "Installation professionnelle",
            href: "/services/installation/",
            description:
              "Alignements nets, ajustements fins, finition et inspection finale.",
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
      title: "Réalisations commerciales",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
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
      title: "Ressources",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
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
    heading: "FAQ — commercial sur mesure",
    items: faqItems,
  },
};

export default function Commercial() {
  return <SpacePageTemplate data={pageData} />;
}
