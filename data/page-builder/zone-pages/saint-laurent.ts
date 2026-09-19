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
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "Entrepreneur général à",
          heading: "Saint-Laurent",
          description:
            "Rénovation de plex, de bungalows et de condos à Saint-Laurent, par un entrepreneur général licencié de l'Ouest-de-l'Île.",
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
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain refaite dans un plex de Saint-Laurent",
          },
          facts: [
            {
              label: "Notre base",
              value: "Pierrefonds-Roxboro, à vingt minutes par l'autoroute 40",
            },
            {
              label: "Où demander le permis",
              value: "Division des permis, 777, boulevard Marcel-Laurin",
            },
            {
              label: "Type de maisons",
              value: "Des plex d'après-guerre et des condos bâtis depuis 1990",
            },
            {
              label: "Premier retour",
              value: "Nous donnons signe de vie en 24 à 48 heures ouvrables",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Les maisons de Saint-Laurent, en bref",
          intro:
            "Norgate sort de terre en 1949 et le Nouveau-Saint-Laurent au début des années 1990.",
          rows: [
            {
              label: "Âge des quartiers",
              value:
                "Les plex datent de 1949 à 1955, les copropriétés de Bois-Franc des années 1990.",
            },
            {
              label: "Comment déposer la demande",
              value:
                "En ligne, avec un compte des services numériques de la Ville, ou au comptoir de l'arrondissement.",
            },
            {
              label: "Particularité locale",
              value:
                "En copropriété, le syndicat encadre l'accès, l'ascenseur, les aires communes et les heures de travaux.",
            },
            {
              label: "À surveiller",
              value:
                "Les plex partagent des colonnes de plomberie et des murs mitoyens entre les logements.",
            },
            {
              label: "Projets courants",
              value:
                "Refaire une salle de bain, ouvrir une cuisine, insonoriser entre deux logements.",
            },
            {
              label: "Depuis notre base",
              value:
                "Autoroute 40 vers l'est, sortie Côte-Vertu ou Marcel-Laurin.",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-card-bath-01.webp",
            alt: "Salle de bain rénovée à l'étage d'un duplex laurentien",
          },
          note: "Sources : Ville de Montréal, banque 311, histoire de l'arrondissement. Vérifié le 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services à Saint-Laurent",
          items: [
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "On repère la colonne de plomberie commune du plex avant de déplacer un drain",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Salle de bain refaite dans un logement de Norgate",
              },
              badges: ["Plex"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On valide la structure avant d'ouvrir la cuisine fermée d'un bungalow",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Cuisine ouverte dans un bungalow du secteur Côte-Vertu",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "On mesure la hauteur libre et la sortie de secours sous un duplex",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol transformé en pièce de vie sous un duplex",
              },
              badges: ["Conformité"],
              footerCtaLabel: "Voir le sous-sol",
            },
          ],
        },
      },
    },
    {
      id: "voisins",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Aussi desservies près de Saint-Laurent",
          columns: "2",
          items: [
            {
              title: "Dorval",
              href: "/zones/dorval",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Laval",
              href: "/zones/laval",
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
          heading: "Questions fréquentes à Saint-Laurent",
          items: [
            {
              q: "Comment dépose-t-on une demande de permis à Saint-Laurent ?",
              a: "En ligne, avec un compte des services numériques de la Ville, ou au comptoir de la Division des permis et des inspections, 777, boulevard Marcel-Laurin. Nous montons le dossier et nous le suivons.",
            },
            {
              q: "Travaillez-vous sur les plex du quartier Norgate ?",
              a: "Oui. Le quartier a été bâti de 1949 au début des années 1950. Nous vérifions l'entrée électrique, les colonnes de plomberie et l'insonorisation entre les logements avant de dessiner le projet.",
            },
            {
              q: "Peut-on rénover une copropriété de Bois-Franc ?",
              a: "Oui, avec une préparation de plus. Le syndicat encadre l'accès, l'ascenseur, la protection des aires communes et les heures de travaux. Toucher à une partie commune demande une autorisation écrite.",
            },
            {
              q: "Puis-je ajouter un logement dans un duplex de Saint-Laurent ?",
              a: "Cela dépend du zonage de votre adresse. Le nombre de logements, l'usage et certaines transformations visibles de la rue sont encadrés. Nous le vérifions avant la soumission, jamais après la démolition.",
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
          heading: "Un plex ou un condo à rénover à Saint-Laurent ?",
          intro:
            "Donnez-nous l'adresse, l'étage et le type de bâtiment. On vient voir.",
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
          note: "Entrepreneur général licencié · base au 18625, rue Larocque · (514) 820-0773",
        },
      },
    },
  ],
};
