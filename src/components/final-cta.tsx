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
          Uma carta para abrir, pistas para procurar e uma história para viver
          juntos. Prepare a missão e convide seus aventureiros.
        </p>
        <p className="final-offer-summary">
          De {" "}
          <del>{referencePriceLabel}</del> por <b>{priceLabel}</b>, com a missão e os dois bônus. Compra única,
          acesso vitalício e sem mensalidade.
        </p>
        <OfferCondition final />
        <CheckoutButton
          label="Quero a Missão Secreta"
          placement="final"
        />
      </div>
    </section>
  );
}
