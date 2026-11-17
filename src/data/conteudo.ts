import { empresa } from "@/config/empresa";
import type { Pergunta } from "@/components/Faq";

// Textos institucionais reaproveitados em mais de um lugar (página, JSON-LD,
// llms.txt). Fonte das respostas: FAQ do site antigo da JB, revisado.

export const perguntasFrequentes: Pergunta[] = [
  {
    pergunta: "Como faço para agendar uma visita?",
    resposta: `Mande uma mensagem pelo WhatsApp ${empresa.telefoneExibicao} com o código do imóvel (ex.: JB-0012) e os dias e horários que ficam bons para você. Também atendemos pelo Instagram @${empresa.instagram} e pelo e-mail ${empresa.email}. Confirmamos a visita pelo mesmo canal.`,
  },
  {
    pergunta: "Quais formas de pagamento a JB aceita?",
    resposta: `Aceitamos ${empresa.formasPagamento.join(" e ")}. Condições de cada negócio, como entrada, financiamento ou caução no aluguel, são combinadas no atendimento.`,
  },
  {
    pergunta: "Como anuncio meu imóvel com a JB?",
    resposta:
      "Envie pelo WhatsApp o endereço (bairro e cidade), o tipo do imóvel, se é para vender ou alugar e algumas fotos. Retornamos para combinar a visita de avaliação e as condições do anúncio.",
  },
  {
    pergunta: "Em quais cidades a JB atua?",
    resposta: `Atendemos ${empresa.cidadeSede ? `${empresa.cidadeSede} e ` : ""}cidades do ${empresa.regiaoNaFrase}. Se o seu imóvel ou a sua busca for em outra cidade da região, fale com a gente.`,
  },
  {
    pergunta: "O valor anunciado é negociável?",
    resposta:
      "O valor do anúncio é o pedido pelo proprietário. Propostas são levadas ao dono do imóvel, que decide. Anúncios com \"Consulte\" têm o valor informado no atendimento.",
  },
];

export const passosAtendimento = [
  {
    titulo: "Escolha o imóvel",
    texto: "Filtre por cidade, tipo e valor. Cada anúncio tem um código, como JB-0012.",
  },
  {
    titulo: "Chame no WhatsApp",
    texto: "Mande o código e tire as dúvidas: documentação, condições e disponibilidade.",
  },
  {
    titulo: "Agende a visita",
    texto: "Combinamos o melhor horário e acompanhamos você no imóvel.",
  },
  {
    titulo: "Feche o negócio",
    texto: "Cuidamos da proposta, do contrato e da documentação até a entrega das chaves.",
  },
];
