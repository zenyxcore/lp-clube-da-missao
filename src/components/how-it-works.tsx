"use client";
import { Art, Reveal, Heading } from "./shared";
export const steps = [
  {
    title: "Abra e monte a equipe",
    text: "Acesse a missão no celular ou computador. Escolha os nomes e os personagens de até 3 aventureiros.",
    image: "team-avatars",
  },
  {
    title: "Prepare os esconderijos",
    text: "Imprima as pistas e siga o guia do responsável. Os enigmas e os locais sugeridos já estão organizados.",
    image: "openmap",
  },
  {
    title: "Comecem a investigação",
    text: "Encontrem os cartões, resolvam os desafios no app e descubram o tesouro que você preparou para a equipe.",
    image: "compass",
  },
];
export function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <Heading
          eyebrow="COMO A BRINCADEIRA FUNCIONA"
          text="Você não precisa criar a história nem inventar os enigmas. Prepare a surpresa com o guia e acompanhe os aventureiros."
        >
          Do primeiro convite
          <br />
          <em>à descoberta do tesouro.</em>
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
