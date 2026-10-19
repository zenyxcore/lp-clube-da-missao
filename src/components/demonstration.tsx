"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Cta, Heading } from "./shared";
export const shots = [
  {
    file: "quartel-general",
    label: "O quartel-general da sua equipe",
    text: "A aventura começa em um lugar feito para explorar.",
  },
  {
    file: "mapa-aventuras",
    label: "Um mapa cheio de descobertas",
    text: "Acompanhe o caminho e o progresso na missão.",
  },
  {
    file: "aventureiros",
    label: "Cada explorador tem seu lugar",
    text: "Nomes e avatares para personalizar a equipe.",
  },
  {
    file: "conquistas",
    label: "Pequenas grandes conquistas",
    text: "Insígnias para celebrar cada etapa vencida.",
  },
  {
    file: "certificado",
    label: "Uma lembrança da aventura",
    text: "Um certificado com os nomes dos aventureiros.",
  },
];
const materialPreviews = [
  {
    src: "/demo/carta-nas-maos.webp",
    alt: "Carta temática impressa e segurada pelas mãos",
    label: "A Carta Secreta que dá início à aventura",
    kind: "print",
  },
  {
    src: "/demo/pista-primeiro-sinal.webp",
    alt: "Cartão O Primeiro Sinal, incluído na Missão Secreta, sendo escondido no sofá",
    label: "As pistas incluídas na Missão Secreta",
    kind: "print",
  },
  {
    src: "/demo/diario-explorador-atual.webp",
    alt: "Diário do Explorador e páginas de desafios impressos",
    label: "Diário do Explorador",
    kind: "print",
  },
  {
    src: "/demo/certificado-aventureiro.webp",
    alt: "Certificado de Aventureiro impresso com materiais da missão",
    label: "Certificado de Aventureiro",
    kind: "print",
  },
  {
    src: "/demo/familia-aventura.webp",
    alt: "Mãe e filho celebram juntos a aventura com o certificado",
    label: "Uma conquista para celebrar em família",
    kind: "print",
  },
  {
    src: "/demo/missao-etapa-preview.jpg",
    alt: "Tela real de uma etapa da missão no celular",
    label: "A história e os desafios no celular",
    kind: "screen",
  },
  {
    src: "/demo/missao-equipe.jpg",
    alt: "Tela inicial real da missão no celular",
    label: "O início da aventura",
    kind: "screen",
  },
  {
    src: "/demo/missao-avatares-preview.jpg",
    alt: "Tela real de personalização dos aventureiros no celular",
    label: "A equipe com nomes e avatares",
    kind: "screen",
  },
  {
    src: "/demo/missao-tesouro.jpg",
    alt: "Tela real da descoberta do tesouro no celular",
    label: "A descoberta do tesouro",
    kind: "screen",
  },
];
export function Screenshot({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  const s = shots[index];
  return (
    <Image
      src={`/screenshots/${s.file}.jpg`}
      alt={`Tela real do Clube da Missão: ${s.label}`}
      width={1363}
      height={936}
      sizes="(max-width: 700px) 90vw, 65vw"
      className={className}
    />
  );
}
export function DeliverableCarousel() {
  const [selected, setSelected] = useState(0);
  const touchStart = useRef<number | null>(null);
  const change = (direction: number) =>
    setSelected((index) =>
      (index + direction + materialPreviews.length) % materialPreviews.length,
    );
  const current = materialPreviews[selected];
  return (
    <div
      className="deliverable-carousel"
      id="screenshots"
      role="region"
      aria-label="Telas e materiais da missão"
      aria-roledescription="carrossel"
    >
      <div
        className="deliverable-stage"
        onTouchStart={(event) => {
          touchStart.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const end = event.changedTouches[0]?.clientX;
          if (start !== null && end !== undefined && Math.abs(end - start) > 45) {
            change(end < start ? 1 : -1);
          }
          touchStart.current = null;
        }}
        aria-live="polite"
      >
        <div className={`deliverable-image ${current.kind}`} key={current.src}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority={selected === 0}
            sizes="(max-width: 700px) 88vw, 500px"
          />
        </div>
      </div>
      <div className="deliverable-caption">
        <span className="deliverable-type">
          {current.kind.includes("screen") ? "TELA REAL DO APP" : "MATERIAL IMPRESSO"}
        </span>
        <h3>{current.label}</h3>
        <div className="deliverable-controls">
          <button
            className="deliverable-arrow"
            aria-label="Ver item anterior"
            onClick={() => change(-1)}
          >
            <ChevronLeft />
          </button>
          <div className="deliverable-paging">
            <span className="eyebrow">
              {String(selected + 1).padStart(2, "0")} / {String(
                materialPreviews.length,
              ).padStart(2, "0")}
            </span>
            <div className="deliverable-dots" aria-label="Escolha um material">
              {materialPreviews.map((item, index) => (
                <button
                  key={item.src}
                  aria-label={`Ver ${item.label}`}
                  aria-current={selected === index ? "true" : undefined}
                  onClick={() => setSelected(index)}
                />
              ))}
            </div>
          </div>
          <button
            className="deliverable-arrow"
            aria-label="Ver próximo item"
            onClick={() => change(1)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
export function Demo() {
  return (
    <section className="section demo" id="aventura">
      <div className="container">
        <Heading
          eyebrow="OLHE POR DENTRO"
          text="Veja os materiais da aventura e as telas reais do app que guia a equipe em cada descoberta."
        >
          Veja o material
          <br />
          <em>por dentro.</em>
        </Heading>
        <DeliverableCarousel />
        <div className="section-cta">
          <p>Uma pista encontrada pela casa. Um desafio no app. A próxima descoberta de vocês.</p>
          <Cta placement="materials" />
        </div>
      </div>
    </section>
  );
}
