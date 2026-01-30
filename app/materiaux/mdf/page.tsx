import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "MDF",
  description:
    "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure. Comprendre quand le MDF est pertinent (portes peintes) et quand privilégier d’autres matériaux.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/mdf/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/mdf/",
    title: "MDF | Dilamco",
    description:
      "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure. Comprendre quand le MDF est pertinent (portes peintes) et quand privilégier d'autres matériaux.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MDF — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDF | Dilamco",
    description:
      "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function MDF() {
  const faqItems = [
    {
      q: 'Le MDF est-il un matériau "bas de gamme"?',
      a: "Pas nécessairement. Le MDF peut être un excellent choix pour certaines applications (ex. portes peintes) si l'exécution est soignée et si l'usage est bien cadré.",
    },
    {
      q: "Le MDF gonfle-t-il avec l'humidité?",
      a: "Il peut réagir à l'eau si la protection est insuffisante, surtout aux chants. La finition et l'installation jouent un rôle important.",
    },
    {
      q: "MDF ou mélamine : lequel choisir?",
      a: 'Le MDF est souvent choisi pour la finition (peinture, surface uniforme). La mélamine vise plutôt un compromis économique avec différents finis. Le "bon" choix dépend de votre usage, de l\'espace et du niveau de durabilité recherché.',
    },
    {
      q: "Le MDF est-il recommandé en salle de bain?",
      a: "Ça peut être possible selon la ventilation, l'usage et la protection des chants. Pour certains projets, une autre solution sera préférable pour réduire les risques à long terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="MDF, quand et pourquoi l'utiliser en sur mesure"
          description="Le MDF (panneau de fibres à densité moyenne) est souvent utilisé en aménagement sur mesure, notamment pour obtenir une surface très uniforme (idéal pour des portes peintes). Ce n'est pas un matériau universel : le contexte (humidité, usage, finition, protection des chants) détermine s'il est pertinent."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Voir le comparatif des matériaux",
                href: "/materiaux/comparatif/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="cest-quoi"
          heading="C'est quoi le MDF?"
          paragraphs={[
            "Le MDF est composé de fibres de bois compressées. Sa densité uniforme donne une surface lisse, ce qui le rend intéressant pour certaines finitions (ex. peinture) et certaines pièces (portes et façades).",
          ]}
        />

        <ListSection
          aria-labelledby="avantages"
          heading="Avantages du MDF (quand il est pertinent)"
          items={[
            "Surface uniforme : excellent rendu pour des portes peintes.",
            "Finition stable : pas de grain comme le bois massif, aspect régulier.",
            "Bon compromis : souvent pertinent pour certaines façades lorsque le style recherché est moderne et épuré.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="limites"
          heading="Limites et précautions"
          paragraphs={[
            "Le MDF peut très bien performer lorsqu'il est utilisé au bon endroit, mais il demande une exécution rigoureuse.",
          ]}
        />

        <ListSection
          aria-labelledby="limites-details"
          heading=""
          items={[
            "Humidité : le MDF réagit à l'eau si mal protégé (surtout aux chants).",
            "Chants et protections : la durabilité dépend beaucoup de la qualité de finition et de l'entretien.",
            "Usage : ce n'est pas toujours le meilleur choix pour des zones fortement exposées à l'eau ou aux impacts répétés.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="cuisine-vs-sdb"
          heading="MDF en cuisine vs en salle de bain"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="cuisine-details"
          heading="MDF en cuisine"
          items={[
            "Souvent pertinent pour des portes peintes et des façades.",
            "La protection des chants et une finition durable restent critiques.",
            "Pour la structure et les zones très sollicitées, d'autres matériaux peuvent être plus adaptés selon le projet.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="cuisine-link"
          heading=""
          links={[
            { label: "Voir la page Cuisine sur mesure", href: "/espaces/cuisine/" },
          ]}
          columns={2}
        />

        <ListSection
          aria-labelledby="sdb-details"
          heading="MDF en salle de bain"
          items={[
            "Possible si le contexte est favorable (ventilation, protection, usage).",
            "En milieu humide, les détails d'exécution (chants, joints, installation) deviennent déterminants.",
            "Selon le projet, des alternatives peuvent être préférables pour maximiser la durabilité.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="sdb-link"
          heading=""
          links={[
            { label: "Voir la page Salle de bain & vanités", href: "/espaces/salle-de-bain/" },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="comparaisons"
          heading="MDF vs mélamine vs contreplaqué"
          paragraphs={[
            "Chaque matériau répond à une logique différente. Le MDF est souvent choisi pour la finition; la mélamine pour un compromis économique; le contreplaqué pour la stabilité et certaines applications plus exigeantes.",
          ]}
          links={[
            {
              text: "Voir le comparatif complet",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
            {
              text: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
            {
              text: "Mélamine",
              href: "/materiaux/melamine/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="comment-on-lutilise"
          heading="Comment nous utilisons le MDF"
          paragraphs={[
            "Notre approche : utiliser le MDF là où il est pertinent (ex. certaines portes et façades), et privilégier d'autres matériaux lorsque l'usage (humidité, charges, cycles d'ouverture) exige plus de stabilité ou de résistance. L'objectif n'est pas de « choisir un matériau populaire », mais d'obtenir un résultat durable une fois installé.",
          ]}
          links={[
            {
              text: "Voir tous les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — MDF"
          items={faqItems.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />

        <CTASection
          aria-labelledby="cta"
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          actions={[
            {
              text: "Demander une soumission",
              href: "/contact/",
            },
          ]}
        />
      </main>
    </>
  );
}
