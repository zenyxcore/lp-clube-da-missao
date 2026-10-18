"use client";
import { Check } from "lucide-react";
import { resources } from "@/lib/config";
import { Art, Cta, Reveal, Heading } from "./shared";
export function Benefits() {
  return (
    <section className="section parchment" id="recebe">
      <div className="container">
        <Heading
          light
          eyebrow="O QUE VEM NA SUA COMPRA"
          text="Uma história para entrar na brincadeira, pistas para explorar a casa e conquistas para celebrar juntos. Tudo com orientações para você conduzir."
        >
          Tudo pronto
          <br />
          <em>para viver essa aventura.</em>
        </Heading>
        <div className="benefits-grid">
          {resources
            .filter((r) => r.ready)
            .map((r) => (
              <Reveal className="benefit" key={r.title}>
                <span className="included-check">
                  <Check size={15} strokeWidth={3} /> JÁ INCLUÍDO
                </span>
                <div className="benefit-treasure">
                  <Art name={r.image} />
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
        </div>
        <div className="section-cta">
          <Cta placement="included" />
        </div>
      </div>
    </section>
  );
}
