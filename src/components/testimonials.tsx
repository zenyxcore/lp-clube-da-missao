"use client";
import { type Testimonial } from "@/lib/config";
import { Heading } from "./shared";
export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;
  return (
    <section className="section testimonials">
      <div className="container">
        <Heading eyebrow="HISTÓRIAS DE QUEM JÁ EXPLOROU">
          Memórias compartilhadas.
        </Heading>
        <div className="testimonial-grid">
          {items.map((t, i) => (
            <figure key={i}>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                {t.firstName} · {t.context}
                {t.rating !== undefined && (
                  <span>Nota informada: {t.rating}/5</span>
                )}
                {t.date && <time>{t.date}</time>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
