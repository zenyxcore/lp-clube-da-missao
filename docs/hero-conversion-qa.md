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
