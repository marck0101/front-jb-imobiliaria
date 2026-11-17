import Image from "next/image";
import Link from "next/link";
import type { Imovel } from "@/types/imovel";
import { FINALIDADES, STATUS_ROTULO, TIPOS } from "@/lib/imoveis";
import { area, bairroCidade, preco } from "@/lib/formato";
import { IconeArea, IconeBanho, IconeCama, IconeCarro, IconeLocal } from "./Icones";
import styles from "./ImovelCard.module.css";

export default function ImovelCard({ imovel, prioridade = false }: { imovel: Imovel; prioridade?: boolean }) {
  const capa = imovel.fotos[0];
  const svg = capa?.url.endsWith(".svg");
  const m2 = imovel.areaUtil || imovel.areaTotal;

  return (
    <article className={styles.card}>
      <Link href={`/imoveis/${imovel.slug}`} className={styles.link}>
        <div className={styles.foto}>
          {capa ? (
            <Image
              src={capa.url}
              alt={capa.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              priority={prioridade}
              unoptimized={svg}
            />
          ) : (
            <div className={styles.semFoto} aria-hidden="true" />
          )}
          <div className={styles.selos}>
            <span className={`${styles.selo} ${styles[imovel.finalidade]}`}>{FINALIDADES[imovel.finalidade].rotulo}</span>
            {imovel.status !== "disponivel" && <span className={styles.selo}>{STATUS_ROTULO[imovel.status]}</span>}
            {imovel.exemplo && <span className={`${styles.selo} ${styles.exemplo}`}>Exemplo</span>}
          </div>
        </div>

        <div className={styles.corpo}>
          <p className={styles.tipo}>
            {TIPOS[imovel.tipo].singular} · <span>{imovel.codigo}</span>
          </p>
          <h3 className={styles.titulo}>{imovel.titulo}</h3>
          <p className={styles.local}>
            <IconeLocal tamanho={16} /> {bairroCidade(imovel)}
          </p>

          <ul className={styles.dados} aria-label="Características principais">
            {imovel.quartos ? (
              <li title="Quartos">
                <IconeCama tamanho={18} /> {imovel.quartos} <span className="sr-only">quartos</span>
              </li>
            ) : null}
            {imovel.banheiros ? (
              <li title="Banheiros">
                <IconeBanho tamanho={18} /> {imovel.banheiros} <span className="sr-only">banheiros</span>
              </li>
            ) : null}
            {imovel.vagas ? (
              <li title="Vagas de garagem">
                <IconeCarro tamanho={18} /> {imovel.vagas} <span className="sr-only">vagas</span>
              </li>
            ) : null}
            {m2 ? (
              <li title={imovel.areaUtil ? "Área útil" : "Área total"}>
                <IconeArea tamanho={18} /> {area(m2)}
              </li>
            ) : null}
          </ul>

          <p className={styles.preco}>{preco(imovel)}</p>
        </div>
      </Link>
    </article>
  );
}
