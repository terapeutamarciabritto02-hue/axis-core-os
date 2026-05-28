import { createFileRoute, Link } from "@tanstack/react-router";
import { Particles } from "@/components/axis/Particles";
import { SacredCore } from "@/components/axis/SacredCore";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Acesso ao Núcleo" },
      { name: "description", content: "Acesso restrito ao núcleo operacional AXIS™ CORE." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Particles count={28} />
      <div className="pointer-events-none absolute inset-0 grid-holo opacity-30" />

      <div className="relative z-10 grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <div className="aspect-square">
            <SacredCore />
          </div>
        </div>

        <div className="glass-strong relative overflow-hidden rounded-2xl p-10">
          <div className="font-tech text-[10px] uppercase tracking-[0.4em] text-accent">
            ▸ Autenticação Quântica
          </div>
          <h1 className="font-display mt-3 text-3xl tracking-[0.06em] text-foreground">
            AXIS<sup className="text-xs text-accent">™</sup> CORE
          </h1>
          <p className="font-grotesk mt-2 text-sm text-muted-foreground">
            Identificação biométrica vibracional necessária para acessar o núcleo.
          </p>

          <div className="mt-8 space-y-3">
            <button className="font-tech group flex w-full items-center justify-center gap-3 rounded-lg border border-accent/40 bg-gradient-to-r from-electric/20 to-accent/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-foreground transition hover:from-electric/30 hover:to-accent/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="#4285F4" d="M21.6 12.2c0-.6 0-1.3-.2-1.9H12v3.6h5.4c-.2 1.2-.9 2.2-2 2.9v2.4h3.2c1.9-1.7 3-4.3 3-7z" />
                <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.4c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.5C4.8 19.9 8.2 22 12 22z" />
                <path fill="#FBBC05" d="M6.4 14.1c-.2-.6-.3-1.3-.3-2.1s.1-1.5.3-2.1V7.4H3.1C2.4 8.8 2 10.4 2 12s.4 3.2 1.1 4.6l3.3-2.5z" />
                <path fill="#EA4335" d="M12 5.8c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 2.8 14.7 2 12 2 8.2 2 4.8 4.1 3.1 7.4l3.3 2.5C7.2 7.5 9.4 5.8 12 5.8z" />
              </svg>
              Continuar com Google
            </button>

            <div className="font-tech flex items-center gap-3 py-2 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px flex-1 bg-border/50" />
              ou via console
              <span className="h-px flex-1 bg-border/50" />
            </div>

            <input
              placeholder="operator@axis.core"
              className="font-grotesk w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus:border-accent/60"
            />
            <input
              type="password"
              placeholder="••••••••••••"
              className="font-grotesk w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus:border-accent/60"
            />

            <button className="font-tech w-full rounded-lg border border-electric/40 bg-electric/20 px-4 py-3 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-electric/30">
              Acessar Núcleo →
            </button>
          </div>

          <div className="font-tech mt-8 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>BUILD Φ-432</span>
            <Link to="/" className="text-accent hover:underline">
              ← retornar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
