"use client";
import { Mail, ArrowRight, Check } from "lucide-react";
import { offer } from "@/lib/config";
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
    <div className="guarantee-seal" role="img" aria-label="Garantia de 7 dias">
      <span className="seal-ring" />
      <span className="seal-top">CLUBE DA MISSÃO</span>
      <Check className="seal-check" size={21} />
      <strong>7</strong>
      <span className="seal-days">DIAS</span>
      <span className="seal-ribbon">GARANTIA</span>
      <span className="seal-bottom">SUA COMPRA COM TRANQUILIDADE</span>
    </div>
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
          <span className="eyebrow">SUA PRÓXIMA AVENTURA CHEGA ATÉ VOCÊ</span>
          <h3>
            Receba o acesso por
            <br />
            <em>e-mail e WhatsApp.</em>
          </h3>
          <p>
            {offer.accessDelivery} Depois, é só abrir a missão e reunir seus
            exploradores.
          </p>
        </div>
        <div className="guarantee-panel">
          <GuaranteeSeal />
          <div>
            <span className="eyebrow">ESCOLHA COM TRANQUILIDADE</span>
            <h3>7 dias de garantia.</h3>
            <p>
              Nas compras online, você pode exercer o direito de arrependimento
              em até 7 dias e receber de volta os valores pagos, conforme o art.
              49 do CDC.
            </p>
            <a
              href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#art49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça seu direito <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
