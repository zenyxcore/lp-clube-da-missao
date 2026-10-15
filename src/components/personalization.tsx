"use client";
import Image from "next/image";
import { Cta } from "./shared";
import { Screenshot } from "./demonstration";
export function Personalization() {
  return (
    <section className="section personalization">
      <div className="container personalization-grid">
        <div>
          <h2>
            Aqui, os pequenos são os protagonistas da história.
          </h2>
          <div className="personalization-cta">
            <Cta placement="personalization" />
          </div>
        </div>
        <div className="personalization-art">
          <div className="explorer-card">
            <Image
              src="/assets/avatars/explorador-02.webp"
              alt="Avatar ilustrado de um jovem explorador"
              width={150}
              height={150}
            />
            <span className="eyebrow">CARTÃO DO AVENTUREIRO</span>
            <h3>Explorador Miguel</h3>
            <span>Coragem para descobrir.</span>
            <small>EXEMPLO ILUSTRATIVO</small>
          </div>
          <div className="certificate-preview">
            <Screenshot index={4} />
            <span>O certificado real inclui os nomes da equipe.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
