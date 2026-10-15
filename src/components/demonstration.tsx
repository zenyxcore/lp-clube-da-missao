"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Check, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { showcasePhotos } from "@/lib/config";
import { Art, Cta, Heading } from "./shared";
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
export function Gallery() {
  const [selected, setSelected] = useState(0),
    [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (expanded) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [expanded]);
  const change = (d: number) =>
    setSelected((i) => (i + d + shots.length) % shots.length);
  return (
    <div id="screenshots" className="gallery">
      <div className="gallery-view">
        <Screenshot index={selected} />
        <button
          ref={opener}
          className="expand"
          aria-label="Ampliar screenshot"
          onClick={() => setExpanded(true)}
        >
          <Expand size={19} />
        </button>
      </div>
      <div className="gallery-caption">
        <div>
          <span className="eyebrow">
            PRINT REAL DO PRODUTO · {String(selected + 1).padStart(2, "0")} / 05
          </span>
          <h3>{shots[selected].label}</h3>
          <p>{shots[selected].text}</p>
        </div>
        <div className="gallery-controls">
          <button aria-label="Screenshot anterior" onClick={() => change(-1)}>
            <ChevronLeft />
          </button>
          <button aria-label="Próximo screenshot" onClick={() => change(1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="gallery-thumbnails">
        {shots.map((s, i) => (
          <button
            key={s.file}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            aria-label={`Ver ${s.label}`}
          >
            <Screenshot index={i} />
            <span>0{i + 1}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        onCancel={() => setExpanded(false)}
        onClose={() => {
          setExpanded(false);
          opener.current?.focus();
        }}
        aria-label={shots[selected].label}
      >
        <button
          className="close-lightbox"
          onClick={() => setExpanded(false)}
          aria-label="Fechar screenshot"
        >
          <X />
        </button>
        <Screenshot index={selected} />
        <p>{shots[selected].label}</p>
        <div className="gallery-controls">
          <button
            onClick={() => change(-1)}
            aria-label="Screenshot anterior ampliado"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => change(1)}
            aria-label="Próximo screenshot ampliado"
          >
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </div>
  );
}
export function Demo() {
  return (
    <section className="section demo" id="aventura">
      <div className="container">
        <Heading
          eyebrow="VEJA O QUE VEM NA MISSÃO"
          text="Conheça as telas da aventura e os materiais que levam a história para dentro da sua casa."
        >
          Da tela para as mãos.
          <br />
          <em>Da sua casa para a imaginação.</em>
        </Heading>
        <div className="material-showcase">
          <div className="showcase-screen">
            <div className="showcase-browser-bar">
              <i />
              <i />
              <i />
              <span>Clube da Missão</span>
            </div>
            <Screenshot index={0} />
            <span className="showcase-label">
              <Check size={16} /> A história no computador
            </span>
          </div>
          <div className="showcase-phone">
            <Image
              src="/screenshots/clube-mobile.jpg"
              alt="A missão aberta no celular"
              width={375}
              height={780}
              sizes="(max-width: 700px) 34vw, 210px"
            />
            <span>A aventura na palma da mão</span>
          </div>
          <div className="showcase-printables">
            <Art name="openmap" />
            <Art name="letter" />
            <span className="showcase-label">
              <Check size={16} /> Mapa, pistas e surpresas para imprimir
            </span>
          </div>
        </div>
        {showcasePhotos.length > 0 && (
          <div className="showcase-photos">
            {showcasePhotos.map((photo) => (
              <figure key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1000}
                  height={750}
                  sizes="(max-width: 700px) 90vw, 40vw"
                />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        )}
        <Gallery />
        <div className="section-cta">
          <p>Imagine a alegria de encontrar a próxima pista.</p>
          <Cta placement="materials" />
        </div>
      </div>
    </section>
  );
}
