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
  title: "Erreurs fréquentes en rénovation de cuisine",
  description:
    "Guide : erreurs fréquentes en rénovation de cuisine (matériaux, ergonomie, coordination, installation, échéancier) et comment les éviter avant de commencer le chantier.",
  alternates: {
    canonical: "https://dilamco.com/guides/erreurs-renovation-cuisine/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/guides/erreurs-renovation-cuisine/",
    title: "Erreurs fréquentes en rénovation de cuisine | Dilamco",
    description:
      "Guide : erreurs fréquentes en rénovation de cuisine (matériaux, ergonomie, coordination, installation, échéancier) et comment les éviter avant de commencer le chantier.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Guide : Erreurs fréquentes en rénovation de cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erreurs fréquentes en rénovation de cuisine | Dilamco",
    description:
      "Guide : erreurs fréquentes en rénovation de cuisine et comment les éviter.",
    images: ["/opengraph-image"],
  },
};

export default function ErreursRenovationCuisine() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
    {
      name: "Erreurs fréquentes en rénovation de cuisine",
      url: SITE.url + "/guides/erreurs-renovation-cuisine/",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      q: "Quelle est l'erreur la plus coûteuse?",
      a: "Les changements tardifs. Une modification en cours de chantier peut forcer des reprises (plomberie, électricité, murs, comptoir) et créer des délais.",
    },
    {
      q: "Faut-il tout décider avant de démarrer?",
      a: "Les décisions structurantes oui : plan, contraintes techniques, électroménagers, matériaux et séquence des travaux. Plus vous décidez en amont, moins vous payez en stress et en reprises.",
    },
    {
      q: "Clé en main ou coordination personnelle?",
      a: "Si plusieurs corps de métier sont impliqués et que vous voulez réduire les imprévus, une approche clé en main peut être plus simple. Sinon, vous devrez gérer la coordination et les zones grises.",
    },
    {
      q: "Pourquoi l'installation est-elle aussi importante?",
      a: "Parce qu'elle conditionne les alignements, les ajustements et la finition. C'est souvent ce qui fait la différence entre \"correct\" et \"haut de gamme\".",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Les erreurs fréquentes en rénovation de cuisine (et comment les éviter)"
          description="Une rénovation de cuisine combine plusieurs décisions et plusieurs intervenants : plan, matériaux, plomberie, électricité, installation, finitions. Beaucoup d'erreurs coûtent cher non seulement en argent, mais aussi en délais et en stress. Ce guide vous aide à repérer les pièges les plus courants et à les éviter avant le chantier."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Parler de votre projet",
                href: "/contact/",
              },
              {
                text: "Voir la rénovation de cuisine",
                href: "/services/renovation/cuisine/",
                variant: "outline",
              },
            ]} />
          }
        />

        <TextSection
          aria-labelledby="planification"
          heading="1) Sous-estimer la planification"
          paragraphs={[
            "La cause la plus fréquente des dépassements et des délais : des décisions prises \"pendant\" le chantier. Une modification tardive peut déclencher des effets en chaîne (plomberie, électricité, gypse, comptoir, installation).",
          ]}
        />

        <ListSection
          aria-labelledby="planification-details"
          heading=""
          items={[
            "Plan incomplet ou non validé avant de démarrer.",
            "Choix de finis tardifs (portes, poignées, robinetterie, éclairage).",
            "Électroménagers non confirmés (dimensions, sorties, dégagements).",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="planification-links"
          heading=""
          paragraphs={[
            "Solution : cadrer le plan et les choix en amont via le service de design.",
          ]}
          links={[
            {
              text: "Service de design",
              href: "/services/design/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="materiaux"
          heading="2) Choisir les matériaux pour le look seulement"
          paragraphs={[
            "Un matériau peut être beau et pourtant mal adapté à l'usage (humidité, impacts, entretien). Le point critique est souvent la protection des chants et la cohérence du système (matériau + quincaillerie + installation).",
          ]}
        />

        <ListSection
          aria-labelledby="materiaux-details"
          heading=""
          items={[
            "Ignorer l'humidité près de l'évier et du lave-vaisselle.",
            "Choisir un matériau fragile sur des zones très sollicitées.",
            "Sous-estimer l'impact des chants et de la finition.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="materiaux-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Voir le comparatif des matériaux",
              href: "/materiaux/comparatif/",
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
            {
              text: "Contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="ergonomie"
          heading="3) Négliger l'ergonomie et la circulation"
          paragraphs={[
            "Une cuisine peut être superbe et pourtant inconfortable : îlot trop grand, dégagements trop serrés, portes qui se frappent, zones de travail mal placées.",
          ]}
        />

        <ListSection
          aria-labelledby="ergonomie-details"
          heading=""
          items={[
            "Îlot dimensionné \"pour la photo\", pas pour la circulation.",
            "Ouvrir un tiroir bloque un passage ou un électroménager.",
            "Rangement non adapté aux habitudes (vaisselle, casseroles, déchets).",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="ergonomie-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="technique"
          heading="4) Sous-estimer plomberie / électricité / ventilation"
          paragraphs={[
            "Les contraintes techniques sont souvent la source des surprises : sorties électriques mal placées, plomberie à déplacer, ventilation insuffisante, éclairage à revoir.",
          ]}
        />

        <ListSection
          aria-labelledby="technique-details"
          heading=""
          items={[
            "Prises et circuits non adaptés aux électroménagers.",
            "Plomberie non alignée avec le plan (évier, lave-vaisselle).",
            "Hotte et ventilation sous-estimées (bruit, efficacité, conduits).",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="technique-links"
          heading=""
          paragraphs={[
            "Dans un projet plus large, une approche clé en main peut réduire les imprévus :",
          ]}
          links={[
            {
              text: "Rénovation de cuisine",
              href: "/services/renovation/cuisine/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="coordination"
          heading="5) Manque de coordination et responsabilités floues"
          paragraphs={[
            "Quand plusieurs intervenants sont impliqués, les problèmes viennent souvent des zones grises : qui coordonne, qui valide, qui est responsable si quelque chose ne fit pas?",
          ]}
        />

        <ListSection
          aria-labelledby="coordination-details"
          heading=""
          items={[
            "Calendrier qui glisse parce que les étapes ne sont pas séquencées.",
            "Reprises (gypse, peinture, plancher) à cause d'un changement de dernière minute.",
            "Responsabilités fragmentées : chacun fait sa partie, personne ne porte le résultat final.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="coordination-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Cuisiniste vs entrepreneur général",
              href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="installation"
          heading="6) Sous-estimer l'installation (et les ajustements)"
          paragraphs={[
            "Même une excellente fabrication peut donner un résultat moyen si l'installation est approximative : alignements, niveaux, ajustements, finitions et inspection finale.",
          ]}
        />

        <ListSection
          aria-labelledby="installation-details"
          heading=""
          items={[
            "Portes et tiroirs désalignés, jeux irréguliers.",
            "Finitions bâclées autour des murs et des caissons.",
            "Peu ou pas d'ajustements après la pose.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="installation-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="quincaillerie"
          heading="7) Choisir une quincaillerie inadéquate"
          paragraphs={[
            "La quincaillerie influence le confort et la longévité : charnières qui gardent leurs réglages, coulisses stables en charge, fermeture contrôlée.",
          ]}
        />

        <ListSection
          aria-labelledby="quincaillerie-details"
          heading=""
          items={[
            "Tiroirs qui frottent, prennent du jeu, ou \"accrochent\".",
            "Portes qui se désalignent, réglages instables.",
            "Usure prématurée sur les zones les plus utilisées.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="quincaillerie-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="echeancier"
          heading="8) Échéancier irréaliste"
          paragraphs={[
            "Les délais s'allongent quand les dépendances entre étapes ne sont pas respectées (démolition, plomberie/électricité, murs, plancher, peinture, comptoir, installation, finitions). Prévoir une marge réduit le stress et les décisions précipitées.",
          ]}
        />

        <ListSection
          aria-labelledby="echeancier-details"
          heading=""
          items={[
            "Planifier l'ordre des étapes (et les temps de séchage).",
            "Confirmer la disponibilité des matériaux et des intervenants.",
            "Éviter les changements tardifs qui cassent le calendrier.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="prix"
          heading="9) Comparer uniquement sur le prix"
          paragraphs={[
            "Deux soumissions peuvent être incomparables : l'une inclut coordination, ajustements et finition; l'autre non. Les \"coûts cachés\" (reprises, délais, gestion) apparaissent souvent après coup.",
          ]}
        />

        <ListSection
          aria-labelledby="prix-details"
          heading=""
          items={[
            "Comparer la portée : qui fait quoi, et jusqu'où?",
            "Comparer l'installation : ajustements inclus? inspection finale?",
            "Comparer la coordination : responsabilités claires?",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="prix-links"
          heading=""
          paragraphs={[]}
          links={[
            {
              text: "Cuisiniste vs entrepreneur général",
              href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="checklist"
          heading="10) Checklist avant de démarrer"
          paragraphs={[
            "Avant de lancer le chantier, assurez-vous d'avoir :",
          ]}
        />

        <ListSection
          aria-labelledby="checklist-details"
          heading=""
          items={[
            "Un plan validé (dimensions, électroménagers, dégagements).",
            "Les matériaux choisis selon l'usage (humidité, entretien, durabilité).",
            "Des responsabilités claires (coordination, décisions, validation).",
            "Un échéancier réaliste et séquencé.",
            "Une installation prévue (ajustements et inspection finale inclus).",
          ]}
          variant="bullets"
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — erreurs en rénovation de cuisine"
          items={faqItems.map((item: FAQItem) => ({
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

        <RelatedLinksSection
          aria-labelledby="liens"
          heading="Liens utiles"
          links={[
            { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
            { label: "Installation", href: "/services/installation/" },
            { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
            { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
            { label: "Demander une soumission", href: "/contact/" },
          ]}
          columns={2}
        />
      </main>
    </>
  );
}
