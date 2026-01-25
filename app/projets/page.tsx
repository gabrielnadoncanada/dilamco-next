import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { Cta12 } from "@/components/cta12";
import { Process1 } from "@/components/process1";
import { Section } from "@/components/Section";
import { ActionButtons } from "@/components/ActionButtons";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial. Réalisations à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/projets/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/projets/",
    title: "Projets | Dilamco",
    description:
      "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial. Réalisations à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projets Dilamco — Réalisations sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | Dilamco",
    description:
      "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in.",
    images: ["/opengraph-image"],
  },
};

export default function Projets() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <header>
          <h1>Projets sur mesure — cuisines, salles de bain et rénovations</h1>
          <p>
            Découvrez des projets réels livrés par Dilamco. Chaque réalisation
            est conçue sur mesure selon l'espace, l'usage et les contraintes du
            client. Nous réalisons des projets principalement à Montréal, Laval
            et sur la Rive-Sud.
          </p>
          <p>
            <a href="/espaces/">Voir les espaces</a> {" | "}
            <a href="/contact/">Parler de votre projet</a>
          </p>
        </header>

        <section aria-labelledby="categories">
          <h2 id="categories">Projets par catégorie</h2>
          <p>
            Filtrez les projets par type d'espace pour voir des configurations
            similaires à votre besoin.
          </p>

          <ul>
            <li>
              <a href="/projets/cuisine/">Cuisines sur mesure</a>
              <p>
                Projets de cuisines sur mesure, avec ou sans rénovation
                complète, réalisés dans des contextes variés (condos, maisons,
                plex).
              </p>
            </li>

            <li>
              <a href="/projets/salle-de-bain/">Salles de bain & vanités</a>
              <p>
                Vanités et rangements adaptés à l'humidité, avec attention
                particulière aux matériaux et à la finition.
              </p>
            </li>

            <li>
              <a href="/projets/walk-in/">Walk-in & rangement</a>
              <p>
                Projets d'organisation et de rangement sur mesure pour optimiser
                l'espace disponible.
              </p>
            </li>

            <li>
              <a href="/projets/salle-de-lavage/">Salles de lavage</a>
              <p>
                Aménagements pratiques et durables pour buanderies et espaces
                techniques.
              </p>
            </li>

            <li>
              <a href="/projets/commercial/">Commercial</a>
              <p>
                Mobilier et rangement sur mesure pour environnements commerciaux
                et professionnels.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="vedette">
          <h2 id="vedette">Projets récents</h2>
          <p>
            Voici quelques exemples de projets récents. Chaque projet dispose de
            sa propre page avec le contexte, les matériaux utilisés et les
            services inclus.
          </p>

          <ul>
            <li>
              <a href="/projets/cuisine/cuisine-sur-mesure-montreal/">
                Cuisine sur mesure — Montréal
              </a>
            </li>
            <li>
              <a href="/projets/salle-de-bain/vanite-sur-mesure-laval/">
                Vanité sur mesure — Laval
              </a>
            </li>
            <li>
              <a href="/projets/cuisine/cuisine-sur-mesure-rive-sud/">
                Cuisine sur mesure — Rive-Sud
              </a>
            </li>
          </ul>
        </section>

        <Section aria-labelledby="processus">
          <Process1
            heading="Notre approche projet"
            description="Une démarche cadrée pour garantir un résultat durable et bien exécuté."
            steps={[
              {
                step: "1",
                title: "Analyse & design",
                description:
                  "Compréhension des besoins et contraintes de l'espace.",
              },
              {
                step: "2",
                title: "Fabrication sur mesure",
                description: "Production adaptée à la configuration réelle.",
              },
              {
                step: "3",
                title: "Coordination (si applicable)",
                description:
                  "Gestion des travaux connexes lors d'une rénovation complète.",
              },
              {
                step: "4",
                title: "Installation & ajustements",
                description: "Finition, alignements et inspection finale.",
              },
            ]}
          />
        </Section>

        <Section aria-labelledby="cta">
          <Cta12
            heading="Parlez-nous de votre projet"
            description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
            actions={
              <ActionButtons
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
    </>
  );
}
