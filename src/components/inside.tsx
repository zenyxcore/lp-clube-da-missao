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
          Um universo de aventuras
          <br />
          <em>esperando para ser explorado.</em>
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
            <span className="eyebrow">FEITO PARA PEQUENOS EXPLORADORES</span>
            <h3>
              A história ganha vida.
              <br />A equipe faz parte dela.
            </h3>
            <p>
              Um lugar para descobrir a missão, escolher seus aventureiros e
              celebrar cada passo do caminho.
            </p>
            <ul>
              {[
                "Quartel-General",
                "Mapa das missões",
                "Personalização dos aventureiros",
                "Desafios interativos",
                "Insígnias e conquistas",
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
