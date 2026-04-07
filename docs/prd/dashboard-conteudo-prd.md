# PRD — Dashboard de Conteúdo

**Versão:** 1.0
**Data:** 2026-04-07
**Referência:** https://castilhoia.com/blog/como-criar-dashboard-de-conteudo-com-claude-code

---

## Visão Geral

Dashboard de gestão de conteúdo para visualizar em um único lugar: posts agendados, métricas, calendário, concorrentes e notícias do nicho.

---

## Stack Técnica

| Tecnologia | Papel |
|-----------|-------|
| Next.js (App Router) | Framework base |
| TypeScript | Tipagem |
| Tailwind CSS | Estilos |
| shadcn/ui | Componentes prontos |
| Tema escuro | Visual global |

---

## Módulos

| # | Módulo | Descrição |
|---|--------|-----------|
| 1 | Estrutura Inicial | Base, navegação lateral, páginas placeholder, CLAUDE.md |
| 2 | Gestor de Instagram | Posts agendados, rascunhos, publicados, backlog de ideias |
| 3 | Analytics | KPIs, gráficos, seletor de datas, melhores posts |
| 4 | Calendário de Conteúdo | Visualização mensal com chips coloridos por plataforma |
| 5 | Rastreador de Concorrentes | Tabela ordenável com engajamento e tendências |
| 6 | Consolidador de Notícias | Feeds RSS filtrados por tópico |

---

## Requisitos Não Funcionais

- Visual: dark mode premium, aparência SaaS de alto nível
- UI consistente: espaçamentos, fontes, bordas, sombras padronizados
- Dados fictícios realistas para apresentação
- CLAUDE.md como memória do projeto entre sessões

---

## Checklist de Execução

- [ ] Enviar um prompt por etapa — nunca todos de uma vez
- [ ] Validar resultado visualmente antes de avançar
- [ ] Pedir refinamentos após cada etapa
- [ ] Usar CLAUDE.md como memória e consistência
- [ ] Adicionar dados fictícios realistas
- [ ] Rodar prompt de consistência global ao final
