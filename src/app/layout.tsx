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
      <head>
        {/* vturb / smartplayer — otimização */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`,
          }}
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/d10e2dd0-f3c6-4a5e-ac67-f00f394436c3/players/6ad280f6a884ed0eb810d455/v4/embed.html"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/d10e2dd0-f3c6-4a5e-ac67-f00f394436c3/players/6ad280f6a884ed0eb810d455/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/d10e2dd0-f3c6-4a5e-ac67-f00f394436c3/6ad280f0c1bda537efa25af0/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />
        <script
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
          async
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
