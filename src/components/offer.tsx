"use client";
import { useId } from "react";
import { ArrowRight, Check, CreditCard, Gift } from "lucide-react";
import {
  bonuses,
  offer,
  priceLabel,
  referencePriceLabel,
  resources,
} from "@/lib/config";
import { checkoutWithCampaign, offerExpired } from "@/lib/campaign";
import { trackCheckout } from "./analytics";
import { Art, Heading, useClock } from "./shared";
export function CheckoutButton({
  label = "Quero minha aventura em família",
}: {
  label?: string;
}) {
  const now = useClock(),
    noteId = useId();
  const expired = now !== null && offerExpired(offer.endsAt, now);
  const target = offer.checkoutUrl || offer.interestUrl;
  const active = Boolean(target) && !expired && (!offer.endsAt || now !== null);
  function visit() {
    let remembered = "";
    try {
      remembered = sessionStorage.getItem("clube-lp:campaign") || "";
    } catch {}
    if (offer.checkoutUrl) trackCheckout();
    window.location.assign(
      checkoutWithCampaign(target, window.location.search, remembered),
    );
  }
  return (
    <>
      <button
        className="button purchase"
        disabled={!active}
        onClick={visit}
        aria-describedby={noteId}
      >
        {expired
          ? "Condição encerrada"
          : active && !offer.checkoutUrl
            ? "Quero receber novidades"
            : label}
        <ArrowRight size={19} />
      </button>
      <p id={noteId} className="purchase-note">
        {expired
          ? "Aguarde a divulgação de uma nova condição."
          : active
            ? offer.checkoutUrl
              ? "Compra única. Confira as condições no checkout."
              : "Cadastre seu interesse pelo canal oficial."
            : "Vendas em breve. A compra ainda não está liberada e nenhuma cobrança será feita."}
      </p>
    </>
  );
}
export function OfferCard({ full = false }: { full?: boolean }) {
  const activeBonuses = bonuses.filter((b) => b.ready);
  return (
    <div className={`offer-card ${full ? "full-offer" : ""}`}>
      <span className="edition">CONDIÇÃO ESPECIAL DE LANÇAMENTO</span>
      <Art
        name="missao-secreta"
        alt="Missão Secreta"
        className="mission-logo"
        priority={!full}
      />
      <h3>A Caça ao Tesouro Perdido</h3>
      <p className="offer-description">
        Uma caça ao tesouro para brincar em casa, com crianças de 5 a 9 anos.
      </p>
      <div className="offer-includes-label">SUA FAMÍLIA RECEBE:</div>
      <ul className="offer-list">
        {(full
          ? resources.filter((r) => r.ready).map((r) => r.title)
          : [
              "História + 6 desafios para resolver",
              "Mapa, pistas e guia para imprimir",
              `Missão para até ${offer.maxAdventurers} aventureiros`,
            ]
        ).map((title) => (
          <li key={title}>
            <Check size={18} />
            {title}
          </li>
        ))}
      </ul>
      {activeBonuses.length > 0 && (
        <div className="offer-bonus-line">
          <Gift size={18} />
          <span>
            <strong>Você ainda ganha {activeBonuses.length} bônus</strong>
            <span>
              {activeBonuses.map((b) => b.title).join(" + ")}. Sem custo extra.
            </span>
          </span>
        </div>
      )}
      <div className="price">
        <span className="price-reference">
          De <del>{referencePriceLabel}</del>
        </span>
        <span className="price-launch-label">
          Na condição de lançamento, por
        </span>
        <strong>{priceLabel}</strong>
        <small>Uma única compra. Sem mensalidade.</small>
      </div>
      <div className="installments-note">
        <CreditCard size={19} />
        <div>
          <strong>{offer.installmentsLabel}</strong>
          <span>{offer.installmentsDetail}</span>
        </div>
      </div>
      <CheckoutButton />
      <span className="offer-foot">
        Produto digital · materiais para imprimir
      </span>
    </div>
  );
}
export function Offer() {
  return (
    <section className="section offer-section" id="oferta">
      <div className="container">
        <Heading
          eyebrow="TUDO EM UMA ÚNICA COMPRA"
          text="História, desafios, materiais para imprimir e bônus. Você prepara a casa; as crianças vivem a aventura."
        >
          Uma missão completa.
          <br />
          <em>Uma tarde para lembrar.</em>
        </Heading>
        <div className="final-offer-wrap">
          <Art name="compass" className="decor final-compass" />
          <Art name="chest" className="decor final-chest" />
          <OfferCard full />
        </div>
      </div>
    </section>
  );
}
