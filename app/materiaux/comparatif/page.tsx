import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Comparatif des matériaux",
  description:
    "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif. Choisir selon l’usage, l’humidité, la stabilité et la durabilité.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/comparatif/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/comparatif/",
    title: "Comparatif des matériaux | Dilamco",
    description:
      "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif. Choisir selon l'usage, l'humidité, la stabilité et la durabilité.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Comparatif des matériaux, Sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatif des matériaux | Dilamco",
    description:
      "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Comparatif() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif/" },
  ];

  const faqItems: FAQItem[] = [
    {
      q: "MDF ou mélamine : lequel choisir?",
      a: "Le MDF est souvent choisi pour une finition peinte uniforme (portes). La mélamine vise plutôt un fini décoratif et un coût souvent plus maîtrisé. Le bon choix dépend de l'usage et de l'environnement.",
    },
    {
      q: "Le contreplaqué est-il toujours préférable?",
      a: 'Pas "toujours", mais il est souvent pertinent quand la stabilité et la durabilité structurelle sont prioritaires. Le projet reste un ensemble (portes, quincaillerie, installation).',
    },
    {
      q: "Le bois massif partout, est-ce une bonne idée?",
      a: "Pas nécessairement. Le bois massif a des variations naturelles et peut bouger. Il est souvent utilisé là où la matière et le rendu sont prioritaires, avec une conception adaptée.",
    },
    {
      q: "Peut-on combiner plusieurs matériaux?",
      a: "Oui, et c'est souvent la meilleure approche : utiliser chaque matériau là où il est le plus pertinent (structure, portes, zones exposées, etc.).",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Comparatif des matériaux, faire le bon choix selon l'usage"
          description="Il n'existe pas de « meilleur matériau » universel. Le bon choix dépend de l'usage (cuisine ou salle de bain), de l'humidité, de la durabilité visée et du type de finition recherché. La qualité d'assemblage, la protection des chants, la quincaillerie et l'installation comptent autant que le matériau."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
              {
                text: "Voir tous les matériaux",
                href: "/materiaux/",
                variant: "outline",
              },
            ]} />
          }
        />

        <ComparisonTableSection
          aria-labelledby="tableau"
          heading="Tableau comparatif"
          description="Ce tableau résume les tendances générales. Pour décider correctement, il faut ensuite l'appliquer à votre espace, votre usage et vos contraintes."
          columns={[
            "Usage recommandé",
            "Stabilité",
            "Humidité",
            "Finition",
            "Durabilité perçue",
          ]}
          rows={[
            {
              label: "Contreplaqué",
              values: [
                "Structures, environnements plus exigeants, projets orientés durabilité",
                "Très bonne",
                "Bonne",
                "Variable (selon composantes)",
                "Élevée",
              ],
            },
            {
              label: "MDF",
              values: [
                "Portes et façades, surtout pour finition peinte",
                "Bonne",
                "Moyenne (protection essentielle)",
                "Très uniforme (peinture)",
                "Moyenne",
              ],
            },
            {
              label: "Mélamine",
              values: [
                "Rangements et caissons ciblés, projets où le fini décoratif est prioritaire",
                "Moyenne",
                "Faible à moyenne (chants critiques)",
                "Très variée (textures, bois, couleurs)",
                "Variable",
              ],
            },
            {
              label: "Bois massif",
              values: [
                "Portes/éléments esthétiques, projets recherchant une texture naturelle",
                "Variable (selon essence et conception)",
                "Moyenne (peut bouger)",
                "Naturelle (grain/variations)",
                "Élevée (si bien conçu)",
              ],
            },
          ]}
        />

        <RelatedLinksSection
          aria-labelledby="materiaux-links"
          heading=""
          links={[
            { label: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/" },
            { label: "MDF", href: "/materiaux/mdf/" },
            { label: "Mélamine", href: "/materiaux/melamine/" },
            { label: "Bois massif", href: "/materiaux/bois-massif/" },
          ]}
          columns={2}
        />


        <RelatedLinksSection
          aria-labelledby="materiaux-pages"
          heading="Résumé par matériau"
          links={[
            {
              label: "Contreplaqué",
              description: "Très bon choix lorsque la stabilité et la structure sont prioritaires. Souvent pertinent pour viser une durabilité supérieure. Le rendu final dépend aussi des composantes (portes, quincaillerie, finition).",
              href: "/materiaux/contreplaque/"
            },
            {
              label: "MDF",
              description: "Très utilisé pour des portes peintes grâce à sa surface uniforme. Sensible à l'humidité si mal protégé (chants et finition critiques). Pertinent quand l'objectif principal est une finition peinte régulière.",
              href: "/materiaux/mdf/"
            },
            {
              label: "Mélamine",
              description: "Large choix de finis décoratifs et entretien simple. Point faible : les chants (impacts et infiltration). Peut être très correcte si utilisée de façon ciblée et bien exécuté.",
              href: "/materiaux/melamine/"
            },
            {
              label: "Bois massif",
              description: "Texture et variations naturelles (très apprécié en haut de gamme). Peut bouger : conception et assemblage comptent énormément. Souvent utilisé là où l'esthétique et la matière sont prioritaires.",
              href: "/materiaux/bois-massif/"
            },
          ]}
          columns={2}
        />



        <RelatedLinksSection
          aria-labelledby="espaces-links"
          heading="Comparatif par espace"
          links={[
            {
              label: "Cuisine",
              description: "Cycles d'ouverture élevés et charges importantes (tiroirs, vaisselle, casseroles). Humidité ponctuelle près de l'évier et du lave-vaisselle. Un bon compromis dépend du niveau de finition et de durabilité recherché.",
              href: "/espaces/cuisine/"
            },
            {
              label: "Salle de bain",
              description: "Humidité plus constante : ventilation et détails d'exécution critiques. Les chants et la protection des zones exposées font une grande différence. Selon le projet, certains matériaux sont plus pertinents que d'autres.",
              href: "/espaces/salle-de-bain/",
            },
          ]}
          columns={2}
        />


        <ListSection
          aria-labelledby="ce-que-ca-ne-dit-pas-details"
          heading="Ce que le tableau ne montre pas"
          intro="Deux projets peuvent utiliser « le même matériau » et vieillir très différemment. Les facteurs suivants sont souvent décisifs :"
          links={[
            {
              text: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
          items={[
            "Chants et protections : point critique pour l'humidité et les impacts.",
            "Assemblage : rigidité, précision, stabilité.",
            "Quincaillerie : charnières et coulisses = confort + longévité.",
            "Installation : alignements, ajustements et inspection finale.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="erreurs"
          heading="Erreurs fréquentes à éviter"
          items={[
            "Choisir un matériau pour le look seulement, sans considérer l'usage.",
            "Ignorer l'humidité (salle de bain, zones d'eau en cuisine).",
            "Sous-estimer l'impact des chants et des détails de finition.",
            "Copier une inspiration sans adapter aux contraintes réelles (lumière, dimensions).",
          ]}
          variant="bullets"
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — comparatif des matériaux"
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
