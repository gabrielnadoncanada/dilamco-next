// Page zone : Rive-Sud de Montréal (Longueuil, Brossard, Saint-Lambert, Boucherville,
// Saint-Bruno-de-Montarville, Candiac, La Prairie, Châteauguay).
// Sources consultées le 2026-09-18 :
// - Ville de Longueuil, « Aménagement et urbanisme » et « Comptoir de services urbanisme »
//   (Direction de l'aménagement et de l'urbanisme ; rendez-vous obligatoire au 450 463-7311) :
//   https://www.longueuil.quebec/fr/services/amenagement-urbanisme
//   https://www.longueuil.quebec/fr/comptoir-de-services-urbanisme
// - Ville de Longueuil, portail « Permis en ligne » (dépôt, paiement et suivi 24/7) :
//   https://permisenligne.longueuil.quebec/
// - Ville de Longueuil, « Construction, rénovation, démolition » (règlements) :
//   https://www3.longueuil.quebec/fr/reglements-principaux/construction
// - Ville de Brossard, « Rénovation résidentielle — détails, types et coûts de permis »
//   (Direction de l'urbanisme, direction.urbanisme@brossard.ca) :
//   https://brossard.ca/sujets/renovation-residentielle/
//   Portail de demandes en ligne : https://brossard.edemandes.com/fr/
// - Ville de Saint-Lambert, « Patrimoine bâti » (inventaire Patri-Arch : ~250 bâtiments
//   documentés, 10 typologies résidentielles dont le King Cottage) :
//   https://www.saint-lambert.ca/fr/patrimoine-bati
// - Ville de Saint-Lambert, règlement sur les plans d'implantation et d'intégration
//   architecturale (PIIA) et formulaire de demande (Urbanisme, permis et inspection,
//   35, rue d'Aberdeen) : https://www.saint-lambert.ca/fr/reglements-urbanisme
//   https://www.saint-lambert.ca/files/upload/PIIA_formulaire-de-demande.pdf
// - Wikipédia, « Brossard (ville) » (secteurs alphabétiques issus du plan directeur des
//   années 1960, firme Beauchemin, Beaton et Lapointe) :
//   https://fr.wikipedia.org/wiki/Brossard_(ville)
// - Ville de Boucherville, « Histoire » et Société d'histoire des Îles-Percées (population
//   de 8 182 à 21 072 habitants entre 1961 et 1971, essor après le tunnel Louis-Hippolyte-
//   La Fontaine en 1967) : https://www.boucherville.ca/histoire-patrimoine/histoire-boucherville/
//   https://www.histoireboucherville.org/hello-world/
// - Répertoire du patrimoine culturel du Québec, « Site patrimonial du Vieux-Boucherville » :
//   https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=93556&type=bien
// - Ville de Candiac, plan d'urbanisme (règlement 4999) : 2 406 permis résidentiels émis
//   entre 2000 et 2010, sommet de 422 permis en 2007 ; annexion d'une partie de Saint-Philippe
//   en 2010 : https://candiac.ca/uploads/html_content/docs/Urbanisme/4999_Regl%20relatif%20au%20plan%20d%20urbanisme_GR.pdf
// - Journal Le Soleil de Châteauguay, « Zone inondable : des digues à faire reconnaitre »
//   (de 700 à 1 100 résidences potentiellement en zone inondable ; digues des boulevards
//   Salaberry Nord et D'Youville non reconnues comme ouvrages de protection) :
//   https://cybersoleil.com/zone-inondable-des-digues-a-faire-reconnaitre/
// - Transports Québec, « Autoroute 30 — partenariat public-privé » et Le Courrier du Sud :
//   tronçon Châteauguay–Vaudreuil-Dorion ouvert le 15 décembre 2012, contournement de l'île
//   par la Rive-Sud : https://www.transports.gouv.qc.ca/fr/entreprises-partenaires/entreprises-reseaux-routier/ppp/autoroute-30/Pages/autoroute-30.aspx
//   https://www.lecourrierdusud.ca/il-y-a-8-ans-lautoroute-30-entre-chateauguay-et-vaudreuil-dorion-ouvrait/
// - Wikipédia, « Pont Samuel-De Champlain » (ouverture complète à la circulation le
//   1er juillet 2019) : https://fr.wikipedia.org/wiki/Pont_Samuel-De_Champlain
// - Gouvernement du Québec, réfection majeure du pont-tunnel Louis-Hippolyte-La Fontaine
//   (travaux depuis 2022, ouverture des deux tubes reportée à l'automne 2026) :
//   https://www.quebec.ca/transports/infrastructures-projets/projets/projets-routiers/montreal/tunnel-louis-hippolyte-la-fontaine/presentation-projet
// - REM, mise en service de l'antenne Rive-Sud le 31 juillet 2023 (terminus Brossard) :
//   https://rem.info/fr/actualites/mise-en-service-du-rem

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneRiveSudPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général Rive-Sud — rénovation résidentielle",
    description:
      "Entrepreneur général licencié RBQ sur la Rive-Sud de Montréal : rénovation complète, agrandissement et reconstruction après sinistre. Soumission détaillée.",
    path: "/zones/rive-sud",
    ogAlt: "Rénovation résidentielle sur la Rive-Sud de Montréal par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Rive-Sud", url: SITE.url + "/zones/rive-sud" },
  ],
  service: {
    name: "Entrepreneur général sur la Rive-Sud de Montréal",
    description:
      "Rénovation résidentielle complète, agrandissement, transformation et reconstruction après sinistre sur la Rive-Sud de Montréal, par un entrepreneur général licencié RBQ depuis 2004.",
    url: SITE.url + "/zones/rive-sud",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Rive-Sud",
      "Longueuil",
      "Brossard",
      "Saint-Lambert",
      "Boucherville",
      "Saint-Bruno-de-Montarville",
      "Candiac",
      "La Prairie",
      "Châteauguay",
    ],
  },
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général sur la",
          heading: "Rive-Sud",
          description:
            "Huit villes, huit réglementations, un pont à traverser. On y prend les mandats d'envergure, pas les chantiers de deux jours.",
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
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Rénovation intérieure complète menée sur la Rive-Sud de Montréal",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro · 45 à 60 min",
            },
            {
              label: "Permis",
              value: "Varie par ville ; Longueuil et Brossard en ligne",
            },
            {
              label: "Bâti",
              value: "Bungalows d'après-guerre, secteurs planifiés des années 1960",
            },
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
          heading: "Huit villes, huit règlements d'urbanisme",
          intro:
            "Longueuil, Brossard, Saint-Lambert, Boucherville, Candiac, Châteauguay. Savoir lequel s'applique change la soumission.",
          rows: [
            {
              label: "Bâti dominant",
              value: "Bungalows du Vieux-Longueuil, secteurs alphabétiques de Brossard",
            },
            {
              label: "Permis",
              value: "Longueuil par Permis en ligne, Brossard par la Direction de l'urbanisme",
            },
            {
              label: "Patrimoine",
              value: "PIIA à Saint-Lambert, site patrimonial du Vieux-Boucherville",
            },
            {
              label: "Risques locaux",
              value: "Digues de Châteauguay non reconnues, jusqu'à 1 100 résidences visées",
            },
            {
              label: "Croissance",
              value: "Candiac, 2 406 permis résidentiels délivrés entre 2000 et 2010",
            },
            {
              label: "Projets fréquents",
              value: "Rénovation complète, agrandissement, reprise après dégât d'eau",
            },
            {
              label: "Depuis notre base",
              value: "Autoroute 30, pont Samuel-De Champlain ou pont-tunnel La Fontaine",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement livré dans une municipalité de la Rive-Sud",
          },
          note: "Sources : villes de Longueuil, Brossard, Saint-Lambert et Candiac, Le Soleil de Châteauguay. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les mandats qu'on prend au sud du fleuve",
          items: [
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge ou ajout d'étage sur un bungalow du Vieux-Longueuil",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Plan d'agrandissement pour un bungalow du Vieux-Longueuil",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation complète",
              href: "/services/renovation",
              description:
                "Reprendre une maison de secteur brossardois d'un bout à l'autre",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Rénovation complète d'une maison d'un secteur de Brossard",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Refoulement ou dégât d'eau à Châteauguay, reconstruction documentée",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux prêts pour une reconstruction de sous-sol à Châteauguay",
              },
              badges: ["Assurances"],
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
          heading: "Ailleurs sur notre territoire",
          columns: "2",
          items: [
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Laval",
              href: "/zones/laval",
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
          heading: "Questions fréquentes sur la Rive-Sud",
          items: [
            {
              q: "Quelles villes de la Rive-Sud couvrez-vous ?",
              a: "Longueuil et ses arrondissements du Vieux-Longueuil, de Saint-Hubert et de Greenfield Park, puis Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie et Châteauguay. Ailleurs, la réponse dépend de la portée du projet.",
            },
            {
              q: "Qui monte le dossier de permis à Longueuil ou à Brossard ?",
              a: "Nous. À Longueuil, le dossier passe par la Direction de l'aménagement et de l'urbanisme et le portail Permis en ligne, ouvert au dépôt, au paiement et au suivi. À Brossard, par la Direction de l'urbanisme et son portail de demandes.",
            },
            {
              q: "Rénover à Saint-Lambert prend-il plus de temps ?",
              a: "Plus long, surtout. Toute modification extérieure visible de la rue est assujettie au règlement sur les plans d'implantation et d'intégration architecturale, examiné par le comité consultatif d'urbanisme avant le permis. L'intérieur se modernise sans ce détour.",
            },
            {
              q: "Que change la zone inondable de Châteauguay pour un sous-sol ?",
              a: "Beaucoup. De 700 à 1 100 résidences sont potentiellement visées, et les digues des boulevards Salaberry Nord et D'Youville ne sont pas reconnues comme ouvrages de protection. Le bas de mur et le drainage se conçoivent en conséquence.",
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
          heading: "Un mandat d'envergure sur la Rive-Sud",
          intro: "Adresse, portée des travaux, échéance. On répond franchement.",
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
          note: "Déplacement chiffré dans la soumission, jamais ajouté en cours de chantier.",
        },
      },
    },
  ],
};
