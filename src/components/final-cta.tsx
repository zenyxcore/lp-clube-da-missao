"use client";
import Image from "next/image";
import { OfferCondition } from "./offer";
import { Cta } from "./shared";
import { priceLabel, referencePriceLabel } from "@/lib/config";
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
        <p className="final-offer-summary">
          <strong>Última chance:</strong> missão completa + bônus da edição por
          <del>{referencePriceLabel}</del> <b>{priceLabel}</b>. Compra única,
          acesso vitalício e sem mensalidade.
        </p>
        <OfferCondition final />
        <Cta placement="final">Quero essa aventura para minha família</Cta>
      </div>
    </section>
  );
}
