# CLAUDE.md — Dashboard de Conteúdo

Arquivo de memória do projeto para Claude Code. Leia antes de qualquer sessão.

---

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| Next.js | 15+ | Framework (App Router) |
| TypeScript | 5+ | Tipagem |
| Tailwind CSS | 3+ | Estilos |
| shadcn/ui | latest | Componentes de UI |
| Tema | Dark | Global em toda a aplicação |

---

## Estrutura de Pastas

```
dashboard-conteudo/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Layout raiz com sidebar
│   │   ├── page.tsx            ← Home (redirect para /instagram)
│   │   ├── instagram/          ← Gestor de Instagram
│   │   ├── analytics/          ← Dashboard de Analytics
│   │   ├── calendario/         ← Calendário de Conteúdo
│   │   ├── concorrentes/       ← Rastreador de Concorrentes
│   │   └── noticias/           ← Consolidador de Notícias
│   ├── components/
│   │   ├── ui/                 ← Componentes shadcn/ui
│   │   ├── layout/             ← Sidebar, Header, Shell
│   │   ├── instagram/          ← PostCard, PostForm
│   │   ├── analytics/          ← KPICard, Charts
│   │   ├── calendario/         ← CalendarGrid, ContentChip
│   │   ├── concorrentes/       ← CompetitorTable, TrendBadge
│   │   └── noticias/           ← NewsCard, TopicFilter
│   └── lib/
│       ├── utils.ts            ← cn() e helpers
│       └── mock-data/          ← Dados fictícios por módulo
├── docs/
│   ├── prd/                    ← PRD do projeto
│   └── stories/                ← Stories por etapa (1.1 a 1.7)
└── CLAUDE.md                   ← Este arquivo
```

---

## Padrões de Componentes

- **Imports absolutos:** sempre usar `@/components/...`, `@/lib/...`
- **shadcn/ui:** instalar via `npx shadcn@latest add [componente]`
- **Tema escuro:** classe `dark` no `<html>` do `layout.tsx`
- **Cores:** usar variáveis CSS do shadcn (--background, --foreground, --card, etc.)
- **Espaçamento:** padrão Tailwind — gap-4, p-6, space-y-4
- **Tipografia:** text-sm para corpo, text-base para labels, text-xl+ para títulos

---

## Módulos e Rotas

| Rota | Módulo | Story |
|------|--------|-------|
| `/` | Home (redirect) | — |
| `/instagram` | Gestor de Instagram | 1.2 |
| `/analytics` | Dashboard de Analytics | 1.3 |
| `/calendario` | Calendário de Conteúdo | 1.4 |
| `/concorrentes` | Rastreador de Concorrentes | 1.5 |
| `/noticias` | Consolidador de Notícias | 1.6 |

---

## Decisões Importantes

1. **App Router** — usar `app/` directory (não `pages/`)
2. **Dark mode** — forçado globalmente via `class="dark"` no html, não via sistema operacional
3. **Dados fictícios** — criados em `lib/mock-data/` para cada módulo
4. **shadcn/ui** — executar `npx shadcn@latest init` antes de adicionar componentes
5. **Stories** — cada etapa tem sua story em `docs/stories/`. Consultar antes de implementar.

---

## Como Executar

```bash
npm run dev    # Desenvolvimento (http://localhost:3000)
npm run build  # Build de produção
npm run lint   # Verificar lint
```

---

## Referência

Baseado em: https://castilhoia.com/blog/como-criar-dashboard-de-conteudo-com-claude-code
