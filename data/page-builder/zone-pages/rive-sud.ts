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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Rive-Sud",
          heading: "Entrepreneur général sur la Rive-Sud de Montréal",
          description:
            "Longueuil, Brossard, Saint-Lambert, Boucherville, Candiac, Châteauguay. Mandats d'envergure : rénovation complète, agrandissement, après-sinistre.",
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
          badges: ["Licence RBQ", "Depuis 2004", "Déplacement au contrat"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement résidentiel réalisé par un entrepreneur général sur la Rive-Sud de Montréal",
          },
          caption: "Déplacement chiffré dans la soumission",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de la Rive-Sud",
          description:
            "Quatre parcs immobiliers collés les uns aux autres, huit villes, huit réglementations. Une soumission sérieuse commence par savoir laquelle s'applique.",
          cards: [
            {
              title: "Bungalows d'après-guerre",
              description:
                "Vieux-Longueuil, Greenfield Park, Saint-Hubert : dalles, solives et entrées électriques d'origine.",
            },
            {
              title: "Permis, ville par ville",
              description:
                "Longueuil : Direction de l'aménagement et de l'urbanisme, portail Permis en ligne.",
            },
            {
              title: "Patrimoine et zones inondables",
              description:
                "PIIA à Saint-Lambert, site patrimonial du Vieux-Boucherville, digues de Châteauguay.",
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
          heading: "Ce qu'on réalise sur la Rive-Sud",
          items: [
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou conversion de garage, permis municipal inclus.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement résidentiel sur la Rive-Sud de Montréal",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation intérieure complète",
              href: "/services/renovation",
              description:
                "Reprendre la maison d'un bout à l'autre plutôt que pièce par pièce.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rénovation intérieure complète coordonnée par un entrepreneur général",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau, refoulement ou incendie : reconstruction conforme et documentée.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux préparés pour une reconstruction de sous-sol",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "acces",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Parlons franchement de la distance",
          intro:
            "Notre base est à Pierrefonds-Roxboro. Le déplacement est chiffré dans la soumission, jamais ajouté en cours de chantier.",
          badges: [
            "Mandats d'envergure",
            "Déplacement au contrat",
            "Estimation gratuite",
          ],
          cardTitle: "Comment on couvre la Rive-Sud",
          items: [
            "Châteauguay, La Prairie, Candiac : par l'autoroute 30",
            "Brossard et Longueuil : pont Samuel-De Champlain",
            "Boucherville et Saint-Bruno : pont-tunnel La Fontaine",
            "Déplacement inclus, ligne visible à la soumission",
            "Mandats d'envergure, pas les chantiers de deux jours",
            "Journée complète sur place, pas des allers-retours",
          ],
          actions: [
            {
              label: "Décrire votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
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
          heading: "Questions fréquentes sur la Rive-Sud",
          items: [
            {
              q: "Travaillez-vous vraiment sur la Rive-Sud ?",
              a: "Oui, pour les mandats d'envergure : rénovation complète, agrandissement, transformation, reconstruction après sinistre. Le déplacement est chiffré dans la soumission. Pour un chantier d'une ou deux journées, un entrepreneur de votre municipalité sera mieux placé, et on vous le dira.",
            },
            {
              q: "Quelles villes de la Rive-Sud couvrez-vous ?",
              a: "Longueuil et ses arrondissements du Vieux-Longueuil, de Saint-Hubert et de Greenfield Park, puis Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie et Châteauguay. Ailleurs, la réponse dépend de la portée du projet.",
            },
            {
              q: "Qui s'occupe du permis à Longueuil ou à Brossard ?",
              a: "Nous. À Longueuil, le dossier passe par la Direction de l'aménagement et de l'urbanisme et le portail Permis en ligne, qui sert au dépôt, au paiement et au suivi. À Brossard, par la Direction de l'urbanisme. On gère les allers-retours avec l'analyste.",
            },
            {
              q: "Rénover à Saint-Lambert, est-ce plus compliqué ?",
              a: "Plus long, surtout. Toute modification extérieure visible de la rue est assujettie au règlement sur les plans d'implantation et d'intégration architecturale : la demande passe par le comité consultatif d'urbanisme avant le permis. L'intérieur se modernise librement.",
            },
            {
              q: "Combien coûte une rénovation sur la Rive-Sud ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus. Un agrandissement se chiffre après vérification du zonage et des marges. Estimation gratuite, budget fixé au contrat.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Nos catégories RBQ 1.2 et 1.3 couvrent la rénovation, la transformation, l'agrandissement, la reconstruction après sinistre et l'aménagement commercial. Nous ne construisons pas de maisons neuves et n'offrons pas de plan de garantie pour bâtiment résidentiel neuf.",
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
          heading: "Un projet d'envergure sur la Rive-Sud ?",
          intro:
            "Décrivez les travaux et l'adresse. On valide, on visite, on chiffre par écrit.",
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
          note: "Dilamco · RBQ 8306-0806-27 · Longueuil, Brossard, Saint-Lambert, Boucherville, Candiac, La Prairie, Châteauguay",
        },
      },
    },
  ],
};
