export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-[0.2em] text-gradient">AXIS™ CORE</div>
            <p className="font-grotesk mt-3 max-w-md text-sm text-muted-foreground">
              Núcleo operacional quântico multidimensional. Tecnologia proprietária
              de inteligência vibracional viva.
            </p>
          </div>

          {[
            { t: "System", l: ["Dashboard", "Quantum Box", "Radionic Engine"] },
            { t: "Network", l: ["Telemetry", "Biometric Scan", "IA Operacional"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="font-tech text-[10px] uppercase tracking-[0.3em] text-accent">{c.t}</div>
              <ul className="font-grotesk mt-3 space-y-1.5 text-sm text-muted-foreground">
                {c.l.map((i) => <li key={i} className="hover:text-foreground">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="font-tech mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© AXIS™ CORE · MULTIDIMENSIONAL OPERATING SYSTEM</div>
          <div className="flex gap-4">
            <span>v 7.2.1 · BUILD Φ-432</span>
            <span className="text-accent">▸ FIELD STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
