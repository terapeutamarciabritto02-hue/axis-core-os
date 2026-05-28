import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

function FrequencyChart() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => p + 0.08), 60);
    return () => clearInterval(id);
  }, []);

  const pts = Array.from({ length: 64 }).map((_, i) => {
    const x = (i / 63) * 600;
    const y =
      80 +
      Math.sin(i * 0.25 + phase) * 22 +
      Math.sin(i * 0.6 + phase * 1.4) * 10 +
      Math.cos(i * 0.12 + phase * 0.7) * 14;
    return `${x},${y}`;
  });

  return (
    <svg viewBox="0 0 600 160" className="h-40 w-full">
      <defs>
        <linearGradient id="freqFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.18 195)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.88 0.18 195)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          x2="600"
          y1={i * 40}
          y2={i * 40}
          stroke="oklch(0.85 0.15 200 / 0.08)"
        />
      ))}
      <polyline
        fill="url(#freqFill)"
        stroke="none"
        points={`0,160 ${pts.join(" ")} 600,160`}
      />
      <polyline
        fill="none"
        stroke="oklch(0.88 0.18 195)"
        strokeWidth="1.5"
        points={pts.join(" ")}
        style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 195))" }}
      />
    </svg>
  );
}

function StatRing({ label, value, pct }: { label: string; value: string; pct: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.85 0.15 200 / 0.1)" strokeWidth="4" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="oklch(0.88 0.18 195)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * pct) / 100}
            style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 195))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-sm text-accent">
          {pct}%
        </div>
      </div>
      <div>
        <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="font-display text-xl text-foreground">{value}</div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const indicators = [
    { l: "Online", c: "bg-accent" },
    { l: "Estável", c: "bg-electric" },
    { l: "Sincronizado", c: "bg-gold-energy" },
    { l: "Campo Ativo", c: "bg-accent" },
  ];

  return (
    <section id="dashboard" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="02 / Operational Layer"
        title="Dashboard Operacional"
        subtitle="Estado vivo do núcleo. Leitura energética contínua de protocolos ativos."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Big freq panel */}
        <div className="glass scanline relative overflow-hidden rounded-xl p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Frequência Vibracional · Live
              </div>
              <div className="font-display mt-1 text-2xl text-accent text-glow">432.00 Hz</div>
            </div>
            <div className="flex gap-2">
              {indicators.map((i) => (
                <div
                  key={i.l}
                  className="font-tech flex items-center gap-1.5 rounded border border-border bg-background/40 px-2 py-1 text-[9px] uppercase tracking-[0.2em]"
                >
                  <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${i.c}`} />
                  {i.l}
                </div>
              ))}
            </div>
          </div>
          <FrequencyChart />
          <div className="font-tech mt-4 grid grid-cols-4 gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div>Δ +0.08 Hz</div>
            <div>PHASE Φ-7</div>
            <div>HARMONIC 5:8</div>
            <div className="text-accent">CONVERGENT</div>
          </div>
        </div>

        {/* Rings */}
        <div className="glass space-y-6 rounded-xl p-6">
          <StatRing label="Coerência" value="98.7" pct={98} />
          <StatRing label="Ressonância" value="Φ-7" pct={87} />
          <StatRing label="Estabilidade" value="9.4σ" pct={94} />
        </div>
      </div>

      {/* Protocols */}
      <div className="glass mt-6 overflow-hidden rounded-xl">
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-3">
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Protocolos Ativos · 6
          </div>
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-accent">
            ▸ Live
          </div>
        </div>
        <div className="divide-y divide-border/40">
          {[
            ["AXP-001", "Coerência Cardíaca", "running", 87],
            ["AXP-014", "Limpeza Vibracional", "harmonizing", 64],
            ["AXP-022", "Sincronização Akáshica", "scanning", 41],
            ["AXP-031", "Realinhamento Neural", "running", 92],
            ["AXP-047", "Expansão de Campo", "synchronizing", 58],
            ["AXP-052", "Ressonância Quântica", "running", 76],
          ].map(([id, name, status, pct]) => (
            <div key={id as string} className="grid grid-cols-12 items-center gap-4 px-6 py-3 font-tech text-xs uppercase tracking-[0.15em]">
              <div className="col-span-2 text-muted-foreground">{id}</div>
              <div className="col-span-4 text-foreground">{name}</div>
              <div className="col-span-2 text-accent">{status}</div>
              <div className="col-span-3 relative h-1.5 overflow-hidden rounded-full bg-border/40">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric to-accent"
                  style={{ width: `${pct}%`, boxShadow: "0 0 10px oklch(0.85 0.18 195)" }}
                />
              </div>
              <div className="col-span-1 text-right text-accent">{pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
