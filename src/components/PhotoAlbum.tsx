import { useCallback, useEffect, useState } from "react";
import { album, type AlbumPhoto } from "@/data/album";

const spanClass: Record<NonNullable<AlbumPhoto["span"]>, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

function EmptyPanel({ titulo }: { titulo: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[image:var(--gradient-verse)] p-4 text-center opacity-90">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.6" fill="none">
          <path d="M24 4v40M4 24h40M8 8l32 32M40 8L8 40" />
          <circle cx="24" cy="24" r="8" />
          <circle cx="24" cy="24" r="15" />
        </g>
      </svg>
      <p className="font-display text-xl leading-none">{titulo}</p>
      <p className="text-[0.7rem] font-semibold uppercase tracking-widest">
        foto a caminho
      </p>
    </div>
  );
}

export function PhotoAlbum() {
  const [indice, setIndice] = useState<number | null>(null);
  const aberta = indice === null ? null : album[indice];

  const mover = useCallback((passo: number) => {
    setIndice((atual) =>
      atual === null ? atual : (atual + passo + album.length) % album.length,
    );
  }, []);

  useEffect(() => {
    if (indice === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndice(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [indice, mover]);

  return (
    <>
      <div className="grid auto-rows-[260px] grid-cols-1 gap-6 sm:auto-rows-[250px] sm:grid-cols-3">
        {album.map((foto, i) => (
          <button
            key={foto.id}
            type="button"
            onClick={() => setIndice(i)}
            className={`panel group relative overflow-hidden rounded-md text-left transition-all duration-500 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[var(--shadow-glow),var(--shadow-comic)] ${spanClass[foto.span ?? "normal"]}`}
            style={{ rotate: `${i % 2 === 0 ? -0.9 : 1}deg` }}
          >
            {foto.src ? (
              <img
                src={foto.src}
                alt={foto.titulo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
            ) : (
              <EmptyPanel titulo={foto.titulo} />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_5%,transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-xl uppercase tracking-wide text-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {foto.titulo}
              </p>
              <p className="font-hand text-xl leading-tight text-gwen">
                {foto.legenda}
              </p>
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-3 text-lg text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              ❤
            </span>
          </button>
        ))}
      </div>

      {aberta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.09_0.01_285/0.94)] p-4 backdrop-blur-sm"
          onClick={() => setIndice(null)}
          role="dialog"
          aria-label={aberta.titulo}
        >
          <div
            className="panel halftone max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-ink">
              {aberta.src ? (
                <img
                  src={aberta.src}
                  alt={aberta.titulo}
                  className="max-h-[62vh] w-full object-contain"
                />
              ) : (
                <div className="h-64">
                  <EmptyPanel titulo={aberta.titulo} />
                </div>
              )}
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => mover(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-primary/90 px-3 py-1 font-display text-2xl text-primary-foreground"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => mover(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-primary/90 px-3 py-1 font-display text-2xl text-primary-foreground"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="font-display text-2xl uppercase">
                  {aberta.titulo}
                </p>
                <p className="font-hand text-xl text-gwen">{aberta.legenda}</p>
              </div>
              <button
                type="button"
                onClick={() => setIndice(null)}
                className="shrink-0 rounded-md border-2 border-ink bg-primary px-4 py-2 font-display text-lg text-primary-foreground"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
