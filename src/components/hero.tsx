"use client";
import Image from "next/image";
import { Check, ChevronDown, Compass } from "lucide-react";
import { offer } from "@/lib/config";
import { Art, Cta } from "./shared";
export function Hero() {
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
        <div className="hero-film-frame">
          <span className="frame-corner top-left" aria-hidden="true" />
          <span className="frame-corner top-right" aria-hidden="true" />
          <span className="frame-corner bottom-left" aria-hidden="true" />
          <span className="frame-corner bottom-right" aria-hidden="true" />
          {offer.videoUrl ? (
            <video
              controls
              playsInline
              preload="none"
              poster="/assets/mundo-da-missao.webp"
              aria-label="Conheça a Missão Secreta"
            >
              <source src={offer.videoUrl} />
              Seu navegador não suporta este vídeo.
            </video>
          ) : (
            <div className="hero-film-poster">
              <Image
                src="/assets/mundo-da-missao.webp"
                alt="O universo da Missão Secreta: uma floresta cheia de descobertas"
                fill
                sizes="(max-width: 700px) 94vw, 820px"
                priority
              />
              <div>
                <Compass size={22} aria-hidden="true" />
                <span>UMA MISSÃO. INFINITAS MEMÓRIAS.</span>
                <Art
                  name="missao-secreta"
                  alt="Missão Secreta — A Caça ao Tesouro Perdido"
                />
              </div>
            </div>
          )}
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
