import PaginaListagem, { type ParamsBusca } from "@/components/PaginaListagem";
import { metadados } from "@/lib/seo";
import { empresa } from "@/config/empresa";

const titulo = "Imóveis para alugar";
const descricao = `Casas, apartamentos, kitnets e salas comerciais para alugar no ${empresa.regiaoNaFrase}. Valor mensal e condições em cada anúncio.`;

export const metadata = metadados({ titulo, descricao, caminho: "/alugar" });

export default function Alugar({ searchParams }: { searchParams: ParamsBusca }) {
  return (
    <PaginaListagem searchParams={searchParams} finalidade="aluguel" titulo={titulo} descricao={descricao} caminho="/alugar" />
  );
}
