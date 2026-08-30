import { createFileRoute } from "@tanstack/react-router";
import { LoveCounter } from "@/components/LoveCounter";
import { PhotoAlbum } from "@/components/PhotoAlbum";
import cidade from "@/assets/cidade.jpg";
import coracao from "@/assets/coracao-aranha.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para o Meu Amor — Nosso Multiverso" },
      {
        name: "description",
        content:
          "Um álbum digital em estilo Aranhaverso para a mulher da minha vida: nossas fotos, nossa história e o tempo que nossos corações batem juntos.",
      },
      { property: "og:title", content: "Para o Meu Amor — Nosso Multiverso" },
      {
        property: "og:description",
        content:
          "Álbum digital estilo Aranhaverso com as nossas fotos, a nossa história e a nossa carta de amor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capitulos = [
  {
    n: "01",
    titulo: "O primeiro olhar",
    texto:
      "Foi como se o universo tivesse selado algo grande entre a gente, sem nem precisar dizer uma palavra.",
  },
  {
    n: "02",
    titulo: "O nosso jeito",
    texto:
      "Com você tudo fica mais leve, mais bonito e mais real. Você me entende, me acalma e me faz sentir em casa.",
  },
  {
    n: "03",
    titulo: "O que vem agora",
    texto:
      "Quero viver cada capítulo com você, porque tudo o que a gente constrói juntos vira um sonho lindo.",
  },
];

function Index() {
  return (
    <div className="min-h-screen web-bg">
      {/* Corações flutuando */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {[12, 34, 58, 76, 90].map((left, i) => (
          <span
            key={left}
            className="animate-float-heart absolute bottom-0 text-2xl text-primary"
            style={{
              left: `${left}%`,
              animationDelay: `${i * 1.8}s`,
              opacity: 0,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      <header className="relative z-10 mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-4 py-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={coracao.url}
            alt="Coração metade Miles, metade Gwen"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full border-2 border-ink object-cover"
          />
          <span className="truncate font-display text-xl tracking-[0.22em] uppercase">
            Miles &amp; Gwen
          </span>
        </a>
        <nav className="hidden gap-6 font-display text-lg uppercase tracking-widest sm:flex">
          <a href="#album" className="hover:text-gwen">
            Álbum
          </a>
          <a href="#historia" className="hover:text-gwen">
            História
          </a>
          <a href="#carta" className="hover:text-gwen">
            Carta
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={cidade}
          alt="Cidade em estilo de quadrinhos à noite"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent,var(--background)_75%)]" />
        <div className="halftone relative mx-auto grid w-[min(1180px,calc(100%-2rem))] items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-display text-lg tracking-[0.3em] text-cyan uppercase">
              Para a minha mulher
            </p>
            <h1 className="comic-outline mt-3 text-6xl leading-[0.85] uppercase sm:text-8xl">
              Em todos os
              <span className="block text-primary">universos</span>
              <span className="block text-gwen">eu escolho você</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Eu podia ser o Miles de qualquer dimensão: em todas elas o meu
              coração ia dar um salto quando você aparecesse. Esse é o nosso
              álbum, a nossa história e o meu amor por você em forma de site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#album"
                className="rounded-md border-2 border-ink bg-primary px-6 py-3 font-display text-xl tracking-wide uppercase text-primary-foreground shadow-[var(--shadow-comic)] transition-transform hover:-translate-y-0.5"
              >
                Ver nossas fotos
              </a>
              <a
                href="#carta"
                className="rounded-md border-2 border-gwen px-6 py-3 font-display text-xl tracking-wide uppercase text-gwen transition-colors hover:bg-gwen hover:text-accent-foreground"
              >
                Minha carta pra você
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-16 w-px -translate-y-full bg-foreground/40"
            />
            <div className="animate-swing panel halftone rounded-xl p-4 shadow-[var(--shadow-glow),var(--shadow-comic)]">
              <img
                src={pizzaria.url}
                alt="Nós dois juntos numa noite especial"
                width={720}
                height={540}
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-3 text-center font-hand text-2xl text-gwen">
                metade eu, metade você
              </p>
            </div>
            <img
              src={coracao.url}
              alt="Coração metade Miles, metade Gwen"
              width={120}
              height={120}
              className="absolute -bottom-6 -left-6 h-24 w-24 rotate-[-8deg] rounded-full border-[3px] border-ink object-cover shadow-[var(--shadow-comic)]"
            />
          </div>

        </div>
      </section>

      {/* CONTADOR */}
      <section className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))] py-8">
        <LoveCounter />
      </section>

      {/* ALBUM */}
      <section
        id="album"
        className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))] py-16"
      >
        <p className="font-display text-lg tracking-[0.3em] text-cyan uppercase">
          Nosso álbum
        </p>
        <h2 className="comic-outline mt-2 text-5xl uppercase sm:text-6xl">
          Momentos <span className="text-primary">canônicos</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Cada quadrinho é uma lembrança nossa. Toque para abrir em tela cheia.
        </p>
        <div className="mt-10">
          <PhotoAlbum />
        </div>
      </section>

      {/* HISTORIA */}
      <section
        id="historia"
        className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))] py-16"
      >
        <p className="font-display text-lg tracking-[0.3em] text-cyan uppercase">
          Nossa história
        </p>
        <h2 className="comic-outline mt-2 text-5xl uppercase sm:text-6xl">
          Os nossos <span className="text-gwen">capítulos</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capitulos.map((c) => (
            <article
              key={c.n}
              className="panel halftone rounded-lg p-6 transition-transform hover:-translate-y-1"
            >
              <span className="font-display text-5xl text-primary">{c.n}</span>
              <h3 className="mt-2 text-2xl uppercase">{c.titulo}</h3>
              <p className="mt-3 text-muted-foreground">{c.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CARTA */}
      <section
        id="carta"
        className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))] py-16"
      >
        <p className="font-display text-lg tracking-[0.3em] text-cyan uppercase">
          Carta do coração
        </p>
        <h2 className="comic-outline mt-2 text-5xl uppercase sm:text-6xl">
          O que você é pra mim
        </h2>
        <div className="tape panel relative mt-10 rounded-lg p-6 sm:p-10">
          <div className="space-y-5 font-hand text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            <p>
              Você é uma das melhores coisas que já aconteceram na minha vida.
              Traz uma paz que eu não sabia que existia e uma felicidade que me
              acompanha todos os dias.
            </p>
            <p>
              Você é a pessoa que me faz sorrir sem motivo, que me deixa mais
              tranquilo e que torna qualquer lugar melhor só por estar do meu
              lado.
            </p>
            <p>
              Te amo demais, e eu vou continuar escolhendo você em todos os
              universos, em todas as fases e em todos os dias da minha vida.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative z-10 mx-auto w-[min(1180px,calc(100%-2rem))] pb-20">
        <div className="panel halftone rounded-lg bg-[image:var(--gradient-verse)] p-8 text-center sm:p-14">
          <p className="font-display text-lg tracking-[0.3em] uppercase">
            Para sempre
          </p>
          <h2 className="comic-outline mx-auto mt-3 max-w-3xl text-4xl uppercase sm:text-6xl">
            Você é a minha pessoa favorita do multiverso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/90">
            Obrigado por me fazer feliz e por me mostrar que amor de verdade é
            feito de presença, carinho e cumplicidade. Te amo muito.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        Feito com amor para a pessoa mais especial do meu mundo. 🕷️❤️
      </footer>
    </div>
  );
}
