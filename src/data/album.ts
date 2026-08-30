/**
 * Álbum de fotos.
 *
 * Para adicionar uma foto: coloque a imagem em src/assets (ou use o link do
 * arquivo enviado) e preencha o campo `src`. Enquanto `src` estiver vazio, o
 * quadrinho aparece como um "painel a revelar".
 */
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
    span: "tall",
  },
  {
    id: "2",
    titulo: "Nós dois",
    legenda: "Dois universos, um só coração.",
    span: "normal",
  },
  {
    id: "3",
    titulo: "A caminhada",
    legenda: "Qualquer rua é bonita com você do lado.",
    span: "normal",
  },
  {
    id: "4",
    titulo: "Na pizzaria",
    legenda: "Nossa mesa favorita do multiverso inteiro.",
    span: "wide",
  },
  {
    id: "5",
    titulo: "No escurinho",
    legenda: "Até no escuro você brilha.",
    span: "normal",
  },
  {
    id: "6",
    titulo: "Deslumbrante",
    legenda: "Minha Gwen em todas as versões.",
    span: "tall",
  },
];
