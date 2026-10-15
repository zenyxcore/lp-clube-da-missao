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
            CAÇA AO TESOURO PARA CRIANÇAS DE 5 A 9 ANOS
          </span>
          <h1>
            Transforme sua casa em uma <em>grande aventura.</em>
          </h1>
          <p>
            Você imprime e esconde as pistas. As crianças seguem a história no
            celular, resolvem 6 desafios e procuram o tesouro pela casa. Uma
            brincadeira pronta para viver em família.
          </p>
          <div className="hero-actions">
            <Cta>Quero essa aventura para minha família</Cta>
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
              História na tela, diversão pela casa
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
