import Trilha from "@/components/Trilha";
import ChamadaContato from "@/components/ChamadaContato";
import { empresa, instagramUrl } from "@/config/empresa";
import { metadados } from "@/lib/seo";
import styles from "@/components/PaginaTexto.module.css";

export const metadata = metadados({
  titulo: "Sobre a JB Imobiliária",
  descricao: `Conheça a ${empresa.nome}: imobiliária do ${empresa.regiaoNaFrase} que trabalha com compra, venda e locação de imóveis.`,
  caminho: "/sobre",
});

// TEXTO PROVISÓRIO: descreve só o que se sabe (região, serviços, canais).
// Completar com a história da JB, ano de fundação, equipe e CRECI quando o
// cliente enviar. Ver CLAUDE.md, seção "Pendências do cliente".
export default function Sobre() {
  const e = empresa;
  return (
    <main>
      <section className={styles.topo}>
        <div className="container">
          <Trilha itens={[{ nome: "Início", caminho: "/" }, { nome: "Sobre" }]} />
          <h1>Sobre a {e.nome}</h1>
          <p className="apoio">Imobiliária do {e.regiaoNaFrase}, com atendimento próximo e direto.</p>
        </div>
      </section>

      <section className={`container ${styles.corpo}`}>
        <div className={styles.texto}>
          <p>
            A {e.nome} trabalha com compra, venda e locação de imóveis no {e.regiaoNaFrase}
            {e.cidadeSede ? `, com sede em ${e.cidadeSede}` : ""}. Casas, apartamentos, terrenos e imóveis comerciais.
          </p>
          <p>
            O atendimento é direto: você fala com quem conhece o imóvel e a região, pelo WhatsApp {e.telefoneExibicao},
            pelo e-mail {e.email} ou pelo Instagram{" "}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              @{e.instagram}
            </a>
            .
          </p>

          <h2>O que a JB faz</h2>
          <ul>
            <li>Venda de imóveis: anúncio, visitas, propostas e documentação.</li>
            <li>Locação: anúncio, seleção de interessados e contrato.</li>
            <li>Busca sob medida: você diz o que procura e avisamos quando aparece.</li>
          </ul>

          {e.creci && (
            <>
              <h2>Registro</h2>
              <p>{e.creci}</p>
            </>
          )}
        </div>
      </section>

      <ChamadaContato titulo="Vamos conversar?" texto="Comprar, vender ou alugar: conte o que você precisa." />
    </main>
  );
}
