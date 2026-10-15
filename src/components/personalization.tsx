"use client";
import Image from "next/image";
import { Screenshot } from "./demonstration";
export function Personalization() {
  return (
    <section className="section personalization">
      <div className="container personalization-grid">
        <div>
          <span className="eyebrow">A HISTÓRIA FICA AINDA MAIS ESPECIAL</span>
          <h2>
            Aqui, seu filho é<br />
            <em>o protagonista da história.</em>
          </h2>
          <p>
            Escolha um personagem para cada criança e cadastre os nomes da
            equipe. Eles aparecem na experiência e no certificado, deixando a
            conquista com a cara da sua família.
          </p>
          <blockquote>
            “Explorador Miguel, uma mensagem secreta acaba de chegar!”
          </blockquote>
          <small>
            Exemplo ilustrativo de personalização. Nenhum dado de criança é
            solicitado nesta página.
          </small>
        </div>
        <div className="personalization-art">
          <div className="explorer-card">
            <Image
              src="/assets/avatars/explorador-03.webp"
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
