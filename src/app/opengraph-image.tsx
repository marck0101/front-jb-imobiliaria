import { ImageResponse } from "next/og";
import { empresa, localizacaoTexto } from "@/config/empresa";

// Imagem de compartilhamento padrão (WhatsApp, Facebook, LinkedIn): 1200x630.
// Páginas de imóvel usam a primeira foto do anúncio no lugar desta.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${empresa.nome}: ${empresa.slogan}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#1f3d36",
          color: "#f7f4ee",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 120,
            width: 520,
            height: 520,
            borderTop: "3px solid rgba(184,134,47,0.5)",
            borderLeft: "3px solid rgba(184,134,47,0.5)",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#132823",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            JB
          </div>
          <div style={{ fontSize: 40 }}>{empresa.nome}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 900 }}>{empresa.slogan}</div>
          <div style={{ display: "flex", fontSize: 28, color: "#b8862f", fontFamily: "sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>
            {`${localizacaoTexto} · WhatsApp ${empresa.telefoneExibicao}`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
