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
      "https://scripts.converteai.net/d10e2dd0-f3c6-4a5e-ac67-f00f394436c3/players/6ad280f6a884ed0eb810d455/v4/embed.html" +
      (window.location.search || "?") +
      "&vl=" +
      encodeURIComponent(window.location.href);
  }, []);

  return (
    <section id="inicio" className="hero hero-story">
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
          <span>Transforme</span>
          <span>sua casa em uma</span>
          <em>Grande Aventura!</em>
        </h1>
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
                id="ifr_6ad280f6a884ed0eb810d455"
                className="hero-vturb-iframe"
                referrerPolicy="origin"
                title="Conheça a Missão Secreta"
              />
            </div>
          </div>
        </div>
        <div className="hero-story-pitch">
          <h2>
            Uma caça ao tesouro em casa.
            <br />
            <em>Uma lembrança para sempre.</em>
          </h2>
          <p>
            Pistas escondidas, mistérios para resolver e a alegria de descobrir
            juntos. Uma aventura pronta para transformar o tempo em família.
          </p>
          <Cta placement="hero">Quero essa aventura para minha família</Cta>
          <div className="hero-story-facts">
            <span>
              <Check size={15} /> De 5 a 9 anos
            </span>
            <span>
              <Check size={15} /> {offer.accessLabel}
            </span>
            <span>
              <Check size={15} /> {offer.billingLabel}
            </span>
          </div>
          <a className="hero-discover" href="#aventura">
            Conheça o que sua família recebe <ChevronDown size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
