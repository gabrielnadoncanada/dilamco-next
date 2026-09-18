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

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Kirkland — rénovation",
    description:
      "Entrepreneur général licencié RBQ à Kirkland : rénovation complète, agrandissement, cuisine et sous-sol sur les grands terrains de l'Ouest-de-l'Île.",
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
            "Grands terrains, maisons détachées, propriétaires qui choisissent d'agrandir plutôt que de déménager.",
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
            { label: "Notre base", value: "Pierrefonds-Roxboro, quinze minutes" },
            { label: "Permis", value: "Aménagement urbain, 17200 boul. Hymus" },
            { label: "Bâti", value: "Unifamiliales détachées, 1965 à 1985" },
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
          heading: "Une ville coupée par l'autoroute 40",
          intro:
            "Moins de vingt mille résidents sur 9,6 kilomètres carrés, un parc industriel de chaque côté de la Transcanadienne.",
          rows: [
            {
              label: "Densité",
              value: "Environ 2 000 habitants au kilomètre carré",
            },
            {
              label: "Excavation",
              value: "Certificat distinct du permis de construction",
            },
            {
              label: "Dépôt en ligne",
              value: "Portail Gestion des permis, suivi et paiement",
            },
            {
              label: "Ce qui tranche",
              value: "Recul, occupation du sol et normes de votre zone",
            },
            {
              label: "Projets fréquents",
              value: "Rallonge latérale, ajout d'étage, solarium, cuisine",
            },
            {
              label: "Temps de route",
              value: "Quinze minutes par le boulevard Saint-Charles",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un agrandissement sur un terrain de Kirkland",
          },
          note: "Sources : Ville de Kirkland, Wikipédia, recensement 2021. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise à Kirkland",
          items: [
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Le terrain permet souvent la rallonge latérale, marges de recul validées",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Chantier d'agrandissement dans une rue de Kirkland",
              },
              badges: ["Excavation"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Rénovation majeure",
              href: "/services/renovation",
              description:
                "Toiture, fenêtres, panneau et salles de bain arrivent à échéance ensemble",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Rénovation complète d'une maison de Kirkland",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Maisons des années 1970 rouvertes sur les aires de vie",
              image: {
                src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
                alt: "Cuisine ouverte dans une maison détachée de Kirkland",
              },
              badges: ["Structure"],
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
          heading: "Kirkland et ses voisines",
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
          heading: "Questions fréquentes",
          items: [
            {
              q: "Comment dépose-t-on une demande de permis à Kirkland ?",
              a: "Par le portail Gestion des permis en ligne, qui affiche l'état du dossier et permet souvent de payer à distance. Sinon en personne au 17200, boulevard Hymus. Nous montons le dossier pour vous.",
            },
            {
              q: "Un agrandissement à Kirkland exige-t-il un certificat d'excavation ?",
              a: "Oui. La ville traite l'excavation comme une demande séparée du permis de construction. Pour une fondation neuve, il faut donc les deux autorisations, inscrites à l'échéancier dès le départ.",
            },
            {
              q: "Peut-on vraiment agrandir sur un terrain de Kirkland ?",
              a: "Souvent. Avec environ deux mille habitants au kilomètre carré, les terrains restent larges. Ce sont les marges de recul et l'occupation du sol de votre zone qui tranchent, validées avant les frais de plans.",
            },
            {
              q: "Combien coûte de reprendre une maison de Kirkland au complet ?",
              a: "Plus que nos mandats d'entrée, qui démarrent vers 25 000 $. Reprendre toiture, fenêtres, panneau et salles de bain dans une même séquence se chiffre en dizaines de milliers. Estimation gratuite.",
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
          heading: "Un projet à Kirkland ?",
          intro: "On valide la faisabilité avant de parler de prix.",
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
          note: "Dilamco · Ouest-de-l'Île · chantiers de Kirkland",
        },
      },
    },
  ],
};
