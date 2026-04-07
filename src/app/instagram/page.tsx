"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Plus, Calendar, Heart } from "lucide-react";
import { mockPosts, type Post, type PostStatus, type PostType } from "@/lib/mock-data/instagram";

const STATUS_CONFIG: Record<PostStatus, { label: string; color: string }> = {
  agendado:  { label: "Agendados",  color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  rascunho:  { label: "Rascunhos",  color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  publicado: { label: "Publicados", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  backlog:   { label: "Backlog",    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
};

const TIPO_COLOR: Record<PostType, string> = {
  Reel:      "bg-purple-500/15 text-purple-300",
  Carrossel: "bg-pink-500/15 text-pink-300",
  Story:     "bg-orange-500/15 text-orange-300",
  Feed:      "bg-cyan-500/15 text-cyan-300",
};

function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-3 space-y-2 hover:border-primary/30 transition-colors">
      <p className="text-xs text-foreground leading-snug line-clamp-2">{post.legenda}</p>
      <div className="flex items-center justify-between">
        <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${TIPO_COLOR[post.tipo]}`}>
          {post.tipo}
        </Badge>
        <div className="flex items-center gap-2 text-muted-foreground">
          {post.data && (
            <span className="flex items-center gap-1 text-[10px]">
              <Calendar className="w-3 h-3" /> {post.data}
            </span>
          )}
          {post.engajamento && (
            <span className="flex items-center gap-1 text-[10px] text-green-400">
              <Heart className="w-3 h-3" /> {post.engajamento}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InstagramPage() {
  const [posts] = useState<Post[]>(mockPosts);
  const [filtro, setFiltro] = useState<PostType | "todos">("todos");

  const statuses: PostStatus[] = ["agendado", "rascunho", "publicado", "backlog"];

  const filtered = filtro === "todos" ? posts : posts.filter((p) => p.tipo === filtro);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Camera className="w-6 h-6 text-primary" /> Gestor de Instagram
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {posts.length} posts · {posts.filter((p) => p.status === "agendado").length} agendados
          </p>
        </div>
        <Button size="sm" className="gap-1.5">
          <Plus className="w-4 h-4" /> Novo Post
        </Button>
      </div>

      {/* Filtros por tipo */}
      <div className="flex gap-2 flex-wrap">
        {(["todos", "Reel", "Carrossel", "Story", "Feed"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFiltro(t)}
            aria-pressed={filtro === t}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border cursor-pointer min-h-[44px] ${
              filtro === t
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            {t === "todos" ? "Todos" : t}
          </button>
        ))}
      </div>

      {/* Colunas Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {statuses.map((status) => {
          const col = filtered.filter((p) => p.status === status);
          const cfg = STATUS_CONFIG[status];
          return (
            <Card key={status} className="flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded-md text-xs border ${cfg.color}`}>
                    {cfg.label}
                  </span>
                  <span className="text-muted-foreground text-xs">{col.length}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                {col.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-6">Nenhum post</p>
                ) : (
                  col.map((post) => <PostCard key={post.id} post={post} />)
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
