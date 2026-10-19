"use client";
import { useEffect, useState } from "react";
import { offer } from "@/lib/config";
import { campaignParams, checkoutWithCampaign } from "@/lib/campaign";
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
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
    clubeMetaPage?: string;
  }
}
const NOTICE = "clube-lp:privacy-notice";
export function trackCheckout() {
  window.fbq?.("track", "InitiateCheckout", {
    content_name: "Missão Secreta",
    value: offer.price,
    currency: offer.currency,
  });
}
export function startCheckout() {
  const target = offer.checkoutUrl || offer.interestUrl;
  if (!target) return;
  let remembered = "";
  try { remembered = sessionStorage.getItem("clube-lp:campaign") || ""; } catch {}
  if (offer.checkoutUrl) trackCheckout();
  window.location.assign(checkoutWithCampaign(target, window.location.search, remembered));
}
export function Analytics() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Load the supplied Clarity tag on entry, independently of the notice.
    if (!window.clarity) {
      const clarity: NonNullable<Window["clarity"]> = (...args) => {
        (clarity.q ||= []).push(args);
      };
      window.clarity = clarity;
      const script = document.createElement("script");
      script.id = "clube-clarity";
      script.async = true;
      script.src = "https://www.clarity.ms/tag/yzxp18nrg1";
      document.head.appendChild(script);
    }
    try {
      const current = campaignParams(window.location.search).toString();
      if (current) sessionStorage.setItem("clube-lp:campaign", current);
    } catch {}
    if (offer.metaPixelId) {
      if (!window.fbq) {
        const fbq: Pixel = (...args) => {
          if (fbq.callMethod) fbq.callMethod(...args);
          else fbq.queue?.push(args);
        };
        fbq.queue = [];
        fbq.loaded = true;
        fbq.version = "2.0";
        window.fbq = fbq;
        window._fbq = fbq;
        fbq("init", offer.metaPixelId);
        const script = document.createElement("script");
        script.id = "clube-meta-pixel";
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);
      }
      const page = window.location.pathname + window.location.search;
      if (window.clubeMetaPage !== page) {
        window.clubeMetaPage = page;
        window.fbq("track", "PageView");
        window.fbq("track", "ViewContent", {
          content_name: window.location.pathname.startsWith("/upsell")
            ? "Clube da Missão — 5 novas aventuras" : "Missão Secreta",
          value: offer.price,
          currency: offer.currency,
        });
      }
    }
    const show = () => setOpen(true);
    const frame = requestAnimationFrame(() => {
      try { if (!localStorage.getItem(NOTICE)) setOpen(true); }
      catch { setOpen(true); }
    });
    window.addEventListener("clube:privacy", show);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("clube:privacy", show);
    };
  }, []);
  if (!open) return null;
  function dismiss() {
    try { localStorage.setItem(NOTICE, "seen"); } catch {}
    setOpen(false);
  }
  return (
    <aside className="consent" aria-label="Aviso de privacidade">
      <div><p>
        Usamos cookies, Meta Pixel e Microsoft Clarity para medir visitas,
        campanhas e navegação. {offer.privacyUrl && <a href={offer.privacyUrl}>Saiba mais na Política de Privacidade</a>}
      </p></div>
      <button onClick={dismiss}>Entendi</button>
    </aside>
  );
}
