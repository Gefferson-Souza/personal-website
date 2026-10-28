import { ImageResponse } from "next/og";

export const alt = "Gefferson Souza: Backend Engineer, Node.js, TypeScript, NestJS";
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
        <div style={{ fontSize: 34, color: "#a3a3a3", marginTop: 24 }}>
          Node.js · TypeScript · NestJS · PostgreSQL
        </div>
        <div style={{ fontSize: 30, color: "#a3a3a3", marginTop: 12 }}>
          Offline-first, multi-tenant retail systems
        </div>
        <div style={{ fontSize: 26, color: "#a3a3a3", marginTop: 12 }}>
          Goiânia, Brazil (UTC-3)
        </div>
      </div>
    ),
    size
  );
}
