import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Core" },
  { to: "/therapist", label: "Terapeuta" },
  { to: "/client", label: "Cliente" },
  { to: "/reports", label: "Relatórios" },
  { to: "/library", label: "Biblioteca" },
];

export function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-sm border border-accent/60 bg-accent/10" />
            <div className="absolute inset-1 rounded-sm border border-accent/40" />
            <div className="absolute inset-2 rounded-sm bg-accent shadow-[0_0_10px_oklch(0.85_0.18_195)]" />
          </div>
          <div>
            <div className="font-display text-sm tracking-[0.3em] text-foreground">AXIS<sup className="text-[8px] text-accent">™</sup></div>
            <div className="font-tech -mt-0.5 text-[8px] uppercase tracking-[0.4em] text-muted-foreground">Core OS</div>
          </div>
        </Link>

        <nav className="font-tech hidden gap-5 text-[10px] uppercase tracking-[0.3em] md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={active ? "text-accent" : "text-muted-foreground hover:text-accent"}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="font-tech hidden items-center gap-2 rounded border border-accent/30 bg-accent/5 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-accent sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Core Online
          </div>
          <Link to="/login" className="font-tech rounded border border-electric/40 bg-electric/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-foreground hover:bg-electric/20">
            Acessar
          </Link>
        </div>
      </div>
    </header>
  );
}
