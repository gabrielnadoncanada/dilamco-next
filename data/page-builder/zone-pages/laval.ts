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
          eyebrow: "Laval",
          heading: "Entrepreneur général à Laval, du permis à la livraison",
          description:
            "Bungalows de Chomedey, sous-sols de Vimont, reprises après crue à Laval-Ouest. Un seul responsable de chantier.",
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
          badges: ["Laval", "Licence RBQ", "Depuis 2004"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée dans une maison de Laval",
          },
          caption: "Chomedey, Sainte-Dorothée, Vimont, Sainte-Rose",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on connaît des maisons lavalloises",
          description:
            "La ville s'est bâtie par vagues. Le secteur dit déjà ce qu'on trouvera derrière les murs.",
          cards: [
            {
              title: "Chomedey, vague 1960-1970",
              description:
                "Bungalows sur fondations en blocs de béton, vermiculite possible dans les combles.",
            },
            {
              title: "Service de l'urbanisme",
              description:
                "Demande en ligne, suivi dans Mon dossier, permis transmis par courriel.",
            },
            {
              title: "Zones inondables des Mille Îles",
              description:
                "Cotes de crue au règlement de zonage ; Laval-Ouest et Fabreville inondés en 2017.",
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
          heading: "Ce qu'on réalise à Laval",
          items: [
            {
              title: "Aménagement de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Salle familiale, chambre et salle de bain, conformes au Code.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Sous-sol aménagé avec coin bar",
              },
              badges: ["Sous-sol"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Ouvrir une cuisine fermée de bungalow, armoires sur mesure posées.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Cuisine ouverte rénovée dans une maison de banlieue",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir le service",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Démolition sélective, reconstruction et dossier documenté pour l'assureur.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Matériaux préparés pour une reconstruction de sous-sol",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir le service",
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
          heading: "Ce qu'on vérifie en visite",
          intro:
            "Le secteur donne une hypothèse, la visite la confirme avant qu'un chiffre soit écrit.",
          badges: ["Visite sur place", "Estimation gratuite", "Réponse 24-48 h"],
          cardTitle: "Notre liste de vérification",
          items: [
            "Année de construction et secteur",
            "Capacité de l'entrée électrique et du panneau",
            "Fondation en blocs et signes de mouvement",
            "Vermiculite possible dans les combles",
            "Hauteur libre, poutres et colonnes au sous-sol",
            "Drain, pompe de puisard et clapet antiretour",
            "Cote de crue inscrite au règlement de zonage",
            "Permis requis : intérieur, extérieur ou commercial",
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
          heading: "Questions fréquentes à Laval",
          items: [
            {
              q: "Comment obtient-on un permis de rénovation à Laval ?",
              a: "En ligne, auprès du Service de l'urbanisme. Le suivi se fait dans Mon dossier et le permis y est déposé puis transmis par courriel. Une demande impossible à faire en ligne se présente au 1333, boulevard Chomedey, sur rendez-vous.",
            },
            {
              q: "Quel permis pour une rénovation intérieure ?",
              a: "La Ville distingue le permis de rénovation résidentielle intérieure, son équivalent extérieur et celui d'un espace commercial. On identifie le bon au cadrage et on monte le dossier avant le début des travaux.",
            },
            {
              q: "Ma maison est en zone inondable. Est-ce que ça bloque le projet ?",
              a: "Pas nécessairement. Les plaines inondables sont délimitées par les cotes de crue du règlement de zonage, issues d'une étude approuvée par le gouvernement du Québec en 2014. On valide la cote avant de dessiner.",
            },
            {
              q: "Que faire d'un sous-sol inondé à Laval-Ouest ou à Fabreville ?",
              a: "On intervient après l'assèchement : démolition sélective, assainissement, puis reconstruction. On revoit le drainage, la pompe de puisard et le clapet antiretour, et on choisit des matériaux de bas de mur qui encaissent une récidive.",
            },
            {
              q: "Combien coûte une rénovation à Laval ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $ et plus. Le prix ferme est fixé après le relevé sur place, dans la soumission détaillée.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Licence RBQ 8306-0806-27, valide sans restriction depuis 2004, catégories 1.2 et 1.3. Responsabilité civile, couverture de chantier et cautionnement en vigueur, aucune réclamation au dossier.",
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
            "On se déplace, on identifie le permis, on remet une soumission détaillée.",
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
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
