import styles from "./Faq.module.css";

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

// <details>/<summary>: abre e fecha sem JavaScript e o texto fica no HTML
// (Google e assistentes de IA leem as respostas).
export default function Faq({ perguntas }: { perguntas: Pergunta[] }) {
  return (
    <div className={styles.lista}>
      {perguntas.map((p) => (
        <details key={p.pergunta} className={styles.item}>
          <summary>{p.pergunta}</summary>
          <p>{p.resposta}</p>
        </details>
      ))}
    </div>
  );
}
