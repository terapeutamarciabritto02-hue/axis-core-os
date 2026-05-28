export function SacredCore() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* Halo glow */}
      <div
        className="absolute h-[820px] w-[820px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-core)" }}
      />

      {/* Conic portal */}
      <div
        className="animate-spin-slow absolute h-[640px] w-[640px] rounded-full opacity-25"
        style={{
          background: "var(--gradient-portal)",
          maskImage: "radial-gradient(circle, transparent 55%, black 56%, black 60%, transparent 62%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 55%, black 56%, black 60%, transparent 62%)",
        }}
      />

      {/* SVG sacred geometry */}
      <svg
        viewBox="0 0 600 600"
        className="relative h-[560px] w-[560px] opacity-90"
        fill="none"
        stroke="currentColor"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.18 195)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="oklch(0.75 0.18 220)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.88 0.18 195)" />
            <stop offset="100%" stopColor="oklch(0.75 0.18 220)" />
          </linearGradient>
        </defs>

        {/* Concentric */}
        <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="260" stroke="url(#strokeGrad)" strokeWidth="0.6" opacity="0.5" />
          <circle cx="300" cy="300" r="220" stroke="url(#strokeGrad)" strokeWidth="0.4" opacity="0.4" strokeDasharray="2 6" />
          <circle cx="300" cy="300" r="180" stroke="url(#strokeGrad)" strokeWidth="0.4" opacity="0.5" strokeDasharray="20 4 2 4" />
        </g>

        {/* Flower of life nodes */}
        <g className="animate-spin-rev" style={{ transformOrigin: "300px 300px" }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x = 300 + Math.cos(a) * 140;
            const y = 300 + Math.sin(a) * 140;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="40" stroke="url(#strokeGrad)" strokeWidth="0.5" opacity="0.45" />
                <circle cx={x} cy={y} r="2" fill="oklch(0.88 0.18 195)" />
              </g>
            );
          })}
        </g>

        {/* Hexagram */}
        <g opacity="0.6">
          <polygon
            points="300,120 460,400 140,400"
            stroke="url(#strokeGrad)"
            strokeWidth="0.7"
          />
          <polygon
            points="300,480 140,200 460,200"
            stroke="url(#strokeGrad)"
            strokeWidth="0.7"
          />
        </g>

        {/* Core */}
        <circle cx="300" cy="300" r="80" fill="url(#coreGlow)" className="animate-pulse-core" style={{ transformOrigin: "300px 300px" }} />
        <circle cx="300" cy="300" r="6" fill="oklch(0.98 0.05 195)" />
      </svg>
    </div>
  );
}
