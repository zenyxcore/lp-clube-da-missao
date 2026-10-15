# Design QA — Clube da Missão

Final result: **passed** (interface de pré-lançamento). Nenhuma pendência P0/P1/P2 identificada na revisão descrita abaixo. Isso não aprova a operação comercial: entrega, acesso, suporte e documentos ainda exigem a revisão em `docs/launch-checklist.md` antes de receber pagamentos.

## Evidências

- Referência fornecida: `../upload/image(20261015-022447).png`, 1086 × 1448. Cópia para consulta: `docs/reference.jpg`.
- Desktop: viewport DOM de 1363 × 936 CSS px, conteúdo de 1348 px sem a barra de rolagem. Hero: `docs/lp-preview.jpg` (captura entregue pelo navegador em 1348 × 926 px).
- Mobile: iframe real de 390 × 844 CSS px, com conteúdo de 375 px e barra de rolagem de 15 px. `docs/lp-mobile-viewport.jpg` mostra o contexto; `docs/lp-mobile.jpg` recorta somente o quadro. Layout responsivo real, sem injeção de CSS ou alteração da página durante a inspeção.
- Comparação focada: `docs/qa-hero-comparison.jpg`, referência à esquerda, implementação à direita, ambas normalizadas para 650 px de largura sem distorcer sua proporção.
- Comparação integral de direção: `docs/qa-full-comparison.jpg`. Referência e visão geral da implementação normalizadas para 480 px de largura. A captura longa nativa excedeu o tempo disponível no navegador; a visão geral foi montada a partir das capturas de viewport `docs/desktop-section-*.jpg`, alinhando as sobreposições. As capturas individuais são a evidência de detalhe; a montagem não é uma medida pixel a pixel nas emendas.
- `docs/lp-desktop-full.jpg`: visão geral montada; posições aproximadas em `docs/stitch-positions.json`. Diferenças pequenas na altura montada decorrem das sobreposições e da normalização dos pixels, não de conteúdo removido.
- Print mobile do produto: `public/screenshots/clube-mobile.jpg`, obtido de uma cópia isolada do código existente em largura real de celular. Nenhum arquivo do repositório do webapp foi alterado. Os outros cinco prints são reais do produto, com dados fictícios da equipe de teste.

## Comparação e correções

1. Primeira revisão: composição hero em duas colunas, cenário oficial, card em pergaminho e preço. A variável da fonte display estava sendo resolvida no root antes da variável de next/font existir no body. Corrigida a resolução no body; serifada Lora e DM Sans confirmadas por estilo computado e screenshot.
2. Revisão de assets: sprites com fragmentos vizinhos foram isolados e limpos por sua transparência; bússola, chave, mapa, guia, carta, escudo e certificado conferidos. Logo e título continuam oficiais. Pergaminho gerado é somente um suporte vazio; todos os textos, botões e preço são HTML.
3. Mobile: H1 forte, CTA primário antes do card, benefícios em coluna, passos em duas colunas, mockups proporcionais. Conteúdo medido em 375 px com scrollWidth = clientWidth; nenhum overflow horizontal. O CTA fixo inicialmente aguardava toda a hero sair da viewport, apesar do scroll-padding do header. Corrigido o limiar; aparecimento e fechamento testados (controle presente antes do clique e ausente depois).
4. Revisão final: seções claras/escuras, navegação, card completo da oferta, FAQ e CTA final conferidos em capturas individuais. Nenhuma imagem quebrada no DOM desktop; nenhum overflow. Comparações lado a lado inspecionadas na escala integral e no recorte da hero.

## Cinco superfícies

