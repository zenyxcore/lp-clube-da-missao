"use client";
import Image from "next/image";
import { CheckoutButton, OfferCondition } from "./offer";
import { priceLabel } from "@/lib/config";
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Image src="/assets/mundo-da-missao.webp" alt="" fill sizes="100vw" />
      <div className="container">
        <h2>
          A próxima aventura da sua família
          <br />
          <em>pode começar em casa.</em>
        </h2>
        <p>
          Uma história misteriosa, pistas prontas e uma equipe esperando para entrar em ação.
        </p>
        <div className="final-offer-pack">
          <Image
            src="/assets/box-pack-oferta.webp"
            alt="Apresentação visual da Missão Secreta e dos materiais da aventura"
            width={1000}
            height={706}
            sizes="(max-width: 600px) 85vw, 480px"
            className="final-offer-pack-image"
          />
        </div>
        <p className="final-offer-summary">
          <b>{priceLabel}</b> · Pagamento único · Acesso vitalício
        </p>
        <OfferCondition final />
        <CheckoutButton
          label="GARANTIR MINHA MISSÃO"
          showNote={false}
          placement="final"
        />
      </div>
    </section>
  );
}
