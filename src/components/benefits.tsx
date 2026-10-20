"use client";
import { Check } from "lucide-react";
import { Art, Cta, Reveal, Heading } from "./shared";
const groups = [
  { title: "História e desafios", text: "Uma aventura guiada, com mistérios e enigmas para resolver em equipe.", images: ["chest", "key"] },
  { title: "Pistas e materiais imprimíveis", text: "Cartões, mapa e materiais para espalhar a investigação pela casa.", images: ["openmap"] },
  { title: "Guia do responsável", text: "Orientações para preparar os esconderijos e acompanhar a brincadeira.", images: ["guide"] },
  { title: "Equipe personalizada", text: "Escolha nomes e personagens para reunir até três aventureiros.", images: ["team-avatars"] },
  { title: "Conquistas da equipe", text: "Insígnias para celebrar cada etapa concluída juntos.", images: ["certificate"] },
];
export function Benefits() {
  return (
    <section className="section parchment" id="recebe">
      <div className="container">
        <Heading
          light
          eyebrow="O QUE VEM NA SUA COMPRA"
          text="Uma experiência completa, com tudo organizado para você preparar a missão e aproveitar cada descoberta."
        >
          Tudo preparado
          <br />
          <em>para viver essa aventura.</em>
        </Heading>
        <div className="benefits-grid">
          {groups.map((r) => (
              <Reveal className="benefit" key={r.title}>
                <span className="included-check">
                  <Check size={15} strokeWidth={3} /> JÁ INCLUÍDO
                </span>
                <div className={`benefit-treasure ${r.images.length > 1 ? "benefit-treasure-pair" : ""}`}>
                  {r.images.map((image) => <Art name={image} key={image} />)}
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
