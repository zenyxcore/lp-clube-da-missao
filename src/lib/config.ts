/** Única fonte de verdade comercial. Revise os campos pendentes antes de abrir as vendas. */
export type Testimonial = {
  text: string;
  firstName: string;
  context: string;
  rating?: number;
  date?: string;
};
export function safeUrl(value: string | undefined): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
}
export const offer = {
  price: 37,
  referencePrice: 197, // Valor de referência informado pelo responsável pela oferta.
  installmentCount: 6,
  installmentsConfirmed: false, // Ative somente após conferir a tabela real do checkout.
  accessLabel: "Acesso vitalício",
  billingLabel: "Sem mensalidade",
  purchaseLabel: "Compra única",
  maxAdventurers: 3,
  currency: "BRL",
  checkoutUrl:
    safeUrl(process.env.NEXT_PUBLIC_CHECKOUT_URL) ||
    "https://pay.cakto.com.br/3799kdi_1205399",
  interestUrl: safeUrl(process.env.NEXT_PUBLIC_INTEREST_URL),
  endsAt: process.env.NEXT_PUBLIC_OFFER_END_AT || "",
  videoUrl: safeUrl(process.env.NEXT_PUBLIC_DEMO_VIDEO_URL), // Arquivo MP4/WebM, sem autoplay.
  metaPixelId: /^\d{5,20}$/.test(
    process.env.NEXT_PUBLIC_META_PIXEL_ID || "1792505741795738",
  )
    ? process.env.NEXT_PUBLIC_META_PIXEL_ID || "1792505741795738"
    : "",
  termsUrl: safeUrl(process.env.NEXT_PUBLIC_TERMS_URL),
  privacyUrl:
    safeUrl(process.env.NEXT_PUBLIC_PRIVACY_URL) ||
    "https://lpclubedamissao.vercel.app/privacidade",
  supportUrl: safeUrl(process.env.NEXT_PUBLIC_SUPPORT_URL),
  accessDelivery:
    "Receba o acesso pelo e-mail e pelo WhatsApp informados na compra.",
  accessDuration:
    "O acesso a esta aventura é vitalício: compra única, sem mensalidade.",
  support: "O canal de suporte acompanha a confirmação da sua compra.",
  testimonials: [] as Testimonial[],
};
export const referencePriceLabel = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: offer.currency,
}).format(offer.referencePrice);
export const priceLabel = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: offer.currency,
}).format(offer.price);
/** Divisão ilustrativa sem juros; a cobrança depende da configuração real do checkout. */
export const installmentPriceLabel = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: offer.currency,
}).format(offer.price / offer.installmentCount);
export const resources = [
  {
    title: "História para brincar em família",
    text: "A história aparece no celular ou computador e mostra o que a equipe precisa fazer em cada etapa.",
    image: "chest",
    ready: true,
  },
  {
    title: "6 desafios para resolver juntos",
    text: "As crianças resolvem enigmas para descobrir a próxima pista e chegar ao tesouro.",
    image: "key",
    ready: true,
  },
  {
    title: "Mapa e pistas para imprimir",
    text: "Imprima as pistas, esconda pela casa e deixe os pequenos exploradores encontrarem o caminho.",
    image: "openmap",
    ready: true,
  },
  {
    title: "Guia do responsável",
    text: "Um passo a passo mostra onde esconder cada pista e como ajudar as crianças durante a brincadeira.",
    image: "guide",
    ready: true,
  },
  {
    title: "Nomes e avatares da equipe",
    text: "Cadastre até 3 crianças e escolha os personagens. Os nomes da equipe aparecem na experiência.",
    image: "team-avatars",
    ready: true,
  },
  {
    title: "Recompensas da missão",
    text: "A equipe conquista insígnias e recebe um certificado com seus nomes ao concluir os 6 desafios.",
    image: "certificate",
    ready: true,
  },
];
export const bonuses = [
  {
    title: "Diário do Explorador",
    text: "Material temático para registrar pistas, descobertas e desenhos.",
    image: "guide",
    ready: false,
  },
  {
    title: "Carta Secreta",
    text: "Imprima e entregue às crianças antes de começar. É o convite secreto que coloca a equipe dentro da história.",
    image: "letter",
    ready: true,
  },
  {
    title: "Certificado Personalizado",
    text: "Ao terminar a missão, imprima o certificado com os nomes da equipe e celebre a conquista em família.",
    image: "certificate",
    ready: true,
  },
];
/** Adicione aqui somente fotos reais aprovadas dos materiais impressos. */
export const showcasePhotos: { src: string; alt: string }[] = [];
export const faqs = [
  [
    "O que está incluído nesta compra?",
    "A aventura O Tesouro Perdido: história guiada no app, desafios, mapa, pistas e guia do responsável. A Carta Secreta e o Certificado Personalizado também estão incluídos.",
  ],
  [
    "Para que idade e quantas crianças?",
    "Para crianças de 5 a 9 anos, acompanhadas por um adulto. Monte uma equipe com até 3 aventureiros, escolhendo os nomes e personagens.",
  ],
  [
    "Preciso de impressora?",
    "Os materiais são digitais, sem envio pelo correio. Você pode imprimir em casa ou em uma papelaria. Se preferir, copie o texto e o código de cada pista em papéis separados, seguindo o guia.",
  ],
  [
    "Quanto tempo preciso reservar?",
    "Reserve cerca de 10 minutos para preparar os esconderijos e de 25 a 40 minutos para brincar. O tempo varia conforme a idade e o ritmo da equipe. Um adulto deve acompanhar a aventura.",
  ],
  [
    "O que posso usar como tesouro?",
    "Uma caixa com um desenho, um bilhete carinhoso ou uma pequena surpresa que você já tenha em casa. O tesouro é preparado pela família; não é preciso comprar brinquedos ou acessórios para completar a missão.",
  ],
  [
    "Posso brincar novamente?",
    "Sim. Você pode preparar a mesma aventura novamente. Ao reiniciar uma equipe, o progresso anterior dela é apagado. A história é a mesma, e os nomes e personagens podem ser alterados no app.",
  ],
  [
    "As cinco aventuras extras estão incluídas?",
    "Esta oferta inclui O Tesouro Perdido e os dois bônus apresentados na página. A temporada com cinco novas aventuras é um pacote opcional, vendido separadamente. Você não precisa dele para jogar sua missão principal.",
  ],
  [
    "Como recebo o acesso?",
    `${offer.accessDelivery} Após a aprovação do pagamento, abra a plataforma pelo link recebido. ${offer.accessDuration}`,
  ],
  [
    "Como funciona o pagamento?",
    "Você faz uma compra única, sem mensalidade. Consulte as formas de pagamento e o valor total no checkout antes de concluir.",
  ],
  [
    "Como peço ajuda ou solicito reembolso?",
    `${offer.support} Você tem 7 dias para solicitar o reembolso, conforme as condições da compra. Use o atendimento informado na confirmação para receber as orientações.`,
  ],
];
