// Sources locales (consultées le 2026-09-18) :
// - Ville de Laval, « Permis de rénovation ou de réparation résidentielle
//   intérieure » et « ... extérieure » (permis distincts, demande en ligne, suivi
//   dans Mon dossier, permis transmis par courriel) :
//   https://www.laval.ca/reglements-permis/trouver-mon-permis/renovation-residentielle-interieure/
//   https://www.laval.ca/reglements-permis/trouver-mon-permis/renovation-residentielle-exterieure/
// - Ville de Laval, Service de l'urbanisme, 1333, boulevard Chomedey,
//   rez-de-chaussée, Laval (Québec) H7V 3Z4 — sur rendez-vous ; formulaire
//   « Construction amélioration (PA) / PIIA » :
//   https://www.laval.ca/wp-content/uploads/2025/02/formulaire-construction-amelioration-2.pdf
// - Ville de Laval, « Zones inondables (plaines inondables) » — délimitation
//   établie par les cotes de crue inscrites au règlement de zonage, à partir
//   d'une étude de 2014 approuvée par le gouvernement du Québec :
//   https://www.laval.ca/Pages/Fr/Citoyens/zones-inondables.aspx
// - Bilan des inondations de 2017 à Laval (rues touchées à Laval-Ouest,
//   Fabreville et Sainte-Dorothée, dont le chemin du Bord-de-l'eau) :
//   https://www.ccilaval.qc.ca/wp-content/uploads/2017/05/bilan-m%C3%A9dias.pdf
// - Portrait du parc immobilier lavallois par secteur (Chomedey et
//   Laval-des-Rapides développés surtout dans les années 1960-1970, forte
//   proportion de bungalows sur fondations en blocs de béton ; Sainte-Dorothée et
//   Fabreville, mélange 1970-1980 et développements récents ; Duvernay-Vimont,
//   vague de construction 1980-1990 ; vermiculite dans les combles de cette
//   génération) : https://www.inspection-batimex.ca/inspection-batiment-laval
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Laval — rénovation",
    description:
      "Entrepreneur général RBQ à Laval : rénovation de bungalows de Chomedey, sous-sols, permis du Service de l'urbanisme, zones inondables des Mille Îles.",
    path: "/zones/laval",
    ogAlt: "Rénovation résidentielle à Laval par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "Entrepreneur général à Laval",
    description:
      "Rénovation résidentielle clé en main à Laval : cadrage, permis du Service de l'urbanisme, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/laval",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Laval",
      "Chomedey",
      "Sainte-Dorothée",
      "Laval-Ouest",
      "Fabreville",
      "Vimont",
      "Sainte-Rose",
      "Laval-des-Rapides",
      "Duvernay",
    ],
  },
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Laval",
          description:
            "Chomedey et Laval-des-Rapides datent des années 1960. Ici, le secteur annonce ce qui se cache derrière les murs.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée dans un bungalow de Chomedey",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro · 25 min par l'autoroute 13",
            },
            {
              label: "Permis",
              value: "Service de l'urbanisme, 1333, boulevard Chomedey",
            },
            {
              label: "Bâti",
              value: "Bungalows 1960-1970, fondations en blocs de béton",
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
          heading: "Laval se lit secteur par secteur",
          intro:
            "Quatre vagues de construction, des cotes de crue inscrites au zonage et deux permis distincts selon les travaux.",
          rows: [
            {
              label: "Bâti dominant",
              value: "Vague 1960-1970 à Chomedey, vague 1980-1990 à Duvernay-Vimont",
            },
            {
              label: "Permis",
              value: "Deux dossiers séparés, rénovation intérieure ou extérieure",
            },
            {
              label: "Démarche",
              value: "Demande en ligne, suivi dans Mon dossier, permis par courriel",
            },
            {
              label: "Risques locaux",
              value: "Crues de 2017 à Laval-Ouest, Fabreville et Sainte-Dorothée",
            },
            {
              label: "Zones inondables",
              value: "Cotes de crue au zonage, issues d'une étude de 2014",
            },
            {
              label: "Projets fréquents",
              value: "Sous-sol, ouverture d'une cuisine fermée, reprise après dégât d'eau",
            },
            {
              label: "Depuis notre base",
              value: "Pont Louis-Bisson, puis autoroute 440 ou boulevard Saint-Martin",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
            alt: "Sous-sol aménagé en salle de jeux dans une maison de Vimont",
          },
          note: "Sources : Ville de Laval, bilan 2017 de la CCI Laval, portrait du parc lavallois. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise dans les maisons lavalloises",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Salle familiale et chambre sous un bungalow de Vimont, conformes au Code",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Sous-sol aménagé avec coin bar dans une maison lavalloise",
              },
              badges: ["Sous-sol"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Abattre le mur d'une cuisine fermée de bungalow des années 1960",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Cuisine ouverte sur la salle à manger d'un bungalow de Laval",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reprise des sous-sols de Laval-Ouest après une crue de la rivière",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction intérieure après une inondation à Laval-Ouest",
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
          heading: "Aussi dans le secteur",
          columns: "2",
          items: [
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
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
          heading: "Questions fréquentes à Laval",
          items: [
            {
              q: "Quel permis faut-il pour rénover à Laval ?",
              a: "La Ville sépare la rénovation résidentielle intérieure et l'extérieure en deux permis. On identifie le bon au cadrage, on dépose en ligne et on suit le dossier dans Mon dossier jusqu'à l'envoi du permis par courriel.",
            },
            {
              q: "Ma maison de Laval-Ouest est en zone inondable, est-ce bloquant ?",
              a: "Pas nécessairement. Les plaines inondables lavalloises sont délimitées par les cotes de crue inscrites au règlement de zonage, issues d'une étude approuvée par le gouvernement en 2014. On vérifie la cote de l'adresse avant de dessiner.",
            },
            {
              q: "Que faire d'un sous-sol inondé à Fabreville ou à Sainte-Dorothée ?",
              a: "On intervient après l'assèchement, comme après les crues de 2017 : démolition sélective, assainissement, puis reconstruction. Drainage, pompe de puisard et clapet antiretour sont repris, et le bas de mur reçoit des matériaux qui encaissent une récidive.",
            },
            {
              q: "Faut-il craindre la vermiculite dans un bungalow de Duvernay ?",
              a: "C'est à vérifier. Les combles des maisons lavalloises de la vague 1980-1990 en contiennent parfois. Un échantillon part au laboratoire avant qu'on ouvre le plafond, et le résultat change la méthode de chantier, pas le projet.",
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
          heading: "Une rénovation à Laval, de Chomedey à Sainte-Rose",
          intro: "Dites le secteur et les travaux. On fixe la visite.",
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
          note: "Dilamco · entrepreneur général en rénovation depuis 2004 · (514) 820-0773",
        },
      },
    },
  ],
};
