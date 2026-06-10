import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
          Kind Words
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
          WHAT CLIENTS SAY
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(28px)",
              }}
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-heading font-bold">{t.name}</span>
                  <span className="block font-mono text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
