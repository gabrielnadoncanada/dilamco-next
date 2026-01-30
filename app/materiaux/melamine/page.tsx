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
  title: "Mélamine",
  description:
    "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure. Comprendre quand la mélamine est pertinente, ses précautions (chants, humidité) et les alternatives.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/melamine/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/melamine/",
    title: "Mélamine | Dilamco",
    description:
      "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure. Comprendre quand la mélamine est pertinente, ses précautions (chants, humidité) et les alternatives.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mélamine — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mélamine | Dilamco",
    description:
      "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Melamine() {
  const faqItems = [
    {
      q: "La mélamine est-elle un matériau bas de gamme?",
      a: "Pas forcément. Elle peut être pertinente selon le projet. La durabilité dépend surtout de l'usage, de la qualité des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "La mélamine gonfle-t-elle?",
      a: "Elle peut se dégrader si l'humidité s'infiltre, surtout lorsque les chants sont endommagés. D'où l'importance des protections et d'une bonne exécution.",
    },
    {
      q: "Mélamine ou MDF : lequel choisir?",
      a: "Le MDF est souvent choisi pour des portes peintes (surface très uniforme). La mélamine est plutôt choisie pour son fini décoratif et un coût souvent plus maîtrisé. Le bon choix dépend du style, de l'usage et de l'environnement.",
    },
    {
      q: "Est-ce recommandé en salle de bain?",
      a: "Ça dépend du contexte (ventilation, usage, protections). Dans certains projets, une autre solution sera préférable pour réduire les risques à long terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Mélamine — usages, limites et alternatives en sur mesure"
          description="La mélamine est une solution populaire pour des armoires et rangements grâce à sa variété de finis et à un coût souvent plus maîtrisé. Ce n'est pas un matériau universel : sa durabilité dépend beaucoup de l'usage, de la protection des chants et de la qualité d'installation."
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
          heading="C'est quoi la mélamine?"
          paragraphs={[
            'En pratique, la « mélamine » désigne un panneau recouvert d\'un revêtement décoratif. Le rendu (couleur, texture, imitation bois) est très varié. La performance finale dépend autant du panneau que de la finition des chants et de l\'exécution.',
          ]}
        />

        <ListSection
          aria-labelledby="avantages"
          heading="Avantages (quand c'est pertinent)"
          items={[
            "Variété de finis : options modernes, textures, imitations bois, couleurs.",
            "Entretien simple : surface facile à nettoyer au quotidien.",
            "Coût maîtrisé : intéressant pour certains projets ou certaines zones.",
            "Surface stable : fini uniforme, sans peinture à entretenir.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="limites"
          heading="Limites et précautions"
          paragraphs={[
            "La mélamine peut très bien performer, mais elle est plus sensible à certains facteurs. Une exécution moyenne (chants abîmés, infiltration) vieillit mal.",
          ]}
        />

        <ListSection
          aria-labelledby="limites-details"
          heading=""
          items={[
            "Chants : point faible principal. Si un chant est endommagé, l'humidité peut s'infiltrer et dégrader le panneau.",
            "Impacts : les coups sur les arêtes peuvent marquer ou ébrécher la surface.",
            "Humidité : plus délicat près des zones d'eau (évier, lave-vaisselle, salle de bain) si la protection est insuffisante.",
            "Réparations : plus difficiles à rendre invisibles qu'une surface peinte.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="cuisine-vs-sdb"
          heading="Mélamine en cuisine vs en salle de bain"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="cuisine-details"
          heading="Mélamine en cuisine"
          items={[
            "Peut être pertinente pour certains caissons et rangements, selon l'usage et le niveau de finition recherché.",
            "Les zones proches de l'eau exigent une attention particulière (chants, protections, installation).",
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
          heading="Mélamine en salle de bain"
          items={[
            "Le contexte est plus exigeant (humidité). La ventilation et les détails d'exécution comptent énormément.",
            "Selon le projet, il peut être préférable de limiter la mélamine ou de la combiner avec d'autres matériaux pour maximiser la durabilité.",
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
          heading="Mélamine vs MDF vs contreplaqué"
          paragraphs={[
            "La mélamine est souvent choisie pour le fini et le coût; le MDF pour une finition peinte uniforme; le contreplaqué pour la stabilité et certaines applications plus exigeantes. Le bon choix dépend de l'usage, de l'humidité et de la durabilité visée.",
          ]}
          links={[
            {
              text: "Voir le comparatif complet",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
            {
              text: "MDF",
              href: "/materiaux/mdf/",
              variant: "outline",
            },
            {
              text: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="comment-on-lutilise"
          heading="Comment nous utilisons la mélamine"
          paragraphs={[
            "Notre approche : utiliser la mélamine de façon ciblée lorsque c'est pertinent, et privilégier d'autres matériaux lorsque l'usage (humidité, impacts, cycles d'ouverture) exige plus de robustesse. L'objectif est un résultat durable une fois installé, pas un choix « par défaut ».",
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
          heading="FAQ — mélamine"
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
