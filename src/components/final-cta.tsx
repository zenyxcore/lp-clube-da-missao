"use client";
import Image from "next/image";
import { CheckoutButton, OfferCondition } from "./offer";
import { priceLabel, referencePriceLabel } from "@/lib/config";
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Image src="/assets/mundo-da-missao.webp" alt="" fill sizes="100vw" />
      <div className="container">
        <h2>
          Uma tarde comum pode virar
          <br />
          <em>a aventura que eles vão lembrar.</em>
        </h2>
        <p>
          Reúna seus pequenos exploradores, prepare as pistas e descubram juntos
          o que os espera no fim da missão.
        </p>
        <p className="final-offer-summary">
          A Missão Secreta completa e os bônus da edição por{" "}
          <del>{referencePriceLabel}</del> <b>{priceLabel}</b>. Compra única,
          acesso vitalício e sem mensalidade.
        </p>
        <OfferCondition final />
        <CheckoutButton
          label="Quero viver essa aventura com minha família"
          placement="final"
        />
      </div>
    </section>
  );
}
