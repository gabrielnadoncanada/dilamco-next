// Sources locales (consultées le 2026-09-18) :
// - Ville de Montréal, « Permis et autorisations à L'Île-Bizard–Sainte-Geneviève »
//   (comptoir des permis au 15795, boulevard Gouin Ouest ; travaux exigeant un
//   permis ; « tous les travaux en plaine inondable exigent un permis » ;
//   exemptions) :
//   https://montreal.ca/articles/permis-et-autorisations-lile-bizard-sainte-genevieve-23559
// - Banque d'information 311, « L'Île-Bizard–Sainte-Geneviève – Zone à risque
//   d'inondation » (règles dérivées de la Politique de protection des rives, du
//   littoral et des plaines inondables ; zone de grand courant 0-20 ans ; zone de
//   faible courant 20-100 ans, constructions non immunisées interdites) :
//   http://www1.ville.montreal.qc.ca/banque311/content/l%E2%80%99%C3%AEle-bizard%E2%80%93sainte-genevi%C3%A8ve-%E2%80%93-zone-%C3%A0-risque-d%E2%80%99inondation
// - Ville de Montréal, « Règlements les plus courants à L'Île-Bizard–Sainte-Geneviève »
//   (Règlement sur la construction et la transformation de bâtiments 11-018 ;
//   Règlement sur la protection des bâtiments contre les refoulements d'égout 11-010 ;
//   Division de l'urbanisme, des permis et des inspections, 406, montée de l'Église,
//   514 620-6607) :
//   https://montreal.ca/articles/reglements-les-plus-courants-lile-bizard-sainte-genevieve-23548
// - Inondations de 2017 et 2019 (crue de la rivière des Prairies ; île Bizard et
//   île Mercier submergées ; évacuations préventives en 2019 ; digues de sacs de
//   sable) : https://en.wikipedia.org/wiki/2017_Quebec_floods et
//   https://www.cbc.ca/lite/story/1.5066394
// - Société patrimoine et histoire de l'île Bizard et Sainte-Geneviève (îlot
//   villageois de Sainte-Geneviève déclaré à caractère exceptionnel ; église de
//   1843-1845 de François Baillargé ; maison D'Ailleboust-De-Manthet, 15886, boul.
//   Gouin Ouest, 1845) : https://www.sphib-sg.org/patrimoine/sainte-genevieve/monuments-historiques/
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneIleBizardSainteGenevievePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à L'Île-Bizard–Sainte-Geneviève",
    description:
      "Entrepreneur général RBQ à L'Île-Bizard–Sainte-Geneviève : rénovation, sous-sol, reconstruction après inondation, permis de l'arrondissement.",
    path: "/zones/ile-bizard-sainte-genevieve",
    ogAlt: "Rénovation résidentielle à L'Île-Bizard–Sainte-Geneviève par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    {
      name: "L'Île-Bizard–Sainte-Geneviève",
      url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    },
  ],
  service: {
    name: "Entrepreneur général à L'Île-Bizard–Sainte-Geneviève",
    description:
      "Rénovation résidentielle et reconstruction après sinistre à L'Île-Bizard–Sainte-Geneviève : permis d'arrondissement, zones inondables, coordination complète par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "L'Île-Bizard–Sainte-Geneviève",
      "L'Île-Bizard",
      "Sainte-Geneviève",
      "Île Mercier",
      "Boulevard Gouin Ouest",
      "Chemin Cherrier",
      "Montée de l'Église",
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
          heading: "L'Île-Bizard–Sainte-Geneviève",
          description:
            "Deux îles, une rivière qui monte au printemps, des sous-sols repris après les crues de 2017 et 2019.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à L'Île-Bizard",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro · 10 min par le pont",
            },
            {
              label: "Permis",
              value: "Comptoir du 15795, boulevard Gouin Ouest",
            },
            {
              label: "Bâti",
              value: "Unifamiliales sur grands lots, village de 1845",
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
          heading: "Ce que l'eau impose sur l'île",
          intro:
            "Rivière des Prairies au nord, lac des Deux Montagnes à l'ouest. La carte des plaines inondables commande le projet.",
          rows: [
            {
              label: "Bâti dominant",
              value:
                "Unifamiliales sur lots profonds, chemin Cherrier et boulevard Jacques-Bizard",
            },
            {
              label: "Permis",
              value:
                "Tous les travaux en plaine inondable en exigent un, sans exception",
            },
            {
              label: "Règlements",
              value: "11-018 construction, 11-010 refoulements d'égout",
            },
            {
              label: "Risques locaux",
              value: "Crues de 2017 et 2019, île Mercier submergée, évacuations",
            },
            {
              label: "Projets fréquents",
              value: "Sous-sol repris, agrandissement, maison ancienne de Gouin Ouest",
            },
            {
              label: "Depuis notre base",
              value: "Pont Jacques-Bizard, puis montée de l'Église",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Matériaux préparés pour reprendre un sous-sol de l'île Bizard",
          },
          note: "Sources : Ville de Montréal, banque d'information 311, SPHIB-SG. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on refait sur l'île Bizard",
          items: [
            {
              title: "Reprise de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, clapet et pompe revus avant de refermer un sous-sol riverain",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Sous-sol aménagé en salle de cinéma sur l'île Bizard",
              },
              badges: ["Drainage"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reprise des maisons touchées par la crue autour de l'île Mercier",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Reconstruction intérieure après une inondation sur l'île Mercier",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Bande riveraine, marges et remblais vérifiés avant le premier croquis",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement sur un lot riverain de l'île",
              },
              badges: ["Zonage"],
              footerCtaLabel: "Voir l'agrandissement",
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
          heading: "De l'autre côté du pont",
          columns: "2",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
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
          heading: "Questions fréquentes sur l'île",
          items: [
            {
              q: "Où dépose-t-on un permis à L'Île-Bizard–Sainte-Geneviève ?",
              a: "Au comptoir des permis du 15795, boulevard Gouin Ouest, ou à la Division de l'urbanisme, des permis et des inspections, 406, montée de l'Église, 514 620-6607. On monte et on dépose le dossier.",
            },
            {
              q: "Puis-je rénover en zone de grand courant sur l'île Bizard ?",
              a: "En grand courant, récurrence de 0 à 20 ans, les constructions et travaux sont interdits sauf exceptions prévues. En faible courant, de 20 à 100 ans, toute construction non immunisée est interdite. On valide la cote avant de dessiner.",
            },
            {
              q: "Que change le règlement 11-010 pour un sous-sol de Sainte-Geneviève ?",
              a: "Il impose la protection du bâtiment contre les refoulements d'égout. Clapet antiretour, pompe de puisard et drain français passent avant la finition, et les matériaux de bas de mur doivent encaisser une récidive.",
            },
            {
              q: "Peut-on transformer une maison du vieux Sainte-Geneviève ?",
              a: "Oui, avec un relevé de l'existant d'abord. L'îlot villageois est reconnu à caractère exceptionnel, autour de l'église de 1843-1845 et de la maison D'Ailleboust-De-Manthet, au 15886, boulevard Gouin Ouest.",
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
          heading: "Un chantier à L'Île-Bizard ou à Sainte-Geneviève ?",
          intro: "On traverse le pont, on relève la maison, on chiffre.",
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
          note: "Dilamco · entrepreneur général établi à Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
