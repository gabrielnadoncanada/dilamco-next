// Page zone : Dollard-des-Ormeaux (DDO).
// Sources consultées le 2026-09-18 :
// - Ville de Dollard-des-Ormeaux, « Règlements municipaux » (plan d'urbanisme R-2024-190
//   en vigueur le 24 avril 2025, règlement de zonage R-2025-199 en vigueur le 16 mai 2025) :
//   https://ville.ddo.qc.ca/en/my-city/municipal-by-laws/
// - Ville de Dollard-des-Ormeaux, révision du programme d'urbanisme :
//   https://ville.ddo.qc.ca/en/special-projects/urban-planning-programme/
// - Ville de Dollard-des-Ormeaux, « Nous joindre » (hôtel de ville, 12001 boul. De Salaberry,
//   514 684-1010 ; permis et inspections 514 684-6899) : https://ville.ddo.qc.ca/en/contact-us/
// - Portail de demandes de permis en ligne : https://dollard-des-ormeaux.edemandes.com/
// - Wikipédia, « Dollard-des-Ormeaux » (48 403 hab. en 2021, 15,1 km2, 1 800 hab. au début des
//   années 1960, ~40 000 au début des années 1980, parc Centennial de 48 ha inauguré en 1976) :
//   https://fr.wikipedia.org/wiki/Dollard-des-Ormeaux
// - Ville de Dollard-des-Ormeaux, plan de la ville (secteurs Saint-Jean, Westpark, Sunnybrooke ;
//   rues Spring Garden, Hyman, boul. Sunnybrooke) :
//   https://ville.ddo.qc.ca/ma-municipalite/plan-de-la-ville

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDollardDesOrmeauxPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Dollard-des-Ormeaux",
    description:
      "Entrepreneur général licencié RBQ à Dollard-des-Ormeaux : cuisine, salle de bain, sous-sol, agrandissement. Base à Pierrefonds, à dix minutes de DDO.",
    path: "/zones/dollard-des-ormeaux",
    ogAlt: "Rénovation résidentielle à Dollard-des-Ormeaux par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    {
      name: "Dollard-des-Ormeaux",
      url: SITE.url + "/zones/dollard-des-ormeaux",
    },
  ],
  service: {
    name: "Entrepreneur général à Dollard-des-Ormeaux",
    description:
      "Rénovation résidentielle complète à Dollard-des-Ormeaux : cuisine, salle de bain, sous-sol, agrandissement et transformation, par un entrepreneur général licencié RBQ de l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/dollard-des-ormeaux",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Dollard-des-Ormeaux",
      "Westpark",
      "Sunnybrooke",
      "Secteur Saint-Jean",
      "Lake Road",
      "Ouest-de-l'Île",
      "Montréal",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Dollard-des-Ormeaux",
          description:
            "Cuisine, sous-sol et agrandissement pour les maisons de Dollard-des-Ormeaux, par un entrepreneur général licencié basé à dix minutes.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée dans une maison de Dollard-des-Ormeaux",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à dix minutes de DDO",
            },
            {
              label: "Où demander le permis",
              value: "Hôtel de ville, 12001, boul. De Salaberry",
            },
            {
              label: "Type de maisons",
              value: "Des bungalows et des split-levels de 1960 à 1985",
            },
            {
              label: "Premier retour",
              value: "Nous répondons en 24 à 48 heures ouvrables",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Les maisons de Dollard-des-Ormeaux, en bref",
          intro:
            "La ville comptait 1 800 résidents au début des années 1960 et près de 40 000 vingt ans plus tard.",
          rows: [
            {
              label: "Ce qui a changé récemment",
              value:
                "Le nouveau plan d'urbanisme s'applique depuis le 24 avril 2025 et le nouveau zonage depuis le 16 mai 2025.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "Ce règlement fixe les marges, les hauteurs permises et la position du bâtiment sur le terrain.",
            },
            {
              label: "Comment déposer la demande",
              value:
                "En ligne ou à l'hôtel de ville, avec des croquis ou des plans qui montrent clairement les travaux.",
            },
            {
              label: "Particularité locale",
              value:
                "Les quartiers se sont bâtis par vagues, de Sunnybrooke à Westpark puis au secteur Saint-Jean.",
            },
            {
              label: "Projets courants",
              value:
                "Ouvrir le mur central, refaire une salle de bain, finir un sous-sol, ajouter une rallonge.",
            },
            {
              label: "Depuis notre base",
              value: "Dix minutes de route par le boulevard Saint-Jean.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Salle de bain refaite dans un split-level de Dollard-des-Ormeaux",
          },
          note: "Sources : Ville de Dollard-des-Ormeaux, Wikipédia. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Dollard-des-Ormeaux",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On dimensionne la poutre avant d'ouvrir le mur central d'un split-level",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte sur le salon d'un split-level de DDO",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On refait l'isolation et le pare-vapeur selon le code actuel, pas celui de 1975",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en salle familiale à Dollard-des-Ormeaux",
              },
              badges: ["Isolation"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "On valide la rallonge ou le solarium sous le règlement de zonage de 2025",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison de Dollard-des-Ormeaux",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir l'agrandissement",
            },
          ],
        },
      },
    },
    {
      id: "voisins",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Aussi desservies près de Dollard-des-Ormeaux",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
            },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
          ],
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Le nouveau zonage de 2025 change-t-il mon projet à DDO ?",
              a: "Peut-être. Les marges, les hauteurs et la position du bâtiment ont été revues quand le règlement est entré en vigueur, le 16 mai 2025. Nous lisons la fiche de votre zone avant de faire dessiner quoi que ce soit.",
            },
            {
              q: "Quels documents la Ville demande-t-elle pour un permis à DDO ?",
              a: "Des croquis, des plans ou des dessins détaillés qui montrent clairement les travaux. Le dépôt se fait en ligne ou au 12001, boulevard De Salaberry. Nous préparons la demande et nous répondons à l'inspecteur.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon à DDO ?",
              a: "Souvent oui, mais rarement sans travail de structure. Dans les split-levels du secteur Sunnybrooke, ce mur porte souvent le plancher de l'étage. La poutre et les colonnes sont calculées avant la signature.",
            },
            {
              q: "Combien coûte une cuisine à Dollard-des-Ormeaux ?",
              a: "Le plus souvent entre 35 000 $ et 50 000 $, structure, électricité et plomberie comprises. Les mandats plus modestes partent vers 25 000 $. Le budget est arrêté au contrat, après la visite.",
            },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Un chantier à Dollard-des-Ormeaux ?",
          intro:
            "Dix minutes nous séparent de votre rue. On passe voir, puis on chiffre.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · entrepreneur général, à dix minutes de DDO",
        },
      },
    },
  ],
};
