// Page zone : Beaconsfield.
// Sources consultées le 2026-09-18 :
// - Ville de Beaconsfield, « Urbanisme et permis » (conseillers en urbanisme et inspection
//   des bâtiments, 514 428-4430) : https://www.beaconsfield.ca/fr/services/urbanisme-et-permis
// - Ville de Beaconsfield, « Permis et certificats » :
//   https://www.beaconsfield.ca/fr/services/services-aux-citoyens/demande-de-permis-et-certificats
// - Ville de Beaconsfield, règlement de zonage no 720 (consolidé, 2025-08-01) :
//   https://www.beaconsfield.ca/storage/app/media/ma-ville/administration-et-finances/reglements/FR/720_consolide_fr_avec_liste_%202025-08-01_.pdf
// - Ville de Beaconsfield, « Demande d'abattage » (permis obligatoire ; exemption sous 10 cm
//   de diamètre mesuré à 1,5 m ; arbre à moins de 3 m de l'emprise d'une construction ; dépôt
//   de 500 $ pour les 5 premiers arbres + 100 $ par arbre additionnel, remboursé au
//   remplacement) : https://www.beaconsfield.ca/fr/demande-d-abattage-reglementation
// - Ville de Beaconsfield, « Contexte et histoire » (quartiers datés : Kensington Gardens 1951,
//   Forest Garden 1954, Drummond Park 1955, Edgewood Village 1960, Beacon Hill 1962,
//   Sherwood 1963 ; village Beaurepaire dès 1925 ; 1 050 hectares ; population de 990 en 1951
//   à 16 800 en 1967 ; cession de 5 % des terrains en espaces verts) :
//   https://www.beaconsfield.ca/fr/ma-ville/vivre-a-beaconsfield/contexte-et-histoire
// - Wikipédia, « Beaconsfield (Québec) » (19 277 hab. en 2021, 24,5 km2, gares Beaconsfield et
//   Beaurepaire sur la ligne Vaudreuil-Hudson) :
//   https://fr.wikipedia.org/wiki/Beaconsfield_(Québec)

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneBeaconsfieldPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Beaconsfield",
    description:
      "Entrepreneur général licencié RBQ à Beaconsfield : rénovation majeure, agrandissement, cuisine et sous-sol, avec zonage 720 et permis d'abattage.",
    path: "/zones/beaconsfield",
    ogAlt: "Rénovation résidentielle à Beaconsfield par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Beaconsfield", url: SITE.url + "/zones/beaconsfield" },
  ],
  service: {
    name: "Entrepreneur général à Beaconsfield",
    description:
      "Rénovation résidentielle majeure, agrandissement, cuisine, salle de bain et sous-sol à Beaconsfield, par un entrepreneur général licencié RBQ de l'Ouest-de-l'Île.",
    url: SITE.url + "/zones/beaconsfield",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Beaconsfield",
      "Beaurepaire",
      "Kensington Gardens",
      "Forest Garden",
      "Drummond Park",
      "Beacon Hill",
      "Sherwood",
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
          eyebrow: "Dilamco - Beaconsfield",
          heading:
            "Entrepreneur général à Beaconsfield : rénover une banlieue planifiée des années 1950 et 1960",
          description:
            "Beaconsfield est passée de 990 résidents en 1951 à 16 800 en 1967. Presque toute la ville a été bâtie en quinze ans, quartier par quartier, avec une planification serrée et une exigence de verdure qui vaut encore aujourd'hui. On y rénove des maisons de soixante et soixante-dix ans, sur des terrains boisés où l'on ne coupe pas un arbre sans permis. Licence RBQ 8306-0806-27, valide depuis 2004.",
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
            "Rénovation majeure",
            "Beaconsfield",
            "Assuré",
          ],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Rénovation intérieure d'une maison de Beaconsfield",
          },
          caption:
            "Beaurepaire, Beacon Hill, Sherwood et le Lakeshore - Ouest-de-l'Île",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Beaconsfield",
          description:
            "Environ 19 300 résidents sur 24,5 km2, soit une densité d'à peine 787 habitants au kilomètre carré : la plus faible de l'Ouest-de-l'Île urbanisé. La ville s'étend sur 1 050 hectares le long du lac Saint-Louis. Elle a été bâtie de façon ordonnée et planifiée, avec une priorité aux résidences unifamiliales, aux rues bordées d'arbres et aux parcs — les promoteurs devant céder 5 % des terrains développés en espaces verts publics. Cette histoire se lit encore dans chaque chantier.",
          cards: [
            {
              title: "Des quartiers qu'on peut dater à l'année",
              description:
                "Kensington Gardens en 1951, Forest Garden en 1954, Drummond Park en 1955, Edgewood Village en 1960, Beacon Hill en 1962, Sherwood en 1963. Le village Beaurepaire, lui, s'est développé comme noyau commercial dès 1925, et l'ancien club de golf Beaurepaire, ouvert en 1926 au nord de l'avenue Woodland, a été loti en terrains résidentiels à partir de la fin des années 1990 — ce qui explique la présence de maisons beaucoup plus récentes dans un secteur autrement ancien. Savoir de quelle année date un quartier, c'est savoir d'avance à quel type d'isolation, de charpente, de plomberie et de panneau électrique on va se heurter.",
            },
            {
              title: "Soixante-dix ans d'usure, tous les systèmes en même temps",
              description:
                "Une maison de Kensington Gardens ou de Forest Garden a aujourd'hui plus de soixante-dix ans. Une maison de Beacon Hill ou de Sherwood en a plus de soixante. À cette échéance, ce n'est plus un système qui arrive à terme mais tous en même temps : entrée électrique, plomberie, fenêtres, isolation, toiture, cuisine et salles de bain d'origine. C'est pourquoi une part importante de nos mandats à Beaconsfield sont des rénovations majeures plutôt que des interventions ponctuelles : une seule mobilisation, une seule protection des lieux, une seule finition.",
            },
            {
              title: "La canopée est réglementée, pas décorative",
              description:
                "À Beaconsfield, il est interdit d'abattre un arbre sur un terrain privé sans avoir obtenu un permis. L'autorisation n'est pas requise si le diamètre du tronc est inférieur à 10 cm mesuré à 1,5 m du sol. Un arbre situé à moins de 3 m de l'emprise d'une construction projetée peut être abattu, mais uniquement si la construction ne peut être implantée ailleurs sur le terrain. Chaque arbre coupé doit être remplacé : la demande de certificat exige un dépôt de 500 $ pour les cinq premiers arbres, plus 100 $ par arbre additionnel, remboursé une fois le remplacement effectué selon les conditions du règlement de zonage 720. Pour un agrandissement, ça influence directement l'implantation.",
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
          heading: "Ce qu'on réalise à Beaconsfield",
          intro:
            "Les mandats les plus fréquents dans une ville dont le parc bâti a majoritairement entre soixante et soixante-quinze ans.",
          columns: "2",
          items: [
            {
              title: "Rénovation majeure complète",
              description:
                "Reprendre une maison des années 1950 ou 1960 d'un seul coup.",
              icon: "hardHat",
              bullets: [
                "Cuisine, salles de bain, planchers, portes, moulures et peinture dans une séquence unique.",
                "Entrée électrique et plomberie mises à niveau pendant que les murs sont ouverts.",
                "Un seul échéancier écrit plutôt que dix ans de petits chantiers successifs.",
              ],
            },
            {
              title: "Rénovation de cuisine",
              description:
                "La cuisine fermée d'origine, rarement adaptée à l'usage actuel.",
              icon: "chefHat",
              bullets: [
                "Mur porteur analysé et poutre dimensionnée avant la démolition.",
                "Circuits électriques et ventilation planifiés avec le design.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Souvent deux ou trois salles de bain jamais rénovées.",
              icon: "bath",
              bullets: [
                "Membrane d'étanchéité complète avant toute céramique.",
                "Ventilation ajoutée et évacuée à l'extérieur, pas dans l'entretoit.",
                "Séquence planifiée pour garder une salle de bain fonctionnelle pendant les travaux.",
              ],
            },
            {
              title: "Agrandissement de maison",
              description:
                "Gagner de la surface sur un terrain boisé et réglementé.",
              icon: "building2",
              bullets: [
                "Implantation étudiée en fonction des arbres à conserver et du règlement d'abattage.",
                "Marges, hauteurs et occupation du sol validées sous le règlement de zonage 720.",
                "Fondation, structure, enveloppe et raccord avec l'existant sous un seul contrat.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Des sous-sols souvent partiellement finis dans les années 1970.",
              icon: "sofa",
              bullets: [
                "Ancienne finition retirée, humidité et drainage évalués avant de refermer.",
                "Isolation et pare-vapeur repris selon les règles actuelles.",
                "Salle familiale, bureau, salle d'entraînement ou chambre supplémentaire.",
              ],
            },
            {
              title: "Enveloppe et efficacité",
              description:
                "Corriger ce qui rend une maison d'époque inconfortable.",
              icon: "layers",
              bullets: [
                "Isolation de l'entretoit et étanchéité à l'air reprises correctement.",
                "Portes et fenêtres remplacées avec des solins et une pose soignés.",
                "Travaux d'enveloppe planifiés de la fin du printemps à l'automne.",
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
          heading: "Comment se déroule un projet à Beaconsfield",
          intro:
            "Une séquence stable, avec une étape que peu d'entrepreneurs anticipent à Beaconsfield : la question des arbres.",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "Relevé de la maison et du terrain : structure, panneau, plomberie, fondation, mais aussi arbres et végétation à proximité de la zone de travaux.",
            },
            {
              number: "2",
              title: "Faisabilité réglementaire",
              description:
                "Vérification des marges, des hauteurs et de l'occupation du sol sous le règlement de zonage 720, et validation auprès des conseillers en urbanisme et inspection des bâtiments de la ville.",
            },
            {
              number: "3",
              title: "Soumission détaillée",
              description:
                "Portée écrite poste par poste, inclusions et exclusions nommées clairement. Retour sous 24 à 48 heures ouvrables après la visite. Estimation gratuite.",
            },
            {
              number: "4",
              title: "Permis et certificats",
              description:
                "Permis de construction et, si un arbre doit être abattu, certificat d'autorisation d'abattage avec le dépôt exigé et l'engagement de remplacement.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Corps de métier séquencés, protection des arbres conservés, gestion de l'accès et des débris. Un seul interlocuteur du début à la fin.",
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
          heading: "Pourquoi un entrepreneur général pour une maison de Beaconsfield",
          intro:
            "Sur une maison de soixante-dix ans, l'écart entre deux soumissions ne vient presque jamais du prix des matériaux. Il vient de ce qui a été prévu, ou non, avant d'ouvrir les murs.",
          items: [
            {
              title: "Un diagnostic avant le prix",
              description:
                "Entrée électrique, plomberie, isolation, charpente : on regarde ce qui va réellement devoir être touché plutôt que de soumissionner la portée visible et d'ajouter des extras en cours de route.",
            },
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 et 1.3, aucune réclamation au dossier. Vérifiable au registre de la Régie du bâtiment.",
            },
            {
              title: "Le règlement d'abattage pris en compte",
              description:
                "Un agrandissement mal implanté peut déclencher une demande d'abattage inutile, un dépôt et une obligation de remplacement. On dessine en fonction des arbres à conserver.",
            },
            {
              title: "Un seul contrat pour une rénovation majeure",
              description:
                "Quand une maison est reprise en entier, le nombre de corps de métier explose. Un entrepreneur général, un échéancier, un budget écrit : c'est là que la coordination se paie toute seule.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12) : un intervenant de moins entre la démolition et la finition.",
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
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un agrandissement à Beaconsfield",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Entrepreneur général depuis 2004, des centaines de chantiers résidentiels dans l'Ouest-de-l'Île. Responsabilité civile et chantier assurées. Échéancier et budget fixés au contrat écrit.",
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
            "On intervient dans tous les secteurs de Beaconsfield : Beaurepaire et son village commercial, Kensington Gardens, Forest Garden, Drummond Park, Edgewood Village, Beacon Hill, Sherwood, les rues riveraines du chemin du Bord-du-Lac—Lakeshore et les quartiers desservis par les gares Beaconsfield et Beaurepaire de la ligne Vaudreuil-Hudson.",
          columns: "3",
          items: [
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Implantation pensée avec les arbres à conserver et le zonage 720.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir et refaire la cuisine d'origine d'une maison des années 1950.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité, ventilation et plomberie reprises correctement.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "La ville voisine au nord-est, de l'autre côté de l'autoroute 20.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "À l'est, l'autre ville riveraine du lac Saint-Louis.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Notre base, au nord de l'Ouest-de-l'Île.",
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
          heading: "FAQ - rénovation à Beaconsfield",
          intro:
            "Permis, arbres, budget et déroulement : les questions les plus fréquentes des propriétaires de Beaconsfield.",
          items: [
            {
              q: "Faut-il un permis pour rénover à Beaconsfield ?",
              a: "Dans la plupart des cas, oui. La ville met à disposition des conseillers en urbanisme et en inspection des bâtiments pour vérifier si un permis est requis pour un projet de rénovation ou de construction. Dès qu'on touche à la structure, à l'enveloppe, à l'implantation ou à un usage, il faut passer par le service d'urbanisme. Nous montons le dossier dans le cadre du mandat.",
            },
            {
              q: "Puis-je couper un arbre pour faire de la place à mon agrandissement ?",
              a: "Pas sans autorisation. Il est interdit d'abattre un arbre sur un terrain privé à Beaconsfield sans avoir obtenu un permis au préalable. Un arbre situé dans l'emprise d'une construction projetée, ou à moins de trois mètres de celle-ci, peut être abattu, mais seulement si la construction ne peut pas être implantée ailleurs sur le terrain. C'est pourquoi on étudie l'implantation avant de dessiner.",
            },
            {
              q: "Combien coûte le certificat d'abattage ?",
              a: "La ville exige un dépôt de 500 $ pour les cinq premiers arbres, plus 100 $ par arbre additionnel, afin de garantir l'obligation de remplacement prévue au règlement de zonage 720. Ce dépôt est remboursé une fois l'arbre remplacé selon les conditions du règlement. Aucune autorisation n'est requise si le diamètre du tronc est inférieur à 10 cm mesuré à 1,5 m du sol.",
            },
            {
              q: "Ma maison a soixante-dix ans : vaut-il mieux rénover par étapes ?",
              a: "Rarement, quand plusieurs systèmes arrivent à échéance en même temps. Chaque petit chantier repaie la mobilisation, la protection des lieux, la gestion des débris et la finition. Une rénovation majeure planifiée en une seule séquence coûte généralement moins cher au total et évite de refaire deux fois les mêmes murs. Nous pouvons aussi découper le projet en phases contractuelles si le budget l'exige.",
            },
            {
              q: "Combien coûte une rénovation à Beaconsfield ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $. Une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus. Une rénovation majeure ou un agrandissement se situe dans un ordre de grandeur supérieur. Le prix exact vient de la soumission détaillée, après la visite. L'estimation est gratuite.",
            },
            {
              q: "À quelle distance êtes-vous de Beaconsfield ?",
              a: "Notre base est au 18625, rue Larocque, à Pierrefonds-Roxboro, à une quinzaine à une vingtaine de minutes de Beaconsfield selon le secteur. C'est assez proche pour qu'une visite de suivi ou un imprévu ne coûte pas une demi-journée de déplacement.",
            },
            {
              q: "Peut-on faire des travaux d'enveloppe en hiver ?",
              a: "Les travaux intérieurs se font toute l'année. La toiture, le revêtement extérieur, l'excavation et les fondations sont plus sensibles au gel et se planifient plutôt de la fin du printemps à l'automne. L'hiver reste le bon moment pour préparer les plans, obtenir le permis et le certificat d'abattage, et démarrer au dégel.",
            },
            {
              q: "Construisez-vous des maisons neuves à Beaconsfield ?",
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
          heading: "Un projet de rénovation à Beaconsfield ?",
          intro:
            "On vient relever la maison et le terrain, on valide ce que permettent le zonage 720 et le règlement d'abattage, puis on revient avec une portée écrite et un prix. Estimation gratuite.",
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
