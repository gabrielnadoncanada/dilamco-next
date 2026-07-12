import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Check, MapPin } from "lucide-react";

import {
  PUBLIC_PROJECTS,
  getProjectsBySpace,
  getProjectByParams,
  getProjectCanonicalUrl,
} from "@/data/projects";
import { getSpaceLabel } from "@/constants/projects";
import type { ProjectData, ProjectSpace } from "@/types/projects";
import type { GenericLink } from "@/types/links";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/seo/schema/builders";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/elements/heading";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/projets/project-gallery";

type Params = { locale: string; space: string; slug: string };

const asLocale = (l: string): "fr" | "en" => (l === "en" ? "en" : "fr");

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLIC_PROJECTS.map((p) => ({ space: p.space, slug: p.slug }));
}

function getProject(params: Params): ProjectData | undefined {
  return getProjectByParams(
    params.space as ProjectSpace,
    params.slug,
    asLocale(params.locale),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolved = await params;
  const project = getProject(resolved);
  if (!project) return {};
  return createPageMetadata(
    {
      title: project.title,
      description: project.metaDescription,
      path: `/projets/${project.space}/${project.slug}`,
      ogImage: project.images?.[0]
        ? { url: project.images[0].src, alt: project.images[0].alt }
        : undefined,
    },
    asLocale(resolved.locale),
  );
}

const COLUMN_KEYS = ["scope", "constraints", "solution", "results"] as const;

function LinkList({ heading, items }: { heading: string; items: GenericLink[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2.5">
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
  const locale = asLocale(resolved.locale);
  setRequestLocale(locale);
  const project = getProject(resolved);
  if (!project) notFound();

  const t = await getTranslations("projectDetail");
  const tc = await getTranslations("common");
  const spaceLabel = getSpaceLabel(project.space, locale);
  const labelLower = locale === "en" ? spaceLabel : spaceLabel.toLowerCase();
  const canonical = getProjectCanonicalUrl(project, locale);
  const images = project.images ?? [];
  const related = getProjectsBySpace(project.space, locale)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { name: t("breadcrumbHome"), url: SITE.url + "/" },
    { name: t("breadcrumbProjects"), url: SITE.url + "/projets" },
    { name: spaceLabel, url: SITE.url + `/projets/${project.space}` },
    { name: project.title, url: canonical },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: project.title,
          description: project.metaDescription,
          url: canonical,
          serviceType:
            locale === "en"
              ? `Custom ${spaceLabel}`
              : `${spaceLabel} sur mesure`,
          areaServed: [project.city],
        })}
      />

      <Header />

      <main id="contenu" className="bg-background text-foreground">
        {/* Hero split */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
            <div>
              <nav
                aria-label="Fil d'Ariane"
                className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
              >
                <Link href="/projets" className="hover:text-foreground">
                  {t("breadcrumbProjects")}
                </Link>
                <span aria-hidden>/</span>
                <Link
                  href={`/projets/${project.space}`}
                  className="hover:text-foreground"
                >
                  {spaceLabel}
                </Link>
              </nav>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t("eyebrow")} — {spaceLabel}
              </p>
              <Heading as="h1" variant="h1" className="mt-3 md:text-5xl">
                {project.title}
              </Heading>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60">
                <MapPin className="h-4 w-4 text-foreground/40" />
                {project.neighborhood ? `${project.neighborhood}, ` : ""}
                {project.city}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <Link href={project.requiredLinks.contactHref}>
                    {tc("requestQuote")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={project.requiredLinks.spaceHref}>
                    {t("viewSpace", { label: labelLower })}
                  </Link>
                </Button>
              </div>
            </div>

            {images.length > 0 ? <ProjectGallery images={images} /> : null}
          </div>
        </section>

        {/* Détail */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {COLUMN_KEYS.map((key) => {
                const items = project[key];
                if (!items?.length) return null;
                return (
                  <div key={key}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                      {t(key)}
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 text-sm text-muted-foreground"
                        >
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
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
            <LinkList heading={t("materials")} items={project.materials} />
            <LinkList heading={t("relatedServices")} items={project.services} />
          </div>
        </section>

        {/* Projets liés */}
        {related.length > 0 && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
              <Heading as="h2" variant="h2">
                {t("otherProjectsSpace", { label: labelLower })}
              </Heading>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projets/${p.space}/${p.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {p.images?.[0] ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {p.city}
                      </p>
                      <h3 className="mt-1.5 text-base font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        {t("viewProject")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <Heading as="h2" variant="h2">
                  {t("similarProject")}
                </Heading>
                <p className="mt-3 text-muted-foreground">
                  {t("ctaText", { city: project.city })}
                </p>
              </div>
              <Button asChild className="gap-2">
                <Link href={project.requiredLinks.contactHref}>
                  {tc("requestQuote")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
