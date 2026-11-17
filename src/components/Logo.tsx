import Link from "next/link";
import styles from "./Logo.module.css";

// Logo JB Imobiliária (docs/IDENTIDADE.md): telhado dourado sobre o monograma
// "JB" num quadrado verde + nome em serifa. Mesmo desenho do src/app/icon.svg.
export function Simbolo({ tamanho = 40 }: { tamanho?: number }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#1f3d36" />
      <path d="M14 27 32 13l18 14" fill="none" stroke="#b8862f" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="32"
        y="50"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="700"
        fill="#f7f4ee"
        letterSpacing="1"
      >
        JB
      </text>
    </svg>
  );
}

export default function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link href="/" className={`${styles.logo} ${claro ? styles.claro : ""}`} aria-label="JB Imobiliária, página inicial">
      <Simbolo />
      <span className={styles.textos}>
        <span className={styles.nome}>JB Imobiliária</span>
        <span className={styles.sub}>Noroeste do RS</span>
      </span>
    </Link>
  );
}
