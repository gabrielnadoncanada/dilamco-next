import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Entrepreneur général licencié depuis 2004 — À propos",
    description:
      "Dilamco, entrepreneur général en rénovation résidentielle depuis 2004. Licence RBQ 8306-0806-27, base à Pierrefonds-Roxboro, Ouest-de-l'Île.",
    path: "/a-propos",
    ogAlt: "L'équipe et l'approche de chantier de Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "À propos",
          heading:
            "Entrepreneur général en rénovation résidentielle depuis 2004",
          description:
            "La même licence, la même personne responsable et la même adresse depuis vingt ans.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["RBQ 8306-0806-27", "Depuis 2004", "Pierrefonds-Roxboro"],
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Escalier et rampe de verre : finition intérieure réalisée par Dilamco",
          },
          caption: "9139-1250 Québec inc. · Pierrefonds-Roxboro",
          imageSide: "left",
        },
      },
    },
    {
      id: "reperes",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "L'entreprise en chiffres",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/mur-bois-accent-plafond-haut-01.webp",
                alt: "Mur de bois en accent sous un plafond de grande hauteur",
              },
              caption: "Mur d'accent, plafond haut",
            },
            {
              kind: "stat",
              value: "2004",
              label: "L'année où notre licence a été délivrée",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Plancher de bois franc neuf posé dans une pièce rénovée",
              },
              caption: "Plancher de bois franc",
            },
            {
              kind: "stat",
              value: "5,0",
              label: "Notre note Google, sur 11 avis de clients",
            },
            {
              kind: "stat",
              value: "40 000 $",
              label: "Le montant déposé en garantie pour protéger nos clients",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/showroom-dorval-presentoirs-finis-01.webp",
                alt: "Présentoirs de finis et de matériaux au showroom de Dorval",
              },
              caption: "Présentoirs de finis, Dorval",
            },
          ],
        },
      },
    },
    {
      id: "licence",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qui vous protège quand vous nous engagez",
          columns: "2",
          items: [
            {
              title: "Notre licence RBQ",
              icon: "fileCheck",
              bullets: [
                "Le numéro à vérifier est le 8306-0806-27",
                "Elle couvre les maisons comme les immeubles",
                "Elle couvre aussi les armoires et les comptoirs",
              ],
            },
            {
              title: "Un dépôt de garantie",
              icon: "shieldCheck",
              bullets: [
                "Le dépôt est de 40 000 $",
                "Personne n'a eu à s'en servir à ce jour",
                "Le responsable inscrit est Sean Diffley",
              ],
            },
            {
              title: "Nos assurances",
              icon: "hardHat",
              bullets: [
                "Nous sommes assurés en responsabilité civile",
                "Le chantier est couvert pendant les travaux",
                "Vous pouvez demander les papiers en tout temps",
              ],
            },
            {
              title: "La garantie de nos travaux",
              icon: "clipboardCheck",
              bullets: [
                "On corrige tout avant que vous payiez la fin",
                "Les travaux respectent le Code de construction",
                "Nous ne bâtissons pas de maisons neuves",
              ],
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
              q: "Depuis quand Dilamco existe ?",
              a: "La licence d'entrepreneur général a été délivrée le 7 septembre 2004 et n'a jamais été interrompue. Raison sociale : 9139-1250 Québec inc., aussi connue sous « Construction Dilamco ».",
            },
            {
              q: "Où êtes-vous situés ?",
              a: "Au 18625, rue Larocque, à Pierrefonds-Roxboro. Nous couvrons l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges.",
            },
            {
              q: "Qui est le répondant de la licence ?",
              a: "Sean Diffley, inscrit au registre comme répondant en gestion et en exécution des travaux. C'est la personne que la Régie reconnaît comme responsable des chantiers.",
            },
            {
              q: "Pourquoi passer par un entrepreneur général ?",
              a: "Parce qu'une seule signature couvre les permis, les corps de métier, l'échéancier et le prix. Sans lui, les arbitrages entre métiers retombent sur le propriétaire.",
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
          heading: "Parlons de votre projet",
          intro:
            "Estimation gratuite. Les attestations d'assurance sont fournies avant la signature.",
          actions: [
            {
              label: "Estimation gratuite",
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
  ],
};
