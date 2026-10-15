import Link from "next/link";

export const metadata = {
  title: "Privacidade e cookies | Clube da Missão",
  description:
    "Entenda como esta página usa cookies e o Meta Pixel para medir campanhas, e como alterar suas preferências.",
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <article className="container" style={{ maxWidth: 820 }}>
        <span className="eyebrow">CLUBE DA MISSÃO · PRIVACIDADE</span>
        <h1 style={{ fontSize: "clamp(34px, 7vw, 58px)", margin: "12px 0 22px" }}>
          Privacidade e cookies
        </h1>
        <p>
          Esta página explica o que acontece quando você visita a landing page
          da Missão Secreta. Não pedimos aqui nomes ou dados de crianças.
        </p>

        <h2 style={{ fontSize: 28, margin: "36px 0 12px" }}>
          Medição de visitas e campanhas
        </h2>
        <p>
          Com sua autorização, ativamos o Meta Pixel, da Meta Platforms, para
          registrar eventos de navegação e entender o desempenho dos anúncios.
          Os eventos usados nesta página são visualização de página, visualização
          do conteúdo e início do checkout. O Pixel não é ativado quando você
          recusa. Não enviamos evento de compra por esta página.
        </p>
        <p style={{ marginTop: 14 }}>
          Depois que você permite a medição, podemos guardar temporariamente no
          navegador parâmetros de campanha para encaminhá-los ao checkout da
          Cakto quando você clicar para comprar. A Cakto também pode usar seus
          próprios cookies e tecnologias; consulte os avisos apresentados por
          ela durante a compra.
        </p>

        <h2 style={{ fontSize: 28, margin: "36px 0 12px" }}>
          Sua escolha e seus direitos
        </h2>
        <p>
          Você pode recusar a medição quando o aviso aparecer ou alterar sua
          escolha a qualquer momento pelo link “Preferências de privacidade” no
          rodapé da página inicial. Também pode apagar os dados locais do site
          nas configurações do navegador. Para exercer direitos relacionados aos
          dados enviados no checkout, use os canais de atendimento indicados na
          confirmação da compra.
        </p>
        <p style={{ marginTop: 14 }}>
          A Meta trata os dados recebidos conforme seus próprios termos e
          políticas. Esta página não controla os dados tratados pela Meta ou
          pela Cakto em seus serviços.
        </p>

        <p style={{ marginTop: 36 }}>
          <Link href="/" style={{ color: "var(--gold)", fontWeight: 700 }}>
            Voltar para a Missão Secreta
          </Link>
        </p>
      </article>
    </main>
  );
}
