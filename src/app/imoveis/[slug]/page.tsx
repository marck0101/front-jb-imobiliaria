import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Galeria from "@/components/Galeria";
import Trilha from "@/components/Trilha";
import Vitrine from "@/components/Vitrine";
import JsonLd from "@/components/JsonLd";
import { IconeArea, IconeBanho, IconeCama, IconeCarro, IconeLocal, IconeWhatsapp } from "@/components/Icones";
import { buscarImovel, FINALIDADES, imoveisSemelhantes, STATUS_ROTULO, TIPOS, todosOsSlugs } from "@/lib/imoveis";
import { area, bairroCidade, dataCurta, moeda, paragrafos, preco, resumo } from "@/lib/formato";
import { metadados, schemaImovel } from "@/lib/seo";
import { empresa, siteUrl, whatsappUrl } from "@/config/empresa";
import styles from "./imovel.module.css";

type Params = Promise<{ slug: string }>;

// Página de cada imóvel gerada no build (HTML pronto para o Google e IAs).
export async function generateStaticParams() {
  return (await todosOsSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const imovel = await buscarImovel((await params).slug);
  if (!imovel) return {};
  const titulo = `${imovel.titulo} · ${bairroCidade(imovel)}`;
  const descricao = `${TIPOS[imovel.tipo].singular} para ${imovel.finalidade === "venda" ? "comprar" : "alugar"} em ${bairroCidade(imovel)}. ${resumo(imovel)}. ${preco(imovel)}. Código ${imovel.codigo}.`;
  const capa = imovel.fotos[0]?.url;
  return metadados({
    titulo,
    descricao,
    caminho: `/imoveis/${imovel.slug}`,
    imagem: capa && !capa.endsWith(".svg") ? (capa.startsWith("http") ? capa : `${siteUrl}${capa}`) : undefined,
    // Exemplo nunca é indexado
    semIndice: Boolean(imovel.exemplo),
  });
}

export default async function PaginaImovel({ params }: { params: Params }) {
  const imovel = await buscarImovel((await params).slug);
  if (!imovel) notFound();

  const semelhantes = await imoveisSemelhantes(imovel);
  const fin = FINALIDADES[imovel.finalidade];
  const indisponivel = imovel.status === "vendido" || imovel.status === "alugado";
  const mensagem = `Olá! Tenho interesse no imóvel ${imovel.codigo} (${imovel.titulo}), em ${bairroCidade(imovel)}. Ele ainda está disponível?`;

  const ficha = [
    ["Tipo", TIPOS[imovel.tipo].singular],
    ["Finalidade", fin.rotulo],
    ["Área útil", area(imovel.areaUtil)],
    ["Área total", area(imovel.areaTotal)],
    ["Quartos", imovel.quartos],
    ["Suítes", imovel.suites],
    ["Banheiros", imovel.banheiros],
    ["Vagas", imovel.vagas],
    ["Condomínio", imovel.condominio ? `${moeda(imovel.condominio)}/mês` : null],
    ["IPTU", imovel.iptu ? `${moeda(imovel.iptu)}/ano` : null],
    ["Código", imovel.codigo],
  ].filter(([, v]) => v !== null && v !== undefined && v !== 0) as [string, string | number][];

  const { endereco } = imovel;
  const mapa =
    endereco.lat && endereco.lng
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${endereco.lng - 0.01},${endereco.lat - 0.006},${endereco.lng + 0.01},${endereco.lat + 0.006}&layer=mapnik&marker=${endereco.lat},${endereco.lng}`
      : null;

  return (
    <main>
      <div className={`container ${styles.pagina}`}>
        <Trilha
          itens={[
            { nome: "Início", caminho: "/" },
            { nome: fin.acao, caminho: fin.rota },
            { nome: imovel.titulo },
          ]}
        />

        {imovel.exemplo && (
          <p className={styles.avisoExemplo} role="note">
            Imóvel de <strong>exemplo</strong>, usado só para testar o site. Não está à venda nem para alugar.
          </p>
        )}

        <header className={styles.cabecalho}>
          <div>
            <p className={styles.selos}>
              <span className={`${styles.selo} ${styles[imovel.finalidade]}`}>{fin.rotulo}</span>
              <span className={styles.selo}>{TIPOS[imovel.tipo].singular}</span>
              {imovel.status !== "disponivel" && <span className={`${styles.selo} ${styles.status}`}>{STATUS_ROTULO[imovel.status]}</span>}
            </p>
            <h1 className={styles.titulo}>{imovel.titulo}</h1>
            <p className={styles.local}>
              <IconeLocal tamanho={18} />
              {endereco.mostrarRua && endereco.rua ? `${endereco.rua}, ` : ""}
              {bairroCidade(imovel)}
            </p>
          </div>
        </header>

        <div className={styles.grade}>
          <div className={styles.principal}>
            <Galeria fotos={imovel.fotos} titulo={imovel.titulo} />

            <ul className={styles.destaques} aria-label="Resumo do imóvel">
              {imovel.quartos ? (
                <li>
                  <IconeCama /> <strong>{imovel.quartos}</strong> {imovel.quartos === 1 ? "quarto" : "quartos"}
                  {imovel.suites ? ` (${imovel.suites} ${imovel.suites === 1 ? "suíte" : "suítes"})` : ""}
                </li>
              ) : null}
              {imovel.banheiros ? (
                <li>
                  <IconeBanho /> <strong>{imovel.banheiros}</strong> {imovel.banheiros === 1 ? "banheiro" : "banheiros"}
                </li>
              ) : null}
              {imovel.vagas ? (
                <li>
                  <IconeCarro /> <strong>{imovel.vagas}</strong> {imovel.vagas === 1 ? "vaga" : "vagas"}
                </li>
              ) : null}
              {imovel.areaUtil || imovel.areaTotal ? (
                <li>
                  <IconeArea /> <strong>{area(imovel.areaUtil || imovel.areaTotal)}</strong>
                </li>
              ) : null}
            </ul>

            <section className={styles.bloco} aria-labelledby="descricao">
              <h2 id="descricao">Sobre o imóvel</h2>
              {paragrafos(imovel.descricao).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>

            {imovel.caracteristicas.length > 0 && (
              <section className={styles.bloco} aria-labelledby="caracteristicas">
                <h2 id="caracteristicas">Características</h2>
                <ul className={styles.caracteristicas}>
                  {imovel.caracteristicas.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className={styles.bloco} aria-labelledby="ficha">
              <h2 id="ficha">Ficha do imóvel</h2>
              <dl className={styles.ficha}>
                {ficha.map(([rotulo, valor]) => (
                  <div key={rotulo}>
                    <dt>{rotulo}</dt>
                    <dd>{valor}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className={styles.bloco} aria-labelledby="localizacao">
              <h2 id="localizacao">Localização</h2>
              <p>
                {bairroCidade(imovel)}.{" "}
                {endereco.mostrarRua ? "" : "O endereço completo é informado no agendamento da visita."}
              </p>
              {mapa && (
                <iframe
                  className={styles.mapa}
                  src={mapa}
                  title={`Mapa da região de ${bairroCidade(imovel)}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}
            </section>
          </div>

          <aside className={styles.lateral} aria-label="Valor e contato">
            <div className={styles.cartao}>
              <p className={styles.precoRotulo}>{imovel.finalidade === "venda" ? "Valor de venda" : "Aluguel"}</p>
              <p className={styles.preco}>{preco(imovel)}</p>
              {(imovel.condominio || imovel.iptu) && (
                <p className={styles.custos}>
                  {imovel.condominio ? `Condomínio ${moeda(imovel.condominio)}/mês` : ""}
                  {imovel.condominio && imovel.iptu ? " · " : ""}
                  {imovel.iptu ? `IPTU ${moeda(imovel.iptu)}/ano` : ""}
                </p>
              )}

              {indisponivel ? (
                <p className={styles.indisponivel}>
                  Este imóvel já foi {imovel.status}. Fale com a gente para ver opções parecidas.
                </p>
              ) : null}

              <a href={whatsappUrl(mensagem)} className={`btn btn--primario ${styles.cta}`} target="_blank" rel="noopener noreferrer">
                <IconeWhatsapp /> {indisponivel ? "Ver opções parecidas" : "Agendar visita"}
              </a>
              <a href={`mailto:${empresa.email}?subject=${encodeURIComponent(`Imóvel ${imovel.codigo}`)}`} className={`btn btn--secundario ${styles.cta}`}>
                Enviar e-mail
              </a>

              <p className={styles.codigo}>
                Código <strong>{imovel.codigo}</strong> · atualizado em {dataCurta(imovel.atualizadoEm)}
              </p>
              {empresa.creci && <p className={styles.codigo}>{empresa.creci}</p>}
            </div>
          </aside>
        </div>
      </div>

      {semelhantes.length > 0 && (
        <section className="secao secao--branca" aria-labelledby="semelhantes">
          <div className="container">
            <div className="cabecalho-secao">
              <p className="rotulo">Veja também</p>
              <h2 id="semelhantes">Imóveis parecidos</h2>
            </div>
            <Vitrine imoveis={semelhantes} />
          </div>
        </section>
      )}

      {/* Barra fixa no celular: o botão de contato sempre à mão */}
      <div className={styles.barraMobile}>
        <div>
          <span>{fin.rotulo}</span>
          <strong>{preco(imovel)}</strong>
        </div>
        <a href={whatsappUrl(mensagem)} className="btn btn--primario" target="_blank" rel="noopener noreferrer">
          <IconeWhatsapp /> WhatsApp
        </a>
      </div>

      <JsonLd dados={schemaImovel(imovel)} />
    </main>
  );
}
