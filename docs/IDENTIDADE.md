# JB Imobiliária · identidade visual (v1, nov 2026)

Proposta simples, criada junto com o site novo, porque a JB não tinha logo nem cores definidas. Se a JB adotar um logo profissional depois, troque o símbolo e os tokens. O resto do site segue sozinho.

## Ideia

Sóbria e regional: verde-escuro (confiança, campo, noroeste gaúcho), dourado discreto (o "telhado") e fundo areia, em vez do branco frio de portal imobiliário. Nada de foto de banco de imagem: as únicas fotos do site são as dos imóveis reais.

## Logo

- **Símbolo:** quadrado verde com cantos arredondados, um **telhado dourado** (traço em "V" invertido) sobre o monograma **JB** em serifa clara.
- **Assinatura:** símbolo + "JB Imobiliária" em DM Serif Display + "NOROESTE DO RS" em caixa alta dourada.
- Arquivos: `src/components/Logo.tsx` (site), `src/app/icon.svg` (favicon), `src/app/apple-icon.tsx` e `src/app/opengraph-image.tsx` (geradas no build).
- Não esticar, não mudar as cores do símbolo, tamanho mínimo de 24 px.

## Cores (tokens em `src/app/globals.css`)

| Token | Hex | Uso |
|---|---|---|
| `--verde` | `#1F3D36` | cor principal: botões, preço, links, faixa do topo |
| `--verde-escuro` | `#132823` | títulos, hover, rodapé |
| `--verde-claro` | `#E3ECE8` | fundos de apoio, selos neutros |
| `--dourado` | `#B8862F` | acento: telhado, rótulos, ícones, selo "Aluguel" |
| `--dourado-claro` | `#F3E7CF` | fundos de destaque suave |
| `--areia` | `#F7F4EE` | fundo da página |
| `--branco` | `#FFFFFF` | cartões |
| `--tinta` | `#1B201E` | texto |
| `--texto-suave` / `--texto-nota` | `#4B5551` / `#6F7874` | texto secundário / legendas |

Proporção aproximada: 60 areia/branco · 30 verde · 10 dourado. Dourado nunca em texto pequeno sobre areia (contraste baixo): só em rótulos em caixa alta, ícones e selos.

## Tipografia (via `next/font`, servida pelo próprio site)

- **DM Serif Display** (400): títulos, preço, logo.
- **Inter** (400–600): todo o resto.
- Rótulos: Inter 600, 0,78 rem, caixa alta, espaçamento 0,12 em, dourado.

## Componentes base

- Botões em pílula: primário (verde), secundário (contorno verde), claro (sobre fundo verde).
- Cartões brancos, raio 16 px, borda `--linha`, sombra só no hover.
- Selos: Venda = verde, Aluguel = dourado, Exemplo = vermelho tijolo (`--alerta`).
- Grafismo: linhas finas em diagonal (o "telhado") nas faixas verdes. Discreto, nunca sobre texto.
