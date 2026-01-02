// app/projets/[space]/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { PROJECTS, type ProjectSpace, getProjectByParams } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { space: string; slug: string };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ space: p.space, slug: p.slug }));
}

function isProjectSpace(v: string): v is ProjectSpace {
  return (
    v === "cuisine" ||
    v === "salle-de-bain" ||
    v === "salle-de-lavage" ||
    v === "walk-in" ||
    v === "commercial"
  );
}

export default async function OpenGraphImage({ params }: { params: Promise<Params> }) {
  const { space, slug } = await params;
  if (!isProjectSpace(space)) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  const project = getProjectByParams(space, slug);

  const title = project?.title ?? "Projet sur mesure";
  const city = project?.city ?? "Québec";
  const summary = project?.summary ?? "Design, fabrication et installation — exécution durable.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#0b0b0b",
          color: "white",
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.12 }}>
          {title}
        </div>
        <div style={{ marginTop: 16, fontSize: 26, opacity: 0.9 }}>
          {city}
        </div>
        <div style={{ marginTop: 28, fontSize: 22, opacity: 0.85, maxWidth: 980 }}>
          {summary}
        </div>
        <div style={{ marginTop: 44, fontSize: 20, opacity: 0.8 }}>
          Dilamco • Sur mesure • Durable • Bien exécuté
        </div>
      </div>
    ),
    size
  );
}
