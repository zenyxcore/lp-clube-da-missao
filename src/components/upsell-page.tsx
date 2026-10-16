"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Check, Compass, ScrollText, Sparkles } from "lucide-react";

const adventures = [
  { title: "O Código da Estação Espacial", image: "/upsell/missions/codigo-espacial.webp" },
  { title: "O Segredo da Floresta Antiga", image: "/upsell/missions/floresta-antiga.webp" },
  { title: "Mistério no Museu", image: "/upsell/missions/misterio-museu.webp" },
  { title: "O Resgate dos Animais", image: "/upsell/missions/resgate-animal.webp" },
  { title: "O Enigma do Farol", image: "/upsell/missions/enigma-farol.webp" },
];

function CaktoButtons({ snippet }: { snippet: string }) {
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

  if (!snippet) {
    return (
      <div className="upsell-integration-pending" role="status">
        <span>Oferta pronta para conectar à Cakto</span>
        <small>Os botões de aceitar e recusar aparecem após inserir o código gerado no painel.</small>
      </div>
    );
  }

  return <div className="upsell-cakto-buttons" ref={target} />;
}

export function UpsellPage({ caktoSnippet }: { caktoSnippet: string }) {
  return (
    <main className="upsell-page">
      <div className="upsell-glow" aria-hidden="true" />
      <div className="upsell-wrap">
        <Link className="upsell-brand" href="/" aria-label="Clube da Missão">
          <Image
            src="/assets/clube-da-missao.webp"
            alt="Clube da Missão"
            width={236}
            height={124}
            priority
          />
        </Link>

        <div className="upsell-layout">
          <section className="upsell-story">
            <span className="upsell-kicker">
              <Sparkles size={15} /> UMA OFERTA ESPECIAL PARA SUA FAMÍLIA
            </span>
            <h1>
              A primeira missão pode ser só o <em>começo.</em>
            </h1>
            <p className="upsell-lead">
              Sua Missão Secreta está garantida. Aproveite para levar mais cinco
              aventuras e ter novas histórias prontas para outras tardes em família.
            </p>

            <div className="upsell-collection" aria-label="Cinco novas missões">
              <div className="upsell-collection-mark">
                <Compass size={28} strokeWidth={1.6} />
                <span>5</span>
              </div>
              <div>
                <strong>Temporada de Novas Aventuras</strong>
                <span>5 histórias • 30 desafios • para imprimir</span>
              </div>
            </div>

            <ul className="upsell-adventure-list">
              {adventures.map((adventure, index) => (
                <li key={adventure.title}>
                  <span className="upsell-mission-art">
                    <Image
                      className="upsell-mission-image"
                      src={adventure.image}
                      alt={adventure.title}
                      width={112}
                      height={112}
                      sizes="(max-width: 760px) 100px, 88px"
                    />
                  </span>
                  <span className="upsell-mission-title">
                    <small>MISSÃO 0{index + 1}</small>
                    <strong>{adventure.title}</strong>
                  </span>
                  <span className="upsell-mission-check" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                </li>
              ))}
            </ul>

            <p className="upsell-note">
              Cada aventura vem em PDF com uma história, guia de preparação e seis
              desafios para imprimir e brincar em casa.
            </p>
          </section>

          <aside className="upsell-offer-card">
            <div className="upsell-card-art" aria-hidden="true">
              <div className="upsell-art-ring" />
              <div className="upsell-art-paper paper-back"><ScrollText /></div>
              <div className="upsell-art-paper paper-front">
                <Image src="/assets/openmap.webp" alt="" width={220} height={180} />
                <span>5 NOVAS MISSÕES</span>
              </div>
              <Image
                className="upsell-art-compass"
                src="/assets/compass.webp"
                alt=""
                width={86}
                height={86}
              />
            </div>
            <span className="upsell-card-label">ADICIONE À SUA COMPRA</span>
            <h2>Leve a próxima temporada de aventuras.</h2>
            <div className="upsell-price">
              <span>Pagamento único</span>
              <strong>R$ 37,00</strong>
            </div>
            <CaktoButtons snippet={caktoSnippet} />
            <p className="upsell-terms">
              Conteúdo digital em PDF. Sem mensalidade. A oferta é opcional.
            </p>
          </aside>
        </div>

        <footer className="upsell-footer">
          <Image src="/assets/shield.webp" alt="" width={24} height={24} />
          <span>Clube da Missão · Grandes aventuras começam em casa.</span>
        </footer>
      </div>
    </main>
  );
}
