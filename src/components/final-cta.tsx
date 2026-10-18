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
          A próxima descoberta
          <br />
          <em>pode começar na sua casa.</em>
        </h2>
        <p>
          Imagine entregar a carta e convidar seus filhos para procurar um tesouro
          pela casa. A história e as pistas já estão prontas para vocês começarem.
        </p>
        <p className="final-offer-summary">
          De {" "}
          <del>{referencePriceLabel}</del> por <b>{priceLabel}</b>, com a missão e os dois bônus.
          Compra única com acesso vitalício.
        </p>
        <OfferCondition final />
        <CheckoutButton
          label="Comprar Missão Secreta"
          placement="final"
        />
      </div>
    </section>
  );
}
