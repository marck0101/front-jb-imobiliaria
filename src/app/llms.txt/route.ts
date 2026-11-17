import { empresa, instagramUrl, siteUrl } from "@/config/empresa";
import { listarImoveis, TIPOS } from "@/lib/imoveis";
import { bairroCidade, preco, resumo } from "@/lib/formato";
import { perguntasFrequentes } from "@/data/conteudo";

// /llms.txt: resumo do site em texto puro para assistentes de IA (GEO).
// Formato da proposta llmstxt.org: título, resumo, seções com links.
export const dynamic = "force-static";

export async function GET() {
  const e = empresa;
  const imoveis = (await listarImoveis()).filter((i) => !i.exemplo);

  const linhas = [
    `# ${e.nome}`,
    "",
    `> ${e.descricao}`,
    "",
    `- Região de atuação: ${e.cidadeSede ? `${e.cidadeSede} e ` : ""}${e.regiao}`,
    e.endereco ? `- Endereço: ${e.endereco.rua}, ${e.endereco.bairro}, ${e.cidadeSede}/${e.uf}` : null,
    e.creci ? `- Registro: ${e.creci}` : null,
    `- WhatsApp: ${e.telefoneExibicao} (https://wa.me/${e.whatsapp})`,
    `- E-mail: ${e.email}`,
    `- Instagram: ${instagramUrl}`,
    `- Formas de pagamento: ${e.formasPagamento.join(", ")}`,
    "",
    "## Páginas",
    "",
    `- [Imóveis à venda](${siteUrl}/comprar)`,
    `- [Imóveis para alugar](${siteUrl}/alugar)`,
    `- [Anunciar um imóvel](${siteUrl}/anunciar)`,
    `- [Sobre a imobiliária](${siteUrl}/sobre)`,
    `- [Contato](${siteUrl}/contato)`,
    "",
    "## Imóveis disponíveis",
    "",
    ...(imoveis.length
      ? imoveis.map(
          (i) =>
            `- [${i.titulo}](${siteUrl}/imoveis/${i.slug}): ${TIPOS[i.tipo].singular}, ${i.finalidade === "venda" ? "venda" : "aluguel"}, ${bairroCidade(i)}, ${resumo(i)}, ${preco(i)} (código ${i.codigo})`
        )
      : ["- A vitrine está sendo atualizada. Consulte pelo WhatsApp."]),
    "",
    "## Perguntas frequentes",
    "",
    ...perguntasFrequentes.flatMap((p) => [`### ${p.pergunta}`, "", p.resposta, ""]),
  ].filter((l) => l !== null);

  return new Response(linhas.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
