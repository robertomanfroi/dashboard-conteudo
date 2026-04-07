import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, BarChart3, Calendar, Users, Newspaper } from "lucide-react";
import Link from "next/link";

const modules = [
  { href: "/instagram", label: "Gestor de Instagram", icon: Camera, description: "Posts agendados, rascunhos e backlog de ideias", status: "Story 1.2" },
  { href: "/analytics", label: "Analytics", icon: BarChart3, description: "Métricas de performance e crescimento", status: "Story 1.3" },
  { href: "/calendario", label: "Calendário de Conteúdo", icon: Calendar, description: "Visualização mensal de posts por plataforma", status: "Story 1.4" },
  { href: "/concorrentes", label: "Rastreador de Concorrentes", icon: Users, description: "Monitoramento de engajamento e tendências", status: "Story 1.5" },
  { href: "/noticias", label: "Consolidador de Notícias", icon: Newspaper, description: "Feeds RSS filtrados por tópico", status: "Story 1.6" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard de Conteúdo</h1>
        <p className="text-muted-foreground text-sm mt-1">Gerencie todo o seu conteúdo em um só lugar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {modules.map(({ href, label, icon: Icon, description, status }) => (
          <Link key={href} href={href}>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{status}</Badge>
                </div>
                <CardTitle className="text-base mt-3">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
