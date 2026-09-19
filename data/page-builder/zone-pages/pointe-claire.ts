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
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Pointe-Claire",
          description:
            "Rénovation intérieure et agrandissement pour les maisons de Pointe-Claire, du Village ancien aux quartiers d'après-guerre.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la salle de bain",
              href: "/services/renovation/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée dans une maison de Pointe-Claire",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à vingt minutes de Pointe-Claire",
            },
            {
              label: "Où demander le permis",
              value: "Comptoir urbanisme, 451, boul. Saint-Jean",
            },
            {
              label: "Type de maisons",
              value: "Des maisons anciennes et des bungalows d'après-guerre",
            },
            {
              label: "Premier retour",
              value: "Un appel de retour en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'il faut savoir avant de rénover à Pointe-Claire",
          rows: [
            {
              label: "Quartiers anciens",
              value:
                "Le Village et le bord du lac gardent des fondations de pierre et des charpentes d'origine.",
            },
            {
              label: "Quartiers d'après-guerre",
              value:
                "Cedar Park Heights, Northview, Oneida et Valois ont été bâtis après 1945.",
            },
            {
              label: "Particularité locale",
              value:
                "Dans les secteurs anciens, un comité d'urbanisme approuve l'apparence des travaux avant le permis.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "Ailleurs, le règlement de zonage fixe les marges, les hauteurs et l'usage permis sur le terrain.",
            },
            {
              label: "Projets courants",
              value:
                "Refaire une salle de bain, ouvrir une cuisine, redresser un plancher, ajouter une rallonge.",
            },
            {
              label: "Depuis notre base",
              value: "Vingt minutes de route par le boulevard Saint-Jean.",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Rénovation intérieure d'une maison ancienne du Village de Pointe-Claire",
          },
          note: "Sources : Ville de Pointe-Claire, Wikipédia. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Pointe-Claire",
          items: [
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "On remplace la plomberie d'origine jusqu'à l'alimentation d'eau de la maison",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain refaite dans une maison du Lakeshore",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Maison ancienne",
              href: "/services/renovation",
              description:
                "On relève les niveaux, la fondation de pierre et la charpente avant de dessiner",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.webp",
                alt: "Chantier de rénovation dans le Village de Pointe-Claire",
              },
              badges: ["Patrimoine"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description:
                "On reprend le sous-plancher et les raccords quand la maison a cent ans",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Plancher de bois franc posé dans une maison de Pointe-Claire",
              },
              badges: ["Bois franc"],
              footerCtaLabel: "Voir le plancher",
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
          heading: "Aussi desservies près de Pointe-Claire",
          columns: "2",
          items: [
            { title: "Dorval", href: "/zones/dorval" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Kirkland", href: "/zones/kirkland" },
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
              q: "Mon projet doit-il passer devant un comité à Pointe-Claire ?",
              a: "Si votre maison est dans Le Village ou dans un autre secteur ancien, oui. Un comité d'urbanisme approuve l'apparence des travaux avant le permis. Nous vérifions votre adresse au comptoir urbanisme avant de chiffrer.",
            },
            {
              q: "Cette approbation allonge-t-elle l'échéancier ?",
              a: "Oui. La Ville juge le projet sur des critères d'apparence, ce qui prend plus de temps qu'une demande ordinaire. Ce délai figure à l'échéancier dès la soumission, jamais en cours de chantier.",
            },
            {
              q: "Rénovez-vous les maisons anciennes du Village de Pointe-Claire ?",
              a: "Oui. Nous relevons d'abord les niveaux de plancher, la fondation de pierre et les systèmes ajoutés au fil des ans. Le budget prévoit une marge pour ce qui apparaît à l'ouverture des murs.",
            },
            {
              q: "Combien coûte une salle de bain à Pointe-Claire ?",
              a: "Dans une maison d'avant 1950, la plomberie et le sous-plancher coûtent autant que la finition. Un mandat démarre vers 25 000 $ et la portée se fixe après le relevé. L'estimation est gratuite.",
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
            "On vérifie quelles règles s'appliquent à votre adresse, puis on chiffre.",
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
        },
      },
    },
  ],
};
