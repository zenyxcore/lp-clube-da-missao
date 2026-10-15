"use client";
import {
  ArrowRight,
  Check,
  Gift,
  Infinity as InfinityIcon,
} from "lucide-react";
import {
  bonuses,
  offer,
  priceLabel,
  referencePriceLabel,
  installmentPriceLabel,
} from "@/lib/config";
import { offerExpired } from "@/lib/campaign";
import { startCheckout } from "./analytics";
import { Art, Heading, useClock } from "./shared";
export function CheckoutButton({
  label = "Quero comprar essa aventura",
}: {
  label?: string;
}) {
  const now = useClock(Boolean(offer.endsAt));
  const expired = now !== null && offerExpired(offer.endsAt, now);
  const target = offer.checkoutUrl || offer.interestUrl;
  const active = Boolean(target) && !expired && (!offer.endsAt || now !== null);
  return (
    <>
      <button
        className="button purchase"
        disabled={!active}
        onClick={startCheckout}
        data-cta-action="checkout"
        data-cta-placement="offer"
      >
        {expired
          ? "Condição encerrada"
          : active && !offer.checkoutUrl
            ? "Quero receber novidades"
            : label}
        <ArrowRight size={19} />
      </button>
      {(active || expired) && (
        <p className="purchase-note">
          {expired
            ? "Aguarde a divulgação de uma nova condição."
            : active
              ? offer.checkoutUrl
                ? "Compra única. Confira as condições no checkout."
                : "Cadastre seu interesse pelo canal oficial."
              : `${offer.purchaseLabel} • ${offer.billingLabel}`}
        </p>
      )}
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
      <div className="offer-includes-label">
        UMA MISSÃO COMPLETA PARA SUA FAMÍLIA
      </div>
      <ul className="offer-list compact-includes">
        {[
          "História + 6 desafios",
          "Mapa, pistas e guia",
          `Até ${offer.maxAdventurers} aventureiros`,
          "Conquistas da equipe",
        ].map((title) => (
          <li key={title}>
            <Check size={16} />
            {title}
          </li>
        ))}
      </ul>
      {activeBonuses.length > 0 && (
        <div className="offer-gifts">
          <strong>
            <Gift size={16} /> VOCÊ AINDA GANHA
          </strong>
          <div>
            {activeBonuses.map((b) => (
              <span key={b.title}>
                <Check size={13} />
                {b.title}
                <b>GRÁTIS</b>
              </span>
            ))}
          </div>
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
        <small>à vista · {offer.purchaseLabel.toLowerCase()}</small>
      </div>
      <div className="installment-option">
        <strong>
          ou <b>{offer.installmentCount}x</b> de <b>{installmentPriceLabel}</b>
        </strong>
        {!offer.installmentsConfirmed && <small>Simulação sem juros.</small>}
      </div>
      <div className="ownership-promise">
        <span>
          <InfinityIcon size={19} />
          <strong>{offer.accessLabel}</strong>
        </span>
        <span>
          <Check size={18} />
          <strong>{offer.billingLabel}</strong>
        </span>
      </div>
      <OfferCondition />
      <CheckoutButton />
    </div>
  );
}
export function OfferCondition({ final = false }: { final?: boolean }) {
  const now = useClock(Boolean(offer.endsAt));
  const end = Date.parse(offer.endsAt);
  const remaining = now !== null && Number.isFinite(end) ? end - now : null;
  if (remaining !== null && remaining <= 0) return null;
  const lastChance = remaining !== null && remaining <= 86400000;
  return (
    <p className={`offer-condition ${final ? "final-condition" : ""}`}>
      <span aria-hidden="true" />
      <strong>
        {lastChance
          ? "Última chance de aproveitar esta condição"
          : "Aproveite a condição especial de lançamento"}
      </strong>
      {remaining !== null && (
        <small>
          Encerra em{" "}
          {new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
            timeZone: "America/Sao_Paulo",
          }).format(end)}{" "}
          (horário de Brasília).
        </small>
      )}
    </p>
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
