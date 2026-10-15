"use client";
import { Art, Reveal, Heading } from "./shared";
export const steps = [
  {
    title: "Acesse o Clube",
    text: "Entre na plataforma e descubra sua aventura.",
    image: "chest",
  },
  {
    title: "Cadastre os aventureiros",
    text: "Personalize a experiência com nomes e avatares.",
    image: "shield",
  },
  {
    title: "Prepare as pistas",
    text: "Utilize o guia para organizar a brincadeira.",
    image: "openmap",
  },
  {
    title: "Viva a missão",
    text: "Resolva enigmas, explore a casa e encontre o tesouro.",
    image: "compass",
  },
];
export function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <Heading
          eyebrow="A PRÓXIMA DESCOBERTA COMEÇA AQUI"
          text="Você prepara as pistas. Eles entram na história. E a casa vira um cenário de descobertas."
        >
          Em poucos passos,
          <br />
          <em>a aventura começa.</em>
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
