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
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";

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

function renderSection(
  section: (typeof SPACE_CONTENT)[ProjectSpace]["sections"][number]
) {
  switch (section.type) {
    case "text":
      const textLinks: ActionButton[] | undefined = section.links?.map((l) => ({
        text: l.label,
        href: l.href,
        variant: "outline" as const,
      }));

      return (
        <TextSection
          key={section.id}
          aria-labelledby={section.id}
          heading={section.title}
          paragraphs={section.paragraphs}
          links={textLinks}
        />
      );

    case "list":
      const listLinks: ActionButton[] | undefined = section.links?.map((l) => ({
        text: l.label,
        href: l.href,
        variant: "outline" as const,
      }));

      return (
        <ListSection
          key={section.id}
          aria-labelledby={section.id}
          heading={section.title}
          intro={section.intro}
          items={section.items}
          links={listLinks}
          variant="bullets"
        />
      );

    case "steps":
      const stepLinks: ActionButton[] | undefined = section.links?.map((l) => ({
        text: l.label,
        href: l.href,
        variant: "outline" as const,
      }));

      return (
        <ProcessSection
          key={section.id}
          aria-labelledby={section.id}
          heading={section.title}
          steps={section.steps.map((step, idx) => ({
            step: String(idx + 1),
            title: step,
            description: "",
          }))}
          actions={
            stepLinks && stepLinks.length > 0 ? (
              <ActionButtons buttons={stepLinks} />
            ) : undefined
          }
        />
      );

    case "faq":
      return (
        <FAQSection
          key={section.id}
          aria-labelledby={section.id}
          heading={section.title}
          items={section.items.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />
      );

    default:
      return null;
  }
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
            <ActionButtons className="justify-start" buttons={content.hero.ctaLinks.map((l) => ({
              text: l.label,
              href: l.href,
              variant: l.href === "/contact/" ? ("default" as const) : ("outline" as const),
            }))} />
          }
        />

        {content.sections.map((section) => renderSection(section))}

        {/* Dynamic projects list (from data/projects.ts) */}
        <TextSection
          aria-labelledby="projects"
          heading="Projets"
          paragraphs={[
            "Chaque projet est documenté avec un format simple : lieu, mandat, contraintes, solution, matériaux et résultat.",
          ]}
        />

        {projects.length === 0 ? (
          <TextSection
            aria-labelledby="no-projects"
            heading=""
            paragraphs={[
              "Aucun projet publié pour l'instant.",
            ]}
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
              label: `${p.title} — ${p.neighborhood ? `${p.neighborhood}, ` : ""}${p.city}`,
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
