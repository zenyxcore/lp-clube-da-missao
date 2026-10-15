"use client";
import { Check, Gift } from "lucide-react";
import { bonuses } from "@/lib/config";
import { Art, Cta, Reveal, Heading } from "./shared";
export function Bonuses() {
  const active = bonuses.filter((b) => b.ready);
  if (!active.length) return null;
  return (
    <section className="section bonus-section treasure-bonuses" id="bonus">
      <div className="container">
        <Heading
          eyebrow="PRESENTES PARA COMPLETAR A EXPERIÊNCIA"
          text="Na compra da missão, estes materiais também são seus. Sem pagar nada a mais."
        >
          Além da aventura, você ganha
          <br />
          <em>{active.length} bônus para guardar esse momento.</em>
        </Heading>
        <div className="bonus-grid">
          {active.map((b, i) => (
            <Reveal className="bonus-card" key={b.title}>
              <span className="bonus-number">
                PRESENTE {String(i + 1).padStart(2, "0")}
              </span>
              <div className="bonus-image">
                <span className="bonus-halo" aria-hidden="true" />
                <Art name={b.image} />
              </div>
              <div className="bonus-copy">
                <span className="free-badge">
                  <Check size={17} strokeWidth={3} />
                  GRÁTIS COM A MISSÃO
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <span className="bonus-value">
                  <Gift size={16} />
                  Incluído na sua compra. Sem custo extra.
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="bonus-reassurance">
          <Check size={18} /> A experiência completa e os bônus estão no mesmo
          valor. Nenhuma compra adicional.
        </p>
        <div className="section-cta">
          <Cta placement="bonuses">Quero a aventura com meus bônus</Cta>
        </div>
      </div>
    </section>
  );
}
