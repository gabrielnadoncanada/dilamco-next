// app/services/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { getServicePageBySlug } from "@/data/page-builder/service-pages";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { slug: string };





export default async function OpenGraphImage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!getServicePageBySlug(slug)) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  const service = getServicePageBySlug(slug);

  const title = service?.metadata.title ?? "Service | Dilamco";
  const desc = service?.metadata.description ?? "Services sur mesure — Dilamco.";

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
