import Link from "next/link";
import Busca from "@/components/Busca";
import Vitrine from "@/components/Vitrine";
import Faq from "@/components/Faq";
import ChamadaContato from "@/components/ChamadaContato";
import JsonLd from "@/components/JsonLd";
import { IconeCasa, IconeChave, IconePlaca, IconeSeta, IconeWhatsapp } from "@/components/Icones";
import { cidadesDisponiveis, imoveisEmDestaque } from "@/lib/imoveis";
import { schemaFaq } from "@/lib/seo";
import { perguntasFrequentes, passosAtendimento } from "@/data/conteudo";
import { empresa, localizacaoTexto, whatsappUrl } from "@/config/empresa";
import styles from "./page.module.css";

const CAMINHOS = [
  {
    href: "/comprar",
    icone: IconeCasa,
    titulo: "Quero comprar",
    texto: "Casas, apartamentos e terrenos à venda, com valor, fotos e localização em cada anúncio.",
  },
  {
    href: "/alugar",
    icone: IconeChave,
    titulo: "Quero alugar",
    texto: "Imóveis residenciais e comerciais para alugar, com o valor mensal e o que está incluso.",
  },
  {
    href: "/anunciar",
    icone: IconePlaca,
    titulo: "Quero anunciar",
    texto: "Vai vender ou alugar o seu imóvel? A JB avalia, anuncia e acompanha até o contrato.",
  },
];

export default async function Inicio() {
  const [destaques, cidades] = await Promise.all([imoveisEmDestaque(6), cidadesDisponiveis()]);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInterno}`}>
          <p className="rotulo">{localizacaoTexto}</p>
          <h1 className={styles.heroTitulo}>{empresa.slogan}</h1>
          <p className={styles.heroTexto}>
            Encontre casa, apartamento ou terreno e fale direto com a {empresa.nome} pelo WhatsApp. Atendimento de quem
            conhece a região.
          </p>
          <div className={styles.heroBusca}>
            <Busca cidades={cidades} />
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="destaques">
        <div className="container">
          <div className={styles.cabecalhoLinha}>
            <div className="cabecalho-secao">
              <p className="rotulo">Vitrine</p>
              <h2 id="destaques">Imóveis em destaque</h2>
            </div>
            {destaques.length > 0 && (
              <Link href="/imoveis" className={styles.verTodos}>
                Ver todos os imóveis <IconeSeta tamanho={18} />
              </Link>
            )}
          </div>
          <Vitrine imoveis={destaques} />
        </div>
      </section>

      <section className="secao secao--branca" aria-labelledby="como-ajudamos">
        <div className="container">
          <div className="cabecalho-secao cabecalho-secao--centro">
            <p className="rotulo">Como podemos ajudar</p>
            <h2 id="como-ajudamos">Comprar, alugar ou anunciar</h2>
          </div>
          <ul className={styles.caminhos}>
            {CAMINHOS.map(({ href, icone: Icone, titulo, texto }) => (
              <li key={href}>
                <Link href={href} className={styles.caminho}>
                  <span className={styles.caminhoIcone}>
                    <Icone tamanho={26} />
                  </span>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                  <span className={styles.caminhoSeta}>
                    Ver opções <IconeSeta tamanho={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="secao" aria-labelledby="como-funciona">
        <div className="container">
          <div className="cabecalho-secao">
            <p className="rotulo">Passo a passo</p>
            <h2 id="como-funciona">Como funciona o atendimento</h2>
            <p className="apoio">Do primeiro contato à entrega das chaves, sem complicação.</p>
          </div>
          <ol className={styles.passos}>
            {passosAtendimento.map((p, i) => (
              <li key={p.titulo}>
                <span className={styles.numero} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <a href={whatsappUrl()} className="btn btn--primario" target="_blank" rel="noopener noreferrer">
            <IconeWhatsapp /> Começar pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="secao secao--branca" aria-labelledby="duvidas">
        <div className="container">
          <div className="cabecalho-secao cabecalho-secao--centro">
            <p className="rotulo">Dúvidas</p>
            <h2 id="duvidas">Perguntas frequentes</h2>
          </div>
          <Faq perguntas={perguntasFrequentes} />
        </div>
      </section>

      <ChamadaContato />
      <JsonLd dados={schemaFaq(perguntasFrequentes)} />
    </main>
  );
}
