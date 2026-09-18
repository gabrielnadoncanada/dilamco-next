// Page zone : Rive-Sud de Montréal (Longueuil, Brossard, Saint-Lambert, Boucherville,
// Saint-Bruno-de-Montarville, Candiac, La Prairie, Châteauguay).
// Sources consultées le 2026-09-18 :
// - Ville de Longueuil, « Aménagement et urbanisme » et « Comptoir de services urbanisme »
//   (Direction de l'aménagement et de l'urbanisme ; rendez-vous obligatoire au 450 463-7311) :
//   https://www.longueuil.quebec/fr/services/amenagement-urbanisme
//   https://www.longueuil.quebec/fr/comptoir-de-services-urbanisme
// - Ville de Longueuil, portail « Permis en ligne » (dépôt, paiement et suivi 24/7) :
//   https://permisenligne.longueuil.quebec/
// - Ville de Longueuil, « Construction, rénovation, démolition » (règlements) :
//   https://www3.longueuil.quebec/fr/reglements-principaux/construction
// - Ville de Brossard, « Rénovation résidentielle — détails, types et coûts de permis »
//   (Direction de l'urbanisme, direction.urbanisme@brossard.ca) :
//   https://brossard.ca/sujets/renovation-residentielle/
//   Portail de demandes en ligne : https://brossard.edemandes.com/fr/
// - Ville de Saint-Lambert, « Patrimoine bâti » (inventaire Patri-Arch : ~250 bâtiments
//   documentés, 10 typologies résidentielles dont le King Cottage) :
//   https://www.saint-lambert.ca/fr/patrimoine-bati
// - Ville de Saint-Lambert, règlement sur les plans d'implantation et d'intégration
//   architecturale (PIIA) et formulaire de demande (Urbanisme, permis et inspection,
//   35, rue d'Aberdeen) : https://www.saint-lambert.ca/fr/reglements-urbanisme
//   https://www.saint-lambert.ca/files/upload/PIIA_formulaire-de-demande.pdf
// - Wikipédia, « Brossard (ville) » (secteurs alphabétiques issus du plan directeur des
//   années 1960, firme Beauchemin, Beaton et Lapointe) :
//   https://fr.wikipedia.org/wiki/Brossard_(ville)
// - Ville de Boucherville, « Histoire » et Société d'histoire des Îles-Percées (population
//   de 8 182 à 21 072 habitants entre 1961 et 1971, essor après le tunnel Louis-Hippolyte-
//   La Fontaine en 1967) : https://www.boucherville.ca/histoire-patrimoine/histoire-boucherville/
//   https://www.histoireboucherville.org/hello-world/
// - Répertoire du patrimoine culturel du Québec, « Site patrimonial du Vieux-Boucherville » :
//   https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=93556&type=bien
// - Ville de Candiac, plan d'urbanisme (règlement 4999) : 2 406 permis résidentiels émis
//   entre 2000 et 2010, sommet de 422 permis en 2007 ; annexion d'une partie de Saint-Philippe
//   en 2010 : https://candiac.ca/uploads/html_content/docs/Urbanisme/4999_Regl%20relatif%20au%20plan%20d%20urbanisme_GR.pdf
// - Journal Le Soleil de Châteauguay, « Zone inondable : des digues à faire reconnaitre »
//   (de 700 à 1 100 résidences potentiellement en zone inondable ; digues des boulevards
//   Salaberry Nord et D'Youville non reconnues comme ouvrages de protection) :
//   https://cybersoleil.com/zone-inondable-des-digues-a-faire-reconnaitre/
// - Transports Québec, « Autoroute 30 — partenariat public-privé » et Le Courrier du Sud :
//   tronçon Châteauguay–Vaudreuil-Dorion ouvert le 15 décembre 2012, contournement de l'île
//   par la Rive-Sud : https://www.transports.gouv.qc.ca/fr/entreprises-partenaires/entreprises-reseaux-routier/ppp/autoroute-30/Pages/autoroute-30.aspx
//   https://www.lecourrierdusud.ca/il-y-a-8-ans-lautoroute-30-entre-chateauguay-et-vaudreuil-dorion-ouvrait/
// - Wikipédia, « Pont Samuel-De Champlain » (ouverture complète à la circulation le
//   1er juillet 2019) : https://fr.wikipedia.org/wiki/Pont_Samuel-De_Champlain
// - Gouvernement du Québec, réfection majeure du pont-tunnel Louis-Hippolyte-La Fontaine
//   (travaux depuis 2022, ouverture des deux tubes reportée à l'automne 2026) :
//   https://www.quebec.ca/transports/infrastructures-projets/projets/projets-routiers/montreal/tunnel-louis-hippolyte-la-fontaine/presentation-projet
// - REM, mise en service de l'antenne Rive-Sud le 31 juillet 2023 (terminus Brossard) :
//   https://rem.info/fr/actualites/mise-en-service-du-rem

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneRiveSudPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général Rive-Sud — rénovation résidentielle",
    description:
      "Entrepreneur général licencié RBQ sur la Rive-Sud de Montréal : rénovation complète, agrandissement et reconstruction après sinistre. Soumission détaillée.",
    path: "/zones/rive-sud",
    ogAlt: "Rénovation résidentielle sur la Rive-Sud de Montréal par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Rive-Sud", url: SITE.url + "/zones/rive-sud" },
  ],
  service: {
    name: "Entrepreneur général sur la Rive-Sud de Montréal",
    description:
      "Rénovation résidentielle complète, agrandissement, transformation et reconstruction après sinistre sur la Rive-Sud de Montréal, par un entrepreneur général licencié RBQ depuis 2004.",
    url: SITE.url + "/zones/rive-sud",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Rive-Sud",
      "Longueuil",
      "Brossard",
      "Saint-Lambert",
      "Boucherville",
      "Saint-Bruno-de-Montarville",
      "Candiac",
      "La Prairie",
      "Châteauguay",
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
          eyebrow: "Dilamco - Rive-Sud de Montréal",
          heading: "Entrepreneur général sur la Rive-Sud de Montréal",
          description:
            "Longueuil, Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie, Châteauguay. Nous sommes basés dans l'Ouest-de-l'Île et nous traversons pour les mandats d'envergure : rénovation complète, agrandissement, transformation, reconstruction après sinistre. Un seul entrepreneur responsable du permis, des corps de métier et de l'échéancier. Licence RBQ 8306-0806-27, valide depuis 2004.",
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
            "Depuis 2004",
            "Assuré",
            "Déplacement inclus à la soumission",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement résidentiel réalisé par un entrepreneur général sur la Rive-Sud de Montréal",
          },
          caption:
            "Mandats d'envergure sur la Rive-Sud : rénovation complète, agrandissement, après-sinistre",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de la Rive-Sud",
          description:
            "La « Rive-Sud » n'est pas un parc immobilier : c'est quatre ou cinq parcs immobiliers collés les uns aux autres. Un bungalow d'après-guerre du Vieux-Longueuil, une maison patrimoniale de Saint-Lambert, un cottage de secteur à Brossard et une résidence de 2008 à Candiac n'ont ni les mêmes murs, ni les mêmes services, ni les mêmes règles d'urbanisme. Une soumission sérieuse commence par savoir dans lequel de ces mondes on met les pieds.",
          cards: [
            {
              title: "Les bungalows d'après-guerre : Vieux-Longueuil, Le Moyne, Greenfield Park",
              description:
                "Le cœur de Longueuil s'est bâti entre 1947 et les années 1960, souvent par des constructeurs qui levaient des rues entières d'un coup — d'où les mêmes détails d'une maison à l'autre : dalles sans isolation continue, solives de 2x8, entrées électriques qui ne suivent plus une cuisine moderne, fenêtres remplacées une seule fois dans les années 1990, mur porteur central qu'on veut aujourd'hui ouvrir vers le salon. Saint-Hubert ajoute une large bande de bungalows et de split-levels de 1960 à 1980, avec les mêmes enjeux décalés de vingt ans.",
            },
            {
              title: "Saint-Lambert et le Vieux-Boucherville : rénover sous encadrement patrimonial",
              description:
                "Saint-Lambert a complété un inventaire de son patrimoine bâti avec la firme Patri-Arch : environ 250 bâtiments documentés et dix typologies résidentielles, du cottage vernaculaire à l'Arts and Crafts, en passant par le « King Cottage » propre à la ville. Conséquence pratique : une modification extérieure visible de la rue passe par le règlement sur les plans d'implantation et d'intégration architecturale (PIIA), donc par le comité consultatif d'urbanisme avant l'émission du permis. Le Vieux-Boucherville, site patrimonial reconnu au Répertoire du patrimoine culturel du Québec, suit la même logique. L'intérieur se modernise librement ; c'est la façade qui se négocie, des mois d'avance.",
            },
            {
              title: "Brossard, Boucherville, Saint-Bruno : la banlieue planifiée de 1960-1985",
              description:
                "Brossard est découpée en secteurs alphabétiques — A, B, C, E, I, J, L, M, N, O, P, R, S, T, V — héritage du plan directeur des années 1960 conçu par la firme Beauchemin, Beaton et Lapointe pour s'orienter dans une trame non orthogonale. Ces secteurs ne se rénovent pas de la même façon : les plus anciens alignent des bungalows de 1960-1970, les plus récents des maisons à deux étages contemporaines. Boucherville est passée de 8 182 à 21 072 habitants entre 1961 et 1971, dans la foulée du tunnel Louis-Hippolyte-La Fontaine ouvert en 1967 ; l'essentiel de son parc unifamilial date de cette vague, comme celui de Saint-Bruno-de-Montarville. Traduction de chantier : des cuisines et des salles de bain d'origine, des sous-sols finis dans les années 1980 à refaire au complet.",
            },
            {
              title: "Candiac, La Prairie, Châteauguay : du neuf récent et de l'eau",
              description:
                "Candiac a délivré 2 406 permis de construction résidentielle entre 2000 et 2010, dont 422 pour la seule année 2007, avant d'annexer une partie de Saint-Philippe. Le parc y est jeune : on n'y refait pas une maison, on la transforme — agrandissement, sous-sol à finir, cuisine à reconfigurer, garage à convertir. La Prairie suit la même courbe. Châteauguay est un autre dossier : le nombre de résidences en zone inondable pourrait y passer de 700 à 1 100 selon la reconnaissance — ou non — des digues des boulevards Salaberry Nord et D'Youville comme ouvrages de protection. Avant de finir un sous-sol de ce côté-là, on vérifie le statut de la propriété.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on réalise sur la Rive-Sud",
          intro:
            "Des mandats d'envergure, ceux qui justifient de mobiliser une équipe complète plusieurs semaines au même endroit. Un contrat, un responsable, un échéancier écrit.",
          columns: "2",
          items: [
            {
              title: "Rénovation intérieure complète",
              description:
                "Reprendre la maison d'un bout à l'autre plutôt que pièce par pièce.",
              icon: "layers",
              bullets: [
                "Bungalow des années 1950 du Vieux-Longueuil repris au complet : électricité, plomberie, planchers, finition.",
                "Mise à niveau du panneau et des circuits pendant que les murs sont ouverts, pas après la peinture.",
                "Un seul échéancier plutôt que six sous-traitants qui ne se parlent pas.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajouter de la surface sur un terrain déjà bâti, avec le permis au dossier.",
              icon: "building2",
              bullets: [
                "Rallonge arrière, ajout d'étage ou conversion de garage en pièce habitable.",
                "Analyse d'implantation, de marges de recul et de coefficient d'occupation du sol avant de dessiner quoi que ce soit.",
                "Fondation, structure, toiture, enveloppe et raccordements coordonnés sous un même contrat.",
              ],
            },
            {
              title: "Rénovation de cuisine",
              description:
                "La pièce qui concentre le plus de corps de métier au mètre carré.",
              icon: "chefHat",
              bullets: [
                "Ouverture d'un mur porteur entre cuisine et salon, avec plan d'ingénieur quand la structure est touchée.",
                "Plomberie déplacée, circuits ajoutés, sortie de hotte vers l'extérieur.",
                "Armoires sur mesure fabriquées pour nous par notre usine partenaire, sous notre sous-catégorie RBQ 12.",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Souvent la première réfection depuis la construction de la maison.",
              icon: "bath",
              bullets: [
                "Étanchéité refaite avant la céramique, jamais corrigée après coup.",
                "Ventilation corrigée dans les salles de bain sans fenêtre des cottages des années 1970.",
                "Ajout d'une salle d'eau au sous-sol, avec broyeur ou raccordement au drain existant.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Le projet le plus demandé — et celui où l'eau décide de tout.",
              icon: "sofa",
              bullets: [
                "Drain, clapet antiretour et pompe submersible vérifiés avant la moindre feuille de gypse.",
                "Statut de la propriété validé en secteur riverain, notamment le long de la rivière Châteauguay.",
                "Isolation et pare-vapeur repris selon les règles actuelles, pas selon le montage de 1985.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement d'égout, inondation, incendie ou dommage structural.",
              icon: "droplets",
              bullets: [
                "Reprise complète une fois l'assèchement et la décontamination terminés.",
                "Portée et séquence documentées pour faciliter le suivi avec votre assureur.",
                "Reconstruction conforme au Code de construction du Québec, pas un simple retour à l'état d'avant.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "acces",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Parlons franchement de la distance",
          intro:
            "Notre adresse d'affaires est au 18625, rue Larocque, à Pierrefonds-Roxboro. La Rive-Sud n'est pas au bout de notre rue et nous ne prétendrons pas le contraire : nous l'annonçons d'avance, nous le chiffrons dans la soumission et nous n'acceptons que les mandats où notre présence sur place a du sens.",
          badges: [
            "A-30 · A-20 · A-15",
            "Pont Samuel-De Champlain",
            "Pont-tunnel La Fontaine",
            "Déplacement au contrat",
          ],
          cardTitle: "Comment on couvre la Rive-Sud depuis l'Ouest-de-l'Île",
          items: [
            "Vers Châteauguay, La Prairie et Candiac : l'autoroute 30, dont le tronçon Châteauguay–Vaudreuil-Dorion ouvert le 15 décembre 2012 complète le contournement de l'île par la Rive-Sud — sans traverser Montréal.",
            "Vers Brossard, Saint-Lambert et Longueuil : l'A-20 puis le pont Samuel-De Champlain, ouvert complètement à la circulation le 1er juillet 2019.",
            "Vers Boucherville et Saint-Bruno-de-Montarville : le pont-tunnel Louis-Hippolyte-La Fontaine, dont la réfection majeure amorcée en 2022 se poursuit, l'ouverture des deux tubes étant prévue vers l'automne 2026. Les livraisons se planifient en fonction des entraves, pas l'inverse.",
            "Le déplacement est inclus dans la soumission, ligne visible, jamais ajouté en cours de chantier comme « frais de transport ».",
            "Nous privilégions les mandats d'envergure. Pour un chantier de deux jours, un entrepreneur de votre municipalité vous servira mieux, et nous vous le dirons.",
            "Quand nous sommes sur place, nous y sommes pour la journée complète : pas d'aller-retour trois fois par semaine pour dix minutes de supervision.",
          ],
          actions: [
            {
              label: "Décrire votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
              variant: "ghost",
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
          heading: "Comment se déroule un chantier sur la Rive-Sud",
          intro:
            "Chaque ville de la Rive-Sud a son propre service d'urbanisme, son propre règlement de zonage et son propre portail. Le permis n'est pas une formalité de fin de parcours : c'est la première chose qu'on cadre.",
          steps: [
            {
              number: "1",
              title: "Appel et pré-qualification",
              description:
                "On valide au téléphone la portée envisagée et l'adresse. Si le mandat n'a pas la taille qui justifie notre déplacement, on vous le dit tout de suite.",
            },
            {
              number: "2",
              title: "Visite sur place",
              description:
                "Une visite complète, pas un passage éclair : mesures, panneau électrique, plomberie, drain, état de la dalle, structure et accès de chantier. C'est ici qu'on voit ce qu'aucune photo ne montre.",
            },
            {
              number: "3",
              title: "Soumission détaillée",
              description:
                "Portée écrite poste par poste, avec ce qui est inclus, ce qui ne l'est pas et le déplacement chiffré. Retour sous 24 à 48 heures ouvrables. Estimation gratuite.",
            },
            {
              number: "4",
              title: "Permis municipal",
              description:
                "À Longueuil, le dossier passe par la Direction de l'aménagement et de l'urbanisme, avec le portail Permis en ligne pour le dépôt, le paiement et le suivi. À Brossard, il passe par la Direction de l'urbanisme, en ligne ou par courriel selon le type de travaux. À Saint-Lambert, une modification visible de la rue passe d'abord par le PIIA et le comité consultatif d'urbanisme. Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie et Châteauguay ont chacune leur service et leurs délais.",
            },
            {
              number: "5",
              title: "Contrat et échéancier",
              description:
                "Contrat écrit avec budget, séquence des corps de métier, modalités de paiement et dates. Licence RBQ et assurances vérifiables avant la première journée de chantier.",
            },
            {
              number: "6",
              title: "Chantier, inspection et livraison",
              description:
                "Les corps de métier passent dans l'ordre, du gros œuvre à la finition, avec un seul interlocuteur et chaque changement de portée confirmé par écrit. Inspection municipale quand les travaux l'exigent, liste de déficiences fermée avec vous, puis livraison. Travaux garantis, détails au contrat.",
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
          heading: "Pourquoi un entrepreneur général plutôt qu'une série de sous-traitants",
          intro:
            "Ce qui fait déraper un chantier, ce n'est presque jamais le prix du matériau. C'est la coordination : le plombier qui arrive avant que l'électricien ait fini, le permis déposé trop tard, l'inspection manquée qui oblige à rouvrir un mur fermé la semaine d'avant.",
          items: [
            {
              title: "Une licence vérifiable, pas une promesse",
              description:
                "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Cautionnement de 40 000 $, aucune réclamation au dossier, responsabilité civile et assurance chantier en vigueur. Vérifiable vous-même au registre de la Régie du bâtiment du Québec.",
            },
            {
              title: "Un seul responsable du permis à la livraison",
              description:
                "C'est nous qui montons le dossier auprès du service d'urbanisme de votre ville, qui planifions les inspections et qui répondons de l'échéancier. Vous n'arbitrez pas entre quatre entreprises qui se renvoient la balle.",
            },
            {
              title: "Une soumission qui dit aussi ce qui n'est pas inclus",
              description:
                "La ligne qui n'apparaît nulle part est celle qui finit en extra. Portée écrite poste par poste, budget et échéancier au contrat, modifications confirmées par écrit avant exécution.",
            },
            {
              title: "Des règles municipales prises au sérieux",
              description:
                "Huit villes, huit réglementations : PIIA à Saint-Lambert, site patrimonial du Vieux-Boucherville, zones inondables de la rivière Châteauguay. On valide avant de promettre une date.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire, sous la sous-catégorie 12 de notre licence RBQ : un intervenant de moins entre la démolition et la finition.",
            },
          ],
          actions: [
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un agrandissement résidentiel sur la Rive-Sud de Montréal",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Des centaines de chantiers résidentiels depuis 2004. On ne vend pas un rabais : on vend l'absence de mauvaises surprises — un permis déposé au bon moment, des corps de métier qui se suivent sans temps mort, un budget écrit et une liste de déficiences fermée avant la livraison.",
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Villes desservies et services les plus demandés",
          intro:
            "Longueuil et ses trois arrondissements — Vieux-Longueuil, Saint-Hubert, Greenfield Park —, Brossard et ses secteurs alphabétiques, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie et Châteauguay. Brossard est aussi le terminus de l'antenne Rive-Sud du REM depuis le 31 juillet 2023, ce qui a relancé les projets dans les quartiers voisins des stations.",
          columns: "3",
          items: [
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou conversion de garage, permis municipal inclus.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau, refoulement, inondation : reconstruction complète et conforme.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, clapet et pompe validés avant la finition, surtout en secteur riverain.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouverture de mur porteur, plomberie déplacée, armoires sur mesure incluses.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description:
                "L'autre grande couronne que nous desservons, au nord de l'île.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description:
                "Notre base d'affaires, dans l'Ouest-de-l'Île de Montréal.",
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
          heading: "FAQ - entrepreneur général sur la Rive-Sud",
          intro:
            "Territoire couvert, permis par ville, prix, délais, assurances et garantie.",
          items: [
            {
              q: "Est-ce que Dilamco travaille vraiment sur la Rive-Sud, ou seulement dans l'Ouest-de-l'Île ?",
              a: "Notre base est à Pierrefonds-Roxboro et la majorité de nos chantiers sont dans l'Ouest-de-l'Île. Nous couvrons la Rive-Sud pour les mandats d'envergure : rénovation complète, agrandissement, transformation, reconstruction après sinistre. Le déplacement est chiffré et inclus dans la soumission. Pour de petits travaux d'une ou deux journées, un entrepreneur de votre municipalité sera mieux placé — nous vous le dirons dès le premier appel.",
            },
            {
              q: "Quelles villes de la Rive-Sud couvrez-vous ?",
              a: "Longueuil, incluant les arrondissements du Vieux-Longueuil, de Saint-Hubert et de Greenfield Park, ainsi que Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie et Châteauguay. Si votre adresse se trouve dans une municipalité voisine de celles-là, appelez-nous : la réponse dépend de la portée du projet plus que du code postal.",
            },
            {
              q: "Qui s'occupe du permis à Longueuil ou à Brossard ?",
              a: "Nous. À Longueuil, la demande relève de la Direction de l'aménagement et de l'urbanisme : le portail Permis en ligne sert à déposer, payer et suivre le dossier, et une rencontre au comptoir de services se prend sur rendez-vous. À Brossard, elle se dépose auprès de la Direction de l'urbanisme, en ligne pour certains travaux, par courriel ou à l'hôtel de ville pour les autres. Nous montons le dossier et gérons les allers-retours avec l'analyste.",
            },
            {
              q: "Ma maison est à Saint-Lambert, dans un secteur ancien. Est-ce plus compliqué ?",
              a: "Plus long, surtout. Saint-Lambert a documenté son patrimoine bâti — environ 250 bâtiments, une dizaine de typologies résidentielles — et toute modification extérieure visible de la rue est assujettie au règlement sur les plans d'implantation et d'intégration architecturale : la demande passe par le comité consultatif d'urbanisme avant l'émission du permis. L'intérieur, lui, peut être entièrement modernisé selon le Code de construction du Québec. Ce délai est intégré à l'échéancier dès la soumission.",
            },
            {
              q: "Combien coûte une rénovation sur la Rive-Sud ?",
              a: "Nos mandats démarrent généralement autour de 25 000 $. Une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon l'ampleur des travaux mécaniques et de structure. Un agrandissement se chiffre projet par projet, après vérification du zonage et des marges de recul. L'estimation est gratuite, le budget est fixé au contrat écrit et le déplacement y apparaît en toutes lettres.",
            },
            {
              q: "Combien de temps dure un projet, délais de permis compris ?",
              a: "Il faut additionner trois choses : le délai d'analyse de votre municipalité, la production des matériaux et le temps de chantier. Les armoires sur mesure, par exemple, demandent de 9 à 15 semaines de production. Ces délais se planifient en parallèle plutôt qu'en séquence, et l'échéancier signé tient compte du calendrier réel de votre ville.",
            },
            {
              q: "Peut-on rénover en hiver sur la Rive-Sud ?",
              a: "Oui pour tout l'intérieur : cuisine, salle de bain, sous-sol, rénovation complète. Excavation, fondation, toiture et enveloppe sont sensibles au gel et se planifient de la fin du printemps à l'automne. L'hiver reste le bon moment pour préparer un agrandissement : plans, permis et commandes se règlent pour démarrer au dégel.",
            },
            {
              q: "Construisez-vous des maisons neuves sur la Rive-Sud ?",
              a: "Non. Nos catégories de licence RBQ sont celles de l'entrepreneur général en petits bâtiments (1.2) et en bâtiments de tout genre (1.3) : rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maison neuve et n'offrons pas de plan de garantie pour bâtiment résidentiel neuf.",
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
          heading: "Un projet d'envergure sur la Rive-Sud ?",
          intro:
            "Décrivez-nous les travaux et l'adresse. On valide d'abord si le mandat justifie notre déplacement, puis on se rend sur place et on revient avec une portée écrite, un prix et un échéancier. Estimation gratuite, retour sous 24 à 48 heures ouvrables.",
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
          note: "Dilamco - RBQ 8306-0806-27 - Longueuil, Brossard, Saint-Lambert, Boucherville, Saint-Bruno, Candiac, La Prairie, Châteauguay",
        },
      },
    },
  ],
};
