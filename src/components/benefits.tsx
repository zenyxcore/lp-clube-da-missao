"use client";
import { Printer } from "lucide-react";
import { resources } from "@/lib/config";
import { Art, Reveal, Heading } from "./shared";
export function Benefits() {
  return (
    <section className="section parchment" id="recebe">
      <div className="container">
        <Heading
          light
          eyebrow="UMA MISSÃO. MUITAS DESCOBERTAS."
          text="Da primeira pista à última conquista, cada detalhe faz parte da experiência."
        >
          Tudo o que você precisa para viver
          <br />
          <em>uma aventura completa.</em>
        </Heading>
        <div className="benefits-grid">
          {resources
            .filter((r) => r.ready)
            .map((r) => (
              <Reveal className="benefit" key={r.title}>
                <Art name={r.image} />
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
        </div>
        <div className="material-note">
          <Printer size={19} />
          <p>
            Você recebe a experiência digital e os materiais disponíveis para
            imprimir.
            <br />
            <strong>
              A preparação e o tesouro físico ficam por conta da sua família.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
