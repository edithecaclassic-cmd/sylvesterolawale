import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center font-display text-5xl text-foreground/5 md:text-8xl">
          REVIEWS
        </p>
        <div className="-mt-6 text-center md:-mt-12">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            WHAT CLIENTS SAY
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card animate-rise-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-heading text-sm font-bold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
