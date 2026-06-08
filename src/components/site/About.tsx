import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const highlights = [
  "Vibe Coder & Website Developer",
  "Ecommerce & Conversion Design",
  "AI Automation & Data Analytics",
];

export function About() {
  return (
    <section id="about" className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="font-display text-5xl text-foreground/5 md:text-8xl">ABOUT</p>
          <h2 className="-mt-6 font-display text-4xl tracking-tight md:-mt-12 md:text-6xl">
            BUILT TO MAKE BRANDS MOVE
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75">
            I am Sylvester Olaleye, a vibe coder and website developer helping ambitious
            brands turn ideas into fast, bold, and conversion-focused digital experiences.
            With an engineering background and a sharp eye for design, I blend structure with
            creativity to ship work that performs.
          </p>
          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                <Sparkles className="h-4 w-4 text-primary" />
                {h}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Let's Work Together <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-4xl text-primary">Fast</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Performance-first builds that load quick and rank well.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-4xl text-primary">Bold</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Distinct, editorial design that stands out instantly.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-4xl text-primary">Clear</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Smooth process with clear communication end to end.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-4xl text-primary">Converts</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Layouts tuned to turn visitors into real clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
