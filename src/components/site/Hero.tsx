import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroPlain from "@/assets/hero-plain.png.asset.json";
import heroCyborg from "@/assets/hero-cyborg-aligned.png";
import { socials } from "@/data/portfolio";

export function Hero() {
  const maskRef = useRef<HTMLImageElement>(null);

  const move = (clientX: number, clientY: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    if (maskRef.current) {
      maskRef.current.style.setProperty("--mx", `${x}%`);
      maskRef.current.style.setProperty("--my", `${y}%`);
    }
  };

  const reveal = (on: boolean) => {
    if (maskRef.current) maskRef.current.style.setProperty("--r", on ? "180px" : "0px");
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero">
      {/* Full-bleed portrait background with spotlight reveal */}
      <div
        className="absolute inset-0 z-0"
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
        {/* bottom: cyborg, revealed through the mask hole */}
        <img
          src={heroCyborg}
          alt="Sylvester Olaleye cybernetic portrait"
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          draggable={false}
        />
        {/* top: plain portrait with a transparent hole following the cursor */}
        <img
          ref={maskRef}
          src={heroPlain.url}
          alt="Sylvester Olaleye portrait"
          className="hero-mask absolute inset-0 h-full w-full object-cover object-[center_20%]"
          draggable={false}
        />
      </div>

      {/* gradient scrims for legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <h1 className="font-display text-[16vw] leading-[0.85] tracking-tight mix-blend-difference sm:text-[13vw] md:text-[8vw] lg:text-[7rem]">
          <span className="block text-white animate-rise-in" style={{ animationDelay: "0.05s" }}>
            SYLVESTER
          </span>
          <span
            className="block text-white animate-rise-in"
            style={{ animationDelay: "0.18s" }}
          >
            OLALEYE
          </span>
        </h1>

        <div className="mt-5 max-w-xl animate-rise-in" style={{ animationDelay: "0.3s" }}>
          <p className="font-sans text-sm text-white sm:text-base">
            Website Designer · AI Automation &amp; Workflow Expert · Ecommerce &amp; Virtual Assistant
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
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:text-primary"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Vertical glass social rail, bottom-right (hidden on mobile) */}
      <div className="pointer-events-auto absolute bottom-10 right-8 z-20 hidden flex-col items-stretch gap-2 md:flex">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass animate-rise-in rounded-full px-5 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-primary"
            style={{ animationDelay: `${0.5 + i * 0.06}s` }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
