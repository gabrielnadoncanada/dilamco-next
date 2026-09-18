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
        variant: "split-image",
        props: {
          eyebrow: "Kirkland",
          heading:
            "Entrepreneur général à Kirkland, rénovation majeure et agrandissement",
          description:
            "Grands terrains, maisons détachées, propriétaires qui agrandissent plutôt que de déménager. Licence RBQ 8306-0806-27, catégories 1.2 et 1.3.",
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
          badges: ["Depuis 2004", "Agrandissement", "Assuré"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à Kirkland",
          },
          caption: "De part et d'autre de l'autoroute 40",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Kirkland",
          description:
            "Moins de 20 000 résidents sur 9,6 km2, une ville coupée en deux par l'autoroute 40. Parc résidentiel homogène, terrains généreux.",
          cards: [
            {
              title: "Grands terrains, maisons détachées",
              description:
                "Environ 2 000 habitants au kilomètre carré : agrandissement latéral ou arrière réellement faisable, accès de chantier confortable.",
            },
            {
              title: "Une génération arrivée à échéance",
              description:
                "Maisons des années 1970 : toiture, fenêtres, panneau électrique, isolation d'entretoit et salles de bain d'origine, tous en même temps.",
            },
            {
              title: "Permis et certificat d'excavation",
              description:
                "Service de l'aménagement urbain, hôtel de ville du 17200, boulevard Hymus. Portail Gestion des permis en ligne.",
            },
          ],
          columns: "1",
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
                "Rallonge, ajout d'étage ou solarium : fondation, structure, toiture et raccord.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison de Kirkland",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation majeure",
              href: "/services/renovation",
              description:
                "Reprendre une maison des années 1970 en une seule séquence plutôt qu'en dix ans.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rénovation majeure d'une maison de Kirkland",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur à ouvrir analysé et poutre dimensionnée avant la démolition.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine ouverte sur les aires de vie",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Deux ou trois salles de bain séquencées pour en garder une fonctionnelle.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Bonne hauteur libre : cinéma maison, bureau, salle d'entraînement ou chambre d'invités.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Isolation"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un agrandissement met en jeu sept métiers",
          intro:
            "Excavation, fondation, structure, toiture, enveloppe, mécanique, finition. Sans responsable unique, sept calendriers se contredisent.",
          badges: ["Depuis 2004", "5,0 sur Google", "Assuré"],
          cardTitle: "Ce qui est vérifiable",
          items: [
            "Licence RBQ 8306-0806-27 depuis le 7 septembre 2004",
            "Catégories entrepreneur général 1.2 et 1.3",
            "Aucune réclamation au dossier de licence",
            "Responsabilité civile et couverture chantier",
            "Permis et certificat d'excavation obtenus séparément",
            "Un seul contrat, un seul interlocuteur",
          ],
          actions: [
            {
              label: "Voir l'agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Villes voisines desservies",
          columns: "3",
          items: [
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
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
              q: "Faut-il un permis pour rénover à Kirkland ?",
              a: "Oui, dans la plupart des cas. La ville demande de la consulter avant des rénovations intérieures ou extérieures et délivre un permis de construction ou un certificat d'autorisation. Nous montons le dossier dans le cadre du mandat.",
            },
            {
              q: "Comment se dépose une demande de permis ?",
              a: "Par le portail Gestion des permis en ligne, qui permet de suivre l'état du dossier et souvent de payer sans se déplacer. Ou en personne à l'hôtel de ville, au 17200, boulevard Hymus.",
            },
            {
              q: "Un agrandissement exige-t-il un certificat d'excavation ?",
              a: "Kirkland traite les travaux d'excavation comme une demande distincte du permis de construction. Pour un agrandissement avec fondation, il faut donc les deux. Nous les prévoyons à l'échéancier.",
            },
            {
              q: "Peut-on agrandir sur un terrain de Kirkland ?",
              a: "Souvent oui : les terrains y sont plus grands que la moyenne de l'Ouest-de-l'Île. Ce qui décide, ce sont les marges de recul, l'occupation du sol et les normes de votre zone. Faisabilité validée avant les frais de plans.",
            },
            {
              q: "Combien coûte une rénovation majeure ?",
              a: "Nos mandats démarrent autour de 25 000 $ et une cuisine complète se situe entre 35 000 $ et 50 000 $. Un agrandissement avec fondation se situe plus haut. Estimation gratuite, prix ferme à la soumission.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maisons neuves, le plan de garantie GCR ne s'applique donc pas.",
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
          intro:
            "On relève la maison et le terrain, on valide la faisabilité, on revient avec un prix.",
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
          note: "Dilamco · Entrepreneur général RBQ 8306-0806-27 · Ouest-de-l'Île",
        },
      },
    },
  ],
};
