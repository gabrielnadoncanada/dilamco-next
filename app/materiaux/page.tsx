import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import type { FAQItem } from "@/data/services/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { ListSection } from "@/components/sections/ListSection";
import { TextSection } from "@/components/sections/TextSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Matériaux",
  description:
    "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie, couleurs et finis. Choix orientés durabilité à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/materiaux/",
    title: "Matériaux | Dilamco",
    description:
      "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie, couleurs et finis. Choix orientés durabilité à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Matériaux Dilamco — Choix orientés durabilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matériaux | Dilamco",
    description:
      "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Materiaux() {
  const faqItems = [
    {
      q: "Contreplaqué ou MDF : lequel choisir?",
      a: "Ça dépend de l'usage : stabilité et résistance structurelle vs surface uniforme (souvent pour portes peintes). Le bon choix tient compte de l'humidité et de la durabilité visée.",
    },
    {
      q: "La mélamine est-elle un bon choix?",
      a: "Elle peut être pertinente selon le contexte et le budget, mais elle est plus sensible aux impacts et à l'humidité si les chants sont endommagés.",
    },
    {
      q: 'La quincaillerie "soft-close" vaut-elle la peine?',
      a: "Oui si elle est fiable et bien installée : confort au quotidien, moins de stress sur les composants, meilleure perception de qualité.",
    },
    {
      q: "Quels matériaux éviter en salle de bain?",
      a: "Tout ce qui est mal protégé contre l'humidité (chants exposés, mauvaise ventilation, matériaux inadaptés) augmente les risques à moyen terme.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Matériaux, durabilité, finition et performance"
          description="Un matériau « bon » dépend de l'usage : humidité (salle de bain), charges et cycles d'ouverture (tiroirs), résistance aux impacts, stabilité dans le temps. Notre approche : choisir des matériaux cohérents avec vos contraintes et livrer une exécution durable — principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: "/contact/",
              },
              {
                text: "Cuisine sur mesure",
                href: "/espaces/cuisine/",
                variant: "outline",
              },
              {
                text: "Salle de bain & vanités",
                href: "/espaces/salle-de-bain/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="methodologie"
          heading="Comment nous choisissons les matériaux"
          paragraphs={[
            "La performance finale ne dépend pas seulement du matériau, mais aussi de l'assemblage, des chants, de la quincaillerie et de l'installation. Voici les critères qui guident nos recommandations.",
          ]}
          links={[
            {
              text: "Voir le service de design",
              href: "/services/design/",
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
          aria-labelledby="methodologie-details"
          heading=""
          items={[
            "Humidité : prioritaire en salle de bain (ventilation, protection des chants, stabilité).",
            "Charges et usage : tiroirs, casseroles, vaisselle — cycles d'ouverture répétés.",
            "Résistance : impacts, rayures, nettoyage et maintenance au quotidien.",
            "Stabilité : limiter les déformations dans le temps (structure et conception).",
          ]}
          variant="bullets"
        />

        <FeatureGridSection
          aria-labelledby="pages-materiaux"
          heading="Pages matériaux"
          description="Explorez les matériaux et leurs compromis (durabilité, humidité, stabilité). Ces pages vous aident à prendre une décision éclairée selon votre espace."
          features={[
            {
              title: "Pourquoi le contreplaqué",
              description: "Stabilité et résistance : un choix solide pour les structures et certains usages exigeants.",
              href: "/materiaux/contreplaque/",
            },
            {
              title: "MDF",
              description: "Surface uniforme, souvent utilisé pour des portes peintes. Sensible à l'humidité si mal protégé.",
              href: "/materiaux/mdf/",
            },
            {
              title: "Mélamine",
              description: "Option économique avec finis variés. Attention aux impacts et aux chants en milieu humide.",
              href: "/materiaux/melamine/",
            },
            {
              title: "Bois massif",
              description: "Très belle perception haut de gamme. Peut bouger avec l'humidité : conception et assemblage comptent.",
              href: "/materiaux/bois-massif/",
            },
            {
              title: "Quincaillerie",
              description: "Charnières et coulisses = confort + durabilité. L'installation est aussi déterminante.",
              href: "/materiaux/quincaillerie/",
            },
            {
              title: "Couleurs et finis",
              description: "Choix de finis pour aligner le projet avec votre style (moderne, chaleureux, classique, etc.).",
              href: "/materiaux/couleurs/",
            },
            {
              title: "Comparatif des matériaux",
              description: "Vue d'ensemble rapide : contreplaqué vs MDF vs mélamine selon usage.",
              href: "/materiaux/comparatif/",
            },
          ]}
          columns={3}
        />

        <ComparisonTableSection
          aria-labelledby="comparatif"
          heading="Comparatif rapide (résumé)"
          description="Pour une comparaison complète, consultez la page dédiée : comparatif des matériaux."
          columns={["Durabilité", "Humidité", "Stabilité", "Usage typique"]}
          rows={[
            {
              label: "Contreplaqué",
              values: [
                "Élevée",
                "Bonne",
                "Très bonne",
                "Structures, environnements exigeants",
              ],
            },
            {
              label: "MDF",
              values: [
                "Moyenne",
                "Moyenne",
                "Bonne",
                "Portes peintes, surfaces uniformes",
              ],
            },
            {
              label: "Mélamine",
              values: [
                "Variable",
                "Faible à moyenne",
                "Moyenne",
                "Applications économiques, finis variés",
              ],
            },
          ]}
        />

        <TextSection
          aria-labelledby="par-espace"
          heading="Applications par espace"
          paragraphs={[]}
        />

        <FeatureGridSection
          aria-labelledby="par-espace-details"
          heading=""
          features={[
            {
              title: "Cuisine",
              description: "Résistance, cycles d'ouverture, coins, rangement et finition.",
            },
            {
              title: "Salle de bain",
              description: "Humidité, ventilation, matériaux et protection des chants.",
            },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="premium"
          heading="Ce qui fait vraiment haut de gamme"
          paragraphs={[
            "Le haut de gamme, c'est une somme de détails : quincaillerie fiable, matériaux adaptés à l'usage, assemblage robuste et installation précise. Le choix des matériaux est important, mais l'exécution l'est tout autant.",
          ]}
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
        />

        <ListSection
          aria-labelledby="premium-details"
          heading=""
          items={[
            "Quincaillerie : confort d'usage et durabilité (charnières, coulisses).",
            "Stabilité : limiter les déformations (structures adaptées).",
            "Finition & installation : alignements, ajustements, inspection finale.",
          ]}
          variant="bullets"
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ matériaux"
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
