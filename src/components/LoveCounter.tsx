import { useEffect, useState } from "react";

/** Data em que tudo começou — troque aqui se a data for outra. */
export const INICIO_DO_AMOR = new Date("2024-09-26T20:00:00-03:00");

type Parts = {
  anos: number;
  meses: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function diff(from: Date, to: Date): Parts {
  let anos = to.getFullYear() - from.getFullYear();
  let meses = to.getMonth() - from.getMonth();
  let dias = to.getDate() - from.getDate();
  let horas = to.getHours() - from.getHours();
  let minutos = to.getMinutes() - from.getMinutes();
  let segundos = to.getSeconds() - from.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const prev = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    dias += prev;
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }
  return { anos, meses, dias, horas, minutos, segundos };
}

const labels: Array<[keyof Parts, string]> = [
  ["anos", "anos"],
  ["meses", "meses"],
  ["dias", "dias"],
  ["horas", "horas"],
  ["minutos", "min"],
  ["segundos", "seg"],
];

export function LoveCounter() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(INICIO_DO_AMOR, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="panel halftone rounded-lg p-6 sm:p-8">
      <p className="font-display text-2xl text-gwen">Nossa jornada do amor</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Tempo que os nossos corações batem juntos
      </p>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {labels.map(([key, label]) => (
          <div
            key={key}
            className="rounded-md border-2 border-ink bg-secondary px-2 py-3 text-center"
          >
            <div className="font-display text-3xl tabular-nums text-foreground glitch-text sm:text-4xl">
              {parts ? String(parts[key]).padStart(2, "0") : "--"}
            </div>
            <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
