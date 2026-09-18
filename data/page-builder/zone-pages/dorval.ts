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
        variant: "split-image",
        props: {
          eyebrow: "Dorval",
          heading:
            "Entrepreneur général à Dorval, du permis à la livraison",
          description:
            "Bungalows d'après-guerre, cottages de Strathmore et maisons du Bord-du-Lac, rénovés par un seul responsable depuis 2004.",
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
          badges: ["Permis municipal", "Depuis 2004", "Assuré"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Rénovation résidentielle menée par un entrepreneur général à Dorval",
          },
          caption: "Village, Strathmore, Bord-du-Lac",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Dorval",
          description:
            "Entre le lac Saint-Louis et l'autoroute 20, un parc bâti surtout de 1950 à 1975. Trois bandes, trois types de chantiers.",
          cards: [
            {
              title: "Bungalows d'après-guerre",
              description:
                "Entrées électriques sous-dimensionnées, fondations en blocs, sous-sols à faible dégagement, murs porteurs à valider.",
            },
            {
              title: "Service de l'aménagement urbain",
              description:
                "La Cité délivre ses propres permis : 30 jours ouvrables une fois le dossier complet et payé.",
            },
            {
              title: "PIIA du Bord-du-Lac",
              description:
                "Nouvelle construction, agrandissement résidentiel et bâtiments du Bord-du-Lac passent par le conseil.",
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
          heading: "Ce qu'on réalise à Dorval",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur ouvert après validation du caractère porteur, électricité et plomberie reprises.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Cuisine sur mesure réalisée dans une maison de l'Ouest-de-l'Île",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane, drain, pente et ventilation refaits jusqu'au support.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Salle de bain rénovée avec finition soignée",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Humidité, drain français et hauteur libre vérifiés avant tout plan.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Sous-sol aménagé en salle de jeux",
              },
              badges: ["Conformité"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "PIIA et approbation du conseil préparés avant l'émission du permis.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement résidentiel à Dorval",
              },
              badges: ["PIIA"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Assèchement, démolition sélective, reconstruction et dossier documenté pour l'assureur.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Reconstruction d'une pièce après un dégât d'eau",
              },
              badges: ["Assurances"],
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
          heading: "Ce qu'on vérifie avant de chiffrer",
          intro:
            "Une soumission sérieuse repose sur des vérifications faites sur place.",
          badges: ["Visite sur place", "Estimation gratuite"],
          cardTitle: "Liste de vérification en visite",
          items: [
            "Capacité de l'entrée électrique et du panneau",
            "Position des colonnes de plomberie existantes",
            "Caractère porteur des murs à ouvrir",
            "Hauteur libre et humidité au sous-sol",
            "Historique de refoulement et état du drain",
            "Zonage, PIIA applicable et type de permis",
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
          heading: "Questions fréquentes",
          items: [
            {
              q: "Faut-il un permis pour rénover à Dorval ?",
              a: "Oui, dans la plupart des cas. La Cité de Dorval délivre ses propres permis par son Service de l'aménagement urbain, et toute rénovation fait l'objet d'une demande distincte. Nous validons la portée et déposons le dossier.",
            },
            {
              q: "Combien de temps pour obtenir le permis ?",
              a: "Trente jours ouvrables à partir du moment où le dossier est complet, conforme et payé. Un dossier incomplet relance le compte, c'est pourquoi nous préparons la demande nous-mêmes.",
            },
            {
              q: "Qu'est-ce que le PIIA et est-ce que ça me concerne ?",
              a: "C'est une approbation du conseil municipal qui s'ajoute au permis. À Dorval, elle vise notamment la nouvelle construction, l'agrandissement résidentiel et les bâtiments du chemin du Bord-du-Lac. On la planifie dès le cadrage.",
            },
            {
              q: "Quel budget prévoir ?",
              a: "Nos projets démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus, selon la portée. Estimation gratuite, budget et échéancier fixés au contrat écrit.",
            },
            {
              q: "Rénovez-vous en copropriété près de la gare de Dorval ?",
              a: "Oui. Accès, ascenseur, protection des aires communes, horaires autorisés par le syndicat et colonnes de plomberie communes sont réglés avant le premier jour de chantier.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Licence RBQ 8306-0806-27, valide et sans restriction depuis septembre 2004, catégories 1.2 et 1.3, aucune réclamation au dossier. Responsabilité civile et couverture de chantier en vigueur, cautionnement en place.",
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
            "On visite, on cadre la portée, on remet une soumission écrite.",
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
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
