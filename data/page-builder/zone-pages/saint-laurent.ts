// Sources locales (consultées le 2026-09-18) :
// - Ville de Montréal, « Soumettre une demande de permis à Saint-Laurent »
//   (services numériques, création d'un compte, permis de rénovation intérieure
//   et extérieure) :
//   https://montreal.ca/articles/soumettre-une-demande-de-permis-saint-laurent-5197
// - Ville de Montréal, « Comptoir des permis – Saint-Laurent » et Banque
//   d'information 311, « Saint-Laurent – Rénovations résidentielles » (Division
//   des permis et des inspections, 777, boulevard Marcel-Laurin, Saint-Laurent
//   H4M 2M7) : https://montreal.ca/lieux/comptoir-des-permis-saint-laurent
//   et http://www1.ville.montreal.qc.ca/banque311/node/739
// - Histoire de Saint-Laurent, Ville de Montréal (population triplée entre 1941
//   et 1951 puis doublée la décennie suivante ; projet résidentiel de 1949 de plus
//   de 480 logements ; quartier Nouveau-Saint-Laurent amorcé au début des années
//   1990 sur d'anciennes fermes et le golf Challenger, adjacent à Bois-Franc) :
//   http://www2.ville.montreal.qc.ca/arrondissements/sla/historique/fr/intro/histvsl/terri/quartdev/nouveausl/nouveausl.html
// - « Galeries Norgate » (quartier Norgate développé de 1949 au début des années
//   1950, appartements annoncés comme « Garden Community » ; centre commercial
//   inauguré le 5 décembre 1950 sur le boulevard Décarie au nord du boulevard de
//   la Côte-Vertu) : https://fr.wikipedia.org/wiki/Galeries_Norgate
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneSaintLaurentPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Saint-Laurent — rénovation",
    description:
      "Entrepreneur général RBQ à Saint-Laurent : rénovation de plex d'après-guerre, condos de Bois-Franc, permis de l'arrondissement, un seul responsable.",
    path: "/zones/saint-laurent",
    ogAlt: "Rénovation résidentielle à Saint-Laurent par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Saint-Laurent", url: SITE.url + "/zones/saint-laurent" },
  ],
  service: {
    name: "Entrepreneur général à Saint-Laurent",
    description:
      "Rénovation résidentielle à Saint-Laurent : duplex et plex d'après-guerre, bungalows, condos récents de Bois-Franc et du Nouveau-Saint-Laurent, permis d'arrondissement et coordination complète.",
    url: SITE.url + "/zones/saint-laurent",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Saint-Laurent",
      "Bois-Franc",
      "Nouveau-Saint-Laurent",
      "Norgate",
      "Côte-Vertu",
      "Chameran",
      "Vieux-Saint-Laurent",
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
          eyebrow: "Dilamco — entrepreneur général",
          heading:
            "Entrepreneur général à Saint-Laurent : rénover un parc bâti de trois époques",
          description:
            "Saint-Laurent réunit des plex d'après-guerre, des bungalows des années 1960 et des condos livrés depuis les années 1990 à Bois-Franc et dans le Nouveau-Saint-Laurent. Chaque époque a ses propres pièges de chantier. Dilamco est à une vingtaine de minutes par l'autoroute 40, avec une licence RBQ valide depuis 2004 et un seul responsable du permis à la livraison.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Saint-Laurent", "RBQ 8306-0806-27", "Depuis 2004"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée dans un plex de Saint-Laurent",
          },
          caption: "Montréal, Ouest-de-l'Île, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des bâtiments de Saint-Laurent",
          description:
            "Saint-Laurent est passé de village agricole à ville industrielle et résidentielle en quelques décennies : la population a triplé entre 1941 et 1951, puis doublé de nouveau au cours de la décennie suivante. Cette croissance a laissé un parc bâti très daté, auquel se sont ajoutés des quartiers planifiés beaucoup plus récents. On n'aborde pas les trois de la même façon.",
          cards: [
            {
              title: "Duplex et plex d'après-guerre",
              description:
                "Le quartier Norgate a été développé de 1949 au début des années 1950, avec des appartements présentés à l'époque comme une « Garden Community ». Un seul projet de 1949 comptait plus de 480 logements, entre maisons unifamiliales et immeubles locatifs. Sur ces bâtiments, on retrouve des entrées électriques d'origine, des colonnes de plomberie communes, des planchers en bois franc posés sur lambourdes et des murs mitoyens qui limitent ce qu'on peut ouvrir sans intervention structurale.",
            },
            {
              title: "Bungalows et cottages des années 1950-1970",
              description:
                "Autour des boulevards Décarie, de la Côte-Vertu et Marcel-Laurin, le tissu résidentiel s'est rempli pendant la grande croissance de l'après-guerre. Cuisines fermées, salles de bain uniques à l'étage, sous-sols à dégagement limité : ce sont les projets de rénovation les plus courants, et ils demandent presque toujours une mise à niveau électrique ou de plomberie en même temps que la finition.",
            },
            {
              title: "Bois-Franc et Nouveau-Saint-Laurent",
              description:
                "Le quartier Nouveau-Saint-Laurent s'est amorcé au début des années 1990 sur d'anciennes fermes et sur le golf Challenger, adjacent à Bois-Franc, avec une grande diversité de bâtiments résidentiels. Les constructions y sont récentes et mieux isolées, mais les projets sont encadrés par des syndicats de copropriété : accès, horaires, protection des aires communes et interventions limitées sur les parties communes.",
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
          heading: "Ce qu'on réalise à Saint-Laurent",
          intro:
            "Entrepreneur général licencié RBQ, catégories 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Résidentiel et petits locaux commerciaux, avec le permis et la coordination inclus au mandat.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Le projet le plus demandé, du plex de Norgate au condo de Bois-Franc.",
              icon: "chefHat",
              bullets: [
                "Validation du caractère porteur avant toute ouverture vers le salon.",
                "Vérification de la capacité électrique avant d'ajouter des appareils.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Reprise complète, souvent la seule salle de bain du logement.",
              icon: "bath",
              bullets: [
                "Colonnes de plomberie communes repérées avant de déplacer un drain en plex.",
                "Membrane, pente et ventilation refaites jusqu'au support.",
                "Chantier séquencé pour réduire le temps sans salle de bain.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Transformer un sous-sol de bungalow en espace de vie utilisable.",
              icon: "layers",
              bullets: [
                "Hauteur libre, poutres et colonnes mesurées avant de figer un plan.",
                "Contrôle de l'humidité, du drain et du clapet antiretour.",
                "Issue, fenestration et séparation coupe-feu conformes au Code de construction du Québec.",
              ],
            },
            {
              title: "Rénovation de plex et de logement locatif",
              description:
                "Remise à niveau d'un duplex ou d'un triplex d'après-guerre.",
              icon: "building2",
              bullets: [
                "Séquence pensée pour limiter la durée d'inoccupation d'un logement.",
                "Insonorisation entre les étages traitée pendant que les planchers sont ouverts.",
                "Tout changement d'usage ou de nombre de logements est validé au zonage avant de s'engager.",
              ],
            },
            {
              title: "Aménagement commercial léger",
              description:
                "Petits locaux commerciaux dans les artères de l'arrondissement.",
              icon: "hardHat",
              bullets: [
                "Cloisons, finitions, comptoirs et rangement coordonnés en un seul mandat.",
                "Un certificat d'occupation peut être exigé en plus du permis de transformation.",
                "Travaux planifiés hors des heures d'exploitation quand c'est possible.",
              ],
            },
            {
              title: "Planchers et finitions",
              description:
                "Reprise des planchers d'origine sur lambourdes ou sur dalle.",
              icon: "ruler",
              bullets: [
                "Nivellement du support avant la pose, surtout dans les bâtiments d'avant 1970.",
                "Transitions et seuils alignés entre les pièces rénovées.",
                "Moulures, portes et alignements repris pour un résultat continu.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "permits",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment se déroule un projet à Saint-Laurent",
          intro:
            "Saint-Laurent est un arrondissement de la Ville de Montréal. Les demandes passent par la Division des permis et des inspections, au 777, boulevard Marcel-Laurin, et par les services numériques de la Ville, qui exigent la création d'un compte.",
          steps: [
            {
              number: "1",
              title: "Visite et cadrage",
              description:
                "Relevé du logement ou du bâtiment, vérification de la structure, de l'électricité et de la plomberie existantes, et clarification de la portée souhaitée.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions, échéancier et budget écrits. Retour sous 24 à 48 heures ouvrables après la visite.",
            },
            {
              number: "3",
              title: "Vérification du zonage",
              description:
                "Usage, nombre de logements et transformations extérieures sont validés avant le dépôt, surtout sur un plex ou un local commercial.",
            },
            {
              number: "4",
              title: "Demande de permis",
              description:
                "Dossier déposé auprès de la Division des permis et des inspections, en ligne ou au comptoir du boulevard Marcel-Laurin.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "En copropriété, accès, ascenseur, protection des aires communes et horaires autorisés par le syndicat sont réglés avant le premier jour de travaux.",
            },
            {
              number: "6",
              title: "Livraison et inspection",
              description:
                "Liste de déficiences reprise avant la remise des lieux, documents remis, travaux garantis — détails au contrat.",
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
          heading: "Ce qu'on vérifie avant de chiffrer un projet à Saint-Laurent",
          intro:
            "Dans un arrondissement où une bonne part du parc a plus de soixante-dix ans et où le reste est en copropriété, la soumission dépend d'une série de vérifications qu'on ne peut pas faire au téléphone.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification en visite",
          items: [
            "Année de construction et transformations subies depuis, surtout dans les secteurs d'après-guerre.",
            "Capacité de l'entrée électrique et état du panneau avant d'ajouter des circuits.",
            "Position des colonnes de plomberie communes, déterminante en plex et en copropriété.",
            "Caractère porteur des murs à ouvrir et présence de murs mitoyens.",
            "État de l'insonorisation entre logements ou entre étages d'un plex.",
            "Usage autorisé et nombre de logements permis au zonage de l'arrondissement.",
            "Contraintes du syndicat de copropriété : accès, ascenseur, horaires, parties communes.",
            "Portée souhaitée par rapport au budget visé, pour ajuster avant de dessiner plutôt qu'après.",
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
      id: "local",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Pourquoi un entrepreneur général à Saint-Laurent",
          intro:
            "Sur un plex des années 1950, la rénovation touche rarement un seul métier. Ouvrir un mur de cuisine, c'est presque toujours parler de structure, d'électricité, de plomberie et d'insonorisation dans la même semaine. C'est précisément le rôle d'un entrepreneur général.",
          items: [
            {
              title: "Licence RBQ vérifiable",
              description:
                "Licence 8306-0806-27, valide et sans restriction, délivrée en septembre 2004. Catégories d'entrepreneur général 1.2 et 1.3, plus des sous-catégories spécialisées.",
            },
            {
              title: "Assuré et cautionné",
              description:
                "Responsabilité civile et couverture de chantier en vigueur, cautionnement de licence en place, aucune réclamation au dossier.",
            },
            {
              title: "Habitué des bâtiments multilogements",
              description:
                "Colonnes communes, murs mitoyens, accès et horaires : les contraintes de plex et de copropriété sont cadrées au départ, pas découvertes en cours de route.",
            },
            {
              title: "Soumission écrite avant le chantier",
              description:
                "Portée, exclusions, échéancier et budget écrits au contrat. Estimation gratuite et retour sous 24 à 48 heures ouvrables.",
            },
            {
              title: "Division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12) : un fournisseur de moins à coordonner.",
            },
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation de cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Chantier de rénovation résidentielle à Saint-Laurent",
          },
          cardTitle: "Le vrai risque sur un plex",
          cardDescription:
            "Ce n'est pas le coût des matériaux, c'est la découverte tardive : une colonne de plomberie qu'on ne peut pas déplacer, un mur qu'on croyait non porteur, une entrée électrique à reprendre. Les repérer au cadrage coûte infiniment moins cher que de les découvrir après la démolition.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget et échéancier à Saint-Laurent",
          description:
            "Le prix d'une rénovation dépend surtout de l'âge du bâtiment, de la portée retenue et du nombre de corps de métier à coordonner. Voici les repères qu'on donne en visite, avant toute soumission détaillée.",
          cards: [
            {
              title: "À partir d'environ 25 000 $",
              description:
                "Ordre de grandeur pour un projet mené par un entrepreneur général : salle de bain complète, sous-sol aménagé ou cuisine d'entrée de gamme dans un logement existant.",
            },
            {
              title: "Cuisine complète : 35 000 $ à 50 000 $ et plus",
              description:
                "Sur un bâtiment d'après-guerre, l'ouverture d'un mur, la mise à niveau électrique et le déplacement de plomberie expliquent l'essentiel de l'écart, avant même le choix des matériaux.",
            },
            {
              title: "Ce qui allonge l'échéancier",
              description:
                "Le traitement du permis par l'arrondissement, les autorisations du syndicat en copropriété, le délai de fabrication des armoires et les surprises trouvées à la démolition dans un bâtiment de plus de soixante ans.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "related",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les mandats les plus fréquents à Saint-Laurent",
          intro:
            "Trois types de projets reviennent constamment dans l'arrondissement, du plex d'après-guerre au condo récent. Chacun a sa page de service, avec le détail de la méthode.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir une cuisine fermée, reprendre l'électricité et la plomberie, installer des armoires sur mesure.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Cuisine rénovée avec armoires sur mesure",
              },
              badges: ["Cuisine", "Armoires sur mesure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Reprise complète jusqu'au support, en tenant compte des colonnes de plomberie communes.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Salle de bain rénovée dans un logement existant",
              },
              badges: ["Salle de bain", "Plex"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Planchers",
              href: "/services/renovation/plancher",
              description:
                "Reprise des planchers d'origine sur lambourdes ou sur dalle, avec nivellement du support.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Pose de plancher dans une pièce rénovée",
              },
              badges: ["Plancher", "Préparation"],
              footerCtaLabel: "Voir le service",
            },
          ],
        },
      },
    },
    {
      id: "sectors",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Secteurs desservis à Saint-Laurent et à proximité",
          intro:
            "On intervient dans tout l'arrondissement, du secteur Norgate aux quartiers planifiés du nord-ouest, ainsi que dans les villes et arrondissements voisins.",
          columns: "3",
          items: [
            {
              title: "Norgate et boulevard Décarie",
              description:
                "Logements d'après-guerre développés de 1949 au début des années 1950.",
              href: "/services/renovation",
              badges: ["Après-guerre", "Plex"],
            },
            {
              title: "Côte-Vertu et Marcel-Laurin",
              description:
                "Bungalows et cottages des années 1950 à 1970, cuisines et sous-sols à revoir.",
              href: "/services/renovation/sous-sol",
              badges: ["Bungalows"],
            },
            {
              title: "Bois-Franc et Nouveau-Saint-Laurent",
              description:
                "Quartiers planifiés depuis les années 1990, condos et copropriétés.",
              href: "/services/renovation/cuisine",
              badges: ["Copropriété"],
            },
            {
              title: "Dorval",
              description:
                "Ville voisine à l'ouest, de l'autre côté de l'aéroport Montréal-Trudeau.",
              href: "/zones/dorval",
              ctaLabel: "Voir la page Dorval",
            },
            {
              title: "Laval",
              description:
                "De l'autre côté de la rivière des Prairies, par l'autoroute 15 ou le pont Lachapelle.",
              href: "/zones/laval",
              ctaLabel: "Voir la page Laval",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "Ouest-de-l'Île, à une quinzaine de minutes par l'autoroute 40.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "Voir la page Dollard-des-Ormeaux",
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
          heading: "Questions fréquentes — rénovation à Saint-Laurent",
          intro:
            "Permis d'arrondissement, plex, copropriété, budget : les réponses qu'on donne le plus souvent.",
          items: [
            {
              q: "Où obtient-on un permis de rénovation à Saint-Laurent ?",
              a: "Auprès de la Division des permis et des inspections de l'arrondissement, au 777, boulevard Marcel-Laurin. Les demandes peuvent aussi être déposées en ligne par les services numériques de la Ville de Montréal, ce qui exige la création d'un compte. Nous préparons et déposons le dossier dans le cadre du mandat.",
            },
            {
              q: "Faut-il un permis pour une rénovation intérieure ?",
              a: "Oui dans la majorité des cas, notamment quand les travaux touchent la structure, la configuration des pièces, la plomberie ou l'électricité. Les travaux d'entretien courant n'en exigent généralement pas. On valide la portée avec l'arrondissement avant d'entamer quoi que ce soit, parce que travailler sans permis peut mener à un arrêt de chantier.",
            },
            {
              q: "Travaillez-vous sur les duplex et triplex de Norgate ?",
              a: "Oui. Ces bâtiments datent majoritairement de 1949 au début des années 1950. On y vérifie systématiquement l'entrée électrique, l'état et la position des colonnes de plomberie, le caractère porteur des murs et l'insonorisation entre logements avant de valider un plan de rénovation.",
            },
            {
              q: "Peut-on rénover un condo à Bois-Franc ?",
              a: "Oui, avec une préparation supplémentaire. Le syndicat de copropriété encadre l'accès, l'usage de l'ascenseur, la protection des aires communes et les heures de travaux. Certaines interventions touchant les parties communes exigent une autorisation écrite. Ces points sont réglés avant le premier jour de chantier.",
            },
            {
              q: "Quel est le budget à prévoir ?",
              a: "Nos projets de rénovation démarrent autour de 25 000 $. Une cuisine complète avec armoires sur mesure se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon la portée et l'état du bâtiment. L'estimation est gratuite et le budget est fixé au contrat écrit avant le début des travaux.",
            },
            {
              q: "Puis-je ajouter un logement ou modifier l'usage de mon immeuble ?",
              a: "Cela dépend du zonage applicable à votre adresse. Le nombre de logements autorisés, l'usage et certaines transformations extérieures sont encadrés par la réglementation d'urbanisme de l'arrondissement. C'est une vérification qu'on fait avant la soumission, jamais après la démolition.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Dilamco détient la licence RBQ 8306-0806-27, valide et sans restriction, délivrée en septembre 2004, avec les catégories d'entrepreneur général 1.2 et 1.3. Responsabilité civile et couverture de chantier en vigueur, cautionnement de licence en place, aucune réclamation au dossier. La licence est vérifiable au registre public de la RBQ.",
            },
            {
              q: "Faites-vous aussi des locaux commerciaux ?",
              a: "Oui, pour des aménagements légers : cloisons, finitions, comptoirs et rangement. Selon la nature du local et de l'usage, un certificat d'occupation peut être exigé en plus du permis de transformation. On valide ces deux volets au cadrage, avec l'arrondissement.",
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
          heading: "Un projet de rénovation à Saint-Laurent ?",
          intro:
            "On se déplace, on regarde le bâtiment tel qu'il est, on valide le zonage et le permis, puis on vous remet une soumission détaillée avec échéancier et budget écrits.",
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
          note: "Entrepreneur général licencié RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
