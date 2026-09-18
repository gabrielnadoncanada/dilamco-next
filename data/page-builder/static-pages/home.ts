import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Entrepreneur général rénovation — Ouest-de-l'Île | Dilamco",
    description:
      "Entrepreneur général RBQ depuis 2004. Rénovation de cuisine, salle de bain, sous-sol et agrandissement dans l'Ouest-de-l'Île et le Grand Montréal.",
    path: "/",
    ogAlt: "Chantier de rénovation résidentielle coordonné par Dilamco",
  },
  breadcrumbs: [
    {
      name: "Accueil",
      url: SITE.url + "/",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "image-overlay",
        props: {
          heading:
            "Entrepreneur général en rénovation résidentielle — Ouest-de-l'Île et Grand Montréal",
          description:
            "Dilamco prend en charge votre projet de rénovation du permis à la livraison. Un seul responsable, un échéancier écrit, un budget fixé au contrat et des corps de métier coordonnés. Estimation gratuite, retour sous 24 à 48 heures ouvrables.",
          badges: [
            "Rénovation résidentielle",
            "Agrandissement",
            "Après sinistre",
          ],
          actions: [
            {
              label: "Obtenir une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost-light",
            },
          ],
          image: {
            src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
            alt: "Cuisine rénovée par Dilamco dans une maison de l'Ouest-de-l'Île",
          },
          overlay: "dark-gradient",
          proofs: [
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Entrepreneur général, catégories 1.2 et 1.3. Valide, sans restriction au registre.",
            },
            {
              title: "Depuis 2004",
              description:
                "Plus de 20 ans et des centaines de chantiers résidentiels dans le Grand Montréal.",
            },
            {
              title: "5,0 sur Google",
              description:
                "Note de 5,0 sur 11 avis à la fiche Dilamco Construction.",
            },
          ],
        },
      },
    },
    {
      id: "promesse",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi les chantiers dérapent — et ce qu'on garantit",
          description:
            "La plupart des mauvaises expériences de rénovation ont la même origine : personne ne tient réellement le projet. Le chantier traîne parce que le plombier attend l'électricien. La facture double parce que rien n'avait été chiffré au départ. Le travail est à refaire parce que la séquence des métiers était mauvaise. Notre métier d'entrepreneur général, c'est exactement d'éliminer ces quatre causes.",
          cards: [
            {
              title: "Un échéancier écrit, pas une estimation verbale",
              description:
                "Chaque étape du chantier est datée au contrat, avec les jalons de livraison et d'inspection. Vous savez qui entre chez vous, quand, et pour combien de temps.",
            },
            {
              title: "Un budget fixé au contrat",
              description:
                "La soumission détaille les travaux, les matériaux et les exclusions. Les changements passent par un avenant écrit et chiffré avant d'être exécutés — jamais après.",
            },
            {
              title: "Un seul responsable, du permis à la livraison",
              description:
                "Nous coordonnons plomberie, électricité, structure, gypse, carrelage et finition. Vous n'avez pas à arbitrer entre des sous-traitants qui ne se parlent pas.",
            },
            {
              title: "Une exécution garantie et vérifiable",
              description:
                "Licence RBQ valide, cautionnement de licence, assurance responsabilité et chantier. Les travaux sont garantis, détails au contrat. Conformité au Code de construction du Québec.",
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
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on rénove",
          intro:
            "Rénovation résidentielle complète ou par pièce, agrandissement et reconstruction après sinistre. Chaque mandat est mené avec la même méthode : soumission détaillée, contrat écrit, coordination des corps de métier.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Démolition, plomberie, électricité, ventilation, revêtements et armoires. La cuisine est la pièce la plus dense en corps de métier : c'est là que la coordination change tout.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Rénovation complète de cuisine résidentielle",
              },
              badges: ["Résidentiel", "Clé en main"],
              footerCtaLabel: "Voir la rénovation de cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Reprise de la plomberie, membrane d'étanchéité, céramique, ventilation et vanité. Une salle de bain mal étanchéifiée se paie deux fois : on ne coupe pas sur cette étape.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité", "Céramique"],
              footerCtaLabel: "Voir la rénovation de salle de bain",
            },
            {
              title: "Rénovation de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Isolation, pare-vapeur, drainage, division des pièces, plafond et éclairage. On valide d'abord l'humidité et la hauteur libre, avant de finir quoi que ce soit.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Isolation", "Pièce de vie"],
              footerCtaLabel: "Voir la rénovation de sous-sol",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rallonge arrière ou latérale, ajout d'étage, extension de cuisine. Permis municipal, plans, fondation, structure et raccordement à l'existant.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison unifamiliale",
              },
              badges: ["Permis", "Structure"],
              footerCtaLabel: "Voir l'agrandissement de maison",
            },
            {
              title: "Installation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Bois franc, ingénierie, vinyle de luxe et céramique. Préparation du support, mise à niveau et transitions — l'essentiel d'un plancher se joue sous la surface.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Pose de plancher de bois franc dans une résidence",
              },
              badges: ["Bois franc", "Céramique"],
              footerCtaLabel: "Voir l'installation de plancher",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Dégât d'eau, refoulement, feu ou moisissure : démolition contrôlée, assèchement, reconstruction et remise en état. Documentation des travaux pour votre assureur.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction d'une pièce après un dégât d'eau",
              },
              badges: ["Dégât d'eau", "Reconstruction"],
              footerCtaLabel: "Voir la rénovation après sinistre",
            },
          ],
        },
      },
    },
    {
      id: "process",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment se déroule un projet avec nous",
          intro:
            "Cinq étapes, toujours les mêmes. Elles existent pour que vous sachiez, à chaque moment, où en est le chantier et ce qui s'en vient.",
          steps: [
            {
              number: "1",
              title: "Estimation gratuite en 24–48 h",
              description:
                "Vous nous décrivez le projet. On revient sous 24 à 48 heures ouvrables pour fixer une visite sur place et cadrer un ordre de grandeur réaliste.",
            },
            {
              number: "2",
              title: "Soumission détaillée et contrat",
              description:
                "Relevé, portée des travaux, matériaux, exclusions et prix. Une fois acceptée, la soumission devient un contrat écrit avec échéancier et calendrier de paiements.",
            },
            {
              number: "3",
              title: "Permis et planification",
              description:
                "On prépare les plans requis, on dépose la demande de permis auprès de la ville ou de l'arrondissement et on réserve les corps de métier avant d'ouvrir le chantier.",
            },
            {
              number: "4",
              title: "Chantier coordonné",
              description:
                "Protection des surfaces, démolition, structure, plomberie, électricité, isolation, gypse, finition. Chaque métier entre à son tour, après inspection de l'étape précédente.",
            },
            {
              number: "5",
              title: "Livraison et garantie",
              description:
                "Inspection finale avec vous, liste de déficiences corrigée avant le dernier paiement, puis garantie sur les travaux exécutés — détails au contrat.",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Zones desservies",
          intro:
            "Notre base est à Pierrefonds-Roxboro. On travaille partout dans l'Ouest-de-l'Île, à Montréal, à Laval, sur la Rive-Sud et dans Vaudreuil-Soulanges.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              description:
                "Notre secteur d'attache : bungalows, cottages et sous-sols en bordure de la rivière des Prairies.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir Pierrefonds-Roxboro",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "Bungalows et split-levels des années 1960 à 1990, souvent mûrs pour une cuisine ou un sous-sol.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "Voir Dollard-des-Ormeaux",
            },
            {
              title: "Kirkland",
              description:
                "Maisons unifamiliales à rénover ou à agrandir, avec des exigences de permis à respecter.",
              href: "/zones/kirkland",
              ctaLabel: "Voir Kirkland",
            },
            {
              title: "Pointe-Claire",
              description:
                "Parc immobilier varié, du village historique aux secteurs résidentiels d'après-guerre.",
              href: "/zones/pointe-claire",
              ctaLabel: "Voir Pointe-Claire",
            },
            {
              title: "Beaconsfield",
              description:
                "Grandes propriétés et projets d'agrandissement, souvent avec contraintes d'implantation.",
              href: "/zones/beaconsfield",
              ctaLabel: "Voir Beaconsfield",
            },
            {
              title: "Dorval",
              description:
                "Rénovations résidentielles et aménagements commerciaux à proximité immédiate de notre base.",
              href: "/zones/dorval",
              ctaLabel: "Voir Dorval",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              description:
                "Secteurs riverains où l'humidité des sous-sols et le drainage demandent une attention particulière.",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "Voir L'Île-Bizard",
            },
            {
              title: "Saint-Laurent",
              description:
                "Maisons d'après-guerre, plex et copropriétés : accès, horaires et coordination à planifier.",
              href: "/zones/saint-laurent",
              ctaLabel: "Voir Saint-Laurent",
            },
            {
              title: "Laval",
              description:
                "Rénovations complètes et agrandissements, avec permis déposés auprès de la Ville de Laval.",
              href: "/zones/laval",
              ctaLabel: "Voir Laval",
            },
            {
              title: "Vaudreuil-Dorion",
              description:
                "Extension naturelle de notre territoire vers l'ouest, à courte distance de Pierrefonds.",
              href: "/zones/vaudreuil-dorion",
              ctaLabel: "Voir Vaudreuil-Dorion",
            },
            {
              title: "Rive-Sud",
              description:
                "Longueuil, Brossard, Saint-Lambert et environs : agrandissements, rénovations complètes et après sinistre.",
              href: "/zones/rive-sud",
              ctaLabel: "Voir la Rive-Sud",
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Aussi : notre division armoires sur mesure",
          intro:
            "La sous-catégorie 12 de notre licence RBQ couvre les armoires et comptoirs usinés. Concrètement : quand votre projet demande des armoires, vous n'avez pas à ajouter un fournisseur de plus au chantier. On les inclut dans la même soumission, sous la même responsabilité.",
          items: [
            {
              title: "Un intervenant de moins",
              description:
                "les armoires sont commandées, livrées et installées dans la séquence du chantier, pas en parallèle.",
            },
            {
              title: "Des dimensions prises sur le chantier réel",
              description:
                "le relevé se fait après la démolition, quand les murs sont à leur position définitive.",
            },
            {
              title: "Fabriquées pour nous par notre usine partenaire",
              description:
                "un standard stable d'un projet à l'autre, et un seul responsable si un ajustement est requis.",
            },
            {
              title: "Cuisine, salle de bain, walk-in, sous-sol",
              description:
                "armoires, vanités, rangements et mobilier intégré selon la pièce à rénover.",
            },
          ],
          actions: [
            {
              label: "Voir les espaces",
              href: "/espaces",
              variant: "primary",
            },
            {
              label: "Comprendre nos matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
            alt: "Armoires de cuisine sur mesure installées par Dilamco",
          },
          cardTitle: "Sous-catégorie RBQ 12",
          cardDescription:
            "Armoires et comptoirs usinés — une division de Dilamco, intégrée au mandat de rénovation.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          intro:
            "Les questions que se posent la plupart des propriétaires avant de signer avec un entrepreneur général.",
          items: [
            {
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats de rénovation démarrent généralement autour de 25 000 $. Une cuisine complète se situe habituellement entre 35 000 $ et 50 000 $, et davantage selon la portée, l'état des installations existantes et les matériaux choisis. Un ordre de grandeur donné au téléphone reste une approximation : le prix se fixe après le relevé sur place, dans la soumission détaillée.",
            },
            {
              q: "Combien de temps dure un chantier ?",
              a: "La durée dépend de la portée et du nombre de corps de métier. Une salle de bain se compte en semaines, une cuisine complète ou un sous-sol en mois, un agrandissement davantage puisqu'il faut y ajouter le délai de permis et la fondation. L'échéancier est écrit au contrat avant le début des travaux, avec les jalons de chaque étape.",
            },
            {
              q: "Faut-il un permis pour mes travaux ?",
              a: "Souvent, oui. Les municipalités et les arrondissements exigent un permis dès qu'on touche à la structure, aux ouvertures, à la plomberie, à l'électricité ou qu'on ajoute de la superficie habitable. Nous vérifions les exigences applicables à votre adresse, préparons les documents et déposons la demande pour vous. Aucun chantier n'ouvre sans les autorisations requises.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Dilamco détient la licence RBQ 8306-0806-27, valide et sans restriction, délivrée en 2004, dans les catégories entrepreneur général 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Un cautionnement de licence est en vigueur et aucune réclamation n'apparaît au dossier. Nous détenons une assurance responsabilité civile et une couverture chantier.",
            },
            {
              q: "Vos travaux sont-ils garantis ?",
              a: "Oui. Les travaux exécutés sont garantis et les modalités figurent au contrat, avec la portée couverte et la durée. L'inspection finale se fait avec vous : les déficiences relevées sont corrigées avant le paiement final. Nous ne construisons pas de maisons neuves, donc le plan de garantie GCR ne s'applique pas à nos mandats.",
            },
            {
              q: "Quel territoire desservez-vous ?",
              a: "Notre base est à Pierrefonds-Roxboro. Nous couvrons l'Ouest-de-l'Île, l'ensemble de Montréal, Laval, la Rive-Sud et le secteur de Vaudreuil-Soulanges. Être établis dans l'Ouest-de-l'Île change une chose concrète : les visites de suivi et les correctifs se font rapidement, sans que le chantier attende.",
            },
            {
              q: "Travaillez-vous en condo ou en copropriété ?",
              a: "Oui. Ces chantiers exigent une préparation supplémentaire : autorisation du syndicat, plages horaires permises, réservation de l'ascenseur, protection des aires communes et gestion des débris. Nous cadrons ces contraintes avant de fixer l'échéancier, pour éviter les arrêts de travaux en cours de route.",
            },
            {
              q: "Fournissez-vous aussi les armoires ?",
              a: "Oui. Notre licence RBQ inclut la sous-catégorie 12, armoires et comptoirs usinés. Les armoires sur mesure sont fabriquées pour nous par notre usine partenaire, puis livrées et installées dans la séquence du chantier. Pour vous, c'est un fournisseur de moins à coordonner et une seule soumission.",
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
          heading: "Décrivez-nous votre projet de rénovation",
          intro:
            "L'estimation est gratuite et le retour se fait sous 24 à 48 heures ouvrables. On vous dira franchement ce que votre projet implique, ce qu'il coûte et combien de temps il prend.",
          actions: [
            {
              label: "Obtenir une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 • Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
