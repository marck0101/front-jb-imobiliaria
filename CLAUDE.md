# CLAUDE.md — site da JB Imobiliária

Contexto do projeto para o Claude Code. Leia antes de mexer. Uso e estrutura: `README.md`.

## 1. Situação (17/11/2026)

- **Reescrito do zero** na branch `reconstrucao-nextjs`. A versão antiga (na `main`) era o template pago Material Kit 2 PRO da Creative Tim quase inteiro (657 arquivos, 53 MB), com imóveis fictícios, textos de exemplo e rodapé da Creative Tim. Nada do template foi aproveitado.
- **Foco atual: só o front-end.** Backend, integrações e funcionalidades novas ficam para depois (pedido do cliente). Ver `docs/BACKEND.md`.
- O domínio `jbimobiliaria.com.br` é de **outra empresa** (JB Imóveis, Montes Claros/MG). Não usar e não linkar. O nome compete com eles no Google: por isso o SEO puxa sempre a região (noroeste do RS).

## 2. Regras

- **Dados da empresa só em `src/config/empresa.ts`.** Campo `null` não aparece no site nem no JSON-LD. Nunca inventar endereço, CRECI, ano de fundação, número de imóveis vendidos ou depoimentos.
- **Imóveis só via `src/lib/imoveis.ts`.** Páginas e componentes nunca leem `src/data/` direto: quando o backend existir, só esse arquivo muda.
- **Exemplos** (`src/data/exemplos.ts`) só aparecem com `JB_MOSTRAR_EXEMPLOS=1`, sempre com selo "Exemplo", aviso na página e `noindex`. Nunca ligar no Vercel.
- **Visual:** só tokens de `src/app/globals.css` (`var(--verde)`, `var(--raio)`...). Regras em `docs/IDENTIDADE.md`. Sem biblioteca de UI e sem foto de banco de imagem.
- **Textos** em português, diretos, sem promessa que a JB não confirmou ("líder", "mais de X anos", "melhor da região").
- **Contato** é WhatsApp primeiro. Os formulários só montam a mensagem e abrem o WhatsApp: nada é enviado a servidor. Se um dia gravarem dados, atualizar `/privacidade` e criar aviso de cookies/LGPD junto.

## 3. SEO, GEO e desempenho (o que já está feito)

- Cada imóvel tem página estática (`generateStaticParams`) com `title`/`description` próprios, canonical, Open Graph com a foto de capa e JSON-LD `RealEstateListing` + `Offer` + tipo da acomodação + `BreadcrumbList`.
- JSON-LD `RealEstateAgent` + `WebSite` em todas as páginas (layout); `FAQPage` na home; `ItemList` nas vitrines.
- Vitrines com filtro na URL (`/comprar?tipo=casa&cidade=...`): canonical aponta para a página sem filtro (evita conteúdo duplicado).
- `sitemap.xml` (com imagens dos imóveis), `robots.txt` liberando buscadores e bots de IA, `llms.txt` com resumo da empresa, imóveis e FAQ, meta `geo.region` BR-RS.
- Fontes via `next/font` (servidas pelo próprio site), imagens via `next/image` (AVIF/WebP, tamanhos responsivos, lazy), ícones em SVG inline, busca e FAQ funcionam sem JavaScript, mapa (OpenStreetMap) com `loading="lazy"`.
- Acessibilidade: link "Pular para o conteúdo", foco visível, `aria-current` no menu, labels em todos os campos, `prefers-reduced-motion`.
- Cabeçalhos de segurança em `next.config.ts`.

## 4. Pendências do cliente (bloqueiam SEO local completo)

| Dado | Onde preencher | Efeito |
|---|---|---|
| Cidade-sede | `empresa.cidadeSede` | título/descrição locais, `geo.placename`, `areaServed`, FAQ |
| Endereço e CEP (+ lat/lng) | `empresa.endereco` | `PostalAddress` e `GeoCoordinates` no JSON-LD, rodapé, contato |
| **CRECI** | `empresa.creci` | obrigatório em anúncio imobiliário (Lei 6.530/78); aparece no rodapé, sobre e cada imóvel |
| Razão social | `empresa.razaoSocial` | rodapé e JSON-LD |
| Horário | `empresa.horario` | rodapé, contato, `openingHours` |
| Imóveis reais (fotos + dados) | `src/data/imoveis.ts` | vitrine; sem eles o site mostra "vitrine em atualização" |
| História da JB | `src/app/sobre/page.tsx` | texto atual é provisório |
| Domínio próprio | `NEXT_PUBLIC_SITE_URL` no Vercel | canonical, sitemap, OG |
| Google Business Profile | fora do site | essencial para busca local ("imobiliária perto de mim") |

## 5. Deploy (Vercel)

- Projeto Vercel já ligado ao repositório (`.vercel/project.json`). O painel estava configurado como Create React App: o `vercel.json` com `"framework": "nextjs"` sobrepõe isso pelo código (sem ele o deploy falha). Mesmo assim, vale ajustar o Framework Preset no painel (Settings → Build and Deployment) e conferir o Node (20.x ou 22.x).
- Variáveis no Vercel: `NEXT_PUBLIC_SITE_URL`. **Não** definir `JB_MOSTRAR_EXEMPLOS`.
- Push em branch que não é a `main` gera só uma prévia (preview), sem afetar o site no ar.

## 6. Histórico

| Data | Mudança |
|---|---|
| 2024-02/03 | Versão em template Material Kit 2 PRO (CRA), protótipo com dados fictícios |
| 2026-11-17 | Reconstrução em Next.js 16: identidade visual própria, vitrine com filtros, página por imóvel, SEO/GEO completos, documentação. Template removido |
