"use client";
import { Art, Reveal, Heading } from "./shared";
export const steps = [
  {
    title: "Acesse a missão",
    text: "A história, os desafios e os materiais ficam organizados para você começar.",
    image: "team-avatars",
  },
  {
    title: "Prepare as pistas",
    text: "Imprima os cartões e siga o guia para esconder as pistas pela casa.",
    image: "openmap",
  },
  {
    title: "Reúna os aventureiros",
    text: "Monte sua equipe, acompanhe a história no app e descubram juntos o tesouro que você preparou.",
    image: "compass",
  },
];
export function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <Heading
          eyebrow="COMO A BRINCADEIRA FUNCIONA"
        >
          Você prepara a surpresa.
          <br />
          <em>A aventura acontece em família.</em>
        </Heading>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" key={s.title}>
              <div className="step-art">
                <Art name={s.image} />
                <span className="step-number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
