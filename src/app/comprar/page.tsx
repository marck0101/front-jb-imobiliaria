import PaginaListagem, { type ParamsBusca } from "@/components/PaginaListagem";
import { metadados } from "@/lib/seo";
import { empresa } from "@/config/empresa";

const titulo = "Imóveis à venda";
const descricao = `Casas, apartamentos e terrenos à venda no ${empresa.regiaoNaFrase}, com fotos, valor e localização. Agende a visita pelo WhatsApp.`;

export const metadata = metadados({ titulo, descricao, caminho: "/comprar" });

export default function Comprar({ searchParams }: { searchParams: ParamsBusca }) {
  return (
    <PaginaListagem searchParams={searchParams} finalidade="venda" titulo={titulo} descricao={descricao} caminho="/comprar" />
  );
}
