export type Topico = "ferramentas" | "pesquisa" | "negocios" | "tendencias";

export interface Noticia {
  id: string;
  titulo: string;
  fonte: string;
  data: string;
  resumo: string;
  topico: Topico;
  url: string;
  novo: boolean;
}

export const mockNoticias: Noticia[] = [
  { id: "1", titulo: "Meta lança novas ferramentas de IA para criadores de conteúdo no Instagram", fonte: "TechCrunch", data: "07/04/2026", resumo: "A Meta anunciou um conjunto de ferramentas baseadas em IA que ajudam criadores a otimizar seus posts, sugerir hashtags e prever o melhor horário de publicação.", topico: "ferramentas", url: "#", novo: true },
  { id: "2", titulo: "Estudo revela que Reels têm 3x mais alcance que posts estáticos em 2026", fonte: "Social Media Today", data: "06/04/2026", resumo: "Nova pesquisa com 50.000 perfis comerciais confirma que vídeos curtos continuam dominando o alcance orgânico no Instagram, especialmente para negócios locais.", topico: "pesquisa", url: "#", novo: true },
  { id: "3", titulo: "TikTok Shop chega ao Brasil: como negócios locais podem aproveitar", fonte: "Exame", data: "05/04/2026", resumo: "Com o lançamento do TikTok Shop no mercado brasileiro, especialistas apontam oportunidades para micro e pequenos negócios venderem diretamente pelo app.", topico: "negocios", url: "#", novo: true },
  { id: "4", titulo: "Claude API agora suporta análise de imagens para estratégias de conteúdo", fonte: "Anthropic Blog", data: "04/04/2026", resumo: "A Anthropic lançou atualização que permite analisar imagens de posts e receber sugestões de melhoria de copy e design diretamente pela API.", topico: "ferramentas", url: "#", novo: false },
  { id: "5", titulo: "Pesquisa: 67% dos consumidores descobrem produtos locais pelo Instagram", fonte: "Kantar", data: "03/04/2026", resumo: "Levantamento nacional com 8.400 consumidores aponta que mais de dois terços descobriram pelo menos um negócio local nas redes sociais nos últimos 3 meses.", topico: "pesquisa", url: "#", novo: false },
  { id: "6", titulo: "Como marcas locais estão usando IA para produzir 10x mais conteúdo", fonte: "Meio & Mensagem", data: "02/04/2026", resumo: "Reportagem mostra casos reais de pequenos negócios que multiplicaram sua produção de conteúdo usando ferramentas de IA sem aumentar a equipe.", topico: "negocios", url: "#", novo: false },
  { id: "7", titulo: "Algoritmo do Instagram 2026: o que muda para contas comerciais", fonte: "Later Blog", data: "01/04/2026", resumo: "Instagram confirma mudanças no algoritmo que priorizam conteúdo com alta taxa de saves e compartilhamentos, em detrimento dos likes tradicionais.", topico: "tendencias", url: "#", novo: false },
  { id: "8", titulo: "Canva lança editor de vídeo com IA integrada para criadores", fonte: "Product Hunt", data: "31/03/2026", resumo: "Nova funcionalidade do Canva permite gerar roteiros, gravar com teleprompter e editar vídeos automaticamente usando inteligência artificial.", topico: "ferramentas", url: "#", novo: false },
  { id: "9", titulo: "Marketing de conteúdo B2C: tendências para o segundo semestre de 2026", fonte: "Content Marketing Institute", data: "30/03/2026", resumo: "Relatório aponta as principais tendências: vídeo curto, conteúdo gerado por IA supervisionada e autenticidade como diferencial competitivo.", topico: "tendencias", url: "#", novo: false },
  { id: "10", titulo: "WhatsApp Business atinge 200 milhões de usuários ativos no Brasil", fonte: "Folha de S.Paulo", data: "28/03/2026", resumo: "Meta confirma marco histórico: WhatsApp Business supera 200 milhões de usuários ativos mensais no Brasil, consolidando o app como canal de vendas.", topico: "negocios", url: "#", novo: false },
];
