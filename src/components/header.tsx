"use client";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { offer } from "@/lib/config";
import { Art, useClock } from "./shared";
export const nav = [
  ["Entenda a brincadeira", "aventura"],
  ["Como preparar", "como-funciona"],
  ["O que está incluído", "recebe"],
  ["Seus bônus", "bonus"],
  ["Ver a oferta", "oferta"],
  ["Tire suas dúvidas", "faq"],
];
export function Announcement() {
  const now = useClock(),
    end = Date.parse(offer.endsAt);
  const left = now && Number.isFinite(end) ? Math.max(0, end - now) : 0;
  return (
    <div className="announcement">
      <span className="launch-tag">EDIÇÃO DE ESTREIA</span>
      <p>
        <strong>Condição especial de lançamento</strong>
      </p>
      {left > 0 && (
        <span className="countdown">
          Oferta encerra em {Math.floor(left / 86400000)}d{" "}
          {Math.floor(left / 3600000) % 24}h {Math.floor(left / 60000) % 60}min
        </span>
      )}
    </div>
  );
}
export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Announcement />
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" aria-label="Clube da Missão — início">
            <Art
              name="clube-da-missao"
              alt="Clube da Missão"
              className="brand"
              priority
            />
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            <span>{menu ? "Fechar" : "Menu"}</span>
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
          {menu && (
            <nav
              id="mobile-menu"
              className="mobile-menu"
              aria-label="Navegação da página"
              onKeyDown={(e) => {
                if (e.key === "Escape") setMenu(false);
              }}
            >
              <span className="eyebrow">SUA PRÓXIMA DESCOBERTA</span>
              {nav.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                  {label}
                  <ArrowRight size={16} />
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
