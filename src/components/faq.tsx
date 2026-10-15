"use client";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/config";
import { Art } from "./shared";
export function FAQ() {
  return (
    <section className="section parchment faq-section" id="faq">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow">ANTES DE PARTIR</span>
          <h2>
            Pequenas dúvidas.
            <br />
            <em>Grandes descobertas.</em>
          </h2>
          <p>Tudo para você começar essa aventura com tranquilidade.</p>
          <Art name="compass" />
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details key={q} name="faq">
              <summary>
                <span className="faq-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {q}
                <ChevronDown size={19} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
