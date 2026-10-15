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
          eyebrow="O QUE VEM NA SUA COMPRA"
          text="Você recebe a brincadeira organizada e os materiais digitais. Veja para que serve cada parte."
        >
          Abra, prepare e comece
          <br />
          <em>a brincar com sua família.</em>
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
            É um produto digital: a história fica na plataforma e você imprime
            as pistas em casa.
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
