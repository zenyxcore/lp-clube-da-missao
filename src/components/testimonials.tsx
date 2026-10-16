"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const feedbacks = [1, 2, 3, 4, 5];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    if (!track.current) return;
    track.current.scrollBy({
      left: direction * track.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <section className="section testimonials" aria-labelledby="feedback-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">FEEDBACK DE QUEM JÁ ENTROU NA MISSÃO</span>
          <h2 id="feedback-title">Veja o que estão falando dessa aventura.</h2>
          <p>Mensagens de famílias que já receberam o material e começaram a brincar.</p>
          <span className="heading-rule" aria-hidden="true">◆</span>
        </div>

        <div className="feedback-carousel">
          <button
            className="feedback-arrow"
            type="button"
            aria-label="Ver feedbacks anteriores"
            onClick={() => move(-1)}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <div
            className="feedback-track"
            ref={track}
            role="region"
            aria-label="Carrossel com cinco feedbacks de clientes"
            tabIndex={0}
          >
            {feedbacks.map((number) => (
              <figure className="feedback-card" key={number}>
                <Image
                  src={`/testimonials/feedback-${number}.webp`}
                  alt={`Print de feedback de uma família sobre o Clube da Missão, ${number} de 5`}
                  width={600}
                  height={1304}
                  sizes="(max-width: 640px) 78vw, (max-width: 1100px) 38vw, 27vw"
                />
              </figure>
            ))}
          </div>
          <button
            className="feedback-arrow"
            type="button"
            aria-label="Ver próximos feedbacks"
            onClick={() => move(1)}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
        <p className="feedback-hint">Deslize para ver os 5 feedbacks</p>
      </div>
    </section>
  );
}
