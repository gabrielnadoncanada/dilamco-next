// app/services/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { SERVICES, type ServiceSlug } from "@/data/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

function isServiceSlug(v: string): v is ServiceSlug {
  return v === "design" || v === "fabrication" || v === "installation" || v === "renovation";
}

export default async function OpenGraphImage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    return new ImageResponse(<div>Not found</div>, size);
  }

  const service = SERVICES.find((s) => s.slug === slug);

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
