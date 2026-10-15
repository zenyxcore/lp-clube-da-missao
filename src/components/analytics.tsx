"use client";
import { useEffect, useState } from "react";
import { offer } from "@/lib/config";
import { campaignParams } from "@/lib/campaign";
type Pixel = ((...args: unknown[]) => void) & {
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  callMethod?: (...args: unknown[]) => void;
};
declare global {
  interface Window {
    fbq?: Pixel;
    _fbq?: Pixel;
  }
}
const CONSENT = "clube-lp:analytics-consent";
export function trackCheckout() {
  try {
    if (localStorage.getItem(CONSENT) === "accepted")
      window.fbq?.("track", "InitiateCheckout", {
        content_name: "Missão Secreta",
        value: offer.price,
        currency: offer.currency,
      });
  } catch {}
}
export function Analytics() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!offer.metaPixelId) return;
    const start = () => {
      try {
        if (localStorage.getItem(CONSENT) !== "accepted") return;
        sessionStorage.setItem(
          "clube-lp:campaign",
          campaignParams(location.search).toString(),
        );
      } catch {
        return;
      }
      if (window.fbq) {
        window.fbq("consent", "grant");
        return;
      }
      const fbq: Pixel = (...args) => {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue?.push(args);
      };
      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      window.fbq = fbq;
      window._fbq = fbq;
      fbq("consent", "grant");
      fbq("init", offer.metaPixelId);
      fbq("track", "PageView");
      fbq("track", "ViewContent", {
        content_name: "Missão Secreta",
        value: offer.price,
        currency: offer.currency,
      });
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    };
    const show = () => setOpen(true);
    const initialize = () => {
      try {
        if (!localStorage.getItem(CONSENT)) setOpen(true);
        else start();
      } catch {
        setOpen(true);
      }
    };
    const frame = requestAnimationFrame(initialize);
    const changed = () => {
      try {
        if (localStorage.getItem(CONSENT) === "accepted") start();
        else {
          window.fbq?.("consent", "revoke");
          sessionStorage.removeItem("clube-lp:campaign");
        }
      } catch {}
    };
    window.addEventListener("clube:consent", changed);
    window.addEventListener("clube:privacy", show);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("clube:consent", changed);
      window.removeEventListener("clube:privacy", show);
    };
  }, []);
  if (!offer.metaPixelId || !open) return null;
  function choose(value: string) {
    try {
      localStorage.setItem(CONSENT, value);
    } catch {}
    window.dispatchEvent(new Event("clube:consent"));
    setOpen(false);
  }
  return (
    <aside className="consent" aria-label="Preferências de privacidade">
      <div>
        <strong>Sua privacidade também importa.</strong>
        <p>
          Com sua permissão, usamos o Meta Pixel para medir visitas e campanhas.
          Você pode recusar ou alterar sua escolha no rodapé.{" "}
          {offer.privacyUrl && (
            <a href={offer.privacyUrl}>Política de privacidade</a>
          )}
        </p>
      </div>
      <button onClick={() => choose("rejected")}>Recusar</button>
      <button onClick={() => choose("accepted")}>Permitir</button>
    </aside>
  );
}
