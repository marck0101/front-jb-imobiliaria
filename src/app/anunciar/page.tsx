import Trilha from "@/components/Trilha";
import FormWhatsapp from "@/components/FormWhatsapp";
import { empresa } from "@/config/empresa";
import { metadados } from "@/lib/seo";
import styles from "@/components/PaginaTexto.module.css";

export const metadata = metadados({
  titulo: "Anunciar meu imóvel",
  descricao: `Quer vender ou alugar seu imóvel no ${empresa.regiaoNaFrase}? A ${empresa.nome} avalia, anuncia e acompanha até o contrato. Comece pelo WhatsApp.`,
  caminho: "/anunciar",
});

const ETAPAS = [
  { titulo: "Você conta sobre o imóvel", texto: "Tipo, bairro e cidade, se é para vender ou alugar e algumas fotos." },
  { titulo: "Visitamos e avaliamos", texto: "Combinamos uma visita para conhecer o imóvel e sugerir o valor de anúncio." },
  { titulo: "Anunciamos", texto: "Fotos, descrição e valor no site e nas redes da JB, com código próprio." },
  { titulo: "Acompanhamos até o contrato", texto: "Agendamos as visitas, levamos as propostas e cuidamos da documentação." },
];

export default function Anunciar() {
  return (
    <main>
      <section className={styles.topo}>
        <div className="container">
          <Trilha itens={[{ nome: "Início", caminho: "/" }, { nome: "Anunciar imóvel" }]} />
          <h1>Anuncie seu imóvel com a JB</h1>
          <p className="apoio">
            Vai vender ou alugar? Mande os dados básicos pelo formulário: ele abre o WhatsApp com a mensagem pronta.
          </p>
        </div>
      </section>

      <section className={`container ${styles.corpo}`}>
        <div className={styles.duasColunas}>
          <div className={styles.texto}>
            <h2>Como funciona</h2>
            <ol className={styles.lista}>
              {ETAPAS.map((etapa) => (
                <li key={etapa.titulo}>
                  <strong>{etapa.titulo}</strong>
                  <p>{etapa.texto}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.cartao}>
            <h2>Dados do imóvel</h2>
            <FormWhatsapp tipo="anunciar" />
          </div>
        </div>
      </section>
    </main>
  );
}
