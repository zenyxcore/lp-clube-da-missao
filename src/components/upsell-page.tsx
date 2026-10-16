"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles, Compass, ChevronLeft, ChevronRight, ChevronDown, ArrowUp } from "lucide-react";

import { SEASON_CATALOG, SEASON_PRICE } from '@/lib/season-catalog';
function CaktoButtons({ snippet, checkoutUrl }: { snippet: string; checkoutUrl:string }) {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = target.current;
    if (!container || !snippet) return;

    // This field is intended for the exact trusted embed generated in the Cakto dashboard.
    const template = document.createElement("template");
    template.innerHTML = snippet;
    const fragment = template.content;
    const scripts = Array.from(fragment.querySelectorAll("script"));
    container.replaceChildren(fragment);

    for (const original of scripts) {
      const script = document.createElement("script");
      for (const attribute of Array.from(original.attributes)) {
        script.setAttribute(attribute.name, attribute.value);
      }
      script.textContent = original.textContent;
      original.replaceWith(script);
    }

    return () => container.replaceChildren();
  }, [snippet]);

  if (!snippet) return checkoutUrl ? <a className="season-buy" href={checkoutUrl}>Quero minhas 5 aventuras <ArrowRight size={18}/></a> : <div><button className="season-buy" disabled>Quero minhas 5 aventuras</button><p className="season-unavailable">Oferta temporariamente indisponível para compra. Tente novamente em instantes.</p></div>;
  return <div className="upsell-cakto-buttons" ref={target} />;
}

const DESTINATION_LABELS = ['Decifre os sinais', 'Atravesse o portal', 'Investigue o mistério', 'Siga os rastros', 'Acenda a descoberta'];
const FAQS = [
  ['O que entra na minha coleção?', 'As cinco aventuras apresentadas nesta página, com histórias próprias, desafios, guias do responsável e pistas essenciais para preparar cada missão. O pacote é adicional à Missão Secreta — O Tesouro Perdido.'],
  ['Preciso fazer as missões em uma ordem?', 'Não. Depois de ativar o pacote, sua equipe escolhe no mapa qual aventura quer começar. Vocês podem reservar cada história para um novo momento em família.'],
  ['Como acesso depois da compra?', 'Após a aprovação do pagamento, abra o mapa do Clube e escolha “Já comprei, ativar meu pacote”. Confirme o e-mail e o ID completo do pedido das cinco aventuras. O progresso das missões fica neste navegador.'],
  ['É uma assinatura?', 'Não. É uma compra única do pacote por R$ 37, sem mensalidade. As formas de pagamento e o valor final são apresentados no checkout.'],
  ['Preciso comprar acessórios?', 'Não. Os materiais essenciais de cada missão já estão incluídos. Você prepara as pistas e uma surpresa simples com objetos de casa. Crianças de 5 a 9 anos brincam acompanhadas por um adulto.'],
  ['Vou receber uma caixa pelo correio?', 'Não. A caixa e as capas são uma representação ilustrativa da coleção digital. As aventuras ficam no Clube, com materiais para imprimir. Nenhum item físico é enviado.'],
];

