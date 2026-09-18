// Page zone : Pointe-Claire.
// Sources consultées le 2026-09-18 :
// - Ville de Pointe-Claire, « Comptoir urbanisme » (Service d'urbanisme, hôtel de ville,
//   451, boul. Saint-Jean ; 514 630-1206 ; urbanisme@pointe-claire.ca) :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/lieux-et-secteurs-de-pointe-claire/trouvez-un-lieu/hotel-de-ville/comptoir-urbanisme
// - Ville de Pointe-Claire, « Plans d'implantation et d'intégration architecturale (PIIA) » :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/plan-durbanisme-et-zonage/plans-dimplantation-et-dintegration-architecturale-piia
// - Ville de Pointe-Claire, règlement sur les PIIA PC-2787 (codification 2024-12-10) :
//   https://www.pointe-claire.ca/assets/images/Documents/pc-2787_piia_codif_2024-12-10.pdf
// - Ville de Pointe-Claire, règlement de zonage PC-2775 (codification 2024-12-10) :
//   https://www.pointe-claire.ca/assets/images/Documents/pc-2775_zonage_codif_2024-12-10.pdf
// - Ville de Pointe-Claire, « Comment obtenir un permis de construction » (2025) :
//   https://www.pointe-claire.ca/assets/images/Documents/pro_permis_construire-r_fr_2025.pdf
// - Ville de Pointe-Claire, carte interactive et districts (Cedar/Le Village, Lakeside, Valois,
//   Cedar Park Heights, Lakeside Heights, Seigneurie, Northview, Oneida) :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/lieux-et-secteurs-de-pointe-claire/carte-interactive
// - Wikipédia, « Pointe-Claire » (33 488 hab. en 2021, 34,7 km2, origines au XVIIe siècle,
//   municipalité en 1854, ville en 1911, chemins de fer 1853 et 1887, moulin et église
//   Saint-Joachim) : https://fr.wikipedia.org/wiki/Pointe-Claire

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePointeClairePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Pointe-Claire",
    description:
      "Entrepreneur général licencié RBQ à Pointe-Claire : rénovation, salle de bain, cuisine, agrandissement. Dossiers PIIA du Village et des secteurs anciens.",
    path: "/zones/pointe-claire",
    ogAlt: "Rénovation résidentielle à Pointe-Claire par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Pointe-Claire", url: SITE.url + "/zones/pointe-claire" },
  ],
  service: {
    name: "Entrepreneur général à Pointe-Claire",
    description:
      "Rénovation résidentielle, agrandissement et transformation à Pointe-Claire, incluant les secteurs assujettis au règlement sur les PIIA, par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/pointe-claire",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Pointe-Claire",
      "Village de Pointe-Claire",
      "Valois",
      "Cedar Park",
      "Lakeside",
      "Northview",
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
          eyebrow: "Pointe-Claire",
          heading:
            "Entrepreneur général à Pointe-Claire, du Village aux quartiers d'après-guerre",
          description:
            "Maison ancienne, bungalow des années 1950 ou condo récent : les règles diffèrent. Licence RBQ 8306-0806-27, valide depuis 2004.",
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
          badges: ["Depuis 2004", "Dossiers PIIA", "Assuré"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Rénovation de salle de bain à Pointe-Claire",
          },
          caption: "Du Village au boulevard Saint-Jean",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Pointe-Claire",
          description:
            "Municipalité en 1854, ville en 1911. Deux maisons distantes de huit rues peuvent relever de logiques de chantier complètement différentes.",
          cards: [
            {
              title: "Trois époques de construction",
              description:
                "Village et Lakeshore : maisons anciennes, fondations de pierre, planchers hors niveau. Cedar Park Heights et Northview : bungalows d'après-guerre.",
            },
            {
              title: "Le PIIA, découvert trop tard",
              description:
                "Le règlement PC-2787 vise les secteurs anciens et les bâtiments patrimoniaux : évaluation qualitative et délai plus long.",
            },
            {
              title: "Comptoir urbanisme",
              description:
                "Hôtel de ville, 451, boulevard Saint-Jean. Zonage PC-2775, règlement de construction et Code de construction du Québec.",
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
          heading: "Ce qu'on réalise à Pointe-Claire",
          items: [
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité refaite avant la céramique, plomberie d'origine remplacée au besoin.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Structure vérifiée avant toute ouverture, surtout dans les maisons d'avant 1950.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine rénovée dans une maison de Pointe-Claire",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Maison ancienne",
              href: "/services/renovation",
              description:
                "Relevé des niveaux, de la fondation et de la charpente avant de dessiner.",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Rénovation intérieure d'une maison ancienne de Pointe-Claire",
              },
              badges: ["Patrimoine"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou solarium, selon ce que permet le zonage PC-2775.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison unifamiliale",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description:
                "Sous-plancher, niveaux et raccords repris dans les maisons anciennes.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Pose de plancher de bois franc dans une résidence",
              },
              badges: ["Bois franc"],
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
          heading: "Le cadre réglementaire validé avant la soumission",
          intro:
            "À Pointe-Claire, le risque n'est pas la pose. C'est de démarrer sans savoir sous quelles règles le projet tombe.",
          badges: ["Depuis 2004", "5,0 sur Google", "Assuré"],
          cardTitle: "Ce qui est vérifiable",
          items: [
            "Licence RBQ 8306-0806-27 depuis le 7 septembre 2004",
            "Catégories entrepreneur général 1.2 et 1.3",
            "Aucune réclamation au dossier de licence",
            "Responsabilité civile et couverture chantier",
            "Assujettissement au PIIA vérifié au cadrage",
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
            { title: "Dorval", href: "/zones/dorval" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
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
              q: "Où déposer une demande de permis à Pointe-Claire ?",
              a: "Au comptoir urbanisme, au premier étage de l'hôtel de ville, au 451, boulevard Saint-Jean. Le Service d'urbanisme y reçoit les demandes résidentielles et commerciales. Nous montons le dossier et faisons le dépôt.",
            },
            {
              q: "Qu'est-ce que le PIIA et suis-je assujetti ?",
              a: "Le règlement sur les plans d'implantation et d'intégration architecturale (PC-2787) complète le zonage et vise notamment les bâtiments d'intérêt patrimonial et les secteurs anciens. Nous vérifions votre adresse au cadrage.",
            },
            {
              q: "Un projet assujetti au PIIA prend-il plus de temps ?",
              a: "Oui. La ville prévoit un délai de traitement plus long qu'une demande ordinaire, puisque le projet fait l'objet d'une évaluation qualitative. Nous inscrivons ce délai à l'échéancier dès le départ.",
            },
            {
              q: "Rénovez-vous les maisons anciennes du Village ?",
              a: "Oui. Fondation, niveaux de plancher, charpente et systèmes ajoutés par couches se relèvent avant de dessiner. Le budget prévoit une marge pour ce qui apparaît à l'ouverture, et chaque changement de portée est écrit.",
            },
            {
              q: "Peut-on rénover un condo à Pointe-Claire ?",
              a: "Oui, notamment dans le secteur Lakeside. Il faut cadrer tôt les contraintes de copropriété : horaires autorisés, accès par l'ascenseur, protection des aires communes, insonorisation et parties communes intouchables.",
            },
            {
              q: "Combien coûte une rénovation à Pointe-Claire ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $. Dans une maison ancienne, la portée dépend de ce qu'on trouve derrière les finis. Estimation gratuite.",
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
          heading: "Un projet à Pointe-Claire ?",
          intro:
            "On vient voir la maison, on valide le cadre applicable, on revient avec un prix.",
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
