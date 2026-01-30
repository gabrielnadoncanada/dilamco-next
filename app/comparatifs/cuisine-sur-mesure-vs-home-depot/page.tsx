import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { ListSection } from "@/components/sections/ListSection";
import { TextSection } from "@/components/sections/TextSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Cuisine sur mesure vs Home Depot",
  description:
    "Comparatif cuisine sur mesure vs Home Depot : différences de matériaux, personnalisation, installation et rénovation. Aidez-vous à choisir la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical:
      "https://dilamco.com/comparatifs/cuisine-sur-mesure-vs-home-depot/",
  },
  openGraph: {
    type: "article",
    url: "https://dilamco.com/comparatifs/cuisine-sur-mesure-vs-home-depot/",
    title: "Cuisine sur mesure vs Home Depot | Dilamco",
    description:
      "Comparatif cuisine sur mesure vs Home Depot : différences de matériaux, personnalisation, installation et rénovation. Aidez-vous à choisir la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Comparatif : Cuisine sur mesure vs Home Depot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuisine sur mesure vs Home Depot | Dilamco",
    description:
      "Comparatif cuisine sur mesure vs Home Depot : différences de matériaux, personnalisation.",
    images: ["/opengraph-image"],
  },
};

export default function CuisineVsHomeDepot() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
    {
      name: "Cuisine sur mesure vs Home Depot",
      url: SITE.url + "/comparatifs/cuisine-sur-mesure-vs-home-depot/",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Cuisine sur mesure vs Home Depot : quelle solution pour votre projet?"
          description={
            <>
              <p>
                Home Depot peut convenir à certains projets, surtout lorsque
                l'espace est standard et que vous acceptez quelques compromis. Une
                cuisine sur mesure devient souvent préférable quand l'ergonomie, la
                durabilité et l'intégration à votre espace sont prioritaires —
                surtout si le projet implique une rénovation.
              </p>
            </>
          }
        />

        <TextSection
          aria-labelledby="pour-qui"
          heading="À qui s'adresse chaque option?"
          paragraphs={[]}
        />

        <ListSection
          aria-labelledby="home-depot"
          heading="Une cuisine de type Home Depot peut convenir si :"
          items={[
            "Votre cuisine est plutôt standard (peu d'angles, peu de contraintes d'accès).",
            "Vous cherchez une solution rapide avec des choix déjà configurés.",
            "Vous êtes à l'aise de gérer une partie des décisions et de la coordination.",
            "Vous acceptez que certains rangements soient moins optimisés.",
          ]}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="sur-mesure"
          heading="Une cuisine sur mesure est souvent préférable si :"
          items={[
            "Votre espace est atypique (angles, murs irréguliers, contraintes d'accès, plafonds).",
            "Vous voulez maximiser le rangement et l'ergonomie au quotidien.",
            "La durabilité et la qualité d'installation comptent autant que le style.",
            "Vous souhaitez une approche plus simple (un seul responsable lorsque requis).",
          ]}
          variant="checkmarks"
        />

        <ComparisonTableSection
          aria-labelledby="tableau"
          heading="Comparatif rapide"
          firstColumnLabel="Critère"
          columns={["Cuisine sur mesure (Dilamco)", "Cuisine type Home Depot"]}
          rows={[
            {
              label: "Dimensions",
              values: ["Adaptées à votre espace", "Majoritairement modulaires / standard"],
            },
            {
              label: "Rangement",
              values: ["Optimisé selon vos usages", "Limité aux options disponibles"],
            },
            {
              label: "Matériaux",
              values: [
                "Choix orientés durabilité et usage",
                "Variable selon la gamme choisie",
              ],
            },
            {
              label: "Installation",
              values: [
                "Ajustements, alignements et finition sur place",
                "Résultat dépend fortement de l'installateur",
              ],
            },
            {
              label: "Rénovation",
              values: [
                "Option clé en main selon le projet",
                "Coordination souvent à votre charge",
              ],
            },
            {
              label: "Résultat final",
              values: [
                "Cohérence globale, finition maîtrisée",
                "Plus variable, dépend des choix et de l'exécution",
              ],
            },
          ]}
        />

        <TextSection
          aria-labelledby="materiaux"
          heading="Matériaux : l'impact sur la durabilité"
          paragraphs={[
            "Une cuisine est soumise à l'humidité, aux charges et à l'usage quotidien. Au-delà du style, la durabilité dépend beaucoup de la structure, des assemblages et de la qualité des composants.",
          ]}
        />

        <ListSection
          aria-labelledby="materiaux-details"
          heading=""
          items={[
            "Sur mesure : choix de matériaux orientés usage (cuisine / humidité), détails de fabrication robustes, et possibilité de configurer l'intérieur selon vos besoins.",
            "Standard : les matériaux et la structure varient selon la gamme. Dans tous les cas, la longévité dépend beaucoup de l'installation et de la protection contre l'humidité.",
          ]}
          variant="bullets"
          links={[
            {
              text: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              variant: "outline",
            },
            {
              text: "Voir les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="installation"
          heading="Installation et rénovation : le vrai facteur de résultat"
          paragraphs={[
            "Beaucoup de déceptions viennent moins du « produit » que de l'exécution : alignements, ajustements, gestion des murs et planchers irréguliers, finition, et coordination des travaux connexes si vous rénovez.",
          ]}
        />

        <ListSection
          aria-labelledby="installation-details"
          heading=""
          items={[
            "Si vous rénovez : la coordination (plomberie, électricité, plancher, dosseret) devient souvent le point le plus complexe.",
            "Sur mesure + option clé en main : vous réduisez les risques d'incohérence entre le plan, le chantier et l'installation.",
          ]}
          variant="bullets"
          links={[
            {
              text: "Voir la rénovation de cuisine",
              href: "/services/renovation/cuisine/",
              variant: "outline",
            },
            {
              text: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ]}
        />

        <TextSection
          aria-labelledby="cout"
          heading="Et le coût, concrètement?"
          paragraphs={[
            "Une solution standard peut sembler plus économique au départ. Une solution sur mesure coûte généralement plus, mais vise un résultat mieux intégré à votre espace, avec plus d'optimisation, une meilleure cohérence et une exécution plus contrôlée. L'important est de comparer à périmètre égal : ce qui est inclus, l'installation, et le niveau de finition.",
          ]}
        />

        <ListSection
          aria-labelledby="quand-choisir"
          heading="Quand le sur mesure devient le meilleur choix"
          items={[
            "Vous voulez maximiser le rangement et l'ergonomie (usage quotidien).",
            "Votre espace est atypique ou vous voulez un rendu parfaitement intégré.",
            "Vous recherchez une meilleure durabilité et une finition plus stable dans le temps.",
            "Le projet implique une rénovation et vous voulez limiter la coordination à gérer.",
          ]}
          variant="checkmarks"
          links={[
            {
              text: "Voir la page Cuisine sur mesure",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
            {
              text: "Voir des projets de cuisines",
              href: "/projets/cuisine/",
              variant: "outline",
            },
          ]}
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
              text: "Solution Dilamco",
              href: "/services/renovation/cuisine/",
              variant: "outline",
            },
          ]}
        />
      </main>
    </>
  );
}
