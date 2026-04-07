export interface CalPost {
  id: string;
  dia: number;
  titulo: string;
  plataforma: "Instagram" | "YouTube" | "TikTok";
  tipo: string;
  status: "agendado" | "publicado";
}

export const mockCalPosts: CalPost[] = [
  { id: "c1",  dia: 1,  titulo: "3 posts que mais vendem para confeitarias", plataforma: "Instagram", tipo: "Carrossel", status: "publicado" },
  { id: "c2",  dia: 3,  titulo: "Script para responder orçamento pelo direct", plataforma: "Instagram", tipo: "Feed",      status: "publicado" },
  { id: "c3",  dia: 3,  titulo: "Vlog: bastidores da semana", plataforma: "YouTube", tipo: "Vídeo", status: "publicado" },
  { id: "c4",  dia: 5,  titulo: "Minha rotina de conteúdo em 30 minutos", plataforma: "Instagram", tipo: "Reel", status: "publicado" },
  { id: "c5",  dia: 7,  titulo: "Tutorial rápido — edição no celular", plataforma: "TikTok", tipo: "Vídeo", status: "publicado" },
  { id: "c6",  dia: 8,  titulo: "Como aumentei faturamento 40% pela bio", plataforma: "Instagram", tipo: "Reel", status: "publicado" },
  { id: "c7",  dia: 10, titulo: "5 erros que donos de salão cometem no Instagram", plataforma: "Instagram", tipo: "Carrossel", status: "agendado" },
  { id: "c8",  dia: 10, titulo: "Dica rápida: hashtags em 2026", plataforma: "TikTok", tipo: "Vídeo", status: "agendado" },
  { id: "c9",  dia: 12, titulo: "A verdade sobre postar todo dia", plataforma: "Instagram", tipo: "Reel", status: "agendado" },
  { id: "c10", dia: 14, titulo: "Workshop: Instagram para negócios locais", plataforma: "YouTube", tipo: "Live", status: "agendado" },
  { id: "c11", dia: 15, titulo: "A verdade sobre postar todo dia", plataforma: "Instagram", tipo: "Feed", status: "agendado" },
  { id: "c16", dia: 16, titulo: "Série: Um dia na vida de uma nutricionista", plataforma: "Instagram", tipo: "Reel", status: "agendado" },
  { id: "c17", dia: 18, titulo: "Comparativo: Instagram vs TikTok", plataforma: "Instagram", tipo: "Carrossel", status: "agendado" },
  { id: "c18", dia: 20, titulo: "Depoimento de cliente — formato story", plataforma: "Instagram", tipo: "Story", status: "agendado" },
  { id: "c19", dia: 22, titulo: "Tutorial: como criar legenda que converte", plataforma: "TikTok", tipo: "Vídeo", status: "agendado" },
  { id: "c20", dia: 25, titulo: "Antes e depois: perfil otimizado", plataforma: "Instagram", tipo: "Carrossel", status: "agendado" },
];