- **Fontes:** Lora editorial com destaque dourado em itálico, DM Sans para UI e leitura; arquivos locais com licenças SIL. Títulos mobile de 29–43 px. Legibilidade preservada por overlays nas imagens.
- **Espaçamento:** largura limitada no desktop, margens mobile de 20 px, oferta em fluxo natural. Header sticky e âncoras com compensação de altura. Sem elementos decorativos sobre os textos ou controles.
- **Cores e texturas:** azul petróleo e fundo escuro alternam com pergaminho; verde, dourado e vermelho da paleta oficial. Sem neon, glassmorphism ou cores externas à direção.
- **Imagens:** cenário, biblioteca, marca e objetos oficiais. Prints reais em galeria e molduras CSS. Dez avatares existentes da identidade estão disponíveis como assets; a personalização da LP é um exemplo sem formulário infantil. Next/image, WebP, dimensões estáveis e lazy loading fora da hero.
- **Copy:** promessa e público do briefing; R$37, compra única. Sem preço anterior, desconto, depoimentos ou urgência inventada. Bônus diário oculto por indisponibilidade. Certificado e carta confirmados. Pendências de acesso e suporte explicitadas em configuração e na interface de pré-lançamento.

## Diferenças intencionais da referência

O mockup é uma composição de página muito comprimida. A página real tem corpo legível, mais espaço vertical e inclui a demonstração, galeria, personalização, confiança e as dez perguntas solicitadas no texto. O logo Missão Secreta é o asset oficial fornecido, diferente do lettering ilustrativo do mockup. Os CTAs usam vermelho aventura com acentos verdes/dourados. A oferta é centralizada na seção final como solicitado no briefing. Só dois bônus implementados aparecem; não há o desconto, contador, vídeo ou avaliações fictícios do mockup. Compra permanece desabilitada sem checkout real.

## Interações e código

- Header/âncoras desktop; menu mobile abre, navega e fecha.
- Galeria avança/retorna, muda o print e legenda, amplia em diálogo modal e fecha restaurando foco.
- FAQ abre a resposta correta; grupo nativo mantém uma pergunta aberta. Perguntas de idade e de múltiplas crianças verificadas também por leitura da resposta no navegador.
- CTA principal leva à oferta. Botões de compra desabilitados no estado atual. CTA inferior aparece após a hero e pode ser fechado.
- DOM verificado sem script do Facebook quando o Pixel está desconfigurado. Pixel só pode carregar com ID válido, política configurada e consentimento. Eventos com Pixel real não testados porque nenhum ID foi fornecido; não houve transação nem Purchase.
- Console: nenhum erro da aplicação observado; houve uma mensagem da extensão do navegador sobre metadados, externa à LP.
- `npm run lint`: passou, sem avisos na revisão final. `npm run typecheck`: passou. `npm run build`: passou. `npm test`: 3 testes passaram (UTMs, limites dos parâmetros, URLs HTTPS e expiração).
- Repositório original do webapp conferido limpo com `git status --short`.

## Verificação após publicação

- Vercel: `dpl_5iCK7fZHGrmtvc2mZvkSZSfBCwm8`, estado READY, produção, código do commit `33a100713bdce2ced83c07f79d7eeee6ef152655`.
- Domínio verificado e aberto no navegador: https://lpclubedamissao.vercel.app/.
- `docs/lp-production.jpg`: screenshot da hero em produção. Galeria avançou para o mapa e a pergunta sobre entrega abriu a resposta de pré-lançamento no domínio publicado.
- A página permanece sem checkout nem rastreamento ativo. A captura/documentação posterior não altera o código publicado.

## Atualização de clareza e oferta

A versão mais recente usa CTAs verdes, header com logo e menu, oferta em fundo liso e **não tem barra fixa inferior**. O histórico acima descreve a primeira versão. A revisão atual está em `docs/revision-qa.md` e registra os testes desktop/mobile e a ancoragem contextual do preço.

A revisão mais recente restaura o pergaminho claro, usa R$197 como referência indicada pelo responsável, remove a comparação por criança e reduz o FAQ a cinco perguntas. Ver `docs/parchment-mobile-qa.md` para a revisão mobile atual.

A revisão atual remove o header, reorganiza a hero mobile, cria vitrine de materiais, redesenha os presentes e compacta a oferta. O relatório atualizado está em `docs/hero-conversion-qa.md`; os registros anteriores permanecem como histórico.
