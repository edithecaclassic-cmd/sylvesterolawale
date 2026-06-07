import { useEffect, useRef, useState } from "react";
import { Search, LayoutGrid, Palette, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/data/portfolio";

const icons = [Search, LayoutGrid, Palette, Code2, Rocket];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const items = ref.current?.querySelectorAll("[data-step]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.step);
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.4 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-display text-5xl text-white/[0.04] md:text-8xl">PROCESS</p>
        <div className="-mt-6 flex flex-col items-start justify-between gap-4 md:-mt-12 md:flex-row md:items-end">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">HOW I WORK</h2>
          <span className="max-w-sm text-sm font-medium text-ink-foreground/60">
            A clear, repeatable process that turns ideas into fast, bold, conversion-focused products.
          </span>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* vertical progress line */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-white/10 md:block">
            <div
              className="w-full bg-primary transition-all duration-1000 ease-out"
              style={{ height: `${(visible.length / processSteps.length) * 100}%` }}
            />
          </div>

          <div className="space-y-6 md:space-y-10">
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              const isOn = visible.includes(i);
              return (
                <div
                  key={step.number}
                  data-step={i}
                  className={`relative flex gap-5 transition-all duration-700 ease-out md:gap-8 ${
                    isOn ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                >
                  <div
                    className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border transition-colors duration-500 ${
                      isOn
                        ? "border-primary bg-primary text-primary-foreground shadow-glow"
                        : "border-white/15 bg-white/5 text-ink-foreground/50"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div
                    className={`flex-1 rounded-2xl border p-5 transition-colors duration-500 md:p-7 ${
                      isOn ? "border-white/15 bg-white/[0.04]" : "border-white/5 bg-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl text-primary md:text-4xl">
                        {step.number}
                      </span>
                      <h3 className="font-heading text-lg font-bold md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm text-ink-foreground/70 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
