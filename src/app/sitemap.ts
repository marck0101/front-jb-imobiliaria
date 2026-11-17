import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/empresa";
import { listarImoveis } from "@/lib/imoveis";

// /sitemap.xml: páginas fixas + um item por imóvel real (exemplos ficam fora)
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fixas = ["", "/imoveis", "/comprar", "/alugar", "/anunciar", "/sobre", "/contato", "/privacidade"].map((caminho) => ({
    url: `${siteUrl}${caminho || "/"}`,
    changeFrequency: (caminho === "" || caminho === "/comprar" || caminho === "/alugar" ? "daily" : "monthly") as "daily" | "monthly",
    priority: caminho === "" ? 1 : caminho === "/privacidade" ? 0.2 : 0.7,
  }));

  const imoveis = (await listarImoveis())
    .filter((i) => !i.exemplo)
    .map((i) => ({
      url: `${siteUrl}/imoveis/${i.slug}`,
      lastModified: i.atualizadoEm,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: i.fotos.slice(0, 5).map((f) => (f.url.startsWith("http") ? f.url : `${siteUrl}${f.url}`)),
    }));

  return [...fixas, ...imoveis];
}
