import Trilha from "@/components/Trilha";
import { empresa } from "@/config/empresa";
import { metadados } from "@/lib/seo";
import styles from "@/components/PaginaTexto.module.css";

export const metadata = metadados({
  titulo: "Política de privacidade",
  descricao: `Como o site da ${empresa.nome} trata dados pessoais (LGPD).`,
  caminho: "/privacidade",
});

// Reflete o site como ele é HOJE: sem cookies de análise, sem formulário que
// guarde dados. Se entrar Google Analytics, Meta Pixel ou formulário com
// backend, esta página e um aviso de cookies precisam mudar juntos.
export default function Privacidade() {
  const e = empresa;
  return (
    <main>
      <section className={styles.topo}>
        <div className="container">
          <Trilha itens={[{ nome: "Início", caminho: "/" }, { nome: "Privacidade" }]} />
          <h1>Política de privacidade</h1>
          <p className="apoio">Vigente desde 17 de novembro de 2026.</p>
        </div>
      </section>

      <section className={`container ${styles.corpo}`}>
        <div className={styles.texto}>
          <h2>O que este site coleta</h2>
          <p>
            Nada que identifique você. O site não usa cookies de análise ou de publicidade e não tem cadastro. Os
            formulários de contato e de anúncio não enviam dados para nenhum servidor: eles só montam uma mensagem e
            abrem o WhatsApp no seu aparelho. O que você enviar por lá segue a política do WhatsApp.
          </p>

          <h2>Dados que você nos envia</h2>
          <p>
            Quando você fala com a {e.nome} por WhatsApp, e-mail ou Instagram, usamos seu nome, telefone e o que você
            contar apenas para o atendimento: responder, agendar visitas e conduzir o negócio. Não vendemos nem
            repassamos esses dados, exceto ao proprietário ou interessado no imóvel quando isso for parte da negociação
            que você pediu.
          </p>

          <h2>Mapas e serviços de terceiros</h2>
          <p>
            Algumas páginas de imóvel mostram um mapa do OpenStreetMap, carregado só quando você chega nessa parte da
            página.
          </p>

          <h2>Seus direitos (LGPD)</h2>
          <p>
            Você pode pedir a qualquer momento acesso, correção ou exclusão dos seus dados que estejam conosco. Escreva
            para <a href={`mailto:${e.email}`}>{e.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
