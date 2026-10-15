"use client";
import { offer } from "@/lib/config";
import { useClock } from "./shared";
export function Announcement() {
  const now = useClock(Boolean(offer.endsAt)),
    end = Date.parse(offer.endsAt);
  const left = now && Number.isFinite(end) ? Math.max(0, end - now) : 0;
  return (
    <div className="announcement">
      <span className="launch-tag">EDIÇÃO DE ESTREIA</span>
      <p>
        <strong>Condição especial de lançamento</strong>
      </p>
      {left > 0 && (
        <span className="countdown">
          Oferta encerra em {Math.floor(left / 86400000)}d{" "}
          {Math.floor(left / 3600000) % 24}h {Math.floor(left / 60000) % 60}min
        </span>
      )}
    </div>
  );
}
