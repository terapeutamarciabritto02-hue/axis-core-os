import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

function GlobalMap() {
  const nodes = [
    [20, 35], [35, 28], [50, 40], [62, 32], [75, 45],
    [28, 58], [48, 65], [68, 60], [82, 55], [42, 75],
  ];
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full">
      <defs>
        <radialGradient id="globGrad">
          <stop offset="0%" stopColor="oklch(0.85 0.18 195 / 0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="50" cy="40" rx={48 - i * 5} ry={36 - i * 4} fill="none" stroke="oklch(0.85 0.18 195 / 0.1)" strokeWidth="0.15" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI;
        return (
          <line key={i} x1={50 - Math.cos(a) * 48} y1={40 - Math.sin(a) * 36} x2={50 + Math.cos(a) * 48} y2={40 + Math.sin(a) * 36} stroke="oklch(0.85 0.18 195 / 0.08)" strokeWidth="0.15" />
        );
      })}

      {/* Connections */}
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map(([bx, by], j) => {
          if ((i + j) % 3 !== 0) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={a[0]}
              y1={a[1]}
              x2={bx}
              y2={by}
              stroke="oklch(0.88 0.18 195 / 0.35)"
              strokeWidth="0.2"
              strokeDasharray="0.6 0.4"
            />
          );
        }),
      )}

      {/* Nodes */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="2.5" fill="url(#globGrad)" className="animate-pulse-core" style={{ animationDelay: `${i * 0.2}s`, transformOrigin: `${x}px ${y}px` }} />
          <circle cx={x} cy={y} r="0.6" fill="oklch(0.95 0.1 195)" />
        </g>
      ))}
    </svg>
  );
}

function MultiSignal() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 0.1), 70);
    return () => clearInterval(id);
  }, []);
  const lines = [
    { color: "oklch(0.88 0.18 195)", f: 0.4, a: 14 },
    { color: "oklch(0.75 0.18 220)", f: 0.25, a: 10 },
    { color: "oklch(0.84 0.14 90)", f: 0.6, a: 8 },
  ];
  return (
    <svg viewBox="0 0 600 200" className="h-48 w-full">
      {lines.map((line, idx) => {
        const pts = Array.from({ length: 80 }).map((_, i) => {
          const x = (i / 79) * 600;
          const y = 100 + Math.sin(i * line.f + t + idx) * line.a + Math.cos(i * 0.1 + t * 0.6) * 5;
          return `${x},${y}`;
        });
        return (
          <polyline
            key={idx}
            fill="none"
            stroke={line.color}
            strokeWidth="1.2"
            points={pts.join(" ")}
            style={{ filter: `drop-shadow(0 0 4px ${line.color})`, opacity: 0.8 }}
          />
        );
      })}
    </svg>
  );
}

export function Telemetry() {
  return (
    <section id="telemetry" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="07 / Telemetric Network"
        title="Quantum Telemetry™"
        subtitle="Monitoramento multidimensional contínuo. Rede orbital quântica de sinais vibracionais e fluxos energéticos em tempo real."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-3">
          <div className="font-tech mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
            <span className="text-muted-foreground">Multidimensional Signal Map</span>
            <span className="text-accent animate-flicker">▸ Live · 12 nodes</span>
          </div>
          <div className="aspect-[5/3]">
            <GlobalMap />
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2">
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Quantum Field · Streams
          </div>
          <MultiSignal />
          <div className="font-tech mt-2 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-1.5"><span className="h-1 w-3 bg-accent" /> Cyan 432</div>
            <div className="flex items-center gap-1.5"><span className="h-1 w-3 bg-electric" /> Blue 528</div>
            <div className="flex items-center gap-1.5"><span className="h-1 w-3 bg-gold-energy" /> Gold 888</div>
          </div>
          <div className="mt-6 space-y-2">
            {[
              ["telemetry online", "OK"],
              ["multidimensional signal", "ACTIVE"],
              ["quantum field", "SYNCED"],
              ["resonance network", "STABLE"],
              ["live energetic monitor", "▸ RUN"],
            ].map(([l, v]) => (
              <div key={l} className="font-tech flex justify-between border-b border-border/30 pb-1 text-[10px] uppercase tracking-[0.2em]">
                <span className="text-muted-foreground">{l}</span>
                <span className="text-accent">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
