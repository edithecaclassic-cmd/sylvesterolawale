import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroPlain from "@/assets/hero-plain-new.png.asset.json";
import heroAlt from "@/assets/hero-alt.png";
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
    if (maskRef.current) maskRef.current.style.setProperty("--r", on ? "200px" : "0px");
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-hero"
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
      {/* Full-bleed portrait background with spotlight reveal */}
      <div className="absolute inset-0 z-0">
        {/* bottom: glowing alt portrait, revealed through the mask hole */}
        <img
          src={heroAlt}
          alt="Sylvester Olaleye creative technology portrait"
          className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
          draggable={false}
        />
        {/* top: plain portrait with a transparent hole following the cursor */}
        <img
          ref={maskRef}
          src={heroPlain.url}
          alt="Sylvester Olaleye portrait"
          className="hero-mask absolute inset-0 h-full w-full object-cover object-[center_15%]"
          draggable={false}
        />
      </div>

      {/* gradient scrims for legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-black/75 to-transparent" />

      {/* Vertical social rail on the right */}
      <div className="pointer-events-auto absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col border-y border-l border-white/15 bg-black/20 backdrop-blur-sm md:flex">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors last:border-b-0 hover:bg-primary hover:text-primary-foreground"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 pt-28 md:px-8 md:pb-20">
        <h1 className="font-display text-[12vw] leading-[0.85] tracking-tight md:text-[8vw] lg:text-[6.5rem]">
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
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            View My Work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* mobile social row */}
        <div
          className="pointer-events-auto mt-8 flex flex-wrap gap-x-5 gap-y-2 md:hidden animate-rise-in"
          style={{ animationDelay: "0.5s" }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
