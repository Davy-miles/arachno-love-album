import elaLinda from "@/assets/ela_linda.jpg.asset.json";
import nosDois from "@/assets/nos_dois.jpg.asset.json";
import caminhada from "@/assets/caminhada.jpg.asset.json";
import pizzaria from "@/assets/pizzaria.jpg.asset.json";
import escurinho from "@/assets/escurinho.jpg.asset.json";
import deslumbrante from "@/assets/deslumbrante.jpg.asset.json";

export type AlbumPhoto = {
  id: string;
  titulo: string;
  legenda: string;
  /** Caminho/URL da foto. Vazio = slot esperando a foto. */
  src?: string;
  /** Tamanho no mosaico */
  span?: "tall" | "wide" | "normal";
};

export const album: AlbumPhoto[] = [
  {
    id: "1",
    titulo: "Ela linda",
    legenda: "O sorriso que salva o meu universo.",
    src: elaLinda.url,
    span: "tall",
  },
  {
    id: "2",
    titulo: "Nós dois",
    legenda: "Dois universos, um só coração.",
    src: nosDois.url,
    span: "normal",
  },
  {
    id: "3",
    titulo: "A caminhada",
    legenda: "Qualquer rua é bonita com você do lado.",
    src: caminhada.url,
    span: "normal",
  },
  {
    id: "4",
    titulo: "Na pizzaria",
    legenda: "Nossa mesa favorita do multiverso inteiro.",
    src: pizzaria.url,
    span: "wide",
  },
  {
    id: "5",
    titulo: "No escurinho",
    legenda: "Até no escuro você brilha.",
    src: escurinho.url,
    span: "normal",
  },
  {
    id: "6",
    titulo: "Deslumbrante",
    legenda: "Minha Gwen em todas as versões.",
    src: deslumbrante.url,
    span: "tall",
  },
];
