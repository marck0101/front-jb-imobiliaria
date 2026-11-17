import Link from "next/link";
import Logo from "./Logo";
import { IconeEmail, IconeInstagram, IconeLocal, IconeWhatsapp } from "./Icones";
import { empresa, instagramUrl, localizacaoTexto, whatsappUrl } from "@/config/empresa";
import styles from "./Footer.module.css";

export default function Footer() {
  const e = empresa;
  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.grade}`}>
        <div className={styles.marca}>
          <Logo claro />
          <p>{e.descricao}</p>
          {e.creci && <p className={styles.creci}>{e.creci}</p>}
        </div>

        <nav aria-label="Imóveis">
          <h2 className={styles.titulo}>Imóveis</h2>
          <ul>
            <li><Link href="/comprar">Imóveis à venda</Link></li>
            <li><Link href="/alugar">Imóveis para alugar</Link></li>
            <li><Link href="/imoveis">Todos os imóveis</Link></li>
            <li><Link href="/anunciar">Anunciar meu imóvel</Link></li>
          </ul>
        </nav>

        <nav aria-label="A JB">
          <h2 className={styles.titulo}>A JB</h2>
          <ul>
            <li><Link href="/sobre">Sobre a imobiliária</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/privacidade">Privacidade</Link></li>
          </ul>
        </nav>

        <address className={styles.contato}>
          <h2 className={styles.titulo}>Atendimento</h2>
          <ul>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <IconeWhatsapp tamanho={18} /> {e.telefoneExibicao}
              </a>
            </li>
            <li>
              <a href={`mailto:${e.email}`}>
                <IconeEmail tamanho={18} /> {e.email}
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <IconeInstagram tamanho={18} /> @{e.instagram}
              </a>
            </li>
            <li>
              <span>
                <IconeLocal tamanho={18} />
                {e.endereco ? `${e.endereco.rua}, ${e.endereco.bairro}, ${localizacaoTexto}` : localizacaoTexto}
              </span>
            </li>
            {e.horario && <li className={styles.horario}>{e.horario}</li>}
          </ul>
        </address>
      </div>

      <div className={`container ${styles.base}`}>
        <p>
          © {new Date().getFullYear()} {e.razaoSocial || e.nome}. Todos os direitos reservados.
        </p>
        <p>
          Site por{" "}
          <a href="https://marck0101.com.br" target="_blank" rel="noopener noreferrer">
            Marcos Henrique Corrêa
          </a>
        </p>
      </div>
    </footer>
  );
}
