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
        variant: "split-image",
        props: {
          eyebrow: "Dollard-des-Ormeaux",
          heading:
            "Entrepreneur général à Dollard-des-Ormeaux, permis et chantier coordonnés",
          description:
            "Bungalows, split-levels et cottages de 1960 à 1985. Notre base est à dix minutes, rue Larocque. Licence RBQ 8306-0806-27 depuis 2004.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Depuis 2004", "Entrepreneur général", "Assuré"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Rénovation de cuisine dans une maison de Dollard-des-Ormeaux",
          },
          caption: "Saint-Jean, Westpark, Sunnybrooke",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de DDO",
          description:
            "Presque tout le parc résidentiel a été bâti en vingt-cinq ans, par vagues. Les mêmes défauts reviennent d'une rue à l'autre.",
          cards: [
            {
              title: "Trois secteurs, trois générations",
              description:
                "Sunnybrooke : bungalows et split-levels de la première vague. Westpark et Saint-Jean : cottages, jumelés, maisons en rangée.",
            },
            {
              title: "Zonage refondu en 2025",
              description:
                "Plan d'urbanisme R-2024-190 en vigueur le 24 avril 2025, zonage R-2025-199 le 16 mai 2025.",
            },
            {
              title: "Permis à l'hôtel de ville",
              description:
                "Dépôt en ligne ou au 12001, boulevard De Salaberry. Croquis, plans ou dessins détaillés obligatoires.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise à DDO",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur central souvent porteur : poutre et colonnes dimensionnées avant la démolition.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte rénovée dans un split-level",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane d'étanchéité complète, ventilation évacuée dehors et non dans l'entretoit.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Isolation et pare-vapeur repris selon les règles actuelles, pas selon 1975.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en salle familiale",
              },
              badges: ["Isolation"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, solarium ou ajout d'étage validés sous le zonage R-2025-199.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison de banlieue",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau ou refoulement : clapet et pompe vérifiés, reconstruction conforme.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Chantier de reconstruction après un dégât d'eau",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Pourquoi un entrepreneur de l'Ouest-de-l'Île",
          intro:
            "Une visite imprévue à DDO ne coûte pas une demi-journée de route. Ça change la vitesse.",
          badges: ["Depuis 2004", "5,0 sur Google", "Assuré"],
          cardTitle: "Ce qui est vérifiable",
          items: [
            "Licence RBQ 8306-0806-27 depuis le 7 septembre 2004",
            "Catégories entrepreneur général 1.2 et 1.3",
            "Aucune réclamation au dossier de licence",
            "Responsabilité civile et couverture chantier",
            "Zonage R-2025-199 validé auprès de la ville",
            "Armoires sur mesure au même contrat",
          ],
          actions: [
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Villes voisines desservies",
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
              q: "Faut-il un permis pour rénover à DDO ?",
              a: "Dans la très grande majorité des cas, oui. La ville exige des croquis, plans ou dessins détaillés illustrant clairement les travaux. Dépôt en ligne ou à l'hôtel de ville. Nous montons le dossier.",
            },
            {
              q: "Le nouveau zonage change-t-il quelque chose ?",
              a: "Possiblement. Le plan d'urbanisme R-2024-190 est en vigueur depuis le 24 avril 2025 et le zonage R-2025-199 depuis le 16 mai 2025. Marges, hauteurs et implantation ont pu être revues.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon ?",
              a: "Souvent oui, rarement sans travail structural. Dans les split-levels de DDO, le mur central porte fréquemment le plancher supérieur. Poutre dimensionnée et colonnes descendues jusqu'à une assise adéquate, décidées avant le contrat.",
            },
            {
              q: "Combien de temps dure un chantier ?",
              a: "Une salle de bain se compte en semaines, une cuisine complète en mois. Les armoires sur mesure prennent 9 à 15 semaines, en parallèle du chantier. L'échéancier est écrit au contrat.",
            },
            {
              q: "Combien coûte une rénovation à Dollard-des-Ormeaux ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe généralement entre 35 000 $ et 50 000 $. Estimation gratuite, budget arrêté au contrat écrit après la visite.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide sans restriction, catégories 1.2 et 1.3, aucune réclamation au dossier. Responsabilité civile et couverture chantier.",
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
          heading: "Un projet à Dollard-des-Ormeaux ?",
          intro:
            "On vient voir la maison, on cadre la portée, on revient avec une soumission détaillée.",
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
          note: "Dilamco · Entrepreneur général RBQ 8306-0806-27 · Ouest-de-l'Île",
        },
      },
    },
  ],
};
