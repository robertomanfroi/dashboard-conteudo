"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, TrendingDown, Minus, ChevronUp, ChevronDown } from "lucide-react";
import { mockConcorrentes, type Concorrente, type Tendencia } from "@/lib/mock-data/concorrentes";

type SortKey = keyof Pick<Concorrente, "seguidores" | "crescimento" | "engajamento">;

function SortIcon({ sortKey, current, asc }: { sortKey: SortKey; current: SortKey; asc: boolean }) {
  if (sortKey !== current) return null;
  return asc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
}

const TEND_ICON: Record<Tendencia, React.ReactNode> = {
  up:     <TrendingUp  className="w-3.5 h-3.5 text-green-400" />,
  down:   <TrendingDown className="w-3.5 h-3.5 text-red-400" />,
  stable: <Minus       className="w-3.5 h-3.5 text-yellow-400" />,
};

const PLAT_COLOR: Record<string, string> = {
  Instagram: "bg-pink-500/15 text-pink-300",
  TikTok:    "bg-cyan-500/15 text-cyan-300",
  YouTube:   "bg-red-500/15 text-red-300",
};

export default function ConcorrentesPage() {
  const [sort, setSort] = useState<SortKey>("seguidores");
  const [asc, setAsc] = useState(false);

  const sorted = [...mockConcorrentes].sort((a, b) => {
    const va = parseFloat(String(a[sort]).replace("%",""));
    const vb = parseFloat(String(b[sort]).replace("%",""));
    return asc ? va - vb : vb - va;
  });

  const toggleSort = (key: SortKey) => {
    if (sort === key) setAsc((v) => !v);
    else { setSort(key); setAsc(false); }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" /> Rastreador de Concorrentes
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {mockConcorrentes.length} perfis monitorados em {new Set(mockConcorrentes.map(c => c.plataforma)).size} plataformas
        </p>
      </div>

      {/* Cards resumo */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Maior crescimento</p>
            <p className="text-lg font-bold mt-1 text-green-400">
              +{Math.max(...mockConcorrentes.map(c => c.crescimento))}%
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {mockConcorrentes.sort((a,b) => b.crescimento - a.crescimento)[0].handle}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Maior engajamento</p>
            <p className="text-lg font-bold mt-1 text-blue-400">
              {mockConcorrentes.sort((a,b) => parseFloat(b.engajamento) - parseFloat(a.engajamento))[0].engajamento}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {mockConcorrentes.sort((a,b) => parseFloat(b.engajamento) - parseFloat(a.engajamento))[0].handle}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Em queda</p>
            <p className="text-lg font-bold mt-1 text-red-400">
              {mockConcorrentes.filter(c => c.tendencia === "down").length}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">perfis em declínio</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabela */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Concorrentes Monitorados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  <th className="text-left pb-2 pr-4 font-medium">Perfil</th>
                  <th className="text-left pb-2 pr-4 font-medium">Plataforma</th>
                  <th className="text-right pb-2 pr-4 font-medium cursor-pointer select-none hover:text-foreground" onClick={() => toggleSort("seguidores")}>
                    <span className="inline-flex items-center gap-1">Seguidores <SortIcon sortKey="seguidores" current={sort} asc={asc} /></span>
                  </th>
                  <th className="text-right pb-2 pr-4 font-medium cursor-pointer select-none hover:text-foreground" onClick={() => toggleSort("crescimento")}>
                    <span className="inline-flex items-center gap-1">Crescimento <SortIcon sortKey="crescimento" current={sort} asc={asc} /></span>
                  </th>
                  <th className="text-right pb-2 pr-4 font-medium cursor-pointer select-none hover:text-foreground" onClick={() => toggleSort("engajamento")}>
                    <span className="inline-flex items-center gap-1">Engajamento <SortIcon sortKey="engajamento" current={sort} asc={asc} /></span>
                  </th>
                  <th className="text-left pb-2 pr-4 font-medium">Frequência</th>
                  <th className="text-left pb-2 font-medium">Tendência</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sorted.map((c) => (
                  <tr key={c.id} className="hover:bg-accent/30 transition-colors">
                    <td className="py-3 pr-4">
                      <p className="font-medium text-xs">{c.nome}</p>
                      <p className="text-[10px] text-muted-foreground">{c.handle}</p>
                    </td>
                    <td className="py-3 pr-4">
                      <Badge variant="outline" className={`text-[10px] ${PLAT_COLOR[c.plataforma] || ""}`}>
                        {c.plataforma}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4 text-right text-xs font-medium">
                      {c.seguidores.toLocaleString("pt-BR")}
                    </td>
                    <td className={`py-3 pr-4 text-right text-xs font-medium ${c.crescimento > 0 ? "text-green-400" : c.crescimento < 0 ? "text-red-400" : "text-yellow-400"}`}>
                      {c.crescimento > 0 ? "+" : ""}{c.crescimento}%
                    </td>
                    <td className="py-3 pr-4 text-right text-xs">{c.engajamento}</td>
                    <td className="py-3 pr-4 text-xs text-muted-foreground">{c.frequencia}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-1">
                        {TEND_ICON[c.tendencia]}
                        <span className="text-[10px] text-muted-foreground">{c.ultimoPost}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
