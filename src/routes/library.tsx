library/
│
├── protocols/
├── frequencies/
├── apostilas/
├── quantum-box/
├── mesa-hado/
└── training/
import { createFileRoute } from "@tanstack/react-router";
import { PanelShell, Panel } from "@/components/axis/PanelShell";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Biblioteca AXIS" },
      { name: "description", content: "Biblioteca AXIS™: frequências, protocolos, mesas, exercícios, apostilas e treinamentos premium." },
    ],
  }),
  component: Library,
});

const categories = [
  { key: "Frequências", count: 142, hue: "from-electric to-accent" },
  { key: "Protocolos", count: 87, hue: "from-accent to-gold-energy" },
  { key: "Mesas", count: 16, hue: "from-gold-energy to-electric" },
  { key: "Exercícios", count: 54, hue: "from-electric/80 to-accent/80" },
  { key: "Apostilas", count: 28, hue: "from-accent to-electric" },
  { key: "Treinamentos", count: 12, hue: "from-gold-energy to-accent" },
];

const featured = [
  { tag: "Frequência", title: "528 Hz · DNA & Amor", desc: "Frequência miraculosa de regeneração celular e abertura cardíaca." },
  { tag: "Protocolo", title: "AXP-072 · Coerência Quântica", desc: "Protocolo completo de 7 fases para sincronização do campo bioenergético." },
  { tag: "Treinamento", title: "Iniciação à Mesa Akáshica", desc: "Curso premium de 12 módulos para acesso aos registros multidimensionais." },
  { tag: "Apostila", title: "Códigos Solfeggio Sagrados", desc: "Manual completo das 9 frequências antigas e suas aplicações terapêuticas." },
  { tag: "Mesa", title: "Mesa Radiônica Φ-7", desc: "Configuração completa da mesa Φ-7 com 64 testemunhos vibracionais." },
  { tag: "Exercício", title: "Respiração Holotrópica AXIS", desc: "Sequência de respiração para expansão de consciência guiada por IA." },
];

function Library() {
  return (
    <PanelShell
      eyebrow="Camada 5 / Library"
      title="Biblioteca AXIS™"
      subtitle="Conhecimento operacional. Catálogo vivo de frequências, protocolos, mesas, exercícios e materiais premium."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {categories.map((c) => (
          <button
            key={c.key}
            className="group glass relative overflow-hidden rounded-xl p-5 text-left transition hover:scale-[1.02]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 ${c.hue}`} />
            <div className="font-display relative text-2xl text-foreground">{c.count}</div>
            <div className="font-tech relative mt-1 text-[10px] uppercase tracking-[0.3em] text-accent">{c.key}</div>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="font-tech mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
          <span className="text-accent">▸ Featured · Premium</span>
          <input
            placeholder="buscar no catálogo…"
            className="font-grotesk w-64 rounded border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground outline-none focus:border-accent/60"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <div key={f.title} className="glass group relative overflow-hidden rounded-xl p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="font-tech text-[9px] uppercase tracking-[0.3em] text-accent">{f.tag}</div>
              <h3 className="font-display mt-3 text-lg text-foreground">{f.title}</h3>
              <p className="font-grotesk mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <button className="font-tech flex-1 rounded border border-accent/40 bg-accent/10 py-1.5 text-[9px] uppercase tracking-[0.3em] text-accent">
                  Abrir
                </button>
                <button className="font-tech rounded border border-border px-2 py-1.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  ★
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Panel title="Trilhas de Treinamento" badge="Premium">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Operador AXIS Nível I", "8 módulos · 12h", 100],
              ["Mesa Akáshica Avançada", "12 módulos · 24h", 67],
              ["Emissão Remota Multidimensional", "6 módulos · 9h", 34],
            ].map(([name, meta, pct]) => (
              <div key={name as string} className="rounded-lg border border-border bg-background/30 p-4">
                <div className="font-display text-base text-foreground">{name}</div>
                <div className="font-grotesk mt-1 text-xs text-muted-foreground">{meta}</div>
                <div className="relative mt-3 h-1 overflow-hidden rounded-full bg-border/40">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric to-accent" style={{ width: `${pct}%` }} />
                </div>
                <div className="font-tech mt-2 text-[9px] uppercase tracking-[0.3em] text-accent">{pct}% concluído</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </PanelShell>
  );
}
