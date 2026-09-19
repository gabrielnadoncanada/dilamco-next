// Sources locales (consultées le 2026-09-18) :
// - Ville de Vaudreuil-Dorion, « Permis » (Division permis et inspections,
//   450 455-3371, infourbanisme@ville.vaudreuil-dorion.qc.ca ; demande en ligne
//   sur vaudreuil-dorion.edemandes.com ; « Aucun permis n'est délivré sur
//   place » ; paiement de la facture avant délivrance ; tarifs au règlement
//   no 1709) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/reglementation/permis
// - Ville de Vaudreuil-Dorion, « Services municipaux » (Service de l'urbanisme
//   composé de la Division urbanisme, de la Division permis et inspections et de
//   la Section patrouille municipale) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/administration-municipale/services-municipaux
// - Ville de Vaudreuil-Dorion, « Règlements et plan d'urbanisme » et « Révision du
//   plan et des règlements d'urbanisme » (PPU Harwood – De Lotbinière, mise à jour
//   du 12 novembre 2025) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/reglementation/reglements-et-plan-d-urbanisme
// - Ville de Vaudreuil-Dorion, « Portrait de la Ville » et progression de la
//   population depuis 1995 (environ 18 600 habitants en 1995, environ 46 000 en
//   2025) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/information/portrait-de-la-ville
// - Statistique Canada, Recensement de 2021 : 43 268 habitants, variation de
//   13,5 % par rapport à 2016 :
//   https://www12.statcan.gc.ca/census-recensement/2021/as-sa/fogs-spg/Page.cfm?lang=F&topic=1&dguid=2021A00052471083
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneVaudreuilDorionPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Vaudreuil-Dorion — rénovation",
    description:
      "Entrepreneur général RBQ à Vaudreuil-Dorion : rénovation de maisons des années 2000, sous-sols, permis de la Division permis et inspections.",
    path: "/zones/vaudreuil-dorion",
    ogAlt: "Rénovation résidentielle à Vaudreuil-Dorion par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Vaudreuil-Dorion", url: SITE.url + "/zones/vaudreuil-dorion" },
  ],
  service: {
    name: "Entrepreneur général à Vaudreuil-Dorion",
    description:
      "Rénovation résidentielle clé en main à Vaudreuil-Dorion et dans Vaudreuil-Soulanges : cadrage, permis municipal, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/vaudreuil-dorion",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Vaudreuil-Dorion",
      "Dorion",
      "Harwood",
      "Cité-des-Jeunes",
      "Hudson",
      "Saint-Lazare",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Vaudreuil-Dorion",
          description:
            "Finition de sous-sol, cuisine et agrandissement pour les maisons de Vaudreuil-Dorion, par un entrepreneur général licencié.",
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
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Cuisine refaite dans une maison récente de Vaudreuil-Dorion",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à trente minutes par l'autoroute 40",
            },
            {
              label: "Où demander le permis",
              value: "Division permis et inspections, 450 455-3371",
            },
            {
              label: "Type de maisons",
              value: "Des maisons de 2000 à 2020 et un vieux Dorion d'avant 1960",
            },
            {
              label: "Premier retour",
              value: "On revient vers vous en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'il faut savoir avant de rénover à Vaudreuil-Dorion",
          rows: [
            {
              label: "Âge des quartiers",
              value:
                "Les quartiers récents datent de 2000 à 2020 et sortent avec des finis d'entrée de gamme.",
            },
            {
              label: "Particularité locale",
              value:
                "Beaucoup de maisons récentes ont été livrées avec un sous-sol jamais fini.",
            },
            {
              label: "Comment obtenir le permis",
              value:
                "Aucun permis n'est remis sur place et la facture doit être payée avant la délivrance.",
            },
            {
              label: "Combien coûte le permis",
              value:
                "Le tarif est fixé par un règlement municipal et varie selon la nature des travaux.",
            },
            {
              label: "Ce qui change bientôt",
              value:
                "Le plan d'urbanisme est en révision et le corridor Harwood a été revu le 12 novembre 2025.",
            },
            {
              label: "Projets courants",
              value:
                "Finir un sous-sol, refaire une cuisine, ajouter une pièce ou un garage.",
            },
            {
              label: "Depuis notre base",
              value: "Pont de l'Île-aux-Tourtes, puis la sortie Harwood.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
            alt: "Sous-sol fini avec rangements dans une maison de Vaudreuil-Dorion",
          },
          note: "Sources : Ville de Vaudreuil-Dorion, Statistique Canada 2021. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Vaudreuil-Dorion",
          items: [
            {
              title: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On termine le sous-sol brut livré par le promoteur du quartier",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Sous-sol converti en bureau dans une maison de Cité-des-Jeunes",
              },
              badges: ["Sous-sol"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On remplace les armoires d'origine d'une maison de 2008 et on revoit l'îlot",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Îlot central remplaçant la cuisine d'origine d'une maison de 2008",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "On ajoute une pièce ou un garage, frais de permis compris dans le prix",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement intégré à une maison de Vaudreuil-Dorion",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
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
          heading: "Villes voisines desservies",
          columns: "3",
          items: [
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la zone",
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
          heading: "Questions fréquentes à Vaudreuil-Dorion",
          items: [
            {
              q: "Comment obtient-on un permis à Vaudreuil-Dorion ?",
              a: "Par la Division permis et inspections. La Ville recommande la demande en ligne, qui affiche la liste des documents exigés. Aucun permis n'est remis sur place et la facture se paie avant la délivrance.",
            },
            {
              q: "Combien coûte un permis à Vaudreuil-Dorion ?",
              a: "Le tarif est fixé par un règlement municipal et varie selon la nature des travaux. Le montant entre dans notre prix. La Division permis et inspections répond au 450 455-3371 pour les cas particuliers.",
            },
            {
              q: "Les règles d'urbanisme changent-elles en ce moment ?",
              a: "Oui. Le plan et les règlements sont en révision, et le corridor Harwood a fait l'objet d'un programme mis à jour le 12 novembre 2025. Nous validons les règles au moment de votre projet.",
            },
            {
              q: "Pourquoi tant de sous-sols non finis dans les maisons d'ici ?",
              a: "Les quartiers bâtis entre 2000 et 2020 ont souvent été livrés sans sous-sol fini. La hauteur libre, la sortie de secours, le drainage et la séparation coupe-feu se vérifient avant de dessiner les pièces.",
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
          heading: "Un projet à Vaudreuil-Dorion ?",
          intro:
            "Envoyez-nous l'adresse et la liste des travaux que vous voulez faire.",
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
