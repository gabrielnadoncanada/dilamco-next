// app/projets/[space]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { type ProjectSpace } from "@/data/projects";
import { PROJECT_SPACE_PAGES } from "@/data/project-pages/spaces";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { space: string };

export function generateStaticParams() {
  return Object.keys(PROJECT_SPACE_PAGES).map((space) => ({ space }));
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

  const content = PROJECT_SPACE_PAGES[space];

  const title = content?.metadata?.title ?? "Projets sur mesure | Dilamco";
  const desc = content?.metadata?.description ?? "Rà©alisations et à©tudes de cas Ã¢â‚¬â€ Dilamco.";

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
          Montrà©al Ã¢â‚¬Â¢ Laval Ã¢â‚¬Â¢ Rive-Sud
        </div>
      </div>
    ),
    size
  );
}


