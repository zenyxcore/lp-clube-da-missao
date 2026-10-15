"use client";
import { bonuses } from "@/lib/config";
import { Art, Reveal, Heading } from "./shared";
export function Bonuses() {
  const active = bonuses.filter((b) => b.ready);
  if (!active.length) return null;
  return (
    <section className="section parchment bonus-section" id="bonus">
      <div className="container">
        <Heading light eyebrow="SURPRESAS DA EDIÇÃO DE ESTREIA">
          A aventura fica ainda melhor
          <br />
          <em>com essas surpresas!</em>
        </Heading>
        <div className="bonus-grid">
          {active.map((b, i) => (
            <Reveal className="bonus-card" key={b.title}>
              <div className="bonus-image">
                <Art name={b.image} />
              </div>
              <div>
                <span className="eyebrow">
                  BÔNUS {String(i + 1).padStart(2, "0")} · INCLUÍDO
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
