"use client";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Heading } from "./shared";
import { Screenshot } from "./demonstration";
export function Inside() {
  return (
    <section className="section inside">
      <div className="container">
        <Heading eyebrow="POR DENTRO DO CLUBE">
          Abra no celular ou computador.
          <br />
          <em>A missão mostra o próximo passo.</em>
        </Heading>
        <div className="inside-grid">
          <div className="devices">
            <div className="desktop-device">
              <div className="device-bar">
                <i />
                <i />
                <i />
                <span>Clube da Missão · Quartel-General</span>
              </div>
              <Screenshot index={0} />
            </div>
            <div className="phone-device">
              <div className="phone-speaker" />
              <Image
                src="/screenshots/clube-mobile.jpg"
                alt="Tela real do Clube da Missão na largura de um celular"
                width={375}
                height={780}
                sizes="180px"
              />
            </div>
          </div>
          <div className="inside-copy">
            <h3>
              Tudo fica organizado
              <br />
              para você acompanhar.
            </h3>
            <p>
              Na área da missão, você monta a equipe, acompanha os desafios e vê
              as conquistas. Enquanto isso, as crianças procuram as pistas que
              você escondeu pela casa.
            </p>
            <ul>
              {[
                "Página inicial da equipe",
                "Mapa para acompanhar a aventura",
                "Nomes e personagens das crianças",
                "Desafios guiados, etapa por etapa",
                "Conquistas e certificado ao finalizar",
              ].map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
            <a href="#screenshots" className="gold-link">
              Conheça as telas reais <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
