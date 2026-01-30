// app/projets/[space]/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CORE_HREF,
  PROJECTS,
  SPACE_LABEL,
  type ProjectSpace,
  getProjectByParams,
  getProjectCanonicalUrl,
} from "@/data/projects";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ListSection } from "@/components/sections/ListSection";
import { TextSection } from "@/components/sections/TextSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";

type Params = { space: ProjectSpace; slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ space: p.space, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { space, slug } = await params;
  const project = getProjectByParams(space, slug);
  if (!project) return {};

  const canonical = getProjectCanonicalUrl(project);

  return {
    title: `${project.title}`,
    description: project.metaDescription,
    alternates: { canonical },

    openGraph: {
      type: "article",
      url: canonical,
      title: project.title,
      description: project.metaDescription,
      images: [
        {
          url: `/projets/${project.space}/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.metaDescription,
      images: [`/projets/${project.space}/${project.slug}/opengraph-image`],
    },
  };
}

function getSpaceIntro(space: ProjectSpace): string {
  switch (space) {
    case "cuisine":
      return "Optimisation du rangement, circulation et finition durable pour un usage quotidien.";
    case "salle-de-bain":
      return "Solutions adaptées à l’humidité, à l’entretien et aux contraintes d’espace.";
    case "salle-de-lavage":
      return "Aménagement fonctionnel en contexte d’humidité, avec matériaux et quincaillerie cohérents.";
    case "walk-in":
      return "Rangement optimisé, modularité et accès simple au quotidien.";
    case "commercial":
      return "Usage intensif, durabilité, coordination et finitions propres en zones visibles.";
    default:
      return "Projet sur mesure réalisé avec une approche durable et une exécution précise.";
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ space: ProjectSpace; slug: string }>;
}) {
  const { space, slug } = await params;
  const project = getProjectByParams(space, slug);
  if (!project) notFound();

  // Safety: ensure route matches project data (avoid accidental duplicates)
  if (project.space !== space) notFound();

  const spaceLabel = SPACE_LABEL[project.space];
  const locationLabel = project.neighborhood
    ? `${project.neighborhood}, ${project.city}`
    : project.city;

  const spaceIntro = getSpaceIntro(project.space);

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
    {
      name: SPACE_LABEL[project.space],
      url: SITE.url + `/projets/${project.space}/`,
    },
    { name: project.title, url: getProjectCanonicalUrl(project) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading={project.title}
          description={`${locationLabel}. ${project.summary} ${spaceIntro}`}
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Demander une soumission",
                href: project.requiredLinks.contactHref,
              },
              ...(project.optionalLinks?.galleryHref
                ? [
                  {
                    text: "Voir tous les projets",
                    href: project.optionalLinks.galleryHref,
                    variant: "outline" as const,
                  },
                ]
                : []),
            ]} />
          }
        />

        <TextSection
          aria-labelledby="context"
          heading=""
          paragraphs={[
            `Ce projet illustre notre approche ${spaceLabel} sur mesure et notre rénovation clé en main.`,
          ]}
          links={[
            {
              text: `${spaceLabel} sur mesure`,
              href: project.requiredLinks.spaceHref,
              variant: "outline",
            },
            {
              text: "Rénovation clé en main",
              href: project.requiredLinks.renovationHref,
              variant: "outline",
            },
          ]}
        />

        {project.images && project.images.length > 0 && (
          <GallerySection
            aria-labelledby="images"
            images={project.images.map((img) => ({
              src: img.src,
              alt: img.alt,
            }))}
            columns={3}
          />
        )}

        <ListSection
          aria-labelledby="scope"
          heading="Mandat"
          items={project.scope}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="constraints"
          heading="Contraintes"
          paragraphs={[]}
          links={[
            {
              text: "Coordination clé en main",
              href: project.requiredLinks.renovationHref,
              variant: "outline",
            },
            {
              text: "Installation",
              href: CORE_HREF.installation,
              variant: "outline",
            },
          ]}
        />

        <ListSection
          aria-labelledby="constraints-details"
          heading=""
          items={project.constraints}
          variant="bullets"
        />

        <ListSection
          aria-labelledby="solution"
          heading="Solution"
          items={project.solution}
          variant="bullets"
        />

        <TextSection
          aria-labelledby="materials"
          heading="Matériaux"
          paragraphs={[]}
          links={[
            {
              text: "Voir le détail",
              href: project.requiredLinks.materialHref,
              variant: "outline",
            },
          ]}
        />

        <RelatedLinksSection
          aria-labelledby="materials-list"
          heading=""
          links={project.materials.map((m) => ({
            label: m.label,
            href: m.href,
          }))}
          columns={2}
        />

        <ListSection
          aria-labelledby="result"
          heading="Résultat"
          items={project.results}
          variant="bullets"
        />

        <CTASection
          aria-labelledby="cta"
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          actions={[
            {
              text: "Demander une soumission",
              href: project.requiredLinks.contactHref,
            },
          ]}
        />
      </main>
    </>
  );
}
