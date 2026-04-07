import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Eye, Heart } from "lucide-react";

const kpis = [
  { label: "Impressões", value: "—", icon: Eye },
  { label: "Engajamento", value: "—", icon: Heart },
  { label: "Seguidores", value: "—", icon: TrendingUp },
  { label: "Posts", value: "—", icon: BarChart3 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          Analytics
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Métricas de performance e crescimento do conteúdo.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-normal flex items-center gap-1">
                <Icon className="w-3 h-3" /> {label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Gráfico de Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center text-muted-foreground text-sm">
            Gráficos serão adicionados na Story 1.3
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
