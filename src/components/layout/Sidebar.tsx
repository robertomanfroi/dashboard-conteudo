"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Camera,
  BarChart3,
  Calendar,
  Users,
  Newspaper,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/",            label: "Dashboard",   icon: LayoutDashboard, badge: null },
  { href: "/instagram",   label: "Instagram",   icon: Camera,          badge: "3" },
  { href: "/analytics",   label: "Analytics",   icon: BarChart3,       badge: null },
  { href: "/calendario",  label: "Calendário",  icon: Calendar,        badge: "8" },
  { href: "/concorrentes",label: "Concorrentes",icon: Users,           badge: null },
  { href: "/noticias",    label: "Notícias",    icon: Newspaper,       badge: "3" },
];

function NavLogo({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border/60">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
        <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
      </div>
      <div>
        <span className="font-semibold text-sm tracking-tight block leading-none">Content Hub</span>
        <span className="text-[10px] text-muted-foreground">Dashboard</span>
      </div>
      {onClose && (
        <button
          className="ml-auto p-2 rounded hover:bg-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex-1 px-3 py-3 space-y-0.5" aria-label="Menu principal">
      <p className="text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest px-2 pb-1.5 pt-1">Menu</p>
      {navItems.map(({ href, label, icon: Icon, badge }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg text-sm transition-all duration-150 cursor-pointer min-h-[44px]",
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
  );
}

function NavFooter() {
  return (
    <div className="px-5 py-3 border-t border-border/60">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">R</div>
        <div>
          <p className="text-xs font-medium leading-none">Roberto</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Content Hub v2.0</p>
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Botão hamburguer mobile */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-card border border-border shadow-sm hover:bg-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        onClick={() => setMobileOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-sidebar"
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar mobile (drawer) */}
      <aside
        id="mobile-sidebar"
        className={cn(
          "md:hidden fixed left-0 top-0 z-50 h-full w-64 flex flex-col border-r border-border/60 bg-card/95 backdrop-blur transition-transform duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Navegação lateral"
      >
        <NavLogo onClose={() => setMobileOpen(false)} />
        <NavLinks pathname={pathname} onNavigate={() => setMobileOpen(false)} />
        <NavFooter />
      </aside>

      {/* Sidebar desktop (sempre visível) */}
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border/60 bg-card/80 backdrop-blur h-screen sticky top-0">
        <NavLogo />
        <NavLinks pathname={pathname} />
        <NavFooter />
      </aside>
    </>
  );
}
