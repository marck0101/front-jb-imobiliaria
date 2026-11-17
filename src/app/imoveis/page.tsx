import PaginaListagem, { type ParamsBusca } from "@/components/PaginaListagem";
import { metadados } from "@/lib/seo";
import { empresa } from "@/config/empresa";

const titulo = "Imóveis à venda e para alugar";
const descricao = `Todos os imóveis da ${empresa.nome}: casas, apartamentos, terrenos e salas comerciais no ${empresa.regiaoNaFrase}.`;

export const metadata = metadados({ titulo, descricao, caminho: "/imoveis" });

export default function Imoveis({ searchParams }: { searchParams: ParamsBusca }) {
  return <PaginaListagem searchParams={searchParams} titulo={titulo} descricao={descricao} caminho="/imoveis" />;
}
