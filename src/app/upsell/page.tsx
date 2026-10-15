import type { Metadata } from "next";
import { UpsellPage } from "@/components/upsell-page";

export const metadata: Metadata = {
  title: "Uma nova aventura para sua família | Clube da Missão",
  description: "Leve cinco novas missões para continuar a aventura em família.",
  robots: { index: false, follow: false },
};

export default function UpsellRoute() {
  return <UpsellPage caktoSnippet={process.env.CAKTO_UPSELL_BUTTONS_HTML || ""} />;
}
