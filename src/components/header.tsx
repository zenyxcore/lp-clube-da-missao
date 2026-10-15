"use client";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { offer } from "@/lib/config";
import { Art, useClock } from "./shared";
export const nav = [
  ["A aventura", "aventura"],
  ["Como funciona", "como-funciona"],
  ["O que você recebe", "recebe"],
  ["Bônus", "bonus"],
  ["Perguntas frequentes", "faq"],
];
export function Announcement() {
  const now = useClock(),
    end = Date.parse(offer.endsAt);
  const left = now && Number.isFinite(end) ? Math.max(0, end - now) : 0;
  return (
    <div className="announcement">
      EDIÇÃO DE ESTREIA <span>•</span> CONDIÇÃO ESPECIAL DE LANÇAMENTO
      {left > 0 && (
        <span className="countdown">
          Encerra em {Math.floor(left / 86400000)}d{" "}
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
          <nav aria-label="Navegação principal" className="desktop-nav">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#oferta" className="header-cta">
            Quero essa missão <ArrowRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Menu mobile"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenu(false);
            }}
          >
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
                <ArrowRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
