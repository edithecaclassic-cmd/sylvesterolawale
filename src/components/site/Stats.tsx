import { stats } from "@/data/portfolio";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-ink-foreground md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-5xl tracking-tight text-primary md:text-7xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-ink-foreground/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