export function UpsellPage({ caktoSnippet, checkoutUrl, fromApp }: { caktoSnippet: string; checkoutUrl: string; fromApp: boolean }) {
  const worlds = useRef<HTMLDivElement>(null);
  const [activeWorld, setActiveWorld] = useState(0);
  function moveWorld(direction: number) {
    const element = worlds.current;
    if (!element) return;
    const next = Math.max(0, Math.min(SEASON_CATALOG.length - 1, activeWorld + direction));
    const first = element.children[0] as HTMLElement;
    const destination = element.children[next] as HTMLElement;
    element.scrollTo({ left: destination.offsetLeft - first.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return (
    <main className="expedition-offer" id="topo">
      <a className="skip-link" href="#novas-missoes">Conhecer as cinco aventuras</a>
      <header className="expedition-header">
        <Link href="/" className="expedition-brand" aria-label="Clube da Missão — página principal">
          <Image src="/assets/clube-da-missao.webp" alt="Clube da Missão" width={82} height={82} priority />
          <span>O CLUBE CONTINUA<small>Temporada de Novas Aventuras</small></span>
        </Link>
        <span className="expedition-optional"><Sparkles size={13} aria-hidden="true" /> Coleção adicional</span>
      </header>

      <section className="expedition-hero expedition-container" aria-labelledby="expedition-title">
        <div className="expedition-hero-copy">
          <p className="expedition-eyebrow">{fromApp ? 'NOVOS DESTINOS PARA SUA EQUIPE' : 'UM CONVITE PARA CONTINUAR A AVENTURA'}</p>
          <h1 id="expedition-title">A primeira missão<br />é só <em>o começo.</em></h1>
          <p className="expedition-lead">O Clube tem novos mundos esperando pelos seus aventureiros. Acrescente <strong>cinco histórias à sua coleção</strong> e tenham sempre um próximo destino para descobrir juntos.</p>
          <a className="expedition-cta" href="#pacote">Quero as cinco novas aventuras <ArrowRight size={19} aria-hidden="true" /></a>
          <p className="expedition-hero-note">Uma única compra. Muitas próximas descobertas.</p>
        </div>
        <figure className="expedition-collection">
          <div className="expedition-collection-label"><Compass size={17} aria-hidden="true" /> A COLEÇÃO COMPLETA</div>
          <Image src="/aventuras/colecao-premium.webp" alt="Representação ilustrativa da coleção com as cinco novas aventuras do Clube da Missão" width={1536} height={1024} priority sizes="(max-width: 800px) 100vw, 58vw" />
          <figcaption>Coleção digital · Imagem ilustrativa, sem envio de itens físicos.</figcaption>
        </figure>
      </section>

      <div className="expedition-passport expedition-container" aria-label="O que a coleção inclui">
        <div><span>01 / A COLEÇÃO</span><strong>5 novas histórias</strong><small>Um mundo diferente em cada missão.</small></div>
        <div><span>02 / A DESCOBERTA</span><strong>30 desafios</strong><small>Pistas para a equipe resolver junta.</small></div>
        <div><span>03 / A PRATICIDADE</span><strong>Tudo no mesmo Clube</strong><small>Histórias, guias e materiais organizados.</small></div>
      </div>

      <section className="expedition-destinations" id="novas-missoes" aria-labelledby="worlds-title">
        <div className="expedition-container">
          <div className="expedition-section-heading"><p className="expedition-eyebrow">ABRA O ATLAS. ESCOLHA SEU PRÓXIMO DESTINO.</p><h2 id="worlds-title">Cinco mundos.<br /><em>Um novo capítulo em cada um.</em></h2><p>Do silêncio de uma estação espacial aos sinais de um farol, cada história convida a equipe a investigar, imaginar e descobrir.</p></div>
          <div className="expedition-worlds" ref={worlds} onScroll={() => {
            const element = worlds.current;
            if (!element || window.matchMedia('(min-width: 761px)').matches) return;
            const first = element.children[0] as HTMLElement;
            const second = element.children[1] as HTMLElement;
            const distance = second.offsetLeft - first.offsetLeft;
            if (distance > 0) setActiveWorld(Math.max(0, Math.min(SEASON_CATALOG.length - 1, Math.round(element.scrollLeft / distance))));
          }}>
            {SEASON_CATALOG.map((mission, index) => <article className="expedition-world" key={mission.id} style={{ '--world-color': mission.color } as CSSProperties}>
              <div className="expedition-world-scene"><Image src={mission.scene} alt="" fill sizes="(max-width: 760px) 85vw, (max-width: 1050px) 45vw, 33vw" /><span className="expedition-world-number">DESTINO 0{index + 1}</span><Image className="expedition-world-logo" src={mission.logo} alt="" width={210} height={210} sizes="210px" /></div>
              <div className="expedition-world-copy"><span className="expedition-world-invitation">{DESTINATION_LABELS[index]}</span><h3>{mission.title}</h3><p>{mission.intro}</p><div className="expedition-world-detail"><Compass size={15} aria-hidden="true" /><span>{mission.benefit}</span></div><small>História própria · Desafios · Guia e pistas</small></div>
            </article>)}
          </div>
          <div className="expedition-carousel-controls" aria-label="Navegar pelas aventuras"><button type="button" aria-label="Ver aventura anterior" onClick={() => moveWorld(-1)} disabled={activeWorld === 0}><ChevronLeft size={22} /></button><span>0{activeWorld + 1} <i>/ 05</i><small>Deslize para explorar os destinos</small></span><button type="button" aria-label="Ver próxima aventura" onClick={() => moveWorld(1)} disabled={activeWorld === 4}><ChevronRight size={22} /></button></div>
          <div className="expedition-worlds-cta"><a className="expedition-ink-link" href="#pacote">Quero levar os cinco destinos para o meu Clube <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="expedition-ritual expedition-container" aria-labelledby="ritual-title"><div><p className="expedition-eyebrow">NOVAS HISTÓRIAS. O MESMO JEITO DE BRINCAR.</p><h2 id="ritual-title">A surpresa muda.<br /><em>O guia continua com você.</em></h2><p>Você não precisa inventar os enigmas nem construir uma história do zero. Cada aventura já tem seu caminho preparado.</p></div><ol>{[
        ['Escolham o próximo mundo', 'Ative o pacote com os dados da compra e abra uma das cinco aventuras no mapa do Clube.'],
        ['Prepare a descoberta', 'Siga o guia da missão, imprima as pistas e organize os esconderijos com objetos de casa.'],
        ['Reúnam os aventureiros', 'Acompanhe a equipe na história e nos desafios. Ao final, guardem o certificado dessa nova conquista.'],
      ].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

      <section className="expedition-package" id="pacote" aria-labelledby="package-title"><div className="expedition-package-layout expedition-container">
        <div className="expedition-package-story"><p className="expedition-eyebrow">O PRÓXIMO CAPÍTULO DA SUA COLEÇÃO</p><h2 id="package-title">Leve os cinco mundos.<br /><em>Escolham quando explorar.</em></h2><p>Uma aventura para o próximo fim de semana. Outra para uma tarde em casa. Cinco novos motivos para reunir a equipe e abrir o mapa outra vez.</p><Image src="/aventuras/colecao-premium.webp" alt="As cinco aventuras representadas em uma coleção ilustrativa" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 50vw" /><div className="expedition-collection-benefits"><span><Check size={16} /> Cinco histórias completas</span><span><Check size={16} /> Materiais de cada missão</span><span><Check size={16} /> Sem mensalidade</span></div></div>
        <div className="expedition-price-card"><span className="expedition-price-ribbon">TEMPORADA DE NOVAS AVENTURAS</span><h3>Sua coleção com<br />cinco novos destinos.</h3><ul className="expedition-included">{SEASON_CATALOG.map(mission => <li key={mission.id}><Image src={mission.logo} alt="" width={48} height={48} /><span>{mission.title}</span><Check size={15} aria-hidden="true" /></li>)}</ul><div className="expedition-price"><span>Valor do pacote completo</span><strong>R$ {SEASON_PRICE.toFixed(2).replace('.', ',')}</strong><p>Apenas <b>R$ {(SEASON_PRICE / 5).toFixed(2).replace('.', ',')} por aventura</b> no pacote.</p></div><p className="expedition-payment">Pagamento único. Pix ou cartão, conforme as opções do checkout. Confira o valor final antes de concluir.</p><CaktoButtons snippet={fromApp ? '' : caktoSnippet} checkoutUrl={checkoutUrl} />{(fromApp || !caktoSnippet) && <Link className="expedition-decline" href="https://clubedamissao.vercel.app/">{fromApp ? 'Voltar ao meu Clube' : 'Continuar apenas com a Missão Secreta'}</Link>}<p className="expedition-purchase-note"><ShieldCheck size={18} aria-hidden="true" /><span>Pacote opcional, separado de O Tesouro Perdido. Sua missão principal continua independente desta compra.</span></p></div>
      </div></section>

      <section className="expedition-faq expedition-container" aria-labelledby="faq-title"><div><p className="expedition-eyebrow">ANTES DE PARTIR</p><h2 id="faq-title">Tudo certo para<br /><em>a próxima missão?</em></h2><p>As respostas para preparar sua próxima descoberta com tranquilidade.</p></div><div>{FAQS.map(([question, answer]) => <details key={question} name="expedition-faq"><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
      <footer className="expedition-footer"><Image src="/assets/clube-da-missao.webp" alt="Clube da Missão" width={76} height={76} /><p>A história continua.<br /><strong>A próxima descoberta é de vocês.</strong></p><div><Link href="https://clubedamissao.vercel.app/">Meu Clube</Link><Link href="/privacidade">Privacidade</Link><a href="#topo">Voltar ao topo <ArrowUp size={13} aria-hidden="true" /></a></div></footer>
    </main>
  );
}
