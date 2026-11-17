# JB Imobiliária · site

Site da JB Imobiliária: vitrine de imóveis para comprar e alugar no noroeste do RS, com página própria para cada imóvel, busca por filtros e atendimento pelo WhatsApp.

- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript, CSS Modules. Sem biblioteca de UI.
- **Hospedagem:** Vercel. Hoje em https://front-jb-imobiliaria.vercel.app
- **Documentação interna:** [`CLAUDE.md`](CLAUDE.md) (regras e decisões), [`docs/IDENTIDADE.md`](docs/IDENTIDADE.md) (visual), [`docs/BACKEND.md`](docs/BACKEND.md) (estado do backend e contrato da API).

## Rodar localmente

Requer Node 20.9 ou mais novo.

```bash
npm install
cp .env.example .env.local   # ajuste NEXT_PUBLIC_SITE_URL se precisar
npm run dev                  # http://localhost:3000, só imóveis reais
npm run dev:exemplos         # idem, com 6 imóveis de EXEMPLO para testar o visual
npm run build                # build de produção (o Vercel roda este)
npm run typecheck            # checagem de tipos
```

## Como publicar um imóvel (enquanto não há backend)

1. Coloque as fotos em `public/imoveis/<codigo>/` (ex.: `public/imoveis/JB-0001/01.jpg`). JPG ou WebP, de 1600 px de largura. O Next gera as versões menores sozinho.
2. Adicione um objeto em [`src/data/imoveis.ts`](src/data/imoveis.ts) seguindo o tipo `Imovel` de [`src/types/imovel.ts`](src/types/imovel.ts). Use [`src/data/exemplos.ts`](src/data/exemplos.ts) como modelo.
3. `npm run build` para conferir, commit e push. O imóvel ganha página em `/imoveis/<slug>`, entra no sitemap, no `llms.txt` e na vitrine.

Para tirar da vitrine sem apagar o link, mude `status` para `"vendido"` ou `"alugado"`.

## Estrutura

```
src/
├── app/                      # rotas (App Router)
│   ├── page.tsx              # início
│   ├── imoveis/              # /imoveis (todos) e /imoveis/[slug] (página do imóvel)
│   ├── comprar/, alugar/     # vitrines por finalidade (mesmo componente)
│   ├── anunciar/, sobre/, contato/, privacidade/
│   ├── sitemap.ts, robots.ts, manifest.ts, llms.txt/   # SEO e GEO
│   ├── opengraph-image.tsx, apple-icon.tsx, icon.svg   # imagens geradas
│   ├── layout.tsx            # fontes, header, rodapé, JSON-LD da imobiliária
│   └── globals.css           # tokens de cor/fonte, botões, layout
├── components/               # Header, Footer, ImovelCard, Busca, Galeria, Vitrine...
├── config/empresa.ts         # FONTE ÚNICA dos dados da JB (contato, região, CRECI)
├── data/                     # imoveis.ts (reais), exemplos.ts, conteudo.ts (FAQ)
├── lib/                      # imoveis.ts (consultas), seo.ts (metadados e JSON-LD), formato.ts
└── types/imovel.ts           # modelo do imóvel = contrato com o futuro backend
```
