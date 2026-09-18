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
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Beaconsfield",
          description:
            "Des maisons de 1951 à 1963 sur des terrains boisés où chaque arbre relève d'un règlement.",
          actions: [
            {
              label: "Soumission gratuite",
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
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Intérieur rénové d'une maison de Beaconsfield",
          },
          facts: [
            { label: "Notre base", value: "Pierrefonds-Roxboro, vingt-cinq minutes" },
            { label: "Permis", value: "Service de l'urbanisme, 514 428-4430" },
            { label: "Bâti", value: "Maisons de 1951 à 1963, terrains boisés" },
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
          heading: "Une ville bâtie en quinze ans",
          intro:
            "De 990 résidents en 1951 à 16 800 en 1967, sur 1 050 hectares dont 5 % ont été cédés en espaces verts.",
          rows: [
            {
              label: "Quartiers datés",
              value: "Kensington Gardens 1951, Drummond Park 1955, Sherwood 1963",
            },
            {
              label: "Village d'origine",
              value: "Beaurepaire, habité dès 1925, près de la gare",
            },
            {
              label: "Zonage",
              value: "Règlement 720, consolidé au 1er août 2025",
            },
            {
              label: "Abattage",
              value: "Permis exigé, remplacement obligatoire, dépôt remboursable",
            },
            {
              label: "Projets fréquents",
              value: "Reprise complète, cuisine, salle de bain, rallonge",
            },
            {
              label: "Temps de route",
              value: "Vingt-cinq minutes par l'autoroute 40",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
            alt: "Cuisine refaite dans une maison de Beaconsfield",
          },
          note: "Sources : Ville de Beaconsfield, Wikipédia. Vérifié le 2026-09-18.",
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
                "Une maison de 1955 reprise au complet dans une seule séquence",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Rénovation majeure d'une maison de Beaconsfield",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Implantation dessinée autour des arbres que le règlement 720 protège",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement sur un terrain boisé",
              },
              badges: ["Abattage"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Ventilation sortie dehors, pas dans l'entretoit d'un bungalow de Beacon Hill",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain rénovée dans une maison de Beacon Hill",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
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
          heading: "Villes desservies autour de Beaconsfield",
          columns: "3",
          items: [
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Dorval", href: "/zones/dorval" },
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
              q: "Puis-je abattre un arbre pour agrandir à Beaconsfield ?",
              a: "Seulement avec un permis. Un arbre situé à moins de trois mètres de l'emprise d'une construction projetée peut être abattu, mais uniquement si le bâtiment ne peut pas être implanté ailleurs.",
            },
            {
              q: "Combien coûte le certificat d'abattage à Beaconsfield ?",
              a: "Un dépôt de 500 $ couvre les cinq premiers arbres, puis 100 $ par arbre supplémentaire. La Ville le rembourse une fois le remplacement réalisé selon les conditions du règlement.",
            },
            {
              q: "Le règlement de zonage 720 limite-t-il ma rallonge ?",
              a: "Il fixe l'implantation, les marges et les hauteurs, dans sa version consolidée du 1er août 2025. Les conseillers en urbanisme confirment ce que permet votre zone avant qu'on dessine.",
            },
            {
              q: "Vaut-il mieux rénover par étapes à Beaconsfield ?",
              a: "Rarement. Dans les quartiers bâtis entre 1951 et 1963, toiture, fenêtres, plomberie et électricité arrivent à échéance ensemble. Une seule séquence évite de repayer chaque fois mobilisation et protection des lieux.",
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
          heading: "Votre maison de Beaconsfield",
          intro: "Terrain, arbres et bâtiment relevés avant le chiffrage.",
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
          note: "Dilamco · permis et abattage gérés à Beaconsfield",
        },
      },
    },
  ],
};
