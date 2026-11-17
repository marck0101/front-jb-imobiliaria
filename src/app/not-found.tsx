import Link from "next/link";
import styles from "@/components/PaginaTexto.module.css";

export const metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NaoEncontrada() {
  return (
    <main>
      <section className={`container ${styles.corpo}`} style={{ textAlign: "center" }}>
        <p className="rotulo">Erro 404</p>
        <h1 style={{ margin: "0.75rem 0" }}>Página não encontrada</h1>
        <p className="apoio" style={{ marginBottom: "1.75rem" }}>
          O endereço não existe ou o imóvel saiu do site.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/imoveis" className="btn btn--primario">
            Ver imóveis
          </Link>
          <Link href="/" className="btn btn--secundario">
            Página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
