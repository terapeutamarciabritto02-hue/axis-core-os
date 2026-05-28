import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

function Knob({ label, value }: { label: string; value: number }) {
  const angle = -135 + (value / 100) * 270;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border border-accent/30 bg-gradient-to-br from-background to-secondary/40 shadow-[inset_0_0_30px_oklch(0.85_0.18_195/0.15)]" />
        <div
          className="absolute inset-2 rounded-full border border-accent/20"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="absolute left-1/2 top-1 h-3 w-0.5 -translate-x-1/2 bg-accent shadow-[0_0_8px_oklch(0.85_0.18_195)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center font-display text-xs text-accent">
          {value}
        </div>
      </div>
      <div className="font-tech mt-2 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function RadionicDial() {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full">
      <defs>
        <radialGradient id="dialGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.88 0.18 195 / 0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="100" fill="url(#dialGrad)" />
      <g className="animate-spin-slow" style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="95" fill="none" stroke="oklch(0.88 0.18 195 / 0.6)" strokeWidth="0.6" />
        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i / 60) * Math.PI * 2;
          const x1 = 110 + Math.cos(a) * 88;
          const y1 = 110 + Math.sin(a) * 88;
          const x2 = 110 + Math.cos(a) * (i % 5 === 0 ? 78 : 84);
          const y2 = 110 + Math.sin(a) * (i % 5 === 0 ? 78 : 84);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.88 0.18 195)" strokeWidth="0.6" opacity={i % 5 === 0 ? 0.9 : 0.4} />;
        })}
      </g>
      <g className="animate-spin-rev" style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="60" fill="none" stroke="oklch(0.84 0.14 90 / 0.5)" strokeDasharray="3 4" />
        <polygon points="110,60 150,130 70,130" fill="none" stroke="oklch(0.84 0.14 90)" strokeWidth="0.8" opacity="0.7" />
        <polygon points="110,160 70,90 150,90" fill="none" stroke="oklch(0.88 0.18 195)" strokeWidth="0.8" opacity="0.7" />
      </g>
      <circle cx="110" cy="110" r="6" fill="oklch(0.95 0.1 195)" />
      <circle cx="110" cy="110" r="14" fill="none" stroke="oklch(0.88 0.18 195)" strokeWidth="0.5" opacity="0.7" className="animate-pulse-core" />
    </svg>
  );
}

export function Radionic() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="radionic" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="05 / Emission Engine"
        title="Radiance Radionic Engine™"
        subtitle="Console radiônico de emissão frequencial. Modulação vibracional, transmissão energética e harmonização multidimensional."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Dial */}
        <div className="glass relative overflow-hidden rounded-2xl p-6">
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-accent">
            Radionic Dial · Σ-441
          </div>
          <div className="mt-4 aspect-square">
            <RadionicDial />
          </div>
          <div className="font-tech mt-4 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.2em]">
            <div className="rounded border border-border bg-background/40 px-3 py-2">
              <div className="text-muted-foreground">Carrier</div>
              <div className="text-accent">{(441 + Math.sin(tick / 10) * 0.6).toFixed(2)} Hz</div>
            </div>
            <div className="rounded border border-border bg-background/40 px-3 py-2">
              <div className="text-muted-foreground">Phase</div>
              <div className="text-accent">{(120 + Math.sin(tick / 8) * 6).toFixed(1)}°</div>
            </div>
          </div>
        </div>

        {/* Console */}
        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Emission Console
              </div>
              <div className="font-display mt-1 text-xl text-accent">
                ▸ {["transmitting", "harmonizing", "calibrating", "quantum emission"][Math.floor(tick / 20) % 4]}
              </div>
            </div>
            <button className="font-tech rounded border border-accent/40 bg-accent/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent">
              ⏵ Emit
            </button>
          </div>

          {/* Knobs */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            <Knob label="Amplitude" value={72} />
            <Knob label="Modulação" value={48} />
            <Knob label="Resonância" value={91} />
            <Knob label="Coerência" value={87} />
          </div>

          {/* Sliders */}
          <div className="mt-8 space-y-4">
            {[
              ["Frequência base", 64],
              ["Modulação harmônica", 42],
              ["Profundidade quântica", 78],
              ["Emissão vibracional", 89],
            ].map(([l, v]) => (
              <div key={l as string}>
                <div className="font-tech mb-1 flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{l}</span>
                  <span className="text-accent">{v}%</span>
                </div>
                <div className="relative h-1 rounded-full bg-border/40">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-electric to-accent"
                    style={{ width: `${v}%`, boxShadow: "0 0 10px oklch(0.85 0.18 195)" }}
                  />
                  <div
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-accent bg-background shadow-[0_0_10px_oklch(0.85_0.18_195)]"
                    style={{ left: `calc(${v}% - 6px)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
