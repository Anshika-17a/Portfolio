import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Anshika — AI/ML Engineer & Project Lead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF9F7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          border: "1px solid rgba(26, 25, 23, 0.08)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "18px",
              color: "#2F4F3E",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            AI/ML Engineer · Project Lead · Udupi, India
          </div>
          <div
            style={{
              fontSize: "64px",
              color: "#1A1917",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: "24px",
            }}
          >
            Anshika
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#6B6862",
              lineHeight: 1.5,
              maxWidth: "900px",
            }}
          >
            Bridging rigorous machine learning pipelines with funded engineering delivery and team leadership.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(26, 25, 23, 0.12)",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#6B6862",
              letterSpacing: "0.05em",
            }}
          >
            SMVITM Udupi · 2023–2027 · CGPA 8.03/10
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#2F4F3E",
              fontWeight: 600,
            }}
          >
            anshika-portfolio-gules-ten.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
