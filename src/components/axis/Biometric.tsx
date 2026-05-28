import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

function HeartWave() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 60);
    return () => clearInterval(id);
  }, []);
  const pts = Array.from({ length: 100 }).map((_, i) => {
    const x = (i / 99) * 400;
    const phase = (i + t) % 25;
    let y = 30;
    if (phase === 10) y = 8;
    else if (phase === 11) y = 50;
    else if (phase === 12) y = 18;
    else y = 30 + Math.sin((i + t) * 0.3) * 1.5;
    return `${x},${y}`;
  });
  return (
    <svg viewBox="0 0 400 60" className="h-16 w-full">
      <polyline
        fill="none"
        stroke="oklch(0.88 0.18 195)"
        strokeWidth="1.2"
        points={pts.join(" ")}
        style={{ filter: "drop-shadow(0 0 4px oklch(0.85 0.18 195))" }}
      />
    </svg>
  );
}

function BodyScan() {
  return (
    <svg viewBox="0 0 200 320" className="h-full w-full">
      <defs>
        <linearGradient id="auraGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.18 195 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.75 0.18 220 / 0.1)" />
        </linearGradient>
        <clipPath id="bodyClip">
          <path d="M100 30 C115 30 125 42 125 56 C125 70 115 80 100 80 C85 80 75 70 75 56 C75 42 85 30 100 30 Z M70 90 L130 90 L140 180 L130 250 L120 310 L110 310 L105 250 L95 250 L90 310 L80 310 L70 250 L60 180 Z" />
        </clipPath>
      </defs>

      {/* Aura */}
      <ellipse cx="100" cy="170" rx="85" ry="150" fill="url(#auraGrad)" opacity="0.5" className="animate-pulse-core" style={{ transformOrigin: "100px 170px" }} />

      {/* Body silhouette */}
      <path
        d="M100 30 C115 30 125 42 125 56 C125 70 115 80 100 80 C85 80 75 70 75 56 C75 42 85 30 100 30 Z M70 90 L130 90 L140 180 L130 250 L120 310 L110 310 L105 250 L95 250 L90 310 L80 310 L70 250 L60 180 Z"
        fill="oklch(0.2 0.04 250 / 0.8)"
        stroke="oklch(0.88 0.18 195 / 0.7)"
        strokeWidth="0.8"
      />

      {/* Energy nodes / chakras */}
      {[
        [100, 56],
        [100, 100],
        [100, 130],
        [100, 160],
        [100, 195],
        [100, 225],
        [100, 255],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill="oklch(0.88 0.18 195)" />
          <circle cx={x} cy={y} r="8" fill="none" stroke="oklch(0.88 0.18 195 / 0.5)" className="animate-pulse-core" style={{ animationDelay: `${i * 0.2}s`, transformOrigin: `${x}px ${y}px` }} />
        </g>
      ))}

      {/* Scan line */}
      <g clipPath="url(#bodyClip)">
        <rect x="0" width="200" height="3" fill="oklch(0.95 0.18 195)" opacity="0.9" style={{ filter: "drop-shadow(0 0 8px oklch(0.88 0.18 195))" }}>
          <animate attributeName="y" from="20" to="310" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Markers */}
      {[
        [100, 56, "Crown"],
        [100, 130, "Heart"],
        [100, 195, "Solar"],
      ].map(([x, y, l], i) => (
        <g key={i}>
          <line x1={x as number} y1={y as number} x2="180" y2={y as number} stroke="oklch(0.88 0.18 195 / 0.4)" strokeDasharray="2 2" />
          <text x="182" y={(y as number) + 3} className="font-tech" fill="oklch(0.88 0.18 195)" fontSize="6">{l}</text>
        </g>
      ))}
    </svg>
  );
}

export function Biometric() {
  return (
    <section id="biometric" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="06 / Bio Intelligence"
        title="Multidimensional Biometric Scan™"
        subtitle="Leitura biométrica energética em tempo real. Análise neural vibracional, mapeamento áurico e coerência de consciência."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Body scan */}
        <div className="glass relative overflow-hidden rounded-2xl p-6">
          <div className="font-tech mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
            <span className="text-muted-foreground">Biometric Field</span>
            <span className="text-accent animate-flicker">▸ Scanning</span>
          </div>
          <div className="relative aspect-[2/3]">
            <BodyScan />
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-6 lg:col-span-2">
          <div className="glass rounded-2xl p-6">
            <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Neural · Vibrational Pulse
            </div>
            <HeartWave />
            <div className="font-tech mt-2 flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>BPM 62</span>
              <span className="text-accent">HRV 88ms</span>
              <span>θ 8.4 Hz</span>
              <span className="text-accent">Coh 0.97</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["Coerência Vibracional", "0.97", "stable"],
              ["Estabilidade Mental", "94%", "synced"],
              ["Frequência Emocional", "Φ-7", "harmonized"],
              ["Campo Energético", "Ω-3", "expanded"],
              ["Alinhamento Neural", "9.4σ", "aligned"],
              ["Padrão Frequencial", "5:8", "convergent"],
              ["Ressonância Axial", "100%", "locked"],
              ["Bioassinatura", "AX-Δ12", "verified"],
            ].map(([l, v, s]) => (
              <div key={l} className="glass relative overflow-hidden rounded-lg p-4">
                <div className="font-tech text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
                <div className="font-display mt-1 text-xl text-foreground">{v}</div>
                <div className="font-tech mt-1 text-[9px] uppercase tracking-[0.2em] text-accent">▸ {s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
