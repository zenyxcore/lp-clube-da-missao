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
    text: "Entregue o convite e surpreenda sua equipe com uma missão misteriosa.",
    image: "letter",
    ready: true,
  },
  {
    title: "Certificado Personalizado",
    text: "Comemore o fim da aventura com uma lembrança especial da conquista.",
    image: "certificate",
    ready: true,
  },
];
/** Adicione aqui somente fotos reais aprovadas dos materiais impressos. */
export const showcasePhotos: { src: string; alt: string }[] = [];
export const faqs = [
  ["Para qual idade a missão é indicada?", "Para crianças de 5 a 9 anos, com acompanhamento de um adulto."],
  ["Quantas crianças podem participar?", "Monte uma equipe com até 3 aventureiros, escolhendo os nomes e personagens."],
  ["Preciso imprimir os materiais?", "As pistas foram preparadas para imprimir em casa ou em uma papelaria. Se preferir, copie o texto e o código de cada pista em papéis separados, seguindo o guia. Não há envio pelo correio."],
  ["Preciso inventar as pistas ou os desafios?", "Não. A história, as pistas e os enigmas já estão preparados. Você organiza os esconderijos seguindo o guia."],
  ["A brincadeira acontece no celular?", "O app apresenta a história e acompanha os desafios. A busca pelas pistas acontece fisicamente pela casa, com a participação da família."],
  ["O tesouro está incluído?", "Você prepara o tesouro: um bilhete, um desenho ou uma pequena surpresa que já tenha em casa. Não é preciso comprar brinquedos ou acessórios."],
  ["Como recebo o acesso?", `${offer.accessDelivery} O link é liberado após a aprovação do pagamento. ${offer.accessDuration}`],
  ["Posso brincar novamente?", "Sim. A história é a mesma, mas você pode preparar outra rodada e alterar nomes e personagens. Reiniciar uma equipe apaga o progresso anterior dela."],
  ["As outras missões estão incluídas?", "Esta compra inclui O Tesouro Perdido, a Carta Secreta e o Certificado Personalizado. As cinco aventuras extras são um pacote opcional vendido separadamente. O Diário do Explorador também é opcional e pode ser adicionado no checkout."],
  ["Quanto tempo dura a aventura?", "A estimativa é de 25 a 40 minutos de brincadeira, conforme a idade e o ritmo da equipe. Reserve também cerca de 10 minutos para preparar os esconderijos."],
];
