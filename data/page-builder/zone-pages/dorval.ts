// Sources locales (consultées le 2026-09-18) :
// - Cité de Dorval, « Demande de permis et certificats » (Service de l'aménagement
//   urbain, 514 633-4084, plateforme dorval.edemandes.com, délai de 30 jours
//   ouvrables, procédure de PIIA avec approbation du conseil pour une nouvelle
//   construction ou un agrandissement résidentiel et pour le chemin du Bord-du-Lac) :
//   https://www.ville.dorval.qc.ca/fr/services/residents/demande-de-permis-et-certificats
// - Cité de Dorval, « Zonage » (interprétation du règlement de zonage,
//   Service de l'urbanisme, 514 633-4046) :
//   https://www.ville.dorval.qc.ca/fr/la-cite/page/zonage
// - Cité de Dorval, règlements en vigueur (dont RCM-60H-2024 sur les plans
//   d'aménagement d'ensemble) :
//   https://www.ville.dorval.qc.ca/fr/la-cite/administration-et-finances/reglements-en-vigueur
// - Wikipédia, « Dorval » (Village de Dorval et lac Saint-Louis au sud, aéroport
//   Montréal-Trudeau, A-20 et A-520 au nord ; centre commercial Dorval Gardens,
//   1954) : https://en.wikipedia.org/wiki/Dorval
// - Guide de quartier Dorval 2026 (Strathmore, architecture des années 1950-1960,
//   parc Surrey ; bungalows d'après-guerre entre le lac et l'autoroute 20 ; condos
//   et locatifs près de la gare de Dorval et de l'avenue Dorval) :
//   https://loaamanseur-remax.ca/articles-blogue/living-in-dorval-neighbourhood-guide
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDorvalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Dorval — rénovation",
    description:
      "Entrepreneur général licencié RBQ à Dorval : rénovation de bungalows d'après-guerre, permis de la Cité, PIIA du Bord-du-Lac, un seul responsable.",
    path: "/zones/dorval",
    ogAlt: "Rénovation résidentielle à Dorval par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Dorval", url: SITE.url + "/zones/dorval" },
  ],
  service: {
    name: "Entrepreneur général à Dorval",
    description:
      "Rénovation résidentielle clé en main à Dorval : cadrage, permis de la Cité de Dorval, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/dorval",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Dorval",
      "Village de Dorval",
      "Strathmore",
      "Pine Beach",
      "Dorval Gardens",
      "Chemin du Bord-du-Lac",
      "L'Île-Dorval",
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
            "Entrepreneur général à Dorval : rénovation résidentielle du permis à la livraison",
          description:
            "Dilamco est établie rue Larocque, à Pierrefonds-Roxboro, à une quinzaine de minutes de Dorval par le boulevard Saint-Jean et l'autoroute 20. On rénove des bungalows d'après-guerre du secteur central, des cottages de Strathmore et des maisons riveraines du chemin du Bord-du-Lac depuis 2004, avec une licence RBQ valide et un seul responsable de chantier du début à la fin.",
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
          badges: ["Dorval", "RBQ 8306-0806-27", "Depuis 2004"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Rénovation résidentielle complète menée par un entrepreneur général à Dorval",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Dorval",
          description:
            "Dorval n'est pas un secteur homogène. La ville s'organise entre le lac Saint-Louis au sud — le Village, son église, ses parcs et sa promenade — et les zones d'emploi de l'aéroport Montréal-Trudeau au nord, le long des autoroutes 20 et 520. Entre les deux, un tissu résidentiel construit surtout entre 1950 et 1975. Chaque bande a ses propres contraintes de chantier.",
          cards: [
            {
              title: "Bungalows et cottages d'après-guerre",
              description:
                "Entre le lac et l'autoroute 20, l'essentiel du parc est composé de bungalows, de cottages et de jumelés des années 1950 à 1970. Strathmore, avec ses rues tranquilles autour du parc Surrey, est typique de cette architecture 1950-1960. Sur ces maisons, on retrouve régulièrement des entrées électriques sous-dimensionnées, des fondations en blocs de béton, des sous-sols à faible dégagement et des murs mitoyens ou porteurs qui décident de ce qu'on peut réellement ouvrir.",
            },
            {
              title: "Riverain du Bord-du-Lac et Village",
              description:
                "Le long du chemin du Bord-du-Lac–Lakeshore et dans le Village, on travaille sur des propriétés plus anciennes, souvent plus grandes, parfois riveraines. Les volumes sont irréguliers, les rallonges se sont accumulées au fil des décennies et les niveaux de plancher ne s'alignent pas toujours. Ce sont des chantiers où le relevé de l'existant compte autant que le plan.",
            },
            {
              title: "Condos et locatifs près de la gare",
              description:
                "Autour de la gare de Dorval et de l'avenue Dorval, le parc comprend des condos et des immeubles locatifs. On y rénove surtout des cuisines et des salles de bain, avec les contraintes habituelles du bâtiment multilogement : accès, ascenseur, protection des aires communes, horaires autorisés par le syndicat et colonnes de plomberie communes.",
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
          heading: "Ce qu'on réalise à Dorval",
          intro:
            "Entrepreneur général en rénovation résidentielle, catégories RBQ 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). On prend la responsabilité du permis, de la séquence et des corps de métier — pas seulement d'une portion des travaux.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Le projet le plus fréquent sur les bungalows des années 1950-1970 de Dorval.",
              icon: "chefHat",
              bullets: [
                "Ouverture du mur entre la cuisine fermée et le salon, après vérification du caractère porteur.",
                "Mise à niveau de l'électricité et de la plomberie derrière les armoires.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Reprise complète d'une salle de bain d'origine, souvent unique à l'étage.",
              icon: "bath",
              bullets: [
                "Réfection de la membrane, du drain et de la ventilation avant la finition.",
                "Ajout d'une salle d'eau au rez-de-chaussée quand la configuration le permet.",
                "Coordination plombier, électricien et carreleur dans le bon ordre.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Les sous-sols de bungalows de Dorval demandent une lecture technique avant tout plan.",
              icon: "layers",
              bullets: [
                "Contrôle de l'humidité et du drain français avant de fermer les murs.",
                "Hauteur libre, poutres et colonnes vérifiées avant de promettre une pièce habitable.",
                "Issue de secours, fenestration et séparation coupe-feu conformes au Code de construction.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajouter un volume à Dorval passe obligatoirement par une approbation du conseil.",
              icon: "building2",
              bullets: [
                "Un agrandissement résidentiel est soumis à une procédure de PIIA avant l'émission du permis.",
                "Plans, implantation et intégration architecturale préparés pour cette étape.",
                "Échéancier réaliste qui tient compte du calendrier d'approbation de la Cité.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement ou incendie : la reconstruction est un chantier coordonné.",
              icon: "droplets",
              bullets: [
                "Assèchement, démolition sélective puis reconstruction selon la portée retenue.",
                "Documentation des travaux pour le dossier d'assurance du propriétaire.",
                "Un seul interlocuteur entre les corps de métier et le calendrier de retour.",
              ],
            },
            {
              title: "Planchers et finitions",
              description:
                "Sur un plancher de 1960, la préparation compte plus que le revêtement choisi.",
              icon: "ruler",
              bullets: [
                "Nivellement du support avant la pose, surtout sur dalle de sous-sol.",
                "Continuité des seuils et des transitions entre les pièces rénovées.",
                "Moulures, portes et alignements repris pour que la rénovation ne se voie pas aux jonctions.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "context",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qui complique un chantier à Dorval",
          intro:
            "Les difficultés d'un chantier dorvalois ne viennent presque jamais du choix des matériaux. Elles viennent du bâtiment, du calendrier municipal et de la logistique de rue. Voici les quatre facteurs qu'on cadre systématiquement avant d'écrire une soumission.",
          columns: "2",
          items: [
            {
              title: "Un parc bâti de plus de soixante ans",
              description:
                "Une maison de 1958 n'a pas été construite pour les charges électriques d'aujourd'hui.",
              icon: "clipboardCheck",
              bullets: [
                "Entrée électrique, panneau et capacité disponibles vérifiés avant d'ajouter des appareils.",
                "Plomberie d'origine en cuivre ou en fonte repérée avant de promettre un déplacement de drain.",
                "Isolation et étanchéité des murs extérieurs évaluées pendant que les murs sont ouverts.",
              ],
            },
            {
              title: "Le calendrier des permis",
              description:
                "La Cité délivre ses propres permis, avec ses propres délais et son propre calendrier de conseil.",
              icon: "fileCheck",
              bullets: [
                "Trente jours ouvrables à prévoir une fois le dossier complet, conforme et payé.",
                "Un PIIA ajoute une étape d'approbation par le conseil, avec son calendrier de séances.",
                "On dépose tôt pour que l'attente du permis ne devienne pas l'attente du chantier.",
              ],
            },
            {
              title: "L'hiver et l'accès de rue",
              description:
                "La saison décide de l'ordre des travaux, et les rues résidentielles de Dorval sont étroites.",
              icon: "clock",
              bullets: [
                "Excavation et fondation planifiées hors des périodes de gel profond.",
                "Cuisine, salle de bain et sous-sol se font très bien en hiver.",
                "Conteneur, livraisons et stationnement organisés avant le premier jour de chantier.",
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
          heading: "Comment se déroule un projet à Dorval",
          intro:
            "Dorval est une ville liée : elle délivre ses propres permis, ce n'est pas un arrondissement de Montréal. C'est le Service de l'aménagement urbain de la Cité de Dorval qui traite les demandes, et cette étape doit être planifiée, pas improvisée.",
          steps: [
            {
              number: "1",
              title: "Visite et cadrage",
              description:
                "Relevé de la maison, des contraintes visibles et de la portée souhaitée. On vous dit dès cette étape ce qui exige un permis et ce qui n'en exige pas.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions, échéancier et budget écrits. Retour sous 24 à 48 heures ouvrables après la visite.",
            },
            {
              number: "3",
              title: "Demande de permis",
              description:
                "Dossier déposé auprès du Service de l'aménagement urbain, en ligne via la plateforme de la Cité. Toute rénovation fait l'objet d'une demande distincte.",
            },
            {
              number: "4",
              title: "PIIA si requis",
              description:
                "Pour une nouvelle construction, un agrandissement résidentiel ou un bâtiment du chemin du Bord-du-Lac, une procédure de PIIA avec approbation du conseil précède l'émission du permis.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Une fois le dossier complet, conforme et payé, la Cité dispose de 30 jours ouvrables pour délivrer ou refuser le permis. Le calendrier de chantier est bâti autour de cette réalité.",
            },
            {
              number: "6",
              title: "Livraison et inspection",
              description:
                "Liste de déficiences reprise avant la remise des lieux, documents de garantie remis et travaux garantis, détails au contrat.",
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
          heading: "Ce qu'on vérifie avant de chiffrer un projet à Dorval",
          intro:
            "Une soumission donnée au téléphone n'engage personne. Celle qu'on remet après visite repose sur des vérifications précises, faites sur place, qui déterminent la portée réelle des travaux.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification en visite",
          items: [
            "Année de construction approximative et transformations visibles depuis la construction d'origine.",
            "Capacité de l'entrée électrique et état du panneau avant d'ajouter des circuits ou des appareils.",
            "Nature et position de la plomberie existante, y compris les colonnes en copropriété.",
            "Caractère porteur des murs que vous souhaitez ouvrir, et présence de poutres ou de colonnes.",
            "Hauteur libre au sous-sol, dégagement sous les conduits et possibilité d'une issue conforme.",
            "Signes d'humidité, historique de refoulement et état apparent du drain.",
            "Statut réglementaire de l'adresse : zonage, PIIA applicable, type de permis à demander à la Cité.",
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
          heading: "Pourquoi un entrepreneur général de l'Ouest-de-l'Île à Dorval",
          intro:
            "Un entrepreneur qui travaille dans le secteur tous les mois ne découvre pas les règles en cours de route. Il sait ce que la Cité demande, ce que le bruit aérien change dans le choix des fenêtres et pourquoi un bungalow de 1958 réserve rarement les mêmes surprises qu'un cottage du Bord-du-Lac.",
          items: [
            {
              title: "Licence RBQ vérifiable",
              description:
                "Licence 8306-0806-27, valide et sans restriction, délivrée en septembre 2004. Catégories d'entrepreneur général 1.2 et 1.3. Vérifiable en ligne au registre de la RBQ.",
            },
            {
              title: "Assuré, cautionné",
              description:
                "Responsabilité civile et chantier couvertes, cautionnement de licence en vigueur, aucune réclamation au dossier de licence.",
            },
            {
              title: "Réponse rapide",
              description:
                "Retour sous 24 à 48 heures ouvrables sur une demande d'estimation, et une salle de montre à Dorval pour voir les finis avant de décider.",
            },
            {
              title: "Un seul responsable",
              description:
                "Plomberie, électricité, structure, gypse, carrelage, armoires : tous les corps de métier relèvent du même contrat et du même échéancier.",
            },
            {
              title: "Division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12). Un fournisseur de moins à coordonner pour vous.",
            },
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Salle de bain rénovée dans une maison de Dorval",
          },
          cardTitle: "Ce qu'on cherche à éviter",
          cardDescription:
            "Le chantier qui traîne parce que le permis n'a pas été demandé au bon moment, la facture qui gonfle parce que la portée n'était pas écrite, et les sous-traitants qui ne se parlent pas. C'est exactement ce que le rôle d'entrepreneur général sert à supprimer.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget et échéancier : ce qu'il faut savoir avant de commencer",
          description:
            "Une rénovation à Dorval ne coûte pas plus cher parce que c'est Dorval. Ce qui fait varier le prix, c'est l'état réel du bâtiment, la portée des travaux et le nombre de corps de métier à coordonner. Voici les repères qu'on donne en visite, avant toute soumission.",
          cards: [
            {
              title: "À partir d'environ 25 000 $",
              description:
                "C'est l'ordre de grandeur d'un projet de rénovation mené par un entrepreneur général : une salle de bain complète, un sous-sol aménagé ou une cuisine d'entrée de gamme. En deçà, il s'agit généralement de travaux ponctuels qui ne demandent pas de coordination.",
            },
            {
              title: "Cuisine complète : 35 000 $ à 50 000 $ et plus",
              description:
                "Sur un bungalow de Dorval, l'ouverture d'un mur, le déplacement de plomberie ou d'électricité et les armoires sur mesure expliquent l'essentiel de l'écart. L'estimation est gratuite et la portée exacte est fixée au contrat écrit.",
            },
            {
              title: "Ce qui allonge l'échéancier",
              description:
                "Le délai de traitement du permis, une procédure de PIIA quand l'agrandissement l'exige, le délai de fabrication des armoires et les surprises trouvées à la démolition. On les anticipe au calendrier plutôt que de les découvrir en cours de chantier.",
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
          heading: "Les projets qu'on mène le plus souvent à Dorval",
          intro:
            "Trois types de mandats reviennent constamment dans les maisons d'après-guerre du secteur. Chacun a sa page de service, avec le détail de la méthode et de la séquence.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir une cuisine fermée de bungalow, reprendre l'électricité et la plomberie, installer des armoires sur mesure.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Cuisine sur mesure réalisée dans une maison de l'Ouest-de-l'Île",
              },
              badges: ["Cuisine", "Armoires sur mesure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Reprise complète jusqu'au support : membrane, drain, pente, ventilation, puis finition.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Salle de bain rénovée avec finition soignée",
              },
              badges: ["Salle de bain", "Étanchéité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Transformer un sous-sol de bungalow en espace de vie conforme, sec et confortable.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Sous-sol aménagé en salle de jeux",
              },
              badges: ["Sous-sol", "Conformité"],
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
          heading: "Secteurs desservis à Dorval et aux alentours",
          intro:
            "On travaille partout à Dorval, du Village aux rues résidentielles bordant l'autoroute 20, ainsi que dans les villes voisines de l'Ouest-de-l'Île et de l'ouest de Montréal.",
          columns: "3",
          items: [
            {
              title: "Village de Dorval et Bord-du-Lac",
              description:
                "Maisons anciennes et riveraines, projets soumis au PIIA le long du chemin du Bord-du-Lac.",
              href: "/services/renovation",
              badges: ["Patrimoine", "PIIA"],
            },
            {
              title: "Strathmore et parc Surrey",
              description:
                "Cottages et bungalows des années 1950-1960, cuisines et sous-sols à revoir.",
              href: "/services/renovation/cuisine",
              badges: ["1950-1960"],
            },
            {
              title: "Dorval centre et Dorval Gardens",
              description:
                "Bungalows d'après-guerre entre le lac et l'autoroute 20, le coeur de notre volume local.",
              href: "/services/renovation/sous-sol",
              badges: ["Bungalows"],
            },
            {
              title: "Pointe-Claire",
              description:
                "Ville voisine à l'ouest, même type de parc immobilier d'après-guerre.",
              href: "/zones/pointe-claire",
              ctaLabel: "Voir la page Pointe-Claire",
            },
            {
              title: "Saint-Laurent",
              description:
                "Arrondissement voisin au nord-est, de l'autre côté de l'aéroport.",
              href: "/zones/saint-laurent",
              ctaLabel: "Voir la page Saint-Laurent",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "À une dizaine de minutes au nord par le boulevard Sources.",
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
          heading: "Questions fréquentes — rénovation à Dorval",
          intro:
            "Permis, délais, budget, assurances : les réponses qu'on donne le plus souvent aux propriétaires de Dorval.",
          items: [
            {
              q: "Faut-il un permis pour rénover à Dorval ?",
              a: "Oui, dans la plupart des cas. La Cité de Dorval exige un permis pour la construction, la transformation et l'agrandissement d'un bâtiment, ainsi que pour des travaux intérieurs qui touchent un mur porteur ou qui nécessitent un conteneur. Toute rénovation doit faire l'objet d'une demande distincte. On valide la portée avec le Service de l'aménagement urbain avant de déposer le dossier.",
            },
            {
              q: "Combien de temps la Cité prend-elle pour délivrer un permis ?",
              a: "À partir du moment où tous les renseignements et documents techniques exigés sont fournis, conformes, sans erreur et que le tarif est payé, l'autorité compétente dispose de 30 jours ouvrables pour délivrer ou refuser un permis de construction. Un dossier incomplet recommence ce compte. C'est pourquoi on prépare la demande nous-mêmes.",
            },
            {
              q: "Qu'est-ce que le PIIA et est-ce que ça me concerne ?",
              a: "Le plan d'implantation et d'intégration architecturale est une procédure d'approbation par le conseil municipal qui s'ajoute au permis. À Dorval, elle s'applique notamment avant l'émission d'un permis pour une nouvelle construction ou un agrandissement résidentiel, ainsi que pour les bâtiments situés le long du chemin du Bord-du-Lac. Elle rallonge l'échéancier : on la planifie dès le cadrage.",
            },
            {
              q: "Travaillez-vous sur les bungalows des années 1950 et 1960 ?",
              a: "C'est l'essentiel de notre volume à Dorval. Sur ces maisons, on vérifie systématiquement l'entrée électrique, l'état de la plomberie, le caractère porteur des murs qu'on souhaite ouvrir et la hauteur libre au sous-sol avant de valider un plan. Ces vérifications évitent les révisions de portée en cours de chantier.",
            },
            {
              q: "Quel est le budget minimum pour un projet avec entrepreneur général ?",
              a: "Nos projets de rénovation démarrent autour de 25 000 $. Une cuisine complète avec armoires sur mesure se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon la portée. L'estimation est gratuite et le budget, comme l'échéancier, est fixé au contrat écrit avant le début des travaux.",
            },
            {
              q: "Êtes-vous licenciés et assurés pour travailler à Dorval ?",
              a: "Oui. Dilamco détient la licence RBQ 8306-0806-27, valide et sans restriction, délivrée en septembre 2004, avec les catégories d'entrepreneur général 1.2 et 1.3. Notre responsabilité civile et notre couverture de chantier sont en vigueur. La licence est vérifiable au registre public de la RBQ.",
            },
            {
              q: "Faites-vous de la rénovation en condo près de la gare de Dorval ?",
              a: "Oui. En copropriété, on cadre tôt l'accès, la protection des aires communes, les horaires de travaux autorisés par le syndicat et les contraintes techniques liées aux colonnes de plomberie et à l'insonorisation. Une fois ces points réglés, le chantier se déroule comme ailleurs, avec un calendrier adapté au bâtiment.",
            },
            {
              q: "Le bruit des avions change-t-il quelque chose aux travaux ?",
              a: "Dans les secteurs proches de l'aéroport Montréal-Trudeau et des autoroutes 20 et 520, les propriétaires nous demandent souvent d'améliorer le confort acoustique en même temps que la rénovation. Isolation des murs extérieurs, choix de fenestration et étanchéité à l'air se décident au cadrage, parce qu'il est bien plus simple de les intégrer pendant que les murs sont ouverts.",
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
          heading: "Un projet de rénovation à Dorval ?",
          intro:
            "On se déplace pour voir la maison, on cadre la portée et on vous remet une soumission détaillée avec échéancier et budget écrits. Retour sous 24 à 48 heures ouvrables.",
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
