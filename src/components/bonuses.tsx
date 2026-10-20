"use client";
import { Check } from "lucide-react";
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
        >
          Um convite para começar.
          <br />
          <em>Uma lembrança para guardar.</em>
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
                <h3>{b.title}</h3>
                <p>{b.text}</p>

              </div>
            </Reveal>
          ))}
        </div>
        <p className="bonus-reassurance">
          <Check size={18} /> Os dois estão incluídos na sua compra.
        </p>
        <div className="section-cta">
          <Cta placement="bonuses">QUERO ESSA AVENTURA</Cta>
        </div>
      </div>
    </section>
  );
}
