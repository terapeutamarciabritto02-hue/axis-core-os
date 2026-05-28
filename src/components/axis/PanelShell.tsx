import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Particles } from "./Particles";

export function PanelShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles count={20} />
      <div className="pointer-events-none absolute inset-0 grid-holo opacity-20" />
      <Nav />
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-24">
        <div className="font-tech flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <Link to="/" className="text-accent hover:underline">AXIS Core</Link>
          <span>/</span>
          <span className="text-accent">{eyebrow}</span>
        </div>
        <h1 className="font-display mt-4 text-4xl tracking-[0.06em] text-foreground sm:text-5xl text-glow">
          {title}
        </h1>
        <p className="font-grotesk mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
        <div className="mt-10">{children}</div>
      </main>
    </div>
  );
}

export function Panel({
  title,
  children,
  badge,
  className = "",
}: {
  title: string;
  children: ReactNode;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`glass relative overflow-hidden rounded-xl p-6 ${className}`}>
      <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
        <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {title}
        </div>
        {badge && (
          <div className="font-tech flex items-center gap-1.5 rounded border border-accent/30 bg-accent/5 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {badge}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
