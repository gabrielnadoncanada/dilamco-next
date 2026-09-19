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
            "Rénovation, sous-sol et reconstruction après inondation pour les maisons de l'île Bizard et de Sainte-Geneviève.",
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
              value: "Pierrefonds-Roxboro, à dix minutes par le pont",
            },
            {
              label: "Où demander le permis",
              value: "Comptoir des permis, 15795, boulevard Gouin Ouest",
            },
            {
              label: "Type de maisons",
              value: "Des unifamiliales sur grands lots et un village de 1845",
            },
            {
              label: "Premier retour",
              value: "On vous revient en 24 à 48 heures ouvrables",
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
          heading: "Ce qu'il faut savoir avant de rénover sur l'île",
          intro:
            "La rivière au nord, le lac à l'ouest, et une carte des zones inondables qui décide du projet.",
          rows: [
            {
              label: "Risque local",
              value:
                "Les crues de 2017 et de 2019 ont submergé l'île Mercier et forcé des évacuations.",
            },
            {
              label: "Quand un permis est exigé",
              value:
                "En zone inondable, tous les travaux demandent un permis, sans exception.",
            },
            {
              label: "Ce que le règlement impose",
              value:
                "La maison doit être protégée contre les refoulements d'égout avant d'être finie.",
            },
            {
              label: "Quartiers",
              value:
                "Les unifamiliales s'alignent sur des lots profonds, chemin Cherrier et boulevard Jacques-Bizard.",
            },
            {
              label: "Projets courants",
              value:
                "Reprendre un sous-sol, agrandir, remettre en état une maison ancienne du boulevard Gouin.",
            },
            {
              label: "Depuis notre base",
              value:
                "On traverse le pont Jacques-Bizard, puis on prend la montée de l'Église.",
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
          heading: "Nos services sur l'île Bizard",
          items: [
            {
              title: "Reprise de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On revoit le drain, le clapet et la pompe avant de refermer les murs",
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
                "On remet en état les maisons touchées par la crue autour de l'île Mercier",
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
                "On vérifie la bande riveraine, les marges et les remblais avant de dessiner",
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
          heading: "Villes voisines desservies",
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
              q: "Où dépose-t-on une demande de permis sur l'île Bizard ?",
              a: "Au comptoir des permis du 15795, boulevard Gouin Ouest, ou à la Division de l'urbanisme, des permis et des inspections, 406, montée de l'Église, 514 620-6607. Nous montons le dossier et nous le déposons.",
            },
            {
              q: "Puis-je rénover si ma maison est en zone inondable ?",
              a: "Cela dépend de la zone. Dans la plus exposée, les travaux sont interdits sauf les exceptions prévues au règlement. Dans l'autre, la construction doit être protégée contre l'eau. Nous validons l'adresse avant de dessiner.",
            },
            {
              q: "Que faut-il prévoir pour un sous-sol à Sainte-Geneviève ?",
              a: "La maison doit être protégée contre les refoulements d'égout. Le clapet antiretour, la pompe et le drain passent avant la finition, et le bas des murs reçoit des matériaux qui encaissent une remontée d'eau.",
            },
            {
              q: "Peut-on transformer une maison du vieux Sainte-Geneviève ?",
              a: "Oui, à condition de relever l'existant d'abord. Le cœur du village est reconnu comme un ensemble d'intérêt, autour de l'église de 1843-1845 et de la maison D'Ailleboust-De-Manthet, au 15886, boulevard Gouin Ouest.",
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
          heading: "Un projet sur l'île Bizard ou à Sainte-Geneviève ?",
          intro:
            "On traverse le pont, on relève la maison et on vous remet un prix.",
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
