"use client";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { priceLabel } from "@/lib/config";
export function StickyCTA() {
  const [visible, setVisible] = useState(false),
    [closed, setClosed] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(
          entry.boundingClientRect.top < 0 && entry.intersectionRatio < 0.1,
        ),
      { threshold: [0, 0.1] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  if (!visible || closed) return null;
  return (
    <aside className="sticky-cta" aria-label="Conheça a oferta">
      <div>
        <strong>{priceLabel}</strong>
        <span>Compra única · em breve</span>
      </div>
      <a href="#oferta" className="button">
        Ver a missão <ArrowRight size={16} />
      </a>
      <button onClick={() => setClosed(true)} aria-label="Fechar oferta fixa">
        <X size={18} />
      </button>
    </aside>
  );
}
