import type { MetadataRoute } from "next";
import { empresa } from "@/config/empresa";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: empresa.nome,
    short_name: empresa.nomeCurto,
    description: empresa.descricao,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#1f3d36",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
