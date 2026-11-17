import type { Imovel } from "@/types/imovel";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function preco(imovel: Pick<Imovel, "preco" | "finalidade">) {
  if (!imovel.preco) return "Consulte";
  return imovel.finalidade === "aluguel" ? `${brl.format(imovel.preco)}/mês` : brl.format(imovel.preco);
}

export function moeda(valor?: number) {
  return valor ? brl.format(valor) : null;
}

export function area(m2?: number) {
  return m2 ? `${new Intl.NumberFormat("pt-BR").format(m2)} m²` : null;
}

export function plural(n: number, um: string, varios: string) {
  return `${n} ${n === 1 ? um : varios}`;
}

export function dataCurta(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function bairroCidade(imovel: Imovel) {
  const { bairro, cidade, uf } = imovel.endereco;
  return `${bairro}, ${cidade}/${uf}`;
}

/** Resumo curto: "3 quartos · 142 m² · 2 vagas" */
export function resumo(imovel: Imovel) {
  return [
    imovel.quartos ? plural(imovel.quartos, "quarto", "quartos") : null,
    area(imovel.areaUtil || imovel.areaTotal),
    imovel.vagas ? plural(imovel.vagas, "vaga", "vagas") : null,
  ]
    .filter(Boolean)
    .join(" · ");
}

export function paragrafos(texto: string) {
  return texto.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}
