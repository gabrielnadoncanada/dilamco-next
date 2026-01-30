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
  title: "Pourquoi le contreplaqué",
  description:
    "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d’armoires sur mesure. Comprendre les plis croisés, l’humidité, les usages recommandés et les limites (MDF, mélamine, bois massif).",
  alternates: {
    canonical: "https://dilamco.com/materiaux/contreplaque/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/contreplaque/",
    title: "Pourquoi le contreplaqué | Dilamco",
    description:
      "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d'armoires sur mesure. Comprendre les plis croisés, l'humidité, les usages recommandés et les limites (MDF, mélamine, bois massif).",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contreplaqué — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pourquoi le contreplaqué | Dilamco",
    description:
      "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d'armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Contreplaque() {
  const faqItems = [
    {
      q: "Le contreplaqué est-il toujours meilleur que le MDF?",
      a: "Pas nécessairement. Le contreplaqué est souvent très pertinent pour la structure et la tenue des vis, tandis que le MDF peut être adapté pour certains finis ou applications. Le choix dépend de l'usage et du contexte.",
    },
    {
      q: "Le contreplaqué est-il adapté à la salle de bain?",
      a: "Ça dépend de l'environnement et des détails de protection (chants, finition, installation). L'objectif est de choisir une solution durable selon l'usage réel.",
    },
    {
      q: "Est-ce plus cher?",
      a: "Souvent, oui. Le coût reflète généralement la qualité structurelle et la durabilité recherchée. L'impact dépend du projet et des composantes concernées.",
    },
    {
      q: "Est-ce visible une fois installé?",
      a: "Généralement non, sauf si certaines tranches sont exposées volontairement au design. Dans tous les cas, le traitement des chants et la finition sont déterminants.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    {
      name: "Pourquoi le contreplaqué",
      url: SITE.url + "/materiaux/contreplaque/",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Contreplaqué, stabilité, durabilité et structure intelligente"
          description="Le contreplaqué est un matériau « technique » souvent privilégié en sur mesure pour la structure des armoires. Son avantage principal vient de sa composition en plis croisés : un comportement plus stable et plus prévisible, utile dans des environnements réels (variations d'humidité, usage intensif, contraintes de chantier)."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
              {
                text: "Voir nos réalisations",
                href: "/projets/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="definition"
          heading="Qu'est-ce que le contreplaqué?"
          paragraphs={[
            "Le contreplaqué est constitué de plusieurs couches de bois (plis) collées ensemble, avec un sens de fibre alterné d'un pli à l'autre. Cette structure « croisée » améliore la stabilité dimensionnelle par rapport à certains panneaux, tout en offrant une bonne résistance mécanique.",
            "Il se distingue du MDF (fibres), de la mélamine (panneau + revêtement) et du bois massif (pièce pleine).",
          ]}
          links={[
            {
              text: "MDF",
              href: "/materiaux/mdf/",
              variant: "outline",
            },
            {
              text: "Mélamine",
              href: "/materiaux/melamine/",
              variant: "outline",
            },
            {
              text: "Bois massif",
              href: "/materiaux/bois-massif/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="avantages"
          heading="Avantages du contreplaqué (pourquoi on l'utilise)"
          paragraphs={[
            "Le contreplaqué se voit rarement une fois le projet terminé… mais il influence directement la tenue dans le temps.",
          ]}
        />

        <ListSection
          aria-labelledby="avantages-details"
          heading=""
          items={[
            "Stabilité : les plis croisés réduisent les déformations et rendent le comportement plus prévisible.",
            "Tenue des vis : bonne résistance au vissage et aux fixations, utile pour les caissons et l'installation.",
            "Durabilité : structure robuste pour des projets à long terme et un usage intensif.",
            "Polyvalence : pertinent pour cuisines, walk-in et certains contextes à contraintes.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="comparaison"
          heading="Contreplaqué vs autres matériaux"
          paragraphs={[
            "Le bon matériau dépend de l'espace, du niveau d'entretien attendu et du type de composante (structure, portes, tiroirs).",
          ]}
          links={[
            {
              text: "Voir le comparatif des matériaux",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="comparaison-details"
          heading=""
          items={[
            "Contreplaqué vs MDF : souvent plus stable en structure et plus rassurant pour la tenue des vis.",
            "Contreplaqué vs mélamine : la mélamine vise surtout praticité/coût; le contreplaqué vise structure/durabilité.",
            "Contreplaqué vs bois massif : le bois massif est apprécié pour l'esthétique, mais le contreplaqué est souvent plus cohérent pour la structure.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="usages"
          heading="Où le contreplaqué est le plus pertinent"
          paragraphs={[
            "Le contreplaqué est souvent utilisé là où la stabilité et la solidité comptent le plus : structures, caissons et composantes internes.",
          ]}
          links={[
            {
              text: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "outline",
            },
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="usages-details"
          heading=""
          items={[
            "Caissons d'armoires : structure principale, stabilité et alignements.",
            "Composantes internes : tablettes, séparations, modules porteurs.",
            "Tiroirs : selon le design, fonds et éléments structurels robustes (ex. contreplaqué de bouleau).",
            "Projets à contraintes : lorsque la durabilité et la tenue dans le temps sont prioritaires.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="humidite"
          heading="Contreplaqué & humidité"
          paragraphs={[
            "Le contreplaqué tolère généralement mieux certains contextes que des panneaux à fibres, mais il n'est pas « imperméable ». La durabilité dépend des détails : protection des chants, qualité d'assemblage, finition et installation.",
          ]}
          links={[
            {
              text: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
            {
              text: "Voir tous les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="humidite-details"
          heading=""
          items={[
            "Cuisine : pertinent pour la structure, surtout si la finition et les chants sont soignés.",
            "Salle de bain / buanderie : faisable selon le contexte, avec des choix adaptés et une protection cohérente.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="limites"
          heading="Limites & points à surveiller"
          paragraphs={[
            "Tous les contreplaqués ne se valent pas. La qualité dépend du grade, de la stabilité, des faces et de la cohérence d'assemblage.",
          ]}
        />

        <ListSection
          aria-labelledby="limites-details"
          heading=""
          items={[
            "Qualité variable : le grade influence la stabilité, l'apparence et la durabilité.",
            "Coût : souvent plus élevé que des options standard.",
            "Tranches visibles : si exposées, elles doivent être traitées ou intégrées au design.",
            "Exécution : la performance dépend aussi de la fabrication et de l'installation.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="pourquoi-dilamco"
          heading="Pourquoi Dilamco privilégie souvent le contreplaqué"
          paragraphs={[
            "Pour un projet sur mesure haut de gamme, la structure doit rester stable et durable. Le contreplaqué contribue à un résultat plus cohérent, avec des alignements plus prévisibles et une meilleure tenue dans le temps.",
          ]}
          links={[
            {
              text: "Demander une soumission",
              href: "/contact/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="pourquoi-dilamco-details"
          heading=""
          items={[
            "Stabilité : lignes plus constantes et moins de variations visibles.",
            "Durabilité : meilleure résistance à l'usage quotidien.",
            "Cohérence : fabrication et installation plus propres lorsqu'on part d'une structure stable.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Projets (structure orientée durabilité)"
          links={[
            { label: "Voir les projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — contreplaqué"
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
            {
              text: "Comparer les matériaux",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
          ]}
        />
      </main>
    </>
  );
}
