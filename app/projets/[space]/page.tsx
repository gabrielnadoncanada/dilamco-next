// app/projets/[space]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS_BY_SPACE,
  SPACE_LABEL,
  type ProjectSpace,
} from "@/data/projects";
import { SPACE_CONTENT } from "@/data/spaces";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ActionButtons } from "@/components/ActionButtons";
import { renderSection } from "@/lib/render-section";

type Params = { space: ProjectSpace };

export function generateStaticParams(): Params[] {
  return (Object.keys(SPACE_CONTENT) as ProjectSpace[]).map((space) => ({
    space,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { space } = await params;
  const content = SPACE_CONTENT[space];
  if (!content) return {};

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: { canonical: content.metadata.canonical },

    openGraph: {
      type: "website",
      url: content.metadata.canonical,
      title: content.metadata.title,
      description: content.metadata.description,
      images: [
        {
          url: `/projets/${space}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: content.metadata.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: [`/projets/${space}/opengraph-image`],
    },
  };
}

export default async function ProjectsSpacePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { space } = await params;

  const content = SPACE_CONTENT[space];
  if (!content) notFound();

  const projects = PROJECTS_BY_SPACE[space] ?? [];
  const spaceLabel = SPACE_LABEL[space];

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
    { name: spaceLabel, url: content.metadata.canonical },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading={content.hero.h1}
          description={content.hero.paragraphs.join(" ")}
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={content.hero.ctaLinks.map((l) => ({
                text: l.label,
                href: l.href,
                variant:
                  l.href === "/contact/"
                    ? ("default" as const)
                    : ("outline" as const),
              }))}
            />
          }
        />

        {content.sections.map((section) =>
          renderSection({
            id: section.id,
            title: section.title,
            type: section.type,
            paragraphs: section.type === "text" ? section.paragraphs : undefined,
            intro: section.type === "list" ? section.intro : undefined,
            items: section.type === "list" ? section.items : undefined,
            steps: section.type === "steps" ? section.steps : undefined,
            links:
              section.type === "faq"
                ? undefined
                : section.links?.map((l) => ({ label: l.label, href: l.href })),
            faqItems: section.type === "faq" ? section.items : undefined,
          })
        )}

        <TextSection
          aria-labelledby="projects"
          heading="Projets"
          paragraphs={[
            "Chaque projet est documentÃ© avec un format simple : lieu, mandat, contraintes, solution, matÃ©riaux et rÃ©sultat.",
          ]}
        />

        {projects.length === 0 ? (
          <TextSection
            aria-labelledby="no-projects"
            heading=""
            paragraphs={["Aucun projet publiÃ© pour l'instant."]}
            links={[
              {
                text: "Contactez-nous",
                href: "/contact/",
                variant: "outline",
              },
            ]}
          />
        ) : (
          <RelatedLinksSection
            aria-labelledby="projects-list"
            heading=""
            links={projects.map((p) => ({
              label: `${p.title} â€” ${p.neighborhood ? `${p.neighborhood}, ` : ""}${p.city}`,
              href: `/projets/${p.space}/${p.slug}/`,
            }))}
            columns={2}
          />
        )}

        <RelatedLinksSection
          aria-labelledby="links"
          heading="Liens utiles"
          links={content.footerLinks.map((l) => ({
            label: l.label,
            href: l.href,
          }))}
          columns={2}
        />
      </main>
    </>
  );
}
