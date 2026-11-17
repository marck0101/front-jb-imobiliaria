// Dados da JB Imobiliária. FONTE ÚNICA: header, rodapé, contato, SEO e JSON-LD
// leem daqui. Campo `null` não aparece no site nem no JSON-LD (nada inventado).
//
// PENDENTE (pedir ao cliente): cidade-sede, endereço, CRECI, horário.
// O CRECI é obrigatório em anúncio de imobiliária (Lei 6.530/78 e Res. COFECI).

export const empresa = {
  nome: "JB Imobiliária",
  nomeCurto: "JB",
  razaoSocial: null as string | null,
  creci: null as string | null, // ex.: "CRECI/RS 12345-J"

  slogan: "Imóveis para comprar e alugar no noroeste do RS",
  descricao:
    "Imobiliária do noroeste do Rio Grande do Sul. Casas, apartamentos e terrenos para comprar e alugar, com atendimento direto pelo WhatsApp.",

  regiao: "Noroeste do Rio Grande do Sul",
  /** Para o meio da frase: "imóveis no noroeste do Rio Grande do Sul" */
  regiaoNaFrase: "noroeste do Rio Grande do Sul",
  cidadeSede: null as string | null, // ex.: "Santo Cristo"
  uf: "RS",
  endereco: null as null | {
    rua: string;
    bairro: string;
    cep: string;
    lat?: number;
    lng?: number;
  },
  horario: null as string | null, // ex.: "Seg a sex, 8h às 18h; sáb, 8h às 12h"

  whatsapp: "5555999234969", // DDI + DDD + número, só dígitos
  telefoneExibicao: "(55) 99923-4969",
  email: "jbtransacoesimobiliarias@gmail.com",
  instagram: "jbimobiliaria",

  formasPagamento: ["PIX", "Boleto bancário"],
};

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://front-jb-imobiliaria.vercel.app").replace(
  /\/$/,
  ""
);

export const instagramUrl = `https://www.instagram.com/${empresa.instagram}/`;

export function whatsappUrl(mensagem?: string) {
  const texto = mensagem || "Olá! Vim pelo site da JB Imobiliária e gostaria de atendimento.";
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const localizacaoTexto = empresa.cidadeSede
  ? `${empresa.cidadeSede}, ${empresa.uf}`
  : empresa.regiao;
