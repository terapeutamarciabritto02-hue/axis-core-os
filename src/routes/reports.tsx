import { createFileRoute } from "@tanstack/react-router";
import { PanelShell, Panel } from "@/components/axis/PanelShell";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Sistema de Relatórios" },
      { name: "description", content: "Relatórios automáticos: coerência vibracional, biofeedback, evolução subjetiva, sessões e frequências." },
    ],
  }),
  component: Reports,
});

function BiofeedbackWave() {
  const bars = Array.from({ length: 48 });
  return (
    <div className="flex h-32 items-end gap-1">
      {bars.map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.4)) * 80;
        return (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-electric to-accent"
            style={{
              height: `${h}%`,
              animation: `wave 1.6s ease-in-out ${i * 0.04}s infinite`,
              transformOrigin: "bottom",
              filter: "drop-shadow(0 0 4px oklch(0.85 0.18 195 / 0.6))",
            }}
          />
        );
      })}
    </div>
  );
}

function Reports() {
  return (
    <PanelShell
      eyebrow="Camada 4 / Reports"
      title="Sistema de Relatórios"
      subtitle="Telemetria terapêutica automatizada. Cada sessão gera leitura completa de coerência, biofeedback e evolução vibracional."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel title="Coerência Vibracional · Média 30d" badge="↑ +18%">
          <div className="font-display text-5xl text-accent text-glow">94.2%</div>
          <div className="font-grotesk mt-2 text-sm text-muted-foreground">Coerência cardíaca global da rede de clientes.</div>
          <div className="font-tech mt-6 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.2em]">
            {[["Alta", "32"], ["Média", "11"], ["Baixa", "4"]].map(([l, v]) => (
              <div key={l} className="rounded border border-border bg-background/30 p-2 text-center">
                <div className="font-display text-xl text-foreground">{v}</div>
                <div className="text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Biofeedback · Live Stream" badge="Live" className="lg:col-span-2">
          <BiofeedbackWave />
          <div className="font-tech mt-4 grid grid-cols-4 gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div>HRV <span className="text-accent">72ms</span></div>
            <div>α-waves <span className="text-accent">9.4Hz</span></div>
            <div>β-waves <span className="text-accent">18Hz</span></div>
            <div>θ-waves <span className="text-accent">5.2Hz</span></div>
          </div>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Relatórios Gerados" badge="auto">
          <div className="divide-y divide-border/40">
            {[
              ["RPT-0234", "Helena V. · Sessão #12", "Coerência + Biofeedback", "2026-05-26"],
              ["RPT-0233", "Rafael M. · Sessão #08", "Evolução Subjetiva", "2026-05-26"],
              ["RPT-0232", "Mariana S. · Emissão Remota", "Frequências Aplicadas", "2026-05-25"],
              ["RPT-0231", "Ana B. · Sessão #03", "Observações Terapêuticas", "2026-05-25"],
              ["RPT-0230", "João P. · Sessão #15", "Relatório Completo", "2026-05-24"],
            ].map(([id, who, type, date]) => (
              <div key={id} className="grid grid-cols-12 items-center gap-3 py-3 font-tech text-xs uppercase tracking-[0.15em]">
                <div className="col-span-2 text-accent">{id}</div>
                <div className="font-grotesk col-span-4 text-sm text-foreground">{who}</div>
                <div className="col-span-3 text-muted-foreground">{type}</div>
                <div className="col-span-2 text-muted-foreground">{date}</div>
                <div className="col-span-1 text-right">
                  <button className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-[9px] text-accent">PDF ▸</button>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          ["Sessões Realizadas", "234", "Este mês"],
          ["Frequências Utilizadas", "47", "Catálogo ativo"],
          ["Evolução Média", "+27%", "Vs. mês anterior"],
        ].map(([l, v, s]) => (
          <div key={l} className="glass rounded-xl p-6">
            <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
            <div className="font-display mt-3 text-4xl text-foreground text-glow">{v}</div>
            <div className="font-grotesk mt-1 text-xs text-accent">{s}</div>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}
