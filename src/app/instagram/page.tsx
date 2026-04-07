import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";

export default function InstagramPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Instagram className="w-6 h-6 text-primary" />
          Gestor de Instagram
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Posts agendados, rascunhos, publicados e backlog de ideias.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {["Agendados", "Rascunhos", "Publicados", "Backlog"].map((status) => (
          <Card key={status}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                {status}
                <Badge variant="outline" className="text-xs">0</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground text-center py-8">Nenhum post ainda</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
