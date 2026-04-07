"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Eye, Heart, Users } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { kpiData, barData, lineData, topPosts } from "@/lib/mock-data/analytics";

const PERIODS = ["7d", "30d", "90d"] as const;
type Period = typeof PERIODS[number];

const KPI_ICONS = { impressoes: Eye, engajamento: Heart, seguidores: Users, alcance: TrendingUp };
const KPI_LABELS = { impressoes: "Impressões", engajamento: "Engajamento", seguidores: "Seguidores", alcance: "Alcance" };

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<Period>("30d");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" /> Analytics
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Performance e crescimento do conteúdo</p>
        </div>
        <div className="flex gap-1 bg-muted rounded-lg p-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                period === p ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {(Object.keys(kpiData) as (keyof typeof kpiData)[]).map((key) => {
          const Icon = KPI_ICONS[key];
          const d = kpiData[key];
          return (
            <Card key={key}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-muted-foreground font-normal flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" /> {KPI_LABELS[key]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-2xl font-bold tracking-tight">{d.value}</p>
                <p className={`text-xs font-medium ${d.positive ? "text-green-400" : "text-red-400"}`}>
                  {d.change} vs período anterior
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Impressões & Alcance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="impressoes" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} name="Impressões" />
                <Bar dataKey="alcance" fill="hsl(var(--primary) / 0.4)" radius={[3, 3, 0, 0]} name="Alcance" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Crescimento de Seguidores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="seguidores" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} name="Seguidores" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Posts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Top Posts por Desempenho</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {topPosts.map((post, i) => (
              <div key={post.id} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <span className="text-xs text-muted-foreground w-4 shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs truncate">{post.legenda}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{post.data}</p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0">{post.tipo}</Badge>
                <div className="text-right shrink-0">
                  <p className="text-xs font-medium">{post.impressoes.toLocaleString("pt-BR")}</p>
                  <p className="text-[10px] text-green-400">{post.engajamento}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
