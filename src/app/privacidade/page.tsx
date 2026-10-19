import Link from "next/link";

export const metadata = {
  title: "Privacidade e cookies | Clube da Missão",
  description: "Como usamos cookies, Meta Pixel e Microsoft Clarity na página da Missão Secreta.",
};
export default function PrivacyPage() {
  return (
    <main className="section">
      <article className="container" style={{ maxWidth: 820 }}>
        <span className="eyebrow">CLUBE DA MISSÃO · PRIVACIDADE</span>
        <h1 style={{ fontSize: "clamp(34px, 7vw, 58px)", margin: "12px 0 22px" }}>Privacidade e cookies</h1>
        <p>Esta página explica o uso de cookies e ferramentas de medição na página da Missão Secreta e na oferta de aventuras extras. Não pedimos aqui nomes ou dados de crianças.</p>
        <h2 style={{ fontSize: 28, margin: "36px 0 12px" }}>Visitas, campanhas e navegação</h2>
        <p>O Meta Pixel e o Microsoft Clarity são carregados automaticamente na entrada dessas páginas. O aviso de privacidade é informativo: fechá-lo não ativa nem desativa essas ferramentas.</p>
        <p style={{ marginTop: 14 }}>O Meta Pixel registra visualizações de página e de conteúdo e, na página principal, o início do checkout. Não enviamos evento de compra por esta página. O Microsoft Clarity ajuda a analisar cliques, rolagem e navegação por meio de mapas de calor e gravações de sessões. Não enviamos nomes, e-mails ou dados de crianças como identificadores personalizados ao Clarity.</p>
        <p style={{ marginTop: 14 }}>Esses serviços podem usar cookies e identificadores conforme suas configurações e políticas. A coleta também depende das restrições do navegador, dos bloqueadores e das regras aplicadas pelos próprios serviços.</p>
        <p style={{ marginTop: 14 }}>Podemos guardar temporariamente parâmetros de campanha no navegador para encaminhá-los ao checkout da Cakto. A Cakto utiliza suas próprias tecnologias e avisos durante a compra.</p>
        <h2 style={{ fontSize: 28, margin: "36px 0 12px" }}>Controles do navegador e contato</h2>
        <p>Você pode consultar e apagar cookies e dados locais ou restringir rastreadores nas configurações do seu navegador. Para dúvidas e solicitações sobre os dados da sua compra, use os canais de atendimento informados na confirmação do pedido.</p>
        <p style={{ marginTop: 14 }}>A Meta, a Microsoft e a Cakto tratam os dados recebidos conforme seus próprios termos e políticas.</p>
        <p style={{ marginTop: 36 }}><Link href="/" style={{ color: "var(--gold)", fontWeight: 700 }}>Voltar para a Missão Secreta</Link></p>
      </article>
    </main>
  );
}
