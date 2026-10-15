"use client";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { bonuses, offer, priceLabel, resources } from "@/lib/config";
import { checkoutWithCampaign, offerExpired } from "@/lib/campaign";
import { trackCheckout } from "./analytics";
import { Art, Heading, useClock } from "./shared";
export function CheckoutButton({
  label = "Quero essa missão agora",
}: {
  label?: string;
}) {
  const now = useClock();
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
      <button className="button purchase" disabled={!active} onClick={visit}>
        {expired
          ? "Condição encerrada"
          : active
            ? offer.checkoutUrl
              ? label
              : "Quero receber novidades"
            : "Vendas em breve"}
        <ArrowRight size={18} />
      </button>
      <p className="purchase-note">
        {expired
          ? "Aguarde a divulgação de uma nova condição."
          : active
            ? offer.checkoutUrl
              ? "Compra única. Você confere as condições no checkout."
              : "Cadastre seu interesse pelo canal oficial."
            : "Pré-lançamento: o checkout ainda não está disponível. Nenhuma cobrança será realizada."}
      </p>
    </>
  );
}
export function OfferCard({ full = false }: { full?: boolean }) {
  return (
    <div className={`offer-card ${full ? "full-offer" : ""}`}>
      <span className="edition">EDIÇÃO DE ESTREIA</span>
      <Art
        name="missao-secreta"
        alt="Missão Secreta"
        className="mission-logo"
        priority={!full}
      />
      <h3>
        A Caça ao
        <br />
        Tesouro Perdido
      </h3>
      <p className="offer-description">
        Uma história cheia de descobertas.
        <br />
        Uma casa inteira para explorar.
      </p>
      {full && (
        <ul className="offer-list">
          {resources
            .filter((r) => r.ready)
            .map((r) => (
              <li key={r.title}>
                <Check size={16} />
                {r.title}
              </li>
            ))}
          {bonuses.filter((b) => b.ready).length > 0 && (
            <li>
              <Check size={16} />
              Bônus confirmados da edição de estreia
            </li>
          )}
        </ul>
      )}
      <div className="price">
        <span>Viva essa aventura por</span>
        <strong>{priceLabel}</strong>
        <small>Compra única · produto digital</small>
      </div>
      <CheckoutButton label={full ? "GARANTIR MINHA AVENTURA" : undefined} />
      <span className="offer-foot">
        <ShieldCheck size={14} /> Aventura para crianças de 5 a 9 anos
      </span>
    </div>
  );
}
export function Offer() {
  return (
    <section className="section offer-section" id="oferta">
      <div className="container">
        <Heading
          eyebrow="A PRÓXIMA GRANDE MEMÓRIA COMEÇA EM CASA"
          text="Uma experiência que combina história, desafios, exploração e diversão em família."
        >
          Uma grande aventura.
          <br />
          <em>Um investimento pequeno</em>
          <br />
          em momentos especiais.
        </Heading>
        <div className="final-offer-wrap">
          <Art name="compass" className="decor final-compass" />
          <Art name="chest" className="decor final-chest" />
          <Art name="key" className="decor final-key" />
          <OfferCard full />
        </div>
      </div>
    </section>
  );
}
