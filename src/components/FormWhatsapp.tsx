"use client";

import { useState } from "react";
import { IconeWhatsapp } from "./Icones";
import { whatsappUrl } from "@/config/empresa";
import styles from "./PaginaTexto.module.css";

// Formulário que só MONTA a mensagem e abre o WhatsApp. Nada é enviado a
// servidor nenhum (não há backend de contato ainda), então nada é guardado.
// `tipo` = "contato" (dúvida geral) ou "anunciar" (dono de imóvel).
export default function FormWhatsapp({ tipo }: { tipo: "contato" | "anunciar" }) {
  const [enviado, setEnviado] = useState(false);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) || "").trim();
    const linhas =
      tipo === "anunciar"
        ? [
            `Olá! Sou ${v("nome")} e quero anunciar meu imóvel com a JB.`,
            `Finalidade: ${v("finalidade")}`,
            `Tipo: ${v("tipoImovel")}`,
            `Local: ${v("local")}`,
            v("detalhes") && `Detalhes: ${v("detalhes")}`,
          ]
        : [`Olá! Sou ${v("nome")}.`, v("mensagem")];
    window.open(whatsappUrl(linhas.filter(Boolean).join("\n")), "_blank", "noopener,noreferrer");
    setEnviado(true);
  }

  return (
    <form className={styles.form} onSubmit={enviar}>
      <label className={styles.campo}>
        <span>Seu nome</span>
        <input name="nome" required autoComplete="name" />
      </label>

      {tipo === "anunciar" ? (
        <>
          <label className={styles.campo}>
            <span>Quer vender ou alugar?</span>
            <select name="finalidade" required defaultValue="">
              <option value="" disabled>
                Escolha
              </option>
              <option>Vender</option>
              <option>Alugar</option>
              <option>Ainda não sei, quero uma avaliação</option>
            </select>
          </label>
          <label className={styles.campo}>
            <span>Tipo do imóvel</span>
            <select name="tipoImovel" required defaultValue="">
              <option value="" disabled>
                Escolha
              </option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Terreno</option>
              <option>Sala comercial / pavilhão</option>
              <option>Sítio / chácara</option>
              <option>Outro</option>
            </select>
          </label>
          <label className={styles.campo}>
            <span>Bairro e cidade</span>
            <input name="local" required placeholder="Ex.: Centro, Santa Rosa" />
          </label>
          <label className={styles.campo}>
            <span>Detalhes (opcional)</span>
            <textarea name="detalhes" placeholder="Quartos, área, valor pretendido, se está ocupado..." />
          </label>
        </>
      ) : (
        <label className={styles.campo}>
          <span>Mensagem</span>
          <textarea name="mensagem" required placeholder="Conte o que você procura ou qual é a sua dúvida." />
        </label>
      )}

      <button type="submit" className="btn btn--primario">
        <IconeWhatsapp /> Continuar no WhatsApp
      </button>
      <p className={styles.nota} aria-live="polite">
        {enviado
          ? "Abrimos o WhatsApp com a sua mensagem pronta. É só tocar em enviar."
          : "Ao continuar, o WhatsApp abre com a mensagem pronta. Nada fica guardado neste site."}
      </p>
    </form>
  );
}
