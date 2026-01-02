// app/projets/[space]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS_BY_SPACE,
  SPACE_LABEL,
  type ProjectSpace,
} from "@/data/projects";
import { SPACE_CONTENT } from "@/data/spaces";

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
      return (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.links?.length ? (
            <p>
              {section.links.map((l, idx) => (
                <span key={l.href}>
                  <a href={l.href}>{l.label}</a>
                  {idx < section.links!.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          ) : null}
        </section>
      );

    case "list":
      return (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          {section.intro ? <p>{section.intro}</p> : null}
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {section.links?.length ? (
            <p>
              {section.links.map((l, idx) => (
                <span key={l.href}>
                  <a href={l.href}>{l.label}</a>
                  {idx < section.links!.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          ) : null}
        </section>
      );

    case "steps":
      return (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          <ol>
            {section.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          {section.links?.length ? (
            <p>
              {section.links.map((l, idx) => (
                <span key={l.href}>
                  <a href={l.href}>{l.label}</a>
                  {idx < section.links!.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          ) : null}
        </section>
      );

    case "faq":
      return (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          <dl>
            {section.items.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
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

  return (
    <main id="contenu">
      <header>
        <h1>{content.hero.h1}</h1>

        {content.hero.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <p>
          {content.hero.ctaLinks.map((l, idx) => (
            <span key={l.href}>
              <a href={l.href}>{l.label}</a>
              {idx < content.hero.ctaLinks.length - 1 ? " | " : ""}
            </span>
          ))}
        </p>
      </header>

      {content.sections.map((section) => renderSection(section))}

      {/* Dynamic projects list (from data/projects.ts) */}
      <section aria-labelledby="projects">
        <h2 id="projects">Projets</h2>
        <p>
          Chaque projet est documenté avec un format simple : lieu, mandat,
          contraintes, solution, matériaux et résultat.
        </p>

        {projects.length === 0 ? (
          <p>
            Aucun projet publié pour l’instant.{" "}
            <a href="/contact/">Contactez-nous</a> pour discuter de votre
            besoin.
          </p>
        ) : (
          <ul>
            {projects.map((p) => (
              <li key={p.slug}>
                <a href={`/projets/${p.space}/${p.slug}/`}>{p.title}</a> —{" "}
                {p.neighborhood ? `${p.neighborhood}, ` : ""}
                {p.city}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="links">
        <h2 id="links">Liens utiles</h2>
        <ul>
          {content.footerLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <p>(Espace : {spaceLabel})</p>
      </section>
    </main>
  );
}
