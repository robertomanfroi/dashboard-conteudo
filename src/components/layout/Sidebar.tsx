"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  BarChart3,
  Calendar,
  Users,
  Newspaper,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/instagram", label: "Gestor de Instagram", icon: Instagram },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/calendario", label: "Calendário", icon: Calendar },
  { href: "/concorrentes", label: "Concorrentes", icon: Users },
  { href: "/noticias", label: "Notícias", icon: Newspaper },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 flex flex-col border-r border-border bg-card h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
          <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-semibold text-sm tracking-tight">Content Hub</span>
      </div>

      <Separator />

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* Footer */}
      <div className="px-6 py-4">
        <p className="text-xs text-muted-foreground">Content Hub v1.0</p>
      </div>
    </aside>
  );
}
