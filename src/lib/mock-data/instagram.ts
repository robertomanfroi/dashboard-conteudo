export type PostStatus = "agendado" | "rascunho" | "publicado" | "backlog";
export type PostType = "Reel" | "Carrossel" | "Story" | "Feed";

export interface Post {
  id: string;
  legenda: string;
  tipo: PostType;
  status: PostStatus;
  data?: string;
  engajamento?: number;
  plataforma: string;
}

export const mockPosts: Post[] = [
  { id: "1", legenda: "5 erros que donos de salão cometem no Instagram (e como corrigir)", tipo: "Carrossel", status: "agendado", data: "2026-04-10", plataforma: "Instagram" },
  { id: "2", legenda: "Como eu aumentei meu faturamento 40% só mudando a bio", tipo: "Reel", status: "agendado", data: "2026-04-12", plataforma: "Instagram" },
  { id: "3", legenda: "A verdade sobre postar todo dia (que ninguém te conta)", tipo: "Feed", status: "agendado", data: "2026-04-15", plataforma: "Instagram" },
  { id: "4", legenda: "Tutorial: como criar legenda que converte em 3 passos", tipo: "Reel", status: "rascunho", plataforma: "Instagram" },
  { id: "5", legenda: "Antes e depois: perfil otimizado para vendas locais", tipo: "Carrossel", status: "rascunho", plataforma: "Instagram" },
  { id: "6", legenda: "Story de bastidores da semana", tipo: "Story", status: "rascunho", plataforma: "Instagram" },
  { id: "7", legenda: "3 tipos de post que mais vendem para confeitarias", tipo: "Carrossel", status: "publicado", data: "2026-04-01", engajamento: 847, plataforma: "Instagram" },
  { id: "8", legenda: "Como responder um orçamento pelo direct (script pronto)", tipo: "Feed", status: "publicado", data: "2026-04-03", engajamento: 1203, plataforma: "Instagram" },
  { id: "9", legenda: "Minha rotina de conteúdo em 30 minutos por dia", tipo: "Reel", status: "publicado", data: "2026-04-05", engajamento: 2891, plataforma: "Instagram" },
  { id: "10", legenda: "Post sobre objeção: 'meu produto é caro'", tipo: "Carrossel", status: "backlog", plataforma: "Instagram" },
  { id: "11", legenda: "Série: Um dia na vida de uma nutricionista", tipo: "Reel", status: "backlog", plataforma: "Instagram" },
  { id: "12", legenda: "Comparativo: Instagram vs TikTok para negócios locais", tipo: "Feed", status: "backlog", plataforma: "Instagram" },
  { id: "13", legenda: "Depoimento de cliente (formato story)", tipo: "Story", status: "backlog", plataforma: "Instagram" },
];
