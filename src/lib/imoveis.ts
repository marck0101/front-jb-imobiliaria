import type { FiltrosImoveis, Finalidade, Imovel, TipoImovel } from "@/types/imovel";
import { imoveis as reais } from "@/data/imoveis";
import { exemplos } from "@/data/exemplos";

// Camada de acesso aos imóveis. HOJE lê os arquivos em src/data; QUANDO o
// backend existir, só este arquivo muda (fetch na API), o resto do site não.

const mostrarExemplos = process.env.JB_MOSTRAR_EXEMPLOS === "1";

export const TIPOS: Record<TipoImovel, { singular: string; plural: string }> = {
  casa: { singular: "Casa", plural: "Casas" },
  apartamento: { singular: "Apartamento", plural: "Apartamentos" },
  sobrado: { singular: "Sobrado", plural: "Sobrados" },
  kitnet: { singular: "Kitnet", plural: "Kitnets" },
  terreno: { singular: "Terreno", plural: "Terrenos" },
  "sala-comercial": { singular: "Sala comercial", plural: "Salas comerciais" },
  pavilhao: { singular: "Pavilhão", plural: "Pavilhões" },
  "sitio-chacara": { singular: "Sítio / chácara", plural: "Sítios e chácaras" },
};

export const FINALIDADES: Record<Finalidade, { rotulo: string; acao: string; rota: string }> = {
  venda: { rotulo: "Venda", acao: "Comprar", rota: "/comprar" },
  aluguel: { rotulo: "Aluguel", acao: "Alugar", rota: "/alugar" },
};

export const STATUS_ROTULO: Record<Imovel["status"], string> = {
  disponivel: "Disponível",
  reservado: "Reservado",
  vendido: "Vendido",
  alugado: "Alugado",
};

function todos(): Imovel[] {
  return mostrarExemplos ? [...reais, ...exemplos] : reais;
}

// Vendido/alugado sai da vitrine (a página do imóvel continua acessível pelo link)
function visiveis(): Imovel[] {
  return todos().filter((i) => i.status === "disponivel" || i.status === "reservado");
}

export async function listarImoveis(filtros: FiltrosImoveis = {}): Promise<Imovel[]> {
  let lista = visiveis();
  if (filtros.finalidade) lista = lista.filter((i) => i.finalidade === filtros.finalidade);
  if (filtros.tipo) lista = lista.filter((i) => i.tipo === filtros.tipo);
  if (filtros.cidade) lista = lista.filter((i) => i.endereco.cidade === filtros.cidade);
  if (filtros.quartos) lista = lista.filter((i) => (i.quartos || 0) >= filtros.quartos!);
  if (filtros.precoMax) lista = lista.filter((i) => i.preco > 0 && i.preco <= filtros.precoMax!);

  const ordem = filtros.ordem || "recentes";
  return [...lista].sort((a, b) => {
    if (ordem === "menor-preco") return (a.preco || Infinity) - (b.preco || Infinity);
    if (ordem === "maior-preco") return b.preco - a.preco;
    return b.publicadoEm.localeCompare(a.publicadoEm);
  });
}

export async function imoveisEmDestaque(limite = 6): Promise<Imovel[]> {
  const lista = await listarImoveis();
  const destaques = lista.filter((i) => i.destaque);
  return (destaques.length ? destaques : lista).slice(0, limite);
}

export async function buscarImovel(slug: string): Promise<Imovel | null> {
  return todos().find((i) => i.slug === slug) || null;
}

export async function todosOsSlugs(): Promise<string[]> {
  return todos().map((i) => i.slug);
}

export async function cidadesDisponiveis(): Promise<string[]> {
  const cidades = new Set(visiveis().map((i) => i.endereco.cidade));
  return [...cidades].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export async function imoveisSemelhantes(imovel: Imovel, limite = 3): Promise<Imovel[]> {
  return visiveis()
    .filter((i) => i.id !== imovel.id && i.finalidade === imovel.finalidade)
    .sort((a, b) => Number(b.endereco.cidade === imovel.endereco.cidade) - Number(a.endereco.cidade === imovel.endereco.cidade))
    .slice(0, limite);
}

// --- leitura segura dos filtros vindos da URL ---------------------------

const TIPOS_VALIDOS = Object.keys(TIPOS) as TipoImovel[];

export function lerFiltros(params: Record<string, string | string[] | undefined>): FiltrosImoveis {
  const um = (k: string) => {
    const v = params[k];
    return Array.isArray(v) ? v[0] : v;
  };
  const finalidade = um("finalidade");
  const tipo = um("tipo");
  const ordem = um("ordem");
  const quartos = Number(um("quartos"));
  const precoMax = Number(um("precoMax"));
  return {
    finalidade: finalidade === "venda" || finalidade === "aluguel" ? finalidade : undefined,
    tipo: TIPOS_VALIDOS.includes(tipo as TipoImovel) ? (tipo as TipoImovel) : undefined,
    cidade: um("cidade") || undefined,
    quartos: quartos > 0 && quartos < 10 ? quartos : undefined,
    precoMax: precoMax > 0 ? precoMax : undefined,
    ordem: ordem === "menor-preco" || ordem === "maior-preco" ? ordem : undefined,
  };
}
