import type { FiltrosImoveis } from "@/types/imovel";
import { TIPOS } from "@/lib/imoveis";
import styles from "./Busca.module.css";

// Formulário GET comum: funciona sem JavaScript, e o resultado tem URL própria
// (/imoveis?finalidade=venda&tipo=casa...), que dá para compartilhar e indexar.
// `completa` mostra quartos, preço máximo e ordem (página de listagem).

const FAIXAS_VENDA = [150000, 250000, 400000, 600000, 1000000];
const FAIXAS_ALUGUEL = [800, 1200, 1800, 2500, 4000];

const brl = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

export default function Busca({
  cidades,
  valores = {},
  completa = false,
  acao = "/imoveis",
  fixarFinalidade = false,
}: {
  cidades: string[];
  valores?: FiltrosImoveis;
  completa?: boolean;
  acao?: string;
  fixarFinalidade?: boolean;
}) {
  const faixas = valores.finalidade === "aluguel" ? FAIXAS_ALUGUEL : FAIXAS_VENDA;

  return (
    <form action={acao} method="get" className={`${styles.busca} ${completa ? styles.completa : ""}`} role="search">
      {fixarFinalidade ? (
        <input type="hidden" name="finalidade" value={valores.finalidade} />
      ) : (
        <label className={styles.campo}>
          <span>Quero</span>
          <select name="finalidade" defaultValue={valores.finalidade || ""}>
            <option value="">Comprar ou alugar</option>
            <option value="venda">Comprar</option>
            <option value="aluguel">Alugar</option>
          </select>
        </label>
      )}

      <label className={styles.campo}>
        <span>Tipo</span>
        <select name="tipo" defaultValue={valores.tipo || ""}>
          <option value="">Todos os tipos</option>
          {Object.entries(TIPOS).map(([valor, t]) => (
            <option key={valor} value={valor}>
              {t.singular}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.campo}>
        <span>Cidade</span>
        <select name="cidade" defaultValue={valores.cidade || ""}>
          <option value="">Todas as cidades</option>
          {cidades.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      {completa && (
        <>
          <label className={styles.campo}>
            <span>Quartos</span>
            <select name="quartos" defaultValue={valores.quartos ? String(valores.quartos) : ""}>
              <option value="">Qualquer</option>
              {[1, 2, 3, 4].map((q) => (
                <option key={q} value={q}>
                  {q}+ {q === 1 ? "quarto" : "quartos"}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.campo}>
            <span>Até</span>
            <select name="precoMax" defaultValue={valores.precoMax ? String(valores.precoMax) : ""}>
              <option value="">Qualquer valor</option>
              {faixas.map((v) => (
                <option key={v} value={v}>
                  {brl(v)}
                  {valores.finalidade === "aluguel" ? "/mês" : ""}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.campo}>
            <span>Ordenar</span>
            <select name="ordem" defaultValue={valores.ordem || ""}>
              <option value="">Mais recentes</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </label>
        </>
      )}

      <button type="submit" className={`btn btn--primario ${styles.botao}`}>
        Buscar imóveis
      </button>
    </form>
  );
}
