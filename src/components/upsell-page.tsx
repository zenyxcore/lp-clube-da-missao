"use client";

import Image from "next/image";
import Link from "next/link";
import { Analytics } from "./analytics";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, ChevronDown, ArrowUp } from "lucide-react";

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
    // The main product is delivered in our external app, including after a refusal.
    fragment.querySelectorAll("cakto-upsell-accept, cakto-upsell-reject").forEach((button) => {
      button.setAttribute("upsell-reject-url", "https://clubedamissao.vercel.app/");
    });
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
  ['Como libero as novas missões?', 'Após a aprovação do pagamento, abra o mapa do Clube e toque em “Já comprei, ativar meu pacote”. Informe o e-mail e o ID completo do pedido deste pacote.'],
  ['Posso escolher por qual começar?', 'Sim. As cinco missões ficam disponíveis no mapa. Sua equipe escolhe a ordem e quando brincar.'],
  ['É uma assinatura ou uma entrega física?', 'É uma compra única, sem mensalidade. As histórias e os materiais para imprimir ficam no Clube. Nenhum item físico é enviado.'],
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
      <Analytics />
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
          <p className="expedition-lead"><strong>Mais cinco aventuras para viver em família.</strong> Histórias, desafios e pistas prontos para a próxima descoberta.</p>
          <a className="expedition-cta" href="#pacote">Quero as cinco novas aventuras <ArrowRight size={19} aria-hidden="true" /></a>
          <p className="expedition-hero-note">R$ 7,40 por aventura · As cinco por R$ 37 à vista</p>
        </div>
        <figure className="expedition-collection">
          <div className="expedition-collection-label">CINCO NOVOS DESTINOS. UMA COLEÇÃO COMPLETA.</div>
          <Image src="/upsell/premium/colecao.webp" alt="Representação ilustrativa da coleção com as cinco novas aventuras do Clube da Missão" width={1536} height={1024} priority sizes="(max-width: 800px) 100vw, 58vw" />
          <figcaption>Coleção digital de aventuras · Mockup ilustrativo</figcaption>
        </figure>
      </section>

      <section className="expedition-destinations" id="novas-missoes" aria-labelledby="worlds-title">
        <div className="expedition-container">
          <div className="expedition-section-heading"><p className="expedition-eyebrow">SUA PRÓXIMA AVENTURA COMEÇA AQUI</p><h2 id="worlds-title">Cinco mundos.<br /><em>Novas descobertas juntos.</em></h2><p>Escolham um destino. O Clube guia a história; vocês resolvem as pistas juntos.</p></div>
          <div className="expedition-worlds" ref={worlds} onScroll={() => {
            const element = worlds.current;
            if (!element || window.matchMedia('(min-width: 761px)').matches) return;
            const first = element.children[0] as HTMLElement;
            const second = element.children[1] as HTMLElement;
            const distance = second.offsetLeft - first.offsetLeft;
            if (distance > 0) setActiveWorld(Math.max(0, Math.min(SEASON_CATALOG.length - 1, Math.round(element.scrollLeft / distance))));
          }}>
            {SEASON_CATALOG.map((mission, index) => <article className="expedition-world" key={mission.id} style={{ '--world-color': mission.color } as CSSProperties}>
              <div className="expedition-world-scene"><Image src={`/upsell/premium/${mission.id}.webp`} alt={`Cenário da aventura ${mission.title}`} fill sizes="(max-width: 760px) 85vw, (max-width: 1050px) 45vw, 33vw" /><span className="expedition-world-number">AVENTURA 0{index + 1}</span></div>
              <div className="expedition-world-copy"><span className="expedition-world-invitation">{DESTINATION_LABELS[index]}</span><h3>{mission.title}</h3><p>{mission.intro}</p></div>
            </article>)}
          </div>
          <div className="expedition-carousel-controls" aria-label="Navegar pelas aventuras"><button type="button" aria-label="Ver aventura anterior" onClick={() => moveWorld(-1)} disabled={activeWorld === 0}><ChevronLeft size={22} /></button><span>0{activeWorld + 1} <i>/ 05</i><small>Deslize para explorar os destinos</small></span><button type="button" aria-label="Ver próxima aventura" onClick={() => moveWorld(1)} disabled={activeWorld === 4}><ChevronRight size={22} /></button></div>
          <div className="expedition-worlds-cta"><a className="expedition-ink-link" href="#pacote">Quero levar os cinco destinos para o meu Clube <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="expedition-package" id="pacote" aria-labelledby="package-title"><div className="expedition-package-layout expedition-container">
        <div className="expedition-package-story"><p className="expedition-eyebrow">TUDO PRONTO PARA CONTINUAR</p><h2 id="package-title">Uma coleção inteira.<br /><em>Muitas tardes de aventura.</em></h2><p>Cada missão inclui a história, os desafios, o guia do responsável e as pistas. Você só prepara o cenário e reúne a equipe.</p><ol className="expedition-simple-steps"><li><span>01</span><div><strong>Ative no Clube</strong><p>Use o e-mail e o ID do pedido aprovado.</p></div></li><li><span>02</span><div><strong>Prepare as pistas</strong><p>Siga o guia da aventura escolhida.</p></div></li><li><span>03</span><div><strong>Comecem a missão</strong><p>A história conduz a diversão em família.</p></div></li></ol><div className="expedition-collection-benefits"><span><Check size={16} /> Cinco histórias completas</span><span><Check size={16} /> Materiais de cada missão</span><span><Check size={16} /> Sem mensalidade</span></div></div>
        <div className="expedition-price-card"><span className="expedition-price-ribbon">TEMPORADA DE NOVAS AVENTURAS</span><h3>Leve as cinco.<br />Descubram muito mais.</h3><div className="expedition-offer-pack"><Image src="/upsell/premium/colecao.webp" alt="Coleção das cinco novas missões do Clube da Missão" width={1200} height={800} sizes="(max-width: 760px) 90vw, 480px" /></div><div className="expedition-price"><span>Cinco aventuras no pacote. Cada uma por</span><strong>R$ {(SEASON_PRICE / SEASON_CATALOG.length).toFixed(2).replace('.', ',')}</strong><p className="expedition-unit-label">por missão, no pacote completo</p><div className="expedition-total"><span>Total pelas cinco missões</span><b>R$ {SEASON_PRICE.toFixed(2).replace('.', ',')} à vista</b></div></div><p className="expedition-payment">Pagamento único · Pix ou cartão</p><CaktoButtons snippet={fromApp ? '' : caktoSnippet} checkoutUrl={checkoutUrl} />{(fromApp || !caktoSnippet) && <Link className="expedition-decline" href="https://clubedamissao.vercel.app/">{fromApp ? 'Voltar ao meu Clube' : 'Continuar apenas com a Missão Secreta'}</Link>}<p className="expedition-purchase-note"><ShieldCheck size={18} aria-hidden="true" /><span>Pacote adicional. O Tesouro Perdido continua incluído na sua compra principal.</span></p></div>
      </div></section>

      <section className="expedition-faq expedition-container" aria-labelledby="faq-title"><div><p className="expedition-eyebrow">ANTES DE PARTIR</p><h2 id="faq-title">Antes de<br /><em>começar.</em></h2><p>Só o que você precisa saber.</p></div><div>{FAQS.map(([question, answer]) => <details key={question} name="expedition-faq"><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
      <footer className="expedition-footer"><Image src="/assets/clube-da-missao.webp" alt="Clube da Missão" width={76} height={76} /><p>A história continua.<br /><strong>A próxima descoberta é de vocês.</strong></p><div><Link href="https://clubedamissao.vercel.app/">Meu Clube</Link><Link href="/privacidade">Privacidade</Link><button type="button" onClick={() => window.dispatchEvent(new Event("clube:privacy"))} style={{ background: "none", border: 0, padding: 0, font: "inherit", fontSize: 11, color: "#b3a9bd", cursor: "pointer", minHeight: 44 }}>Aviso de privacidade</button><a href="#topo">Voltar ao topo <ArrowUp size={13} aria-hidden="true" /></a></div></footer>
    </main>
  );
}
