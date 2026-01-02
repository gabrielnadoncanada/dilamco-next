// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          Dilamco
        </div>
        <div style={{ marginTop: 18, fontSize: 30, opacity: 0.9 }}>
          Cuisines, vanités et rangements sur mesure
        </div>
        <div style={{ marginTop: 40, fontSize: 22, opacity: 0.8 }}>
          Montréal • Laval • Rive-Sud
        </div>
      </div>
    ),
    size
  );
}
