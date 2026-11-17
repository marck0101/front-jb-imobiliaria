import type { Imovel } from "@/types/imovel";
import ImovelCard from "./ImovelCard";
import { IconeWhatsapp } from "./Icones";
import { whatsappUrl } from "@/config/empresa";
import styles from "./Vitrine.module.css";

// Grade de imóveis. Sem imóvel: em vez de página vazia, convida a contar o que
// procura (a JB recebe o pedido e avisa quando entrar algo).
export default function Vitrine({
  imoveis,
  vazioTitulo = "A vitrine está sendo atualizada",
  vazioTexto = "Novos imóveis entram toda semana. Conte pelo WhatsApp o que você procura (tipo, cidade e faixa de valor) e avisamos quando aparecer.",
}: {
  imoveis: Imovel[];
  vazioTitulo?: string;
  vazioTexto?: string;
}) {
  if (!imoveis.length) {
    return (
      <div className={styles.vazio}>
        <h3>{vazioTitulo}</h3>
        <p>{vazioTexto}</p>
        <a
          href={whatsappUrl("Olá! Estou procurando um imóvel e gostaria de ser avisado quando houver opções.")}
          className="btn btn--primario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconeWhatsapp /> Contar o que procuro
        </a>
      </div>
    );
  }

  return (
    <ul className={styles.grade}>
      {imoveis.map((imovel, i) => (
        <li key={imovel.id}>
          <ImovelCard imovel={imovel} prioridade={i < 3} />
        </li>
      ))}
    </ul>
  );
}
