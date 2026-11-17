# Backend da JB · estado atual e plano (para a próxima etapa)

> Etapa atual é **só front-end**. Este documento registra o que foi encontrado e o contrato que o site já espera, para quando o backend for feito.

## 1. O que existe hoje (17/11/2026)

| Repositório | O que é de verdade |
|---|---|
| `marck0101/api-jb-imobiliaria` (público) | API em TypeScript/Mongo de **outro sistema**: transporte e emissão fiscal (CT-e OS, viagens, veículos, clientes, Focus NFe). **Não tem nada de imóveis.** |
| `marck0101/front-admin-jb-imobiliaria` (público, front-admin-jb-imobiliaria.vercel.app) | Painel do mesmo sistema de transporte (passageiros, viagens, CT-e). **Não serve** para cadastrar imóveis. |

Conclusão: o "controle de postagens de vendas e locações" ainda não existe. Precisa ser criado (ou o código de transporte adaptado, mas o modelo de dados é outro).

## 2. ⚠️ Segurança: segredos expostos (resolver antes de qualquer coisa)

O repositório público `api-jb-imobiliaria` tem, desde **04/03/2024**, arquivos `.env.dev`, `.env.prod` e `.env.stage` commitados, com segredos em linhas ativas e em comentários: **senha do usuário do MongoDB Atlas, tokens da Focus NFe (produção e homologação), chave live do UploadThing e segredos JWT.**

1. **Trocar todos agora**: senha do usuário no Atlas (e restringir IPs), regenerar os dois tokens da Focus NFe, revogar a chave do UploadThing, gerar novos `SECRET_AUTH`.
2. Tornar o repositório privado **ou** apagar os arquivos e limpar o histórico (`git filter-repo`). Só apagar num commit novo não resolve: o histórico continua público.
3. Daqui para frente: `.env*` no `.gitignore` (o front já está assim) e segredos só nas variáveis de ambiente do Vercel.

Também público: o `front-jb-imobiliaria` antigo trazia o código-fonte do Material Kit **PRO** (licença paga da Creative Tim, que não permite redistribuir o código). A reconstrução remove o template; vale manter o repositório privado ou garantir que a versão antiga saia do histórico público.

## 3. Contrato que o site já espera

O site lê imóveis por `src/lib/imoveis.ts`. Quando a API existir, só esse arquivo troca a leitura do arquivo local por `fetch`. O formato de cada imóvel é o tipo `Imovel` de `src/types/imovel.ts` (fonte da verdade).

Endpoints públicos sugeridos (só leitura, cache de alguns minutos):

| Método | Rota | Uso no site |
|---|---|---|
| GET | `/imoveis?finalidade=&tipo=&cidade=&quartos=&precoMax=&ordem=` | vitrines (só `status` disponível/reservado) |
| GET | `/imoveis/:slug` | página do imóvel (qualquer status) |
| GET | `/imoveis/destaques?limite=6` | home |
| GET | `/cidades` | filtro de cidade |

Área restrita (painel da JB): CRUD de imóveis, upload de fotos (ordem = capa primeiro, com texto `alt`), troca de status, login. Ao publicar ou editar, chamar a revalidação do site (Next `revalidatePath`/`revalidateTag`) para a página do imóvel sair na hora com HTML pronto (bom para SEO).

Regras de dados que o site assume:
- `slug` único e estável (o link do anúncio não pode mudar).
- `codigo` curto e único (`JB-0001`), usado no atendimento.
- Endereço exato só com `mostrarRua: true`; `lat`/`lng` podem ser do centro do bairro.
- Fotos com URL absoluta: liberar o domínio do armazenamento em `next.config.ts` (`images.remotePatterns`).
