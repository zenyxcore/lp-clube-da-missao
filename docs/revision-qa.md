# Revisão de clareza e oferta — 15/10/2026

Resultado: passou na revisão desktop/mobile. Esta revisão substitui as decisões visuais anteriores sobre a oferta em pergaminho, o CTA fixo inferior e a navegação do header.

## Alterações

- Removidos o componente, a montagem e os estilos da barra inferior fixa de oferta.
- Header somente com logo e botão Menu; navegação por âncoras dentro do menu. Não há botão de compra no header.
- CTAs verdes com contraste, borda clara e profundidade discreta. Oferta continua em pré-lançamento, sem habilitar compra ou inventar checkout.
- Faixa superior com título maior, condição de lançamento e conteúdo concreto (missão + dois bônus pelo preço central). Sem prazo fictício. O contador continua condicionado à data real configurada.
- Oferta em superfície clara lisa, com lista de itens, bônus, preço e ação separados visualmente. O pergaminho não fica mais atrás do texto comercial.
- Pulsação de 3,5% no preço, ciclo de 3,4s. Desligada quando o sistema pede redução de movimento.
- Ancoragem contextual: total de R$37 para até três crianças; R$12,33 por criança em uma equipe de três, com o total da compra explícito. Não foi criado preço anterior, desconto ou valor fictício para os bônus.
- Bônus com check e selo “GRÁTIS COM A MISSÃO”, descrição do uso e aviso de inclusão sem custo extra.
- Copy explica o papel do adulto, o uso da tela, os desafios e as pistas físicas. Os passos no celular ficam em coluna.

## Evidências

- Desktop no navegador: viewport 1363 × 936 CSS px. Sem overflow, sem imagens quebradas e sem CTA fixo no DOM.
- Mobile: quadro de 390 × 844 CSS px, conteúdo de 375 px e barra de rolagem de 15 px. scrollWidth = clientWidth = 375.
- Menu testado no desktop e no mobile: abertura, navegação até bônus, itens e oferta, e fechamento ao selecionar um link.
- Screenshot `revision-bonuses.jpg`: apresentação revisada dos bônus.
- Screenshot `revision-mobile-offer-viewport.jpg`: valor, ancoragem e botão verde na oferta mobile.
- Estilo computado do preço confirmou `price-breathe`. CSS tem regra de redução de movimento.
- Nenhuma alteração no webapp. Somente a landing page é publicada.

Lint, TypeScript e build de produção executados antes do envio. Pixels, checkout e condições de acesso continuam conforme a configuração anterior de pré-lançamento.

## Publicação verificada

Produção READY: `dpl_M1odjVCUhKheh5Dx7yt2on3G2oVk`, código `44984b4c6a8f058665094af16d7e3fa1d8ec3085`. Domínio aberto e verificado: https://lpclubedamissao.vercel.app/. Screenshot: `revision-production.jpg`. No domínio publicado, menu e navegação até os bônus funcionaram; os dois selos gratuitos, ausência da barra fixa, ausência de overflow e animação do preço foram confirmados.
