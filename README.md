# Clube da Missão — landing page

Landing independente da Missão Secreta — A Caça ao Tesouro Perdido. Next.js App Router, React, TypeScript, Tailwind 4, Motion e Lucide. O repositório e o deploy do webapp não são alterados.

## Desenvolvimento

Node 24. `npm ci`, `npm run dev` e acesse localhost:3000. Verificações: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. As fontes são locais; o build não depende do Google Fonts. Imagens oficiais otimizadas com WebP e next/image. Sem banco de dados, coleta de dados de crianças ou checkout próprio.

## Configuração comercial

`src/lib/config.ts` é a fonte de verdade: preço, disponibilidade de recursos/bônus, depoimentos autorizados e respostas comerciais. Copie `.env.example` para `.env.local` para desenvolvimento. Variáveis NEXT_PUBLIC são aplicadas no build: faça novo deploy após alterá-las.

A versão inicial é de **pré-lançamento**. Sem `NEXT_PUBLIC_CHECKOUT_URL`, não existe redirecionamento de compra nem cobrança. Opcionalmente configure `NEXT_PUBLIC_INTEREST_URL` para um canal oficial de interesse. A data de oferta é opcional e deve ser real, ISO com fuso; uma condição vencida desabilita a compra. Sem data não há contador. Não há desconto, preço anterior ou depoimentos fictícios.

### Antes de abrir as vendas

- Confirmar entrega, duração do acesso e condições comerciais; atualizar `offer.accessDelivery`, `offer.accessDuration`, `offer.support`, FAQ, Trust e Footer para a versão comercial.
- Publicar termos, política de privacidade e canal de suporte com a identificação real do fornecedor; configurar as três URLs.
- Configurar e testar checkout externo e entrega efetiva após pagamento. A LP não libera acesso e não confirma transações.
- Confirmar a disponibilidade de cada recurso. Carta e certificado existem no produto inspecionado. O **Diário do Explorador imprimível está `ready:false`** porque o app possui somente um diário digital; ele não é anunciado como incluído.
- Cadastrar somente depoimentos reais com primeiro nome autorizado, contexto e nota/data apenas quando fornecidas.
- Substituir vídeo se disponível; o padrão exibe arte oficial e galeria de cinco prints reais. Os nomes dos prints são dados fictícios da equipe de teste. Mockups CSS são ilustrações de apresentação de prints reais, não telas geradas.

## Campanhas e consentimento

Meta Pixel é opcional e fica inativo sem ID válido **e URL de política de privacidade**. O script só carrega após permissão. Aceitar/recusar têm o mesmo destaque; preferência pode ser alterada no rodapé. Eventos: PageView, ViewContent e InitiateCheckout (somente no clique em checkout real). **Não existe evento Purchase**. Revogar consentimento desativa o envio e remove a campanha lembrada nesta sessão; não apaga retroativamente dados já enviados ao provedor.

UTMs, fbclid e gclid da URL atual são preservados no checkout por lista permitida; outros parâmetros não são enviados. Persistência de campanha em sessionStorage só acontece após consentimento. A configuração e os testes não usam pixels reais nem transações.

## Deploy

Projeto Vercel: `lpclubedamissao`. Domínio: https://lpclubedamissao.vercel.app. Framework Next.js; Node 24; build `npm run build`. Repositório exclusivo: https://github.com/zenyxcore/lp-clube-da-missao. As variáveis opcionais podem ser configuradas no projeto Vercel e requerem novo build.

## Referências de direitos e privacidade

- CDC, art. 49: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#art49
- Guia de cookies da ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf

Relatório visual e funcional: `design-qa.md`. Assets pertencem à identidade fornecida pelo projeto; pergaminho de suporte gerado para receber conteúdo HTML. As fontes Lora e DM Sans usam SIL Open Font License; licenças em `public/fonts`.

## Oferta e mobile — revisão de 15/10

O responsável pela oferta informou R$197 como referência para a condição de lançamento de R$37. Os dois valores ficam em `offer.referencePrice` e `offer.price`. A LP não apresenta histórico de vendas nem valores individuais inventados para os bônus. A comparação por criança foi removida.

Parcelamento: a interface informa pagamento no cartão pela Cakto, com valores/juros consultados no checkout. Quantidade e valor exato das parcelas não foram simulados. A Cakto informa que a tabela depende do valor do produto e da configuração de pagamento: https://ajuda.cakto.com.br/pt-br/articles/18-como-funciona-o-parcelamento-no-checkout. A compra continua desabilitada até existir um checkout real.

Faixa superior sem preço/bônus, pergaminho mais claro na oferta, destaque colorido dos bônus, cinco perguntas curtas no FAQ e alinhamentos ajustados no celular.
