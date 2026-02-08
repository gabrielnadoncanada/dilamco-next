import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import { ActionButtons } from "@/components/ActionButtons";
import { Checklist } from "@/components/Checklist";
import { type FeatureImageTextItem } from "@/components/sections/FeatureImageText";

export const metadata = createPageMetadata({
  title: "Walk-in & rangement sur mesure",
  description:
    "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l'espace et finition haut de gamme. Design, fabrication et installation à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/walk-in/",
  ogAlt: "Walk-in & rangement sur mesure Dilamco",
});

export default function WalkIn() {
  const faqItems = [
    {
      q: "Walk-in sur mesure vs modulaire : quelle différence?",
      a: "Le sur mesure s'adapte à l'espace exact (dimensions, angles, contraintes) et à vos habitudes. Le modulaire est plus standard et peut laisser des zones perdues ou moins optimisées.",
    },
    {
      q: "Est-ce possible dans un petit espace?",
      a: 'Oui. Le sur mesure est particulièrement utile dans les espaces serrés, car il permet d\'optimiser la circulation et de maximiser le rangement sans "perdre" des centimètres.',
    },
    {
      q: "Quels matériaux sont recommandés pour un walk-in?",
      a: "Le choix dépend de l'usage, des charges et du niveau de finition. La durabilité dépend aussi de la qualité des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Quels sont les délais typiques?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance (0-3 mois, 3-6 mois, etc.) est un bon point de départ à préciser lors de la soumission.",
    },
  ];

  const featureImageTextItems: FeatureImageTextItem[] = [
    {
      ariaLabelledby: "organisation",
      heading: "Organisation & fonctionnalité (le cœur du sur mesure)",
      content: (
        <>
          <p>
            Le sur mesure permet de structurer l'espace selon vos habitudes.
            L'objectif : rendre le rangement simple, accessible et cohérent,
            sans "zones mortes" difficiles à utiliser.
          </p>
          <Checklist
            items={[
              "Zones vêtements : sections pour vêtements longs, courts et pliés.",
              "Chaussures : rangement dédié et accessible.",
              "Accessoires : tiroirs compartimentés pour optimiser le quotidien.",
              "Étagères : dimensions adaptées, avec possibilité d'ajustement selon le besoin.",
              "Évolutivité : organisation pensée pour s'adapter (nouveaux besoins, saisons, etc.).",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
        alt: "Organisation & fonctionnalité d'un walk-in sur mesure",
      },
    },
    {
      ariaLabelledby: "materiaux",
      heading: "Matériaux & durabilité",
      content: (
        <>
          <p>
            Un walk-in est utilisé tous les jours. La durabilité dépend des
            matériaux, des chants, de la quincaillerie et de la qualité
            d'installation.
          </p>
          <Checklist
            items={[
              "Stabilité : structures adaptées pour limiter les déformations dans le temps.",
              "Chants & finition : résistance aux impacts et à l'usure.",
              "Quincaillerie : coulisses et charnières pour usage répété.",
              "Entretien : finis cohérents avec votre quotidien.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
        alt: "Matériaux & durabilité d'un walk-in sur mesure",
      },
      links: [
        {
          text: "Voir les matériaux",
          href: "/materiaux/",
          variant: "outline",
        },
        {
          text: "Comparatif des matériaux",
          href: "/materiaux/comparatif/",
          variant: "outline",
        },
        {
          text: "Quincaillerie",
          href: "/materiaux/quincaillerie/",
          variant: "outline",
        },
      ],
    },
    {
      ariaLabelledby: "configurations",
      heading: "Configurations possibles",
      content: (
        <>
          <p>
            Voici quelques configurations fréquentes, adaptées selon l'espace
            disponible.
          </p>
          <Checklist
            items={[
              "Walk-in en L, en U ou linéaire : selon la circulation et les murs disponibles.",
              "Garde-robe ouvert ou fermé : rendu minimaliste ou protection accrue.",
              "Tiroirs intégrés : accessoires, bijoux, ceintures, petits items.",
              "Étagères ajustées : valises, paniers, linge, zones saisonnières.",
            ]}
          />
        </>
      ),
      image: {
        src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
        alt: "Configurations possibles d'un walk-in sur mesure",
      },
    },
  ];

  return (
    <SpacePageTemplate
      data={{
        breadcrumbs: [
          { name: "Accueil", url: SITE.url + "/" },
          { name: "Espaces", url: SITE.url + "/espaces/" },
          { name: "Walk-in & rangement", url: SITE.url + "/espaces/walk-in/" },
        ],
        service: {
          name: "Walk-in & rangement sur mesure",
          description:
            "Walk-in et rangement sur mesure : organisation, modules adaptés, optimisation de l'espace et finition haut de gamme.",
          url: SITE.url + "/espaces/walk-in/",
          serviceType: "Walk-in sur mesure",
        },
        hero: {
          heading:
            "Walk-in & rangement sur mesure,organisation pensée pour votre espace",
          description:
            "Un walk-in sur mesure se définit par l'usage : vêtements longs et courts, chaussures, accessoires, circulation et accès. Dilamco conçoit et réalise des solutions de rangement sur mesure haut de gamme, adaptées à votre espace réel, avec une finition durable - principalement à Montréal, Laval et sur la Rive-Sud.",
          image: {
            src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
            alt: "Walk-in & rangement sur mesure",
          },
          actionsSlot: (
            <ActionButtons
              className="justify-start"
              buttons={[
                {
                  text: "Demander une soumission",
                  href: "/contact/",
                },
                {
                  text: "Voir des projets de walk-in",
                  href: "/projets/walk-in/",
                  variant: "outline",
                },
              ]}
            />
          ),
        },
        audience: {
          ariaLabelledby: "pour-qui",
          heading: "À qui s'adresse un walk-in sur mesure?",
          items: [
            "Vous voulez optimiser un espace atypique (angles, plafonds bas, niches, condo).",
            "Vous cherchez une organisation précise (tiroirs accessoires, zones vêtements, rangement chaussures).",
            "Vous souhaitez un rendu durable et cohérent (matériaux, chants, quincaillerie, finition).",
          ],
          variant: "checkmarks",
        },
        includedLinks: {
          ariaLabelledby: "ce-qui-est-inclus",
          heading: "Ce que comprend un walk-in Dilamco",
          links: [
            {
              label: "Design & planification",
              href: "/services/design/",
              description:
                "Besoins, contraintes, circulation et plan d'organisation.",
            },
            {
              label: "Fabrication sur mesure",
              href: "/services/fabrication/",
              description: "Modules, étagères, tiroirs et zones adaptées.",
            },
            {
              label: "Installation précise",
              href: "/services/installation/",
              description:
                "Alignements, ajustements, finition et inspection finale.",
            },
          ],
          columns: 3,
        },
        featureImageTextItems,
        projectLinks: {
          ariaLabelledby: "projets",
          heading: "Projets de walk-in",
          links: [
            {
              label: "Voir tous les projets de walk-in",
              href: "/projets/walk-in/",
            },
            { label: "Voir tous les projets", href: "/projets/" },
          ],
          columns: 2,
        },
        faq: {
          ariaLabelledby: "faq",
          heading: "FAQ - walk-in & rangement sur mesure",
          items: faqItems,
        },
        usefulLinks: {
          ariaLabelledby: "liens",
          heading: "Liens utiles",
          links: [
            { label: "Projets", href: "/projets/walk-in/" },
            { label: "Matériaux", href: "/materiaux/" },
            { label: "Demander une soumission", href: "/contact/" },
          ],
          columns: 3,
        },
      }}
    />
  );
}
