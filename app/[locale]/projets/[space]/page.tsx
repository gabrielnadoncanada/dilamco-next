import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";

import { PROJECTS_BY_SPACE } from "@/data/projects";
import { SPACE_LABEL, getSpaceLabel } from "@/constants/projects";
import type { ProjectSpace } from "@/types/projects";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/elements/heading";
import { Button } from "@/components/ui/button";

type Params = { locale: string; space: string };

const SPACES = Object.keys(SPACE_LABEL) as ProjectSpace[];

const asLocale = (l: string): "fr" | "en" => (l === "en" ? "en" : "fr");

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
  const { locale, space } = await params;
  if (!isSpace(space)) return {};
  const loc = asLocale(locale);
  const label = getSpaceLabel(space, loc);
  const ll = loc === "en" ? label : label.toLowerCase();
  return createPageMetadata(
    {
      title:
        loc === "en"
          ? `Custom ${ll} projects`
          : `Projets ${ll} sur mesure`,
      description:
        loc === "en"
          ? `Custom ${ll} projects by Dilamco: design, fabrication and installation in Montréal, Laval and across Greater Montréal.`
          : `Réalisations de ${ll} sur mesure par Dilamco : conception, fabrication et installation à Montréal, Laval et dans le Grand Montréal.`,
      path: `/projets/${space}`,
    },
    loc,
  );
}

export default async function ProjectsSpacePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, space } = await params;
  const loc = asLocale(locale);
  setRequestLocale(loc);
  if (!isSpace(space)) notFound();

  const t = await getTranslations("projectDetail");
  const label = getSpaceLabel(space, loc);
  const ll = loc === "en" ? label : label.toLowerCase();
  const projects = PROJECTS_BY_SPACE[space] ?? [];

  const breadcrumbs = [
    { name: t("breadcrumbHome"), url: SITE.url + "/" },
    { name: t("breadcrumbProjects"), url: SITE.url + "/projets" },
    { name: label, url: SITE.url + `/projets/${space}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <Header />

      <main id="contenu" className="bg-background text-foreground">
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <nav
              aria-label="Fil d'Ariane"
              className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Link href="/projets" className="hover:text-foreground">
                {t("breadcrumbProjects")}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground/70">{label}</span>
            </nav>

            <Heading as="h1" variant="h1" className="mt-6 max-w-3xl md:text-5xl">
              {t("listingHeading", { label: ll })}
            </Heading>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t("listingIntro", { label: ll })}
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            {projects.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-10 text-center">
                <p className="text-muted-foreground">
                  {t("comingSoon", { label: ll })}
                </p>
                <Button asChild size="lg" className="mt-6 gap-2">
                  <Link href="/contact">{t("discussProject")}</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
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
                        {p.neighborhood ? `${p.neighborhood}, ` : ""}
                        {p.city}
                      </p>
                      <h2 className="mt-1.5 text-lg font-semibold text-foreground">
                        {p.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                        {p.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        {t("viewProject")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/projets">{t("allProjects")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
