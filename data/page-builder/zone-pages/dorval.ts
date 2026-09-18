// Sources locales (consultées le 2026-09-18) :
// - Cité de Dorval, « Demande de permis et certificats » (Service de l'aménagement
//   urbain, 514 633-4084, plateforme dorval.edemandes.com, délai de 30 jours
//   ouvrables, procédure de PIIA avec approbation du conseil pour une nouvelle
//   construction ou un agrandissement résidentiel et pour le chemin du Bord-du-Lac) :
//   https://www.ville.dorval.qc.ca/fr/services/residents/demande-de-permis-et-certificats
// - Cité de Dorval, « Zonage » (interprétation du règlement de zonage,
//   Service de l'urbanisme, 514 633-4046) :
//   https://www.ville.dorval.qc.ca/fr/la-cite/page/zonage
// - Cité de Dorval, règlements en vigueur (dont RCM-60H-2024 sur les plans
//   d'aménagement d'ensemble) :
//   https://www.ville.dorval.qc.ca/fr/la-cite/administration-et-finances/reglements-en-vigueur
// - Wikipédia, « Dorval » (Village de Dorval et lac Saint-Louis au sud, aéroport
//   Montréal-Trudeau, A-20 et A-520 au nord ; centre commercial Dorval Gardens,
//   1954) : https://en.wikipedia.org/wiki/Dorval
// - Guide de quartier Dorval 2026 (Strathmore, architecture des années 1950-1960,
//   parc Surrey ; bungalows d'après-guerre entre le lac et l'autoroute 20 ; condos
//   et locatifs près de la gare de Dorval et de l'avenue Dorval) :
//   https://loaamanseur-remax.ca/articles-blogue/living-in-dorval-neighbourhood-guide
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDorvalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Dorval — rénovation",
    description:
      "Entrepreneur général licencié RBQ à Dorval : rénovation de bungalows d'après-guerre, permis de la Cité, PIIA du Bord-du-Lac, un seul responsable.",
    path: "/zones/dorval",
    ogAlt: "Rénovation résidentielle à Dorval par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Dorval", url: SITE.url + "/zones/dorval" },
  ],
  service: {
    name: "Entrepreneur général à Dorval",
    description:
      "Rénovation résidentielle clé en main à Dorval : cadrage, permis de la Cité de Dorval, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/dorval",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Dorval",
      "Village de Dorval",
      "Strathmore",
      "Pine Beach",
      "Dorval Gardens",
      "Chemin du Bord-du-Lac",
      "L'Île-Dorval",
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
          heading: "Dorval",
          description:
            "Bungalows d'après-guerre entre le lac Saint-Louis et l'autoroute 20, cottages de Strathmore au centre.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Rénovation intérieure d'une maison de Dorval",
          },
          facts: [
            { label: "Notre base", value: "Pierrefonds-Roxboro, vingt minutes de route" },
            { label: "Permis", value: "Aménagement urbain, 514 633-4084" },
            { label: "Bâti", value: "Bungalows d'après-guerre, 1950 à 1975" },
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
          heading: "La Cité de Dorval en trois bandes",
          intro:
            "Le lac au sud, la voie ferrée et l'aéroport au nord, et entre les deux un tissu résidentiel d'après-guerre.",
          rows: [
            {
              label: "Bord-du-Lac",
              value: "Bâtiments du chemin soumis à l'approbation du conseil",
            },
            {
              label: "Strathmore",
              value: "Cottages des années 1950 et 1960, parc Surrey",
            },
            {
              label: "Délai de permis",
              value: "Trente jours ouvrables, dossier complet et payé",
            },
            {
              label: "Dépôt",
              value: "Demandes déposées et suivies en ligne auprès de la Cité",
            },
            {
              label: "Règlement",
              value: "RCM-60H-2024 sur les plans d'aménagement d'ensemble",
            },
            {
              label: "Projets fréquents",
              value: "Cuisine, salle de bain, sous-sol, rénovation de condo",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
            alt: "Sous-sol aménagé dans un bungalow de Dorval",
          },
          note: "Sources : Cité de Dorval, Wikipédia, guide de quartier 2026. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise à Dorval",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Entrée électrique des bungalows d'ici souvent à remonter avant l'ouverture",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "Cuisine rénovée dans un bungalow de Dorval",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Dossier PIIA monté pour le conseil avant l'émission du permis",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement résidentiel planifié à Dorval",
              },
              badges: ["PIIA"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Hauteur libre et humidité mesurées dans les fondations de blocs",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol fini dans une maison de Dorval",
              },
              badges: ["Conformité"],
              footerCtaLabel: "Voir le sous-sol",
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
          heading: "Villes desservies près de Dorval",
          columns: "3",
          items: [
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Saint-Laurent", href: "/zones/saint-laurent" },
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
              q: "Combien de temps la Cité de Dorval prend-elle pour un permis ?",
              a: "Trente jours ouvrables à compter du moment où le dossier est complet, conforme et payé. Un document manquant relance le compte, c'est pourquoi nous préparons la demande nous-mêmes.",
            },
            {
              q: "Le PIIA s'applique-t-il à ma maison du Bord-du-Lac ?",
              a: "Probablement. À Dorval, l'approbation du conseil vise la nouvelle construction, l'agrandissement résidentiel et les bâtiments du chemin du Bord-du-Lac. Elle est planifiée au cadrage, avant de fixer les dates.",
            },
            {
              q: "Rénovez-vous les condos près de la gare de Dorval ?",
              a: "Oui. Horaires autorisés par le syndicat, accès par l'ascenseur, protection des aires communes et colonnes de plomberie partagées se règlent avant le premier jour de chantier.",
            },
            {
              q: "Combien coûte de rénover un bungalow de Dorval ?",
              a: "Tout dépend de l'entrée électrique et des murs à ouvrir. Un mandat démarre vers 25 000 $ et une cuisine complète se chiffre nettement plus haut. Visite et estimation gratuites.",
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
          heading: "Rénover à Dorval",
          intro: "On visite, on cadre la portée, on remet un prix écrit.",
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
          note: "Dilamco · permis de la Cité de Dorval préparés",
        },
      },
    },
  ],
};
