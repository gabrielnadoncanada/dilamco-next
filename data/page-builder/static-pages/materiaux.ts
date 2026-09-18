import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Matériaux pour cuisines & armoires sur mesure",
    description:
      "Matériaux pour armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie et finis, comparés par notre division armoires.",
    path: "/materiaux",
    ogAlt: "Matériaux Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Division armoires",
          heading: "Les matériaux qu'on met dans vos armoires",
          description:
            "Panneaux, quincaillerie et finis sont spécifiés par nous, produits par notre usine partenaire, puis vérifiés à la réception avant la pose.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Contreplaqué", "MDF", "Quincaillerie"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif visuel de matériaux pour armoires sur mesure",
          },
          caption: "Spécifié ici, vérifié à la livraison",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment on choisit",
          description:
            "Le panneau se décide pièce par pièce. Une porte de cuisine et un caisson sous lavabo ne subissent pas les mêmes contraintes.",
          cards: [
            {
              title: "Humidité",
              description:
                "Salle de bain, sous-évier et salle de lavage exigent plus de protection.",
            },
            {
              title: "Charge",
              description:
                "Tiroirs, tablettes et armoires hautes portent des poids différents.",
            },
            {
              title: "Fini visé",
              description:
                "Peinture uniforme, décor thermofusionné ou grain de bois naturel.",
            },
            {
              title: "Chants et pose",
              description:
                "Ce sont eux qui décident de la durée, pas seulement le panneau.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "pages",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Les matériaux en détail",
          columns: "3",
          items: [
            {
              title: "Contreplaqué",
              href: "/materiaux/contreplaque",
              description: "Structure des caissons",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Portes peintes",
            },
            {
              title: "Mélamine",
              href: "/materiaux/melamine",
              description: "Décor déjà fini",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif",
              description: "Façades et détails",
            },
            {
              title: "Quincaillerie",
              href: "/materiaux/quincaillerie",
              description: "Charnières et coulisses",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs",
              description: "Teinte et lustre",
            },
            {
              title: "Comparatif",
              href: "/materiaux/comparatif",
              description: "Les quatre panneaux côte à côte",
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
              q: "Contreplaqué ou MDF ?",
              a: "Contreplaqué pour les caissons et les tiroirs, parce qu'il tient les vis. MDF pour les portes peintes, parce que sa surface ne laisse remonter aucun fil.",
            },
            {
              q: "La mélamine est-elle un bon choix ?",
              a: "Oui à l'intérieur des caissons et sur les tablettes. Sa durée dépend des chants : bande épaisse bien collée, sinon l'eau finit par entrer.",
            },
            {
              q: "Quels matériaux éviter en salle de bain ?",
              a: "Tout panneau dont les chants restent nus. La vapeur attaque les bords avant la surface. On scelle, on ventile, et on passe au contreplaqué sous le lavabo.",
            },
            {
              q: "Pouvez-vous rénover la pièce au complet ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27. Permis, démolition, plomberie, électricité, plancher et pose des armoires sous un seul contrat écrit.",
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
          heading: "Un avis sur vos choix techniques ?",
          intro:
            "On fixe la combinaison panneaux, quincaillerie et finis dans la soumission détaillée.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
