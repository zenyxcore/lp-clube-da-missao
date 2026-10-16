"use client";
import { Analytics } from "./analytics";
import { Announcement } from "./header";
import { Hero } from "./hero";
import { Offer } from "./offer";
import { HowItWorks } from "./how-it-works";
import { Demo } from "./demonstration";
import { Benefits } from "./benefits";
import { Personalization } from "./personalization";
import { Bonuses } from "./bonuses";
import { Testimonials } from "./testimonials";
import { Trust } from "./trust";
import { FAQ } from "./faq";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
export function Landing() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Announcement />
      <main id="conteudo">
        <Hero />
        <HowItWorks />
        <Demo />
        <Bonuses />
        <Offer />
        <Testimonials />
        <Benefits />
        <Personalization />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
