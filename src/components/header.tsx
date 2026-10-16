"use client";
import { useClock } from "./shared";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function Announcement() {
  const now = useClock();
  const today = now !== null ? dateFormatter.format(now) : null;

  return (
    <div className="announcement">
      <p>
        <strong>
          Condição especial termina hoje{today ? `, ${today}` : ""}
        </strong>
      </p>
    </div>
  );
}
