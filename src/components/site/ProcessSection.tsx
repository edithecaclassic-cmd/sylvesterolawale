import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/data/portfolio";

const icons = [Search, PenTool, Code2, Rocket];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-display text-5xl text-white/[0.04] md:text-8xl">PROCESS</p>
        <div className="-mt-6 flex flex-col items-start justify-between gap-4 md:-mt-12 md:flex-row md:items-end">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">HOW I WORK</h2>
          <span className="max-w-xs text-sm text-ink-foreground/60">
            A clear, four-step system that turns an idea into a fast, bold, converting product.
          </span>
        </div>

        <div className="relative mt-16">
          {/* animated connecting line */}
          <div className="absolute left-0 top-7 hidden h-px w-full bg-white/10 md:block">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/40 transition-all duration-[1400ms] ease-out"
              style={{ width: shown ? "100%" : "0%" }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {processSteps.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={step.no}
                  className="relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transitionDelay: `${i * 180}ms`,
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(28px)",
                  }}
                >
                  <div className="glass-strong relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-primary">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-foreground/65">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
