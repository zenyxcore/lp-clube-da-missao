"use client";
import Image from "next/image";
import { Cta } from "./shared";
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Image src="/assets/mundo-da-missao.webp" alt="" fill sizes="100vw" />
      <div className="container">
        <span className="eyebrow">
          O TESOURO É O TEMPO QUE VOCÊS VIVEM JUNTOS
        </span>
        <h2>
          Crie memórias que eles vão
          <br />
          <em>levar para a vida toda.</em>
        </h2>
        <p>
          Prepare as pistas, reúna seus pequenos exploradores e descubra como
          uma tarde em casa pode se transformar em uma história especial.
        </p>
        <Cta>QUERO VIVER ESSA MISSÃO</Cta>
      </div>
    </section>
  );
}
