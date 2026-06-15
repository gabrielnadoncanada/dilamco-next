import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import {
  PUBLIC_PROJECTS,
  PROJECTS_BY_SPACE,
  getProjectByParams,
  getProjectCanonicalUrl,
} from "@/data/projects";
import { SPACE_LABEL } from "@/constants/projects";
import type { ProjectData, ProjectSpace } from "@/types/projects";
import type { GenericLink } from "@/types/links";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/seo/schema/builders";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Params = { space: string; slug: string };

export function generateStaticParams() {
  return PUBLIC_PROJECTS.map((p) => ({ space: p.space, slug: p.slug }));
}

function getProject(params: Params): ProjectData | undefined {
  return getProjectByParams(params.space as ProjectSpace, params.slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const project = getProject(await params);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.metaDescription,
    path: `/projets/${project.space}/${project.slug}`,
  });
}

const COLUMNS = [
  { key: "scope", label: "Portée du projet" },
  { key: "constraints", label: "Contraintes" },
  { key: "solution", label: "Notre solution" },
  { key: "results", label: "Résultats" },
] as const;

function LinkList({
  heading,
  items,
}: {
  heading: string;
  items: GenericLink[];
}) {
  if (!items.length) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it.href + (it.title ?? it.label ?? "")}>
            <Link
              href={it.href}
              className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {it.title ?? it.label}
              <ArrowRight className="h-3.5 w-3.5 text-foreground/40 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolved = await params;
  const project = getProject(resolved);
  if (!project) notFound();

  const spaceLabel = SPACE_LABEL[project.space];
  const canonical = getProjectCanonicalUrl(project);
  const related = (PROJECTS_BY_SPACE[project.space] ?? [])
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets" },
    { name: spaceLabel, url: SITE.url + `/projets/${project.space}` },
    { name: project.title, url: canonical },
  ];

  return (
    <main className="bg-background text-foreground">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: project.title,
          description: project.metaDescription,
          url: canonical,
          serviceType: `${spaceLabel} sur mesure`,
          areaServed: [project.city],
        })}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <nav
            aria-label="Fil d'Ariane"
            className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link href="/projets" className="hover:text-foreground">
              Projets
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/projets/${project.space}`}
              className="hover:text-foreground"
            >
              {spaceLabel}
            </Link>
          </nav>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Projet — {spaceLabel}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-foreground/60">
            {project.neighborhood ? `${project.neighborhood}, ` : ""}
            {project.city}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href={project.requiredLinks.contactHref}>
                Demander une soumission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={project.requiredLinks.spaceHref}>
                Voir l&apos;espace {spaceLabel.toLowerCase()}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery (si images) */}
      {project.images && project.images.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src + i}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={cn(
                    "aspect-[4/3] w-full rounded-xl border border-border object-cover",
                    i === 0 && "sm:col-span-2 sm:aspect-[16/9] lg:col-span-2",
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Détail du projet */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => {
              const items = project[col.key];
              if (!items?.length) return null;
              return (
                <div key={col.key}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70">
                    {col.label}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Matériaux & services */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <LinkList heading="Matériaux" items={project.materials} />
          <LinkList heading="Services liés" items={project.services} />
        </div>
      </section>

      {/* Projets liés */}
      {related.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Autres projets {spaceLabel.toLowerCase()}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projets/${p.space}/${p.slug}`}
                  className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.city}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Voir le projet
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Un projet similaire en tête ?
              </h2>
              <p className="mt-3 text-muted-foreground">
                On vous aide à cadrer un projet sur mesure, durable et bien
                exécuté à {project.city} et dans le Grand Montréal.
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href={project.requiredLinks.contactHref}>
                Demander une soumission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
