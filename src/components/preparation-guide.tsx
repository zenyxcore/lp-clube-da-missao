import Image from "next/image";
export function PreparationGuide() {
  return (
    <section className="section preparation-guide" aria-labelledby="preparation-guide-title">
      <div className="container preparation-guide-grid">
        <div className="preparation-guide-visual">
          <Image src="/assets/guia-responsavel-mockup.webp" alt="Aba Materiais do app com os downloads organizados e primeira página impressa do Guia do responsável." width={1200} height={800} sizes="(max-width: 760px) 100vw, 650px" />
        </div>
        <div className="preparation-guide-copy">
          <span className="eyebrow">ORIENTAÇÃO EM CADA ETAPA</span>
          <h2 id="preparation-guide-title">Você não precisa inventar os desafios.<br /><em>Nós já preparamos o caminho.</em></h2>
          <p>O guia mostra como organizar a brincadeira, preparar os esconderijos e conduzir a aventura. Você só precisa preparar a surpresa e reunir sua equipe.</p>
        </div>
      </div>
    </section>
  );
}
