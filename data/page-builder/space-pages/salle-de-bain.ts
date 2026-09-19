import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Vanité de salle de bain sur mesure à Laval",
    description:
      "Vanité de salle de bain sur mesure à Laval, Montréal et sur les deux rives, conçue, fournie et posée par Dilamco, entrepreneur général licencié RBQ.",
    path: "/espaces/salle-de-bain",
    ogAlt: "Vanité de salle de bain sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de bain sur mesure",
      url: SITE.url + "/espaces/salle-de-bain",
    },
  ],
  service: {
    name: "Vanité de salle de bain sur mesure",
    description:
      "Conception, production en usine partenaire et installation de vanités de salle de bain sur mesure haut de gamme à Montréal, Laval, sur la Rive-Nord et la Rive-Sud.",
    url: SITE.url + "/espaces/salle-de-bain",
    serviceType: "Vanité de salle de bain sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Vanité de salle de bain sur mesure à Laval",
          description:
            "On dessine la vanité, on la fait produire, puis on la pose avec le reste de la pièce.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Salle de bain avec vanité double en chêne clair et douche vitrée",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Salles de bain refaites au complet",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-marbre-meuble-lavabo-flottant-01.webp",
                alt: "Salle de bain en marbre avec meuble-lavabo flottant",
              },
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Douche à l'italienne avec paroi de verre",
              },
            },
            {
              kind: "stat",
              value: "15 000 $",
              label: "Le prix de départ d'une salle de bain complète",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanité avec miroir à éclairage DEL et comptoir de quartz",
              },
            },
            {
              kind: "quote",
              quote:
                "L'expérience client au cœur des services de Dilamco Construction !",
              author: "Jean-Philippe Hébert, avis Google",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-douche-pierre-claire-01.webp",
                alt: "Douche habillée de pierre claire dans une salle de bain rénovée",
              },
              caption: "Ouest-de-l'Île",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La salle de bain en bref",
          rows: [
            {
              label: "Combien de temps",
              value:
                "La vanité prend 9 à 15 semaines à produire, à partir du relevé.",
            },
            {
              label: "Prix indicatif",
              value:
                "Refaire la pièce au complet, vanité comprise, va de 15 000 $ à 35 000 $.",
            },
            {
              label: "Matériaux",
              value:
                "Du contreplaqué de bouleau, avec les bords scellés pour que la vapeur n'entre pas.",
            },
            {
              label: "Quincaillerie",
              value:
                "Des charnières et des rails traités pour ne pas rouiller dans une pièce humide.",
            },
            {
              label: "Qui installe",
              value:
                "Notre équipe, après la céramique et avant le raccordement des robinets.",
            },
            {
              label: "Garantie",
              value:
                "Tout ce qui cloche est corrigé avant que vous payiez le dernier versement.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Vanité de salle de bain sur mesure dans une pièce rénovée",
          },
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
              q: "Peut-on déplacer la toilette ou le bain ?",
              a: "Oui, à condition de refaire l'alimentation et le drain. Dans une dalle de béton, il faut ouvrir le plancher, ce qui change le budget et le calendrier. On le tranche au relevé.",
            },
            {
              q: "Comment évitez-vous la moisissure derrière la vanité ?",
              a: "Membrane continue sous la céramique, scellant aux jonctions, ventilateur dimensionné pour le volume de la pièce et raccordé vers l'extérieur, pas vers l'entretoit.",
            },
            {
              q: "Combien de temps la salle de bain est-elle inutilisable ?",
              a: "Comptez deux à quatre semaines de travaux sur place, selon la démolition et le séchage. Les dates sont fixées à l'échéancier, pas laissées à l'improvisation.",
            },
            {
              q: "Une vanité sur mesure vaut-elle le prix dans une petite pièce ?",
              a: "C'est là qu'elle change le plus de choses : largeur ajustée au centimètre, tiroirs contournant le siphon, hauteur adaptée aux utilisateurs plutôt qu'au catalogue.",
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
          heading: "Parlez-nous de votre salle de bain",
          intro:
            "Visite gratuite. Vous repartez avec une soumission détaillée ligne par ligne.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets/salle-de-bain",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
