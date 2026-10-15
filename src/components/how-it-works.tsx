"use client";
import { Art, Reveal, Heading } from "./shared";
export const steps = [
  {
    title: "Abra a missão",
    text: "No celular ou computador, abra a história que vai guiar a brincadeira.",
    image: "chest",
  },
  {
    title: "Monte a equipe",
    text: "Escolha os nomes e os personagens de até 3 crianças.",
    image: "team-avatars",
  },
  {
    title: "Esconda as pistas",
    text: "Imprima os materiais e siga o guia para esconder as pistas pela casa.",
    image: "openmap",
  },
  {
    title: "Comece a caça",
    text: "Acompanhe as crianças: resolvam os desafios e encontrem o tesouro juntos.",
    image: "compass",
  },
];
export function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <Heading
          eyebrow="COMO A BRINCADEIRA FUNCIONA"
          text="Um adulto organiza as pistas e acompanha a equipe. Não é preciso inventar os enigmas: a missão já vem preparada."
        >
          Você prepara em casa.
          <br />
          <em>Eles entram na aventura.</em>
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
