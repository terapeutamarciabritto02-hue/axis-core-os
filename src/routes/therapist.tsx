therapist/
│
├── index.tsx
├── clients.tsx
├── sessions.tsx
├── protocols.tsx
├── remote.tsx
└── reports.tsx

import { createFileRoute } from "@tanstack/react-router";
import { PanelShell, Panel } from "@/components/axis/PanelShell";

export const Route = createFileRoute("/therapist")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Painel do Terapeuta" },
      { name: "description", content: "Painel operacional do terapeuta AXIS™ CORE: clientes, sessões, mesas, protocolos e emissão remota." },
    ],
  }),
  component: TherapistPanel,
});

const clients = [
  { id: "CL-001", name: "Helena Vasconcelos", state: "Harmonizado", freq: 528, coh: 94, last: "há 2h" },
  { id: "CL-002", name: "Rafael Monteiro", state: "Em sessão", freq: 432, coh: 87, last: "agora" },
  { id: "CL-003", name: "Ana Beatriz Lima", state: "Pendente", freq: 396, coh: 71, last: "há 1d" },
  { id: "CL-004", name: "João Pedro Castro", state: "Harmonizado", freq: 639, coh: 89, last: "há 4h" },
  { id: "CL-005", name: "Mariana Soares", state: "Em emissão", freq: 741, coh: 92, last: "agora" },
  { id: "CL-006", name: "Daniel Reis", state: "Pendente", freq: 285, coh: 64, last: "há 3d" },
];

const tables = [
  "Frequencial · 432 Hz",
  "Akáshica · ∞",
  "Radiônica · Φ-7",
  "Quântica · 528 Hz",
  "Solfeggio · 396 Hz",
  "Neural · 40 Hz",
];

const protocols = [
  { code: "AXP-014", name: "Limpeza Vibracional", duration: "21 min", target: "Campo etérico" },
  { code: "AXP-022", name: "Sincronização Akáshica", duration: "33 min", target: "Memória celular" },
  { code: "AXP-031", name: "Realinhamento Neural", duration: "18 min", target: "Sistema nervoso" },
  { code: "AXP-047", name: "Expansão de Campo", duration: "44 min", target: "Aura completa" },
];

function TherapistPanel() {
  return (
    <PanelShell
      eyebrow="Camada 2 / Therapist"
      title="Painel do Terapeuta"
      subtitle="Comando operacional. Gerencie clientes, ative mesas multidimensionais e dispare protocolos personalizados em tempo real."
    >
      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Clientes Ativos", "47", "+3"],
          ["Sessões Hoje", "12", "+4"],
          ["Emissões Remotas", "8", "Live"],
          ["Coerência Média", "88.4%", "↑"],
        ].map(([l, v, d]) => (
          <div key={l} className="glass rounded-xl p-5">
            <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
            <div className="font-display mt-2 text-3xl text-foreground text-glow">{v}</div>
            <div className="font-tech mt-1 text-[10px] uppercase tracking-[0.25em] text-accent">▸ {d}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Clients list */}
        <Panel title="Clientes · Diretório" badge="47 ativos" className="lg:col-span-2">
          <div className="divide-y divide-border/40">
            {clients.map((c) => (
              <div key={c.id} className="grid grid-cols-12 items-center gap-3 py-3 font-tech text-xs uppercase tracking-[0.15em]">
                <div className="col-span-2 text-muted-foreground">{c.id}</div>
                <div className="font-grotesk col-span-3 text-sm text-foreground">{c.name}</div>
                <div className="col-span-2 text-accent">{c.state}</div>
                <div className="col-span-1 text-electric">{c.freq}Hz</div>
                <div className="col-span-2 relative h-1 overflow-hidden rounded-full bg-border/40">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric to-accent" style={{ width: `${c.coh}%` }} />
                </div>
                <div className="col-span-1 text-right text-muted-foreground">{c.last}</div>
                <div className="col-span-1 text-right">
                  <button className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-[9px] text-accent">▸</button>
                </div>
              </div>
            ))}
          </div>
          <button className="font-tech mt-4 w-full rounded-lg border border-electric/40 bg-electric/10 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground hover:bg-electric/20">
            + Convidar cliente via email
          </button>
        </Panel>

        {/* Active tables */}
        <Panel title="Mesas Disponíveis" badge="6 / 16">
          <div className="space-y-2">
            {tables.map((t, i) => (
              <button
                key={t}
                className="font-grotesk group flex w-full items-center justify-between rounded-lg border border-border bg-background/30 px-3 py-2.5 text-left text-sm text-foreground transition hover:border-accent/50 hover:bg-accent/5"
              >
                <span>{t}</span>
                <span className="font-tech text-[9px] uppercase tracking-[0.3em] text-accent opacity-0 group-hover:opacity-100">
                  Ativar ▸
                </span>
              </button>
            ))}
          </div>
        </Panel>
      </div>

      {/* Protocols + Remote emission */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Protocolos Personalizados" badge="Custom" className="lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            {protocols.map((p) => (
              <div key={p.code} className="rounded-lg border border-border bg-background/30 p-4">
                <div className="font-tech flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-accent">{p.code}</span>
                  <span className="text-muted-foreground">{p.duration}</span>
                </div>
                <div className="font-display mt-2 text-base text-foreground">{p.name}</div>
                <div className="font-grotesk mt-1 text-xs text-muted-foreground">Alvo: {p.target}</div>
                <div className="mt-3 flex gap-2">
                  <button className="font-tech flex-1 rounded border border-accent/40 bg-accent/10 py-1.5 text-[9px] uppercase tracking-[0.3em] text-accent">
                    Disparar
                  </button>
                  <button className="font-tech rounded border border-border px-2 py-1.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Emissão Remota" badge="Live">
          <div className="relative flex aspect-square items-center justify-center">
            <div className="absolute inset-4 rounded-full border border-accent/30 animate-spin-slow" />
            <div className="absolute inset-10 rounded-full border border-electric/40 animate-spin-rev" />
            <div className="absolute inset-16 rounded-full border border-gold-energy/30" />
            <div className="font-display text-center">
              <div className="text-2xl text-accent text-glow">8</div>
              <div className="font-tech text-[9px] uppercase tracking-[0.3em] text-muted-foreground">canais ativos</div>
            </div>
          </div>
          <button className="font-tech mt-4 w-full rounded-lg border border-accent/40 bg-gradient-to-r from-electric/20 to-accent/20 py-2.5 text-[10px] uppercase tracking-[0.3em] text-foreground">
            + Nova emissão remota
          </button>
        </Panel>
      </div>
    </PanelShell>
  );
}
