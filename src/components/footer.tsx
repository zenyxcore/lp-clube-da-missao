"use client";
import { offer } from "@/lib/config";
import { Art } from "./shared";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <a href="#inicio" aria-label="Voltar ao início">
          <Art
            name="clube-da-missao"
            alt="Clube da Missão"
            className="footer-brand"
          />
        </a>
        <p>
          Grandes aventuras
          <br />
          <em>começam em casa.</em>
        </p>
        <div className="footer-links">
          {offer.termsUrl && <a href={offer.termsUrl}>Termos de uso</a>}
          {offer.privacyUrl && (
            <a href={offer.privacyUrl}>Política de privacidade</a>
          )}
          {offer.supportUrl && <a href={offer.supportUrl}>Contato e suporte</a>}
          {offer.metaPixelId && (
            <button
              onClick={() => window.dispatchEvent(new Event("clube:privacy"))}
            >
              Preferências de privacidade
            </button>
          )}
          <a href="#faq">Dúvidas sobre o produto</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Clube da Missão. Todos os direitos
          reservados.
        </span>
        <span>Grandes aventuras começam em casa.</span>
      </div>
    </footer>
  );
}
