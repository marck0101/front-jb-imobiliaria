import type { Imovel } from "@/types/imovel";

// IMÓVEIS REAIS publicados no site.
//
// Enquanto o backend de postagens não existe, os anúncios entram aqui à mão.
// Modelo completo e regras em src/types/imovel.ts; exemplo preenchido em
// src/data/exemplos.ts. Fotos: coloque em public/imoveis/<codigo>/ e use
// "/imoveis/<codigo>/01.jpg" no campo url.
//
// Lista vazia = o site mostra "vitrine em atualização" com o contato.

export const imoveis: Imovel[] = [];
