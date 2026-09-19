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
            "Sous-sol, cuisine et reconstruction après dégât d'eau pour les maisons de Laval, par un entrepreneur général licencié.",
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
              value: "Pierrefonds-Roxboro, à vingt-cinq minutes par l'autoroute 13",
            },
            {
              label: "Où demander le permis",
              value: "Service de l'urbanisme, 1333, boulevard Chomedey",
            },
            {
              label: "Type de maisons",
              value: "Des bungalows de 1960-1970, sur fondations de blocs",
            },
            {
              label: "Premier retour",
              value: "Un retour d'appel en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'on sait des maisons de Laval",
          rows: [
            {
              label: "Âge des quartiers",
              value:
                "Chomedey et Laval-des-Rapides datent surtout de 1960-1970, Duvernay et Vimont de 1980-1990.",
            },
            {
              label: "Quel permis demander",
              value:
                "La Ville sépare la rénovation intérieure et la rénovation extérieure en deux permis.",
            },
            {
              label: "Comment déposer la demande",
              value:
                "En ligne, avec un suivi dans Mon dossier, et le permis arrive ensuite par courriel.",
            },
            {
              label: "Risque local",
              value:
                "La rivière a inondé des rues de Laval-Ouest, de Fabreville et de Sainte-Dorothée en 2017.",
            },
            {
              label: "Ce que la Ville vérifie",
              value:
                "En zone inondable, elle compare votre terrain aux cotes de crue inscrites au règlement de zonage.",
            },
            {
              label: "Projets courants",
              value:
                "Finir un sous-sol, ouvrir une cuisine fermée, remettre en état après un dégât d'eau.",
            },
            {
              label: "Depuis notre base",
              value:
                "Pont Louis-Bisson, puis l'autoroute 440 ou le boulevard Saint-Martin.",
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
          heading: "Nos services à Laval",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On aménage une salle familiale et une chambre sous un bungalow de Vimont",
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
                "On abat le mur d'une cuisine fermée dans un bungalow des années 1960",
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
                "On remet en état les sous-sols de Laval-Ouest après une crue de la rivière",
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
          heading: "Aussi desservies près de Laval",
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
              a: "La Ville sépare la rénovation intérieure et l'extérieure en deux permis. On choisit le bon, on dépose la demande en ligne et on suit le dossier jusqu'à l'envoi du permis par courriel.",
            },
            {
              q: "Ma maison de Laval-Ouest est en zone inondable, est-ce bloquant ?",
              a: "Pas forcément. Ces zones sont délimitées par des cotes de crue inscrites au règlement de zonage, issues d'une étude approuvée en 2014. Nous vérifions la cote de votre adresse avant de dessiner.",
            },
            {
              q: "Que faire d'un sous-sol inondé à Fabreville ou à Sainte-Dorothée ?",
              a: "On intervient une fois les lieux asséchés : démolition ciblée, assainissement, puis reconstruction. Le drain, la pompe et le clapet sont repris, et le bas des murs reçoit des matériaux qui supportent une récidive.",
            },
            {
              q: "Faut-il craindre la vermiculite dans un bungalow de Duvernay ?",
              a: "C'est à vérifier. Les combles des maisons bâties entre 1980 et 1990 en contiennent parfois. Un échantillon part au laboratoire avant qu'on ouvre le plafond, et le résultat change la méthode, pas le projet.",
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
          heading: "Une rénovation à Laval ?",
          intro:
            "Dites-nous le secteur et les travaux souhaités. On fixe la visite.",
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
        },
      },
    },
  ],
};
