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
  title: "Bois massif",
  description:
    "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure. Comprendre stabilité, humidité, finition et alternatives (MDF, mélamine, contreplaqué) pour faire le bon choix.",
  alternates: {
    canonical: "https://dilamco.com/materiaux/bois-massif/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/materiaux/bois-massif/",
    title: "Bois massif | Dilamco",
    description:
      "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure. Comprendre stabilité, humidité, finition et alternatives (MDF, mélamine, contreplaqué) pour faire le bon choix.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bois massif — Matériaux sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bois massif | Dilamco",
    description:
      "Bois massif : avantages, limites et usages recommandés pour armoires sur mesure.",
    images: ["/opengraph-image"],
  },
};

export default function BoisMassif() {
  const faqItems = [
    {
      q: "Le bois massif est-il toujours meilleur?",
      a: "Non. Il est excellent pour l'esthétique et certaines applications, mais des panneaux techniques peuvent être plus stables et plus adaptés à certaines contraintes.",
    },
    {
      q: "Est-ce recommandé en cuisine?",
      a: "Oui, souvent pour les portes et éléments visibles. Le choix dépend du fini, de l'entretien et de l'environnement (vapeur, chaleur, usage).",
    },
    {
      q: "Comment réagit-il à l'humidité?",
      a: "Le bois peut bouger avec l'humidité. La conception, la finition et l'usage du matériau aux bons endroits sont essentiels pour limiter les effets.",
    },
    {
      q: "Peut-on combiner bois massif et autres matériaux?",
      a: "Oui. C'est souvent la meilleure approche : bois massif pour les éléments visibles, et matériaux plus stables pour certaines structures, selon le projet.",
    },
  ];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <main id="contenu">
        <HeroSection
          heading="Bois massif — authenticité, caractère et limites à connaître"
          description="Le bois massif est un matériau noble, apprécié pour son grain, sa profondeur visuelle et son toucher. C'est aussi un matériau « vivant » : il réagit à l'humidité et à la température. Pour un résultat durable, l'important n'est pas seulement « bois massif ou non », mais où et comment il est utilisé dans un projet sur mesure."
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
          heading="Qu'est-ce que le bois massif?"
          paragraphs={[
            "Le bois massif correspond à une pièce de bois « pleine » (non composée de fibres ou de particules). Il se distingue des panneaux techniques (MDF, mélamine, contreplaqué) et des solutions comme le placage (fine couche de bois sur un support).",
            "Visuellement, il présente des variations naturelles : veinage, nœuds, teinte et texture. Ces variations font partie du charme du matériau.",
          ]}
        />

        <ListSection
          aria-labelledby="avantages"
          heading="Avantages du bois massif"
          items={[
            "Esthétique naturelle : grain unique, rendu chaleureux, profondeur visuelle.",
            "Caractère haut de gamme : perception premium et présence dans l'espace.",
            "Réparabilité : certaines marques peuvent être retouchées ou poncées selon le fini.",
            "Valeur perçue : matériau reconnu et recherché pour des éléments visibles.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="limites"
          heading="Limites et contraintes (à connaître)"
          paragraphs={[
            "Le bois massif peut être excellent, mais il demande une conception et une exécution appropriées. Ignorer ses contraintes mène souvent à des attentes irréalistes.",
            "En pratique, la durabilité vient d'un ensemble : matériau + chants + finition + quincaillerie + installation.",
          ]}
        />

        <ListSection
          aria-labelledby="limites-details"
          heading=""
          items={[
            "Mouvement : le bois peut bouger avec l'humidité et la température (expansion/contraction).",
            "Stabilité : selon l'usage et les dimensions, certains panneaux techniques peuvent être plus stables.",
            "Entretien : selon le fini, il peut être plus sensible aux chocs, à l'eau ou aux produits.",
            "Coût : généralement plus élevé, surtout pour de grandes surfaces ou des essences spécifiques.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="ou-pertinent"
          heading="Où le bois massif est le plus pertinent"
          paragraphs={[
            "Le bois massif est souvent le meilleur choix pour les éléments visibles où l'esthétique et le toucher comptent, tout en gardant une conception adaptée.",
          ]}
          links={[
            {
              text: "Voir le service de design",
              href: "/services/design/",
              variant: "outline",
            },
            {
              text: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="ou-pertinent-details"
          heading=""
          items={[
            "Portes et façades : éléments les plus visibles et les plus « premium ».",
            "Détails décoratifs : moulures, encadrements, accents.",
            "Pièces sélectionnées : là où le matériau apporte un vrai gain esthétique.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="ou-deconseille"
          heading="Où le bois massif est souvent déconseillé"
          paragraphs={[
            "Le bois massif n'est pas toujours le meilleur choix pour les structures ou grandes surfaces qui exigent une stabilité maximale, surtout dans certains environnements.",
          ]}
        />

        <ListSection
          aria-labelledby="ou-deconseille-details"
          heading=""
          items={[
            "Caissons et structures complètes : des panneaux techniques peuvent offrir plus de stabilité.",
            "Zones très humides : selon le contexte, il faut prioriser stabilité et protection.",
            "Grandes surfaces : plus le panneau est grand, plus le mouvement peut devenir visible.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="alternatives"
          heading="Alternatives fréquentes selon l'usage"
          links={[
            { label: "Contreplaqué", href: "/materiaux/contreplaque/" },
            { label: "MDF", href: "/materiaux/mdf/" },
            { label: "Mélamine", href: "/materiaux/melamine/" },
          ]}
          columns={3}
        />

        <TextSection
          aria-labelledby="comparaisons"
          heading="Bois massif vs autres matériaux"
          paragraphs={[
            "Le bon choix dépend de l'espace (cuisine, salle de bain, walk-in), du niveau d'entretien attendu et du rendu souhaité.",
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
          aria-labelledby="comparaisons-details"
          heading=""
          items={[
            "Bois massif vs MDF : souvent choisi pour la texture et le grain; le MDF peut être pertinent selon le fini.",
            "Bois massif vs mélamine : la mélamine vise surtout praticité et entretien; le bois vise caractère.",
            "Bois massif vs contreplaqué : le contreplaqué est souvent privilégié pour la stabilité des structures.",
          ]}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="finition"
          heading="Finition & entretien"
          paragraphs={[
            "La finition influence directement la durabilité et l'entretien. Le choix dépend du rendu recherché et de votre quotidien (nettoyage, humidité, usage).",
          ]}
        />

        <ListSection
          aria-labelledby="finition-details"
          heading=""
          items={[
            "Protection : plus la protection est élevée, plus le matériau résiste à l'usage.",
            "Entretien : privilégier des habitudes simples et des produits adaptés au fini.",
            "Prévention : éviter l'eau stagnante et les nettoyants agressifs.",
          ]}
          variant="bullets"
        />

        <RelatedLinksSection
          aria-labelledby="projets"
          heading="Projets utilisant le bois massif"
          links={[
            { label: "Voir les projets", href: "/projets/" },
          ]}
          columns={2}
        />

        <FAQSection
          aria-labelledby="faq"
          heading="FAQ — bois massif"
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
