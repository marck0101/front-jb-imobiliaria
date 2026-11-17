import Trilha from "@/components/Trilha";
import FormWhatsapp from "@/components/FormWhatsapp";
import { IconeEmail, IconeInstagram, IconeLocal, IconeWhatsapp } from "@/components/Icones";
import { empresa, instagramUrl, localizacaoTexto, whatsappUrl } from "@/config/empresa";
import { metadados } from "@/lib/seo";
import styles from "@/components/PaginaTexto.module.css";

export const metadata = metadados({
  titulo: "Contato",
  descricao: `Fale com a ${empresa.nome} pelo WhatsApp ${empresa.telefoneExibicao}, e-mail ou Instagram @${empresa.instagram}. Atendimento no ${empresa.regiaoNaFrase}.`,
  caminho: "/contato",
});

export default function Contato() {
  const e = empresa;
  return (
    <main>
      <section className={styles.topo}>
        <div className="container">
          <Trilha itens={[{ nome: "Início", caminho: "/" }, { nome: "Contato" }]} />
          <h1>Fale com a JB</h1>
          <p className="apoio">O jeito mais rápido é o WhatsApp. Respondemos também por e-mail e Instagram.</p>
        </div>
      </section>

      <section className={`container ${styles.corpo}`}>
        <div className={styles.duasColunas}>
          <div className={styles.cartao}>
            <h2>Mande sua mensagem</h2>
            <FormWhatsapp tipo="contato" />
          </div>

          <div className={styles.canais}>
            <a href={whatsappUrl()} className={styles.canal} target="_blank" rel="noopener noreferrer">
              <IconeWhatsapp tamanho={24} />
              <span>
                <small>WhatsApp</small>
                {e.telefoneExibicao}
              </span>
            </a>
            <a href={`mailto:${e.email}`} className={styles.canal}>
              <IconeEmail tamanho={24} />
              <span>
                <small>E-mail</small>
                {e.email}
              </span>
            </a>
            <a href={instagramUrl} className={styles.canal} target="_blank" rel="noopener noreferrer">
              <IconeInstagram tamanho={24} />
              <span>
                <small>Instagram</small>@{e.instagram}
              </span>
            </a>
            <div className={styles.canal}>
              <IconeLocal tamanho={24} />
              <span>
                <small>{e.endereco ? "Endereço" : "Região de atendimento"}</small>
                {e.endereco ? `${e.endereco.rua}, ${e.endereco.bairro}, ${localizacaoTexto}` : localizacaoTexto}
                {e.horario && <small>{e.horario}</small>}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
