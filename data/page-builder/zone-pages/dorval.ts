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
            "Rénovation de cuisine, de salle de bain et de sous-sol pour les maisons de Dorval, par un entrepreneur général licencié.",
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
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à vingt minutes de Dorval",
            },
            {
              label: "Où demander le permis",
              value: "Service de l'aménagement urbain, 514 633-4084",
            },
            {
              label: "Type de maisons",
              value: "Des bungalows d'après-guerre bâtis de 1950 à 1975",
            },
            {
              label: "Premier retour",
              value: "Vous avez un retour en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'il faut savoir avant de rénover à Dorval",
          intro:
            "Le lac au sud, la voie ferrée et l'aéroport au nord, et des quartiers résidentiels entre les deux.",
          rows: [
            {
              label: "Délai de permis",
              value:
                "La Cité compte trente jours ouvrables une fois le dossier complet, conforme et payé.",
            },
            {
              label: "Particularité locale",
              value:
                "Le conseil municipal approuve l'apparence des agrandissements et des maisons du chemin du Bord-du-Lac.",
            },
            {
              label: "Comment déposer la demande",
              value:
                "Les demandes se déposent et se suivent en ligne, sur la plateforme de la Cité.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "Le Service de l'urbanisme interprète le zonage et dit ce que votre terrain permet vraiment.",
            },
            {
              label: "Quartiers",
              value:
                "Strathmore aligne des cottages des années 1950 et 1960, autour du parc Surrey.",
            },
            {
              label: "Projets courants",
              value:
                "Refaire la cuisine ou la salle de bain, finir un sous-sol, rénover un condo près de la gare.",
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
          heading: "Nos services à Dorval",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On remonte souvent l'entrée électrique du bungalow avant d'ouvrir la cuisine",
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
                "On monte le dossier présenté au conseil avant que le permis soit émis",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement résidentiel planifié à Dorval",
              },
              badges: ["Approbation"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On mesure la hauteur libre et l'humidité dans les fondations de blocs",
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
          heading: "Aussi desservies près de Dorval",
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
              q: "Combien de temps la Cité de Dorval prend-elle pour émettre un permis ?",
              a: "Trente jours ouvrables à partir du moment où le dossier est complet, conforme et payé. Un document manquant fait repartir le compte, c'est pourquoi nous préparons la demande nous-mêmes.",
            },
            {
              q: "Mon agrandissement doit-il être approuvé par le conseil à Dorval ?",
              a: "Probablement. Le conseil approuve l'apparence des nouvelles constructions, des agrandissements résidentiels et des bâtiments du chemin du Bord-du-Lac. Cette étape est prévue avant qu'on fixe les dates.",
            },
            {
              q: "Rénovez-vous les condos près de la gare de Dorval ?",
              a: "Oui. Les heures permises par le syndicat, l'accès par l'ascenseur, la protection des aires communes et les colonnes de plomberie partagées se règlent avant le premier jour de chantier.",
            },
            {
              q: "Combien coûte de rénover un bungalow de Dorval ?",
              a: "Tout dépend de l'entrée électrique et des murs à ouvrir. Un mandat démarre vers 25 000 $ et une cuisine complète se chiffre nettement plus haut. La visite et l'estimation sont gratuites.",
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
          heading: "Un projet à Dorval ?",
          intro:
            "On visite, on définit les travaux, puis on remet un prix écrit.",
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
