// Dados estruturados (schema.org). O "<" é escapado para o JSON nunca fechar a tag <script>.
export default function JsonLd({ dados }: { dados: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
