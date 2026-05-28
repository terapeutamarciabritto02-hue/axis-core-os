export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative">
      <div className="font-tech flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
        <span className="h-px w-12 bg-accent/60" />
        {eyebrow}
      </div>
      <h2 className="font-display mt-4 text-4xl tracking-[0.06em] text-foreground sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-grotesk mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
