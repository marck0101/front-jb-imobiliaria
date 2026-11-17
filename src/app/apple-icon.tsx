import { ImageResponse } from "next/og";

// Ícone 180x180 para a tela inicial do iPhone (gerado no build)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f3d36",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderTop: "12px solid #b8862f",
            borderLeft: "12px solid #b8862f",
            transform: "rotate(45deg)",
            marginTop: 40,
            marginBottom: -46,
          }}
        />
        <div style={{ fontSize: 64, fontWeight: 700, color: "#f7f4ee", fontFamily: "serif", letterSpacing: 2 }}>JB</div>
      </div>
    ),
    size
  );
}
