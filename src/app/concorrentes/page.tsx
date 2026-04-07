import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function ConcorrentesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Rastreador de Concorrentes
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Monitoramento de engajamento e tendências da concorrência.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Concorrentes Monitorados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center text-muted-foreground text-sm">
            Tabela de concorrentes será implementada na Story 1.5
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
