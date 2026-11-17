import Link from "next/link";
import styles from "./Trilha.module.css";

// Trilha de navegação (breadcrumb). O JSON-LD equivalente sai de lib/seo.ts.
export default function Trilha({ itens }: { itens: { nome: string; caminho?: string }[] }) {
  return (
    <nav aria-label="Você está em" className={styles.trilha}>
      <ol>
        {itens.map((item, i) => (
          <li key={item.nome}>
            {item.caminho && i < itens.length - 1 ? (
              <Link href={item.caminho}>{item.nome}</Link>
            ) : (
              <span aria-current="page">{item.nome}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
