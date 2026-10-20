"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import { offer } from "@/lib/config";
import { Art, Cta } from "./shared";

export function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    el.src =
      "https://scripts.converteai.net/f77f9cdf-7e95-44b3-9ec9-20eecaa568fb/players/6ad3e17c41ed223949a60415/v4/embed.html" +
      (window.location.search || "?") +
      "&vl=" +
      encodeURIComponent(window.location.href);
  }, []);

  return (
    <section id="inicio" className="hero hero-story hero-ready">
      <Image
        src="/assets/mundo-da-missao.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-background"
      />
      <div className="hero-shade" />
      <div className="container hero-story-content">
        <Art
          name="clube-da-missao"
          alt="Clube da Missão"
          className="hero-club-logo"
          priority
        />
        <h1>
          <span>Uma aventura inesquecível para seus filhos.</span>
          <em>Sem precisar inventar a brincadeira.</em>
        </h1>
        <div className="hero-story-pitch">
          <p>
            Transforme sua casa em uma caça ao tesouro com história, pistas imprimíveis
            e desafios prontos para toda a família participar.
          </p>
          <Cta placement="hero">QUERO ESSA AVENTURA</Cta>
          <div className="hero-story-facts">
            <span>
              <Check size={15} /> De 5 a 9 anos
            </span>
            <span>
              <Check size={15} /> {offer.accessLabel}
            </span>
            <span>
              <Check size={15} /> Até {offer.maxAdventurers} aventureiros
            </span>
          </div>
          <a className="hero-discover" href="#aventura">
            Veja a missão por dentro <ChevronDown size={17} />
          </a>
        </div>
        <div className="hero-film-frame hero-film-frame--vturb">
          <span className="frame-corner top-left" aria-hidden="true" />
          <span className="frame-corner top-right" aria-hidden="true" />
          <span className="frame-corner bottom-left" aria-hidden="true" />
          <span className="frame-corner bottom-right" aria-hidden="true" />
          <div className="hero-vturb-wrapper">
            <div className="hero-vturb-aspect">
              <iframe
                ref={iframeRef}
                frameBorder="0"
                allowFullScreen
                id="ifr_6ad3e17c41ed223949a60415"
                className="hero-vturb-iframe"
                referrerPolicy="origin"
                title="Conheça a Missão Secreta"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
