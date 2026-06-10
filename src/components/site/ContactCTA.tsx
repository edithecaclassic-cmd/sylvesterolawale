import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
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
    </section>
  );
}

