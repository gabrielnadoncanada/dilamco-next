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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Vaudreuil-Dorion",
          heading:
            "Entrepreneur général à Vaudreuil-Dorion, du permis à la livraison",
          description:
            "De 18 600 habitants en 1995 à près de 46 000 aujourd'hui. Un parc surtout récent, un noyau ancien à Dorion.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Vaudreuil-Dorion", "Vaudreuil-Soulanges", "Licence RBQ"],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Cuisine rénovée dans une maison de Vaudreuil-Dorion",
          },
          caption: "Vaudreuil-Dorion, Hudson, Saint-Lazare, l'Île-Perrot",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons d'ici",
          description:
            "Deux parcs cohabitent : les quartiers planifiés de 2000-2020 et le vieux Dorion d'avant 1960.",
          cards: [
            {
              title: "Quartiers 2000-2020",
              description:
                "Structure saine, finis d'origine d'entrée de gamme, sous-sols souvent livrés bruts.",
            },
            {
              title: "Division permis et inspections",
              description:
                "Demande en ligne, aucun permis délivré sur place, facture payée avant délivrance.",
            },
            {
              title: "Réglementation en révision",
              description:
                "Plan d'urbanisme revu, PPU Harwood – De Lotbinière mis à jour en novembre 2025.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise à Vaudreuil-Dorion",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Finir un sous-sol livré brut : salle familiale, chambre, salle de bain.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Sous-sol aménagé en bureau et bibliothèque",
              },
              badges: ["Sous-sol"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Remplacer les armoires d'origine, revoir l'îlot et la circulation.",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Cuisine sur mesure avec îlot central",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Ajouter une pièce, un garage ou un étage, permis inclus.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement résidentiel intégré à la maison existante",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qu'on vérifie en visite",
          intro:
            "Une maison de 2008 et une maison d'avant 1960 ne mènent pas au même chantier.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification",
          items: [
            "Année de construction et quartier",
            "Qualité des finis d'origine",
            "Hauteur libre et issue possible au sous-sol",
            "Capacité de l'entrée électrique et du panneau",
            "Murs porteurs et fermes de toit préfabriquées",
            "Zonage et règles applicables au moment du projet",
            "Type de permis et tarif du règlement no 1709",
          ],
          actions: [
            {
              label: "Planifier une visite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
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
              a: "Par la Division permis et inspections. La Ville recommande fortement la demande en ligne : la plateforme donne la liste des documents exigés. Aucun permis n'est délivré sur place et la facture doit être acquittée avant la délivrance.",
            },
            {
              q: "Combien coûte le permis ?",
              a: "Les tarifs sont fixés au règlement municipal no 1709 et varient selon les travaux. On inclut le montant au cadrage. La Division permis et inspections répond au 450 455-3371 pour les questions propres à votre adresse.",
            },
            {
              q: "La réglementation d'urbanisme est-elle en train de changer ?",
              a: "Oui. Le plan et les règlements d'urbanisme sont en révision, et le corridor Harwood – De Lotbinière fait l'objet d'un programme particulier d'urbanisme mis à jour en novembre 2025. On valide les règles au moment du projet.",
            },
            {
              q: "Travaillez-vous à Hudson, Saint-Lazare et sur l'Île-Perrot ?",
              a: "Oui. Notre territoire couvre Vaudreuil-Soulanges, l'Ouest-de-l'Île, Montréal, Laval et la Rive-Sud. Chaque municipalité voisine a son propre service d'urbanisme : on valide le dossier auprès de la bonne ville avant de déposer.",
            },
            {
              q: "Quel budget prévoir pour une rénovation ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus. L'estimation est gratuite et le budget est fixé au contrat écrit avant le début des travaux.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Licence RBQ 8306-0806-27, valide sans restriction depuis 2004, catégories 1.2 et 1.3 et sous-catégorie 12 pour les armoires et comptoirs. Responsabilité civile, couverture de chantier et cautionnement en vigueur, aucune réclamation au dossier.",
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
            "On prend l'autoroute 40, on valide la réglementation, on chiffre par écrit.",
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
          note: "Entrepreneur général licencié RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
