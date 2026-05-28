import { SectionHeader } from "./SectionHeader";

export function AI() {
  const messages = [
    { who: "AXIS", text: "Detectada elevação na frequência do operador. Sugiro ativar Mesa Harmônica em 528 Hz." },
    { who: "OP", text: "Iniciar protocolo." },
    { who: "AXIS", text: "Protocolo AXP-014 ativado. Limpeza vibracional em curso · 64%" },
    { who: "AXIS", text: "Quantum Box detectou ressonância Φ-7. Sincronizando rede telemétrica." },
  ];

  return (
    <section id="ai" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        eyebrow="08 / Contextual Intelligence"
        title="AXIS™ IA Operacional"
        subtitle="Inteligência contextual viva. Ativa mesas automaticamente, interpreta estados e sugere protocolos em tempo real."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2">
          <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Core Intelligence
          </div>

          <div className="relative mt-8 flex aspect-square items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-core)", opacity: 0.6 }} />
            <svg viewBox="0 0 200 200" className="relative h-full w-full">
              <defs>
                <radialGradient id="aiGrad">
                  <stop offset="0%" stopColor="oklch(0.95 0.1 195)" />
                  <stop offset="100%" stopColor="oklch(0.75 0.18 220 / 0.3)" />
                </radialGradient>
              </defs>
              {[0, 30, 60, 90].map((rot, i) => (
                <ellipse
                  key={i}
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="30"
                  fill="none"
                  stroke="oklch(0.88 0.18 195 / 0.5)"
                  strokeWidth="0.6"
                  transform={`rotate(${rot} 100 100)`}
                  className="animate-spin-slow"
                  style={{ animationDelay: `${i * 0.3}s`, transformOrigin: "100px 100px" }}
                />
              ))}
              <circle cx="100" cy="100" r="30" fill="url(#aiGrad)" className="animate-pulse-core" style={{ transformOrigin: "100px 100px" }} />
              <circle cx="100" cy="100" r="3" fill="oklch(0.99 0 0)" />
            </svg>
          </div>

          <div className="font-tech mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-accent animate-flicker">
            ▸ Listening · Context awareness 0.94
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-3">
          <div className="font-tech flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
            <span className="text-muted-foreground">Conversation · Live</span>
            <span className="text-accent">SESSION AX-2207</span>
          </div>

          <div className="mt-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.who === "OP" ? "justify-end" : ""}`}>
                {m.who === "AXIS" && (
                  <div className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded border border-accent/40 bg-accent/10 text-[10px] text-accent">
                    AX
                  </div>
                )}
                <div
                  className={`font-grotesk max-w-md rounded-lg border px-4 py-2.5 text-sm ${
                    m.who === "OP"
                      ? "border-electric/40 bg-electric/10 text-foreground"
                      : "border-accent/30 bg-background/40 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-lg border border-border bg-background/40 p-2">
            <span className="font-tech px-2 text-[10px] uppercase tracking-[0.3em] text-accent">▸</span>
            <input
              placeholder="Comunicar com AXIS Core…"
              className="font-grotesk flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button className="font-tech rounded border border-accent/40 bg-accent/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-accent">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
