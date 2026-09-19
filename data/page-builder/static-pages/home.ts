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
      content: {
        type: "hero",
        variant: "image-overlay",
        props: {
          heading: "Votre rénovation, menée par un entrepreneur général licencié.",
          description:
            "On s'occupe du permis, des corps de métier, de l'échéancier et du budget. Un seul responsable, du premier appel à la livraison.",
          actions: [
            {
              label: "Soumission gratuite",
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
            { title: "2004", description: "Licence RBQ depuis" },
            { title: "5,0", description: "Note Google" },
            { title: "24 h", description: "Premier retour" },
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
          heading: "Pourquoi confier votre projet à un entrepreneur général",
          description:
            "Un seul entrepreneur planifie le chantier, fait entrer les métiers dans le bon ordre et répond du résultat.",
          cards: [
            {
              title: "Un échéancier écrit",
              description: "Chaque étape du chantier est datée dans le contrat, avec les inspections prévues.",
            },
            {
              title: "Un prix fixé avant les travaux",
              description: "La soumission détaille les travaux, les matériaux et ce qui n'est pas inclus. Tout changement est chiffré et signé avant.",
            },
            {
              title: "Un seul responsable",
              description: "Nous engageons et coordonnons le plombier, l'électricien, le charpentier et les finisseurs. Vous n'avez qu'un interlocuteur.",
            },
            {
              title: "Licence, assurances et garantie",
              description: "Licence RBQ valide sans restriction, assurance responsabilité et chantier, travaux garantis par écrit.",
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
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description: "Démolition, plomberie, électricité, armoires et finition, dans le bon ordre.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Rénovation complète de cuisine résidentielle",
              },
              badges: ["Clé en main"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description: "Plomberie, membrane d'étanchéité, céramique, ventilation et vanité.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description: "Humidité et hauteur libre validées avant d'isoler, diviser et finir.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Isolation"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description: "Permis, plans, fondation, structure et raccordement à l'existant.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison unifamiliale",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description: "Bois franc, ingénierie, vinyle ou céramique, sur un support mis à niveau.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Pose de plancher de bois franc dans une résidence",
              },
              badges: ["Bois franc"],
              footerCtaLabel: "Voir le plancher",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description: "Dégât d'eau ou feu : assèchement, reconstruction et dossier pour l'assureur.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction d'une pièce après un dégât d'eau",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir l'après sinistre",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment se déroule votre projet",
          steps: [
            {
              number: "1",
              title: "Premier retour en 24 h",
              description: "Vous décrivez le projet, on fixe la visite et un ordre de grandeur.",
            },
            {
              number: "2",
              title: "Soumission et contrat",
              description: "Portée, matériaux, exclusions, prix, échéancier et paiements écrits.",
            },
            {
              number: "3",
              title: "Permis et planification",
              description: "Plans, demande de permis à la ville, métiers réservés avant d'ouvrir.",
            },
            {
              number: "4",
              title: "Chantier coordonné",
              description: "Chaque métier entre à son tour, après inspection de l'étape précédente.",
            },
            {
              number: "5",
              title: "Livraison et garantie",
              description: "Inspection finale avec vous, déficiences corrigées avant le dernier paiement.",
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
          heading: "Où nous travaillons",
          columns: "3",
          items: [
            { title: "Pierrefonds-Roxboro", href: "/zones/pierrefonds-roxboro", description: "Notre base" },
            { title: "Dollard-des-Ormeaux", href: "/zones/dollard-des-ormeaux" },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Dorval", href: "/zones/dorval" },
            { title: "L'Île-Bizard–Sainte-Geneviève", href: "/zones/ile-bizard-sainte-genevieve" },
            { title: "Saint-Laurent", href: "/zones/saint-laurent" },
            { title: "Laval", href: "/zones/laval" },
            { title: "Vaudreuil-Dorion", href: "/zones/vaudreuil-dorion" },
            { title: "Rive-Sud", href: "/zones/rive-sud" },
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
          heading: "Les armoires sur mesure, incluses dans le même contrat",
          intro:
            "Notre licence couvre aussi les armoires et les comptoirs. Pas de fournisseur de plus à gérer : tout est dans la même soumission.",
          items: [
            { title: "Posées au bon moment", description: "Les armoires sont commandées, livrées et installées quand le chantier est prêt à les recevoir." },
            { title: "Mesurées après la démolition", description: "On prend les dimensions quand les murs sont à leur place définitive, pas avant." },
            { title: "Cuisine, salle de bain, walk-in", description: "Armoires de cuisine, vanités et rangements intégrés, selon la pièce à rénover." },
          ],
          actions: [
            { label: "Voir les espaces", href: "/espaces", variant: "primary" },
            { label: "Nos matériaux", href: "/materiaux", variant: "ghost" },
          ],
          image: {
            src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
            alt: "Armoires de cuisine sur mesure installées par Dilamco",
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
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une cuisine complète se situe entre 35 000 $ et 50 000 $. Le prix ferme est fixé après le relevé sur place, dans la soumission.",
            },
            {
              q: "Combien de temps dure un chantier ?",
              a: "Une salle de bain se compte en semaines, une cuisine ou un sous-sol en mois, un agrandissement davantage (permis, fondation). L'échéancier est écrit au contrat.",
            },
            {
              q: "Faut-il un permis pour mes travaux ?",
              a: "Souvent, dès qu'on touche à la structure, aux ouvertures, à la plomberie ou à la superficie. On vérifie les exigences de votre ville et on dépose la demande.",
            },
            {
              q: "Êtes-vous licenciés et assurés ?",
              a: "Oui. Licence RBQ 8306-0806-27, valide sans restriction depuis 2004, cautionnement en vigueur, aucune réclamation au dossier. Assurance responsabilité civile et chantier.",
            },
            {
              q: "Vos travaux sont-ils garantis ?",
              a: "Oui, portée et durée inscrites au contrat. Les déficiences relevées à l'inspection finale sont corrigées avant le dernier paiement. Nous ne construisons pas de maisons neuves : le plan GCR ne s'applique pas.",
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
          heading: "Parlez-nous de votre projet",
          intro: "L'estimation est gratuite et nous répondons en 24 à 48 heures ouvrables.",
          actions: [
            { label: "Soumission gratuite", href: "/contact", variant: "primary" },
            { label: "Voir nos réalisations", href: "/projets", variant: "ghost" },
          ],
        },
      },
    },
  ],
};
