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
  title: "Quincaillerie",
  description:
    "Quincaillerie d’armoires : charnières, coulisses et mécanismes. Comprendre l’impact sur le confort, les réglages et la durabilité en cuisine et salle de bain.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/quincaillerie/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/quincaillerie/",
    title: "Quincaillerie | Dilamco",
    description:
      "Quincaillerie d'armoires : charnières, coulisses et mécanismes. Comprendre l'impact sur le confort, les réglages et la durabilité en cuisine et salle de bain.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Quincaillerie — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quincaillerie | Dilamco",
    description:
      "Quincaillerie d'armoires : charnières, coulisses et mécanismes.",
    images: ["/opengraph-image"],
  },
};

export default function Quincaillerie() {
  const faqItems = [
    {
      q: "Le soft-close est-il vraiment utile?",
      a: "Oui si le système est fiable et bien installé : fermeture plus douce, moins de chocs, et meilleure expérience au quotidien.",
    },
    {
      q: "Est-ce que la quincaillerie influence la durée de vie?",
      a: "Oui. Ce sont les pièces qui bougent et qui s'usent. Une quincaillerie de qualité garde ses réglages, supporte mieux les charges, et vieillit mieux.",
    },
    {
      q: "Peut-on remplacer la quincaillerie plus tard?",
      a: "Parfois, mais ce n'est pas toujours simple. Il vaut mieux choisir un système cohérent dès le départ, surtout pour les tiroirs et les charges élevées.",
    },
    {
      q: "Pourquoi l'installation est-elle aussi importante?",
      a: "Parce que la précision (alignements, ajustements, fixations) affecte directement le fonctionnement. Une bonne quincaillerie mal installée ne donnera pas un bon résultat.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Quincaillerie", url: SITE.url + "/materiaux/quincaillerie/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Quincaillerie, confort, précision et durabilité au quotidien"
          description="La quincaillerie (charnières, coulisses, mécanismes) est souvent le facteur le plus déterminant de l'expérience au quotidien. Ce sont les pièces qui bougent, donc celles qui s'usent. Une quincaillerie de qualité, bien installée et bien ajustée, améliore la longévité, la stabilité et le « feel » haut de gamme."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
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

        <ListSection
          aria-labelledby="pourquoi"
          heading="Pourquoi la quincaillerie est critique"
          items={[
            "Usage réel : ce sont des milliers de cycles d'ouverture/fermeture sur la durée de vie d'une cuisine.",
            "Réglages : une bonne quincaillerie permet des ajustements précis (portes alignées, tiroirs stables).",
            "Perception de qualité : une cuisine peut « sembler » haut de gamme ou standard selon la fluidité des tiroirs et des portes.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="types"
          heading="Types de quincaillerie"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="charnieres"
          heading="Charnières"
          items={[
            "Ajustabilité : alignements et corrections fines (vertical, horizontal, profondeur).",
            "Soft-close : fermeture amortie pour réduire les chocs et améliorer le confort.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="coulisses"
          heading="Coulisses de tiroirs"
          items={[
            "Extension : accès complet au contenu (selon le système).",
            "Capacité de charge : important pour casseroles, vaisselle et tiroirs très utilisés.",
            "Stabilité : tiroirs fluides, sans jeu, même en charge.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="mecanismes"
          heading="Mécanismes et accessoires"
          items={[
            "Solutions d'angle et rangement spécialisé (selon configuration).",
            "Mécanismes escamotables et accessoires pour optimiser l'usage.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="qualite"
          heading="Quincaillerie de qualité : ce que ça change"
          items={[
            "Confort : ouverture fluide, fermeture contrôlée, moins de bruit.",
            "Durabilité : moins de jeu, moins d'affaissement, réglages qui tiennent.",
            "Entretien réduit : moins d'ajustements à refaire avec le temps.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="bas-de-gamme"
          heading="Risques d'une quincaillerie bas de gamme"
          items={[
            "Portes qui se désalignent, réglages qui bougent.",
            "Tiroirs qui frottent, qui « accrochent » ou qui prennent du jeu.",
            "Usure prématurée et remplacements plus rapides.",
            "Expérience quotidienne frustrante, même si le design est beau.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="cuisine-sdb"
          heading="Cuisine vs salle de bain : contraintes différentes"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="cuisine-details"
          heading="Cuisine"
          items={[
            "Cycles d'ouverture très élevés (usage quotidien intensif).",
            "Charges importantes (vaisselle, casseroles, tiroirs profonds).",
            "La stabilité des coulisses devient un point critique.",
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
          heading="Salle de bain"
          items={[
            "Humidité : importance des détails d'exécution et de la cohérence des choix.",
            "Réglages fins et protection globale (installation et finition).",
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
          aria-labelledby="materiaux"
          heading="Lien entre matériaux et quincaillerie"
          paragraphs={[
            "Les matériaux et la quincaillerie forment un système : structure, chants, assemblage, quincaillerie et installation. Une bonne quincaillerie ne compense pas une mauvaise exécution, et un bon matériau peut être « ruiné » par une quincaillerie faible.",
          ]}
          links={[
            {
              text: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
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
          ]}
        />


        <ListSection
          aria-labelledby="choix-details"
          heading="Comment nous choisissons la quincaillerie"
          links={[
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
            {
              text: "Voir le design",
              href: "/services/design/",
              variant: "outline",
            },
          ]}
          items={[
            "Usage : fréquence, charges, tiroirs très sollicités.",
            "Contexte : humidité (salle de bain), environnement, contraintes.",
            "Réglages : précision et stabilité des ajustements dans le temps.",
            "Installation : une pose et des ajustements soignés sont essentiels.",
          ]}
          variant="bullets"
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — quincaillerie"
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
