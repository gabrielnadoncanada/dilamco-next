// app/projets/[space]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { type ProjectSpace } from "@/data/projects";
import { SPACE_CONTENT } from "@/data/spaces";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { space: string };

export function generateStaticParams() {
  return Object.keys(SPACE_CONTENT).map((space) => ({ space }));
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
  const { space } = await params;
  if (!isProjectSpace(space)) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  const content = SPACE_CONTENT[space];

  const title = content?.metadata?.title ?? "Projets sur mesure | Dilamco";
  const desc = content?.metadata?.description ?? "Réalisations et études de cas — Dilamco.";

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
        <div style={{ fontSize: 52, fontWeight: 800 }}>{title}</div>
        <div style={{ marginTop: 22, fontSize: 22, opacity: 0.85, maxWidth: 980 }}>
          {desc}
        </div>
        <div style={{ marginTop: 44, fontSize: 20, opacity: 0.8 }}>
          Montréal • Laval • Rive-Sud
        </div>
      </div>
    ),
    size
  );
}
