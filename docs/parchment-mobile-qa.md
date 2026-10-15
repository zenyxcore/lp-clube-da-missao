# Pergaminho e ajustes mobile — 15/10/2026

Revisão verificada em desktop e mobile. Esta versão substitui as decisões anteriores sobre fundo liso de oferta e comparação por criança.

- Faixa superior contém somente “Edição de estreia” e “Condição especial de lançamento”. Preço, bônus e ícone de presente removidos da faixa.
- Pergaminho oficial restaurado como camada decorativa atrás do HTML. Clareado por CSS (brightness 1.14 no desktop / 1.18 no celular; saturação reduzida). Texto e controles mantêm suas cores e contraste.
- Bônus na oferta com box dourado/laranja e título de destaque, seguindo a paleta de aventura.
- Referência de R$197 indicada pelo responsável pela oferta nesta revisão, com preço de lançamento de R$37. Removida a comparação por criança. Valores centralizados em config.ts.
- Opção de parcelar no cartão informada, com parcelas e juros consultados no checkout da Cakto; nenhuma tabela fictícia, número de parcelas ou ausência de juros foi anunciado. A documentação oficial foi consultada: https://ajuda.cakto.com.br/pt-br/articles/18-como-funciona-o-parcelamento-no-checkout.
- FAQ reduzido de 10 para 5 perguntas curtas, agrupando assuntos. Acesso/prazo e suporte continuam explicitamente pendentes no pré-lançamento.
- No celular: hero, etapas, benefícios, bônus, personalização, confiança e rodapé com alinhamentos centralizados. Perguntas, respostas e listas mantêm alinhamento para leitura.

## Verificação

Desktop de 1363 × 936 CSS px; quadro mobile de 390 × 844 CSS px, conteúdo de 375 px com barra de rolagem de 15 px. Sem overflow horizontal (scrollWidth = clientWidth = 375 no quadro). Nenhuma imagem quebrada no desktop.

Navegação por menu até a oferta e o FAQ funcionando. Primeiro accordion aberto e resposta conferida. DOM confirmou cinco perguntas, nenhuma comparação por criança e faixa superior sem preços/bônus.

Capturas: `parchment-mobile-offer.jpg` e `compact-faq-mobile.jpg`. Build, TypeScript e lint passaram. A compra permanece desabilitada sem checkout configurado. Webapp não alterado.
