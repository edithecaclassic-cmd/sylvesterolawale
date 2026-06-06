import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroPlain from "@/assets/hero-plain.png.asset.json";
import heroCyborg from "@/assets/hero-cyborg.png.asset.json";
import { socials } from "@/data/portfolio";

export function Hero() {
  const maskRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const move = (clientX: number, clientY: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    if (maskRef.current) {
      maskRef.current.style.setProperty("--mx", `${x}%`);
      maskRef.current.style.setProperty("--my", `${y}%`);
    }
    if (glowRef.current) {
      glowRef.current.style.left = `${x}%`;
      glowRef.current.style.top = `${y}%`;
      glowRef.current.style.opacity = "1";
    }
  };

  const reveal = (on: boolean) => {
    if (maskRef.current) maskRef.current.style.setProperty("--r", on ? "150px" : "0px");
    if (glowRef.current && !on) glowRef.current.style.opacity = "0";
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-hero"
    >
      {/* Portrait stack with spotlight mask */}
      <div
        className="absolute inset-0 z-0 flex items-end justify-center md:justify-end"
        onMouseEnter={() => reveal(true)}
        onMouseLeave={() => reveal(false)}
        onMouseMove={(e) => move(e.clientX, e.clientY, e.currentTarget)}
        onTouchStart={(e) => {
          reveal(true);
          const t = e.touches[0];
          move(t.clientX, t.clientY, e.currentTarget);
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          move(t.clientX, t.clientY, e.currentTarget);
        }}
        onTouchEnd={() => reveal(false)}
      >
        <div className="relative h-[78vh] w-full max-w-3xl md:h-[94vh] md:max-w-[58vw]">
          {/* bottom: cyborg, revealed through the mask hole */}
          <img
            src={heroCyborg.url}
            alt="Sylvester Olaleye cybernetic portrait"
            className="absolute inset-0 h-full w-full object-contain object-bottom"
            draggable={false}
          />
          {/* top: plain portrait with a transparent hole following the cursor */}
          <img
            ref={maskRef}
            src={heroPlain.url}
            alt="Sylvester Olaleye portrait"
            className="hero-mask absolute inset-0 h-full w-full object-contain object-bottom"
            draggable={false}
          />
          {/* hue glow that trails the cursor */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.22 45 / 0.55) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* gradient scrims for legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 bg-gradient-to-t from-black/55 to-transparent" />

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 pt-28 md:px-8 md:pb-20">
        <h1 className="font-display text-[18vw] leading-[0.82] tracking-tight md:text-[12.5vw] lg:text-[11rem]">
          <span className="block text-white animate-rise-in" style={{ animationDelay: "0.05s" }}>
            SYLVESTER
          </span>
          <span
            className="block text-primary animate-rise-in"
            style={{ animationDelay: "0.18s" }}
          >
            OLALEYE
          </span>
        </h1>

        <div className="mt-6 max-w-md animate-rise-in" style={{ animationDelay: "0.3s" }}>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Vibe Coder & Website Developer
          </p>
          <p className="mt-3 text-base text-white/80">
            Designing digital experiences that are fast, bold, and conversion-focused.
          </p>
        </div>

        <div
          className="pointer-events-auto mt-7 flex flex-wrap items-center gap-3 animate-rise-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            View My Work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div
          className="pointer-events-auto mt-8 flex flex-wrap gap-x-6 gap-y-2 animate-rise-in"
          style={{ animationDelay: "0.5s" }}
        >
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
