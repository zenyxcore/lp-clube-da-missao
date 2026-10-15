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
  maxAdventurers: 3,
  currency: "BRL",
  checkoutUrl: safeUrl(process.env.NEXT_PUBLIC_CHECKOUT_URL),
  interestUrl: safeUrl(process.env.NEXT_PUBLIC_INTEREST_URL),
  endsAt: process.env.NEXT_PUBLIC_OFFER_END_AT || "",
  videoUrl: safeUrl(process.env.NEXT_PUBLIC_DEMO_VIDEO_URL), // Arquivo MP4/WebM, sem autoplay.
  metaPixelId:
    safeUrl(process.env.NEXT_PUBLIC_PRIVACY_URL) &&
    /^\d{5,20}$/.test(process.env.NEXT_PUBLIC_META_PIXEL_ID || "")
      ? process.env.NEXT_PUBLIC_META_PIXEL_ID!
      : "",
  termsUrl: safeUrl(process.env.NEXT_PUBLIC_TERMS_URL),
  privacyUrl: safeUrl(process.env.NEXT_PUBLIC_PRIVACY_URL),
  supportUrl: safeUrl(process.env.NEXT_PUBLIC_SUPPORT_URL),
  accessDelivery:
    "A forma de entrega do acesso será informada na abertura das vendas. Nenhuma compra está sendo recebida nesta prévia.",
  accessDuration:
    "O prazo de acesso está em definição e será informado antes da abertura das vendas.",
  support:
    "O canal e os horários de suporte serão publicados antes da abertura das vendas.",
  testimonials: [] as Testimonial[],
};
export const priceLabel = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: offer.currency,
}).format(offer.price);
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
    image: "shield",
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
export const faqs = [
  [
    "Para qual idade a Missão Secreta é indicada?",
    "A aventura foi pensada para crianças de 5 a 9 anos, com a companhia de um adulto. O responsável pode ajudar na leitura e adaptar a condução à sua equipe.",
  ],
  [
    "O que exatamente estou comprando?",
    "Uma experiência digital de caça ao tesouro para brincar em casa: história interativa, seis desafios, pistas e mapa para imprimir, guia do responsável, personalização da equipe e certificado. Os itens disponíveis estão detalhados nesta página.",
  ],
  [
    "Preciso imprimir os materiais?",
    "Para a experiência de caça ao tesouro proposta, recomendamos imprimir as pistas e escondê-las pela casa seguindo o guia. A história e os desafios são acompanhados pela plataforma.",
  ],
  [
    "Quanto tempo leva para preparar a aventura?",
    "O guia orienta uma preparação de aproximadamente 10 minutos. A missão costuma durar de 25 a 40 minutos, dependendo do ritmo e da ajuda que cada equipe precisar.",
  ],
  [
    "Posso cadastrar mais de uma criança?",
    "Sim. A versão atual permite cadastrar até três aventureiros, com nomes e avatares, e escolher quem participa da missão.",
  ],
  [
    "Preciso de algum material especial?",
    "Você vai precisar de um celular ou computador com internet, das pistas impressas e de um pequeno tesouro escolhido por você. O tesouro físico não acompanha o produto; pode ser uma surpresa simples que faça sentido para a família.",
  ],
  [
    "O jogo funciona no celular?",
    "Sim. A plataforma tem interface responsiva para celular e computador. Um adulto acompanha a tela enquanto as crianças exploram os espaços e procuram as pistas.",
  ],
  ["Como recebo o acesso após a compra?", offer.accessDelivery],
  ["Por quanto tempo terei acesso?", offer.accessDuration],
  [
    "Como funciona o suporte e o reembolso?",
    `${offer.support} Nas compras online, o Código de Defesa do Consumidor prevê o direito de arrependimento em até sete dias, conforme o art. 49. As orientações para solicitar o reembolso serão disponibilizadas antes das vendas.`,
  ],
];
