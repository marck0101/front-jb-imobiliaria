"use client";

import Image from "next/image";
import { useState } from "react";
import type { Foto } from "@/types/imovel";
import styles from "./Galeria.module.css";

// Foto grande + miniaturas. No celular, as miniaturas rolam na horizontal.
export default function Galeria({ fotos, titulo }: { fotos: Foto[]; titulo: string }) {
  const [atual, setAtual] = useState(0);
  if (!fotos.length) return <div className={styles.semFoto} aria-label="Imóvel sem fotos" />;

  const foto = fotos[atual];
  const svg = (f: Foto) => f.url.endsWith(".svg");

  function ir(delta: number) {
    setAtual((i) => (i + delta + fotos.length) % fotos.length);
  }

  return (
    <div className={styles.galeria}>
      <div className={styles.principal}>
        <Image
          key={foto.url + atual}
          src={foto.url}
          alt={foto.alt}
          fill
          priority={atual === 0}
          sizes="(max-width: 1024px) 100vw, 760px"
          unoptimized={svg(foto)}
          className={styles.imagem}
        />
        {fotos.length > 1 && (
          <>
            <button type="button" className={`${styles.seta} ${styles.esq}`} onClick={() => ir(-1)} aria-label="Foto anterior">
              ‹
            </button>
            <button type="button" className={`${styles.seta} ${styles.dir}`} onClick={() => ir(1)} aria-label="Próxima foto">
              ›
            </button>
            <span className={styles.contador} aria-live="polite">
              {atual + 1} / {fotos.length}
            </span>
          </>
        )}
      </div>

      {fotos.length > 1 && (
        <ul className={styles.miniaturas} aria-label={`Fotos de ${titulo}`}>
          {fotos.map((f, i) => (
            <li key={f.url + i}>
              <button
                type="button"
                className={styles.mini}
                onClick={() => setAtual(i)}
                aria-label={`Ver foto ${i + 1}: ${f.alt}`}
                aria-current={i === atual ? "true" : undefined}
              >
                <Image src={f.url} alt="" fill sizes="120px" unoptimized={svg(f)} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
