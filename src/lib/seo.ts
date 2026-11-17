import type { Metadata } from "next";
import type { Imovel } from "@/types/imovel";
import { empresa, instagramUrl, siteUrl } from "@/config/empresa";
import { TIPOS } from "@/lib/imoveis";
import { bairroCidade, paragrafos, preco, resumo } from "@/lib/formato";

// Metadados e dados estruturados (JSON-LD) num lugar só.

export function metadados({
  titulo,
  descricao,
  caminho,
  imagem,
  semIndice = false,
}: {
  titulo: string;
  descricao: string;
  caminho: string;
  imagem?: string;
  semIndice?: boolean;
}): Metadata {
  const url = `${siteUrl}${caminho}`;
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: url },
    robots: semIndice ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: empresa.nome,
      url,
      title: titulo,
      description: descricao,
      ...(imagem ? { images: [{ url: imagem }] } : {}),
    },
    twitter: { card: "summary_large_image", title: titulo, description: descricao },
  };
}

const ID_EMPRESA = `${siteUrl}/#imobiliaria`;

/** Imobiliária (RealEstateAgent). Só publica o que existe em config/empresa.ts. */
export function schemaEmpresa() {
  const e = empresa;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": ID_EMPRESA,
        name: e.nome,
        ...(e.razaoSocial ? { legalName: e.razaoSocial } : {}),
        description: e.descricao,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/opengraph-image`,
        telephone: `+${e.whatsapp}`,
        email: e.email,
        sameAs: [instagramUrl],
        areaServed: [
          ...(e.cidadeSede ? [{ "@type": "City", name: e.cidadeSede }] : []),
          { "@type": "AdministrativeArea", name: e.regiao },
        ],
        ...(e.endereco
          ? {
              address: {
                "@type": "PostalAddress",
                streetAddress: e.endereco.rua,
                addressLocality: e.cidadeSede,
                addressRegion: e.uf,
                postalCode: e.endereco.cep,
                addressCountry: "BR",
              },
              ...(e.endereco.lat
                ? { geo: { "@type": "GeoCoordinates", latitude: e.endereco.lat, longitude: e.endereco.lng } }
                : {}),
            }
          : {}),
        ...(e.creci ? { identifier: { "@type": "PropertyValue", name: "CRECI", value: e.creci } } : {}),
        ...(e.horario ? { openingHours: e.horario } : {}),
        paymentAccepted: e.formasPagamento.join(", "),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${e.whatsapp}`,
          email: e.email,
          availableLanguage: "Portuguese",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#site`,
        url: `${siteUrl}/`,
        name: e.nome,
        inLanguage: "pt-BR",
        publisher: { "@id": ID_EMPRESA },
      },
    ],
  };
}

const TIPO_SCHEMA: Record<Imovel["tipo"], string> = {
  casa: "SingleFamilyResidence",
  sobrado: "SingleFamilyResidence",
  apartamento: "Apartment",
  kitnet: "Apartment",
  terreno: "Place",
  "sala-comercial": "Place",
  pavilhao: "Place",
  "sitio-chacara": "Place",
};

/** Anúncio (RealEstateListing + Offer + a acomodação) */
export function schemaImovel(imovel: Imovel) {
  const url = `${siteUrl}/imoveis/${imovel.slug}`;
  const e = imovel.endereco;
  const fotos = imovel.fotos.map((f) => (f.url.startsWith("http") ? f.url : `${siteUrl}${f.url}`));
  const lugar = {
    "@type": TIPO_SCHEMA[imovel.tipo],
    name: imovel.titulo,
    address: {
      "@type": "PostalAddress",
      ...(e.mostrarRua && e.rua ? { streetAddress: e.rua } : {}),
      addressLocality: e.cidade,
      addressRegion: e.uf,
      addressCountry: "BR",
    },
    ...(e.lat ? { geo: { "@type": "GeoCoordinates", latitude: e.lat, longitude: e.lng } } : {}),
    ...(imovel.quartos ? { numberOfBedrooms: imovel.quartos, numberOfRooms: imovel.quartos } : {}),
    ...(imovel.banheiros ? { numberOfBathroomsTotal: imovel.banheiros } : {}),
    ...(imovel.areaUtil || imovel.areaTotal
      ? { floorSize: { "@type": "QuantitativeValue", value: imovel.areaUtil || imovel.areaTotal, unitCode: "MTK" } }
      : {}),
    ...(imovel.caracteristicas.length
      ? { amenityFeature: imovel.caracteristicas.map((c) => ({ "@type": "LocationFeatureSpecification", name: c, value: true })) }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": `${url}#anuncio`,
        url,
        name: imovel.titulo,
        description: paragrafos(imovel.descricao).join(" "),
        datePosted: imovel.publicadoEm,
        dateModified: imovel.atualizadoEm,
        image: fotos,
        identifier: imovel.codigo,
        provider: { "@id": ID_EMPRESA },
        about: lugar,
        ...(imovel.preco
          ? {
              offers: {
                "@type": "Offer",
                price: imovel.preco,
                priceCurrency: "BRL",
                businessFunction:
                  imovel.finalidade === "venda" ? "http://purl.org/goodrelations/v1#Sell" : "http://purl.org/goodrelations/v1#LeaseOut",
                availability:
                  imovel.status === "disponivel" ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
                ...(imovel.finalidade === "aluguel"
                  ? { priceSpecification: { "@type": "UnitPriceSpecification", price: imovel.preco, priceCurrency: "BRL", unitCode: "MON" } }
                  : {}),
                seller: { "@id": ID_EMPRESA },
              },
            }
          : {}),
      },
      schemaTrilha([
        { nome: "Início", caminho: "/" },
        { nome: imovel.finalidade === "venda" ? "Comprar" : "Alugar", caminho: imovel.finalidade === "venda" ? "/comprar" : "/alugar" },
        { nome: imovel.titulo, caminho: `/imoveis/${imovel.slug}` },
      ]),
    ],
  };
}

export function schemaTrilha(itens: { nome: string; caminho: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: `${siteUrl}${item.caminho}`,
    })),
  };
}

export function schemaFaq(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };
}

/** Lista de imóveis de uma página (vitrine) */
export function schemaLista(nome: string, caminho: string, lista: Imovel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: nome,
    url: `${siteUrl}${caminho}`,
    numberOfItems: lista.length,
    itemListElement: lista.map((imovel, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/imoveis/${imovel.slug}`,
      name: `${TIPOS[imovel.tipo].singular} · ${bairroCidade(imovel)} · ${preco(imovel)}`,
      description: resumo(imovel),
    })),
  };
}
