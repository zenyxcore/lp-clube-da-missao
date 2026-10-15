"use client";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/config";
import { Heading } from "./shared";
export function FAQ() {
  return (
    <section className="section parchment faq-section" id="faq">
      <div className="container faq-grid">
        <Heading
          light
          eyebrow="RESPOSTAS RÁPIDAS"
          text="O essencial para você preparar a missão com tranquilidade."
        >
          Dúvidas antes de <em>começar?</em>
        </Heading>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q} name="faq">
              <summary>
                {q}
                <ChevronDown size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
