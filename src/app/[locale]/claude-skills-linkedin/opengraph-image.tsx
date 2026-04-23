import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "La Skill de Claude que escribe posts de LinkedIn con los frameworks de +700K impresiones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // satori requires TTF — read local font file (works in both dev and Vercel)
  const fontBold = readFileSync(join(process.cwd(), "public/fonts/inter-bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Radial mint glow — top center */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(172,237,235,0.14) 0%, transparent 70%)",
            display: "flex",
          }}
        />


        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              background: "rgba(172,237,235,0.12)",
              border: "1px solid rgba(172,237,235,0.35)",
              borderRadius: "100px",
              padding: "7px 18px",
              color: "#2C6B65",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            ✦ NUEVO · CLAUDE SKILLS · LINKEDIN
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "54px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.1,
            maxWidth: "860px",
            marginBottom: "30px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          La Skill de Claude que escribe posts de LinkedIn con los frameworks de&nbsp;
          <span style={{ color: "#2C6B65" }}>+700K impresiones</span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.50)",
            maxWidth: "720px",
            lineHeight: 1.5,
            marginBottom: "44px",
            display: "flex",
          }}
        >
          Configúrala una vez en Claude. Obtén posts con tu voz, tu estructura y tus reglas — sin volver a explicar nada.
        </div>

        {/* Bullets */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[
            "6 hooks probados con +700K impresiones",
            "Guardarrails de tono y voz",
            "3 plantillas listas para usar",
          ].map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "10px 16px",
                color: "rgba(255,255,255,0.70)",
                fontSize: "15px",
              }}
            >
              <span style={{ color: "#2C6B65", fontWeight: "700" }}>✓</span>
              {b}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "72px",
            right: "72px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "15px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              display: "flex",
            }}
          >
            verymuch.ai
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #ACEDEB 0%, #BCDAC7 35%, #D7CCA0 65%, #DAB882 100%)",
              borderRadius: "8px",
              padding: "10px 22px",
              color: "white",
              fontSize: "15px",
              fontWeight: "700",
              display: "flex",
            }}
          >
            Descarga Gratis →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: fontBold, weight: 700, style: "normal" }],
    }
  );
}
