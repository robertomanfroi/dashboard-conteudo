"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Search } from "lucide-react";
import { mockNoticias, type Topico } from "@/lib/mock-data/noticias";
import { cn } from "@/lib/utils";

const TOPICO_CONFIG: Record<Topico, { label: string; color: string }> = {
  ferramentas: { label: "Ferramentas", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  pesquisa:    { label: "Pesquisa",    color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
  negocios:    { label: "Negócios",    color: "bg-green-500/15 text-green-300 border-green-500/20" },
  tendencias:  { label: "Tendências",  color: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
};

export default function NoticiasPage() {
  const [topico, setTopico] = useState<Topico | "todos">("todos");
  const [busca, setBusca] = useState("");

  const filtradas = mockNoticias.filter((n) => {
    const matchTopico = topico === "todos" || n.topico === topico;
    const matchBusca = busca === "" || n.titulo.toLowerCase().includes(busca.toLowerCase()) || n.resumo.toLowerCase().includes(busca.toLowerCase());
    return matchTopico && matchBusca;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-primary" /> Consolidador de Notícias
        </h1>
        <p className="text-muted-foreground text-sm mt-1">{filtradas.length} artigos · Atualizado agora</p>
      </div>

      {/* Busca + Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar notícias..."
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setTopico("todos")}
            aria-pressed={topico === "todos"}
            className={cn("px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer min-h-[44px]",
              topico === "todos" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40"
            )}
          >
            Todos
          </button>
          {(Object.keys(TOPICO_CONFIG) as Topico[]).map((t) => (
            <button
              key={t}
              onClick={() => setTopico(t)}
              aria-pressed={topico === t}
              className={cn("px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer min-h-[44px]",
                topico === t
                  ? `${TOPICO_CONFIG[t].color} border-transparent`
                  : "border-border text-muted-foreground hover:border-primary/40"
              )}
            >
              {TOPICO_CONFIG[t].label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de notícias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtradas.map((n) => (
          <Card key={n.id} className="hover:border-primary/30 transition-colors">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className={cn("text-[10px]", TOPICO_CONFIG[n.topico].color)}>
                    {TOPICO_CONFIG[n.topico].label}
                  </Badge>
                  {n.novo && (
                    <Badge className="text-[10px] bg-primary/20 text-primary border-primary/30 border">Novo</Badge>
                  )}
                </div>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir "${n.titulo}" em nova aba`}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0 p-1.5 rounded hover:bg-accent min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm font-medium leading-snug">{n.titulo}</p>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{n.resumo}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-muted-foreground font-medium">{n.fonte}</span>
                <span className="text-[10px] text-muted-foreground">{n.data}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtradas.length === 0 && (
        <div className="text-center py-12 space-y-2">
          <p className="text-muted-foreground text-sm">Nenhuma notícia encontrada para os filtros selecionados.</p>
          <button
            onClick={() => { setTopico("todos"); setBusca(""); }}
            className="text-xs text-primary hover:underline cursor-pointer"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
