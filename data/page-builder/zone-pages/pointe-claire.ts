// Page zone : Pointe-Claire.
// Sources consultées le 2026-09-18 :
// - Ville de Pointe-Claire, « Comptoir urbanisme » (Service d'urbanisme, hôtel de ville,
//   451, boul. Saint-Jean ; 514 630-1206 ; urbanisme@pointe-claire.ca) :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/lieux-et-secteurs-de-pointe-claire/trouvez-un-lieu/hotel-de-ville/comptoir-urbanisme
// - Ville de Pointe-Claire, « Plans d'implantation et d'intégration architecturale (PIIA) » :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/plan-durbanisme-et-zonage/plans-dimplantation-et-dintegration-architecturale-piia
// - Ville de Pointe-Claire, règlement sur les PIIA PC-2787 (codification 2024-12-10) :
//   https://www.pointe-claire.ca/assets/images/Documents/pc-2787_piia_codif_2024-12-10.pdf
// - Ville de Pointe-Claire, règlement de zonage PC-2775 (codification 2024-12-10) :
//   https://www.pointe-claire.ca/assets/images/Documents/pc-2775_zonage_codif_2024-12-10.pdf
// - Ville de Pointe-Claire, « Comment obtenir un permis de construction » (2025) :
//   https://www.pointe-claire.ca/assets/images/Documents/pro_permis_construire-r_fr_2025.pdf
// - Ville de Pointe-Claire, carte interactive et districts (Cedar/Le Village, Lakeside, Valois,
//   Cedar Park Heights, Lakeside Heights, Seigneurie, Northview, Oneida) :
//   https://www.pointe-claire.ca/territoire-et-urbanisme/lieux-et-secteurs-de-pointe-claire/carte-interactive
// - Wikipédia, « Pointe-Claire » (33 488 hab. en 2021, 34,7 km2, origines au XVIIe siècle,
//   municipalité en 1854, ville en 1911, chemins de fer 1853 et 1887, moulin et église
//   Saint-Joachim) : https://fr.wikipedia.org/wiki/Pointe-Claire

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePointeClairePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Pointe-Claire",
    description:
      "Entrepreneur général licencié RBQ à Pointe-Claire : rénovation, salle de bain, cuisine, agrandissement. Dossiers PIIA du Village et des secteurs anciens.",
    path: "/zones/pointe-claire",
    ogAlt: "Rénovation résidentielle à Pointe-Claire par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Pointe-Claire", url: SITE.url + "/zones/pointe-claire" },
  ],
  service: {
    name: "Entrepreneur général à Pointe-Claire",
    description:
      "Rénovation résidentielle, agrandissement et transformation à Pointe-Claire, incluant les secteurs assujettis au règlement sur les PIIA, par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/pointe-claire",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Pointe-Claire",
      "Village de Pointe-Claire",
      "Valois",
      "Cedar Park",
      "Lakeside",
      "Northview",
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
          eyebrow: "Dilamco - Pointe-Claire",
          heading:
            "Entrepreneur général à Pointe-Claire : rénover dans une ville où l'âge des maisons change tout",
          description:
            "Pointe-Claire est l'une des plus vieilles municipalités de l'Ouest-de-l'Île : ses origines remontent au XVIIe siècle, elle devient municipalité en 1854 et ville en 1911. Résultat, on y rénove aussi bien une maison de villégiature du chemin du Bord-du-Lac qu'un bungalow d'après-guerre de Cedar Park ou un condo récent près du boulevard Saint-Jean. Chaque cas a ses règles. Licence RBQ 8306-0806-27, valide depuis 2004.",
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
          badges: [
            "RBQ 8306-0806-27",
            "Dossiers PIIA",
            "Pointe-Claire",
            "Assuré",
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Rénovation de salle de bain dans une maison de Pointe-Claire",
          },
          caption:
            "Du Village au boulevard Saint-Jean - Ouest-de-l'Île",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Pointe-Claire",
          description:
            "Environ 33 500 résidents sur 34,7 km2, bordés par le lac Saint-Louis. L'arrivée du chemin de fer en 1853, puis en 1887, a fait de Pointe-Claire un lieu de villégiature avant d'en faire une banlieue. Cette double histoire explique pourquoi deux maisons distantes de huit rues peuvent relever de logiques de chantier complètement différentes.",
          cards: [
            {
              title: "Sept quartiers, trois époques de construction",
              description:
                "La ville est divisée en districts qui correspondent à des quartiers réels : Cedar/Le Village, Lakeside, Valois, Cedar Park Heights, Lakeside Heights, Seigneurie, Northview et Oneida. Le long du chemin du Bord-du-Lac—Lakeshore et dans le Village, on trouve des maisons anciennes et d'anciennes résidences de villégiature converties, souvent avec des fondations de pierre, des planchers hors niveau et des systèmes ajoutés par couches successives. Valois, ancien village fusionné à Pointe-Claire en 1911, mélange les époques. Cedar Park Heights et Northview sont plus typiquement des quartiers d'après-guerre : bungalows, split-levels et cottages des années 1950 à 1970. Lakeside compte aussi des immeubles en hauteur et des condos.",
            },
            {
              title: "Le PIIA : la contrainte que beaucoup découvrent trop tard",
              description:
                "Certains secteurs de Pointe-Claire sont assujettis au règlement sur les plans d'implantation et d'intégration architecturale (PC-2787), conçu notamment pour la protection des bâtiments d'intérêt patrimonial et des secteurs anciens. La ville a aussi cité son noyau institutionnel comme site patrimonial (règlement PC-2808) et adopté un programme particulier d'urbanisme pour le secteur du Village en 2016. Concrètement : un projet assujetti au PIIA fait l'objet d'une évaluation qualitative et d'un délai de traitement plus long qu'une demande de permis ordinaire. Ce n'est pas un obstacle, mais ça doit figurer à l'échéancier dès le départ.",
            },
            {
              title: "Un service d'urbanisme accessible, un dossier à monter sérieusement",
              description:
                "Le Service d'urbanisme se trouve à l'hôtel de ville, au 451, boulevard Saint-Jean, avec un comptoir d'urbanisme au premier étage pour obtenir de l'information et déposer une demande de permis résidentiel ou commercial. Tous les projets doivent respecter les règlements de zonage (PC-2775), de construction et, le cas échéant, de PIIA, en plus du Code de construction du Québec. Un dossier complet progresse beaucoup plus vite qu'un dossier auquel il manque un plan d'implantation, une élévation ou une description claire des matériaux.",
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
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on réalise à Pointe-Claire",
          intro:
            "Les mandats les plus fréquents dans une ville où le parc bâti s'étend sur plus d'un siècle, et ce qu'ils exigent selon le secteur.",
          columns: "2",
          items: [
            {
              title: "Rénovation de salle de bain",
              description:
                "Le mandat le plus courant dans les maisons d'après-guerre.",
              icon: "bath",
              bullets: [
                "Étanchéité complète refaite avant la céramique, membrane incluse.",
                "Plomberie en fonte ou en cuivre d'origine remplacée quand l'état l'exige.",
                "Ventilation ajoutée et évacuée vers l'extérieur, pas dans l'entretoit.",
              ],
            },
            {
              title: "Rénovation de cuisine",
              description:
                "Ouvrir et moderniser sans déséquilibrer une maison ancienne.",
              icon: "chefHat",
              bullets: [
                "Structure vérifiée avant toute ouverture, surtout dans les maisons antérieures aux années 1950.",
                "Électricité, plomberie et ventilation reprises pendant que les murs sont ouverts.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de maison ancienne",
              description:
                "Village, Valois et abords du chemin du Bord-du-Lac.",
              icon: "ruler",
              bullets: [
                "Relevé de l'existant avant de dessiner : niveaux, fondation, charpente.",
                "Interventions compatibles avec le caractère du bâtiment lorsque le PIIA s'applique.",
                "Reprise progressive et documentée plutôt qu'une démolition qui révèle tout en même temps.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajouter de la surface dans un cadre réglementé.",
              icon: "building2",
              bullets: [
                "Rallonge, ajout d'étage ou solarium, selon ce que permet le zonage PC-2775.",
                "Dossier monté pour le comptoir d'urbanisme du 451, boulevard Saint-Jean.",
                "Délai supplémentaire prévu à l'échéancier lorsque le projet est assujetti au PIIA.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Les sous-sols de Pointe-Claire n'ont pas tous la même histoire.",
              icon: "sofa",
              bullets: [
                "Évaluation de l'humidité et du drainage avant d'envisager la finition.",
                "Hauteur libre et fondation vérifiées dans les maisons les plus anciennes.",
                "Isolation et pare-vapeur repris selon les règles actuelles.",
              ],
            },
            {
              title: "Aménagement commercial",
              description:
                "Commerces du Village, du boulevard Saint-Jean et du boulevard Hymus.",
              icon: "layers",
              bullets: [
                "Aménagement de local, cloisons, plafonds, électricité et finition.",
                "Permis et conformité coordonnés avec le Service d'urbanisme.",
                "Travaux planifiés pour limiter l'interruption des activités.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "deroulement",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment se déroule un projet à Pointe-Claire",
          intro:
            "À Pointe-Claire, la première question n'est pas « quel style ? » mais « dans quel secteur et sous quelles règles ? ». Le reste en découle.",
          steps: [
            {
              number: "1",
              title: "Visite et diagnostic",
              description:
                "On regarde l'âge du bâtiment, la fondation, la charpente, la mécanique et l'état réel de ce qui sera touché. Dans une maison ancienne, c'est ce diagnostic qui protège le budget.",
            },
            {
              number: "2",
              title: "Vérification réglementaire",
              description:
                "On valide le zonage applicable et, surtout, si la propriété est dans un secteur assujetti au règlement sur les PIIA. Ça change le délai et le contenu du dossier.",
            },
            {
              number: "3",
              title: "Soumission détaillée",
              description:
                "Portée écrite poste par poste, avec inclusions et exclusions. Retour sous 24 à 48 heures ouvrables après la visite. Estimation gratuite.",
            },
            {
              number: "4",
              title: "Dépôt du permis",
              description:
                "Dossier déposé au comptoir d'urbanisme, à l'hôtel de ville du 451, boulevard Saint-Jean. Un dossier complet est traité plus rapidement ; un projet assujetti au PIIA demande un délai supplémentaire.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Corps de métier séquencés, protection des surfaces conservées, gestion de l'accès et du stationnement. Un seul interlocuteur du début à la fin.",
            },
            {
              number: "6",
              title: "Inspection et livraison",
              description:
                "Inspection municipale quand la nature des travaux l'exige, liste de déficiences fermée avec vous, puis livraison. Travaux garantis, détails au contrat.",
            },
          ],
        },
      },
    },
    {
      id: "pourquoi-local",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Pourquoi un entrepreneur général qui connaît le cadre local",
          intro:
            "À Pointe-Claire, le risque principal n'est pas la qualité de la pose. C'est de démarrer un projet sans avoir validé sous quelles règles il tombe.",
          items: [
            {
              title: "Le PIIA identifié avant la soumission",
              description:
                "Certains secteurs et bâtiments d'intérêt patrimonial sont assujettis au règlement PC-2787. On le vérifie au cadrage, pas après avoir commandé les matériaux.",
            },
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 et 1.3, aucune réclamation au dossier. Vérifiable au registre de la Régie du bâtiment.",
            },
            {
              title: "Des maisons anciennes traitées comme telles",
              description:
                "Une fondation de pierre, un plancher hors niveau ou une charpente de bois d'oeuvre ancienne ne se rénovent pas comme un bungalow de 1975. Le diagnostic vient avant le prix.",
            },
            {
              title: "Un seul responsable, du permis à la livraison",
              description:
                "Permis, corps de métier, échéancier, inspections et déficiences : un seul contrat et un seul interlocuteur, pas une chaîne de sous-traitants qui se renvoient la balle.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12), ce qui permet de s'adapter aux dimensions réelles d'une maison ancienne.",
            },
          ],
          actions: [
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Rénovation intérieure d'une maison de Pointe-Claire",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Entrepreneur général licencié depuis 2004, des centaines de chantiers résidentiels dans l'Ouest-de-l'Île. Responsabilité civile et chantier assurées. Budget et échéancier fixés au contrat écrit.",
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Secteurs desservis et villes voisines",
          intro:
            "On intervient dans tous les quartiers de Pointe-Claire : Cedar et le Village, Lakeside, Lakeside Heights, Valois, Cedar Park Heights, Seigneurie, Northview et Oneida, du chemin du Bord-du-Lac—Lakeshore jusqu'aux abords du boulevard Hymus, du boulevard Saint-Jean et du boulevard des Sources.",
          columns: "3",
          items: [
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité, ventilation et plomberie reprises correctement.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Moderniser sans fragiliser une maison qui a plusieurs décennies.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Sous-plancher, niveaux et raccords dans les maisons anciennes.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "La ville voisine à l'est, le long du lac Saint-Louis.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "À l'ouest, l'autre ville riveraine du Lakeshore.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Au nord, de l'autre côté du boulevard Saint-Jean.",
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
          heading: "FAQ - rénovation à Pointe-Claire",
          intro:
            "PIIA, permis, maisons anciennes et budget : ce que les propriétaires de Pointe-Claire nous demandent le plus souvent.",
          items: [
            {
              q: "Où déposer une demande de permis à Pointe-Claire ?",
              a: "Au comptoir d'urbanisme, situé au premier étage de l'hôtel de ville, au 451, boulevard Saint-Jean. Le Service d'urbanisme y renseigne les citoyens et reçoit les demandes de permis résidentiels et commerciaux. Nous montons le dossier et faisons le dépôt dans le cadre du mandat.",
            },
            {
              q: "Qu'est-ce que le PIIA et est-ce que ma propriété y est assujettie ?",
              a: "Le règlement sur les plans d'implantation et d'intégration architecturale (PC-2787) complète le zonage, le lotissement et la construction. Il s'applique à certains secteurs, notamment pour la protection des bâtiments d'intérêt patrimonial et des secteurs anciens de Pointe-Claire, et permet une évaluation qualitative du projet. Nous vérifions au cadrage si votre adresse est visée, parce que ça change le contenu du dossier et le délai.",
            },
            {
              q: "Un projet assujetti au PIIA prend-il plus de temps ?",
              a: "Oui. La ville précise qu'un projet assujetti au règlement sur les PIIA justifie un délai de traitement plus long qu'une demande ordinaire, puisqu'il fait l'objet d'une évaluation qualitative. Nous inscrivons ce délai à l'échéancier dès le départ plutôt que de le subir en cours de projet.",
            },
            {
              q: "Rénovez-vous les maisons anciennes du Village et du chemin du Bord-du-Lac ?",
              a: "Oui. Ces maisons demandent un relevé sérieux avant de dessiner : fondation, niveaux de plancher, charpente et systèmes ajoutés par couches successives. La méthode est différente d'un bungalow d'après-guerre, et le budget doit prévoir une marge pour ce qui apparaît à l'ouverture. Nous documentons chaque modification de portée par écrit.",
            },
            {
              q: "Combien coûte une rénovation à Pointe-Claire ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $. Une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus. Dans une maison ancienne, la portée réelle dépend de ce qu'on trouve derrière les finis : c'est pourquoi la visite précède toujours la soumission. L'estimation est gratuite.",
            },
            {
              q: "Peut-on rénover un condo à Pointe-Claire ?",
              a: "Oui, notamment dans les immeubles du secteur Lakeside et près du boulevard Saint-Jean. Il faut cadrer tôt les contraintes propres à la copropriété : horaires de travaux autorisés, accès par l'ascenseur, protection des aires communes, insonorisation et parties communes qu'on ne peut pas modifier. Une fois ces points clarifiés, le chantier se planifie normalement.",
            },
            {
              q: "Travaillez-vous sur les commerces du Village ou du boulevard Saint-Jean ?",
              a: "Oui. Nos catégories de licence RBQ couvrent les petits bâtiments et les bâtiments de tout genre, ce qui inclut l'aménagement de locaux commerciaux. Dans le Village, il faut prévoir les contraintes d'accès et, selon le cas, l'encadrement patrimonial applicable.",
            },
            {
              q: "Quel est votre délai de réponse ?",
              a: "Nous revenons avec une estimation sous 24 à 48 heures ouvrables après la visite. Pointe-Claire est à une vingtaine de minutes de notre base du 18625, rue Larocque, à Pierrefonds-Roxboro, ce qui nous permet de faire la visite rapidement.",
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
          heading: "Un projet de rénovation à Pointe-Claire ?",
          intro:
            "On vient voir la maison, on valide le cadre réglementaire applicable à votre secteur, puis on revient avec une portée écrite et un prix. Estimation gratuite.",
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
          note: "Dilamco - entrepreneur général licencié RBQ 8306-0806-27 - Ouest-de-l'Île",
        },
      },
    },
  ],
};
