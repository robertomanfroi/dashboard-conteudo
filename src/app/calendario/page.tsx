import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function CalendarioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          Calendário de Conteúdo
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Visualização mensal de posts por plataforma.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Abril 2026</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
            Calendário mensal será implementado na Story 1.4
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
