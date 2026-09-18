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
            "Quarante-huit mille résidents, un parc bâti en vingt-cinq ans et les mêmes défauts d'une rue à l'autre.",
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
            { label: "Notre base", value: "Pierrefonds-Roxboro, dix minutes" },
            { label: "Permis", value: "Hôtel de ville, 12001 boul. De Salaberry" },
            { label: "Bâti", value: "Bungalows et split-levels, 1960 à 1985" },
            { label: "Premier retour", value: "24 à 48 h ouvrables" },
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
          heading: "Les maisons de DDO, secteur par secteur",
          intro:
            "La ville comptait 1 800 résidents au début des années 1960 et près de 40 000 vingt ans plus tard.",
          rows: [
            {
              label: "Première vague",
              value: "Sunnybrooke, puis Westpark et le secteur Saint-Jean",
            },
            {
              label: "Zonage",
              value: "R-2025-199, en vigueur depuis le 16 mai 2025",
            },
            {
              label: "Plan d'urbanisme",
              value: "R-2024-190, applicable depuis le 24 avril 2025",
            },
            {
              label: "Pièces exigées",
              value: "Croquis, plans ou dessins détaillés des travaux",
            },
            {
              label: "Projets fréquents",
              value: "Mur central ouvert, salle de bain, sous-sol, rallonge",
            },
            {
              label: "Temps de route",
              value: "Dix minutes par le boulevard Saint-Jean",
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
          heading: "Ce qu'on réalise à Dollard-des-Ormeaux",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Le mur central des split-levels porte souvent l'étage, poutre d'abord",
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
                "Isolation et pare-vapeur repris selon le code actuel, pas celui de 1975",
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
                "Rallonge ou solarium validés sous le zonage R-2025-199",
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
          heading: "Autour de DDO, nous desservons aussi",
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
              q: "Le zonage R-2025-199 change-t-il mon projet à DDO ?",
              a: "Possiblement. Marges, hauteurs et implantation ont été revues à son entrée en vigueur, le 16 mai 2025. On lit la fiche de votre zone auprès de la ville avant de faire dessiner quoi que ce soit.",
            },
            {
              q: "Quels documents Dollard-des-Ormeaux exige-t-elle ?",
              a: "Des croquis, des plans ou des dessins détaillés qui montrent clairement les travaux. Le dépôt se fait en ligne ou au 12001, boulevard De Salaberry. Nous préparons la demande et répondons à l'inspecteur.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon à DDO ?",
              a: "Souvent oui, rarement sans travail structural. Dans les split-levels du secteur Sunnybrooke, ce mur porte fréquemment le plancher du haut. La poutre et les colonnes sont dimensionnées avant la signature.",
            },
            {
              q: "Combien coûte une cuisine à Dollard-des-Ormeaux ?",
              a: "Le plus souvent entre 35 000 $ et 50 000 $, structure, électricité et plomberie comprises. Les mandats plus modestes partent vers 25 000 $. Le budget est arrêté au contrat écrit, après la visite.",
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
          heading: "Un chantier à Dollard-des-Ormeaux",
          intro: "Dix minutes nous séparent de votre rue.",
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
