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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "L'Île-Bizard–Sainte-Geneviève",
          heading:
            "Entrepreneur général à L'Île-Bizard–Sainte-Geneviève, rénover en tenant compte de l'eau",
          description:
            "Zones inondables, sous-sols repris après les crues de 2017 et 2019, permis d'arrondissement montés par nous.",
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
          badges: ["Après sinistre", "Zone inondable", "Assuré"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à L'Île-Bizard",
          },
          caption: "Île Mercier, vieux Sainte-Geneviève",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît de l'arrondissement",
          description:
            "Rivière des Prairies au nord, lac des Deux Montagnes à l'ouest. Grands terrains boisés, zones inondables cartographiées, noyau villageois ancien.",
          cards: [
            {
              title: "Unifamiliales sur grands terrains",
              description:
                "Lots profonds le long du chemin Cherrier et du boulevard Jacques-Bizard, arbres matures à protéger.",
            },
            {
              title: "Division de l'urbanisme et des permis",
              description:
                "Comptoir au 15795, boulevard Gouin Ouest, division au 406, montée de l'Église.",
            },
            {
              title: "Zones inondables cartographiées",
              description:
                "Grand courant 0-20 ans : construction interdite. Faible courant 20-100 ans : immunisation obligatoire.",
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
          heading: "Ce qu'on réalise sur l'île",
          items: [
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Assèchement, démolition sélective, reconstruction et dossier documenté pour l'assureur.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux préparés pour la reconstruction d'un sous-sol",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Drain français, pompe de puisard et clapet antiretour vérifiés avant la finition.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Sous-sol aménagé en salle de cinéma maison",
              },
              badges: ["Drainage"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Marges, bande riveraine et remblais validés avant de dessiner.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement de maison",
              },
              badges: ["Zonage"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouverture vers la salle à manger après validation de la structure.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Cuisine rénovée dans une maison de l'Ouest-de-l'Île",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Secteur patrimonial",
              href: "/services/renovation",
              description:
                "Maisons anciennes du boulevard Gouin Ouest, relevé de l'existant avant tout plan.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Transformation d'une maison ancienne de Sainte-Geneviève",
              },
              badges: ["Patrimoine"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qu'on vérifie avant de chiffrer",
          intro:
            "Sur l'île, deux questions décident de la portée réelle des travaux.",
          badges: ["Visite sur place", "Estimation gratuite"],
          cardTitle: "Liste de vérification en visite",
          items: [
            "Position du terrain en zone inondable",
            "Historique d'inondation ou de refoulement",
            "Niveau du plancher de sous-sol",
            "Clapet antiretour, pompe de puisard, drain français",
            "Bande riveraine et marges applicables",
            "Arbres de 10 cm de diamètre et plus",
          ],
          actions: [
            {
              label: "Planifier une visite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
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
              q: "Où demande-t-on un permis dans l'arrondissement ?",
              a: "Au comptoir des permis du 15795, boulevard Gouin Ouest, ou à la Division de l'urbanisme, des permis et des inspections, au 406, montée de l'Église. Nous montons et déposons le dossier dans le cadre du mandat.",
            },
            {
              q: "Ma maison est en zone inondable : puis-je rénover ?",
              a: "Cela dépend de la zone. En grand courant, récurrence 0-20 ans, constructions et travaux sont interdits sauf exceptions. En faible courant, 20-100 ans, toute construction non immunisée est interdite. Tous les travaux en plaine inondable exigent un permis.",
            },
            {
              q: "Faites-vous de la reconstruction après une inondation ?",
              a: "Oui. Les crues de 2017 et de 2019 ont touché plusieurs rues, dont l'île Mercier. Démolition sélective, assainissement, reprise de structure au besoin, puis reconstruction documentée pour votre dossier d'assurance.",
            },
            {
              q: "Peut-on aménager un sous-sol près de la rivière ?",
              a: "Souvent oui, mais pas comme ailleurs. Le règlement 11-010 sur la protection contre les refoulements d'égout s'applique : clapet antiretour, pompe de puisard et drain français d'abord, matériaux tolérants à l'eau ensuite.",
            },
            {
              q: "Quel budget prévoir ?",
              a: "Nos projets démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus. Estimation gratuite, budget et échéancier fixés au contrat écrit avant le début des travaux.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Licence RBQ 8306-0806-27, valide et sans restriction depuis septembre 2004, catégories 1.2 et 1.3, aucune réclamation au dossier. Responsabilité civile et couverture de chantier en vigueur, cautionnement en place.",
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
          heading: "Un projet sur l'île ?",
          intro:
            "On traverse le pont Jacques-Bizard, on relève la maison, on chiffre.",
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
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
