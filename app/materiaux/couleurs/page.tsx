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
  title: "Couleurs et finis",
  description:
    "Couleurs et finis pour cuisines, vanités et armoires sur mesure : comment choisir selon la lumière, l’usage et les matériaux (MDF, bois massif, mélamine).",
  alternates: {
    canonical: "https://dilamco.com/materiaux/couleurs/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/couleurs/",
    title: "Couleurs et finis | Dilamco",
    description:
      "Couleurs et finis pour cuisines, vanités et armoires sur mesure : comment choisir selon la lumière, l'usage et les matériaux (MDF, bois massif, mélamine).",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Couleurs et finis — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couleurs et finis | Dilamco",
    description:
      "Couleurs et finis pour cuisines, vanités et armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function Couleurs() {
  const faqItems = [
    {
      q: "Mat ou satiné : lequel est le plus durable?",
      a: "En général, le satiné est un excellent compromis pour l'entretien, surtout en cuisine. Le mat peut être très beau, mais il est plus exigeant selon l'usage.",
    },
    {
      q: "Les couleurs foncées sont-elles risquées?",
      a: "Pas si l'éclairage est bon et si le fini est adapté. Elles fonctionnent très bien en accent (îlot, garde-manger) ou dans un espace bien éclairé.",
    },
    {
      q: "Peut-on changer la couleur plus tard?",
      a: "Selon les matériaux et le type de fini, c'est parfois possible, mais pas toujours simple. C'est une décision à cadrer au moment du design.",
    },
    {
      q: 'Comment éviter que le rendu "jaunisse" ou se démode?',
      a: "Privilégier une base intemporelle (neutres, bois) et utiliser les accents de façon plus flexible (poignées, luminaires, accessoires).",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Couleurs & finis, trouver l'équilibre entre style et durabilité"
          description="La couleur influence la lumière, la perception de l'espace et l'entretien au quotidien. Le fini dépend aussi du matériau (portes peintes, bois, mélamine) et de l'usage (cuisine vs salle de bain). Cette page vous aide à cadrer vos choix avant de finaliser une sélection de finis lors du design."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler design et finis",
                href: "/services/design/",
              },
              {
                text: "Demander une soumission",
                href: "/contact/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="methode"
          heading="Comment choisir une couleur (méthode simple)"
          paragraphs={[
            "Pour structurer tout ça, le plus efficace est de passer par le service de design.",
          ]}
          links={[
            {
              text: "Voir le service de design",
              href: "/services/design/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="methode-details"
          heading=""
          items={[
            "Lumière : l'exposition et l'éclairage changent la perception d'une même couleur.",
            "Volume : une petite pièce réagit différemment qu'un grand espace.",
            "Usage & entretien : traces, éclaboussures, nettoyage, enfants, animaux.",
            "Matériau & fini : portes peintes, bois, mélamine : rendu et réparabilité ne sont pas identiques.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="familles"
          heading="Grandes familles de couleurs"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="neutres"
          heading="Neutres (blancs, beiges, gris)"
          items={[
            "Intemporels et lumineux, faciles à intégrer.",
            "Le choix du fini (mat/satiné) influence beaucoup l'entretien.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="tons-fonces"
          heading="Tons foncés (noir, anthracite, bleus profonds)"
          items={[
            "Impact visuel fort, rendu très « architectural ».",
            "Demandent une bonne lumière et une finition soignée.",
            "Peuvent être utilisés en accent (ex. îlot) pour équilibrer.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="bois-textures"
          heading="Bois & textures"
          items={[
            "Apporte chaleur et matière, souvent très apprécié en haut de gamme.",
            "Le veinage et la teinte varient : on vise une cohérence, pas une uniformité parfaite.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="selon-espace"
          heading="Choisir selon l'espace"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="cuisine-details"
          heading="Cuisine"
          items={[
            "Les contrastes (îlot vs périmètre) structurent l'espace et cachent mieux l'usage.",
            "Prioriser la cohérence avec comptoir, dosseret et plancher.",
            "Penser « entretien » : zones près de l'évier, cuisson, poignées.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="cuisine-link"
          heading=""
          links={[
            { label: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" },
          ]}
          columns={2}
        />

        <ListSection
          aria-labelledby="sdb-details"
          heading="Salle de bain"
          items={[
            "Humidité et nettoyage fréquent : le fini et les détails d'exécution comptent.",
            "Éviter les choix « fragiles » si la ventilation est limitée.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="sdb-link"
          heading=""
          links={[
            { label: "Voir Salle de bain & vanités", href: "/espaces/salle-de-bain/" },
          ]}
          columns={2}
        />

        <TextSection
          aria-labelledby="materiau"
          heading="Couleur et matériau : ce que ça change"
          paragraphs={[]}
          links={[
            {
              text: "MDF",
              href: "/materiaux/mdf/",
              variant: "outline",
            },
            {
              text: "Bois massif",
              href: "/materiaux/bois-massif/",
              variant: "outline",
            },
            {
              text: "Mélamine",
              href: "/materiaux/melamine/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="materiau-details"
          heading=""
          items={[
            "MDF : souvent utilisé pour des portes peintes (surface très uniforme).",
            "Bois massif : variations naturelles (teinte et grain), rendu chaleureux.",
            "Mélamine : grande variété de finis décoratifs, réparations plus difficiles en cas d'impact.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="finitions"
          heading="Finitions & entretien (mat, satiné, brillant)"
          paragraphs={[
            "Le ressenti final dépend aussi de la quincaillerie (poignées, mécanismes) et de l'installation.",
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
          aria-labelledby="finitions-details"
          heading=""
          items={[
            "Mat : look doux et contemporain, peut marquer selon l'usage et la qualité du fini.",
            "Satiné : bon compromis pour l'entretien (souvent très pertinent en cuisine).",
            "Brillant : effet « miroir », montre davantage les imperfections et traces, mais augmente la luminosité.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="erreurs"
          heading="Erreurs fréquentes à éviter"
          items={[
            "Choisir une couleur foncée sans tenir compte de la lumière réelle.",
            "Multiplier les textures sans fil conducteur (bois + pierre + motifs + métal).",
            "Copier une photo « inspiration » sans adapter au contexte (dimensions, lumière, usage).",
            "Ignorer l'entretien au quotidien (traces, éclaboussures, zones de contact).",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Voir des exemples concrets"
          links={[
            { label: "Voir nos projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — couleurs & finis"
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
