// Page zone : Dollard-des-Ormeaux (DDO).
// Sources consultées le 2026-09-18 :
// - Ville de Dollard-des-Ormeaux, « Règlements municipaux » (plan d'urbanisme R-2024-190
//   en vigueur le 24 avril 2025, règlement de zonage R-2025-199 en vigueur le 16 mai 2025) :
//   https://ville.ddo.qc.ca/en/my-city/municipal-by-laws/
// - Ville de Dollard-des-Ormeaux, révision du programme d'urbanisme :
//   https://ville.ddo.qc.ca/en/special-projects/urban-planning-programme/
// - Ville de Dollard-des-Ormeaux, « Nous joindre » (hôtel de ville, 12001 boul. De Salaberry,
//   514 684-1010 ; permis et inspections 514 684-6899) : https://ville.ddo.qc.ca/en/contact-us/
// - Portail de demandes de permis en ligne : https://dollard-des-ormeaux.edemandes.com/
// - Wikipédia, « Dollard-des-Ormeaux » (48 403 hab. en 2021, 15,1 km2, 1 800 hab. au début des
//   années 1960, ~40 000 au début des années 1980, parc Centennial de 48 ha inauguré en 1976) :
//   https://fr.wikipedia.org/wiki/Dollard-des-Ormeaux
// - Ville de Dollard-des-Ormeaux, plan de la ville (secteurs Saint-Jean, Westpark, Sunnybrooke ;
//   rues Spring Garden, Hyman, boul. Sunnybrooke) :
//   https://ville.ddo.qc.ca/ma-municipalite/plan-de-la-ville

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDollardDesOrmeauxPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Dollard-des-Ormeaux",
    description:
      "Entrepreneur général licencié RBQ à Dollard-des-Ormeaux : cuisine, salle de bain, sous-sol, agrandissement. Base à Pierrefonds, à dix minutes de DDO.",
    path: "/zones/dollard-des-ormeaux",
    ogAlt: "Rénovation résidentielle à Dollard-des-Ormeaux par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    {
      name: "Dollard-des-Ormeaux",
      url: SITE.url + "/zones/dollard-des-ormeaux",
    },
  ],
  service: {
    name: "Entrepreneur général à Dollard-des-Ormeaux",
    description:
      "Rénovation résidentielle complète à Dollard-des-Ormeaux : cuisine, salle de bain, sous-sol, agrandissement et transformation, par un entrepreneur général licencié RBQ de l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/dollard-des-ormeaux",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Dollard-des-Ormeaux",
      "Westpark",
      "Sunnybrooke",
      "Secteur Saint-Jean",
      "Lake Road",
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
          eyebrow: "Dilamco - Dollard-des-Ormeaux",
          heading:
            "Entrepreneur général à Dollard-des-Ormeaux : rénover une maison de banlieue des années 1960 à 1980",
          description:
            "DDO est la ville la plus peuplée de l'Ouest-de-l'Île après l'arrondissement où se trouve notre base, rue Larocque à Pierrefonds-Roxboro — une dizaine de minutes de route. On y travaille sur les mêmes types de maisons semaine après semaine : bungalows, split-levels et cottages de deux étages construits pendant la poussée de banlieue de 1960 à 1985. Licence RBQ 8306-0806-27, valide et sans restriction depuis 2004.",
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
            "Entrepreneur général",
            "DDO",
            "Assuré",
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Rénovation de cuisine dans une maison de Dollard-des-Ormeaux",
          },
          caption:
            "Secteurs Saint-Jean, Westpark et Sunnybrooke - Ouest-de-l'Île",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Dollard-des-Ormeaux",
          description:
            "DDO comptait environ 1 800 habitants au début des années 1960. Au début des années 1980, la ville en comptait près de 40 000 ; elle en compte aujourd'hui plus de 48 000 sur 15,1 km2, et son territoire est entièrement urbanisé. Autrement dit : presque tout le parc résidentiel a été bâti en vingt-cinq ans, par vagues successives de développements. C'est une donnée de chantier, pas une anecdote historique.",
          cards: [
            {
              title: "Trois secteurs, trois générations de maisons",
              description:
                "Les trois cercles du logo de la ville représentent les secteurs Saint-Jean, Westpark et Sunnybrooke. Chacun correspond à une phase de développement, donc à un montage de construction différent. Sunnybrooke, entre le parc Sunnybrooke et le parc-nature du Bois-de-Liesse, s'organise autour de la rue Spring Garden, du croissant Hyman et du boulevard Sunnybrooke : bungalows et split-levels de la première vague. Westpark, du côté du boulevard des Sources, et les abords du boulevard Saint-Jean regroupent davantage de cottages à deux étages, de jumelés, de maisons en rangée et de multiplex. À l'intérieur d'un même développement, l'architecture est remarquablement constante — ce qui veut aussi dire que les mêmes défauts reviennent d'une maison à l'autre.",
            },
            {
              title: "Ce qu'on retrouve derrière les murs",
              description:
                "Sur une maison de DDO des années 1960 à 1980, les constats se répètent : panneau électrique de 100 ampères devenu juste, isolation de sous-sol montée directement sur le béton, plancher de sous-sol sans pare-vapeur, salles de bain à l'étage sans ventilation mécanique adéquate, cuisine fermée séparée du salon par un mur qui s'avère porteur une fois sur deux. Les maisons en rangée et les jumelés des secteurs Lake Road, Sunnybrooke et Westwood ajoutent la question des murs mitoyens : insonorisation, coupe-feu et coordination avec le voisin quand on ouvre.",
            },
            {
              title: "Une réglementation qui vient d'être refondue",
              description:
                "DDO a adopté un nouveau programme d'urbanisme (règlement R-2024-190), en vigueur depuis le 24 avril 2025, puis un nouveau règlement de zonage (R-2025-199), en vigueur depuis le 16 mai 2025. Autrement dit : les repères qui valaient il y a trois ans ne valent plus nécessairement. Les demandes de permis se déposent en ligne ou à l'hôtel de ville, au 12001, boulevard De Salaberry ; la division des permis et inspections examine la conformité du projet aux règlements municipaux en vigueur. Des croquis, plans ou dessins détaillés du projet sont obligatoires et doivent illustrer clairement les travaux prévus.",
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
          heading: "Ce qu'on réalise à Dollard-des-Ormeaux",
          intro:
            "Un entrepreneur général, un contrat, un échéancier. Les mandats les plus fréquents à DDO et ce qu'ils exigent vraiment dans une maison de cette époque.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Ouvrir la cuisine fermée d'origine sur la salle à manger.",
              icon: "chefHat",
              bullets: [
                "Analyse structurale avant d'ouvrir : dans un split-level, le mur central est souvent porteur.",
                "Poutre et colonnes dimensionnées, plomberie et électricité reprises pendant l'ouverture.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "La salle de bain principale de 1972 qui n'a jamais été refaite.",
              icon: "bath",
              bullets: [
                "Membrane d'étanchéité complète avant la céramique de douche.",
                "Ventilation ajoutée ou corrigée, sortie vers l'extérieur et non dans l'entretoit.",
                "Réorganisation complète quand la surface disponible est limitée par la structure.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Salle familiale, bureau, salle de jeux ou chambre supplémentaire.",
              icon: "sofa",
              bullets: [
                "Isolation et pare-vapeur repris selon les règles actuelles, pas selon le montage de 1975.",
                "Hauteur libre, colonnes et conduits évalués avant de promettre un plan.",
                "Salle de bain complète ajoutée quand le drain existant le permet.",
              ],
            },
            {
              title: "Agrandissement et ajout d'étage",
              description:
                "Gagner de la surface sur un terrain de banlieue déjà bâti.",
              icon: "building2",
              bullets: [
                "Rallonge arrière, solarium quatre saisons ou ajout d'étage sur un bungalow.",
                "Marges, implantation et coefficient d'occupation validés sous le zonage R-2025-199.",
                "Dossier de permis déposé auprès de la division des permis et inspections de DDO.",
              ],
            },
            {
              title: "Rénovation intérieure complète",
              description:
                "Reprendre la maison en entier plutôt qu'une pièce à la fois.",
              icon: "layers",
              bullets: [
                "Planchers, portes, moulures, escalier et peinture dans une seule séquence.",
                "Mise à niveau électrique pendant que les murs sont ouverts.",
                "Coordination des corps de métier sous un seul responsable.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement d'égout ou dommage structural.",
              icon: "droplets",
              bullets: [
                "Reprise du sous-sol après assèchement, avec vérification du clapet et de la pompe.",
                "Portée écrite et modifications documentées pour le suivi avec l'assureur.",
                "Reconstruction conforme au Code de construction du Québec.",
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
          heading: "Comment se déroule un projet à DDO",
          intro:
            "Une séquence stable, du premier appel à la livraison, pensée pour que les décisions se prennent avant le chantier et non pendant.",
          steps: [
            {
              number: "1",
              title: "Visite sur place",
              description:
                "Nous venons voir la maison : structure, panneau électrique, plomberie, sous-sol, accès et stationnement de chantier. DDO est à une dizaine de minutes de notre base à Pierrefonds-Roxboro.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée écrite poste par poste, inclusions et exclusions clairement nommées. Retour sous 24 à 48 heures ouvrables. Estimation gratuite.",
            },
            {
              number: "3",
              title: "Permis municipal",
              description:
                "Montage du dossier pour DDO : croquis, plans ou dessins détaillés illustrant clairement les travaux. Dépôt en ligne ou à l'hôtel de ville du 12001, boulevard De Salaberry.",
            },
            {
              number: "4",
              title: "Contrat écrit",
              description:
                "Budget, échéancier, séquence et modalités de paiement au contrat. Licence RBQ et assurances vérifiables avant le début des travaux.",
            },
            {
              number: "5",
              title: "Exécution coordonnée",
              description:
                "Démolition, structure, mécanique, finition : chaque corps de métier passe au bon moment. Un seul interlocuteur pour vous, du début à la fin.",
            },
            {
              number: "6",
              title: "Inspection et livraison",
              description:
                "Inspection municipale lorsque requise, liste de déficiences fermée avec vous, puis livraison. Travaux garantis, détails au contrat.",
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
          heading: "Pourquoi un entrepreneur général de l'Ouest-de-l'Île",
          intro:
            "À DDO, la plupart des propriétaires ne cherchent pas le prix le plus bas. Ils cherchent quelqu'un qui répond au téléphone en semaine trois du chantier.",
          items: [
            {
              title: "Licence RBQ vérifiable",
              description:
                "Licence 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 et 1.3. Aucune réclamation au dossier. Vérifiable au registre de la Régie du bâtiment.",
            },
            {
              title: "Un déplacement de dix minutes",
              description:
                "Notre base est rue Larocque, à Pierrefonds-Roxboro. Une visite imprévue à DDO ne coûte pas une demi-journée, ce qui change la vitesse à laquelle un imprévu se règle.",
            },
            {
              title: "Des maisons qu'on connaît par coeur",
              description:
                "Les développements de DDO se répètent. On sait d'avance quoi vérifier dans un split-level de 1968 ou un cottage de 1979 avant de s'engager sur un prix.",
            },
            {
              title: "La réglementation à jour",
              description:
                "Le zonage R-2025-199 et le plan d'urbanisme R-2024-190 sont récents. On valide auprès de la ville plutôt que de s'appuyer sur ce qui était permis avant 2025.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Les armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12). Un fournisseur de moins à coordonner entre la démolition et la finition.",
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
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Chantier de rénovation résidentielle à Dollard-des-Ormeaux",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Des centaines de chantiers résidentiels depuis 2004 dans l'Ouest-de-l'Île. Responsabilité civile et chantier assurées. Échéancier et budget fixés au contrat écrit, pas négociés en cours de route.",
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
            "On intervient partout à Dollard-des-Ormeaux : secteur Saint-Jean, Westpark, Sunnybrooke, Lake Road, Westwood, les abords du parc Centennial et de ses 48 hectares, ainsi que les rues résidentielles de part et d'autre du boulevard des Sources, du boulevard Saint-Jean et du boulevard De Salaberry.",
          columns: "3",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir, refaire et réorganiser la cuisine d'une maison de banlieue.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Salle familiale, bureau ou chambre, avec isolation reprise correctement.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge ou ajout d'étage sous le nouveau règlement de zonage.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Notre base, juste au nord du boulevard Saint-Jean.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "La ville voisine à l'ouest, de l'autre côté du boulevard Saint-Charles.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "Au sud, vers le lac Saint-Louis et le boulevard Hymus.",
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
          heading: "FAQ - rénovation à Dollard-des-Ormeaux",
          intro:
            "Permis, délais, prix, structure : les questions qui reviennent le plus souvent à DDO.",
          items: [
            {
              q: "Travaillez-vous régulièrement à Dollard-des-Ormeaux ?",
              a: "Oui. Notre base est au 18625, rue Larocque, à Pierrefonds-Roxboro, à une dizaine de minutes des secteurs Sunnybrooke, Westpark et Saint-Jean. DDO fait partie de notre territoire principal, pas d'une zone périphérique que nous desservons à l'occasion.",
            },
            {
              q: "Faut-il un permis pour rénover à DDO ?",
              a: "Dans la très grande majorité des cas, oui : la ville exige une demande de permis avant d'entreprendre des travaux de rénovation. Des croquis, plans ou dessins détaillés illustrant clairement les travaux prévus sont obligatoires. Les demandes peuvent être déposées en ligne ou à l'hôtel de ville. Nous montons le dossier dans le cadre du mandat.",
            },
            {
              q: "Le nouveau règlement de zonage change-t-il quelque chose pour mon projet ?",
              a: "Possiblement. Le programme d'urbanisme R-2024-190 est en vigueur depuis le 24 avril 2025 et le règlement de zonage R-2025-199 depuis le 16 mai 2025. Les marges, les hauteurs, les usages et les normes d'implantation ont pu être revus. Pour un agrandissement, un ajout d'étage ou un logement accessoire, on valide le cadre applicable auprès de la ville avant de dessiner quoi que ce soit.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon d'un split-level ?",
              a: "Souvent, oui, mais rarement sans travail structural. Dans les split-levels et bungalows de DDO, le mur central porte fréquemment une partie de la charge du plancher supérieur. La solution passe par une poutre correctement dimensionnée et des colonnes descendues jusqu'à une assise adéquate. C'est précisément le genre de décision qui doit être prise avant le contrat, pas découverte le matin de la démolition.",
            },
            {
              q: "Combien coûte une rénovation à Dollard-des-Ormeaux ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $. Une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon les travaux connexes. Le prix dépend de la portée, de l'état de la maison, des matériaux et de la coordination requise. L'estimation est gratuite et le budget est arrêté au contrat écrit.",
            },
            {
              q: "Mon voisin est mitoyen : est-ce que ça complique les travaux ?",
              a: "Dans les maisons en rangée et les jumelés des secteurs Lake Road, Sunnybrooke et Westwood, oui, il faut en tenir compte. Mur mitoyen, insonorisation, coupe-feu, accès de chantier et poussière se planifient dès le cadrage. On informe les voisins et on adapte les horaires plutôt que de gérer la plainte après coup.",
            },
            {
              q: "Combien de temps dure un chantier typique ?",
              a: "Une salle de bain se compte en semaines, une cuisine complète avec armoires sur mesure en mois — le délai de fabrication des armoires étant de 9 à 15 semaines et courant en parallèle du chantier. Un agrandissement dépend en plus du délai de permis. L'échéancier précis est inscrit au contrat une fois la portée arrêtée.",
            },
            {
              q: "Faites-vous aussi du commercial à DDO ?",
              a: "Oui. Nos catégories de licence RBQ couvrent les petits bâtiments et les bâtiments de tout genre, ce qui inclut l'aménagement de locaux commerciaux, par exemple le long du boulevard des Sources ou du boulevard Saint-Jean. La logique reste la même : portée écrite, permis, échéancier et un seul responsable.",
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
          heading: "Un projet de rénovation à Dollard-des-Ormeaux ?",
          intro:
            "Dites-nous ce que vous voulez faire. On vient voir la maison, on cadre la portée et on revient avec une soumission détaillée. Retour sous 24 à 48 heures ouvrables.",
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
