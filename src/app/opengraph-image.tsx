import { ImageResponse } from "next/og";

// Brand OG card: near-black, ice-blue 0→▲ line, wordmark + tagline.
// Served at /opengraph-image (1200×630), referenced in layout metadata.
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060A12",
          color: "#F2F5F7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "#7DD3FC",
            fontFamily: "monospace",
          }}
        >
          0 → ▲
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 16 }}>
          NULL PEAK&nbsp;<span style={{ color: "#7DD3FC" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#9AA7B8" }}>
          From Zero to Found — Kathmandu, Nepal
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            height: 6,
            width: 560,
            background: "#1E2A45",
            borderRadius: 3,
          }}
        >
          <div style={{ display: "flex", width: 380, background: "#7DD3FC", borderRadius: 3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
