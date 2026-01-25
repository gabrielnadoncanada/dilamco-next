import type { Metadata } from "next";
import { Cta12 } from "@/components/cta12";
import { ActionButtons } from "@/components/ActionButtons";
import { ArrowRight } from "lucide-react";
import { Process1 } from "@/components/process1";
import { Section } from "@/components/Section";
const siteUrl = "https://dilamco.com";

export const metadata: Metadata = {
  title:
    "Cuisines, vanités et armoires sur mesure clé en main à Montréal | Dilamco",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: { canonical: `${siteUrl}/` },

  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title:
      "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
    description:
      "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dilamco — Sur mesure, durable, bien exécuté",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
    description:
      "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et sur la Rive-Sud.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <main id="contenu">
      <header>
        <h1>Dilamco — Sur mesure haut de gamme, clé en main</h1>
        <p>
          Cuisines, vanités et rangement sur mesure. Design, fabrication,
          installation et rénovation complète au besoin — principalement à
          Montréal, Laval et sur la Rive-Sud.
        </p>
      </header>

      <section aria-labelledby="hero">
        <h2 id="hero">
          Cuisines, salles de bain et espaces sur mesure, sans casse-tête
        </h2>
        <p>
          Vous voulez un résultat cohérent, durable et bien exécuté. On vous
          accompagne du plan à la finition : design, fabrication sur mesure,
          installation précise, et coordination des travaux connexes lorsque le
          projet le requiert.
        </p>

        <ul>
          <li>
            <strong>Sur mesure réel :</strong> adapté à votre espace (coins,
            accès, circulation, rangement).
          </li>
          <li>
            <strong>Qualité et durabilité :</strong> matériaux et détails de
            fabrication pensés pour durer.
          </li>
          <li>
            <strong>Approche clé en main :</strong> un seul responsable pour
            réduire les imprévus.
          </li>
        </ul>

        <ActionButtons
          buttons={[
            {
              text: "Obtenir une soumission gratuite",
              href: "/contact",
            },
            {
              text: "Voir nos réalisations",
              href: "/projets",
              variant: "outline",
              icon: ArrowRight,
            },
          ]}
        />
      </section>

      <section aria-labelledby="espaces">
        <h2 id="espaces">Choisissez votre espace</h2>
        <p>
          Chaque espace a ses contraintes. Notre travail : optimiser la
          fonctionnalité, la durabilité et la finition — sans compromis sur le
          look.
        </p>
        <ul>
          <li>
            <a href="/espaces/cuisine/">Cuisine sur mesure</a>
          </li>
          <li>
            <a href="/espaces/salle-de-bain/">
              Salle de bain & vanités sur mesure
            </a>
          </li>
          <li>
            <a href="/espaces/walk-in/">Walk-in & rangement</a>
          </li>
          <li>
            <a href="/espaces/salle-de-lavage/">Salle de lavage</a>
          </li>
          <li>
            <a href="/espaces/commercial/">Commercial</a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="differenciation">
        <h2 id="differenciation">Ce qui distingue Dilamco</h2>
        <p>
          Le haut de gamme, ce n’est pas un mot : c’est une somme de décisions
          (matériaux, assemblage, quincaillerie, installation) et une exécution
          contrôlée.
        </p>

        <ul>
          <li>
            <strong>Design orienté usage :</strong> rangement logique,
            ergonomie, accès aux coins, circulation fluide.
          </li>
          <li>
            <strong>Fabrication robuste :</strong> choix de matériaux adaptés à
            la cuisine et à l’humidité en salle de bain.
          </li>
          <li>
            <strong>Installation soignée :</strong> alignements, ajustements,
            finition — le détail qui change tout.
          </li>
        </ul>

        <ActionButtons
          buttons={[
            {
              text: "Voir nos matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              text: "Découvrir nos services",
              href: "/services/",
              variant: "outline",
            },
          ]}
        />
      </section>

      <Section aria-labelledby="processus">
        <Process1
          heading="Une approche simple, une exécution cadrée"
          description="Une approche simple, une exécution cadrée"
          steps={[
            {
              step: "1",
              title: "Analyse & design",
              description: "Besoins, contraintes, plan et choix de matériaux.",
            },
            {
              step: "2",
              title: "Fabrication sur mesure",
              description: "Production selon votre configuration.",
            },
            {
              step: "3",
              title: "Coordination (si applicable)",
              description: "Travaux connexes pour une rénovation complète.",
            },
            {
              step: "4",
              title: "Installation & ajustements",
              description: "Finition, alignements, inspection finale.",
            },
          ]}
          actions={
            <ActionButtons
              buttons={[
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
          }
        />
      </Section>

      <section aria-labelledby="preuves">
        <h2 id="preuves">Projets récents</h2>
        <p>
          La meilleure preuve, c’est un projet livré. Consultez nos réalisations
          pour voir le style, le niveau de finition et les configurations
          possibles.
        </p>
        <ul>
          <li>
            <a href="/projets/cuisine/">Voir les projets de cuisines</a>
          </li>
          <li>
            <a href="/projets/salle-de-bain/">
              Voir les projets de salles de bain
            </a>
          </li>
          <li>
            <a href="/projets/">Voir tous les projets</a>
          </li>
        </ul>
      </section>

      <Section aria-labelledby="cta">
        <Cta12
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          actions={
            <ActionButtons
              className="lg:justify-center"
              buttons={[
                {
                  text: "Demander une soumission",
                  href: "/contact/",
                },
              ]}
            />
          }
        />
      </Section>
    </main>
  );
}
