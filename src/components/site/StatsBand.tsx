import { stats, marqueeItems } from "@/data/portfolio";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="py-10 text-center md:py-14">
            <p className="font-display text-4xl tracking-tight text-primary md:text-6xl">
              {s.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* marquee strip */}
      <div className="relative overflow-hidden border-t border-border bg-ink py-5 text-ink-foreground">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-display text-xl tracking-tight md:text-2xl">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
