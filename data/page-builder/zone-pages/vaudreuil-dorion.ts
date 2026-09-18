// Sources locales (consultées le 2026-09-18) :
// - Ville de Vaudreuil-Dorion, « Permis » (Division permis et inspections,
//   450 455-3371, infourbanisme@ville.vaudreuil-dorion.qc.ca ; demande en ligne
//   sur vaudreuil-dorion.edemandes.com ; « Aucun permis n'est délivré sur
//   place » ; paiement de la facture avant délivrance ; tarifs au règlement
//   no 1709) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/reglementation/permis
// - Ville de Vaudreuil-Dorion, « Services municipaux » (Service de l'urbanisme
//   composé de la Division urbanisme, de la Division permis et inspections et de
//   la Section patrouille municipale) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/administration-municipale/services-municipaux
// - Ville de Vaudreuil-Dorion, « Règlements et plan d'urbanisme » et « Révision du
//   plan et des règlements d'urbanisme » (PPU Harwood – De Lotbinière, mise à jour
//   du 12 novembre 2025) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/reglementation/reglements-et-plan-d-urbanisme
// - Ville de Vaudreuil-Dorion, « Portrait de la Ville » et progression de la
//   population depuis 1995 (environ 18 600 habitants en 1995, environ 46 000 en
//   2025) :
//   https://www.ville.vaudreuil-dorion.qc.ca/fr/la-ville/information/portrait-de-la-ville
// - Statistique Canada, Recensement de 2021 : 43 268 habitants, variation de
//   13,5 % par rapport à 2016 :
//   https://www12.statcan.gc.ca/census-recensement/2021/as-sa/fogs-spg/Page.cfm?lang=F&topic=1&dguid=2021A00052471083
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneVaudreuilDorionPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Vaudreuil-Dorion — rénovation",
    description:
      "Entrepreneur général RBQ à Vaudreuil-Dorion : rénovation de maisons des années 2000, sous-sols, permis de la Division permis et inspections.",
    path: "/zones/vaudreuil-dorion",
    ogAlt: "Rénovation résidentielle à Vaudreuil-Dorion par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Vaudreuil-Dorion", url: SITE.url + "/zones/vaudreuil-dorion" },
  ],
  service: {
    name: "Entrepreneur général à Vaudreuil-Dorion",
    description:
      "Rénovation résidentielle clé en main à Vaudreuil-Dorion et dans Vaudreuil-Soulanges : cadrage, permis municipal, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/vaudreuil-dorion",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Vaudreuil-Dorion",
      "Dorion",
      "Harwood",
      "Cité-des-Jeunes",
      "Hudson",
      "Saint-Lazare",
      "Vaudreuil-Soulanges",
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
            "Entrepreneur général à Vaudreuil-Dorion : rénover une ville qui a doublé de taille",
          description:
            "Vaudreuil-Dorion comptait environ 18 600 habitants en 1995 et en compte près de 46 000 aujourd'hui. Cette croissance a laissé un parc résidentiel très typé : de grands quartiers construits entre 2000 et 2020, et un noyau plus ancien dans le secteur Dorion. Depuis Pierrefonds-Roxboro, on y accède par l'autoroute 40 en une trentaine de minutes. Licence RBQ valide, un seul responsable du permis à la livraison.",
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
          badges: [
            "Vaudreuil-Dorion",
            "Vaudreuil-Soulanges",
            "RBQ 8306-0806-27",
          ],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Cuisine rénovée dans une maison de Vaudreuil-Dorion",
          },
          caption: "Vaudreuil-Dorion, Hudson, Saint-Lazare et l'Île-Perrot",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Vaudreuil-Dorion",
          description:
            "La ville a été recensée à 43 268 habitants en 2021, une hausse de 13,5 % par rapport à 2016. Ce rythme de croissance explique une bonne partie du parc immobilier actuel : beaucoup de maisons de moins de vingt-cinq ans, construites vite, dans des quartiers planifiés, à côté d'un vieux Dorion beaucoup plus ancien.",
          cards: [
            {
              title: "Les quartiers des années 2000-2020",
              description:
                "Le secteur Château de la Gare, organisé en rues circulaires autour du parc Aurèle-Joliat, regroupe des maisons de la fin des années 1990 et du début des années 2000. Autour du boulevard de la Cité-des-Jeunes, les constructions sont plus récentes et plus grandes. Sur ces maisons, la structure et l'enveloppe sont généralement saines : les projets portent sur l'aménagement — ouvrir la cuisine, finir le sous-sol, ajouter une salle de bain, refaire un rangement mal conçu à la livraison.",
            },
            {
              title: "Le secteur Dorion et l'avenue Saint-Charles",
              description:
                "Autour de l'avenue Saint-Charles, dans le vieux Dorion, on trouve des maisons antérieures à 1960. Les volumes sont plus petits, les plafonds plus bas, les systèmes souvent d'origine et les agrandissements successifs mal raccordés. Ce sont des chantiers où le relevé de l'existant est déterminant et où l'on découvre régulièrement des surprises à la démolition.",
            },
            {
              title: "Harwood et les corridors en transformation",
              description:
                "Le boulevard Harwood – De Lotbinière fait l'objet d'un programme particulier d'urbanisme, mis à jour en novembre 2025, qui vise une requalification en secteur mixte plus dense. La réglementation d'urbanisme de la ville est par ailleurs en révision. Concrètement : il faut valider les règles applicables à votre adresse au moment du projet, pas se fier à ce qui s'appliquait il y a trois ans.",
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
          heading: "Ce qu'on réalise à Vaudreuil-Dorion",
          intro:
            "Entrepreneur général licencié RBQ, catégories 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Un seul contrat pour le permis, la séquence et l'ensemble des corps de métier.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Le projet numéro un dans les maisons livrées entre 2000 et 2015.",
              icon: "chefHat",
              bullets: [
                "Remplacement des armoires d'origine par des armoires sur mesure mieux dimensionnées.",
                "Îlot, rangement et circulation revus selon l'usage réel de la famille.",
                "Armoires fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Beaucoup de maisons récentes ont été livrées avec un sous-sol non fini.",
              icon: "layers",
              bullets: [
                "Plan complet : salle familiale, chambre, salle de bain et rangement.",
                "Issue, fenestration et séparation coupe-feu conformes au Code de construction du Québec.",
                "Contrôle de l'humidité et du drain avant de fermer les murs.",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Reprise d'une salle de bain d'origine ou ajout d'une salle d'eau.",
              icon: "bath",
              bullets: [
                "Membrane, drain, pente et ventilation refaits jusqu'au support.",
                "Plomberie repositionnée quand la configuration l'exige.",
                "Séquence plombier, électricien et carreleur planifiée au contrat.",
              ],
            },
            {
              title: "Agrandissement de maison",
              description:
                "Ajouter une pièce, un garage ou un étage sur un terrain de banlieue récente.",
              icon: "building2",
              bullets: [
                "Zonage, marges et règles applicables validés auprès de la Division permis et inspections.",
                "Fondation, structure et raccordement au bâtiment existant coordonnés en une séquence.",
                "Échéancier bâti autour du délai réel de traitement de la demande.",
              ],
            },
            {
              title: "Rénovation de maison ancienne",
              description:
                "Secteur Dorion et abords de l'avenue Saint-Charles.",
              icon: "hammer",
              bullets: [
                "Relevé sérieux de la charpente, des niveaux et des systèmes avant tout plan.",
                "Mise à niveau électrique et plomberie intégrée à la portée dès le départ.",
                "Raccords entre les agrandissements successifs repris proprement.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement ou incendie : un chantier à coordonner.",
              icon: "droplets",
              bullets: [
                "Démolition sélective, assèchement et assainissement avant reconstruction.",
                "Travaux documentés pour le dossier d'assurance du propriétaire.",
                "Un seul interlocuteur entre les corps de métier et la date de retour.",
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
          heading: "Comment se déroule un projet à Vaudreuil-Dorion",
          intro:
            "Le Service de l'urbanisme de la Ville regroupe la Division urbanisme, la Division permis et inspections et la Section patrouille municipale. C'est la Division permis et inspections qui accompagne les demandes et applique la réglementation.",
          steps: [
            {
              number: "1",
              title: "Visite et cadrage",
              description:
                "Relevé de la maison, de son année de construction et de la portée souhaitée. On identifie tout de suite le type de permis requis.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions, échéancier et budget écrits. Retour sous 24 à 48 heures ouvrables après la visite.",
            },
            {
              number: "3",
              title: "Vérification réglementaire",
              description:
                "Les règlements d'urbanisme de la ville sont en révision et certains secteurs, comme le corridor Harwood – De Lotbinière, font l'objet d'un programme particulier. On valide les règles applicables à votre adresse.",
            },
            {
              number: "4",
              title: "Demande en ligne",
              description:
                "La Ville recommande fortement la demande en ligne : elle donne accès à la liste des documents exigés et à la réglementation liée au permis choisi. Aucun permis n'est délivré sur place.",
            },
            {
              number: "5",
              title: "Paiement et délivrance",
              description:
                "La facture doit être acquittée avant la délivrance du permis. Les tarifs sont fixés au règlement no 1709. Le calendrier de chantier tient compte de cette étape.",
            },
            {
              number: "6",
              title: "Chantier et livraison",
              description:
                "Corps de métier séquencés selon le contrat, liste de déficiences reprise avant la remise des lieux, travaux garantis — détails au contrat.",
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
          heading: "Ce qu'on vérifie avant de chiffrer un projet à Vaudreuil-Dorion",
          intro:
            "Entre une maison de 2008 dans un quartier planifié et une maison d'avant 1960 du secteur Dorion, la même demande — ouvrir la cuisine, finir le sous-sol — ne mène pas du tout au même chantier. La visite sert exactement à trancher.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification en visite",
          items: [
            "Année de construction et quartier : maison récente planifiée ou bâti ancien du secteur Dorion.",
            "Qualité des finis d'origine : beaucoup de maisons des années 2000 ont été livrées avec des composantes d'entrée de gamme.",
            "Hauteur libre au sous-sol, position des systèmes mécaniques et possibilité d'une issue conforme.",
            "Capacité de l'entrée électrique et du panneau avant d'ajouter un sous-sol complet.",
            "Caractère porteur des murs à ouvrir et présence de fermes de toit préfabriquées.",
            "Zonage, marges et règles applicables au moment du projet, puisque la réglementation est en révision.",
            "Type de permis à demander et tarif prévu au règlement municipal no 1709.",
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
          heading: "Pourquoi un entrepreneur général pour Vaudreuil-Soulanges",
          intro:
            "Dans une ville en croissance rapide, l'offre de rénovation est abondante et très inégale. La différence tient rarement au prix affiché : elle tient à la licence, au contrat écrit et à la présence d'un responsable unique quand trois métiers doivent se succéder dans la même semaine.",
          items: [
            {
              title: "Licence RBQ vérifiable",
              description:
                "Licence 8306-0806-27, valide et sans restriction, délivrée en septembre 2004. Catégories d'entrepreneur général 1.2 et 1.3, vérifiables au registre public de la RBQ.",
            },
            {
              title: "Assuré et cautionné",
              description:
                "Responsabilité civile et couverture de chantier en vigueur, cautionnement de licence en place, aucune réclamation au dossier.",
            },
            {
              title: "Territoire desservi depuis 2004",
              description:
                "Notre territoire couvre l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges. Vaudreuil-Dorion n'est pas un détour pour nous : c'est le prolongement naturel de l'autoroute 40.",
            },
            {
              title: "Soumission détaillée, pas un chiffre au téléphone",
              description:
                "Portée, exclusions, échéancier et budget écrits au contrat. Estimation gratuite, retour sous 24 à 48 heures ouvrables.",
            },
            {
              title: "Division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12) : un fournisseur de moins à coordonner pour vous.",
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
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Agrandissement de maison en cours à Vaudreuil-Dorion",
          },
          cardTitle: "Ce que vaut un contrat écrit",
          cardDescription:
            "Un échéancier et un budget fixés au contrat ne garantissent pas l'absence d'imprévus. Ils garantissent que les imprévus seront discutés, chiffrés et documentés au lieu d'apparaître dans la facture finale.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget et échéancier à Vaudreuil-Dorion",
          description:
            "Le prix dépend de l'âge de la maison, de la portée retenue et du nombre de corps de métier à coordonner. Voici les repères qu'on donne en visite, avant toute soumission détaillée.",
          cards: [
            {
              title: "À partir d'environ 25 000 $",
              description:
                "Ordre de grandeur pour un projet coordonné par un entrepreneur général : sous-sol aménagé, salle de bain complète ou cuisine d'entrée de gamme. L'estimation est gratuite et sans engagement.",
            },
            {
              title: "Cuisine complète : 35 000 $ à 50 000 $ et plus",
              description:
                "Dans une maison des années 2000, l'écart vient surtout du niveau de finition, de la taille de l'îlot et du déplacement éventuel de plomberie ou d'électricité, plutôt que de travaux structuraux.",
            },
            {
              title: "Ce qui allonge l'échéancier",
              description:
                "Le traitement de la demande de permis, le paiement de la facture municipale avant délivrance, le délai de fabrication des armoires et, dans le vieux Dorion, ce qu'on découvre à la démolition.",
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
          heading: "Les mandats les plus fréquents à Vaudreuil-Dorion",
          intro:
            "Dans une ville où une grande partie du parc a moins de vingt-cinq ans, trois projets dominent. Chacun a sa page de service, avec le détail de la méthode et de la séquence.",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Finir un sous-sol livré brut : salle familiale, chambre, salle de bain, rangement et bureau.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Sous-sol aménagé en bureau et bibliothèque",
              },
              badges: ["Sous-sol", "Conformité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Remplacer les armoires d'origine par des armoires sur mesure mieux dimensionnées et revoir l'îlot.",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Cuisine sur mesure avec îlot central",
              },
              badges: ["Cuisine", "Armoires sur mesure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Ajouter une pièce, un garage ou un étage sur un terrain de banlieue, dans le respect du zonage en vigueur.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement résidentiel intégré à la maison existante",
              },
              badges: ["Agrandissement", "Permis"],
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
          heading: "Secteurs desservis et zones voisines",
          intro:
            "On couvre Vaudreuil-Dorion et les municipalités voisines de Vaudreuil-Soulanges, ainsi que l'ouest de l'île de Montréal par l'autoroute 40.",
          columns: "3",
          items: [
            {
              title: "Secteur Dorion et avenue Saint-Charles",
              description:
                "Maisons antérieures à 1960, agrandissements successifs à reprendre.",
              href: "/services/renovation",
              badges: ["Avant 1960"],
            },
            {
              title: "Cité-des-Jeunes et Château de la Gare",
              description:
                "Quartiers construits entre la fin des années 1990 et aujourd'hui.",
              href: "/services/renovation/sous-sol",
              badges: ["2000-2020"],
            },
            {
              title: "Harwood, Hudson et Saint-Lazare",
              description:
                "Corridor en requalification et municipalités voisines de Vaudreuil-Soulanges.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Vaudreuil-Soulanges"],
            },
            {
              title: "Beaconsfield",
              description:
                "Ouest-de-l'Île, à une vingtaine de minutes par l'autoroute 20.",
              href: "/zones/beaconsfield",
              ctaLabel: "Voir la page Beaconsfield",
            },
            {
              title: "Kirkland",
              description:
                "Premier arrêt sur l'autoroute 40 en revenant vers l'île.",
              href: "/zones/kirkland",
              ctaLabel: "Voir la page Kirkland",
            },
            {
              title: "Pierrefonds-Roxboro",
              description:
                "Notre base, à une trentaine de minutes par l'autoroute 40.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la page Pierrefonds-Roxboro",
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
          heading: "Questions fréquentes — rénovation à Vaudreuil-Dorion",
          intro:
            "Permis, délais, budget, licence : les réponses qu'on donne le plus souvent dans Vaudreuil-Soulanges.",
          items: [
            {
              q: "Comment obtient-on un permis à Vaudreuil-Dorion ?",
              a: "Par la Division permis et inspections du Service de l'urbanisme. La Ville recommande fortement de faire la demande en ligne, parce que la plateforme donne accès à la liste des documents exigés et à la réglementation propre au permis choisi. Aucun permis n'est délivré sur place, et la facture doit être acquittée avant la délivrance.",
            },
            {
              q: "Combien coûte le permis ?",
              a: "Les tarifs sont fixés par le règlement municipal no 1709 et varient selon le type de travaux. On inclut cette information au cadrage pour que le budget global soit complet. La Division permis et inspections peut être jointe au 450 455-3371 pour toute question propre à votre adresse.",
            },
            {
              q: "La réglementation d'urbanisme est-elle en train de changer ?",
              a: "Oui. La Ville a entrepris une révision de son plan et de ses règlements d'urbanisme, et le corridor Harwood – De Lotbinière fait l'objet d'un programme particulier d'urbanisme mis à jour en novembre 2025. C'est pourquoi on valide les règles applicables au moment du projet plutôt que de se fier à un précédent.",
            },
            {
              q: "Travaillez-vous aussi à Hudson, Saint-Lazare et sur l'Île-Perrot ?",
              a: "Oui. Notre territoire couvre l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges. Les municipalités voisines de Vaudreuil-Dorion ont chacune leur propre service d'urbanisme et leurs propres règlements : on valide le dossier auprès de la bonne municipalité avant de déposer.",
            },
            {
              q: "Mon sous-sol n'a jamais été fini. Par où commencer ?",
              a: "Par un relevé : hauteur libre, position des poutres et des colonnes, emplacement des systèmes mécaniques, fenestration existante et possibilité d'issue. Ces éléments déterminent ce qu'on peut réellement y installer. Ensuite seulement viennent le plan, le permis et l'ordre des travaux.",
            },
            {
              q: "Quel budget prévoir pour une rénovation ?",
              a: "Nos projets démarrent autour de 25 000 $. Une cuisine complète avec armoires sur mesure se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon la portée et le niveau de finition. L'estimation est gratuite et le budget est fixé au contrat écrit avant le début des travaux.",
            },
            {
              q: "Travaillez-vous sur les maisons anciennes du secteur Dorion ?",
              a: "Oui. Autour de l'avenue Saint-Charles, on intervient sur des maisons antérieures à 1960 dont les systèmes sont souvent d'origine et dont les agrandissements successifs se raccordent mal. On part toujours d'un relevé de l'existant, et la portée prévoit explicitement une marge pour ce qui sera découvert à la démolition.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Dilamco détient la licence RBQ 8306-0806-27, valide et sans restriction, délivrée en septembre 2004, avec les catégories d'entrepreneur général 1.2 et 1.3 et des sous-catégories spécialisées dont la 12 (armoires et comptoirs usinés). Responsabilité civile et couverture de chantier en vigueur, cautionnement de licence en place, aucune réclamation au dossier.",
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
          heading: "Un projet de rénovation à Vaudreuil-Dorion ?",
          intro:
            "On prend l'autoroute 40, on regarde la maison, on valide la réglementation applicable et on vous remet une soumission détaillée avec échéancier et budget écrits.",
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
