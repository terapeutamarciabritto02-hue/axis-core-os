import { SacredCore } from "./SacredCore";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-holo opacity-30" />
      <SacredCore />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="font-tech mb-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-background/40 px-4 py-1.5 text-[10px] uppercase text-accent backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Core Online · Multidimensional Field Active
        </div>

        <h1 className="font-display text-[14vw] leading-[0.85] tracking-[0.04em] sm:text-[10rem]">
          <span className="text-gradient text-glow">AXIS</span>
          <sup className="ml-2 text-2xl text-accent/70">™</sup>
          <div className="font-tech mt-2 text-2xl uppercase tracking-[0.6em] text-foreground/70 sm:text-3xl">
            C O R E
          </div>
        </h1>

        <p className="font-grotesk mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Núcleo operacional quântico multidimensional. Inteligência vibracional viva,
          sincronizada em tempo real através de um ecossistema holográfico de consciência.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button className="group relative overflow-hidden rounded-md border border-accent/40 bg-accent/10 px-8 py-3.5 font-tech text-xs uppercase tracking-[0.3em] text-accent backdrop-blur transition hover:bg-accent/20 hover:shadow-[0_0_40px_oklch(0.85_0.18_195/0.5)]">
            <span className="relative z-10">Abrir Console</span>
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </button>
          <button className="group relative overflow-hidden rounded-md border border-electric/50 bg-gradient-to-br from-electric/20 to-accent/10 px-8 py-3.5 font-tech text-xs uppercase tracking-[0.3em] text-foreground shadow-[0_0_30px_oklch(0.75_0.18_220/0.3)] transition hover:shadow-[0_0_50px_oklch(0.75_0.18_220/0.6)]">
            <span className="relative z-10">⟁ Ativar Sistema</span>
          </button>
          <button className="rounded-md border border-border bg-card/30 px-8 py-3.5 font-tech text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur transition hover:border-accent/40 hover:text-foreground">
            Solicitar Acesso
          </button>
        </div>

        {/* Bottom HUD */}
        <div className="font-tech mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 text-[10px] uppercase sm:grid-cols-4">
          {[
            ["Frequência", "432.00 Hz"],
            ["Coerência", "98.7%"],
            ["Ressonância", "Φ-7"],
            ["Campo", "Estável"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background/70 px-4 py-3 backdrop-blur">
              <div className="text-[9px] tracking-[0.3em] text-muted-foreground">{k}</div>
              <div className="mt-1 text-sm tracking-[0.2em] text-accent">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
