"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const feedbacks = [1, 2, 3, 4, 5];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    if (!track.current) return;
    const slides = Array.from(track.current.children) as HTMLElement[];
    if (!slides.length) return;

    const trackLeft = track.current.getBoundingClientRect().left + track.current.clientLeft;
    const activeIndex = slides.reduce((closest, slide, index) => {
      const closestDistance = Math.abs(
        slides[closest].getBoundingClientRect().left - trackLeft,
      );
      const slideDistance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      return slideDistance < closestDistance ? index : closest;
    }, 0);
    const nextIndex = Math.max(0, Math.min(slides.length - 1, activeIndex + direction));
    const nextLeft =
      track.current.scrollLeft +
      slides[nextIndex].getBoundingClientRect().left -
      trackLeft;

    track.current.scrollTo({ left: nextLeft, behavior: "smooth" });
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

        <div className="feedback-summary-proof">
          <Image
            src="/assets/avaliacoes-positivas.webp"
            alt="Mais de 2 mil avaliações positivas"
            width={1327}
            height={128}
            sizes="(max-width: 600px) 80vw, 440px"
          />
        </div>

        <div className="feedback-carousel">
          <div
            className="feedback-track"
            ref={track}
            role="region"
            aria-label="Carrossel com cinco feedbacks de clientes"
            tabIndex={0}
          >
            {feedbacks.map((number) => (
              <figure className="feedback-card" key={number}>
                <div className="feedback-image-stage">
                  <Image
                    src={`/testimonials/feedback-${number}.webp`}
                    alt={`Print de feedback de uma família sobre o Clube da Missão, ${number} de 5`}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1100px) 38vw, 27vw"
                  />
                </div>
              </figure>
            ))}
          </div>
          <div className="feedback-controls">
            <button
              className="feedback-arrow"
              type="button"
              aria-label="Ver feedback anterior"
              onClick={() => move(-1)}
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <p className="feedback-hint">Deslize para ver os feedbacks.</p>
            <button
              className="feedback-arrow"
              type="button"
              aria-label="Ver próximo feedback"
              onClick={() => move(1)}
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
