"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { offer } from "@/lib/config";
import { Heading } from "./shared";
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
          eyebrow="MENOS ROTINA. MAIS DESCOBERTAS."
          text="A tela conduz a história. A imaginação leva a aventura para todos os cantos da casa."
        >
          Isso não é apenas um jogo na tela.
          <br />
          <em>É uma aventura que acontece de verdade.</em>
        </Heading>
        {offer.videoUrl ? (
          <video
            className="demo-video"
            controls
            preload="none"
            poster="/assets/biblioteca.webp"
          >
            <source src={offer.videoUrl} />
            Seu navegador não suporta este vídeo.
          </video>
        ) : (
          <div className="demo-poster">
            <Image
              src="/assets/biblioteca.webp"
              alt="Biblioteca de exploradores com mapas e vista para uma floresta dourada"
              fill
              sizes="90vw"
            />
            <div className="poster-copy">
              <span className="eyebrow">ABRA AS PORTAS PARA A IMAGINAÇÃO</span>
              <h3>
                O próximo tesouro
                <br />
                pode estar bem perto.
              </h3>
              <a className="button secondary" href="#screenshots">
                Explore o produto por dentro <ArrowRight size={18} />
              </a>
              <small>Prévia visual · veja as telas reais abaixo</small>
            </div>
          </div>
        )}
        <Gallery />
      </div>
    </section>
  );
}
