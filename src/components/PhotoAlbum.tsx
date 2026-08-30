import { useEffect, useState } from "react";
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
  const [aberta, setAberta] = useState<AlbumPhoto | null>(null);

  useEffect(() => {
    if (!aberta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberta(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberta]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[240px]">
        {album.map((foto, i) => (
          <button
            key={foto.id}
            type="button"
            onClick={() => setAberta(foto)}
            className={`panel group relative overflow-hidden rounded-md text-left transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.6deg] ${spanClass[foto.span ?? "normal"]}`}
            style={{ rotate: `${i % 2 === 0 ? -0.7 : 0.8}deg` }}
          >
            {foto.src ? (
              <img
                src={foto.src}
                alt={foto.titulo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <EmptyPanel titulo={foto.titulo} />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,var(--ink),transparent)] p-3 pt-8">
              <p className="font-hand text-lg text-gwen">{foto.legenda}</p>
            </div>
          </button>
        ))}
      </div>

      {aberta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.09_0.01_285/0.92)] p-4"
          onClick={() => setAberta(null)}
          role="dialog"
          aria-label={aberta.titulo}
        >
          <div
            className="panel halftone max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {aberta.src ? (
              <img
                src={aberta.src}
                alt={aberta.titulo}
                className="max-h-[65vh] w-full object-contain"
              />
            ) : (
              <div className="h-64">
                <EmptyPanel titulo={aberta.titulo} />
              </div>
            )}
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="font-display text-2xl">{aberta.titulo}</p>
                <p className="font-hand text-lg text-gwen">{aberta.legenda}</p>
              </div>
              <button
                type="button"
                onClick={() => setAberta(null)}
                className="rounded-md border-2 border-ink bg-primary px-4 py-2 font-display text-lg text-primary-foreground"
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
