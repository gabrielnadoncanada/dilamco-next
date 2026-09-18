// Sources locales (consultées le 2026-09-18) :
// - Ville de Laval, « Permis de rénovation ou de réparation résidentielle
//   intérieure » et « ... extérieure » (permis distincts, demande en ligne, suivi
//   dans Mon dossier, permis transmis par courriel) :
//   https://www.laval.ca/reglements-permis/trouver-mon-permis/renovation-residentielle-interieure/
//   https://www.laval.ca/reglements-permis/trouver-mon-permis/renovation-residentielle-exterieure/
// - Ville de Laval, Service de l'urbanisme, 1333, boulevard Chomedey,
//   rez-de-chaussée, Laval (Québec) H7V 3Z4 — sur rendez-vous ; formulaire
//   « Construction amélioration (PA) / PIIA » :
//   https://www.laval.ca/wp-content/uploads/2025/02/formulaire-construction-amelioration-2.pdf
// - Ville de Laval, « Zones inondables (plaines inondables) » — délimitation
//   établie par les cotes de crue inscrites au règlement de zonage, à partir
//   d'une étude de 2014 approuvée par le gouvernement du Québec :
//   https://www.laval.ca/Pages/Fr/Citoyens/zones-inondables.aspx
// - Bilan des inondations de 2017 à Laval (rues touchées à Laval-Ouest,
//   Fabreville et Sainte-Dorothée, dont le chemin du Bord-de-l'eau) :
//   https://www.ccilaval.qc.ca/wp-content/uploads/2017/05/bilan-m%C3%A9dias.pdf
// - Portrait du parc immobilier lavallois par secteur (Chomedey et
//   Laval-des-Rapides développés surtout dans les années 1960-1970, forte
//   proportion de bungalows sur fondations en blocs de béton ; Sainte-Dorothée et
//   Fabreville, mélange 1970-1980 et développements récents ; Duvernay-Vimont,
//   vague de construction 1980-1990 ; vermiculite dans les combles de cette
//   génération) : https://www.inspection-batimex.ca/inspection-batiment-laval
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Laval — rénovation",
    description:
      "Entrepreneur général RBQ à Laval : rénovation de bungalows de Chomedey, sous-sols, permis du Service de l'urbanisme, zones inondables des Mille Îles.",
    path: "/zones/laval",
    ogAlt: "Rénovation résidentielle à Laval par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "Entrepreneur général à Laval",
    description:
      "Rénovation résidentielle clé en main à Laval : cadrage, permis du Service de l'urbanisme, coordination des corps de métier et exécution par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/zones/laval",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Laval",
      "Chomedey",
      "Sainte-Dorothée",
      "Laval-Ouest",
      "Fabreville",
      "Vimont",
      "Sainte-Rose",
      "Laval-des-Rapides",
      "Duvernay",
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
            "Entrepreneur général à Laval : rénovation résidentielle du permis à la livraison",
          description:
            "Depuis notre base de Pierrefonds-Roxboro, Laval est à une vingtaine de minutes par l'autoroute 13 ou par le pont Lachapelle. On y rénove surtout des bungalows des années 1960-1970 à Chomedey, des maisons des années 1980-1990 à Vimont et des sous-sols repris après les crues de la rivière des Mille Îles à Laval-Ouest et à Fabreville. Licence RBQ valide, un seul responsable de chantier.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Laval", "RBQ 8306-0806-27", "Depuis 2004"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée dans une maison de Laval",
          },
          caption: "Chomedey, Sainte-Dorothée, Laval-Ouest, Fabreville, Vimont, Sainte-Rose",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Laval",
          description:
            "Laval n'est pas un territoire uniforme : la ville s'est construite par vagues, secteur par secteur, entre les années 1960 et aujourd'hui. Savoir à quelle génération appartient une maison, c'est savoir ce qu'on va trouver derrière les murs avant même d'ouvrir.",
          cards: [
            {
              title: "Chomedey et Laval-des-Rapides : la vague 1960-1970",
              description:
                "Ces secteurs se sont développés surtout dans les années 1960 et 1970 et comptent une forte proportion de bungalows sur fondations en blocs de béton. Environ le tiers des propriétés de Chomedey datent de ces deux décennies. Sur ce type de maison, on vérifie d'office l'entrée électrique, l'état de la plomberie, la hauteur libre au sous-sol et la présence éventuelle de vermiculite dans les combles, un isolant de cette génération qui peut contenir de l'amiante.",
            },
            {
              title: "Sainte-Dorothée, Fabreville et Laval-Ouest",
              description:
                "À l'ouest de l'île Jésus, le parc mêle des constructions des années 1970-1980 et des développements beaucoup plus récents. C'est aussi le secteur le plus exposé à la rivière des Mille Îles : en 2017, des rues entières de Laval-Ouest et de Fabreville ont été inondées, tout comme le chemin du Bord-de-l'eau à Sainte-Dorothée. Le niveau du plancher de sous-sol et le clapet antiretour font partie du cadrage dès la première visite.",
            },
            {
              title: "Vimont, Duvernay et Sainte-Rose",
              description:
                "Le centre et le nord de l'île ont connu une vague de construction dans les années 1980 et 1990, avec beaucoup de maisons à étages et de sous-sols déjà finis. Les projets y sont souvent des remises à niveau : cuisine ouverte, salle de bain refaite, sous-sol repensé et finitions reprises, plutôt que de la reconstruction lourde.",
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
          heading: "Ce qu'on réalise à Laval",
          intro:
            "Entrepreneur général licencié RBQ, catégories 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). On prend en charge le permis, la séquence et l'ensemble des corps de métier.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Ouvrir une cuisine fermée de bungalow des années 1960-1970.",
              icon: "chefHat",
              bullets: [
                "Validation du caractère porteur du mur avant de dessiner l'ouverture.",
                "Mise à niveau électrique et déplacement de plomberie si nécessaire.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Reprise complète des salles de bain d'origine.",
              icon: "bath",
              bullets: [
                "Membrane, drain, pente et ventilation refaits jusqu'au support.",
                "Ajout d'une salle d'eau quand la configuration et la plomberie le permettent.",
                "Chantier séquencé pour limiter la période sans salle de bain.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Le projet le plus fréquent à Vimont, Duvernay et Sainte-Rose.",
              icon: "layers",
              bullets: [
                "Hauteur libre, poutres et colonnes mesurées avant de figer le plan.",
                "Drain, pompe de puisard et clapet antiretour vérifiés avant de fermer les murs.",
                "Issue, fenestration et séparation coupe-feu conformes au Code de construction du Québec.",
              ],
            },
            {
              title: "Reconstruction après dégât d'eau",
              description:
                "Secteurs riverains de la rivière des Mille Îles et refoulements d'égout.",
              icon: "droplets",
              bullets: [
                "Démolition sélective, assèchement et assainissement avant reconstruction.",
                "Matériaux et détails choisis pour mieux encaisser une reprise d'eau.",
                "Travaux documentés pour le dossier d'assurance du propriétaire.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajout de volume, réaménagement d'étage, garage transformé en pièce de vie.",
              icon: "building2",
              bullets: [
                "Zonage, marges et cotes de crue vérifiés avant tout engagement.",
                "Certains secteurs exigent une évaluation selon un plan d'implantation et d'intégration architecturale.",
                "Fondation, structure et raccordement au bâtiment existant coordonnés en une séquence.",
              ],
            },
            {
              title: "Planchers et finitions",
              description:
                "Reprise des planchers, des moulures et des seuils après travaux.",
              icon: "ruler",
              bullets: [
                "Nivellement du support avant la pose, en particulier sur dalle de sous-sol.",
                "Continuité des transitions entre les pièces rénovées.",
                "Alignements et joints repris pour que la rénovation ne se lise pas aux jonctions.",
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
          heading: "Comment se déroule un projet à Laval",
          intro:
            "Laval est une ville à part entière : ce n'est ni un arrondissement de Montréal, ni une ville liée de l'agglomération. C'est le Service de l'urbanisme qui traite les demandes, et toutes les demandes de permis et certificats se font désormais en ligne.",
          steps: [
            {
              number: "1",
              title: "Visite et cadrage",
              description:
                "Relevé de la maison, de son époque de construction et de ses contraintes visibles. On vous dit tout de suite quel type de permis sera requis.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions, échéancier et budget écrits. Retour sous 24 à 48 heures ouvrables après la visite.",
            },
            {
              number: "3",
              title: "Choix du bon permis",
              description:
                "La Ville distingue le permis de rénovation ou de réparation résidentielle intérieure de son équivalent extérieur, et prévoit un permis distinct pour la rénovation d'un espace commercial.",
            },
            {
              number: "4",
              title: "Dépôt en ligne",
              description:
                "La demande est déposée par le service en ligne de la Ville. L'avancement se suit dans Mon dossier, et le permis délivré y est déposé puis transmis par courriel.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Corps de métier séquencés selon le contrat, protection des lieux, gestion des matériaux et du conteneur. Un seul responsable pour tout le chantier.",
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
          heading: "Ce qu'on vérifie avant de chiffrer un projet à Laval",
          intro:
            "À Laval, l'époque de construction du secteur donne une première hypothèse, mais seule la visite la confirme. Voici ce qu'on regarde avant d'écrire un chiffre, parce que ce sont ces points qui font bouger une soumission une fois le chantier commencé.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification en visite",
          items: [
            "Année de construction et secteur : la vague 1960-1970 ne réserve pas les mêmes surprises que celle de 1990.",
            "Capacité de l'entrée électrique et état du panneau avant d'ajouter des circuits.",
            "Type de fondation et signes de mouvement, fréquents sur les fondations en blocs de béton.",
            "Présence possible de vermiculite dans les combles si les travaux touchent l'entretoit.",
            "Hauteur libre au sous-sol, position des poutres, des colonnes et des systèmes mécaniques.",
            "État du drain, de la pompe de puisard et du clapet antiretour.",
            "Position du terrain par rapport aux zones inondables inscrites au règlement de zonage.",
            "Type exact de permis requis : rénovation intérieure, extérieure ou espace commercial.",
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
          heading: "Pourquoi faire affaire avec nous à Laval",
          intro:
            "Notre base est à Pierrefonds-Roxboro, de l'autre côté de la rivière des Prairies. L'autoroute 13 et le pont Lachapelle mettent Chomedey, Sainte-Dorothée et Laval-Ouest à portée immédiate, ce qui change la fréquence des visites de chantier et le temps de réaction quand quelque chose bloque.",
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
              title: "Permis pris en charge",
              description:
                "On identifie le bon permis, on monte le dossier et on le dépose par le service en ligne de la Ville. Vous suivez l'avancement dans Mon dossier.",
            },
            {
              title: "Lecture des cotes de crue",
              description:
                "Dans les secteurs riverains, la position du terrain par rapport aux zones inondables du règlement de zonage est vérifiée avant de dessiner quoi que ce soit.",
            },
            {
              title: "Un seul contrat pour tous les métiers",
              description:
                "Structure, plomberie, électricité, gypse, carrelage et armoires relèvent du même responsable et du même échéancier.",
            },
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Chantier de rénovation résidentielle coordonné à Laval",
          },
          cardTitle: "Ce qui fait déraper un chantier lavallois",
          cardDescription:
            "Presque jamais le choix du comptoir. Plutôt un permis demandé trop tard, une portée jamais écrite, une entrée électrique qu'il fallait reprendre et personne pour arbitrer entre les sous-traitants. Un entrepreneur général existe pour supprimer ces quatre points.",
        },
      },
    },
    {
      id: "flood",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Zones inondables : ce qui change concrètement",
          description:
            "À Laval, la délimitation des plaines inondables de la rivière des Mille Îles est établie par les cotes de crue inscrites au règlement de zonage, à partir d'une étude approuvée par le gouvernement du Québec en 2014. Ce n'est pas un détail administratif : ça décide de ce qui peut être construit, remblayé ou refini.",
          cards: [
            {
              title: "Vérifier avant de dessiner",
              description:
                "Si votre terrain touche une zone cartographiée, on valide la cote applicable avant de proposer un agrandissement, une fondation ou un sous-sol aménagé. Un projet dessiné d'abord et vérifié ensuite finit souvent par être refait.",
            },
            {
              title: "Secteurs les plus concernés",
              description:
                "Laval-Ouest et Fabreville ont été fortement touchés par les crues de 2017, avec des rues résidentielles inondées, tout comme le secteur du chemin du Bord-de-l'eau à Sainte-Dorothée. Ce sont les secteurs où le volet réglementaire pèse le plus lourd dans l'échéancier.",
            },
            {
              title: "Refinir un sous-sol autrement",
              description:
                "Après une reprise d'eau, refermer à l'identique revient souvent à refaire les travaux une deuxième fois. On revoit le drainage, le clapet antiretour et le choix des matériaux de plancher et de bas de mur avant de parler de finition.",
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
          heading: "Les mandats les plus fréquents à Laval",
          intro:
            "Trois types de projets reviennent constamment sur l'île Jésus, du bungalow de Chomedey à la maison à étages de Vimont. Chacun a sa page de service.",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Finir ou repenser un sous-sol : salle familiale, chambre, salle de bain et rangement, dans le respect du Code.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Sous-sol aménagé avec coin bar",
              },
              badges: ["Sous-sol", "Conformité"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir une cuisine fermée de bungalow des années 1960-1970 et installer des armoires sur mesure.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Cuisine ouverte rénovée dans une maison de banlieue",
              },
              badges: ["Cuisine", "Armoires sur mesure"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reprise après un dégât d'eau ou une crue : assèchement, démolition sélective, reconstruction documentée.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux préparés pour une reconstruction de sous-sol",
              },
              badges: ["Après sinistre", "Assurance"],
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
          heading: "Secteurs desservis à Laval et zones voisines",
          intro:
            "On travaille surtout dans l'ouest et le centre de l'île Jésus, les secteurs les plus accessibles depuis notre base de l'Ouest-de-l'Île.",
          columns: "3",
          items: [
            {
              title: "Chomedey et Laval-des-Rapides",
              description:
                "Bungalows des années 1960-1970, cuisines fermées et sous-sols à revoir.",
              href: "/services/renovation/cuisine",
              badges: ["1960-1970"],
            },
            {
              title: "Sainte-Dorothée, Fabreville et Laval-Ouest",
              description:
                "Mélange 1970-1980 et développements récents, secteurs riverains des Mille Îles.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Zones inondables"],
            },
            {
              title: "Vimont, Duvernay et Sainte-Rose",
              description:
                "Maisons à étages des années 1980-1990, sous-sols finis à repenser.",
              href: "/services/renovation/sous-sol",
              badges: ["1980-1990"],
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              description:
                "De l'autre côté de la rivière des Prairies, mêmes enjeux de crue.",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "Voir la page L'Île-Bizard–Sainte-Geneviève",
            },
            {
              title: "Pierrefonds-Roxboro",
              description:
                "Notre base, à une vingtaine de minutes par l'autoroute 13.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la page Pierrefonds-Roxboro",
            },
            {
              title: "Saint-Laurent",
              description:
                "Au sud du pont Lachapelle, plex d'après-guerre et condos récents.",
              href: "/zones/saint-laurent",
              ctaLabel: "Voir la page Saint-Laurent",
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
          heading: "Questions fréquentes — rénovation à Laval",
          intro:
            "Permis, zones inondables, budget, garanties : les réponses qu'on donne le plus souvent aux propriétaires lavallois.",
          items: [
            {
              q: "Comment obtient-on un permis de rénovation à Laval ?",
              a: "Toutes les demandes de permis et de certificats se font en ligne auprès de la Ville. L'avancement se suit dans Mon dossier, et lorsque la demande est complète et conforme, le permis y est déposé et transmis par courriel. Si une demande ne peut pas être faite en ligne, elle peut être présentée au Service de l'urbanisme, au 1333, boulevard Chomedey, sur rendez-vous.",
            },
            {
              q: "Faut-il un permis pour une rénovation intérieure ?",
              a: "La Ville prévoit un permis de rénovation ou de réparation résidentielle intérieure, distinct du permis extérieur et du permis pour un espace commercial. On identifie le bon permis au cadrage et on monte le dossier avant le début des travaux, parce qu'une demande incomplète retarde tout le chantier.",
            },
            {
              q: "Travaillez-vous à Chomedey, Sainte-Dorothée et Laval-Ouest ?",
              a: "Oui, ce sont nos secteurs lavallois les plus fréquents. Depuis Pierrefonds-Roxboro, on y accède par l'autoroute 13 ou par le pont Lachapelle en une vingtaine de minutes, ce qui permet des visites de chantier régulières plutôt qu'occasionnelles.",
            },
            {
              q: "Ma maison est en zone inondable. Est-ce que ça bloque mon projet ?",
              a: "Pas nécessairement, mais ça encadre ce qui est permis. À Laval, la délimitation des plaines inondables repose sur les cotes de crue inscrites au règlement de zonage, à partir d'une étude approuvée par le gouvernement du Québec en 2014. On valide la cote applicable à votre terrain avant de proposer un agrandissement, une fondation ou un sous-sol aménagé.",
            },
            {
              q: "Que faire d'un sous-sol inondé à Laval-Ouest ou à Fabreville ?",
              a: "On intervient après l'assèchement : démolition sélective des matériaux atteints, assainissement, reprise de la structure si nécessaire, puis reconstruction. On en profite pour revoir le drainage, la pompe de puisard et le clapet antiretour, et pour choisir des matériaux de plancher et de bas de mur qui limitent les dommages en cas de récidive.",
            },
            {
              q: "Combien coûte une rénovation à Laval ?",
              a: "Nos projets démarrent autour de 25 000 $. Une cuisine complète avec armoires sur mesure se situe plutôt entre 35 000 $ et 50 000 $ et plus. Le prix dépend de l'état du bâtiment, de la portée et du nombre de corps de métier. L'estimation est gratuite et le budget est fixé au contrat écrit.",
            },
            {
              q: "Faut-il se méfier de la vermiculite dans les maisons des années 1960-1970 ?",
              a: "C'est un point à vérifier. Les maisons de cette génération ont souvent été isolées avec de la vermiculite dans les combles, un matériau qui peut contenir de l'amiante. Si les travaux touchent l'entretoit, on fait valider la situation avant d'intervenir plutôt que de découvrir le problème en plein chantier.",
            },
            {
              q: "Êtes-vous licenciés et assurés pour travailler à Laval ?",
              a: "Oui. Dilamco détient la licence RBQ 8306-0806-27, valide et sans restriction, délivrée en septembre 2004, avec les catégories d'entrepreneur général 1.2 et 1.3. Responsabilité civile et couverture de chantier en vigueur, cautionnement de licence en place, aucune réclamation au dossier. La licence est vérifiable au registre public de la RBQ.",
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
          heading: "Un projet de rénovation à Laval ?",
          intro:
            "On se déplace, on regarde la maison et son époque, on identifie le bon permis et on vous remet une soumission détaillée avec échéancier et budget écrits.",
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
          note: "Entrepreneur général licencié RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
