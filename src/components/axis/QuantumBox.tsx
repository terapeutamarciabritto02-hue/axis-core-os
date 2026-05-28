import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const STATES = [
  "scanning",
  "synchronizing",
  "processing",
  "harmonizing",
  "resonance detected",
  "multidimensional alignment",
];

export function QuantumBox() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % STATES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="quantum" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="04 / Quantum Engine"
        title="QUANTUM BOX™"
        subtitle="Cápsula quântica consciente. Engine multidimensional para análise, processamento e alinhamento vibracional em tempo real."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Visual core */}
        <div className="glass relative aspect-square overflow-hidden rounded-2xl lg:col-span-3">
          <div className="absolute inset-0 grid-holo opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Cube */}
            <div className="relative">
              <div
                className="animate-spin-slow absolute -inset-32 rounded-full opacity-60"
                style={{ background: "var(--gradient-core)" }}
              />
              <svg viewBox="0 0 300 300" className="relative h-[380px] w-[380px]">
                <defs>
                  <linearGradient id="qStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.88 0.18 195)" />
                    <stop offset="100%" stopColor="oklch(0.84 0.14 90)" />
                  </linearGradient>
                </defs>

                <g
                  className="animate-spin-slow"
                  style={{ transformOrigin: "150px 150px" }}
                >
                  {/* Cube wireframe */}
                  <g stroke="url(#qStroke)" strokeWidth="0.6" fill="none" opacity="0.7">
                    <polygon points="80,80 220,80 220,220 80,220" />
                    <polygon points="110,50 250,50 250,190 110,190" />
                    <line x1="80" y1="80" x2="110" y2="50" />
                    <line x1="220" y1="80" x2="250" y2="50" />
                    <line x1="220" y1="220" x2="250" y2="190" />
                    <line x1="80" y1="220" x2="110" y2="190" />
                  </g>
                </g>

                <g
                  className="animate-spin-rev"
                  style={{ transformOrigin: "150px 150px" }}
                >
                  <circle cx="150" cy="150" r="120" fill="none" stroke="oklch(0.88 0.18 195 / 0.4)" strokeDasharray="2 4" />
                  <circle cx="150" cy="150" r="95" fill="none" stroke="oklch(0.84 0.14 90 / 0.3)" />
                </g>

                {/* Inner sphere */}
                <circle
                  cx="150"
                  cy="150"
                  r="46"
                  fill="url(#qStroke)"
                  className="animate-pulse-core"
                  style={{ transformOrigin: "150px 150px", filter: "blur(2px)", opacity: 0.6 }}
                />
                <circle cx="150" cy="150" r="28" fill="oklch(0.95 0.1 195)" opacity="0.9" />
                <circle cx="150" cy="150" r="4" fill="oklch(0.99 0 0)" />
              </svg>

              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-accent"
                  style={
                    {
                      "--orbit-r": `${110 + i * 18}px`,
                      animation: `orbit ${8 + i * 2}s linear infinite`,
                      animationDelay: `${i * -1.5}s`,
                      boxShadow: "0 0 10px oklch(0.88 0.18 195)",
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>

          {/* State label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Quantum State
            </div>
            <div className="font-display text-sm uppercase tracking-[0.3em] text-accent text-glow animate-flicker">
              ▸ {STATES[idx]}
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2">
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Core Functions
          </div>
          <div className="mt-4 space-y-2.5">
            {[
              "Análise vibracional",
              "Processamento multidimensional",
              "Leitura energética",
              "Sincronização de protocolos",
              "Ativação automática de mesas",
              "Varredura de frequência",
              "Alinhamento quântico",
            ].map((f, i) => (
              <div
                key={f}
                className="font-grotesk flex items-center justify-between border-b border-border/40 pb-2 text-sm text-foreground"
              >
                <span className="flex items-center gap-3">
                  <span className="font-tech text-[10px] text-accent/70">
                    Q-{String(i + 1).padStart(2, "0")}
                  </span>
                  {f}
                </span>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-md border border-accent/30 bg-accent/5 p-4">
            <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-accent">Live Output</div>
            <div className="font-display mt-2 text-2xl text-foreground">
              0.97<span className="text-base text-muted-foreground">σ coherence</span>
            </div>
            <div className="font-tech mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Field synchronized · Δ +0.03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
