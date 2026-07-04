import { marqueeItems } from "@/data/portfolio";

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-ink py-5 text-ink-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-xl tracking-tight md:text-2xl">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
