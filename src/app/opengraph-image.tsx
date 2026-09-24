import { ImageResponse } from "next/og";
export const alt = "Seif Ben Abdallah — Technology & Business Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#07090a", color: "#e6ede8", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, fontFamily: "monospace", border: "2px solid #1c2622" }}>
        <div style={{ color: "#3dff9a", fontSize: 30 }}>~/seif $ whoami</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>SEIF BEN ABDALLAH</div>
        <div style={{ fontSize: 40, marginTop: 20 }}>Technology & Business Development</div>
        <div style={{ fontSize: 28, color: "#8a978f", marginTop: 36 }}>Software Engineering  /  Digital Solutions  /  B2B Partnerships</div>
      </div>
    ),
    size
  );
}
