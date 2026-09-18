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
          eyebrow: "Dilamco — entrepreneur général",
          heading:
            "Entrepreneur général à L'Île-Bizard–Sainte-Geneviève : rénover en tenant compte de l'eau",
          description:
            "Notre bureau de la rue Larocque, à Pierrefonds-Roxboro, est à moins de dix minutes du pont Jacques-Bizard. On rénove des maisons unifamiliales sur grands terrains boisés à L'Île-Bizard, des propriétés du vieux village de Sainte-Geneviève et des sous-sols repris après les crues de la rivière des Prairies. Licence RBQ valide, un seul responsable du permis à la livraison.",
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
          badges: [
            "L'Île-Bizard",
            "Sainte-Geneviève",
            "RBQ 8306-0806-27",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement d'une maison unifamiliale à L'Île-Bizard",
          },
          caption: "Arrondissement voisin de Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Ce qu'on connaît des maisons de L'Île-Bizard et de Sainte-Geneviève",
          description:
            "L'arrondissement est bordé par la rivière des Prairies et le lac des Deux Montagnes. Cette situation donne son cadre de vie à L'Île-Bizard — vastes terrains, secteurs boisés, parc-nature du Bois-de-l'Île-Bizard — mais elle impose aussi des contraintes réglementaires et techniques qui n'existent nulle part ailleurs dans l'Ouest-de-l'Île.",
          cards: [
            {
              title: "Maisons unifamiliales sur grands terrains",
              description:
                "Le parc est très majoritairement unifamilial, souvent de plain-pied ou à étages, implanté sur des lots profonds le long du chemin Cherrier, du boulevard Jacques-Bizard et des rues qui s'y raccrochent. Les grandes surfaces au sol favorisent les agrandissements et les sous-sols aménagés, mais la profondeur des terrains, les arbres matures et la distance aux services changent la logistique de chantier.",
            },
            {
              title: "Zones inondables et niveaux d'eau",
              description:
                "Une partie du territoire, dont l'île Mercier, est cartographiée en zone à risque d'inondation. Les règles de l'arrondissement découlent directement de la Politique de protection des rives, du littoral et des plaines inondables : en zone de grand courant (récurrence 0-20 ans), les constructions, ouvrages et travaux sont interdits, sauf exceptions ; en zone de faible courant (20-100 ans), toute construction non immunisée est interdite, de même que le remblai autre que celui nécessaire à l'immunisation.",
            },
            {
              title: "Le vieux village de Sainte-Geneviève",
              description:
                "Le long du boulevard Gouin Ouest, l'îlot compris entre l'église, le presbytère et la rue de la Caserne a été reconnu comme îlot villageois à caractère exceptionnel. On y trouve l'église de 1843-1845 signée François Baillargé et des demeures anciennes comme la maison D'Ailleboust-De-Manthet, au 15886, boulevard Gouin Ouest. Rénover dans ce secteur demande une attention particulière aux matériaux, aux ouvertures et à la volumétrie.",
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
          heading: "Ce qu'on réalise à L'Île-Bizard–Sainte-Geneviève",
          intro:
            "Entrepreneur général licencié RBQ, catégories 1.2 et 1.3. On coordonne l'ensemble des corps de métier et on porte la demande de permis auprès de l'arrondissement.",
          columns: "2",
          items: [
            {
              title: "Reconstruction après inondation",
              description:
                "L'angle le plus fréquent dans l'arrondissement depuis les crues de 2017 et de 2019.",
              icon: "droplets",
              bullets: [
                "Démolition sélective des matériaux atteints, assèchement et assainissement avant de refermer.",
                "Choix de matériaux et de détails plus tolérants à une reprise d'eau au niveau du plancher.",
                "Travaux documentés pour le dossier d'assurance et le suivi avec l'arrondissement.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Un sous-sol près de la rivière ne se finit pas comme un sous-sol de Kirkland.",
              icon: "layers",
              bullets: [
                "Vérification du drain français, de la pompe de puisard et du clapet antiretour.",
                "Le Règlement sur la protection des bâtiments contre les refoulements d'égout (11-010) s'applique.",
                "Séparation coupe-feu, issue et fenestration conformes avant la finition.",
              ],
            },
            {
              title: "Rénovation de cuisine",
              description:
                "Reprise complète des cuisines fermées des maisons des années 1960 à 1990.",
              icon: "chefHat",
              bullets: [
                "Ouverture vers la salle à manger après validation de la structure.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
                "Électricité et plomberie mises à niveau derrière les caissons.",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Étanchéité et ventilation d'abord, finition ensuite.",
              icon: "bath",
              bullets: [
                "Membrane, drain et pente de douche repris jusqu'au support.",
                "Ventilation mécanique dimensionnée pour éviter la condensation hivernale.",
                "Coordination plombier, électricien et carreleur dans l'ordre.",
              ],
            },
            {
              title: "Agrandissement de maison",
              description:
                "Les grands terrains de l'île se prêtent à l'ajout de volume, à condition de respecter les marges et les rives.",
              icon: "building2",
              bullets: [
                "Vérification du zonage, des marges et, le cas échéant, de la bande riveraine protégée.",
                "Remblais et déblais réglementés : ils font l'objet d'une autorisation distincte.",
                "Fondation, structure et raccordement au bâtiment existant coordonnés en une seule séquence.",
              ],
            },
            {
              title: "Rénovation en secteur patrimonial",
              description:
                "Travaux sur les maisons anciennes du boulevard Gouin Ouest, à Sainte-Geneviève.",
              icon: "hammer",
              bullets: [
                "Relevé de l'existant avant tout plan : niveaux, charpente, ouvertures d'origine.",
                "Matériaux et proportions choisis pour s'intégrer plutôt que pour trancher.",
                "Permis de transformation déposé selon le règlement 11-018 sur la construction et la transformation de bâtiments.",
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
          heading: "Comment se déroule un projet dans l'arrondissement",
          intro:
            "L'Île-Bizard–Sainte-Geneviève est un arrondissement de la Ville de Montréal. Les permis passent par la Division de l'urbanisme, des permis et des inspections, au 406, montée de l'Église, et par le comptoir des permis du 15795, boulevard Gouin Ouest.",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "État du bâtiment, niveau du plancher de sous-sol, historique d'eau, et vérification de la position du terrain par rapport à la zone inondable cartographiée.",
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
                "Construction, démolition, rénovation intérieure ou extérieure, fondations, balcons, clôtures et abattage d'arbre de 10 cm de diamètre ou plus exigent une autorisation.",
            },
            {
              number: "4",
              title: "Volet plaine inondable",
              description:
                "Tous les travaux en plaine inondable exigent un permis, et certains travaux d'excavation y sont interdits, de même que dans les milieux humides. Cette vérification se fait avant la signature, pas après.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Accès à l'île par le pont Jacques-Bizard, livraisons et conteneur planifiés en conséquence. Les corps de métier se succèdent selon la séquence fixée au contrat.",
            },
            {
              number: "6",
              title: "Livraison et inspection",
              description:
                "Liste de déficiences reprise avant la remise des lieux, conformité au Code de construction du Québec vérifiée, travaux garantis — détails au contrat.",
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
          heading: "Ce qu'on vérifie avant de chiffrer un projet dans l'arrondissement",
          intro:
            "Sur l'île, une soumission sérieuse commence par deux questions que beaucoup d'entrepreneurs sautent : où se situe le terrain par rapport à la zone inondable cartographiée, et qu'est-ce que l'eau a déjà fait à ce bâtiment.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification en visite",
          items: [
            "Position du terrain par rapport aux zones de grand et de faible courant cartographiées.",
            "Historique d'inondation ou de refoulement, y compris les épisodes de 2017 et de 2019.",
            "Niveau du plancher de sous-sol et hauteur d'eau atteinte lors des crues précédentes.",
            "Présence et état du clapet antiretour, de la pompe de puisard et du drain français.",
            "Bande riveraine protégée et marges applicables avant d'envisager un agrandissement.",
            "Arbres matures à proximité des travaux : au-delà de 10 cm de diamètre, l'abattage exige une autorisation.",
            "Type de permis à demander à la Division de l'urbanisme, des permis et des inspections.",
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
          heading: "Pourquoi choisir un entrepreneur général qui connaît l'île",
          intro:
            "Après les crues de 2017 et de 2019, plusieurs propriétaires de L'Île-Bizard ont appris que reconstruire à l'identique n'était pas toujours possible ni souhaitable. Un entrepreneur général qui connaît le dossier réglementaire évite de vous faire dessiner un projet qui ne pourra pas être autorisé.",
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
              title: "À dix minutes du pont",
              description:
                "Notre base de Pierrefonds-Roxboro est le point d'accès naturel vers l'île. Les visites de chantier ne sont pas un déplacement exceptionnel pour nous.",
            },
            {
              title: "Lecture du risque d'eau",
              description:
                "Niveau de plancher, clapet antiretour, pompe de puisard, drain français et choix de matériaux du sous-sol sont cadrés dès la première visite.",
            },
            {
              title: "Un seul contrat, un seul échéancier",
              description:
                "Structure, plomberie, électricité, gypse, carrelage et armoires relèvent du même responsable. C'est ce qui empêche un chantier de s'étirer entre deux sous-traitants.",
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
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol aménagé après une reprise de dégât d'eau",
          },
          cardTitle: "Reconstruire, pas seulement réparer",
          cardDescription:
            "Un sous-sol repris après une crue sans revoir le drainage, le clapet et les matériaux se refait une deuxième fois. La bonne question n'est pas seulement « comment remettre en état », mais « comment limiter les dégâts la prochaine fois ».",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget, permis et calendrier : les repères locaux",
          description:
            "Dans cet arrondissement, deux facteurs déplacent le budget plus souvent qu'ailleurs : l'état réel de ce qui est caché derrière les murs de sous-sol et le volet réglementaire lié à l'eau. Voici ce qu'on explique en visite.",
          cards: [
            {
              title: "À partir d'environ 25 000 $",
              description:
                "Ordre de grandeur pour un projet coordonné par un entrepreneur général : reprise d'un sous-sol, salle de bain complète ou cuisine d'entrée de gamme. L'estimation est gratuite et sans engagement.",
            },
            {
              title: "Cuisine complète : 35 000 $ à 50 000 $ et plus",
              description:
                "L'écart s'explique par l'ouverture de murs, le déplacement de plomberie ou d'électricité, le niveau de finition et les armoires sur mesure. Le budget est fixé au contrat écrit avant le début des travaux.",
            },
            {
              title: "Ce qui allonge l'échéancier",
              description:
                "L'obtention du permis, les vérifications liées à la plaine inondable, le délai de fabrication des armoires et ce qu'on découvre à la démolition — moisissure, structure atteinte, ancien remblai. On prévoit ces points au calendrier.",
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
          heading: "Les mandats les plus fréquents sur l'île",
          intro:
            "Trois types de projets reviennent constamment à L'Île-Bizard et à Sainte-Geneviève. Chacun a sa page de service, avec le détail de la méthode et de la séquence.",
          items: [
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reprise complète après un dégât d'eau, un refoulement ou une crue : assèchement, démolition sélective, reconstruction.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux préparés pour la reconstruction d'un sous-sol",
              },
              badges: ["Après sinistre", "Assurance"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Finir ou refaire un sous-sol en tenant compte du drainage, du clapet antiretour et du risque d'eau.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Sous-sol aménagé en salle de cinéma maison",
              },
              badges: ["Sous-sol", "Drainage"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Ajouter du volume sur les grands terrains de l'île, dans le respect des marges et des rives protégées.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planification d'un agrandissement de maison",
              },
              badges: ["Agrandissement", "Zonage"],
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
            "On couvre l'ensemble de l'arrondissement, de l'île Mercier au vieux village de Sainte-Geneviève, ainsi que les secteurs limitrophes de l'Ouest-de-l'Île et la rive lavalloise.",
          columns: "3",
          items: [
            {
              title: "L'Île-Bizard et chemin Cherrier",
              description:
                "Unifamiliales sur grands terrains, agrandissements et sous-sols aménagés.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Grands terrains"],
            },
            {
              title: "Île Mercier et abords de la rivière",
              description:
                "Secteurs cartographiés en zone à risque d'inondation, reconstruction après sinistre.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Zone inondable"],
            },
            {
              title: "Vieux Sainte-Geneviève",
              description:
                "Boulevard Gouin Ouest, îlot villageois reconnu, maisons anciennes à transformer avec soin.",
              href: "/services/renovation",
              badges: ["Patrimoine"],
            },
            {
              title: "Pierrefonds-Roxboro",
              description:
                "Notre base, de l'autre côté du pont Jacques-Bizard.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la page Pierrefonds-Roxboro",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "Voisin au sud, parc immobilier des années 1960 à 1990.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "Voir la page Dollard-des-Ormeaux",
            },
            {
              title: "Laval",
              description:
                "De l'autre côté de la rivière des Prairies, secteurs Sainte-Dorothée et Laval-Ouest.",
              href: "/zones/laval",
              ctaLabel: "Voir la page Laval",
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
          heading:
            "Questions fréquentes — rénover à L'Île-Bizard–Sainte-Geneviève",
          intro:
            "Permis, zone inondable, sous-sol, assurances : les questions que nous posent les propriétaires de l'arrondissement.",
          items: [
            {
              q: "Où demande-t-on un permis à L'Île-Bizard–Sainte-Geneviève ?",
              a: "Auprès de l'arrondissement. Le comptoir des permis est situé au 15795, boulevard Gouin Ouest, et la Division de l'urbanisme, des permis et des inspections se trouve au 406, montée de l'Église. Nous préparons et déposons le dossier dans le cadre du mandat, plutôt que de vous laisser le faire en parallèle du chantier.",
            },
            {
              q: "Quels travaux exigent un permis ?",
              a: "La construction ou la démolition d'un bâtiment, les rénovations intérieures et extérieures, les travaux de fondation, la construction d'un balcon, l'installation d'une clôture, l'abattage d'un arbre de 10 cm de diamètre ou plus, les piscines, le remplacement d'une toiture avec des matériaux non standards et la modification de murs intérieurs. Les réparations mineures et le remplacement de bardeaux d'asphalte identiques n'en exigent généralement pas.",
            },
            {
              q: "Ma maison est en zone inondable. Puis-je quand même rénover ?",
              a: "Cela dépend de la zone. En zone de grand courant (récurrence 0-20 ans), les constructions, ouvrages et travaux sont interdits, sauf exceptions prévues au règlement. En zone de faible courant (20-100 ans), les constructions non immunisées sont interdites, tout comme les remblais autres que ceux requis pour l'immunisation. Dans tous les cas, tous les travaux en plaine inondable exigent un permis. On valide votre situation avant de dessiner quoi que ce soit.",
            },
            {
              q: "Faites-vous de la reconstruction après une inondation ?",
              a: "Oui. Les crues de 2017 et de 2019 ont touché plusieurs rues de l'arrondissement, dont l'île Mercier. Nous intervenons après l'assèchement : démolition sélective, assainissement, reprise de la structure si nécessaire, puis reconstruction. Les travaux sont documentés pour que votre dossier d'assurance suive le chantier.",
            },
            {
              q: "Peut-on aménager un sous-sol près de la rivière des Prairies ?",
              a: "Souvent oui, mais pas de la même manière qu'ailleurs. On vérifie le drain français, la pompe de puisard et le clapet antiretour — le Règlement sur la protection des bâtiments contre les refoulements d'égout (11-010) s'applique dans l'arrondissement — puis on choisit des matériaux de plancher et de bas de mur qui limitent les dommages en cas de reprise d'eau.",
            },
            {
              q: "Combien coûte une rénovation dans le secteur ?",
              a: "Nos projets démarrent autour de 25 000 $, et une cuisine complète avec armoires sur mesure se situe plutôt entre 35 000 $ et 50 000 $ et plus. Le prix dépend de l'état du bâtiment, de la portée et du nombre de corps de métier. L'estimation est gratuite, et le budget comme l'échéancier sont fixés au contrat écrit.",
            },
            {
              q: "Travaillez-vous sur les maisons anciennes de Sainte-Geneviève ?",
              a: "Oui. Le long du boulevard Gouin Ouest, l'îlot villageois entre l'église, le presbytère et la rue de la Caserne a été reconnu pour son caractère exceptionnel. On y travaille en partant d'un relevé sérieux de l'existant — charpente, niveaux, ouvertures d'origine — et on dépose la demande de transformation selon le règlement 11-018 de l'arrondissement.",
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
          heading: "Un projet à L'Île-Bizard ou à Sainte-Geneviève ?",
          intro:
            "On traverse le pont Jacques-Bizard, on regarde la maison, on valide le volet réglementaire et on vous remet une soumission détaillée avec échéancier et budget écrits.",
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
