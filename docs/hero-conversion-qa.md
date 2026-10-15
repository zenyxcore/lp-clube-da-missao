# Hero e conversão — revisão de 15/10/2026

Esta revisão substitui a composição anterior da hero e dos bônus.

- Mobile: título em três linhas, logo maior centralizada, moldura temática 16:9 para o vídeo, H2, texto e CTA. Sem header de navegação ou barra fixa inferior.
- Desktop: composição em duas colunas com CTA visível na primeira tela.
- Vitrine com prints reais de computador e celular e artes oficiais de mapa e carta. `showcasePhotos` recebe as futuras fotos reais dos impressos; nenhuma foto foi inventada.
- Cards dos recursos com selo “Já incluído”; bônus em fundo verde profundo, detalhes dourados e faixa de gratuidade.
- Oferta em pergaminho claro, lista em duas colunas e bônus compactos. R$197 e R$37 permanecem centralizados na configuração. Sem simular valores de parcelas.
- “Filho ou neto” na personalização; Miguel usa o avatar masculino explorador-02, inspecionado visualmente.
- Ícones vetoriais temáticos de e-mail e WhatsApp e selo de garantia de 7 dias. A condição de entrega foi solicitada pelo responsável; a LP não implementa envio ou liberação de acesso.
- CTAs de navegação e checkout têm nomes e atributos de rastreamento distintos. Compra só redireciona com URL real; não foi feito pagamento. Sem Purchase ou pixel fictício.
- Sem avisos de “em breve” no conteúdo público. Condição de lançamento destacada; “última chance” apenas nas últimas 24h de um encerramento real configurado.

## Validação

Build Next.js, TypeScript, ESLint e os três testes de campanha passaram. Sem erros em `git diff --check`.

Navegador: revisão visual desktop e iframes de 390×844 e 320×844. Largura útil de conteúdo de 375px e 305px, respectivamente, sem overflow horizontal. No mobile de 390px o H1 ficou nas três linhas solicitadas e o CTA da hero terminou em aproximadamente 827px. Testados CTA até a oferta, troca da galeria, ampliação/fechamento e FAQ de acesso. Header ausente; sete CTAs identificados por ação/local. Não há mensagens internas de pré-lançamento no texto renderizado.

Vídeo e fotos reais ainda dependem dos arquivos do responsável. Checkout, prazo de acesso, suporte e documentos legais devem ser concluídos antes da abertura comercial, conforme README.

## Publicação verificada

Produção: https://lpclubedamissao.vercel.app/ — deployment `dpl_CAGZKThZMCjKttn7UN68S6Esvf1X`, estado READY, commit `89d58e899f551e464677ba1820b0d789716abd27`.

Hero conferida no domínio público em desktop e mobile; CTA navega à oferta e FAQ mostra a entrega por e-mail e WhatsApp. Na versão final, o pergaminho mede aproximadamente 705px de altura útil em 375px de largura, com preço a 349px do topo. Sem overflow horizontal e sem avisos internos de pré-lançamento. O console de produção não apresentou erro da aplicação (apenas uma mensagem da extensão do navegador). Checkout permanece desabilitado sem URL real.

Evidências: `hero-conversion-production.jpg`, `hero-conversion-mobile.jpg`, `hero-conversion-offer.jpg`. `hero-mobile-final.jpg` é somente um recorte da captura mobile para facilitar a leitura.

## Correção de ordem da hero

Logo movida para antes do H1 no HTML e na grade desktop. Validado no domínio público: a logo termina em 224px e o título começa em 244px no desktop; no mobile, termina em 215px e o título começa em 237px. Conteúdo de 375px sem overflow horizontal. Build, TypeScript do build e lint aprovados. Deployment `dpl_9CrRuZNu6fketH5ybauPK1RWNSkq`, commit `e4477acd68c608e7d086d97fef7b06ee209e814c`, READY. Evidência atual: `logo-above-title-mobile.jpg` (recorte da captura completa de mesmo nome com sufixo `-full`).

## Contraste das etapas

Etapas 01–04 com fundo verde na identidade dos CTAs, texto branco e fonte de 14px em círculos de 36px. Validado visualmente em desktop e mobile; build e lint aprovados. Produção READY em `dpl_4BUx112Z2uNKivGApAMRy3s9XB2e`, commit `3560554eba0ad312167a57a5084f14f90f63a72c`. Evidências: `green-step-numbers-desktop.jpg` e `green-step-numbers-mobile.jpg`.

## Imagem de nomes e avatares

O card “Nomes e avatares da equipe” usa agora o WebP de 380×290 enviado pelo responsável, copiado sem edição para `public/assets/team-avatars.webp`. Imagem carregada e conferida no domínio público. Build e lint aprovados. Deployment `dpl_AJnX5oDDQBhqWCnZf8p9kS4L5ZMp`, commit `0621e190b308a64972ad915a7c2c1647c1b2280a`, READY. Evidência: `team-avatar-replacement.jpg`, recorte da captura `team-avatar-replacement-full.jpg`.
