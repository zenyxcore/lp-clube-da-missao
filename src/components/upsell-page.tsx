"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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

export function UpsellPage({caktoSnippet,checkoutUrl,fromApp}:{caktoSnippet:string;checkoutUrl:string;fromApp:boolean}){
 return <main className="season-offer"><header className="season-topbar"><Sparkles size={14}/> UM CONVITE ESPECIAL PARA SUA FAMÍLIA</header>
 <section className="season-hero"><Link className="season-brand" href="/"><Image src="/assets/clube-da-missao.webp" alt="Clube da Missão" width={150} height={150} priority/></Link><div className="season-hero-grid"><div><p className="season-eyebrow">TEMPORADA DE NOVAS AVENTURAS</p><h1>A próxima grande descoberta pode acontecer <em>na sua casa.</em></h1><p className="season-lead">Um foguete à espera da equipe. Um portal escondido. Um museu cheio de pistas. Leve mais cinco histórias para continuar explorando em família.</p><div className="season-stats"><span><b>5</b> novas histórias</span><span><b>30</b> desafios</span><span><b>1</b> pagamento</span></div><a className="season-buy" href="#pacote">Quero conhecer meu pacote <ArrowRight size={18}/></a><small>Conteúdo digital · Sem mensalidade · Oferta opcional</small></div><figure><Image src="/aventuras/colecao-premium.webp" alt="Representação ilustrativa das cinco aventuras digitais" width={1536} height={1024} priority sizes="(max-width:800px) 100vw, 55vw"/><figcaption>Imagem ilustrativa do pacote digital. Nenhum item físico é enviado.</figcaption></figure></div></section>
 <section className="season-worlds"><p className="season-eyebrow">ABRA O ATLAS. ESCOLHA O PRÓXIMO DESTINO.</p><h2>Cinco mundos para transformar<br/><em>mais tardes em aventura.</em></h2><p className="season-intro">Cada missão tem uma história própria, seis desafios e materiais para preparar a brincadeira em casa. Vocês escolhem por onde começar.</p><div className="season-world-grid">{SEASON_CATALOG.map((m,i)=><article key={m.id} className="season-world" style={{backgroundImage:`linear-gradient(0deg,#061e20 4%,#061e2022 95%),url(${m.scene})`}}><span className="season-number">DESTINO 0{i+1}</span><Image className="season-world-logo" src={m.logo} alt="" width={240} height={240} sizes="240px"/><div><h3>{m.title}</h3><p>{m.intro}</p><span className="season-benefit">{m.benefit}</span><small>1 história · 6 desafios · guia e pistas imprimíveis</small></div></article>)}</div></section>
 <section className="season-how"><div><p className="season-eyebrow">A AVENTURA MUDA. A PRATICIDADE CONTINUA.</p><h2>Escolham a missão.<br/><em>A história conduz a equipe.</em></h2></div><ol>{[['Ative seu pacote','Após a aprovação, confirme o pedido e o e-mail da compra no Clube.'],['Prepare as pistas','Abra o guia, imprima os cartões e organize os esconderijos com objetos de casa.'],['Vivam a próxima descoberta','Sigam os seis desafios juntos e guardem o certificado da equipe ao final.']].map(([t,d],i)=><li key={t}><b>0{i+1}</b><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol></section>
 <section id="pacote" className="season-price-section"><figure><Image src="/aventuras/colecao-premium.webp" alt="Coleção ilustrativa com as cinco missões" width={1536} height={1024} sizes="(max-width:800px) 100vw, 55vw"/><figcaption>Representação do conteúdo digital, sem envio de caixa, livros ou acessórios.</figcaption></figure><div className="season-price-card"><span className="season-eyebrow">O PACOTE COMPLETO PARA SUA FAMÍLIA</span><h2>Cinco novas aventuras.<br/>Uma única compra.</h2><ul>{SEASON_CATALOG.map(m=><li key={m.id}><Check size={16}/>{m.title}</li>)}</ul><p className="season-total-label">Valor total das 5 missões</p><p className="season-total">R$ {SEASON_PRICE.toFixed(2).replace('.',',')}</p><p className="season-per">Equivale a <b>R$ 7,40 por aventura</b> no pacote.</p><p className="season-payment">Pagamento único. Pix ou cartão, conforme as opções disponíveis no checkout.</p><CaktoButtons snippet={fromApp?'':caktoSnippet} checkoutUrl={checkoutUrl}/><Link className="season-decline" href="https://clubedamissao.vercel.app/">{fromApp?'Voltar ao meu Clube':'Continuar apenas com a minha missão'}</Link><p className="season-reassurance"><ShieldCheck size={18}/>Sua missão principal é independente deste pacote. Você escolhe se quer acrescentar as novas aventuras.</p></div></section>
 <section className="season-faq"><h2>Antes da próxima expedição</h2>{[['Vou receber algo pelo correio?','Não. São aventuras digitais no Clube, com guias e pistas para imprimir ou salvar como PDF. A caixa e os livros representam a coleção.'],['É uma assinatura?','Não. O pacote é uma compra única de R$ 37, sem mensalidade.'],['Preciso dos enfeites para jogar?','Não. As pistas essenciais estão incluídas. Separe papel, lápis, livro, almofada e uma caixa com uma surpresa simples.'],['Para quais crianças?','Para crianças de 5 a 9 anos, com acompanhamento de um adulto. Reúna até três aventureiros.'],['Como ativo o pacote?','Depois do pagamento aprovado, abra o mapa do Clube e escolha “Já comprei, ativar meu pacote”. Use o e-mail e o ID completo do pedido do pacote. O progresso de cada missão fica neste navegador.']].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section><footer className="season-footer"><Image src="/assets/clube-da-missao.webp" alt="Clube da Missão" width={90} height={90}/><p>Grandes aventuras começam em casa.</p><Link href="/privacidade">Privacidade</Link></footer></main>;
}
