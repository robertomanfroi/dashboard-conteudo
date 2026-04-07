"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Camera,
  BarChart3,
  Calendar,
  Users,
  Newspaper,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/",            label: "Dashboard",           icon: LayoutDashboard, badge: null },
  { href: "/instagram",   label: "Instagram",            icon: Camera,       badge: "3" },
  { href: "/analytics",   label: "Analytics",            icon: BarChart3,       badge: null },
  { href: "/calendario",  label: "Calendário",           icon: Calendar,        badge: "8" },
  { href: "/concorrentes",label: "Concorrentes",         icon: Users,           badge: null },
  { href: "/noticias",    label: "Notícias",             icon: Newspaper,       badge: "3" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 flex flex-col border-r border-border/60 bg-card/80 backdrop-blur h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border/60">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
          <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
        </div>
        <div>
          <span className="font-semibold text-sm tracking-tight block leading-none">Content Hub</span>
          <span className="text-[10px] text-muted-foreground">Dashboard</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        <p className="text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest px-2 pb-1.5 pt-1">Menu</p>
        {navItems.map(({ href, label, icon: Icon, badge }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-all duration-150",
                active
                  ? "bg-primary/15 text-primary font-medium shadow-sm"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              <Icon className={cn("w-4 h-4 shrink-0", active ? "text-primary" : "")} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-medium">
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-border/60">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">R</div>
          <div>
            <p className="text-xs font-medium leading-none">Roberto</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Content Hub v1.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
