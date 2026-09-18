// Page zone : Beaconsfield.
// Sources consultées le 2026-09-18 :
// - Ville de Beaconsfield, « Urbanisme et permis » (conseillers en urbanisme et inspection
//   des bâtiments, 514 428-4430) : https://www.beaconsfield.ca/fr/services/urbanisme-et-permis
// - Ville de Beaconsfield, « Permis et certificats » :
//   https://www.beaconsfield.ca/fr/services/services-aux-citoyens/demande-de-permis-et-certificats
// - Ville de Beaconsfield, règlement de zonage no 720 (consolidé, 2025-08-01) :
//   https://www.beaconsfield.ca/storage/app/media/ma-ville/administration-et-finances/reglements/FR/720_consolide_fr_avec_liste_%202025-08-01_.pdf
// - Ville de Beaconsfield, « Demande d'abattage » (permis obligatoire ; exemption sous 10 cm
//   de diamètre mesuré à 1,5 m ; arbre à moins de 3 m de l'emprise d'une construction ; dépôt
//   de 500 $ pour les 5 premiers arbres + 100 $ par arbre additionnel, remboursé au
//   remplacement) : https://www.beaconsfield.ca/fr/demande-d-abattage-reglementation
// - Ville de Beaconsfield, « Contexte et histoire » (quartiers datés : Kensington Gardens 1951,
//   Forest Garden 1954, Drummond Park 1955, Edgewood Village 1960, Beacon Hill 1962,
//   Sherwood 1963 ; village Beaurepaire dès 1925 ; 1 050 hectares ; population de 990 en 1951
//   à 16 800 en 1967 ; cession de 5 % des terrains en espaces verts) :
//   https://www.beaconsfield.ca/fr/ma-ville/vivre-a-beaconsfield/contexte-et-histoire
// - Wikipédia, « Beaconsfield (Québec) » (19 277 hab. en 2021, 24,5 km2, gares Beaconsfield et
//   Beaurepaire sur la ligne Vaudreuil-Hudson) :
//   https://fr.wikipedia.org/wiki/Beaconsfield_(Québec)

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneBeaconsfieldPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Beaconsfield",
    description:
      "Entrepreneur général licencié RBQ à Beaconsfield : rénovation majeure, agrandissement, cuisine et sous-sol, avec zonage 720 et permis d'abattage.",
    path: "/zones/beaconsfield",
    ogAlt: "Rénovation résidentielle à Beaconsfield par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Beaconsfield", url: SITE.url + "/zones/beaconsfield" },
  ],
  service: {
    name: "Entrepreneur général à Beaconsfield",
    description:
      "Rénovation résidentielle majeure, agrandissement, cuisine, salle de bain et sous-sol à Beaconsfield, par un entrepreneur général licencié RBQ de l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/beaconsfield",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Beaconsfield",
      "Beaurepaire",
      "Kensington Gardens",
      "Forest Garden",
      "Drummond Park",
      "Beacon Hill",
      "Sherwood",
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
          eyebrow: "Beaconsfield",
          heading:
            "Entrepreneur général à Beaconsfield, rénovation majeure et agrandissement",
          description:
            "Des maisons bâties de 1951 à 1963, à reprendre au complet, sur des terrains où chaque arbre est réglementé.",
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
          badges: ["Rénovation majeure", "Agrandissement", "Assuré"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Rénovation intérieure d'une maison de Beaconsfield",
          },
          caption: "Beaurepaire, Beacon Hill, Sherwood, Lakeshore",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Beaconsfield",
          description:
            "Ville bâtie en quinze ans, de 990 résidents en 1951 à 16 800 en 1967. Terrains boisés, canopée réglementée, maisons de soixante à soixante-quinze ans.",
          cards: [
            {
              title: "Des maisons de 1951 à 1963",
              description:
                "Kensington Gardens 1951, Forest Garden 1954, Drummond Park 1955, Beacon Hill 1962, Sherwood 1963.",
            },
            {
              title: "Urbanisme et permis de Beaconsfield",
              description:
                "Les conseillers en urbanisme et inspection des bâtiments valident si le projet exige un permis.",
            },
            {
              title: "La canopée est réglementée",
              description:
                "Aucun arbre abattu sans permis, remplacement obligatoire, implantation dictée par le règlement de zonage 720.",
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
          heading: "Ce qu'on réalise à Beaconsfield",
          items: [
            {
              title: "Rénovation majeure",
              href: "/services/renovation",
              description:
                "Toute la maison reprise en une seule séquence, un seul échéancier écrit.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Rénovation majeure d'une maison des années 1950",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Mur porteur analysé et poutre dimensionnée avant la démolition.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Cuisine rénovée dans une maison de l'Ouest-de-l'Île",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane d'étanchéité complète avant la céramique, ventilation évacuée à l'extérieur.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain rénovée dans une maison de Beaconsfield",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Implantation dessinée autour des arbres à conserver, sous le zonage 720.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement à Beaconsfield",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Humidité et drainage évalués avant d'isoler et de refermer.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Isolation"],
              footerCtaLabel: "Voir le sous-sol",
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
              q: "Faut-il un permis pour rénover à Beaconsfield ?",
              a: "Dans la plupart des cas, oui. Les conseillers en urbanisme et inspection des bâtiments de la Ville confirment si le projet en exige un, dès qu'on touche à la structure, à l'enveloppe ou à l'implantation. Nous montons et déposons le dossier.",
            },
            {
              q: "Puis-je abattre un arbre pour mon agrandissement ?",
              a: "Pas sans permis. Un arbre à moins de 3 m de l'emprise d'une construction projetée peut être abattu, mais seulement si celle-ci ne peut pas être implantée ailleurs. Aucune autorisation sous 10 cm de diamètre, mesuré à 1,5 m du sol.",
            },
            {
              q: "Combien coûte le certificat d'abattage ?",
              a: "Un dépôt de 500 $ pour les cinq premiers arbres, plus 100 $ par arbre additionnel. Il est remboursé une fois le remplacement effectué selon les conditions du règlement de zonage 720.",
            },
            {
              q: "Vaut-il mieux rénover par étapes ?",
              a: "Rarement, quand plusieurs systèmes arrivent à échéance ensemble. Chaque petit chantier repaie la mobilisation, la protection des lieux et la finition. Une seule séquence coûte généralement moins cher. Le projet peut être découpé en phases contractuelles.",
            },
            {
              q: "Combien coûte une rénovation à Beaconsfield ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus. Une rénovation majeure ou un agrandissement dépasse cet ordre de grandeur. Estimation gratuite.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Licence RBQ 8306-0806-27, valide sans restriction depuis 2004, catégories 1.2 et 1.3, aucune réclamation au dossier. Responsabilité civile et couverture de chantier en vigueur. Nous ne construisons pas de maisons neuves, le plan GCR ne s'applique donc pas.",
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
          heading: "Un projet à Beaconsfield ?",
          intro:
            "On relève la maison et le terrain, puis on chiffre. Estimation gratuite.",
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
          note: "Licence RBQ 8306-0806-27 · Ouest-de-l'Île",
        },
      },
    },
  ],
};
