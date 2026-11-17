// Modelo do imóvel. É o CONTRATO entre o site e o futuro backend de postagens:
// a API deve devolver exatamente este formato (ver docs/BACKEND.md).

export type Finalidade = "venda" | "aluguel";

export type TipoImovel =
  | "casa"
  | "apartamento"
  | "sobrado"
  | "kitnet"
  | "terreno"
  | "sala-comercial"
  | "pavilhao"
  | "sitio-chacara";

export type StatusImovel = "disponivel" | "reservado" | "vendido" | "alugado";

export interface Foto {
  /** URL absoluta (backend) ou caminho em /public */
  url: string;
  /** Descrição da foto para acessibilidade e SEO: "Sala de estar com lareira" */
  alt: string;
  largura?: number;
  altura?: number;
}

export interface Endereco {
  bairro: string;
  cidade: string;
  /** Sigla: "RS" */
  uf: string;
  /** Rua e número só aparecem se `mostrarRua` for true (muitos donos preferem não expor) */
  rua?: string;
  mostrarRua?: boolean;
  cep?: string;
  /** Coordenadas aproximadas (centro do bairro serve) para mapa e GEO */
  lat?: number;
  lng?: number;
}

export interface Imovel {
  id: string;
  /** Código curto de referência usado no atendimento: "JB-0012" */
  codigo: string;
  /** URL amigável: "casa-3-quartos-centro-santo-cristo" */
  slug: string;
  titulo: string;
  /** Texto livre; parágrafos separados por linha em branco */
  descricao: string;
  finalidade: Finalidade;
  tipo: TipoImovel;
  /** Venda: valor total. Aluguel: valor mensal. 0 = "Consulte" */
  preco: number;
  /** Mensal */
  condominio?: number;
  /** Anual */
  iptu?: number;
  endereco: Endereco;
  /** m² */
  areaUtil?: number;
  /** m² (terreno) */
  areaTotal?: number;
  quartos?: number;
  suites?: number;
  banheiros?: number;
  vagas?: number;
  /** Itens curtos: "Pátio", "Churrasqueira", "Aceita pet" */
  caracteristicas: string[];
  /** A primeira foto é a capa */
  fotos: Foto[];
  destaque?: boolean;
  status: StatusImovel;
  /** ISO 8601 */
  publicadoEm: string;
  atualizadoEm: string;
  /** Só nos dados de exemplo (desenvolvimento). Nunca vem do backend. */
  exemplo?: boolean;
}

export interface FiltrosImoveis {
  finalidade?: Finalidade;
  tipo?: TipoImovel;
  cidade?: string;
  quartos?: number;
  precoMax?: number;
  ordem?: "recentes" | "menor-preco" | "maior-preco";
}
