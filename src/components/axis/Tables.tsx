import { SectionHeader } from "./SectionHeader";

const TABLES = [
  ["Mesa Frequencial", "FRQ", "432 Hz"],
  ["Mesa Resonance", "RSN", "Φ-7"],
  ["Mesa Harmônica", "HRM", "5:8"],
  ["Mesa Quântica", "QNT", "∞"],
  ["Mesa AXIS DNA", "DNA", "12-S"],
  ["Mesa Temporal", "TMP", "T-0"],
  ["Mesa Vibracional", "VBR", "888 Hz"],
  ["Mesa Geométrica", "GEO", "ϕ"],
  ["Mesa Multidimensional", "MDM", "11D"],
  ["Mesa de Limpeza Energética", "CLN", "EM-0"],
  ["Mesa de Reprogramação", "RPG", "NEO"],
  ["Mesa de Coerência", "CHR", "0.97"],
  ["Mesa de Expansão", "EXP", "Δ+9"],
  ["Mesa de Campo", "FLD", "Ω-3"],
  ["Mesa Akáshica", "AKS", "∇"],
  ["Mesa Neural Vibracional", "NRV", "θ-8"],
];

function MiniWave({ seed }: { seed: number }) {
  const pts = Array.from({ length: 24 }).map((_, i) => {
    const x = (i / 23) * 100;
    const y =
      20 +
      Math.sin(i * 0.6 + seed) * 8 +
      Math.cos(i * 0.3 + seed * 1.3) * 6;
    return `${x},${y}`;
  });
  return (
    <svg viewBox="0 0 100 40" className="h-8 w-full">
      <polyline
        fill="none"
        stroke="oklch(0.88 0.18 195)"
        strokeWidth="0.8"
        points={pts.join(" ")}
        style={{ filter: "drop-shadow(0 0 3px oklch(0.85 0.18 195))" }}
      />
    </svg>
  );
}

export function Tables() {
  return (
    <section id="tables" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="03 / Modular Engine"
        title="Mesas Multidimensionais"
        subtitle="Sistema modular com ativação dinâmica. Cada mesa carrega identidade energética própria e leitura operacional independente."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TABLES.map((t, i) => {
          const [name, code, val] = t;
          const active = i % 3 === 0;
          return (
            <div
              key={name}
              className="glass group relative overflow-hidden rounded-lg p-5 transition hover:border-accent/50 hover:shadow-[0_0_30px_oklch(0.85_0.18_195/0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="flex items-start justify-between">
                <div className="font-display text-xs tracking-[0.3em] text-accent/80">{code}</div>
                <div
                  className={`font-tech flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[8px] uppercase tracking-[0.2em] ${
                    active
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border bg-muted/30 text-muted-foreground"
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full ${active ? "bg-accent animate-pulse" : "bg-muted-foreground"}`}
                  />
                  {active ? "Active" : "Standby"}
                </div>
              </div>
              <div className="font-display mt-4 text-sm leading-tight text-foreground">{name}</div>
              <div className="mt-4">
                <MiniWave seed={i * 0.7} />
              </div>
              <div className="font-tech mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em]">
                <span className="text-muted-foreground">Carrier</span>
                <span className="text-foreground">{val}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
