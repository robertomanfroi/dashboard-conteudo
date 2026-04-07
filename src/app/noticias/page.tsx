import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

const topics = ["Ferramentas", "Pesquisa", "Negócios", "Tendências"];

export default function NoticiasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-primary" />
          Consolidador de Notícias
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Feeds RSS filtrados por tópico do seu nicho.</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {topics.map((t) => (
          <Badge key={t} variant="outline" className="cursor-pointer hover:bg-primary/10">{t}</Badge>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Últimas Notícias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center text-muted-foreground text-sm">
            Cards de notícias serão implementados na Story 1.6
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
