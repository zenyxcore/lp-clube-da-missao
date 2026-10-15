"use client";
import Image from "next/image";
import {
  ChevronDown,
  Check,
  Printer,
  UsersRound,
  Smartphone,
} from "lucide-react";
import { Art, Cta } from "./shared";
import { OfferCard } from "./offer";
export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Image
        src="/assets/mundo-da-missao.webp"
        alt="Exploradores diante de uma floresta, cachoeiras e um castelo ao pôr do sol"
        fill
        priority
        sizes="100vw"
        className="hero-background"
      />
      <div className="hero-shade" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow outlined">
            UMA AVENTURA DO CLUBE DA MISSÃO
          </span>
          <h1>
            Transforme sua casa em uma <em>grande aventura.</em>
          </h1>
          <p>
            Uma caça ao tesouro interativa, com pistas, mistérios e desafios que
            convidam as crianças a explorar, descobrir e viver momentos
            especiais em família.
          </p>
          <div className="hero-actions">
            <Cta />
            <a className="text-link" href="#como-funciona">
              Ver como funciona <ChevronDown size={16} />
            </a>
          </div>
          <div className="hero-indicators">
            <span>
              <UsersRound />
              Aventura em família
            </span>
            <span>
              <Smartphone />
              Digital + atividades reais
            </span>
            <span>
              <Printer />
              Pistas para imprimir
            </span>
            <span>
              <Check />
              De 5 a 9 anos
            </span>
          </div>
        </div>
        <div className="hero-offer">
          <Art name="compass" className="decor hero-compass" />
          <Art name="key" className="decor hero-key" />
          <OfferCard />
        </div>
      </div>
      <div className="hero-caption">
        <span>EXPLORAR</span>
        <i />
        DESCOBRIR
        <i />
        CRIAR MEMÓRIAS
      </div>
    </section>
  );
}
