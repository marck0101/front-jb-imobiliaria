import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { empresa, siteUrl } from "@/config/empresa";
import { schemaEmpresa } from "@/lib/seo";
import "./globals.css";

// Fontes servidas pelo próprio site (next/font): sem requisição ao Google e
// sem "pulo" de layout quando a fonte carrega.
const titulo = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-titulo", display: "swap" });
const texto = Inter({ subsets: ["latin"], variable: "--font-texto", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${empresa.nome} | ${empresa.slogan}`,
    template: `%s | ${empresa.nome}`,
  },
  description: empresa.descricao,
  applicationName: empresa.nome,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: empresa.nome,
    url: `${siteUrl}/`,
    title: `${empresa.nome} | ${empresa.slogan}`,
    description: empresa.descricao,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  other: {
    "geo.region": "BR-RS",
    ...(empresa.cidadeSede ? { "geo.placename": empresa.cidadeSede } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#1f3d36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>
        <a href="#conteudo" className="pular-conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <div id="conteudo" tabIndex={-1} />
        {children}
        <Footer />
        <JsonLd dados={schemaEmpresa()} />
      </body>
    </html>
  );
}
