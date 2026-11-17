import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/empresa";

// Buscadores e assistentes de IA (GPTBot, ClaudeBot, PerplexityBot...) liberados:
// para uma imobiliária local, aparecer nas respostas das IAs é desejável (GEO).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
