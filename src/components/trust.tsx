"use client";
import { Mail } from "lucide-react";
import { offer } from "@/lib/config";
import { Art } from "./shared";
function WhatsAppMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M26.8 5.2A15 15 0 0 0 3.3 23.3L1 31l7.9-2.1A15 15 0 0 0 26.8 5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11 8.9c-.4-.9-.8-.9-1.2-.9-.3 0-.7 0-1 .4-1 1-1.6 2.4-1 4.5 1 3.4 5.6 8 9.6 9.5 2.1.8 4 .5 5.2-.5.5-.4.8-1.8.6-2.2-.2-.3-3-1.6-3.4-1.7-.4-.2-.7-.2-1 .3l-1.3 1.5c-.3.3-.6.3-1 .1-1.8-.8-4.2-2.7-5.3-4.7-.2-.3-.2-.6.1-.9.4-.4 1.3-1.4 1.3-1.9 0-.3-1.2-2.9-1.6-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function GuaranteeSeal() {
  return (
    <Art
      name="guarantee-7-days"
      alt="Clube da Missão — 7 dias de garantia"
      className="guarantee-seal"
    />
  );
}
export function Trust() {
  return (
    <section className="trust themed-trust">
      <div className="container trust-grid">
        <div className="delivery-panel">
          <div className="delivery-emblems" aria-hidden="true">
            <span>
              <Mail />
            </span>
            <i>+</i>
            <span>
              <WhatsAppMark />
            </span>
          </div>
          <h3>
            Acesso enviado por
            <br />
            <em>e-mail e WhatsApp</em>
          </h3>
          <p>
            Após a aprovação do pagamento, você recebe o acesso para abrir a missão e baixar os materiais.
          </p>
          <p className="trust-lifetime">
            {offer.accessLabel}. {offer.purchaseLabel}. {offer.billingLabel}.
          </p>
        </div>
        <div className="guarantee-panel">
          <GuaranteeSeal />
          <div>
            <h3>7 dias de garantia.</h3>
            <p>
              Se a experiência não for para sua família, você pode solicitar o reembolso em até 7 dias após a compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
