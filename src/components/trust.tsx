"use client";
import { ArrowRight, ShieldCheck } from "lucide-react";
export function Trust() {
  return (
    <section className="trust">
      <div className="container trust-grid">
        <div>
          <ShieldCheck size={30} />
          <h3>Clareza em cada etapa.</h3>
          <p>
            Produto digital. Compra única. As condições de acesso e o canal de
            suporte serão informados antes da abertura das vendas.
          </p>
        </div>
        <div>
          <span className="eyebrow">DIREITO DE ARREPENDIMENTO</span>
          <h3>7 dias, conforme a lei.</h3>
          <p>
            Nas compras online, o CDC prevê o direito de arrependimento em até
            sete dias, conforme o art. 49, com devolução dos valores pagos.
          </p>
          <a
            href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#art49"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulte o Código de Defesa do Consumidor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
