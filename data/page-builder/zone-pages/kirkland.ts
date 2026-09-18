// Page zone : Kirkland.
// Sources consultées le 2026-09-18 :
// - Ville de Kirkland, « Aménagement urbain et environnement » (service responsable des permis
//   de construction, certificats d'autorisation et inspections ; hôtel de ville, 17200 boul.
//   Hymus ; 514 694-4100 ; urbanisme@ville.kirkland.qc.ca) :
//   https://www.ville.kirkland.qc.ca/portrait-municipal/services-municipaux/amenagement-urbain
// - Ville de Kirkland, « Rénovations domiciliaires » (permis ou certificat requis pour la
//   plupart des rénovations intérieures et extérieures) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/renovations-domiciliaires
// - Ville de Kirkland, « Faire une demande de permis » (portail Gestion des permis en ligne) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/demande-de-permis
// - Ville de Kirkland, « Travaux d'excavation » (certificat distinct) :
//   https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/travaux-d-excavation
// - Ville de Kirkland, « Entrepreneurs » : https://www.ville.kirkland.qc.ca/services-aux-citoyens/permis-et-certificats/entrepreneurs
// - Wikipédia, « Kirkland (Québec) » (19 413 hab. en 2021, 9,6 km2, constituée en 1961,
//   reconstituée le 1er janvier 2006, ville coupée en deux par l'autoroute Transcanadienne,
//   parc industriel de part et d'autre de l'A-40, huit districts) :
//   https://fr.wikipedia.org/wiki/Kirkland_(Québec)

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Kirkland — rénovation",
    description:
      "Entrepreneur général licencié RBQ à Kirkland : rénovation complète, agrandissement, cuisine et sous-sol sur les grands terrains de l'Ouest-de-l'Île.",
    path: "/zones/kirkland",
    ogAlt: "Rénovation résidentielle à Kirkland par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Kirkland", url: SITE.url + "/zones/kirkland" },
  ],
  service: {
    name: "Entrepreneur général à Kirkland",
    description:
      "Rénovation résidentielle, agrandissement, cuisine, salle de bain et sous-sol à Kirkland, par un entrepreneur général licencié RBQ établi dans l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/kirkland",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Kirkland",
      "Timberlea",
      "Boul. Hymus",
      "Boul. Saint-Charles",
      "Boul. Brunswick",
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
          eyebrow: "Dilamco - Kirkland",
          heading:
            "Entrepreneur général à Kirkland : rénovation et agrandissement sur de grands terrains",
          description:
            "Kirkland est une ville de moins de 20 000 résidents sur 9,6 km2, avec une densité résidentielle parmi les plus basses de l'Ouest-de-l'Île. Grands terrains, maisons unifamiliales détachées, et des propriétaires qui agrandissent plutôt que de déménager. Notre base est rue Larocque, à Pierrefonds-Roxboro, à une quinzaine de minutes du boulevard Saint-Charles. Licence RBQ 8306-0806-27, catégories entrepreneur général 1.2 et 1.3.",
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
            "Agrandissement",
            "Kirkland",
            "Assuré",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à Kirkland",
          },
          caption:
            "De part et d'autre de l'autoroute 40 - Ouest-de-l'Île",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Kirkland",
          description:
            "Kirkland a été constituée en municipalité en 1961, puis reconstituée le 1er janvier 2006 après le passage par les fusions municipales. Son développement a été façonné par un élément physique : la construction de l'autoroute Transcanadienne dans les années 1960, qui coupe la ville en deux. Le parc industriel s'est installé de part et d'autre de l'autoroute 40 — Merck, Pfizer, Nissan, des entreprises du secteur aérospatial — tandis que le reste du territoire est demeuré résidentiel. Ça donne une ville à deux vitesses et un parc de maisons très homogène.",
          cards: [
            {
              title: "De grands terrains et des maisons détachées",
              description:
                "Avec environ 2 000 habitants au kilomètre carré, Kirkland est nettement moins dense que ses voisines. L'essentiel du bâti résidentiel est constitué de maisons unifamiliales détachées sur des terrains généreux, bâties de la fin des années 1960 aux années 1980, avec des secteurs plus récents ajoutés par la suite. Concrètement, ça veut dire des projets d'agrandissement latéral et arrière réellement faisables, des garages doubles à convertir, des sous-sols de bonne hauteur et un accès de chantier confortable — ce qui simplifie l'installation d'un conteneur et la livraison des matériaux, contrairement aux rues serrées de certains secteurs voisins.",
            },
            {
              title: "Une génération de maisons arrivée à échéance",
              description:
                "Une maison de Kirkland construite dans les années 1970 arrive aujourd'hui à la fin de vie de plusieurs systèmes en même temps : fenêtres remplacées une fois, toiture à refaire, panneau électrique à moderniser pour supporter une borne de recharge, isolation de l'entretoit sous les normes actuelles, cuisine fermée d'origine, deux salles de bain jamais rénovées. Rénover pièce par pièce sur dix ans coûte plus cher qu'une rénovation majeure planifiée en une seule séquence, parce qu'on repaie chaque fois la mobilisation, la protection des lieux et la finition.",
            },
            {
              title: "Un service municipal centralisé et exigeant",
              description:
                "À Kirkland, le Service de l'aménagement urbain et de l'environnement délivre les permis de construction et les certificats d'autorisation, inspecte les bâtiments et applique les règlements d'urbanisme — zonage, lotissement, construction. Pour la plupart des rénovations, intérieures comme extérieures, il faut consulter la municipalité et obtenir un permis ou un certificat avant d'entreprendre les travaux. Les demandes passent par le portail Gestion des permis en ligne, ou en personne à l'hôtel de ville, au 17200, boulevard Hymus. Les travaux d'excavation exigent leur propre certificat, à ne pas confondre avec le permis de construction.",
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
          heading: "Ce qu'on réalise à Kirkland",
          intro:
            "Les mandats les plus fréquents dans une ville de maisons détachées sur grands terrains, et ce que chacun implique sur place.",
          columns: "2",
          items: [
            {
              title: "Agrandissement de maison",
              description:
                "Le mandat signature à Kirkland, grâce à la taille des terrains.",
              icon: "building2",
              bullets: [
                "Rallonge arrière ou latérale, ajout d'étage, solarium quatre saisons.",
                "Certificat d'excavation et permis de construction obtenus séparément, comme l'exige la ville.",
                "Fondation, structure, enveloppe, toiture et raccord avec l'existant sous un seul contrat.",
              ],
            },
            {
              title: "Rénovation majeure complète",
              description:
                "Reprendre une maison des années 1970 d'un seul coup.",
              icon: "hardHat",
              bullets: [
                "Cuisine, salles de bain, planchers, portes et finition dans une seule séquence.",
                "Mise à niveau du panneau électrique et de la plomberie pendant l'ouverture des murs.",
                "Échéancier unique plutôt qu'une série de petits chantiers étalés sur dix ans.",
              ],
            },
            {
              title: "Rénovation de cuisine",
              description:
                "Ouvrir la cuisine fermée d'origine sur les aires de vie.",
              icon: "chefHat",
              bullets: [
                "Analyse du mur à ouvrir et poutre dimensionnée avant la démolition.",
                "Îlot, ventilation et circuits électriques planifiés avec le design, pas après.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Souvent deux ou trois salles de bain à reprendre dans la même maison.",
              icon: "bath",
              bullets: [
                "Étanchéité refaite complètement avant la céramique.",
                "Ventilation corrigée et évacuée vers l'extérieur.",
                "Séquence planifiée pour garder au moins une salle de bain fonctionnelle.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Des sous-sols de bonne hauteur, souvent seulement partiellement finis.",
              icon: "sofa",
              bullets: [
                "Salle familiale, cinéma maison, bureau, salle d'entraînement ou chambre d'invités.",
                "Isolation et pare-vapeur repris selon les règles actuelles.",
                "Salle de bain complète ajoutée quand le drain et la hauteur le permettent.",
              ],
            },
            {
              title: "Conversion de garage et annexes",
              description:
                "Transformer de la surface non habitable en pièce utilisable.",
              icon: "doorOpen",
              bullets: [
                "Garage double converti en bureau, en salle familiale ou en atelier.",
                "Isolation, chauffage, électricité et fenestration mis aux normes d'une pièce habitée.",
                "Usage et conformité validés auprès du Service de l'aménagement urbain.",
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
          heading: "Comment se déroule un projet à Kirkland",
          intro:
            "À Kirkland, la majorité des projets touchent l'enveloppe ou la structure. Le permis n'est pas une formalité de fin de parcours : c'est la première étape après le cadrage.",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "Relevé des dimensions, de la structure, du panneau, de la fondation et de l'espace disponible sur le terrain. Kirkland est à une quinzaine de minutes de notre base à Pierrefonds-Roxboro.",
            },
            {
              number: "2",
              title: "Faisabilité réglementaire",
              description:
                "Vérification des marges, de l'implantation et des normes applicables auprès du Service de l'aménagement urbain et de l'environnement avant d'engager des frais de plans.",
            },
            {
              number: "3",
              title: "Soumission détaillée",
              description:
                "Portée écrite, poste par poste, avec inclusions et exclusions. Retour sous 24 à 48 heures ouvrables après la visite. Estimation gratuite.",
            },
            {
              number: "4",
              title: "Permis et certificats",
              description:
                "Demande déposée via le portail Gestion des permis en ligne ou à l'hôtel de ville du 17200, boulevard Hymus. Le certificat d'excavation, quand il s'applique, se demande séparément.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Excavation, fondation, structure, mécanique, enveloppe et finition séquencées. Un seul responsable pour les questions et les changements, documentés par écrit.",
            },
            {
              number: "6",
              title: "Inspections et livraison",
              description:
                "Inspections municipales aux étapes prévues, liste de déficiences fermée avec vous, puis livraison. Travaux garantis, détails au contrat.",
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
          heading: "Pourquoi un entrepreneur général pour un projet de Kirkland",
          intro:
            "Un agrandissement met en jeu l'excavation, la fondation, la structure, la toiture, l'enveloppe, la mécanique et la finition. Sept métiers. Sans responsable unique, ce sont sept calendriers qui se contredisent.",
          items: [
            {
              title: "Un seul contrat, un seul responsable",
              description:
                "Vous ne coordonnez pas l'excavatrice, le charpentier, le couvreur, l'électricien et le plâtrier. C'est notre travail, et c'est écrit au contrat.",
            },
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Vérifiable au registre de la Régie du bâtiment.",
            },
            {
              title: "Le permis traité comme une étape de projet",
              description:
                "Kirkland exige un permis ou un certificat pour la plupart des rénovations, et un certificat distinct pour l'excavation. On le prévoit dans l'échéancier plutôt que de le découvrir la semaine du démarrage.",
            },
            {
              title: "Assurances et conformité",
              description:
                "Responsabilité civile et chantier assurées, travaux réalisés en conformité avec le Code de construction du Québec. Aucune réclamation au dossier de licence.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12) : un intervenant de moins entre la structure et la finition.",
            },
          ],
          actions: [
            {
              label: "Voir le service d'agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Agrandissement et rénovation majeure d'une maison de Kirkland",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Entrepreneur général depuis 2004, des centaines de chantiers résidentiels dans l'Ouest-de-l'Île. Échéancier et budget fixés au contrat écrit. Travaux garantis, détails au contrat.",
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
            "On intervient dans les huit districts de Kirkland, au nord comme au sud de l'autoroute 40 : les rues résidentielles autour du boulevard Saint-Charles, du boulevard Brunswick et du chemin Sainte-Marie, le secteur Timberlea, ainsi que les locaux commerciaux et industriels du boulevard Hymus.",
          columns: "3",
          items: [
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou conversion de garage, permis inclus.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir la cuisine fermée d'origine et refaire les aires de vie.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Finir un sous-sol de bonne hauteur, isolation reprise correctement.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "La ville voisine au sud-ouest, vers le lac Saint-Louis.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "À l'est, le long du boulevard Hymus et du boulevard Saint-Jean.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Au nord-est, de l'autre côté du boulevard Saint-Charles.",
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
          heading: "FAQ - rénovation à Kirkland",
          intro:
            "Permis, excavation, budget et déroulement : les questions les plus fréquentes des propriétaires de Kirkland.",
          items: [
            {
              q: "Faut-il un permis pour rénover à Kirkland ?",
              a: "Oui, dans la plupart des cas. La ville indique que pour entreprendre des rénovations domiciliaires, intérieures ou extérieures, il faut d'abord consulter la municipalité et, la plupart du temps, obtenir un permis de construction ou un certificat d'autorisation délivré par le Service de l'aménagement urbain et de l'environnement. Nous montons le dossier dans le cadre du mandat.",
            },
            {
              q: "Comment se fait une demande de permis à Kirkland ?",
              a: "Par le portail Gestion des permis en ligne, qui permet de déposer la demande, d'en suivre l'état et, dans plusieurs cas, de payer les frais et d'obtenir le permis sans se déplacer. Il est aussi possible de la déposer en personne à l'hôtel de ville, au 17200, boulevard Hymus, pendant les heures d'ouverture.",
            },
            {
              q: "Un agrandissement exige-t-il un permis distinct pour l'excavation ?",
              a: "Kirkland traite les travaux d'excavation comme une demande distincte du permis de construction. Pour un agrandissement avec fondation, il faut donc prévoir les deux. Nous obtenons les autorisations requises et les intégrons à l'échéancier, plutôt que de les découvrir la semaine du démarrage.",
            },
            {
              q: "Combien coûte une rénovation majeure à Kirkland ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $, et une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus. Un agrandissement avec fondation se situe dans un ordre de grandeur supérieur, puisqu'il ajoute l'excavation, la structure, la toiture et l'enveloppe. Le prix exact vient de la soumission détaillée, après la visite. L'estimation est gratuite.",
            },
            {
              q: "Peut-on agrandir une maison sur un terrain de Kirkland ?",
              a: "Souvent oui : les terrains de Kirkland sont généralement plus grands que la moyenne de l'Ouest-de-l'Île. Ce qui décide, ce sont les marges de recul, le pourcentage d'occupation du sol et les normes applicables dans votre zone. On valide la faisabilité auprès du Service de l'aménagement urbain avant d'engager des frais de plans.",
            },
            {
              q: "Combien de temps dure un agrandissement ?",
              a: "Plusieurs mois, avec une part importante de délai avant même le premier coup de pelle : plans, permis, certificat d'excavation et commandes de matériaux. Une fois le chantier ouvert, la séquence excavation, fondation, structure, enveloppe, mécanique et finition est continue. L'échéancier précis est inscrit au contrat.",
            },
            {
              q: "Faites-vous des aménagements de locaux commerciaux à Kirkland ?",
              a: "Oui. Le parc industriel s'étend de part et d'autre de l'autoroute 40, et le boulevard Hymus compte plusieurs locaux commerciaux. Nos catégories de licence RBQ couvrent les petits bâtiments et les bâtiments de tout genre, ce qui inclut l'aménagement de locaux commerciaux et de bureaux.",
            },
            {
              q: "Construisez-vous des maisons neuves à Kirkland ?",
              a: "Non. Nous sommes entrepreneur général en rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maison neuve et n'offrons pas de plan de garantie pour bâtiment résidentiel neuf.",
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
          heading: "Un projet de rénovation ou d'agrandissement à Kirkland ?",
          intro:
            "On se déplace, on relève la maison et le terrain, on valide la faisabilité réglementaire, puis on revient avec une portée écrite et un prix. Retour sous 24 à 48 heures ouvrables.",
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
