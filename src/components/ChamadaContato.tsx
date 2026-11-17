import { IconeWhatsapp } from "./Icones";
import { empresa, whatsappUrl } from "@/config/empresa";
import styles from "./ChamadaContato.module.css";

// Faixa de chamada para o atendimento (fim das páginas)
export default function ChamadaContato({
  titulo = "Não achou o que procura?",
  texto = "Conte o que você precisa. Muitos imóveis chegam até nós antes de ir para o site.",
  mensagem,
}: {
  titulo?: string;
  texto?: string;
  mensagem?: string;
}) {
  return (
    <section className={styles.faixa} aria-labelledby="chamada-contato">
      <div className={`container ${styles.interno}`}>
        <div>
          <h2 id="chamada-contato">{titulo}</h2>
          <p>{texto}</p>
        </div>
        <div className={styles.acoes}>
          <a href={whatsappUrl(mensagem)} className="btn btn--claro" target="_blank" rel="noopener noreferrer">
            <IconeWhatsapp /> {empresa.telefoneExibicao}
          </a>
        </div>
      </div>
    </section>
  );
}
