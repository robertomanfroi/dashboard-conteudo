export type Tendencia = "up" | "down" | "stable";

export interface Concorrente {
  id: string;
  nome: string;
  handle: string;
  plataforma: string;
  seguidores: number;
  crescimento: number;
  tendencia: Tendencia;
  engajamento: string;
  frequencia: string;
  ultimoPost: string;
}

export const mockConcorrentes: Concorrente[] = [
  { id: "1", nome: "Marketing Local Pro", handle: "@marketinglocalpr", plataforma: "Instagram", seguidores: 42300, crescimento: 8.4, tendencia: "up", engajamento: "5.2%", frequencia: "1x/dia", ultimoPost: "2h atrás" },
  { id: "2", nome: "Negócio Digital BR", handle: "@negociodigitalbr", plataforma: "Instagram", seguidores: 31800, crescimento: 3.1, tendencia: "up", engajamento: "3.8%", frequencia: "5x/semana", ultimoPost: "1 dia atrás" },
  { id: "3", nome: "Conteúdo que Converte", handle: "@conteudoconverte", plataforma: "Instagram", seguidores: 28400, crescimento: -1.2, tendencia: "down", engajamento: "2.9%", frequencia: "3x/semana", ultimoPost: "3 dias atrás" },
  { id: "4", nome: "Vendas pelo Instagram", handle: "@vendaspeloig", plataforma: "Instagram", seguidores: 19700, crescimento: 11.6, tendencia: "up", engajamento: "6.7%", frequencia: "2x/dia", ultimoPost: "4h atrás" },
  { id: "5", nome: "Empreendedora Digital", handle: "@empreendedoradig", plataforma: "Instagram", seguidores: 15200, crescimento: 0.4, tendencia: "stable", engajamento: "4.1%", frequencia: "4x/semana", ultimoPost: "2 dias atrás" },
  { id: "6", nome: "Copy e Vendas", handle: "@copyevendas", plataforma: "TikTok", seguidores: 67400, crescimento: 22.3, tendencia: "up", engajamento: "8.4%", frequencia: "Diário", ultimoPost: "6h atrás" },
];
