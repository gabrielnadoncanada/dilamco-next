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
import { Cta12 } from "@/components/cta12";
import Image from "next/image";

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
        <header>
          <h1>{project.title}</h1>
          <p>
            <strong>Lieu :</strong> {locationLabel}
          </p>
          <p>{project.summary}</p>
          <p>{spaceIntro}</p>

          <p>
            Ce projet illustre notre approche{" "}
            <a href={project.requiredLinks.spaceHref}>
              {spaceLabel} sur mesure
            </a>{" "}
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

        <section aria-labelledby="images" className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            {project.images?.slice(0, 3).map((img, index, arr) => {
              const hasThird = arr.length >= 3;

              const wrapperClass =
                index === 0
                  ? // Hero: takes 2 cols + 2 rows
                    "relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 h-[420px] md:h-[520px]"
                  : index === 1
                  ? // Right top: if no 3rd image, span both rows (fills the empty space)
                    `relative overflow-hidden rounded-2xl md:col-span-1 ${
                      hasThird
                        ? "md:row-span-1 md:h-full"
                        : "md:row-span-2 md:h-full"
                    } h-[240px]`
                  : // Right bottom: only exists if 3rd image exists
                    "relative overflow-hidden rounded-2xl md:col-span-1 md:row-span-1 h-[240px] md:h-full";

              return (
                <div
                  key={img.src}
                  className={`${wrapperClass} shadow-sm ring-1 ring-black/5`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    quality={90}
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    }
                  />
                </div>
              );
            })}
          </div>
        </section>

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

        <Cta12
          aria-labelledby="cta"
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          buttons={{
            primary: {
              text: "Demander une soumission",
              url: project.requiredLinks.contactHref,
            },
          }}
        />
      </main>
    </>
  );
}
