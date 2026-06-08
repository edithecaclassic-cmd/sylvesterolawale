import { marqueeItems } from "@/data/portfolio";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-6">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl uppercase tracking-tight text-foreground/80 md:text-4xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
