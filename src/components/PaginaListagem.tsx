import Busca from "./Busca";
import Vitrine from "./Vitrine";
import Trilha from "./Trilha";
import ChamadaContato from "./ChamadaContato";
import JsonLd from "./JsonLd";
import type { Finalidade } from "@/types/imovel";
import { cidadesDisponiveis, lerFiltros, listarImoveis, TIPOS } from "@/lib/imoveis";
import { schemaLista, schemaTrilha } from "@/lib/seo";
import styles from "./PaginaListagem.module.css";

export type ParamsBusca = Promise<Record<string, string | string[] | undefined>>;

// /imoveis, /comprar e /alugar. `finalidade` fixa vem da rota (comprar/alugar).
export default async function PaginaListagem({
  searchParams,
  finalidade,
  titulo,
  descricao,
  caminho,
}: {
  searchParams: ParamsBusca;
  finalidade?: Finalidade;
  titulo: string;
  descricao: string;
  caminho: string;
}) {
  const filtros = { ...lerFiltros(await searchParams), ...(finalidade ? { finalidade } : {}) };
  const [lista, cidades] = await Promise.all([listarImoveis(filtros), cidadesDisponiveis()]);

  const recorte = [filtros.tipo && TIPOS[filtros.tipo].plural, filtros.cidade && `em ${filtros.cidade}`]
    .filter(Boolean)
    .join(" ");
  const temFiltro = Boolean(filtros.tipo || filtros.cidade || filtros.quartos || filtros.precoMax);

  return (
    <main>
      <section className={styles.topo}>
        <div className="container">
          <Trilha itens={[{ nome: "Início", caminho: "/" }, { nome: titulo }]} />
          <h1 className={styles.titulo}>{titulo}</h1>
          <p className="apoio">{descricao}</p>
        </div>
      </section>

      <section className={`container ${styles.corpo}`} aria-label="Resultados">
        <Busca cidades={cidades} valores={filtros} completa acao={caminho} fixarFinalidade={Boolean(finalidade)} />

        <p className={styles.contagem} aria-live="polite">
          {lista.length === 0
            ? "Nenhum imóvel encontrado"
            : `${lista.length} ${lista.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}`}
          {recorte && <span> · {recorte}</span>}
        </p>

        <Vitrine
          imoveis={lista}
          vazioTitulo={temFiltro ? "Nenhum imóvel com esses filtros" : undefined}
          vazioTexto={
            temFiltro
              ? "Tente tirar algum filtro ou conte pelo WhatsApp o que você procura. Avisamos quando entrar algo parecido."
              : undefined
          }
        />
      </section>

      <ChamadaContato />
      <JsonLd dados={schemaLista(titulo, caminho, lista)} />
      <JsonLd
        dados={{
          "@context": "https://schema.org",
          ...schemaTrilha([
            { nome: "Início", caminho: "/" },
            { nome: titulo, caminho },
          ]),
        }}
      />
    </main>
  );
}
