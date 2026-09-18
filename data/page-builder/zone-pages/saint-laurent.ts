// Sources locales (consultées le 2026-09-18) :
// - Ville de Montréal, « Soumettre une demande de permis à Saint-Laurent »
//   (services numériques, création d'un compte, permis de rénovation intérieure
//   et extérieure) :
//   https://montreal.ca/articles/soumettre-une-demande-de-permis-saint-laurent-5197
// - Ville de Montréal, « Comptoir des permis – Saint-Laurent » et Banque
//   d'information 311, « Saint-Laurent – Rénovations résidentielles » (Division
//   des permis et des inspections, 777, boulevard Marcel-Laurin, Saint-Laurent
//   H4M 2M7) : https://montreal.ca/lieux/comptoir-des-permis-saint-laurent
//   et http://www1.ville.montreal.qc.ca/banque311/node/739
// - Histoire de Saint-Laurent, Ville de Montréal (population triplée entre 1941
//   et 1951 puis doublée la décennie suivante ; projet résidentiel de 1949 de plus
//   de 480 logements ; quartier Nouveau-Saint-Laurent amorcé au début des années
//   1990 sur d'anciennes fermes et le golf Challenger, adjacent à Bois-Franc) :
//   http://www2.ville.montreal.qc.ca/arrondissements/sla/historique/fr/intro/histvsl/terri/quartdev/nouveausl/nouveausl.html
// - « Galeries Norgate » (quartier Norgate développé de 1949 au début des années
//   1950, appartements annoncés comme « Garden Community » ; centre commercial
//   inauguré le 5 décembre 1950 sur le boulevard Décarie au nord du boulevard de
//   la Côte-Vertu) : https://fr.wikipedia.org/wiki/Galeries_Norgate
// - Licence RBQ 8306-0806-27 (registre RBQ, consulté 2026-09-18).

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneSaintLaurentPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Entrepreneur général à Saint-Laurent — rénovation",
    description:
      "Entrepreneur général RBQ à Saint-Laurent : rénovation de plex d'après-guerre, condos de Bois-Franc, permis de l'arrondissement, un seul responsable.",
    path: "/zones/saint-laurent",
    ogAlt: "Rénovation résidentielle à Saint-Laurent par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
    { name: "Saint-Laurent", url: SITE.url + "/zones/saint-laurent" },
  ],
  service: {
    name: "Entrepreneur général à Saint-Laurent",
    description:
      "Rénovation résidentielle à Saint-Laurent : duplex et plex d'après-guerre, bungalows, condos récents de Bois-Franc et du Nouveau-Saint-Laurent, permis d'arrondissement et coordination complète.",
    url: SITE.url + "/zones/saint-laurent",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Saint-Laurent",
      "Bois-Franc",
      "Nouveau-Saint-Laurent",
      "Norgate",
      "Côte-Vertu",
      "Chameran",
      "Vieux-Saint-Laurent",
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
          eyebrow: "Saint-Laurent",
          heading:
            "Entrepreneur général à Saint-Laurent, plex, bungalows et condos",
          description:
            "Trois époques de bâtiments, trois séries de pièges. Permis d'arrondissement et coordination des métiers inclus au mandat.",
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
          badges: ["Plex", "Copropriété", "Depuis 2004"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée dans un plex de Saint-Laurent",
          },
          caption: "Norgate, Côte-Vertu, Bois-Franc",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des bâtiments de Saint-Laurent",
          description:
            "Population triplée entre 1941 et 1951, puis doublée la décennie suivante. Un parc d'après-guerre très daté, plus des quartiers planifiés depuis 1990.",
          cards: [
            {
              title: "Plex de Norgate",
              description:
                "Développés de 1949 au début des années 1950 : colonnes communes, murs mitoyens, entrées électriques d'origine.",
            },
            {
              title: "Division des permis et des inspections",
              description:
                "Au 777, boulevard Marcel-Laurin, ou en ligne avec un compte des services numériques de la Ville.",
            },
            {
              title: "Bois-Franc et copropriétés",
              description:
                "Quartiers planifiés depuis les années 1990 : accès, ascenseur, horaires et parties communes encadrés.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on réalise à Saint-Laurent",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Caractère porteur et capacité électrique validés avant toute ouverture.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Cuisine rénovée avec armoires sur mesure",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Colonnes de plomberie communes repérées avant de déplacer un drain.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Salle de bain rénovée dans un logement existant",
              },
              badges: ["Plex"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Hauteur libre, humidité, issue et séparation coupe-feu vérifiées avant le plan.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Conformité"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Plex et logement locatif",
              href: "/services/renovation",
              description:
                "Insonorisation reprise pendant que les planchers sont ouverts, inoccupation limitée.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Chantier de rénovation dans un duplex de Saint-Laurent",
              },
              badges: ["Multilogement"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Planchers",
              href: "/services/renovation/plancher",
              description:
                "Support nivelé avant la pose, seuils et transitions alignés.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Pose de plancher dans une pièce rénovée",
              },
              badges: ["Préparation"],
              footerCtaLabel: "Voir le plancher",
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
          heading: "Ce qu'on vérifie avant de chiffrer",
          intro:
            "Sur un bâtiment d'après-guerre, la portée réelle se découvre sur place.",
          badges: ["Visite sur place", "Estimation gratuite"],
          cardTitle: "Liste de vérification en visite",
          items: [
            "Année de construction et transformations subies",
            "Capacité de l'entrée électrique et du panneau",
            "Position des colonnes de plomberie communes",
            "Murs porteurs et murs mitoyens",
            "Insonorisation entre logements ou étages",
            "Usage et nombre de logements au zonage",
            "Contraintes du syndicat de copropriété",
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
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Où obtient-on un permis de rénovation à Saint-Laurent ?",
              a: "Auprès de la Division des permis et des inspections de l'arrondissement, au 777, boulevard Marcel-Laurin, ou en ligne par les services numériques de la Ville, qui exigent la création d'un compte. Nous montons et déposons le dossier.",
            },
            {
              q: "Faut-il un permis pour une rénovation intérieure ?",
              a: "Oui dans la majorité des cas, dès que les travaux touchent la structure, la configuration des pièces, la plomberie ou l'électricité. L'entretien courant n'en exige généralement pas. Travailler sans permis peut mener à un arrêt de chantier.",
            },
            {
              q: "Travaillez-vous sur les plex de Norgate ?",
              a: "Oui. Ces bâtiments datent de 1949 au début des années 1950. Entrée électrique, colonnes de plomberie, caractère porteur des murs et insonorisation entre logements sont vérifiés avant de valider un plan.",
            },
            {
              q: "Peut-on rénover un condo à Bois-Franc ?",
              a: "Oui, avec une préparation supplémentaire. Le syndicat encadre l'accès, l'ascenseur, la protection des aires communes et les heures de travaux. Certaines interventions sur les parties communes exigent une autorisation écrite.",
            },
            {
              q: "Puis-je ajouter un logement ou changer l'usage ?",
              a: "Cela dépend du zonage applicable à votre adresse. Le nombre de logements, l'usage et certaines transformations extérieures sont encadrés par la réglementation d'urbanisme. C'est une vérification faite avant la soumission, jamais après la démolition.",
            },
            {
              q: "Quel budget prévoir et êtes-vous assurés ?",
              a: "Nos projets démarrent autour de 25 000 $, une cuisine complète entre 35 000 $ et 50 000 $ et plus. Licence RBQ 8306-0806-27, valide sans restriction depuis 2004, catégories 1.2 et 1.3, responsabilité civile et couverture de chantier en vigueur.",
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
          heading: "Un projet à Saint-Laurent ?",
          intro:
            "On visite, on valide le zonage et le permis, puis on chiffre.",
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
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
