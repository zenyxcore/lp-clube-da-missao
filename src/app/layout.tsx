import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const sans = localFont({
  src: [
    { path: "../../public/fonts/dm-sans-400.ttf", weight: "400" },
    { path: "../../public/fonts/dm-sans-600.ttf", weight: "600" },
    { path: "../../public/fonts/dm-sans-700.ttf", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const display = localFont({
  src: [
    { path: "../../public/fonts/lora-700.ttf", weight: "700" },
    {
      path: "../../public/fonts/lora-600-italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://lpclubedamissao.vercel.app"),
  title: "Missão Secreta | Transforme sua casa em uma grande aventura",
  description:
    "Uma caça ao tesouro com pistas, mistérios e desafios para crianças de 5 a 9 anos. Descubra a Missão Secreta do Clube da Missão.",
  openGraph: {
    locale: "pt_BR",
    type: "website",
    title: "Uma grande aventura começa em casa.",
    description: "Conheça a Missão Secreta — A Caça ao Tesouro Perdido.",
    images: [{ url: "/assets/mundo-da-missao.webp", width: 1672, height: 941 }],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
