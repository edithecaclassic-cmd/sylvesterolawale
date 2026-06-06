import { ArrowRight } from "lucide-react";
import { socials } from "@/data/portfolio";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Available for New Project
        </span>
        <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-tight text-white md:text-8xl">
          HAVE A PROJECT IN MIND?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
          Together we can build something fast, bold, and unforgettable. Let's bring your
          ideas to life in a way that converts.
        </p>
        <a
          href="mailto:hello@sylvesterolaleye.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-105"
        >
          Contact Me <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <footer className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/15 px-5 pt-8 md:flex-row md:px-8">
        <span className="font-display text-2xl tracking-tight text-white">
          SYLVESTER OLALEYE
        </span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-primary"
            >
              {s}
            </a>
          ))}
        </div>
        <span className="text-xs text-white/50">
          © {new Date().getFullYear()} Sylvester Olaleye
        </span>
      </footer>
    </section>
  );
}
