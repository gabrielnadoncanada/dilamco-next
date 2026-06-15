import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { PROJECTS_BY_SPACE } from "@/data/projects";
import { SPACE_LABEL } from "@/constants/projects";
import type { ProjectSpace } from "@/types/projects";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { Button } from "@/components/ui/button";

type Params = { space: string };

const SPACES = Object.keys(SPACE_LABEL) as ProjectSpace[];

export function generateStaticParams() {
  return SPACES.map((space) => ({ space }));
}

function isSpace(value: string): value is ProjectSpace {
  return (SPACES as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { space } = await params;
  if (!isSpace(space)) return {};
  const label = SPACE_LABEL[space];
  return createPageMetadata({
    title: `Projets ${label.toLowerCase()} sur mesure`,
    description: `Réalisations de ${label.toLowerCase()} sur mesure par Dilamco : conception, fabrication et installation à Montréal, Laval et dans le Grand Montréal.`,
    path: `/projets/${space}`,
  });
}

export default async function ProjectsSpacePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { space } = await params;
  if (!isSpace(space)) notFound();

  const label = SPACE_LABEL[space];
  const projects = PROJECTS_BY_SPACE[space] ?? [];

  const breadcrumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets" },
    { name: label, url: SITE.url + `/projets/${space}` },
  ];

  return (
    <main className="bg-background text-foreground">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

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
            <span className="text-foreground/70">{label}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Projets {label.toLowerCase()} sur mesure
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Quelques réalisations de {label.toLowerCase()} sur mesure — design,
            fabrication contrôlée et installation soignée, à Montréal, Laval et
            dans le Grand Montréal.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          {projects.length === 0 ? (
            <p className="text-muted-foreground">
              Nos réalisations {label.toLowerCase()} arrivent bientôt.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projets/${p.space}/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.city}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Voir le projet
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/projets">Tous les projets</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
