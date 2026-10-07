import { ImageResponse } from "next/og";

export const alt = "Gefferson Souza: Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0c0c0c",
          color: "#e5e5e5",
          padding: 80,
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, color: "#22c55e" }}>gefferson_souza_</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>Backend Engineer</div>
        <div style={{ fontSize: 34, color: "#888888", marginTop: 24 }}>
          Node.js · NestJS · TypeScript · Rust
        </div>
        <div style={{ fontSize: 30, color: "#888888", marginTop: 12 }}>
          Offline-first systems and fiscal integrations
        </div>
      </div>
    ),
    size
  );
}
