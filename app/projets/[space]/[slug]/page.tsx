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

type Params = { space: ProjectSpace; slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ space: p.space, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { space, slug } = await params;
  const project = getProjectByParams(space, slug);
  if (!project) return {};

  const canonical = getProjectCanonicalUrl(project);

  return {
    title: `${project.title} | Dilamco`,
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
    { name: SPACE_LABEL[project.space], url: SITE.url + `/projets/${project.space}/` },
    { name: project.title, url: getProjectCanonicalUrl(project) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
      <header>
        <h1>{project.title}</h1>
        <p>
          <strong>Lieu :</strong> {locationLabel}
        </p>
        <p>{project.summary}</p>
        <p>{spaceIntro}</p>

        <p>
          Ce projet illustre notre approche{" "}
          <a href={project.requiredLinks.spaceHref}>{spaceLabel} sur mesure</a>{" "}
          et notre{" "}
          <a href={project.requiredLinks.renovationHref}>
            rénovation clé en main
          </a>
          .
        </p>

        <p>
          <a href={project.requiredLinks.contactHref}>
            Demander une soumission
          </a>
          {project.optionalLinks?.galleryHref ? (
            <>
              {" "}
              |{" "}
              <a href={project.optionalLinks.galleryHref}>
                Voir tous les projets
              </a>
            </>
          ) : null}
        </p>
      </header>

      <section aria-labelledby="scope">
        <h2 id="scope">Mandat</h2>
        <ul>
          {project.scope.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="constraints">
        <h2 id="constraints">Contraintes</h2>
        <ul>
          {project.constraints.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>
          Pour une exécution cohérente :{" "}
          <a href={project.requiredLinks.renovationHref}>
            coordination clé en main
          </a>
          {" | "}
          <a href={CORE_HREF.installation}>installation</a>.
        </p>
      </section>

      <section aria-labelledby="solution">
        <h2 id="solution">Solution</h2>
        <ul>
          {project.solution.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="materials">
        <h2 id="materials">Matériaux</h2>
        <ul>
          {project.materials.map((m) => (
            <li key={m.href}>
              <a href={m.href}>{m.label}</a>
            </li>
          ))}
        </ul>
        <p>
          Matériau clé :{" "}
          <a href={project.requiredLinks.materialHref}>voir le détail</a>
        </p>
      </section>

      <section aria-labelledby="result">
        <h2 id="result">Résultat</h2>
        <ul>
          {project.results.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cta">
        <h2 id="cta">Parlez-nous de votre projet</h2>
        <p>
          <a href={project.requiredLinks.contactHref}>
            Demander une soumission
          </a>
        </p>
        <p>
          Liens utiles : <a href={project.requiredLinks.spaceHref}>Espace</a>
          {" | "}
          <a href={project.requiredLinks.renovationHref}>Rénovation</a>
          {" | "}
          <a href={project.requiredLinks.materialHref}>Matériaux</a>
          {" | "}
          <a href={CORE_HREF.installation}>Installation</a>
          {" | "}
          <a href={CORE_HREF.materialsHub}>Tous les matériaux</a>
        </p>
      </section>
    </main>
    </>
  );
}
