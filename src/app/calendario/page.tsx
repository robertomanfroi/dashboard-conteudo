"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { mockCalPosts, type CalPost } from "@/lib/mock-data/calendario";
import { cn } from "@/lib/utils";

type Plataforma = "Instagram" | "YouTube" | "TikTok";

const PLAT_COLOR: Record<Plataforma, string> = {
  Instagram: "bg-pink-500/80 text-white",
  YouTube:   "bg-red-500/80 text-white",
  TikTok:    "bg-cyan-500/80 text-white",
};

const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarioPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [filtros, setFiltros] = useState<Set<Plataforma>>(new Set(["Instagram", "YouTube", "TikTok"]));

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const toggleFiltro = (p: Plataforma) => {
    setFiltros((prev) => {
      const next = new Set(prev);
      if (next.has(p)) { next.delete(p); } else { next.add(p); }
      return next;
    });
  };

  const postsDoMes = mockCalPosts.filter((p) => filtros.has(p.plataforma));

  const postsPorDia = (dia: number): CalPost[] =>
    postsDoMes.filter((p) => p.dia === dia);

  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" /> Calendário de Conteúdo
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{postsDoMes.length} posts no mês</p>
        </div>
        <div className="flex items-center gap-2">
          {(["Instagram","YouTube","TikTok"] as Plataforma[]).map((p) => (
            <button
              key={p}
              onClick={() => toggleFiltro(p)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                filtros.has(p) ? PLAT_COLOR[p] + " border-transparent" : "border-border text-muted-foreground"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <button onClick={prevMonth} className="p-1 rounded hover:bg-accent transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <CardTitle className="text-base">{meses[month]} {year}</CardTitle>
            <button onClick={nextMonth} className="p-1 rounded hover:bg-accent transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Header dias da semana */}
          <div className="grid grid-cols-7 mb-2">
            {DIAS_SEMANA.map((d) => (
              <div key={d} className="text-center text-[11px] font-medium text-muted-foreground py-1">{d}</div>
            ))}
          </div>

          {/* Grid de dias */}
          <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="bg-card min-h-[72px]" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dia = i + 1;
              const posts = postsPorDia(dia);
              const isToday = dia === today.getDate() && month === today.getMonth() && year === today.getFullYear();
              return (
                <div key={dia} className={cn("bg-card min-h-[72px] p-1.5", isToday && "bg-primary/5")}>
                  <span className={cn(
                    "text-[11px] font-medium w-5 h-5 flex items-center justify-center rounded-full",
                    isToday ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  )}>
                    {dia}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {posts.slice(0, 2).map((p) => (
                      <div
                        key={p.id}
                        className={cn("text-[9px] px-1 py-0.5 rounded truncate", PLAT_COLOR[p.plataforma])}
                        title={p.titulo}
                      >
                        {p.tipo}
                      </div>
                    ))}
                    {posts.length > 2 && (
                      <div className="text-[9px] text-muted-foreground px-1">+{posts.length - 2}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legenda */}
          <div className="flex gap-4 mt-4 pt-3 border-t border-border">
            {(["Instagram","YouTube","TikTok"] as Plataforma[]).filter(p => filtros.has(p)).map((p) => (
              <span key={p} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={cn("w-2.5 h-2.5 rounded-sm", PLAT_COLOR[p])} />
                {p}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
