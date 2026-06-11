import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/data/portfolio";

const icons = [Search, PenTool, Code2, Rocket];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1 fluid fill
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      // start filling when the track top reaches 75% of viewport,
      // finish when its bottom passes 55% of viewport
      const start = vh * 0.75;
      const end = vh * 0.55;
      const raw = (start - rect.top) / (rect.height + (start - end));
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const steps = processSteps.length;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-20 text-ink-foreground md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
          The Process
        </p>
        <div className="mt-3 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">HOW I WORK</h2>
          <span className="max-w-xs text-sm text-ink-foreground/60">
            A clear, four-step system that turns an idea into a fast, bold, converting product.
          </span>
        </div>

        <div ref={trackRef} className="relative mt-16 pl-14 md:pl-20">
          {/* thermometer track */}
          <div className="absolute left-[26px] top-2 h-full w-[3px] rounded-full bg-white/10 md:left-[34px]">
            {/* mercury bulb at the bottom */}
            <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-primary/30" />
            {/* flowing mercury fill */}
            <div
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_0_18px_2px_oklch(0.66_0.21_41/0.6)]"
              style={{ height: `${progress * 100}%`, transition: "height 120ms linear" }}
            >
              {/* glossy moving highlight */}
              <span className="absolute inset-x-0 bottom-0 h-10 rounded-full bg-white/40 blur-[6px]" />
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => {
              const Icon = icons[i % icons.length];
              // node lights up once the mercury passes it
              const threshold = (i + 0.5) / steps;
              const reached = progress >= threshold;
              return (
                <div
                  key={step.no}
                  className="relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transitionDelay: `${i * 90}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(28px)",
                  }}
                >
                  {/* node dot on the track */}
                  <span
                    className={`absolute -left-14 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 md:-left-20 ${
                      reached
                        ? "border-primary/60 bg-primary text-primary-foreground shadow-[0_0_24px_oklch(0.66_0.21_41/0.7)]"
                        : "glass-strong border-white/10 text-ink-foreground/60"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  {/* descriptive card */}
                  <div
                    className={`glass-strong rounded-2xl p-6 transition-all duration-500 md:p-7 ${
                      reached ? "ring-1 ring-primary/40" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold tracking-[0.25em] text-primary">
                        STEP {step.no}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">
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
