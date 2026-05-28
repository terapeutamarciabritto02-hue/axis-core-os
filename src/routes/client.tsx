import { createFileRoute } from "@tanstack/react-router";
import { PanelShell, Panel } from "@/components/axis/PanelShell";

export const Route = createFileRoute("/client")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Painel do Cliente" },
      { name: "description", content: "Área do cliente AXIS™ CORE: frequência do dia, protocolos ativos, evolução energética e acompanhamento terapêutico." },
    ],
  }),
  component: ClientPanel,
});

function EvolutionChart() {
  const pts = Array.from({ length: 30 }, (_, i) => {
    const x = (i / 29) * 600;
    const y = 100 - (40 + Math.sin(i * 0.4) * 15 + i * 1.2);
    return `${x},${y}`;
  });
  return (
    <svg viewBox="0 0 600 120" className="h-32 w-full">
      <defs>
        <linearGradient id="evoGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.16 220)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.85 0.16 220)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="url(#evoGrad)" stroke="none" points={`0,120 ${pts.join(" ")} 600,120`} />
      <polyline fill="none" stroke="oklch(0.85 0.16 220)" strokeWidth="2" points={pts.join(" ")} style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 195))" }} />
    </svg>
  );
}

function ClientPanel() {
  return (
    <PanelShell
      eyebrow="Camada 3 / Client"
      title="Painel do Cliente"
      subtitle="Bem-vindo, Helena. Sua jornada energética em tempo real — frequência diária, protocolos ativos e evolução vibracional."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Frequência do dia */}
        <Panel title="Frequência do Dia" badge="Hoje" className="lg:col-span-1">
          <div className="relative flex aspect-square items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-core)" }} />
            <svg viewBox="0 0 200 200" className="relative h-full w-full">
              {[60, 75, 90].map((r, i) => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="oklch(0.85 0.16 220 / 0.3)" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDuration: `${20 + i * 8}s`, transformOrigin: "100px 100px" }} />
              ))}
              <circle cx="100" cy="100" r="40" fill="oklch(0.85 0.16 220 / 0.2)" className="animate-pulse-core" style={{ transformOrigin: "100px 100px" }} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-display text-4xl text-accent text-glow">528<span className="text-base">Hz</span></div>
              <div className="font-tech mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Amor · DNA</div>
            </div>
          </div>
          <div className="font-grotesk mt-4 text-center text-sm text-muted-foreground">
            Frequência sintonizada para regeneração celular e abertura cardíaca.
          </div>
        </Panel>

        {/* Evolução */}
        <Panel title="Evolução Energética · 30 dias" badge="↑ +24%" className="lg:col-span-2">
          <EvolutionChart />
          <div className="font-tech mt-4 grid grid-cols-4 gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div><div className="text-foreground font-display text-lg">94%</div>Coerência</div>
            <div><div className="text-foreground font-display text-lg">Φ-7</div>Ressonância</div>
            <div><div className="text-foreground font-display text-lg">12</div>Sessões</div>
            <div><div className="text-accent font-display text-lg">Alta</div>Evolução</div>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Protocolos ativos */}
        <Panel title="Protocolos Ativos" badge="3 em curso">
          <div className="space-y-3">
            {[
              ["AXP-014", "Limpeza Vibracional", 64],
              ["AXP-031", "Realinhamento Neural", 92],
              ["AXP-047", "Expansão de Campo", 38],
            ].map(([id, name, pct]) => (
              <div key={id as string} className="rounded-lg border border-border bg-background/30 p-3">
                <div className="font-tech flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-accent">{id}</span>
                  <span className="text-muted-foreground">{pct}%</span>
                </div>
                <div className="font-grotesk mt-1 text-sm text-foreground">{name}</div>
                <div className="relative mt-2 h-1 overflow-hidden rounded-full bg-border/40">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric to-accent" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Mensagens / Terapeuta */}
        <Panel title="Acompanhamento · Terapeuta" badge="2 novas">
          <div className="mb-4 flex items-center gap-3 rounded-lg border border-border bg-background/30 p-3">
            <div className="font-display flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs text-accent">
              CV
            </div>
            <div>
              <div className="font-grotesk text-sm text-foreground">Camila Vieira</div>
              <div className="font-tech text-[9px] uppercase tracking-[0.3em] text-accent">▸ Online</div>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { who: "T", text: "Helena, sua coerência subiu 12% após o último protocolo. Excelente progresso." },
              { who: "C", text: "Senti uma leveza diferente hoje. Posso aumentar a frequência?" },
              { who: "T", text: "Sim — vou ajustar para 639 Hz amanhã. Mantenha-se hidratada." },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.who === "C" ? "justify-end" : ""}`}>
                <div className={`font-grotesk max-w-xs rounded-lg border px-3 py-2 text-xs ${m.who === "C" ? "border-electric/40 bg-electric/10" : "border-accent/30 bg-background/40"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Histórico */}
      <div className="mt-6">
        <Panel title="Histórico de Sessões" badge="12 totais">
          <div className="divide-y divide-border/40">
            {[
              ["2026-05-26", "Sessão #12 · Mesa Akáshica", "528 Hz", "94%"],
              ["2026-05-24", "Sessão #11 · Limpeza Vibracional", "432 Hz", "91%"],
              ["2026-05-21", "Sessão #10 · Realinhamento Neural", "639 Hz", "88%"],
              ["2026-05-18", "Sessão #09 · Mesa Quântica", "741 Hz", "85%"],
            ].map(([date, name, freq, coh]) => (
              <div key={name} className="grid grid-cols-12 gap-3 py-3 font-tech text-xs uppercase tracking-[0.15em]">
                <div className="col-span-2 text-muted-foreground">{date}</div>
                <div className="font-grotesk col-span-6 text-sm text-foreground">{name}</div>
                <div className="col-span-2 text-electric">{freq}</div>
                <div className="col-span-1 text-accent">{coh}</div>
                <div className="col-span-1 text-right">
                  <button className="text-[9px] text-accent hover:underline">ver relatório ▸</button>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </PanelShell>
  );
}
