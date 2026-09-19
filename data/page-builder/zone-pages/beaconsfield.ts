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
            "Rénovation majeure et agrandissement pour les maisons de Beaconsfield, sur des terrains boisés où l'abattage est réglementé.",
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
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à vingt-cinq minutes de route",
            },
            {
              label: "Où demander le permis",
              value: "Service de l'urbanisme de la Ville, 514 428-4430",
            },
            {
              label: "Type de maisons",
              value: "Des maisons de 1951 à 1963, sur des terrains boisés",
            },
            {
              label: "Premier retour",
              value: "Nous rappelons dans les 24 à 48 heures ouvrables",
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
          heading: "Ce qu'on sait des maisons de Beaconsfield",
          rows: [
            {
              label: "Âge des quartiers",
              value:
                "Kensington Gardens date de 1951, Drummond Park de 1955 et Sherwood de 1963.",
            },
            {
              label: "Village d'origine",
              value:
                "Beaurepaire, près de la gare, est habité depuis 1925 et ses maisons sont plus anciennes.",
            },
            {
              label: "Particularité locale",
              value:
                "Abattre un arbre demande un permis, un remplacement et un dépôt que la Ville rembourse ensuite.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "Le règlement de zonage dit où poser le bâtiment, quelles marges respecter et quelle hauteur ne pas dépasser.",
            },
            {
              label: "Projets courants",
              value:
                "Reprendre la maison au complet, refaire la cuisine ou la salle de bain, ajouter une rallonge.",
            },
            {
              label: "Depuis notre base",
              value: "Vingt-cinq minutes de route par l'autoroute 40.",
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
          heading: "Nos services à Beaconsfield",
          items: [
            {
              title: "Rénovation majeure",
              href: "/services/renovation",
              description:
                "On reprend une maison de 1955 au complet, dans une seule séquence de travaux",
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
                "On place la rallonge autour des arbres que le règlement de la Ville protège",
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
                "On sort la ventilation dehors plutôt que dans l'entretoit de la maison",
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
          heading: "Aussi desservies près de Beaconsfield",
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
              a: "Seulement avec un permis. Un arbre situé à moins de trois mètres de la construction projetée peut être abattu, mais uniquement si le bâtiment ne peut pas être placé ailleurs sur le terrain.",
            },
            {
              q: "Combien coûte le permis d'abattage à Beaconsfield ?",
              a: "Un dépôt de 500 $ couvre les cinq premiers arbres, puis 100 $ par arbre de plus. La Ville rembourse ce dépôt une fois les arbres remplacés selon les conditions du règlement.",
            },
            {
              q: "Le règlement de zonage limite-t-il ma rallonge à Beaconsfield ?",
              a: "Oui. Il dit où poser le bâtiment, quelles marges respecter et quelle hauteur ne pas dépasser, dans sa version du 1er août 2025. Les conseillers en urbanisme confirment ce que votre zone permet avant qu'on dessine.",
            },
            {
              q: "Vaut-il mieux rénover par étapes à Beaconsfield ?",
              a: "Rarement. Dans les quartiers bâtis entre 1951 et 1963, la toiture, les fenêtres, la plomberie et l'électricité arrivent à bout de vie en même temps. Tout faire d'un coup évite de repayer chaque fois l'installation du chantier.",
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
            "On relève le terrain, les arbres et la maison avant de donner un prix.",
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
