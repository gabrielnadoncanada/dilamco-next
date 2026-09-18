// Page zone : Pierrefonds-Roxboro (arrondissement de Montréal).
// Sources consultées le 2026-09-18 :
// - Ville de Montréal, « Comptoir des permis – Pierrefonds-Roxboro » (13665, boul. de
//   Pierrefonds) : https://montreal.ca/lieux/comptoir-des-permis-pierrefonds-roxboro
// - Ville de Montréal, « Agrandissements et nouvelles constructions à Pierrefonds-Roxboro » :
//   https://montreal.ca/articles/agrandissements-et-nouvelles-constructions-pierrefonds-roxboro-108318
// - Ville de Montréal, « Crue printanière – Pierrefonds-Roxboro » (zones à risque, PPI,
//   sacs de sable) : https://montreal.ca/articles/crue-printaniere-pierrefonds-roxboro-4810
// - Banque d'information 311, « Pierrefonds-Roxboro – Construction, transformation ou
//   rénovation » : http://www1.ville.montreal.qc.ca/banque311/content/pierrefonds-roxboro-–-construction-transformation-ou-rénovation
// - Wikipédia, « Pierrefonds-Roxboro » (70 382 hab. en 2021, 27 km², statut bilingue,
//   parcs-nature Bois-de-Liesse, Cap-Saint-Jacques, Anse-à-l'Orme) :
//   https://fr.wikipedia.org/wiki/Pierrefonds-Roxboro
// - Wikipédia, « Inondations printanières de 2017 au Québec » (débordements de la rivière
//   des Prairies dès le 6 mai 2017) :
//   https://fr.wikipedia.org/wiki/Inondations_printanières_de_2017_au_Québec
// - Les inondations au Québec (UQAM), fiche Pierrefonds-Roxboro :
//   https://inondations.uqam.ca/loc/pierrefonds-roxboro-arrondissement/

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePierrefondsRoxboroPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Pierrefonds-Roxboro",
    description:
      "Entrepreneur général licencié RBQ basé rue Larocque à Pierrefonds-Roxboro : rénovation, sous-sol, agrandissement et reconstruction après sinistre.",
    path: "/zones/pierrefonds-roxboro",
    ogAlt: "Rénovation résidentielle à Pierrefonds-Roxboro par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    {
      name: "Pierrefonds-Roxboro",
      url: SITE.url + "/zones/pierrefonds-roxboro",
    },
  ],
  service: {
    name: "Entrepreneur général à Pierrefonds-Roxboro",
    description:
      "Rénovation résidentielle, aménagement de sous-sol, agrandissement et reconstruction après sinistre à Pierrefonds-Roxboro, par un entrepreneur général licencié RBQ établi dans l'arrondissement.",
    url: SITE.url + "/zones/pierrefonds-roxboro",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Pierrefonds",
      "Roxboro",
      "Cap-Saint-Jacques",
      "Bois-de-Liesse",
      "Cloverdale",
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
          eyebrow: "Dilamco - Pierrefonds-Roxboro",
          heading:
            "Entrepreneur général à Pierrefonds-Roxboro : rénovation résidentielle du permis à la livraison",
          description:
            "Notre adresse d'affaires est au 18625, rue Larocque, à Pierrefonds-Roxboro. C'est notre quartier : on connaît les bungalows de l'après-guerre du secteur Roxboro, les cottages des années 1970 le long du boulevard Pierrefonds, les sous-sols repris après les crues de la rivière des Prairies et le comptoir des permis du boulevard de Pierrefonds. Licence RBQ 8306-0806-27, valide depuis 2004, catégories entrepreneur général 1.2 et 1.3.",
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
            "Ouest-de-l'Île",
            "Assuré",
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Rénovation résidentielle complète à Pierrefonds-Roxboro",
          },
          caption:
            "Base d'affaires dans l'arrondissement — rue Larocque, Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons de Pierrefonds-Roxboro",
          description:
            "Pierrefonds-Roxboro compte environ 70 000 résidents sur 27 km2 et reste le seul arrondissement de Montréal à porter un statut bilingue officiel. Son territoire touche trois grands parcs-nature — Bois-de-Liesse, Cap-Saint-Jacques et l'Anse-à-l'Orme — et suit la rivière des Prairies sur presque toute sa longueur. Ça donne un parc résidentiel très particulier, et des contraintes de chantier qui ne ressemblent pas à celles d'un quartier central.",
          cards: [
            {
              title: "Un parc bâti des années 1950 à 1980, plus des condos récents",
              description:
                "L'essentiel du bâti résidentiel est constitué de bungalows, de split-levels et de cottages construits entre les années 1950 et 1980, surtout dans Roxboro, Pierrefonds-Est et le secteur Cloverdale. On y retrouve à répétition les mêmes réalités : dalles de sous-sol sans isolation continue, solives de 2x8, panneaux électriques sous-dimensionnés, fenêtres remplacées une fois dans les années 1990. Les développements plus récents — condos et maisons de ville près du boulevard Saint-Charles et de la rivière — posent l'enjeu inverse : espaces plus étroits, règles de copropriété et accès de chantier limités.",
            },
            {
              title: "La rivière des Prairies et la question de l'eau",
              description:
                "Les crues printanières de 2017 et de 2019 ont marqué l'arrondissement : les débordements de la rivière des Prairies ont commencé le 6 mai 2017 et des digues ont cédé à Pierrefonds. Depuis, chaque projet de sous-sol dans les secteurs riverains du boulevard Gouin se pose autrement : niveau de la dalle, clapet antiretour, pompe submersible, matériaux de finition qui tolèrent l'humidité, drain français vérifié avant de refermer les murs. Une partie du territoire figure aux cartes de zones à risque du gouvernement du Québec, et l'arrondissement gère la distribution de sable par secteur selon son plan particulier d'intervention.",
            },
            {
              title: "Des règles d'arrondissement, pas des règles de ville",
              description:
                "À Pierrefonds-Roxboro, le permis ne passe pas par un service central : il passe par le comptoir des permis de l'arrondissement, au 13665, boulevard de Pierrefonds, rattaché à la Direction du développement du territoire et des études techniques. Les plans et documents se transmettent par courriel avant la signature et le paiement sur place, sur rendez-vous. Pour un agrandissement, l'analyse touche l'implantation, la marge de recul, le coefficient d'occupation du sol et parfois une révision architecturale. C'est une étape à cadrer en début de projet, pas à improviser en cours de route.",
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
          heading: "Ce qu'on réalise à Pierrefonds-Roxboro",
          intro:
            "Un seul entrepreneur général responsable du permis, des corps de métier, de l'échéancier et de la livraison. Les projets les plus fréquents dans l'arrondissement, et ce qu'ils impliquent réellement sur place.",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Le projet le plus demandé dans les bungalows et cottages du secteur.",
              icon: "chefHat",
              bullets: [
                "Ouverture d'un mur porteur entre cuisine et salon dans un bungalow des années 1960.",
                "Mise à niveau de la plomberie et du panneau électrique selon le Code de construction du Québec.",
                "Armoires sur mesure fournies par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Souvent la première salle de bain refaite depuis la construction.",
              icon: "bath",
              bullets: [
                "Réfection complète de l'étanchéité avant la céramique, pas après.",
                "Ventilation corrigée dans les salles de bain sans fenêtre des cottages des années 1970.",
                "Ajout d'une salle d'eau au sous-sol avec broyeur ou raccordement au drain existant.",
              ],
            },
            {
              title: "Aménagement de sous-sol",
              description:
                "Le projet signature du secteur — et celui où l'eau décide de tout.",
              icon: "sofa",
              bullets: [
                "Vérification du drain, du clapet antiretour et de la pompe avant les travaux de finition.",
                "Isolation et pare-vapeur repris selon les règles actuelles, pas selon le montage d'origine.",
                "Salle familiale, bureau, chambre supplémentaire ou logement accessoire selon le zonage.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement d'égout, inondation, incendie ou dommage structural.",
              icon: "droplets",
              bullets: [
                "Reprise du sous-sol après un dégât d'eau, une fois l'assèchement terminé.",
                "Portée et séquence documentées pour faciliter le suivi avec votre assureur.",
                "Reconstruction conforme, pas un simple retour à l'état d'avant le sinistre.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajouter de la surface sur un terrain déjà bâti de l'arrondissement.",
              icon: "building2",
              bullets: [
                "Rallonge arrière, ajout d'étage ou transformation du garage en pièce habitable.",
                "Dossier de permis monté pour le comptoir des permis de Pierrefonds-Roxboro.",
                "Coordination structure, toiture, enveloppe, électricité et finition sous un seul contrat.",
              ],
            },
            {
              title: "Rénovation intérieure complète",
              description:
                "Quand la maison est reprise d'un bout à l'autre plutôt que pièce par pièce.",
              icon: "layers",
              bullets: [
                "Planchers, portes, moulures et peinture séquencés pour éviter les reprises.",
                "Mise à niveau électrique et plomberie pendant que les murs sont ouverts.",
                "Un seul échéancier écrit plutôt que six sous-traitants qui ne se parlent pas.",
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
          heading: "Comment se déroule un chantier à Pierrefonds-Roxboro",
          intro:
            "La séquence exacte dépend de la portée, mais la logique reste la même : on règle le permis et les contraintes réelles avant d'ouvrir un mur.",
          steps: [
            {
              number: "1",
              title: "Visite et cadrage",
              description:
                "On se déplace chez vous — souvent le jour même ou le lendemain, l'arrondissement étant notre base. On mesure, on regarde le panneau, la plomberie, le drain, l'état de la dalle et l'accès de chantier.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée écrite, poste par poste, avec ce qui est inclus et ce qui ne l'est pas. Retour sous 24 à 48 heures ouvrables après la visite. Estimation gratuite.",
            },
            {
              number: "3",
              title: "Permis d'arrondissement",
              description:
                "Montage du dossier pour le comptoir des permis du 13665, boulevard de Pierrefonds : plans, implantation, description des travaux. Les documents se transmettent par courriel avant le rendez-vous de signature et de paiement.",
            },
            {
              number: "4",
              title: "Contrat et échéancier",
              description:
                "Contrat écrit avec budget, échéancier et modalités de paiement. Licence RBQ et assurances vérifiables avant la première journée de chantier.",
            },
            {
              number: "5",
              title: "Chantier coordonné",
              description:
                "Les corps de métier passent dans l'ordre. Un seul interlocuteur pour les questions, les changements et les imprévus, avec un suivi écrit de chaque modification de portée.",
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
          heading:
            "Pourquoi choisir un entrepreneur général établi dans l'arrondissement",
          intro:
            "La différence entre un entrepreneur qui « dessert » l'Ouest-de-l'Île et un entrepreneur qui y a son adresse se voit au troisième imprévu du chantier, pas dans la soumission.",
          items: [
            {
              title: "Une licence vérifiable, pas une promesse",
              description:
                "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction, catégories entrepreneur général 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Vous pouvez la vérifier vous-même au registre de la Régie du bâtiment.",
            },
            {
              title: "Un déplacement de quelques minutes",
              description:
                "Notre base est rue Larocque. Une visite de suivi, une mesure à reprendre ou un imprévu à constater ne demandent pas de replanifier une demi-journée de route.",
            },
            {
              title: "Les règles de l'arrondissement, pas celles d'une autre ville",
              description:
                "Pierrefonds-Roxboro a son propre comptoir des permis et sa propre réglementation d'urbanisme. Un entrepreneur qui travaille surtout sur la Rive-Sud recommence l'apprentissage à chaque dossier.",
            },
            {
              title: "L'eau prise au sérieux",
              description:
                "Après 2017 et 2019, un sous-sol fini dans un secteur riverain sans avoir validé le drain, le clapet et la pompe n'est pas une économie. C'est une reprise reportée.",
            },
            {
              title: "Une division armoires intégrée",
              description:
                "Nos armoires sur mesure sont fabriquées pour nous par notre usine partenaire (sous-catégorie RBQ 12). Un intervenant de moins à coordonner entre la démolition et la finition.",
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
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol aménagé dans une maison de Pierrefonds-Roxboro",
          },
          cardTitle: "Note Google 5,0 sur 11 avis",
          cardDescription:
            "Des centaines de chantiers résidentiels depuis 2004, une licence RBQ sans réclamation au dossier, responsabilité civile et chantier assurées. On ne vend pas un rabais : on vend l'absence de mauvaises surprises.",
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
            "On intervient dans tout l'arrondissement : Pierrefonds-Est, Pierrefonds-Ouest, Roxboro, le secteur Cloverdale, les abords du boulevard Gouin, du boulevard Pierrefonds et du boulevard Saint-Charles, ainsi que les rues riveraines vers le Cap-Saint-Jacques et le Bois-de-Liesse. Et tout autour, le reste de l'Ouest-de-l'Île.",
          columns: "3",
          items: [
            {
              title: "Rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Le service le plus demandé dans l'arrondissement, humidité et drainage compris.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Reconstruction après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau, refoulement, inondation : reprise complète et conforme.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge, ajout d'étage ou transformation de garage, permis inclus.",
              ctaLabel: "Voir le service",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "À quelques minutes, de l'autre côté du boulevard Saint-Jean.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "L'arrondissement voisin, de l'autre côté du pont Jacques-Bizard.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "Au sud du boulevard Saint-Charles, à moins de quinze minutes.",
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
          heading: "FAQ - rénovation à Pierrefonds-Roxboro",
          intro:
            "Les questions que nous posent le plus souvent les propriétaires de l'arrondissement.",
          items: [
            {
              q: "Est-ce que Dilamco travaille vraiment à Pierrefonds-Roxboro ?",
              a: "Notre adresse d'affaires est au 18625, rue Larocque, dans l'arrondissement. Pierrefonds-Roxboro n'est pas une zone que nous desservons à distance : c'est notre point de départ, et une bonne partie de nos chantiers résidentiels se trouvent à moins de dix minutes de route.",
            },
            {
              q: "Ai-je besoin d'un permis pour rénover ma maison à Pierrefonds-Roxboro ?",
              a: "Dans la plupart des cas, oui. La rénovation, la transformation et l'agrandissement d'un bâtiment exigent un permis délivré par l'arrondissement, obtenu au comptoir des permis du 13665, boulevard de Pierrefonds. Certains travaux intérieurs mineurs en sont exemptés, mais dès qu'on touche à la structure, à l'enveloppe, à la plomberie ou à l'électricité, le permis est requis. Nous montons le dossier dans le cadre du mandat.",
            },
            {
              q: "Combien de temps prend l'obtention d'un permis dans l'arrondissement ?",
              a: "Le délai dépend de la complexité du dossier et de l'exhaustivité des documents transmis. Un dossier complet et bien monté progresse nettement plus vite qu'un dossier auquel il manque un plan d'implantation ou une description claire des travaux. Les plans se transmettent par courriel avant le rendez-vous de signature et de paiement. Nous prévoyons ce délai dans l'échéancier plutôt que de le découvrir en cours de route.",
            },
            {
              q: "Ma maison est dans un secteur touché par les inondations de 2017 et 2019. Pouvez-vous refaire mon sous-sol ?",
              a: "Oui, et c'est un mandat fréquent pour nous. Avant toute finition, on valide le drain, le clapet antiretour, la pompe submersible et l'état de la dalle. Le choix des matériaux change aussi : dans un secteur riverain, un montage qui tolère l'humidité vaut mieux qu'un montage esthétique qui devra être défait. Si votre propriété figure aux cartes de zones à risque du gouvernement du Québec, certains travaux peuvent être encadrés par des règles particulières que nous validons auprès de l'arrondissement.",
            },
            {
              q: "Travaillez-vous avec les assureurs après un dégât d'eau ?",
              a: "Nous intervenons en reconstruction, une fois l'assèchement et la décontamination terminés. Nous produisons une portée de travaux détaillée et documentons les modifications, ce qui facilite le suivi avec votre assureur. Le contrat demeure entre vous et nous : c'est vous qui décidez de la portée.",
            },
            {
              q: "Combien coûte une rénovation à Pierrefonds-Roxboro ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $. Une cuisine complète se situe plutôt entre 35 000 $ et 50 000 $ et plus, selon l'ampleur des travaux connexes. Le prix dépend de la portée, de l'état de la maison, des matériaux et de la coordination requise. L'estimation est gratuite et le budget est fixé au contrat écrit.",
            },
            {
              q: "Peut-on rénover en hiver dans l'Ouest-de-l'Île ?",
              a: "Oui pour l'intérieur : cuisine, salle de bain, sous-sol et rénovation intérieure complète se font toute l'année. Les travaux d'enveloppe, de toiture et d'excavation sont plus sensibles au froid et à la neige, et se planifient plutôt de la fin du printemps à l'automne. L'hiver est souvent le meilleur moment pour préparer un agrandissement qui débutera au dégel.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Nos catégories de licence RBQ sont celles de l'entrepreneur général en petits bâtiments et en bâtiments de tout genre : rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maison neuve et n'offrons pas de plan de garantie pour bâtiment résidentiel neuf.",
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
          heading: "Un projet à Pierrefonds-Roxboro ? On est à côté.",
          intro:
            "Décrivez-nous les travaux envisagés. On se déplace, on regarde la maison et on revient avec une portée écrite et un prix. Estimation gratuite, retour sous 24 à 48 heures ouvrables.",
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
          note: "Dilamco - 18625, rue Larocque, Pierrefonds-Roxboro - RBQ 8306-0806-27",
        },
      },
    },
  ],
};
