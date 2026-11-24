// Page zone : Kirkland.
// Sources consultées le 2026-09-18 :
// - Ville de Kirkland, « Aménagement urbain et environnement » (service responsable des permis
//   de construction, certificats d'autorisation et inspections ; hôtel de ville, 17200 boul.
//   Hymus ; 514 694-4100 ; urbanisme@ville.kirkland.qc.ca) :
//   https://www.ville.kirkland.qc.ca/portrait-municipal/services-municipaux/amenagement-urbain
// - Ville de Kirkland, « Rénovations domiciliaires » (permis ou certificat requis pour la
//   plupart des rénovations intérieures et extérieures) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/renovations-domiciliaires
// - Ville de Kirkland, « Faire une demande de permis » (portail Gestion des permis en ligne) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/demande-de-permis
// - Ville de Kirkland, « Travaux d'excavation » (certificat distinct) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/travaux-d-excavation
// - Ville de Kirkland, « Entrepreneurs » : https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/entrepreneurs
// - Wikipédia, « Kirkland (Québec) » (19 413 hab. en 2021, 9,6 km2, constituée en 1961,
//   reconstituée le 1er janvier 2006, ville coupée en deux par l'autoroute Transcanadienne,
//   parc industriel de part et d'autre de l'A-40, huit districts) :
//   https://fr.wikipedia.org/wiki/Kirkland_(Québec)
// Permis d'agrandissement (consulté le 2026-11-24) :
// - Règlement GEN-2026-51 sur les tarifs (en vigueur le 2025-12-05, version anglaise) :
//   extension, maison unifamiliale, 8 $/1 000 $ (min. 50 $) ; étude PIIA d'un agrandissement 400 $ :
//   https://www.ville.kirkland.qc.ca/client_file/upload/Avis%20publics%202025/GEN-2026-51_EN.pdf
// - Règlement PIIA-2022-55, art. 3(4) (façade avant modifiée ou superficie > 25 % de la moyenne
//   des bâtiments résidentiels à moins de 100 m) et art. 19 (avis du CCU à sa première réunion
//   après 60 jours) :
//   https://www.ville.kirkland.qc.ca/client_file/upload/document/PIIA-2022-55%20(FR)%20Version%20administrative.pdf
// - « Solariums / Agrandissement » : https://www.ville.kirkland.qc.ca/solarium---building-extension

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement et rénovation à Kirkland",
    description:
      "Agrandissement de maison, salle de bain, cuisine et sous-sol à Kirkland. Entrepreneur en rénovation licencié RBQ : permis et chantier gérés pour vous.",
    path: "/zones/kirkland",
    ogAlt: "Rénovation résidentielle à Kirkland par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Kirkland", url: SITE.url + "/zones/kirkland" },
  ],
  service: {
    name: "Entrepreneur général à Kirkland",
    description:
      "Rénovation résidentielle, agrandissement, cuisine, salle de bain et sous-sol à Kirkland, par un entrepreneur général licencié RBQ établi dans l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/kirkland",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Kirkland",
      "Timberlea",
      "Boul. Hymus",
      "Boul. Saint-Charles",
      "Boul. Brunswick",
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
          heading: "Kirkland",
          description:
            "Rénovation et agrandissement pour les maisons de Kirkland, par un entrepreneur général licencié basé à quinze minutes.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir l'agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à Kirkland",
          },
          facts: [
            { label: "Notre base", value: "Pierrefonds-Roxboro, à quinze minutes d'ici" },
            {
              label: "Où demander le permis",
              value: "Service de l'aménagement urbain, 17200 boul. Hymus",
            },
            {
              label: "Type de maisons",
              value: "Des unifamiliales détachées, bâties entre 1965 et 1985",
            },
            {
              label: "Premier retour",
              value: "Nous vous rappelons en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'on sait des maisons de Kirkland",
          rows: [
            {
              label: "Taille des terrains",
              value:
                "Les terrains sont larges, ce qui laisse souvent la place pour une rallonge de plain-pied.",
            },
            {
              label: "Particularité locale",
              value:
                "Creuser une nouvelle fondation demande un certificat d'excavation en plus du permis.",
            },
            {
              label: "Projets courants",
              value:
                "Rallonge sur le côté, ajout d'un étage, solarium et ouverture de la cuisine.",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un agrandissement sur un terrain de Kirkland",
          },
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Kirkland",
          items: [
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "On ajoute une rallonge sur le côté quand les marges de recul le permettent",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Chantier d'agrandissement dans une rue de Kirkland",
              },
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Rénovation majeure",
              href: "/services/renovation",
              description:
                "On refait la toiture, les fenêtres, l'entrée électrique et les salles de bain",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Rénovation complète d'une maison de Kirkland",
              },
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On ouvre la cuisine sur le salon dans les maisons des années 1970",
              image: {
                src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
                alt: "Cuisine ouverte dans une maison détachée de Kirkland",
              },
              footerCtaLabel: "Voir la cuisine",
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
          heading: "Aussi desservies près de Kirkland",
          columns: "2",
          items: [
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
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
          heading: "Questions fréquentes à Kirkland",
          items: [
            {
              q: "Où demande-t-on un permis de rénovation à Kirkland ?",
              a: "Au Service de l'aménagement urbain, 17200, boulevard Hymus, ou en ligne sur le portail de la Ville. Nous préparons le dossier, nous le déposons et nous répondons à l'inspecteur.",
            },
            {
              q: "Faut-il un certificat d'excavation pour agrandir à Kirkland ?",
              a: "Oui, dès que la rallonge repose sur une nouvelle fondation. La Ville traite l'excavation comme une demande à part. Les deux autorisations sont prévues à l'échéancier dès le départ.",
            },
            {
              q: "Mon terrain de Kirkland permet-il vraiment une rallonge ?",
              a: "Souvent, oui, parce que les terrains d'ici sont larges. Ce sont les marges de recul et la part du terrain occupée qui décident. Nous le vérifions avant que vous payiez des plans.",
            },
            {
              q: "Combien coûte de rénover une maison de Kirkland au complet ?",
              a: "Refaire la toiture, les fenêtres, l'entrée électrique et les salles de bain dans la même séquence se compte en dizaines de milliers de dollars. Nos plus petits mandats partent vers 25 000 $.",
            },
            {
              q: "Combien coûte un permis d'agrandissement à Kirkland ?",
              a: "8 $ par tranche de 1 000 $ de travaux pour une maison unifamiliale, au moins 50 $. Si la rallonge change la façade avant ou rend la maison 25 % plus grande que la moyenne des maisons à moins de 100 m, le comité d'urbanisme doit en juger l'apparence : 400 $ d'étude, et un avis rendu seulement après 60 jours.",
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
          heading: "Un projet à Kirkland ? Parlons-en.",
          intro:
            "On vérifie d'abord ce que la Ville permet chez vous, puis on parle de prix.",
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
