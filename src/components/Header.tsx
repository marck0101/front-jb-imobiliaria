"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconeFechar, IconeMenu, IconeWhatsapp } from "./Icones";
import { whatsappUrl } from "@/config/empresa";
import styles from "./Header.module.css";

const LINKS = [
  { href: "/comprar", rotulo: "Comprar" },
  { href: "/alugar", rotulo: "Alugar" },
  { href: "/anunciar", rotulo: "Anunciar imóvel" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/contato", rotulo: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  // Fecha o menu ao trocar de página e com Esc
  useEffect(() => setAberto(false), [pathname]);
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.barra}`}>
        <Logo />

        <nav aria-label="Principal" className={`${styles.nav} ${aberto ? styles.aberto : ""}`} id="menu-principal">
          <ul className={styles.links}>
            {LINKS.map((l) => {
              const ativo = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li key={l.href}>
                  <Link href={l.href} className={styles.link} aria-current={ativo ? "page" : undefined}>
                    {l.rotulo}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={whatsappUrl()} className={`btn btn--primario ${styles.whats}`} target="_blank" rel="noopener noreferrer">
            <IconeWhatsapp /> Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className={styles.menu}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <IconeFechar tamanho={24} /> : <IconeMenu tamanho={24} />}
        </button>
      </div>
    </header>
  );
}
